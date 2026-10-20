/* JAKINA · kapitulua «B9.6 - Mekanika analitikoa eta Lagrange-dispositiboak» (05mk_06analitikoa), desde edicion2/kapituluak/05mk_06analitikoa/05mk_06analitikoa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_06analitikoa"] = {
 "gakoa": "05mk_06analitikoa",
 "titulua": "JAKINA - B9 - Mecánica clásica - 6/10",
 "azala": "B9.6 - Mecánica analítica y formalismos de Lagrange",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_06analitikoa/05mk_06analitikoa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Mecánica analítica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En 1788 apareció el libro <em>Mécanique Analytique</em> de Lagrange: además de recoger lo hecho anteriormente, se creaba allí un nuevo formalismo para hacer mecánica, lo que, gracias a los trabajos posteriores de Laplace, Hamilton, Jacobi y otros, sería la mecánica analítica del siglo XIX. La mecánica analítica es muy elegante desde el punto de vista matemático<span class=\"j-oin\">[<em>Un poema científico, el Shakespeare de las matemáticas</em>, en opinión de Hamilton.]</span> (algunos matemáticos parecen creer que es un área de las matemáticas<span class=\"j-oin\">[En el prefacio del libro citado dice Lagrange: <em>No se encontrará ninguna figura en esta obra. Los métodos que expongo en ella no requieren construcciones ni razonamientos geométricos o mecánicos, sino únicamente operaciones algebraicas, sujetas a un procedimiento regular y uniforme. Los que aman el Análisis verán con placer que la Mecánica se convierte en una nueva rama suya, y me agradecerán haber ampliado así su campo.</em>]</span>), pero desde el punto de vista de los físicos presenta otras ventajas. Para empezar, es muy adecuada para hacer cálculos: pueden usarse de manera natural las coordenadas que mejor se adaptan al problema; si se desea, las fuerzas de ligadura desaparecen casi sin hacer nada (hay que admitir, sin embargo, que el rozamiento seco dinámico, el que surge cuando hay movimiento relativo entre superficies en contacto, no se incorpora tan fácilmente al formalismo<span class=\"j-oin\">[Aun así, a veces puede hacerse con facilidad: véase el problema 6.83.]</span>); las fuerzas de inercia aparecen automáticamente, etc. Además, varios conceptos utilizados en la mecánica analítica (la lagrangiana, la hamiltoniana, los principios variacionales, la relación entre simetrías y leyes de conservación, etc.), una vez extendidos y adaptados como corresponde, son ideas fundamentales de la física teórica actual."
    },
    {
     "mota": "testua",
     "html": "Tras estudiar las coordenadas generalizadas y las ligaduras, estudiaremos la estática lagrangiana. El cálculo de variaciones permite otra manera de hacer mecánica<span class=\"j-oin\">[La equivalencia entre este formalismo y la mecánica vectorial se estudia en el anexo D.]</span> —el elegante principio de Hamilton—, y de ahí obtendremos la mecánica lagrangiana. Mediante la transformación de Legendre estudiaremos un tercer formalismo: las ecuaciones canónicas de Hamilton. Lamentablemente, dado el nivel de este texto, no veremos la teoría de Hamilton y Jacobi, que tanta influencia tuvo en el nacimiento de la mecánica cuántica."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Coordenadas generalizadas y ligaduras",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En este apartado introduciremos poco a poco conceptos y nombres nuevos mediante ejemplos, yendo de lo más fácil a lo más difícil para que entendamos mejor las ideas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Algunos problemas mecánicos"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula puntual]"
    },
    {
     "mota": "testua",
     "html": "Consideremos el sistema mecánico formado por una partícula puntual que puede moverse por el espacio. Para conocer en cada instante la <strong>configuración</strong> del sistema, es decir, la posición de la única partícula, podemos usar, claro está, el vector de posición <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> de la partícula<span class=\"j-oin\">[Daremos siempre por supuesto en este tema que, para estudiar cada sistema mecánico, hemos elegido un sistema de referencia inercial adecuado, aunque no se diga explícitamente.]</span>; pero, como veremos, en la mecánica analítica los vectores acabarán desapareciendo y usaremos funciones escalares. Sabemos cómo hacerlo en este caso: en lugar del vector de posición, podemos usar sus tres componentes, las coordenadas cartesianas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la partícula: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Por otra parte, aunque las coordenadas cartesianas son sencillas, no siempre son las más adecuadas para tener en cuenta las simetrías del problema y, por consiguiente, para facilitar la resolución matemática. Aunque los sistemas de coordenadas son infinitos, en este texto usaremos casi siempre los que se estudian en el apartado B.1 —y algunas variantes evidentes de ellos—: cartesianas, cilíndricas y esféricas. <br> Si para determinar la configuración del sistema mecánico de aquí usamos las coordenadas cilíndricas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la partícula, estas son las que hemos elegido como"
    },
    {
     "mota": "testua",
     "html": "<strong>coordenadas generalizadas</strong>"
    },
    {
     "mota": "testua",
     "html": ". Con la palabra «generalizada» se quiere indicar que la coordenada no será necesariamente cartesiana (aunque lo será en algunos casos, como la coordenada <math display=\"inline\"><mi>z</mi></math> en la elección mencionada). En efecto, en cuanto a dimensiones pueden ser cualquier cosa: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>L</mi></mrow></math>, pero el ángulo <math display=\"inline\"><mi>φ</mi></math> es adimensional. La relación entre las coordenadas generalizadas y las cartesianas viene dada por las <strong>ecuaciones de transformación</strong>: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>z</mi><mi>.</mi></mrow></math> Estas pueden escribirse, por supuesto, mediante una única ecuación vectorial: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Si elegimos como coordenadas generalizadas las polares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las ecuaciones de transformación son <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> o, si se prefiere, la siguiente: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Con todas las elecciones hay algo que no ha cambiado: el número de coordenadas generalizadas necesarias para expresar la configuración,"
    },
    {
     "mota": "testua",
     "html": "<strong>número de grados de libertad</strong>"
    },
    {
     "mota": "testua",
     "html": "como se le llama: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> en este caso, porque hemos supuesto implícitamente que la partícula puede moverse en el espacio sin obstáculo alguno y que, por tanto, las tres coordenadas generalizadas son independientes. Con ello queremos decir que podemos elegir cada una de las tres coordenadas como queramos, sin tener en cuenta los valores de las otras (al dar las condiciones iniciales, por ejemplo), sin cambiar la definición del sistema (luego, claro está, variarán con el tiempo según las leyes dinámicas de la mecánica; pero eso habrá que estudiarlo en las ecuaciones del movimiento, una vez conocidas las fuerzas que sufre la partícula, y no en la definición de la configuración)."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Sistema de partículas]"
    },
    {
     "mota": "testua",
     "html": "Si nuestro sistema mecánico está formado ahora por <math display=\"inline\"><mi>N</mi></math> partículas puntuales, para conocer la configuración hay que elegir <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi></mrow></math> coordenadas generalizadas para determinar las posiciones de las <math display=\"inline\"><mi>N</mi></math> partículas; por tanto, los grados de libertad son <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi></mrow></math>. <br> Por ejemplo, si son <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> partículas y para expresar la posición de la primera elegimos sus coordenadas esféricas, en el caso de la segunda las cartesianas y en el de la tercera las cilíndricas, las coordenadas generalizadas son <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><msub><mi>q</mi><mn>3</mn></msub><mo>,</mo><msub><mi>q</mi><mn>4</mn></msub><mo>,</mo><msub><mi>q</mi><mn>5</mn></msub><mo>,</mo><msub><mi>q</mi><mn>6</mn></msub><mo>,</mo><msub><mi>q</mi><mn>7</mn></msub><mo>,</mo><msub><mi>q</mi><mn>8</mn></msub><mo>,</mo><msub><mi>q</mi><mn>9</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><msub><mi>ρ</mi><mn>3</mn></msub><mo>,</mo><msub><mi>φ</mi><mn>3</mn></msub><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y las ecuaciones de transformación son <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>3</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>z</mi><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> o las siguientes: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>3</mn></msub><mo>=</mo><msub><mi>ρ</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>3</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>3</mn></msub><mo>=</mo><msub><mi>z</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Péndulo esférico]"
    },
    {
     "mota": "testua",
     "html": "Consideremos una masa puntual <math display=\"inline\"><mi>m</mi></math> suspendida de un punto fijo <math display=\"inline\"><mi>O</mi></math> mediante una cuerda sin masa. Que la distancia <math display=\"inline\"><mi>l</mi></math> entre esta y el punto de suspensión sea constante es la definición del péndulo esférico en mecánica. En la definición del sistema, por tanto, imponemos a la configuración de la partícula una condición, una <strong>ligadura</strong>. Si esa condición no se cumple —porque la cuerda se alarga, se rompe o se dobla—, el sistema mecánico es otro, no el péndulo esférico."
    },
    {
     "mota": "irudia",
     "oina": "Péndulo esférico.",
     "src": "../media/irudiak/db1defcf3021531e.svg",
     "zabalera": 66
    },
    {
     "mota": "testua",
     "html": "La <strong>ecuación de ligadura</strong> que expresa la condición que debe cumplirse en este caso se escribe así en coordenadas cartesianas, si se elige el origen del sistema de referencia <math display=\"inline\"><mi>O</mi></math> en el punto de suspensión: <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><msup><mi>l</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> En esta ecuación vemos que las tres coordenadas cartesianas no son independientes entre sí: dos de ellas (<math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>, por ejemplo) pueden elegirse como se quiera y, por tanto, podemos tomarlas como coordenadas generalizadas; pero una vez hecho esto, la tercera (<math display=\"inline\"><mi>z</mi></math>) no puede elegirse de cualquier manera, pues es una de las dadas por la ecuación de ligadura (6.22). A decir verdad, las coordenadas cartesianas no son las más adecuadas para estudiar el péndulo esférico. Las coordenadas polares esféricas respetan mejor su simetría. En efecto, en coordenadas esféricas la ecuación de ligadura es muy sencilla: <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mi>l</mi><mi>.</mi></mrow></math> Así pues, los ángulos <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>φ</mi></math> no tienen que cumplir ninguna condición, pueden elegirse como se quiera y, en consecuencia, dos son las coordenadas generalizadas adecuadas: para definir la configuración del sistema basta conocer la dirección y el sentido de la cuerda, y la manera adecuada de hacerlo es usar los dos ángulos mencionados. Las ecuaciones de transformación son <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> Por supuesto, también pueden escribirse de la manera siguiente: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Escribe las ecuaciones de ligadura y de transformación en coordenadas cilíndricas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dos coordenadas bastan para describir la configuración completa del sistema; por tanto, el sistema tiene <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi><mo>=</mo><mn>2</mn></mrow></math> grados de libertad, pues el número de partículas es <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> y el de ecuaciones de ligadura <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>. <br> Por otra parte, sabemos cuál es el efecto dinámico de la cuerda: ejerce una fuerza de contacto sobre la partícula <math display=\"inline\"><mi>m</mi></math>. Las fuerzas que surgen para mantener la ligadura son las <strong>fuerzas de ligadura</strong>. En este caso, como la fuerza de ligadura es perpendicular a la trayectoria, no realiza trabajo."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Péndulo simple</span>"
      },
      {
       "mota": "testua",
       "html": ". Si ahora el péndulo se mueve en un plano (porque, en lugar de colgarlo de una cuerda, lo suspendemos mediante una varilla ligera de un eje perpendicular al plano, o porque se elige la velocidad inicial en un plano vertical que pasa por el punto de suspensión), tenemos el péndulo simple. <br> (a) ¿Cómo se expresa esta segunda ligadura si elegimos el sistema de referencia de modo que el plano de oscilación sea <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math>? <br> (b) ¿Cuántos grados de libertad tiene el sistema? <br> (c) Elige la(s) coordenada(s) generalizada(s) adecuada(s) y escribe las ecuaciones de transformación."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si el péndulo simple está suspendido de un eje, supondremos siempre en este tema que el rozamiento es despreciable —y, en consecuencia, que las fuerzas de ligadura no realizan trabajo—, pues despreciaremos siempre el rozamiento seco dinámico (pero no el estático) entre superficies en contacto<span class=\"j-oin\">[Pero recuérdese lo dicho en la nota a pie 3 de la página 290.]</span>."
    },
    {
     "mota": "irudia",
     "oina": "Alambre semicircular girando con velocidad angular constante.",
     "src": "../media/irudiak/6f0100274fd6e104.svg",
     "zabalera": 88
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Alambre semicircular giratorio]"
    },
    {
     "mota": "testua",
     "html": "El alambre liso semicircular de hierro de la figura 6.3 gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> alrededor del eje vertical. Eligiendo el mismo sistema de referencia que en el caso del péndulo esférico, además de la ecuación de ligadura <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math>, tenemos <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> en forma diferencial. Integrando esta obtenemos la segunda ligadura, mediante una constante de integración arbitraria <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>: <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Las ecuaciones de transformación son <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> o <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. En este caso tenemos <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>L</mi><mo>=</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Sólido rígido]"
    },
    {
     "mota": "testua",
     "html": "Como sabemos, la definición del sólido rígido en mecánica es que las distancias entre sus puntos sean constantes. Si en el sólido hay <math display=\"inline\"><mrow><mi>N</mi><mo>≫</mo><mn>1</mn></mrow></math> partículas, el número de pares es <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> y para cada uno tenemos una ligadura de la forma <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math>, con una constante <math display=\"inline\"><msub><mi>C</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> adecuada; pero no hay que pensar que todas sean independientes, pues <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> es negativo cuando <math display=\"inline\"><mi>N</mi></math> es grande. En lugar de contar las ecuaciones de ligadura independientes, en el apartado 5.1.1 demostramos directamente que los grados de libertad son, en general, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>6</mn></mrow></math>. Por supuesto, como se ha hecho en algunos ejemplos anteriores, si se imponen al sólido otras ligaduras (como girar alrededor de un eje fijo, estar suspendido de una cuerda, moverse sobre una superficie o en un plano, etc.), quedarán menos grados de libertad."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Máquina de Atwood]"
    },
    {
     "mota": "testua",
     "html": "Eligiendo el sistema de referencia como se muestra en la figura 6.4, la hipótesis de que los movimientos de los bloques son verticales se expresa mediante las cuatro ecuaciones de ligadura siguientes, con las constantes <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>C</mi><mn>2</mn></msub></math>: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Además, que la cuerda sea inextensible da la siguiente ligadura: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>π</mi><mi>R</mi><mo>=</mo><mi>l</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Máquina de Atwood.",
     "src": "../media/irudiak/18a85eff82e9f06c.svg",
     "zabalera": 89
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>l</mi></math> y <math display=\"inline\"><mi>R</mi></math> son la longitud de la cuerda y el radio de la polea. Las partículas son <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn></mrow></math> y las ligaduras <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>5</mn></mrow></math>; por tanto, nos queda un único grado de libertad: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>. Eligiendo como coordenada generalizada la <math display=\"inline\"><mi>q</mi></math> de la figura, las ecuaciones de transformación se escriben así: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>q</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>q</mi><mo>+</mo><mi>π</mi><mi>R</mi><mo>−</mo><mi>l</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Como veremos, las constantes <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>π</mi><mi>R</mi><mo>−</mo><mi>l</mi></mrow></math> carecen de importancia."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado]"
    },
    {
     "mota": "testua",
     "html": "En el caso de la figura 6.5, la primera ligadura es que el bloque esté siempre en un plano vertical. Si elegimos nuestro sistema de referencia de modo que el plano del movimiento sea <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>, la ecuación de ligadura será <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> (u otra constante). La segunda ligadura es que la partícula esté siempre en el plano inclinado de la figura 6.3, lo cual, eligiendo adecuadamente los ejes coordenados, puede escribirse como <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Plano inclinado.",
     "src": "../media/irudiak/99e99e5e56b06b07.svg",
     "zabalera": 142
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo se escribiría la segunda ecuación de ligadura si eligiéramos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> en la dirección vertical?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A decir verdad, lo que se mueve por el plano nunca será puntual, sino un sistema de partículas; pero lo que aquí nos interesa es que es un sistema de un solo grado de libertad: basta una única coordenada generalizada (la coordenada <math display=\"inline\"><mi>x</mi></math> del centro de masas o, si se prefiere, su altura, por ejemplo) para conocer la configuración (la posición de todos los puntos del sistema). La fuerza de ligadura es la fuerza de contacto y, en el caso general, tiene dos componentes. La componente perpendicular, la normal, no realizará trabajo, y admitiremos que la componente tangente, el rozamiento, es despreciable."
    },
    {
     "mota": "testua",
     "html": "Si lo que está en el plano del movimiento es un disco o un aro, tenemos tres posibilidades. En el caso general el aro rodará y deslizará. Para determinar la posición de todos sus puntos y, por tanto, la configuración del sistema, necesitamos dos coordenadas generalizadas: podemos usar <math display=\"inline\"><mi>x</mi></math> para conocer la posición del centro de masas y el ángulo <math display=\"inline\"><mi>φ</mi></math> para dar la orientación alrededor del centro. Si hay deslizamiento, supondremos de nuevo que la fuerza de ligadura es la normal."
    },
    {
     "mota": "irudia",
     "oina": "Un aro en un plano inclinado.",
     "src": "../media/irudiak/e113765cf0cca1bc.svg",
     "zabalera": 156
    },
    {
     "mota": "testua",
     "html": "Si el aro desciende sin rotar, tenemos otra ligadura, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo></mrow></math> constante, y nos queda un único grado de libertad. Lo mismo ocurre si el aro no desliza. En efecto, que no haya deslizamiento significa que el punto de contacto (que cambia de un instante a otro) está en reposo. La velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> del centro de masas del aro, por tanto, será <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> (recuérdese el campo de velocidades (5.6)). En consecuencia, la ecuación de ligadura puede escribirse en forma diferencial como <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> o, integrándola, en forma finita como <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, usando la constante de integración <math display=\"inline\"><mrow><mi>−</mi><mi>R</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> que da la relación entre los orígenes de las coordenadas <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>φ</mi></math>. Así pues, tenemos una única coordenada generalizada (independiente) (<math display=\"inline\"><mi>φ</mi></math>, por ejemplo) y estas son las ecuaciones de transformación: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como sabemos, para que no haya deslizamiento la fuerza de rozamiento es imprescindible, pero como el punto de contacto está en reposo, la fuerza de ligadura no realizará trabajo."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "Estudiemos el sistema de la figura 6.7, en el caso en que puede moverse horizontalmente sin rozamiento. Si elegimos como coordenadas generalizadas <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mi>s</mi></math> de la figura 6.7, las ecuaciones de transformación se escriben así, designando con los subíndices 1 y 2 el prisma y el bloque respectivamente: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>r</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>r</mi><mo>+</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Plano inclinado móvil.",
     "src": "../media/irudiak/e45a0b8f752f9aea.svg",
     "zabalera": 156
    },
    {
     "mota": "testua",
     "html": "o <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mi>s</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msub><mi>C</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>4</mn></msub><mo>−</mo><mi>s</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒋</mi><mi>.</mi></mrow></math> Aquí hemos usado las constantes <math display=\"inline\"><msub><mi>C</mi><mi>i</mi></msub></math> para expresar la ubicación exacta de los centros de masas de los sólidos, pero constantes como estas no aparecerán en las ecuaciones del movimiento y las descartaremos desde el principio en todos los ejemplos siguientes."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Elige coordenadas generalizadas adecuadas para el caso del péndulo doble de la figura 6.8, cuando el movimiento tiene lugar en un plano vertical. Escribe las ecuaciones de transformación."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Péndulo doble.",
     "src": "../media/irudiak/82ef47c3d96f992d.svg",
     "zabalera": 78
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ligaduras holónomas"
    },
    {
     "mota": "testua",
     "html": "En todas las ligaduras que hemos estudiado en los ejemplos anteriores, pasando el miembro de la derecha a la izquierda, la ecuación de ligadura siempre podía escribirse de la forma <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, con una función <math display=\"inline\"><mi>f</mi></math> adecuada. Cuando la ecuación de ligadura puede escribirse de esa manera o, usando las componentes de los vectores, de la forma equivalente <math display=\"block\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>N</mi></msub><mo>,</mo><msub><mi>y</mi><mi>N</mi></msub><mo>,</mo><msub><mi>z</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, se dice que la ligadura es <strong>holónoma</strong>. Si la ecuación de ligadura es de otro tipo —<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≥</mo><mn>0</mn></mrow></math>, por ejemplo—, la ligadura no es holónoma; pero <em>en este tema admitiremos siempre que todas las ligaduras son holónomas.</em>  <br> Si en la ecuación de ligadura el tiempo no aparece explícitamente, se escribe <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"block\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>N</mi></msub><mo>,</mo><msub><mi>y</mi><mi>N</mi></msub><mo>,</mo><msub><mi>z</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y diremos que la ligadura holónoma es <strong>esclerónoma</strong> o <strong>fija</strong>. En caso contrario, la ligadura es <strong>reónoma</strong> o <strong>móvil</strong>. En todos los ejemplos anteriores las ligaduras han sido holónomas y fijas, salvo en un caso: en el alambre liso giratorio de la página 294 (6.29) la ligadura era móvil."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fuerzas de ligadura"
    },
    {
     "mota": "testua",
     "html": "En las ligaduras se aplican fuerzas sobre el sistema mecánico. Las fuerzas de ligadura nos son muy conocidas: la fuerza de contacto que ejerce la cuerda sobre la masa del péndulo —que es igual a la tensión cuando la masa de la cuerda es despreciable—, la normal y el rozamiento que aparecen cuando dos superficies están en contacto, etc. De aquí en adelante admitiremos siempre que el rozamiento entre dos superficies en movimiento relativo es despreciable, pues esa fuerza no se incorpora tan fácilmente al formalismo que veremos (pero el rozamiento estático no será siempre nulo). Como veremos, las fuerzas de ligadura no aparecerán en absoluto en la mecánica lagrangiana<span class=\"j-oin\">[ Si se desea calcularlas, puede usarse el método de los multiplicadores de Lagrange (véase, por ejemplo, [10]).]</span>: de hecho, esta es la principal ventaja de este formalismo para hacer cálculos. <br> Las fuerzas que no son de ligadura se llaman"
    },
    {
     "mota": "testua",
     "html": "<strong>fuerzas activas</strong>"
    },
    {
     "mota": "testua",
     "html": ". Entre los ejemplos conocidos pueden citarse los siguientes: el peso (y la atracción gravitatoria general), la fuerza que ejerce un muelle sobre la masa colocada en su extremo y la que ejerce un campo electrostático sobre una carga."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacio de configuración"
    },
    {
     "mota": "testua",
     "html": "Ya tenemos el vocabulario y los conceptos para dar la definición precisa de los sistemas mecánicos que estudiaremos en este tema. Nuestras hipótesis serán siempre las siguientes:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "En el sistema hay <math display=\"inline\"><mi>N</mi></math> partículas puntuales. En un sistema de referencia inercial sus posiciones vienen dadas por los vectores <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></math>, siendo <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Deben cumplirse <math display=\"inline\"><mi>L</mi></math> ligaduras holónomas independientes:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>l</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(En casos especiales puede ser <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Las ligaduras son <strong>ideales</strong>: en el movimiento relativo entre superficies en contacto, el rozamiento seco dinámico es despreciable<span class=\"j-oin\">[Pero recuérdese lo dicho en la nota a pie 3 de la página 290.]</span>. El rozamiento estático, en cambio, no tiene por qué ser despreciable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Los grados de libertad son <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mo>−</mo><mi>L</mi></mrow></math> y, tras elegir <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mi>i</mi></msub><mo>:</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> coordenadas generalizadas, las cartesianas se obtienen mediante las ecuaciones de transformación:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por supuesto, si todas las ligaduras son fijas, el tiempo no aparecerá explícitamente en las ecuaciones de transformación (6.63), <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> pero, en casos más generales, las ligaduras pueden ser móviles. Cada conjunto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> de valores de las coordenadas generalizadas define una configuración del sistema, y el conjunto de todas las configuraciones define un espacio abstracto: el <strong>espacio de configuración</strong>, que admite <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> coordenadas. Por ejemplo, en el caso del péndulo esférico cada par <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> define una configuración. El espacio de configuración es el conjunto de todas las orientaciones posibles del péndulo y lo estudiaremos mediante el espacio matemático de todos los pares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Todas las fuerzas activas <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>k</mi></msub></math> son conservativas y, por tanto, si la energía potencial total del sistema es <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>N</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, se escriben así:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>k</mi></msub><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>x</mi><mi>k</mi></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mi>k</mi></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>z</mi><mi>k</mi></msub></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(En el apartado D.2.2 veremos, en un ejemplo especial interesante, la energía potencial generalizada para el caso de fuerzas conservativas generalizadas.)"
    },
    {
     "mota": "testua",
     "html": "En las páginas siguientes se estudiará cómo cambia la configuración durante el movimiento. En la mecánica analítica el punto que representa el sistema se mueve en el espacio de configuración abstracto, pero luego pueden usarse las ecuaciones de transformación para conocer cómo es el movimiento en el espacio ordinario. En el caso del péndulo esférico, por ejemplo, una vez conocida la evolución de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, mediante las ecuaciones de transformación (6.24)–(6.26) puede calcularse la posición de la partícula en cada instante."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Estática analítica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para empezar, estudiemos la condición que debe cumplirse para que el sistema esté en equilibrio, es decir, cuándo estarán todas las partículas en reposo (o cuándo se moverán con velocidad constante). En la mecánica analítica, como se demuestra en el apartado D.3, las condiciones de equilibrio (D.55) son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>El equilibrio se da precisamente en los mínimos, máximos u otros puntos extremos de la energía potencial. El equilibrio\nestable se dará en los mínimos de la energía potencial</em>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[Parece que la demostración de este resultado, llamado <strong>teorema de Lagrange</strong>, es de Dirichlet (véase [37]).]</span>. Pero recuérdese que los cálculos se hacen en coordenadas generalizadas: al calcular el mínimo mencionado solo se consideran las configuraciones que cumplen las ecuaciones de ligadura. <br> Hay que mencionar un caso especial interesante. Si las fuerzas activas son pesos, la energía potencial será gravitatoria. Si se elige el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> en la dirección vertical y hacia arriba, la energía potencial es proporcional a la altura <math display=\"inline\"><mi>Z</mi></math> del centro de masas, <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mi>g</mi><msub><mi>z</mi><mi>k</mi></msub><mo>=</mo><mi>g</mi><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><msub><mi>z</mi><mi>k</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>Z</mi><mo>,</mo></mrow></math> y el equilibrio se da en los puntos extremos de la altura del centro de masas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>Z</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, <em>el equilibrio estable se alcanza en la posición más baja que puede tener el centro de masas sin romper las ligaduras</em>. Este resultado recibe el nombre de <strong>principio de Torricelli</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Equilibrio de la varilla.",
     "src": "../media/irudiak/c139248bf82a928f.svg",
     "zabalera": 126
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el equilibrio de la varilla homogénea de la figura 6.9. Está en un plano vertical entre la mesa y la pared. Si el rozamiento es despreciable, podemos aplicar el principio de Torricelli. Está claro que hay un único grado de libertad y elegiremos como coordenada generalizada el ángulo <math display=\"inline\"><mi>α</mi></math>. Para calcular la altura <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mi>h</mi><mo>−</mo><mi>d</mi></mrow></math> del centro de masas, nos serviremos de la trigonometría elemental para obtener <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>l</mi><mi>/</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> mediante las coordenadas generalizadas. Así pues, tenemos <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mi>h</mi><mo>−</mo><mi>d</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> y la condición de equilibrio es <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>Z</mi></mrow><mrow><mi>d</mi><mi>α</mi></mrow></mfrac><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>−</mo><mfrac><mi>a</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></mfrac><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>. La posición de equilibrio es, por tanto, <math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mroot><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mi>l</mi></mfrac><mn>3</mn></mroot></mrow></math>. Por supuesto, como el coseno debe ser 1 o menor, debe cumplirse la condición <math display=\"inline\"><mrow><mi>l</mi><mo>≥</mo><mn>2</mn><mi>a</mi></mrow></math> para que pueda haber equilibrio. En la figura se ve claramente el significado de esa condición: el centro de masas debe situarse más alto que el borde de la mesa en el equilibrio."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es estable la posición de equilibrio?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como hemos visto, las fuerzas de contacto normales que ejercen la mesa y la pared no nos han aparecido: son fuerzas de ligadura. En la mecánica vectorial, en cambio, estas últimas hay que tenerlas en cuenta y habrá tres incógnitas: los módulos de las normales y el ángulo de equilibrio. Para ello hay tres condiciones de equilibrio en este problema plano: las dos correspondientes a que la fuerza total sea cero y la única del momento total de las fuerzas. En la estática analítica las normales, que no nos interesan, no aparecen y para obtener la única incógnita hay que resolver una sola ecuación de equilibrio."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la mecánica vectorial para obtener la posición de equilibrio."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Disco desequilibrado en una pendiente: equilibrio, estabilidad y oscilaciones"
    },
    {
     "mota": "testua",
     "html": "<em>Un disco homogéneo de radio <math display=\"inline\"><mi>R</mi></math> y masa <math display=\"inline\"><mi>M</mi></math> rueda sin deslizar (hay rozamiento estático suficiente) sobre una pendiente fija de ángulo <math display=\"inline\"><mi>β</mi></math>. En el borde del disco hay una\npartícula puntual de masa <math display=\"inline\"><mi>m</mi></math> firmemente fijada.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de\nExamen Resueltos y Comentados</em>, 97Feb02 (p. 13), donde se buscaba el ángulo de\nequilibrio de un disco apoyado sobre dos varillas discutiendo el valor estacionario de la altura del centro de masas. Aquí se ha conservado ese mismo método, pero trasladado a otro dispositivo —un disco desequilibrado que rueda en una pendiente—,\ny se le han añadido la estabilidad, las oscilaciones pequeñas y el umbral de bifurcación <math display=\"inline\"><msub><mi>β</mi><mi>c</mi></msub></math>.]</span> Solo\nactúa la gravedad. Sea <math display=\"inline\"><mi>θ</mi></math> el ángulo que forma con la vertical descendente el radio que va del centro del disco a la partícula (positivo hacia arriba de la pendiente). <br>\n<strong>(a)</strong> Con el método analítico de la altura del centro de masas (el de la semilla), obtén la condición de equilibrio y demuestra que la orientación de equilibrio es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>. <strong>(b)</strong> Sin resolver ecuaciones diferenciales, estudia la estabilidad: distingue la rama estable de la inestable y halla la pendiente crítica <math display=\"inline\"><msub><mi>β</mi><mi>c</mi></msub></math>, a partir de la cual no hay equilibrio. <strong>(c)</strong> Obtén la frecuencia de las oscilaciones pequeñas en torno al equilibrio estable.\n<strong>(d)</strong> Estudia los casos límite <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>. <strong>(e)</strong> ¿Cuál es el valor mínimo del coeficiente de rozamiento estático necesario para que el disco no deslice?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/be6552a52b7861af.svg",
     "zabalera": 335
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El disco homogéneo (<math display=\"inline\"><mrow><mi>R</mi><mo>,</mo><mi>M</mi></mrow></math>) rueda sin deslizar por la pendiente <math display=\"inline\"><mi>β</mi></math>; la masa <math display=\"inline\"><mi>m</mi></math> del borde equilibra en la parte alta de la cuesta. <math display=\"inline\"><mi>θ</mi></math> se mide desde la vertical descendente.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El sistema tiene un único grado de libertad, pues la ligadura de rodadura relaciona el giro del disco con el desplazamiento del centro. Tomemos <math display=\"inline\"><mi>θ</mi></math> como coordenada generalizada. La rodadura iguala <math display=\"inline\"><mrow><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> al desplazamiento del centro en la dirección de la pendiente; por tanto, el centro recorre la cuesta hacia abajo una distancia <math display=\"inline\"><mrow><mi>R</mi><mi>θ</mi></mrow></math> y su altura es <math display=\"inline\"><mrow><msub><mi>z</mi><mi>C</mi></msub><mo>=</mo><mi>−</mi><mi>R</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>. La partícula está a una distancia <math display=\"inline\"><mi>R</mi></math> del centro, formando un ángulo <math display=\"inline\"><mi>θ</mi></math> con la vertical descendente; por tanto, <math display=\"inline\"><mrow><msub><mi>z</mi><mi>m</mi></msub><mo>=</mo><msub><mi>z</mi><mi>C</mi></msub><mo>−</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como la única fuerza activa es la gravedad, el equilibrio exige que la altura del centro de masas sea estacionaria —este es el método de la semilla—. La energía potencial del sistema es: <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>M</mi><mi>g</mi><msub><mi>z</mi><mi>C</mi></msub><mo>+</mo><mi>m</mi><mi>g</mi><msub><mi>z</mi><mi>m</mi></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> donde la altura del centro de masas es <math display=\"inline\"><mrow><msub><mi>z</mi><mi>G</mi></msub><mo>=</mo><mi>U</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. El equilibrio se obtiene anulando la derivada: <math display=\"block\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow><mi>m</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> El resultado tiene una lectura geométrica clara: el equilibrio se da cuando el centro de masas queda en la misma vertical que el punto de contacto —precisamente la configuración que la rodadura hace que <math display=\"inline\"><msub><mi>z</mi><mi>G</mi></msub></math> sea estacionaria—. La partícula se sitúa en la parte alta de la cuesta, de modo que el momento que su peso produce respecto al punto de contacto se oponga a que el disco ruede hacia abajo."
    },
    {
     "mota": "testua",
     "html": "La estabilidad la decide la derivada segunda, sin resolver ecuaciones diferenciales: <math display=\"block\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> Hay dos equilibrios en el intervalo. Por un lado, <math display=\"inline\"><mrow><msubsup><mi>θ</mi><mi>s</mi><mo>*</mo></msubsup><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> y, por tanto, <math display=\"inline\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> —mínimo de la altura, equilibrio <strong>estable</strong>—. Por otro, <math display=\"inline\"><mrow><msubsup><mi>θ</mi><mi>u</mi><mo>*</mo></msubsup><mo>=</mo><mi>π</mi><mo>−</mo><msubsup><mi>θ</mi><mi>s</mi><mo>*</mo></msubsup></mrow></math>, donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>&lt;</mo><mn>0</mn></mrow></math> —máximo, equilibrio <strong>inestable</strong>—. Para que exista equilibrio, sin embargo, debe cumplirse <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>≤</mo><mn>1</mn></mrow></math>, es decir, <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>≤</mo><mfrac><mi>m</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>≤</mo><msub><mi>β</mi><mi>c</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>m</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Cuando <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>, los dos equilibrios coinciden (<math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>): es una bifurcación nodo-silla (saddle-node), donde <math display=\"inline\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math> y el equilibrio estable y el inestable desaparecen juntos. Si <math display=\"inline\"><mrow><mi>β</mi><mo>&gt;</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>, no hay equilibrio para ningún <math display=\"inline\"><mi>θ</mi></math> y el disco se escapa cuesta abajo, acelerando continuamente: el momento de la masa del borde ya no puede sostener la gravedad."
    },
    {
     "mota": "testua",
     "html": "Para las oscilaciones pequeñas necesitamos la energía cinética. La velocidad del centro es <math display=\"inline\"><mrow><msub><mi>v</mi><mi>C</mi></msub><mo>=</mo><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, el giro del disco es <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> (por rodadura) y su momento de inercia es <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>. El cuadrado de la velocidad de la partícula, en el sistema de referencia fijo y usando la ligadura de rodadura, es <math display=\"block\"><mrow><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; se anula cuando la partícula está en el punto de contacto (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>β</mi></mrow></math>), como cabía esperar. La energía cinética total se resume así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Linealizando en torno al equilibrio estable —como <math display=\"inline\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, la variación de <math display=\"inline\"><mi>A</mi></math> no influye en primer orden—, la frecuencia de las oscilaciones pequeñas es: <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>U</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup></mrow><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los casos límite confirman el resultado. Cuando <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mn>0</mn></mrow></math> (partícula en el punto inferior, en contacto) y <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>M</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: se recupera el disco cargado que se balancea rodando sobre suelo llano. En el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mi>β</mi></mrow></math>: la partícula pesada se coloca directamente en el punto de contacto (el punto más bajo de su cicloide), y <math display=\"inline\"><mrow><msub><mi>β</mi><mi>c</mi></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (se equilibra en cualquier pendiente). Cuando <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><msubsup><mi>β</mi><mi>c</mi><mo>−</mo></msubsup></mrow></math>, en cambio, <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: el modo se ablanda en el punto de bifurcación, como corresponde a una bifurcación nodo-silla. Inversamente, cuando <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>β</mi><mi>c</mi></msub><mo>→</mo><mn>0</mn></mrow></math>: un disco pesado homogéneo no puede equilibrarse en ninguna pendiente con una masa ligera en el borde."
    },
    {
     "mota": "testua",
     "html": "Por último, en el equilibrio el sistema es estático y el balance de fuerzas da las reacciones de contacto. Respecto al punto de contacto solo la gravedad hace momento (pues <math display=\"inline\"><mi>N</mi></math> y <math display=\"inline\"><mi>f</mi></math> se aplican allí), y anular ese momento es precisamente la condición de (a); la suma de las fuerzas, en cambio, da <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> (hacia arriba) en la dirección de la pendiente y <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> en la normal. Para que el disco no deslice debe cumplirse <math display=\"inline\"><mrow><mi>f</mi><mo>≤</mo><msub><mi>μ</mi><mi>s</mi></msub><mi>N</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>μ</mi><mi>s</mi></msub><mo>≥</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> El resultado es notable: el umbral de deslizamiento es el mismo que el de un bloque simple que resbala por la pendiente, totalmente independiente de las masas y del radio —la carga decide la <strong>existencia</strong> del equilibrio (mediante <math display=\"inline\"><msub><mi>β</mi><mi>c</mi></msub></math>), pero no la adherencia necesaria—. Llevado a la pendiente máxima en que el equilibrio es posible (<math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>β</mi><mi>c</mi></msub></mrow></math>), el valor máximo necesario es <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>s</mi></msub><mo>≥</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msub><mi>β</mi><mi>c</mi></msub><mo>=</mo><mi>m</mi><mi>/</mi><msqrt><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Balanceo de un semidisco cargado: equilibrio, estabilidad y modo normal"
    },
    {
     "mota": "testua",
     "html": "<em>Un semidisco homogéneo de radio <math display=\"inline\"><mi>R</mi></math> y masa <math display=\"inline\"><mi>M</mi></math> está en un plano vertical, apoyado por su borde curvo\nsobre una mesa horizontal; puede rodar (balancearse) sobre la mesa sin resbalar. En un\nextremo de su diámetro hay una partícula de masa <math display=\"inline\"><mi>m</mi></math> pegada.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y\nOndas: Problemas de Examen Resueltos y Comentados</em>, 97Jun01 (junio de 1997), donde el semidisco y la partícula tenían la misma\nmasa (<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi></mrow></math>) y solo se pedía la posición de equilibrio (estática). Aquí se han generalizado las masas (<math display=\"inline\"><mrow><mi>M</mi><mo>≠</mo><mi>m</mi></mrow></math>)\ny se ha añadido la dinámica completa: estabilidad, frecuencia del modo normal y casos límite.]</span> <br>\n<strong>(a)</strong> Halla el centro de masas del conjunto (respecto al punto medio <math display=\"inline\"><mi>O</mi></math> del diámetro). <strong>(b)</strong> Obtén el ángulo de equilibrio <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> que forma el diámetro\ncon la horizontal; demuestra que depende solo de la relación de masas y\nestudia los límites <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math>. <strong>(c)</strong> Demuestra que ese equilibrio es siempre estable y que el conjunto no\npuede volcar nunca, por pesada que sea la partícula. <strong>(d)</strong> Halla la frecuencia angular <math display=\"inline\"><mi>ω</mi></math> de las pequeñas oscilaciones de balanceo en torno a ese equilibrio. <strong>(e)</strong> Comprueba los casos límite: recupera la frecuencia del semidisco puro\ncuando <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math>, e interpreta <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/cd5039f151432cbe.svg",
     "zabalera": 319
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El semidisco (masa <math display=\"inline\"><mi>M</mi></math>) se balancea sobre su borde curvo en la mesa; la partícula <math display=\"inline\"><mi>m</mi></math> está en el extremo del diámetro. En el equilibrio, el centro de masas (<math display=\"inline\"><mi>G</mi></math>) queda verticalmente bajo <math display=\"inline\"><mi>O</mi></math>; así, el diámetro se inclina <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">or</mtext></msub></math>.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Describiremos el cuerpo rígido en torno al punto <math display=\"inline\"><mi>O</mi></math>, donde <math display=\"inline\"><mi>O</mi></math> es el punto medio del diámetro y, a la vez, el centro del borde curvo (del arco de circunferencia de radio <math display=\"inline\"><mi>R</mi></math>); por tanto, <math display=\"inline\"><mi>O</mi></math> es un punto fijo del cuerpo. Como el arco rueda sobre la mesa sin resbalar, <math display=\"inline\"><mi>O</mi></math> está siempre a altura <math display=\"inline\"><mi>R</mi></math> y solo se mueve horizontalmente: con un ángulo de giro <math display=\"inline\"><mi>ψ</mi></math>, el desplazamiento horizontal de <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mrow><mi>R</mi><mi>ψ</mi></mrow></math> y el punto de contacto está directamente bajo <math display=\"inline\"><mi>O</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Empecemos por el centro de masas. Primero necesitamos el centroide del semidisco: por simetría, está en el eje perpendicular al diámetro; tomando la densidad superficial <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mi>M</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y coordenadas polares, la distancia medida desde <math display=\"inline\"><mi>O</mi></math> es: <math display=\"block\"><mrow><msub><mi>d</mi><mi>s</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>M</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow><mi>R</mi></msubsup><msubsup><mo>∫</mo><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.222em\"></mspace><mi>σ</mi><mspace width=\"0.222em\"></mspace><mi>r</mi><mi>d</mi><mi>φ</mi><mi>d</mi><mi>r</mi><mo>=</mo><mfrac><mi>σ</mi><mi>M</mi></mfrac><mo>⋅</mo><mfrac><msup><mi>R</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>⋅</mo><mn>2</mn><mo>=</mo><mfrac><mrow><mn>4</mn><mi>R</mi></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math> Para obtener el centro de masas del conjunto tomaremos ejes ligados al cuerpo: origen en <math display=\"inline\"><mi>O</mi></math>, eje <math display=\"inline\"><mi>ξ</mi></math> a lo largo del diámetro (hacia la partícula) y eje <math display=\"inline\"><mi>η</mi></math> perpendicular al diámetro, hacia el interior del semidisco. Entonces el centroide del semidisco está en <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>d</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y la partícula en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto: <math display=\"block\"><mrow><msub><mi>ξ</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>R</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>η</mi><mi>G</mi></msub><mo>=</mo><mfrac><mrow><mi>M</mi><msub><mi>d</mi><mi>s</mi></msub></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>M</mi><mi>R</mi></mrow><mrow><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> y la distancia de <math display=\"inline\"><mi>O</mi></math> al centro de masas es: <math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ξ</mi><mi>G</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>η</mi><mi>G</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><mfrac><mi>R</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><msqrt><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>M</mi></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el cuerpo rueda, las únicas fuerzas activas son la gravedad (desde <math display=\"inline\"><mi>G</mi></math>) y la reacción de la mesa (desde el punto de contacto bajo <math display=\"inline\"><mi>O</mi></math>). Sea <math display=\"inline\"><mi>ψ</mi></math> el ángulo de balanceo, medido desde la configuración en que <math display=\"inline\"><mi>G</mi></math> está directamente bajo <math display=\"inline\"><mi>O</mi></math>. Entonces la altura de <math display=\"inline\"><mi>G</mi></math> es <math display=\"inline\"><mrow><msub><mi>y</mi><mi>G</mi></msub><mo>=</mo><mi>R</mi><mo>−</mo><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow></math> y la energía potencial es: <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>ρ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><mi>U</mi></math> El mínimo está en <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math>: el equilibrio se da cuando <math display=\"inline\"><mi>G</mi></math> está en la vertical bajo <math display=\"inline\"><mi>O</mi></math>. Geométricamente, el cuerpo se inclina hasta que la recta <math display=\"inline\"><mrow><mi>O</mi><mi>G</mi></mrow></math> queda vertical; como <math display=\"inline\"><mrow><mi>O</mi><mi>G</mi></mrow></math> forma con el eje <math display=\"inline\"><mi>η</mi></math> un ángulo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mi>G</mi></msub><mi>/</mi><msub><mi>η</mi><mi>G</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en el equilibrio el eje <math display=\"inline\"><mi>η</mi></math> queda inclinado ese ángulo respecto a la vertical y, en consecuencia, el diámetro (eje <math display=\"inline\"><mi>ξ</mi></math>) respecto a la horizontal ese mismo ángulo: <math display=\"block\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msub><mi>ξ</mi><mi>G</mi></msub><msub><mi>η</mi><mi>G</mi></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>m</mi></mrow><mrow><mn>4</mn><mi>M</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> El resultado depende solo de la relación de masas —ni de <math display=\"inline\"><mi>R</mi></math> ni de <math display=\"inline\"><mi>g</mi></math>—. Si <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mn>0</mn></mrow></math> (semidisco simétrico, diámetro horizontal); si <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (diámetro vertical, partícula directamente bajo <math display=\"inline\"><mi>O</mi></math>, hasta tocar la mesa, pues su distancia a <math display=\"inline\"><mi>O</mi></math> es <math display=\"inline\"><mi>R</mi></math>). Con masas iguales (<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi></mrow></math>), <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>67</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La estabilidad es inmediata. Como <math display=\"inline\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow></math>, <math display=\"block\"><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> es siempre <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> para todo <math display=\"inline\"><mi>m</mi></math> finito. Por tanto <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math> es siempre un mínimo estable, y no hay otro equilibrio en el intervalo de balanceo. La consecuencia es notable: el semidisco cargado <strong>no puede volcar nunca</strong>, por pesada que sea la partícula; la carga solo aumenta la inclinación de equilibrio, hacia el valor finito <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. La razón está en el papel de <math display=\"inline\"><mi>O</mi></math>: el centro del arco se mantiene siempre a altura <math display=\"inline\"><mi>R</mi></math>, y la masa pegada en el diámetro —es decir, en un lugar que nunca sube por encima del nivel de <math display=\"inline\"><mi>O</mi></math>— deja siempre <math display=\"inline\"><mi>G</mi></math> por debajo de <math display=\"inline\"><mi>O</mi></math>. En cambio, si la masa se colocara por encima de <math display=\"inline\"><mi>O</mi></math> (por ejemplo, en un mástil), <math display=\"inline\"><mi>G</mi></math> podría subir por encima de <math display=\"inline\"><mi>O</mi></math> y el cuerpo podría volcar de forma crítica (efecto del metacentro); aquí, con la carga en el diámetro, eso es imposible."
    },
    {
     "mota": "testua",
     "html": "Para obtener la frecuencia de oscilación necesitamos la energía cinética. Como la ligadura de rodadura da la posición horizontal de <math display=\"inline\"><mi>O</mi></math> como <math display=\"inline\"><mrow><mi>R</mi><mi>ψ</mi></mrow></math>, es <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mi>ψ</mi><mo>−</mo><mi>ρ</mi><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>R</mi><mo>−</mo><mi>ρ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"block\"><mrow><msubsup><mi>v</mi><mi>G</mi><mn>2</mn></msubsup><mo>=</mo><msup><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ρ</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>R</mi><mi>ρ</mi><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>v</mi><mi>G</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>G</mi></msub><msup><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, donde <math display=\"inline\"><msub><mi>I</mi><mi>G</mi></msub></math> es el momento de inercia del conjunto respecto a su centro de masas. En el equilibrio (<math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mn>0</mn></mrow></math>) el coeficiente se convierte en el momento de inercia respecto al punto de contacto: <math display=\"block\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><msub><mi>I</mi><mi>G</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>ρ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msub><mi>I</mi><mi>C</mi></msub><mi>.</mi></mrow></math> Para calcular <math display=\"inline\"><msub><mi>I</mi><mi>C</mi></msub></math> directamente, como <math display=\"inline\"><mi>O</mi></math> es un punto fijo del cuerpo, conviene obtener primero <math display=\"inline\"><msub><mi>I</mi><mi>O</mi></msub></math>: el semidisco tiene <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> respecto a <math display=\"inline\"><mi>O</mi></math> (eje contenido en el plano) —la mitad del disco completo—, y la partícula <math display=\"inline\"><mrow><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>; por tanto <math display=\"inline\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>. Por el teorema de los ejes paralelos, <math display=\"block\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><msub><mi>I</mi><mi>O</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mi>ρ</mi><mi>.</mi></mrow></math> Sea <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msqrt><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>M</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>, con lo que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ρ</mi><mo>=</mo><mi>R</mi><mi>S</mi></mrow></math>; entonces el denominador y la frecuencia quedan en forma limpia: <math display=\"block\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo>−</mo><mn>2</mn><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>U</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>A</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi></mrow><msub><mi>I</mi><mi>C</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mi>g</mi><mspace width=\"0.222em\"></mspace><mi>S</mi></mrow><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo>−</mo><mn>2</mn><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> El denominador es siempre positivo (<math display=\"inline\"><mrow><mn>3</mn><mi>M</mi><mi>/</mi><mn>2</mn><mo>+</mo><mn>2</mn><mi>m</mi><mo>&gt;</mo><mn>2</mn><mi>S</mi></mrow></math> se cumple para todas las masas), lo que garantiza un <math display=\"inline\"><mi>ω</mi></math> real, de acuerdo con la estabilidad."
    },
    {
     "mota": "testua",
     "html": "Los casos límite confirman el resultado. Cuando <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>3</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>M</mi></mrow></math> y <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mfrac><mrow><mn>8</mn><mi>g</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mi>π</mi><mo>−</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi></mrow></mfrac><mo>,</mo></mrow></math> es decir, la frecuencia del semidisco puro que se balancea sobre la mesa —una comprobación limpia—. Cuando <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math>, en cambio, <math display=\"inline\"><mrow><mi>S</mi><mo>→</mo><mi>m</mi></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mo>−</mo><mn>2</mn><mi>S</mi><mo>→</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>→</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>: la partícula pesada se sitúa en el propio punto de contacto y apenas aporta inercia respecto a <math display=\"inline\"><mi>C</mi></math>; la rigidez gravitatoria (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>ρ</mi><mo>→</mo><mi>m</mi><mi>g</mi><mi>R</mi></mrow></math>), en cambio, crece sin límite, y por consiguiente <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>≈</mo><mfrac><mrow><mn>2</mn><mi>g</mi><mi>m</mi></mrow><mrow><mn>3</mn><mi>M</mi><mi>R</mi></mrow></mfrac><mo>→</mo><mi>∞</mi><mi>.</mi></mrow></math> Esa es la verdadera joya: al aumentar la carga, la oscilación es cada vez más <strong>rápida</strong>, no más lenta —la frecuencia diverge—, pues la rigidez sube como <math display=\"inline\"><mi>m</mi></math> mientras la inercia de balanceo se queda en el valor <math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> fijado por el disco (la amplitud de oscilación utilizable, sin embargo, disminuye a medida que la partícula se acerca a la mesa). En el caso concreto de masas iguales, <math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><mn>0.905</mn><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>6.95</mn><msqrt><mrow><mi>R</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "El principio de Hamilton",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Veamos ahora cómo puede hacerse la mecánica analítica desde otro punto de partida completamente distinto. Este punto de vista, convenientemente adaptado, resulta muy fecundo en la física moderna a la hora de construir las teorías de campos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La lagrangiana y la acción"
    },
    {
     "mota": "testua",
     "html": "Para empezar, definamos la <strong>lagrangiana</strong> del sistema:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>≡</mo><mi>T</mi><mo>−</mo><mi>V</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como veremos, será uno de los conceptos principales de la mecánica analítica."
    },
    {
     "mota": "irudia",
     "oina": "Dos caminos para calcular la acción.",
     "src": "../media/irudiak/09c41e15ca3ef570.svg",
     "zabalera": 173
    },
    {
     "mota": "testua",
     "html": "Supongamos que, tras elegir los instantes <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>, elegimos las dos configuraciones correspondientes: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>1</mn></msub><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><msub><mi>q</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>2</mn></msub><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><msub><mi>q</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Dichos instantes y configuraciones no cambiarán, pero para cada otro <math display=\"inline\"><mi>t</mi></math> elegimos una configuración <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, de modo que se cumpla la única condición de que las funciones <math display=\"inline\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sean regulares<span class=\"j-oin\">[Para que una función sea <strong>regular</strong>, ella y sus derivadas deben cumplir las condiciones de continuidad que garanticen el enunciado en el que aparece el adjetivo «regular». Admitimos siempre en este texto que dichas condiciones necesarias se cumplen, salvo en algunos puntos (o lugares geométricos) especiales. Esos puntos <strong>singulares</strong>, sin embargo, suelen ser de gran importancia en la física (ahí está, por ejemplo, la masa puntual que genera el campo gravitatorio más sencillo).]</span>. Hay que subrayar que, como hemos elegido las configuraciones, en cada instante <math display=\"inline\"><mi>t</mi></math> deben cumplirse las ligaduras; pero, en general, las ecuaciones del movimiento no se cumplirán en las elecciones mencionadas. Al variar <math display=\"inline\"><mi>t</mi></math> se obtiene una curva regular que une las configuraciones elegidas en los instantes <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> en el espacio de configuración abstracto de coordenadas <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math>. <br> La"
    },
    {
     "mota": "testua",
     "html": "<strong>acción</strong>"
    },
    {
     "mota": "testua",
     "html": "del sistema mecánico correspondiente a ese camino de configuración es, por definición, el valor de la integral siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>t</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es la lagrangiana del sistema."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la acción y la constante de Planck <math display=\"inline\"><mi>h</mi></math> tienen las mismas dimensiones. ¿De qué otras magnitudes físicas conocidas son las dimensiones de la acción?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El principio de mínima acción<span class=\"j-oin\">[Así llamó Lagrange a otro principio variacional que podía tomar como fundamento de la mecánica, basándose en las ideas cualitativas de Maupertuis aparecidas antes y en los trabajos de Euler. Aquí lo veremos en la forma de Hamilton, pues es la que se utiliza hoy en día en la mecánica y en otras áreas de la física (tras adaptarla como corresponda).]</span>"
    },
    {
     "mota": "testua",
     "html": "El camino de integración para calcular la acción puede ser cualquier curva que una dos puntos del espacio de configuración; se cumplirán, por tanto, las ligaduras, pero no siempre las ecuaciones del movimiento. Al cambiar el camino de integración cambiará también la acción, y será mínima precisamente en la curva que corresponde al movimiento real."
    },
    {
     "mota": "testua",
     "html": "<em>Supongamos que en un sistema mecánico todas las ligaduras son holónomas e ideales y las fuerzas activas\nson conservativas (o se obtienen de un potencial generalizado). Entre todos los\ncaminos que unen dos configuraciones conocidas, el que corresponde al movimiento es extremal</em>"
    },
    {
     "mota": "testua",
     "html": "<span class=\"j-oin\">[Véase el cálculo de variaciones en el apartado B.8.]</span><em>, es decir, el que hay que elegir para que la acción sea estacionaria</em>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>δ</mi><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la mayoría de los casos interesantes (si las dos configuraciones están suficientemente próximas, por ejemplo), aunque la acción sea mínima en la trayectoria del espacio de configuración que corresponde al movimiento, también puede ocurrir que sea un punto de silla<span class=\"j-oin\">[ Véase, por ejemplo, el artículo [82].]</span>. Pero aquí no nos ocuparemos de estos matices. <br> La importancia de este principio es teórica, pues también en la física actual se toma como punto de partida fundamental para describir muchos fenómenos. Pero en la práctica, para escribir las ecuaciones del movimiento se usan las ecuaciones de Euler y Lagrange (B.166) o las ecuaciones de Lagrange (6.83), que son equivalentes desde el punto de vista matemático."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Oscilador armónico]"
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el oscilador armónico de la figura 1.12. Su lagrangiana es <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>≡</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la solución de la ecuación del movimiento (1.90) es (1.112). Elijamos las dos configuraciones siguientes en los instantes <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn><mi>ω</mi></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Algunos caminos que unen dos configuraciones del oscilador armónico.",
     "src": "../media/irudiak/877fe6f61bf1b483.svg",
     "zabalera": 142
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la única solución que cumple las condiciones (6.76) es esta: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El conjunto de curvas que unen las dos configuraciones mencionadas es demasiado grande para estudiarlo explícitamente. En su lugar, consideraremos aquí una familia muy pequeña (pero infinita): <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> Está claro que para cada valor del parámetro <math display=\"inline\"><mi>a</mi></math> la curva obtenida pasa por las configuraciones mencionadas, pues se cumplen las condiciones (6.76). El valor de la lagrangiana en una curva de esa familia se escribe así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo>+</mo><mn>3</mn><mi mathvariant=\"normal\">cos</mi><mn>3</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>+</mo><mn>5</mn><mi mathvariant=\"normal\">cos</mi><mn>4</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> La acción se calcula fácilmente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>I</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn><mi>ω</mi></mrow></msubsup><mi>L</mi><mi>d</mi><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><mi>ω</mi><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><mn>4</mn><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ω</mi><mi>t</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>12</mn><mi>ω</mi><mi>t</mi><mo>+</mo><mn>5</mn><mi mathvariant=\"normal\">sin</mi><mn>4</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mrow><mi>π</mi><mi>/</mi><mn>2</mn><mi>ω</mi></mrow></msubsup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>m</mi><mi>π</mi><mi>ω</mi><mi>.</mi></mtd></mtr></mtable></math> La variación de la acción es, por tanto, <math display=\"block\"><mrow><mi>δ</mi><mi>I</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>a</mi><mi>m</mi><mi>π</mi><mi>ω</mi><mi>δ</mi><mi>a</mi></mrow></math> y es cero en la curva que describe el movimiento: <math display=\"block\"><mrow><mi>δ</mi><mi>I</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En efecto, en ese caso se ve directamente en el resultado (6.80) que tenemos el mínimo de la acción. <br> La familia que hemos elegido aquí ha sido muy restringida, pero el cálculo de variaciones garantiza que lo mismo ocurrirá en la familia más general, y puede comprobarse en la siguiente simulación numérica:"
    },
    {
     "mota": "ezezaguna",
     "izena": "link"
    },
    {
     "mota": "testua",
     "html": "."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Ecuaciones de Lagrange",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para calcular los mínimos de una función no nos ponemos a probar valores; en su lugar recurrimos al análisis y se estudian las ecuaciones que resultan al igualar a cero las derivadas parciales. Del mismo modo, para saber dónde se da el mínimo de la acción tenemos las condiciones diferenciales que da el cálculo de variaciones: las ecuaciones de Euler y Lagrange (B.166), precisamente. En el contexto de la mecánica, esas condiciones se llaman <strong>ecuaciones de Lagrange</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el formalismo lagrangiano estas son las ecuaciones del movimiento y, como se demuestra en el anexo D, son equivalentes a la segunda ley de Newton cuando se cumplen las hipótesis del principio de mínima acción."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolución de problemas en la mecánica analítica"
    },
    {
     "mota": "testua",
     "html": "Resumiendo lo visto hasta ahora, queremos subrayar que para resolver un problema mecánico en la mecánica analítica hay que usar el método siguiente."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Calcular cuántas son las ligaduras o las variables independientes necesarias para determinar la configuración, para conocer el número de grados de libertad."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Elegir coordenadas generalizadas adecuadas (de modo que se conserven las simetrías del problema, por ejemplo)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Escribir las ecuaciones de transformación (6.63) y calcular las velocidades derivando las anteriores: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mi>.</mi></mrow></math> (Este paso no es del todo necesario en problemas sencillos.)"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Escribir la energía cinética total del sistema en coordenadas generalizadas."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Escribir la energía potencial total del sistema en coordenadas generalizadas."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Calcular la lagrangiana (6.72) y las ecuaciones de Lagrange (6.83). Como en la lagrangiana aparecen las <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> velocidades generalizadas, al derivar respecto del tiempo aparecerán las <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub></math> aceleraciones generalizadas. Las ecuaciones de Lagrange serán, por tanto, <math display=\"inline\"><mi>n</mi></math> ecuaciones diferenciales ordinarias de segundo orden."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Estudiar (y, si es posible, resolver) las ecuaciones del movimiento (quizá valiéndonos de los principios de conservación que veremos más adelante)."
     ]
    },
    {
     "mota": "testua",
     "html": "Veamos algunos ejemplos sencillos."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cartesianas]"
    },
    {
     "mota": "testua",
     "html": "Si la masa de la partícula es <math display=\"inline\"><mi>m</mi></math> y las coordenadas generalizadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son las cartesianas, la energía cinética se escribe así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Si la energía potencial es <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la lagrangiana será <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y las ecuaciones de Lagrange las siguientes: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Está claro que las anteriores son las componentes cartesianas de la ecuación del movimiento <math display=\"inline\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia de nuevo este sistema mecánico en coordenadas polares esféricas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Máquina de Atwood]"
    },
    {
     "mota": "testua",
     "html": "Tenemos un único grado de libertad y, usando la coordenada generalizada <math display=\"inline\"><mi>q</mi></math> de la figura 6.4, las energías cinéticas de las partículas y la total se calculan fácilmente: <math display=\"block\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Del mismo modo, la energía potencial <math display=\"block\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>q</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>q</mi><mo>+</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><msub><mi>V</mi><mn>1</mn></msub><mo>+</mo><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>q</mi><mo>+</mo><mi>K</mi></mrow></math> y la lagrangiana <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>q</mi><mo>−</mo><mi>K</mi></mrow></math> se obtienen fácilmente. En las expresiones anteriores hemos escrito <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>R</mi><mo>−</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sabemos que constantes aditivas como estas (que son consecuencia de que la elección del origen de la energía potencial no es única) no cambian la fuerza, pues desaparecen al calcular el gradiente. Algo parecido ocurre en las ecuaciones de Lagrange al calcular las derivadas: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> De aquí se despeja fácilmente la aceleración generalizada, <math display=\"block\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mo>,</mo></mrow></math>, y las aceleraciones de las partículas son las siguientes constantes: <math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mi>.</mi></mrow></math> (Como estas aceleraciones son constantes, ahora se calcula fácilmente la solución <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>.)"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Péndulo esférico]"
    },
    {
     "mota": "testua",
     "html": "En este caso hay <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> grados de libertad y, eligiendo como coordenadas generalizadas los ángulos <math display=\"inline\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>φ</mi></mrow></math> definidos en la figura 6.2, como hicimos en la página 293, puede verse que la energía mecánica es la siguiente, a partir de las ecuaciones de transformación (6.24)–(6.26) o, más fácilmente, sustituyendo la ecuación de ligadura <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>l</mi></mrow></math> en los resultados del apartado B.1.3: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como hemos elegido el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> hacia abajo, la energía potencial es <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>z</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y la lagrangiana: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Las ecuaciones de Lagrange son, por tanto, las siguientes: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>l</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En la última ecuación no hemos calculado la derivada total, porque tal como está se ve más fácilmente la constante del movimiento: la componente <math display=\"inline\"><mi>z</mi></math> del momento angular."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Péndulo simple</span>"
      },
      {
       "mota": "testua",
       "html": ". Escribe la ecuación de Lagrange para el caso del péndulo simple."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Sistema de referencia giratorio]"
    },
    {
     "mota": "testua",
     "html": "Supongamos que el sistema <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>O</mi><mi>X</mi><mi>Y</mi><mi>Z</mi></mrow></math> de la figura 6.12 gira con velocidad angular constante <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝝎</mi><mo>=</mo><mi>ω</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> respecto al sistema inercial <math display=\"inline\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mo>=</mo><mi>O</mi><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><mi>Z</mi></mrow></math> y que queremos estudiar en el sistema giratorio el movimiento plano de una partícula puntual. Para ello elegiremos como coordenadas generalizadas las cartesianas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de ese sistema; pero, para no introducir explícitamente el efecto de las fuerzas de inercia, calcularemos la energía cinética en el sistema inercial <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, aunque nos valgamos de las coordenadas del sistema <math display=\"inline\"><mi>S</mi></math>. Según el teorema de Coriolis, si en el sistema <math display=\"inline\"><mi>S</mi></math> la velocidad de la partícula es <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></math>, con <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> será <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>: <math display=\"block\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>ω</mi><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>ω</mi><mi>x</mi><mi>.</mi></mrow></math> Por tanto, la energía cinética y la lagrangiana se escriben así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>y</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sistema de referencia giratorio.",
     "src": "../media/irudiak/9e66620db2393d5e.svg",
     "zabalera": 129
    },
    {
     "mota": "testua",
     "html": "De aquí se calculan directamente las ecuaciones del movimiento: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>ω</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>ω</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Escribiéndolas en las siguientes formas equivalentes, se ve fácilmente que han aparecido la fuerza de Coriolis y la centrífuga: <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mo>−</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝝎</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "En el caso del sistema de la figura 6.7, la energía cinética se obtiene con las velocidades <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"bold-italic\">𝒊</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒊</mi><mo>−</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> que se calculan derivando las ecuaciones de transformación (6.56)–(6.57): <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por otra parte, la energía potencial es la siguiente: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>M</mi><mi>g</mi><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>m</mi><mi>g</mi><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mi>g</mi><msub><mi>C</mi><mn>2</mn></msub><mo>+</mo><mi>m</mi><mi>g</mi><msub><mi>C</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Por tanto, la lagrangiana es <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> (despreciando constantes sin importancia) y las ecuaciones de Lagrange las siguientes: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la lagrangiana del sistema de la figura 6.3 es <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y halla la ecuación del movimiento."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Fuerzas centrales</span>"
      },
      {
       "mota": "testua",
       "html": ". Halla las ecuaciones del movimiento bajo fuerzas centrales mediante el formalismo de este apartado. (Véase el ejercicio 4.1.)"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cuña móvil: el plano que retrocede"
    },
    {
     "mota": "testua",
     "html": "<em>Sobre un suelo horizontal liso hay una cuña de masa <math display=\"inline\"><mi>M</mi></math> y ángulo <math display=\"inline\"><mi>α</mi></math>; por su cara inclinada\npuede deslizar un bloque de masa <math display=\"inline\"><mi>m</mi></math>. El bloque se suelta desde el reposo.<span class=\"j-oin\">[Semilla: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 97Mar03 (p. 23), donde la cuña era isósceles\n(<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) y sin rozamiento. Aquí se han tomado <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>M</mi><mo>,</mo><mi>m</mi></mrow></math> generales, se ha añadido rozamiento\ny una lectura mediante el momento.]</span> <br>\n<strong>(a)</strong> Usando el formalismo lagrangiano, obtén las ecuaciones del movimiento y las aceleraciones de <math display=\"inline\"><mi>s</mi></math> y de <math display=\"inline\"><mi>X</mi></math>,\nsiendo lisas todas las superficies; estudia los límites <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> y <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math>. <strong>(b)</strong> Mediante un multiplicador\nde Lagrange, obtén la fuerza normal <math display=\"inline\"><mi>N</mi></math> que ejerce la cara sobre el bloque. <strong>(c)</strong> Sin resolver ecuaciones diferenciales,\nobtén el desplazamiento <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>X</mi></mrow></math> de la cuña cuando el bloque ha recorrido una longitud <math display=\"inline\"><mi>ℓ</mi></math> en la cara. <strong>(d)</strong> Ahora\nhay rozamiento (<math display=\"inline\"><mi>μ</mi></math>) entre el bloque y la cara (el suelo sigue liso): demuestra que el bloque desliza\nsi y solo si <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/d484a7447224de9b.svg",
     "zabalera": 398
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El bloque <math display=\"inline\"><mi>m</mi></math> desliza por la cara lisa y la cuña <math display=\"inline\"><mi>M</mi></math> retrocede.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La cuña retrocede. Sea <math display=\"inline\"><mi>X</mi></math> la posición horizontal de la cuña (positiva hacia la derecha) y <math display=\"inline\"><mi>s</mi></math> el camino que recorre el bloque cara abajo, respecto a la cuña. La posición absoluta del bloque es <math display=\"inline\"><mrow><msub><mi>x</mi><mi>b</mi></msub><mo>=</mo><mi>X</mi><mo>−</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>b</mi></msub><mo>=</mo><msub><mi>h</mi><mn>0</mn></msub><mo>−</mo><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, y el cuadrado de su velocidad <math display=\"inline\"><mrow><msubsup><mi>v</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mn>2</mn><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Añadiendo el término <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> de la cuña, la lagrangiana queda así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>X</mi></math> La coordenada es cíclica; por tanto, el momento canónico correspondiente es una constante del movimiento y, partiendo del reposo, vale cero (es decir, se conserva el momento lineal horizontal): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>m</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> La ecuación de Euler-Lagrange de <math display=\"inline\"><mi>s</mi></math> es, en cambio, <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. Combinándolas se obtienen las aceleraciones: <math display=\"block\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> En el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> se recuperan <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>→</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>→</mo><mn>0</mn></mrow></math> (plano fijo); en el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math>, en cambio, la aceleración vertical del bloque es <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>→</mo><mi>g</mi></mrow></math> (caída libre), mientras la cuña ligera escapa."
    },
    {
     "mota": "testua",
     "html": "Para obtener la fuerza normal recuperamos la ligadura de contacto: introducimos la coordenada <math display=\"inline\"><mi>n</mi></math> (distancia a la cara, medida según la normal <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) e imponemos la ligadura <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> mediante un multiplicador de Lagrange. La ecuación de <math display=\"inline\"><mi>n</mi></math>, una vez hecho <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>, muestra que el multiplicador es igual a la fuerza normal: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>M</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>N</mi><mo>&gt;</mo><mn>0</mn></mrow></math> siempre: el bloque no se despega nunca de la cara. Cuando <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> resulta <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, la normal conocida del plano fijo."
    },
    {
     "mota": "testua",
     "html": "Estos resultados los hemos sacado de la dinámica, pero el desplazamiento de la cuña también puede calcularse sin resolver ecuaciones diferenciales. Como <math display=\"inline\"><mi>X</mi></math> es cíclica y el sistema parte del reposo, el centro de masas no se mueve en horizontal. Cuando el bloque <math display=\"inline\"><mi>ℓ</mi></math> en la cara, su desplazamiento horizontal respecto a la cuña es <math display=\"inline\"><mrow><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>; la inercia del centro de masas da inmediatamente el resultado: <math display=\"block\"><mrow><mi>M</mi><mi mathvariant=\"normal\">Δ</mi><mi>X</mi><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>X</mi><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>X</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Es un puro balance de momento —no aparece <math display=\"inline\"><mi>g</mi></math>, ni ningún detalle de la dinámica—, y una comprobación independiente de los resultados anteriores."
    },
    {
     "mota": "testua",
     "html": "Por último, añadamos rozamiento (<math display=\"inline\"><mi>μ</mi></math>) entre el bloque y la cara (manteniendo liso el suelo). Como el rozamiento es una fuerza interna del sistema, el momento horizontal sigue conservándose y vale la relación de <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></math>; la normal tiene también la misma forma, pues es tangente. Introduciendo en la ecuación de <math display=\"inline\"><mi>s</mi></math> la fuerza generalizada <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mi>N</mi></mrow></math> —opuesta al descenso— y sustituyendo <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></math> y <math display=\"inline\"><mi>N</mi></math>: <math display=\"block\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>−</mo><mi>μ</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>−</mo><mi>μ</mi><mi>m</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> El denominador es siempre positivo; por tanto, el bloque se pondrá en marcha (<math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>) si y solo si <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>&gt;</mo><mi>μ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, es decir, <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. El resultado es notable: el umbral de deslizamiento es el mismo que el del plano fijo, totalmente independiente de <math display=\"inline\"><mi>M</mi></math> y de <math display=\"inline\"><mi>m</mi></math> —el retroceso de la cuña cambia el valor de la aceleración, pero no la condición de deslizamiento—. Haciendo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>, se recuperan los resultados anteriores."
    },
    {
     "mota": "testua",
     "html": "Físicamente, en el sistema de referencia no inercial de la cuña surge sobre el bloque la fuerza de inercia <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></mrow></math>; su proyección sobre la cara reduce la gravedad efectiva, y eso explica por qué <math display=\"inline\"><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover></math> es menor que la del plano fijo (salvo en el caso límite). En cuanto a la energía, cuando el suelo y la cara son lisos el sistema es conservativo: toda la energía potencial que pierde el bloque se reparte entre las energías cinéticas de este y de la cuña, en la proporción fijada por <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>X</mi></mrow></math>; con rozamiento, en cambio, la diferencia se disipa como <math display=\"inline\"><mrow><mi>μ</mi><mi>N</mi><mi>s</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Muelle, pared y dos masas: fuerza de ligadura y desprendimiento"
    },
    {
     "mota": "testua",
     "html": "<em>Sobre un suelo horizontal liso hay, a la izquierda, una pared vertical. Dos partículas puntuales de masas <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>\nestán unidas por un muelle ideal de constante <math display=\"inline\"><mi>k</mi></math> y longitud propia <math display=\"inline\"><mi>l</mi></math>. Inicialmente, un hilo\nmantiene el muelle comprimido una longitud <math display=\"inline\"><mi>δ</mi></math> (su longitud es <math display=\"inline\"><mrow><mi>l</mi><mo>−</mo><mi>δ</mi></mrow></math>, con <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>δ</mi><mo>≤</mo><mi>l</mi></mrow></math>), y la partícula\n<math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> está contra la pared, en reposo. En un instante se corta el hilo y el sistema se libera.<span class=\"j-oin\">[Semilla:\nEcenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 98Set01 (septiembre de 1998).\nEl original tenía dos masas iguales y el muelle totalmente comprimido, y solo pedía la velocidad de la partícula\nde la derecha al perder el contacto, mediante multiplicadores de Lagrange. Aquí se han hecho las masas distintas,\nse ha tomado la compresión general (<math display=\"inline\"><mi>δ</mi></math>), y se han añadido la evolución temporal completa de la fuerza de ligadura, el movimiento libre\nde los dos cuerpos tras el desprendimiento y los casos límite.]</span> Todo el movimiento ocurre en la misma línea recta.\n<br>\n<strong>(a)</strong> Escribe la lagrangiana del sistema incluyendo la ligadura de contacto con la pared y, mediante un multiplicador de Lagrange,\nobtén la fuerza de ligadura <math display=\"inline\"><mi>N</mi></math> que ejerce la pared sobre <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, como función explícita del tiempo, mientras\ndure el contacto. <strong>(b)</strong> Halla el instante en que <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> se despega de la pared y la velocidad de <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> entonces; demuestra que <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>\nes independiente de la masa. <strong>(c)</strong> Tras el desprendimiento los dos cuerpos son libres: redúcelo al problema del centro de masas y de la coordenada relativa, y da las velocidades de las dos masas y la frecuencia de la oscilación interna. <strong>(d)</strong>\nDemuestra que <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> no vuelve nunca a la pared, aunque el muelle se vuelva a comprimir; describe su movimiento.\n<strong>(e)</strong> Estudia el reparto de la energía entre el centro de masas y la oscilación interna, y los casos límite <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mi>∞</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mn>0</mn></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/6e927890dcaeeacd.svg",
     "zabalera": 432
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El muelle está comprimido una longitud <math display=\"inline\"><mrow><mi>l</mi><mo>−</mo><mi>δ</mi></mrow></math> (longitud propia <math display=\"inline\"><mi>l</mi></math>), sujeto por el hilo; la pared ejerce la fuerza <math display=\"inline\"><mi>N</mi></math> sobre <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>. Al cortar el hilo el sistema se libera.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomemos el eje <math display=\"inline\"><mi>x</mi></math> desde la pared hacia la derecha, y sean <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> las posiciones de las dos masas. El alargamiento del muelle es <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>l</mi></mrow></math> y la energía potencial elástica <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math>. Mientras dura el contacto, la pared impone la ligadura <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; si la liberamos mediante un multiplicador <math display=\"inline\"><mi>λ</mi></math> de Lagrange, la lagrangiana es <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, y la ligadura la impone el multiplicador <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. La ecuación de Euler-Lagrange de <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> da <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>−</mo><mi>k</mi><mi>s</mi><mo>=</mo><mi>λ</mi></mrow></math>. En el contacto, como <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (y por tanto <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), el multiplicador es directamente la fuerza de la pared: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi><mi>.</mi></mrow></math> la de <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, sin ligadura, es <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math>. Como <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> es fija, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mi>l</mi></mrow></math> y la ecuación se convierte en <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math>, con <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></math>: <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> simple movimiento armónico de la masa, como si el muelle estuviera anclado a una pared fija. Con las condiciones iniciales (<math display=\"inline\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>δ</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>δ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>δ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> La fuerza de ligadura parte de <math display=\"inline\"><mrow><mi>k</mi><mi>δ</mi></mrow></math> y disminuye como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>. El contacto con la pared es unilateral —la pared puede empujar, no tirar—, es decir, debe ser <math display=\"inline\"><mrow><mi>N</mi><mo>≥</mo><mn>0</mn></mrow></math>; por tanto, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> se desprende en el mismo instante en que se cumple <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La condición <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mi>ω</mi><mi>t</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, es decir, el contacto dura <math display=\"inline\"><mrow><msub><mi>t</mi><mo>*</mo></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math>: el mismo instante en que el muelle recupera su longitud propia (<math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math>). Entonces la velocidad de <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> es máxima, <math display=\"block\"><mrow><msub><mi>v</mi><mo>*</mo></msub><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>δ</mi><mi>ω</mi><mo>=</mo><mi>δ</mi><msqrt><mrow><mi>k</mi><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt><mo>,</mo></mrow></math> y <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> sigue en reposo. El resultado es <strong>totalmente independiente</strong> de la masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>: mientras dura el contacto, la pared mantiene <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> perfectamente en reposo, y por tanto la inercia de <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> no aparece nunca en la dinámica de esa fase —es el movimiento armónico de la masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> sola—. En cuanto a la energía, toda la energía potencial elástica inicial <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math> se ha convertido en energía cinética de <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math>, sin que la pared realice trabajo (pues su fuerza actúa sobre el punto fijo <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "A partir de <math display=\"inline\"><msub><mi>t</mi><mo>*</mo></msub></math> las dos masas son libres y el sistema es cerrado: se conserva el momento lineal. En el desprendimiento, como <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> está en reposo y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> va con velocidad <math display=\"inline\"><msub><mi>v</mi><mo>*</mo></msub></math>, el momento total es <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow></math> y la velocidad del centro de masas, constante: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mi>P</mi><mi>M</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Reutilizando la coordenada relativa (<math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>l</mi></mrow></math>), el problema de los dos cuerpos se reduce al movimiento armónico de la masa reducida: <math display=\"inline\"><mrow><mi>μ</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>k</mi><mi>s</mi></mrow></math>, donde <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mi>M</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math>. En el desprendimiento <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>v</mi><mo>*</mo></msub><mo>−</mo><mn>0</mn><mo>=</mo><msub><mi>v</mi><mo>*</mo></msub></mrow></math>, luego <math display=\"block\"><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>v</mi><mo>*</mo></msub><mi mathvariant=\"normal\">Ω</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>=</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mo>*</mo></msub><mi>.</mi></mrow></math> Las velocidades de las masas se obtienen de la descomposición <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mi>V</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>V</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math>: <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mo>+</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mi>M</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mi>.</mi></mrow></math> El centro de masas se aleja de la pared con velocidad constante <math display=\"inline\"><mi>V</mi></math>, y las dos masas oscilan en torno a él con frecuencia <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>."
    },
    {
     "mota": "testua",
     "html": "En el movimiento de <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> aparece un resultado elegante. Su velocidad es <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub><mi>/</mi><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y, como <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>≥</mo><mn>0</mn></mrow></math>, <strong>nunca es negativa</strong>: <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> solo se mueve hacia la derecha, se detiene instantáneamente (en los puntos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>n</mi></mrow></math>) pero nunca retrocede. Integrando, partiendo de <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub></mrow><mrow><mi>M</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> es decir, la ecuación de una cicloide. Como <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>≥</mo><mn>0</mn></mrow></math> siempre, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> no vuelve nunca a la pared: el desprendimiento es definitivo. Es más, el muelle se vuelve a comprimir en el intervalo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>τ</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>s</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), y entonces ejerce sobre <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> una fuerza hacia la pared; sin embargo, el momento ganado en la fase de alargamiento anterior lo lleva <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> hacia delante durante toda la fase, frenado pero sin invertirse. El empuje del centro de masas compensa exactamente el retroceso del muelle."
    },
    {
     "mota": "testua",
     "html": "Por último, la energía total (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math>) se reparte en dos partes: la traslación del centro de masas, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>V</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>m</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>M</mi></mrow></math>, y la oscilación interna, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>μ</mi><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup></mrow></math>. Usando que <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>v</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>δ</mi><mn>2</mn></msup></mrow></math>, <math display=\"block\"><mrow><mfrac><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>E</mi></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>E</mi></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">mz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>:</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>:</mo><msub><mi>m</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> Los casos límite completan el cuadro. <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math> (la semilla): <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>v</mi><mo>*</mo></msub><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> y la energía se reparte mitad y mitad —se recupera el caso simétrico, y tomando en la semilla la compresión total (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mi>l</mi></mrow></math>) resulta <math display=\"inline\"><mrow><msub><mi>v</mi><mo>*</mo></msub><mo>=</mo><mi>l</mi><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>—. <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>: <math display=\"inline\"><mrow><mi>V</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>→</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mi>ω</mi></mrow></math>; <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> se queda en reposo y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> sigue oscilando en torno a la longitud propia, como si el muelle estuviera anclado a una pared fija —toda la energía es interna (<math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>E</mi><mo>→</mo><mn>1</mn></mrow></math>) y el papel de la pared lo asume la <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> pesada—. <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>→</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>V</mi><mo>→</mo><msub><mi>v</mi><mo>*</mo></msub></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mi>∞</mi></mrow></math> y la amplitud <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mo>*</mo></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>; la <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> ligera vibra con alta frecuencia y pequeña amplitud sobre la deriva de <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, llevando <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> casi todo el momento y la energía (<math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">barn </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>E</mi><mo>→</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "En síntesis, el multiplicador de Lagrange no es aquí una mera herramienta de cálculo, sino una medida directa de la fuerza de ligadura física, y su cambio de signo marca el límite de la ligadura unilateral. La función <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>δ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> cose las dos fases: mientras <math display=\"inline\"><mrow><mi>N</mi><mo>&gt;</mo><mn>0</mn></mrow></math> el sistema está forzado (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), y <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math> pone en marcha el desprendimiento y el posterior movimiento libre de los dos cuerpos. Así, un problema de contacto completo —de forzado a libre— se trata mediante la evolución de un único multiplicador."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cadena pesada en una polea: equilibrio inestable y escape exponencial"
    },
    {
     "mota": "testua",
     "html": "<em>Una cadena homogénea de longitud <math display=\"inline\"><mi>L</mi></math> y masa <math display=\"inline\"><mi>m</mi></math> (densidad lineal <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mi>L</mi></mrow></math>)\npasa por una polea pequeña, lisa y sin masa; los dos tramos cuelgan verticalmente.\nEn el extremo del tramo derecho se ha atado un cuerpo puntual de masa <math display=\"inline\"><mi>M</mi></math>; el tramo izquierdo está libre.\nEl sistema se suelta desde el reposo.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de\nExamen Resueltos y Comentados</em>, 97Set02 (p. 46), donde una cuerda con masa unía dos bloques\npasando por una polea en el borde de una mesa, y se pedían la lagrangiana, la hamiltoniana y una velocidad.\nAquí se ha cambiado el dispositivo —la cadena entera colgando en dos tramos, con el cuerpo <math display=\"inline\"><mi>M</mi></math> en un extremo—\ny se han añadido la posición de equilibrio, el estudio de estabilidad, la resolución explícita de la ecuación diferencial y el\numbral <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math>.]</span> <br>\n<strong>(a)</strong> Escribe la lagrangiana y la hamiltoniana del sistema, y comprueba que la hamiltoniana es la energía\nmecánica y que es una constante del movimiento. <strong>(b)</strong> Obtén la ecuación del movimiento y halla la\nposición de equilibrio; demuestra que solo existe si <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math>, e interpreta el resultado.\n<strong>(c)</strong> Estudia la estabilidad del equilibrio y, resolviendo la ecuación diferencial, obtén el movimiento desde el reposo en\nla posición <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>; da la tasa de escape <math display=\"inline\"><mi>ω</mi></math> y el tiempo característico. <strong>(d)</strong> Usando el método de la energía,\nhalla la velocidad en el instante en que la cadena se suelta de la polea. <strong>(e)</strong> Estudia el caso límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> y\ncomenta los resultados notables.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/57196eebd8142f42.svg",
     "zabalera": 293
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[Cadena homogénea (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>L</mi></mrow></math>) colgada de una polea lisa y sin masa; en el extremo derecho, el cuerpo <math display=\"inline\"><mi>M</mi></math>. <math display=\"inline\"><mi>x</mi></math> es la longitud del tramo izquierdo.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como toda la cadena es inextensible, los dos tramos, el arco de la polea y el cuerpo <math display=\"inline\"><mi>M</mi></math> tienen el mismo módulo de velocidad, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math>, donde <math display=\"inline\"><mi>x</mi></math> es la longitud del tramo izquierdo (y <math display=\"inline\"><mrow><mi>L</mi><mo>−</mo><mi>x</mi></mrow></math> la del derecho). Así pues, la energía cinética corresponde a toda la masa móvil, <math display=\"inline\"><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></math>, con una única velocidad. Para la energía potencial tomaremos el eje de la polea como nivel nulo (negativa hacia abajo). La masa del tramo izquierdo es <math display=\"inline\"><mrow><mi>λ</mi><mi>x</mi></mrow></math> y su centro de masas está <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math> por debajo; el del derecho, <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> por debajo; y el cuerpo <math display=\"inline\"><mi>M</mi></math> está a profundidad <math display=\"inline\"><mrow><mi>L</mi><mo>−</mo><mi>x</mi></mrow></math>. Por tanto, <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> y la lagrangiana: <math display=\"block\"><mrow><msub><mi>L</mi><mrow><mtext mathvariant=\"normal\">agr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mi>λ</mi><mi>g</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Como el momento canónico es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>∂</mi><msub><mi>L</mi><mrow><mtext mathvariant=\"normal\">agr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, la hamiltoniana se construye con la transformada de Legendre: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>p</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msub><mi>L</mi><mrow><mtext mathvariant=\"normal\">agr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mi>.</mi></mrow></math> La energía cinética es una forma cuadrática homogénea de <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> y <math display=\"inline\"><msub><mi>L</mi><mtext mathvariant=\"normal\">agr</mtext></msub></math> no depende explícitamente de <math display=\"inline\"><mi>t</mi></math>; en consecuencia, <math display=\"inline\"><mi>H</mi></math> es la energía mecánica total y una constante del movimiento —base del balance de energía del apartado (d)—."
    },
    {
     "mota": "testua",
     "html": "La ecuación del movimiento de Euler-Lagrange, con la única coordenada <math display=\"inline\"><mi>x</mi></math>, es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Derivando, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>λ</mi><mi>g</mi><mi>x</mi><mo>−</mo><mi>λ</mi><mi>g</mi><mi>L</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>M</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"inline\"><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> es la posición de equilibrio (<math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>). Físicamente los dos tramos necesitan una longitud no negativa, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>; como <math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≥</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>&gt;</mo><mn>0</mn></mrow></math> siempre, la existencia queda condicionada por el límite superior: <math display=\"block\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≤</mo><mi>L</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>L</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>M</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≤</mo><mi>L</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>≤</mo><mi>m</mi><mi>.</mi></mrow></math> Tiene una interpretación clara: en el equilibrio el tramo izquierdo es más largo que el derecho, y la diferencia de longitud es <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mi>L</mi><mo>=</mo><mi>M</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mi>M</mi><mi>L</mi><mi>/</mi><mi>m</mi></mrow></math>. El peso de ese exceso de cadena es <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo>=</mo><mi>M</mi><mi>g</mi></mrow></math>, precisamente el que equilibra el cuerpo <math display=\"inline\"><mi>M</mi></math> de la derecha. Ese exceso no puede ser mayor que la cadena entera (<math display=\"inline\"><mrow><mi>M</mi><mi>/</mi><mi>λ</mi><mo>≤</mo><mi>L</mi></mrow></math>), y de ahí viene el umbral <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math>: la cadena por sí sola puede equilibrar con su peso un cuerpo <math display=\"inline\"><mi>M</mi></math>, pero solo si la masa del cuerpo no es mayor que la masa total de la cadena."
    },
    {
     "mota": "testua",
     "html": "La naturaleza del equilibrio la decide la derivada segunda de <math display=\"inline\"><mi>V</mi></math>: <math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>λ</mi><mi>g</mi><mo>&lt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> guztietarako</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como es siempre negativa, <math display=\"inline\"><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></math> es un <em>máximo</em> del potencial: el equilibrio —cuando existe— es siempre inestable. No es de extrañar, pues hay realimentación positiva: si un tramo se alarga algo, se vuelve más pesado y se alarga más. Definiendo en torno al equilibrio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>, la ecuación del movimiento es la de un oscilador invertido, <math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>λ</mi><mi>g</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>g</mi></mrow><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> cuya solución es hiperbólica (exponencial creciente), no oscilatoria. Soltado desde el reposo en la posición <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>), <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Las desviaciones se multiplican por <math display=\"inline\"><mi>e</mi></math> en cada intervalo de tiempo <math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mn>1</mn><mi>ω</mi></mfrac><mo>=</mo><msqrt><mfrac><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>m</mi><mi>g</mi></mrow></mfrac></msqrt><mo>,</mo></mrow></math>, el tiempo característico del sistema. A diferencia de la semilla —que dejaba sin resolver la ecuación diferencial—, aquí tenemos explícitamente la ley de escape: si <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>, gana el tramo izquierdo y <math display=\"inline\"><mi>x</mi></math> crece hasta <math display=\"inline\"><mi>L</mi></math>; si <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&lt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>, gana el derecho y <math display=\"inline\"><mi>x</mi></math> tiende a cero."
    },
    {
     "mota": "testua",
     "html": "La velocidad en el instante del desprendimiento la da enseguida el método de la energía, pues el sistema es conservativo (todas las superficies lisas, polea sin masa). Supongamos <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>: la cadena empieza a soltarse cuando toda ella queda a la izquierda (<math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>L</mi></mrow></math>, con el tramo derecho desaparecido). Partiendo del reposo, <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mi>g</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> sustituyendo <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y simplificando (usando aquí la identidad <math display=\"inline\"><mrow><msup><mi>L</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><msub><mi>x</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mi>L</mi><mi>.</mi></mrow></math> Lo que hay dentro de la raíz es positivo cuando <math display=\"inline\"><mrow><mi>λ</mi><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><mi>M</mi></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><mi>M</mi><mi>/</mi><mi>λ</mi></mrow></math>; eso lo garantiza la hipótesis <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math> (pues cuando <math display=\"inline\"><mrow><mi>M</mi><mo>&lt;</mo><mi>m</mi></mrow></math> resulta <math display=\"inline\"><mrow><mi>M</mi><mi>/</mi><mi>λ</mi><mo>&lt;</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">or</mtext></msub></mrow></math>). El resultado concuerda con la dinámica del apartado (c): integrar la aceleración debe dar la misma velocidad, y así es."
    },
    {
     "mota": "testua",
     "html": "Por último, los casos límite redondean el cuadro. Haciendo <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> queda una cadena simétrica pura: la posición de equilibrio se desplaza al centro (<math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>), la tasa de escape se convierte en <math display=\"block\"><mrow><mi>ω</mi><mo>→</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>/</mi><mi>L</mi></mrow></msqrt></mrow></math> y la velocidad de desprendimiento en <math display=\"inline\"><mrow><mi>v</mi><mo>→</mo><msqrt><mrow><mn>2</mn><mi>g</mi><msub><mi>x</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>L</mi></mrow></msqrt></mrow></math>. Este resultado es una joya: el ritmo de escape es totalmente independiente de la masa de la cadena —una cadena pesada y una ligera, si tienen la misma longitud, escapan con el mismo reloj, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><msqrt><mrow><mi>L</mi><mi>/</mi><mn>2</mn><mi>g</mi></mrow></msqrt></mrow></math>—. La razón es analítica: la &quot;rigidez efectiva&quot; es <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><mi>λ</mi><mi>g</mi></mrow></math> y la inercia <math display=\"inline\"><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></math>; cuando <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>0</mn></mrow></math> ambas son proporcionales a <math display=\"inline\"><mi>λ</mi></math> y de <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> desaparece la masa, igual que desaparece la masa en el periodo del péndulo. Por otra parte, en el umbral <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi></mrow></math> resulta <math display=\"inline\"><mrow><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">or </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mi>L</mi></mrow></math>: el equilibrio se desplaza a la configuración degenerada en que toda la cadena está a un lado, y para <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi></mrow></math> el equilibrio desaparece por completo (el cuerpo gana siempre). Estas dos consecuencias —un reloj de escape independiente de la masa, y que una cadena puede equilibrar un cuerpo pero nunca de forma estable, con el umbral <math display=\"inline\"><mrow><mi>M</mi><mo>≤</mo><mi>m</mi></mrow></math>— muestran cuánta información reúne la mecánica analítica en un único potencial efectivo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tijera elástica: bifurcación y modo normal"
    },
    {
     "mota": "testua",
     "html": "<em>Dos barras rígidas y sin masa, cada una de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>, articuladas por su punto medio,\nforman una tijera en un plano vertical. En los cuatro extremos hay masas\npuntuales: las dos de arriba de masa <math display=\"inline\"><mi>M</mi></math>, las dos de abajo de masa <math display=\"inline\"><mi>m</mi></math>. Las dos\nmasas de abajo se apoyan en un suelo horizontal liso y pueden deslizar sin rozamiento;\nun muelle de constante <math display=\"inline\"><mi>k</mi></math> —de longitud natural nula— las une,\nes decir, ejerce sobre cada masa de abajo una fuerza recuperadora proporcional a la distancia al eje.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y\nOndas: Problemas de Examen Resueltos y Comentados</em>, 00Feb02 (febrero de 2000), donde\nuna tijera de cuatro masas iguales, sin muelle, se abría desde el reposo hasta\ncaer al suelo. Aquí se han diferenciado las masas (<math display=\"inline\"><mi>M</mi></math> arriba, <math display=\"inline\"><mi>m</mi></math> abajo),\nse ha añadido el muelle elástico en la base y, en lugar de la caída, se piden el equilibrio, la estabilidad,\nla bifurcación y el modo de oscilación.]</span> Sea <math display=\"inline\"><mi>θ</mi></math> el ángulo que forman las barras\ncon la vertical; admitiremos que el sistema se mueve en el plano vertical y de forma simétrica. <br>\n<strong>(a)</strong> Usando el formalismo lagrangiano, obtén la ecuación del movimiento exacta (no lineal) de <math display=\"inline\"><mi>θ</mi></math>. <strong>(b)</strong> Halla los equilibrios y demuestra que la tijera cerrada (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) es estable si y solo si <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi></mrow></math> es la rigidez crítica; identifica la bifurcación (buckling) y obtén el equilibrio\ninclinado. <strong>(c)</strong> Calcula la frecuencia de las oscilaciones pequeñas en torno a <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>;\nestudia los límites <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math>. <strong>(d)</strong> Demuestra que la bifurcación es subcrítica\n(apertura brusca): halla la barrera de energía que protege <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, muestra que se anula junto con\nla frecuencia en <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>, y comenta el papel de <math display=\"inline\"><mi>m</mi></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/b82a19c9855fe923.svg",
     "zabalera": 296
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[Tijera elástica: dos barras articuladas, masas <math display=\"inline\"><mi>M</mi></math> arriba, masas <math display=\"inline\"><mi>m</mi></math> abajo en el suelo liso; el muelle <math display=\"inline\"><mi>k</mi></math> une la base. <math display=\"inline\"><mi>θ</mi></math> se mide desde la vertical.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por simetría, la articulación queda en el eje vertical, a medio camino entre las masas de abajo. Como cada brazo mide <math display=\"inline\"><mi>a</mi></math>, la articulación está a altura <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>; las masas de abajo están en los puntos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y las de arriba en los puntos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>±</mi><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>,</mo><mn>2</mn><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. La única coordenada generalizada es <math display=\"inline\"><mi>θ</mi></math>. La velocidad horizontal de las masas de abajo es <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>; las masas de arriba tienen la misma componente horizontal, más la componente vertical <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Sumando las contribuciones de dos masas de cada tipo, la energía cinética queda así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>4</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> La energía potencial tiene dos contribuciones: la gravedad, solo sobre las masas de arriba (las de abajo están siempre a altura <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>), y el muelle, cuyo alargamiento es la separación <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> entre las masas de abajo. Por tanto, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo></mrow></math> y la lagrangiana es <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math>. Cabe destacar que las masas <math display=\"inline\"><mi>m</mi></math> aparecen solo en <math display=\"inline\"><mi>T</mi></math>: el potencial no sabe nada de las masas de abajo, pues estas se apoyan en el suelo y no aportan energía potencial."
    },
    {
     "mota": "testua",
     "html": "Para obtener la ecuación de Euler-Lagrange conviene designar la inercia generalizada <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>4</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, de modo que <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>A</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, y dividiendo por <math display=\"inline\"><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></math> la ecuación del movimiento es: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>4</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>k</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mo>−</mo><mfrac><mrow><mn>2</mn><mi>M</mi><mi>g</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El primer término es la inercia (depende de <math display=\"inline\"><mi>θ</mi></math>, porque al cambiar la forma de la tijera cambia la distribución efectiva de masas); el segundo es un término geométrico de tipo fuerza centrífuga; los dos últimos vienen del potencial. Obsérvese, de nuevo, que los términos de potencial (<math display=\"inline\"><mi>k</mi></math> y <math display=\"inline\"><mi>M</mi></math>) no tienen la masa <math display=\"inline\"><mi>m</mi></math>: esa será la clave."
    },
    {
     "mota": "testua",
     "html": "Los equilibrios se obtienen imponiendo <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Como <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mo>=</mo><mn>4</mn><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>M</mi><mi>g</mi></mrow><mrow><mi>k</mi><mi>a</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>≡</mo><mfrac><mrow><mi>k</mi><mi>a</mi></mrow><mrow><mi>M</mi><mi>g</mi></mrow></mfrac><mo>=</mo><mfrac><mi>k</mi><msub><mi>k</mi><mi>c</mi></msub></mfrac><mi>.</mi></mrow></math> El segundo equilibrio —la tijera inclinada— existe solo si <math display=\"inline\"><mrow><mi>λ</mi><mo>≥</mo><mn>1</mn></mrow></math>, es decir, cuando el muelle es suficientemente duro. La estabilidad la decide <math display=\"inline\"><msup><mi>V</mi><mo>″</mo></msup></math>. En la posición cerrada, <math display=\"inline\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mo>+</mo><mn>4</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego <math display=\"block\"><mrow><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mfrac><mrow><mi>M</mi><mi>g</mi></mrow><mi>a</mi></mfrac><mi>.</mi></mrow></math> Con muelles débiles (<math display=\"inline\"><mrow><mi>k</mi><mo>&lt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>), <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> es un máximo: la tijera cerrada es inestable y se abre —es la caída libre del problema semilla—. Con muelles duros (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>), en cambio, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> es un mínimo (estable) y el equilibrio inclinado <math display=\"inline\"><msup><mi>θ</mi><mo>*</mo></msup></math> se convierte en un máximo: es la barrera de energía entre los dos estados. En el umbral <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> se pierde la estabilidad: mecánicamente equivale a un pandeo de Euler (buckling), donde la columna recta se curva bajo la carga crítica. Aquí la &quot;carga&quot; es la gravedad y el umbral <math display=\"inline\"><mrow><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi></mrow></math> lo fijan solo las masas de arriba."
    },
    {
     "mota": "testua",
     "html": "Para pequeñas oscilaciones en torno a <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> linealizamos la ecuación del movimiento (<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>→</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi><mo>→</mo><mn>2</mn><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mi>θ</mi></mrow></math>, y el término <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math> se descarta por ser de segundo orden): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>. La frecuencia del modo normal es, por tanto, <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo>−</mo><mi>M</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mi>m</mi><mo>+</mo><mi>M</mi></mrow></mfrac></msqrt><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><msubsup><mi>k</mi><mi>c</mi><mo>+</mo></msubsup></mrow></math> cuando <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: modo blando, señal característica de una bifurcación (vibración lenta, a punto de perder la estabilidad). Cada límite es significativo. Si <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>: sin masa arriba, el sistema son solo dos cuerpos de masa <math display=\"inline\"><mi>m</mi></math> unidos por el muelle <math display=\"inline\"><mi>k</mi></math>, y esa es precisamente la frecuencia del modo relativo de las dos masas (<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mn>2</mn></mrow></math>). Si <math display=\"inline\"><mrow><mi>k</mi><mo>≫</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>→</mo><mn>2</mn><mi>k</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el régimen del muelle puro. Y, lo decisivo: las masas <math display=\"inline\"><mi>m</mi></math> aparecen en <math display=\"inline\"><mi>ω</mi></math> (en la inercia) pero no en <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>: las masas de abajo ajustan la velocidad de la vibración, pero no el umbral de estabilidad."
    },
    {
     "mota": "testua",
     "html": "Por último, la naturaleza de la bifurcación esconde un resultado elegante. Con muelles duros (<math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math>) la barrera de energía que protege la tijera cerrada es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; usando la expresión compacta de <math display=\"inline\"><mi>V</mi></math> (con <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mspace width=\"0.167em\"></mspace><mi>u</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo>−</mo><mi>M</mi><mi>g</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mo>=</mo><mn>2</mn><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La barrera se anula como <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> en <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>, mientras la frecuencia se anula como <math display=\"inline\"><msqrt><mrow><mi>k</mi><mo>−</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></msqrt></math>: ambas desaparecen a la vez en el umbral. Es más, en <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>c</mi></msub></mrow></math> el potencial es cuártico y no cuadrático; en efecto, como <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mo>−</mo><mn>2</mn><mi>M</mi><mi>g</mi><mi>a</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> en el umbral, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>4</mn><mi>M</mi><mi>g</mi><mi>a</mi><mo>−</mo><mfrac><mrow><mi>M</mi><mi>g</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>θ</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> cuártico invertido: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> es inestable incluso justo en <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>. Eso quiere decir que la bifurcación es <strong>subcrítica</strong> —el pandeo clásico de Euler, en cambio, es supercrítico—: no hay ningún equilibrio inclinado estable intermedio. Por consiguiente, al debilitar el muelle por debajo de <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math>, la tijera no empieza a inclinarse poco a poco; se mantiene rígidamente cerrada hasta <math display=\"inline\"><msub><mi>k</mi><mi>c</mi></msub></math> y luego se abre del todo <strong>de golpe</strong>. Esta es la joya del problema: las masas de abajo ajustan el modo y el ritmo de la caída, pero el umbral (<math display=\"inline\"><mrow><msub><mi>k</mi><mi>c</mi></msub><mo>=</mo><mi>M</mi><mi>g</mi><mi>/</mi><mi>a</mi></mrow></math>) y el tipo de pandeo los mandan solo las masas de arriba —la estática es ciega ante las masas que deslizan, pues su fuerza de ligadura es vertical y no realiza trabajo sobre <math display=\"inline\"><mi>θ</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo que se acorta a velocidad constante"
    },
    {
     "mota": "testua",
     "html": "<em>Un péndulo de masa <math display=\"inline\"><mi>m</mi></math> cuelga de una anilla fija <math display=\"inline\"><mi>O</mi></math>; el extremo superior de la cuerda se\ntira hacia arriba, acortando la longitud <math display=\"inline\"><mi>u</mi></math> a velocidad constante, de la forma <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo>−</mo><mi>u</mi><mi>t</mi></mrow></math> (<math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; al principio\n<math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub></mrow></math>). La masa se balancea en un plano vertical, con ángulo <math display=\"inline\"><mi>θ</mi></math>.<span class=\"j-oin\">[Semilla: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 97Jun02 (p. 33), donde la\nlongitud de un péndulo variaba a velocidad constante y se pedían <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mi>H</mi></math> y las ecuaciones del movimiento (preguntando si se conservan <math display=\"inline\"><mi>H</mi></math> y <math display=\"inline\"><mi>E</mi></math>). Aquí se han añadido el balance de energía mediante la tensión (<math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mi>T</mi></mrow></math>), la frecuencia variable de las\npequeñas oscilaciones y el aumento de la amplitud mediante el invariante adiabático.]</span>\n<br>\n<strong>(a)</strong> Escribe la lagrangiana <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y obtén la ecuación del movimiento de <math display=\"inline\"><mi>θ</mi></math>; explica por qué\nel sistema es reónomo. <strong>(b)</strong> Escribe la hamiltoniana <math display=\"inline\"><mi>H</mi></math>. ¿Es <math display=\"inline\"><mi>H</mi></math> una constante del movimiento? ¿Y <math display=\"inline\"><mi>E</mi></math> la energía\nmecánica? Obtén la tensión <math display=\"inline\"><mi>T</mi></math> de la cuerda y demuestra que <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mi>T</mi></mrow></math>; interpreta el resultado. <strong>(c)</strong> Para oscilaciones\npequeñas, reduce el problema a la ecuación de un oscilador de frecuencia variable e identifica el signo de su\n&quot;damping&quot;. <strong>(d)</strong> En el límite de acortamiento lento (<math display=\"inline\"><mrow><mi>u</mi><mo>≪</mo><msqrt><mrow><mi>g</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>), usando <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>ω</mi></mrow></math>\nel invariante adiabático, halla cómo cambia la amplitud angular <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> al disminuir <math display=\"inline\"><mi>ℓ</mi></math>,\ny compárala con la anchura transversal del balanceo. Estudia el límite <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/11b68d7bb2ddf792.svg",
     "zabalera": 264
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[La cuerda que pasa por la anilla <math display=\"inline\"><mi>O</mi></math> se recoge hacia arriba con velocidad constante <math display=\"inline\"><mi>u</mi></math>; la longitud del péndulo es <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo>−</mo><mi>u</mi><mi>t</mi></mrow></math> (ligadura reónoma) y <math display=\"inline\"><mi>θ</mi></math> se mide desde la vertical descendente.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La única coordenada generalizada es <math display=\"inline\"><mi>θ</mi></math> (medida desde la vertical descendente), pues la longitud del péndulo no es un grado de libertad: un mecanismo externo la obliga a tomar el valor fijo <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo>−</mo><mi>u</mi><mi>t</mi></mrow></math>, donde <math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math> es la velocidad de acortamiento constante. Esta ligadura depende explícitamente del tiempo —el sistema es reónomo—, y en ello está toda la miga del problema. Escribiendo la posición de la masa en coordenadas polares, con <math display=\"inline\"><mrow><mover><mi>ℓ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>u</mi></mrow></math>, el cuadrado de su velocidad es <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. La lagrangiana es, por tanto: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> El término <math display=\"inline\"><msup><mi>u</mi><mn>2</mn></msup></math> es constante (no influye en la dinámica), pero la dependencia temporal de <math display=\"inline\"><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> introduce <math display=\"inline\"><mi>t</mi></math> explícitamente en <math display=\"inline\"><mi>L</mi></math>. La ecuación de Euler-Lagrange, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, da la ecuación del movimiento: <math display=\"block\"><mrow><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>ℓ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mn>2</mn><mi>u</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Es una ecuación no lineal de coeficientes variables; no la resolveremos, pero su estructura nos dirá todo lo que sigue."
    },
    {
     "mota": "testua",
     "html": "El momento canónico es <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y al construir la hamiltoniana <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi></mrow></math>: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Dos preguntas fundamentales. La primera: ¿es <math display=\"inline\"><mi>H</mi></math> una constante del movimiento? No, porque <math display=\"inline\"><mrow><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math>; directamente, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>H</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>u</mi><mspace width=\"0.167em\"></mspace><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> La segunda: ¿y es <math display=\"inline\"><mi>E</mi></math> la energía mecánica? En este caso <math display=\"inline\"><mi>T</mi></math> la energía cinética no es una forma cuadrática homogénea de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> —el término <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></math> es independiente de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>—, y eso conlleva <math display=\"inline\"><mrow><mi>H</mi><mo>≠</mo><mi>E</mi></mrow></math>. En concreto, como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"block\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mo>,</mo></mrow></math> luego la tasa de variación de <math display=\"inline\"><mi>E</mi></math> y de <math display=\"inline\"><mi>H</mi></math> es la misma y <math display=\"inline\"><mi>E</mi></math> tampoco se conserva. Señalarlo es habitual; podemos ir más allá, sin embargo, y precisar qué alimenta ese <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>. En la dirección radial la ecuación de Newton —siendo <math display=\"inline\"><mrow><mover><mi>ℓ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>— nos da la tensión <math display=\"inline\"><mi>T</mi></math> de la cuerda: <math display=\"block\"><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>ℓ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La comparación es inmediata: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>u</mi><mspace width=\"0.167em\"></mspace><mi>T</mi><mi>.</mi></mrow></math> El resultado es transparente: la tasa de ganancia de energía es la tensión de la cuerda por la velocidad de acortamiento, es decir, la potencia que desarrolla el mecanismo al tirar de la cuerda hacia dentro. De ahí que no se conserve la energía —y cuánto—: no es ningún misterio, sino el trabajo del agente externo. (Haciendo <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>→</mo><mn>0</mn></mrow></math> y se recupera la conservación de la energía del péndulo ordinario.)"
    },
    {
     "mota": "testua",
     "html": "Profundicemos en el propio movimiento. Para oscilaciones pequeñas (<math display=\"inline\"><mrow><mi>θ</mi><mo>≪</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>), la ecuación del movimiento queda así: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mrow><mn>2</mn><mi>u</mi></mrow><mi>ℓ</mi></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Dos rasgos destacables. Uno: su frecuencia propia es <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>, que va aumentando con el tiempo al disminuir <math display=\"inline\"><mi>ℓ</mi></math>. El otro: el signo del término de la derivada primera es negativo (<math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>u</mi><mi>/</mi><mi>ℓ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), un término de tipo rozamiento pero con signo contrario —&quot;damping negativo&quot;—: las oscilaciones no se amortiguan, crecen. Esto concuerda con el <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math> anterior: el mecanismo inyecta continuamente energía en la oscilación."
    },
    {
     "mota": "testua",
     "html": "¿Cuánto crecen, exactamente? Cuando la velocidad de acortamiento es lenta frente a la frecuencia (<math display=\"inline\"><mrow><mi>u</mi><mo>≪</mo><msqrt><mrow><mi>g</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>, es decir <math display=\"inline\"><mrow><mi>ℓ</mi><mo>≫</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mi>g</mi></mrow></math>), podemos valernos de la magnitud que se conserva cuando los parámetros de un oscilador cambian despacio: el invariante adiabático <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>ω</mi></mrow></math>. El oscilador instantáneo es un movimiento armónico simple de masa efectiva <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><mtext mathvariant=\"normal\">ef </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></math> y rigidez <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi></mrow></math> (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>κ</mi><mi>/</mi><msub><mi>M</mi><mtext mathvariant=\"normal\">ef</mtext></msub></mrow></msqrt><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>), y su energía es <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>κ</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>ℓ</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup></mrow></math>. Por tanto: <math display=\"block\"><mrow><mi>J</mi><mo>=</mo><mfrac><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>ω</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msqrt><mi>g</mi></msqrt><mspace width=\"0.167em\"></mspace><msup><mi>ℓ</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math> Aquí está la joya del problema. Al ir <math display=\"inline\"><mrow><mi>ℓ</mi><mo>→</mo><mn>0</mn></mrow></math>, la amplitud angular diverge como <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup></mrow></math> —el péndulo se balancea en un ángulo cada vez más amplio—; en cambio, la anchura transversal física del balanceo (la semiamplitud del arco) es <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>ℓ</mi><mspace width=\"0.167em\"></mspace><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup></mrow></math>, es decir, cada vez más ESTRECHA. Las dos tendencias a la vez: al recoger la cuerda el ángulo se ensancha, pero el intervalo de balanceo se contrae. Y la energía de oscilación crece como <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>ℓ</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext><mn>2</mn></msubsup><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> —<math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">osz </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><mi>ω</mi></mrow></math>—, alimentada por la potencia medida en el apartado (b). Es el resultado clásico del cambio lento de la longitud de un péndulo (Landau)."
    },
    {
     "mota": "testua",
     "html": "Por último, los casos límite. Haciendo <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub></mrow></math> es fija, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><msub><mi>ℓ</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> constante, <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> constante y <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>E</mi></mrow></math> (ambas conservadas): se recupera el péndulo ordinario. En el otro extremo, cerca de <math display=\"inline\"><mrow><mi>ℓ</mi><mo>≈</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mi>g</mi></mrow></math> falla la aproximación adiabática (y también la hipótesis de ángulo pequeño); por tanto la ley <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><msup><mi>ℓ</mi><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup></mrow></math> no lleva literalmente al infinito, pero la tendencia —al recoger la cuerda el balanceo es cada vez más vivo— es fiable en todo el intervalo adiabático. El tiempo necesario para recoger toda la cuerda es <math display=\"inline\"><mrow><msub><mi>t</mi><mo>*</mo></msub><mo>=</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mi>/</mi><mi>u</mi></mrow></math>. Este sistema reónomo recoge, pues, tres enseñanzas: <math display=\"inline\"><mrow><mi>H</mi><mo>≠</mo><mi>E</mi></mrow></math> en las ligaduras dependientes del tiempo, el origen mecánico exacto de la no conservación (<math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mi>T</mi></mrow></math>), y la fuerza del invariante adiabático que aparece bajo parámetros lentos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Enunciado"
    },
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>00Feb01</strong>"
    },
    {
     "mota": "testua",
     "html": "Los extremos de una varilla de masa <math display=\"inline\"><mi>m</mi></math> y longitud <math display=\"inline\"><mi>l</mi></math> están apoyados sobre un suelo horizontal sin rozamiento y, a la vez, contra una pared vertical también sin rozamiento, formando inicialmente con esta un ángulo <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math>. Al dejar la varilla bajo la acción de la gravedad, empieza a caer conservando el plano vertical. a) Escribe las funciones lagrangiana y hamiltoniana. b) Obtén las ecuaciones del movimiento y las constantes del movimiento (si las hay). c) Calcula el ángulo <math display=\"inline\"><mi>θ</mi></math> para el cual el extremo de la varilla apoyado en la pared vertical abandona dicha pared."
    },
    {
     "mota": "testua",
     "html": "<em>(Figura: el eje <math display=\"inline\"><mi>z</mi></math> es vertical y el eje <math display=\"inline\"><mi>x</mi></math> horizontal.\nLa varilla, con su extremo superior A apoyado en la pared vertical y el inferior B\nen el suelo, se dibuja en su posición inicial —a trazos—, formando con la pared un ángulo <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math>, y en un instante cualquiera —trazo\ncontinuo— formando con la pared un ángulo <math display=\"inline\"><mi>θ</mi></math>. G es el centro de masas;\nen la varilla se escribe <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mspace width=\"0.167em\"></mspace><mi>l</mi></mrow></math>.)</em>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución (resuelta y comentada por el autor)"
    },
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
     "html": "En la figura se muestran la posición inicial y la posición en un instante cualquiera, cuando el ángulo entre la varilla y la pared es <math display=\"inline\"><mi>θ</mi></math>. Mientras la varilla mantiene el contacto con la pared, la única coordenada generalizada que define su posición es <math display=\"inline\"><mi>θ</mi></math>. Las componentes de la posición y de la velocidad del centro de masas G las darán las siguientes expresiones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>z</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "La energía cinética de la varilla puede expresarse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>G</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pues <math display=\"inline\"><mrow><msub><mi>I</mi><mi>G</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></math>. Como la energía potencial es <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><msub><mi>z</mi><mi>G</mi></msub></mrow></math>, la función lagrangiana puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para obtener la función hamiltoniana <math display=\"inline\"><mi>H</mi></math> necesitamos de antemano el momento conjugado de la única coordenada generalizada. Será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>p</mi><mi>θ</mi></msub></mrow><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto, <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>p</mi><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>−</mo><mi>L</mi></mrow></math> será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Habríamos podido obtener ese valor directamente si hubiéramos tenido en cuenta que el sistema es conservativo y que las ecuaciones de transformación no contienen explícitamente el tiempo. En esas condiciones, la función hamiltoniana <math display=\"inline\"><mi>E</mi></math> coincide con la energía total, que es precisamente la expresión que acabamos de escribir, pero escrita en función de <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> en lugar de en función de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>. Según la teoría, la función <math display=\"inline\"><mi>H</mi></math> es una constante del movimiento, y su valor es la energía mecánica del sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>E</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usemos el formalismo lagrangiano para obtener la única ecuación del movimiento:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "y simplificando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mrow><mn>2</mn><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ecuación diferencial cuya integración (tras multiplicar por <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> y teniendo en cuenta las condiciones iniciales: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) nos lleva a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>l</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "a esa expresión habríamos podido llegar de manera más directa usando el principio de conservación de la energía mencionado arriba."
    },
    {
     "mota": "testua",
     "html": "Para calcular el valor de <math display=\"inline\"><mi>θ</mi></math>, el ángulo con el que la varilla se despega de la pared izquierda, podemos seguir varios métodos. Uno de ellos son los"
    },
    {
     "mota": "testua",
     "html": "<em>multiplicadores indeterminados de Lagrange</em>"
    },
    {
     "mota": "testua",
     "html": ". Otro, más sencillo en este caso, es el método directo de Newton. Si estudiamos el movimiento de la varilla, la relación de las fuerzas que actúan sobre ella, el movimiento del centro de masas G a lo largo del eje <math display=\"inline\"><mi>x</mi></math> lo produce solo la fuerza de reacción normal que la pared vertical ejerce sobre la varilla en el punto A. Si llamamos <math display=\"inline\"><mi>N</mi></math> a esa fuerza de reacción y aplicamos la segunda ley de Newton al movimiento a lo largo del eje <math display=\"inline\"><mi>x</mi></math>, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover></math> lo hemos obtenido de <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> y hemos sustituido <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></math> y <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math> por los valores que tienen en las funciones de <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> escritas arriba. La varilla se despegará de la pared vertical cuando la fuerza de reacción normal sea nula, es decir, cuando <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>0</mn></mrow></math>, y eso nos lleva a:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Momentos canónicos conjugados",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Por definición, el momento canónico conjugado correspondiente a la coordenada generalizada <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> es este:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>≡</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que las dimensiones del producto <math display=\"inline\"><mrow><msub><mi>p</mi><mi>i</mi></msub><msub><mi>q</mi><mi>i</mi></msub></mrow></math> son las de la acción: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>i</mi></msub><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "En el caso del sistema de la figura 6.7, estos son los momentos canónicos que se obtienen de la lagrangiana (6.112): <math display=\"block\"><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>p</mi><mi>s</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Tienen dimensiones de momento lineal; pero, recordando (F.22), vemos que el momento canónico del péndulo simple es el momento angular: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Por eso estos momentos, como las coordenadas, son «generalizados»: pueden ser de cualquier tipo en cuanto a dimensiones."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas cíclicas y principios de conservación"
    },
    {
     "mota": "testua",
     "html": "Con la definición de los momentos canónicos, las ecuaciones de Lagrange se escriben de la forma <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por otra parte, hemos dicho que una coordenada generalizada <math display=\"inline\"><msub><mi>q</mi><mi>j</mi></msub></math> es <strong>cíclica</strong> o <strong>ignorable</strong> si no aparece explícitamente en la lagrangiana: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Usando esta definición y (6.119), hemos demostrado un principio de conservación:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es decir, <em>el momento canónico conjugado de una coordenada cíclica es una constante del movimiento</em>. Este resultado demuestra que existe una relación estrecha entre las simetrías y las leyes de conservación. En efecto, que una coordenada sea cíclica indica que la lagrangiana no cambia al cambiar la coordenada. En ese caso tenemos una simetría y, en consecuencia, una ley de conservación correspondiente (véase el problema 6.118). <br> Veamos el significado de los momentos canónicos y de este principio de conservación en algunos ejemplos."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cartesianas]"
    },
    {
     "mota": "testua",
     "html": "Supongamos que una partícula se mueve en el potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aplicando la definición, vemos que los momentos canónicos son las componentes del momento lineal: <math display=\"block\"><mrow><msub><mi>p</mi><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>z</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Supongamos ahora que nuestro problema tiene simetría respecto a las traslaciones en la dirección del eje <math display=\"inline\"><mi>x</mi></math>, es decir, que para todos los valores de la abscisa <math display=\"inline\"><mi>x</mi></math> tenemos lo mismo y que, por tanto, <math display=\"inline\"><mi>L</mi></math> no cambia al cambiar <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En ese caso, <math display=\"inline\"><msub><mi>p</mi><mi>x</mi></msub></math> es una constante del movimiento. En la mecánica newtoniana se obtiene el mismo resultado, pues la proyección de la fuerza en esa dirección es nula: <math display=\"block\"><mrow><msub><mi>F</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Vemos que a una simetría de traslación le corresponde la conservación de una componente del momento lineal."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cilíndricas]"
    },
    {
     "mota": "testua",
     "html": "Si estudiamos la partícula anterior en coordenadas cilíndricas, la lagrangiana será esta: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ρ</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aplicando la definición, vemos que dos de los momentos canónicos son componentes del momento lineal, mientras que el tercero es una componente del momento angular: <math display=\"block\"><mrow><msub><mi>p</mi><mi>ρ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><msup><mi>ρ</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mi>z</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Si nuestro problema tiene simetría respecto a los giros alrededor del eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>, es decir, si todos los valores del ángulo <math display=\"inline\"><mi>φ</mi></math> son equivalentes, <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> se conserva <math display=\"inline\"><msub><mi>p</mi><mi>φ</mi></msub></math>. En la mecánica newtoniana se obtiene el mismo resultado, pues la proyección del momento de las fuerzas en la dirección citada es cero: <math display=\"block\"><mrow><msub><mi>Q</mi><mi>φ</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (Para entender esta expresión hay que usar (D.34) y (D.40).) A una simetría de rotación le corresponde la conservación de una componente del momento angular."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia este ejemplo en coordenadas esféricas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "En el caso del sistema de la figura 6.7, <math display=\"inline\"><mi>r</mi></math> no aparece en la lagrangiana (6.112); por tanto, el momento canónico conjugado (6.117) es una constante del movimiento. Recordando las expresiones (6.108)–(6.109) de las velocidades, se ve fácilmente que este momento canónico es la componente horizontal del momento lineal total: <math display=\"block\"><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><mi>m</mi><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mi>.</mi></mrow></math> Ese momento no cambia durante el movimiento porque la fuerza externa total en la dirección horizontal es cero o, si se prefiere, porque hay simetría de traslación en esa dirección."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">Fuerzas centrales</span>"
      },
      {
       "mota": "testua",
       "html": ". Estudia las leyes de conservación correspondientes a las coordenadas cíclicas en el movimiento bajo fuerzas centrales. (Véase el ejercicio 6.12.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla las coordenadas cíclicas y las leyes de conservación correspondientes en el caso del péndulo esférico."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En este apartado hemos estudiado generalizaciones de los principios de conservación del momento lineal y del angular. Para ver el correspondiente a la energía mecánica tendremos que definir una nueva magnitud."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Partícula unida por un muelle en un tubo giratorio libre"
    },
    {
     "mota": "testua",
     "html": "<em>En un plano horizontal hay un tubo recto rígido que puede girar sin rozamiento alrededor de un eje vertical que pasa por un punto fijo <math display=\"inline\"><mi>O</mi></math>;\nel tubo, junto con todo el soporte giratorio, tiene momento de inercia <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> respecto a ese eje. Dentro del tubo desliza\nsin rozamiento una partícula de masa <math display=\"inline\"><mi>m</mi></math>, unida a <math display=\"inline\"><mi>O</mi></math> mediante un muelle de constante <math display=\"inline\"><mi>k</mi></math> y longitud propia nula (la gravedad\nes perpendicular al plano: no influye). Inicialmente el tubo tiene velocidad angular <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y la partícula\nestá a distancia <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>, en reposo respecto al tubo.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de\nExamen Resueltos y Comentados</em>, 98Feb01 (febrero de 1998), donde un tubo ligero y la barra de su interior deslizaban libremente, estudiado mediante la conservación del momento angular y de la energía (la partícula escapaba\nal infinito). Aquí se han añadido el muelle de unión, la inercia finita <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> del tubo, el análisis del equilibrio, el modo radial,\nla clausura de la órbita y la comparación con el caso forzado, convirtiendo el &quot;escape libre&quot; en un movimiento acotado y\noscilatorio.]</span> <br>\n<strong>(a)</strong> Escribe la lagrangiana del sistema en las coordenadas generalizadas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, identifica la coordenada cíclica y\nobtén las dos constantes del movimiento: el momento angular respecto a <math display=\"inline\"><mi>O</mi></math>, <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> y la energía <math display=\"inline\"><mi>E</mi></math>. <strong>(b)</strong> Eliminando <math display=\"inline\"><mi>φ</mi></math>,\nconstruye el potencial efectivo para <math display=\"inline\"><mi>r</mi></math> y halla el radio <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> de la órbita circular; demuestra que allí la\nvelocidad angular del tubo es exactamente <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math>. ¿Qué condición debe cumplir <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> para que ese equilibrio sea finito,\ny qué le ocurre al equilibrio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> al superar ese umbral? <strong>(c)</strong> Calcula la frecuencia de las\npequeñas oscilaciones radiales en torno a <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math>. <strong>(d)</strong> JOYA: estudia la clausura de la trayectoria de la partícula. Demuestra que en el límite de tubo\nligero (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math>) la trayectoria es una elipse cerrada centrada en <math display=\"inline\"><mi>O</mi></math>, y que cuando <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math> la órbita\nprecesiona; da el ángulo apsidal. <strong>(e)</strong> Compáralo con el caso en que un motor\nmantuviera <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> constante.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/9ae1a36785c021a7.svg",
     "zabalera": 412
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[Tubo giratorio visto desde arriba: la partícula <math display=\"inline\"><mi>m</mi></math> está unida con un muelle <math display=\"inline\"><mi>k</mi></math> al eje <math display=\"inline\"><mi>O</mi></math>; el tubo (giratorio) tiene momento de inercia <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> y gira con velocidad <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomamos dos coordenadas generalizadas: <math display=\"inline\"><mi>r</mi></math>, la distancia de la partícula al eje <math display=\"inline\"><mi>O</mi></math> (medida en el tubo), y <math display=\"inline\"><mi>φ</mi></math>, el ángulo de giro del tubo respecto a una dirección fija. Como la componente radial (<math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math>) y la tangencial debida al giro (<math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>) del cuadrado de la velocidad de la partícula son perpendiculares, es <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Sumando la energía cinética del tubo (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mn>0</mn></msub><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>) y restando la energía potencial del muelle (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>), la lagrangiana es: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mi>φ</mi></math> no aparece explícitamente: es una coordenada cíclica, y el momento canónico correspondiente —el momento angular total respecto al eje— es una constante del movimiento: <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Como el sistema es natural y el tiempo no aparece explícitamente, también se conserva la energía mecánica: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>L</mi><mi>z</mi></msub><msub><mi>ω</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>r</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math> Estas dos constantes del movimiento bastan para resolver el problema, como en la semilla; el muelle, sin embargo, convierte el escape libre en un movimiento acotado."
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> (<math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) y sustituyendo en la energía, queda el problema unidimensional equivalente para <math display=\"inline\"><mi>r</mi></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> El primer término es el término centrífugo del giro (aquí con la inercia total <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, no solo con <math display=\"inline\"><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>), y el segundo es el pozo del muelle. La ecuación del movimiento radial es <math display=\"inline\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><mi>r</mi></mrow></math>, que pone frente a frente la exigencia de la aceleración centrípeta y la fuerza del muelle. La órbita circular (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mo>*</mo></msub></mrow></math>) se da en el mínimo de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>; imponiendo <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>r</mi><mo>−</mo><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>r</mi><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup></mrow><mi>k</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><msqrt><mfrac><mi>m</mi><mi>k</mi></mfrac></msqrt><mi>.</mi></mrow></math> Una consecuencia elegante es inmediata: en la órbita circular la velocidad angular del tubo es exactamente <math display=\"block\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>=</mo><mfrac><msub><mi>L</mi><mi>z</mi></msub><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow></mfrac><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt></mrow></math>, totalmente independiente de <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>, de <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> y de <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> —la frecuencia propia de la masa con el muelle—. El sentido físico es transparente: la órbita circular es el estado en que la fuerza centrífuga (<math display=\"inline\"><mrow><mi>m</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>r</mi></mrow></math>) y el muelle (<math display=\"inline\"><mrow><mi>k</mi><mi>r</mi></mrow></math>) se equilibran, lo que da <math display=\"inline\"><mrow><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Este equilibrio finito exige una condición: <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><msqrt><mrow><mi>m</mi><mi>/</mi><mi>k</mi></mrow></msqrt><mo>−</mo><msub><mi>I</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>L</mi><mi>c</mi></msub><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>. Por debajo de ese umbral <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> es el único equilibrio —partícula en el eje, venciendo el muelle al giro—. En efecto, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> es siempre un punto crítico de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>, y en él la derivada segunda es <math display=\"inline\"><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>: positiva (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> estable) si <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>&lt;</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math>, negativa (inestable) si <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>&gt;</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math>. Así pues, en <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><msub><mi>L</mi><mi>c</mi></msub></mrow></math> se produce una bifurcación (en horquilla, pitchfork): cuando el momento angular supera el umbral, el equilibrio del centro se vuelve inestable y surge un equilibrio estable de radio finito. Es notable que el parámetro de control es <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> —una constante del movimiento—, no un impulso impuesto desde fuera."
    },
    {
     "mota": "testua",
     "html": "En las oscilaciones pequeñas en torno a <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math>, como el término cinético de la energía equivalente es <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, la masa efectiva es <math display=\"inline\"><mi>m</mi></math>, y <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><mi>d</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>m</mi></mrow></math> evaluada en el equilibrio. Calculando la derivada segunda y sustituyendo la condición de equilibrio (<math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>), <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></mrow><mrow><mi>d</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mfrac><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>−</mo><mn>3</mn><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>k</mi><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow></mfrac><mo>,</mo></mrow></math> que es siempre positiva: el equilibrio es siempre estable. Definiendo la fracción del momento de inercia correspondiente a la partícula <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>μ</mi><mo>&lt;</mo><mn>1</mn></mrow></math>), la frecuencia adopta una forma compacta: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><msqrt><mi>μ</mi></msqrt><mo>=</mo><mn>2</mn><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><msqrt><mi>μ</mi></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí está el resultado más elegante. En el límite de tubo ligero (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>μ</mi><mo>→</mo><mn>1</mn></mrow></math>), la oscilación radial tiene una frecuencia exactamente doble de la de la vuelta orbital: <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><mn>2</mn><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub></mrow></math>. La relación exacta <math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>1</mn></mrow></math> cierra la órbita, y la partícula traza una elipse centrada en <math display=\"inline\"><mi>O</mi></math> (en cada vuelta, dos perihelios y dos afelios, separados <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>). No es casualidad: cuando <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> el sistema es un oscilador isótropo puro en un potencial central <math display=\"inline\"><mrow><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, y según el teorema de Bertrand los potenciales armónicos —y el de Kepler <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>, y ningún otro— cierran todas las órbitas acotadas. La inercia del tubo (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math>) rompe esa clausura: entonces el término centrífugo es <math display=\"inline\"><mrow><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, no <math display=\"inline\"><mrow><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> solo, el sistema ya no equivale a un problema de fuerza central de una sola partícula, y se pierde la clausura de Bertrand. El ángulo apsidal que recorre <math display=\"inline\"><mi>φ</mi></math> entre un perihelio y el siguiente afelio es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><msub><mi>ω</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, es decir, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><msqrt><mi>μ</mi></msqrt></mrow></mfrac><mi>.</mi></mrow></math> en <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>) es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> y la órbita se cierra; cuando <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><mn>1</mn></mrow></math> resulta <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>&gt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, y la elipse precesiona en el sentido del giro. Cuanto más pesado es el tubo (<math display=\"inline\"><mi>μ</mi></math> menor), más viva es la precesión; en el límite extremo (<math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>→</mo><mn>0</mn></mrow></math>) <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>→</mo><mn>0</mn></mrow></math>: el tubo apenas cambia su velocidad, la partícula da muchas vueltas por cada lenta respiración radial, y el movimiento se acerca al límite casi forzado."
    },
    {
     "mota": "testua",
     "html": "Resulta instructivo comparar el caso libre con el accionado por un motor. Si un motor obligara a <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> constante, <math display=\"inline\"><mi>φ</mi></math> no sería una coordenada libre, y la energía no se conservaría (pues el motor realiza trabajo). Entonces el movimiento radial de la partícula estaría gobernado por este potencial efectivo: <math display=\"block\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mrow></math> una simple parábola. Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> es estable y la partícula oscila en torno al centro; pero si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>, la parábola se invierte, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> se vuelve inestable y la partícula escapa exponencialmente, sin equilibrio finito: catástrofe en el umbral <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>. En el caso libre eso es imposible: cuando la partícula se va hacia fuera, con <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> fijo, el tubo se frena (pues <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> disminuye) y en el equilibrio la velocidad se ajusta siempre a <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math>. Las dos constantes del movimiento (<math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> y <math display=\"inline\"><mi>E</mi></math>) acotan el movimiento y llevan siempre a un equilibrio estable —autorregulación—; el motor, al inyectar energía sin límite, rompe esa protección. Uno forzado, el otro libre: un bonito ejemplo de lo claro que los distingue la mecánica analítica."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aro rodante sobre una mesa y cuenta ensartada: qué momento se conserva"
    },
    {
     "mota": "testua",
     "html": "<em>Un aro homogéneo de masa <math display=\"inline\"><mi>M</mi></math> y radio <math display=\"inline\"><mi>R</mi></math> está en un plano vertical, rodando sin deslizar sobre una mesa\nhorizontal. Una partícula de masa <math display=\"inline\"><mi>m</mi></math> (una cuenta) está ensartada en el aro y\npuede deslizar sobre él sin rozamiento; su posición viene dada por el ángulo <math display=\"inline\"><mi>φ</mi></math>, medido desde el punto\ninferior del aro.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y\nComentados</em>, 99Jun01 (junio de 1999); el original solo pedía identificar dos constantes del movimiento y calcular la\nvelocidad en el punto inferior. Aquí, manteniendo las <math display=\"inline\"><mrow><mi>M</mi><mo>,</mo><mi>m</mi><mo>,</mo><mi>R</mi></mrow></math> generales, se han añadido el\nresultado cerrado de la posición del aro, la fuerza de rozamiento de la mesa y las pequeñas oscilaciones en torno al equilibrio.]</span> <br>\n<strong>(a)</strong> Escribe la lagrangiana del sistema distinguiendo bien los grados de libertad: el giro de rodadura del aro\n(<math display=\"inline\"><mi>θ</mi></math>, donde <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>) y la posición <math display=\"inline\"><mi>φ</mi></math> de la cuenta no son lo mismo. <strong>(b)</strong> Halla las dos\nconstantes del movimiento. ¿Es una de ellas el momento lineal horizontal? ¿Por qué sí o por qué no? <strong>(c)</strong> Si la cuenta se suelta desde el reposo en el ángulo <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>, halla la posición <math display=\"inline\"><mi>X</mi></math> del centro del aro como función explícita de <math display=\"inline\"><mi>φ</mi></math> (sin resolver ecuaciones diferenciales), y compárala con lo que daría un argumento ingenuo del centro de masas. <strong>(d)</strong> Halla la fuerza de rozamiento horizontal que la mesa ejerce sobre el aro. <strong>(e)</strong> Halla\nla frecuencia de las pequeñas oscilaciones de la cuenta en torno al equilibrio inferior y estudia el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/eb00d8c6b4f2d1ea.svg",
     "zabalera": 358
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El aro rueda sin deslizar sobre la mesa; la cuenta (<math display=\"inline\"><mi>m</mi></math>) desliza sobre él sin rozamiento; <math display=\"inline\"><mi>φ</mi></math> se mide desde el punto inferior y <math display=\"inline\"><mi>f</mi></math> es el rozamiento de la mesa.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El sistema tiene dos grados de libertad. Uno es <math display=\"inline\"><mi>X</mi></math>, la posición horizontal del centro del aro. La rodadura sin deslizar impone la ligadura <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, donde <math display=\"inline\"><mi>θ</mi></math> es el giro material del aro; como esta ligadura es holónoma e integrable, podemos eliminar <math display=\"inline\"><mi>θ</mi></math> desde el principio. El otro es <math display=\"inline\"><mi>φ</mi></math>, la posición de la cuenta en el aro. Es fundamental darse cuenta de que <math display=\"inline\"><mi>φ</mi></math> no está ligado a <math display=\"inline\"><mi>θ</mi></math>: la cuenta desliza libremente, y por tanto su ángulo es independiente del giro material del aro —ese es el punto sutil que subraya la semilla—. La energía cinética del aro es la de traslación más la de rodadura; como el momento de inercia de un aro homogéneo respecto a su eje es <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">er </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo></mrow></math> es decir, la rodadura duplica la inercia efectiva del aro. La posición de la cuenta es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>X</mi><mo>+</mo><mi>R</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>R</mi><mo>−</mo><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y el cuadrado de su velocidad <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. La lagrangiana es, por tanto: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>M</mi><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>R</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La coordenada <math display=\"inline\"><mi>X</mi></math> es cíclica (no aparece explícitamente en <math display=\"inline\"><mi>L</mi></math>); el momento canónico correspondiente es una constante del movimiento: <math display=\"block\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow><mi>.</mi></mrow></math> La segunda constante es la energía mecánica: <math display=\"inline\"><mi>L</mi></math> no tiene <math display=\"inline\"><mi>t</mi></math> explícito y el sistema es natural, luego se conserva <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math>. Pero —y esta es la clave de la pregunta— <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math> <strong>no es</strong> el momento lineal horizontal. El momento horizontal total del sistema es <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>m</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>p</mi><mi>X</mi></msub><mo>−</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y no se conserva, pues <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> cambia con el tiempo. La razón física: para mantener la rodadura, la mesa ejerce una fuerza de rozamiento horizontal en el punto de contacto, y esa fuerza es externa al sistema. La energía, en cambio, sí se conserva: el rozamiento estático de rodadura no realiza trabajo (pues el punto de contacto está en reposo en todo instante) y la cuenta es lisa. Así pues, las dos constantes del movimiento son <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math>, no el momento lineal; <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math> incluye también el momento angular de rodadura del aro, y eso la distingue del momento lineal."
    },
    {
     "mota": "testua",
     "html": "Supongamos que la cuenta se suelta desde el reposo en el ángulo <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>. Al principio todo está en reposo, luego <math display=\"inline\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Esa conservación da <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mi>R</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, que puede integrarse directamente —sin que aparezca <math display=\"inline\"><mi>g</mi></math>, sin detalles de la dinámica—: <math display=\"block\"><mrow><mi>X</mi><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>R</mi></mrow><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> El resultado es cerrado y elegante: la posición del centro del aro es una función explícita del ángulo de la cuenta, sin que haya que integrar nada. Comparémoslo con el argumento ingenuo del centro de masas. Alguien podría pensar, como si no hubiera fuerza horizontal externa, que el centro de masas horizontal está fijo, es decir <math display=\"inline\"><mrow><mi>M</mi><mi>X</mi><mo>+</mo><mi>m</mi><msub><mi>x</mi><mi>m</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow></mrow></math>, lo que daría <math display=\"inline\"><mrow><mi>X</mi><mo>−</mo><msub><mi>X</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Pero eso es <strong>erróneo</strong>: el denominador es <math display=\"inline\"><mrow><mi>M</mi><mo>+</mo><mi>m</mi></mrow></math> en vez de <math display=\"inline\"><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi></mrow></math>. El origen de la diferencia es el <math display=\"inline\"><mi>M</mi></math> adicional que aporta la inercia de rodadura y, más a fondo, muestra que el rozamiento de la mesa mueve el centro de masas —por eso no puede usarse la conservación del centro de masas—. En consecuencia, el aro se mueve <strong>menos</strong> de lo que predice el argumento ingenuo."
    },
    {
     "mota": "testua",
     "html": "Ahora podemos recuperar la fuerza de rozamiento. En la dirección horizontal, la única fuerza externa es el rozamiento de la mesa <math display=\"inline\"><mi>f</mi></math> (la gravedad y la fuerza normal son verticales), luego <math display=\"inline\"><mrow><mover><mi>P</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>f</mi></mrow></math>. Como <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>p</mi><mi>X</mi></msub><mo>−</mo><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y <math display=\"inline\"><msub><mi>p</mi><mi>X</mi></msub></math> son constantes, <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mover><mi>P</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>M</mi><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mi>.</mi></mrow></math> El rozamiento es proporcional a la aceleración del centro del aro, en sentido contrario. Comprobación: haciendo <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> el aro no se mueve (<math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>→</mo><mn>0</mn></mrow></math>) y <math display=\"inline\"><mrow><mi>f</mi><mo>→</mo><mn>0</mn></mrow></math>, como cabía esperar; y para <math display=\"inline\"><mi>m</mi></math> pequeño, como <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>∼</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>/</mi><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo>∼</mo><mi>O</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es finito aun cuando <math display=\"inline\"><mi>M</mi></math> crece."
    },
    {
     "mota": "testua",
     "html": "Por último, estudiemos las oscilaciones pequeñas en torno al equilibrio inferior (<math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>). De nuevo con <math display=\"inline\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, eliminamos <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> de la energía y obtenemos un problema equivalente para <math display=\"inline\"><mi>φ</mi></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mfrac><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow><mrow><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Como en torno a <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> se cumple <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>R</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></math>, el movimiento es armónico, con esta frecuencia: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>M</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math> La cuenta oscila <strong>más rápido</strong> que en un aro fijo —el péndulo simple en un plano fijo sería <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></math>—: el retroceso del aro causado por la rodadura reduce la inercia efectiva, y por tanto aumenta la frecuencia. El factor <math display=\"inline\"><mn>2</mn></math> de la corrección de la forma <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mn>2</mn><mi>M</mi></mrow></math> es la firma de la rodadura (la inercia efectiva del aro es <math display=\"inline\"><mrow><mn>2</mn><mi>M</mi></mrow></math>, no <math display=\"inline\"><mi>M</mi></math>). En el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math> se recupera <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mrow></math>, el péndulo del aro fijo, y todos los retrocesos desaparecen; en ese mismo límite <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> también el desplazamiento del aro del apartado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiende a cero. Todos los resultados coinciden en ese caso límite, como comprobación de la coherencia del sistema."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos cuentas unidas por muelles en un alambre giratorio"
    },
    {
     "mota": "testua",
     "html": "<em>Un alambre recto, sin masa, que forma un ángulo fijo <math display=\"inline\"><mi>β</mi></math> con un eje vertical, gira alrededor de ese eje\nimpulsado por un motor, con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>; el vértice del alambre, <math display=\"inline\"><mi>O</mi></math>,\nestá sobre el eje. Dos cuentas de masa <math display=\"inline\"><mi>m</mi></math> (cada una) pueden deslizar a lo largo del alambre sin rozamiento:\nla primera cuenta está unida al vértice <math display=\"inline\"><mi>O</mi></math> por un muelle de constante <math display=\"inline\"><mi>k</mi></math>, y la segunda a la primera por un muelle idéntico de constante <math display=\"inline\"><mi>k</mi></math>; ambos muelles tienen longitud natural <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math>. La gravedad (<math display=\"inline\"><mi>g</mi></math>) actúa hacia abajo.\nSean <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> las distancias de las cuentas a <math display=\"inline\"><mi>O</mi></math> a lo largo del alambre.<span class=\"j-oin\">[Semilla: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 96Set02 (septiembre de 1996), donde una sola cuenta\ndeslizaba por la hipotenusa de un triángulo isósceles giratorio de <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, unida por un muelle sin longitud natural, y solo se pedía el radio de la órbita circular estable. Aquí se ha añadido la segunda\ncuenta y el segundo muelle, se han convertido el ángulo y la longitud natural en símbolos, y se piden la estabilidad del equilibrio <math display=\"inline\"><mo>→</mo></math>,\nlos modos normales <math display=\"inline\"><mo>→</mo></math> y el balance de energía del motor <math display=\"inline\"><mo>→</mo></math>.]</span> <br>\n<strong>(a)</strong> Escribe la lagrangiana en las coordenadas generalizadas <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math> e identifica el potencial efectivo\ngenerado por el giro forzado del alambre. <strong>(b)</strong> Halla las distancias de equilibrio <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>1</mn><mn>0</mn></msubsup><mo>,</mo><msubsup><mi>r</mi><mn>2</mn><mn>0</mn></msubsup></mrow></math> correspondientes a las órbitas circulares; ¿para qué intervalo de <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> son finitas y positivas? <strong>(c)</strong> Linealiza en torno al equilibrio y obtén\nlas frecuencias de los dos modos normales de las oscilaciones radiales; demuestra que <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>, e interpreta la aparición de la razón áurea. <strong>(d)</strong> Estabilidad\ny velocidades críticas: halla para qué <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> se vuelve inestable la órbita (modo blando), demuestra que la relación entre\nlas velocidades de ablandamiento de los dos modos es el cuadrado de la razón áurea, y que la diferencia <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup></mrow></math>\nes independiente de <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. <strong>(e)</strong> Balance de energía: demuestra que la función de energía de Jacobi\nse conserva pero la energía mecánica <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> no; calcula la potencia que el motor debe aportar para mantener <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>\ny muestra que en la órbita estable es cero pero en las oscilaciones no. Estudia los límites <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> y\n<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/24ef825ea4ab83c7.svg",
     "zabalera": 289
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El alambre gira con ángulo <math display=\"inline\"><mi>β</mi></math> y velocidad <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> constantes; las dos cuentas deslizan en los radios <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math>, unidas por dos muelles. Línea de trazos: órbita circular de la segunda cuenta.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>(a)</strong> Cada cuenta está a distancia <math display=\"inline\"><mrow><msub><mi>r</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> del eje y <math display=\"inline\"><mrow><msub><mi>r</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> por debajo de <math display=\"inline\"><mi>O</mi></math>; ambas tienen el mismo acimut del alambre, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>. Como la componente <math display=\"inline\"><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> a lo largo del alambre y la componente <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><msub><mi>r</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> producida por el giro son perpendiculares, es <math display=\"inline\"><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>. La energía cinética y la potencial se escriben así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Al ser el giro forzado (<math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> impuesto), el segundo término de <math display=\"inline\"><mi>T</mi></math> es independiente de las velocidades y actúa como un potencial. Siendo la lagrangiana <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math>, toda la dinámica radial de las cuentas la gobierna este potencial efectivo, <math display=\"block\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ℓ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> cuyo tercer término es el potencial de la &quot;fuerza centrífuga&quot; (siempre negativo, creciente con el radio). La fuerza de Coriolis no se proyecta en la dirección del alambre —la equilibran las fuerzas de ligadura del alambre—, luego no entra en las ecuaciones de <math display=\"inline\"><msub><mi>r</mi><mi>i</mi></msub></math>. Para aligerar la notación, definamos <math display=\"inline\"><mrow><mi>κ</mi><mo>≡</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> (rigidez centrífuga, con las mismas dimensiones que <math display=\"inline\"><mi>k</mi></math>) y <math display=\"inline\"><mrow><mi>G</mi><mo>≡</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> (componente de la gravedad a lo largo del alambre)."
    },
    {
     "mota": "testua",
     "html": "<strong>(b)</strong> La órbita circular (<math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math> constante) se obtiene anulando el gradiente de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><mi>k</mi><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>G</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>k</mi><msub><mi>r</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>G</mi><mo>+</mo><mi>k</mi><msub><mi>ℓ</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> La matriz de este sistema es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑲</mi><mo>−</mo><mi>κ</mi><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, siendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑲</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y el determinante <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><msup><mi>κ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>k</mi><mi>κ</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></math>. La solución: <math display=\"block\"><mrow><msubsup><mi>r</mi><mn>1</mn><mn>0</mn></msubsup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><msub><mi>ℓ</mi><mn>0</mn></msub></mrow><mi>D</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>r</mi><mn>2</mn><mn>0</mn></msubsup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>ℓ</mi><mn>0</mn></msub></mrow><mi>D</mi></mfrac><mi>.</mi></mrow></math> Los valores que hacen <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> son <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>k</mi></mrow></math>. Los radios son finitos y positivos en el intervalo <math display=\"inline\"><mrow><mi>κ</mi><mo>&lt;</mo><mfrac><mrow><mn>3</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>k</mi></mrow></math>; al acercarse a ese límite <math display=\"inline\"><mrow><mi>D</mi><mo>→</mo><msup><mn>0</mn><mo>+</mo></msup></mrow></math> y los radios tienden a infinito (la órbita se aleja del vértice sin límite). La condición, por tanto, es <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>≡</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><msqrt><mrow><mfrac><mrow><mn>3</mn><mo>−</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mi>k</mi><mi>m</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> Comprobación: haciendo <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>ℓ</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>1</mn><mn>0</mn></msubsup><mo>=</mo><mn>2</mn><mi>G</mi><mi>/</mi><mi>k</mi></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>2</mn><mn>0</mn></msubsup><mo>=</mo><mn>3</mn><mi>G</mi><mi>/</mi><mi>k</mi></mrow></math> —la ordinaria cadena estática, en la que cada muelle sostiene la componente del peso de las cuentas que tiene debajo."
    },
    {
     "mota": "testua",
     "html": "<strong>(c)</strong> Como <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> es exactamente cuadrática en <math display=\"inline\"><msub><mi>r</mi><mi>i</mi></msub></math>, su matriz hessiana (matriz de rigidez) es constante —independiente de la posición, de <math display=\"inline\"><mi>G</mi></math> y de <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math>—: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑲</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑲</mi><mo>−</mo><mi>κ</mi><mi mathvariant=\"bold-italic\">𝑰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi><mo>−</mo><mi>κ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mi>κ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como la energía cinética no tiene términos cruzados, la matriz de masas es <math display=\"inline\"><mrow><mi>m</mi><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math> y los modos normales salen de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝑲</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑰</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Los valores propios de <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑲</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> son los de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math> menos <math display=\"inline\"><mi>κ</mi></math>, y los de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math> son las raíces de <math display=\"inline\"><mrow><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>k</mi><mi>λ</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>k</mi></mrow></math>. Por tanto <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>=</mo><msub><mi>λ</mi><mo>±</mo></msub><mo>−</mo><mi>κ</mi></mrow></math>, es decir, <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mi>.</mi></mrow></math> y, como <math display=\"inline\"><mrow><mfrac><mrow><mn>3</mn><mo>±</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><msup><mi>φ</mi><mrow><mi>±</mi><mn>2</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac></mrow></math> siendo la razón áurea, <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup><mo>=</mo><msup><mi>φ</mi><mn>2</mn></msup><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup><mo>=</mo><msup><mi>φ</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mi>.</mi></mrow></math> Las formas de los modos son las de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math> (un desplazamiento uniforme de <math display=\"inline\"><mi>κ</mi></math> no las cambia): en el modo blando (<math display=\"inline\"><msub><mi>ω</mi><mo>−</mo></msub></math>) las dos cuentas se mueven en fase, siendo la amplitud de <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> <math display=\"inline\"><mi>φ</mi></math> veces la de <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math>; en el modo rígido (<math display=\"inline\"><msub><mi>ω</mi><mo>+</mo></msub></math>) en contrafase, con la relación <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>φ</mi></mrow></math>. La razón áurea, por tanto, gobierna tanto las frecuencias (<math display=\"inline\"><msup><mi>φ</mi><mrow><mi>±</mi><mn>2</mn></mrow></msup></math>) como la relación de amplitudes (<math display=\"inline\"><mrow><mi>φ</mi><mo>,</mo><mn>1</mn><mi>/</mi><mi>φ</mi></mrow></math>). Además, como <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> es exactamente cuadrática —no aproximada a segundo orden—, estas oscilaciones son exactas para cualquier amplitud, no solo infinitesimales: la cadena elástica del alambre giratorio es un oscilador armónico exacto de dos modos, y sus frecuencias son independientes de <math display=\"inline\"><mi>g</mi></math> y de <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math> (que solo desplazan el punto de equilibrio)."
    },
    {
     "mota": "testua",
     "html": "<strong>(d)</strong> Al aumentar <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> (aumentando <math display=\"inline\"><mi>κ</mi></math>), las dos frecuencias se ablandan. El modo blando es el primero en anularse: <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math> y ese es el umbral de inestabilidad —la misma divergencia del radio del apartado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>—. El modo rígido se anularía más tarde, en <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>2</mn><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>φ</mi><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt></mrow></math>, pero el sistema ya es inestable en <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn></mrow></msub></math>; por tanto <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn></mrow></msub></math> es el umbral físico. La relación entre ambos, <math display=\"block\"><mrow><mfrac><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>2</mn><mspace width=\"0.222em\"></mspace></mrow></msub><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>c</mi><mn>1</mn><mspace width=\"0.222em\"></mspace></mrow></msub></mfrac><mo>=</mo><msup><mi>φ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mo>+</mo><msqrt><mn>5</mn></msqrt></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>2.618</mn><mo>,</mo></mrow></math>, es el cuadrado de la razón áurea. Por otro lado, la diferencia entre los modos <math display=\"block\"><mrow><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>φ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>φ</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>=</mo><msqrt><mn>5</mn></msqrt><mspace width=\"0.167em\"></mspace><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>,</mo></mrow></math> es totalmente independiente de <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>: el giro ablanda los dos modos en la misma medida, sin tocar su separación."
    },
    {
     "mota": "testua",
     "html": "<strong>(e)</strong> <math display=\"inline\"><mi>L</mi></math> no tiene <math display=\"inline\"><mi>t</mi></math> explícito (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>,</mo><mi>β</mi></mrow></math> constante); por tanto se conserva la función de energía de Jacobi. Siendo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math> (<math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup></mrow></math> cuadrática en las velocidades, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>κ</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> independiente de las velocidades, y <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>+</mo><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub><mo>,</mo></mrow></math> es decir, la &quot;energía&quot; del problema radial reducido. La energía mecánica verdadera, en cambio, es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>h</mi><mo>+</mo><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mo>+</mo><mi>κ</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>: como <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> cambia en la oscilación, <math display=\"inline\"><mi>E</mi></math> no se conserva; la diferencia la aporta el motor. El momento angular de las cuentas respecto al eje es <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>; al cambiar <math display=\"inline\"><msub><mi>r</mi><mi>i</mi></msub></math> cambia <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>, y el motor debe hacer un momento <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub></mrow></math> para sostener <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Su potencia <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>τ</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>r</mi><mi>i</mi></msub><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> es exactamente la derivada temporal de <math display=\"inline\"><mrow><mi>κ</mi><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math>, que concuerda con la variación de <math display=\"inline\"><mi>E</mi></math>. En la órbita estable (<math display=\"inline\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>0</mn></mrow></math>: el motor no realiza trabajo para sostener la órbita, pues la fuerza centrípeta es radial y la proporciona el alambre. En las oscilaciones <math display=\"inline\"><mrow><mi>P</mi><mo>≠</mo><mn>0</mn></mrow></math> es no nulo instante a instante, pero tiene media cero en un periodo (pues <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msubsup><mi>r</mi><mi>i</mi><mn>2</mn></msubsup></mrow></math> vuelve): el motor introduce y extrae energía de forma sincronizada con la oscilación radial de las cuentas —la energía &quot;que falta&quot; es del motor, intercambiada de forma reversible—."
    },
    {
     "mota": "testua",
     "html": "Límites. <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> (alambre alineado con el eje): <math display=\"inline\"><mrow><mi>κ</mi><mo>→</mo><mn>0</mn></mrow></math>, sin fuerza centrífuga, y <math display=\"inline\"><mrow><mi>G</mi><mo>→</mo><mi>m</mi><mi>g</mi></mrow></math> completo; las órbitas son siempre estables (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>→</mo><mi>∞</mi></mrow></math>), <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup><mo>→</mo><msup><mi>φ</mi><mrow><mi>±</mi><mn>2</mn></mrow></msup><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>, y como <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>→</mo><mn>0</mn></mrow></math> el motor no necesita potencia —la ordinaria cadena vertical móvil—. <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (alambre horizontal): <math display=\"inline\"><mrow><mi>G</mi><mo>→</mo><mn>0</mn></mrow></math> (la gravedad no tiene componente a lo largo del alambre, órbitas en el plano horizontal), <math display=\"inline\"><mrow><mi>κ</mi><mo>=</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></math> máximo; <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>=</mo><msup><mi>φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> es el menor —el sistema más sensible al giro—, y los radios de equilibrio los fija sobre todo <math display=\"inline\"><msub><mi>ℓ</mi><mn>0</mn></msub></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos partículas en el mismo tubo: modos normales y batimientos"
    },
    {
     "mota": "testua",
     "html": "<em>Un bloque de masa <math display=\"inline\"><mi>M</mi></math> está unido rígidamente a un tubo circular liso y sin masa de radio <math display=\"inline\"><mi>a</mi></math>; el conjunto\nestá sobre una mesa horizontal sin rozamiento y el tubo en un plano vertical. Dentro del tubo deslizan sin rozamiento, independientemente entre sí,\ndos partículas de la misma masa <math display=\"inline\"><mi>m</mi></math>. Sean <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>\ny <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math> la posición de cada partícula en el tubo, medida desde el punto inferior.<span class=\"j-oin\">[Semilla: Ecenarro,\n<em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 99Set01 (septiembre de 1999), donde en el tubo solo había UNA partícula y solo se pedía <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en pequeñas oscilaciones. Aquí se le ha añadido una segunda partícula, se ha llevado el problema a los modos normales y se ha estudiado el acoplamiento mediante el carrito libre —los batimientos—.]</span> <br>\n<strong>(a)</strong> Obtén la lagrangiana del sistema (tres grados de libertad: <math display=\"inline\"><mi>X</mi></math>, <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math>) e identifica la\ncoordenada cíclica. <strong>(b)</strong> En oscilaciones pequeñas, linealiza las ecuaciones del movimiento en la referencia del centro de masas. <strong>(c)</strong> Halla los dos modos normales (frecuencias y formas). <strong>(d)</strong> Demuestra que la frecuencia del modo antisimétrico es exactamente la de un péndulo de soporte fijo, totalmente independiente de <math display=\"inline\"><mi>M</mi></math> y de <math display=\"inline\"><mi>m</mi></math>, e\ninterprétalo. <strong>(e)</strong> Si se suelta desplazando solo una partícula, describe el movimiento resultante y\nestudia el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/f51634b61db4da3e.svg",
     "zabalera": 433
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El conjunto bloque-tubo desliza sobre la mesa lisa (<math display=\"inline\"><mi>X</mi></math>); dos partículas (<math display=\"inline\"><mi>m</mi></math> cada una) oscilan en el tubo, con <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math> medidos desde el punto inferior.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomemos tres coordenadas generalizadas: <math display=\"inline\"><mi>X</mi></math> (posición horizontal del conjunto —bloque más tubo—) y <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math> (posición de cada partícula en el tubo, medida desde el punto inferior). Tomando como origen el centro del tubo <math display=\"inline\"><mi>C</mi></math>, la posición y la velocidad de la partícula <math display=\"inline\"><mi>i</mi></math> son: <math display=\"block\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><mi>X</mi><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>a</mi><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mi>a</mi><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup></mrow></math>. Como el tubo no tiene masa, la masa del conjunto móvil es <math display=\"inline\"><mi>M</mi></math> (el bloque) y su velocidad <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math>. Sumando la energía cinética de las dos partículas y la del carrito, y tomando la potencial de la gravedad, <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>a</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> y la lagrangiana es <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math>: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>a</mi><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>X</mi></math> no aparece explícitamente en <math display=\"inline\"><mi>L</mi></math>: es una coordenada cíclica, y el momento canónico correspondiente —el momento lineal horizontal total del sistema— es una constante del movimiento: <math display=\"block\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Situándonos en la referencia del centro de masas (<math display=\"inline\"><mrow><msub><mi>p</mi><mi>X</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, es decir, todo parte del reposo), <math display=\"block\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>a</mi></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> El carrito solo se mueve por la reacción de las partículas: por sí mismo no tiene ningún impulso."
    },
    {
     "mota": "testua",
     "html": "Desarrollando la ecuación de Euler-Lagrange de <math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math> —los términos de la regla de la cadena se anulan entre sí— queda una forma sencilla, igual para cada coordenada: <math display=\"block\"><mrow><mi>a</mi><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>+</mo><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo></mrow></math> donde <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover></math> es la aceleración del carrito, obtenida de la relación de momentos anterior. El par acopla la oscilación de cada partícula y el retroceso del carrito."
    },
    {
     "mota": "testua",
     "html": "En oscilaciones pequeñas (<math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math> pequeños) es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><msub><mi>θ</mi><mi>i</mi></msub></mrow></math>, y <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> es un pequeño de primer orden; por tanto <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̈</mo></mover><mo>≈</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Sustituyendo y dividiendo por <math display=\"inline\"><mi>a</mi></math>, se obtienen las ecuaciones lineales: <math display=\"block\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>−</mo><mfrac><mi>m</mi><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>.</mi></mrow></math> Se han acoplado dos ecuaciones: el acoplamiento lo produce el retroceso del carrito (el término del paréntesis), y afecta por igual a las dos partículas."
    },
    {
     "mota": "testua",
     "html": "Para desacoplar las ecuaciones introducimos las coordenadas normales: la suma <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math> y la diferencia <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msub><mi>θ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>. <strong>Sumando</strong> las dos ecuaciones, el término de acoplamiento se duplica y queda solo <math display=\"inline\"><mi>S</mi></math>: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>S</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>S</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mi>M</mi><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mover><mi>S</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>S</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>S</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>S</mi><mn>2</mn></msubsup><mi>S</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>S</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>M</mi><mi>a</mi></mrow></mfrac><mi>.</mi></mrow></math> <strong>Restando</strong> las dos ecuaciones, en cambio, el término de acoplamiento se elimina por completo (pues el del paréntesis es igual en ambas): <math display=\"block\"><mrow><mover><mi>D</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>A</mi><mn>2</mn></msubsup><mi>D</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>A</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>.</mi></mrow></math> Así pues, los dos modos normales son estos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Modo simétrico</strong> (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>): las dos partículas oscilan en fase; la frecuencia es <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>S</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>.",
      "<strong>Modo antisimétrico</strong> (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>): las partículas oscilan en oposición de fase; la frecuencia es <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mover><mi>S</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, en el modo antisimétrico (<math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>) el carrito está completamente quieto en todo instante; en el modo simétrico, en cambio, retrocede con amplitud <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mi>a</mi><msub><mi>θ</mi><mn>0</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (siendo <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> la amplitud de las partículas)."
    },
    {
     "mota": "testua",
     "html": "Aquí está el resultado más elegante. La frecuencia del modo antisimétrico, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>, es exactamente la de un péndulo de soporte <strong>fijo</strong> —totalmente independiente de <math display=\"inline\"><mi>M</mi></math> y de <math display=\"inline\"><mi>m</mi></math>—. La razón es transparente: cuando las dos partículas oscilan en oposición de fase, el momento horizontal que cada una transmite al carrito anula exactamente el de la otra; el carrito no tiene motivo para retroceder, se queda quieto, y cada partícula oscila como sobre un soporte fijo. El carrito es <strong>transparente</strong> para este modo. El modo simétrico, en cambio, es el resultado de la semilla original, pero con las dos partículas comportándose como un único cuerpo de masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>: es <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>S</mi><mn>2</mn></msubsup><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir, la sustitución <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>2</mn><mi>m</mi></mrow></math> en la semilla (<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). En este caso las dos partículas empujan juntas el carrito, este retrocede, y ese retroceso endurece la oscilación: <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>S</mi></msub><mo>&gt;</mo><msub><mi>ω</mi><mi>A</mi></msub></mrow></math> siempre. El carrito libre, por tanto, no trata igual los dos modos: eleva el simétrico y deja intacto el antisimétrico."
    },
    {
     "mota": "testua",
     "html": "Por último, supongamos que desplazamos <strong>una</strong> sola partícula (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) y soltamos ambas en reposo. En los modos normales, las condiciones iniciales son <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>D</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; por tanto <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>S</mi></msub><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>A</mi></msub><mi>t</mi></mrow></math>, y el movimiento de cada partícula es la superposición de las dos frecuencias: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>−</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>+</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>−</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>+</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Este es el fenómeno de los <strong>batimientos</strong>: la energía pasa de una partícula a otra y vuelve, con periodo <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>S</mi></msub><mo>−</mo><msub><mi>ω</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. En el instante en que la primera partícula está en reposo, es la segunda la que oscila con toda la amplitud. Lo esencial: esa transferencia de energía la canaliza solo el carrito —pues es el único camino que acopla las dos partículas—. Se ve claramente en el límite <math display=\"inline\"><mrow><mi>M</mi><mo>→</mo><mi>∞</mi></mrow></math>: entonces <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>S</mi></msub><mo>→</mo><msub><mi>ω</mi><mi>A</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>, el periodo de los batimientos tiende a infinito y la transferencia desaparece; un carrito pesado no puede retroceder, no puede transportar momento entre las partículas, y ambas se convierten en péndulos independientes, con la misma frecuencia <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></math>. El límite <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> da lo mismo desde el otro extremo: las partículas ligeras no mueven el carrito, el acoplamiento se debilita y las dos frecuencias se juntan en <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></math>. Al revés, cuanto menor es <math display=\"inline\"><mi>M</mi></math>, mayor es el acoplamiento y más rápidos los batimientos."
    },
    {
     "mota": "testua",
     "html": "Que las dos masas sean iguales hace exacto el desacoplamiento; si fueran distintas, los modos propios perderían las formas <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></math> y se mezclarían, pero la naturaleza del acoplamiento —el retroceso del carrito— sería la misma. En cuanto a las dimensiones, las dos frecuencias son de escala <math display=\"inline\"><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></math>, como corresponde a una oscilación gravitatoria."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "La hamiltoniana",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>hamiltoniana</strong> del sistema mecánico es la siguiente magnitud, con dimensiones de energía:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cartesianas]"
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en el caso de la lagrangiana (6.123), por los resultados (6.124) tenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>H</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msub><mi>p</mi><mi>x</mi></msub><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><msub><mi>p</mi><mi>y</mi></msub><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><msub><mi>p</mi><mi>z</mi></msub><mo>−</mo><mi>L</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi><mi>.</mi></mtd></mtr></mtable></math> La hamiltoniana es igual a la energía mecánica <em>en este caso</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que lo mismo ocurre en coordenadas cilíndricas y esféricas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pero <em>la hamiltoniana no es siempre la energía mecánica.</em>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la hamiltoniana del sistema de la figura 6.3 es <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y que, por tanto, <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> es distinta de la energía mecánica."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La hamiltoniana y la energía mecánica"
    },
    {
     "mota": "testua",
     "html": "A continuación daremos condiciones suficientes para que la hamiltoniana sea igual a la energía mecánica. Para ello diremos que un sistema mecánico es <strong>natural</strong> si (además de tener ligaduras holónomas e ideales)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "las fuerzas activas son conservativas, <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "y el tiempo no aparece explícitamente en las ecuaciones de transformación (6.63) (porque todas las ligaduras son fijas): <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "Con esta definición, el significado de la hamiltoniana es el siguiente: <em>la hamiltoniana de los sistemas mecánicos naturales es igual a la energía mecánica</em>: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mi>.</mi></mrow></math> En efecto, si en las ecuaciones de transformación (6.63) el tiempo no aparece explícitamente, las velocidades (6.84) se expresan de esta manera en coordenadas generalizadas: <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mi>.</mi></mrow></math> La energía mecánica es en este caso así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>⋅</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>l</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>l</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>j</mi><mi>l</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>l</mi></msub><mo>,</mo></mrow></math> donde los coeficientes simétricos de esta forma cuadrática se definen así: <math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>j</mi><mi>l</mi></mrow></msub><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>m</mi><mi>k</mi></msub><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>⋅</mo><mfrac><mrow><mi>∂</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>l</mi></msub></mrow></mfrac><mo>=</mo><msub><mi>a</mi><mrow><mi>l</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> Aunque estos coeficientes dependen de las coordenadas generalizadas <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math>, son independientes de las velocidades generalizadas <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> y, cambiando los nombres de los índices mudos de suma, obtenemos <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>l</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>l</mi></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math>, y de ahí <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>2</mn><mi>T</mi><mi>.</mi></mrow></math> Este resultado, caso particular del conocido teorema de Euler de las funciones homogéneas, junto con la definición (6.132) de la hamiltoniana y (6.136), completa la demostración del teorema: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><mn>2</mn><mi>T</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "Como el sistema de la figura 6.7 es natural, la energía mecánica (6.110) es la hamiltoniana y, usando la energía potencial (6.111), podemos escribirla directamente: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la hamiltoniana del péndulo simple es la siguiente: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El principio de conservación de la hamiltoniana: la integral de Jacobi<span class=\"j-oin\">[A esta constante del movimiento también se la llama integral de Painlevé.]</span>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto del tiempo la definición (6.132) de la hamiltoniana, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mi>L</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Como la derivada total respecto del tiempo se calcula a lo largo del movimiento, los paréntesis de la última suma son nulos, en virtud de las ecuaciones de Lagrange. Por tanto, <em>durante el movimiento</em>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>H</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se cumple. (Para subrayar la diferencia entre derivadas totales y parciales no hemos usado aquí la notación abreviada equivalente <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>.) <br> Sabemos ya cuándo se conserva la hamiltoniana: <em>la hamiltoniana es una constante del movimiento si y solo si el tiempo no aparece explícitamente en la lagrangiana, es decir, cuando la lagrangiana es invariante bajo traslaciones temporales</em>. Como en el apartado 6.5.1 (y en el problema 6.118), a una simetría le corresponde una ley de conservación. <br> Debería quedar claro que este resultado y los dos del apartado 6.6.1 son totalmente independientes."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "A veces el sistema mecánico es natural y la lagrangiana es independiente del tiempo: se cumplirán los dos resultados y la hamiltoniana será igual a la energía mecánica y una constante del movimiento. Así ocurre, por ejemplo, con la hamiltoniana (6.145) del plano inclinado móvil y con la (6.146) del péndulo simple."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si el sistema no es natural, puede ocurrir que la hamiltoniana sea una constante del movimiento aunque no sea la energía mecánica, porque el tiempo no aparece explícitamente en la lagrangiana. Por ejemplo, en el sistema de la figura 6.3 la ligadura es móvil —en las ecuaciones de ligadura (6.30)–(6.31) el tiempo aparece explícitamente— y, como vimos en el ejercicio 6.18, la hamiltoniana no es la energía mecánica. Sin embargo, se conserva. La energía mecánica, en cambio, no es una constante del movimiento, pues para que la velocidad angular <math display=\"inline\"><mi>ω</mi></math> sea constante hace falta alguna influencia externa que realice trabajo (quizá un motor)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "También puede ocurrir lo contrario y que, aunque el sistema sea natural, la hamiltoniana, igual a la energía mecánica, no se conserve. Por ejemplo, eso ocurriría en el sistema (6.123) si <math display=\"inline\"><mrow><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math> (recuérdese el problema 1.53)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Por supuesto, hay un cuarto caso: puede ocurrir que la hamiltoniana sea distinta de la energía mecánica y además variable. Basta, por ejemplo, que en el sistema del ejercicio 6.18 la velocidad <math display=\"inline\"><mi>ω</mi></math> sea variable (si es del tipo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>α</mi><mi>t</mi></mrow></math> o si cambia según otra ley conocida)."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Barra giratoria forzada: hamiltoniana y potencia del motor"
    },
    {
     "mota": "testua",
     "html": "<em>En el extremo de una barra rígida y sin masa de longitud <math display=\"inline\"><mi>ℓ</mi></math> hay una partícula de masa <math display=\"inline\"><mi>m</mi></math>; el otro extremo\nestá articulado (sin rozamiento) en un punto fijo <math display=\"inline\"><mi>O</mi></math> de un eje vertical. Un motor externo obliga al plano vertical\nen que está la barra a girar alrededor del eje con velocidad angular constante <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. Dentro de ese plano\nla barra puede balancearse libremente; sea <math display=\"inline\"><mi>θ</mi></math> el ángulo que forma la barra con la vertical inferior.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>,\n97Feb04 (p. 16–17), donde una masa <math display=\"inline\"><mi>M</mi></math> deslizaba con un muelle (<math display=\"inline\"><mi>k</mi></math>) por una barra giratoria de inclinación fija y se preguntaba si la hamiltoniana coincide con la energía mecánica. Aquí se ha cambiado el dispositivo\n(barra rígida; el grado de libertad es el ángulo <math display=\"inline\"><mi>θ</mi></math>; sin muelle), y se han añadido el momento y\nla potencia del motor, la igualdad exacta <math display=\"inline\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi></mrow></math> y los modos normales.]</span> <br>\n<strong>(a)</strong> Usando el formalismo lagrangiano, obtén la ecuación del movimiento de <math display=\"inline\"><mi>θ</mi></math> y redúcela a un problema unidimensional\nequivalente, escribiendo el potencial efectivo <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>(b)</strong> Pasa a la hamiltoniana: define\nel momento conjugado <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math>, escribe <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><msub><mi>p</mi><mi>θ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y las ecuaciones de Hamilton; ¿es <math display=\"inline\"><mi>H</mi></math> una constante del movimiento? <strong>(c)</strong> ¿Coincide <math display=\"inline\"><mi>H</mi></math> con la energía mecánica <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math>? Calcula <math display=\"inline\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi></mrow></math>, interpreta y demuestra que <math display=\"inline\"><mi>E</mi></math>\nno se conserva. <strong>(d)</strong> Halla el momento <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que el motor debe ejercer respecto al eje para mantener <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y la potencia <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que aporta; comprueba que <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover></mrow></math> (comprobación independiente) y demuestra\nque en un balanceo completo de <math display=\"inline\"><mi>θ</mi></math> el trabajo neto del motor es cero. <strong>(e)</strong> Estudia los equilibrios relativos (<math display=\"inline\"><mi>θ</mi></math>\nconstante) y su estabilidad; obtén las frecuencias de oscilación en torno a los equilibrios estables, identifica\nla velocidad crítica <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> y estudia los límites <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/210761bcb2443976.svg",
     "zabalera": 222
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[La barra rígida (masa <math display=\"inline\"><mi>m</mi></math> en el extremo) se balancea libremente en su plano mientras el motor la fuerza a girar con <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> constante alrededor del eje vertical; <math display=\"inline\"><mi>θ</mi></math> se mide desde la vertical inferior.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El único grado de libertad es <math display=\"inline\"><mi>θ</mi></math>: el giro <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>t</mi></mrow></math> lo impone el motor (ligadura reónoma). La partícula está a distancia <math display=\"inline\"><mrow><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> del eje y su altura es <math display=\"inline\"><mrow><mi>−</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>; como la componente <math display=\"inline\"><mrow><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> de la velocidad en el plano y la componente <math display=\"inline\"><mrow><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> producida por el giro son perpendiculares, el cuadrado de la velocidad es <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La lagrangiana es, por tanto: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> La ecuación de Euler-Lagrange de <math display=\"inline\"><mi>θ</mi></math> da <math display=\"block\"><mrow><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Esa ecuación puede leerse como <math display=\"inline\"><mrow><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde el potencial efectivo es <math display=\"block\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>: el potencial de la gravedad menos el de la fuerza centrífuga. El sistema se describe, pues, como una única masa que se mueve en <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>, como problema unidimensional equivalente."
    },
    {
     "mota": "testua",
     "html": "Para pasar a la hamiltoniana, el momento conjugado es <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y la transformada de Legendre da <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Las ecuaciones de Hamilton quedan así: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mfrac><msub><mi>p</mi><mi>θ</mi></msub><mrow><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>θ</mi></msub><mo>=</mo><mi>−</mi><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><mi>θ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> y la segunda, con la definición de <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math>, recupera la ecuación del movimiento. <math display=\"inline\"><mi>L</mi></math> (y <math display=\"inline\"><mi>H</mi></math>) no tienen <math display=\"inline\"><mi>t</mi></math> explícito; por tanto <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mi>H</mi></math> es una constante del movimiento. Esta es la integral de Jacobi, una ley de conservación que existe a pesar del giro forzado."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>H</mi></math> no es, sin embargo, la energía mecánica. La energía cinética tiene dos partes, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> (cuadrática en <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>) y <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> (independiente de la velocidad generalizada). En la hamiltoniana <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> entra con signo negativo (<math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math>), pero en la energía mecánica con signo positivo (<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math>); por tanto, <math display=\"block\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> Ambas coinciden solo cuando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (partícula en el eje, arriba o abajo). Como <math display=\"inline\"><mi>H</mi></math> es constante pero <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> cambia con el movimiento, <math display=\"inline\"><mi>E</mi></math> no se conserva: <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> La interpretación es transparente: <math display=\"inline\"><mi>H</mi></math> es la energía total en la referencia giratoria —la energía cinética del balanceo más los potenciales de la gravedad y de la fuerza centrífuga—, que se conserva porque la fuerza de Coriolis no realiza trabajo; <math display=\"inline\"><mi>E</mi></math>, en cambio, es la energía del laboratorio, y pulsa por el trabajo que el motor intercambia con la partícula."
    },
    {
     "mota": "testua",
     "html": "Podemos cuantificar directamente la acción del motor, y esa es la clave del problema. El momento angular respecto al eje vertical es <math display=\"inline\"><mrow><msub><mi>L</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. La gravedad (vertical) y la reacción de la articulación en <math display=\"inline\"><mi>O</mi></math> (en el propio eje) no hacen momento respecto al eje; por tanto el momento que debe aportar el motor es <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msub><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y la potencia que aporta <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>N</mi><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Este resultado coincide exactamente con <math display=\"inline\"><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover></math>: el motor es el único agente que hace variar <math display=\"inline\"><mi>E</mi></math> —la articulación no realiza trabajo (punto fijo) y la gravedad está recogida en <math display=\"inline\"><mi>V</mi></math>—, como cabía esperar. Es más: cuando <math display=\"inline\"><mi>θ</mi></math> se balancea entre dos puntos de retorno el movimiento es periódico, y como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>H</mi><mo>+</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> es una función unívoca del punto del espacio de fases, en un periodo completo la variación de <math display=\"inline\"><mi>E</mi></math> es cero, <math display=\"block\"><mrow><msub><mi>W</mi><mrow><mtext mathvariant=\"normal\">motor </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo>∮</mo><mi>P</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">d</mi><mi>t</mi><mo>=</mo><mo>∮</mo><mi mathvariant=\"normal\">d</mi><mi>E</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El motor aporta potencia positiva a la partícula durante una parte del balanceo y negativa durante las otras (frenando), pero el trabajo neto es cero en cada periodo, porque no hay rozamiento. Es contrario a la intuición: el motor que fuerza el giro no realiza trabajo medio, aunque intercambie energía con la partícula en todo instante —<math display=\"inline\"><mi>E</mi></math> pulsa, pero <math display=\"inline\"><mi>H</mi></math> (la energía del sistema giratorio) es exactamente fija."
    },
    {
     "mota": "testua",
     "html": "Por último, los equilibrios relativos salen de <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (abajo), <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math> (arriba) y, si <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>≥</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></math>, una inclinación <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub><mo>=</mo><mi>g</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La estabilidad la decide <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. En el punto inferior es <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, positiva (estable) si <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&lt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></msqrt></mrow></math> es la velocidad crítica; la frecuencia de las oscilaciones pequeñas es <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>. Al acercarse a <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mn>0</mn></mrow></math>: el modo se ablanda (frenado crítico), pues la fuerza centrífuga anula el efecto restaurador de la gravedad. Cuando <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> el punto inferior es inestable y la partícula sube a la inclinación <math display=\"inline\"><msub><mi>θ</mi><mo>*</mo></msub></math>; allí <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mo>*</mo></msub><mo>&gt;</mo><mn>0</mn></mrow></math> es siempre (el cálculo sale sustituyendo <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub></mrow></math>), es decir, el equilibrio inclinado es siempre estable cuando existe, y la frecuencia en torno a él es <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub></mrow></math>. El resultado es elegante: tanto el ángulo <math display=\"inline\"><msub><mi>θ</mi><mo>*</mo></msub></math> (ley del regulador centrífugo, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub><mo>=</mo><mi>g</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) como la frecuencia <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mo>*</mo></msub></mrow></math> son totalmente independientes de la masa <math display=\"inline\"><mi>m</mi></math> —solo los fijan la geometría y <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>—. Los límites completan el cuadro: cuando <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn></mrow></math> se recupera <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></msqrt></mrow></math>, es decir, la frecuencia del péndulo ordinario; cuando <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>→</mo><mi>∞</mi></mrow></math> resulta <math display=\"inline\"><mrow><msub><mi>θ</mi><mo>*</mo></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (barra casi horizontal) y <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>*</mo></msub><mo>→</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. En <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> las dos ramas se encuentran: el equilibrio inferior pierde la estabilidad y de él nace la rama inclinada (bifurcación continua), en el punto en que <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, donde las oscilaciones se vuelven anarmónicas. Así, la hamiltoniana y el balance del motor muestran juntos el núcleo de la mecánica analítica: un sistema forzado —que no conserva su energía mecánica— puede tener todavía una ley de conservación exacta, y el motor que lo hace girar, sorprendentemente, no realiza trabajo neto en cada balanceo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tubo giratorio, muelle y velocidad crítica"
    },
    {
     "mota": "testua",
     "html": "<em>En un punto fijo <math display=\"inline\"><mi>O</mi></math> hay una bisagra, y unido a ella un tubo recto fino que forma un ángulo constante <math display=\"inline\"><mi>α</mi></math> con el eje\nvertical; el tubo puede girar alrededor de ese eje y se extiende hacia abajo y hacia fuera desde <math display=\"inline\"><mi>O</mi></math>. Dentro del tubo puede deslizar una partícula de masa <math display=\"inline\"><mi>m</mi></math>\nsin rozamiento, unida a <math display=\"inline\"><mi>O</mi></math> por un muelle de constante <math display=\"inline\"><mi>k</mi></math> (longitud natural despreciable: el muelle\nejerce sobre ella hacia <math display=\"inline\"><mi>O</mi></math> una fuerza <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>s</mi></mrow></math>, siendo <math display=\"inline\"><mi>s</mi></math> la distancia de la partícula a <math display=\"inline\"><mi>O</mi></math> a lo largo del tubo). La gravedad\nactúa hacia abajo.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>,\n97Mar04 (p. 26–27), donde el tubo no tenía masa, el ángulo era fijo (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) y, tras un\nimpulso inicial dado de golpe seco <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>, se pedía el <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> mínimo necesario para que la partícula saliera por el extremo. Aquí se ha generalizado el ángulo (<math display=\"inline\"><mi>α</mi></math>), se ha añadido un muelle, se ha llevado la geometría a la cónica (colgada desde arriba) y se han introducido las nuevas preguntas del formalismo hamiltoniano: la integral de Jacobi, el equilibrio,\nla estabilidad y el modo normal, la velocidad crítica y la diferencia entre el tubo forzado y el libre.]</span>\n<br>\n<strong>(a)</strong> Un motor mantiene la velocidad angular constante <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math>. Usando el formalismo hamiltoniano,\nobtén la ecuación del movimiento de la coordenada <math display=\"inline\"><mi>s</mi></math>; demuestra que la energía mecánica NO se conserva\n(pues el motor realiza trabajo) pero la integral de Jacobi sí, e identifica el potencial\nefectivo <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>(b)</strong> Halla la posición de equilibrio <math display=\"inline\"><msup><mi>s</mi><mo>*</mo></msup></math> y demuestra que existe una velocidad angular crítica <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math>,\npor encima de la cual no hay equilibrio. <strong>(c)</strong> Estudia la estabilidad de <math display=\"inline\"><msup><mi>s</mi><mo>*</mo></msup></math> y obtén la frecuencia <math display=\"inline\"><mi>ω</mi></math> de las oscilaciones pequeñas;\ndemuestra que <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math> cuando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> (modo blando). <strong>(d)</strong> Interpreta\nel umbral <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math>. <strong>(e)</strong> Apaga el motor: ahora el tubo (sin masa) gira libremente y se conserva el momento angular <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> respecto\nal eje; demuestra que el equilibrio es estable para TODO <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>\n(sin umbral) y explica la diferencia cualitativa entre el tubo forzado y el libre.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/8fe830a14529b5bd.svg",
     "zabalera": 216
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El tubo gira con velocidad <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> alrededor del eje vertical; <math display=\"inline\"><mi>s</mi></math> es la posición de la partícula a lo largo del tubo desde <math display=\"inline\"><mi>O</mi></math>, y la línea de puntos su trayectoria de giro.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usaremos dos coordenadas generalizadas: <math display=\"inline\"><mi>s</mi></math> (distancia de la partícula a <math display=\"inline\"><mi>O</mi></math> a lo largo del tubo) y <math display=\"inline\"><mi>φ</mi></math> (ángulo de giro del tubo alrededor del eje vertical). Como el tubo forma un ángulo fijo <math display=\"inline\"><mi>α</mi></math>, la partícula está a distancia <math display=\"inline\"><mrow><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> del eje y a profundidad <math display=\"inline\"><mrow><mi>s</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> por debajo de <math display=\"inline\"><mi>O</mi></math>. Su velocidad tiene dos componentes perpendiculares —<math display=\"inline\"><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></math> a lo largo del tubo y <math display=\"inline\"><mrow><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> producida por el giro—, luego <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. La gravedad da el potencial <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi></mrow></math> (cuanto más abajo la partícula, menor energía potencial) y el muelle <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math>; la lagrangiana es, por tanto: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Los momentos canónicos son <math display=\"inline\"><mrow><msub><mi>p</mi><mi>s</mi></msub><mo>=</mo><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>; el último es el momento angular respecto al eje, <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>. Mediante la transformación de Legendre obtenemos la función hamiltoniana: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi>p</mi><mi>φ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cuando el motor impone <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math>, <math display=\"inline\"><mi>φ</mi></math> no es una coordenada libre: sustituyéndolo nos queda la lagrangiana reducida de <math display=\"inline\"><mi>s</mi></math>, <math display=\"block\"><mrow><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover></math> no tiene <math display=\"inline\"><mi>t</mi></math> explícito (<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> constante), luego se conserva la función de energía de Jacobi: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mfrac><mrow><mi>∂</mi><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi>∂</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mover><mi>L</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mi>.</mi></mrow></math> La ecuación del movimiento es, por tanto, <math display=\"block\"><mrow><mi>m</mi><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>s</mi><mo>+</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> Obsérvese que <math display=\"inline\"><mi>h</mi></math> no es la energía mecánica: es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mi>h</mi><mo>+</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup></mrow></math>, y <math display=\"inline\"><mi>E</mi></math> no se conserva. La diferencia la explica el trabajo del motor: para mantener <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math>, el motor debe aportar un momento <math display=\"inline\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>φ</mi></msub><mo>=</mo><mn>2</mn><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y su potencia es exactamente <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>φ</mi></msub><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. En un sistema reónomo lo que se conserva es la integral de Jacobi, no la energía."
    },
    {
     "mota": "testua",
     "html": "El equilibrio está donde se cumple <math display=\"inline\"><mrow><mover><mi>s</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, es decir, en el extremo de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>: <math display=\"block\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>&gt;</mo><mn>0</mn></mrow></math> mientras <math display=\"inline\"><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. La rigidez efectiva del muelle —<math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></math>— desaparece a una velocidad angular crítica: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></mfrac><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mi>.</mi></mrow></math> Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≥</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≤</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> no tiene mínimo para <math display=\"inline\"><mrow><mi>s</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, la fuerza es siempre hacia fuera y la partícula es expulsada del tubo. Es notable que <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math> no dependa de la gravedad (<math display=\"inline\"><mi>g</mi></math>) ni de la longitud natural del muelle: solo aparecen <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>α</mi></math>, pues iguala la curvatura elástica y la centrífuga, sean cuales sean la tensión inicial o el peso."
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><msup><mi>s</mi><mo>*</mo></msup></math> es un equilibrio estable. La frecuencia de las pequeñas oscilaciones en torno a él es <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac></msqrt><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>/</mi><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> es la frecuencia de oscilación sin giro. Al acercarse <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>: el modo se ablanda (soft mode), y a la vez <math display=\"inline\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>→</mo><mi>∞</mi></mrow></math>. El giro &quot;ablanda&quot; el muelle hasta que en <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math> la rigidez se anula por completo."
    },
    {
     "mota": "testua",
     "html": "El umbral <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math> es el límite de una inestabilidad rotacional. En él la fuerza restauradora elástica y la fuerza centrífuga se anulan exactamente, y a la partícula solo la mueve la componente constante de la gravedad: <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi></mrow></math>, sin mínimo. El modo blando (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>) y la divergencia del radio de equilibrio (<math display=\"inline\"><mrow><msup><mi>s</mi><mo>*</mo></msup><mo>→</mo><mi>∞</mi></mrow></math>) son las dos caras del mismo fenómeno: el sistema pierde la capacidad de recuperarse frente a una perturbación infinitesimal. Al superar <math display=\"inline\"><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></math>, la partícula se aleja exponencialmente y sale del tubo —eco de la semilla, donde el giro también expulsaba la partícula; pero aquí el umbral lo fija el muelle, no la geometría pura."
    },
    {
     "mota": "testua",
     "html": "Apaguemos el motor. Como el tubo no tiene masa, el momento angular total respecto al eje es el de la partícula y <math display=\"inline\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub></mrow></math> se conserva; además, ahora <math display=\"inline\"><mi>H</mi></math> no tiene <math display=\"inline\"><mi>t</mi></math> explícito, luego se conserva <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>E</mi></mrow></math> (sin motor, sin trabajo). Eliminando <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>s</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, el potencial efectivo para <math display=\"inline\"><mi>s</mi></math> adopta otra forma: <math display=\"block\"><mrow><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mspace width=\"0.167em\"></mspace><mi>s</mi><mi>.</mi></mrow></math> Ahora el término centrífugo es <math display=\"inline\"><mrow><mi>+</mi><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> —una barrera positiva, divergente en <math display=\"inline\"><mrow><mi>s</mi><mo>→</mo><mn>0</mn></mrow></math>—, y no el término negativo anterior <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>2</mn></msup></mrow></math>. Es siempre <math display=\"inline\"><mrow><msubsup><mi>U</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo>=</mo><mn>3</mn><msubsup><mi>L</mi><mi>z</mi><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mspace width=\"0.167em\"></mspace><msup><mi>s</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: el equilibrio es estable para <strong>todo</strong> valor de <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math>, sin umbral. La diferencia cualitativa está en ese cambio de signo. Con <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> fija, la energía cinética de giro es una función conocida de <math display=\"inline\"><mi>s</mi></math> y se resta en el potencial efectivo (fuerza centrífuga desestabilizadora, alimentada por el motor); con <math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> fijo, en cambio, ir hacia fuera obliga al giro a frenarse (como un patinador que se frena al abrir los brazos) y crea una barrera centrífuga estabilizadora. Un motor puede introducir en el sistema energía sin límite; el giro libre, en cambio, reparte un momento angular fijo a cambio del radio. He ahí una muestra de lo claro que la mecánica analítica distingue los sistemas forzados de los libres."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cuenta estabilizada por un muelle en un raíl giratorio"
    },
    {
     "mota": "testua",
     "html": "<em>Un raíl recto rígido que pasa por un punto fijo <math display=\"inline\"><mi>O</mi></math> forma un ángulo constante <math display=\"inline\"><mi>β</mi></math> con el eje vertical <math display=\"inline\"><mi>e</mi></math>\ny un motor externo lo hace girar alrededor del eje con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>.\nEn el raíl puede deslizar sin rozamiento una cuenta de masa <math display=\"inline\"><mi>m</mi></math>, unida al punto <math display=\"inline\"><mi>O</mi></math> por un muelle ideal\n(constante <math display=\"inline\"><mi>k</mi></math>, de longitud natural despreciable; es decir, fuerza <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>r</mi></mrow></math> a lo largo del raíl).<span class=\"j-oin\">[Semilla:\nEcenarro, <em>Mecánica y Ondas: Problemas de Examen Resueltos y Comentados</em>, 98Feb03 (p. 61), donde una cuenta deslizaba, sin muelle, por la diagonal de <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> de un cuadrado giratorio de lado <math display=\"inline\"><mi>a</mi></math>, y se demostraba que NO había órbita circular estable. Aquí se ha generalizado el ángulo <math display=\"inline\"><mi>β</mi></math>, se ha añadido un muelle —para poder estabilizar la órbita— y se han agregado el estudio de la estabilidad, de la frecuencia de oscilación y de los casos límite.]</span>\nHay gravedad; el raíl no tiene masa y no hay rozamiento. <br>\n<strong>(a)</strong> Escribe la lagrangiana del sistema y obtén la ecuación del movimiento para la posición <math display=\"inline\"><mi>r</mi></math> de la cuenta (a lo largo del raíl, medida desde <math display=\"inline\"><mi>O</mi></math>). <strong>(b)</strong> ¿Se conserva la energía mecánica? Obtén la hamiltoniana y di si coincide con la energía mecánica. <strong>(c)</strong> Escribe el potencial efectivo y halla la posición <math display=\"inline\"><msup><mi>r</mi><mo>*</mo></msup></math> de la órbita circular\n(la cuenta, a distancia fija de <math display=\"inline\"><mi>O</mi></math>, girando). <strong>(d)</strong> Estudia la estabilidad de la órbita: demuestra que es estable si\ny solo si <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math> —ese umbral es independiente de la gravedad— y obtén la frecuencia <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>\nde las oscilaciones pequeñas. <strong>(e)</strong> Recupera el caso sin muelle (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>) y relaciónalo con el resultado de la semilla; estudia los casos límite (<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>) y el comportamiento en el umbral.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/4d273fdad96c50c9.svg",
     "zabalera": 204
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El raíl rígido gira alrededor del eje <math display=\"inline\"><mi>e</mi></math> con <math display=\"inline\"><mi>ω</mi></math>, formando el ángulo fijo <math display=\"inline\"><mi>β</mi></math>; la cuenta <math display=\"inline\"><mi>m</mi></math> desliza en el raíl unida por un muelle (<math display=\"inline\"><mi>k</mi></math>), a distancia <math display=\"inline\"><mi>r</mi></math> de <math display=\"inline\"><mi>O</mi></math>. La cuenta se ha dibujado bajo <math display=\"inline\"><mi>O</mi></math> (posición estable de equilibrio).]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La única coordenada generalizada es <math display=\"inline\"><mi>r</mi></math>: la posición de la cuenta a lo largo del raíl, medida desde <math display=\"inline\"><mi>O</mi></math> (positiva hacia arriba). Como el raíl forma con el eje <math display=\"inline\"><mi>e</mi></math> el ángulo <math display=\"inline\"><mi>β</mi></math>, la altura de la cuenta es <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> y su distancia al eje <math display=\"inline\"><mrow><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>. El cuadrado de la velocidad tiene dos componentes perpendiculares —<math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math> a lo largo del raíl y <math display=\"inline\"><mrow><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mspace width=\"0.167em\"></mspace><mi>ω</mi></mrow></math> producida por el giro—, luego <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>. La energía potencial del muelle es <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> (longitud natural despreciable) y la de la gravedad <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>; así, la lagrangiana queda así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> De la ecuación de Euler-Lagrange de <math display=\"inline\"><mi>r</mi></math> sale la ecuación del movimiento: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> El giro añade un término de &quot;fuerza centrífuga&quot; <math display=\"inline\"><mrow><mi>+</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><mi>r</mi></mrow></math> a la fuerza restauradora <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>r</mi></mrow></math> del muelle: el efecto neto es una rigidez efectiva <math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi></mrow></math>, y ahí está la clave de todo el problema."
    },
    {
     "mota": "testua",
     "html": "Como el motor mantiene <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> constante, el giro es una ligadura dependiente del tiempo (reónoma) y el motor realiza trabajo; en consecuencia, la energía mecánica NO se conserva. La razón formal es esta: la energía cinética no es una función cuadrática homogénea de <math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></math>, sino <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup></mrow></math> es el término que viene del giro. Como <math display=\"inline\"><mi>L</mi></math> no tiene <math display=\"inline\"><mi>t</mi></math> explícito, sin embargo, se conserva la función de energía de Jacobi: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konst. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Escrita en el momento canónico (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover></mrow></math>), la hamiltoniana es idéntica y se conserva: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> Pero NO coincide con la energía mecánica. Calculando esta, <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><msub><mi>T</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math> Este es el núcleo de las preguntas ii-iii de la semilla, ahora enriquecido con el muelle: <math display=\"inline\"><mi>H</mi></math> se conserva (y es un buen guardián del movimiento), pero <math display=\"inline\"><mi>E</mi></math> se aparta de <math display=\"inline\"><mrow><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub></mrow></math> —precisamente la energía que el motor debe aportar o retirar al sistema para mantener constante el giro—."
    },
    {
     "mota": "testua",
     "html": "Para entender el movimiento, escribimos <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde aparece el potencial efectivo: <math display=\"block\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>.</mi></mrow></math> La órbita circular exige <math display=\"inline\"><mi>r</mi></math> constante (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> es el punto de equilibrio, que cumple <math display=\"inline\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msup><mi>r</mi><mo>*</mo></msup><mo>=</mo><mi>−</mi><mfrac><mrow><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></mfrac><mi>.</mi></mrow></math> Esa cuenta está a distancia fija <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> de <math display=\"inline\"><mi>O</mi></math> y traza una circunferencia horizontal de radio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> con velocidad <math display=\"inline\"><mi>ω</mi></math> —esa es la órbita circular—. Cuando <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>r</mi><mo>*</mo></msup><mo>&lt;</mo><mn>0</mn></mrow></math>: la cuenta se sitúa bajo <math display=\"inline\"><mi>O</mi></math>, llevada hacia abajo por la gravedad."
    },
    {
     "mota": "testua",
     "html": "La estabilidad la decide el signo de la curvatura de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mo>″</mo></msubsup><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>. Por tanto, la órbita circular es estable si y solo si <math display=\"block\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mi>.</mi></mrow></math> El resultado es notable: ese umbral es <strong>totalmente independiente</strong> de la gravedad. La gravedad solo fija la posición de la órbita (<math display=\"inline\"><msup><mi>r</mi><mo>*</mo></msup></math>), nunca su estabilidad; lo decide todo la pura pugna entre el muelle y la &quot;fuerza centrífuga&quot;. Cuando es estable, las oscilaciones pequeñas en torno a <math display=\"inline\"><msup><mi>r</mi><mo>*</mo></msup></math> (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msup><mi>r</mi><mo>*</mo></msup><mo>+</mo><mi>η</mi></mrow></math>) cumplen <math display=\"inline\"><mrow><mi>m</mi><mover><mi>η</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>η</mi></mrow></math>, es decir, un modo normal de una sola frecuencia: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow><mi>m</mi></mfrac></msqrt><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></msqrt><mi>.</mi></mrow></math> El giro &quot;ablanda&quot; la frecuencia propia <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> del muelle: si gira suficientemente rápido (<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><msub><mi>ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mi>/</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mn>0</mn></mrow></math> y se pierde la estabilidad."
    },
    {
     "mota": "testua",
     "html": "Los casos límite completan el cuadro. <strong>(i)</strong> Sin muelle (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> es una parábola invertida, que siempre tiene un único máximo en <math display=\"inline\"><mrow><msubsup><mi>r</mi><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo>*</mo></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mi mathvariant=\"normal\">cos</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; la órbita circular <strong>existe</strong>, pero es siempre <strong>inestable</strong>. En <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> sale <math display=\"inline\"><mrow><msubsup><mi>r</mi><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo>*</mo></msubsup><mo>=</mo><msqrt><mn>2</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>g</mi><mi>/</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> —el mismo resultado de la diagonal del cuadrado giratorio de la semilla, el de la cuenta—: ese es precisamente el límite <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math> de nuestro sistema. El muelle es el ingrediente que le faltaba al dispositivo de la semilla para tener una órbita estable. <strong>(ii)</strong> <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math> (raíl alineado con el eje): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>, el giro no actúa sobre el raíl y el sistema es siempre estable (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>); la cuenta solo oscila a lo largo del eje. <strong>(iii)</strong> <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (raíl horizontal): el ablandamiento centrífugo es máximo y se necesita <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. <strong>(iv)</strong> <math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math> (motor parado): <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><msup><mi>r</mi><mo>*</mo></msup><mo>→</mo><mi>−</mi><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>β</mi><mi>/</mi><mi>k</mi></mrow></math>, el alargamiento estático que toma el muelle bajo la gravedad. <strong>(v)</strong> Justo en el umbral (<math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo></msup></mrow></math>): <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>r</mi><mo>*</mo></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>→</mo><mi>∞</mi></mrow></math> —el punto de equilibrio escapa al infinito y la cuenta es expulsada del raíl—; es una bifurcación limpia, el instante en que la fuerza centrífuga supera al muelle."
    },
    {
     "mota": "testua",
     "html": "En resumen, este dispositivo forzado lleva la idea de la semilla hasta el extremo. En un raíl giratorio puro (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>) el potencial <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi><mspace width=\"0.167em\"></mspace><msup><mi>r</mi><mn>2</mn></msup></mrow></math> de la &quot;fuerza centrífuga&quot; solo tiene un pico (un máximo) y hace inestable cualquier órbita; un muelle le añade el término restaurador <math display=\"inline\"><mrow><mi>+</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, y cuando <math display=\"inline\"><mi>k</mi></math> supera a la centrífuga surge un pozo de potencial estable. En la referencia giratoria no inercial la lectura es transparente: sobre la cuenta actúa la fuerza centrífuga <math display=\"inline\"><mrow><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> (hacia fuera del eje), cuya componente a lo largo del raíl es <math display=\"inline\"><mrow><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>r</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>β</mi></mrow></math>, y esta pugna con la fuerza <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>r</mi></mrow></math> del muelle a lo largo del raíl; la gravedad solo desplaza el equilibrio. <math display=\"inline\"><mi>H</mi></math> (Jacobi) se conserva siempre, aunque <math display=\"inline\"><mi>E</mi></math> no; eso muestra por qué <math display=\"inline\"><mi>H</mi></math> —y no <math display=\"inline\"><mi>E</mi></math>— es la medida directa del movimiento estable en estos sistemas forzados."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aro giratorio libre y partícula"
    },
    {
     "mota": "testua",
     "html": "<em>Un aro circular liso de masa <math display=\"inline\"><mi>M</mi></math> y radio <math display=\"inline\"><mi>a</mi></math> puede girar sin rozamiento alrededor de su diámetro vertical.\nEn el instante en que la velocidad angular del aro es <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>, una partícula de masa <math display=\"inline\"><mi>m</mi></math> empieza a deslizar desde el reposo\n(respecto al aro) desde el punto más alto del aro.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas:\nProblemas de Examen Resueltos y Comentados</em>, 98Jun01 (p. 65); el original solo pedía (a) y (b). Aquí se han añadido\nel resumen del potencial efectivo, el resultado en el punto inferior y la comparación con el aro forzado.]</span> <br>\n<strong>(a)</strong> Usando la mecánica lagrangiana, halla la velocidad angular <math display=\"inline\"><mi>ω</mi></math> del aro cuando la partícula pasa por el extremo del diámetro\nhorizontal. <strong>(b)</strong> Halla la velocidad de la partícula respecto al aro en ese instante. <strong>(c)</strong> Escribe\nel problema unidimensional equivalente para <math display=\"inline\"><mi>θ</mi></math> (potencial efectivo). <strong>(d)</strong> Demuestra que la partícula llega\nal punto inferior del aro con velocidad (respecto al aro) <math display=\"inline\"><mrow><mn>2</mn><msqrt><mrow><mi>g</mi><mi>a</mi></mrow></msqrt></mrow></math>, independiente de <math display=\"inline\"><mi>M</mi></math> y de <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. <strong>(e)</strong> Compáralo con lo que ocurriría si el aro fuera forzado con <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> constante.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/cde785f8a6d7d2c0.svg",
     "zabalera": 224
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El aro gira con velocidad <math display=\"inline\"><mi>ω</mi></math> alrededor de su diámetro vertical; <math display=\"inline\"><mi>θ</mi></math> se mide desde el punto más alto.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomamos dos coordenadas generalizadas: <math display=\"inline\"><mi>φ</mi></math> (giro del aro alrededor del eje vertical) y <math display=\"inline\"><mi>θ</mi></math> (posición de la partícula en el aro, medida desde el punto más alto). La partícula está a distancia <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> del eje y su altura es <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>; el cuadrado de su velocidad es <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, pues la componente <math display=\"inline\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> a lo largo del aro y la componente <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> producida por el giro son perpendiculares. El momento de inercia del aro respecto a su diámetro es <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. La lagrangiana es, por tanto: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mi>φ</mi></math> es cíclica: el momento canónico correspondiente (el momento angular total respecto al eje) es una constante del movimiento. Al principio <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (arriba, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) y <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, luego <math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msub><mi>ω</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>M</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mi>.</mi></mrow></math> En el diámetro horizontal (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>), la velocidad angular del aro es esta: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>M</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Como el sistema es natural y <math display=\"inline\"><mi>t</mi></math> no aparece explícitamente, se conserva la energía mecánica. El valor inicial es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi></mrow></math> (arriba, partícula en reposo y en el eje). Despejando <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> de la igualdad de energías en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, la velocidad de la partícula respecto al aro —es decir, <math display=\"inline\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>—: <math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">erl </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mrow><mfrac><mrow><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>g</mi><mi>a</mi></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para entender mejor el movimiento, podemos eliminar <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> mediante el momento angular y obtener el problema unidimensional equivalente para <math display=\"inline\"><mi>θ</mi></math>. La energía se escribe así, <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>M</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> donde el primer término es el potencial de la &quot;fuerza centrífuga&quot; que viene de la inercia del aro libre. La partícula puede describirse ahora como una masa única que se mueve en el potencial <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>."
    },
    {
     "mota": "testua",
     "html": "En el punto inferior sale un resultado elegante. Allí (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>) vuelve a ser <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>M</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mi>m</mi><mi>g</mi><mi>a</mi></mrow></math>, y <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>E</mi><mo>−</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>a</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><msqrt><mrow><mi>g</mi><mi>a</mi></mrow></msqrt><mi>.</mi></mrow></math> La partícula llega al punto inferior con velocidad <math display=\"inline\"><mrow><mn>2</mn><msqrt><mrow><mi>g</mi><mi>a</mi></mrow></msqrt></mrow></math> (respecto al aro), <strong>totalmente independiente</strong> de <math display=\"inline\"><mi>M</mi></math> y de <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. La razón es transparente: arriba y abajo la partícula está en el eje (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>) y no transporta momento angular; por tanto, el aro vuelve a <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> en ambos puntos, el potencial de la &quot;fuerza centrífuga&quot; es el mismo y toda la energía <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><mi>g</mi><mi>a</mi></mrow></math> liberada por la gravedad va al movimiento de la partícula —el equivalente de una caída libre de salto de altura <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>—."
    },
    {
     "mota": "testua",
     "html": "Por último, es instructivo comparar el caso del aro <strong>libre</strong> con el del aro <strong>forzado</strong>. Si un motor mantuviera <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math> constante, <math display=\"inline\"><mi>φ</mi></math> no sería una coordenada libre: la energía mecánica no se conservaría (pues el motor realiza trabajo) y el potencial efectivo de la partícula sería <math display=\"inline\"><mrow><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, que muestra una bifurcación (en horquilla, pitchfork) en <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>: si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&gt;</mo><msub><mi mathvariant=\"normal\">Ω</mi><mi>c</mi></msub></mrow></math>, además del equilibrio inferior aparecen nuevos equilibrios estables fuera del eje. En el aro libre, en cambio, tenemos dos constantes del movimiento (<math display=\"inline\"><msub><mi>L</mi><mi>z</mi></msub></math> y <math display=\"inline\"><mi>E</mi></math>) y ningún motor: el aro se frena cuando la partícula tiene un <math display=\"inline\"><mi>r</mi></math> mayor, repartiendo el momento angular entre los dos. La diferencia entre los dos sistemas —uno forzado, el otro libre— es un excelente ejemplo de lo claro que la mecánica analítica los distingue."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Regulador de bolas: estabilidad del equilibrio relativo y modos normales"
    },
    {
     "mota": "testua",
     "html": "<em>Un regulador de bolas (figura) gira alrededor de un eje vertical fijo con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>\nimpuesta por un motor. Las cuatro barras no tienen masa y tienen la misma longitud <math display=\"inline\"><mi>l</mi></math>: las dos de arriba\nsostienen dos bolas de masa <math display=\"inline\"><mi>m</mi></math> (una frente a la otra) y las dos de abajo un cuerpo de masa <math display=\"inline\"><mi>M</mi></math>,\nque puede deslizar sin rozamiento a lo largo del eje. El ángulo <math display=\"inline\"><mi>θ</mi></math> que forman las barras con el eje vertical\nes la única coordenada generalizada.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas\nde Examen Resueltos y Comentados</em>, 99Feb04 (p. 94). El original solo pedía la ecuación del movimiento y las posiciones de equilibrio;\naquí se han añadido la estabilidad, los modos normales, la bifurcación y la distinción entre la energía mecánica y la integral de Jacobi.]</span> <br>\n<strong>(a)</strong> Usando el formalismo lagrangiano, obtén la ecuación del movimiento de <math display=\"inline\"><mi>θ</mi></math> e identifica un potencial\nefectivo <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para su dinámica. <strong>(b)</strong> Halla las posiciones de equilibrio relativo y demuestra que el\nequilibrio inclinado solo existe cuando <math display=\"inline\"><mrow><mi>ω</mi><mo>≥</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>; determina <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>. <strong>(c)</strong> Estudia la\nestabilidad de cada equilibrio y obtén las frecuencias de las oscilaciones pequeñas (modos normales). <strong>(d)</strong> Describe la\nbifurcación (en horquilla, pitchfork) que ocurre en <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>. <strong>(e)</strong> En el formalismo hamiltoniano, muestra que la energía mecánica NO se conserva\npero la integral de Jacobi SÍ; calcula la diferencia entre ambas y la potencia que desarrolla el motor.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/23ebe7ab344e5928.svg",
     "zabalera": 165
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El regulador de bolas gira con velocidad <math display=\"inline\"><mi>ω</mi></math> alrededor del eje vertical; <math display=\"inline\"><mi>θ</mi></math> es el ángulo que forman las barras con el eje, y el cuerpo <math display=\"inline\"><mi>M</mi></math> desliza verticalmente a lo largo del eje.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomamos como única coordenada generalizada <math display=\"inline\"><mi>θ</mi></math>; el acimut <math display=\"inline\"><mi>φ</mi></math> lo fuerza el motor a la constante <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math>. Cada bola está a distancia <math display=\"inline\"><mrow><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> del eje, a altura <math display=\"inline\"><mrow><mi>−</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, y el cuerpo <math display=\"inline\"><mi>M</mi></math> en el propio eje, a altura <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> (su cota depende solo de <math display=\"inline\"><mi>θ</mi></math>). El cuadrado de la velocidad de las dos bolas da <math display=\"inline\"><mrow><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y el de <math display=\"inline\"><mi>M</mi></math> <math display=\"inline\"><mrow><mn>4</mn><msup><mi>l</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. La energía cinética y la potencial son, por tanto: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Conviene dividir <math display=\"inline\"><mi>T</mi></math> en dos partes, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> (cuadrática en <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>) y <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> (independiente de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>); esa separación será esencial en el apartado (e)."
    },
    {
     "mota": "testua",
     "html": "<strong>(a)</strong> La lagrangiana es <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math>, y la ecuación de Euler–Lagrange de <math display=\"inline\"><mi>θ</mi></math>, haciendo las derivadas, da lo siguiente: <math display=\"block\"><mrow><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>M</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Los términos independientes de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> pueden agruparse en un potencial efectivo: el movimiento de <math display=\"inline\"><mi>θ</mi></math> depende de la forma equivalente <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> el primer término de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math> —el que corresponde a la fuerza centrífuga del giro, que decrece al aumentar <math display=\"inline\"><mi>θ</mi></math>— y el de la gravedad —con un mínimo en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>— pugnan entre sí: ahí está la miga del problema."
    },
    {
     "mota": "testua",
     "html": "<strong>(b)</strong> Los equilibrios relativos son los puntos estacionarios de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>: <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aparecen dos ramas: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (posición vertical, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) y <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi></mrow><mrow><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mi>c</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi></mrow><mrow><mi>m</mi><mi>l</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> El equilibrio inclinado (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>≠</mo><mn>0</mn></mrow></math>) solo existe cuando se cumple <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>≤</mo><mn>1</mn></mrow></math>, es decir, cuando <math display=\"inline\"><mrow><mi>ω</mi><mo>≥</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>. <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> es, por tanto, la velocidad umbral a partir de la cual el regulador empieza a &quot;abrirse&quot;."
    },
    {
     "mota": "testua",
     "html": "<strong>(c)</strong> La estabilidad la decide <math display=\"inline\"><msubsup><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext><mo>″</mo></msubsup></math>. Poniendo <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mo>*</mo></msub><mo>+</mo><mi>η</mi></mrow></math> en torno a un equilibrio y descartando los términos no lineales, queda <math display=\"inline\"><mrow><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>η</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi>η</mi></mrow></math>: un oscilador armónico, con frecuencia al cuadrado <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℐ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>*</mo></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La derivada segunda es <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> En la posición vertical (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo>=</mo><mi>m</mi></mrow></math>), es <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y de ahí la frecuencia: <math display=\"block\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">bert</mtext><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> El resultado es elegante: el giro &quot;ablanda&quot; el modo de la posición vertical, y la oscilación se apaga exactamente en <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>. Si <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> el equilibrio es estable; si <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> es <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">bert</mtext><mn>2</mn></msubsup><mo>&lt;</mo><mn>0</mn></mrow></math> y la vertical se vuelve inestable (máximo del potencial). En el equilibrio inclinado, en cambio, la condición de equilibrio anula el primer corchete, y <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">mak</mtext><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub></mrow><mrow><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub></mrow></mfrac><mo>,</mo></mrow></math> siendo <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>c</mi></msub><mi>/</mi><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup></mrow></math>. Es positivo en todo el dominio donde existe: el equilibrio inclinado es siempre estable."
    },
    {
     "mota": "testua",
     "html": "<strong>(d)</strong> Los tres resultados se reúnen en una sola imagen. Cuando <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> hay un único equilibrio —la vertical, estable—, que oscila con frecuencia <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">bert </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. En <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math> el modo se ablanda por completo (<math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">bert </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>→</mo><mn>0</mn></mrow></math>) y la vertical se hace inestable; a la vez nacen las dos ramas inclinadas estables en <math display=\"inline\"><mrow><mi>±</mi><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>. Esta bifurcación —protegida por la simetría <math display=\"inline\"><mrow><mi>θ</mi><mo>→</mo><mi>−</mi><mi>θ</mi></mrow></math> del sistema— tiene el aspecto clásico de la horquilla (pitchfork): el número de equilibrios estables pasa de uno a dos al cruzar <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math>, y cerca del umbral <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>≈</mo><mn>2</mn><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>−</mo><msub><mi>ω</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>ω</mi><mi>c</mi></msub></mrow></msqrt></mrow></math> crece como (ley de la raíz cuadrada). En el límite <math display=\"inline\"><mrow><mi>ω</mi><mo>≫</mo><msub><mi>ω</mi><mi>c</mi></msub></mrow></math>, en cambio, <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">mak</mtext><mn>2</mn></msubsup><mo>→</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: el modo inclinado se endurece con <math display=\"inline\"><mi>ω</mi></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>(e)</strong> En el formalismo hamiltoniano, el momento canónico de <math display=\"inline\"><mi>θ</mi></math> es <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, y la hamiltoniana <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>4</mn><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>+</mo><mn>2</mn><mi>M</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mi>L</mi></math> no tiene <math display=\"inline\"><mi>t</mi></math> explícito (pues el motor mantiene <math display=\"inline\"><mi>ω</mi></math> constante por imposición), luego <math display=\"inline\"><mi>H</mi></math> es una constante del movimiento. Pero <math display=\"inline\"><mi>H</mi></math> NO es la energía mecánica. Usando la separación <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, resulta <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math>, mientras la energía mecánica es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>+</mo><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mi>V</mi></mrow></math>; por tanto <math display=\"block\"><mrow><mi>E</mi><mo>−</mo><mi>H</mi><mo>=</mo><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> La energía mecánica, así pues, NO se conserva: al cambiar <math display=\"inline\"><mi>θ</mi></math> cambia <math display=\"inline\"><mi>E</mi></math>, mientras <math display=\"inline\"><mi>H</mi></math> permanece constante. La razón es física: el motor debe hacer un momento para sostener <math display=\"inline\"><mi>ω</mi></math>. Ese momento es la derivada temporal del momento <math display=\"inline\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mi>ω</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> (que <math display=\"inline\"><mi>M</mi></math> esté en el eje no aporta nada), y la potencia que desarrolla el motor es <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>τ</mi><mspace width=\"0.167em\"></mspace><mi>ω</mi><mo>=</mo><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>φ</mi></msub><mspace width=\"0.167em\"></mspace><mi>ω</mi><mo>=</mo><mn>4</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Esa es la respuesta a la pregunta que plantea la semilla: la energía mecánica no se conserva, y la magnitud que de verdad se conserva es la integral de Jacobi <math display=\"inline\"><mi>H</mi></math>, no <math display=\"inline\"><mi>E</mi></math>; la diferencia entre ambas, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, es la energía que el motor intercambia en el giro. Si el sistema fuera libre (sin motor), la constante del movimiento sería <math display=\"inline\"><msub><mi>p</mi><mi>φ</mi></msub></math> y entonces se conservaría <math display=\"inline\"><mi>E</mi></math>; en el forzado, en cambio, <math display=\"inline\"><msub><mi>p</mi><mi>φ</mi></msub></math> no es fijo —lo cambia el motor— pero <math display=\"inline\"><mi>H</mi></math> sí."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tubo giratorio libre y barra unida por un muelle"
    },
    {
     "mota": "testua",
     "html": "<em>Un tubo hueco largo, de masa despreciable, está unido a un pivote en su punto medio, de modo que puede girar sin rozamiento en un plano\nhorizontal (la gravedad no actúa en el plano). Dentro del tubo puede deslizar sin rozamiento\nuna barra fina de masa <math display=\"inline\"><mi>m</mi></math> y longitud <math display=\"inline\"><mi>ℓ</mi></math>. Un muelle ideal de constante <math display=\"inline\"><mi>k</mi></math> (longitud natural\ndespreciable) une el centro de la barra con el pivote, a lo largo del eje del tubo; así, cuando el centro está a distancia <math display=\"inline\"><mi>r</mi></math> del pivote, la barra\nsufre una fuerza centrípeta <math display=\"inline\"><mrow><mi>k</mi><mi>r</mi></mrow></math>. Inicialmente el tubo gira con velocidad angular <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y el centro de la barra está en el radio <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math>,\nen reposo respecto al tubo.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas: Problemas de Examen\nResueltos y Comentados</em>, 00Jun01 (examen de junio de 2000), donde la barra deslizaba en el tubo libre sin muelle ni gravedad,\ny escapaba del equilibrio inestable del centro. Aquí se ha añadido el muelle,\nse han convertido las constantes en símbolos, y se piden el equilibrio relativo, la estabilidad y el modo normal.]</span> <br>\n<strong>(a)</strong> Usando la mecánica lagrangiana, escribe la lagrangiana y las ecuaciones del movimiento; identifica la coordenada\ncíclica y la constante del movimiento correspondiente. <strong>(b)</strong> Elimina el giro mediante el momento angular y escribe\nel problema unidimensional equivalente para <math display=\"inline\"><mi>r</mi></math> (potencial efectivo); halla el radio <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> del equilibrio relativo\n—barra a radio fijo, tubo girando uniformemente— y demuestra que entonces el tubo gira con velocidad <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math>\n<strong>independiente del valor</strong> del momento angular. <strong>(c)</strong> Demuestra que <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> es estable\ny obtén la frecuencia <math display=\"inline\"><msub><mi>ω</mi><mi>b</mi></msub></math> de las oscilaciones radiales pequeñas. <strong>(d)</strong> Estudia la estabilidad de la posición central (<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>):\ndemuestra que es estable si <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&lt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> e inestable si <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>,\napareciendo un par simétrico de equilibrios fuera del eje; comprueba que el límite <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><mn>0</mn></mrow></math>\nrecupera el escape de la semilla. <strong>(e)</strong> Halla <math display=\"inline\"><msub><mi>ω</mi><mi>b</mi></msub></math> en el límite de momento angular grande.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/3c0019ee1a5b617a.svg",
     "zabalera": 345
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[La barra <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>ℓ</mi></mrow></math> desliza en el tubo giratorio libre, unida al pivote por un muelle <math display=\"inline\"><mi>k</mi></math>; <math display=\"inline\"><mi>r</mi></math> es el radio del centro y <math display=\"inline\"><mi>θ</mi></math> el ángulo del tubo.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomamos dos coordenadas generalizadas: <math display=\"inline\"><mi>r</mi></math> (posición del centro de la barra en el tubo, medida desde el pivote) y <math display=\"inline\"><mi>θ</mi></math> (ángulo del tubo). Como la barra está alineada con el tubo, su velocidad angular es <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> y su momento de inercia respecto al centro <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mi>/</mi><mn>12</mn></mrow></math>. El cuadrado de la velocidad del centro es <math display=\"inline\"><mrow><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>; añadiendo el giro propio de la barra, la energía cinética es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Siendo la energía potencial del muelle <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>, la lagrangiana es esta: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>I</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow><mrow><mn>12</mn><mi>.</mi></mrow></mfrac></mrow></math> <math display=\"inline\"><mi>θ</mi></math> no aparece explícitamente: es una coordenada cíclica, y el momento canónico correspondiente —el momento angular total respecto al pivote— es una constante del movimiento: <math display=\"block\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Las condiciones iniciales fijan <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. La ecuación de Euler-Lagrange de <math display=\"inline\"><mi>r</mi></math>, sustituyendo <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>, queda así: <math display=\"block\"><mrow><mi>m</mi><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>m</mi><mi>r</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><mi>r</mi><mo>=</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Pugnan la fuerza centrífuga (hacia fuera) y el muelle (hacia dentro)."
    },
    {
     "mota": "testua",
     "html": "Eliminando <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>, el movimiento de <math display=\"inline\"><mi>r</mi></math> puede escribirse como el de una masa única que se mueve en un potencial efectivo. Como el sistema es cerrado e independiente de <math display=\"inline\"><mi>t</mi></math>, se conserva la energía mecánica: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mo>,</mo></mrow></math> donde el primer término es el potencial de la &quot;fuerza centrífuga&quot; que viene de la inercia de giro del sistema. En el equilibrio relativo la barra está a radio fijo (<math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) y el tubo gira uniformemente; lo da el mínimo de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>, <math display=\"inline\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><msqrt><mfrac><mi>m</mi><mi>k</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mfrac><msub><mi>p</mi><mi>θ</mi></msub><msqrt><mrow><mi>m</mi><mi>k</mi></mrow></msqrt></mfrac><mo>−</mo><mfrac><mi>I</mi><mi>m</mi></mfrac><mi>.</mi></mrow></math> El resultado elegante está en la velocidad de giro en el equilibrio. Como <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>=</mo><msub><mi>p</mi><mi>θ</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y el equilibrio exige <math display=\"inline\"><mrow><mi>m</mi><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo><mn>2</mn></msubsup><mo>=</mo><mi>k</mi></mrow></math> (igualando la fuerza centrífuga <math display=\"inline\"><mrow><mi>m</mi><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo><mn>2</mn></msubsup><msub><mi>r</mi><mo>*</mo></msub></mrow></math> y la del muelle <math display=\"inline\"><mrow><mi>k</mi><msub><mi>r</mi><mo>*</mo></msub></mrow></math>), <math display=\"block\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mi>.</mi></mrow></math> El tubo gira siempre con velocidad <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> en el equilibrio, sean cuales sean el momento angular de la barra, el radio <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> o la longitud <math display=\"inline\"><mi>ℓ</mi></math>: como las dos fuerzas son lineales en <math display=\"inline\"><mi>r</mi></math>, se equilibran a cualquier radio con esa velocidad &quot;mágica&quot;. Un momento angular mayor solo da un <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> mayor, no un giro más rápido."
    },
    {
     "mota": "testua",
     "html": "La estabilidad la decide la derivada segunda de <math display=\"inline\"><msub><mi>V</mi><mtext mathvariant=\"normal\">erag</mtext></msub></math>. Derivando directamente y sustituyendo en el equilibrio (usando <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>), la mayoría de los términos se cancelan: <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mo>*</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>k</mi><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi></mrow></mfrac><mo>&gt;</mo><mn>0</mn><mo>,</mo></mrow></math> siempre positivo: <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> es un equilibrio estable. La frecuencia de las pequeñas oscilaciones radiales —el &quot;modo de respiración&quot; de la barra, hacia dentro y hacia fuera del tubo— es esta: <math display=\"block\"><mrow><msub><mi>ω</mi><mi>b</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mfrac><msub><mi>r</mi><mo>*</mo></msub><mi>m</mi></mfrac></mrow></msqrt><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><msqrt><mfrac><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> La barra oscila en torno a <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> y, en cada ciclo, el tubo se acelera (barra hacia dentro) y se frena (hacia fuera), conservando <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math>."
    },
    {
     "mota": "testua",
     "html": "Para que exista el equilibrio fuera del eje hace falta <math display=\"inline\"><mrow><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>&gt;</mo><mn>0</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>&gt;</mo><mi>I</mi><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>. Si la barra está inicialmente cerca del centro (<math display=\"inline\"><mrow><msub><mi>p</mi><mi>θ</mi></msub><mo>≈</mo><mi>I</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>), la condición pasa a ser <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>. Precisamente, la estabilidad de la posición central la decide la curvatura allí: <math display=\"block\"><mrow><msubsup><mi>V</mi><mrow><mtext mathvariant=\"normal\">erag </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>″</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mo>−</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>θ</mi><mn>2</mn></msubsup></mrow><msup><mi>I</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>k</mi><mo>−</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math> es positiva si <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&lt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> (centro estable: la barra oscila desde el centro, de un lado a otro) y negativa si <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>&gt;</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> (centro inestable). Superado el umbral, el equilibrio central se desestabiliza y se crea un par simétrico de <math display=\"inline\"><mrow><mi>±</mi><msub><mi>r</mi><mo>*</mo></msub></mrow></math> equilibrios estables: la barra elige un lado. La velocidad umbral es de nuevo <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> —la misma velocidad mágica fija tanto el giro del equilibrio como el límite de estabilidad del centro—. Haciendo <math display=\"inline\"><mrow><mi>k</mi><mo>→</mo><mn>0</mn></mrow></math>, el umbral tiende a cero y <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math> a infinito: sin muelle el centro es siempre inestable y la barra escapa, exactamente el resultado de la semilla. El muelle, por tanto, eleva el umbral de inestabilidad hasta <math display=\"inline\"><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></math> y, por encima de él, convierte el escape libre de la semilla en una oscilación ligada en torno a <math display=\"inline\"><msub><mi>r</mi><mo>*</mo></msub></math>."
    },
    {
     "mota": "testua",
     "html": "Por último, cuando el momento angular es grande (o la barra es corta, con <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup></mrow></math> de inercia mucho mayor que <math display=\"inline\"><mi>I</mi></math>), <math display=\"inline\"><mrow><msqrt><mrow><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msubsup><mi>r</mi><mo>*</mo><mn>2</mn></msubsup><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mo>→</mo><mn>1</mn></mrow></math> y <math display=\"block\"><mrow><msub><mi>ω</mi><mi>b</mi></msub><mo>→</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>=</mo><mn>2</mn><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>*</mo></msub><mi>.</mi></mrow></math> El modo de respiración de la barra es, en el límite, el doble de la frecuencia de la vuelta orbital: cuando está fuera el tubo es cuando más se ha frenado, y al regresar se acelera, y ese ritmo se repite dos veces por órbita. Cerca del umbral (<math display=\"inline\"><mrow><msub><mi>r</mi><mo>*</mo></msub><mo>→</mo><mn>0</mn></mrow></math>), en cambio, el modo se ablanda, <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>b</mi></msub><mo>→</mo><mn>0</mn></mrow></math>, el modo suave del punto de bifurcación. Todo el sistema lo gobiernan dos constantes del movimiento, <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> y <math display=\"inline\"><mi>E</mi></math>; como no hay motor, la energía va y viene entre el movimiento radial de la barra y el giro del tubo, sin perderse nunca. Un solo muelle separa el escape libre de la semilla y el equilibrio giratorio estable que surge aquí."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Lagrangiana dependiente del tiempo: la constante del movimiento oculta del oscilador amortiguado"
    },
    {
     "mota": "testua",
     "html": "<em>Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en una recta según esta lagrangiana, que depende\nexplícitamente del tiempo:\n<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>\ndonde <math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y <math display=\"inline\"><mi>γ</mi></math> son constantes positivas.<span class=\"j-oin\">[Semilla: Ecenarro, <em>Mecánica y Ondas:\nProblemas de Examen Resueltos y Comentados</em>, 00Set01 (p. 177); el original pedía las ecuaciones de Hamilton\ny preguntaba, solo con palabras, si se conservan <math display=\"inline\"><mi>H</mi></math> y la energía. Aquí se han añadido la clasificación de los regímenes,\nla tasa de disipación explícita, la construcción de una constante del movimiento exacta (mediante la variable &quot;vestida&quot;) y la geometría del\nespacio de fases —Liouville canónico frente a contracción física—.]</span> <br>\n<strong>(a)</strong> Obtén la ecuación del movimiento a partir del formalismo lagrangiano; identifica qué sistema físico describe\ny clasifica los regímenes del movimiento según <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y <math display=\"inline\"><mi>γ</mi></math>. <strong>(b)</strong> Construye la hamiltoniana <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.\n¿Es una constante del movimiento? Relaciona <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi></mrow></math> con la energía mecánica física y obtén la tasa de disipación explícita de <math display=\"inline\"><mi>E</mi></math>. <strong>(c)</strong> Halla una constante del movimiento EXACTA: muestra que el cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>q</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>\nlleva a un oscilador no amortiguado, escribe la constante <math display=\"inline\"><mi>I</mi></math> en función de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y\ncomprueba <math display=\"inline\"><mrow><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> directamente. <strong>(d)</strong> Interpreta el resultado en el espacio de fases: demuestra que en las variables\ncanónicas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se conserva el área (Liouville), pero que en las variables físicas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se contrae como <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></math>; ¿cuál es la relación entre ambas? <strong>(e)</strong> Estudia el límite <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>0</mn></mrow></math> y los regímenes\ncrítico y sobreamortiguado.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/1c1539282e8afd59.svg",
     "zabalera": 722
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[A la izquierda, la trayectoria del oscilador amortiguado en el espacio de fases físico: una espiral hacia dentro, con el área contrayéndose como <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></math>. A la derecha, en la variable vestida <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> la misma trayectoria se convierte en una elipse cerrada: curva de nivel de la constante del movimiento <math display=\"inline\"><mi>I</mi></math>.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La lagrangiana lleva el factor exponencial <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math>; este rompe el origen del tiempo y, como veremos, es una manera elegante de &quot;camuflar&quot; el rozamiento viscoso. Empecemos por la ecuación del movimiento."
    },
    {
     "mota": "testua",
     "html": "El momento canónico correspondiente a <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></math> es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>. La ecuación de Euler-Lagrange, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, da lo siguiente: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y, simplificando por <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Es un oscilador armónico amortiguado con rozamiento viscoso lineal: <math display=\"inline\"><mi>γ</mi></math> es el coeficiente de amortiguamiento (de dimensiones <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>) y <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> la frecuencia propia. La solución general es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">sin</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></msqrt></mrow></math>. De ahí se distinguen tres regímenes: si <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, es <strong>subamortiguado</strong> (<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> real, oscilación decreciente); si <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, <strong>crítico</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math>); y si <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, <strong>sobreamortiguado</strong> (<math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> imaginario, retorno sin oscilación)."
    },
    {
     "mota": "testua",
     "html": "Para construir la hamiltoniana despejamos <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> y formamos <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>p</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>L</mi></mrow></math>: <math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Como <math display=\"inline\"><mi>t</mi></math> aparece explícitamente, <math display=\"inline\"><mi>H</mi></math> no es una constante del movimiento. Como el corchete de Poisson de <math display=\"inline\"><mi>H</mi></math> consigo misma es cero, <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>, es decir, <math display=\"block\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>,</mo></mrow></math> es en general no nulo. Definamos ahora la energía mecánica física <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math> se ve enseguida una relación transparente: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>E</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Es decir, la hamiltoniana no es la energía física: es la energía física multiplicada por el factor de peso <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math>. Calculando directamente la evolución de <math display=\"inline\"><mi>E</mi></math>, con la ecuación del movimiento (<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi></mrow></math>), <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>≤</mo><mn>0</mn><mi>.</mi></mrow></math> La energía siempre disminuye (o se queda quieta, cuando <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><mi>γ</mi><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> es la disipación de potencia. Ni <math display=\"inline\"><mi>H</mi></math> ni <math display=\"inline\"><mi>E</mi></math> se conservan; pero la no conservación de ambas tiene distinto origen: la de <math display=\"inline\"><mi>H</mi></math> es una consecuencia formal de <math display=\"inline\"><mrow><mi>∂</mi><mi>H</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math>, la de <math display=\"inline\"><mi>E</mi></math> es de pura disipación física. Comprobación cruzada: <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>γ</mi><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>γ</mi><mi>T</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>, de acuerdo con lo obtenido arriba."
    },
    {
     "mota": "testua",
     "html": "Aunque <math display=\"inline\"><mi>H</mi></math> no lo sea, existe una constante del movimiento exacta, y ese es el corazón de este problema. Hagamos el cambio de variable <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>. Derivando, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>γ</mi><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mi>q</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Introduciendo esto en <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y simplificando <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></math>, los términos lineales de <math display=\"inline\"><mi>γ</mi></math> se cancelan exactamente y queda un oscilador <strong>no amortiguado</strong>: <math display=\"block\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mi>q</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></math> El &quot;vestido&quot; se traga todo el amortiguamiento: <math display=\"inline\"><mi>q</mi></math> es un oscilador armónico puro, de frecuencia <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Como el oscilador no amortiguado conserva la energía, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><msup><mi>q</mi><mn>2</mn></msup></mrow></math> es constante. Volviendo a <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y usando que <math display=\"inline\"><mrow><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>+</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>, la constante del movimiento queda así en las variables originales: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>γ</mi><mspace width=\"0.167em\"></mspace><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>H</mi><mo>+</mo><mfrac><mi>γ</mi><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><mi>x</mi><mi>p</mi><mi>.</mi></mrow></math> Comprobación directa, sin transformación: deriva <math display=\"inline\"><mi>I</mi></math> y sustituye <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi></mrow></math>; los coeficientes de los términos <math display=\"inline\"><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math>, <math display=\"inline\"><mrow><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> se cancelan uno por uno, luego <math display=\"inline\"><mrow><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> exactamente. Una curiosidad: aunque el sistema es disipativo —pierde energía continuamente—, tiene una magnitud conservada exacta; no es <math display=\"inline\"><mi>E</mi></math>, sino la energía del oscilador &quot;vestido&quot;, restablecida en el tiempo por el peso <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math>."
    },
    {
     "mota": "testua",
     "html": "¿Por qué es posible? Lo aclara la geometría del espacio de fases. Como el flujo de Hamilton es canónico, en las variables <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se conserva el área: el teorema de Liouville se cumple para cualquier hamiltoniana, incluso dependiente de <math display=\"inline\"><mi>t</mi></math>. En las variables físicas, en cambio, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, el flujo es <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>v</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>γ</mi><mi>v</mi><mo>−</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi></mrow></math>, y su divergencia <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>γ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> es negativa: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> el área se contrae como <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></math>, como muestra la espiral de la figura. Ambos puntos de vista son compatibles porque <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>; el jacobiano del cambio <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>m</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mfrac><mrow><mi>d</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>p</mi></mrow><mi>m</mi></mfrac><mi>.</mi></mrow></math> La contracción del espacio de fases físico y la conservación del espacio de fases canónico son, así, dos caras del mismo fenómeno: el factor <math display=\"inline\"><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup></math> es el que &quot;integra&quot; la disipación y restablece el volumen canónico —la misma idea está detrás de la constante <math display=\"inline\"><mi>I</mi></math>—. En la figura, la espiral que se contrae (física, roja) y la elipse cerrada (vestida, azul) las une esa transformación."
    },
    {
     "mota": "testua",
     "html": "Por último, los casos límite. En el límite <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>I</mi><mo>→</mo><mi>E</mi><mo>=</mo><mi>H</mi></mrow></math>: las tres magnitudes coinciden y se recupera el oscilador conservativo ordinario, donde la energía sí es una constante del movimiento. En el caso crítico <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math>: la variable vestida cumple <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> (movimiento uniforme) y <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>; la oscilación desaparece. Cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mi>q</mi></math> no oscila, pero la forma cuadrática <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ω</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msup><mi>q</mi><mn>2</mn></msup></mrow></math> sigue conservándose (la energía hiperbólica de un potencial &quot;invertido&quot;). La constante del movimiento <math display=\"inline\"><mi>I</mi></math> es, pues, válida en los tres regímenes: es un resultado algebraico robusto, más allá del subamortiguamiento —y ese era el tesoro que guardaba una lagrangiana dependiente del tiempo."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "La peonza de Lagrange",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el movimiento de una peonza pesada simétrica que gira en torno a un punto fijo <math display=\"inline\"><mi>O</mi></math> (recuérdese la figura 5.11). Este problema lo estudiamos en el apartado 5.4, valiéndonos de una aproximación que puede hacerse cuando gira muy deprisa en torno a su eje de simetría. Aquí no haremos esa hipótesis."
    },
    {
     "mota": "testua",
     "html": "Para no usar fuerzas de inercia, usaremos el sistema de laboratorio <math display=\"inline\"><mrow><mi>O</mi><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> para definir las magnitudes. Sin embargo, para simplificar las expresiones, en el punto fijo elegiremos un triedro principal que gira con el sólido, como muestra la figura 6.13. Nos serviremos de ese triedro para hacer las proyecciones en cada instante, pues como <math display=\"inline\"><mrow><msub><mi>I</mi><mi>x</mi></msub><mo>=</mo><msub><mi>I</mi><mi>y</mi></msub></mrow></math>, la energía mecánica se escribe así en dicho sistema: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msubsup><mi>ω</mi><mi>z</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "El triedro principal y los ángulos de Euler.",
     "src": "../media/irudiak/05964a3f34322d64.svg",
     "zabalera": 168
    },
    {
     "mota": "testua",
     "html": "Para dar la orientación del sistema del sólido usaremos los ángulos de Euler medidos en el sistema de laboratorio; así, las componentes de la velocidad angular son las de la ecuación (2.61): <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Por otra parte, si el vector de posición del centro de masas es <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>, la energía potencial es <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y la lagrangiana <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Como los ángulos <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mi>ψ</mi></math> son cíclicos, los momentos canónicos conjugados correspondientes son constantes del movimiento: <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>I</mi><mi>x</mi></msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msub><mi>p</mi><mi>ψ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>p</mi><mi>ψ</mi></msub><mo>=</mo><msub><mi>I</mi><mi>z</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como el momento de la fuerza externa está en la línea de nodos, perpendicular a los ejes <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>, <math display=\"inline\"><msub><mi>p</mi><mi>θ</mi></msub></math> es el único momento canónico variable. <br> Como el tiempo no aparece explícitamente en la lagrangiana, la hamiltoniana de este sistema natural es la energía mecánica conservada: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>z</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math> Si en esta ley de conservación se usan las dos anteriores para eliminar las velocidades <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> y <math display=\"inline\"><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></math>, obtenemos un problema unidimensional equivalente: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>x</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>φ</mi></msub><mo>−</mo><msub><mi>p</mi><mi>ψ</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><msub><mi>I</mi><mi>x</mi></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><mo>+</mo><mfrac><msubsup><mi>p</mi><mi>ψ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>I</mi><mi>z</mi></msub></mrow></mfrac><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Gráfica de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "../media/irudiak/aac94aec54b7e4fb.svg",
     "zabalera": 224
    },
    {
     "mota": "testua",
     "html": "Como vimos en el apartado 1.4.3, este problema puede resolverse mediante el método de separación de variables. En efecto, si se definen las constantes <math display=\"block\"><mrow><mi>α</mi><mo>≡</mo><mfrac><mn>2</mn><msub><mi>I</mi><mi>x</mi></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mfrac><msubsup><mi>p</mi><mi>ψ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><msub><mi>I</mi><mi>z</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>g</mi><mi>R</mi></mrow><msub><mi>I</mi><mi>x</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>≡</mo><mfrac><msub><mi>p</mi><mi>φ</mi></msub><msub><mi>I</mi><mi>x</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>≡</mo><mfrac><msub><mi>p</mi><mi>ψ</mi></msub><msub><mi>I</mi><mi>x</mi></msub></mfrac></mrow></math> y la función <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><mi>β</mi><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>−</mo><mi>b</mi><mi>u</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, la ley de conservación (6.156) se escribe así, usando como variable <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>: <math display=\"block\"><mrow><msup><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La integral <math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi>±</mi><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mo>+</mo><mi>C</mi></mrow></math> que se obtiene de aquí puede resolverse mediante integrales elípticas y de ella, en principio, se obtienen <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Con ellas, de la ley de conservación (6.153) se obtienen <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y, mediante una integral, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y del resultado (6.154) <math display=\"inline\"><mrow><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El problema se reduce, pues, a cuadraturas; pero puede obtenerse información interesante sin hacer ninguna integral. <br> La gráfica de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es cúbica y, como en los límites <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math> tenemos <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>β</mi><msup><mi>u</mi><mn>3</mn></msup></mrow></math>, tiene el aspecto de la figura 6.14. Según los parámetros, las raíces reales serán una o tres; pero como <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>±</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mn>0</mn></mrow></math>, en el intervalo <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≤</mo><mn>1</mn></mrow></math> que nos interesa las raíces serán dos o ninguna. Además, por la ecuación (6.160), el movimiento solo puede ocurrir cuando <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn></mrow></math>, es decir, cuando hay dos raíces en el intervalo <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>≤</mo><mi>u</mi><mo>≤</mo><mn>1</mn></mrow></math>. El movimiento ha ocurrido entre esas dos raíces, es decir, el ángulo <math display=\"inline\"><mi>θ</mi></math> oscilará en un intervalo, en el movimiento llamado <strong>nutación</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Algunas evoluciones del eje de simetría de una peonza de Lagrange.",
     "src": "../media/irudiak/c8124cb5dc1d873f.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "Para explicar la evolución del eje de simetría <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>, en la figura 6.15 se ha dibujado su intersección con la esfera de radio unidad, en tres casos particulares. El signo de la velocidad de precesión <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> puede cambiar, pero por término medio el eje de la peonza girará en un sentido en torno al eje vertical <math display=\"inline\"><mrow><mi>O</mi><msup><mi>Z</mi><mo>′</mo></msup></mrow></math>. Como se ha dicho antes, también cambiará el ángulo <math display=\"inline\"><mi>θ</mi></math> entre los dos ejes<span class=\"j-oin\">[En los casos particulares en que la raíz de <math display=\"inline\"><mi>u</mi></math> es doble, <math display=\"inline\"><mi>θ</mi></math> es constante y tenemos precesión pura, como en el apartado 5.4.]</span> y, además, la peonza gira en torno al eje de simetría al cambiar <math display=\"inline\"><mi>ψ</mi></math> (a veces a este giro se le llama <strong>espín</strong>). Para una discusión más profunda de todos los casos posibles, puede usarse el libro de texto [10], por ejemplo."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "La transformación de Legendre",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En las ecuaciones de Lagrange (6.83) las variables independientes fundamentales son el tiempo <math display=\"inline\"><mi>t</mi></math>, las coordenadas generalizadas <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> y las velocidades generalizadas <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math>. Por otra parte, los momentos canónicos se expresan en función de esas variables en la definición (6.116): <math display=\"block\"><mrow><msub><mi>p</mi><mi>i</mi></msub><mo>≡</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Calculando las inversas, <math display=\"inline\"><mi>n</mi></math> de estas definiciones pueden despejarse las velocidades generalizadas <math display=\"inline\"><mi>n</mi></math> en función del tiempo <math display=\"inline\"><mi>t</mi></math>, de las coordenadas generalizadas <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> y de los momentos generalizados <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>: <math display=\"block\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Esta es la transformación de Legendre y de aquí en adelante nos valdremos de ella para escribir todas las magnitudes físicas en función de las nuevas variables independientes fundamentales: el tiempo <math display=\"inline\"><mi>t</mi></math>, las coordenadas generalizadas <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> y los momentos generalizados <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>. Para aligerar las expresiones, usaremos a menudo la notación vectorial abreviada <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en espacios abstractos de dimensión <math display=\"inline\"><mi>n</mi></math>. La transformación mencionada se escribe, pues, así: <math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cartesianas]"
    },
    {
     "mota": "testua",
     "html": "Usando los momentos (6.124) de este caso, las transformaciones de Legendre son estas: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>x</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>y</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>z</mi></msub><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "De los momentos (6.117)–(6.118) del sistema de la figura 6.7, las velocidades generalizadas se despejan así: <math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>−</mo><msub><mi>p</mi><mi>s</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>p</mi><mi>s</mi></msub><mo>−</mo><mi>m</mi><msub><mi>p</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la transformación de Legendre en el caso del péndulo simple?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La hamiltoniana"
    },
    {
     "mota": "testua",
     "html": "De aquí en adelante la hamiltoniana, en vez de (6.132), será"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde hemos eliminado las velocidades generalizadas <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> usando la transformación de Legendre (6.163)."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cartesianas]"
    },
    {
     "mota": "testua",
     "html": "Si en la hamiltoniana (6.133) se hace la transformación (6.165), tenemos esto: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>p</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "Haciendo la transformación (6.166)–(6.167) en la hamiltoniana (6.145) del sistema de la figura 6.7 se obtiene esto: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msubsup><mi>p</mi><mi>r</mi><mn>2</mn></msubsup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mi>m</mi><msub><mi>p</mi><mi>r</mi></msub><msub><mi>p</mi><mi>s</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>−</mo><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la transformación de Legendre en el caso del péndulo simple."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Calculemos las derivadas de la hamiltoniana (6.168) en estas nuevas variables fundamentales, usando la definición (6.116) de los momentos: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>p</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>j</mi></msub></mrow></mfrac><mo>−</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Ecuaciones canónicas de Hamilton",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las ecuaciones de Lagrange (6.120) se escriben así mediante la derivada (6.172): <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> Pero <math display=\"inline\"><mi>n</mi></math> estas ecuaciones dan la evolución de los momentos, pero no la de las coordenadas, para lo que hacen falta las ecuaciones (6.173). En el formalismo de Hamilton las ecuaciones del movimiento, las ecuaciones canónicas, equivalentes a las ecuaciones de Lagrange (6.83), se escriben así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Partícula sin ligaduras en coordenadas cartesianas]"
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones canónicas correspondientes a la hamiltoniana (6.169) son estas: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>x</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>x</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>y</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>y</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>z</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>p</mi><mi>z</mi></msub><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒑</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>x</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>y</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>z</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que al eliminar los momentos de las ecuaciones (6.177)–(6.178) se obtiene <math display=\"inline\"><mrow><mi>m</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones canónicas de la hamiltoniana (6.170) del sistema de la figura 6.7 son estas: <math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>r</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mi>r</mi></msub><mo>−</mo><msub><mi>p</mi><mi>s</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>s</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>p</mi><mi>s</mi></msub><mo>−</mo><mi>m</mi><msub><mi>p</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>s</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla las ecuaciones de Hamilton en el caso del péndulo simple."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espacio de fases"
    },
    {
     "mota": "testua",
     "html": "En el formalismo de Lagrange (6.83) las ecuaciones del movimiento son <math display=\"inline\"><mi>n</mi></math> ecuaciones diferenciales ordinarias de segundo orden. La variable independiente es el tiempo <math display=\"inline\"><mi>t</mi></math> y las dependientes las <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> coordenadas generalizadas. Al resolver las ecuaciones diferenciales, para cada conjunto de condiciones iniciales de las <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> coordenadas generalizadas y las <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> velocidades generalizadas tenemos una solución <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> que da la evolución de las coordenadas generalizadas en el espacio de configuración. Por ejemplo, para calcular la evolución <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del péndulo simple en el espacio de configuración, hay que resolver la ecuación (F.23) usando la posición inicial <math display=\"inline\"><mi>θ</mi></math> y la velocidad <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>. <br> En el formalismo de Hamilton las ecuaciones del movimiento (6.175)–(6.176) son de primer orden, pero <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math> en total. La variable independiente es el tiempo <math display=\"inline\"><mi>t</mi></math> y las dependientes las <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math> coordenadas y los <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> momentos generalizados. La evolución, por tanto, ocurre en el espacio abstracto de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> coordenadas llamado espacio de fases. Las condiciones iniciales son, de nuevo, <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi></mrow></math>: las coordenadas y los momentos iniciales."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de fases del péndulo simple.",
     "src": "../media/irudiak/63d105c36c8fc112.svg",
     "zabalera": 232
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en el caso del péndulo simple, las ecuaciones canónicas dan la evolución del punto que representa el sistema en el espacio de fases <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En la figura 6.16 se muestran algunas trayectorias de fase. <br> Las ecuaciones (6.175) son transformaciones de Legendre, pues nos dan las funciones <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. De ahí, tras despejar las funciones inversas <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y sustituirlas en las ecuaciones (6.176), se recuperan, claro está, las ecuaciones diferenciales de segundo orden <math display=\"inline\"><mi>n</mi></math> de Lagrange."
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "Si de las ecuaciones (6.179) del sistema de la figura 6.7 se despejan los momentos, se recuperan (6.117)–(6.118), y sustituyendo estas últimas en las ecuaciones (6.180), las ecuaciones del movimiento (6.113)–(6.114)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba explícitamente que, si se elimina el momento de las ecuaciones canónicas del péndulo simple, se recupera la ecuación del movimiento habitual."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Variables dinámicas en el espacio de fases",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el formalismo de Hamilton, una función <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de las variables fundamentales se llama variable dinámica. Entre las variables dinámicas hay casos especiales: las coordenadas <math display=\"inline\"><msub><mi>q</mi><mi>i</mi></msub></math>, los momentos <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> y la hamiltoniana <math display=\"inline\"><mi>H</mi></math>, entre otras."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coordenadas cíclicas y principios de conservación"
    },
    {
     "mota": "testua",
     "html": "En el formalismo lagrangiano se dice que una coordenada es cíclica si no aparece explícitamente en la lagrangiana, pero usando (6.172) es claro que la condición necesaria y suficiente para que una coordenada sea cíclica es que no aparezca en la hamiltoniana: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En esos casos, el principio de conservación correspondiente a esta simetría de la lagrangiana y de la hamiltoniana se obtenía allí de la ecuación (6.119) y aquí es consecuencia directa de la ecuación (6.176), que la sustituye:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt)[Plano inclinado móvil]"
    },
    {
     "mota": "testua",
     "html": "En el sistema de la figura 6.7 la coordenada <math display=\"inline\"><mi>r</mi></math> es cíclica y, como se dijo también en la página 310, el momento canónico conjugado (6.117) correspondiente es una constante del movimiento."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El principio de conservación de la hamiltoniana"
    },
    {
     "mota": "testua",
     "html": "Antes de ver la ley de conservación de la hamiltoniana, estudiemos la ecuación de evolución de una variable dinámica: <math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Si en esta expresión hacemos <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>H</mi></mrow></math>, obtenemos <math display=\"block\"><mrow><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math> y, recordando (6.171): <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>H</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> En consecuencia, <em>la hamiltoniana es una constante del movimiento si y solo si no es una función explícita del tiempo o, lo que es lo mismo, si el tiempo no aparece explícitamente en la lagrangiana</em>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mi>H</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso del péndulo, la hamiltoniana es una constante del movimiento e igual a la energía mecánica: <math display=\"block\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mi>.</mi></mrow></math> Como este principio de conservación da una relación entre las variables <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>p</mi></math> del espacio de fases, es la ecuación de las órbitas de fase de la figura 6.16. En el caso de oscilaciones pequeñas tenemos <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>θ</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> y vemos que las órbitas de fase del oscilador armónico que se recupera en esta aproximación, llamadas también trayectorias de fase, son elipses: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>p</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>l</mi></mrow><mn>2</mn></mfrac><msup><mi>θ</mi><mn>2</mn></msup><mo>=</mo><mi>E</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>l</mi><mi>.</mi></mrow></math> Lo mismo se ve en el entorno del origen de la figura 6.16."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Se conserva la hamiltoniana del sistema de la figura 6.7?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Corchetes de Poisson"
    },
    {
     "mota": "testua",
     "html": "Nos basamos en el sumatorio de la ecuación (6.183) para definir el corchete (o paréntesis) de Poisson de las variables dinámicas <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>≡</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><msub><mi>p</mi><mi>i</mi></msub></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra las siguientes propiedades de los corchetes de Poisson: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>G</mi><mo>,</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">antisimetria</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <img class=\"formula formula-d\" src=\"../media/formulak/52af496d89446ec8.svg\" alt=\"[F, [G, K]] + [G, [K, F]] + [K, [F, G]] = 0, quad (#strong[Jacobiren identitatea]),\" style=\"width:35.747em;height:1.368em\" loading=\"lazy\"> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><msub><mi>q</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mi>.</mi></mrow></math> (Los conmutadores, que son los equivalentes cuánticos, también cumplen estas propiedades, si en el resultado final se introduce un <math display=\"inline\"><mrow><mi>i</mi><mi>h</mi></mrow></math> delante de la delta de Kronecker.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ecuación de evolución (6.183) de una variable dinámica se escribe, por tanto, así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si en esta expresión hacemos <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>H</mi></mrow></math>, por (6.191) recuperamos (6.184). Por otra parte, haciendo <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>i</mi></msub></mrow></math>, las ecuaciones canónicas de Hamilton se escriben de esta forma equivalente: <math display=\"block\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>q</mi><mi>i</mi></msub><mo>,</mo><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>i</mi></msub><mo>,</mo><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> En la última ecuación vemos que la condición para que el momento canónico <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> sea una constante del movimiento es que su corchete con la hamiltoniana sea cero:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>j</mi></msub><mo>,</mo><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En general, como la ecuación de evolución de una variable dinámica <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> sin dependencia explícita del tiempo es <math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>F</mi><mo>,</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <em><math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> será una constante del movimiento si y solo si su corchete con la hamiltoniana es cero</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia si la siguiente variable dinámica es una constante del movimiento en el sistema de la figura 6.7: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>M</mi><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mo>+</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>p</mi><mi>s</mi><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>p</mi><mi>r</mi></msub><msub><mi>p</mi><mi>s</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>s</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El teorema de Liouville"
    },
    {
     "mota": "testua",
     "html": "Para simplificar los cálculos, supongamos que el sistema mecánico tiene un único grado de libertad; la dimensión del espacio de fases será, por tanto, 2. Para estudiar la evolución del área del plano de fases en este caso especial (y, en el caso general, la del hipervolumen del espacio de fases), veamos cómo cambia durante el movimiento una región <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la figura 6.17<span class=\"j-oin\">[Véase la simulación.]</span>. El punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estará en el instante <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>q</mi><mo>′</mo></msup><mo>,</mo><msup><mi>p</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, si las funciones <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> constituyen una solución del sistema: <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>H</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>q</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Evolución de una región del espacio de fases.",
     "src": "../media/irudiak/2706f2ac548fbceb.svg",
     "zabalera": 165
    },
    {
     "mota": "testua",
     "html": "En el instante <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> los puntos de la región <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estarán en <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y el área de esta última será la siguiente: <math display=\"block\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∫</mo><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>d</mi><msup><mi>q</mi><mo>′</mo></msup><mi>d</mi><msup><mi>p</mi><mo>′</mo></msup><mo>=</mo><msub><mo>∫</mo><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mfrac><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>q</mi><mi>d</mi><mi>p</mi><mi>.</mi></mrow></math> Para expresar la integral <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> mediante coordenadas constantes, hemos hecho un cambio de variable adecuado en la segunda integral; así, la dependencia de la variable <math display=\"inline\"><msup><mi>t</mi><mo>′</mo></msup></math> pasa de la región de integración al integrando y allí es más fácil derivar, para calcular la variación del área: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>S</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><msub><mo>∫</mo><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>q</mi><mi>d</mi><mi>p</mi><mo>,</mo></mrow></math> donde el integrando es la derivada del jacobiano, <math display=\"block\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><mfrac><mrow><mi>∂</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mi>.</mi></mrow></math> Esto se calcula fácilmente usando (6.203) y (6.204): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><msup><mi>t</mi><mo>′</mo></msup></mrow></mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub><mo>+</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>∂</mi><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>q</mi><mi>∂</mi><mi>p</mi></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><msup><mi>p</mi><mn>2</mn></msup></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><msup><mi>q</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>p</mi><mi>∂</mi><mi>q</mi></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>q</mi><mi>∂</mi><mi>p</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>H</mi></mrow><mrow><mi>∂</mi><mi>p</mi><mi>∂</mi><mi>q</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mtd></mtr></mtable></math> La generalización de este resultado, que se cumple para todos los grados de libertad, es el teorema de Liouville, de gran importancia en la mecánica estadística: <em>el hipervolumen del espacio de fases es una constante del movimiento</em>. Los puntos del espacio de fases correspondientes a condiciones iniciales distintas se mueven como los fluidos incompresibles del apartado 10.7.1: por eso a este movimiento (abstracto) se le llama a veces flujo hamiltoniano."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo equivalente"
    },
    {
     "mota": "testua",
     "html": "<em>La esfera de la figura se mueve sin deslizar sobre una superficie hemisférica, en un plano vertical.\nCalcula la(s) ecuación(es) del movimiento plano y la frecuencia de las oscilaciones pequeñas.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e03da5b54547b154.svg",
     "zabalera": 239
    },
    {
     "mota": "testua",
     "html": "Para ver la relación entre los ángulos <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>φ</mi></math> de la figura hay que usar que no hay deslizamiento, para calcular la velocidad del centro de la bolita desde el centro de la esfera y desde el punto de contacto en reposo: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Con esto y el momento de inercia <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>, el problema se plantea así, eligiendo como coordenada generalizada <math display=\"inline\"><mi>φ</mi></math>: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>5</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>7</mn><mn>10</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>7</mn><mn>10</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>5</mn><mi>g</mi></mrow><mrow><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> La ecuación del movimiento, por tanto, es la de un péndulo simple de longitud <math display=\"inline\"><mrow><mi>l</mi><mo>≡</mo><mfrac><mn>7</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y podemos usar lo que sabemos de este problema equivalente. Por ejemplo, si las oscilaciones son pequeñas, recuperamos un oscilador armónico y la frecuencia es esta: <math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>5</mn><mi>g</mi></mrow><mrow><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Constantes del movimiento"
    },
    {
     "mota": "testua",
     "html": "<em>En el sistema de la figura el rozamiento entre el bloque y el suelo es despreciable y las dos masas son iguales.\nEn el instante inicial la varilla estaba en la vertical y el sistema en reposo. Halla\nlas ecuaciones del movimiento y, usando los principios de conservación, expresa la velocidad <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> en función del ángulo <math display=\"inline\"><mi>θ</mi></math>. ¿Cómo serán las velocidades cuando <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/6bbbe511262ff67f.svg",
     "zabalera": 148
    },
    {
     "mota": "testua",
     "html": "Si la abscisa del centro del bloque es <math display=\"inline\"><mi>x</mi></math>, las coordenadas del centro de masas de la varilla son estas: <math display=\"block\"><mrow><mi>X</mi><mo>=</mo><mi>x</mi><mo>+</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>Y</mi><mo>=</mo><mfrac><mi>l</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> En la energía cinética de la varilla aparecen dos términos: el término <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>Y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> correspondiente a la traslación del centro de masas y la energía de rotación <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>24</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>. Por tanto, la lagrangiana se expresa así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Las ecuaciones de Lagrange son las siguientes: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Como la coordenada <math display=\"inline\"><mi>x</mi></math> es cíclica, el momento canónico correspondiente, <math display=\"inline\"><mrow><msub><mi>p</mi><mi>x</mi></msub><mo>=</mo><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, será una constante del movimiento. Además de ser el sistema natural, como el tiempo no aparece explícitamente en la lagrangiana, la energía mecánica es igual a la hamiltoniana y una constante del movimiento. Si los valores de estas dos constantes del movimiento se calculan mediante las condiciones iniciales, las dos leyes de conservación se escriben así: <math display=\"block\"><mrow><mn>2</mn><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>l</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mi>.</mi></mrow></math> (La primera ecuación indica que la abscisa del centro de masas no cambiará.) De aquí se despejan fácilmente las velocidades: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>l</mi><mn>4</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><munder><mo>→</mo><mrow><mi>θ</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></munder><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mrow><mfrac><mrow><mn>24</mn><mi>g</mi></mrow><mi>l</mi></mfrac><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>8</mn><mo>−</mo><mn>3</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac></mrow></msqrt><munder><mo>→</mo><mrow><mi>θ</mi><mo>→</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></munder><msqrt><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>l</mi></mfrac></msqrt><mi>.</mi></mrow></math> Cuando <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> la velocidad del centro de la varilla es esta: <math display=\"block\"><mrow><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>Y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msqrt><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>g</mi><mi>l</mi></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Equilibrio relativo"
    },
    {
     "mota": "testua",
     "html": "<em>La circunferencia de la figura gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> alrededor de su diámetro\nvertical. Supongamos que una partícula puntual puede moverse por la circunferencia sin rozamiento.\nHalla la ecuación del movimiento correspondiente. ¿Es constante la energía de la partícula? ¿En qué puntos puede\nestar en equilibrio relativo? ¿Es estable ese equilibrio? ¿Cuál es la frecuencia de las pequeñas oscilaciones en torno a los puntos de equilibrio relativo estable?</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/eb87e6622bc12cd3.svg",
     "zabalera": 88
    },
    {
     "mota": "testua",
     "html": "Si elegimos como coordenada generalizada el ángulo medido desde el punto inferior, la lagrangiana y la ecuación del movimiento se escriben así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>m</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>m</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mfrac><mi>g</mi><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> y se recupera el problema 1.6.3. <br> Si desarrollamos la ecuación del movimiento <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math> en torno al punto de equilibrio, en la aproximación lineal queda <math display=\"block\"><mrow><mi>m</mi><mover><mi>ψ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>V</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ψ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ψ</mi><mo>≡</mo><mi>θ</mi><mo>−</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y, comparando con la ecuación (1.90) del oscilador armónico, vemos que la frecuencia de las pequeñas oscilaciones es la siguiente: <math display=\"block\"><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><msup><mi>V</mi><mo>″</mo></msup><mfrac><msub><mi>θ</mi><mn>0</mn></msub><mi>m</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> En nuestro caso, las frecuencias en torno a las configuraciones de equilibrio estable que encontramos en el problema 1.6.3 son estas: <math display=\"block\"><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><msup><mi>V</mi><mo>″</mo></msup><mfrac><mn>0</mn><mi>m</mi></mfrac></mrow></msqrt><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>g</mi><mi>R</mi></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mo>±</mo></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><msup><mi>V</mi><mo>″</mo></msup><mfrac><msub><mi>θ</mi><mo>±</mo></msub><mi>m</mi></mfrac></mrow></msqrt><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>4</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi><mo>⇔</mo><mi>φ</mi><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> la ligadura es móvil, el sistema no es natural y la hamiltoniana no es la energía mecánica: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mo>−</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>.</mi></mrow></math> La hamiltoniana se conserva (<math display=\"inline\"><mrow><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>), pero la energía mecánica en general no, pues <math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> no es cero. La energía cambiará, porque hace falta un motor externo para mantener <math display=\"inline\"><mi>ω</mi></math> constante."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problemas equivalentes"
    },
    {
     "mota": "testua",
     "html": "<em>Una partícula puntual se mueve, bajo la acción de la gravedad, sobre la superficie lisa interior del cono vertical de la figura.\nHalla las constantes del movimiento. Plantea el problema unidimensional equivalente y, con él,\ndescribe cualitativamente el movimiento de la partícula.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/c52caf68bbb7c12b.svg",
     "zabalera": 173
    },
    {
     "mota": "testua",
     "html": "Como en coordenadas esféricas la ligadura es <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>α</mi></mrow></math>, la lagrangiana se escribe así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mi>φ</mi></math> es cíclica y el momento canónico correspondiente (el momento angular respecto al eje vertical) es una constante del movimiento: <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>φ</mi></msub><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> Por otra parte, el sistema es natural y en la lagrangiana <math display=\"inline\"><mi>t</mi></math> no aparece explícitamente; por tanto, la energía mecánica es igual a la hamiltoniana y una constante del movimiento: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> Si eliminamos <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> mediante el momento angular, se obtiene un problema unidimensional: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>m</mi><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mfrac><msubsup><mi>p</mi><mi>φ</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi></mrow></mfrac><mi>.</mi></mrow></math> Con las definiciones <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi>L</mi><mo>≡</mo><msub><mi>p</mi><mi>φ</mi></msub><mi>/</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>, recuperamos la evolución radial del problema elástico que estudiamos en el apartado 4.3.4 (en la evolución azimutal habrá una constante, pues las relaciones entre la velocidad <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> y el momento angular son distintas) y, en consecuencia, el estudio actual es el mismo. En el problema unidimensional el movimiento será una oscilación entre dos puntos de retorno y en el problema original la partícula se moverá en el cono entre las circunferencias horizontales de radio <math display=\"inline\"><mrow><msub><mi>r</mi><mo>±</mo></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. Además, el punto de equilibrio estable del problema unidimensional en el mínimo de la energía potencial efectiva corresponde, en el problema original, a una órbita circular horizontal estable."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Invariancia <em>gauge</em>"
    },
    {
     "mota": "testua",
     "html": "<em>Como sabemos, si se suma una constante a la energía potencial, el campo de fuerzas no cambia. Las ecuaciones de Lagrange\nmuestran, además, una invariancia mucho más amplia e importante:\nsi a la lagrangiana se le suma la derivada total de cualquier función de la forma <math display=\"inline\"><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,\nlas ecuaciones de Lagrange no cambian. Demuestra directamente que se obtienen las mismas ecuaciones del movimiento de Lagrange\na partir de las lagrangianas <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mi>d</mi><mi>G</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>. Demuestra de nuevo el resultado mediante el principio de Hamilton.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/853b8a06811db6b4.svg",
     "zabalera": 163
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 10pt, fill:berdea)[FIGURA 6.18   Energía potencial efectiva y una órbita.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por la definición de derivada total, tenemos lo siguiente: <math display=\"block\"><mrow><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><mi>t</mi><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Así pues, usando <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow></math> en las ecuaciones de Lagrange se obtendrá lo mismo: las dos lagrangianas son equivalentes. <br> Por otra parte, valiéndonos del principio de Hamilton la demostración es más fácil. Usando la regla de Newton y Barrow y que los extremos no cambian, tenemos <math display=\"block\"><mrow><mi>δ</mi><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>+</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>δ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>2</mn></msub></msub><mo>−</mo><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>1</mn></msub></msub><mo>+</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>δ</mi><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mi>L</mi><mi>d</mi><mi>t</mi></mrow></math>, pues <math display=\"inline\"><mrow><mi>δ</mi><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>1</mn></msub></msub><mo>=</mo><mi>δ</mi><mi>G</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>t</mi><mn>2</mn></msub></msub><mo>=</mo><mn>0</mn></mrow></math>. En consecuencia, de las lagrangianas <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mrow><mi>L</mi><mo>+</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover></mrow></math> se obtendrán las mismas ecuaciones del movimiento. (Véase también el problema 6.91.)"
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Ligaduras y coordenadas generalizadas])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tras estudiar las coordenadas generalizadas, ¿resulta más fácil el problema 1.5?"
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
       "html": "En el siglo XIX se usaba para dibujar elipses el instrumento de la izquierda de la figura 6.19. La varilla tiene un lápiz en un extremo y se colocan dos tornillos a distancias <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math> de ese extremo. Los tornillos pueden moverse por dos ranuras perpendiculares. Elige la coordenada generalizada adecuada y demuestra que la trayectoria del lápiz es elíptica. ¿Cuál es la excentricidad de la elipse?"
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
       "html": "¿Qué curvas se dibujaban con el instrumento de la derecha de la figura 6.19?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Estática analítica])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La varilla de la figura está en un hemisferio liso. ¿Cuáles son las posiciones de equilibrio estable de la varilla? Discute lo que ocurre al cambiar el cociente <math display=\"inline\"><mrow><mi>l</mi><mi>/</mi><mi>R</mi></mrow></math>."
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
       "html": "Colocamos una varilla en el cuenco hemisférico de la figura. Si el cuenco y la varilla tienen masas iguales y el rozamiento es despreciable, ¿cuál es la posición de equilibrio del sistema?"
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
       "html": "Las dos masas de la figura están unidas por una varilla ligera. Si el sistema se coloca en un hemisferio hueco, ¿cuál será la posición de equilibrio? ¿Es estable?"
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
       "html": "Una varilla puede moverse sin rozamiento en un plano vertical en el hueco simétrico de la figura. Hay tres posiciones de equilibrio. Demuestra que la posición de equilibrio horizontal es inestable, si las otras dos son estables."
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
       "html": "Una varilla puede moverse sin rozamiento en un plano vertical en el hueco parabólico de la figura. La longitud de la varilla es <math display=\"inline\"><mi>l</mi></math> y la ecuación del hueco <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demuestra que las abscisas de los puntos de contacto son las siguientes, si se elige como coordenada generalizada el ángulo <math display=\"inline\"><mi>θ</mi></math> entre la horizontal y la varilla: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∓</mo><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Discute las configuraciones de equilibrio estable e inestable. Comenta el problema 6.7 en el contexto de este."
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
       "html": "Resuelve el problema 5.29 usando la mecánica analítica. Discute la estabilidad de los puntos de equilibrio. <br>  <em>Nota</em>: No hay deslizamiento."
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
       "html": "Se coloca un semicilindro homogéneo en un plano inclinado, como muestra la figura. <br> (a) Si el rozamiento estático con el plano es suficientemente grande para que el semicilindro se mueva sin deslizar, ¿cuál es el ángulo <math display=\"inline\"><mi>φ</mi></math> entre el eje de simetría del semicilindro y la vertical en el equilibrio? <br> (b) ¿Qué ocurrirá si, partiendo del equilibrio con <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math> horizontal, se aumenta muy lentamente la inclinación del plano, siendo <math display=\"inline\"><mi>μ</mi></math> el coeficiente de rozamiento estático? <br>  <em>Sugerencia</em>: Calcula cómo se mueve la recta de contacto <math display=\"inline\"><mi>P</mi></math> al cambiar <math display=\"inline\"><mi>φ</mi></math>. Recuerda el problema 5.28."
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
       "html": "Resuelve el problema 5.30 mediante el principio de Torricelli."
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
       "html": "Una punta de un compás formado por dos varillas homogéneas idénticas perpendiculares se cuelga de una cuerda, como muestra la figura. Calcula las posiciones de equilibrio y estudia su estabilidad."
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
       "html": "La polea de la figura puede girar sin obstáculo alrededor de un eje horizontal perpendicular que pasa por su centro. En su perímetro se ha pegado una partícula de masa <math display=\"inline\"><mi>M</mi></math> y se ha enrollado un hilo fino ligero. En el extremo libre del hilo cuelga una masa <math display=\"inline\"><mi>m</mi></math>. Estudia cuándo puede estar en equilibrio este sistema. Calcula la(s) posición(es) de equilibrio y discute su(s) estabilidad(es). ¿Qué cambia en tus respuestas si se tiene en cuenta la masa de la polea?"
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
       "html": "Las dos barras de la figura pueden moverse en un mismo plano vertical en torno a articulaciones colocadas a la misma altura. La barra pesada de longitud <math display=\"inline\"><mi>L</mi></math> está sobre el extremo libre de la varilla ligera de longitud <math display=\"inline\"><mi>d</mi></math>. El rozamiento entre las barras y en las articulaciones es despreciable. Dibuja la(s) configuración(es) de equilibrio y discute su(s) estabilidad(es). <br>  <em>Nota</em>: <math display=\"inline\"><mrow><mi>L</mi><mo>&gt;</mo><mi>a</mi><mo>+</mo><mi>d</mi></mrow></math>."
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
       "html": "De una cuerda enrollada en la polea homogénea de la figura cuelga un bloque de masa <math display=\"inline\"><mi>m</mi></math>. Gracias al rozamiento con el plano inclinado, el sistema está en equilibrio. ¿Cuánto vale el ángulo <math display=\"inline\"><mi>θ</mi></math>? ¿Cómo es el equilibrio?"
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
       "html": "Las articulaciones de la figura son lisas y el sistema está en equilibrio bajo la acción de la gravitación y de la fuerza horizontal <math display=\"inline\"><mi>F</mi></math>. <br> (a) Halla los valores de los dos ángulos. <br> (b) ¿Es estable el equilibrio? <br> (c) ¿Cómo hay que elegir <math display=\"inline\"><mi>F</mi></math> para que el ángulo entre las dos varillas sea máximo? <br> (d) ¿Cuánto vale ese valor máximo?"
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
       "html": "La bola de masa <math display=\"inline\"><mi>m</mi></math> de la figura puede moverse por un eje vertical liso y está unida a la masa <math display=\"inline\"><mi>M</mi></math> mediante una cuerda sin masa y una polea. Halla la configuración de equilibrio. ¿Cuándo existe y cuándo es estable? <br>  <em>Nota</em>: Desprecia los radios de la bola y de la polea."
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
       "html": "A un disco de masa <math display=\"inline\"><mi>M</mi></math> se le ha unido una masa puntual <math display=\"inline\"><mi>m</mi></math> a distancia <math display=\"inline\"><mrow><mi>r</mi><mo>≤</mo><mi>R</mi></mrow></math> del centro, y se ha colocado en el plano inclinado de la figura. El coeficiente de rozamiento estático es <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. Halla y discute las configuraciones de equilibrio. ¿Cómo puede usarse el resultado para explicar el movimiento de la bola caracol, sabiendo que dentro tiene un líquido viscoso y otra bola?"
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
       "html": "El aro vertical de la figura puede moverse por el plano inclinado y tiene pegada en la periferia una partícula de la misma masa. El coeficiente de rozamiento estático entre el aro y el plano es mayor que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. (¿Para qué hace falta esta condición?) Demuestra que cuando se cumple una condición que debes hallar hay dos configuraciones de equilibrio. Estudia su estabilidad."
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
       "html": "El extremo izquierdo de la cuerda ligera de la figura está fijo y en el otro, tras pasar por la anilla lisa superior, hay atado un bloque de masa <math display=\"inline\"><mi>m</mi></math>. En el medio, de otra anilla lisa cuelga una masa <math display=\"inline\"><mi>M</mi></math>. ¿Cuándo puede estar en equilibrio el sistema? ¿Cuál es entonces la configuración de equilibrio? ¿Es estable ese equilibrio?"
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
       "html": "<span class=\"j-smallcaps\">La balanza de Roberval</span>"
      },
      {
       "mota": "testua",
       "html": ". La idea de esta balanza se ve en la figura (y en la fotografía 6.1). Si los dos pesos son iguales, la balanza está en equilibrio, en todas las posiciones y alturas de los pesos. Usa la estática analítica para explicar esa propiedad."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Cálculo de variaciones y principio de Hamilton])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span class=\"j-smallcaps\">La braquistócrona</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Cuando Johann Bernoulli propuso este problema en 1696, lo resolvieron Jacob Bernoulli, Leibniz, Newton y l&#x27;Hôpital.]</span> Una partícula puntual se mueve por un alambre liso de hierro bajo la acción de la gravedad entre dos puntos fijos (véase en la figura de la portada un sistema parecido). Si se suelta desde el reposo, ¿cómo debe ser la forma del alambre para que el tiempo que se tarda en recorrer el camino sea mínimo? <br>  <em>Sugerencia</em>: Supón que la forma del alambre viene dada por la ecuación <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Usa el principio de conservación de la energía mecánica para calcular la velocidad. Expresa el tiempo que se tarda en recorrer el camino como una integral y utiliza el cálculo de variaciones para hallar el mínimo del tiempo."
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
       "html": "Como sabemos, la trayectoria dinámica del tiro parabólico de la figura viene dada por las ecuaciones siguientes: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Calcula la acción correspondiente a cada una de las trayectorias variadas siguientes: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>ε</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>π</mi><mi>t</mi></mrow><mi>T</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>g</mi><msup><mi>t</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> ¿En qué caso se obtiene el valor mínimo? ¿Qué es <math display=\"inline\"><mi>T</mi></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Ecuaciones de Lagrange])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla las componentes cilíndricas de la aceleración del punto material mediante las ecuaciones de Lagrange."
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
       "html": "El sistema no inercial <math display=\"inline\"><mi>S</mi></math> está acelerado respecto a un sistema inercial, pero la orientación entre ambos sistemas es constante. Halla las ecuaciones del movimiento del punto material usando como coordenadas generalizadas las cartesianas del sistema <math display=\"inline\"><mi>S</mi></math>. Comenta el resultado."
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
       "html": "<span class=\"j-smallcaps\">La máquina de Atwood</span>"
      },
      {
       "mota": "testua",
       "html": ". ¿Cuál es la ecuación del movimiento del sistema de la figura, si no despreciamos la masa de la polea? <br>  <em>Nota</em>: La cuerda no desliza en la polea, cuyo radio es <math display=\"inline\"><mi>R</mi></math> y cuyo momento de inercia es <math display=\"inline\"><mi>I</mi></math>."
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
       "html": "La partícula de la figura se mueve en una recta lisa. La recta está en un plano vertical y gira alrededor del punto <math display=\"inline\"><mi>O</mi></math> con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Obtén y resuelve las ecuaciones del movimiento. Describe cómo es el movimiento <br> (a) en el caso general y <br> (b) si las condiciones iniciales se eligen en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> de modo que se cumpla en coordenadas polares la condición <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><msub><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>g</mi></mrow></math>."
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
       "html": "Si la polea y las cuerdas no tienen masa, ¿cuáles son las ecuaciones del movimiento del sistema que aparece en la figura?"
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
       "html": "Los planos inclinados que aparecen en la figura son lisos. La polea, formada por dos ruedas, y las cuerdas no tienen masa. Si el radio de una rueda es la mitad del de la otra, halla la ecuación del movimiento de la masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>."
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
       "html": "<span class=\"j-smallcaps\">El péndulo doble</span>"
      },
      {
       "mota": "testua",
       "html": ". Halla las ecuaciones del movimiento plano del péndulo doble de la figura.<span class=\"j-oin\">[ En la simulación pueden verse las soluciones de las ecuaciones del movimiento.]</span>"
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
       "html": "Resuelve el problema 2.42 usando la mecánica analítica."
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
       "html": "Una partícula se mueve por la hélice lisa vertical de la figura bajo la acción de la gravedad. Si la ecuación de la hélice es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>k</mi><mi>φ</mi><mi>/</mi><mn>2</mn><mi>π</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, ¿cuál es la lagrangiana de la partícula? Halla la solución de la ecuación del movimiento."
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
       "html": "Resuelve el problema 5.71 mediante la mecánica analítica."
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
       "html": "Un hilo fino ligero atado al punto fijo <math display=\"inline\"><mi>O</mi></math> se ha enrollado en la periferia de un disco homogéneo. El sistema se mueve como un yo-yo en un plano y el hilo está siempre en tensión. Halla las ecuaciones del movimiento. Comprueba que <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> puede ser, en todo instante, una solución particular. ¿Cuál es la razón física? ¿Cómo se mueve el disco en ese caso especial?"
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
       "html": "El radio de giro de la polea de la figura es <math display=\"inline\"><mi>K</mi></math> y la cuerda que se enrolla en el cilindro interior de radio <math display=\"inline\"><mi>r</mi></math> sostiene un bloque de masa <math display=\"inline\"><mi>m</mi></math> mediante la pequeña polea sin masa. <br> (a) Si la polea grande no desliza, ¿cuáles son las ecuaciones de ligadura que cumplen las variables <math display=\"inline\"><mrow><mi>X</mi><mo>,</mo><mi>θ</mi></mrow></math> y <math display=\"inline\"><mi>z</mi></math>? Escribe la lagrangiana y la solución de las ecuaciones del movimiento. Si el sistema se suelta desde el reposo en la configuración de la figura, ¿cómo se mueve la polea, es decir, cómo son <math display=\"inline\"><mover><mi>X</mi><mo accent=\"true\">̇</mo></mover></math> y <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math>, ¿ambas positivas, ambas negativas…? <br> (b) ¿Qué cambia en tus respuestas si la mesa horizontal es lisa?"
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
       "html": "La varilla ligera de la figura puede girar sin obstáculo alrededor del eje vertical <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> y la anilla de masa <math display=\"inline\"><mi>m</mi></math> se mueve sin rozamiento por la varilla. En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> tenemos la configuración de la figura. Escribe la lagrangiana y, sin hacer ningún cálculo, la solución de las ecuaciones del movimiento. Comenta el resultado."
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
       "html": "El sistema de la figura está en un plano vertical. La longitud propia del muelle es <math display=\"inline\"><mi>a</mi></math> y su constante recuperadora <math display=\"inline\"><mi>k</mi></math>. La lámina de masa <math display=\"inline\"><mi>m</mi></math> puede moverse sobre la superficie horizontal lisa y el disco homogéneo que tiene encima no desliza. La masa del disco es <math display=\"inline\"><mi>M</mi></math> y su radio <math display=\"inline\"><mi>R</mi></math>. Halla las ecuaciones del movimiento. El sistema se suelta desde el reposo, estando el centro del disco sobre el punto <math display=\"inline\"><mi>A</mi></math> y siendo el alargamiento del muelle <math display=\"inline\"><mi>a</mi></math>. ¿Cómo se mueve el sistema a continuación? ¿Cuál es la longitud mínima <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> para que el disco no se salga de la lámina?"
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
       "html": "El disco de la figura se mueve sin deslizar por la ranura hecha en el plano, y la constante recuperadora de los dos muelles idénticos es <math display=\"inline\"><mi>k</mi></math>. Los muelles están siempre alargados y la masa del disco es <math display=\"inline\"><mi>m</mi></math>. Halla la lagrangiana del sistema, la frecuencia de las oscilaciones y la solución general de la ecuación del movimiento. Si el disco se suelta desde el reposo, siendo <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> el alargamiento de los muelles, ¿cómo hay que elegir la condición inicial <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> para que los muelles estén siempre alargados? <br>  <em>Nota</em>: Desprecia el espesor del disco."
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
       "html": "El disco de la figura puede girar sin deslizar sobre la plataforma y está unido a la pared mediante un muelle. El sistema se mueve en el plano de la figura. Halla la relación entre las aceleraciones del disco y de la plataforma. Calcula la frecuencia de las oscilaciones del sistema. Si en el instante inicial el sistema está en reposo y la longitud del muelle es <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub></mrow></math>, ¿cómo se mueven después los dos cuerpos? <br>  <em>Notas</em>: La constante recuperadora del muelle es <math display=\"inline\"><mi>k</mi></math> y su longitud natural <math display=\"inline\"><msub><mi>X</mi><mn>0</mn></msub></math>. La masa del disco es <math display=\"inline\"><mi>m</mi></math> y su radio <math display=\"inline\"><mi>R</mi></math>. La masa de la plataforma es <math display=\"inline\"><mi>M</mi></math>."
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
       "html": "La cuña de masa <math display=\"inline\"><mi>M</mi></math> puede moverse sobre la mesa horizontal lisa y la varilla de masa <math display=\"inline\"><mi>m</mi></math> en la dirección vertical, sin rozamiento, apoyándose su extremo inferior en el plano superior de la cuña. Halla la(s) ecuación(es) del movimiento y la(s) constante(s) del movimiento. Al principio el sistema estaba en reposo y el extremo inferior de la varilla a altura <math display=\"inline\"><mi>h</mi></math>. Calcula la velocidad final de la cuña y cuándo se alcanza."
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
       "html": "En el sistema de la figura el bloque de masa <math display=\"inline\"><mi>m</mi></math> se mueve en vertical y el yo-yo de masa <math display=\"inline\"><mi>M</mi></math> sobre el plano liso. El momento de inercia del yo-yo (respecto a su eje de simetría) es <math display=\"inline\"><mi>I</mi></math>. Las masas de la polea superior y de la cuerda son despreciables. Escribe la lagrangiana del sistema y las ecuaciones del movimiento. ¿Cómo hay que elegir el ángulo <math display=\"inline\"><mi>α</mi></math> para que, al soltar el yo-yo, su centro no se mueva? ¿Puede hacerse siempre esa elección?"
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
       "html": "El cilindro homogéneo de la figura puede girar sin rozamiento alrededor de su eje de simetría horizontal. La masa del cilindro es <math display=\"inline\"><mi>M</mi></math> y su radio <math display=\"inline\"><mi>R</mi></math>. La masa de la cuerda fina enrollada en el cilindro es <math display=\"inline\"><mi>m</mi></math> y su longitud <math display=\"inline\"><mi>l</mi></math>. El sistema se suelta desde el reposo cuando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Calcula la solución <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (hasta que la cuerda empiece a deslizar). <br>  <em>Nota</em>: Haz hipótesis simplificadoras."
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
       "html": "El prisma isósceles de la figura puede moverse sobre una superficie horizontal lisa. Al principio el prisma y la partícula puntual están en reposo y la partícula en el punto <math display=\"inline\"><mi>A</mi></math>. Si el rozamiento es despreciable, ¿cuándo llegará la partícula a la superficie horizontal? Halla dos constantes del movimiento."
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
       "html": "Los dos cuerpos de la figura empiezan a deslizar desde el reposo: la masa <math display=\"inline\"><mi>m</mi></math> desciende por el plano inclinado y este se mueve sobre la superficie horizontal. Si todos los rozamientos son despreciables, ¿cuáles serán las velocidades de las masas cuando la partícula <math display=\"inline\"><mi>m</mi></math> llegue al suelo?"
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
       "html": "La partícula de masa <math display=\"inline\"><mi>m</mi></math> puede moverse sin rozamiento a lo largo de la varilla del péndulo de la figura."
      },
      {
       "mota": "testua",
       "html": "(a) Halla la lagrangiana de este sistema, las ecuaciones del movimiento, la hamiltoniana y la energía mecánica. ¿Se conservará esta última? <br> (b) Si, por la acción de un motor, la varilla se moviera con velocidad angular constante, ¿cómo cambiarían tus respuestas?"
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
       "html": "El aro de la figura tiene masa <math display=\"inline\"><mi>M</mi></math> y puede girar alrededor de su diámetro vertical. Una partícula de masa <math display=\"inline\"><mi>m</mi></math> puede moverse por el aro sin rozamiento y, cuando la velocidad angular del aro es <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y está en reposo en el punto superior <math display=\"inline\"><mi>A</mi></math>, empieza a deslizar. <br> (a) ¿Cuál es la lagrangiana del sistema? <br> (b) Escribe las ecuaciones del movimiento. <br> (c) Halla dos constantes del movimiento. <br> (d) ¿Cuál es la velocidad angular del aro cuando la partícula está en el punto <math display=\"inline\"><mi>B</mi></math>? <br> (e) ¿Cuál es la velocidad relativa de la partícula en el mismo instante?"
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
       "html": "En el sistema de la figura la longitud <math display=\"inline\"><mi>l</mi></math> de la cuerda de masa <math display=\"inline\"><mi>m</mi></math> es mucho mayor que el radio de la polea y el rozamiento es despreciable. Calcula la lagrangiana y la hamiltoniana del sistema. ¿Cuál(es) es (son) la(s) ecuación(es) del movimiento? Si al principio la masa de la derecha estaba en reposo a la altura de la polea, ¿cuál será su velocidad cuando la otra masa llegue a la polea?"
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
       "html": "La varilla que está en reposo en la posición que muestra la figura empieza a caer en un plano vertical, sin rozamiento. Escribe la lagrangiana y la hamiltoniana del sistema. Calcula la(s) ecuación(es) del movimiento de Lagrange y la(s) constante(s) del movimiento. Escribe la ecuación del movimiento de la abscisa del centro de masas y halla dónde termina el contacto entre la varilla y la pared vertical.<span class=\"j-oin\">[Véase la simulación.]</span>"
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
       "html": "La longitud <math display=\"inline\"><mi>α</mi></math> de un péndulo plano varía con velocidad constante: <math display=\"inline\"><mrow><mover><mi>l</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>α</mi></mrow></math>. Halla la lagrangiana, la hamiltoniana y la ecuación del movimiento del sistema. ¿Es la hamiltoniana una constante del movimiento? ¿Y la energía? ¿Por qué?"
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
       "html": "Una partícula que se mueve en un aro vertical liso está unida al punto inferior mediante un muelle, como muestra la figura. Si se suelta desde el punto superior con velocidad despreciable, ¿cuál será la velocidad de la partícula abajo? <br>  <em>Nota</em>: Para simplificar los cálculos puedes despreciar la longitud propia del muelle."
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
       "html": "El aro de masa <math display=\"inline\"><mi>M</mi></math> puede girar sin deslizar sobre una mesa en un plano vertical, como muestra la figura. Una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> puede moverse por el aro sin rozamiento. Al principio el aro está en reposo y la partícula parte del punto superior con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>. Halla y calcula dos constantes del movimiento. ¿Son constantes la componente horizontal del momento lineal y la energía mecánica? ¿Por qué? ¿Cuál es la velocidad de la partícula (en el sistema de la mesa) cuando está en el punto inferior? Simplifica el resultado en los límites <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>M</mi><mi>/</mi><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math>."
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
       "html": "Las dos varillas de la figura no tienen masa, tienen longitud <math display=\"inline\"><mi>l</mi></math> y están unidas mediante una articulación lisa en el centro. En cada extremo hay una partícula de masa <math display=\"inline\"><mi>m</mi></math>, de modo que las dos de abajo pueden moverse sobre la mesa horizontal sin rozamiento. La articulación solo se mueve en la dirección vertical y las masas en el plano vertical común. Halla la ecuación diferencial que cumple el ángulo <math display=\"inline\"><mi>θ</mi></math>. Por una pequeña perturbación, el sistema parte de la posición vertical de reposo <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>. ¿Cuál es la velocidad de cada partícula cuando las dos de arriba llegan a la mesa?"
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
       "html": "El punto de suspensión <math display=\"inline\"><mi>E</mi></math> del péndulo simple de la figura se mueve en dirección vertical respecto al punto fijo <math display=\"inline\"><mi>O</mi></math>, según la ley <math display=\"inline\"><mrow><mi>O</mi><mi>E</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Calcula la lagrangiana y la hamiltoniana del sistema. ¿Es esta última una constante del movimiento? ¿Y la energía mecánica? Demuestra que el efecto de la aceleración <math display=\"inline\"><mrow><mover><mi>γ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del punto <math display=\"inline\"><mi>E</mi></math> en la ecuación del movimiento es equivalente a un campo gravitatorio variable. ¿Qué ocurre cuando <math display=\"inline\"><mrow><mover><mi>γ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>?"
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
       "html": "Un extremo de la varilla homogénea de la figura puede moverse por el eje vertical <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> y el otro extremo por el plano horizontal <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>. El rozamiento es despreciable y la masa y la longitud de la varilla son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>l</mi></math>, respectivamente. Usa dos ángulos como coordenadas generalizadas. Elige un triedro principal adecuado para escribir las componentes de la velocidad angular y (con ayuda del teorema de König) la energía cinética y la lagrangiana. Escribe las ecuaciones de Lagrange y halla las constantes del movimiento del sistema."
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
       "html": "En un carro que se mueve con velocidad constante <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> se ha colocado un oscilador armónico, como muestra la figura. Elige la deformación <math display=\"inline\"><mi>x</mi></math> del muelle como coordenada generalizada. <br> (a) Escribe la lagrangiana <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math> y la hamiltoniana <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> en el sistema de laboratorio (el del suelo). <br> (b) Escribe la lagrangiana <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math> y la hamiltoniana <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> en el sistema del carro. <br> (c) Demuestra que las ecuaciones de Lagrange que se encuentran en ambos sistemas son equivalentes. <br> (d) ¿Es <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> igual a la energía mecánica? ¿Y <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math>? ¿Por qué? <br> (e) ¿Es <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> una constante del movimiento? ¿Y <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math>? ¿Por qué? <br> (f) ¿Se conserva la energía mecánica en el sistema de laboratorio? ¿Y en el del carro? ¿Por qué? <br> (g) ¿Cuál es la relación entre <math display=\"inline\"><msub><mi>L</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>L</mi><mn>2</mn></msub></math>?"
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
       "html": "¿Puede ocurrir que la hamiltoniana y la energía mecánica sean constantes del movimiento aunque sean distintas?"
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
       "html": "Una carga puntual <math display=\"inline\"><mi>q</mi></math> se mueve en el campo electrostático de un dipolo eléctrico fijo. Así, si se eligen las coordenadas polares esféricas de modo que el dipolo esté en el origen y el momento dipolar sea <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><mi>p</mi><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, la energía potencial es esta: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mi>q</mi><mi>p</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Halla las ecuaciones del movimiento de la partícula y las leyes de conservación. Supongamos ahora que se eligen las condiciones iniciales de modo que en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> sea <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>. Comprueba que la carga se mueve de ida y vuelta en un arco de circunferencia. ¿Dónde está situado ese arco? ¿Cuál es su longitud?"
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
       "html": "La plataforma de la figura se mueve sobre dos troncos cilíndricos idénticos. No hay ningún deslizamiento en los troncos. Sobre la plataforma puede moverse, sin rozamiento, un bloque de masa <math display=\"inline\"><mi>m</mi></math>, por la acción del muelle. Calcula la lagrangiana del sistema, la hamiltoniana, las ecuaciones del movimiento y sus soluciones. Describe cualitativamente el movimiento. Halla las constantes del movimiento. ¿Se conserva la energía mecánica? Calcula (en dos líneas) el rozamiento total que ejerce el suelo."
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
       "html": "Las masas de las varillas uniformes <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mi>C</mi></mrow></math> de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math> son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>. Las varillas se han unido mediante la articulación lisa <math display=\"inline\"><mi>B</mi></math> y pueden moverse en un plano vertical, estando los extremos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>C</mi></math> sobre una mesa horizontal lisa. Al principio las varillas estaban en reposo, con una inclinación <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> respecto a la horizontal. Escribe la(s) ecuación(es) de Lagrange y halla la(s) constante(s) del movimiento. Calcula las velocidades de los puntos <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>C</mi></mrow></math> y <math display=\"inline\"><mi>B</mi></math> cuando la última llegue al suelo."
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
       "html": "<span class=\"j-smallcaps\">Deslizamiento y rotación</span>"
      },
      {
       "mota": "testua",
       "html": ". La masa y el radio del disco de la figura son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>a</mi></math>, respectivamente, y tiene pegada una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> en un punto del perímetro. Al principio el sistema estaba en equilibrio y la partícula en el punto más alto; pero empieza a moverse, en el plano del disco, por una pequeña perturbación. Hay que considerar dos casos: (a) el disco se mueve sin deslizar en el suelo y (b) el suelo es completamente liso. En cada caso, <br> (1) Halla la(s) ecuación(es) de Lagrange del movimiento. <br> (2) Escribe la(s) ley(es) de conservación. <br> (3) Calcula las velocidades del centro de masas y de la partícula cuando esta última esté (a) a la altura del centro <math display=\"inline\"><mi>O</mi></math> y (b) en el punto más bajo."
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
       "html": "¿Qué sistema mecánico describe la lagrangiana <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></math>? ¿Se conserva la hamiltoniana? ¿Y la energía mecánica? ¿Son iguales esas dos magnitudes?"
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
       "html": "Los discos de la figura se mueven en el mismo plano vertical, teniendo enrollado cada uno un extremo de una cuerda ligera. El disco grande se mueve sobre la mesa horizontal sin deslizar, y el centro de masas del otro solo se mueve en vertical. La masa de la polea es despreciable. Usa la velocidad de la cuerda para hallar las relaciones entre las velocidades de los centros de masas de los discos y las velocidades angulares. ¿Qué se conserva en el movimiento? Calcula las aceleraciones de los centros de masas de los discos."
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
       "html": "Una partícula libre se mueve por el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>. Elige <math display=\"inline\"><mrow><mi>q</mi><mo>≡</mo><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> como coordenada generalizada, con la constante <math display=\"inline\"><mi>a</mi></math>. Escribe la lagrangiana. ¿Se conserva la hamiltoniana? ¿Y la energía mecánica? Comenta los resultados."
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
       "html": "Al principio el cilindro y la plataforma de la figura están en reposo, pero en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> la plataforma empieza a moverse con aceleración horizontal constante <math display=\"inline\"><mi>a</mi></math>. La masa, el radio y el radio de giro respecto al centro de masas <math display=\"inline\"><mi>O</mi></math> del cilindro son <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>R</mi></mrow></math> y <math display=\"inline\"><mi>K</mi></math>, respectivamente. El cilindro no desliza y el coeficiente de rozamiento estático es <math display=\"inline\"><mi>μ</mi></math>. <br> (a) Halla la relación entre la velocidad <math display=\"inline\"><mi>V</mi></math> del centro de masas del cilindro, el tiempo y la velocidad angular <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math>. <br> (b) Escribe la lagrangiana y la ecuación del movimiento. Resuelve esta última. <br> (c) ¿Hacia dónde se mueve el cilindro en el laboratorio y en la plataforma? <br> (d) ¿Cuál puede ser el valor máximo de la aceleración <math display=\"inline\"><mi>a</mi></math> para que el cilindro no empiece a deslizar? <br> (e) ¿Qué se conserva y qué no?"
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
       "html": "Con un único grado de libertad, ¿cuándo son iguales la lagrangiana y la hamiltoniana?"
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
       "html": "<span class=\"j-smallcaps\">La isócrona</span>"
      },
      {
       "mota": "testua",
       "html": ".<span class=\"j-oin\">[Leibniz propuso este problema en 1687. Huygens y Leibniz publicaron la solución en el mismo año y en 1689.]</span> Una partícula que cae por una curva lisa de un plano vertical recorre alturas iguales en tiempos iguales. ¿Cuál es la ecuación de la curva?"
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
       "html": "La masa <math display=\"inline\"><mi>m</mi></math> del péndulo simple esférico de la figura puede moverse sin obstáculo por la superficie esférica de radio <math display=\"inline\"><mi>L</mi></math>. En un instante tenemos esto: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>g</mi></mrow><mi>L</mi></mfrac></msqrt><mi>.</mi></mrow></math> Demuestra que en la órbita se cumple <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>≤</mo><mi>z</mi><mo>≤</mo><msub><mi>z</mi><mn>2</mn></msub></mrow></math>. Halla <math display=\"inline\"><msub><mi>z</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>z</mi><mn>2</mn></msub></math>. ¿Pasa <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> por la vertical?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Aproximación lineal])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El tubo circular vertical de la figura y la masa <math display=\"inline\"><mi>M</mi></math> están unidos y pueden moverse juntos sin rozamiento sobre una mesa horizontal. Además, la partícula puntual de masa <math display=\"inline\"><mi>m</mi></math> puede moverse por el tubo liso. <br> (a) Escribe la lagrangiana. <br> (b) Calcula las ecuaciones del movimiento. <br> (c) En el límite de ángulos pequeños, resuelve las ecuaciones del movimiento para hallar el ángulo <math display=\"inline\"><mi>θ</mi></math> en función del tiempo."
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
       "html": "El muelle de la figura se mueve en dirección vertical y la varilla en un plano vertical. Escribe la lagrangiana del sistema usando la deformación <math display=\"inline\"><mi>x</mi></math> del muelle y el ángulo <math display=\"inline\"><mi>θ</mi></math>. Calcula las ecuaciones del movimiento y las constantes del movimiento. ¿Qué ocurre cuando los desplazamientos medidos desde la posición de equilibrio estable son muy pequeños?"
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
       "html": "El aro de masa <math display=\"inline\"><mi>m</mi></math> de la figura puede moverse sin deslizar sobre el suelo en un plano vertical, con una partícula de la misma masa pegada. (a) Halla la lagrangiana del sistema. (b) Calcula la ecuación del movimiento. (c) Si el sistema se suelta en reposo en la posición de la figura, ¿cuáles serán las velocidades del aro y de la partícula cuando esta llegue al suelo? (d) Si ahora el sistema hace pequeñas oscilaciones en torno a la configuración en que la partícula está en el punto inferior, ¿cuál será el periodo de este movimiento?"
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
       "html": "La articulación de una varilla puede moverse por un raíl liso que forma un ángulo <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>&lt;</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> con la horizontal. La masa y la longitud de la varilla son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math>, respectivamente. Halla las ecuaciones del movimiento y las soluciones que describen la traslación pura (es decir, el movimiento correspondiente a un valor constante de <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>). ¿Qué les ocurre a esas soluciones particulares si sufren una pequeña perturbación? <br>  <em>Sugerencia</em>: Para contestar a la última pregunta, desarrolla las ecuaciones del movimiento en torno al punto <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Problemas equivalentes])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de un tubo hueco largo es despreciable y puede girar en un plano horizontal alrededor de un pivote que tiene en el centro, sin ningún obstáculo. La masa y la longitud de una varilla que puede moverse sin rozamiento dentro del tubo son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>l</mi></math>, respectivamente. <br> (a) Halla las ecuaciones del movimiento de la varilla, despreciando el efecto de la gravedad. <br> (b) Al principio la varilla estaba en el centro del tubo en reposo y la velocidad angular del tubo era <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. Demuestra que en esta configuración el sistema está en equilibrio relativo inestable. <br> (c) Si por una pequeña perturbación la varilla se desplaza un poco del centro, ¿cuál será su velocidad cuando esté a distancia <math display=\"inline\"><mi>r</mi></math> del origen? ¿Qué ocurrirá en el límite <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, si suponemos infinita la longitud del tubo?"
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
       "html": "Resuelve el problema 5.6.5 mediante la mecánica analítica. <br>  <em>Nota</em>: Considera que, aunque <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> y <math display=\"inline\"><mi>ω</mi></math> son constantes, <math display=\"inline\"><mi>θ</mi></math> es variable, y calcula los valores constantes de esta última."
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
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> puede moverse sin rozamiento por un anillo de radio <math display=\"inline\"><mi>R</mi></math> en un plano horizontal. El anillo gira con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> alrededor de un punto fijo <math display=\"inline\"><mi>O</mi></math> que está a distancia <math display=\"inline\"><mi>L</mi></math> del centro. Halla la lagrangiana del sistema, la ecuación del movimiento y las configuraciones de equilibrio relativo estables e inestables. ¿De qué sistemas conocidos es equivalente este?"
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
       "html": "La lagrangiana, en coordenadas polares, de una partícula de masa <math display=\"inline\"><mi>m</mi></math> que se mueve en un plano en la energía potencial central <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es esta: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Para obtener el problema unidimensional equivalente, puede usarse el momento conservado correspondiente a la coordenada cíclica <math display=\"inline\"><mi>φ</mi></math> para eliminar <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></math> de la lagrangiana <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"block\"><mrow><msub><mi>p</mi><mi>φ</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><msub><mi>p</mi><mi>φ</mi></msub><mrow><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> y obtener la lagrangiana equivalente unidimensional <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
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
       "html": "El instrumento de la figura puede girar sin obstáculo alrededor del eje vertical y en el tubo horizontal el rozamiento es despreciable. <br> (a) ¿Qué se conserva? <br> (b) ¿Existe alguna posición estable de equilibrio relativo de la masa <math display=\"inline\"><mi>m</mi></math>? <br> (c) ¿Qué cambia en tus respuestas si ahora se mantiene constante la velocidad angular en torno al eje vertical? <br>  <em>Sugerencia</em>: Haciendo una gráfica se ve fácilmente que, para cada <math display=\"inline\"><mrow><mi>A</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> tiene una única solución positiva y que, además, es mayor que 1: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>x</mi><mo>*</mo></msup><mo>&gt;</mo><mn>1</mn></mrow></math>."
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
       "html": "La masa <math display=\"inline\"><mi>m</mi></math> de la figura se mueve sobre una mesa horizontal y está unida a la masa <math display=\"inline\"><mi>M</mi></math> mediante una cuerda ligera que pasa por un agujero. La masa <math display=\"inline\"><mi>M</mi></math> se mueve siempre en vertical. Todos los rozamientos son despreciables. Halla la(s) ecuación(es) del movimiento y la(s) constante(s) del movimiento. Úsalas para obtener el problema unidimensional equivalente. ¿Puede ser circular la trayectoria de <math display=\"inline\"><mi>m</mi></math>? Si la respuesta es afirmativa, ¿es estable la órbita circular?"
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
       "html": "Por el agujero de la mesa horizontal lisa de la figura pasa una cuerda ligera que une dos masas iguales. Una masa se mueve en vertical y la otra sobre la mesa. El rozamiento entre el agujero y la cuerda es despreciable. Al principio la masa colgada está en reposo y la otra parte, a distancia <math display=\"inline\"><mi>a</mi></math> del agujero, con velocidad escalar <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> perpendicular a la cuerda. <br> (a) Halla y calcula dos constantes del movimiento. <br> (b) Plantea el problema unidimensional equivalente. <br> (c) Demuestra que la masa de la mesa se mueve entre dos circunferencias. Calcula los radios de esas circunferencias. <br> (d) ¿Cuándo es igual a <math display=\"inline\"><mi>a</mi></math> la distancia mínima (máxima) entre el agujero y esa masa? <br> (e) ¿Cuándo es circular la trayectoria de esa masa?"
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
       "html": "Se ha colgado un péndulo simple de un carro que se mueve con aceleración constante <math display=\"inline\"><mi>a</mi></math>. Escribe la lagrangiana y la(s) ecuación(es) del movimiento. Calcula las configuraciones de equilibrio y la frecuencia de las pequeñas oscilaciones en torno a la configuración de equilibrio estable."
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
       "html": "Una barra ligera puede girar en un plano horizontal alrededor de un eje vertical que pasa por un extremo. Una partícula de masa <math display=\"inline\"><mi>m</mi></math> que puede moverse por la barra está unida al eje de giro mediante un muelle. La constante recuperadora del muelle es <math display=\"inline\"><mi>k</mi></math>, su longitud propia <math display=\"inline\"><mi>l</mi></math>, y todos los rozamientos son despreciables. ¿Cuándo estará acotada la trayectoria? ¿Cuándo existe una órbita circular? ¿Cuándo es estable? <br>  <em>Nota</em>: No se pide hallar las órbitas circulares, solo estudiar su existencia y estabilidad."
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
       "html": "El eje vertical de la figura gira con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> y la barra inferior puede girar alrededor de la articulación lisa <math display=\"inline\"><mi>A</mi></math>, en el plano vertical que gira junto con el eje. Usa un triedro principal para escribir la lagrangiana del sistema. Sírvete de una ley de conservación para escribir un problema equivalente y estudiar la existencia y la estabilidad de las configuraciones de equilibrio relativo. ¿Cuál es la reacción de la articulación <math display=\"inline\"><mi>A</mi></math> (fuerza y momento) en el equilibrio relativo? Calcula la frecuencia de las pequeñas oscilaciones en torno a las configuraciones de equilibrio relativo estable."
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
       "html": "Un tubo horizontal liso gira con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> alrededor de un eje vertical. Las dos masas iguales que hay dentro están unidas mediante un muelle ligero. La masa de las partículas es <math display=\"inline\"><mi>m</mi></math>, la constante recuperadora del muelle <math display=\"inline\"><mi>k</mi></math> y su longitud propia <math display=\"inline\"><mi>l</mi></math>. Halla y resuelve las ecuaciones del movimiento. Estudia la existencia y la estabilidad de las órbitas circulares. <br>  <em>Nota</em>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>&lt;</mo><msqrt><mrow><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>."
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
       "html": "<span class=\"j-smallcaps\">Fuerza conservativa que sustituye al rozamiento dinámico</span>"
      },
      {
       "mota": "testua",
       "html": ". En la teoría de este tema hemos dejado fuera el rozamiento seco dinámico, pues no es conservativo. Sin embargo, en algunos ejercicios, si la fuerza de rozamiento se conoce de antemano en función de los datos y de las coordenadas generalizadas, puede sustituirse por una fuerza conservativa equivalente, para usar la mecánica analítica. Como ejemplo, consideremos el problema 5.70. Supongamos que la abscisa del cubo hacia la izquierda es <math display=\"inline\"><mi>x</mi></math>. <em>Si el sistema se suelta desde el equilibrio</em>, la fuerza de rozamiento entre el cubo y el plano será <math display=\"inline\"><mrow><mi>−</mi><msub><mi>μ</mi><mi>B</mi></msub><mi>m</mi><mi>g</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> y obtenemos un problema equivalente sustituyéndola por la fuerza conservativa <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>B</mi></msub><mi>m</mi><mi>g</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Comprueba que así se obtiene la misma aceleración."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Lagrangianas no estándar])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos la lagrangiana propuesta por Max Planck en 1906: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Halla las ecuaciones de Lagrange correspondientes, usando coordenadas cartesianas. ¿Qué describe esta lagrangiana? Comenta el resultado."
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
       "html": "<span class=\"j-smallcaps\">La paradoja de los gemelos</span>"
      },
      {
       "mota": "testua",
       "html": ". Consideremos, en un sistema inercial, todos los observadores relativistas que están en la posición <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></math> en el instante <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y en <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub></math> cuando <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>. (Entre esas dos posiciones pueden moverse de cualquier manera. Por supuesto, el intervalo espacio-temporal entre los dos sucesos es de tipo temporal.) Usa el problema 6.84 y el principio de Hamilton para demostrar lo siguiente: <em>Entre los observadores que se mueven entre dos configuraciones, el observador inercial</em> (es decir, el que se mueve con velocidad constante <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) <em>mide el tiempo propio máximo</em>."
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
       "html": "<span class=\"j-smallcaps\">La lagrangiana en la relatividad general</span>"
      },
      {
       "mota": "testua",
       "html": ". Para describir el movimiento plano de una partícula (un planeta) en el campo gravitatorio esférico estático generado por una estrella de masa <math display=\"inline\"><mi>M</mi></math>, puede usarse en la relatividad general la lagrangiana siguiente: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>r</mi><mi>S</mi></msub><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mover><mi>t</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>r</mi><mi>S</mi></msub><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mi>S</mi></msub><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>G</mi><mi>M</mi></mrow><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Aquí el radio de Schwarzschild es el parámetro <math display=\"inline\"><msub><mi>r</mi><mi>S</mi></msub></math>, las coordenadas generalizadas son <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la variable independiente es el tiempo propio <math display=\"inline\"><mi>τ</mi></math>. El punto indica la derivada respecto al tiempo propio. La hamiltoniana <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>L</mi><mo>=</mo><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> es una constante del movimiento. Úsala y otras dos constantes del movimiento para escribir la ecuación del movimiento radial en la forma del problema 4.139: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>r</mi></mrow><mrow><mi>d</mi><msup><mi>τ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>G</mi><mi>M</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mn>3</mn><msup><mi>h</mi><mn>2</mn></msup><mi>G</mi><mi>M</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mi>r</mi><mn>4</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>≡</mo><msup><mi>r</mi><mn>2</mn></msup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>.</mi></mrow></math> Comprueba que, valiéndose del cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>, la ecuación de la órbita se escribe así: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>p</mi></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>r</mi><mi>S</mi></msub><msup><mi>u</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Compara esa ecuación con la fórmula de Binet del apartado 4.1.8. ¿Cuál es el significado físico del parámetro <math display=\"inline\"><mi>p</mi></math>? ¿Y el del último término de la ecuación?"
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
       "html": "Una partícula puede moverse por una recta y su lagrangiana es esta: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>ω</mi></mrow></math> y <math display=\"inline\"><mi>γ</mi></math> son constantes positivas.)  <br> (a) Escribe las ecuaciones de Hamilton. <br> (b) ¿A qué sistema mecánico corresponde esa lagrangiana? Comenta la respuesta. <br> (c) ¿Es la hamiltoniana una constante del movimiento? ¿Por qué? <br> (d) ¿Es constante la energía mecánica? ¿Por qué?"
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
       "html": "Usa la coordenada generalizada <math display=\"inline\"><mrow><mi>q</mi><mo>≡</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>t</mi></mrow></msup><mi>x</mi></mrow></math> en el problema 6.87 para hallar una constante del movimiento."
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
       "html": "Consideremos la lagrangiana <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msup><mi>m</mi><mn>2</mn></msup><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>4</mn></msup><mo>+</mo><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una función de la coordenada generalizada <math display=\"inline\"><mi>x</mi></math>. Halla la ecuación del movimiento y la hamiltoniana. ¿Qué sistema mecánico describe esta lagrangiana? Comenta el resultado."
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
       "html": "Si las coordenadas generalizadas de un sistema son <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>, ¿qué tiene de sorprendente <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><mi>x</mi><mi>y</mi></mrow></math> en la lagrangiana?"
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
       "html": "Con la lagrangiana <math display=\"inline\"><mi>L</mi></math> y con <math display=\"block\"><mrow><msup><mi>L</mi><mo>′</mo></msup><mo>≡</mo><mi>L</mi><mo>+</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se obtienen las mismas ecuaciones del movimiento, como demostramos en el problema 6.11.5. ¿Qué ocurre con los momentos canónicos, con la hamiltoniana y con la integral de Jacobi?"
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
       "html": "Una partícula puntual se mueve en el campo de fuerzas <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, sin ligaduras. Comprueba directamente que las ecuaciones del movimiento pueden obtenerse de las dos lagrangianas siguientes: <math display=\"block\"><mrow><msub><mi>L</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>L</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> donde se ha usado el siguiente potencial generalizado: <math display=\"block\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≡</mo><mi>t</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>−</mi><mi>t</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Demuestra que, por el resultado del problema 6.91, las ecuaciones del movimiento son también las mismas usando las dos lagrangianas. ¿Cómo se escribe la fuerza <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> usando el potencial generalizado <math display=\"inline\"><mi>U</mi></math>?"
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
       "html": "En algunos contextos aparecen también aceleraciones generalizadas en la lagrangiana. Entonces, las ecuaciones de Euler y Lagrange que se obtienen del principio de Hamilton mediante el cálculo de variaciones se escriben así: <math display=\"block\"><mrow><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Comprueba que en este formalismo la lagrangiana del oscilador armónico se escribe también así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>q</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "text(fill:urdina, weight: &quot;bold&quot;, size: 10pt, smallcaps[Formalismo hamiltoniano])"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla la hamiltoniana correspondiente a la siguiente lagrangiana: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> son constantes.) ¿Cuáles son las ecuaciones de Hamilton? ¿Es la energía mecánica una constante del movimiento? ¿Hay alguna componente del momento lineal que permanezca constante durante el movimiento?"
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
       "html": "Supongamos una partícula que se mueve en un campo conservativo. ¿Cuál es la hamiltoniana en coordenadas cilíndricas?"
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
       "html": "Contesta a la misma pregunta del ejercicio 6.95, pero usando coordenadas esféricas."
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
       "html": "Halla la ecuación de la trayectoria de fase en el caso del oscilador armónico."
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
       "html": "Supongamos que estudiamos el movimiento de una partícula desde un sistema que gira con velocidad angular constante. ¿Cuáles son la lagrangiana y la hamiltoniana correspondientes?"
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
       "html": "La hamiltoniana de un sistema mecánico de dos grados de libertad es esta: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><msub><mi>q</mi><mn>1</mn></msub><msub><mi>p</mi><mn>1</mn></msub><mo>−</mo><msub><mi>q</mi><mn>2</mn></msub><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><mi>a</mi><msubsup><mi>q</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mi>b</mi><msubsup><mi>q</mi><mn>2</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math> son constantes. Demuestra que las tres variables dinámicas siguientes son constantes del movimiento: <math display=\"block\"><mrow><mfrac><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>−</mo><mi>b</mi><msub><mi>q</mi><mn>2</mn></msub></mrow><msub><mi>q</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>1</mn></msub><msub><mi>q</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> ¿Hay alguna otra constante del movimiento?"
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
       "html": "El instrumento de la figura se mueve con velocidad angular constante alrededor del eje vertical y el rozamiento es despreciable. Halla la posición de equilibrio relativo de la masa <math display=\"inline\"><mi>m</mi></math> y discute su estabilidad. Escribe las ecuaciones de Hamilton. ¿Es la hamiltoniana una constante del movimiento? ¿Y la energía mecánica? ¿Por qué?"
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
       "html": "La longitud propia del muelle de la figura es <math display=\"inline\"><mi>l</mi></math>. En el instante inicial las masas están en reposo y la longitud del muelle es <math display=\"inline\"><mi>l</mi></math>. Halla la hamiltoniana del sistema y demuestra que la coordenada <math display=\"inline\"><mi>x</mi></math> es cíclica. ¿A qué simetría corresponde esta propiedad? Resuelve las ecuaciones canónicas."
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
       "html": "Halla la hamiltoniana y las ecuaciones canónicas correspondientes a la lagrangiana del problema 6.84 (la que encontró Max Planck en 1906). ¿Qué es la hamiltoniana? Comenta el resultado."
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
       "html": "<span class=\"j-smallcaps\">Momento angular y corchetes de Poisson</span>"
      },
      {
       "mota": "testua",
       "html": ". Una partícula puntual se mueve sin ligaduras. Comprueba, en coordenadas cartesianas, que se cumplen los resultados siguientes (y los que se obtienen haciendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> permutaciones cíclicas): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>L</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><msub><mi>L</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>z</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>p</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>p</mi><mi>z</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>L</mi><mi>x</mi></msub><mo>,</mo><msub><mi>L</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>L</mi><mi>z</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi mathvariant=\"bold-italic\">𝑳</mi><mn>2</mn></msup><mo>,</mo><msub><mi>L</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
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
       "html": "Si en el movimiento plano de una partícula libre se usan coordenadas polares, la energía cinética es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Comprueba que en el formalismo lagrangiano <math display=\"inline\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mi>∂</mi><mi>T</mi><mi>/</mi><mi>∂</mi><mi>r</mi></mrow></math> y en el hamiltoniano <math display=\"inline\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover><mi>r</mi></msub><mo>=</mo><mi>−</mi><mi>∂</mi><mi>T</mi><mi>/</mi><mi>∂</mi><mi>r</mi></mrow></math>. Explica el porqué de los signos opuestos."
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
       "html": "Usa el resultado (6.197) y las propiedades de los corchetes de Poisson para demostrar que en el oscilador armónico <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> la siguiente variable dinámica es una constante del movimiento: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mi>i</mi><mi>m</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>≡</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "El cuadrado de la figura gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> alrededor del eje vertical <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>. Por otro lado, la partícula de masa <math display=\"inline\"><mi>m</mi></math> puede moverse sin rozamiento a lo largo de la diagonal del cuadrado. (a) Escribe la lagrangiana del sistema. (b) Estudiando la lagrangiana, decide qué se conserva durante el movimiento. (c) Halla las órbitas circulares de la partícula y estudia su estabilidad. (d) Escribe la hamiltoniana del sistema y las ecuaciones canónicas. (e) ¿Son iguales la energía mecánica y la hamiltoniana? Explica tu respuesta. (f) Resuelve las ecuaciones del movimiento y describe el movimiento."
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
       "html": "Supongamos ahora que el cuadrado del problema 6.106 puede girar sin obstáculo alrededor del eje vertical <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math>. (a) ¿Qué se conserva durante el movimiento? (c) Usa una constante del movimiento para escribir el problema unidimensional equivalente. (d) Halla las órbitas circulares de la partícula y estudia su estabilidad. (f) ¿Son iguales la energía mecánica y la hamiltoniana? (e) Describe cualitativamente el movimiento."
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
       "html": "El regulador de la figura gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math> alrededor del eje vertical. Las varillas son iguales y no tienen masa. La masa <math display=\"inline\"><mi>M</mi></math> puede moverse por el eje sin rozamiento y, como consecuencia, también cambian las posiciones relativas de las masas <math display=\"inline\"><mi>m</mi></math>. Escribe las ecuaciones de Lagrange y de Hamilton del sistema. Estudia las constantes del movimiento y la existencia y la estabilidad de las posiciones de equilibrio relativo. ¿Es constante la energía mecánica? <br>  <em>Nota</em>: Desprecia los radios de las masas."
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
       "html": "La masa del alambre circular homogéneo de la figura es <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> y puede girar sin obstáculo alrededor del eje vertical. La partícula de masa <math display=\"inline\"><mi>m</mi></math> puede moverse por el alambre sin rozamiento. Usando en el formalismo hamiltoniano los ángulos <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mi>θ</mi></math> de la figura, (a) calcula la hamiltoniana <math display=\"inline\"><mi>H</mi></math> del sistema, y (b) halla las ecuaciones canónicas. (c) ¿Es <math display=\"inline\"><mi>H</mi></math> una constante del movimiento? ¿Es igual a la energía mecánica total del sistema? Explica las respuestas. (d) Demuestra que las constantes <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi>α</mi></math> pueden hallarse de modo que sean solución las ecuaciones <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>ω</mi></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>α</mi></mrow></math>."
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
       "html": "Las dos partículas de la figura están unidas mediante una cuerda larga y ligera que pasa por un agujero liso. La de arriba se mueve sobre la mesa horizontal lisa y la de abajo en vertical. Cuando esta última está en reposo, la de la mesa parte a distancia <math display=\"inline\"><mi>a</mi></math> del agujero, perpendicularmente a la cuerda, con velocidad <math display=\"inline\"><mrow><msub><mi>v</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mn>8</mn><mi>a</mi><mi>g</mi></mrow></msqrt></mrow></math>. (a) ¿Cuál es el valor límite de <math display=\"inline\"><mi>k</mi></math> para que la partícula de la mesa empiece a alejarse del agujero? (b) Si la distancia máxima medida desde el agujero es <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>, ¿cuánto vale <math display=\"inline\"><mi>k</mi></math>? (c) ¿Cómo hay que elegir la constante <math display=\"inline\"><mi>k</mi></math> para que la partícula de masa <math display=\"inline\"><mi>m</mi></math> llegue hasta el agujero?"
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
       "html": "<span class=\"j-smallcaps\">La lagrangiana del problema de los dos cuerpos</span>"
      },
      {
       "mota": "testua",
       "html": ". Consideremos el problema de los dos cuerpos en un sistema de referencia inercial. La fuerza sobre la partícula 2 es conservativa: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>12</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>≡</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>2</mn></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></mrow></math> es el vector posición relativa. La masa total del sistema es <math display=\"inline\"><mrow><mi>M</mi><mo>≡</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, la masa reducida <math display=\"inline\"><mi>m</mi></math> y la posición del centro de masas <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math>. Demuestra que la lagrangiana del sistema es la siguiente y saca las consecuencias físicas: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "La varilla de la figura, con dos masas distintas en los extremos, puede girar sin obstáculo en un plano vertical alrededor de la articulación lisa <math display=\"inline\"><mi>A</mi></math> situada en el eje vertical. El eje gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Calcula la(s) ecuación(es) del movimiento y la(s) constante(s) del movimiento. ¿Se conserva la energía mecánica? Halla las configuraciones de equilibrio relativo (es decir, las soluciones con <math display=\"inline\"><mi>α</mi></math> constante) y estudia su estabilidad. <br>  <em>Nota</em>: Tenemos <math display=\"inline\"><mrow><mi>M</mi><mo>&gt;</mo><mi>m</mi></mrow></math>."
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
       "html": "<span class=\"j-smallcaps\">La peonza de Lagrange</span>"
      },
      {
       "mota": "testua",
       "html": ". Consideremos la peonza simétrica pesada del apartado 6.7. ¿Qué condición deben cumplir la precesión <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, el espín <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y el ángulo <math display=\"inline\"><mi>θ</mi></math> para que la peonza se mueva sin nutación?"
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
       "html": "<span class=\"j-smallcaps\">La peonza de Lagrange</span>"
      },
      {
       "mota": "testua",
       "html": "(II). Supongamos que al principio la peonza simétrica pesada está casi en la vertical (<math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>0</mn></mrow></math>). Demuestra que para mantenerse «dormida», es decir, para que en adelante siga siendo <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>0</mn></mrow></math>, debe cumplirse la condición siguiente: <math display=\"block\"><mrow><msubsup><mi>I</mi><mi>z</mi><mn>2</mn></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>+</mo><msub><mover><mi>ψ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>&gt;</mo><mn>4</mn><msub><mi>I</mi><mi>x</mi></msub><mi>m</mi><mi>g</mi><mi>R</mi><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">Las ecuaciones de Nielsen</span>"
      },
      {
       "mota": "testua",
       "html": ". Demuestra que las ecuaciones de Lagrange pueden escribirse de la forma equivalente siguiente: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mover><mi>L</mi><mo accent=\"true\">̇</mo></mover></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mn>2</mn><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">La función de disipación de Rayleigh</span>"
      },
      {
       "mota": "testua",
       "html": ". Una partícula puntual sufre dos fuerzas: la fuerza conservativa <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"bold-italic\">𝜵</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la fuerza disipativa <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Comprueba que las ecuaciones del movimiento son <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>R</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, si <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>."
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
       "html": "<span class=\"j-smallcaps\">La fuerza de Lorentz</span>"
      },
      {
       "mota": "testua",
       "html": ". Supongamos que el potencial escalar del campo electromagnético en que se mueve una carga <math display=\"inline\"><mi>q</mi></math> es <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y el potencial vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Comprueba que la fuerza de Lorentz se recupera de las ecuaciones de Lagrange, si la lagrangiana es <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>U</mi></mrow></math> y el potencial generalizado <math display=\"inline\"><mi>U</mi></math> es este: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
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
       "html": "<span class=\"j-smallcaps\">El teorema de Noether</span>"
      },
      {
       "mota": "testua",
       "html": ". Este útil teorema describe la relación entre las simetrías y las leyes de conservación. Supongamos que una transformación infinitesimal de las coordenadas generalizadas, <math display=\"block\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo>→</mo><msub><mi>q</mi><mi>i</mi></msub><mo>+</mo><mi>ε</mi><msub><mi>K</mi><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>→</mo><msup><mi>L</mi><mo>′</mo></msup><mo>=</mo><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>q</mi><mn>1</mn></msub><mo>+</mo><mi>ε</mi><msub><mi>K</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>q</mi><mi>n</mi></msub><mo>+</mo><mi>ε</mi><msub><mi>K</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> es una simetría, es decir, deja inalterada la lagrangiana (hasta primer orden en el parámetro infinitesimal <math display=\"inline\"><mi>ε</mi></math>): <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>L</mi><mo>′</mo></msup></mrow><mrow><mi>d</mi><mi>ε</mi></mrow></mfrac><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Demuestra que, si ocurre eso, la magnitud siguiente es una constante del movimiento, es decir, no cambia"
      },
      {
       "mota": "testua",
       "html": "<em>a lo largo del movimiento</em>"
      },
      {
       "mota": "testua",
       "html": ": <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>K</mi><mi>i</mi></msub><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> ¿Qué ocurre cuando la lagrangiana tiene una simetría con la elección <math display=\"inline\"><mrow><msub><mi>K</mi><mi>i</mi></msub><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></mrow></math>?"
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "Lagrange Season (2023-11): egilearen koadernoa, fitxak eta bideo-azterketak",
     "xehetasuna": "transcripción directa de las fotografías, traducción y edición crítica; mecánica lagrangiana sin vectores",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 1,
   "izenburua": "Dispositivos de Lagrange: aprender a pensar sin vectores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este capítulo recoge la <strong>Lagrange Season</strong> del autor (22-29 de noviembre de 2023): los dispositivos que él mismo diseñó para comprobar que dominaba la mecánica lagrangiana, sus resoluciones manuscritas y las notas de estudio sobre los vídeos. Es material de valor personal, el núcleo del proyecto: la prueba de ser capaz de plantear un problema <strong>sin vectores</strong>."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Metodología: los nueve pasos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Guía del autor (original en castellano, del cuaderno):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Escoger las coordenadas.</strong> Problemas más habituales: no tener claro si las coordenadas son independientes o dependientes, y no usar el tipo de sistema (cartesiano, polar, esférico) cuando conviene.",
      "<strong>Plantear despacito los valores de las coordenadas y sus derivadas.</strong> Primero se derivan las componentes y DESPUÉS se elevan al cuadrado, una por una, y entonces se meten en la fórmula. La mayoría de los fallos son de operaciones: derivar mal, liarse con los signos, comerse algún parámetro.",
      "<strong>Incluir todo ello en la fórmula de la energía cinética.</strong>",
      "<strong>Pensar bien la potencial</strong>, sobre todo el signo: si es positivo o negativo según la descripción — ahí hay que andar con ojo.",
      "<strong>Escribir la lagrangiana</strong> y recordar siempre que las ecuaciones del movimiento (Euler-Lagrange) se hacen para CADA una de las variables.",
      "<strong>Incluir las ligaduras (constraints)</strong>, si las hay.",
      "<strong>Interpretar los resultados.</strong> Muchas veces los resultados no se entienden a primera vista: es fundamental tener presentes las ecuaciones canónicas del movimiento de cada caso (péndulo, muelle, caída libre...).",
      "<strong>Si la ecuación es intratable, aproximaciones</strong>: en oscilaciones pequeñas <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mi>θ</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mn>1</mn></mrow></math>.",
      "<strong>De la ecuación simplificada a la solución armónica.</strong> Cuando aparece una ecuación del tipo <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, la solución es trigonométrica: identificar los coeficientes, determinar <math display=\"inline\"><mi>ω</mi></math> y construir la ecuación de la posición con las condiciones iniciales."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Las bases de Van Biezen",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El autor cita a Michael Van Biezen como &quot;el verdadero propiciador de la Lagrange Season&quot;. Reglas tomadas de sus vídeos (ficha del autor): en las derivadas trigonométricas <strong>el seno no cambia de signo, el coseno sí</strong> (<math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"normal\">cos</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi></mrow></math>); por eso, probando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en la ecuación <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> sale <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y todo se eleva al cuadrado. En el muelle ponemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (porque se suelta estando alargado), en el péndulo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Lo fundamental: la fórmula no cambia por darle otro nombre a la variable — <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>q</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> con cualquier coordenada generalizada."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Dispositivo principal: polea colgada de un péndulo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El primer gran dispositivo del autor (dos hojas del cuaderno, 22-29 de noviembre): un péndulo de longitud <math display=\"inline\"><mi>ℓ</mi></math> del que cuelga una polea, y de la polea dos masas (<math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>) unidas por una cuerda. Variables independientes: <math display=\"inline\"><mi>θ</mi></math> (el ángulo del péndulo) y <math display=\"inline\"><mi>y</mi></math> (cuánto se ha movido la cuerda por la polea)."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/24d5742d3293ad47.svg",
     "zabalera": 204
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[Dispositivo principal: polea colgada de un péndulo, con dos masas.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Posiciones y velocidades</strong> (vertical hacia abajo):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><msub><mi>m</mi><mn>1</mn></msub></msub><mo>=</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><msub><mi>m</mi><mn>1</mn></msub></msub><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><msub><mi>m</mi><mi>i</mi></msub></msub><mo>=</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msub><mi>m</mi><mi>i</mi></msub></msub><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Energía cinética</strong> (desarrollo completo en el cuaderno; resultado):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mspace width=\"0.167em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Potencial</strong>: <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><mi>θ</mi></math></strong> (Euler-Lagrange, tras eliminar los términos cruzados):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mi>ℓ</mi><mn>2</mn></msup><mo>−</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En oscilaciones muy pequeñas (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>→</mo><mi>θ</mi></mrow></math>, despreciando los términos cruzados): <math display=\"inline\"><mrow><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Interpretación (del autor)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "&quot;Esto no está mal: si no hay cambio de ángulo, no hay aceleración angular — la gravedad no tiene influencia en el conjunto del sistema respecto de la variable <math display=\"inline\"><mi>θ</mi></math>. Que una masa se mueva hacia abajo no cambia <math display=\"inline\"><mi>θ</mi></math>.&quot; Y analizando las fuerzas: si en cada lado hay la misma fuerza, <math display=\"inline\"><mrow><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es nulo — bien: <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Con masas iguales</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>), la ecuación de <math display=\"inline\"><mi>θ</mi></math> adopta esta forma:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mi>ℓ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>g</mi><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nota del autor, en el cuaderno con letra grande: <strong>&quot;¡ha vuelto la maldita fórmula del péndulo!&quot;</strong> — el dispositivo recupera el péndulo simple en el límite adecuado."
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><mi>y</mi></math></strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>ℓ</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>+</mo><mi>g</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con masas iguales: <math display=\"inline\"><mrow><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> — &quot;no hay cambio de altura, PERFECTO&quot;. Y despreciando los ángulos (péndulos colgados pero quietos):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "La máquina de Atwood, confirmada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Según el formulario de la UPV, cuando la polea tiene momento de inercia es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo>+</mo><mi>I</mi><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi></mrow></math>; si la polea es ligera, el mismo resultado del autor. En el cuaderno: &quot;CONFIRMADA LA MÁQUINA DE ATWOOD. DE PUTA MADRE&quot; (con la firma ocupando toda la hoja). El dispositivo recupera los dos límites clásicos: el péndulo simple y Atwood — esa era la prueba."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "El intento de la varilla articulada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como cuenta en la guía, el autor añadió otra restricción al dispositivo: una varilla articulada que une las dos masas para fijar la distancia entre ellas. Esa restricción de distancia hay que escribirla de la forma <math display=\"inline\"><mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>d</mi></mrow></math> — expresar las componentes mediante los ángulos independientes, elevar al cuadrado y llevar todo eso a Euler-Lagrange: &quot;café para cafeteros&quot;. No ayudó a simplificar las ecuaciones (las complicó mucho), pero fue un ejercicio excelente para aprender a escribir restricciones. La versión con tres variables independientes quedó sin resolver (tampoco encontró en los vídeos ningún problema parecido)."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Examen 97Feb03: muelle y péndulo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Problema del libro de exámenes de la UPV/EHU (febrero de 1997, n.º 3; libro: <code>fuentes_originales/LAGRANGIANO/LG péndulos/LG 97 feb 03...</code>), el &quot;pariente académico&quot; del dispositivo del autor — palabras suyas: &quot;sin darme cuenta, hice el mismo pero con un muelle&quot;."
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado</strong> (resumido): una masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> cuelga de un muelle vertical (<math display=\"inline\"><mi>k</mi></math>), con movimiento solo vertical (<math display=\"inline\"><mi>y</mi></math>); de <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> sale una varilla sin masa <math display=\"inline\"><mi>a</mi></math> con <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> (<math display=\"inline\"><mi>θ</mi></math>). Escribir la lagrangiana, sacar las ecuaciones del movimiento, hacer la aproximación de desplazamientos pequeños e interpretar; haciendo <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>, los límites: a) <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, b) <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo></mrow></math> cte, c) <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/1d6f8ae1c9a830ac.svg",
     "zabalera": 156
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[97Feb03: muelle vertical (<math display=\"inline\"><mi>k</mi></math>), masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y varilla sin masa <math display=\"inline\"><mi>a</mi></math> con <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Resolución del autor</strong> (tres fichas, transcripción directa):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><msub><mi>m</mi><mn>1</mn></msub></msub><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><msub><mi>m</mi><mn>2</mn></msub></msub><mo>=</mo><mi>y</mi><mo>−</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>y</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(en el encabezamiento de la ficha, subrayado: &quot;ojo con la elección de los signos de los potenciales&quot;)."
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><mi>y</mi></math></strong> (en un recuadro de la ficha):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>a</mi><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><mi>θ</mi></math></strong> (en un recuadro de la ficha):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>2</mn></msub><msup><mi>a</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>g</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación frente al libro",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La resolución oficial del libro (p. 16), haciendo <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math> y para pequeños: <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>k</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>y</mi><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math> (oscilación vertical, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>, equilibrio <math display=\"inline\"><mrow><msub><mi>y</mi><mrow><mtext mathvariant=\"normal\">eq </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math>) y <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>a</mi></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>) — dos movimientos armónicos <strong>desacoplados</strong>, en contra de la intuición. Límites: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> deja la vertical, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo></mrow></math> cte el péndulo, y <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math> trae <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (equivalente a lo anterior). Las ecuaciones generales del autor concuerdan con las del libro aplicando la aproximación."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "El disco de Oxford: polea con masa, muelle y masa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Problema tipo test (resuelto el 23 de noviembre — &quot;acabo de encontrar lo que hice hoy&quot;): un muelle <math display=\"inline\"><mi>k</mi></math> y una masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, unidos mediante una polea-disco con masa de radio <math display=\"inline\"><mi>a</mi></math> (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>); el disco gira a altura fija. Se dan cuatro opciones para la ecuación de <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></math>."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/1b2ebf9f06db1894.svg",
     "zabalera": 173
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El disco de Oxford: polea con masa (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, radio <math display=\"inline\"><mi>a</mi></math>), muelle al suelo y <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> colgada.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Resolución del autor</strong> (tres fichas): <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">disko </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></math>;"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>+</mo><mi>r</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Euler-Lagrange:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>r</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Estudio de los límites</strong> (en las fichas):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>k</mi><mi>r</mi><mi>θ</mi></mrow></math> — &quot;la diferencia entre la fuerza de la gravedad y la fuerza que mueve el disco en sentido contrario se debe al muelle&quot; (<math display=\"inline\"><mrow><mi>r</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>a</mi></mrow></math>).",
      "<math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>1</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>r</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msub><mi>m</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>r</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> — &quot;la gravedad desaparece: cualquier movimiento del disco se debe al muelle&quot;.",
      "&quot;Ejercicio integral&quot;: si el disco tiene el cuádruple de la masa (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></math>), <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>3</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></math> y la ecuación se convierte en <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mi>g</mi><mrow><mn>3</mn><mi>a</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mn>3</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> — con la forma de las opciones del test. Nota en la ficha: &quot;importante: la gravedad y la aceleración del muelle con signos contrarios; y el segundo término viene de <math display=\"inline\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac></math>&quot;."
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Catálogo de estudios en vídeo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Problemas de vídeo resueltos, con las notas metodológicas del autor (los orígenes se guardan por carpetas; los enlaces, en archivos <code>.md</code>):"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Bloque sobre una cuña móvil</strong> — coordenadas generalizadas <math display=\"inline\"><msub><mi>q</mi><mn>1</mn></msub></math> (cuesta arriba) y <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>X</mi></mrow></math> (la propia cuña); aviso: <math display=\"inline\"><msub><mi>q</mi><mn>1</mn></msub></math> <strong>no es inercial</strong>, las ligaduras hay que escribirlas explícitamente.",
      "<strong>Masa vertical frente a masa en la pendiente (polea y rozamiento)</strong> — clave: <math display=\"inline\"><mi>x</mi></math> puede tomarse a lo largo de la pendiente (no en vertical); como la cuerda pasa <strong>por debajo</strong> de la polea <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math>; y como <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mi>θ</mi></math> no es una coordenada nueva (es constante).",
      "<strong>Masa que baja por una varilla giratoria</strong> — coordenadas naturales <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Péndulo en un vagón acelerado</strong> — ligadura <strong>forzada</strong> dependiente del tiempo: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>; ejemplo canónico de los 8 pasos de la metodología (la fuente de los 9 pasos del autor).",
      "<strong>Péndulo sobre una base libre</strong> — &quot;vídeo completo: integración y comentario incluidos&quot;; el autor dice que, sin darse cuenta, hizo lo mismo con un muelle (¡97Feb03!).",
      "<strong>Péndulo movido horizontalmente</strong> — RESOLUCIÓN COMPLETA: aproximaciones, cómo resolver el sistema de ecuaciones y cómo integrar.",
      "<strong>Péndulo en 3D</strong> — como una pelotilla dentro de un bol (desde 43:22).",
      "<strong>Partícula que baja por un cono (coordenadas cilíndricas)</strong> — conclusión: las ecuaciones del movimiento respecto a <math display=\"inline\"><mi>θ</mi></math> dicen que <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></math> es constante: a cualquier altura, el mismo tiempo por vuelta.",
      "<strong>La pelota que se separa de una superficie (ligaduras)</strong> — técnica para estudiar cuándo la fuerza de ligadura (la normal) cae a cero.",
      "<strong>Vara que resbala por una pared</strong> — &quot;este problema lo planteé mal de muchas maneras, pensando incluso en polares&quot;; lo aprendido: las ligaduras ayudan a expresar la fuerza normal que hace la pared, y <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> no hay que reducirlas al ángulo desde el principio — sino después de completar las fórmulas. Duda abierta: el último paso, calcular cuándo la vara deja la pared."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Transcrito directamente de las fotografías y traducido (tanda INGESTA LAGRANGIANOS, 2026-08-25). Origen: <code>fuentes_originales/LAGRANGIANO/</code> (37 archivos: 17 imágenes + carpetas temáticas + notas) y la guía del autor (<code>0 Lagrangianos. Una guía para mí....md</code>). Lagrange Season: 22-29 de noviembre de 2023. Transcrito: el dispositivo principal (las dos hojas del cuaderno, completas), las tres fichas de 97Feb03, las tres fichas del disco de Oxford y la metodología de la guía. Las capturas de vídeo (Van Biezen, PHYI-SI, PhyShell...) no se han copiado: en el catálogo se citan con su enlace, con las notas del autor. La resolución del libro de exámenes (97Feb03) no se ha reproducido: los resultados principales se citan solo como comprobación. Palabras de la guía del autor: &quot;cuando volvamos a lagrangianoar lo primero sería pasar los ejercicios a LaTeX&quot; — eso es este capítulo, en Typst. Y la última nota del cuaderno, sobre el péndulo con polea: <strong>&quot;Lo conseguí sacar :)&quot;</strong>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Torno, vara deslizante y péndulo gemelo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres dispositivos más, cada uno con su enunciado, figura y resolución completa. Los tres muestran lo mismo, desde ángulos distintos: cómo las ligaduras y las coordenadas bien elegidas convierten problemas de apariencia &quot;vectorial&quot; en puro cálculo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El torno: pendiente, balancín y péndulo"
    },
    {
     "mota": "problema",
     "izena": "El torno",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En torno a un eje horizontal fijo sobre un pilar hay una barra giratoria (<math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>; momento de inercia respecto al eje <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></math>; extremos a <math display=\"inline\"><mi>r</mi></math> del eje). Del extremo izquierdo cuelga el péndulo <math display=\"inline\"><msub><mi>m</mi><mn>3</mn></msub></math>, con una varilla ligera de longitud <math display=\"inline\"><mi>ℓ</mi></math>. Al extremo derecho se ha atado una cuerda: pasando hacia abajo por una polea del suelo y hacia arriba por otra de lo alto de la pendiente, tira del bloque <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> paralelamente a la pendiente (inclinación <math display=\"inline\"><mi>β</mi></math>). En giros pequeños, el movimiento de los extremos puede tomarse como vertical: al girar <math display=\"inline\"><mrow><mi>+</mi><mi>φ</mi></mrow></math> el extremo derecho baja <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> — el bloque, resbalando pendiente abajo <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math>, suelta cuerda — y el izquierdo, la suspensión del péndulo, sube <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math>. Escribe las ecuaciones del movimiento, comprueba los límites y estudia las oscilaciones pequeñas hasta segundo orden."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/6971752b259973df.svg",
     "zabalera": 450
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[El torno: del extremo izquierdo del balancín cuelga el péndulo; la cuerda del extremo derecho, hacia abajo por la polea del suelo y hacia arriba por la de lo alto, se une al bloque paralelamente a la pendiente. Al bajar el bloque, el péndulo sube.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Coordenadas y posiciones.</strong> Dos grados de libertad: <math display=\"inline\"><mi>φ</mi></math> (giro del balancín) y <math display=\"inline\"><mi>θ</mi></math> (ángulo del péndulo). Como la cuerda es inextensible, al girar <math display=\"inline\"><mrow><mi>+</mi><mi>φ</mi></mrow></math> el extremo derecho baja <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math> y suelta esa misma cantidad de cuerda; las dos poleas solo cambian la dirección. Ejes: <math display=\"inline\"><mi>y</mi></math> hacia arriba, origen en el eje del balancín."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El bloque: baja por la pendiente <math display=\"inline\"><mrow><mi>r</mi><mi>φ</mi></mrow></math>, luego su altura es <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mi>c</mi><mo>−</mo><mi>r</mi><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>h</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>,</mo></mrow></math> y su velocidad, paralela a la pendiente, <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>.",
      "El balancín: momento de inercia dado <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></math>.",
      "La suspensión del péndulo (extremo izquierdo): <math display=\"inline\"><mrow><msub><mi>y</mi><mi>e</mi></msub><mo>=</mo><mi>+</mi><mi>r</mi><mi>φ</mi></mrow></math> (<strong>hacia arriba</strong> con <math display=\"inline\"><mrow><mi>+</mi><mi>φ</mi></mrow></math>). La bola, a <math display=\"inline\"><mi>ℓ</mi></math> de la suspensión: <math display=\"block\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><msub><mi>x</mi><mi>e</mi></msub><mo>+</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>3</mn></msub><mo>=</mo><mi>r</mi><mi>φ</mi><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Velocidades, por componentes.</strong> Derivando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn></msub><mo>=</mo><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn></msub><mo>=</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y sumando los cuadrados:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>v</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>La lagrangiana.</strong> Sumando las tres partes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mi>r</mi><mi>φ</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mi>φ</mi><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>3</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>V</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los dos pesos <strong>pugnan</strong> entre sí: el bloque quiere aumentar <math display=\"inline\"><mi>φ</mi></math> (resbalar hacia abajo), la masa del péndulo disminuirlo (bajar su lado) — el balancín es una máquina de contrapeso."
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><mi>θ</mi></math>.</strong> Las tres partes, una por una:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la resta los términos <math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> <strong>se anulan entre sí</strong> — siempre es buena señal — y, dividiendo por <math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mi>ℓ</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>r</mi><mi>ℓ</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><mi>φ</mi></math>.</strong> Igual, abreviando con <math display=\"inline\"><mrow><mi>M</mi><mo>≔</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi><mi>r</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>r</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Comprobaciones.</strong> Cinco límites, directamente de las ecuaciones:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Balancín quieto</strong> (<math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>; por ejemplo <math display=\"inline\"><mrow><mi>I</mi><mo>→</mo><mi>∞</mi></mrow></math>): la ecuación de <math display=\"inline\"><mi>θ</mi></math> se convierte en <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> — el péndulo ordinario.",
      "<strong>Equilibrio</strong>: si <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>=</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math>, el tirón del lado derecho (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>, a lo largo de la cuerda) y el izquierdo (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mi>g</mi></mrow></math>) están igualados: <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> y el péndulo es el ordinario. La condición exacta del contrapeso.",
      "<strong>Manda el bloque</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub><mo>,</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math>): <math display=\"inline\"><mrow><mi>M</mi><mo>≈</mo><msub><mi>m</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> — deslizamiento libre pendiente abajo, casi sin que lo estorbe la cuerda.",
      "<strong>Manda el péndulo</strong> (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>3</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>1</mn></msub><mo>,</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>): <math display=\"inline\"><mrow><mi>M</mi><mo>≈</mo><msub><mi>m</mi><mn>3</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math> — con el <strong>signo contrario</strong>: ahora es el lado del péndulo el que cae, y el balancín gira al otro lado. La suspensión está, por tanto, en caída libre; y metiéndolo en la ecuación de <math display=\"inline\"><mi>θ</mi></math>: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math> — un péndulo en caída libre no se balancea: <strong>principio de equivalencia</strong>, regalado por las ecuaciones.",
      "<strong>Balancín ancho</strong> (<math display=\"inline\"><mi>r</mi></math> grande): como <math display=\"inline\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover></mrow></math> queda fijo, <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>∝</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> — los brazos gigantes pagan la cuerda casi sin girar."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Oscilaciones pequeñas, primer orden.</strong> Haciendo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn></mrow></math>, los términos cruzados de la ecuación de <math display=\"inline\"><mi>φ</mi></math> (<math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi></mrow></math>, <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math>) son de segundo orden y caen en la primera aproximación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>≔</mo><mfrac><msub><mi>m</mi><mn>3</mn></msub><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>≔</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mi>M</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El balancín <strong>arranca con aceleración constante</strong>: si manda el bloque (<math display=\"inline\"><mrow><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi><mo>&gt;</mo><mi>a</mi></mrow></math>), la suspensión hacia arriba. Metiendo <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub></mrow></math> en la ecuación de <math display=\"inline\"><mi>θ</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mo>+</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub></mrow><mi>ℓ</mi></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo>+</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>g</mi><mi>ℓ</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— el péndulo siente una <strong>gravedad efectiva</strong>: <math display=\"inline\"><mi>g</mi></math> más la aceleración ascendente de la suspensión. Cuando el bloque levanta la suspensión, el balanceo se <strong>endurece</strong>; si el lado del péndulo está cayendo (<math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math>), en cambio, se frena. La solución, partiendo ancho y quieto: <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Segundo orden: el balancín oye el latido del péndulo.</strong> Conservando en la ecuación de <math display=\"inline\"><mi>φ</mi></math> los términos cruzados (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>β</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mi>r</mi><mo>−</mo><msub><mi>m</mi><mn>3</mn></msub><mi>r</mi><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ese paréntesis es una derivada total — este es el paso más bonito:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y metiendo <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>ω</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>=</mo><mi mathvariant=\"normal\">sin</mi><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>ℓ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Integrar</strong>, con las condiciones iniciales <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Una vez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mi>t</mi><mo>+</mo><mfrac><mrow><mi>a</mi><mi>ℓ</mi><mi>ω</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ordezkatuta </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>0</mn><mo>=</mo><mn>0</mn><mo>+</mo><mn>0</mn><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Otra vez:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mi>φ</mi><mo>=</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mfrac><msup><mi>t</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mfrac><mrow><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ordezkatuta </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>0</mn><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>4</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>r</mi><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><munder><mrow><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mfrac><msup><mi>t</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> gai sekularra</mtext></mrow></munder><mo>+</mo><munder><munder><mrow><mfrac><mrow><mi>a</mi><mi>ℓ</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">⏟</mo></munder><mrow><mn>2</mn><mi>ω</mi><mtext mathvariant=\"normal\">-ko harmonikoa</mtext></mrow></munder></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>De vuelta a la ecuación de <math display=\"inline\"><mi>θ</mi></math>.</strong> La gravedad efectiva es ahora variable:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo>+</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>g</mi><mo>+</mo><mi>r</mi><msub><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>ℓ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mo>=</mo><mi>ℓ</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>a</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la ecuación de <math display=\"inline\"><mi>θ</mi></math>, dividida por <math display=\"inline\"><mi>ℓ</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>a</mi><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— la <strong>ecuación de Mathieu</strong>, con excitación paramétrica en <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math>: la condición exacta de la resonancia paramétrica. El balanceo del péndulo sacude el balancín al doble de su frecuencia, y el balancín alimenta a su vez el balanceo — la misma física que encoger las piernas en un columpio. El estudio completo de esta familia de ecuaciones corresponde al bloque III (<code>03mm_08dinamikoak</code>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La vara resbala contra la pared"
    },
    {
     "mota": "problema",
     "izena": "La vara deslizante",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una vara homogénea de longitud <math display=\"inline\"><mi>ℓ</mi></math> (<math display=\"inline\"><mi>m</mi></math>, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup></mrow></math> respecto al centro de masas) está apoyada contra la pared vertical, formando un ángulo <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> con el suelo, y se suelta desde el reposo. Todo sin rozamiento. Escribe la ecuación del movimiento con multiplicadores de Lagrange, halla las fuerzas normales de la pared y del suelo, y calcula con qué ángulo deja la vara la pared."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/467fffdbfd79e060.svg",
     "zabalera": 216
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[Vara contra la pared: los multiplicadores <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> son las fuerzas normales de la pared y del suelo, ni más ni menos.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Coordenadas y ligaduras.</strong> Centro de masas <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y ángulo <math display=\"inline\"><mi>θ</mi></math> — tres coordenadas, dos ligaduras:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mn>1</mn></msub><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (muturra horman)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (muturra zoruan)</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivadas parciales, que necesitaremos luego:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Lagrangiana y ecuaciones.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>y</mi></mrow></math>, y con multiplicadores, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><msub><mo>∑</mo><mi>k</mi></msub><msub><mi>λ</mi><mi>k</mi></msub><mfrac><mrow><mi>∂</mi><msub><mi>G</mi><mi>k</mi></msub></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>λ</mi><mn>2</mn></msub><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong><math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> es la fuerza normal de la pared, y <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math> la del suelo.</strong> Comprobación: si la vara está quieta, <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi></mrow></math>, como debe ser."
    },
    {
     "mota": "testua",
     "html": "<strong>Derivar las ligaduras.</strong> Como <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ℓ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ℓ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Todo en la ecuación de <math display=\"inline\"><mi>θ</mi></math>.</strong> Sustituir <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>g</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo>−</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>ℓ</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mi>m</mi><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>ℓ</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los dos con <math display=\"inline\"><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></math> <strong>se anulan entre sí</strong>, y <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>1</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>ℓ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> sartuta</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>12</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>ℓ</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— la ecuación clásica de la escalera que resbala."
    },
    {
     "mota": "testua",
     "html": "<strong>Energía.</strong> <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>ℓ</mi><mn>2</mn></msup><mn>4</mn></mfrac><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, luego"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Partiendo del reposo (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>m</mi><mi>g</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>La normal de la pared, explícitamente.</strong> Ya tenemos todo para escribir <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>m</mi><mfrac><mi>ℓ</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y sustituyendo las dos partes, una por una:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>ℓ</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><mi>g</mi></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Al principio, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>: el paréntesis es <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>m</mi><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn></mrow></math> — la pared empuja, como debe. A medida que la vara baja el paréntesis crece, y en el instante en que se hace cero la pared ya no tiene nada que empujar. Como la pared no puede <strong>tirar</strong>, ahí deja la vara la pared:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Partiendo casi de la vertical (<math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>→</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>): <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>=</mo><mn>2</mn><mi>/</mi><mn>3</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>θ</mi><mo>*</mo></msup><mo>≈</mo><mn>41.8</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. A partir de ahí solo queda ligado el extremo del suelo, y empieza un problema nuevo (más fácil)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo gemelo en una polea"
    },
    {
     "mota": "problema",
     "izena": "Péndulo gemelo en la polea",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por una polea del techo pasa una cuerda inextensible, y de los extremos cuelgan dos péndulos iguales (bolas <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, ambas con varillas ligeras de longitud <math display=\"inline\"><mi>ℓ</mi></math>). La cuerda intercambia las alturas de los puntos de suspensión: si uno sube <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>, el otro baja <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>. Escribe las ecuaciones del movimiento con el multiplicador y en coordenadas reducidas, y resuelve el caso de las oscilaciones pequeñas."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/871fe15f7540d589.svg",
     "zabalera": 292
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "text(size: 9pt, style: &quot;italic&quot;)[Péndulo gemelo en la polea: la cuerda intercambia las alturas de las suspensiones (<math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), y el multiplicador <math display=\"inline\"><mi>λ</mi></math> es la tensión de la cuerda. Este es el dispositivo principal de los cuadernos.]"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Coordenadas, posiciones y ligadura.</strong> Cuatro coordenadas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo>,</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> — las alturas de las suspensiones y los dos ángulos — y una única ligadura, la cuerda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>G</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las dos últimas dicen algo importante: <strong>la ligadura no toca los ángulos</strong>, luego en las ecuaciones de <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>φ</mi></math> no aparecerá multiplicador. Las suspensiones están en los puntos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>/</mi><mn>2</mn><mo>,</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; las bolas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>c</mi><mn>2</mn></mfrac><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><mo>+</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>=</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Velocidades, por componentes.</strong> El primer péndulo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y por simetría, el segundo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>La lagrangiana.</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ℓ</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi>ℓ</mi><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><mi>ℓ</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuaciones de las suspensiones, con el multiplicador.</strong> Para <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><msub><mi>y</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo>=</mo><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mo>=</mo><mi>λ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong><math display=\"inline\"><mi>λ</mi></math> es la tensión de la cuerda</strong>, la misma en los dos extremos. Comprobación: con los ángulos congelados (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> fijos) son las ecuaciones de la máquina de Atwood, palabra por palabra."
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuaciones de los ángulos, en coordenadas reducidas.</strong> Sustituyendo directamente <math display=\"inline\"><mrow><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mi>y</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></math>), quedan tres coordenadas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>,</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. La de <math display=\"inline\"><mi>θ</mi></math>, paso a paso:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>ℓ</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>ℓ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la resta los términos <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mi>ℓ</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> se anulan — otra vez — y, dividiendo por <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi></mrow></math>, junto con la de <math display=\"inline\"><mi>φ</mi></math> (el mismo cálculo, siendo <math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mo>+</mo><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>g</mi><mo>−</mo><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow><mi>ℓ</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Lectura física, directa: cada péndulo siente una <strong>gravedad efectiva</strong> — <math display=\"inline\"><mi>g</mi></math> más la aceleración ascendente de su suspensión. Si la suspensión estuviera en caída libre (<math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>g</mi></mrow></math>), la primera ecuación sería <math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mn>0</mn></mrow></math>: el péndulo no se balancearía. Principio de equivalencia, otra vez regalado."
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math> reducida.</strong> Restando las dos ecuaciones de tensión (<math display=\"inline\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ℓ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Oscilaciones pequeñas.</strong> Haciendo <math display=\"inline\"><mrow><mi>θ</mi><mo>,</mo><mi>φ</mi><mo>≪</mo><mn>1</mn></mrow></math>, todos los términos angulares de la ecuación de arriba son de segundo orden (<math display=\"inline\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mi>θ</mi></mrow></math>, etc.), y a primer orden:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>−</mo><msub><mi>m</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi><mo>≕</mo><msub><mi>a</mi><mi>A</mi></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "— <strong>la aceleración de Atwood</strong>, constante: el lado pesado levanta al ligero. La tensión es también la de Atwood: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>+</mo><msub><mi>a</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi>g</mi></mrow></math>. Con ello las ecuaciones de los dos ángulos tienen coeficientes constantes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>θ</mi><mn>2</mn></msubsup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>θ</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>g</mi><mo>+</mo><msub><mi>a</mi><mi>A</mi></msub></mrow><mi>ℓ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mn>2</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mfrac><mi>g</mi><mi>ℓ</mi></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>φ</mi><mn>2</mn></msubsup><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>ω</mi><mi>φ</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mi>g</mi><mo>−</mo><msub><mi>a</mi><mi>A</mi></msub></mrow><mi>ℓ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mfrac><mi>g</mi><mi>ℓ</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la frecuencia de cada péndulo aparece la masa <strong>del otro</strong>: <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> el pesado acelera hacia arriba la suspensión de <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, y eso endurece su balanceo. El sistema, por tanto, se desacopla por completo en este orden: un Atwood más dos péndulos libres, con gravedades efectivas."
    },
    {
     "mota": "testua",
     "html": "Y el caso especial más ilustrativo: <strong>si <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn></mrow></math></strong> — las suspensiones se quedan quietas y los dos péndulos son ordinarios, ambos con <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>g</mi><mi>/</mi><mi>ℓ</mi></mrow></math>. Por eso el examen 97Feb03 pedía (p. 14-16), en el último paso, que las &quot;masas fueran iguales&quot;: en el equilibrio todo el sistema se desacopla."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Varilla articulada.</strong> En esta variante las dos bolas se unen mediante una varilla rígida ligera de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>ℓ</mi></mrow></math>, con articulaciones. Las posiciones son las de arriba; comprueba (con los casos <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) y escribe la ligadura de distancia de la varilla, <math display=\"block\"><mrow><msub><mi>G</mi><mn>2</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>−</mo><msub><mover><mi>y</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>4</mn><msup><mi>ℓ</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> luego calcula las derivadas <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>G</mi><mn>2</mn></msub><mi>/</mi><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></math> y plantea las ecuaciones del multiplicador. ¿Cuál es el significado físico de <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>?"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estos tres problemas son de la colección de fichas del autor (<code>fuentes_originales/problemas lagrange/</code>, 2026-08-25): el torno en 10 fichas, la vara en 4, el péndulo gemelo en 8, con un índice visual. La resolución sigue el camino de las fichas; los pequeños errores de signo y de coeficiente se han corregido en silencio, y los originales están en las fotografías y en el registro (<code>REGISTRO_INGESTA_LAGRANGIANOS_2026-08-25.csv</code>, línea 0006)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "Problemas De Mecanica Clasica Kotkin Serbo (Ed.Mir).pdf, § 4 (or. 20-27) eta § 10 (or. 58-61)",
     "xehetasuna": "Track L: problemas avanzados de mecánica analítica — lagrangiana, principios de conservación, hamiltoniana, corchetes de Poisson",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición — Track L (Kotkin-Serbo)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Problemas avanzados sacados del libro <strong>Problemas de Mecánica Clásica</strong> de Kotkin y Serbo (ed. MIR). Los problemas del § 4 tratan del formalismo lagrangiano (acción mínima, covariancia, teorema de Noether, transformación de Galileo, ligaduras); los del § 10, del formalismo hamiltoniano (corchetes de Poisson, hamiltoniana de un cuerpo simétrico, resonancia magnética). Texto original en castellano; traducido al euskera. Son un complemento de la <strong>Mecánica Clásica</strong> de Aguirregabiria (fullmekanika)."
      }
     ]
    },
    {
     "mota": "problema-gaia",
     "testua": "Kotkin-Serbo — § 4. Ecuaciones y principios de conservación (lagrangiana)"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula se mueve en el campo <math display=\"inline\"><mi>τ</mi></math> en el tiempo <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>F</mi><mi>x</mi></mrow></math> de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>. Halla la ley del movimiento, suponiendo que es de la forma <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>B</mi><mi>t</mi><mo>+</mo><mi>C</mi></mrow></math> y eligiendo los parámetros <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math>, <math display=\"inline\"><mi>C</mi></math> de modo que la acción sea mínima."
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
       "html": "Calculando directamente, demuestra la covariancia de las ecuaciones de Lagrange respecto a las transformaciones de coordenadas <math display=\"inline\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><msub><mi>q</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>Q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>Q</mi><mi>s</mi></msub><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></math>."
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
       "html": "Halla las leyes de transformación de la energía y del momento generalizado respecto a la transformación de coordenadas <math display=\"inline\"><mrow><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><msub><mi>f</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>Q</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>Q</mi><mi>s</mi></msub><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></math>."
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
       "html": "Halla las leyes de transformación de la energía y del momento generalizado al pasar a un sistema de referencia que gira alrededor del eje <math display=\"inline\"><mi>z</mi></math> con velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>: a) <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msup><mi>φ</mi><mo>′</mo></msup><mo>+</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msup><mi>r</mi><mo>′</mo></msup></mrow></math>; b) en coordenadas cartesianas."
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
       "html": "Halla las leyes de transformación de la energía y del momento al pasar a un sistema de referencia que se mueve con velocidad <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>."
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
       "html": "Si en la transformación infinitesimal <math display=\"inline\"><mrow><msub><mi>q</mi><msup><mi>i</mi><mo>′</mo></msup></msub><mo>=</mo><msub><mi>q</mi><mi>i</mi></msub><mo>+</mo><mi>ε</mi><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi><mo>+</mo><mi>ε</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se conserva la acción, demuestra que <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mfrac><mi>L</mi><mi>∂</mi></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mi>X</mi><mo>−</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>L</mi><mi>X</mi></mrow></math> es una integral del movimiento. (Teorema de Noether)"
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
       "html": "Halla las integrales del movimiento si la acción no cambia de tipo: a) en un desplazamiento espacial, b) en un giro, c) en un desplazamiento del origen de tiempos, d) en un desplazamiento helicoidal."
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
       "html": "Halla las integrales del movimiento si una partícula se mueve: a) en un campo uniforme <math display=\"inline\"><mrow><mi>U</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>; b) si <math display=\"inline\"><mrow><mi>U</mi><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> es homogéneo con <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>α</mi><mi>n</mi></msup><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; c) en el campo de una onda progresiva <math display=\"inline\"><mrow><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
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
       "html": "Halla la integral del movimiento correspondiente a la transformación de Galileo."
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
       "html": "Escribe las ecuaciones del movimiento para un sistema cuya función de Lagrange es: a) <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></msup><mo>+</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><msubsup><mo>∫</mo><mn>0</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>y</mi></mrow></math>; b) <math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>α</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
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
       "html": "Obtén las ecuaciones del movimiento de una partícula en el campo gravitatorio, usando el método de los multiplicadores de Lagrange, siendo los enlaces de movimiento: a) una parábola en el plano vertical; b) una circunferencia de radio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>l</mi></mrow></math> en el plano vertical. Expresa las fuerzas de reacción de las ligaduras."
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
       "html": "Una partícula se mueve en el campo gravitatorio por una recta que gira uniformemente en el plano vertical. Escribe las ecuaciones del movimiento y halla el momento de la fuerza de reacción de la ligadura."
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
       "html": "El efecto de las ligaduras y del rozamiento puede describirse con las fuerzas generalizadas <math display=\"inline\"><msub><mi>R</mi><mi>i</mi></msub></math> de entrada: <math display=\"inline\"><mrow><mfrac><mi>d</mi><mi>d</mi></mfrac><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mfrac><mi>L</mi><mi>∂</mi></mfrac><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∂</mi><mfrac><mi>L</mi><mi>∂</mi></mfrac><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><msub><mi>R</mi><mi>i</mi></msub></mrow></math>. a) ¿Cómo cambia la energía con el tiempo? b) ¿Cómo se transforma <math display=\"inline\"><msub><mi>R</mi><mi>i</mi></msub></math> a las nuevas coordenadas generalizadas?"
      }
     ]
    },
    {
     "mota": "problema-gaia",
     "testua": "Kotkin-Serbo — § 10. Ecuaciones de Hamilton. Corchetes de Poisson"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la hamiltoniana <math display=\"inline\"><mi>H</mi></math> de un sistema de partículas no cambia en un desplazamiento infinitesimal (un giro), deduce la ley de conservación del momento (del momento angular)."
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
       "html": "Halla la hamiltoniana de una peonza simétrica que se mueve libremente, tomando como coordenadas los ángulos de Euler <math display=\"inline\"><mi>θ</mi></math>, <math display=\"inline\"><mi>φ</mi></math>, <math display=\"inline\"><mi>ψ</mi></math>."
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
       "html": "Halla la hamiltoniana de un oscilador anarmónico, donde <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mfrac><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mi>α</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>β</mi><mi>x</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>."
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
       "html": "Halla la ley del movimiento de una partícula cuya hamiltoniana es: a) <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>λ</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>; b) <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msqrt><mi>p</mi></msqrt><mo>−</mo><mi>x</mi><mi>F</mi></mrow></math>."
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
       "html": "Halla las ecuaciones del movimiento de una partícula cuya hamiltoniana es <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>c</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> (un rayo de luz). Halla la trayectoria si <math display=\"inline\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>a</mi><mi>x</mi></mrow></math>."
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
       "html": "Halla la función de Lagrange cuya hamiltoniana es: a) <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi mathvariant=\"bold-italic\">𝒑</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>−</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math> (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konst</mtext></mrow></mrow></math>); b) <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>c</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>."
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
       "html": "Halla la ley del movimiento de una partícula con carga en un campo magnético uniforme constante, resolviendo las ecuaciones de Hamilton. Toma <math display=\"inline\"><mrow><msub><mi>A</mi><mi>y</mi></msub><mo>=</mo><mi>H</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><msub><mi>A</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "Calcula los corchetes de Poisson: a) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>i</mi></msub><mo>,</mo><msub><mi>x</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>i</mi></msub><mo>,</mo><msub><mi>p</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>i</mi></msub><mo>,</mo><msub><mi>M</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>; b) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒃</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑴</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒃</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>; c) <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝑴</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo>,</mo><msup><mi>r</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>. Aquí <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>, <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mi>i</mi></msub></math> son las componentes cartesianas y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒃</mi></math> vectores constantes."
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
       "html": "Demuestra <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>z</mi></msub><mo>,</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, donde <math display=\"inline\"><mi>φ</mi></math> es una función escalar (función de las coordenadas o de los momentos). Demuestra <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>z</mi></msub><mo>,</mo><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"bold-italic\">𝒏</mi><mi mathvariant=\"bold-italic\">𝒇</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒇</mi></math> es una función vectorial y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒏</mi></math> el vector unitario del eje <math display=\"inline\"><mi>z</mi></math>."
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
       "html": "Halla <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>M</mi><mi>ζ</mi></msub><mo>,</mo><msub><mi>M</mi><mi>ξ</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>, donde <math display=\"inline\"><msub><mi>M</mi><mi>ζ</mi></msub></math>, <math display=\"inline\"><msub><mi>M</mi><mi>ξ</mi></msub></math> son las proyecciones del momento angular en los ejes ligados al cuerpo."
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
       "html": "Escribe las ecuaciones del movimiento de la proyección <math display=\"inline\"><msub><mi>M</mi><mi>α</mi></msub></math> del momento angular, en ejes ligados al cuerpo. La hamiltoniana es <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mo>∑</mo><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>I</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mi>β</mi></mrow></msub><msub><mi>M</mi><mi>α</mi></msub><msub><mi>M</mi><mi>β</mi></msub></mrow></math>."
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
       "html": "La hamiltoniana de una esfera imanada en un campo magnético uniforme: <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>M</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><mo>−</mo><mi>γ</mi><mi mathvariant=\"bold-italic\">𝑴</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑯</mi></mrow></math>. Escribe las ecuaciones del movimiento del momento angular <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑴</mi></math> y halla la ley del movimiento: a) <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑯</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>H</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; b) <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑯</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>H</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>H</mi><mn>1</mn></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>H</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y al principio <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑴</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>M</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. (Resonancia magnética)"
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
       "html": "Demuestra que el valor de cualquier función <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> puede expresarse en función de los valores de <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math>: <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mo>+</mo><mfrac><mi>t</mi><mrow><mn>1</mn><mi>!</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>H</mi><mo>,</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>+</mo><mfrac><msup><mi>t</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>H</mi><mo>,</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>H</mi><mo>,</mo><mi>f</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>, donde <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Exámenes resueltos (1996-2000), mk:6",
     "hizkuntza": "eu"
    }
   ]
  }
 ]
};
