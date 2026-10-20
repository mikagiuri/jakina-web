/* JAKINA · kapitulua «B9.8 - Kaos determinista» (05mk_08kaosa), desde edicion2/kapituluak/05mk_08kaosa/05mk_08kaosa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_08kaosa"] = {
 "gakoa": "05mk_08kaosa",
 "titulua": "JAKINA - B9 - Mecánica clásica - 8/10",
 "azala": "B9.8 - Caos determinista",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_08kaosa/05mk_08kaosa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Caos determinista",
   "blokeak": [
    {
     "mota": "irudia",
     "oina": "Dispersión caótica: 1024 órbitas del problema de la figura 8.24.",
     "src": "../media/irudiak/3f4643b4ee98068d.svg",
     "zabalera": 320
    },
    {
     "mota": "testua",
     "html": "En las páginas siguientes estudiaremos cómo aparece el caos determinista en la mecánica. Solo veremos algunos conceptos básicos y hay que tener en cuenta que el caos aparece no solo en la mecánica clásica sino en muchos campos de la ciencia. En la mayoría de los casos no sabemos cómo encontrar las soluciones exactas de las ecuaciones del movimiento: los casos sencillos que se estudian en los libros de texto son las principales excepciones. Por tanto, habrá que recurrir a la simulación numérica<span class=\"j-oin\">[Todos los cálculos numéricos de este tema se han hecho con el programa [49].]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Dispositivo mecánico.",
     "src": "../media/irudiak/190bd44aaf6c642b.svg",
     "zabalera": 158
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Modelo matemático simplificado de un dispositivo mecánico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El alambre de hierro de la figura sufre la atracción de dos imanes y también el rozamiento producido por el aire. Más adelante se aplicará una fuerza externa armónica <math display=\"inline\"><mi>F</mi></math> en el soporte en el que están colocados el alambre y los imanes."
    },
    {
     "mota": "irudia",
     "oina": "Modelo del dispositivo mecánico.",
     "src": "../media/irudiak/1e7cea7f6b1825bb.svg",
     "zabalera": 170
    },
    {
     "mota": "testua",
     "html": "Como es evidente, cuando <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow></math> este sistema tendrá dos posiciones de equilibrio estables, justo cuando el extremo libre del alambre de hierro está junto a cada imán. (En casos así se dice que tenemos <strong>biestabilidad</strong>.) Además, como consecuencia de la simetría, el alambre puede estar en reposo"
    },
    {
     "mota": "testua",
     "html": "en la posición vertical, aunque este estado sea inestable. Para estudiar estos puntos de equilibrio y para hacer el modelo matemático de este sistema, podemos valernos de un potencial que tiene un máximo entre dos mínimos, si despreciamos por ahora el rozamiento, al menos. La opción más sencilla es este potencial<span class=\"j-oin\">[En este tema usamos variables adimensionales, incluida la masa <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math>.]</span>: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la ecuación del movimiento es esta: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ahora, teniendo en cuenta el rozamiento proporcional a la velocidad y la fuerza externa armónica, esta es la ecuación del movimiento completa que estudiaremos, la llamada <strong>ecuación de Duffing</strong>: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> Podríamos pensar que esta ecuación es demasiado simple, y en apariencia no nos resulta tan extraña, pues, quitando un signo y el término cúbico, es el oscilador armónico forzado habitual. Pero, como veremos, la aparición de ese término no lineal trae consecuencias dinámicas asombrosas y esta ecuación es muy rica desde el punto de vista dinámico."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases y algunas soluciones en el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/99a013bbea815aef.svg",
     "zabalera": 472
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Oscilaciones periódicas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para empezar, si admitimos que el rozamiento y la fuerza externa son nulos, el sistema será conservativo y la siguiente expresión, que indica que la energía mecánica es una constante del movimiento, es la ecuación de las trayectorias de fase: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que el espacio de fases de este sistema es el de la figura 8.4."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> corresponden a los mínimos del potencial, son puntos de equilibrio estables, y las trayectorias que empiezan junto a uno de ellos siempre están en torno al punto; no se alejan de él ni van al punto. Aunque el equilibrio es estable, no es asintóticamente estable, y a esos puntos se les llama <strong>centros</strong>, por la forma de las trayectorias en torno a ellos."
    },
    {
     "mota": "testua",
     "html": "En el caso del máximo del potencial, tenemos el punto de equilibrio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> inestable y (teniendo en cuenta lo que le ocurre a una bolita dejada en el centro de una silla de montar) decimos que es un <strong>punto de silla</strong>."
    },
    {
     "mota": "testua",
     "html": "La mayoría de las trayectorias son cerradas y, por tanto, corresponden a oscilaciones periódicas. Si la energía es negativa, el sistema oscila en torno a un centro, como se ve en las órbitas verdes. En el caso de energía positiva, el sistema es capaz de pasar por encima del máximo y las órbitas rodean los dos centros."
    },
    {
     "mota": "testua",
     "html": "Como este sistema tiene un solo grado de libertad, las condiciones iniciales serán la posición y la velocidad en un instante. Por tanto, cada punto del espacio de fases corresponde a un conjunto de condiciones iniciales y a una solución: por cada punto pasa una solución y solo una en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo son (en este caso particular) las trayectorias correspondientes al caso de energía nula? ¿Cuántas son? (A las órbitas que, empezando en un punto de equilibrio, vuelven a él se las llama <strong>homoclínicas</strong>.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con las excepciones señaladas, la mayoría de las órbitas son oscilaciones periódicas y su período depende de la amplitud. Este es uno de los movimientos más sencillos, pero bastante especial, pues el menor rozamiento lo destruye."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases y algunas soluciones en el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/b6ba1310df36f4de.svg",
     "zabalera": 472
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Oscilaciones amortiguadas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si ahora tenemos en cuenta el rozamiento, la energía mecánica y la amplitud de las oscilaciones irán disminuyendo y casi todas las órbitas tenderán a un mínimo de la energía potencial. En consecuencia, los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> serán ahora asintóticamente estables, pues las órbitas de su entorno tienden a acercarse a ellos. Teniendo en cuenta el aspecto geométrico de esas órbitas, se dice que los puntos de equilibrio son <strong>focos</strong> (en el caso sobreamortiguado son"
    },
    {
     "mota": "testua",
     "html": "<strong>nodos</strong>"
    },
    {
     "mota": "testua",
     "html": ": véase [46]) y, como atraen a las órbitas de su entorno, se les llama <strong>atractores</strong>."
    },
    {
     "mota": "testua",
     "html": "Como vemos en la figura 8.5, el origen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es de nuevo un punto de silla, pero las órbitas que surgen de él son ahora muy diferentes. Dos de ellas tienden a los focos. Estas órbitas forman la <em>variedad inestable</em> del punto de equilibrio."
    },
    {
     "mota": "irudia",
     "oina": "Cuencas de atracción en el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/5daa29064ea6692a.svg",
     "zabalera": 266
    },
    {
     "mota": "testua",
     "html": "Pero son mucho más interesantes las dos órbitas que van al punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que forman la <strong>variedad estable</strong>. Como se ve claramente en la figura 8.6, no van a un atractor y, por tanto, separan las órbitas que tienden a focos diferentes. Por eso decimos que estas órbitas forman la <strong>separatriz</strong>. El lugar geométrico de los puntos de fase correspondientes a las soluciones que van a un atractor es la"
    },
    {
     "mota": "testua",
     "html": "<strong>cuenca</strong>"
    },
    {
     "mota": "testua",
     "html": "del atractor y la separatriz separa las cuencas de atractores diferentes: es la <strong>frontera de las cuencas</strong>."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Oscilaciones aisladas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si hay fuerza externa, los puntos de equilibrio son imposibles, pues las constantes no cumplen la ecuación del movimiento (8.3). Pueden aparecer soluciones periódicas; pero a diferencia del caso conservativo, no formarán un conjunto infinito de órbitas de períodos que cambian continuamente con la amplitud. Ahora tenemos un período principal: justo el de la fuerza externa. En el caso de las oscilaciones lineales, tenemos una única órbita periódica con el período de la fuerza externa y, además, es un atractor, pues todas las demás órbitas tienden a esa solución periódica aislada tras un intervalo transitorio. A las órbitas periódicas aisladas se las llama <strong>ciclos límite</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Ecuación de Duffing en el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.23</mn></mrow></math>.",
     "src": "../media/irudiak/2d63ebee94e3d268.svg",
     "zabalera": 472
    },
    {
     "mota": "testua",
     "html": "Si en la ecuación de Duffing elegimos el valor <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.23</mn></mrow></math>, veremos una evolución semejante en este caso no lineal. En lugar de los dos atractores puntuales que han desaparecido hay dos ciclos límite, y son asintóticamente estables, atractores."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Atractores y secciones de Poincaré",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los atractores que hemos estudiado hasta ahora han sido puntos adimensionales o curvas de una dimensión; pero pueden encontrarse atractores de todas las dimensiones. Por ejemplo, en el ejemplo de la figura 8.8 se ve una parte de una órbita del sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>c</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>c</mi><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mi>z</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></math>, para los valores <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2.01</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>0.25</mn></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0.2</mn></mrow></math>. Las proyecciones obtenidas en las direcciones de los ejes <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>z</mi></math> se ven en las partes (a), (b) y (c) de la figura, respectivamente. La correspondiente a la dirección de la bisectriz del primer octante se muestra, en cambio, en (d). En los casos mencionados, mediante las proyecciones se obtienen representaciones de las soluciones del sistema dinámico de tres dimensiones en el plano de dos dimensiones. Para hacer lo mismo hay otra posibilidad, la llamada <strong>sección de Poincaré</strong>. En este último método se dibujan los puntos de intersección entre la solución y una superficie determinada. En la parte (e) de la figura, por ejemplo, se ha dibujado el punto definido por las coordenadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> correspondientes a cada vez que la solución está en el plano <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. En cualquier caso, estudiando atentamente la figura 8.8, se ve que, tras el comportamiento transitorio, la órbita se enrolla en una superficie cerrada de dos dimensiones. La forma geométrica de este atractor se conoce en topología con el nombre de <strong>toro</strong>, y la intersección del toro y el plano <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> son dos circunferencias (son circunferencias topológicas, que se pueden obtener deformando circunferencias ordinarias, pero sin romperlas). En la órbita de la figura se ha eliminado el comportamiento transitorio inicial, con la intención de que pueda pensarse que ha pasado el tiempo suficiente para estar muy cerca del atractor y, desde el punto de vista práctico, dentro del atractor. Si, tras cambiar las condiciones iniciales, se espera de nuevo a que pase el comportamiento transitorio, la órbita que se obtiene es equivalente desde el punto de vista cualitativo: no es igual, pero se enrolla de forma parecida en la misma superficie. El atractor es la superficie del toro."
    },
    {
     "mota": "irudia",
     "oina": "Proyecciones y sección de Poincaré.",
     "src": "../media/irudiak/dfcf77c9e7796a76.svg",
     "zabalera": 165
    },
    {
     "mota": "testua",
     "html": "Tras un intervalo de tiempo corto, todas las órbitas están en la superficie del toro desde el punto de vista práctico. En el caso de un atractor así de dos dimensiones tenemos dos períodos: el valor medio necesario para dar una vuelta en torno a cada una de las dos secciones principales del toro define un período. Si esos dos períodos son conmensurables (es decir, si siendo los períodos <math display=\"inline\"><mi>T</mi></math> y <math display=\"inline\"><msup><mi>T</mi><mo>′</mo></msup></math> la ecuación <math display=\"inline\"><mrow><mi>n</mi><mi>T</mi><mo>+</mo><msup><mi>n</mi><mo>′</mo></msup><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> tiene soluciones enteras no nulas para los valores <math display=\"inline\"><mi>n</mi></math> y <math display=\"inline\"><msup><mi>n</mi><mo>′</mo></msup></math>) el movimiento permanente es periódico y la órbita será una curva cerrada en la superficie del toro. Pero casi siempre no ocurrirá así y el movimiento será <strong>cuasiperiódico</strong> (o, más precisamente, <strong>biperiódico</strong>). La órbita llenará la superficie del toro y el movimiento no se repetirá nunca; aun así, esencialmente tenemos dos períodos y el movimiento permanente es bastante sencillo."
    },
    {
     "mota": "testua",
     "html": "Si la dimensión del atractor es <math display=\"inline\"><mi>n</mi></math>, en el caso general tendremos <math display=\"inline\"><mi>n</mi></math> períodos. El físico Landau creyó que esto podía ser la explicación de la turbulencia que se observa en los fluidos: si hubiera un atractor de dimensión grande, el movimiento cuasiperiódico tendría muchos períodos y lo consideraríamos caótico. Hoy sabemos que para que haya caos no es necesario que haya muchos períodos (y dimensiones). Puede bastar con que el sistema dinámico sea no lineal."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Oscilaciones caóticas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Al aumentar la amplitud de la fuerza externa, la naturaleza de la evolución cambia por completo: las órbitas periódicas desaparecen (eso parece, al menos) y las soluciones oscilan continuamente pero no se nota ninguna regularidad."
    },
    {
     "mota": "testua",
     "html": "Para estudiar la falta de regularidad desde otro punto de vista, veamos qué ocurre si se cambian un poquito las condiciones iniciales. En la figura 8.10 se han dibujado las órbitas correspondientes a las condiciones iniciales <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.40001</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como vemos, los cambios minúsculos de las condiciones iniciales"
    },
    {
     "mota": "irudia",
     "oina": "Ecuación de Duffing en el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.3</mn></mrow></math>.",
     "src": "../media/irudiak/e7f11e1c65b2dda1.svg",
     "zabalera": 472
    },
    {
     "mota": "testua",
     "html": "pueden tener consecuencias asombrosas: la distancia entre órbitas que al principio estaban muy próximas aumenta de forma exponencial y tras pasar un intervalo de tiempo las dos soluciones son totalmente diferentes. Hay que decir que este fenómeno no es consecuencia de la naturaleza aproximada del método numérico usado, aunque esa naturaleza influya en la precisión de la solución obtenida. Esta <strong>dependencia sensible de las condiciones iniciales</strong> proviene de la naturaleza no lineal de la ecuación del movimiento y es la característica principal del caos determinista. El meteorólogo Lorenz, pionero de este campo de la ciencia, ha dado a este fenómeno el nombre de <strong>efecto mariposa</strong>, pues la perturbación producida por las alas de una mariposa podría, tras pasar un intervalo de tiempo adecuado, estropear las predicciones meteorológicas más finas."
    },
    {
     "mota": "irudia",
     "oina": "Dos órbitas muy próximas al principio en el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.3</mn></mrow></math>.",
     "src": "../media/irudiak/8118fd8c8d29ede1.svg",
     "zabalera": 280
    },
    {
     "mota": "testua",
     "html": "Al medir las condiciones iniciales que se dan en la naturaleza se cometen, necesariamente, errores. Aunque la evolución sea totalmente determinista, desde el punto de vista matemático una solución que en principio se puede calcular con total precisión puede tener poco interés práctico, si los errores cometidos en las condiciones iniciales van aumentando de forma exponencial. La naturaleza caótica de algunas ecuaciones de evolución no lineales puede poner obstáculos prácticos enormes al determinismo de Laplace. Como mencionó otro pionero (Poincaré), consideramos los dados como fuente del azar, aunque sus ecuaciones de evolución, las de la mecánica clásica, sean totalmente deterministas. Hay que subrayar aquí que, a diferencia de la física cuántica, lo que impide predecir no es la teoría física, sino la naturaleza matemática de las ecuaciones y los errores que inevitablemente se cometen en las condiciones iniciales y en los métodos aproximados que hay que usar para resolverlas."
    },
    {
     "mota": "irudia",
     "oina": "Sección estroboscópica del atractor de Duffing en el caso <math display=\"inline\"><mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">mod</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/c383b81c13b1013f.svg",
     "zabalera": 262
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Atractores extraños"
    },
    {
     "mota": "testua",
     "html": "En el ejemplo anterior las órbitas no mostraban ninguna regularidad, pero sí una propiedad común: tras un breve intervalo transitorio, todas las órbitas están en una parte bastante pequeña del espacio de fases. Parece que estamos ante un atractor no periódico, pues todas las órbitas tienden hacia él. Como en la ecuación de Duffing el tiempo aparece explícitamente (es decir, no es <strong>autónoma</strong>), el verdadero espacio de las condiciones iniciales (el espacio de fases de los matemáticos) es de tres dimensiones, pues para determinar una órbita, además de la posición y la velocidad iniciales, hay que elegir el instante inicial. Para estudiar los atractores que pueden aparecer en ese espacio de fases nos valdremos de las secciones de Poincaré, para hacer las figuras de dos dimensiones."
    },
    {
     "mota": "irudia",
     "oina": "Dos ampliaciones de la sección estroboscópica del atractor de Duffing.",
     "src": "../media/irudiak/f67ba93ea1013605.svg",
     "zabalera": 312
    },
    {
     "mota": "testua",
     "html": "Podemos considerar periódica la dimensión temporal, pues solo aparece en un coseno, que es periódico. Por tanto, la opción más sencilla es usar la sección estroboscópica con el mismo período. En lugar de estudiar las órbitas completas, en la figura 8.11 se han dibujado la posición y la velocidad en los instantes <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub><mo>+</mo><mi>n</mi><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Viendo esto podríamos pensar que la sección la forman algunas líneas curvas, pero si ampliamos el rectángulo de arriba se obtienen las secciones 8.12. Como vemos, esas líneas están formadas por otras líneas y estas últimas tampoco son simples. En todas las escalas se repite lo mismo: cada vez aparece más estructura, como consecuencia de la <strong>autosemejanza</strong> geométrica del atractor. Parece que está formado por infinitas capas."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Fractales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los objetos autosemejantes se conocen en matemáticas desde el siglo XIX. Por ejemplo, de manera muy simple se define"
    },
    {
     "mota": "testua",
     "html": "<strong>el conjunto de Cantor</strong>"
    },
    {
     "mota": "testua",
     "html": ": si se divide un segmento en tres partes iguales, se elimina la del medio, y este proceso se repite una y otra vez en cada paso con todos los segmentos que quedan. Está claro que en el conjunto que se obtiene en el límite hay infinitos puntos (¡en realidad, tantos como había en el segmento inicial!)."
    },
    {
     "mota": "irudia",
     "oina": "Construcción del conjunto de Cantor.",
     "src": "../media/irudiak/3abd54e7479bab9a.svg",
     "zabalera": 258
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la longitud del conjunto de Cantor es nula."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pero tiene también otras propiedades asombrosas que no son tan sencillas. Por ejemplo, carece de longitud y su dimensión es <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>/</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn><mo>&lt;</mo><mn>1</mn></mrow></math>. Como la dimensión no es entera, se dice que es un <strong>fractal</strong>."
    },
    {
     "mota": "testua",
     "html": "Otro ejemplo famoso, el <strong>copo de nieve de von Koch</strong>, se construye así: cada lado de un triángulo se divide en tres partes y la central se sustituye por los dos segmentos que forman con ella un triángulo equilátero, y este proceso se repite con todos los segmentos que quedan."
    },
    {
     "mota": "irudia",
     "oina": "Construcción del copo de nieve de von Koch.",
     "src": "../media/irudiak/6bf44e10c1916068.svg",
     "zabalera": 556
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la longitud de la curva de von Koch es infinita y que el área que encierra es finita."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Además, esa curva no admite tangente en ningún punto: aunque es continua no es diferenciable."
    },
    {
     "mota": "testua",
     "html": "En el caso de estos ejemplos geométricos la autosemejanza es exacta; en los fractales que aparecen en la naturaleza, en cambio, la autosemejanza suele ser aproximada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dimensión fractal"
    },
    {
     "mota": "testua",
     "html": "Para medir cuantitativamente la complejidad de los fractales puede usarse la dimensión fractal. Hay muchas definiciones de dimensión, pero aquí elegiremos la más sencilla de ellas, la <strong>capacidad</strong>. Para cubrir un segmento de longitud <math display=\"inline\"><mi>l</mi></math> necesitamos un solo círculo de diámetro <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>l</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn></mrow></math> círculos de diámetro <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>l</mi><mi>/</mi><mn>2</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>l</mi><mi>/</mi><mi>d</mi></mrow></math> círculos de diámetro <math display=\"inline\"><mi>d</mi></math>. Recordando que la dimensión del segmento es <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Recubrimientos del segmento y del cuadrado.",
     "src": "../media/irudiak/bfc37cdf873fe1bc.svg",
     "zabalera": 407
    },
    {
     "mota": "testua",
     "html": ", el número de círculos necesarios para hacer el recubrimiento también puede escribirse así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>K</mi><msup><mi>d</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El coeficiente <math display=\"inline\"><mi>K</mi></math> (en este caso la longitud) es una constante adecuada. Si lo que queremos cubrir es un cuadrado, se cumple la misma expresión, pero ahora, como las dimensiones del cuadrado son dos, hay que usar <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mi>K</mi></math> será proporcional al área del cuadrado. Asimismo, se ve fácilmente que en el caso de un cubo y de cualquier conjunto «ordinario», esa fórmula se cumple en los recubrimientos hechos con bolas de diámetro <math display=\"inline\"><mi>d</mi></math>. En consecuencia, esa expresión se usará en todos los casos (y no solo en los ordinarios) para definir la dimensión. En este contexto, como la constante <math display=\"inline\"><mi>K</mi></math> carece de interés, podemos valernos de la siguiente expresión equivalente: <math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>−</mi><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>d</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>d</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Recubrimientos de la curva de von Koch.",
     "src": "../media/irudiak/052bd6d537f5c4c6.svg",
     "zabalera": 307
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la figura 8.16 para demostrar que la dimensión del fractal de von Koch es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>/</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn><mo>≈</mo><mn>1.26186</mn></mrow></math>. (Véase también el problema 8.12.2.)"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Transformación del panadero y exponentes de Lyapunov",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para entender mejor el origen, la estructura y la naturaleza del atractor de Duffing, nos valdremos en la figura 8.17 de las secciones estroboscópicas de Poincaré correspondientes a los instantes <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub><mo>+</mo><mi>n</mi><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>0</mn></msub><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mrow><mn>8</mn><mi>ω</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del período básico de la fuerza externa. En esta figura vemos la evolución del propio atractor. El atractor es invariante durante el movimiento y los puntos que hay en él se mueven por el atractor, sin salir de él. Esos puntos sufren una transformación durante el movimiento; pero el conjunto de todos los puntos, el propio atractor, es invariante bajo esa transformación. En la figura está claro que esa transformación se parece mucho a lo que se hace con la masa del pan y que consta de dos componentes:"
    },
    {
     "mota": "irudia",
     "oina": "Transformación del panadero.",
     "src": "../media/irudiak/7d757ba48a54113b.svg",
     "zabalera": 409
    },
    {
     "mota": "testua",
     "html": "<strong>Estiramiento</strong>"
    },
    {
     "mota": "testua",
     "html": ": el atractor se estira durante el período y, en consecuencia, la distancia entre puntos que en un instante estaban muy próximos va aumentando. La distancia <math display=\"inline\"><mi>d</mi></math> entre las soluciones más próximas aumenta de forma exponencial: <math display=\"inline\"><mrow><mi>d</mi><mo>∝</mo><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math> donde la magnitud <math display=\"inline\"><mi>λ</mi></math> es el mayor exponente de Lyapunov. Esta transformación es la causa de la dependencia sensible de las condiciones iniciales y del caos."
    },
    {
     "mota": "testua",
     "html": "<strong>Plegamiento</strong>"
    },
    {
     "mota": "testua",
     "html": ": al estirarse, el atractor se pliega sobre sí mismo. Así, el atractor siempre está en una región acotada del espacio de fases. Además, como cada vez que se pliega se duplica el número de capas que forman el atractor, necesariamente habrá infinitas capas. Por tanto, si cortamos las capas en una dirección transversal, encontraremos algo parecido al conjunto de Cantor y el atractor será fractal (es decir, extraño)."
    },
    {
     "mota": "testua",
     "html": "Esta doble transformación del panadero es uno de los mecanismos básicos del caos determinista."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Fronteras de cuencas fractales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el caso de la ecuación de Duffing, los atractores que aparecen para los valores <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo>≤</mo><mn>0.13</mn></mrow></math> no son caóticos, sino ciclos límite, pero hay dos, que rodean cada uno de los mínimos del potencial. Según las condiciones iniciales que se elijan, la solución irá a uno u otro ciclo límite. Para estudiar las cuencas elegiremos en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> la posición <math display=\"inline\"><mi>x</mi></math> y la velocidad <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> y, si la solución que se obtiene así va al ciclo de la derecha (es decir, si está en la cuenca del ciclo de la derecha), dibujaremos el punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> de un color; si está en la cuenca del ciclo de la izquierda, usaremos otro color. Así obtendremos la imagen de las cuencas."
    },
    {
     "mota": "irudia",
     "oina": "Cuencas de la ecuación de Duffing en los casos <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.1</mn></mrow></math>, <math display=\"inline\"><mn>0.15</mn></math>.",
     "src": "../media/irudiak/4fecad0b80696f24.svg",
     "zabalera": 486
    },
    {
     "mota": "testua",
     "html": "En los casos de la figura 8.18 la frontera de las cuencas es una curva suave y el movimiento asintótico es periódico: la distancia entre soluciones próximas no aumentará de forma exponencial. Sin embargo, como hay dos ciclos límite, para predecir el futuro hay que saber en qué cuenca están las condiciones iniciales. Si el error cometido al calcular las condiciones iniciales es <math display=\"inline\"><mi>d</mi></math>, solo con los puntos que están a una distancia <math display=\"inline\"><mi>d</mi></math> de la frontera de las cuencas puede ocurrir que la predicción sea errónea. Para medir cuántos son esos puntos, cubriremos la frontera de las cuencas (y los puntos dudosos) con discos de radio <math display=\"inline\"><mi>d</mi></math>. Como sabemos, el número de discos necesarios para ello es <math display=\"inline\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> y para cubrir la parte del espacio de fases estudiada harán falta <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> discos. En consecuencia, al medir las condiciones iniciales con precisión <math display=\"inline\"><mi>d</mi></math>, la proporción de puntos dudosos es <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mi>d</mi></mrow></math>. Por tanto, si se quiere reducir en un orden de magnitud la proporción de puntos dudosos, también hay que ganar un orden de magnitud en el error cometido en las mediciones."
    },
    {
     "mota": "testua",
     "html": "En general, si la dimensión de la frontera de las cuencas es <math display=\"inline\"><mi>D</mi></math>, harán falta <math display=\"inline\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup></mrow></math> bolas para cubrir la frontera y <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>−</mi><mi>F</mi></mrow></msup></mrow></math> para cubrir la parte del espacio de fases, si su dimensión es <math display=\"inline\"><mi>F</mi></math>. Por tanto, la proporción de condiciones iniciales dudosas es esta: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>d</mi><mrow><mi>F</mi><mo>−</mo><mi>D</mi></mrow></msup><mo>≡</mo><msup><mi>d</mi><mi>z</mi></msup></mrow></math>. El valor <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>F</mi><mo>−</mo><mi>D</mi></mrow></math> de aquí es el"
    },
    {
     "mota": "testua",
     "html": "<strong>exponente de incertidumbre</strong>"
    },
    {
     "mota": "testua",
     "html": "da."
    },
    {
     "mota": "irudia",
     "oina": "Cuencas de la ecuación de Duffing en los casos <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.2</mn></mrow></math>, <math display=\"inline\"><mn>0.23</mn></math>.",
     "src": "../media/irudiak/1eea113e1cb69c56.svg",
     "zabalera": 486
    },
    {
     "mota": "testua",
     "html": "Si la frontera de las cuencas es suave, su dimensión será <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>F</mi><mo>−</mo><mn>1</mn></mrow></math> y el exponente de incertidumbre <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1</mn></mrow></math>. Así, para que el número de puntos dudosos sea 10 veces menor, el error cometido en las condiciones iniciales deberá ser 10 veces menor. Pero ¿qué ocurre si la frontera de las cuencas, en lugar de ser suave, es fractal? Si <math display=\"inline\"><mrow><mi>F</mi><mo>−</mo><mn>1</mn><mo>&lt;</mo><mi>D</mi><mo>&lt;</mo><mi>F</mi></mrow></math>, será <math display=\"inline\"><mrow><mi>z</mi><mo>&lt;</mo><mn>1</mn></mrow></math> y reducir el número de condiciones iniciales dudosas resultará más difícil. Por ejemplo, si <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>F</mi><mo>−</mo><mn>0.2</mn></mrow></math>, para que la proporción sea 10 veces menor hay que conseguir un error 100000 veces menor al medir las condiciones iniciales."
    },
    {
     "mota": "irudia",
     "oina": "Ampliaciones de las cuencas de la ecuación de Duffing en el caso <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.2</mn></mrow></math>.",
     "src": "../media/irudiak/70cfef3e7452bd64.svg",
     "zabalera": 443
    },
    {
     "mota": "testua",
     "html": "Si esto ocurre, y enseguida veremos que cosas así ocurren, la predicción tendrá un gran obstáculo, aunque el movimiento no sea caótico. Por ejemplo, para comprobar que la frontera de las cuencas es fractal, hemos ampliado en la parte izquierda de la figura 8.20 el rectángulo dibujado en el centro de la figura 8.19, y el extremo inferior derecho de esta última aparece al lado."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Caos en sistemas hamiltonianos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como los sistemas hamiltonianos son conservativos, se cumple el teorema de Liouville del apartado 6.10.4 y, en consecuencia, no hay atractores. La suma de los exponentes de Lyapunov es cero, pero esto no impide que algún exponente sea positivo. Cuando ocurre así, tenemos caos hamiltoniano."
    },
    {
     "mota": "irudia",
     "oina": "Dos evoluciones del sistema del problema 7.91: una biperiódica y otra caótica.",
     "src": "../media/irudiak/1e861592901335cb.svg",
     "zabalera": 397
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Dispersión caótica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el sistema del problema 7.91. Las oscilaciones en torno al origen son periódicas: una figura de Lissajous cerrada. Si la amplitud es mayor, las oscilaciones no son tan sencillas, pero pueden ser biperiódicas (o, con condiciones iniciales adecuadas, periódicas), como se ve en una parte de la órbita en la parte izquierda de la figura 8.21."
    },
    {
     "mota": "irudia",
     "oina": "Dos secciones de Poincaré complementarias del sistema del problema 7.91.",
     "src": "../media/irudiak/101168194d6e0a2a.svg",
     "zabalera": 398
    },
    {
     "mota": "testua",
     "html": "Sin cambiar el valor de la energía mecánica (en las figuras <math display=\"inline\"><mn>8.21</mn></math> y <math display=\"inline\"><mn>8.22</mn></math> se ha tomado <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>10.2</mn><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>a</mi></mrow></math>), si se eligen otras condiciones iniciales, la órbita puede ser caótica, como se aprecia en la parte izquierda de la figura 8.21. Para ver mejor este fenómeno podemos valernos de las secciones de Poincaré. Como la energía mecánica se conserva, si conocemos tres de las coordenadas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> la cuarta se obtiene a partir del valor de la energía mecánica. Para hacer figuras de dos dimensiones, en la figura 8.22 se ha usado otra condición. A la izquierda se han dibujado los puntos de coordenadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la solución cada vez que <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. A la derecha, en cambio, se ha dibujado el punto de coordenadas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> cuando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Los puntos de una órbita periódica aparecen en líneas continuas. Además, se han dibujado los puntos de <em>una sola</em> órbita caótica y, como se ve, llenan un área no nula en cada figura."
    },
    {
     "mota": "testua",
     "html": "Este es otro aspecto del caos. En un proceso de dispersión las partículas van al infinito y no hay atractores. El movimiento asintótico es libre, muy sencillo, por tanto. Sin embargo, predecir el futuro puede ser difícil. Aquí estudiaremos la siguiente energía potencial, con cuatro máximos en dos dimensiones, en variables adimensionales adecuadas: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula las ecuaciones del movimiento."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la partícula, cuando está en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>10</mn><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se mueve a lo largo del eje <math display=\"inline\"><mi>x</mi></math> con energía <math display=\"inline\"><mi>E</mi></math>, al salir de la región de interacción se moverá en la dirección <math display=\"inline\"><mi>θ</mi></math> con velocidad constante. Así puede calcularse la <strong>función de dispersión</strong> <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por ejemplo, la función de dispersión de la figura 8.24 corresponde a la energía <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1.2</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Energía potencial (8.12) y cuatro órbitas cuando <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math>.",
     "src": "../media/irudiak/ad872da669d166f5.svg",
     "zabalera": 449
    },
    {
     "mota": "testua",
     "html": ". En este caso la partícula pasa por encima de los máximos de la energía y el ángulo de dispersión es una función suave del parámetro de impacto."
    },
    {
     "mota": "irudia",
     "oina": "Función de dispersión cuando <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1.2</mn></mrow></math>.",
     "src": "../media/irudiak/87d8655f4b2d5912.svg",
     "zabalera": 289
    },
    {
     "mota": "testua",
     "html": "Pero la función de dispersión correspondiente a la energía <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math> no es continua, como se puede ver en la figura 8.25."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula algunas ampliaciones de la función anterior, para comprobar que la naturaleza del conjunto de discontinuidades es fractal autosemejante."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Función de dispersión cuando <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math>.",
     "src": "../media/irudiak/3a701e50c2070a7e.svg",
     "zabalera": 295
    },
    {
     "mota": "testua",
     "html": "Como en el apartado anterior, aunque no haya ningún atractor caótico, es difícil predecir el estado asintótico si se produce esta"
    },
    {
     "mota": "testua",
     "html": "<strong>dispersión caótica</strong>"
    },
    {
     "mota": "testua",
     "html": ": en torno a los puntos de discontinuidad el verdadero valor del ángulo de dispersión será dudoso. Está claro que el concepto de exponente de incertidumbre puede aplicarse casi al pie de la letra en este caso."
    },
    {
     "mota": "testua",
     "html": "En la figura 8.23 se han dibujado las órbitas obtenidas para los valores <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>0.45939019</mn><mo>+</mo><mn>2.5</mn><mi>k</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>). Como vemos, aunque los cambios del parámetro de impacto son muy pequeños, la dirección asintótica futura es totalmente diferente en los cuatro casos."
    },
    {
     "mota": "irudia",
     "oina": "Tiempo de dispersión cuando <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0.26</mn></mrow></math>.",
     "src": "../media/irudiak/b8b616dcbbbe9c7a.svg",
     "zabalera": 296
    },
    {
     "mota": "testua",
     "html": "Para entender mejor este fenómeno, el tiempo que la partícula pasa en la región de interacción aparece en la figura 8.26. Como vemos, esta función también es discontinua y las discontinuidades del tiempo de dispersión y del ángulo ocurren en los mismos puntos."
    },
    {
     "mota": "testua",
     "html": "Con este resultado se entiende fácilmente la causa de la dispersión caótica. Si la energía es menor que la de los máximos, puede ocurrir que la partícula rebote una y otra vez en distintas cimas del potencial. Como con cuatro cimas pueden formarse infinitas secuencias periódicas diferentes, hay infinitas órbitas periódicas. Naturalmente, esas órbitas periódicas no serán estables (ni atractores); pero puede ocurrir que una órbita de dispersión esté muy próxima a una órbita periódica inestable en un instante y, si esto ocurre, pueden estar cerca una de otra durante un intervalo de tiempo largo y, tras rebotar muchas veces, puede producirse un cambio de dirección grande, de tal modo que sea muy diferente del cambio correspondiente a otra órbita que al principio estaba muy próxima."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de Duffing"
    },
    {
     "mota": "testua",
     "html": "<em>Demuestra que, cuando el rozamiento es despreciable, si la fuerza externa cumple la condición que hay que encontrar,\nla ecuación de Duffing <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi></mrow></math> admite una solución periódica exacta.</em>"
    },
    {
     "mota": "testua",
     "html": "Si en la ecuación de Duffing <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> probamos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi></mrow></math>, nos queda <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>18</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>9</mn><msup><mi>A</mi><mn>3</mn></msup><mo>+</mo><mn>18</mn><mi>f</mi><mo>−</mo><mn>2</mn><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>9</mn><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>9</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>A</mi><mn>3</mn></msup><mo>−</mo><mn>4</mn><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Está claro que para que esa ecuación se cumpla en todos los instantes <math display=\"inline\"><mi>t</mi></math> hay que elegir <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mroot><mrow><mn>4</mn><mi>f</mi></mrow><mn>3</mn></mroot></mrow></math>. Haciéndolo, nos queda la condición <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mi>f</mi><mo>−</mo><mroot><mrow><mn>4</mn><mi>f</mi></mrow><mn>3</mn></mroot><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mn>9</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>ω</mi><mn>3</mn></mfrac><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Para admitir una solución periódica especial, por tanto, debe cumplirse la relación <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mn>3</mn><msqrt><mrow><mn>3</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>f</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Copo de nieve de von Koch"
    },
    {
     "mota": "testua",
     "html": "<em>Calcula la dimensión, el perímetro y el área del copo de nieve de von Koch que se muestra en la figura 8.14.\nComenta la respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "En lugar del método directo que hemos usado en el ejercicio 8.6, nos valdremos de la simetría para calcular la dimensión. En efecto, está claro que si se necesitan <math display=\"inline\"><mi>N</mi></math> círculos de diámetro <math display=\"inline\"><mi>ε</mi></math> para cubrir este fractal, harán falta <math display=\"inline\"><mrow><mn>4</mn><mi>N</mi></mrow></math> de diámetro <math display=\"inline\"><mrow><mi>ε</mi><mi>/</mi><mn>3</mn></mrow></math>, es decir, <math display=\"block\"><mrow><mn>4</mn><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aquí, si probamos la definición <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>ε</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup></mrow></math> (que se cumple en el límite <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math>), queda: <math display=\"block\"><mrow><mn>4</mn><msup><mi>ε</mi><mrow><mi>−</mi><mi>D</mi></mrow></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mn>3</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mi>D</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mo>=</mo><msup><mn>3</mn><mi>D</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>4</mn></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math> Por otra parte, está claro que al construir el fractal, como en cada paso se usan 4 segmentos de longitud <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>3</mn></mrow></math> en lugar de cada segmento de longitud <math display=\"inline\"><mi>L</mi></math>, el perímetro es el anterior por <math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mn>3</mn></mrow></math> y en el límite infinito."
    },
    {
     "mota": "testua",
     "html": "Si el área del triángulo inicial es <math display=\"inline\"><mi>S</mi></math>, en el primer paso se le suma el área de 3 triángulos de área <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><mn>9</mn></mrow></math>; en el segundo la de <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>4</mn></mrow></math> triángulos de área <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><msup><mn>9</mn><mn>2</mn></msup></mrow></math>; en el tercero la de <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>4</mn><mn>2</mn></msup></mrow></math> triángulos de área <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><msup><mn>9</mn><mn>3</mn></msup></mrow></math>; y en el paso <math display=\"inline\"><mi>n</mi></math> la de <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>4</mn><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup></mrow></math> triángulos de área <math display=\"inline\"><mrow><mi>S</mi><mi>/</mi><msup><mn>9</mn><mi>n</mi></msup></mrow></math>. En el límite, por tanto, el área total será esta: <math display=\"block\"><mrow><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mn>3</mn><mn>9</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msup><mn>4</mn><mi>n</mi></msup><msup><mn>9</mn><mi>n</mi></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>8</mn><mn>5</mn></mfrac><mi>S</mi><mi>.</mi></mrow></math> Aunque parezca curioso, un perímetro continuo infinito puede encerrar un área finita."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "text(fill:berdea, weight: &quot;bold&quot;, size: 10pt, smallcaps[Fractales])"
    },
    {
     "mota": "irudia",
     "oina": "Primeros pasos para construir el fractal del problema 8.1.",
     "src": "../media/irudiak/2d14a6a3d37294cf.svg",
     "zabalera": 564
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la regla para construir el fractal de la figura 8.27? ¿Y su dimensión, su área y su perímetro?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Método para construir la curva de Peano.",
     "src": "../media/irudiak/5f04633a12411546.svg",
     "zabalera": 539
    },
    {
     "mota": "problema",
     "izena": "Curva de Peano.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En 1890 Peano descubrió la primera curva continua que llena un cuadrado: el límite matemático generado por el procedimiento de la figura 8.28. ¿Cuál es su dimensión fractal?"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Método para construir la curva de Hilbert.",
     "src": "../media/irudiak/363b89f34b78b70b.svg",
     "zabalera": 539
    },
    {
     "mota": "problema",
     "izena": "Curva de Hilbert.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La segunda curva continua que llena el cuadrado la descubrió Hilbert en 1891 (véase la figura 8.29). Calcula su longitud y su dimensión."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Método para construir la curva de Mandelbrot.",
     "src": "../media/irudiak/6b8b59a801fe592f.svg",
     "zabalera": 598
    },
    {
     "mota": "problema",
     "izena": "Curva de Mandelbrot.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El fractal de la figura 8.30 llena el copo de nieve de von Koch. Calcula su dimensión."
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
       "html": "Calcula la dimensión del conjunto de Cantor."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Fractal del problema 8.6.",
     "src": "../media/irudiak/77d8875344ef52f3.svg",
     "zabalera": 326
    },
    {
     "mota": "problema",
     "izena": "Momento de inercia.",
     "izar": 3,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una lámina delgada se hacen agujeros una y otra vez, como se muestra en la figura 8.31; pero, en cada paso, la masa que había en los agujeros se redistribuye homogéneamente en el material que queda sin agujerear. ¿Cuál es la dimensión del fractal? Calcula el área y el momento de inercia respecto del centro de masas que quedan en el límite matemático. (La masa de la lámina es <math display=\"inline\"><mi>m</mi></math> y la longitud de los lados <math display=\"inline\"><mi>a</mi></math>.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:berdea, weight: &quot;bold&quot;, size: 10pt, smallcaps[Simulaciones numéricas])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa alguna herramienta numérica adecuada para resolver ecuaciones diferenciales (como el programa [49]) para estudiar las ecuaciones del movimiento de este tema. Comprueba las figuras que muestran las soluciones, o el espacio de fases."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Fronteras de cuencas.",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ecuación de Duffing (8.3) tiene tres atractores periódicos para los valores <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0.15</mn></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0.25</mn></mrow></math>. Dibuja los atractores y las correspondientes fronteras de cuencas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Dispersión caótica.",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre una mesa horizontal lisa hay tres discos fijos iguales, en los vértices de un triángulo equilátero de lado <math display=\"inline\"><mn>2.5</mn></math> m. Los radios de los discos miden 1 m. En la misma dirección, pero con parámetros de impacto diferentes, se lanzan partículas puntuales contra los discos. Las colisiones son elásticas. Dibuja la función de dispersión."
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
       "html": "En los vértices de un triángulo equilátero de lado <math display=\"inline\"><mi>L</mi></math> hay tres imanes fijos y encima está colgado de una cuerda el cuarto, en la vertical del centro del triángulo. Si las oscilaciones del último imán son muy pequeñas, su movimiento ocurre en un plano horizontal en buena aproximación y la primera aproximación de la ecuación del movimiento puede ser la siguiente: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>C</mi><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>3</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Estudia el movimiento mediante simulación numérica. <em>Observación</em>: en variables adimensionales adecuadas se puede elegir <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>."
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
       "html": "Como se ve, el sistema del problema 8.10 tiene tres puntos de equilibrio estables (cada vez que el imán del péndulo se queda sobre otro). Dibuja las cuencas de esos atractores."
      }
     ]
    }
   ]
  }
 ]
};
