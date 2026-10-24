/* JAKINA · kapitulua «B6D - Kaosa eta erakarle arraroak (temarioz kanpoko luzapena)» (03mm_08kaosa), desde edicion2/kapituluak/03mm_08kaosa/03mm_08kaosa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_08kaosa"] = {
 "gakoa": "03mm_08kaosa",
 "titulua": "JAKINA - B6 - Métodos matemáticos - Anexo",
 "azala": "B6D - Caos y atractores extraños (ampliación fuera de temario)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/03mm_08kaosa/03mm_08kaosa.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "edf_eus",
   "xehetasuna": "Ampliación del capítulo 8 (enriquecimiento más allá del programa): caos determinista y atractores extraños",
   "hizkuntza": "eu"
  },
  {
   "mota": "oharra",
   "titulua": "Carácter de anexo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este bloque es una ampliación ajena al temario de Métodos Matemáticos (continuación natural del tema 7); la teoría de la estabilidad y sus problemas están en el producto <code>03mm_03ezlinealak</code>."
    }
   ]
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "El caos y los atractores extraños",
   "blokeak": []
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Más dimensiones…",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los teoremas de Poincaré y Bendixson esencialmente completan el programa de clasificación cualitativa de los espacios de fases de dimensión dos que se debe al primero de estos autores; pero ¿qué sucede en los sistemas dinámicos de tres (o más) dimensiones? Es fácil imaginar que pueden aparecer soluciones de dos o más períodos (aisladas o no, atractoras o inestables); pero, como mostraron el trabajo pionero de Poincaré y, sobre todo, los desarrollos de los últimos treinta años, la variedad dinámica es infinitamente mayor a partir de las tres dimensiones y pueden aparecer los fascinantes fenómenos del caos determinista."
    },
    {
     "mota": "testua",
     "html": "En el apartado 8.10 una bifurcación de Hopf desestabilizaba un punto de equilibrio del sistema (8.108)–(8.109), al tiempo que nacía una solución periódica asintóticamente estable (un ciclo límite), es decir, un atractor puntual era sustituido por otro unidimensional y periódico. Una segunda bifurcación de Hopf puede desestabilizar el ciclo límite y hacer aparecer un atractor bidimensional de dos períodos. En la figura 8.29 vemos parte de una órbita del sistema <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>c</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>c</mi><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>a</mi><mi>z</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> siendo <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>01</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>. Las proyecciones paralelas a los ejes <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>z</mi></math> se ven en las partes (a), (b) y (c) de la figura, y (d) muestra una proyección según la diagonal del primer octante. En todos estos casos la proyección permite una representación bidimensional de las soluciones de un sistema dinámico tridimensional. En (e) se usa un método alternativo —llamado <strong>sección de Poincaré</strong>— que consiste en representar los puntos de corte de las soluciones con una superficie dada —en este caso el plano <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>—. Una observación"
    },
    {
     "mota": "irudia",
     "oina": "Proyecciones y sección de Poincaré del sistema (8.114)–(8.116).",
     "src": "../media/irudiak/48a085deed0f63c8.svg",
     "zabalera": 449
    },
    {
     "mota": "testua",
     "html": "atenta de la figura 8.29 convence de que, pasado el transitorio, la órbita se acumula en una superficie cerrada bidimensional, que puede entenderse como la superficie exterior de una rosquilla, lo que en topología se llama un <strong>toro</strong>. Los cortes de ese toro con el plano <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> son dos circunferencias (topológicas, es decir, curvas cerradas que se pueden obtener por deformación, sin roturas, de una circunferencia ordinaria). En la órbita dibujada en la figura 8.29 se ha descartado un transitorio inicial, para permitir que el sistema haya tenido tiempo de llegar tan cerca del atractor que la parte representada esté sobre él a todos los efectos prácticos. Cambiando las condiciones iniciales y esperando un tiempo a que la órbita esté en el atractor, se obtiene otra curva cualitativamente equivalente: no es la misma, pero se enrolla de modo semejante en la misma superficie. El atractor es la superficie toroidal y no una órbita única, a diferencia de lo que sucedía con los atractores de dimensión 0 y 1. El atractor bidimensional no es en sí una solución —las soluciones son curvas unidimensionales—, pero comparte con los puntos de equilibrio y los ciclos límite el carácter de <strong>conjunto invariante</strong>, ya que toda solución que tenga un punto en común con él está en él para siempre (y desde siempre)."
    },
    {
     "mota": "testua",
     "html": "Una órbita que cae en un ciclo límite se hace (aproximadamente) periódica en cuanto se amortigua el transitorio. Algo parecido sucede con una órbita que se dirige a un atractor como el de la figura 8.29, pero ahora tendrá dos períodos: el tiempo que el sistema necesita para dar una vuelta alrededor de cada sección principal del toro. Se dice que el movimiento es <strong>biperiódico</strong>. Si los dos períodos son conmensurables, es decir, si su cociente es un número racional <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mi>/</mi><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mi>p</mi><mi>/</mi><mi>q</mi></mrow></math>, la órbita será periódica y cerrada, ya que tiene período <math display=\"inline\"><mrow><mi>q</mi><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mi>p</mi><msub><mi>T</mi><mn>2</mn></msub></mrow></math> como mínimo. En el caso genérico, sin embargo, los dos períodos serán inconmensurables y la órbita, en vez de llegar a cerrarse exactamente, cubrirá densamente el toro, es decir, pasará tan cerca como se quiera de cualquiera de sus puntos. Del mismo modo que existen ciclos límite inestables y semiestables, existen también toros bidimensionales inestables y semiestables."
    },
    {
     "mota": "testua",
     "html": "Si el espacio de fases tiene cuatro dimensiones, puede haber conjuntos invariantes de tres dimensiones. Por ejemplo, puede haber toros tridimensionales, que tengan órbitas triperiódicas. En un espacio"
    },
    {
     "mota": "testua",
     "html": "espacio pueden existir movimientos multiperiódicos con un gran número de periodos. Precisamente este era el escenario de Landau<span class=\"j-oin\">[<strong>Lev Davidovich Landau</strong> (1908-01-22, Bakú, Rusia; 1968-04-01, Moscú). Su obra, que incluye importantes aportaciones teóricas a la física de bajas temperaturas, a la física atómica y nuclear y a la física de plasmas, tuvo gran influencia. Recibió el Premio Nobel de Física de 1962 por su teoría sobre la superfluidez del helio líquido.]</span>, que creía que en el movimiento de los fluidos —descritos por ecuaciones en derivadas parciales, que tienen espacios de fases de dimensión infinita— las sucesivas bifurcaciones de Hopf excitaban cada vez más modos, haciendo pasar del régimen laminar al turbulento. Pero hoy sabemos que todo eso no es necesario para que la evolución sea complicada…"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "…y el caos determinista",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Basta, en efecto, con tener tres dimensiones para que un sistema dinámico autónomo no lineal presente uno o varios de los comportamientos que se reúnen con el nombre de <strong>caos determinista</strong>. El ejemplo más famoso es el del sistema de Lorenz: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>σ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>r</mi><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mi>x</mi><mi>z</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><mi>b</mi><mi>z</mi><mo>,</mo></mtd></mtr></mtable></math> cuyas tres proyecciones cartesianas y otra —a lo largo de la recta con ángulos de Euler <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>— reúne la figura 8.30, siendo <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>8</mn><mi>/</mi><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>27</mn></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Proyecciones de una órbita del atractor de Lorenz.",
     "src": "../media/irudiak/211dcbbd05c07501.svg",
     "zabalera": 415
    },
    {
     "mota": "testua",
     "html": "La órbita no se repite y, tras un breve transitorio, está en un conjunto invariante complicado:"
    },
    {
     "mota": "testua",
     "html": "el <strong>atractor de Lorenz</strong>"
    },
    {
     "mota": "testua",
     "html": ", que no es <strong>extraño</strong> solo porque tenga estructura fractal —más concretamente, la de un conjunto de Cantor<span class=\"j-oin\">[<strong>Georg Ferdinand Ludwig Philipp Cantor</strong> (1845-03-03, San Petersburgo, Rusia; 1918-01-06, Halle, Alemania). Creó la teoría de conjuntos y fundamentó rigurosamente la noción de infinito con su teoría de los números transfinitos. Demostró por primera vez que los números reales no son numerables y que casi todos los números son trascendentes. Trabajó también sobre series trigonométricas.]</span>— sino porque es <strong>caótico</strong>, ya que soluciones muy próximas al principio se separan exponencialmente. Esto se puede apreciar en la figura 8.31, donde se muestra la evolución de la variable <math display=\"inline\"><mi>x</mi></math> para dos órbitas correspondientes a las condiciones iniciales <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>97</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0001</mn><mo>,</mo><mn>97</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>t</mi><mo>≤</mo><mn>25</mn></mrow></math>. Como las condiciones iniciales son muy próximas, las dos órbitas son al principio indistinguibles con la resolución finita de la figura, pero la diferencia entre ellas crece muy rápidamente y, pasado un intervalo de tiempo bastante corto (<math display=\"inline\"><mrow><mi>t</mi><mo>≈</mo><mn>14</mn></mrow></math>), son completamente distintas, aunque siguen compartiendo algo: ambas están en el atractor."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dependencia sensible de las condiciones iniciales"
    },
    {
     "mota": "testua",
     "html": "El crecimiento exponencial de la distancia entre soluciones muy próximas es la propiedad que suele tomarse como definición de caos determinista y se llama <strong>dependencia sensible de las condiciones iniciales</strong>. La explosión de los errores inevitables al especificar las condiciones iniciales (o al hacer los cálculos numéricos) es el obstáculo práctico que la naturaleza matemática de los sistemas caóticos impone a la predicción de su futuro, los cuales, no obstante, siguen siendo completamente deterministas, ya que satisfacen un teorema de existencia y unicidad. Por eso, aunque en principio el futuro puede calcularse de antemano con total precisión, los errores son inevitables y su crecimiento exponencial arruina la predicción pasado un intervalo de tiempo (corto o largo). El propio Lorenz inventó el curioso nombre de <strong>efecto mariposa</strong> para describir este fenómeno, indicando que las mejores predicciones meteorológicas, incluso las que pudieran hacerse en el futuro con los mejores medios técnicos, podrían arruinarse a más corto o más largo plazo por la perturbación introducida por el aleteo de uno de esos insectos caprichosos."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de dos soluciones muy próximas al principio.",
     "src": "../media/irudiak/113bdd7eb9e80371.svg",
     "zabalera": 474
    },
    {
     "mota": "testua",
     "html": "Nótese que la separación exponencial entre trayectorias se da solo cuando ambas están muy próximas, ya que todas las órbitas, pasado el transitorio, se mantienen en el atractor, que es un conjunto invariante, y por eso la distancia no puede crecer más allá de su diámetro."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El exponente de Lyapunov"
    },
    {
     "mota": "testua",
     "html": "Si se repitiera la figura 8.30, que corresponde a la primera de las condiciones iniciales mencionadas antes, usando otros valores iniciales se obtendría cualitativamente la misma figura, con una órbita que se mantiene en el mismo conjunto, pero los detalles —como, por ejemplo, el tiempo que permanece cada vez en uno de los dos lóbulos— serían completamente distintos. El atractor es invariante: sabemos —a todos los efectos prácticos, aunque no exactamente— que el sistema estará pronto en él; lo difícil en la práctica es saber en qué punto exacto estará. Si la distancia entre órbitas infinitesimalmente próximas evoluciona en promedio como <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒙</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>≈</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math>, el coeficiente <math display=\"inline\"><mi>λ</mi></math> (el máximo) es el <strong>exponente de Lyapunov</strong>. El sistema es caótico si <math display=\"inline\"><mi>λ</mi></math> es positivo. El exponente de Lyapunov da una medida cuantitativa del caos, ya que <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>λ</mi></mrow></math> es el tiempo característico en que se pierde la memoria de las condiciones iniciales que generaron una órbita."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle el exponente de Lyapunov máximo del péndulo (8.83) cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>γ</mi><mo>&lt;</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La transformación del panadero"
    },
    {
     "mota": "testua",
     "html": "Aunque el sistema de Lorenz parece tener una estructura matemática simple, hay un ejemplo más artificial que permite entender mejor uno de los mecanismos fundamentales del caos: el sistema de Rössler, que se escribe <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>−</mo><mi>z</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>b</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>z</mi><mo>,</mo></mtd></mtr></mtable></math> y que estudiaremos cuando <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>4</mn><mo>,</mo><mn>5</mn></mrow></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>. Una órbita típica puede verse en la figura 8.32, donde se reúnen las tres proyecciones cartesianas y otra —en la dirección <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>59</mn><msup><mi></mi><mo>∘</mo></msup><mo>,</mo><mi>−</mi><mn>41</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>—. También en este caso vemos una órbita irregular, no periódica, que se mantiene en un subconjunto del espacio de fases tridimensional. Observamos, en efecto, que durante una parte importante del tiempo está cerca del plano <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde la dinámica será aproximadamente la que corresponde a tomar <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> en las ecuaciones (8.120)–(8.121): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mi>y</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que la órbita de (8.123)–(8.124) es una espiral de radio creciente."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esto explica cómo se mueve el sistema en una espiral hacia fuera cerca del plano <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>, cerca del semieje positivo <math display=\"inline\"><mi>x</mi></math>, hasta que el valor de <math display=\"inline\"><mi>x</mi></math> en (8.122) es lo bastante grande para hacer <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>. Entonces <math display=\"inline\"><mi>z</mi></math> empieza a crecer bastante antes de llegar al semieje negativo <math display=\"inline\"><mi>x</mi></math>, hasta hacerse negativo <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>b</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>z</mi></mrow></math> y empezar a disminuir <math display=\"inline\"><mi>z</mi></math>, de tal modo que la órbita vuelve a las proximidades del plano <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>. Cerca de la espiral <math display=\"inline\"><mrow><mi>z</mi><mo>≈</mo><mn>0</mn></mrow></math> es y a lo largo de"
    },
    {
     "mota": "irudia",
     "oina": "Proyecciones de una órbita del atractor de Rössler.",
     "src": "../media/irudiak/19ca0edb637f48ee.svg",
     "zabalera": 407
    },
    {
     "mota": "irudia",
     "oina": "La transformación del panadero.",
     "src": "../media/irudiak/dbfeb5eafd99b220.svg",
     "zabalera": 569
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></math> es positivo la distancia entre soluciones muy próximas crecerá exponencialmente, es decir, habrá dependencia sensible de las condiciones iniciales. Como se ve en la figura 8.33, las órbitas se separan unas de otras y las que están en una cierta banda cercana a <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> estarán en una banda que sigue ensanchándose cada vez más cuando <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>, pero que luego se pliega sobre la banda cercana al plano <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Este doble proceso de «estiramiento» (para que las órbitas se separen exponencialmente) y «plegamiento» (para que la región visitada del espacio de fases se mantenga acotada) es uno de los mecanismos fundamentales del caos determinista y —siguiendo la tendencia de la ciencia de la sociedad de consumo, en detrimento de las lenguas clásicas, a elegir nombres llamativos o supuestamente atractivos— se llama <strong>transformación del panadero</strong>, recordando el proceso de homogeneizar los componentes de una masa de pastelería, estirando la masa con un rodillo y doblándola sobre sí misma, para que mantenga unas dimensiones útiles."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los atractores extraños"
    },
    {
     "mota": "testua",
     "html": "Además de generar en el proceso de estiramiento un exponente de Lyapunov positivo, que hace caótico el atractor, la transformación del panadero es también responsable de la estructura de conjunto de Cantor del atractor,"
    },
    {
     "mota": "irudia",
     "oina": "Estructura de conjunto de Cantor del atractor de Rössler.",
     "src": "../media/irudiak/111cbc2600d1657b.svg",
     "zabalera": 371
    },
    {
     "mota": "testua",
     "html": "que lo convierte en un atractor extraño<span class=\"j-oin\">[Véase el problema 8.27]</span>. En efecto, como este es un conjunto invariante que se pliega sobre sí mismo una y otra vez, debe estar formado por un número infinito de capas de espesor nulo, ya que el atractor tiene volumen nulo porque el sistema es disipativo y pierde continuamente volumen del espacio de fases. Este conjunto infinito de capas, esbozado en la figura 8.34, da al atractor su estructura fractal."
    },
    {
     "mota": "irudia",
     "oina": "Secciones estroboscópicas del atractor de Duffing.",
     "src": "../media/irudiak/c8ad7b6c62eef4bc.svg",
     "zabalera": 302
    },
    {
     "mota": "testua",
     "html": "Para verlo en un ejemplo con interés físico, consideremos una partícula que se mueve en un potencial de dos pozos, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>x</mi><mn>4</mn></msup></mrow></math>, que aparece en muchas aplicaciones físicas. Si introducimos rozamiento y una fuerza externa sinusoidal, obtenemos la <strong>ecuación de Duffing</strong>: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mrow></math> que estudiaremos aquí cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math> (véase el problema 8.18 para el caso en que la fuerza externa es nula). Como la ecuación no es autónoma, el espacio de fases es tridimensional, pero la tercera variable, el tiempo <math display=\"inline\"><mi>t</mi></math>, aparece solo dentro del coseno, que es periódico;"
    },
    {
     "mota": "testua",
     "html": "la fuerza externa, por tanto, será igual en todos los instantes <math display=\"inline\"><mi>t</mi></math> mod <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>. Para facilitar la comprensión del atractor de Duffing usaremos secciones estroboscópicas de Poincaré, que consisten en representar no la trayectoria completa en el espacio <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> sino la posición del punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> cada vez que <math display=\"inline\"><mi>t</mi></math> mod <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>, para un valor prefijado de <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math>. Es decir, usamos un estroboscopio (numérico), siempre en el mismo valor negativo, para sacar una «fotografía» del punto que representa el sistema en el espacio de fases cada <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math> «segundos». En la figura 8.35 hemos dividido el período <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math> de la fuerza externa en dieciséis intervalos iguales y hemos dibujado las secciones estroboscópicas correspondientes, para <math display=\"inline\"><mi>t</mi></math> mod <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>8</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>4</mn><mo>,</mo><mi>…</mi><mo>,</mo><mn>15</mn><mi>π</mi><mi>/</mi><mn>8</mn></mrow></math>. Los puntos que se ven en la figura están en una única órbita. Como el atractor es caótico, si usamos otra órbita la posición de cada punto será completamente distinta, pero el objeto geométrico en que están, el atractor, es el mismo y la figura es la misma, si no nos fijamos en cada punto individual. Observando con atención las secciones estroboscópicas, vemos cómo durante un período el atractor se va estirando al tiempo que se pliega sobre sí mismo: un bello ejemplo de transformación del panadero en acción."
    },
    {
     "mota": "irudia",
     "oina": "Sección estroboscópica del atractor de Duffing para <math display=\"inline\"><mi>t</mi></math> mod <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/d2ae5e66b44720c6.svg",
     "zabalera": 325
    },
    {
     "mota": "testua",
     "html": "Como en cada período el atractor se pliega sobre sí mismo una vez y es un conjunto invariante, debe estar formado por un número infinito de capas y su estructura geométrica ha de ser muy complicada. Eso se ve claramente en la figura 8.36, donde se aprecia con más detalle la primera de las secciones. El rectángulo superior izquierdo se ha ampliado en la primera de las figuras 8.37, donde se ve claramente que lo que en la figura 8.36 podía confundirse con bandas simples está en realidad formado por muchas bandas, que a su vez tienen más bandas, como se ve en la siguiente ampliación… Esto se repite a todas las escalas, como una"
    },
    {
     "mota": "irudia",
     "oina": "Ampliaciones de la sección estroboscópica del atractor de Duffing.",
     "src": "../media/irudiak/18e2367d8e42b2e1.svg",
     "zabalera": 443
    },
    {
     "mota": "testua",
     "html": "muñeca rusa: bajo cada estructura hay otra, hasta el infinito. La invariancia de escala (exacta en los ejemplos académicos y normalmente aproximada en los casos realistas) es una característica de los conjuntos de Cantor y, en general, de los fractales, y por eso estamos ante un atractor que —además de ser caótico por la dependencia sensible de las condiciones iniciales— es extraño porque tiene estructura fractal."
    }
   ]
  }
 ]
};
