/* JAKINA · kapitulua «B6.5 - Ez-linealak eta egonkortasuna (8. gaia)» (03mm_03ezlinealak), desde edicion2/kapituluak/03mm_03ezlinealak/03mm_03ezlinealak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_03ezlinealak"] = {
 "gakoa": "03mm_03ezlinealak",
 "titulua": "JAKINA - B6 - Métodos matemáticos - 5/9",
 "azala": "B6.5 - No lineales y estabilidad (tema 8)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/03mm_03ezlinealak/03mm_03ezlinealak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Teoría de la estabilidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-epigrafea\"><em>Prediction is very difficult,<br>especially of the future.</em><br><span class=\"j-smallcaps\">Niels Bohr</span></span>"
    },
    {
     "mota": "testua",
     "html": "La dificultad de resolver ecuaciones no lineales<span class=\"j-oin\">[Como alguien ha señalado, hablar de ecuaciones no lineales puede ser tan engañoso como hablar de animales que no son elefantes. Igual que la mayoría de los animales no son elefantes, ser lineal es la excepción. Hay que reconocer, sin embargo, que en física es una excepción muy importante, donde muchas ecuaciones fundamentales, aunque no todas, son lineales y donde a menudo —casi por rutina— se recurre a aproximaciones lineales.]</span> lleva en muchos casos a recurrir a métodos aproximados, como los que hemos estudiado en el capítulo 7. Existe otra alternativa cuando basta cierta información cualitativa sobre las soluciones del sistema. Por ejemplo, a menudo es suficiente conocer la evolución del sistema en el límite <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math> , sobre todo si sabemos que el comportamiento asintótico se alcanza rápidamente tras un breve transitorio. Henri Poincaré<span class=\"j-oin\">[<strong>Jules Henri Poincaré</strong> (1854-04-29, Nancy, Francia; 1912-07-17, París). Trabajó en casi todas las ramas de las matemáticas, incluidas la geometría y la topología algebraicas, la variable compleja, la teoría de números y las ecuaciones diferenciales. Se interesó también por la electricidad, la telegrafía, la óptica, la capilaridad, la elasticidad, la teoría del potencial y la termodinámica. Publicó resultados que adelantaban algunos aspectos de la relatividad especial de Einstein. En la mecánica celeste su nombre es inseparable del problema de los tres cuerpos y de las órbitas planetarias, donde por primera vez consideró la posibilidad de un movimiento caótico en un sistema determinista, aunque este aspecto de su trabajo no recibió el interés que merecía hasta las décadas de los sesenta y setenta, cuando el campo resurgió y se acuñó el nombre de «caos determinista».]</span> planteó hacia 1880 el programa de clasificar cualitativamente los espacios de fases de los sistemas dinámicos, pero solo pudo llevarlo a cabo en los casos de dimensión uno y dos, y fue el primero en encontrar, en cuanto se supera la dimensión del plano, los primeros elementos de la sorprendente variedad de comportamientos dinámicos posibles. El gran desarrollo que ha tenido en los últimos veinte años lo que se ha dado en llamar <strong>ciencia no lineal</strong> demuestra el interés y la dificultad de la <strong>dinámica cualitativa</strong>, de la que Poincaré es el indiscutible «padre»."
    },
    {
     "mota": "testua",
     "html": "En este capítulo analizaremos uno de los conceptos más simples e importantes de la teoría cualitativa: la estabilidad de las soluciones especiales (en especial, de los puntos de equilibrio, que resultan muy familiares al lector con conocimientos de mecánica) frente a pequeñas variaciones de las condiciones iniciales. También se ha incluido un corto —pero esperamos que estimulante— apartado sobre <strong>caos determinista</strong>. El lector interesado podrá encontrar en la bibliografía de la página 321 buenas referencias que le permitirán profundizar en este aspecto."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Concepto de estabilidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos un sistema dinámico como los definidos en la página 79, <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> y una de sus soluciones <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>: <math display=\"block\"><mrow><msup><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Entre la información cualitativa que puede interesar conocer de un sistema dinámico, se encuentra la existencia y localización de sus soluciones notables y <strong>conjuntos invariantes</strong>. Un conjunto es invariante si tiene la propiedad de que cualquier solución que tenga un punto en él está completamente contenida dentro. El ejemplo más sencillo es un <strong>punto de equilibrio</strong> (también llamado <strong>punto estacionario</strong>, <strong>fijo</strong>, <strong>crítico</strong> o <strong>de reposo</strong>), que constituye por sí mismo una solución completa <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>*</mo></msup></mrow></math> = constante: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝒇</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> rekin</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Nos interesará en especial, aunque no exclusivamente, el caso de un punto fijo <strong>aislado</strong>, es decir, tal que no hay otros puntos fijos en un entorno del mismo. Otros ejemplos de conjuntos invariantes que consideraremos son las soluciones periódicas, en especial las aisladas (<strong>ciclos límite</strong>), y los <strong>atractores caóticos</strong>, que suelen contener un número infinito de órbitas periódicas inestables."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle los puntos de equilibrio de los sistemas dinámicos (a) <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math> y (b) <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Puesto que las condiciones iniciales de cualquier sistema físico son siempre conocidas aproximadamente, una pregunta relevante es qué pasa si se modifican ligeramente las mismas para obtener otras soluciones que ya no coinciden exactamente con la solución notable que nos interesa. Si la nueva solución se mantiene siempre en las proximidades de la de referencia, se dice que ésta es estable y si, además, se aproxima a ella, que es asintóticamente estable. Si por el contrario algunas o todas las soluciones perturbadas se escapan del entorno de la de referencia, por pequeño que sea, la solución especial es inestable y no suele ser físicamente realizable, excepto tal vez en circunstancias especiales. Consideremos el ejemplo del péndulo. Hay dos posiciones matemáticas de equilibrio: las verticales. Cuando se encuentra en la posición más baja, una pequeña perturbación, que cambia levemente las condiciones iniciales, no consigue que el sistema se aleje mucho de ese punto: simplemente oscila en sus proximidades y el punto (que corresponde a un mínimo de la energía potencial) es estable. Si, además, hay rozamiento, la energía mecánica disminuye monótonamente y el péndulo tiende hacia la posición de equilibrio, que es asintóticamente estable. La posición más alta, por el contrario, corresponde a un máximo de la energía potencial y cualquier perturbación, por pequeña que sea, hace que el péndulo se aleje de allí: es un punto de equilibrio inestable."
    },
    {
     "mota": "testua",
     "html": "Más precisamente, se dice que <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>  es <strong>estable según Liapunov</strong><span class=\"j-oin\">[<strong>Aleksandr Mikhailovich Liapunov</strong> (1857-06-16, Yaroslavl, Rusia; 1918-11-03, Odesa). Trabajó en ecuaciones diferenciales, teoría del potencial, probabilidades y aproximaciones. Se le recuerda en especial por sus estudios sobre la estabilidad del equilibrio y del movimiento en sistemas mecánicos, hidrodinámica y ecuaciones diferenciales, donde introdujo métodos y resultados nuevos, incluidas las funciones que llevan su nombre.]</span>  (o estable, para abreviar) si para todo <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> existe un <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> tal que cualquier otra solución <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cuya condición inicial cumpla <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> satisface <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>ε</mi></mrow></math> para todo <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> . En caso contrario, es decir, si existe un <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> tal que para <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> tan pequeño como se quiera hay al menos una solución que cumple <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>δ</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><mi>ε</mi></mrow></math> para algún <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> , se dice que la solución es <strong>inestable</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Punto de equilibrio (a) estable, (b) asintóticamente estable, (c) inestable",
     "src": "../media/irudiak/894d219d272cf0f0.svg",
     "zabalera": 455
    },
    {
     "mota": "testua",
     "html": "Se dice que la solución <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> es <strong>asintóticamente estable</strong> si es estable y existe un <math display=\"inline\"><mrow><msup><mi>δ</mi><mo>′</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> tal que si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><msup><mi>δ</mi><mo>′</mo></msup></mrow></math> entonces <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math></span>. Se dice también que <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> es un <strong>atractor</strong>, ya que atrae a las soluciones de su entorno. Si un punto de equilibrio es asintóticamente estable y, de hecho, todas las soluciones (y no solo las de un entorno) tienden hacia <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>, se habla de <strong>estabilidad a gran escala</strong>."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, la solución general de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>, de forma que para <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> todas las soluciones tienden a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, que es, por tanto, estable, asintóticamente estable y estable a gran escala. Para <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> todas las soluciones, excepto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> claro, tienden hacia el infinito, por lo que el origen es inestable. Para <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>, todos los puntos son de equilibrio estable, pero no asintóticamente estable. Cuando, como en este ejemplo, al ir variando un parámetro cambia la naturaleza (o el número) de puntos de equilibrio (o de otro tipo de conjuntos invariantes), se dice que se ha producido una <strong>bifurcación</strong>. En este ejemplo el <strong>parámetro de bifurcación</strong> es <math display=\"inline\"><mi>a</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Diagrama de bifurcación de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math>",
     "src": "../media/irudiak/46460f71001a2022.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "El <strong>diagrama de bifurcación</strong> se muestra en la figura 8.2, donde la posición (en este caso siempre el origen) del punto de equilibrio se muestra en función del parámetro de bifurcación, usándose línea continua para indicar estabilidad y línea a trazos para inestabilidad. También se indica la magnitud y la dirección (hacia el origen o el infinito) del campo vectorial <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>. Puede usarse esta última para explicar de modo gráfico la estabilidad del origen: como el sentido del movimiento de las soluciones próximas al punto de equilibrio será el indicado por el campo vectorial, se ve fácilmente si las pequeñas perturbaciones tienden a aumentar o a decrecer, es decir, si el equilibrio es estable o inestable. Nótese que la mencionada dirección se invierte precisamente en los puntos de equilibrio (en los dos ejes, en este caso), ya que el signo de la derivada cambia cuando la misma se anula, es decir, en los puntos críticos."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Utilice primero el método gráfico y luego la solución general para obtener el diagrama de bifurcación de los puntos de equilibrio de la ecuación <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Sistemas dinámicos autónomos bidimensionales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Durante una buena parte de este capítulo nos limitaremos a considerar un sistema dinámico bidimensional: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> Como se señaló en el apartado 4.1.1, la solución general del sistema dinámico define una congruencia en el espacio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; pero, como es autónomo, la proyección de aquélla sobre el espacio de fases <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una nueva congruencia, de forma que la proyección <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> de una solución es una curva paramétrica llamada <strong>trayectoria de fases</strong> o, a veces, <strong>órbita de fases</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Solución general del sistema autónomo y su proyección sobre el espacio de fases",
     "src": "../media/irudiak/a791bca1fc020212.svg",
     "zabalera": 254
    },
    {
     "mota": "testua",
     "html": "Para ver que la proyección de la solución general en el espacio de fases es una congruencia, es decir, que las trayectorias de fases no se cortan, basta ver que, si no nos interesa la dependencia de <math display=\"inline\"><mi>t</mi></math> de las trayectorias de fases, sino solo su estructura geométrica, la ecuación <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de esas curvas se obtiene sin más que eliminar el parámetro <math display=\"inline\"><mi>t</mi></math> de sus ecuaciones <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, lo que puede hacerse también en las ecuaciones diferenciales de la familia (8.5)–(8.6) sin más que dividirlas: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como consecuencia del teorema de existencia y unicidad de esta última ecuación, también la proyección de la solución general del sistema sobre el espacio de fases es una congruencia (en un dominio donde se cumplan las condiciones de regularidad apropiadas). Si escribimos la ecuación (8.7) de las trayectorias de fases en forma canónica, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>P</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>Q</mi></mfrac><mo>,</mo></mrow></math> aquéllas pueden interpretarse como las líneas de corriente del campo de velocidades <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> a ellas tangente, y avala el uso del término <strong>flujo</strong> para describir la aplicación que nos da la evolución del sistema en el plano de fases."
    },
    {
     "mota": "testua",
     "html": "Puesto que a lo largo de una solución no cambia la trayectoria de fases, la ecuación de las trayectorias de fases es una constante del movimiento del sistema dinámico y, además, no depende de la variable independiente <math display=\"inline\"><mi>t</mi></math>. Y recíprocamente, de acuerdo con lo visto en el apartado 4.2.2, una integral primera que no dependa de la variable independiente nos proporciona la ecuación de las trayectorias de fases de sistemas autónomos con <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> ecuaciones. Por tanto, en el caso de los sistemas estudiados aquí, calcular las trayectorias de fases es equivalente a hallar una constante del movimiento independiente de <math display=\"inline\"><mi>t</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Una solución de (8.9) y su proyección sobre el espacio de fases",
     "src": "../media/irudiak/ca219445790536ab.svg",
     "zabalera": 212
    },
    {
     "mota": "testua",
     "html": "Como ya vimos en la página 80, el sistema dinámico <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math> tiene como solución general (que en este caso incluye todas las soluciones, por ser la ecuación lineal) <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>, que es la congruencia de hélices de paso <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math> y radio <math display=\"inline\"><mi>R</mi></math> en el espacio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que aparece representada por uno de sus elementos en la figura 8.4. Como pasa siempre con las ecuaciones autónomas, hay simetría de traslación y puede elegirse una constante de integración, <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> en este caso, que indica únicamente el origen de la variable independiente: cambiar <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> equivale a trasladar la hélice en la dirección <math display=\"inline\"><mi>t</mi></math>, pero no modifica la proyección sobre el espacio de fases, que sigue siendo la circunferencia de radio <math display=\"inline\"><mi>R</mi></math> que se obtiene al eliminar <math display=\"inline\"><mi>t</mi></math> en la solución general (8.10), o resolviendo la ecuación de las trayectorias: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>.</mi></mrow></math> La congruencia de trayectorias de fases que se obtiene por ambos métodos es la familia de circunferencias descrita por la integral primera <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, que podía haberse obtenido por inspección a partir del sistema (8.9), sin más que multiplicar la primera ecuación por <math display=\"inline\"><mi>x</mi></math>, la segunda por <math display=\"inline\"><mi>y</mi></math> y sumar los resultados."
    },
    {
     "mota": "testua",
     "html": "Un ejemplo que tendremos siempre en mente será el de un sistema mecánico unidimensional en el que la segunda ley de Newton es la ecuación del movimiento correspondiente a una fuerza resultante<span class=\"j-oin\">[Para simplificar la notación en todo este capítulo elegimos la unidad de masa de forma que <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> en todos los sistemas mecánicos estudiados. (O, si se prefiere, utilizamos la fuerza y energía por unidad de masa).]</span> que depende de la posición y la velocidad, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> y que escribiremos en la notación de este capítulo —llamando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> a la velocidad— como <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Así el oscilador armónico amortiguado, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, será <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><mi>γ</mi><mi>y</mi></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere el oscilador armónico (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>). Encuentre la ecuación de las trayectorias de fases. ¿Cuál es el significado físico de esa integral primera? Dibuje el espacio de fases."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si el sistema es hamiltoniano, existirá una función de Hamilton<span class=\"j-oin\">[<strong>William Rowan Hamilton</strong> (1805-08-04, Dublín, Irlanda; 1865-09-02, Dublín). Además de sus contribuciones a la óptica y la astronomía, en física su nombre está ligado a tres formulaciones de la mecánica: el principio de Hamilton, las ecuaciones canónicas y la formulación de Hamilton-Jacobi. En matemáticas se le recuerda en especial por haber estudiado la primera álgebra no conmutativa: los cuaternios, que son una extensión de los números complejos, como estos lo son de los reales.]</span> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> —llamando <math display=\"inline\"><mi>y</mi></math> momento canónico— tal que <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Un caso más particular, pero no menos importante, es el de un campo de fuerzas unidimensional <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> en el que la fuerza deriva siempre de un potencial, <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> delarik</mtext></mrow><mo>,</mo></mrow></math> y que, como sistema dinámico, se escribe <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> y <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> admite hamiltoniano. Como en este capítulo seguiremos la costumbre de la teoría de sistemas dinámicos de llamar conservativo a lo que conserva el área (o el volumen, hipervolumen, etc.) del espacio de fases, los de tipo (8.17), que en mecánica se llaman conservativos, recibirán aquí el nombre explícito de <strong>sistemas mecánicos conservativos</strong>. Por supuesto, también son conservativos en el sentido que usaremos aquí y que se estudia en la sección siguiente."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Escriba la ecuación del péndulo matemático, <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> en la notación de los sistemas dinámicos. ¿Cuál es el hamiltoniano?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es hamiltoniano el sistema (8.9)? ¿Qué sistema físico puede representar?"
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Sistemas dinámicos conservativos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para estudiar la evolución del área del espacio de fases, estudiaremos cómo cambia a lo largo del flujo un dominio <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como el que se muestra en la figura 8.5. En otro «instante» genérico <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se hallará en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, siendo las funciones <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> las soluciones del sistema, <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> que satisfacen las condiciones iniciales <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mi>.</mi></mrow></math> En el instante <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> los puntos del dominio <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> habrán ido a parar a los de <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cuya área es"
    },
    {
     "mota": "irudia",
     "oina": "Evolución de un dominio del espacio de fases",
     "src": "../media/irudiak/ca23e39add3caf6c.svg",
     "zabalera": 292
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∫</mo><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>d</mi><msup><mi>x</mi><mo>′</mo></msup><mi>d</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msub><mo>∫</mo><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>,</mo></mrow></math> donde hemos hecho un cambio de variables para expresar la integral en términos de las coordenadas constantes <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: así la dependencia en <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> pasa del dominio de integración al integrando, donde es más fácil derivar para ver cómo varía el área: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>S</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><msub><mo>∫</mo><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>,</mo></mrow></math> donde el integrando <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la derivada del jacobiano: <math display=\"block\"><mrow><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>,</mo></mrow></math> que puede calcularse fácilmente usando (8.19) y (8.20): <math display=\"block\"><mrow><mi mathvariant=\"script\">𝒟</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math> Vemos, por tanto, que el integrando es la divergencia del campo vectorial <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Diremos que el sistema dinámico (8.5)–(8.6) es <strong>conservativo</strong> si mantiene invariante el área del espacio de fases, es decir, si la divergencia es nula: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>S</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El teorema de Liouville asegura que los sistemas hamiltonianos son conservativos (en cualquier dimensión, aunque aquí consideremos solo el plano), porque, como consecuencia de las ecuaciones canónicas de Hamilton (8.14), <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Lo que en mecánica se llaman sistemas mecánicos conservativos son hamiltonianos y, por tanto, conservan el área del espacio de fases."
    },
    {
     "mota": "testua",
     "html": "Si la divergencia es negativa, el área del espacio de fases decrece monótonamente y el sistema se llama <strong>disipativo</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcule la divergencia del campo vectorial asociado al oscilador armónico amortiguado, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. ¿Es conservativo?"
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Sistemas cuasilineales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supondremos que el sistema dinámico (8.5)–(8.6) tiene un punto de equilibrio aislado, que sin pérdida de generalidad podemos trasladar al origen: <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Si desarrollamos en serie de Taylor alrededor de ese punto fijo y usamos la notación <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo>,</mo><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo></mrow></math> el sistema dinámico se escribe como <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> donde <math display=\"inline\"><mi>F</mi></math> y <math display=\"inline\"><mi>G</mi></math> representan los términos de orden superior al primero. En general, llamaremos sistema cuasilineal al que puede expresarse como (8.29)–(8.30) mediante constantes <math display=\"inline\"><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> y funciones <math display=\"inline\"><mi>F</mi></math> y <math display=\"inline\"><mi>G</mi></math> que tienden a 0 más rápido que los términos lineales, <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y se llama <strong>aproximación lineal</strong>, <strong>primera aproximación</strong> o <strong>sistema linealizado</strong> al sistema lineal con coeficientes constantes que se obtiene al despreciar los términos no lineales: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mi>.</mi></mtd></mtr></mtable></math> Usando la matriz del sistema <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>, esta aproximación lineal se escribe como <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> en la notación matricial del capítulo 4."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las aproximaciones lineales alrededor de los puntos de equilibrio del péndulo matemático del ejercicio 8.4."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Supondremos que el origen es un punto fijo aislado también del sistema lineal: por tanto, la matriz del sistema es regular, <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>a</mi><mn>12</mn></msub><msub><mi>a</mi><mn>21</mn></msub><mo>≠</mo><mn>0</mn><mo>,</mo></mrow></math> y el origen es el único punto de equilibrio de la aproximación lineal, aunque el sistema cuasilineal puede tener otros. (Estudiaremos en el problema 8.3 el caso del sistema lineal con <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que las raíces características del origen de la aproximación lineal y, por definición, del sistema cuasilineal son <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>, siendo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≡</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr</mtext></mrow><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><mn>4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> el discriminante del sistema, y que los vectores propios se obtienen resolviendo los sistemas homogéneos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>11</mn></msub><mo>−</mo><msub><mi>k</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>k</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> Compruebe que la divergencia del campo vectorial <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> en el origen (y la de su aproximación lineal por doquier) es precisamente <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las raíces características del péndulo matemático del ejercicio 8.4."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Estabilidad lineal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>primer método de Liapunov</strong> o <strong>método de la estabilidad lineal</strong> consiste en estudiar la estabilidad de la aproximación lineal del sistema no lineal considerado, ya que las conclusiones cualitativas obtenidas para aquélla siguen siendo válidas para el sistema cuasilineal suficientemente cerca del punto de equilibrio, donde los términos no lineales son despreciables, <em>con alguna excepción</em>. Iremos discutiendo los distintos casos para el sistema cuasilineal y su primera aproximación."
    },
    {
     "mota": "testua",
     "html": "Consideraremos a menudo como ejemplo el sistema cuasilineal <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> y su primera aproximación, que se obtiene sin más que tomar <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que para el sistema (8.38)–(8.39) tenemos <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>d</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>r</mi></mrow></math> y que el vector propio correspondiente a cada valor característico <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>±</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>d</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> es <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>+</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Raíces características reales distintas"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> las dos raíces son reales y distintas, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></math>, por lo que si los vectores propios correspondientes a <math display=\"inline\"><msub><mi>k</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>k</mi><mn>2</mn></msub></math> son, respectivamente, <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>1</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>y</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> la solución general del sistema lineal es de la forma <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> de forma que <math display=\"block\"><mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup></mrow><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>k</mi><mn>2</mn></msub><mi>t</mi></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> Hay dos soluciones especiales de la aproximación lineal correspondientes a trayectorias de fase a lo largo de rectas paralelas a los vectores propios: <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><msub><mi>y</mi><mn>2</mn></msub><msub><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
    },
    {
     "mota": "azpititulua",
     "testua": "Raíces negativas"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, las dos raíces tienen el mismo signo que <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>. Por tanto, si <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math> tendremos <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math> y cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> todas las soluciones (8.42)–(8.43) de la ecuación lineal tienden al origen, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, por lo que el mismo es asintóticamente estable. Además, lo alcanzan con la misma pendiente, ya que de (8.44) se sigue que <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo></mrow></math> excepto, claro está, la trayectoria (8.46). Por ello, la forma de las trayectorias cerca del origen es la que puede verse en la figura 8.6 en un caso particular. Cuando las trayectorias cerca de un punto de equilibrio tienen esta estructura geométrica (casi todas las soluciones alcanzan el origen con la misma pendiente) se dice que el punto fijo es un <strong>nodo</strong>. En este caso, el origen es un nodo asintóticamente estable."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.38)–(8.39) con <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> y (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/de810b6abeee6043.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "En la parte derecha de la figura 8.6 puede comprobarse en un ejemplo lo que se demuestra con carácter general: en el caso cuasilineal no hay cambios cualitativos <em>suficientemente cerca del origen</em>, que sigue siendo un nodo asintóticamente estable. Esto va a ser característico: las conclusiones para la aproximación lineal —al menos en la mayoría de los casos— se mantienen cualitativamente para el sistema no lineal muy cerca del punto crítico, aunque a mayores distancias los términos no lineales se hacen sentir y deforman las trayectorias. En este ejemplo puede incluso observarse (¿dónde?) que hay otro punto de equilibrio que estaba ausente en la aproximación lineal."
    },
    {
     "mota": "azpititulua",
     "testua": "Raíces positivas"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> tendremos <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math> y cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> todas las soluciones (8.42)–(8.43) de la aproximación lineal van hacia el infinito y se alejan del origen, que será inestable. Para ver la estructura geométrica del punto inestable, basta darse cuenta de que lo dicho en el caso anterior sigue siendo cierto, pero en el infinito pasado en vez de serlo en el futuro (e intercambiando los índices 1 y 2). Así tenemos, en virtud de (8.44), <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>C</mi><mn>2</mn></msub><mo>≠</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "por lo que la geometría seguirá siendo la de la figura 8.6, pero con el sentido de recorrido de las trayectorias invertido e intercambiando las etiquetas <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Se puede demostrar que también será un nodo inestable para el sistema no lineal y su aspecto cualitativo el de la parte derecha de la mencionada figura, salvo por el sentido de recorrido."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.38)–(8.39) con <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math> y (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/5ed047111c58e064.svg",
     "zabalera": 350
    },
    {
     "mota": "azpititulua",
     "testua": "Raíces con signos opuestos"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, las dos raíces tienen signos opuestos, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math>, por lo que la solución particular <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> tenderá hacia el origen a lo largo de la recta <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mn>2</mn></msub><mi>/</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, que recibe el nombre de <strong>espacio estable</strong>, mientras que la que corresponde a <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> escapa del origen a lo largo de la recta <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, que es el <strong>espacio inestable</strong>. El resto de las soluciones de la ecuación lineal no van hacia el origen, sino que tienden asintóticamente al espacio inestable (estable) en el infinito futuro (pasado), ya que <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>y</mi><mn>2</mn></msub><msub><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.38)–(8.39) con <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/005641d76dc17cdc.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "Como todas las soluciones (8.42)–(8.43), menos las correspondientes a <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, escapan del origen, se trata de un punto de equilibrio inestable, y como hay una dirección estable excepcional se dice que se trata de un <strong>punto de silla</strong><span class=\"j-oin\">[Este nombre se refiere a una silla de montar. Imagine cómo se mueve una bolita en la misma.]</span> o"
    },
    {
     "mota": "testua",
     "html": "<strong>puerto</strong>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[Recuerde la forma de un puerto de montaña.]</span>. Un ejemplo puede verse en la figura 8.8, que también muestra cómo el sistema cuasilineal sigue teniendo un puerto inestable en el origen; pero ahora las soluciones estable e inestable no son rectas que van hasta el infinito, sino solo tangentes a los correspondientes espacios (y vectores propios) en el origen. Reciben los nombres de <strong>variedad estable</strong> y"
    },
    {
     "mota": "testua",
     "html": "<strong>variedad inestable</strong>"
    },
    {
     "mota": "testua",
     "html": "respectivamente. La variedad estable no es, en general, físicamente realizable porque cualquier perturbación hace que el sistema se aleje de ella y del punto de equilibrio, en vez de tender hacia él; pero juega un papel muy importante en las propiedades cualitativas globales del espacio de fases."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Raíces características complejas"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> las raíces características forman un par complejo conjugado <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>α</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math> con <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msqrt></mrow></math> y las soluciones serán, en la aproximación lineal, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> con <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mover><mrow><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mover><mrow><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub></mrow><mo accent=\"true\">¯</mo></mover></mrow></math>. Ambas coordenadas aparecen como el producto de una exponencial por un término periódico (véase, más adelante, el ejercicio 8.11). Será, en consecuencia, la exponencial —para ser más precisos el signo de <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>— lo que determine la estabilidad de las soluciones."
    },
    {
     "mota": "azpititulua",
     "testua": "Raíces complejas con parte real negativa"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, tendremos <math display=\"inline\"><mrow><mi>α</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y, como <math display=\"inline\"><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup></math> es decreciente, todas las soluciones (8.52)–(8.53) del sistema lineal tenderán hacia el origen, que será asintóticamente estable, pero no entrarán en él con una dirección prefijada, ya que <math display=\"block\"><mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow><mrow><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></mfrac></mrow></math> es periódico y la pendiente cambiará constantemente. Las órbitas tienen la forma de una espiral, por lo que el punto fijo se llama"
    },
    {
     "mota": "testua",
     "html": "<strong>foco</strong>"
    },
    {
     "mota": "testua",
     "html": "o <strong>punto espiral</strong> y la forma de las trayectorias puede verse en la figura 8.9 en un caso particular. Una vez más, el sistema cuasilineal tiene el mismo comportamiento cualitativo: el origen es un foco asintóticamente estable, aunque la hélice se deforma al alejarse del mismo y no tiene por qué continuar hasta el infinito."
    },
    {
     "mota": "azpititulua",
     "testua": "Raíces complejas con parte real positiva"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, como <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> las soluciones (8.52)–(8.53) escaparán del origen, que será inestable, y tendrá la estructura de un foco inestable ya que las soluciones tienen en este caso el mismo comportamiento para <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>∞</mi></mrow></math> que tenían en el anterior para <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>. También el sistema cuasilineal tiene un foco inestable y la apariencia de las soluciones es del tipo de las de la figura 8.9, pero con el sentido de recorrido invertido."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.38)–(8.39) con <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/1d186bb3eaed7247.svg",
     "zabalera": 349
    },
    {
     "mota": "azpititulua",
     "testua": "Raíces imaginarias puras"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>, las soluciones del sistema lineal son <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>y</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que las ecuaciones (8.55)–(8.56) describen elipses centradas en el origen del plano de fases."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las soluciones son, por tanto, periódicas y el origen, que es estable, pero no asintóticamente estable, recibe el nombre de"
    },
    {
     "mota": "testua",
     "html": "<strong>centro</strong>"
    },
    {
     "mota": "testua",
     "html": "o <strong>vórtice</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.38)–(8.39) con <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> y (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/3ebabe26cbda2358.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Sin embargo, en este caso, el análisis del sistema cuasilineal es más delicado debido a que, como el caso <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> es justo la frontera entre <math display=\"inline\"><mrow><mi>α</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, los términos no lineales, aun siendo pequeños, pueden tener la suficiente importancia como para cambiar su estabilidad y convertirlo bien en un foco asintóticamente estable o bien en un foco inestable, aunque también pueden dejarlo como un centro. En este caso, el análisis de la estabilidad lineal no es concluyente para el sistema cuasilineal y debe utilizarse otro método. En el caso de la figura 8.10 los términos no lineales convierten al centro en un foco inestable y para ver otro ejemplo consideraremos el sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mi>n</mi></msup><mo>,</mo></mtd></mtr></mtable></math> que corresponde a este mismo caso. La aproximación lineal es el sistema (8.9) y tiene como órbitas las circunferencias centradas en el origen (8.10). Como puede verse en la figura 8.11 y demostraremos en el problema 8.38, para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> el sistema no lineal sigue teniendo un centro en el origen; pero para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> el mismo es un foco asintóticamente estable."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.57)–(8.58) con (a) <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>",
     "src": "../media/irudiak/997986a1e43f7dfc.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "La razón matemática de las dificultades de este caso estriba en el hecho de que el punto de equilibrio es <strong>no hiperbólico</strong>: el espacio generado por los vectores propios correspondientes a valores propios con parte real no nula tiene una dimensión inferior (nula en este caso) a la del espacio de fases. La hiperbolicidad es una condición que interviene en la demostración de muchos resultados, que no son necesariamente ciertos si aquélla no se cumple. En particular, el"
    },
    {
     "mota": "testua",
     "html": "<strong>teorema de Grobman-Hartman</strong>"
    },
    {
     "mota": "testua",
     "html": ", que implícitamente hemos estado usando hasta ahora<span class=\"j-oin\">[Véase, por ejemplo, el texto de Walter [30].]</span>, asegura que un punto fijo hiperbólico tiene la misma estabilidad que el correspondiente a la aproximación lineal, ya que el espacio de fases en sus proximidades es <strong>topológicamente equivalente</strong> al de su aproximación lineal: existe entre ellos un homeomorfismo (una aplicación continua con inverso continuo). En otras palabras: uno es una versión deformada (sin rupturas) del otro. Pero esto no es necesariamente cierto alrededor de puntos no hiperbólicos: si hay algún valor propio con parte real nula, el tipo geométrico del punto puede cambiar y, si, además, no hay ninguna parte real positiva, puede incluso cambiar su estabilidad."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Raíces características reales iguales"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> existe una raíz característica real doble <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>. Además, como <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> es equivalente a <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mn>11</mn></msub><mo>−</mo><msub><mi>a</mi><mn>22</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msub><mi>a</mi><mn>12</mn></msub><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, hay dos casos posibles."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este caso, tenemos <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> y las dos ecuaciones lineales están desacopladas: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>y</mi><mi>.</mi></mrow></math> Las soluciones <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math> son semirrectas que van hacia el origen o provienen del mismo: <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mi>/</mi><msub><mi>C</mi><mn>1</mn></msub></mrow></math>. Por tanto, si <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>2</mn><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, todas las soluciones entran en el origen, pero con distintas pendientes, por lo que el mismo es un punto asintóticamente estable en forma de <strong>nodo propio</strong> o <strong>nodo en estrella</strong>. Si, por el contrario, <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>2</mn><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, todas las soluciones van al infinito y, de hecho, salen en el infinito pasado del origen, que es un nodo propio inestable. Un ejemplo es el sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>ε</mi><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> cuyo espacio de fases se ve en la figura 8.12."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.61)–(8.62) con (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> y (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/7c65170675209286.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "La estabilidad del sistema cuasilineal es la misma (es decir, inestabilidad para <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y estabilidad asintótica para <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), pero la forma del nodo puede variar, ya que, aunque puede seguir siendo un nodo propio, como en el caso de la figura 8.12, los términos no lineales pueden convertir al mismo en un nodo impropio (en que casi todas las soluciones entran o salen del mismo en la misma dirección) o en un foco. La razón es, de nuevo, que al tratarse de un caso límite los términos no lineales pueden tener influencia, aunque en este caso, como el sistema es hiperbólico, la estabilidad no cambia."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>21</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este caso no hay dos vectores propios para la primera aproximación, y la otra solución debe incluir términos del tipo <math display=\"inline\"><mrow><mi>t</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que en este caso si <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub></math> es un vector propio, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo>=</mo><mi>k</mi><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub></mrow></math>, existe una segunda solución linealmente independiente de la forma <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup></mrow></math> y la solución general es <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>y</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup><mi>.</mi></mtd></mtr></mtable></math> ¿Por qué no es esto cierto si <math display=\"inline\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Está claro que si <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, todas las soluciones tienden hacia el origen, que será asintóticamente estable, y, además, todas ellas entran en el punto fijo con la misma pendiente (de hecho, en la dirección del vector propio <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub></math>, ya que <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>). Se trata, por tanto, de un <strong>nodo degenerado</strong> asintóticamente estable. El sistema cuasilineal tendrá un punto fijo asintóticamente estable que puede seguir siendo un nodo, o deformarse a un foco debido a la influencia de los términos no lineales."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, todas las soluciones de la aproximación lineal tienden hacia el infinito y el origen será inestable. Como <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math> cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>∞</mi></mrow></math>, será un nodo inestable, mientras que el sistema cuasilineal tendrá un nodo inestable o un foco inestable."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.38)–(8.39) con <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> y (a) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, (b) <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/c31bdb84578c8ea0.svg",
     "zabalera": 349
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resumen: Clasificación de los puntos fijos"
    },
    {
     "mota": "testua",
     "html": "La clasificación de los puntos fijos aislados de un sistema cuasilineal plano está resumida en la figura 8.14, en la que no se han incluido los casos excepcionales <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math> que acabamos de estudiar, que, en el caso no lineal, se reducen a veces a los casos vecinos, aunque también pueden corresponder a un nodo en estrella o a uno degenerado. Tampoco se ha considerado el caso en que <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">det </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>, que estudiaremos en la aproximación lineal en el problema 8.3 y que para el sistema no lineal es no hiperbólico. Sí aparece, por el contrario, el otro caso no hiperbólico, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>ω</mi></mrow></math>, que es en la práctica mucho más frecuente ya que, por ejemplo, todos los sistemas mecánicos conservativos tienen tales puntos en los mínimos del potencial, como veremos más adelante en el apartado 8.7."
    },
    {
     "mota": "irudia",
     "oina": "Clasificación de los puntos fijos",
     "src": "../media/irudiak/0f06af2d80e2aade.svg",
     "zabalera": 359
    },
    {
     "mota": "testua",
     "html": "Como resumen de la figura 8.14 digamos que"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "si todas las partes reales de las raíces características son negativas, el punto fijo es un atractor, es decir, asintóticamente estable,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "basta que haya una raíz característica con parte real positiva para que el punto de equilibrio sea inestable, y"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "si la mayor de las partes reales es nula, el análisis de la aproximación lineal no basta para decidir la estabilidad del sistema cuasilineal: hace falta más información sobre el mismo."
     ]
    },
    {
     "mota": "testua",
     "html": "Este resumen resulta ser válido en cualquier dimensión, aunque la variedad de formas geométricas del flujo en las proximidades del punto de equilibrio aumenta con aquélla. Damos a continuación enunciado preciso del resultado, cuya demostración puede hallarse, por ejemplo, en el texto de Walter [30]."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Liapunov",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea un sistema de ecuaciones diferenciales <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mi>f</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>,</mo></mrow></math> que tiene un punto de equilibrio aislado <math display=\"block\"><mrow><msub><mi>f</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msubsup><mi>x</mi><mn>1</mn><mo>*</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>x</mi><mi>n</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mi>.</mi></mrow></math> Si el sistema es estacionario en la primera aproximación alrededor de ese punto: <math display=\"block\"><mrow><msub><mi>f</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>−</mo><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>R</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>r</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>R</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>r</mi></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>≡</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>j</mi></msub><mo>−</mo><msubsup><mi>x</mi><mi>j</mi><mo>*</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> entonces:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "si todos los valores propios de la matriz <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> tienen parte real negativa, el punto de equilibrio es asintóticamente estable, y"
       ]
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "si al menos un valor propio tiene parte real positiva, el punto de equilibrio es inestable."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nótese que suponemos que la matriz de la aproximación lineal —que si las funciones son regulares no es sino la matriz jacobiana <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><msub><mi>f</mi><mi>i</mi></msub><mi>/</mi><mi>∂</mi><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> evaluada en el punto fijo— es constante. Es importante recordar que, si la raíz característica con máxima parte real es imaginaria pura, este método no es concluyente para el sistema no lineal y debe recurrirse a alguna de las técnicas discutidas en los siguientes apartados."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Trayectorias de fases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En algunos casos sencillos, a partir de la ecuación diferencial (8.7) puede calcularse con relativa facilidad la ecuación de las trayectorias de fases (es decir, una integral primera que no dependa de la variable independiente) y, en tal caso, su análisis permite decidir la estabilidad de los puntos de equilibrio (u otros conjuntos invariantes)."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, el origen del siguiente sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>4</mn></msup><mo>,</mo></mrow></math> no es hiperbólico (¿por qué?), pero la ecuación de las trayectorias se resolvió en el problema 2.8: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mn>3</mn><mi>a</mi><mi>x</mi><mi>y</mi></mrow></math> . Cada trayectoria es un <strong>folium de Descartes</strong><span class=\"j-oin\">[<strong>René Descartes</strong> (1596-03-31, La Haye —hoy se llama Descartes—, Francia; 1650-02-11, Estocolmo, Suecia). La noticia del arresto de Galileo le hizo decidir no publicar su primer tratado importante: <em>Le Monde, ou Traité Lumière</em>. En su célebre <em>Discurso del método</em> defendió el uso de las matemáticas como vía para adquirir conocimientos seguros, y uno de sus apéndices, <em>La Géométrie</em>, estableció la conexión entre álgebra y geometría, lo que llamamos geometría cartesiana, e introdujo los sistemas de referencia. Otros aspectos de sus teorías sobre la mecánica, expuestos en varias obras, eran sin embargo erróneos. Además del folium, estudió los óvalos cartesianos, la cicloide, la espiral equiangular y el tridente de Newton.]</span> , cuya gráfica 8.15 se obtiene tras comprobar que admite la recta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> como asíntota y que es tangente a los ejes coordenados en el origen, o usando sus ecuaciones paramétricas: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3</mn><mi>a</mi><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> , <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>3</mn><mi>a</mi><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> . El espacio de fases aparece a la derecha de la figura mencionada."
    },
    {
     "mota": "irudia",
     "oina": "Hoja de Descartes y espacio de fases del sistema (8.69)",
     "src": "../media/irudiak/5f29aa7881dd62a4.svg",
     "zabalera": 347
    },
    {
     "mota": "testua",
     "html": "Con la ecuación de las trayectorias no sabemos cuál es su sentido de recorrido, ya que se ha eliminado la dependencia de <math display=\"inline\"><mi>t</mi></math>. No obstante, puede a menudo determinarse aquél sin mayor dificultad estudiando el sistema original en algunos puntos especialmente simples, ya que el sentido de recorrido variará de forma continua (donde el sistema dinámico sea regular) y, por ejemplo, solo puede invertirse en los puntos de equilibrio. En este ejemplo basta analizar lo que ocurre en los ejes cartesianos y las diagonales:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [
        "<strong>Leku geometrikoa</strong>",
        "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>",
        "<math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>"
       ],
       "lerroak": [
        [
         "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mn>0</mn></math>",
         "<math display=\"inline\"><mrow><mi>−</mi><msup><mi>y</mi><mn>4</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mn>0</mn></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>",
         "<math display=\"inline\"><mrow><mi>−</mi><msup><mi>x</mi><mn>4</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>",
         "<math display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>4</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta tabla es suficiente para concluir que los sentidos son los de la figura y que, por tanto, el origen es inestable, aunque de un modo diferente al de los puntos de equilibrio inestables vistos al estudiar la estabilidad lineal."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Discuta la estabilidad del origen del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> que tiene un punto de equilibrio no hiperbólico en el origen (¿por qué?), resolviendo la ecuación diferencial de las trayectorias."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Sistemas mecánicos unidimensionales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Vamos a considerar una partícula que se mueve en una dimensión bajo la acción combinada de una fuerza conservativa <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y una de rozamiento proporcional a la velocidad <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, con <math display=\"inline\"><mrow><mi>γ</mi><mo>≥</mo><mn>0</mn></mrow></math>. Si como se ha dicho antes se toma <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math>, la ecuación del movimiento es <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math>, que puede escribirse como un sistema si utilizamos la velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>v</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mi>v</mi><mi>.</mi></mtd></mtr></mtable></math> Este sistema no será lineal excepto en el caso del oscilador armónico (amortiguado) que corresponde a una energía potencial elástica <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que la energía mecánica <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> se conserva si <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> y decrece monótonamente en caso contrario, ya que <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Halle la divergencia del campo vectorial <math display=\"inline\"><mrow><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> para comprobar que es conservativo (disipativo) si <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los puntos de equilibrio vienen dados por las condiciones <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, es decir, por la anulación de la fuerza resultante y el reposo inicial, lo que solo sucede si la partícula está quieta en un extremo local del potencial. Veamos qué nos dice el primer método de Liapunov sobre la estabilidad del punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que la aproximación lineal de la ecuación (8.71) alrededor del punto de equilibrio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>*</mo></msup></mrow></math>, con <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, es la siguiente: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Escriba esta ecuación como un sistema bidimensional y compruebe explícitamente que tiene como matriz la matriz jacobiana del sistema no lineal (8.72)–(8.73) evaluada en <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math>. Concluya que las raíces características del punto de equilibrio son <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mi>γ</mi><mn>2</mn></mfrac><mo>±</mo><msqrt><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dado que <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, la estabilidad del punto de equilibrio es como sigue en función del tipo de extremo de <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<strong>Máximo local.</strong>     Si <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn></mrow></math>, las raíces características tienen signos opuestos, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math>, por lo que los máximos son siempre puertos inestables."
    },
    {
     "mota": "testua",
     "html": "<strong>Mínimo local.</strong>     Si <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math>, la ecuación (8.76) es la del oscilador armónico amortiguado, y sus raíces características son"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "complejas con parte real negativa, si el rozamiento es moderado (<math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>&lt;</mo><mn>4</mn><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), por lo que el punto de equilibrio será un foco asintóticamente estable, o"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "reales y negativas, si el sistema está sobreamortiguado (<math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>&gt;</mo><mn>4</mn><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), por lo que el punto fijo será un nodo asintóticamente estable. (Con amortiguamiento crítico (<math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), se tiene un foco o un nodo asintóticamente estable)."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Punto de inflexión o extremo de orden superior.</strong>     Si <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, las raíces características son <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mi>−</mi><mi>γ</mi></mrow></math>; el punto no es hiperbólico y el método de la aproximación lineal no permite extraer conclusiones."
    },
    {
     "mota": "irudia",
     "oina": "Energía potencial y espacio de fases del sistema (8.78) para <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>",
     "src": "../media/irudiak/78ae84cfc375cac8.svg",
     "zabalera": 275
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que la figura 8.16 refleja correctamente la energía potencial y el espacio de fases del sistema dinámico <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estas conclusiones siguen inalterables para los máximos en ausencia de rozamiento: los máximos locales son siempre puertos inestables, con una variedad estable normalmente irrealizable físicamente, ya que tienen dos raíces características de signos opuestos."
    },
    {
     "mota": "testua",
     "html": "Pero, si <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>, el caso de los mínimos (y el de los puntos de inflexión y extremos de orden superior para todos los valores de <math display=\"inline\"><mi>γ</mi></math>) corresponde a una parte real máxima nula, por lo que el estudio de la aproximación lineal no es concluyente, a menos claro que el sistema sea realmente lineal (un oscilador armónico), en cuyo caso el mínimo es un centro estable, pero no asintóticamente estable. Para analizar estos casos no hiperbólicos necesitamos más información, que nos viene proporcionada en este caso por la energía mecánica, cuya ley de conservación <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>E</mi><mo>,</mo></mrow></math> se deduce de (8.75) —o de (8.7), que aplicada a (8.72)–(8.73) da <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>v</mi></mrow></math>—. Esta primera integral independiente del tiempo es, en sistemas mecánicos conservativos, la ecuación de las trayectorias de fases, lo que nos permite desarrollar en este contexto preciso la idea, que habíamos introducido en el apartado 8.6, de usar dicha ecuación para discutir la estabilidad. Cerca de un extremo, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, podemos aproximar el potencial por su desarrollo de Taylor truncado, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>⋯</mi></mrow></math></span>. En consecuencia, la ecuación de la trayectoria será <math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>, que es la ecuación de una hipérbola para máximos (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn></mrow></math>), lo que corresponde al hecho de que los mismos son puertos, y la de una elipse para mínimos (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math>), lo que hace esperar que éstos sean centros estables para todo sistema mecánico conservativo<span class=\"j-oin\">[Puede encontrarse en [29] una demostración rigurosa de que, si las trayectorias son elipses en la aproximación cuadrática, también las auténticas trayectorias son cerradas en un entorno del punto de equilibrio. Además, este resultado, que se conoce con el nombre de <strong>teorema de Lagrange</strong> o <strong>principio de Lagrange</strong>, será demostrado de forma directa, en un contexto más general, en el apartado 8.8. La demostración rigurosa del mismo parece ser debida a Dirichlet. Véase la referencia [18].]</span>. De hecho, muy cerca de un mínimo cuadrático la energía potencial es una parábola, que corresponde a un oscilador armónico y cuyo espacio de fases es el de la figura G.5. El mismo resultado puede comprobarse"
    },
    {
     "mota": "irudia",
     "oina": "Diagrama de energía en las proximidades de un mínimo",
     "src": "../media/irudiak/0915d51515d27746.svg",
     "zabalera": 259
    },
    {
     "mota": "testua",
     "html": "mediante el razonamiento habitual en mecánica: cerca del mínimo el diagrama de energía es como se ve en la figura 8.17, que nos dice que el sistema está oscilando alrededor del punto de equilibrio <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math> entre los puntos de retroceso, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, sin tender hacia el punto de equilibrio ni alejarse, en promedio, del mismo: es un centro estable, pero no asintóticamente estable."
    },
    {
     "mota": "testua",
     "html": "En el caso de un punto de inflexión, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>‴</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, hay que ir un orden más lejos en el desarrollo para obtener <math display=\"block\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><msup><mi>V</mi><mo>‴</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Energía potencial y espacio de fases del sistema (8.78) para <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>",
     "src": "../media/irudiak/7954b9d2d3a20fad.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "que es la ecuación de una parábola semicúbica. Este tipo de punto se llama <strong>cúspide</strong>, es siempre inestable y su forma se muestra en el origen de la figura 8.18, donde también puede verse el espacio de fases de (8.78) cerca de un máximo y de un mínimo."
    },
    {
     "mota": "testua",
     "html": "En este caso conservativo las órbitas se mantienen siempre a energía constante y son cerradas cuando están acotadas. Hay un caso particular interesante en la figura 8.18: una de las variedades inestables del máximo es también variedad estable, es decir, una órbita que sale del puerto y vuelve a entrar en él. Se llama <strong>conexión homoclínica</strong> a una órbita de este tipo. (También se llama <strong>separatriz</strong>, porque separa órbitas cualitativamente diferentes: periódicas y no acotadas en este caso). Cuando <math display=\"inline\"><mi>γ</mi></math> deja de ser nulo la energía mecánica disminuye constantemente y tiende a la de un mínimo, o a <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>, por lo que puertos y cúspides siguen siendo del mismo tipo (inestables), mientras que los centros se estabilizan más y se convierten en focos (o, incluso, nodos) asintóticamente estables. Así se pasa de la figura 8.18 a la 8.16. En la figura 8.19, que también corresponde al último caso, vemos las variedades estable (es decir, la solución que entra en el punto de equilibrio en el límite <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>∞</mi></mrow></math>) e inestable (que sale de allí en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math>) del punto cúspide inestable que hay en el origen, así como la gráfica de la energía mecánica decreciente."
    },
    {
     "mota": "testua",
     "html": "En el caso del péndulo amortiguado la ecuación del movimiento es <math display=\"block\"><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>c</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que si se elige como unidad de tiempo <math display=\"inline\"><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></math> y se introduce <math display=\"inline\"><mrow><mi>γ</mi><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>/</mi><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>, la ecuación del péndulo en variables adimensionales es <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La energía potencial es <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y tiene un mínimo en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> y un máximo en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>±</mi><mi>π</mi></mrow></math> (tomaremos siempre <math display=\"inline\"><mrow><mi>−</mi><mi>π</mi><mo>≤</mo><mi>θ</mi><mo>≤</mo><mi>π</mi></mrow></math>), como se muestra en la parte superior de la figura 8.20."
    },
    {
     "mota": "irudia",
     "oina": "Variedades estable e inestable del punto cúspide",
     "src": "../media/irudiak/b3a3bb7cd76e5d38.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "Cuando no hay rozamiento, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>, el mínimo será un centro estable, pero no asintóticamente estable, y el máximo un puerto inestable con una conexión homoclínica que es a la vez la variedad estable y la inestable. Como con todos los mínimos cuadráticos, alrededor de <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> recuperamos el espacio de fases del oscilador armónico G.5."
    },
    {
     "mota": "irudia",
     "oina": "Energía potencial y espacio de fases del péndulo",
     "src": "../media/irudiak/07dd39741553c28f.svg",
     "zabalera": 317
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿A qué corresponde físicamente esta órbita homoclínica?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando se tiene en cuenta el rozamiento<span class=\"j-oin\">[Véase también el apartado 8.8.4.]</span>, el origen <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> aumenta su estabilidad y se convierte en un foco (o un nodo) asintóticamente estable que atrae casi todas las órbitas, mientras que <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>±</mi><mi>π</mi></mrow></math> sigue siendo un puerto inestable."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué órbitas no son atraídas por el atractor en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>? ¿A qué corresponden desde el punto de vista físico?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En sistemas dinámicos más generales no disponemos de la utilísima información proporcionada por la energía mecánica, pero Liapunov demostró que a veces puede hallarse una función más general que nos da información suficiente para decidir la estabilidad de un punto de equilibrio, incluso cuando falla la estabilidad lineal. Esa función generaliza algunas de las propiedades de la energía mecánica."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suponga que un punto de equilibrio aislado del sistema (8.72)–(8.73) se ha trasladado al origen, <math display=\"inline\"><mrow><msup><mi>x</mi><mo>*</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, y que se toma allí el origen de la energía potencial: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Demuestre que la energía mecánica <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> definida en el espacio de fases es definida positiva (negativa) en un entorno de un mínimo (máximo) aislado del potencial, <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> y que su derivada es semidefinida negativa <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Funciones de Liapunov",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>segundo método</strong> —o <strong>método directo</strong>— de Liapunov consiste en encontrar una función <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> definida y regular en un entorno del punto de equilibrio con propiedades adecuadas."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Liapunov",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que el origen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un punto de equilibrio aislado del sistema dinámico (8.5)–(8.6) y que existe una función continuamente diferenciable <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> definida en un entorno del origen que es definida positiva: <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mi>.</mi></mrow></math> Entonces,"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Si su derivada a lo largo del flujo es semidefinida negativa, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mn>0</mn><mo>,</mo></mrow></math> el origen es un punto de equilibrio estable (pudiera resultar también asintóticamente estable, pero ello no está garantizado por esta función <math display=\"inline\"><mi>U</mi></math>).",
        "Si la derivada es nula, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> el origen es un punto de equilibrio estable, pero no asintóticamente estable.",
        "Si la derivada es definida negativa, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mrow></math> el origen es un punto de equilibrio asintóticamente estable.",
        "Si la derivada es definida positiva, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mo>,</mo></mrow></math> el origen es un punto de equilibrio inestable."
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Notas"
    },
    {
     "mota": "testua",
     "html": "Una función que satisfaga uno de estos conjuntos de hipótesis se llama <strong>función de Liapunov</strong>. Nótese que cambiando <math display=\"inline\"><mi>U</mi></math> por <math display=\"inline\"><mrow><mi>−</mi><mi>U</mi></mrow></math> se obtiene un resultado idéntico intercambiando los adjetivos «positiva» y «negativa». Además, puesto que el origen es un punto de equilibrio, se cumple siempre <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, pero la condición <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> no es esencial: basta que <math display=\"inline\"><mi>U</mi></math> tenga un mínimo aislado en el punto de equilibrio para que la trasladada <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sea una función de Liapunov. Por tanto, también podemos enunciar el anterior teorema como sigue."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si la función <math display=\"inline\"><mi>U</mi></math> tiene un mínimo o un máximo aislado en el punto de equilibrio y su derivada <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> un extremo de tipo contrario, el punto de equilibrio es estable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si la función <math display=\"inline\"><mi>U</mi></math> es una integral primera y tiene un máximo o un mínimo aislado en el punto de equilibrio, éste es estable, pero no asintóticamente estable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si los extremos de la función y la derivada son aislados y de tipo contrario (uno máximo y otro mínimo), el equilibrio es asintóticamente estable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si la función y la derivada tienen ambos un máximo (o ambos un mínimo) aislado, el equilibrio es inestable."
     ]
    },
    {
     "mota": "testua",
     "html": "El teorema se extiende de forma obvia a sistemas con más de dos grados de libertad y puede enunciarse con hipótesis menos estrictas, pero más difíciles de comprobar en la práctica. (Véase, por ejemplo, el texto de Elsgoltz [3])."
    },
    {
     "mota": "testua",
     "html": "La idea fundamental del teorema es una generalización directa de lo que se hace con los diagramas de energía; pero, como ahora una de las variables dependientes no es necesariamente la derivada de la otra, habrá que considerar una dimensión adicional. Supongamos que una trayectoria de fases comienza muy cerca del mínimo de <math display=\"inline\"><mi>U</mi></math>, como se muestra en la figura 8.21. Si <math display=\"inline\"><mi>U</mi></math> no crece (porque su derivada no es positiva) la solución no se alejará del mínimo y el equilibrio será estable. Si <math display=\"inline\"><mi>U</mi></math> es una constante del movimiento, en promedio ni se acercará ni se alejará del origen: el equilibrio será estable, pero no asintóticamente estable. Si la derivada es negativa, <math display=\"inline\"><mi>U</mi></math> decrecerá monótonamente y la solución tenderá hacia el punto de equilibrio, que será asintóticamente estable. Si la derivada es positiva, la función crecerá y la solución se alejará del origen, que será inestable, aunque haya comenzado muy cerca del mismo."
    },
    {
     "mota": "irudia",
     "oina": "Trayectorias de fases y evolución de los correspondientes valores de <math display=\"inline\"><mi>U</mi></math>.",
     "src": "../media/irudiak/a1f7ec39270b546f.svg",
     "zabalera": 223
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Demostración del teorema"
    },
    {
     "mota": "testua",
     "html": "La demostración rigurosa del teorema se basa en la continuidad de <math display=\"inline\"><mi>U</mi></math> y su derivada. En el primer caso, debemos probar que para cada <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> existe un <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> tal que toda solución <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> cuyas condiciones iniciales estén dentro del círculo de radio <math display=\"inline\"><mi>δ</mi></math> centrado en el origen, <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math>, nunca cruce la circunferencia concéntrica de radio <math display=\"inline\"><mi>ε</mi></math>, <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>. Como <math display=\"inline\"><mi>U</mi></math> es continua y definida positiva, admitirá una cota inferior positiva <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>M</mi><mo>≤</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a lo largo de la circunferencia <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>. Como, además, es nula en el origen, habrá alrededor del mismo un círculo <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math> en cuyo interior <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>M</mi></mrow></math></span>. Si elegimos la condición inicial dentro de <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math>, el valor inicial de <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> será menor que <math display=\"inline\"><mi>M</mi></math> y, como la derivada a lo largo de la solución es negativa, <math display=\"inline\"><mi>U</mi></math> no crece y nunca podrá llegar a <math display=\"inline\"><mi>M</mi></math> ni a cualquiera de los otros valores que toma en la circunferencia <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>, que, por tanto, no será alcanzada. Nótese que suponemos implícitamente que <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math> está dentro del dominio de definición de <math display=\"inline\"><mi>U</mi></math>; si no fuera así bastaría asignarle el <math display=\"inline\"><mi>δ</mi></math> de un <math display=\"inline\"><mi>ε</mi></math> suficientemente pequeño como para que esa hipótesis se cumpla."
    },
    {
     "mota": "testua",
     "html": "Está claro que también en el segundo caso se aplica lo visto para el primero. Además, para cada solución que comienza en la región <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>δ</mi></mrow></math> se cumple <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>K</mi></mrow></math>, con una constante <math display=\"inline\"><mrow><mi>K</mi><mo>&gt;</mo><mn>0</mn></mrow></math> adecuada que depende de la solución. Como la función <math display=\"inline\"><mi>U</mi></math> es continua y definida positiva, puede hallarse un radio <math display=\"inline\"><mrow><mi>η</mi><mo>&gt;</mo><mn>0</mn></mrow></math> tal que para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>η</mi></mrow></math> se cumpla <math display=\"inline\"><mrow><mi>U</mi><mo>≤</mo><mi>K</mi><mi>/</mi><mn>2</mn></mrow></math>. Como a lo largo de la trayectoria tenemos <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math>, la solución no cruzará la circunferencia <math display=\"inline\"><msub><mi>C</mi><mi>η</mi></msub></math> y, por tanto, no tenderá hacia el punto de equilibrio."
    },
    {
     "mota": "testua",
     "html": "Puesto que <math display=\"inline\"><mi>U</mi></math> es definida positiva, para demostrar la estabilidad asintótica del tercer caso, bastará probar que <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math> cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>. Fuera del origen la función <math display=\"inline\"><mi>U</mi></math> es decreciente, ya que <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, y está acotada inferiormente por el valor nulo que toma en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto, tiende hacia algún límite no negativo: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mi>L</mi><mo>=</mo><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></msub><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn></mrow></math></span>. Para demostrar el resultado, procederemos por reducción al absurdo suponiendo que <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Como <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, podemos hallar un círculo de radio <math display=\"inline\"><mrow><mi>η</mi><mo>&gt;</mo><mn>0</mn></mrow></math> centrado en el origen en cuyo interior <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>L</mi></mrow></math>. Puesto que <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> es continua y definida negativa, está acotada superiormente por un valor negativo <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>≤</mo><mi>−</mi><mi>K</mi><mo>&lt;</mo><mn>0</mn></mrow></math> en el anillo <math display=\"inline\"><mrow><mi>η</mi><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>ε</mi></mrow></math>, donde está contenida completamente la solución para todo <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> en virtud del resultado demostrado antes para el primer caso. Por tanto, <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></msubsup><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi>t</mi><mo>≤</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>K</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>−</mi><mi>∞</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, lo que contradice la hipótesis de que <math display=\"inline\"><mi>U</mi></math> es definida positiva."
    },
    {
     "mota": "testua",
     "html": "En el cuarto caso debemos demostrar que, dados un <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y un <math display=\"inline\"><mrow><mi>δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> arbitrariamente pequeño, hay alguna solución que comienza dentro de <math display=\"inline\"><msub><mi>C</mi><mi>δ</mi></msub></math> y cruza <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>. Debido a la continuidad, tendremos que hay una cota <math display=\"inline\"><mrow><mi>M</mi><mo>≥</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>ε</mi></mrow></math>. Por otro lado, puesto que la derivada es continua y definida positiva, tendremos que para <math display=\"inline\"><mrow><mi>δ</mi><mi>/</mi><mn>2</mn><mo>≤</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>ε</mi></mrow></math> hay una cota positiva <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>K</mi><mo>≤</mo><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>. Por tanto, si una solución comienza en el anillo <math display=\"inline\"><mrow><mi>δ</mi><mi>/</mi><mn>2</mn><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>δ</mi></mrow></math>, entonces <math display=\"inline\"><mi>U</mi></math> crecerá monótonamente y la solución acabará por cruzar <math display=\"inline\"><msub><mi>C</mi><mi>ε</mi></msub></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplos"
    },
    {
     "mota": "testua",
     "html": "Analicemos el siguiente sistema dinámico: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math> El origen es un punto de equilibrio aislado, pero la aproximación lineal es nula y no nos da información. No existe ningún método general para hallar funciones de Liapunov, pero siempre puede ensayarse —sin ninguna garantía de éxito— una función con la estructura <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><mi>a</mi><msup><mi>y</mi><mrow><mn>2</mn><mi>m</mi></mrow></msup><mo>,</mo></mrow></math> que hace fácil ver si <math display=\"inline\"><mi>U</mi></math> es definida<span class=\"j-oin\">[También puede ensayarse una función cuadrática más general de <math display=\"inline\"><mi>x</mi></math> e <math display=\"inline\"><mi>y</mi></math> y usar el resultado del problema 8.12. En algunos casos puede usarse la física del problema para tratar de encontrar la función de Liapunov adecuada.]</span>. En este caso particular se obtiene <math display=\"block\"><mrow><mover><mi>U</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>4</mn><mi>n</mi><msup><mi>x</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><mi>y</mi><mo>+</mo><mn>2</mn><mi>m</mi><mi>a</mi><msup><mi>y</mi><mrow><mn>2</mn><mi>m</mi><mo>−</mo><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y podemos eliminar los dos términos con potencias impares de <math display=\"inline\"><mi>y</mi></math> (que no tienen signo definido) eligiendo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn></mrow></math>. Por tanto vemos que <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math> es definida positiva y su derivada <math display=\"inline\"><mrow><mover><mi>U</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>4</mn><msup><mi>y</mi><mn>4</mn></msup></mrow></math> semidefinida negativa y, en consecuencia, el origen es un punto de equilibrio estable. Como la derivada no es definida, esta función de Liapunov no nos permite decidir si, además, es asintóticamente estable o no. Para ello haría falta otra función de Liapunov, pero como ya se ha indicado antes son excepcionales los casos en que podemos construirlas. El análisis numérico de la figura 8.22 muestra que, aunque la función de Liapunov hallada no permite demostrarlo, el origen es en este caso no solo estable sino también asintóticamente estable ya que todas las trayectorias entran en el origen paralelas al eje <math display=\"inline\"><mi>y</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Es fácil de entender lo que sucede en este ejemplo si hacemos uso de unos razonamientos cualitativos elementales. Si la condición inicial se elige en el eje <math display=\"inline\"><mi>y</mi></math>, tendremos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> y el punto se moverá a lo largo de dicho eje y hacia el origen, ya que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> irá decreciendo debido a que en tal caso <math display=\"inline\"><mi>y</mi></math> y su derivada <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup></mrow></math> son de signos opuestos. Fuera del eje vertical, si el sistema comienza en el semiplano <math display=\"inline\"><mrow><mi>y</mi><mo>≤</mo><mn>0</mn></mrow></math>, se tiene <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> e <math display=\"inline\"><mi>y</mi></math> irá creciendo hasta que el punto llegue al semiplano <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, de donde no volverá al inferior, ya que allí <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>. Cuando el punto está en el semiplano <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, los valores <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> tienen signo contrario y, por ello, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> irá decreciendo: el punto tiende hacia el semieje vertical positivo, y al llegar muy cerca del mismo se tendrá <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>≈</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>, por lo que se moverá hacia el origen."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Use la función de Liapunov <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> para discutir la estabilidad del origen de los siguientes sistemas: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mrow><mn>5</mn><mi>.</mi></mrow></msup></mrow></math> Compruebe que el método de la estabilidad lineal no es de utilidad en estos dos casos."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases del sistema (8.94).",
     "src": "../media/irudiak/616fa37255c372a2.svg",
     "zabalera": 280
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistemas mecánicos unidimensionales disipativos"
    },
    {
     "mota": "testua",
     "html": "Debe notarse que en el caso particular de los sistemas mecánicos disipativos (8.71) los mínimos son asintóticamente estables si <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> no como consecuencia del método directo de Liapunov —ya que la derivada de la función de Liapunov que es la energía mecánica es solo semidefinida negativa—, sino debido a su primer método. Supongamos que la función <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene un mínimo aislado en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>*</mo></msup></mrow></math> y que en el sistema mecánico algo más general <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> la función <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es positiva y se anula solo en el punto <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La derivada de la energía mecánica es, por tanto, semidefinida negativa: <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>≤</mo><mn>0</mn></mrow></math>. Como consecuencia del teorema de Liapunov el citado punto es estable; pero, puesto que salvo en el punto de equilibrio se tiene <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>, desde un punto de vista físico esperamos que la energía mecánica decrezca monótonamente y que la solución tienda hacia el punto de equilibrio, que será asintóticamente estable. Puede verse en [18] o en [30] la demostración de que de hecho así sucede. Este resultado es consecuencia de la ecuación de la energía mecánica de un sistema mecánico: con otras funciones de Liapunov, sin embargo, de una derivada semidefinida negativa no se sigue necesariamente la estabilidad asintótica."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Discuta la estabilidad de los osciladores no lineales <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mo>+</mo><mi>ω</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mi>γ</mi></math> cuando la constante es positiva. ¿Qué ocurre si <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistemas mecánicos unidimensionales conservativos"
    },
    {
     "mota": "testua",
     "html": "Una función de Liapunov del segundo tipo es una integral primera y, como vimos en el apartado 4.1.1, proporciona la ecuación de las trayectorias de fases. El ejemplo más importante, aunque no el único, es el de los sistemas mecánicos conservativos (8.15) que hemos analizado antes: si hay un mínimo aislado de la energía potencial en <math display=\"inline\"><msup><mi>x</mi><mo>*</mo></msup></math>, el punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> del espacio de fases corresponde a un mínimo de la energía mecánica y, como ésta es una constante del movimiento, el punto será un centro estable."
    },
    {
     "mota": "testua",
     "html": "El análisis geométrico que para este caso particular hicimos en el apartado 8.7 puede extenderse directamente al caso general. Para simplificar la notación supondremos que la función <math display=\"inline\"><mi>U</mi></math> tiene un máximo o un mínimo en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y que allí elegimos también <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Haciendo un desarrollo en serie de Taylor alrededor del punto de equilibrio, la ecuación de la trayectoria de fases que corresponde al valor <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math> es <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>⋯</mi><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>. Por hipótesis, el extremo que hay en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un mínimo o un máximo; por tanto, se cumple la siguiente condición: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Si esto se cumple, la ecuación cuadrática <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>U</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>K</mi><mo>,</mo></mrow></math> que debe ser una buena aproximación a la de las trayectorias de fases suficientemente cerca del punto de equilibrio, es la de una elipse. Por consiguiente, esperamos que el punto de equilibrio sea un centro, que es precisamente lo que demuestra el segundo caso del teorema de Liapunov."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Centros no lineales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los puntos de equilibrio no hiperbólicos que más a menudo aparecen en la práctica son los que corresponden a centros en la aproximación lineal. Las raíces características son imaginarias y, como vimos en el apartado 8.5.2, el punto de equilibrio del sistema no lineal puede también ser un foco asintóticamente estable o inestable; e incluso a veces —como en el caso del ejercicio 8.21— puede encontrarse una función de Liapunov apropiada que demuestra que es de tal tipo. Pero en este apartado queremos analizar los centros no lineales: ¿cómo puede probarse que lo que es un centro en la aproximación lineal es del mismo tipo en el sistema completo?"
    },
    {
     "mota": "testua",
     "html": "Hemos visto un caso en el anterior apartado: como consecuencia del teorema de Liapunov, si una integral primera del sistema tiene un mínimo o un máximo aislado en el punto de equilibrio, este último es un centro. Eso es lo que sucede en los mínimos de la energía potencial de sistemas mecánicos conservativos y en algunos otros casos, como muestra el siguiente ejemplo."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las raíces características del origen del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> y concluya que el mismo es un centro en la aproximación lineal. Pruebe que la función <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> es una integral primera y tiene un mínimo en el origen. ¿Cómo serán las trayectorias de fases muy próximas al origen?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En los siguientes apartados estudiaremos otros casos habituales de centros no lineales."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistemas dinámicos conservativos"
    },
    {
     "mota": "testua",
     "html": "Por definición en los sistemas dinámicos conservativos se conserva el área del espacio de fases. Por tanto, en tales sistemas los focos y nodos están excluidos, porque en sus proximidades el área del espacio de fases crece cuando son inestables y disminuye cuando son asintóticamente estables. Como en la aproximación lineal de este tipo de sistemas se tiene <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math></span>, el punto de equilibrio solo puede pertenecer a una de las siguientes categorías, tanto en la aproximación lineal como en el sistema completo:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, un centro estable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, un puerto inestable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Cuando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>, el punto de equilibrio de la aproximación lineal no es aislado (véase el problema 8.3) y hay que usar otro tipo de método para estudiar el equilibrio del sistema completo."
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el sistema (8.104) es conservativo. Compruebe que el espacio de fases es el de la figura 8.23."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases del sistema (8.104).",
     "src": "../media/irudiak/662a4f3249a7242b.svg",
     "zabalera": 289
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistemas dinámicos hamiltonianos"
    },
    {
     "mota": "testua",
     "html": "Puesto que de acuerdo con el teorema de Liouville los sistemas hamiltonianos son conservativos, en los mismos los centros lineales son siempre centros del sistema completo."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el sistema (8.104) es hamiltoniano."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistemas dinámicos reversibles"
    },
    {
     "mota": "testua",
     "html": "Analicemos el siguiente sistema mecánico unidimensional cuando <math display=\"inline\"><mi>γ</mi></math> es constante: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>n</mi></mrow></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> El origen de este oscilador no lineal es un centro lineal, ya que la aproximación lineal es el oscilador armónico."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><mi>γ</mi><msup><mi>y</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup></mrow></math> asociado a la ecuación (8.106) no es conservativo (ni, por tanto, hamiltoniano) y que no puede usarse la energía mecánica como función de Liapunov."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para analizar la estabilidad de este punto de equilibrio no hiperbólico usaremos la simetría del sistema; en concreto, el sistema (8.107) es invariante frente a la inversión temporal: si hacemos el cambio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el propio sistema no cambia. Por tanto, cada trayectoria de fases tiene una «gemela», que se obtiene eligiendo el sentido de recorrido contrario tras hacer la reflexión de la primera alrededor del eje <math display=\"inline\"><mi>x</mi></math>. Está claro que alrededor de un foco el espacio de fases"
    },
    {
     "mota": "irudia",
     "oina": "Una trayectoria de fases de (8.107) y su «gemela».",
     "src": "../media/irudiak/bd179ea3825071e0.svg",
     "zabalera": 223
    },
    {
     "mota": "testua",
     "html": "no puede tener este tipo de simetría; por tanto, los focos están excluidos y si en la aproximación lineal hay un centro lo mismo pasará en el sistema completo."
    },
    {
     "mota": "testua",
     "html": "En un contexto general, supongamos que una transformación <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> definida en el espacio de fases es tal que aplicada dos veces restituye el punto original: <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math>. Si el sistema dinámico es invariante frente a la transformación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mo>,</mo><mi mathvariant=\"script\">ℛ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, decimos que es <strong>reversible</strong> y los puntos que son centros en la aproximación lineal son del mismo tipo para el sistema completo. (Véase el texto [28])."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el sistema (8.104) es reversible. ¿Cuál es la simetría que presenta el espacio de fases?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como caso particular, vemos de nuevo que los mínimos de la energía potencial del sistema mecánico conservativo <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> corresponden a centros, porque dichos sistemas, además de ser hamiltonianos y conservativos, son reversibles."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Ciclos límite",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las soluciones periódicas, que en el espacio de fases dan lugar a órbitas cerradas, no son extrañas. Por ejemplo, una partícula clásica atrapada en un pozo de potencial describe una órbita periódica alrededor del mínimo. En estos casos de oscilaciones alrededor del punto de equilibrio tenemos toda una familia de soluciones periódicas, pero también es posible la existencia de un <strong>ciclo límite</strong>, que es por definición una órbita periódica aislada, es decir, tal que ninguna condición de un entorno suficientemente pequeño de ella dé lugar a otra órbita cerrada. Veamos un ejemplo: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>λ</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>+</mo><mi>λ</mi><mi>y</mi><mo>−</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Este sistema dinámico es un ejemplo académico y, por ello, mucho más simple de lo que aparenta."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que el sistema (8.108)–(8.109) se escribe en coordenadas polares como <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>λ</mi><mi>r</mi><mo>−</mo><msup><mi>r</mi><mn>3</mn></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Vemos, por tanto, que el sistema se desacopla en estas coordenadas y la evolución angular es trivial, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>. Comencemos estudiando la estabilidad del punto de equilibrio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que corresponde al punto fijo <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> de (8.110)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que los exponentes característicos del origen de (8.108)–(8.109) son <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>λ</mi><mo>±</mo><mi>i</mi></mrow></math>, mientras que el de (8.110) es <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>λ</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.108)–(8.109) para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>.",
     "src": "../media/irudiak/1a1ee700014b7ce5.svg",
     "zabalera": 162
    },
    {
     "mota": "testua",
     "html": "Por los dos caminos encontramos que el origen es un foco asintóticamente estable para el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> —como se ve en la figura 8.25— y un foco inestable para el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> , es decir, que se produce una bifurcación —llamada <strong>bifurcación de Hopf</strong><span class=\"j-oin\">[<strong>Heinz Hopf</strong> (1894-11-19, Breslau, Alemania —hoy se llama Wrocław y está en Polonia—; 1971-06-03, Zollikon, Suiza). Trabajó sobre todo en topología algebraica. Estudió los campos vectoriales y encontró una fórmula para la curvatura integral. También extendió el teorema del punto fijo de Lefschetz, estudió las clases de homotopía y definió el invariante que lleva su nombre.]</span> — al cambiar la estabilidad del punto de equilibrio para el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> ."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué tipo de punto de equilibrio es el origen de (8.108)–(8.109) para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pero en esa bifurcación ha pasado algo más ya que la ecuación radial (8.110) ha pasado de tener un punto fijo a tener dos: <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> que existe siempre y <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> que nace justo cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, como se indica en su diagrama de bifurcación de la figura 8.26, donde el punto asintóticamente estable aparece en línea continua y el inestable a trazos. En <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> la desestabilización de <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> coincide con el nacimiento de un nuevo punto asintóticamente estable."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle el exponente característico del punto de equilibrio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> de la ecuación (8.110) y demuestre que es asintóticamente estable. Utilice el método gráfico esbozado en el apartado 8.1 para comprobar por otra vía el diagrama de bifurcación de la figura 8.26."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Diagrama de bifurcación de la ecuación (8.110).",
     "src": "../media/irudiak/8a00dfc0713b9b97.svg",
     "zabalera": 155
    },
    {
     "mota": "testua",
     "html": "Ahora bien, el punto fijo <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> de la ecuación (8.110) es una órbita cerrada (circular, ya que <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>λ</mi></mrow></math>) y, por tanto, periódica, del sistema bidimensional (8.108)–(8.109). Como, además, es aislada, se trata de un ciclo límite."
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math> es asintóticamente estable, también lo será el ciclo límite <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>λ</mi></mrow></math>, que resultará ser un atractor unidimensional, como se ve en la figura 8.27."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases de (8.108)–(8.109) para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>.",
     "src": "../media/irudiak/59f03b2bcfcaac55.svg",
     "zabalera": 211
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución explícita de (8.110) y demuestre que todas las soluciones menos una (¿cuál?) tienden hacia el ciclo límite cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como veremos en el problema 8.16, es posible tener ciclos límite inestables (que repelen trayectorias de su entorno), e incluso semiestables, es decir, que atraen a las trayectorias que están suficientemente cerca en su interior y repelen a las próximas por el exterior, o al revés."
    },
    {
     "mota": "testua",
     "html": "Existe una teoría análoga a la de la aproximación lineal de Liapunov para ciclos límite llamada <strong>teoría de Floquet</strong>, pero el cálculo de los exponentes de Floquet, que son el análogo de los exponentes característicos, es mucho más difícil en la práctica, salvo por el hecho de que uno siempre es nulo: el que corresponde a la dirección tangente al ciclo. En el sistema trivial (8.108)–(8.109) este exponente nulo corresponde a la ecuación <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>1</mn></mrow></math> que describe, también, la evolución a lo largo del ciclo mientras que el otro es <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>λ</mi></mrow></math> (¿por qué?) y corresponde a la dirección radial."
    },
    {
     "mota": "testua",
     "html": "Mencionaremos un justamente famoso teorema que, esencialmente, asegura que en sistemas autónomos bidimensionales no puede ocurrir más que lo siguiente: la solución puede tender hacia un punto fijo (que puede ser el infinito), o ser periódica, o tender hacia una solución periódica."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Poincaré-Bendixson",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea una región compacta (cerrada y acotada) <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> del plano que no contiene ningún punto crítico del sistema dinámico (8.5)–(8.6). Si una trayectoria permanece en <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> para todo <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>, o bien es cerrada (periódica) o bien tiende hacia una trayectoria cerrada. En cualquier caso hay en <math display=\"inline\"><mi mathvariant=\"script\">ℛ</mi></math> una trayectoria periódica."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Una demostración de este resultado puede encontrarse en el libro de Hirsch y Smale [19], por ejemplo."
    },
    {
     "mota": "testua",
     "html": "Para terminar este apartado, consideraremos la <strong>ecuación generalizada de Liénard</strong> en un modelo general de oscilador que incluye los osciladores lineales y el de van der Pol y que tiene la estructura <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Si definimos <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>teorema de Levinson-Smith</strong>"
    },
    {
     "mota": "testua",
     "html": "—que también se conoce con el nombre de <strong>teorema de Liénard</strong> y cuya demostración puede encontrar el lector interesado en el texto de Simmons [8]— asegura que"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "si <math display=\"inline\"><mi>f</mi></math> es par y con derivada continua,"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "si existe una constante <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> tal que"
     ]
    },
    {
     "mota": "testua",
     "html": "para <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "para <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es positiva, creciente monótona y <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></msub><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math>,"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "si <math display=\"inline\"><mi>g</mi></math> es impar, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y tiene derivada continua, y"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></msub><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math>,"
     ]
    },
    {
     "mota": "testua",
     "html": "entonces la ecuación generalizada de Liénard (8.112) tiene una única solución periódica, que encierra al origen, y todas las demás soluciones, con excepción del punto fijo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> claro, tienden en espiral hacia ella."
    },
    {
     "mota": "testua",
     "html": "Un ejemplo menos trivial de ciclo límite lo vimos en el capítulo 7 al estudiar el oscilador de van der Pol (7.35). Lo podemos observar, junto con algunas órbitas que a él tienden, en la figura 8.28 para un valor de <math display=\"inline\"><mi>ε</mi></math> demasiado grande como para que el estudio perturbativo de la sección 7.4.2 sea directamente aplicable: su existencia se demuestra usando el teorema que acabamos de ver."
    },
    {
     "mota": "irudia",
     "oina": "El ciclo límite del oscilador de van der Pol para <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>2</mn></mrow></math>.",
     "src": "../media/irudiak/2ce8bf863527fb29.svg",
     "zabalera": 214
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que la ecuación de van der Pol (7.35) satisface, para <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, las hipótesis del teorema de Levinson-Smith, por lo que tiene un ciclo límite asintóticamente estable."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Ampliación en otro producto",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los sistemas de más dimensiones, el caos determinista y los atractores extraños (ampliación fuera del temario) se encuentran en el producto de anexo <code>03mm_08kaosa</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": "Ecuación de Verhulst<span class=\"j-oin\">[<strong>Pierre François Verhulst</strong> (1804-10-28, Bruselas; 1849-02-15, Bruselas). Aunque comenzó trabajando en teoría de números, pronto se interesó por la estadística social, donde hizo investigaciones importantes sobre la ley de crecimiento de la población, que antes se creía geométrico. Propuso y estudió la ecuación no lineal que lleva su nombre, que describe la evolución de una población biológica.]</span>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice la estabilidad de los puntos de equilibrio de <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ε</mi><mi>x</mi><mo>−</mo><mi>σ</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math> para los distintos valores de los parámetros <math display=\"inline\"><mi>ε</mi></math> y <math display=\"inline\"><mi>σ</mi></math>."
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
       "html": "Demuestre que una trayectoria que parte de un punto no crítico del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> no puede alcanzar un punto de equilibrio en un intervalo finito de tiempo."
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
       "html": "Discuta la estabilidad del origen del sistema lineal <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mo>,</mo></mrow></math> cuando <math display=\"inline\"><mrow><msub><mi>a</mi><mn>11</mn></msub><msub><mi>a</mi><mn>22</mn></msub><mo>−</mo><msub><mi>a</mi><mn>12</mn></msub><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "Considere, para distintos valores del parámetro <math display=\"inline\"><mi>ε</mi></math>, la estabilidad del origen de <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ε</mi><mi>x</mi><mo>+</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>ε</mi><mi>y</mi><mi>.</mi></mrow></math>"
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
       "html": "Discuta la estabilidad de todos los puntos críticos de <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mi>y</mi><mo>−</mo><mi>x</mi><mi>y</mi><mo>−</mo><mn>2</mn><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Puerto no lineal",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el siguiente sistema y su aproximación lineal tienen un puerto inestable en el origen: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Halle los espacios estable e inestable del punto de equilibrio en el caso de la aproximación lineal. Considere ahora el sistema no lineal, demuestre que la recta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y la parábola <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>3</mn></mrow></math> son conjuntos invariantes y concluya que son, respectivamente, las variedades estable e inestable del origen. Dibuje los espacios de fases de ambos sistemas."
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
       "html": "Analice el carácter del origen de los siguientes sistemas no lineales: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (a) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (b) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "Investigue la estabilidad del punto de equilibrio de <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi><mi>.</mi></mrow></math>"
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
       "html": "Analice la estabilidad de la solución trivial de <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
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
       "html": "Demuestre que si <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math> para <math display=\"inline\"><mrow><mi>i</mi><mo>≠</mo><mi>j</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>a</mi><mrow><mi>i</mi><mi>i</mi></mrow></msub><mo>&lt;</mo><mn>0</mn></mrow></math>, entonces la solución trivial del sistema lineal <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>j</mi></msub></mrow></math> es estable, ya que <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msubsup><mi>x</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> es una función de Liapunov."
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
       "html": "¿Para qué valores del parámetro <math display=\"inline\"><mi>α</mi></math> es estable el punto fijo de <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>α</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>α</mi><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>α</mi><mi>z</mi><mo>−</mo><mi>x</mi><mi>?</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Formas definidas",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que la función <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mi>x</mi><mi>y</mi><mo>+</mo><mi>c</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> es definida positiva si y solo si <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>a</mi><mi>c</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. ¿Cuál es la condición necesaria y suficiente para que sea definida negativa?"
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
       "html": "Analice la estabilidad de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
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
       "html": "Demuestre mediante una función de Liapunov adecuada que el origen del sistema de ecuaciones <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es asintóticamente estable (inestable) si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>) en un entorno del origen, aunque <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se anule. ¿Cuál será la geometría de las trayectorias en las proximidades del punto crítico?"
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
       "html": "Considere la información que las funciones de Liapunov <math display=\"block\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup></mrow></math> dan sobre la estabilidad del origen del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math> ¿Cómo podía haberse establecido más fácilmente dicha estabilidad?"
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
       "html": "Demuestre que, si <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>≡</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, el sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mfrac><mi>x</mi><mi>r</mi></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><mi>y</mi><mi>r</mi></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene soluciones periódicas correspondientes a las raíces de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Cuál es la dirección de recorrido de las trayectorias cerradas? ¿Cómo se estudiaría su estabilidad? Determine todas las soluciones periódicas del anterior sistema y discuta su estabilidad, cuando <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>r</mi><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
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
       "html": "Halle los puntos críticos del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Determine la ecuación de las trayectorias y realice un gráfico del espacio de fases."
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
       "html": "Halle la ecuación de las trayectorias y dibuje el espacio de fases de la ecuación <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math>. ¿Qué pasa si se añade al primer miembro un término disipativo <math display=\"inline\"><mrow><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> con <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Duffing",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere el origen de la ecuación <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn></mrow></math> con <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Dibuje su variedad estable y compruebe que es la frontera entre las cuencas de atracción de los dos atractores."
      },
      {
       "mota": "testua",
       "html": "<em>Nota:</em> Se llama <strong>cuenca de atracción</strong> al lugar geométrico de los puntos del espacio de fases por los que pasan las soluciones que tienden hacia un atractor."
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
       "html": "Analice el espacio de fases de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
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
       "html": "Halle el valor crítico, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>, de las bifurcaciones de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mi>x</mi><mo>+</mo><mn>9</mn></mrow></math>. Discuta el aspecto del espacio de fases de la ecuación para los valores <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>10</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>."
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
       "html": "Dibuje el espacio de fases del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "Dibuje el espacio de fases del siguiente sistema dinámico: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Duplicidad en el cuaderno",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este problema aparece dos veces en el cuaderno del usuario (como ejercicio 18 de <code>metodoak/ebazpenak/e02_egonkortasuna.typ</code>, la sesión completa, y como ejercicio 31 de <code>metodoak/ebazpenak/e03_jarraipena.typ</code>, una sesión breve interrumpida, en la que él mismo dice que el mismo sistema está completo en el ejercicio 18); aquí solo se ha incluido la sesión completa."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Puntos fijos.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>; y <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>. Escribiendo <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>: centro (en el sistema lineal)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><msqrt><mn>3</mn></msqrt><mo>−</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>: punto de silla."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>&gt;</mo><mn>0</mn></mrow></math>: otro punto de silla."
      },
      {
       "mota": "testua",
       "html": "<strong>Para dibujar.</strong> Para obtener las orientaciones se estudia el signo de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math> (por regiones <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>), sin necesidad de soluciones particulares."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>A</mi><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
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
       "html": "Determine el ciclo límite del sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mo>+</mo><mfrac><mi>x</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mi>y</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> y discuta su estabilidad."
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
       "html": "Demuestre que la siguiente ecuación admite un ciclo límite: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Halle el máximo exponente de Liapunov del sistema del problema 8.24."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dimensión fractal",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que para recubrir subconjuntos «normales» del espacio (un punto, una curva o una superficie lisa, el interior de un poliedro…) se necesitan <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mi>k</mi><msup><mi>ε</mi><mrow><mi>−</mi><mi>d</mi></mrow></msup></mrow></math> cubos de lado <math display=\"inline\"><mi>ε</mi></math> en el límite <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math>, donde <math display=\"inline\"><mi>d</mi></math> es la dimensión (0, 1, 2 y 3 en los ejemplos citados). Demuestre que este resultado puede escribirse como"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mi>−</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ε</mi></mrow></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde ha desaparecido la constante <math display=\"inline\"><mi>k</mi></math>, que depende del tamaño del conjunto, pero no de su dimensión. Esto permite utilizar como definición de <strong>dimensión</strong> la relación (8.126). Considere el"
      },
      {
       "mota": "testua",
       "html": "<strong>conjunto ternario de Cantor</strong>"
      },
      {
       "mota": "testua",
       "html": ", que se define de forma recurrente como se indica en la figura 8.38:"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "partiendo del segmento unidad, se elimina el tercio central;"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "en cada uno de los dos tercios restantes se hace lo mismo, de forma que los respectivos tercios centrales son eliminados;"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "en cada uno de los segmentos restantes se repite el proceso;"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "…"
     ]
    },
    {
     "mota": "testua",
     "html": "El conjunto de puntos que queda en el límite (que en el sentido preciso definido por el propio Cantor son tantos como los que había al principio, ya que puede establecerse una correspondencia biunívoca entre unos y otros) es el conjunto ternario de Cantor. Demuestre que su longitud es nula. Calcule su dimensión y compruebe que no es un entero, es decir, que estamos ante un"
    },
    {
     "mota": "testua",
     "html": "<strong>fractal</strong>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Construcción del conjunto ternario de Cantor.",
     "src": "../media/irudiak/20a7981b04edfbae.svg",
     "zabalera": 216
    },
    {
     "mota": "problema",
     "izena": "Ecuaciones de Lotka-Volterra",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para explicar el aumento de tiburones en las aguas del Adriático en períodos de guerra, Volterra introdujo el modelo clásico de depredador y presa para describir la dinámica de poblaciones en interacción. Este modelo puede expresarse, en unidades adecuadas y siendo <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, como"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      },
      {
       "mota": "testua",
       "html": "La solución del sistema no puede escribirse en términos de funciones elementales, pero la ecuación de las trayectorias en el espacio de fases es simple. Hállela. Analice la estabilidad de los puntos de equilibrio del sistema y esboce el diagrama del espacio de fases."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Cuenta ensartada en alambre liso.",
     "src": "../media/irudiak/0e57762c181e857c.svg",
     "zabalera": 167
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere una cuenta enhebrada en un alambre liso, de forma semicircular, que rota con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> alrededor del eje vertical, como se indica en la figura 8.39. Discuta la estabilidad de los ángulos de equilibrio relativo de la cuenta, en función del parámetro adimensional <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi><mi>/</mi><mi>g</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuaciones en diferencias finitas (bis)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el problema 3.37 vimos que el método de Euler puede usarse para resolver ecuaciones lineales en diferencias finitas y estudiamos el ejemplo <math display=\"block\"><mrow><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>+</mo><msub><mi>x</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>n</mi></math> es un entero. Discuta la estabilidad de los puntos de equilibrio de este sistema dinámico discreto."
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
       "html": "El teorema de existencia y unicidad permite afirmar que las órbitas de una ecuación del tipo <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no se cortan en el espacio de fases. ¿Cómo se compagina esto con el diagrama clásico de un punto silla correspondiente a un máximo del potencial, que aparece en la figura? Razone la respuesta."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases cerca de un puerto.",
     "src": "../media/irudiak/7db974f88cfaa447.svg",
     "zabalera": 165
    },
    {
     "mota": "problema",
     "izena": "Potencial central",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> que se mueve en el seno de un potencial central <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Considere el problema unidimensional equivalente y halle la condición que determina sus puntos de equilibrio para un momento angular dado <math display=\"inline\"><mi>L</mi></math>. Discuta la estabilidad de los mismos. ¿Para qué valores de <math display=\"inline\"><mi>n</mi></math> serán estables si <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><msup><mi>r</mi><mi>n</mi></msup></mrow></math>? Demuestre que el último resultado es independiente de <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mi>k</mi></math>. ¿Qué significa la estabilidad de un punto del problema unidimensional para el movimiento tridimensional de la partícula?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Campo de fuerzas unidimensional",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué son periódicas todas las órbitas acotadas de una partícula que se mueve en un campo de fuerza unidimensional? (En dos y tres dimensiones, por el contrario, el"
      },
      {
       "mota": "testua",
       "html": "<strong>teorema de Bertrand</strong>"
      },
      {
       "mota": "testua",
       "html": "<span class=\"j-oin\">[<strong>Joseph Louis François Bertrand</strong> (1822-03-11, París; 1900-04-05, París). En mecánica se recuerdan, además del teorema que lleva su nombre, sus aportaciones a la teoría de números y a la geometría diferencial, pero es especialmente conocido por sus trabajos en teoría de probabilidades, donde existe una paradoja de Bertrand.]</span> asegura que esto, si la fuerza es central, solo ocurre para potenciales newtonianos, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>, y para armónicos isótropos, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>.)"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Órbitas circulares en relatividad general",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como ya se ha visto en el problema 7.11, la ecuación de la órbita del problema de Kepler en relatividad general puede escribirse en coordenadas polares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>p</mi></mfrac><mo>+</mo><mi>ε</mi><mi>p</mi><msup><mi>u</mi><mn>2</mn></msup><mo>,</mo></mrow></math> siendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>. El <em>semilatus rectum</em> <math display=\"inline\"><mi>p</mi></math> es positivo y <math display=\"inline\"><mi>ε</mi></math>, en general, muy pequeño. Halle los puntos de equilibrio de esta ecuación y estudie su estabilidad. Demuestre que cada punto fijo corresponde a una órbita circular en el espacio físico. Compruebe que sus resultados son coherentes con lo que sabe que pasa en el caso no relativista, que corresponde a <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "Use el análisis del problema 8.34 para calcular de modo rápido el período de precesión de Mercurio, que ya se había calculado en el problema 7.11, para el caso particular de órbitas de baja excentricidad."
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
       "html": "¿Qué pasa con la estabilidad del punto de equilibrio del problema 7.12 cuando <math display=\"inline\"><mi>ε</mi></math> no es pequeño?"
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
       "html": "¿Cómo ayudaría a discutir la estabilidad de los puntos de equilibrio (tal vez no aislados o no hiperbólicos) del sistema <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> conocer una función no constante <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que satisfaga la condición <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>?</mi></mrow></math> Aplique la respuesta al sistema asociado a la ecuación <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi></mrow></math> siendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
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
       "html": "Considere el sistema (8.57)–(8.58): <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mi>n</mi></msup><mi>.</mi></mrow></math> Halle su punto de equilibrio y demuestre que es estable para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>…</mi></mrow></math>. ¿Cuándo es asintóticamente estable?"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia:</em> Estudie separadamente los casos <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>7</mn><mo>,</mo><mi>…</mi></mrow></math>."
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
       "html": "¿Qué pasa cuando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn><mo>,</mo><mn>6</mn><mo>,</mo><mn>8</mn><mo>,</mo><mi>…</mi></mrow></math> en el sistema del problema 8.38?"
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
       "html": "Una partícula puede moverse sin rozamiento a lo largo de un aro vertical de radio <math display=\"inline\"><mi>R</mi></math> mientras se encuentra sujeta a la cima de éste por un muelle de longitud natural <math display=\"inline\"><mi>R</mi></math> y constante recuperadora <math display=\"inline\"><mi>k</mi></math>. Demuestre que, si elegimos como coordenada generalizada el ángulo <math display=\"inline\"><mi>φ</mi></math> de la figura 8.41, la ecuación del movimiento es <math display=\"block\"><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mi>k</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>φ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>φ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Hágase el diagrama de bifurcación del equilibrio usando el parámetro adimensional <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>R</mi></mrow><mrow><mi>m</mi><mi>g</mi></mrow></mfrac><mo>≥</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Sistema del problema 8.40.",
     "src": "../media/irudiak/f8c51a88d0fd2214.svg",
     "zabalera": 173
    },
    {
     "mota": "problema",
     "izena": "Órbitas en la solución de Schwarzschild<span class=\"j-oin\">[<strong>Karl Schwarzschild</strong> (1873-10-09, Fráncfort del Meno, Alemania; 1916-05-11, Potsdam, Alemania). Publicó su primer trabajo científico (sobre mecánica celeste) a los 16 años. Trabajó en astronomía y astrofísica e investigó, entre otras cosas, los procesos radiativos en las atmósferas estelares. Es uno de los precursores de la teoría cuántica de los espectros atómicos, pero quizá es más conocido por haber publicado la primera solución exacta de las ecuaciones de Einstein. Además, esa solución es una de las más importantes, pues describe el campo gravitatorio de la estrella más simple.]</span>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La órbita de los fotones que se mueven en la solución de Schwarzschild (que describe el campo gravitatorio de una partícula puntual) satisface una ecuación diferencial de segundo orden que admite la siguiente integral primera: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>2</mn><mi>M</mi></mrow><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>b</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> donde se han usado unidades geométricas en las que <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>c</mi><mo>=</mo><mn>1</mn></mrow></math>. Además, <math display=\"inline\"><mi>r</mi></math> es la distancia polar, <math display=\"inline\"><mi>λ</mi></math> un parámetro «afín» que sustituye al tiempo, <math display=\"inline\"><mi>M</mi></math> la masa de la estrella y <math display=\"inline\"><mi>b</mi></math> el «parámetro de impacto» (cociente entre momento angular y lineal del fotón). Estudie la existencia y estabilidad de órbitas circulares. Pruebe que un rayo de luz enviado desde el infinito con un parámetro de impacto <math display=\"inline\"><mrow><mi>b</mi><mo>&lt;</mo><msup><mn>3</mn><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>M</mi></mrow></math> será capturado, ya que <math display=\"inline\"><mi>r</mi></math> se hace inferior al valor del «horizonte» <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2</mn><mi>M</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Gráfica de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del problema 8.42.",
     "src": "../media/irudiak/393adb354e32e75f.svg",
     "zabalera": 256
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere la ecuación diferencial <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene la gráfica de la figura 8.42. Halle los puntos de equilibrio y discuta su estabilidad. Dibuje las gráficas de las soluciones que satisfacen <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> e <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math> y halle los valores <math display=\"inline\"><mrow><msub><mrow><mi mathvariant=\"normal\">lim</mi><mo>&#8289;</mo></mrow><mrow><mi>t</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></msub><mi>y</mi></mrow></math> que en tales casos se obtienen."
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
       "html": "Analice la estabilidad de los puntos de equilibrio del siguiente sistema y esboce su espacio de fases: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Problemas adicionales del cuaderno del usuario",
     "blokeak": [
      {
       "mota": "testua",
       "html": "A continuación se incluyen más ejercicios de sistemas dinámicos y de estabilidad del cuaderno manuscrito del usuario (<code>metodoak/ebazpenak/e01_serieak.typ</code>,  <code>e02_egonkortasuna.typ</code> y <code>e03_jarraipena.typ</code>) que no tienen un enunciado independiente en el libro oficial."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos del siguiente sistema y dibuje el retrato de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Tomando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>. Por tanto: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math></span>. Punto de silla."
      },
      {
       "mota": "testua",
       "html": "Vectores propios: para <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; para <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>, <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>. También punto de silla, para las direcciones propias <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><msqrt><mn>2</mn></msqrt><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn></mrow></math>. Nodo inestable. Vectores propios: para <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; para <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>. Nodo estable. Vectores propios: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>v</mi><msub><mi>λ</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetría.</strong>  Haciendo <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el sistema es invariante; por tanto el retrato de fases es simétrico respecto del eje <math display=\"inline\"><mi>x</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Más simetrías: haciendo <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>y</mi></mrow></math> el sistema también es invariante."
      },
      {
       "mota": "testua",
       "html": "<strong>Signos.</strong>  La curva <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> es el círculo <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>: dentro del círculo <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&lt;</mo><mn>1</mn><mo>⇒</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>; fuera <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>&gt;</mo><mn>1</mn><mo>⇒</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>. Los ejes <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> lo determinan, y en cada cuadrante el signo de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math> es el de <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Primera integral:</strong> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>⇒</mo><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mi>y</mi><mo>⇒</mo><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>x</mi><mi>y</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo ezegonkorra</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "En el retrato de fases: los dos puntos de silla <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, nodo inestable en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (trayectorias que salen), nodo estable en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (trayectorias que entran), y flujo simétrico alrededor del círculo unidad."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos del siguiente sistema y su estabilidad: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>. Y <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> entonces <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; si <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> entonces <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mi>λ</mi><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math></span>, es decir <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mn>4</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi></mrow><mn>2</mn></mfrac></mrow></math> y, como <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>, foco inestable: espiral hacia afuera."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi><mo>+</mo><mi>λ</mi><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math></span>. Punto de silla."
      },
      {
       "mota": "testua",
       "html": "Vectores propios: para <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Para <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Signos.</strong>  Las rectas <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> son <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: en la región <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>; en la región <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>; y así por cuadrantes. La recta <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: si <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> (hacia la derecha); si <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> espiral ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema mecánico unidimensional en el que <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>. Halle la primera integral (energía), los puntos críticos y dibuje el retrato de fases junto con el potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Forma de segundo orden: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>, es decir <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> donde <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Primera integral</strong> (energía):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msup><mi>λ</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; de la ecuación <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>λ</mi><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela-puntua</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> El centro es también centro del sistema completo, porque hay simetría: <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Cuidado: en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∞</mi></mrow></math>, es un punto irregular; ahí el potencial y el flujo son singulares."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Retrato de fases: órbitas cerradas alrededor de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac></mrow></math> (centro), punto de silla con separatrices en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>λ</mi></mrow><mn>2</mn></mfrac></mrow></math>, y por la recta vertical <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> las trayectorias pasan verticalmente. Abajo la gráfica del potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: mínimo en el centro, máximo en el punto de silla, y sima infinita en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos y el retrato de fases del siguiente sistema: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>. Por tanto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Desarrollando <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>y</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></math>, la jacobiana: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math></span> (doble). Un único vector propio: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Una condición, una dirección: nodo degenerado, inestable."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math></span>. Punto de silla."
      },
      {
       "mota": "testua",
       "html": "Vectores propios: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>2</mn><mi>b</mi><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Signos.</strong>  En la región <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>; en <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>; entre las rectas <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>, fuera <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El sistema tiene la simetría <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>, que ayuda a completar el retrato de fases: los dos puntos críticos aparecen conectados sobre el eje <math display=\"inline\"><mi>y</mi></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo endekatu ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitza</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema mecánico: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>6</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Factorice, analice los equilibrios y dibuje el retrato de fases con el potencial."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Factorización:</strong> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Equilibrios.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Potencial.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>6</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mn>5</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>6</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mn>5</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>20</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>20</mn></msqrt></mrow></math>. Punto de silla."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>60</mn></msqrt></mrow></math>, con los vectores <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>±</mi><msqrt><mn>60</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> como direcciones propias. Punto de silla."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>12</mn><mo>−</mo><mn>16</mn><mo>+</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>15</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>15</mn></msqrt></mrow></math>: centro del sistema lineal. También es un centro en el sistema completo, por simetría (<math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>)."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Si los puntos no tienen la misma energía, no comparten la misma trayectoria (separatriz): aquí dos celdas tienen valores distintos de <math display=\"inline\"><mi>V</mi></math>, y las separatrices están separadas."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Retrato de fases: centro en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> rodeado de órbitas cerradas, puntos de silla en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; abajo la gráfica de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: máximos en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, mínimo en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos del siguiente sistema y su naturaleza: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math></span> o <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>; igual para <math display=\"inline\"><mi>y</mi></math>. Cuatro puntos: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana</strong> (diagonal): <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>2</mn><mrow><mi>y</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math> (doble), todas las direcciones son propias: nodo en estrella inestable."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: punto de silla. Vectores propios sobre los ejes: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: también punto de silla, con los ejes de dirección intercambiados: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> (doble): nodo en estrella estable."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izar-nodo ezegonkorra</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izar-nodo egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos del siguiente sistema, clasifíquelos y dibuje el retrato de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. En otro caso, haciendo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, por suma <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> directamente <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: el eje horizontal es un conjunto invariante (las trayectorias no pueden atravesarlo)."
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> (doble). Nodo estable."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>: signos opuestos, punto de silla. Vectores propios: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math></span>: también punto de silla."
      },
      {
       "mota": "testua",
       "html": "Vectores propios: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; mismo polinomio característico: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>, punto de silla."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitza</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle los puntos críticos del siguiente sistema y clasifíquelos: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong> Sumando las dos ecuaciones: <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; entonces <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>P</mi><mn>1</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>M</mi><msub><mi>P</mi><mn>2</mn></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>λ</mi><mo>+</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mrow><mn>9</mn><mo>−</mo><mn>16</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>7</mn></msqrt><mi>i</mi></mrow><mn>2</mn></mfrac></mrow></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn></mrow></math>: foco inestable (espiral)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>−</mo><mn>4</mn><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mn>16</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>17</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> Signos opuestos: punto de silla."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> espiral ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>±</mo><msqrt><mn>7</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos del siguiente sistema y dibuje el retrato de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≥</mo><mn>1</mn></mrow></math> siempre). Y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana</strong> (usando <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>y</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mrow></math></span>): <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>: punto de silla."
      },
      {
       "mota": "testua",
       "html": "Vectores propios: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>a</mi><mo>+</mo><mn>2</mn><mi>b</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mi>a</mi><mo>+</mo><msqrt><mn>2</mn></msqrt><mi>b</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>2</mn></msqrt></mrow></math>: centro."
      },
      {
       "mota": "testua",
       "html": "En el retrato de fases: órbitas cerradas alrededor de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, y punto de silla en el origen con sus separatrices (el conjunto de órbitas cerradas sobre la silla)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este sistema (inventado) tiene dos puntos críticos: analícelos y dibuje el diagrama de fases con las nulclinas. <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> (doble), con todas las direcciones propias: nodo en estrella inestable."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>: punto de silla."
      },
      {
       "mota": "testua",
       "html": "Vectores propios: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Nulclinas.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: las rectas <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. En el retrato de fases: trayectorias que salen del origen en forma de estrella, y la silla diagonal de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con sus separatrices."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "A modo de comparación: el sistema lineal <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> tiene el mismo punto en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> pero <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>, centro: los términos no lineales cambian por completo la naturaleza."
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
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izar-nodo ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitza</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice el punto crítico del siguiente sistema y dibuje el diagrama de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Punto crítico.</strong> Sumando las dos ecuaciones <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, y entonces <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo>±</mo><msqrt><mrow><mn>4</mn><mo>−</mo><mn>8</mn></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>&gt;</mo><mn>0</mn></mrow></math>: espiral hacia afuera."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> espiral ezegonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle todos los puntos críticos del siguiente sistema: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>; sustituyendo en <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>4</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La cúbica por Ruffini: <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Y a partir de <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⇒</mo><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (usando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> en cada caso.)"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mn>3</mn><mo>,</mo><mn>4</mn></mrow></msub><mo>:</mo><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Los puntos pueden situarse en el cuadro, pero aquí no se completa el estudio de estabilidad de cada punto (jacobiana en los puntos)."
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos, los signos, la primera integral y las separatrices del siguiente sistema, y dibuje el retrato de fases completo: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong>  <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>A</mi></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: punto de silla, con los vectores <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. <strong><math display=\"inline\"><mi>D</mi></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn></mrow></math>: también punto de silla, con los vectores <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> como direcciones propias."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>B</mi></math> y <math display=\"inline\"><mi>C</mi></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>: centros del sistema lineal, todavía sin decidir si son centros o espirales verdaderos."
      },
      {
       "mota": "testua",
       "html": "<strong>Signos.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>&lt;</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn><mo>⇒</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>&lt;</mo><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></math>; igual para <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math> con <math display=\"inline\"><mi>x</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Primera integral:</strong> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">lehen integrala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Como da curvas cerradas, <math display=\"inline\"><mi>B</mi></math> y <math display=\"inline\"><mi>C</mi></math> son centros verdaderos."
      },
      {
       "mota": "testua",
       "html": "<strong>Separatrices.</strong>  A partir de <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>. Factorizando: <math display=\"block\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> Una rama es la recta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>; la otra, una cónica. El punto <math display=\"inline\"><mrow><mi>D</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cumple la cónica: <math display=\"inline\"><mrow><mfrac><mn>4</mn><mn>9</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>. Cortes de la cónica con <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Retrato de fases: dos puntos de silla en la diagonal, y los dos centros rodeados de órbitas cerradas dentro de las cónicas separatrices."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Los puntos críticos de este sistema y la jacobiana también se estudiaron en un ensayo breve (ejercicio 9 de <code>e01_serieak.typ</code>), sin integral primera; aquí (ejercicio 22 de <code>e02_egonkortasuna.typ</code>) está el estudio completo, y es el que se ha incluido aquí."
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos de equilibrio del siguiente sistema, clasifíquelos y dibuje el espacio de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos de equilibrio.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: por Ruffini las raíces <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math> (es decir, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow></math>: centro."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>: punto de silla. Vectores propios: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (hacia fuera); <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (hacia dentro)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>6</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><msqrt><mn>6</mn></msqrt></mrow></math>: centro."
      },
      {
       "mota": "testua",
       "html": "<strong>Simetría.</strong>  Haciendo <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> el sistema es invariante: el retrato de fases es simétrico respecto del eje <math display=\"inline\"><mi>x</mi></math>, por lo que los centros lineales son centros verdaderos."
      },
      {
       "mota": "testua",
       "html": "Retrato de fases: órbitas cerradas alrededor de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, punto de silla en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con sus separatrices, y en el exterior grandes órbitas que rodean a los dos centros a la vez (por fuera de la separatriz en forma de &quot;ocho&quot;)."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>i</mi><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentroa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>i</mi><msqrt><mn>6</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle los puntos fijos del siguiente sistema, clasifíquelos y dibuje el retrato de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos fijos.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: tomando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>. En otro caso, haciendo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> exigiría <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>: imposible. Dos puntos: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mo>+</mo><mn>2</mn><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: punto de silla. Vectores propios: <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (hacia fuera); <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (hacia dentro)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> de nuevo, con las direcciones intercambiadas: <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> también es punto de silla."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluciones particulares.</strong>  Sobre la recta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: el eje horizontal es un conjunto invariante, y en él <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (logística: va de <math display=\"inline\"><mi>A</mi></math> hacia <math display=\"inline\"><mi>B</mi></math> en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>Signo de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>.</strong>  Las rectas <math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> son <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>: la recta vertical <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> divide el plano en cuatro regiones, colocando las flechas región por región."
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "En las transiciones las flechas deben unirse sin interrupción: la recta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> no es órbita, solo la línea del cambio de signo."
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
         "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela-puntuak </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ardatza aldaezina </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice el punto fijo del origen: ¿centro o espiral? <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Punto fijo.</strong>  <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>: solo <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Linealización.</strong> Jacobiana <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, y en el origen: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El sistema lineal dice centro, pero el término no lineal (<math display=\"inline\"><mrow><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>) podría convertirlo en espiral: se necesita la simetría para decidir."
      },
      {
       "mota": "testua",
       "html": "<strong>Buscando simetría.</strong>  Haciendo <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>: se mantiene <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, pero sale <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: no es el mismo sistema. En cambio, haciendo <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>→</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mi>✓</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>→</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mi>✓</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El sistema es invariante: el retrato de fases es simétrico respecto del eje <math display=\"inline\"><mi>x</mi></math>, las trayectorias no pueden ser espirales."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zentro benetakoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> simetria </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi><mo>,</mo><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "oharra",
       "titulua": "Observación",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Para una variante (<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>) vale el mismo razonamiento: basta con que la potencia de <math display=\"inline\"><mi>y</mi></math> sea impar para que la simetría se conserve."
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario: modelo de competencia",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle los puntos fijos del siguiente sistema de competencia de tipo Lotka-Volterra mediante las nulclinas, clasifíquelos todos y dibuje el retrato de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Nulclinas.</strong>  <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>. Las intersecciones dan cuatro puntos de equilibrio (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana:</strong> <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>3</mn></mrow></math>: nodo inestable. Vectores propios, los propios ejes: <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>3</mn><mo>,</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>: nodo estable. <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>: punto de silla. <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>±</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mn>17</mn></msqrt></mrow></math> signos opuestos (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>&lt;</mo><mn>0</mn></mrow></math>): punto de silla. <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn><mo>+</mo><msqrt><mn>17</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>5</mn><mo>−</mo><msqrt><mn>17</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Soluciones particulares.</strong>  Los ejes <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> son invariantes (si desaparece una población queda la logística de la otra), y las trayectorias del cuadrante positivo van hacia el nodo estable <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo ezeg.</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nodo egonkorra</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zelak </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Analice los puntos críticos del siguiente sistema y dibuje el retrato de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos críticos.</strong>  <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; y <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Jacobiana.</strong>  Desarrollando <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mi>λ</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi></mrow><mn>2</mn></mfrac></mrow></math> <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>: foco estable (espiral hacia dentro)."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong>  <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> signos opuestos: punto de silla. Vectores propios (usando <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mi>λ</mi><mo>+</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>−</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En el retrato de fases: espiral alrededor del origen, delimitada por las separatrices de la silla de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; las rectas <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> son las nulclinas de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> la de <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> foku egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zela </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 146 (METMATCG01_0146, IMG_2025_07_12_12_30_58S.jpg; «MÉTODO MATEMÁTIKOA», 2/12/2014): TEORÍA (linealización de sistemas dinámicos: jacobiana A, Delta=(trA)^2-4detA, lambda=(trA±sqrt(Delta))/2, solución general con autovectores) + EJEMPLO A=[[-1,-1],[-1/2,-3/2]]: lambda=-1/2,-2 (nodo estable), autovectores (-2,1),(1,1). Retrato de fases (A+B). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Linealización de sistemas dinámicos (teoría) + ejemplo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Método:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el sistema no lineal se linealiza en un punto de equilibrio mediante la jacobiana: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">oreka-puntua</mtext></msub><mi>.</mi></mrow></math> El discriminante es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">tr</mtext><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math>, y los autovalores <math display=\"inline\"><mrow><msub><mi>λ</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">tr</mtext><mi>A</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> (reales distintos), la solución general, con autovectores, es: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msub><mi>λ</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><msub><mi>λ</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Ejemplo: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mi>A</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>9</mn><mi>/</mi><mn>4</mn><mo>&gt;</mo><mn>0</mn></mrow></math>. Ecuación característica <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>λ</mi><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> (ambas negativas <math display=\"inline\"><mo>→</mo></math> <strong>nodo estable</strong>)."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektorea",
      "<strong>ekarpena</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "norabide motela (erakarlea)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "norabide azkarra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Retrato de fases (ejemplo)",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto del ejemplo (streamplot): el origen es un <strong>nodo estable</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math> ). En verde, las direcciones de los autovectores: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (lenta, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math> ) y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (rápida, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> ). Las órbitas son atraídas hacia el origen, tangentes a la dirección lenta. <em>Figura editorial.</em>",
     "src": "../media/irudiak/1b996a7049eb8fc8.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/7b4bebed0ea7a368.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Método de linealización y ejemplo (nodo estable, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>) verificados con SymPy, sin correcciones. Autovectores <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; la solución general es una combinación de exponenciales decrecientes.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0146</code>, <code>IMG_2025_07_12_12_30_58S.jpg</code>; «MÉTODO MATEMÁTIKOA», 2/12/2014). Teoría (linealización) + ejemplo (nodo estable). Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p146.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 147 (METMATCG01_0147, IMG_2025_07_12_12_31_08S.jpg): análisis del nodo asintótico (lim y/x), continuación de 0146. Parte 1 = 0146 nodo estable (y/x→-1/2 si A≠0, lento; =1 si A=0, rápido). Parte 2 ADB 2: Ã=[[-1,-1],[9/2,7/2]], lambda=2,1/2 (nodo inestable). ⚠ CORRECCIÓN: lambda=1/2 autovector (2/3,1)→(-2/3,1), pendiente lenta +3/2→-3/2; lambda=2→(-1/3,1) pendiente -3 correcta. Retrato de fases (A+B) para ADB2. Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Nodo asintótico: dirección de aproximación (continuación de 0146)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Parte 1</strong> (nodo estable de <code>METMATCG01_0146</code>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>): en <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>→</mo><mn>0</mn></mrow></math>; la dirección de aproximación la da <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>: como <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup></mrow><mrow><mi>−</mi><mn>2</mn><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>≠</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> desaparece más rápido que <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup></math>, las órbitas se aproximan tangentes a la dirección <strong>lenta</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pendiente <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>): <strong>nodo asintótico estable</strong>. (Retrato de fases: véase"
    },
    {
     "mota": "testua",
     "html": "<code>METMATCG01_0146</code>"
    },
    {
     "mota": "testua",
     "html": ".)"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Parte 2 — ADB 2: <math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>9</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>7</mn><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (nodo inestable)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mn>1</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (ambas positivas <math display=\"inline\"><mo>→</mo></math> <strong>nodo inestable</strong>)."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektorea",
      "malda <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>",
      "<strong>ekarpena</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mn>2</mn></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math>",
       "norabide azkarra"
      ],
      [
       "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>",
       "norabide motela"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Corrección:</strong> el manuscrito escribió <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>; de la ecuación <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math> el autovector correcto es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (pendiente <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>, no <math display=\"inline\"><mrow><mi>+</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>). El de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, era correcto. Verificado con SymPy.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (ADB 2)"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto del sistema 2 (streamplot): el origen es un <strong>nodo inestable</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> ). En verde, las direcciones de los autovectores: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (rápida, pendiente <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn></mrow></math> ) y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (lenta, pendiente <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math> ; corregida). Las órbitas salen del origen tangentes a la dirección lenta. <em>Figura editorial.</em>",
     "src": "../media/irudiak/f950fa8df1ddda68.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial), sistema 2. <em>Figura editorial.</em>",
     "src": "../media/irudiak/c121a7294b5f40fa.svg",
     "zabalera": 335
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0147</code>, <code>IMG_2025_07_12_12_31_08S.jpg</code>). Análisis del nodo asintótico (continuación de 0146): nodo estable (parte 1) e inestable (ADB 2). Verificado con SymPy; autovector <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> corregido. Véase <code>koadernoa_metmatcg01_p147.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 148 (METMATCG01_0148, IMG_2025_07_12_12_31_31S.jpg): sistema dx/dt=x-x^2+y^2, dy/dt=-y+2xy. DOS equilibrios A(0,0),B(1,0) SILLAS (x=1/2 descartado, no real); jacobiana (1-2x,2y;2y,2x-1). SISTEMA HAMILTONIANO (divergencia=0, H=xy-x^2·y+y^3/3); eje x invariante (conexión heteroclina A→B). ⚠ CORRECCIÓN: autovectores de B intercambiados (lambda=1→(0,1), lambda=-1→(1,0)); los de A correctos. Retrato de fases (A+B). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Sistema hamiltoniano: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Equilibrios: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>; el último descartado (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> no es real), por tanto <strong>dos</strong> sillas: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana <math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como la divergencia es <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>x</mi></msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>∂</mi><mi>y</mi></msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, el sistema es <strong>hamiltoniano</strong>: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math> primera integral."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>M</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>autobektoreak</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "zela: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "zela: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Corrección:</strong> para <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, el autovector de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y el de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; el manuscrito los tenía intercambiados. Los de <math display=\"inline\"><mi>A</mi></math> eran correctos. Verificado con SymPy.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son <strong>sillas</strong>. El eje <math display=\"inline\"><mi>x</mi></math> es invariante (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ): conexión heteroclina <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> . Sistema hamiltoniano (divergencia nula); las órbitas son curvas de nivel de <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math> . Líneas discontinuas: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> , <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> ). <em>Figura editorial.</em>",
     "src": "../media/irudiak/f8c3b29662693446.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/bb4e5d471f99a2e3.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Equilibrios, jacobiana, autovalores y clasificación (dos sillas) verificados con SymPy. El sistema es <strong>conservativo en área/hamiltoniano</strong> (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>); <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math> primera integral. Autovectores de <math display=\"inline\"><mi>B</mi></math> corregidos.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0148</code>, <code>IMG_2025_07_12_12_31_31S.jpg</code>). Análisis de fases del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> (dos sillas, hamiltoniano). Verificado con SymPy; autovectores de <math display=\"inline\"><mi>B</mi></math> corregidos. Véase <code>koadernoa_metmatcg01_p148.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 149 (METMATCG01_0149, IMG_2025_07_12_12_31_39S.jpg): TEORÍA (autovalores complejos lambda=gamma±i·omega: gamma<0 espiral estable, gamma>0 inestable, gamma=0 [2.3] centro; solución real cos/sin) + EJEMPLO dx/dt=-y, dy/dt=x-y^2: P(0,0) centro (lambda=±i, det A=1), reversible R(x,y)=(x,-y) t→-t → centro verdadero (divergencia=-2y, no hamiltoniano). Retrato de fases (A+B). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Autovalores complejos: espirales y centro (+ ejemplo)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si los autovalores son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>, la solución real se compone de un factor exponencial y de oscilaciones: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">c </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>γ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil <strong>egonkorra</strong> (erakarlea)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil <strong>ezegonkorra</strong> (uxatzailea)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> (2.3)",
       "<strong>zentroa</strong>: orbita itxiak, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">c </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mover><mi>B</mi><mo accent=\"true\">̃</mo></mover><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mrow><mtext mathvariant=\"normal\">s </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math></span>"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Único equilibrio <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Linealización <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mo>→</mo></mrow></math> <strong>centro</strong> (linealmente). El sistema es <strong>reversible</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, respecto de <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> (<math display=\"inline\"><mrow><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), y <math display=\"inline\"><mi>P</mi></math> está en el eje <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: por tanto es un <strong>centro verdadero</strong> (divergencia <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>, no hamiltoniano; lo garantiza la reversibilidad)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (ejemplo)"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto del ejemplo (streamplot): <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un <strong>centro</strong>, rodeado de órbitas cerradas (verdadero por reversibilidad). Más lejos, el término <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> abre las órbitas. Línea discontinua: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ); la nulclina <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> es la parábola <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> . <em>Figura editorial.</em>",
     "src": "../media/irudiak/9baecea56fde216c.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/c01bdbeb46b87498.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Teoría (autovalores complejos: el signo de <math display=\"inline\"><mi>γ</mi></math> decide espiral estable/inestable o centro) y ejemplo (centro, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>) verificados con SymPy. El centro es verdadero por <strong>reversibilidad</strong> (<math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), no por una primera integral.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0149</code>, <code>IMG_2025_07_12_12_31_39S.jpg</code>). Teoría (espirales/centro con autovalores complejos) + ejemplo <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (centro reversible). Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p149.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 150 (METMATCG01_0150, IMG_2025_07_12_12_31_46S.jpg; «MÉTODO MATEMÁTIKOA», 2/12/2014): ejemplo de SILLA A=[[-1,-1],[-1,1]], lambda=±√2. ⚠ CORRECCIÓN: emparejamiento autovector-autovalor intercambiado; correcto lambda=√2→(1-√2,1) pendiente -(1+√2), lambda=-√2→(1+√2,1) pendiente √2-1. + RESUMEN de tipos de equilibrio (autovalores reales: nodo estable k2<k1<0, inestable 0<k2<k1, silla opuestos; complejos gamma±iω: 2.1 espiral inestable, 2.2 estable, 2.3 centro). Retrato de fases (A+B). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Ejemplo de silla + resumen de tipos de equilibrio",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo (silla): <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>=</mo><mn>0</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mo>→</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>→</mo><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math></span> (signos opuestos <math display=\"inline\"><mo>→</mo></math> <strong>silla</strong>)."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektorea",
      "malda <math display=\"inline\"><mrow><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><msqrt><mn>2</mn></msqrt></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>−</mi><mn>2.41</mn></mrow></math>",
       "ezegonkorra (irteera)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mo>−</mo><mn>1</mn><mo>≈</mo><mn>0.41</mn></mrow></math>",
       "egonkorra (sarrera)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Corrección:</strong> el manuscrito emparejó los autovectores al revés (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>). De la 2.ª fila <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></math>: el correcto es <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msqrt><mn>2</mn></msqrt><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. En la solución general <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> va con <math display=\"inline\"><msup><mi>e</mi><mrow><msqrt><mn>2</mn></msqrt><mi>t</mi></mrow></msup></math>. Verificado con SymPy.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (ejemplo)"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto del ejemplo (streamplot): el origen es una <strong>silla</strong> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math> ). En verde, las direcciones de los autovectores: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (inestable, pendiente <math display=\"inline\"><mrow><mi>−</mi><mn>2.41</mn></mrow></math> ) y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (estable, pendiente <math display=\"inline\"><mn>0.41</mn></math> ). <em>Figura editorial.</em>",
     "src": "../media/irudiak/e342d395d41ce3ae.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/f3052fcceef69c53.svg",
     "zabalera": 335
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resumen de tipos de equilibrio"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>autobalioak</strong>",
      "baldintza",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "errealak, desberdinak",
       "<math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "nodo egonkorra"
      ],
      [
       "errealak, desberdinak",
       "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><msub><mi>k</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>k</mi><mn>1</mn></msub></mrow></math>",
       "nodo ezegonkorra"
      ],
      [
       "errealak",
       "zeinu aurkakoak",
       "<strong>zela</strong>"
      ],
      [
       "konplexuak <math display=\"inline\"><mrow><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil ezegonkorra (kanpora)"
      ],
      [
       "konplexuak",
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil egonkorra (barrura)"
      ],
      [
       "konplexuak",
       "<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>",
       "zentroa"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Ejemplo de silla y clasificación de tipos de equilibrio verificados con SymPy. Autovectores del ejemplo corregidos (emparejamiento de autovectores <math display=\"inline\"><mi>λ</mi></math> <math display=\"inline\"><mo>↔</mo></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0150</code>, <code>IMG_2025_07_12_12_31_46S.jpg</code>; «MÉTODO MATEMÁTIKOA», 2/12/2014). Ejemplo de silla (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>) + resumen de tipos de equilibrio. Verificado con SymPy; emparejamiento de autovectores corregido. Véase <code>koadernoa_metmatcg01_p150.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 151 (METMATCG01_0151, IMG_2025_07_12_12_31_55S.jpg; «5/12/2014»): ANÁLISIS CUALITATIVO del sistema 0148 (dx/dt=x-x^2+y^2, dy/dt=-y+2xy) + retrato de fases dibujado. Dos sillas A(0,0),B(1,0); eje x invariante; hamiltoniano (H=xy-x^2·y+y^3/3). ⚠ Corrección menor: dx/dt=0 nulclina x=x^2-y^2 (no x^2+y^2; no cambia los 2 equilibrios). Retrato de fases = phase_0148 reutilizado. Verificado con SymPy (0148). Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Análisis cualitativo: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math> (complemento de 0148)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El mismo sistema en la unidad <code>METMATCG01_0148</code> (álgebra completa); esta hoja (5/12/2014) añade el <strong>análisis cualitativo</strong> y el retrato de fases dibujado. Dos sillas <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; jacobiana <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mi>A</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hacia fuera, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> hacia dentro), <math display=\"inline\"><mrow><msub><mi>M</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (diagonal)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Pasos del análisis cualitativo"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Nulclinas:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (el manuscrito <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>; pequeño error de signo); <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>.",
      "<strong>El eje <math display=\"inline\"><mi>x</mi></math> es invariante:</strong> en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; flujo <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Signo de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>:</strong> <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la nulclina <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> separa cuatro regiones (<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>/<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>).",
      "El sistema es <strong>hamiltoniano</strong> (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math>); las órbitas son curvas de nivel de <math display=\"inline\"><mi>H</mi></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto del sistema (streamplot; = <code>METMATCG01_0148</code>): <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son <strong>sillas</strong>, el eje <math display=\"inline\"><mi>x</mi></math> es invariante (conexión heteroclina <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> ), simétrico respecto de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> . Versión exacta del retrato dibujado a mano en el manuscrito. <em>Figura editorial.</em>",
     "src": "../media/irudiak/f8c3b29662693446.svg",
     "zabalera": 564
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Sistema = <code>METMATCG01_0148</code> (dos sillas, hamiltoniano, verificado con SymPy). Esta hoja aporta el análisis cualitativo (nulclinas, signo de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>, eje invariante) y el retrato de fases dibujado. Corrección menor: la nulclina <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (no <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0151</code>, <code>IMG_2025_07_12_12_31_55S.jpg</code>; «5/12/2014»)."
      },
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0148</code>"
      },
      {
       "mota": "testua",
       "html": "análisis cualitativo del sistema + retrato de fases. Verificado con SymPy (0148). Véase <code>koadernoa_metmatcg01_p151.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 152 (METMATCG01_0152, IMG_2025_07_12_12_32_03S.jpg; «MÉTODO MATEMÁTIKOA», 1/12/2014): (arriba) simetría del ejemplo 0149 (dx/dt=-y, dy/dt=x-y^2: reversible R(x,y)=(x,-y) → centro verdadero; tres retratos de fases) vs dy/dt=x-y^3 (NO reversible, div=-3y^2 → foco débil). (abajo) autovalores reales REPETIDOS: 3.1 nodo en estrella (a12=a21=0), 3.2 nodo degenerado (defectivo). Retrato de fases (A+B): nodo degenerado ilustrativo. Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Simetría y centro (<math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> vs <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>) + autovalores repetidos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetría del centro: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (0149)"
    },
    {
     "mota": "testua",
     "html": "El sistema tiene <strong>dos simetrías</strong>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>, es decir, es reversible respecto de la involución <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>). Los tres retratos de fases (el original, el reflejado <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math> y el invertido <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>) dan el <strong>mismo centro</strong>: <math display=\"inline\"><mo>→</mo></math> <strong>centro verdadero</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Contraste:</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math> NO es reversible (<math display=\"inline\"><mrow><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) y la divergencia es <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>≤</mo><mn>0</mn></mrow></math>: por tanto es un <strong>foco estable débil</strong> (no un centro), aunque la linealización dé <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>. Ojo: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> no garantiza el centro; hace falta la reversibilidad (o una primera integral)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores reales repetidos (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>a</mi></mrow></math> doble)"
    },
    {
     "mota": "taula",
     "goiburua": [
      "kasua",
      "baldintza",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "3.1",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)",
       "<strong>nodo izarra</strong> (propioa); <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> kanpora, <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> barrura"
      ],
      [
       "3.2",
       "defektiboa (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≠</mo><mn>0</mn></mrow></math>)",
       "<strong>nodo endekatua</strong> (inpropioa); autobektore bakarra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "(3.1 nodo en estrella: véase <code>METMATCG01_0140</code>; 3.2 nodo degenerado: véase <code>METMATCG01_0127</code>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases: 3.2 nodo degenerado (ejemplo ilustrativo)"
    },
    {
     "mota": "irudia",
     "oina": "Ejemplo ilustrativo de nodo degenerado (impropio): <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> , <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math> , <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> doble, un único autovector <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> . Todas las órbitas son atraídas hacia el origen, tangentes al único autovector (eje <math display=\"inline\"><mi>x</mi></math> ), con aspecto de giro. <em>Figura editorial (caso 3.2).</em>",
     "src": "../media/irudiak/d184f6e539bf25a3.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial), nodo degenerado. <em>Figura editorial.</em>",
     "src": "../media/irudiak/998bafe289ee6f0e.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Simetría/reversibilidad y autovalores repetidos verificados con SymPy. Lección principal: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> (en la linealización) NO basta para asegurar el centro — el caso <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> es reversible (centro), el caso <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math> no (foco débil). En los repetidos: nodo en estrella (diagonal) o degenerado (defectivo).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0152</code>, <code>IMG_2025_07_12_12_32_03S.jpg</code>; «MÉTODO MATEMÁTIKOA», 1/12/2014). Simetría (centro <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math> vs <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>) + autovalores repetidos (estrella/degenerado). Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p152.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 153 (METMATCG01_0153, IMG_2025_07_12_12_32_13S.jpg; «MÉTODO MATEMÁTIKOA», 12/12/2014): sistema no lineal completo (MODELO DE COMPETENCIA, Lotka–Volterra) dx/dt=x(1-x-y), dy/dt=y(3-x-2y). CUATRO equilibrios: (0,0) nodo inestable (k=1,3), (0,3/2) nodo estable (k=-1/2,-3), (1,0) silla (k=-1,2), (-1,2) silla (k=-3/2±½√17, autovectores (2,-5±√17)). Jacobiana [[1-2x-y,-x],[-y,3-x-4y]]; nulclinas x=0/y=1-x, y=0/y=(3-x)/2; todos los autovalores/autovectores. ⚠ CORRECCIÓN: el dx/dt=x(1-2x-y) de la primera línea es un lapsus (sobra el '2'); la jacobiana, la nulclina y=1-x y los 4 equilibrios, incluidos (1,0),(-1,2), exigen x(1-x-y) (con el 2 los equilibrios serían (1/2,0),(-1/3,5/3), J11=1-4x-y). Retrato de fases (A+B) en ventana AMPLIA. Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Sistema no lineal: cuatro equilibrios (dos nodos + dos sillas), modelo de competencia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema no lineal autónomo (<strong>modelo de competencia</strong> de tipo Lotka–Volterra): <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\"><strong>Corrección (lapsus):</strong> el manuscrito trae en la primera línea <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero <strong>ese «2» sobra</strong>. La jacobiana (<math display=\"inline\"><mrow><msub><mi>J</mi><mn>11</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>), la nulclina <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math> y los cuatro equilibrios —incluidos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el propio cálculo <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>→</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> del alumno— exigen <strong>todos</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Con el «2» los equilibrios serían <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo><mfrac><mn>5</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>J</mi><mn>11</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>. De aquí en adelante <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (verificado con SymPy).</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nulclinas y puntos de equilibrio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math>;   <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>. De las intersecciones, <strong>cuatro equilibrios</strong>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (Interior: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo>→</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>→</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>2</mn></mrow></math></span>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealización: jacobiana y clasificación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>4</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>oreka</strong>",
      "<math display=\"inline\"><mi>J</mi></math> bertan",
      "<strong>autobalioak</strong> <math display=\"inline\"><mi>k</mi></math>",
      "<strong>izaera</strong>",
      "<strong>autobektoreak</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<strong>nodo ezegonkorra</strong>",
       "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>3</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>&lt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<strong>nodo egonkorra</strong>",
       "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>3</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>",
       "<strong>zela</strong>",
       "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>±</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mn>17</mn></msqrt></mrow></math>",
       "<strong>zela</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>)",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>+</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>−</mi><mn>5</mn><mo>−</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Los dos nodos están sobre el eje <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (límite biológico), y las dos sillas organizan la estructura global: las ramas estable/inestable de las sillas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> conducen las órbitas hacia el nodo estable <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (ventana amplia)"
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones (streamplot, color <math display=\"inline\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> ) en una ventana <strong>amplia</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2.8</mn><mo>,</mo><mn>2.8</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> , <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1.8</mn><mo>,</mo><mn>3.6</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> ), para mostrar la estructura global más allá de los puntos de equilibrio. Cuadrados rojos = sillas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ; triángulos verdes = nodos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inestable y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> estable. Líneas discontinuas: nulclinas de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> , <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>x</mi></mrow></math> ) y nulclinas de <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> , <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>−</mo><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math> ). <em>Figura editorial.</em>",
     "src": "../media/irudiak/48b5944d39ef2f73.svg",
     "zabalera": 590
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial, normalizado) en la misma ventana. Las flechas dan la dirección del flujo punto a punto; los marcadores, según el tipo de equilibrio. <em>Figura editorial.</em>",
     "src": "../media/irudiak/8c91fffc39e93805.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Clasificación de los cuatro equilibrios (dos nodos + dos sillas), jacobiana y <strong>todos</strong> los autovalores/autovectores verificados con SymPy. Lección principal: en sistemas no lineales, la naturaleza de cada equilibrio la deciden los autovalores de la <strong>linealización</strong> (nodo/silla), y el retrato de fases global lo organizan las ramas de las sillas. Lapsus del «2» del manuscrito corregido.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0153</code>, <code>IMG_2025_07_12_12_32_13S.jpg</code>; «MÉTODO MATEMÁTIKOA», 12/12/2014). Modelo de competencia <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: 4 equilibrios, jacobiana, todos los autovalores/autovectores. Corrección: lapsus del «2» de la primera línea (confirmado con SymPy). Véase <code>koadernoa_metmatcg01_p153.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 154 (METMATCG01_0154, IMG_2025_07_12_12_32_20S.jpg): sistema no lineal dx/dt=(x+y-1)(x+y), dy/dt=x. Nulclinas x+y=0/x+y=1 (dx/dt=0), x=0 (dy/dt=0). DOS equilibrios: (0,0) FOCO ESTABLE (lambda=(-1±i√3)/2, Re=-1/2<0, espiral-sumidero), (0,1) SILLA (lambda=(1±√5)/2; lambda_+=(1+√5)/2=φ NÚMERO ÁUREO; autovectores ((1±√5)/2,1)). Jacobiana [[2x+2y-1,2x+2y-1],[1,0]] (dx/dt depende solo de x+y). NINGÚN ERROR. Retrato de fases (A+B) en ventana amplia. Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Foco estable + silla: el número áureo <math display=\"inline\"><mi>φ</mi></math> en los autovalores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema no lineal autónomo en el que <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> depende solo de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nulclinas y puntos de equilibrio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>;   <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. Por tanto, en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> y hay <strong>dos equilibrios</strong>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealización: jacobiana y clasificación"
    },
    {
     "mota": "testua",
     "html": "Desarrollando <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math></span>, por tanto <math display=\"block\"><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn></mrow></math>, ya que <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> depende solo de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>.)"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>oreka</strong>",
      "<math display=\"inline\"><mi>J</mi></math> bertan",
      "<strong>autobalioak</strong> <math display=\"inline\"><mi>k</mi></math>",
      "<strong>izaera</strong>",
      "<strong>autobektoreak</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
       "<strong>foku egonkorra</strong> (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&lt;</mo><mn>0</mn></mrow></math>)",
       "(kiribil-hustubidea)"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></math>",
       "<strong>zela</strong> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; <br> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\"><strong>Bonito detalle:</strong> el autovalor positivo de la silla <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>+</mo></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mi>φ</mi><mo>≈</mo><mn>1.618</mn></mrow></math>, el <strong>número áureo</strong>; la pendiente de la rama inestable también está ligada a <math display=\"inline\"><mi>φ</mi></math> (<math display=\"inline\"><mrow><msub><mi>v</mi><mo>+</mo></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir, pendiente <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>φ</mi></mfrac><mo>=</mo><mi>φ</mi><mo>−</mo><mn>1</mn></mrow></math>). En cambio en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>±</mo><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> (raíz sexta de la unidad), <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo>&lt;</mo><mn>0</mn><mo>→</mo></mrow></math> espiral estable.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (ventana amplia)"
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones (streamplot, color <math display=\"inline\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> ) en una ventana <strong>amplia</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2.5</mn><mo>,</mo><mn>2.5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> , <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> ). Rombo naranja = <strong>foco estable</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (espiral hacia dentro); cuadrado rojo = <strong>silla</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> . Línea discontinua azul: nulclina de <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> ); líneas verdes: nulclinas de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> , <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> ). La espiral del foco y las ramas de la silla se ven con claridad. <em>Figura editorial.</em>",
     "src": "../media/irudiak/9dde7c28c199de77.svg",
     "zabalera": 590
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial, normalizado) en la misma ventana. <em>Figura editorial.</em>",
     "src": "../media/irudiak/4d8d804496da0f92.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">La naturaleza de los dos equilibrios (foco estable vs silla), la jacobiana y <strong>todos</strong> los autovalores/autovectores verificados con SymPy; <strong>ningún error</strong> en el manuscrito. El hecho de que <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> dependa solo de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> hace que las dos entradas de la primera fila de la jacobiana sean iguales (<math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>1</mn></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0154</code>, <code>IMG_2025_07_12_12_32_20S.jpg</code>). Sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> foco estable, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> silla (número áureo <math display=\"inline\"><mi>φ</mi></math>). Ningún error. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p154.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 155 (METMATCG01_0155, IMG_2025_07_12_12_32_28S.jpg; «MÉTODO MATEMÁTIKOA», 25/11/2014): TEORÍA — introducción a la teoría de la estabilidad. Puntos fijos como f(t,x0)=0; péndulo (centro+silla) + potencial V(x). Ejemplos: a) x'=ax (x0=0), b) x'=ax-ax^3=ax(1-x^2) (x=0,±1; a>0: 0 inest., ±1 est.), c) x'=2cos x-cos y, y'=2cos y-cos x (cos x=cos y=0 -> retícula; eliminación x'+2y'=3cos y; tablero de ajedrez: (+,+) nodo est. λ=-1,-3; (-,-) nodo inest. λ=1,3; mixtos sillas λ=±√3). Sistema autónomo bidimensional P,Q + condición CUASILINEAL (lim F/√(x²+y²)=lim G/√(x²+y²)=0) con linealización. NINGÚN ERROR. Retrato de fases: péndulo (A+B) en ventana amplia (retícula de centros/sillas). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Teoría de la estabilidad (introducción): puntos fijos y sistemas cuasilineales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los <strong>puntos fijos</strong> (puntos de equilibrio) de un sistema dinámico son los estados que anulan el campo: <math display=\"block\"><mrow><mover><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>0</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Cuántos son y de qué naturaleza (fuente/sumidero/silla/centro) organiza la <strong>dinámica completa</strong> del sistema. El ejemplo canónico es el <strong>péndulo</strong>: se alternan centros (pequeñas oscilaciones) y sillas (equilibrio superior inestable), ligados a los mínimos/máximos del potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplos: cálculo de puntos fijos"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>adibidea</strong>",
      "<strong>ekuazioa(k)</strong>",
      "<strong>puntu finkoak</strong>"
     ],
     "lerroak": [
      [
       "a) lineala",
       "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math>",
       "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>0</mn></msup><mo>=</mo><mn>0</mn></mrow></math>"
      ],
      [
       "b) kubikoa",
       "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><mi>a</mi><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>a</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>0</mn></mrow></math>)",
       "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>+</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>"
      ],
      [
       "c) 2D trig.",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <br> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math></span>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>: <br> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Estabilidad de b) (1D):</strong> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>−</mo><mn>3</mn><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>a</mi></mrow></math>. Por tanto, si <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mn>0</mn></math> es inestable y <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> son estables (al revés si <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>Eliminación de c):</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math> (y <math display=\"inline\"><mrow><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>), por tanto en el equilibrio <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math></span>. Siendo la jacobiana <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>±</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>, los equilibrios forman un <strong>tablero de ajedrez</strong>:"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
      "<strong>autobalioak</strong>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>+</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "nodo egonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo>,</mo><mi>−</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>3</mn></mrow></math>",
       "nodo ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>+</mi><mo>,</mo><mi>−</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> / <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo>,</mo><mi>+</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>3</mn></msqrt></mrow></math>",
       "<strong>zela</strong>"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema autónomo bidimensional y cuasilinealidad"
    },
    {
     "mota": "testua",
     "html": "El sistema <strong>autónomo</strong> general es <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Si el origen es un equilibrio, es <strong>cuasilineal</strong> (casi lineal) si los restos no lineales se extinguen más rápido que el lineal: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>12</mn></msub><mi>y</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mi>y</mi><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Entonces la linealización (matriz <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>) decide el tipo de equilibrio (silla/nodo/foco), <strong>salvo en el centro y los casos límite</strong> (ahí decide el resto; véase <code>METMATCG01_0152</code>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases: péndulo (ventana amplia)"
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones del péndulo (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math> , <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> ) en una ventana <strong>amplia</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>7</mn><mo>,</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mi>π</mi><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> ). Círculos azules = <strong>centros verdaderos</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mi>π</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (hamiltoniano, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> ); cuadrados rojos = <strong>sillas</strong> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> ). Las ramas de las sillas forman las <strong>separatrices</strong> (que separan oscilación y rotación). <em>Figura editorial (para aclarar el esquema del péndulo).</em>",
     "src": "../media/irudiak/688198b45946f506.svg",
     "zabalera": 603
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial, normalizado) en la misma ventana; retícula de centros y sillas. <em>Figura editorial.</em>",
     "src": "../media/irudiak/95cbd657369dff99.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Los tres ejemplos y la retícula de centros/sillas del péndulo verificados con SymPy; <strong>ningún error</strong>. Lección principal: los puntos fijos son los ceros del campo, y la <strong>cuasilinealidad</strong> permite decidir el tipo de equilibrio mediante la linealización (excepción: los centros y los casos límite <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0155</code>, <code>IMG_2025_07_12_12_32_28S.jpg</code>; «MÉTODO MATEMÁTIKOA», 25/11/2014). Introducción a la teoría de la estabilidad: puntos fijos, péndulo/<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ejemplos a/b/c, sistema cuasilineal. Ningún error. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p155.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 156 (METMATCG01_0156, IMG_2025_07_12_12_32_34S.jpg): sistema no lineal dx/dt=y-y^3, dy/dt=-x-y^2. TRES equilibrios: A(0,0), B(-1,1), C(-1,-1) (dx/dt=0->y=0,±1; dy/dt=0->x=-y^2). Jacobiana [[0,1-3y^2],[-1,-2y]]. M_A=[[0,1],[-1,0]] (lambda=±i, centro lineal -> CENTRO VERDADERO, sistema REVERSIBLE R=(x,-y), A sobre el eje fijo y=0; divergencia=-2y no hamiltoniano); M_B=[[0,-2],[-1,-2]] silla (lambda=-1±√3); M_C=[[0,-2],[-1,2]] silla (lambda=1±√3). NINGÚN ERROR (todas las matrices correctas); adicional=demostración de que A es centro verdadero. Retrato de fases (A+B) en ventana amplia. Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Centro reversible + dos sillas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema no lineal autónomo: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio y jacobiana"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>;   <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Por tanto tres equilibrios: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana general: <math display=\"block\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>oreka</strong>",
      "<math display=\"inline\"><mi>M</mi></math> bertan",
      "<math display=\"inline\"><mtext mathvariant=\"normal\">tr</mtext></math>, <math display=\"inline\"><mi mathvariant=\"normal\">det</mi></math>",
      "<strong>autobalioak</strong>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mo>;</mo><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>",
       "<strong>zentro lineala</strong> <math display=\"inline\"><mo>→</mo></math> benetakoa (itzulg.)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>,</mo><mo>;</mo><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "<strong>zela</strong>"
      ],
      [
       "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mo>;</mo><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "<strong>zela</strong>"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: centro lineal <math display=\"inline\"><mo>→</mo></math> centro verdadero (reversibilidad)"
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> (centro lineal), pero <strong>eso solo no garantiza el centro</strong> (véase <code>METMATCG01_0149</code>, <code>METMATCG01_0152</code>). En este caso el sistema es <strong>reversible</strong> respecto de la involución <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (y <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>): como <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>D</mi><mi>R</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mo>,</mo></mrow></math> y <math display=\"inline\"><mi>A</mi></math> está en el <strong>eje fijo</strong> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>), es un <strong>centro verdadero</strong>. Ojo: la divergencia <math display=\"inline\"><mrow><mo>=</mo><msub><mi>∂</mi><mi>x</mi></msub><mi>P</mi><mo>+</mo><msub><mi>∂</mi><mi>y</mi></msub><mi>Q</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi></mrow></math> no es idénticamente nula, por lo que <strong>no es hamiltoniano</strong>; lo que da el centro es la reversibilidad (no la conservación del área)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (ventana amplia)"
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones (streamplot, color <math display=\"inline\"><mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> ) en una ventana <strong>amplia</strong> (<math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2.6</mn><mo>,</mo><mn>1.4</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> , <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> ). Círculo azul = <strong>centro verdadero</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (órbitas cerradas, protegido por reversibilidad); cuadrados rojos = <strong>sillas</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> , <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> . Líneas discontinuas: nulclinas de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math> ); la nulclina de <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> es la parábola <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (curvada en la figura). <em>Figura editorial.</em>",
     "src": "../media/irudiak/d48979bc667ae862.svg",
     "zabalera": 590
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial, normalizado) en la misma ventana. <em>Figura editorial.</em>",
     "src": "../media/irudiak/99885196425dfaf4.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Las matrices de los tres equilibrios (del manuscrito) son correctas; <strong>ningún error</strong>. Aportación principal: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un <strong>centro verdadero</strong> por <strong>reversibilidad</strong> (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), no por ser hamiltoniano (divergencia <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>). Todo verificado con SymPy.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0156</code>, <code>IMG_2025_07_12_12_32_34S.jpg</code>). Sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centro reversible, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>/<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sillas. Ningún error. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p156.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, hoja 1 (METMATCG01_0001, IMG_2025_07_06_20_13_44S.jpg; «MÉTODO M.», 17/12/2015): sistema dinámico no lineal (dx/dt = y-y³, dy/dt = -x-y²) completo — tres equilibrios, jacobiana, centro en P1 (λ=±i, observación sobre lo cuasilineal) y dos sillas en P2/P3 (λ=-1±√3, 1±√3), tabla de signos y retrato de fases. Verificado con SymPy: todo correcto salvo las componentes de las columnas de autovectores (dos correcciones con mención). Figura editorial del retrato de fases con CeTZ. Confianza alta",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Sistema dinámico no lineal: equilibrios, linealización y retrato de fases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Analicemos el sistema no lineal plano:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Haciendo <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Por tanto <strong>tres equilibrios</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealización: matriz jacobiana"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> — <strong>centro</strong> en lo linealizado. La propia fuente advierte (subrayado): en el sistema <strong>cuasilineal</strong> los autovalores imaginarios puros no deciden si es centro o foco — límite clásico de la linealización.",
      "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (uno positivo, otro negativo) — <strong>punto de silla</strong>. Autovectores: <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>+</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>−</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mo>−</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
      "<strong><math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> — <strong>punto de silla</strong>. Autovectores: <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>+</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><msub><mi>λ</mi><mo>−</mo></msub></msub><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>3</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campo de direcciones y retrato de fases"
    },
    {
     "mota": "testua",
     "html": "La fuente trae una tabla de signos (en rojo/azul): <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cambia de signo en las rectas <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>, y <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la parábola <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (<strong>nulclinas</strong>). Con ello construye el esbozo del retrato de fases: órbitas cerradas alrededor de <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> (en lo linealizado), y separatrices en las dos sillas."
    },
    {
     "mota": "irudia",
     "oina": "Esquema del retrato de fases (editorial, siguiendo el boceto de la fuente): nulclinas (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> a trazos, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> en verde), centro <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> (órbitas cerradas en lo linealizado) y sillas <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub></mrow></math> con sus autodirecciones.",
     "src": "../media/irudiak/83fbe87b76a5cb2f.svg",
     "zabalera": 222
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0001</code>, hoja suelta, «MÉTODO M.», 17/12/2015; <code>IMG_2025_07_06_20_13_44S.jpg</code>). Sistema: equilibrios, jacobiana, autovalores, clasificación (centro + dos sillas) y tabla de signos — todo verificado con SymPy y CORRECTO. <span>⚠ <strong>Dos correcciones con mención</strong></span>: las columnas de autovectores de la fuente tienen las componentes intercambiadas o invertidas (p. ej. en <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> escribió <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, cuando su ecuación da <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; en <math display=\"inline\"><msub><mi>P</mi><mn>3</mn></msub></math> escribió <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, cuando hace falta <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msqrt><mn>3</mn></msqrt></mrow></math>). La clasificación no cambia. Valores verificados en este texto. Véase <code>koadernoa_metmatcg01_p001.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 1,
   "izenburua": "Del cuaderno (CNmet3) — rudimentos de la estabilidad",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Rudimentos de la teoría de la estabilidad"
    },
    {
     "mota": "testua",
     "html": "El movimiento en torno a los puntos de equilibrio se representa en el espacio de fases. El mínimo de un potencial da un equilibrio estable (centro, con órbitas cerradas); el máximo, un equilibrio inestable (punto de silla)."
    },
    {
     "mota": "irudia",
     "oina": "Pozo simple y centro (órbitas cerradas).",
     "src": "../media/irudiak/b5945c35390c919b.svg",
     "zabalera": 463
    },
    {
     "mota": "testua",
     "html": "Un pozo doble tiene dos centros y, entre ambos, un punto de silla; la separatriz que pasa por el punto de silla divide el espacio de fases."
    },
    {
     "mota": "irudia",
     "oina": "Pozo doble, dos centros y separatriz.",
     "src": "../media/irudiak/bff2a7bb973d829d.svg",
     "zabalera": 493
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 24-25 (unidad 0013): clasificación de los puntos de equilibrio mediante autovalores (foco, centro, nodo y nodo en estrella) y sistema mecánico unidimensional con rozamiento; retratos de fases vectorizados con CeTZ; confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Clasificación de los puntos de equilibrio: autovalores complejos y reales dobles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La naturaleza del punto de equilibrio <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> del sistema linealizado la determinan los autovalores de <math display=\"inline\"><mi>A</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">tr</mi><mi>A</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">tr</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores complejos (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, son <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>γ</mi><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>, donde <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msqrt><mrow><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">tr</mi><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>. La solución es oscilatoria con amplitud exponencial:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒄</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒄</mi><mn>2</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se distinguen tres subcasos según el signo de <math display=\"inline\"><mi>γ</mi></math>:"
    },
    {
     "mota": "irudia",
     "oina": "Valores propios complejos: foco y centro (según el signo de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math> ).",
     "src": "../media/irudiak/986de2850ea88301.svg",
     "zabalera": 498
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Raíces características reales dobles (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>≡</mo><mi>a</mi></mrow></math>. Hay dos subcasos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>a) <math display=\"inline\"><mi>A</mi></math> diagonalizable (p. ej. <math display=\"inline\"><mrow><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub></mrow></math>)</strong>: todas las direcciones son propias y las soluciones son <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi mathvariant=\"bold-italic\">𝒄</mi></mrow></math> rectas radiales — <strong>nodo en estrella</strong> (<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math> estable, <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math> inestable).",
      "<strong>b) <math display=\"inline\"><mi>A</mi></math> no diagonalizable (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>12</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>a</mi><mn>21</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≠</mo><mn>0</mn></mrow></math>)</strong>: la solución lleva el término <math display=\"inline\"><mrow><mi>t</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math> y se forma un <strong>nodo impropio</strong>."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Raíces dobles: nodo estrella y nodo impropio.",
     "src": "../media/irudiak/6ffcb7f63aeb2722.svg",
     "zabalera": 358
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema mecánico unidimensional con rozamiento"
    },
    {
     "mota": "testua",
     "html": "La ecuación del movimiento <math display=\"inline\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> haciendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> se convierte en un sistema de primer orden:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>γ</mi><mi>m</mi></mfrac><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Autovalores de la linealización en los puntos de equilibrio (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mi>γ</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>±</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>γ</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, si <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math> (mínimo del potencial) el equilibrio es estable (sin rozamiento, centro; con rozamiento, foco estable); si <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><mn>0</mn></mrow></math> (máximo) es un punto de silla, siempre inestable."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Contrastado con EDF:</strong> la terminología es la canónica del libro (<code>08_estabilidad.typ</code>): <strong>foco</strong> o <strong>punto espiral</strong>, <strong>centro</strong> o <strong>vórtice</strong>, estable/inestable. La clasificación mediante <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi></mrow></math> concuerda.",
        "<strong>Retratos de fases:</strong> las espirales de los focos son logarítmicas (vectorizadas); el centro, con elipses cerradas; el nodo en estrella, con radios propios; los nodos impropios, con una única dirección propia y la curvatura <math display=\"inline\"><mrow><mi>t</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>. Son cualitativos, siguiendo los bocetos manuales originales.",
        "<strong>Dudas (confianza media):</strong> en la espiral superior de la p. 24 hay dos rótulos borrosos (solo se lee <code>ERRORE...</code>); en la segunda componente de la solución compleja el papel escribe dos veces <code>sin omega t</code>, pero la combinación general exige seno y coseno en cada componente (aquí se ha recogido la forma general). La nota roja del 5/12/2013 es parcialmente legible. Véase"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p024.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 26-27 (unidad 0014, hoja mixta): ejemplo de sistema dinámico no lineal (puntos de equilibrio, linealización, retratos de fases con CeTZ) e introducción a Sturm-Liouville / Green (ortogonalidad de los cosenos, condiciones de contorno del operador lineal); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Espacio de fases del sistema dinámico no lineal (ejemplo 3.23)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Analicemos el sistema"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio"
    },
    {
     "mota": "testua",
     "html": "Resolviendo <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, hay tres puntos de equilibrio: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Linealización"
    },
    {
     "mota": "testua",
     "html": "Jacobiana <math display=\"block\"><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mi>−</mi><mn>4</mn></mrow></math>, autovalores <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math>. La linealización sugiere un <strong>centro</strong>, pero el punto es <strong>no hiperbólico</strong> (parte real nula): Hartman–Grobman no decide, y la naturaleza verdadera depende de los términos no lineales.",
      "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, autovalores <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (signos opuestos): <strong>punto de silla</strong>.",
      "<strong><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></strong>: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, autovalores <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (signos opuestos): <strong>también punto de silla</strong>."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Linealización de los puntos de equilibrio: centro en el origen y sillas en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> .",
     "src": "../media/irudiak/118d794accad469b.svg",
     "zabalera": 385
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Puntos fijos y jacobianas verificados:</strong> los tres puntos de equilibrio y los <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tr</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>J</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>±</mi><mi>i</mi></mrow></math> de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son correctos. Los autovalores en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (silla), y los de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, no desarrollados en el papel, <math display=\"inline\"><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math> (también silla): aquí se han añadido.",
        "<strong>Centro vs espiral:</strong> la linealización del origen da un centro (<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>), pero como el punto es no hiperbólico, los términos no lineales pueden convertirlo en espiral. El papel dibuja una espiral; eso es una <strong>conjetura</strong>, pues la linealización no lo prueba. Aquí se ha representado el centro de lo lineal, con esta anotación.",
        "<strong>Terminología:</strong> <strong>silla</strong>, <strong>centro/vórtice</strong> de EDF 08_estabilidad.typ.",
        "<strong>Dudas (confianza media):</strong> la frase roja superior (<code>PUNTU FINKOEN...</code>) es de lectura media. Véase <code>koadernoa_metodo_n3_p026.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 114 (METMATCG01_0114, IMG_2025_07_12_12_25_42S.jpg): análisis de estabilidad MANUSCRITO de un sistema dinámico no lineal (dx/dt=x^2+y^2-1, dy/dt=x y) — cuatro puntos de equilibrio (0,+-1),(+-1,0), jacobiana (2x,2y;y,x), clasificación: P1,P2 silla (lambda=+-sqrt2), P3 nodo inestable (lambda=1,2), P4 nodo estable (lambda=-1,-2), con autovectores y retratos de fases. Verificado con SymPy (todo correcto). Puntos de equilibrio = lista del margen de 0112. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 1,
   "izenburua": "Estabilidad lineal de un sistema dinámico: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Puntos de equilibrio del sistema no lineal y su naturaleza (Hartman–Grobman): se evalúa la jacobiana en cada punto y los autovalores dan la clasificación."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Puntos de equilibrio y jacobiana",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Condición de equilibrio: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Clasificación punto por punto",
   "blokeak": [
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektoreak",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msqrt><mn>2</mn></msqrt><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "zela (<em>saddle</em>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "analogoa",
       "zela (<em>saddle</em>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "nodo ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "nodo egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Las dos sillas (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math>) tienen <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math> (signos contrarios); en <math display=\"inline\"><msub><mi>P</mi><mn>3</mn></msub></math> dos autovalores positivos (nodo <strong>inestable</strong>, estrella saliente) y en <math display=\"inline\"><msub><mi>P</mi><mn>4</mn></msub></math> dos negativos (nodo <strong>estable</strong>, estrella entrante)."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Retrato de fases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Retrato de fases del sistema: dos sillas (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y dos nodos (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inestable, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estable)."
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (líneas de corriente; velocidad coloreada). Silla: rojo; centro/foco: azul; nodo: verde; nulclinas: discontinuas. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/b36559c9fa97b1f9.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las flechas dan la dirección real del campo punto a punto. <em>Figura editorial.</em>",
     "src": "../media/irudiak/00f6cfbab31bc77a.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Los cuatro puntos de equilibrio, la jacobiana, los autovalores, los autovectores y la clasificación verificados con SymPy. Los puntos de equilibrio de este sistema (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) coinciden con la lista escrita a mano en el margen del boletín 0112.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0114</code>, <code>IMG_2025_07_12_12_25_42S.jpg</code>; «MÉTODO M.» lote, sesión 07_12). Análisis manuscrito completo de la estabilidad lineal de un sistema dinámico no lineal, con bocetos de retratos de fases. Todos los resultados verificados con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p114.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 115 (METMATCG01_0115, IMG_2025_07_12_12_25_50S.jpg): continuación de 114, análisis CUALITATIVO del mismo sistema — dos simetrías (reflexión y->-y; (x,t)->(-x,-t)), estudio de signos (dx/dt=0 en el círculo unidad, <0 dentro >0 fuera; dy/dt=0 en los ejes), retrato de fases global y planteamiento de la primera integral dt=dx/(x^2+y^2-1)=dy/(xy). Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Análisis cualitativo: simetrías, signos y primera integral (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Estudio global del mismo sistema de la hoja 114: simetrías, signo del campo y planteamiento de la primera integral de las trayectorias."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simetrías"
    },
    {
     "mota": "testua",
     "html": "El sistema tiene dos simetrías:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">X ardatzarekiko islapena</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>−</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aldatu gabe</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La primera deja <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> sin cambio e intercambia el signo de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math> junto con el de <math display=\"inline\"><mi>y</mi></math>; la segunda deja <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> invariante y con <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math> recupera la forma de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Signo del campo (nulclinas)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hemen: </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> barruan</mtext></mrow><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kanpoan</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hemen: </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">ardatzak</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El círculo unidad es la nulclina de <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>: dentro el campo apunta hacia dentro (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math>), fuera hacia fuera (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>). Los ejes son las nulclinas de <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></math>. Esto sirve para construir por cuadrantes el retrato de fases global (las dos sillas en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, los nodos en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; véase la hoja 114)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Primera integral (planteamiento)"
    },
    {
     "mota": "testua",
     "html": "Eliminando el tiempo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>x</mi><mi>y</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>x</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Las dos simetrías y el estudio de signos verificados con SymPy. La primera integral está planteada (en esta hoja no se resuelve). El sistema y la clasificación de los puntos de equilibrio están en la hoja 114.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0115</code>, <code>IMG_2025_07_12_12_25_50S.jpg</code>; «MÉTODO M.» lote, sesión 07_12). Análisis cualitativo global del sistema de la hoja 114 (simetrías, signos, retrato de fases, primera integral). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p115.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 116 (METMATCG01_0116, IMG_2025_07_12_12_25_55S.jpg): análisis de estabilidad del sistema dinámico (dx/dt=sinh(x+y), dy/dt=y(x-1)) = solución de la diapositiva 0095 «Problema 11 (hoja)». Dos puntos de equilibrio P1(1,-1) foco inestable (lambda=(1+-sqrt3 i)/2, Re>0) y P2(0,0) silla (lambda=+-1, v=(1,0),(1,-2)), jacobiana (cosh(x+y),cosh(x+y);y,x-1), estudio de signos. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Sistema dinámico: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Puntos de equilibrio y naturaleza de este sistema (análisis de la diapositiva 0095 «Problema 11»)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio y jacobiana"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>), por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektoreak",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "foku ezegonkorra (kiribila)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "zela (<em>saddle</em>)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Los autovalores de <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> son complejos conjugados, con parte real positiva: <strong>foco inestable</strong>. En <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> autovalores reales opuestos: <strong>silla</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Signo del campo"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> en las rectas; <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> en la recta (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> si <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&lt;</mo><mn>0</mn></mrow></math> si <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&lt;</mo><mn>0</mn></mrow></math>). Esas rectas dividen el plano en regiones de signo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "testua",
     "html": "Retrato de fases: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> foco inestable y <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> silla; nulclina <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (verde)."
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (líneas de corriente; velocidad coloreada). Silla: rojo; centro/foco: azul; nodo: verde; nulclinas: discontinuas. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/828c25b1eaaee64f.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las flechas dan la dirección real del campo punto a punto. <em>Figura editorial.</em>",
     "src": "../media/irudiak/4e012aa82bce7f0c.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Puntos de equilibrio, jacobiana, autovalores y clasificación verificados con SymPy. Este sistema es el de la diapositiva 0095 «Problema 11 (hoja)» (retrato de fases impreso).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0116</code>, <code>IMG_2025_07_12_12_25_55S.jpg</code>; «MÉTODO M.» lote, sesión 07_12). Análisis de estabilidad manuscrito del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (= diapositiva 0095). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p116.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 125 (METMATCG01_0125, IMG_2025_07_12_12_27_49S.jpg; «M. METHODS 15/12/2015»): sistema dinámico dx/dt=2y+3y^2, dy/dt=2x+3x^2 (= 0093 «Problema 5»). Cuatro equilibrios: P2(-2/3,-2/3), P3(0,0) silla (lambda=+-2); P1(-2/3,0), P4(0,-2/3) centro (lambda=+-2i). PRIMERA INTEGRAL H=x^2+x^3-y^2-y^3 (separable); la recta invariante x=y une las dos sillas (H=0). Verificado con SymPy (dH/dt=0, x=y invariante). Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Sistema dinámico y primera integral: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Análisis de la diapositiva 0093 «Problema 5»: puntos de equilibrio, naturaleza y <strong>primera integral</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio y clasificación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; jacobiana <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Primera integral (separable)"
    },
    {
     "mota": "testua",
     "html": "Como <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mi>/</mi><mi>d</mi><mi>y</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> es separable, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>+</mo><mi>K</mi></mrow></math></span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>H</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> en el flujo (verificado). <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: las dos sillas están en la <strong>misma curva de nivel</strong> (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math>), conexión heteroclínica. <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math> atraviesa <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recta invariante <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>y</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> inbariantea</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La recta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> une las dos sillas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (conexión heteroclínica)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "testua",
     "html": "Retrato de fases del sistema (calculado numéricamente). Dos sillas (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math>) y dos centros (<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math>); la recta invariante <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> (verde) une las dos sillas."
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (líneas de corriente; velocidad coloreada). Silla: ▪ rojo; centro: ● azul; nulclinas: discontinuas; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> : verde. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/4e331e58bade83aa.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las flechas dan la dirección real del campo punto a punto. <em>Figura editorial.</em>",
     "src": "../media/irudiak/05e9b9badd3cd078.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Equilibrios, autovalores, primera integral e invariante <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> verificados con SymPy. La primera integral convierte <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math> en <strong>centros genuinos</strong> (no espirales): las trayectorias son curvas <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mtext mathvariant=\"normal\">kte</mtext></mrow></math>. Este sistema es el de la diapositiva 0093 «Problema 5».</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0125</code>, <code>IMG_2025_07_12_12_27_49S.jpg</code>; «MÉTODO M.» lote, «15/12/2015»). Análisis completo del sistema dinámico con primera integral (= diapositiva 0093). Verificado con SymPy; sin correcciones. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p125.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 126 (METMATCG01_0126, IMG_2025_07_12_12_28_02S.jpg): sistema CONSERVATIVO dx/dt=y, dy/dt=-x+3lambda^2/(4(2lambda-x))=-V'(x) (= 0091 «Problema 2»). Potencial V=x^2/2+(3lambda^2/4)ln|2lambda-x|; energía H=x^2+y^2+(3/2)lambda^2 ln|2lambda-x|. Equilibrio: x=lambda/2 centro (V''=2/3>0), x=3lambda/2 silla (V''=-2<0); x=2lambda punto singular. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Sistema conservativo: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Análisis de la diapositiva 0091 «Problema 2»: sistema newtoniano con un potencial."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potencial e integral de la energía"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, el sistema es conservativo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>H</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msup><mi>λ</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>H</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> en el flujo (verificado): la energía se conserva."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio y clasificación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>8</mn><mi>λ</mi><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mn>2</mn><mo>,</mo><mn>3</mn><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math></span>. Signos de <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><msup><mi>V</mi><mo>″</mo></msup></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "zentroa (orbita itxiak)"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "zela (<em>saddle</em>)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> el potencial diverge (<strong>punto singular</strong>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>→</mo><mi>∞</mi></mrow></math>). El sistema tiene la simetría <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "testua",
     "html": "Retrato de fases (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math> centro y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3</mn><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math> silla; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math> punto singular."
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (líneas de corriente; velocidad coloreada). Silla: rojo; centro/foco: azul; nodo: verde; nulclinas: discontinuas. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/74ee92b0bacd557b.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las flechas dan la dirección real del campo punto a punto. <em>Figura editorial.</em>",
     "src": "../media/irudiak/38a0d55bde9859de.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Potencial, integral de la energía, puntos de equilibrio y clasificación (centro en <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>, silla en <math display=\"inline\"><mrow><mn>3</mn><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>) verificados con SymPy. El centro lo forman órbitas cerradas de los niveles de energía. Este sistema es el de la diapositiva 0091 «Problema 2».</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0126</code>, <code>IMG_2025_07_12_12_28_02S.jpg</code>; «MÉTODO M.» lote). Análisis completo del sistema conservativo con potencial (= diapositiva 0091). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p126.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 127 (METMATCG01_0127, IMG_2025_07_12_12_28_10S.jpg; «M. METHODS 10/12/2015»): sistema dx/dt=x, dy/dt=(y-x)(y-x-1). Equilibrio P1(0,0) silla (lambda=1,-1; v=(2,1),(0,1)) y P2(0,1) NODO DEGENERADO (lambda=1 doble, defectivo, única dirección (0,1)). Jacobiana (1,0;-2y+2x+1,2y-2x-1). Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Sistema dinámico: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Puntos de equilibrio y su naturaleza; caso especial: nodo <strong>degenerado</strong> (defectivo)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio y jacobiana"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>, por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "autobektoreak",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "zela (<em>saddle</em>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>1</mn></math> (bikoitza)",
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> bakarrik",
       "nodo degeneratua (defektiboa)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "En <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math> es doble pero hay un <strong>único</strong> autovector (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): la matriz no es diagonalizable <math display=\"inline\"><mo>→</mo></math> <strong>nodo degenerado</strong> (inestable, <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una silla ordinaria."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "testua",
     "html": "Retrato de fases: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> silla y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo degenerado; nulclinas <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> (verde)."
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (líneas de corriente; velocidad coloreada). Silla: rojo; centro/foco: azul; nodo: verde; nulclinas: discontinuas. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/ed88d469d272e88b.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las flechas dan la dirección real del campo punto a punto. <em>Figura editorial.</em>",
     "src": "../media/irudiak/c5a4919d32085ada.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Equilibrio, jacobiana, autovalores y clasificación verificados con SymPy. Caso especial: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo degenerado (defectivo, única dirección propia). El sistema tiene la simetría <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0127</code>, <code>IMG_2025_07_12_12_28_10S.jpg</code>; «MÉTODO M.» lote, «10/12/2015»). Análisis completo de estabilidad del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Verificado con SymPy; sin correcciones. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p127.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 128 (METMATCG01_0128, IMG_2025_07_12_12_28_20S.jpg; «UNIDIMENSIONAL MECHANICAL SYSTEMS»): teoría de sistemas mecánicos 1D (ẍ=-V'(x), energía (1/2)ẋ^2+V=C, centro=mínimo/silla=máximo) + ejemplo 14 dx/dt=5y, dy/dt=(x-1)(x+2)(x+3): x=1 silla (lambda=+-2sqrt15), x=-2 centro (lambda=+-i sqrt15), x=-3 silla (lambda=+-2sqrt5); energía H=(5/2)y^2-G(x); energía distinta de las dos sillas (47/12 vs -27/4) -> trayectorias separadas. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Sistemas mecánicos 1D: teoría y ejemplo",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teoría (sistema conservativo)"
    },
    {
     "mota": "testua",
     "html": "En sistemas de la forma <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (la fuerza proviene de un potencial, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mo>∫</mo><mi>F</mi><mi>d</mi><mi>x</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">energia</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los puntos de equilibrio están en <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: el <strong>mínimo</strong> de <math display=\"inline\"><mi>V</mi></math> <math display=\"inline\"><mo>→</mo></math> <strong>centro</strong> (estable); el <strong>máximo</strong> de <math display=\"inline\"><mi>V</mi></math> <math display=\"inline\"><mo>→</mo></math> <strong>silla</strong> (inestable). Simetría: <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><mi>−</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>−</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo (14)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>−</mo><mn>6</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Puntos de equilibrio (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>; jacobiana <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>8</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>12</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><msqrt><mn>15</mn></msqrt></mrow></math>",
       "zela"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>15</mn></msqrt></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>4</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><msqrt><mn>5</mn></msqrt></mrow></math>",
       "zela"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Energía: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mn>6</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> (<math display=\"inline\"><mrow><mi>d</mi><mi>H</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>). Las dos sillas tienen energía <strong>distinta</strong> (<math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>47</mn><mi>/</mi><mn>12</mn></mrow></math>, <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>27</mn><mi>/</mi><mn>4</mn></mrow></math>), por lo que <strong>no comparten trayectoria</strong> (no están unidas), a diferencia del caso de 0125."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "testua",
     "html": "Retrato de fases (ejemplo 14): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>3</mn></mrow></math> silla, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math> centro."
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (líneas de corriente; velocidad coloreada). Silla: rojo; centro/foco: azul; nodo: verde; nulclinas: discontinuas. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/ca0bdb93c9b0dd58.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las flechas dan la dirección real del campo punto a punto. <em>Figura editorial.</em>",
     "src": "../media/irudiak/f4de8e8e9fdedbb9.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Teoría (energía, centro=mínimo, silla=máximo) y ejemplo (2 sillas + centro, energía) verificados con SymPy. Distinta energía de las dos sillas <math display=\"inline\"><mo>→</mo></math> trayectorias separadas.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0128</code>, <code>IMG_2025_07_12_12_28_20S.jpg</code>; «MÉTODO M.» lote). Teoría de sistemas mecánicos 1D + ejemplo 14. Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p128.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 129 (METMATCG01_0129, IMG_2025_07_12_12_28_28S.jpg; «M. METHODS 3/12/2015»): teoría de sistemas lineales 2D (método de autovalores). x=e^{lambda t}c -> Ac=lambda c, det(A-Ilambda)=0; caso complejo (a-lambda,-b;b,a-lambda) -> lambda=a+-ib, autovector (1,-i); lambda=(trA+-sqrt(Delta))/2, Delta=(trA)^2-4detA; clasificación (a=0 centro, a>0 espiral inest., a<0 espiral est.). Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Sistemas lineales 2D: método de autovalores y clasificación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los sistemas lineales <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math> se resuelven mediante autovalores."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema de autovalores"
    },
    {
     "mota": "testua",
     "html": "Ensayando <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mi mathvariant=\"bold-italic\">𝒄</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒄</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒄</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒄</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>I</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Para que <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒄</mi><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>−</mo><mi>I</mi><mi>λ</mi></mrow></math> debe ser singular.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Caso complejo"
    },
    {
     "mota": "testua",
     "html": "Para <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒄</mi><mo>+</mo></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>i</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>i</mi><msub><mi>c</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación (traza y determinante)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>A</mi><mo>±</mo><msqrt><mi mathvariant=\"normal\">Δ</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi>A</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>autobalioak</strong>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>b</mi></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>)",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Con autovalores reales distintos, nodo/silla; el signo de la parte real decide la estabilidad."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Método de autovalores, autovector del caso complejo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>−</mi><mi>i</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y clasificación mediante traza-determinante verificados con SymPy.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0129</code>, <code>IMG_2025_07_12_12_28_28S.jpg</code>; «MÉTODO M.» lote, «3/12/2015»). Teoría de sistemas lineales 2D (autovalores, caso complejo, clasificación). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p129.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 130 (METMATCG01_0130, IMG_2025_07_12_12_28_33S.jpg; continuación de 0129): caso de autovalores complejos (a,-b;b,a). Reducción a EDO de 2.º orden x''-2ax'+(a^2+b^2)x=0 -> lambda=a+-ib; solución x=e^{at}A cos(b(t-t0)), y=e^{at}A sin(...); x^2+y^2=e^{2at}A^2. Clasificación: a=0 círculos (centro), a>0 espiral inestable, a<0 espiral asintóticamente estable. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Autovalores complejos: espirales y centros (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>b</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>b</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>a</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><mi>b</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>b</mi><mi>x</mi><mo>+</mo><mi>a</mi><mi>y</mi></mrow></math> (continuación de 0129): caso de autovalores complejos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reducción y solución"
    },
    {
     "mota": "testua",
     "html": "Reducido a EDO de 2.º orden:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>a</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>a</mi><mo>±</mo><mi>i</mi><mi>b</mi><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>a</mi><mi>t</mi></mrow></msup><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La trayectoria es una espiral logarítmica (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>); si <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>, una circunferencia."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación (<math display=\"inline\"><mrow><mi>b</mi><mo>≠</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<math display=\"inline\"><mi>a</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>",
       "zentroa (zirkuluak, neutralki egonkorra)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>",
       "kiribil ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>",
       "kiribil asintotikoki egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "La parte real (<math display=\"inline\"><mi>a</mi></math>) decide la estabilidad; la frecuencia (<math display=\"inline\"><mi>b</mi></math>), el giro. (Si <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>, nodo/estrella: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup></mrow></math>.)"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Reducción, autovalores, solución y <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>a</mi><mi>t</mi></mrow></msup><msup><mi>A</mi><mn>2</mn></msup></mrow></math> verificados con SymPy. <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn></mrow></math>: asintóticamente estable (al centro en tiempo infinito); <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: inestable; <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>: centro.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0130</code>, <code>IMG_2025_07_12_12_28_33S.jpg</code>; «MÉTODO M.» lote). Desarrollo del caso de autovalores complejos (continuación de 0129). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p130.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 131 (METMATCG01_0131, IMG_2025_07_12_12_28_40S.jpg; «STABILITY of dynamic systems», 2/12/2015): introducción a la estabilidad (comportamiento cualitativo, conjuntos invariantes, puntos de equilibrio). Ejemplos: x'=ax (estable a<0) y x'=ax-x^3 (equilibrios 0,+-sqrt(a); bifurcación en horquilla). Péndulo (orden 2->1); Liapunov (estable vs asintótica). Verificado con SymPy; corrección (x^2->x^3). Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a43",
   "maila": 1,
   "izenburua": "Estabilidad: comportamiento cualitativo y puntos de equilibrio",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En sistemas autónomos (<math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), a menudo no se resuelve: se estudia el <strong>comportamiento cualitativo</strong> para <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> (estable vs caótico)."
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Puntos de equilibrio y estabilidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Punto de equilibrio: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒙</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (no cambia con el tiempo); puede ser estable o no."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplos:</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>:</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> egonkorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>a</mi><mo>&lt;</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada</mtext></mrow><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> oreka </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><msqrt><mi>a</mi></msqrt><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><msqrt><mi>a</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>a</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> inestable, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><msqrt><mi>a</mi></msqrt></mrow></math> estables (bifurcación en horquilla)."
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Péndulo y Liapunov",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El péndulo (<math display=\"inline\"><mrow><msup><mi>θ</mi><mo>″</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) es de 2.º orden <math display=\"inline\"><mrow><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sistema de 1.er orden. <strong>Criterio de Liapunov:</strong> <strong>estable</strong> (órbitas acotadas en el entorno, círculos) vs <strong>asintóticamente estable</strong> (las órbitas van al equilibrio, espiral)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Puntos de equilibrio y estabilidad (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>) verificados con SymPy. Aunque la hoja original escribe «<math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>», sus raíces (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mi>±</mi><msqrt><mi>a</mi></msqrt></mrow></math>) expresan <math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> (corregido).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0131</code>, <code>IMG_2025_07_12_12_28_40S.jpg</code>; «MÉTODO M.» lote, «2/12/2015»). Introducción teórica a la estabilidad (comportamiento cualitativo, puntos de equilibrio, Liapunov). Verificado con SymPy; una corrección (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>→</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p131.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 135 (METMATCG01_0135, IMG_2025_07_12_12_29_10S.jpg): dos sistemas. (1) desacoplado dx/dt=ln((x+1)^2), dy/dt=ln((y+1)^2) COMPLETO: P1(0,0) estrella inestable (lambda=2 dob.), P4(-2,-2) estrella estable (lambda=-2 dob.), P2/P3 silla (lambda=+-2); x=-1,y=-1 singulares; jacobiana diag(2/(x+1),2/(y+1)). (2) dx/dt=y-y^3, dy/dt=x-x^2 empezado (6 equilibrios, en 0136... NO, 0136 es otro sistema; continúa en otra hoja). Retrato de fases (sistema 1). Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Dos sistemas dinámicos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema 1 (desacoplado): <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn></mrow></math></span>; igual para <math display=\"inline\"><mi>y</mi></math>. La jacobiana es diagonal: <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>2</mn></math> (bikoitza)",
       "izar ezegonkorra (nodo propioa)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math> (bikoitza)",
       "izar egonkorra"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "En las rectas <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> el campo diverge (singularidades logarítmicas)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Retrato de fases (sistema 1)"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estrella inestable, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estrella estable, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo>,</mo><msub><mi>P</mi><mn>3</mn></msub></mrow></math> silla; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> singulares. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/c7a744139b4b4ee3.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/a968e6b86c6b8a4a.svg",
     "zabalera": 284
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema 2: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>; seis puntos de equilibrio <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. El estudio de este sistema <strong>continúa en la hoja 0136</strong> (aquí solo empezado)."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Equilibrio, jacobiana y clasificación del sistema 1 (2 estrellas + 2 sillas) verificados con SymPy. También los puntos de equilibrio del sistema 2; su análisis se completa en 0136.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0135</code>, <code>IMG_2025_07_12_12_29_10S.jpg</code>; «MÉTODO M.» lote). Dos sistemas dinámicos (el 1.º completo; el 2.º continúa en 0136). Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p135.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 136 (METMATCG01_0136, IMG_2025_07_12_12_29_18S.jpg): sistema dx/dt=y^2-x^2-x, dy/dt=-y+2xy. Cuatro equilibrios: P1(0,0) estrella estable (lambda=-1 dob.), P2(-1,0), P3(1/2,sqrt3/2), P4(1/2,-sqrt3/2) silla (lambda=1,-3); jacobiana (-2x-1,2y;2y,2x-1). Autovectores con SymPy. Retrato de fases. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Sistema dinámico: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Puntos de equilibrio: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; con <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> cuatro puntos. Jacobiana <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> (bikoitza)",
       "izar egonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mi>−</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mi>−</mi><mn>3</mn></mrow></math>",
       "zela"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> es un nodo propio (estrella) estable; los otros tres, sillas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estrella estable; <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> , <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>±</mi><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> silla. Nulclinas: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (discontinuas). <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/0b89f16c0e3814e0.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/d4f0f2bed2126942.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Los cuatro puntos de equilibrio, la jacobiana, los autovalores y la clasificación (estrella estable + 3 sillas) verificados con SymPy. Autovectores de <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math> con SymPy (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><msqrt><mn>3</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0136</code>, <code>IMG_2025_07_12_12_29_18S.jpg</code>; «MÉTODO M.» lote). Análisis completo del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p136.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 137 (METMATCG01_0137, IMG_2025_07_12_12_29_35S.jpg; «DIAGRAMA DE FASE, 29/10/2015»): sistema dx/dt=y-1+x^2, dy/dt=-x^2+1+y. P1(1,0) espiral inestable (lambda=(3+-sqrt7 i)/2, Re=3/2>0), P2(-1,0) silla (lambda=(-1+-sqrt17)/2); jacobiana (2x,1;-2x,1). Retrato de fases. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Diagrama de fases: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sumando las dos ecuaciones <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>→</mo></mrow></math> dos puntos de equilibrio. Jacobiana <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>±</mo><msqrt><mn>7</mn></msqrt><mi>i</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>",
       "kiribil ezegonkorra (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Re</mtext><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>&gt;</mo><mn>0</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>17</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>",
       "zela"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> espiral inestable; <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> silla. <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/cca78a0b44c9e7ad.svg",
     "zabalera": 526
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/bfe44c50028bc157.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Puntos de equilibrio, jacobiana, autovalores y clasificación (espiral inestable + silla) verificados con SymPy. El autor escribió «parece una espiral» junto a <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math>.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0137</code>, <code>IMG_2025_07_12_12_29_35S.jpg</code>; «MÉTODO M.» lote, «29/10/2015»). Análisis de fases del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p137.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 138 (METMATCG01_0138, IMG_2025_07_12_12_29_42S.jpg; ejercicio de examen «JUNIO 2013 4A»): sistema dx/dt=(x^2+2)cos y sin y, dy/dt=x cosh x. Equilibrios x=0 (cosh x>0) & sin2y=0; P1(0,0) silla (lambda=±sqrt2, autovectores (sqrt2,1),(sqrt2,-1)), P2(0,pi/2) centro (lambda=±i sqrt2). Sistema reversible respecto de R(x,y)=(-x,y) y P2 en el eje x=0 → verdadero centro no lineal (no solo el resultado de lo lineal). Retrato de fases (A streamplot + B CeTZ). Verificado con SymPy; una corrección menor con mención (1.ª ecuación de lambda1 -sqrt2·a+2b, no -2b; mismo resultado). Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Diagrama de fases: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ejercicio de examen «JUNIO 2013 4A». Puntos de equilibrio: <math display=\"inline\"><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mi>k</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>; en la vista <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "zela (autobektoreak <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "zentroa (orbita itxiak)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot). El manuscrito estudia la silla <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el centro <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ; la ventana más amplia muestra la cadena periódica en <math display=\"inline\"><mi>y</mi></math> : centros en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> , sillas en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math> . <em>Figura editorial; no está en el manuscrito original.</em>",
     "src": "../media/irudiak/2212ff79bc2a99e7.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial): las líneas discontinuas son las nulclinas (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>k</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> en rojo; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> en azul). <em>Figura editorial.</em>",
     "src": "../media/irudiak/eafa0c2a2adaca22.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Puntos de equilibrio, jacobiana, autovalores, autovectores y clasificación (silla + centro) verificados con SymPy. Como el sistema es reversible respecto de <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> está en el eje <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> es un verdadero centro no lineal (no solo el resultado de lo lineal). El sistema es <math display=\"inline\"><mi>π</mi></math>-periódico en <math display=\"inline\"><mi>y</mi></math>: se alternan centros y sillas.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0138</code>, <code>IMG_2025_07_12_12_29_42S.jpg</code>; ejercicio de examen «JUNIO 2013 4A»). Análisis de fases del sistema <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p138.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 139 (METMATCG01_0139, IMG_2025_07_12_12_29_52S.jpg; «DIAGRAMA DE FASE», ejercicio 8): sistema dx/dt=y-y^3, dy/dt=-x-y^2. TRES equilibrios: A(0,0) centro (lambda=±i), B(-1,1) silla (lambda=-1±√3), C(-1,-1) silla (lambda=1±√3); jacobiana (0,1-3y^2;-1,-2y). Sistema reversible respecto de R(x,y)=(x,-y) → A verdadero centro no lineal. Retrato de fases (A streamplot + B CeTZ). Verificado con SymPy, sin correcciones. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Diagrama de fases: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "«DIAGRAMA DE FASE», ejercicio 8. TRES puntos de equilibrio: <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mn>0</mn><mo>→</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, es decir <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">tr</mtext><mi>/</mi><mi mathvariant=\"normal\">det</mi></mrow></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>/</mi><mo>−</mo><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>2.73</mn><mo>,</mo><mn>0.73</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mo>−</mo><mn>2</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mn>1</mn><mo>±</mo><msqrt><mn>3</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>0.73</mn><mo>,</mo><mn>2.73</mn></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centro (órbitas cerradas), <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sillas. Líneas discontinuas: nulclinas de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn></mrow></math> ). La nulclina de <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> es la parábola <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (no dibujada). <em>Figura editorial.</em>",
     "src": "../media/irudiak/458dff4e0c3aafe7.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/df50634f90cce930.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Los tres puntos de equilibrio, la jacobiana, los autovalores y la clasificación (centro + dos sillas) verificados con SymPy, sin correcciones. Como el sistema es reversible respecto de <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mi>A</mi></math> está en el eje <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mi>A</mi></math> es un verdadero centro no lineal.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0139</code>, <code>IMG_2025_07_12_12_29_52S.jpg</code>; «DIAGRAMA DE FASE», ejercicio 8). Abajo, notas de trazado y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mi>t</mi><mo>−</mo><mi>π</mi></mrow></math> (en rojo); post-it amarillo sobre funciones pares/impares (Fourier aparte, pegado). Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p139.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 140 (METMATCG01_0140, IMG_2025_07_12_12_29_58S.jpg; «DIAGRAMA DE FASE, MÉTODOS, 29/10/2015», «INVENTO»): sistema dx/dt=x(1-y), dy/dt=y(1-x). Equilibrios P1(0,0) nodo en estrella inestable (J=I, lambda=1 m=2) y P2(1,1) silla (lambda=±1, autovectores (1,-1) inest./(1,1) est.); jacobiana (1-y,-x;-y,1-x). Diagonal x=y invariante (conexión heteroclínica). Pequeño sistema aparte dx/dt=y-1,dy/dt=-x+1: (1,1) centro. Retrato de fases (A streamplot + B CeTZ). Verificado con SymPy, sin correcciones. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Diagrama de fases: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "«DIAGRAMA DE FASE — MÉTODOS — 29/10/2015», «INVENTO». Equilibrios <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>y</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>x</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>1</mn></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>2</mn></mrow></math>)",
       "nodo izarra, ezegonkorra (<math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ezeg., <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> egonk.)"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "La diagonal <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> es invariante: <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>→</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math> conexión heteroclínica (dirección estable de <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodo estrella inestable (rayos radiales), <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> silla. Líneas discontinuas: nulclinas (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> : <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> ; <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> : <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> ). En verde, la diagonal invariante <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> . <em>Figura editorial.</em>",
     "src": "../media/irudiak/e433c8da68571ae2.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). <em>Figura editorial.</em>",
     "src": "../media/irudiak/e1d183813ea59145.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Equilibrios, jacobiana, autovalores, autovectores y clasificación (nodo en estrella + silla) verificados con SymPy. La diagonal <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> es invariante (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>). El autor escribió también un pequeño sistema aparte (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centro).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0140</code>, <code>IMG_2025_07_12_12_29_58S.jpg</code>; «DIAGRAMA DE FASE», «INVENTO», 29/10/2015). Análisis de fases del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p140.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 141 (METMATCG01_0141, IMG_2025_07_12_12_30_13S.jpg): DOS sistemas. (1) dx/dt=y-1+x, dy/dt=-x+1+y: (1,0) espiral inestable (lambda=1±i). (2) dx/dt=y^2-1+x, dy/dt=-x^2+1+y: CUATRO equilibrios. ⚠ CORRECCIÓN: el autor factorizó mal -y^3+2y+1 ((y+1)(y^2+y-1), raíces (-1±√5)/2, x=y) y escribió «FAIL»; lo correcto es (y+1)(y^2-y-1), raíces (1±√5)/2, x=-y. Equilibrios correctos: P1(1,0),P2(0,-1) nodos impropios inestables (lambda=1 dob.), P3(-(1+√5)/2,(1+√5)/2)/P4((-1+√5)/2,(1-√5)/2) sillas. Retrato de fases (A+B) para el sistema 2. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Dos sistemas: espiral lineal + sistema cuártico (CUATRO equilibrios)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Sistema 1 (lineal):</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>; equilibrio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi><mo>→</mo></mrow></math> <strong>espiral inestable</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Sistema 2 (no lineal):</strong> <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>y</mi></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>; el factor correcto es <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (no <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>). Jacobiana <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mn>2</mn><msqrt><mrow><mi>−</mi><mi>x</mi><mi>y</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">⚠ <strong>Corrección:</strong> el autor factorizó mal <math display=\"inline\"><mrow><mi>−</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), sacando las raíces <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math>, y escribió «FAIL». El factor correcto da las raíces <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn></mrow></math>, donde <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> y por tanto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>. Por tanto los <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>,</mo><msub><mi>P</mi><mn>4</mn></msub></mrow></math> del autor con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> están mal; corregidos abajo (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi></mrow></math>). Los <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>,</mo><msub><mi>P</mi><mn>2</mn></msub></mrow></math> eran correctos.</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Puntos de equilibrio correctos del sistema 2"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>0</mn></math>",
       "<math display=\"inline\"><mn>1</mn></math> (bik.)",
       "nodo inpropioa, ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mn>0</mn></math>",
       "<math display=\"inline\"><mn>1</mn></math> (bik.)",
       "nodo inpropioa, ezegonkorra"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo>≈</mo><mi>−</mi><mn>2.62</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mi>−</mi><msqrt><mn>5</mn></msqrt><mo>,</mo><mn>2</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>2.24</mn><mo>,</mo><mn>4.24</mn></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>,</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mrow><mo>≈</mo><mi>−</mi><mn>0.38</mn></mrow></math>",
       "<math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><msqrt><mn>5</mn></msqrt><mo>,</mo><msqrt><mn>5</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mi>−</mi><mn>0.24</mn><mo>,</mo><mn>2.24</mn></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (sistema 2)"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot), sistema 2. <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> nodos impropios inestables; <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1.62</mn><mo>,</mo><mn>1.62</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mn>4</mn></msub><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.62</mn><mo>,</mo><mi>−</mi><mn>0.62</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sillas. Ventana amplia, para mostrar la estructura global. <em>Figura editorial.</em>",
     "src": "../media/irudiak/374c07b942315021.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial), sistema 2. <em>Figura editorial.</em>",
     "src": "../media/irudiak/dd990e387d7cb48e.svg",
     "zabalera": 335
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0141</code>, <code>IMG_2025_07_12_12_30_13S.jpg</code>). Dos sistemas: espiral lineal (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>±</mo><mi>i</mi></mrow></math>) y sistema cuártico con cuatro equilibrios. El autor cometió un error de factorización y escribió «FAIL»; aquí corregido y verificado con SymPy. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p141.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 142 (METMATCG01_0142, IMG_2025_07_12_12_30_30S.jpg; «MÉTODOS», 16/12/2014): sistema dx/dt=2y+3y^2, dy/dt=2x+3x^2 (= unidad 0125; aquí PRIMERA INTEGRAL). Cuatro equilibrios: A(0,0),D(-2/3,-2/3) sillas (lambda=±2), B(0,-2/3),C(-2/3,0) centros (lambda=±2i); jacobiana (0,2+6y;2+6x,0). SISTEMA CONSERVATIVO: H=y^3+y^2-x^3-x^2 primera integral (Hdot=0), H=(y-x)(x^2+xy+y^2+x+y). Retrato de fases (A+B). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Sistema conservativo: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (+ primera integral)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El mismo sistema en la unidad <code>METMATCG01_0125</code>; esta hoja desarrolla la <strong>primera integral</strong>. Cuatro equilibrios: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana <math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>+</mo><mn>6</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Clasificación punto por punto"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>M</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn><mi>i</mi></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mn>2</mn></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
      ]
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Primera integral (sistema conservativo)"
    },
    {
     "mota": "testua",
     "html": "De <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi></mrow></math>, e integrando <math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> es <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>H</mi><mi>x</mi></msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>H</mi><mi>y</mi></msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (verificado, SymPy): el sistema es <strong>conservativo</strong>. Factorizando <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; el conjunto <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math> son la diagonal <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> y la cónica <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, ambas pasando por las sillas <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (separatrices). <math display=\"inline\"><mi>D</mi></math> está sobre la cónica."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot). <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sillas; <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centros (órbitas cerradas = curvas de nivel de <math display=\"inline\"><mi>H</mi></math> ). En verde, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> (rama <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mn>0</mn></mrow></math> ). <em>Figura editorial.</em>",
     "src": "../media/irudiak/da3ae5bc74039410.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial). Líneas discontinuas: nulclinas (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math> ; <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math> ). <em>Figura editorial.</em>",
     "src": "../media/irudiak/3f31f2b08466a6e6.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Equilibrios, jacobiana, autovalores y clasificación (dos sillas + dos centros) verificados con SymPy. El sistema es <strong>conservativo</strong>: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> primera integral (<math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>), cuyas curvas de nivel son las órbitas. Eso justifica los centros (verdaderos) y las separatrices.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0142</code>, <code>IMG_2025_07_12_12_30_30S.jpg</code>; «MÉTODOS», 16/12/2014). Sistema = <code>METMATCG01_0125</code>; aquí la primera integral y el carácter conservativo. Verificado con SymPy. Véase <code>koadernoa_metmatcg01_p142.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 143 (METMATCG01_0143, IMG_2025_07_12_12_30_37S.jpg): DOS partes. (arriba) Wolfram StreamPlot[{2y+3y^2,2x+3x^2},{x,-2,2},{y,-2,2}] = comprobación del sistema 0142/0125. (abajo) resolución por series en el punto ordinario x=0: EDO real (x^2+x+1)y''-(x^2+3x+2)y'+(x+2)y=0 (las etiquetas con errores de signo; el desarrollo es correcto). Recurrencias a2=a1-a0, 6a3=2a2+a1-a0, a4=a2/6; dos soluciones y1=1+x, y2=x·e^x. Verificado con SymPy (ambas satisfacen la EDO). Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Resolución por series y Wolfram StreamPlot",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ecuación</strong> (deducida del desarrollo del autor; las etiquetas tenían errores de signo): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> siendo <strong>punto ordinario</strong>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></msub><msub><mi>a</mi><mi>n</mi></msub><msup><mi>x</mi><mi>n</mi></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Recurrencias"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo las series e igualando <math display=\"inline\"><msup><mi>x</mi><mi>k</mi></msup></math>: <math display=\"block\"><mrow><msup><mi>x</mi><mn>0</mn></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>a</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mn>1</mn></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><mn>6</mn><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>2</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo>−</mo><msub><mi>a</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>:</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub><mi>/</mi><mn>6</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Las dos soluciones independientes"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>kasua</strong>",
      "hastapenak",
      "<strong>soluzioa</strong>"
     ],
     "lerroak": [
      [
       "A",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>"
      ],
      [
       "B",
       "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mo>,</mo><msub><mi>a</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn><mo>,</mo><mi>…</mi><mo>→</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math></span>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "Solución general: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. (Ambas verificadas con SymPy: satisfacen la EDO.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Wolfram StreamPlot (figura superior): sistema 0142/0125"
    },
    {
     "mota": "testua",
     "html": "En la parte superior de la hoja el autor dibujó con Wolfram Alpha <code>StreamPlot[{2y+3y^2, 2x+3x^2},{x,-2,2},{y,-2,2}]</code>: el retrato de fases del sistema conservativo <code>METMATCG01_0142</code>/<code>METMATCG01_0125</code> (dos centros + dos sillas). Figura editorial de referencia (versión vectorial):"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases del sistema dibujado por el autor con Wolfram (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math> , <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math> ): <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sillas; <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centros. Detalles en <code>METMATCG01_0142</code>. <em>Figura editorial.</em>",
     "src": "../media/irudiak/567fcbc07cb84b5c.svg",
     "zabalera": 513
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Las etiquetas de la EDO tenían errores de signo, pero el desarrollo en serie del autor, las recurrencias y las dos soluciones (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>) son correctos (verificados con SymPy). El StreamPlot superior es la comprobación numérica del sistema 0142.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0143</code>, <code>IMG_2025_07_12_12_30_37S.jpg</code>). Dos partes: Wolfram StreamPlot (sistema 0142) y resolución por series. Verificado con SymPy. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p143.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 144 (METMATCG01_0144, IMG_2025_07_12_12_30_48S.jpg; «JUNIO 2013 2A»): DOS problemas. (1) EDO exacta [-3x+7xy+14y-y^2(1+1/x)-6]dx+[7x-2y]dy=0; factor integrante mu=x·e^x ((Py-Qx)/Q=1+1/x), solución x·e^x(7xy-y^2-3x)=C (tablas 1.25.2/1.25.3). (2) Sistema de fases xdot=y, ydot=-x^3-2x^2+x+2=-(x+2)(x+1)(x-1): P1(-2,0) centro (lambda=±i√3), P2(-1,0) silla (lambda=±√2), P3(1,0) centro (lambda=±i√6); hamiltoniano (H=y^2/2+x^4/4+2x^3/3-x^2/2-2x), reversible. Retrato de fases (A+B). Verificado con SymPy. Confianza alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Dos problemas: EDO exacta (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>) y sistema de fases cúbico",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(1) EDO exacta con factor integrante"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>+</mo><mn>14</mn><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>P</mi><mi>y</mi></msub><mo>−</mo><msub><mi>Q</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>Q</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo>→</mo><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>⋅</mo><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math></span>. Multiplicada por <math display=\"inline\"><mi>μ</mi></math> la EDO es exacta; integrando el potencial (de las tablas <math display=\"inline\"><mrow><mn>1.25</mn><mn>.2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1.25</mn><mn>.3</mn></mrow></math>): <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mi>y</mi><mo>−</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>C</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> (El factor integrante es <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, la misma solución de <code>METMATCG01_0143</code>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(2) Sistema de fases: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>→</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; equilibrios <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Jacobiana <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>x</mi><mo>+</mo><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>puntua</strong>",
      "<math display=\"inline\"><mi>J</mi></math>",
      "<math display=\"inline\"><mi>λ</mi></math>",
      "<strong>izaera</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>3</mn></msqrt></mrow></math>",
       "zentroa"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><msqrt><mn>2</mn></msqrt></mrow></math>",
       "zela (<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>)"
      ],
      [
       "<math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>6</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mi>±</mi><mi>i</mi><msqrt><mn>6</mn></msqrt></mrow></math>",
       "zentroa"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "El sistema es hamiltoniano: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>. Centros en los mínimos de <math display=\"inline\"><mi>V</mi></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>1</mn></mrow></math>), silla en el máximo (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>). La reversibilidad <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>−</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> garantiza que los centros son verdaderos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Retrato de fases (problema 2)"
    },
    {
     "mota": "irudia",
     "oina": "Retrato de fases exacto (streamplot). <math display=\"inline\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centros (órbitas cerradas = curvas de nivel de <math display=\"inline\"><mi>H</mi></math> ); <math display=\"inline\"><mrow><msub><mi>P</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> silla, con separatrices. Líneas discontinuas: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> ), <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math> ). Los dos pozos tienen distinta profundidad (<math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ). <em>Figura editorial.</em>",
     "src": "../media/irudiak/38fa8aed723c7728.svg",
     "zabalera": 564
    },
    {
     "mota": "irudia",
     "oina": "Campo de direcciones real (CeTZ, vectorial), problema 2. <em>Figura editorial.</em>",
     "src": "../media/irudiak/0ec0cd52a9958012.svg",
     "zabalera": 335
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Los dos problemas verificados con SymPy, sin correcciones. (1) El factor <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math> hace exacta la EDO; solución <math display=\"inline\"><mrow><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>C</mi></mrow></math>. (2) Sistema hamiltoniano: dos centros (verdaderos, por reversibilidad) y una silla, con separatrices.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0144</code>, <code>IMG_2025_07_12_12_30_48S.jpg</code>; «JUNIO 2013 2A»). Dos problemas: EDO exacta (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>) y sistema de fases cúbico. Verificado con SymPy. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p144.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, parte A de la unidad 160 (METMATCG01_0160_A, IMG_2025_07_12_12_34_30S.jpg; 20/9/2014): dos esquemas bajo la lectura dudosa «órbitas geométricas». Circunferencias (x-x0)^2+(y-y0)^2=R^2 y (x-A)^2+y^2=B^2; círculos solapados en una lista y dos bucles dentro de una curva exterior. No hay sistema diferencial ni flechas de sentido: solo se ha conservado la geometría visible, sin inventar un retrato de fases exacto. Calco editorial CeTZ declarado. Confianza media-alta",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Esquemas de órbitas geométricas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el tercio superior de la página aparecen dos dibujos, bajo la lectura dudosa «órbitas geométricas». No hay sistema diferencial, parametrización ni flechas de sentido; por tanto los dibujos se recogen como <strong>esquema geométrico</strong>, sin inventar dinámica exacta."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>B</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La primera circunferencia tiene centro <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y radio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>; la segunda, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. Las dos fórmulas son correctas."
    },
    {
     "mota": "irudia",
     "oina": "Calco vectorial declarado de dos bocetos geométricos del manuscrito: círculos superpuestos en una tira horizontal y dos lazos dentro de una curva exterior. <em>Figura editorial</em>; no se reconstruye un retrato de fases exacto.",
     "src": "../media/irudiak/0a4c4d32db73e55d.svg",
     "zabalera": 517
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">La imagen no tiene datos suficientes para verificar que las curvas son órbitas de un sistema dinámico. Por ello solo se conserva la geometría visible.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0160_A / IMG_2025_07_12_12_34_30S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": ". Tercio superior de la hoja mixta; el resto del contenido de EDO está en el fichero <code>koadernoa_metmatcg01_p160_edo_mk.typ</code>. Edición crítica:"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p160_fase.typ</code>"
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
   "id": "a57",
   "maila": 1,
   "izenburua": "Estabilidad y diagramas de fases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Técnica del capítulo 8 de edf: hallar los puntos críticos, linealizar, clasificar según las raíces características. (Complemento resuelto: <code>metodos_estabilidad_diagramas_fase.pdf</code>, problemas de 2014 resueltos, ES.)"
    },
    {
     "mota": "irudia",
     "oina": "Clasificación de los puntos críticos según las raíces características: raíces reales del mismo signo — nodo (estable si ambas son negativas); signos opuestos — silla, siempre inestable; complejas con parte real no nula — espiral; imaginarias puras — centro.",
     "src": "../media/irudiak/c0120f2155bdaa96.svg",
     "zabalera": 552
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Ejemplo resuelto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Clasifique los puntos críticos del sistema <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (ejercicio 6 de la colección)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Punto crítico: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>y</mi><mo>+</mo><mn>9</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, es decir, único <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Matriz de la linealización (jacobiana) en el origen: <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>18</mn><mi>x</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — raíces características <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>−</mi><mn>1</mn></mrow></math>: raíces reales de signo opuesto, por tanto es una <strong>silla</strong>, inestable. (La dirección estable es el eje <math display=\"inline\"><mi>y</mi></math>; la inestable, la de <math display=\"inline\"><mi>x</mi></math> — y el término no lineal no cambia la clasificación, pues el sistema es cuasilineal.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Ejercicios de exámenes (colección completa)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Clasifique todos los puntos críticos de los siguientes sistemas (hállelos, linealice, clasifique y, si es posible, esboce el diagrama de fases):"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><msup><mi>λ</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>, siendo <math display=\"inline\"><mi>λ</mi></math> constante."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>5</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mn>6</mn><mo>+</mo><mi>x</mi><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mi>y</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math></span>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>+</mo><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a60",
   "maila": 1,
   "izenburua": "Anexo: hojas de cálculo (CG-01)",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 119 (METMATCG01_0119, IMG_2025_07_12_12_26_20S.jpg): método de integrales del tipo integral(sin^m theta cos^n theta), según la paridad de los exponentes (par/impar e impar/impar -> sustitución; par/par -> fórmulas del ángulo doble), con ejemplos (int sin^2 cos^5, sin^3 cos^5, sin^2 cos^2, sin^3, cos^3, sin^4, cos^4). Verificado con SymPy; UNA corrección con mención (int sin^3 theta = cos^3 theta/3 - cos theta; el papel tenía el signo al revés). Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>m</mi></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math></span>: método según la paridad de los exponentes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres casos, según la paridad de los exponentes:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Uno impar</strong> (par/impar): al exponente <strong>impar</strong> se le quita un factor y el resto se expresa mediante la otra función; <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo></mrow></math> (función de la potencia <strong>par</strong>).",
      "<strong>Ambos impares</strong>: se quita un factor a la mayor potencia; <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo></mrow></math> (función de la otra).",
      "<strong>Ambos pares</strong>: fórmulas del ángulo doble <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>½</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>½</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplos (casos impares, por sustitución)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>5</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mfrac><mi>θ</mi><mn>3</mn></mfrac><mo>−</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>5</mn></msup><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>7</mn></msup><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>5</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>8</mn></msup><mfrac><mi>θ</mi><mn>8</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>6</mn></msup><mfrac><mi>θ</mi><mrow><mn>6</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplos (par/par, ángulo doble)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>32</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>θ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mn>4</mn><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Integrales de potencia simple"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>integrala</strong>",
      "<strong>emaitza</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>/</mi><mn>3</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span>"
      ],
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>/</mi><mn>3</mn></mrow></math></span>"
      ],
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>3</mn><mi>θ</mi><mi>/</mi><mn>8</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mi>/</mi><mn>4</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>θ</mi><mi>/</mi><mn>32</mn></mrow></math></span>"
      ],
      [
       "<math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>",
       "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>3</mn><mi>θ</mi><mi>/</mi><mn>8</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mi>/</mi><mn>4</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>θ</mi><mi>/</mi><mn>32</mn></mrow></math></span>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Todos los resultados verificados con SymPy. <strong>Corrección</strong> de la hoja original: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>/</mi><mn>3</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span> (el papel tenía el signo al revés; <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi></mrow></math> estaba bien).</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0119</code>, <code>IMG_2025_07_12_12_26_20S.jpg</code>; «MÉTODO M.» lote). Método y ejemplos de integrales <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>m</mi></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi></msup></mrow></math>. Verificado con SymPy; una corrección con mención. Véase <code>koadernoa_metmatcg01_p119.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 120 (METMATCG01_0120, IMG_2025_07_12_12_26_27S.jpg; «ESFERA-PARABOLOIDE»): cálculo vectorial — FLUJO de F=(x,y,z) a través del paraboloide z=a^2-x^2-y^2 (z>=0). Parametrización x=a sin(theta)cos(phi), y=a sin(theta)sin(phi), z=a^2 cos^2(theta); dS=r_theta x r_phi; F·dS=a^4(2 sin^3 cos + sin cos^3); resultado 3 pi a^4 / 2. Verificado con SymPy. Por temática, cálculo vectorial (candidata a redirección). Confianza alta",
     "hizkuntza": "es/eu"
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Integral de flujo: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, paraboloide <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mrow><mi>z</mi><mo>≥</mo><mn>0</mn></mrow></math>)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Flujo del campo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a través del paraboloide <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mrow><mi>z</mi><mo>≥</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parametrización"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mi>φ</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Comprobación: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mi>z</mi></mrow></math></span>. ✓"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Vector de área e integrando"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>∂</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>×</mo><mi>∂</mi><mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>3</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msup><mi>a</mi><mn>3</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> (<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> es el campo de posición sobre la superficie):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><msup><mi>a</mi><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Flujo"
    },
    {
     "mota": "testua",
     "html": "La integral sobre <math display=\"inline\"><mi>φ</mi></math> da <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>; la de <math display=\"inline\"><mi>θ</mi></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> por sustitución:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∫</mo><msub><mo>∫</mo><mi>S</mi></msub><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn>2</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi>θ</mi><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mo>=</mo><mn>2</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Parametrización, <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> y flujo (<math display=\"inline\"><mrow><mn>3</mn><mi>π</mi><msup><mi>a</mi><mn>4</mn></msup><mi>/</mi><mn>2</mn></mrow></math>) verificados con SymPy. Por temática es <strong>cálculo vectorial</strong> (integral de flujo); enlazada en 08_09 (receptora del lote CG-01), candidata a redirección futura.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0120</code>, <code>IMG_2025_07_12_12_26_27S.jpg</code>; «MÉTODO M.» lote, «ESFERA-PARABOLOIDE»). Flujo de <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a través del paraboloide. Verificado con SymPy; sin correcciones. Véase <code>koadernoa_metmatcg01_p120.typ</code>."
      }
     ]
    }
   ]
  }
 ]
};
