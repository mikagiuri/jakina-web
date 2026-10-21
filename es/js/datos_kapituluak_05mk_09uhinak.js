/* JAKINA · kapitulua «B9.9 - Uhinak» (05mk_09uhinak), desde edicion2/kapituluak/05mk_09uhinak/05mk_09uhinak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_09uhinak"] = {
 "gakoa": "05mk_09uhinak",
 "titulua": "JAKINA - B9 - Mecánica clásica - 9/10",
 "azala": "B9.9 - Ondas",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_09uhinak/05mk_09uhinak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Ondas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "¿Quién no ha visto olas en el mar? Oímos gracias a las ondas sonoras y son las ondas luminosas las que hacen posible la visión. Para transmitir información mediante la radio, la televisión o los teléfonos «móviles» se necesitan ondas electromagnéticas; la sociedad de las telecomunicaciones sería imposible sin ondas. Pero las ondas gravitacionales todavía no se han detectado directamente<span class=\"j-oin\">[Existen pruebas indirectas creíbles de la existencia de las ondas gravitacionales, como la evolución de los púlsares descubierta en 1974 por los astrofísicos Russell A. Hulse y Joseph H. Taylor Jr. Dichos astrofísicos obtuvieron el premio Nobel de 1993 «por el descubrimiento de un nuevo tipo de púlsar, un hallazgo que ha abierto nuevas vías para el estudio de la gravitación».]</span>."
    },
    {
     "mota": "testua",
     "html": "En este tema se estudiarán las definiciones y las propiedades básicas de las ondas. Nos limitaremos aquí a hacer una introducción. Después, en electromagnetismo y en óptica se estudiarán con mayor profundidad las ondas electromagnéticas, y en mecánica cuántica se usarán conceptos parecidos en el contexto de la ecuación de ondas de Schrödinger."
    },
    {
     "mota": "testua",
     "html": "En este primer estudio haremos grandes aproximaciones, pues se necesitan más fundamentos físicos y herramientas matemáticas para analizar con precisión muchos fenómenos ondulatorios. Así, como hicimos con las oscilaciones acopladas, hemos despreciado los amortiguamientos y las pérdidas que se dan en la práctica; además, a menudo nos serviremos de un ejemplo simplificado para obtener conclusiones físicas generales interesantes, y la demostración de que realmente son generales se dejará para asignaturas avanzadas. De hecho, aproximaciones y simplificaciones como estas se han hecho y se hacen a menudo en física. Con frecuencia, los aspectos importantes de los fenómenos pueden entenderse bien si se deja para el futuro el estudio de los detalles desconocidos o difíciles. Esta suele ser la única manera de avanzar."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Definición y ecuación de ondas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando se lanza una piedra a aguas tranquilas, la perturbación que se produce en el punto de impacto se propaga hacia fuera en anillos concéntricos. Lo que se propaga no es la materia misma (las hojas que hay en el agua se mueven un poco al pasar la onda, pero no avanzan con el frente de onda), sino los valores de una propiedad física, por ejemplo, la altura de la superficie del agua. Además, la onda transporta energía: al llegar a las hojas que estaban quietas, estas empiezan a oscilar."
    },
    {
     "mota": "testua",
     "html": "En una onda general se propagan de un punto a otro los valores de alguna magnitud física: el máximo de presión, un valor del campo eléctrico, etc. Esa magnitud física está definida en los puntos de una región del espacio; es un campo. Además, las ondas transportan energía (y momento lineal)."
    },
    {
     "mota": "irudia",
     "oina": "Dos traslaciones de una función en el caso <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/775d0e53f1941378.svg",
     "zabalera": 445
    },
    {
     "mota": "testua",
     "html": "Como se ve en la figura 9.2, si trasladamos la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> una distancia <math display=\"inline\"><mi>a</mi></math>, se obtiene <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En física, la función <math display=\"inline\"><mi>f</mi></math> puede usarse para medir una magnitud de un fenómeno que ocurre en una sola dimensión, un campo unidimensional. Por ejemplo, puede ser la temperatura en una barra, o la presión del aire en un tubo de órgano."
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que la situación no es estacionaria; por ejemplo, que la distribución de temperatura se propaga a lo largo de la barra, de modo que la temperatura que ahora tiene un punto la tiene luego el punto vecino. Si la distancia de traslación varía con el tiempo según la ley <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>v</mi><mi>t</mi></mrow></math>, la gráfica de la magnitud se moverá con velocidad <math display=\"inline\"><mi>v</mi></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "la función describirá la propagación de una onda de dicha magnitud y la velocidad de propagación será <math display=\"inline\"><mi>v</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Propagación de una magnitud en el caso <math display=\"inline\"><mrow><mi>v</mi><mo>&gt;</mo><mn>0</mn></mrow></math>.",
     "src": "../media/irudiak/70b4f577e3f8c7e6.svg",
     "zabalera": 365
    },
    {
     "mota": "testua",
     "html": "A la izquierda de la figura 9.4 vemos cuál es el valor del campo en todos los puntos en un instante y cómo cambia esa distribución con el tiempo, y a la derecha, cuál es la evolución en cada punto."
    },
    {
     "mota": "testua",
     "html": "En sentido contrario, para describir una onda que se mueve con velocidad de propagación <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi></mrow></math> habrá que usar, claro está, la función <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y en ambos casos tenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>∓</mi><mi>v</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∓</mi><mi>v</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Esto es, pues, lo que hemos demostrado: <em>las ondas que se propagan con velocidad constante <math display=\"inline\"><mrow><mi>±</mi><mi>v</mi></mrow></math> a lo largo del eje <math display=\"inline\"><mi>x</mi></math></em>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>de la ecuación de ondas</strong>"
    },
    {
     "mota": "testua",
     "html": "<em>son soluciones</em>. También es cierto el recíproco: la solución general de esta ecuación lineal en derivadas parciales es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math><span class=\"j-oin\">[Se la llama solución de D&#x27;Alembert, pero parece que Euler la encontró al mismo tiempo. Véase el problema 9.18.1.]</span>, siendo <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><mi>g</mi></math> funciones cualesquiera. Por tanto, la ecuación de ondas (9.5) es la descripción diferencial, en una dimensión, de las ondas que se mueven con velocidad constante <math display=\"inline\"><mi>v</mi></math>. En tres dimensiones hay que usar la ecuación de ondas (9.127), que veremos más adelante, cuando la velocidad de la onda es independiente del tiempo y de la dirección. Aparecerán dos velocidades en la ecuación de ondas (10.142) que veremos en el tema 10. Por otra parte, la ecuación de Schrödinger no es real (véase el problema 9.13), la del problema 9.14 tiene un término sin derivar y la del problema 9.12 es de orden mayor. No obstante, en este tema casi siempre se considerarán únicamente los casos sencillos (9.5) y (9.127), pues su importancia en física es extraordinaria."
    },
    {
     "mota": "irudia",
     "oina": "Cortes de la onda con <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo></mrow></math> cte. y con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo></mrow></math> cte.",
     "src": "../media/irudiak/1606b04e286a5824.svg",
     "zabalera": 546
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Ondas armónicas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Decimos que una onda es armónica cuando su perfil es una sinusoide: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math> o, si <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup></mrow></math>, tomando la parte real, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. A la constante <math display=\"inline\"><mi>k</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>número de onda</strong>"
    },
    {
     "mota": "testua",
     "html": "se la denomina así. En ese caso, la onda armónica que se propaga con velocidad <math display=\"inline\"><mi>v</mi></math> se escribe de este modo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>∓</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>∓</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aquí la <strong>pulsación</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>k</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se define así; en la expresión (9.6) hay que elegir el signo <math display=\"inline\"><mi>−</mi></math> si la onda se mueve hacia la derecha (es decir, cuando <math display=\"inline\"><mrow><mi>v</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), y <math display=\"inline\"><mi>+</mi></math> en el caso contrario."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de la onda armónica en un punto y su perfil en un instante.",
     "src": "../media/irudiak/b525bf0f11c5b0a7.svg",
     "zabalera": 326
    },
    {
     "mota": "testua",
     "html": "En un punto, el valor de la onda varía como el de un oscilador: <math display=\"block\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>∓</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>∓</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es evidente que el <strong>periodo</strong> de esa evolución temporal"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es y, por tanto, la <strong>frecuencia</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>k</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estudiemos ahora el perfil que tiene la onda en un instante. Es evidente que es otra sinusoide: <math display=\"block\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>∓</mi><mi>i</mi><mi>ω</mi><msub><mi>t</mi><mn>0</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>∓</mo><mi>ω</mi><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> El periodo del perfil, es decir, el periodo espacial, se llama <strong>longitud de onda</strong> y es el camino que recorre la onda armónica en un periodo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>ν</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La onda armónica también puede escribirse así: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>±</mi><mn>2</mn><mi>π</mi><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mi>λ</mi></mfrac><mo>∓</mo><mfrac><mi>t</mi><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compara las longitudes de onda y las frecuencias de la nota la de 440 Hz y de la luz roja de 600 nm."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Velocidad de fase"
    },
    {
     "mota": "testua",
     "html": "Es evidente que en la expresión (9.12) el camino que recorre en un periodo un valor constante de la onda (un máximo, por ejemplo) es la longitud de onda. Estudiemos ahora cómo se mueve dicho valor constante. Si se elige un valor constante de la <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup></mrow></math> de la onda, la <strong>fase</strong> constante <math display=\"inline\"><mi>φ</mi></math> se moverá con velocidad <math display=\"inline\"><mi>v</mi></math>: <math display=\"block\"><mrow><mi>φ</mi><mo>≡</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>x</mi><mo>∓</mo><mi>ω</mi><mi>t</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>v</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En consecuencia, a la velocidad de propagación <math display=\"inline\"><mi>v</mi></math> de la onda se la denomina <strong>velocidad de fase</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué expresa la fórmula <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>?"
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Ondas periódicas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las ondas del apartado anterior eran <strong>monocromáticas</strong>, es decir, tenían una única longitud de onda (y una única frecuencia). Es el caso más sencillo y, como veremos, el más importante, pues las demás se forman por superposición de ondas como esas. Empecemos con las ondas periódicas (el caso general lo estudiaremos en el apartado 9.4)."
    },
    {
     "mota": "testua",
     "html": "En el apartado 7.3.6 vimos también que, si el perfil de la onda <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es periódico, puede escribirse como combinación de sinusoides mediante una <strong>serie de Fourier</strong>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>k</mi><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>λ</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> En consecuencia, una onda periódica de longitud de onda <math display=\"inline\"><mi>λ</mi></math> se escribe así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>∓</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>λ</mi></msubsup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>±</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra la igualdad de los dos últimos términos de la expresión (9.18)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la velocidad de fase es <math display=\"inline\"><mi>v</mi></math>, la relación entre la longitud de onda y la frecuencia será la de la onda armónica. Como en el caso de las oscilaciones, el componente de menor frecuencia se llama <strong>armónico fundamental</strong> (o <strong>primer armónico</strong>), <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>k</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>λ</mi></mfrac><mo>,</mo></mrow></math> y los demás <strong>armónicos superiores</strong>: el segundo, el tercero, etc. Pueden aparecer todos los armónicos o solo algunos."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Análisis de Fourier y espectro",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como se dijo en el apartado 7.3.7, una función general <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede expresarse mediante sinusoides usando la <strong>transformada de Fourier</strong>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> En consecuencia, en el caso de la onda <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tenemos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>k</mi><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La transformada <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> expresa el <strong>espectro</strong> de la onda, es decir, qué contribución tiene cada componente monocromático."
    },
    {
     "mota": "testua",
     "html": "En el caso de una onda monocromática de número de onda <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math> solo hay una frecuencia en el espectro: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mi>δ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En efecto, usando las propiedades básicas de la delta de Dirac (véase el apartado B.7), tenemos: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><mi>δ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>C</mi><mi>δ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Asimismo, el espectro de una onda periódica que tiene <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>k</mi><mn>1</mn></msub><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> como armónico fundamental es el siguiente: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><mi>δ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mi>n</mi><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora un <strong>pulso</strong> o <strong>paquete de ondas</strong>, es decir, una onda nula salvo en un intervalo finito. El más sencillo es el pulso cuadrado de la figura 9.6: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Pulso cuadrado y su espectro.",
     "src": "../media/irudiak/d63e68531842b521.svg",
     "zabalera": 479
    },
    {
     "mota": "testua",
     "html": "La transformada se calcula directamente y aparece a la derecha de la figura 9.6: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>A</mi><mrow><mi>π</mi><mi>k</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi>L</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Es evidente que la anchura del pulso es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>. La transformada va de <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math> a <math display=\"inline\"><mi>∞</mi></math>, pero es muy pequeña salvo en torno al origen; por tanto, su anchura será el valor <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi></mrow><mi>L</mi></mfrac></mrow></math> de la figura o algún pequeño múltiplo de este. Tenemos, pues, olvidando un número pequeño:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>2</mn><mi>π</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "si el pulso es más ancho, la transformada es más estrecha y, al revés, cuanto más estrecho es el pulso, más ancho es el espectro"
    },
    {
     "mota": "testua",
     "html": ". Esta propiedad, si se definen bien las anchuras, es general (se la llama a menudo <strong>teorema de la anchura de banda</strong>). Para construir un paquete de ondas estrecho hay que sumar ondas monocromáticas de muchas frecuencias. En promedio, la amplitud de los componentes disminuye al aumentar la frecuencia <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>k</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>, pero en el límite <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math>, en el que todos los componentes son iguales, recuperamos el pulso de anchura nula: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>C</mi><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el otro extremo, si se usa una sola frecuencia, tenemos el pulso armónico (9.25)–(9.26) de anchura infinita."
    },
    {
     "mota": "testua",
     "html": "Una propiedad parecida se da en mecánica cuántica. Si el momento lineal de una partícula libre es <math display=\"inline\"><mi>p</mi></math>, su función de onda tiene número de onda <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>p</mi><mi>/</mi><mi>h</mi></mrow></math> y, de modo similar al resultado (9.31), la relación entre el intervalo de momentos que aparecen en la representación cuántica de una partícula en el caso general y su anchura espacial es la siguiente: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mi>h</mi><mi>.</mi></mrow></math> Este es el <strong>principio de incertidumbre de Heisenberg</strong>: <em>si se mide con gran precisión la posición de una partícula, se comete un gran error en la medida del momento, y viceversa</em>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos ahora que el espectro está acotado con el siguiente perfil: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math> Calcula el paquete de ondas y comprueba (9.31)."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Velocidad de grupo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En los dos apartados anteriores se ha usado, casi sin decirlo, que todas las ondas monocromáticas que se sumaban tenían la misma velocidad de fase. Pero eso no ocurre siempre. Empecemos con el caso de un grupo sencillo formado por dos ondas armónicas de velocidad de fase <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>i</mi></msub></mrow></math> distinta: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>−</mo><msub><mi>k</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>x</mi><mo>−</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>x</mi><mo>−</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Si los números de onda y las frecuencias de las dos ondas son parecidos (<math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>), la superposición de las dos ondas puede considerarse una onda armónica de amplitud variable y, de modo similar a lo que vimos en la figura 7.25 para las oscilaciones, se producirán batidos en cada punto al cambiar el tiempo, y en cada instante al cambiar el punto. A este fenómeno se le llama <strong>modulación de amplitud</strong>. Aquí, como las amplitudes y las fases iniciales de las dos ondas eran iguales, la modulación ha sido total, pues la amplitud va de 0 a <math display=\"inline\"><mrow><mn>2</mn><msub><mi>u</mi><mn>0</mn></msub></mrow></math>, pero la modulación también puede ser parcial, como se muestra a la derecha de la figura 9.7."
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta el último término de la expresión (9.35), la velocidad de fase, es decir, la velocidad de los máximos estrechos, es parecida a las velocidades de fase de las ondas sumadas: <math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></mfrac><mo>≈</mo><mfrac><msub><mi>ω</mi><mn>1</mn></msub><msub><mi>k</mi><mn>1</mn></msub></mfrac><mo>≈</mo><mfrac><msub><mi>ω</mi><mn>2</mn></msub><msub><mi>k</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mrow></math> Pero en este caso también se propaga la amplitud: tenemos una onda de amplitud, una onda que se mueve con la velocidad de los máximos de la amplitud <math display=\"block\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>−</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ω</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Modulación total y parcial.",
     "src": "../media/irudiak/f296881fe4524fb6.svg",
     "zabalera": 420
    },
    {
     "mota": "testua",
     "html": "que se mueve con la <strong>velocidad de grupo</strong>."
    },
    {
     "mota": "testua",
     "html": "En lugar de dos ondas, en el caso de un paquete de ondas que es la superposición de ondas de un intervalo <em>estrecho</em> de frecuencias, las velocidades de fase <math display=\"inline\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> de todos los componentes armónicos serán casi iguales y la velocidad de grupo es la siguiente (véase más adelante y, por ejemplo, [36]):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si en un medio todas las ondas armónicas tienen la misma velocidad de fase, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mi>v</mi></mrow></math>, en todos los casos tenemos <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>v</mi><mi>k</mi></mrow></math> y la velocidad de grupo <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mi>d</mi><mi>ω</mi><mi>/</mi><mi>d</mi><mi>k</mi><mo>=</mo><mi>v</mi></mrow></math> será igual a la velocidad de fase. Este ha sido el caso de los paquetes de ondas que hemos considerado en el apartado 9.4. Por otra parte, se dice que un medio es <strong>dispersivo</strong> cuando la velocidad de fase <math display=\"inline\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> de las ondas monocromáticas depende del número de onda (y, por tanto, de la frecuencia): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>v</mi><mi>f</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>ω</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>v</mi><mi>t</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi><msup><mi>v</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>v</mi><mi>t</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>v</mi><mi>f</mi></msub><mo>+</mo><mi>k</mi><mfrac><mrow><mi>d</mi><msub><mi>v</mi><mi>f</mi></msub></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Supongamos que para formar un paquete de ondas se suman componentes armónicos de frecuencias distintas, y que la función <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> —y, por tanto, el intervalo de frecuencias en torno a un valor <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math> que consideramos— es lo bastante estrecha como para poder usar la siguiente aproximación lineal: <math display=\"block\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>+</mo><msub><mi>v</mi><mi>t</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msub><mi>v</mi><mi>t</mi></msub><mo>≡</mo><msup><mi>ω</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En esta aproximación, la expresión (9.22) del paquete se reduce a la siguiente: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><msub><mi>v</mi><mi>t</mi></msub><mo>−</mo><msub><mi>ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>v</mi><mi>t</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><msub><mi>v</mi><mi>t</mi></msub><mo>−</mo><msub><mi>ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>−</mo><msub><mi>v</mi><mi>t</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>−</mo><msub><mi>v</mi><mi>t</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> La estructura matemática de la última expresión nos demuestra que la amplitud de la onda se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mi>t</mi></msub></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la anchura, la densidad y el módulo de Young (véanse la fórmula (9.49) y el apartado 10.2) de una lámina metálica delgada y larga son <math display=\"inline\"><mi>d</mi></math>, <math display=\"inline\"><mi>ρ</mi></math> y <math display=\"inline\"><mi>E</mi></math>, en el caso de las ondas transversales se cumple la siguiente relación de dispersión: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mn>12</mn><mi>ρ</mi></mrow></mfrac></msqrt><msup><mi>k</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Demuestra que la velocidad de fase es <math display=\"inline\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>∝</mo><msqrt><mi>ω</mi></msqrt></mrow></math> y la velocidad de grupo <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mn>2</mn><msub><mi>v</mi><mi>f</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Evolución de un paquete de ondas en un medio dispersivo.",
     "src": "../media/irudiak/4bbcd09c22244d7f.svg",
     "zabalera": 598
    },
    {
     "mota": "testua",
     "html": "En un medio dispersivo, los componentes armónicos de un paquete viajan con velocidades distintas y, en consecuencia, el paquete se irá ensanchando hasta deshacerse (cuanto más ancho es el intervalo de frecuencias, más rápido ocurre este proceso)."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Ondas elásticas en una barra",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que un extremo de una barra delgada está fijo a la pared. Si se aplica una fuerza paralela en el extremo libre (porque la golpeamos con un martillo, por ejemplo), se deformará, y esa deformación del extremo provocará una fuerza elástica en la parte contigua de la barra. Esa parte, por tanto, se moverá (y se deformará) y tendrá un efecto parecido en la parte contigua; así, la deformación se propagará a lo largo de la barra como una onda elástica. Pero para estudiarlo empecemos por la estática."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campos de deformación y de tensión"
    },
    {
     "mota": "testua",
     "html": "Si se aplica una fuerza constante <math display=\"inline\"><mi>F</mi></math> en el extremo libre, toda la barra se deformará y, cuando vuelva a estar en equilibrio, tendremos la situación que aparece a la izquierda de la figura 9.9. El elemento que sin fuerza estaba a distancia <math display=\"inline\"><mi>x</mi></math> de la pared está ahora a distancia <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: se llama <strong>campo de deformación</strong> a la magnitud <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que mide el cambio de posición. Es evidente que en este ejemplo <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y que el alargamiento de la barra es <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Cada parte de la barra está en equilibrio, pues las fuerzas aplicadas en sus extremos son opuestas. A menudo, en lugar de la fuerza de contacto <math display=\"inline\"><mi>F</mi></math>, usaremos la fuerza por unidad de área de la sección transversal, que se llama <strong>esfuerzo normal</strong> (en este caso,"
    },
    {
     "mota": "testua",
     "html": "<strong>tensión</strong>"
    },
    {
     "mota": "testua",
     "html": "): <math display=\"block\"><mrow><mi>τ</mi><mo>≡</mo><mfrac><mi>F</mi><mi>A</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Estática y dinámica de la barra elástica.",
     "src": "../media/irudiak/7320c9e2d5ebce3a.svg",
     "zabalera": 278
    },
    {
     "mota": "testua",
     "html": "Como es igual en todas las secciones, en equilibrio (pero no en dinámica) el <strong>campo de esfuerzos</strong> es constante. Si la deformación y el esfuerzo no son muy grandes, la fuerza <math display=\"inline\"><mi>F</mi></math> que hay que aplicar para conseguir una deformación <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> será proporcional a la deformación y al área de la sección transversal e inversamente proporcional a la longitud: <math display=\"block\"><mrow><mi>F</mi><mo>∝</mo><mi>A</mi><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo>=</mo><mi>A</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow><mi>l</mi></mfrac><mo>,</mo></mrow></math> y así ocurre, según nos dice la <strong>ley de Hooke</strong> (véase el apartado 10.2): <em>la deformación por unidad de longitud es proporcional al esfuerzo</em>, <math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mi>E</mi><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mi>.</mi></mrow></math> A la constante de proporcionalidad se la llama <strong>módulo de Young</strong>. Como se ve, las unidades del módulo de Young son las de la presión: 1 Pa <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> N m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>. El módulo de Young es una característica del material (véase la tabla A.9). Si el material es más rígido, <math display=\"inline\"><mi>E</mi></math> será mayor y habrá que aplicar a la barra un esfuerzo mayor para conseguir una deformación determinada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energía elástica"
    },
    {
     "mota": "testua",
     "html": "Supongamos que se quiere llevar la barra muy despacio de la configuración superior de la figura 9.9 a la inferior. Al principio la deformación es <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>0</mn></mrow></math> y la fuerza externa que hay que aplicar es cero. Al aumentar esta lentamente, la deformación irá creciendo y, cuando sea <math display=\"inline\"><mi>s</mi></math>, la fuerza aplicada será <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>A</mi><mi>E</mi><mi>s</mi><mi>/</mi><mi>l</mi></mrow></math>, por la ley (9.49). Al final tenemos <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math>, y el trabajo que ha habido que realizar para conseguirlo, que se acumula en la barra como energía potencial elástica, es el siguiente: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mo>∫</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></msubsup><mi>F</mi><mi>d</mi><mi>s</mi><mo>=</mo><mfrac><mrow><mi>A</mi><mi>E</mi></mrow><mi>l</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></msubsup><mi>s</mi><mi>d</mi><mi>s</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>A</mi><mi>E</mi></mrow><mi>l</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ley de Hooke"
    },
    {
     "mota": "testua",
     "html": "Calculando la derivada del campo de deformación de la ley (9.49), tenemos <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>τ</mi><mi>E</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": ". En estática la deformación <math display=\"inline\"><mi>x</mi></math> es proporcional a la longitud, y la ley finita (9.51) y la diferencial son equivalentes, pero cuando la situación es variable hay que usar la segunda forma:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mi>E</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En efecto, como el esfuerzo y la deformación cambian de un punto a otro (y de un instante al siguiente), hay que considerar la deformación del elemento infinitesimal de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> y el esfuerzo que sufre. La situación dinámica se ha dibujado a la derecha de la figura 9.10. Estudiemos la nueva longitud del elemento infinitesimal de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> que antes de deformarse la barra estaba en la posición <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><mi>d</mi><mi>l</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≈</mo><mi>d</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En consecuencia, la deformación por unidad de longitud, que se llama <strong>deformación unitaria</strong>, es <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>l</mi><mo>−</mo><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> y la ley de Hooke es (9.52). Aquí se ha usado la derivada parcial, porque en dinámica los campos de deformación y de esfuerzo dependen del tiempo: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Asimismo, para obtener la energía potencial elástica que hay en ese instante en el elemento infinitesimal, hay que hacer las sustituciones <math display=\"inline\"><mrow><mi>l</mi><mo>→</mo><mi>d</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>→</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math> en el resultado global (9.50): <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mi>E</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math> La densidad de energía es proporcional al cuadrado de la deformación unitaria."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de movimiento"
    },
    {
     "mota": "testua",
     "html": "Además de la deformación, el campo de esfuerzos produce movimiento. Como el volumen del elemento infinitesimal es <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></math>, si la densidad de masa del material es <math display=\"inline\"><mi>ρ</mi></math>, la masa es la siguiente: <math display=\"block\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>A</mi><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Por otra parte, como la posición del elemento es <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, su aceleración es <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> y las fuerzas de contacto que sufre en los extremos son <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>E</mi><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>τ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>E</mi><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>, por la ley (9.52). Por tanto, la fuerza total es <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>E</mi><mi>A</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> y, como la segunda ley de Newton es <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>d</mi><mi>m</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, la ecuación de movimiento es la siguiente: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>ρ</mi><mi>E</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Recordando la ecuación de ondas (9.5), hemos demostrado lo siguiente: <em>las ondas elásticas</em>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>E</mi><mi>ρ</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>se propagan con velocidad</em>"
    },
    {
     "mota": "testua",
     "html": "en una barra. Las ondas elásticas se propagan, pues, más deprisa en materiales rígidos y ligeros."
    },
    {
     "mota": "testua",
     "html": "En este apartado solo hemos estudiado el desplazamiento del material en la dirección de la barra; pero si se tiene en cuenta que al pasar una onda longitudinal también cambian un poco las dimensiones transversales, puede demostrarse que la velocidad de fase depende de la longitud de onda. No obstante, este efecto es despreciable si la longitud de onda es mucho mayor que las dimensiones transversales de la barra, y eso es lo que hemos usado implícitamente al considerar una barra (delgada)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la tabla A.9 para calcular la velocidad de las ondas elásticas en una barra de acero. Compara el resultado con la velocidad del sonido en el aire."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Propagación de la energía y del momento lineal"
    },
    {
     "mota": "testua",
     "html": "La onda de deformación que acabamos de estudiar no es la única onda de este problema. La tensión (9.52) también cumple la ecuación de ondas (9.61), porque, como las derivadas se pueden intercambiar, tenemos <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>τ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>ρ</mi><mi>E</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>τ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>. Podemos valernos de la estructura <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del campo de deformación para ver lo mismo de otra manera: es evidente que el esfuerzo tendrá la misma estructura matemática y, en consecuencia, será solución de la misma ecuación de ondas. El momento lineal del elemento infinitesimal es <math display=\"block\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mi>ρ</mi><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math> y, como se ve, este (o el momento lineal por unidad de longitud) se propaga con la velocidad (9.62) junto con <math display=\"inline\"><mi>u</mi></math>. La onda transporta momento lineal, y también energía, pues en cada superficie transversal la parte izquierda ejerce fuerza y realiza trabajo sobre la derecha, y viceversa: véase (9.71)."
    },
    {
     "mota": "testua",
     "html": "Consideremos lo que ocurre en el caso de un componente armónico <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de una onda. Cada elemento infinitesimal está en movimiento armónico con energía cinética <math display=\"block\"><mrow><mi>d</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><mi>A</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>k</mi><mi>v</mi><mo>=</mo><mi>ω</mi></mrow></math>, la energía potencial (9.55) media del elemento es esta: <math display=\"block\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>A</mi><mi>E</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> La energía cinética y la potencial son iguales, y ambas y la energía mecánica <math display=\"block\"><mrow><mi>d</mi><mi>T</mi><mo>+</mo><mi>d</mi><mi>V</mi><mo>=</mo><mi>ρ</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> se propagan a lo largo de la barra como una onda, con velocidad <math display=\"inline\"><mi>v</mi></math>."
    },
    {
     "mota": "testua",
     "html": "El valor medio de la energía mecánica se calcula directamente: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>d</mi><mi>T</mi><mo>+</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>d</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ρ</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><mi>A</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es el momento lineal medio?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, la densidad de energía media es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>d</mi><mi>T</mi><mo>+</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mi>A</mi><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por otra parte, la potencia instantánea que la parte izquierda ejerce sobre el elemento y su valor medio son los siguientes: <math display=\"block\"><mrow><mi mathvariant=\"script\">𝒫</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒓</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>F</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>E</mi><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>v</mi><mi>A</mi><mi>ρ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>T</mi><mo>+</mo><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>v</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>v</mi><mi>A</mi><mi>ρ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>v</mi><mi>A</mi><mi>U</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "En el intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>, la energía que atraviesa la sección normal está en este cilindro.",
     "src": "../media/irudiak/59a40efbf8d33d1a.svg",
     "zabalera": 187
    },
    {
     "mota": "testua",
     "html": "Así pues, la <strong>intensidad</strong> de la onda, es decir, la energía media que atraviesa la unidad de sección normal en la unidad de tiempo,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mi>A</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>v</mi><mi>U</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es y vemos que es el flujo de la densidad de energía <math display=\"inline\"><mi>U</mi></math> que se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>. En efecto, en esa interpretación la energía que ha entrado en el intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> a través de la sección normal izquierda de la figura 9.10 es la que hay en el volumen <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi></mrow></math> y es igual al trabajo realizado por la parte izquierda en ese intervalo de tiempo: <math display=\"block\"><mrow><mi>U</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>v</mi><mi>A</mi><mi>U</mi><mi>d</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math> Además de las ondas longitudinales de este apartado, en las barras se propagan otras ondas: en el apartado 10.2.5 estudiaremos las transversales y en el 10.2.6 las ondas de torsión."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Ondas de presión en una columna de gas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos las ondas sonoras, es decir, las ondas de presión, que se propagan en el gas contenido en un tubo cilíndrico largo. Puede definirse el campo de deformación como hicimos en el caso de la barra (véase la figura 9.11), pero como los gases, a diferencia de los sólidos, son muy compresibles, junto con la deformación cambiarán la presión y la densidad."
    },
    {
     "mota": "irudia",
     "oina": "Columna de gas en equilibrio y en movimiento.",
     "src": "../media/irudiak/f481e3ae0ff3f797.svg",
     "zabalera": 234
    },
    {
     "mota": "testua",
     "html": "En equilibrio tenemos en todos los puntos la presión <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> y la densidad <math display=\"inline\"><msub><mi>ρ</mi><mn>0</mn></msub></math>, pero al pasar la onda habrá que estudiar los campos <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como la longitud de un elemento infinitesimal es (9.53), el cambio de su volumen será este: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>d</mi><mi>l</mi><mo>−</mo><mi>A</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>V</mi><mi>.</mi></mrow></math> Por otra parte, el cambio de presión y el cambio unitario de volumen son proporcionales, y la constante de proporcionalidad <math display=\"inline\"><mi>B</mi></math> se llama <strong>módulo de compresibilidad volumétrica</strong> (o <strong>módulo de elasticidad volumétrico</strong>): <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>−</mi><mi>B</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi></mrow><mi>V</mi></mfrac><mi>.</mi></mrow></math> Esta es la aproximación lineal del cambio de presión (ley de Hooke), que puede usarse cuando el sistema no está muy lejos del equilibrio (véanse el apartado 10.2.1 y la tabla A.10). En consecuencia, la relación entre presión y deformación (9.75) queda así en el caso del volumen:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>−</mo><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "De aquí calculamos la fuerza total que sufre el elemento infinitesimal (teniendo en cuenta el sentido de la presión): <math display=\"block\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>p</mi><mi>A</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>A</mi><mo>=</mo><mi>−</mi><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>B</mi><mi>A</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Ahora, usando (9.75), la ecuación de movimiento <math display=\"inline\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>d</mi><mi>m</mi><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math> queda así: <math display=\"block\"><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>A</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi>B</mi><mi>A</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Teniendo en cuenta esto y (9.77), la deformación y la presión se propagan de este modo: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msub><mi>ρ</mi><mn>0</mn></msub><mi>B</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>p</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msub><mi>ρ</mi><mn>0</mn></msub><mi>B</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>p</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Por supuesto, en la última ecuación puede ponerse la <strong>presión acústica</strong> <math display=\"inline\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> en lugar de <math display=\"inline\"><mi>p</mi></math>.) En consecuencia, las ondas de deformación y de presión se propagan con la siguiente velocidad:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>B</mi><msub><mi>ρ</mi><mn>0</mn></msub></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El sonido en gases ideales"
    },
    {
     "mota": "testua",
     "html": "Al comprimir (expandir) un gas, este se calienta (se enfría), pero a las frecuencias habituales del sonido (20–20000 Hz) la conductividad térmica de los gases no basta para intercambiar un calor apreciable entre puntos de presiones distintas: el proceso es, por tanto, adiabático<span class=\"j-oin\">[Laplace corrigió el estudio anterior de Newton cuando se dio cuenta de esto.]</span>, no isotermo. Pero en los procesos adiabáticos de gases ideales tenemos <math display=\"block\"><mrow><mi>p</mi><msup><mi>V</mi><mi>γ</mi></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>V</mi><mrow><mi>−</mi><mi>γ</mi></mrow></msup></mrow></math>. El cociente de los calores específicos a presión y a volumen constantes es el coeficiente adiabático <math display=\"inline\"><mi>γ</mi></math>: <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><msub><mi>c</mi><mi>p</mi></msub><mi>/</mi><msub><mi>c</mi><mi>v</mi></msub></mrow></math>. En el caso de los gases ideales monoatómicos y diatómicos es <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo>,</mo><mn>7</mn><mi>/</mi><mn>5</mn></mrow></math>, respectivamente. El módulo de elasticidad volumétrico se calcula a partir de (9.83), <math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><msub><mi>V</mi><mn>0</mn></msub><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>V</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>γ</mi><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo></mrow></math> y la velocidad (9.82) se escribe así, tras eliminar el subíndice 0: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mi>γ</mi><mi>p</mi></mrow><mi>ρ</mi></mfrac></msqrt><mi>.</mi></mrow></math> Por otra parte, tenemos la relación entre presión y temperatura dada por la ley de los gases ideales: <math display=\"block\"><mrow><mi>p</mi><mi>V</mi><mo>=</mo><mi>n</mi><mi>R</mi><mi>T</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>n</mi></math> es el número de moles, <math display=\"inline\"><mi>T</mi></math> la temperatura absoluta y <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>k</mi><msub><mi>N</mi><mi>A</mi></msub></mrow></math> la constante universal de los gases, que es el producto de la constante de Boltzmann <math display=\"inline\"><mi>k</mi></math> y la constante de Avogadro <math display=\"inline\"><msub><mi>N</mi><mi>A</mi></msub></math> (véase la tabla A.1). Si usamos la masa molar <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>V</mi><mi>/</mi><mi>n</mi></mrow></math> del gas, tenemos <math display=\"inline\"><mrow><mi>p</mi><mi>m</mi><mo>=</mo><mi>ρ</mi><mi>R</mi><mi>T</mi></mrow></math> y la velocidad de fase (9.85) es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mi>γ</mi><mi>R</mi><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso del aire, como la velocidad del sonido cuando <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>273.15</mn></mrow></math> K <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>=</mo><mn>0</mn><msup><mi></mi><mo>∘</mo></msup><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>331.45</mn></mrow></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, a cualquier otra temperatura será, en el Sistema Internacional: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mn>20.055</mn><msqrt><mi>T</mi></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hay que señalar que en el estudio anterior no hemos tenido en cuenta la naturaleza molecular del gas; pero a la presión atmosférica el recorrido libre medio de las moléculas del aire es <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></math> m, y en el caso del sonido más débil que puede oírse la amplitud de la onda de deformación es diez mil veces menor, ¡comparable a las dimensiones de las moléculas! Por la agitación térmica, las moléculas se mueven al azar, pero al pasar la onda se produce un pequeño movimiento colectivo de las moléculas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Intensidad y energía"
    },
    {
     "mota": "testua",
     "html": "Para hallar la relación entre las amplitudes de las ondas de presión y de deformación, consideremos la onda armónica <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> y los resultados (9.77) y (9.82): <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>i</mi><mi>k</mi><mi>B</mi><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>−</mi><mi>i</mi><mi>k</mi><msup><mi>v</mi><mn>2</mn></msup><mi>ρ</mi><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>ω</mi><mi>v</mi><mi>ρ</mi><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Por tanto, la onda de presión se propaga con un desfase <math display=\"inline\"><mrow><mi>−</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> y su amplitud es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">ℐ</mi><mo>=</mo><mi>v</mi><mi>ω</mi><mi>ρ</mi><msub><mi>u</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ahora, si repetimos el estudio del apartado 9.6.5, la densidad de energía (9.70) será:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ρ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>ρ</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La intensidad (9.73) de la onda es, pues, la siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mi>v</mi><mi>U</mi><mo>=</mo><mfrac><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>ρ</mi><mi>v</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como las intensidades que oye el oído son de magnitudes muy distintas, la escala logarítmica<span class=\"j-oin\">[Además, según la ley de Weber y Fechner, la sensación fisiológica del sonido es aproximadamente proporcional al logaritmo de la intensidad.]</span> es más útil que la unidad <math display=\"inline\"><mrow><mi>W</mi><mi>/</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></math> del sistema SI. En el caso del aire, se toma como nivel de referencia el umbral de audición a 1 kHz (es decir, la intensidad del sonido más débil que puede oírse a esa frecuencia):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W/m</mtext></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con esa elección, en escala logarítmica, si la intensidad de un sonido es <math display=\"inline\"><mi>I</mi></math>, su <strong>nivel de intensidad</strong> es este:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>10</mn><msub><mrow><mi mathvariant=\"normal\">log</mi><mo>&#8289;</mo></mrow><mn>10</mn></msub><mfrac><mi>I</mi><msub><mi>I</mi><mn>0</mn></msub></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dB</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aunque esta magnitud es adimensional, su unidad se llama <strong>decibelio</strong> y se escribe dB (algo parecido se hace con los ángulos al usar radianes)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La intensidad del sonido más débil que puede oírse a 400 Hz es <math display=\"inline\"><mrow><mn>7.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></mrow></math> W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>. Halla la intensidad en dB y las amplitudes de la deformación y de la presión."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las ondas que hemos estudiado en este apartado y en el anterior han sido <strong>longitudinales</strong>: la dirección de propagación de la onda y la del movimiento de la materia son la misma. En el apartado siguiente empezaremos a estudiar los casos en que esas dos direcciones son distintas. (Las ondas transversales que se propagan en una barra se estudiarán en el apartado 10.2.5.)"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Ondas transversales en una cuerda tensa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si se da un impulso a una cuerda que está sometida a tensión entre dos puntos, se produce una perturbación transversal que se propagará por la cuerda. Estudiaremos el desplazamiento <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del punto que en equilibrio estaba en la abscisa <math display=\"inline\"><mi>x</mi></math>. Un elemento infinitesimal de la cuerda sufre las tensiones ejercidas por los dos elementos vecinos. Las componentes de una tensión son <math display=\"block\"><mrow><msub><mi>T</mi><mi>x</mi></msub><mo>=</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>y</mi></msub><mo>=</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> y el ángulo <math display=\"inline\"><mi>α</mi></math> que mide la dirección de la cuerda viene dado por la siguiente ecuación: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Onda transversal en una cuerda.",
     "src": "../media/irudiak/3b07f8d7680ff220.svg",
     "zabalera": 275
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de movimiento del elemento son, por tanto, las siguientes: <math display=\"block\"><mrow><mi>d</mi><msub><mi>T</mi><mi>x</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>−</mo><mi>T</mi><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msub><mi>T</mi><mi>y</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"normal\">sin</mi><mi>α</mi><mo>+</mo><mi>T</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>μ</mi><mi>d</mi><mi>x</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Aquí <math display=\"inline\"><mi>μ</mi></math> es la masa por unidad de longitud. La primera ecuación indica que el movimiento es normal: consideramos ondas transversales. De ahí se obtiene <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> y de (9.96) <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Sustituyendo estos dos resultados en la ecuación (9.98), tenemos <math display=\"block\"><mrow><mi>d</mi><msub><mi>T</mi><mi>y</mi></msub><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mi>α</mi><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math> y, como admitimos que las deformaciones son pequeñas, en la expresión (9.99) vemos que <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0</mn></mrow></math> (es decir, que la tensión es constante) y en (9.101) que <math display=\"block\"><mrow><mi>d</mi><msub><mi>T</mi><mi>y</mi></msub><mo>=</mo><mi>T</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≈</mo><mi>T</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Así pues, la ecuación (9.98) se escribe como <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>μ</mi><mi>T</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>. La deformación transversal se propaga como una onda con la siguiente velocidad de fase:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La velocidad de propagación aumenta al aumentar la tensión de la cuerda y, con las mismas tensiones, es menor en cuerdas pesadas que en ligeras."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Impedancia"
    },
    {
     "mota": "testua",
     "html": "Estudiemos cómo se genera la onda armónica <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> si se aplica en el extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> de la cuerda una fuerza <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> en dirección transversal. El movimiento del extremo será el de un oscilador armónico: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>. Por tanto, de modo similar a lo que hicimos en el apartado 7.3.2, la <strong>impedancia característica</strong> o <strong>impedancia transversal</strong> de la cuerda será <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mfrac><mi>F</mi><mi>y</mi></mfrac></mrow></math>. Como las amplitudes son pequeñas, tenemos: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msub><mi>T</mi><mi>y</mi></msub><mo>=</mo><mi>−</mi><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>≈</mo><mi>−</mi><mi>T</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>−</mi><mi>T</mi><msub><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>−</mi><mi>i</mi><mi>k</mi><mi>T</mi><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>i</mi><mi>ω</mi><mi>y</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>T</mi></mrow><mi>ω</mi></mfrac><mo>=</mo><mfrac><mi>T</mi><mi>v</mi></mfrac><mo>=</mo><mi>μ</mi><mi>v</mi><mo>,</mo></mrow></math> donde hemos usado <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math> y (9.105)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es el desfase entre la fuerza <math display=\"inline\"><mi>F</mi></math> y el desplazamiento <math display=\"inline\"><mi>y</mi></math>?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polarización"
    },
    {
     "mota": "testua",
     "html": "Sin decirlo, en la figura 9.12 y en el cálculo anterior se ha admitido que la cuerda está siempre en un plano y que, por tanto, el movimiento de cada punto es lineal, es decir, ocurre en una línea recta. Gracias a ello, la deformación <math display=\"inline\"><mi>u</mi></math> es un único campo escalar y se dice que la <strong>polarización</strong> de la onda es lineal. En el caso general, habrá que expresar la deformación transversal mediante un vector con dos componentes ortogonales. Por ejemplo, si en un extremo se aplican dos fuerzas armónicas perpendiculares de la misma frecuencia, <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mrow><mn>0</mn><mi>y</mi></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mn>0</mn><mi>y</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mrow><mn>0</mn><mi>z</mi></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mn>0</mn><mi>z</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Onda con polarización circular en una cuerda tensa.",
     "src": "../media/irudiak/5db08ac6fb5ede56.svg",
     "zabalera": 511
    },
    {
     "mota": "testua",
     "html": "componentes se propagará por la cuerda y el campo de deformación se escribirá como <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. El movimiento de cada punto será la superposición de dos oscilaciones armónicas perpendiculares de la misma frecuencia: como en ese caso la trayectoria es una elipse, se dice que la polarización de la onda es elíptica. Cuando las dos amplitudes son iguales, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mn>0</mn><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mn>0</mn><mi>z</mi></mrow></msub></mrow></math>, si el desfase entre los componentes es <math display=\"inline\"><mrow><msub><mi>φ</mi><mrow><mn>0</mn><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>φ</mi><mrow><mn>0</mn><mi>y</mi></mrow></msub><mo>=</mo><mi>±</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, la trayectoria de cada punto será circular, como en el caso de la figura 9.13. En ese caso particular el movimiento del extremo del vector de deformación —es decir, el movimiento del punto de la cuerda— es circular: la polarización de la onda es circular."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Ondas en una estructura periódica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos de nuevo la cuerda discreta tensa del apartado 7.8 en el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> pero sin cambiar <math display=\"inline\"><mi>a</mi></math>: en el límite se obtendrá una estructura periódica infinita. Para describir el movimiento transversal de las masas situadas en los puntos <math display=\"inline\"><mrow><msub><mi>x</mi><mi>s</mi></msub><mo>=</mo><mi>s</mi><mi>a</mi></mrow></math>, como se usa un campo discreto <math display=\"inline\"><msub><mi>y</mi><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>, la onda viajera armónica de amplitud constante que se propaga por la cuerda será de la forma <math display=\"block\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mi>s</mi></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>s</mi><mi>a</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>. Si se sustituye esa solución en la ecuación de movimiento (7.246), se obtiene: <math display=\"block\"><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>k</mi><mi>a</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>4</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mrow><mi>k</mi><mi>a</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Por tanto, como consecuencia de la estructura discreta, solo se propagan las frecuencias que cumplen la siguiente <strong>relación de dispersión</strong>: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi>a</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>T</mi><mrow><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> La gráfica de esta relación de dispersión será, pues, una variante continua de las de la figura 7.32 (véase el problema 9.31) y existe una frecuencia máxima: <math display=\"inline\"><mrow><mi>ω</mi><mo>≤</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. Como se ve, la velocidad de fase depende del número de onda y el medio es dispersivo: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi>a</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que en el caso de la cuerda continua <math display=\"inline\"><mrow><mi>a</mi><mo>→</mo><mn>0</mn></mrow></math> la velocidad (9.116) se reduce al valor (9.105)."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Ondas en un canal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las partículas que se mueven en las olas no son solo las de la superficie sino todas, aunque la amplitud vaya disminuyendo hacia el fondo. Además, el movimiento de las partículas se produce en la dirección de propagación de la onda y en la transversal. Para estudiar el movimiento hay que usar las ecuaciones de la hidrodinámica y las condiciones iniciales —que en la superficie la presión es la atmosférica y que las partículas del fondo no se mueven en dirección vertical— (véase, por ejemplo, [14])."
    },
    {
     "mota": "testua",
     "html": "Consideremos un caso sencillo: el movimiento de un fluido incompresible en un canal recto largo de sección transversal rectangular. La densidad del fluido es <math display=\"inline\"><mi>ρ</mi></math> y su altura en equilibrio <math display=\"inline\"><mi>h</mi></math>. Por otra parte, la tensión superficial, es decir, la fuerza por unidad de longitud que un elemento de la superficie ejerce sobre el contiguo (véase el apartado 10.13), será <math display=\"inline\"><mi>γ</mi></math>. Al propagarse la onda, las fuerzas recuperadoras serán consecuencia de dos fenómenos: el cambio de presión producido por los cambios de altura, por un lado, y la tensión superficial causada por la curvatura de la superficie, por otro. En este caso la ecuación de ondas no tiene la estructura sencilla de (9.5), pero admite soluciones armónicas del tipo (9.6) para las componentes del desplazamiento, siendo la velocidad de fase la siguiente: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>γ</mi></mrow><mrow><mi>ρ</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mn>2</mn><mi>π</mi><mi>h</mi></mrow><mi>λ</mi></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>k</mi></mfrac><mo>+</mo><mfrac><mrow><mi>γ</mi><mi>k</mi></mrow><mi>ρ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>h</mi></mrow></msqrt><mi>.</mi></mrow></math> Aquí vemos que la velocidad de fase <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math> depende de la longitud de onda: el medio es dispersivo, y si al principio tenemos un paquete de ondas compacto formado por componentes armónicos de distintas longitudes de onda, como los distintos componentes se mueven con velocidades distintas, el paquete se dispersará."
    },
    {
     "mota": "irudia",
     "oina": "Trayectorias de las partículas en una onda armónica que se propaga en un canal.",
     "src": "../media/irudiak/0d7bad92c1470595.svg",
     "zabalera": 258
    },
    {
     "mota": "testua",
     "html": "La figura 9.14 muestra las trayectorias de las partículas en ondas armónicas: la superficie del fluido es la línea horizontal superior discontinua en equilibrio y la línea continua al pasar la onda. Los movimientos de las componentes horizontal y vertical del desplazamiento son movimientos armónicos perpendiculares de la misma frecuencia y, como el desfase entre ellos es <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, las trayectorias son elipses con el eje mayor horizontal. La onda armónica es, pues, la superposición de una onda longitudinal y una transversal. Si la longitud de onda <math display=\"inline\"><mi>h</mi></math> es menor que la profundidad, las dos amplitudes son iguales en la superficie y las trayectorias circulares. Al aumentar la profundidad las dos amplitudes disminuyen, pero la vertical más deprisa; las trayectorias serán elípticas y en el fondo solo queda la componente horizontal."
    },
    {
     "mota": "testua",
     "html": "En aguas profundas, es decir, cuando <math display=\"inline\"><mrow><mi>h</mi><mo>≫</mo><mi>λ</mi></mrow></math>, tenemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>h</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mi>h</mi><mi>/</mi><mi>λ</mi><mo>≈</mo><mn>1</mn></mrow></math> y la velocidad de las ondas armónicas es esta: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>γ</mi></mrow><mrow><mi>ρ</mi><mi>λ</mi></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>k</mi></mfrac><mo>+</mo><mfrac><mrow><mi>γ</mi><mi>k</mi></mrow><mi>ρ</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math> Aquí, si la longitud de onda <math display=\"inline\"><mi>λ</mi></math> es lo bastante grande como para poder despreciar el segundo término, tenemos <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac></mrow></msqrt><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>k</mi></mfrac></msqrt></mrow></math>: en estas <strong>ondas gravitatorias</strong> la velocidad no depende del líquido (véase también el problema 9.16). En estos casos la velocidad de propagación aumenta con la longitud de onda; pero ocurre lo contrario en el límite de longitud de onda pequeña: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>π</mi><mi>γ</mi></mrow><mrow><mi>ρ</mi><mi>λ</mi></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>γ</mi><mi>k</mi></mrow><mi>ρ</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ondas de rizo</strong>"
    },
    {
     "mota": "testua",
     "html": ", <strong>ondas capilares</strong> u <strong>ondas de tensión superficial</strong> se llama a las de este tipo, que a menudo producen los vientos suaves."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, si la longitud de onda es muy grande, como <math display=\"inline\"><mrow><mi>λ</mi><mo>≫</mo><mi>h</mi></mrow></math>, tenemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>h</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mi>h</mi><mi>/</mi><mi>λ</mi><mo>≈</mo><mn>2</mn><mi>π</mi><mi>h</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mi>k</mi><mi>h</mi></mrow></math> y el segundo término del paréntesis es despreciable en la velocidad (9.117): <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>h</mi></mrow></msqrt><mi>.</mi></mrow></math> En este límite la velocidad no depende de la longitud de onda."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Ondas en dos y tres dimensiones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una solución <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de la ecuación de ondas (9.5) puede interpretarse de dos maneras distintas en el triedro <math display=\"inline\"><mrow><mi>O</mi><msup><mi>X</mi><mo>′</mo></msup><msup><mi>Y</mi><mo>′</mo></msup><msup><mi>Z</mi><mo>′</mo></msup></mrow></math> de la figura 9.15: como el valor que tiene un campo físico en el instante <math display=\"inline\"><mi>t</mi></math> en el punto de abscisa <math display=\"inline\"><msup><mi>x</mi><mo>′</mo></msup></math> de una recta o como el valor que tiene el campo en ese instante en todos los puntos del plano de abscisa <math display=\"inline\"><msup><mi>x</mi><mo>′</mo></msup></math> del espacio. En este último caso tenemos una <strong>onda plana</strong> en tres dimensiones."
    },
    {
     "mota": "irudia",
     "oina": "Onda plana.",
     "src": "../media/irudiak/e47115856272eba9.svg",
     "zabalera": 311
    },
    {
     "mota": "testua",
     "html": "Siempre podemos elegir el sistema de referencia de modo que la dirección de propagación de una onda plana venga dada por el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math>, pero no tenemos por qué hacerlo (es imposible, por ejemplo, si queremos estudiar a la vez dos ondas planas que se propagan en direcciones distintas). En cualquier otro sistema de referencia la dirección de propagación de la onda plana de la figura 9.15 será, en lugar de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒊</mi></math>, algún otro vector unitario, es decir, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝒊</mi><mo>′</mo></msup></mrow></math>, y la expresión de la onda es <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mi>x</mi><mo>+</mo><msub><mi>n</mi><mi>y</mi></msub><mi>y</mi><mo>+</mo><msub><mi>n</mi><mi>z</mi></msub><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por esa estructura matemática, como tenemos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><msup><mi>f</mi><mo>″</mo></msup></mtd></mtr></mtable></math> y <math display=\"inline\"><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo>=</mo><mn>1</mn></mrow></math>, la ecuación diferencial de la onda plana es la siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es la ecuación de ondas en tres dimensiones. Para aligerar la notación se usa el operador diferencial llamado <strong>laplaciano</strong>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(véase el apartado B.3.5), para escribir la ecuación de ondas como"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": ". Es más, a veces se usa el operador de d&#x27;Alembert definido por la expresión <math display=\"block\"><mrow><mi>▫</mi><mo>≡</mo><msup><mi>∇</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, para abreviar la ecuación de ondas del siguiente modo: <math display=\"block\"><mrow><mi>▫</mi><mi>u</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es necesario considerar la onda <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en el cálculo anterior?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La expresión de la onda plana armónica es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aquí, además de la pulsación <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math> y del número de onda <math display=\"inline\"><mi>k</mi></math>, hemos usado el <strong>vector de onda</strong>, que indica la dirección y el sentido de la propagación:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>≡</mo><mi>k</mi><mover><mi mathvariant=\"bold-italic\">𝒏</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usando el análisis de Fourier, otras ondas planas pueden describirse como superposición de ondas armónicas del tipo (9.132)."
    },
    {
     "mota": "irudia",
     "oina": "Onda en una membrana tensa y fuerzas que sufre el elemento diferencial.",
     "src": "../media/irudiak/639336a800eb8bd6.svg",
     "zabalera": 397
    },
    {
     "mota": "testua",
     "html": "En muchos casos se estudian problemas en dos dimensiones, y entonces la ecuación de ondas que hay que usar es la siguiente (si las dos dimensiones espaciales se describen mediante <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>): <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como ejemplo sencillo podemos considerar las ondas transversales que se propagan en una membrana tensa (la de un tambor, por ejemplo). Repitiendo el cálculo del apartado 9.8, la fuerza vertical total ejercida sobre los lados de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> es <math display=\"block\"><mrow><mi>d</mi><msubsup><mi>F</mi><mi>z</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>y</mi></mrow></math>. Esta ecuación es parecida al resultado (9.103), pero ahora hay que usar la tensión superficial <math display=\"inline\"><mi>τ</mi></math>. De igual modo, la fuerza vertical que sufren los lados de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math> es <math display=\"block\"><mrow><mi>d</mi><msubsup><mi>F</mi><mi>z</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mi>d</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math> y, como la masa del elemento se escribe como <math display=\"inline\"><mrow><mi>d</mi><mi>m</mi><mo>=</mo><mi>σ</mi><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow></math> —<math display=\"inline\"><mrow><mi>σ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la masa por unidad de área—, la segunda ley de Newton queda así: <math display=\"block\"><mrow><mi>d</mi><msubsup><mi>F</mi><mi>z</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>+</mo><mi>d</mi><msubsup><mi>F</mi><mi>z</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>τ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mi>σ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math> La onda transversal cumple, pues, la ecuación (9.134) y la velocidad de propagación es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>τ</mi><mi>σ</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es patente la semejanza entre esta velocidad de fase y el resultado (9.105) que obtuvimos en el caso de la cuerda tensa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas esféricas"
    },
    {
     "mota": "testua",
     "html": "No hay que pensar que todas las soluciones de la ecuación de ondas (9.127) sean planas. Una perturbación producida en un punto de un medio homogéneo e isótropo (al golpear un diapasón, por ejemplo) se propagará igual en todas las direcciones y la onda que genera tendrá simetría esférica: será <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, si se usa, como de costumbre, la distancia polar <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. Con esa hipótesis tenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>x</mi><mi>r</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msup><mi>z</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>−</mo><mfrac><msup><mi>z</mi><mn>2</mn></msup><msup><mi>r</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Por tanto, en el caso de simetría esférica, la ecuación de ondas (9.127) se reduce a la siguiente: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Es parecida a la ecuación de ondas unidimensional (9.5), pero no igual, y se comprueba directamente que admite soluciones del tipo siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>∓</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que las funciones (9.145) son soluciones de la ecuación (9.144)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es fácil entender lo que expresan tales soluciones: el valor de la onda que se propaga hacia fuera o hacia dentro en dirección radial con velocidad <math display=\"inline\"><mi>v</mi></math> va disminuyendo (aumentando) al aumentar (disminuir) la distancia <math display=\"inline\"><mi>r</mi></math>. La onda armónica se escribe ahora así: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><msub><mi>u</mi><mn>0</mn></msub><mi>r</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mfrac><msub><mi>u</mi><mn>0</mn></msub><mi>r</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo>∓</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> La amplitud de la onda es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mi>/</mi><mi>r</mi></mrow></math>: disminuye con la distancia."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en el caso de una onda de presión esférica armónica que se propaga con velocidad (9.82) en un líquido o en un gas, tenemos <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi mathvariant=\"script\">ℐ</mi><mi>r</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> en lugar de la ecuación (9.89). Además, puede demostrarse que, cuando <math display=\"inline\"><mrow><mi>k</mi><mi>r</mi><mo>∝</mo><mi>r</mi><mi>/</mi><mi>λ</mi><mo>≫</mo><mn>1</mn></mrow></math> (es decir, lejos del centro), la onda de desplazamiento es <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><msub><mi>u</mi><mn>0</mn></msub><mi>r</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> y el equivalente del resultado (9.90) es el siguiente: <math display=\"block\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi mathvariant=\"script\">ℐ</mi><mrow><mi>v</mi><mi>ω</mi><msub><mi>ρ</mi><mn>0</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La densidad de energía es <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><msub><mi>ρ</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup><mrow><mn>2</mn><msub><mi>ρ</mi><mn>0</mn></msub><msup><mi>v</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> y la intensidad"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mi>v</mi><mi>U</mi><mo>=</mo><mfrac><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup><mrow><mn>2</mn><msub><mi>ρ</mi><mn>0</mn></msub><mi>v</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msub><mi>I</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>I</mi><mn>0</mn></msub><mo>≡</mo><mfrac><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup><mrow><mn>2</mn><msub><mi>ρ</mi><mn>0</mn></msub><mi>v</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La densidad de energía y la intensidad son proporcionales al cuadrado de la amplitud, y <em>en las ondas esféricas armónicas la intensidad disminuye con el cuadrado de la distancia</em>: <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>. Este resultado expresa la conservación de la energía: como el área de las superficies esféricas que atraviesa la energía al propagarse hacia fuera aumenta con <math display=\"inline\"><msup><mi>r</mi><mn>2</mn></msup></math>, la intensidad será proporcional a <math display=\"inline\"><msup><mi>r</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>, para que la energía total que pasa por unidad de tiempo a través de toda la superficie no dependa de la distancia: <math display=\"block\"><mrow><mo>∮</mo><mi>I</mi><mi>d</mi><mi>S</mi><mo>=</mo><mi>I</mi><mi>S</mi><mo>=</mo><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mi>I</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msup><mi mathvariant=\"script\">ℐ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>ρ</mi><mn>0</mn></msub><mi>v</mi></mrow></mfrac><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea</mtext></mrow><mi>.</mi></mrow></math> Por supuesto, cuando la distancia <math display=\"inline\"><mi>r</mi></math> es muy grande, en torno a un punto podemos tomar la onda como plana con muy buena aproximación. Ahí está la importancia de las ondas planas: son una buena aproximación de otras ondas muy lejos de la fuente."
    },
    {
     "mota": "testua",
     "html": "En otros casos, si hay simetría cilíndrica, pueden darse ondas cilíndricas y, en dos dimensiones, ondas circulares, por ejemplo."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Ondas electromagnéticas planas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos las leyes de la electrodinámica en el vacío, en una región muy alejada de todas las cargas. El propio Maxwell se dio cuenta de que sus ecuaciones admiten soluciones ondulatorias, aunque no haya fuentes de campo. Más tarde, en 1887, Hertz comprobó esta predicción teórica en el laboratorio, en una serie clásica de experimentos. Las ondas de radio producidas por un circuito eléctrico se detectaban en otro circuito, y comprobó que dichas ondas se propagan con la velocidad de la luz y que tienen propiedades parecidas (reflexión y polarización, por ejemplo). Así se demostró que la luz es una onda electromagnética."
    },
    {
     "mota": "testua",
     "html": "Para simplificar el cálculo, daremos por supuesto que los campos eléctrico y magnético son perpendiculares (si se prefiere, nos limitaremos a buscar soluciones con tal estructura). Eligiendo bien los ejes, siempre puede escribirse la última hipótesis de este modo: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> La ley de Gauss <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math> es, cuando no hay densidad de carga. Por tanto, por la estructura (9.153) y la definición (B.28), tenemos: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Algo parecido ocurre con el campo magnético: <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> La ley de inducción de Faraday y Henry, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> se reduce a las dos condiciones siguientes por las expresiones (9.153), (9.154), (9.156) y (B.21): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Asimismo, como no hay corrientes, la ley de Ampère y Maxwell, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math> se escribe así, usando (9.153), (9.154), (9.157) y (B.21): <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Es evidente que, por las ecuaciones (9.156), (9.157), (9.159) y (9.162), las soluciones son de la forma <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math> Además, si en la derivada del resultado (9.160) respecto de <math display=\"inline\"><mi>x</mi></math> sustituimos (9.163), <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∂</mi><mn>2</mn></msup><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>x</mi><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene y,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>c</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub></mrow></msqrt></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "si definimos,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>E</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Asimismo, si en la derivada del resultado (9.163) respecto de <math display=\"inline\"><mi>x</mi></math> sustituimos (9.160), se obtiene lo siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>B</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>B</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemos demostrado, pues, lo siguiente: <em>entre las soluciones de las ecuaciones de Maxwell hay ondas electromagnéticas planas transversales que se mueven con velocidad (9.167)</em>. Como la luz es una onda electromagnética, la velocidad de la luz es la dada por la expresión (9.167) mediante la permitividad y la permeabilidad magnética del vacío."
    },
    {
     "mota": "irudia",
     "oina": "Onda electromagnética plana.",
     "src": "../media/irudiak/0f951e791974317e.svg",
     "zabalera": 237
    },
    {
     "mota": "testua",
     "html": "Sabemos que las soluciones de las ecuaciones de ondas (9.168) y (9.169) son combinaciones de funciones de la forma <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero entonces tenemos <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>∓</mi><mi>c</mi><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mi>∓</mi><mi>c</mi><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>∓</mi><mi>c</mi><msup><mi>B</mi><mo>′</mo></msup><mo>=</mo><mi>∓</mi><mi>c</mi><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd></mtr></mtable></math> y, usando (9.160), (9.163) y (9.167), nos queda: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>±</mi><mi>c</mi><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>±</mi><mi>c</mi><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> Por tanto, dejando aparte las soluciones constantes, que no se propagan, en las ondas electromagnéticas planas los módulos de los campos eléctrico y magnético son proporcionales:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>±</mi><mi>c</mi><mi>B</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Así pues, como en este caso particular la velocidad de la luz es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒄</mi><mo>=</mo><mi>±</mi><mi>c</mi><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math>, tenemos: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒄</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la igualdad (B.48) para demostrar directamente a partir de las ecuaciones de Maxwell que, en el caso general, en el vacío los campos eléctrico y magnético cumplen las siguientes ecuaciones de ondas: <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑩</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Onda electromagnética plana armónica en el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>, con polarización lineal y circular.",
     "src": "../media/irudiak/3c586d575ae6440e.svg",
     "zabalera": 610
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polarización"
    },
    {
     "mota": "testua",
     "html": "Las soluciones que hemos encontrado son de la forma <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><mi>c</mi></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>, pero es evidente que si intercambiamos <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>, también <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∓</mi><mfrac><mn>1</mn><mi>c</mi></mfrac><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∓</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> serán soluciones, y también las combinaciones lineales de (9.178) y (9.179). Por ejemplo, la onda armónica <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑬</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑩</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>A</mi><mn>1</mn></msub><mi>c</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"bold-italic\">𝒌</mi><mo>−</mo><mfrac><msub><mi>A</mi><mn>2</mn></msub><mi>c</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"bold-italic\">𝒋</mi></mtd></mtr></mtable></math> de pulsación <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>c</mi></mrow></math> es la superposición de dos ondas con desfase relativo <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>. En general, la polarización de esa onda será elíptica, pero cuando <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> tenemos polarización circular y cuando <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (o <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), polarización lineal."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo es la polarización de las dos ondas siguientes: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑬</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑬</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒋</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>?</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En general, una onda plana monocromática es de longitud infinita y, como tiene proyecciones armónicas de la misma frecuencia en las dos direcciones perpendiculares a la dirección de propagación, tiene una polarización: elíptica en la mayoría de los casos, aunque en casos degenerados puede ser circular o lineal. La <strong>luz natural</strong> de la mayoría de las fuentes está producida por muchos emisores a la vez. Cada uno emite un paquete de ondas de longitud finita (producido como mucho en <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></math> segundos). Así, desde el punto de vista matemático, la luz natural puede expresarse en la aproximación de ondas planas mediante dos componentes ortogonales independientes, de fases que cambian deprisa y a la vez."
    },
    {
     "mota": "testua",
     "html": "Al instrumento que anula uno de esos dos componentes incoherentes y deja pasar el otro se le llama <strong>polarizador lineal</strong>. Si la luz natural pasa a través de uno de estos polarizadores, saldrá polarizada linealmente en la dirección llamada <strong>eje de transmisión</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Ley de Malus.",
     "src": "../media/irudiak/e7eb4fdc29ba8d5f.svg",
     "zabalera": 388
    },
    {
     "mota": "testua",
     "html": "Si se coloca un segundo polarizador como se muestra en la figura 9.20 (y entonces se llama <strong>analizador</strong>), y el ángulo entre los dos ejes de transmisión es <math display=\"inline\"><mi>θ</mi></math>, solo pasará la proyección <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> del campo eléctrico <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> en la dirección del eje de transmisión del analizador. Como la intensidad de la luz, según veremos en la expresión (9.189), es proporcional al cuadrado del campo eléctrico, si la intensidad que llega al analizador es <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> (si el polarizador fuera ideal y la luz natural, sería la mitad de la intensidad de la onda plana incidente <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math>), la que sale del analizador (si la absorción es despreciable)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "será. Este resultado se llama <strong>ley de Malus</strong>, porque la publicó en 1809 el ingeniero Étienne Malus. Si los ejes de transmisión de los dos polarizadores son paralelos, la intensidad es máxima, y cuando están cruzados es mínima (nula, si los polarizadores son ideales)."
    },
    {
     "mota": "testua",
     "html": "Si el polarizador no es perfecto, la luz saldrá parcialmente polarizada. Suponiendo que el analizador es perfecto, el <strong>grado de polarización</strong> de la luz que viene del polarizador se define como <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mo>∥</mo></msub><mo>−</mo><msub><mi>I</mi><mo>⟂</mo></msub></mrow><mrow><msub><mi>I</mi><mo>∥</mo></msub><mo>+</mo><msub><mi>I</mi><mo>⟂</mo></msub></mrow></mfrac></mrow></math>, si la intensidad que se mide detrás del analizador cuando los ejes de transmisión son paralelos (perpendiculares) es <math display=\"inline\"><msub><mi>I</mi><mo>∥</mo></msub></math> (<math display=\"inline\"><msub><mi>I</mi><mo>⟂</mo></msub></math>). Así, si el polarizador fuera perfecto, tendríamos <math display=\"inline\"><mrow><msub><mi>I</mi><mo>⟂</mo></msub><mo>=</mo><mn>0</mn></mrow></math> y, en consecuencia, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math>. Por otra parte, si es muy malo, los dos componentes serán parecidos, como en la luz natural, y, por tanto, <math display=\"inline\"><mrow><msub><mi>I</mi><mo>∥</mo></msub><mo>≈</mo><msub><mi>I</mi><mo>⟂</mo></msub></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo>≈</mo><mn>0</mn></mrow></math>. En general, para medir el grado de polarización de un haz de luz puede usarse un analizador. Si las intensidades máxima y mínima que se miden en la luz transmitida al girar este último son <math display=\"inline\"><msub><mi>I</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mtext mathvariant=\"normal\">min</mtext></msub></math>, el grado de polarización del haz se define así: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>I</mi><mtext mathvariant=\"normal\">min</mtext></msub></mrow><mrow><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>I</mi><mtext mathvariant=\"normal\">min</mtext></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El primer proceso para producir polarización lineal, la reflexión, se estudiará en el apartado 9.14.4. Hoy día, el polarizador más conocido es la película llamada <em>Polaroid</em>, que inventó Edwin H. Land en 1938: su eje de transmisión es perpendicular a la dirección de sus moléculas largas de hidrocarburo, pues tras tratarlas con yodo esas moléculas son conductoras a frecuencias ópticas. En estos casos el fenómeno de absorción que produce la polarización se llama <strong>dicroísmo</strong>. Los polarizadores dicroicos son muy anisótropos y la absorción depende mucho de la dirección."
    },
    {
     "mota": "testua",
     "html": "<strong>Birrefringencia</strong>"
    },
    {
     "mota": "testua",
     "html": "(o <strong>doble refracción</strong>) es el fenómeno que ocurre en otros cristales anisótropos: la velocidad de la luz depende de la dirección. Aquí no estudiaremos el fenómeno como merece (véase, por ejemplo, [13]); pero podemos decir que en un cristal de este tipo un rayo (que no esté en la dirección llamada eje óptico) se separa en dos rayos polarizados. Este fenómeno se ve fácilmente en el espato de Islandia, y ese material (la calcita, es decir) se usa para hacer los polarizadores llamados prismas de Nicol. Además, como en tales materiales la velocidad de la luz (y, por tanto, el retardo de los rayos) depende de la longitud de onda, cuando la luz no es monocromática pueden aparecer <strong>colores de interferencia</strong> debidos a cambios locales del grosor y de la birrefringencia: coloca un celofán arrugado entre dos polarizadores y aparecerán espectaculares imágenes de colores."
    },
    {
     "mota": "testua",
     "html": "Un fenómeno parecido ocurre en una pieza de plástico sometida a un esfuerzo, gracias al fenómeno llamado <strong>fotoelasticidad</strong>,"
    },
    {
     "mota": "testua",
     "html": "<strong>birrefringencia mecánica</strong>"
    },
    {
     "mota": "testua",
     "html": "o <strong>birrefringencia de esfuerzo</strong>: algunos materiales transparentes isótropos pueden volverse anisótropos si se les aplican esfuerzos mecánicos. Esto se usa en ingeniería para estudiar la distribución de esfuerzos mediante un modelo situado entre polarizadores. Se aprovechan los cristales líquidos, que pueden hacer girar el plano de polarización, en las pantallas de calculadoras, relojes, teléfonos móviles y otros muchos aparatos."
    },
    {
     "mota": "testua",
     "html": "Otro proceso físico que produce ondas polarizadas es la <strong>dispersión</strong>: los electrones de los átomos y de las moléculas, en cuanto absorben ondas electromagnéticas (fotones), las vuelven a emitir. De hecho, los procesos de dispersión son el origen microscópico de muchos fenómenos ópticos que vemos. Si hay polvo o humo en el aire, gracias a tales procesos podemos ver el rayo de luz que entra por una rendija. Además, la <strong>dispersión de Rayleigh</strong> que ocurre en la atmósfera y la producida por fluctuaciones de energía son la razón de que el cielo sea azul (véase, por ejemplo, [13]). Como todos sabemos, visto desde el espacio, el cielo es negro (salvo en la dirección del Sol); pero el azul de la luz del Sol se dispersa mucho más que los demás colores en todas las direcciones y, por tanto, de día vemos el azul como si viniera de todos los puntos del cielo. (Al amanecer y al atardecer, en cambio, ocurre lo contrario: el azul, tras recorrer un largo camino en la atmósfera, se ha dispersado y, en la dirección del Sol, solo vemos el rojo y el amarillo, que no se han dispersado.) En los procesos de dispersión que ocurren en la atmósfera la luz está parcialmente polarizada y la polarización lineal es máxima cuando la dirección de observación es perpendicular al rayo original, como puede comprobarse mirando la zona adecuada del cielo a través de un polarizador. Algunos artrópodos (como las abejas) aprovechan esa polarización parcial para encontrar el camino."
    },
    {
     "mota": "testua",
     "html": "El uso más espectacular de los polarizadores es el cine en tres dimensiones: se proyectan dos imágenes con polarizaciones cruzadas y a través de cada cristal polarizador de las gafas se ve una de ellas, para crear la ilusión de tres dimensiones."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Vector de Poynting"
    },
    {
     "mota": "testua",
     "html": "La densidad de energía del campo electromagnético es <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msub><mi>μ</mi><mn>0</mn></msub></mrow></mfrac><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ε</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en el vacío. En el caso de las ondas planas, por el resultado (9.174), las densidades de energía eléctrica y magnética son iguales, y la densidad total se reduce a lo siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>B</mi><mn>2</mn></msup><msub><mi>μ</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "En el intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>, la energía que atraviesa una sección es la de este paralelepípedo.",
     "src": "../media/irudiak/142636fc4e2097e8.svg",
     "zabalera": 392
    },
    {
     "mota": "testua",
     "html": "Como esta densidad, igual que los campos, se propaga con velocidad <math display=\"inline\"><mi>c</mi></math>, en el intervalo de tiempo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> la energía que atraviesa la superficie infinitesimal normal de área <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> es la que hay en el paralelepípedo infinitesimal de la figura: <math display=\"inline\"><mrow><mi>d</mi><mi>W</mi><mo>=</mo><mi>U</mi><mi>A</mi><mi>c</mi><mi>d</mi><mi>t</mi></mrow></math>. La <strong>intensidad instantánea</strong> de la onda, es decir, la energía que atraviesa la superficie normal de área unidad en la unidad de tiempo, es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>W</mi></mrow><mrow><mi>A</mi><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>c</mi><mi>U</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi><msup><mi>E</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la intensidad media, que en óptica también se llama <strong>irradiancia</strong>, si la onda es armónica?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Definamos el vector de Poynting así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑮</mi><mo>≡</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑯</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por (9.175), este vector tiene la dirección y el sentido de la velocidad de propagación de la onda plana, y su módulo es la intensidad instantánea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mi>E</mi><mi>B</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><mi>U</mi><mi>c</mi><mo>=</mo><mi>I</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El vector de Poynting expresa, pues, el flujo de energía, ya que la energía electromagnética que atraviesa en la unidad de tiempo la superficie infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> es la siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>W</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"bold-italic\">𝑮</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En efecto, si la sección no es normal, la energía que atraviesa el elemento <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math> en el intervalo de tiempo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> es la que hay en el paralelepípedo que aparece a la derecha de la figura 9.24; pero ahora la altura del paralelepípedo no es la longitud <math display=\"inline\"><mrow><mi>c</mi><mi>d</mi><mi>t</mi></mrow></math> de la arista, sino <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>c</mi><mi>d</mi><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Por tanto, el volumen es <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mi>h</mi><mi>d</mi><mi>S</mi><mo>=</mo><mi>c</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>t</mi><mi>d</mi><mi>S</mi></mrow></math> y la energía <math display=\"inline\"><mrow><mi>d</mi><mi>W</mi><mo>=</mo><mi>U</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>G</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>S</mi><mi>d</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, gracias a la mecánica cuántica sabemos que la luz está formada por fotones y, por tanto, como la relación entre la energía y el momento lineal de cada fotón es (3.137), además de la densidad de energía (9.188) tenemos la densidad de momento lineal electromagnético: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><mfrac><mi>U</mi><mi>c</mi></mfrac><mfrac><mi mathvariant=\"bold-italic\">𝒄</mi><mi>c</mi></mfrac><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑫</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝑮</mi><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> (En realidad, este resultado puede obtenerse directamente del electromagnetismo, sin mencionar los fotones.) El módulo de la densidad de momento lineal es este: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mi>U</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><mi>I</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup></mrow><mi>c</mi></mfrac><mi>.</mi></mrow></math> La energía de un fotón es <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi></mrow></math>. Aquí hemos usado la pulsación de la expresión (9.7) y la constante de Planck reducida: <math display=\"block\"><mrow><mi>ħ</mi><mo>≡</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math> Además, como <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>c</mi></mrow></math>, el módulo del momento lineal del fotón es el siguiente: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><mi>h</mi><mi>λ</mi></mfrac><mo>=</mo><mi>ħ</mi><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Velocidad de la luz en medios materiales"
    },
    {
     "mota": "testua",
     "html": "Cuando la luz monocromática, en lugar de propagarse en el vacío, atraviesa un medio material isótropo y homogéneo, se propaga con velocidad <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>ε</mi><mi>μ</mi></mrow></msqrt></mfrac></mrow></math>, si la permitividad eléctrica y la permeabilidad magnética del medio son <math display=\"inline\"><mi>ε</mi></math> y <math display=\"inline\"><mi>μ</mi></math>. El <strong>índice de refracción</strong> <math display=\"inline\"><mi>n</mi></math> del medio se define de modo que la velocidad de la luz en él sea"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>c</mi><mi>n</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y, por (9.198),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><msqrt><mrow><msub><mi>ε</mi><mi>r</mi></msub><msub><mi>μ</mi><mi>r</mi></msub></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "tenemos, usando la permitividad relativa <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>r</mi></msub><mo>≡</mo><mi>ε</mi><mi>/</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></math> y la permeabilidad relativa <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>r</mi></msub><mo>≡</mo><mi>μ</mi><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub></mrow></math><span class=\"j-oin\">[De hecho, en muchos medios dieléctricos transparentes tenemos <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>r</mi></msub><mo>≈</mo><mn>1</mn></mrow></math> y, por tanto, <math display=\"inline\"><mrow><mi>n</mi><mo>≈</mo><msqrt><msub><mi>ε</mi><mi>r</mi></msub></msqrt></mrow></math>.]</span>. Desde el punto de vista microscópico, cuando una onda electromagnética entra en la materia los átomos y las moléculas absorben y emiten fotones y las ondas resultantes no están todas en fase y, aunque todas se propaguen en el vacío con velocidad <math display=\"inline\"><mi>c</mi></math>, su superposición es una onda macroscópica de distinta velocidad de fase, como consecuencia de un fenómeno colectivo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Espectro electromagnético"
    },
    {
     "mota": "testua",
     "html": "En el espectro electromagnético se distinguen varias regiones, según la longitud de onda, el método de producción y las aplicaciones. Los límites entre ellas no son del todo precisos y la separación de la figura 9.25 es esquemática."
    },
    {
     "mota": "irudia",
     "oina": "Espectro electromagnético.",
     "src": "../media/irudiak/0bdba591817c8f6c.svg",
     "zabalera": 379
    },
    {
     "mota": "testua",
     "html": "<strong>Rayos gamma</strong>"
    },
    {
     "mota": "testua",
     "html": "Se producen en la desintegración de núcleos radiactivos<span class=\"j-oin\">[Paul Ulrich Villard descubrió los rayos gamma en la desintegración del radio, en 1900.]</span> y en las reacciones nucleares, y pueden provocar reacciones nucleares. En los rayos cósmicos también se encuentran fotones gamma de muy alta energía. Para detectarlos se usan películas y tubos electrónicos. Son radiaciones ionizantes, muy perjudiciales para la salud; destruyen células y provocan mutaciones: pueden causar cáncer. En medicina se usan para curar el cáncer, para esterilizar y en trazadores radiactivos. En metalurgia son útiles para detectar defectos en los metales."
    },
    {
     "mota": "testua",
     "html": "<strong>Rayos X</strong>"
    },
    {
     "mota": "testua",
     "html": "Se producen cuando electrones ligeros chocan contra un metal<span class=\"j-oin\">[Así los descubrió Wilhelm Conrad Röntgen en 1895 y por ello obtuvo el primer premio Nobel en 1901.]</span> y se detectan en películas. Son muy conocidas sus aplicaciones en medicina y en los detectores de los aeropuertos. Se usan para estudiar redes cristalinas en cristalografía (véase el apartado 9.17.6). Son muy perjudiciales para la salud."
    },
    {
     "mota": "testua",
     "html": "<strong>Luz ultravioleta</strong>"
    },
    {
     "mota": "testua",
     "html": "Se produce en descargas de gases, en objetos muy calientes, en el Sol<span class=\"j-oin\">[Johann Wilhelm Ritter descubrió la luz ultravioleta en 1801, al estudiar la luz del Sol con un prisma, usando sales de plata como detector.]</span> y en algunas reacciones químicas. Se detecta mediante películas. Es útil para muchas cosas: para producir iones (que son la causa de la ionosfera, que empieza a 80 km de altura), para producir vitamina D, para broncear y para esterilizar. Es peligrosa, pues puede causar quemaduras y cáncer de piel. Por suerte, el oxígeno y el ozono de la atmósfera absorben la que viene del Sol. Algunos materiales fluorescentes emiten longitudes de onda visibles después de absorber esta luz «negra»: este fenómeno se usa, entre otras cosas, para detectar billetes falsos y en los tubos fluorescentes. Algunas flores se valen de los <em>colores ultravioleta</em> para atraer a los insectos polinizadores."
    },
    {
     "mota": "testua",
     "html": "<strong>Luz visible</strong>"
    },
    {
     "mota": "testua",
     "html": "La producen el Sol, los objetos calientes y los aparatos electrónicos —láseres, aparatos llamados LED (<em>light-emitting diode</em>), ...— y se detecta con los ojos, con películas y con aparatos electrónicos. Newton demostró (mediante un prisma, en el famoso <em>experimentum crucis</em>) que en la luz blanca están todos los colores (es decir, todas las longitudes de onda visibles): la longitud de onda más corta corresponde al violeta (<math display=\"inline\"><mrow><mo>≈</mo><mn>400</mn></mrow></math> nm) y la más larga al rojo (<math display=\"inline\"><mrow><mo>≈</mo><mn>710</mn></mrow></math> nm). Cuando está concentrada puede causar quemaduras y ceguera. El sistema nervioso genera la sensación de color a partir de la información que le envía el ojo. En la tabla A.7 se recogen los intervalos de los colores según la opinión de la persona media."
    },
    {
     "mota": "testua",
     "html": "<strong>Luz infrarroja</strong>"
    },
    {
     "mota": "testua",
     "html": "La producen el Sol<span class=\"j-oin\">[William Herschel descubrió en 1800 la primera luz invisible al medir la temperatura de los colores de la luz del Sol.]</span>, los objetos calientes y los aparatos electrónicos, y para detectarla pueden usarse películas especiales o detectores electrónicos. Se usa para ver en la oscuridad y en los mandos a distancia de la televisión o de las puertas de garaje<span class=\"j-oin\">[Los chips llamados CCD (<em>charge-coupled device</em>) de las cámaras fotográficas digitales son sensibles a la luz infrarroja: mientras se pulsa cualquier botón de un mando a distancia, en la pantalla de la cámara puede verse la luz del LED infrarrojo.]</span> y también para mantener calientes las cosas. Cuando está concentrada puede causar quemaduras."
    },
    {
     "mota": "testua",
     "html": "<strong>Microondas</strong>"
    },
    {
     "mota": "testua",
     "html": "Se producen con circuitos electrónicos y se detectan (mediante antenas)<span class=\"j-oin\">[El aparato llamado «magnetrón», que se usa para producir microondas, se inventó en Gran Bretaña, en 1940, para construir sistemas de radar. Jagdish Chandra Bose estudió por primera vez, en 1897, la propagación de microondas en guías de ondas.]</span>. Se usan en telefonía, en televisión por satélite y en comunicaciones, en sistemas de localización, en radares y en hornos. En radioastronomía tiene extraordinaria importancia la emisión del hidrógeno a 21 cm. Además, en este apartado está la radiación cósmica de fondo de microondas, que está en la base experimental de la cosmología moderna: su espectro es el de un cuerpo negro a una temperatura de 2.73 K, es decir, tiene el máximo en torno a una longitud de onda de <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>2</mn></mrow></math> mm. Cuando están concentradas pueden causar quemaduras."
    },
    {
     "mota": "testua",
     "html": "<strong>Ondas de radio</strong>"
    },
    {
     "mota": "testua",
     "html": "Las producen y las detectan (mediante antenas) circuitos electrónicos. Se usan en radio, televisión, telefonía y navegación marítima. Parece que no son peligrosas en las concentraciones que se obtienen normalmente. Eran de este tipo las que produjo y estudió Heinrich Hertz en 1887 para comprobar la teoría de Maxwell. A partir de 1895, Guglielmo Marconi usó las ondas «hercianas» para revolucionar las comunicaciones<span class=\"j-oin\">[Marconi obtuvo el premio Nobel de 1909, junto con Karl Ferdinand Braun, por inventar la telegrafía sin hilos.]</span>. Jocelyn Bell Burnell descubrió en 1967 el primer púlsar<span class=\"j-oin\">[El director de Bell, Antony Hewish, obtuvo —junto con Martin Ryle— el premio Nobel de 1974 «por su papel decisivo en el descubrimiento de los púlsares». En opinión de algunos astrónomos importantes, esta decisión de dejar fuera a Bell no fue muy justa.]</span>, una estrella de neutrones que, al girar muy deprisa, emite pulsos periódicos de ondas de radio en la dirección del radiotelescopio. Entre los objetos del universo más espectaculares descubiertos en radioastronomía hay que mencionar las radiogalaxias (que emiten desde sus núcleos enormes chorros de materia)."
    },
    {
     "mota": "testua",
     "html": "<strong>Bajas frecuencias</strong>"
    },
    {
     "mota": "testua",
     "html": "La frecuencia es de 300 Hz o menos en los cables de transporte de electricidad, en la corriente alterna que usan los trenes y los tranvías, y en el campo eléctrico y magnético de la Tierra."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Efecto Doppler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos en un medio una fuente de ondas que se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mi>i</mi></msub></math> y un detector que se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mi>d</mi></msub></math>. Para simplificar los cálculos, ambas velocidades estarán en la dirección de la posición relativa, pero pueden ser tanto positivas como negativas, igual que la velocidad de propagación <math display=\"inline\"><mi>v</mi></math> de la onda. A menudo, pero no siempre, nos interesan las ondas sonoras<span class=\"j-oin\">[Para comprobar el efecto Doppler en el caso del sonido, Christophorus Henricus Diedericus Buys Ballot puso a unos músicos en un tren en 1845.]</span>: la fuente puede ser un altavoz, el detector el oído del oyente y el medio el aire."
    },
    {
     "mota": "testua",
     "html": "En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> (es evidente que no hay restricción alguna al elegir el origen del tiempo en ese instante) sale de la fuente un máximo de la onda de frecuencia <math display=\"inline\"><msub><mi>ν</mi><mi>i</mi></msub></math> y en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>T</mi><mi>i</mi></msub></mrow></math> sale el siguiente, tras pasar un periodo <math display=\"inline\"><mrow><msub><mi>T</mi><mi>i</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>ν</mi><mi>i</mi></msub></mrow></math>, cuando la fuente ha recorrido la distancia <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><msub><mi>T</mi><mi>i</mi></msub></mrow></math>. La onda se propagará en el medio con velocidad <math display=\"inline\"><mi>v</mi></math> y en un instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math> llegará al detector el primer máximo, tras recorrer la distancia <math display=\"inline\"><mrow><mi>v</mi><msub><mi>t</mi><mn>0</mn></msub></mrow></math>. Si la frecuencia que se mide en el detector es <math display=\"inline\"><msub><mi>ν</mi><mi>d</mi></msub></math>, tras pasar el periodo <math display=\"inline\"><mrow><msub><mi>T</mi><mi>d</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>ν</mi><mi>d</mi></msub></mrow></math> llegará el segundo máximo, tras recorrer la distancia <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>v</mi><msub><mi>t</mi><mn>0</mn></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><msub><mi>T</mi><mi>i</mi></msub><mo>+</mo><msub><mi>v</mi><mi>d</mi></msub><msub><mi>T</mi><mi>d</mi></msub></mrow></math> en el intervalo de tiempo <math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>−</mo><msub><mi>T</mi><mi>i</mi></msub><mo>+</mo><msub><mi>T</mi><mi>d</mi></msub></mrow></math>: <math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mi>v</mi><msub><mi>t</mi><mn>0</mn></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><msub><mi>T</mi><mi>i</mi></msub><mo>+</mo><msub><mi>v</mi><mi>d</mi></msub><msub><mi>T</mi><mi>d</mi></msub><mo>=</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>+</mo><msub><mi>T</mi><mi>d</mi></msub><mo>−</mo><msub><mi>T</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> De aquí, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>d</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>d</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>T</mi><mi>i</mi></msub></mrow></math> o"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mi>d</mi></msub><mo>=</mo><mfrac><mrow><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>d</mi></msub></mrow><mrow><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub></mrow></mfrac><msub><mi>ν</mi><mi>i</mi></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(recuérdese el problema 2.7). Hay que subrayar que las tres velocidades de este resultado pueden ser positivas o negativas. Además, como también se escribe <math display=\"block\"><mrow><msub><mi>ν</mi><mi>d</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub></mrow><mrow><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ν</mi><mi>i</mi></msub></mrow></math>, si <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> (el caso supersónico se estudiará más abajo), la figura 9.28 muestra que <em>si la fuente y el detector se alejan entre sí, en este último se mide una frecuencia menor, y si se acercan, mayor</em>. Esto explica cómo cambia el tono de la sirena de una ambulancia al pasar a nuestro lado."
    },
    {
     "mota": "irudia",
     "oina": "Efecto Doppler.",
     "src": "../media/irudiak/a97f26f79465612a.svg",
     "zabalera": 562
    },
    {
     "mota": "testua",
     "html": "Si la fuente está en reposo en el medio (<math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"block\"><mrow><msub><mi>ν</mi><mi>d</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msub><mi>v</mi><mi>d</mi></msub><mi>v</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ν</mi><mi>i</mi></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Efecto Doppler en algunos casos.",
     "src": "../media/irudiak/b5795bd3cd893dd7.svg",
     "zabalera": 386
    },
    {
     "mota": "testua",
     "html": "tenemos, y si lo que está en reposo es el detector, <math display=\"block\"><mrow><msub><mi>ν</mi><mi>d</mi></msub><mo>=</mo><mfrac><msub><mi>ν</mi><mi>i</mi></msub><mrow><mn>1</mn><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mi>/</mi><mi>v</mi></mrow></mfrac><mi>.</mi></mrow></math> El último caso se entiende fácilmente a la derecha de la figura 9.27: como la fuente se mueve, los frentes de onda esféricos tienen centros distintos."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, si las velocidades de la fuente y del detector son mucho menores que la de la onda, puede usarse la siguiente aproximación simplificada: <math display=\"block\"><mrow><msub><mi>ν</mi><mi>d</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub></mrow><mi>v</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ν</mi><mi>i</mi></msub><mi>.</mi></mrow></math> En esta aproximación, si <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>i</mi></msub></mrow></math> no son paralelos, hay que usar esto: <math display=\"block\"><mrow><msub><mi>ν</mi><mi>d</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝒗</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><msup><mi>v</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>ν</mi><mi>i</mi></msub><mi>.</mi></mrow></math> Por ejemplo, la medicina se vale del efecto Doppler: con ultrasonidos que se reflejan en los glóbulos rojos se mide la velocidad de la sangre y así se detectan estrechamientos de las arterias. Los murciélagos también usan el efecto Doppler de los ultrasonidos para medir la velocidad de sus presas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas de choque"
    },
    {
     "mota": "testua",
     "html": "Arriba hemos hecho la hipótesis <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>v</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, pero ¿qué ocurre si la fuente se mueve más deprisa que la onda? Es evidente que delante de la fuente no habrá onda: en efecto, toda la onda está dentro de un cono cuyo vértice es la fuente, como se muestra en la figura 9.29. El frente de onda cónico se llama <strong>onda de choque</strong> o, a veces, <strong>onda de Mach</strong>, y hay una gran diferencia entre las presiones dentro y fuera del cono: esa es la causa del estampido que se oye cuando pasa cerca un avión supersónico. Este gradiente de presión se usa en la litotricia por ultrasonidos, para romper las piedras que hay en las cavidades del cuerpo."
    },
    {
     "mota": "irudia",
     "oina": "Onda de choque.",
     "src": "../media/irudiak/08aca07d38653754.svg",
     "zabalera": 315
    },
    {
     "mota": "testua",
     "html": "La abertura del cono se calcula fácilmente con el diagrama de la figura 9.29. En el intervalo de tiempo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> el camino recorrido por la primera onda es el radio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>. El recorrido de la fuente en el mismo intervalo es <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msub><mi>v</mi><mi>i</mi></msub><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>. En consecuencia, si eliminamos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> entre estas dos distancias obtenemos <math display=\"inline\"><mrow><mi>r</mi><mi>/</mi><mi>d</mi><mo>=</mo><mi>v</mi><mi>/</mi><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>v</mi><msub><mi>v</mi><mi>i</mi></msub></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Algo parecido ocurre con la perturbación que produce en la superficie del agua una trainera, por ejemplo. Pero en ese caso hay que recordar que el medio es dispersivo y las cosas no son tan sencillas. Por ejemplo, la estela que produce una embarcación al moverse con velocidad constante en aguas profundas está dentro de una cuña de ángulo <math display=\"inline\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mn>1</mn><mi>/</mi><mn>3</mn><mo>≈</mo><mn>39</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>: la explicación de este fenómeno se llama <strong>modelo de Kelvin</strong> (pero véase [101])."
    },
    {
     "mota": "testua",
     "html": "También con la luz pueden darse ondas de choque. No en el vacío, claro: allí nada se mueve más deprisa que la luz; pero, como hemos visto en el apartado 9.12.3, en un medio la velocidad de la luz es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>c</mi><mi>/</mi><mi>n</mi></mrow></math>, si el índice de refracción del medio es <math display=\"inline\"><mi>n</mi></math>, y cuando <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow></math> puede ser <math display=\"inline\"><mrow><mi>v</mi><mo>&lt;</mo><msub><mi>v</mi><mi>i</mi></msub><mo>&lt;</mo><mi>c</mi></mrow></math>. La onda de choque que se produce en tales casos se llama <strong>radiación de Cherenkov</strong><span class=\"j-oin\">[Pavel Cherenkov, Ilt&#x27;ja Frank e Igor Tamm obtuvieron el premio Nobel de 1958 por el descubrimiento y la explicación de este fenómeno.]</span> y la abertura del cono (9.208) es esta: <math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>c</mi><mrow><mi>n</mi><msub><mi>v</mi><mi>i</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> Este fenómeno se usa, por ejemplo, en el gigantesco depósito de agua subterráneo de Super-Kamiokande, construido para detectar neutrinos. Si las partículas cargadas de alta energía producidas como consecuencia de la interacción de neutrinos van más deprisa que la luz en las 50.000 toneladas de agua, la luz azulada que emiten se propaga por el agua pura hasta llegar a uno de los 10.000 fotomultiplicadores capaces de detectar un solo fotón."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Efecto Doppler electromagnético"
    },
    {
     "mota": "testua",
     "html": "El efecto Doppler también se da con ondas electromagnéticas, pero el estudio es distinto por dos razones. El sonido es la propagación de perturbaciones de un medio y, por tanto, la velocidad del sonido se define de modo natural en el sistema de ese medio; en todos los demás se calcula mediante la transformación de Galileo. En el caso de las ondas electromagnéticas no hay perturbación de ningún medio material (no hay éter) y no existe un sistema de referencia natural para estas ondas: en todos los sistemas la velocidad de propagación es la misma, <math display=\"inline\"><mi>c</mi></math>. Además, en este caso tenemos que usar necesariamente la relatividad especial."
    },
    {
     "mota": "testua",
     "html": "El estudio del efecto relativista lo hicimos en el problema 3.11.1, usando que la radiación electromagnética está formada por fotones. Aquí nos valdremos de la naturaleza ondulatoria de dicha radiación para estudiar el efecto desde otro punto de vista, mediante un método parecido al que se usó en el caso del sonido."
    },
    {
     "mota": "irudia",
     "oina": "Diagrama de Minkowski del efecto Doppler.",
     "src": "../media/irudiak/c2224453a1d30440.svg",
     "zabalera": 213
    },
    {
     "mota": "testua",
     "html": "Para empezar, consideraremos el sistema propio de la fuente. En él, el observador se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math> a lo largo del eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math>: está, pues, en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>v</mi><mi>t</mi></mrow></math> en el instante <math display=\"inline\"><mi>t</mi></math>. Un máximo de una onda armónica se emite en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> y, como se propaga con velocidad <math display=\"inline\"><mi>c</mi></math>, estará en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>c</mi><mi>t</mi></mrow></math>. Llegará hasta el observador cuando se cumpla <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>v</mi><mi>t</mi><mo>=</mo><mi>c</mi><mi>t</mi></mrow></math>, es decir, en el suceso <math display=\"block\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mfrac><msub><mi>x</mi><mn>0</mn></msub><mrow><mi>c</mi><mo>−</mo><mi>v</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>c</mi><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>c</mi><mrow><mi>c</mi><mo>−</mo><mi>v</mi></mrow></mfrac><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>β</mi><mo>≡</mo><mfrac><mi>v</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. El siguiente máximo parte en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>T</mi></mrow></math> (cuando ha pasado un periodo, es decir): tenemos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el observador lo detectará cuando se cumpla <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>v</mi><mi>t</mi><mo>=</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir, en este suceso: <math display=\"block\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>c</mi><mi>T</mi></mrow><mrow><mi>c</mi><mo>−</mo><mi>v</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><mi>v</mi><mi>T</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac><mi>.</mi></mrow></math> Los intervalos de tiempo y de espacio entre las detecciones de los dos máximos <math display=\"block\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>T</mi><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>T</mi><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac><mi>v</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "son en el sistema de la fuente y, por la transformación (3.41) de Lorentz, el periodo medido por el observador es <math display=\"block\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><msubsup><mi>t</mi><mn>2</mn><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>t</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac><mi>T</mi><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac></msqrt><mi>T</mi></mrow></math>. En consecuencia, en el sistema de la fuente la frecuencia de la onda es <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>, y la frecuencia <math display=\"inline\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>T</mi><mo>′</mo></msup></mrow></math> medida en el sistema del detector, que se mueve con velocidad <math display=\"inline\"><mi>v</mi></math> en la dirección de la onda, es esta:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac></msqrt><mi>ν</mi><mo>=</mo><msqrt><mfrac><mrow><mi>c</mi><mo>−</mo><mi>v</mi></mrow><mrow><mi>c</mi><mo>+</mo><mi>v</mi></mrow></mfrac></msqrt><mi>ν</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando la velocidad relativa es pequeña, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math>, del resultado (9.214) se recupera (9.206), <math display=\"block\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ν</mi><mo>,</mo></mrow></math> pues eso es lo que se obtiene en (9.213) si no se usa la transformación de Lorentz; pero en 1938 H. E. Ives y G. R. Stilwell comprobaron por primera vez en el laboratorio que con velocidades relativistas hay que usar (9.214)."
    },
    {
     "mota": "testua",
     "html": "Cuando la fuente y el observador se alejan entre sí, en el resultado (9.214) tenemos <math display=\"inline\"><mrow><mi>β</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y, por tanto, <math display=\"inline\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>&lt;</mo><mi>ν</mi></mrow></math>: a este fenómeno se le llama <strong>desplazamiento hacia el rojo</strong>. Cuando el observador y la fuente se acercan, <math display=\"inline\"><mrow><mi>β</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y tenemos <strong>desplazamiento hacia el azul</strong>: <math display=\"inline\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>&gt;</mo><mi>ν</mi></mrow></math>. (Recuérdese lo visto en el apartado 3.11.1.)"
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, el efecto Doppler se usa para calcular con radar la velocidad de aviones y automóviles."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.32</strong> Reflexión y refracción."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Reflexión y refracción",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando una onda llega a la superficie de separación entre dos medios distintos, se divide en dos ondas que se propagan en los dos medios: la que se propaga en el medio de la onda inicial es la <strong>onda reflejada</strong> y la que se mueve en el otro medio es la <strong>onda refractada</strong>. Consideremos el caso de la figura 9.33. En el medio superior, una onda plana de vector de onda <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>e</mi></msub></math>, que se llama <strong>onda incidente</strong>, al llegar a la superficie de separación entre los medios se divide en dos: la <strong>onda reflejada</strong> de vector de onda <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>i</mi></msub></math>, que se mueve en el medio inicial, y la <strong>onda refractada</strong> de vector de onda <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>r</mi></msub></math>, que se propaga en el medio inferior."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Leyes de la reflexión y de la refracción"
    },
    {
     "mota": "testua",
     "html": "Estudiemos la reflexión y la refracción de una onda electromagnética plana armónica. Los <strong>rayos</strong>, perpendiculares a las superficies de fase constante (es decir, a las superficies de onda), son paralelos a los vectores de onda que dan la dirección de propagación, y los ángulos <math display=\"inline\"><msub><mi>θ</mi><mi>e</mi></msub></math>, <math display=\"inline\"><msub><mi>θ</mi><mi>i</mi></msub></math> y <math display=\"inline\"><msub><mi>θ</mi><mi>r</mi></msub></math> que forman con la perpendicular a la superficie de separación entre los medios se llaman <strong>ángulo de incidencia</strong>, <strong>de reflexión</strong> y <strong>de refracción</strong>, respectivamente (véase la figura 9.33)."
    },
    {
     "mota": "irudia",
     "oina": "Reflexión y refracción de frentes de onda y de rayos.",
     "src": "../media/irudiak/fefda3ad80e66be3.svg",
     "zabalera": 376
    },
    {
     "mota": "testua",
     "html": "Las expresiones de las ondas serán <math display=\"block\"><mrow><msub><mi>u</mi><mi>e</mi></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>e</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi>ω</mi><mi>e</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mi>i</mi></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>i</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi>ω</mi><mi>i</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mi>r</mi></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>r</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi>ω</mi><mi>r</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>. La magnitud <math display=\"inline\"><mi>u</mi></math> (presión, desplazamiento, etc.) será continua en la superficie, es decir, debe tener el mismo valor a ambos lados de la superficie. Teniendo en cuenta que en el medio superior tenemos dos ondas, en todos los puntos de la superficie debe cumplirse <math display=\"block\"><mrow><msub><mi>u</mi><mi>e</mi></msub><mo>+</mo><msub><mi>u</mi><mi>i</mi></msub><mo>=</mo><msub><mi>u</mi><mi>r</mi></msub></mrow></math> en todo instante; pero, como las exponenciales distintas son linealmente independientes, para que eso ocurra las fases serán iguales en todos los puntos de la superficie en todo instante: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>e</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi>ω</mi><mi>e</mi></msub><mi>t</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>i</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi>ω</mi><mi>i</mi></msub><mi>t</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>r</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msub><mi>ω</mi><mi>r</mi></msub><mi>t</mi><mi>.</mi></mrow></math> Para que esto sea posible en todo instante, las frecuencias serán iguales,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>e</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>i</mi></msub><mo>=</mo><msub><mi>ω</mi><mi>r</mi></msub><mo>≡</mo><mi>ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Las frecuencias de las ondas incidente, reflejada y refractada son iguales.</em>"
    },
    {
     "mota": "testua",
     "html": "Además, por los resultados (9.220) y (9.221), tenemos: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>e</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>i</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>r</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Geometría de la reflexión y de la refracción.",
     "src": "../media/irudiak/472b1b29d5980225.svg",
     "zabalera": 431
    },
    {
     "mota": "testua",
     "html": "Elijamos un triedro cartesiano de modo que la superficie de separación entre los medios sea el plano <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi><mi>Y</mi></mrow></math>: la dirección normal es <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math>. Si orientamos el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math> de modo que la onda incidente esté en el plano <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math>, las componentes del vector de posición del punto <math display=\"inline\"><mi>P</mi></math> de la superficie y de los vectores de onda serán estas: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>x</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>y</mi><mi mathvariant=\"bold-italic\">𝒋</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>e</mi></msub><mo>=</mo><msub><mi>k</mi><mrow><mi>e</mi><mi>y</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>e</mi><mi>z</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>i</mi></msub><mo>=</mo><msub><mi>k</mi><mrow><mi>i</mi><mi>x</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>i</mi><mi>y</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>i</mi><mi>z</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>r</mi></msub><mo>=</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>x</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>y</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>z</mi></mrow></msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>.</mi></mrow></math> Las condiciones (9.222) se escriben, pues, así: <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mi>e</mi><mi>y</mi></mrow></msub><mi>y</mi><mo>=</mo><msub><mi>k</mi><mrow><mi>i</mi><mi>x</mi></mrow></msub><mi>x</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>i</mi><mi>y</mi></mrow></msub><mi>y</mi><mo>=</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>x</mi></mrow></msub><mi>x</mi><mo>+</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>y</mi></mrow></msub><mi>y</mi><mi>.</mi></mrow></math> Y como estas deben cumplirse para todo <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>, <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mi>i</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mi>e</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>k</mi><mrow><mi>i</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>k</mi><mrow><mi>r</mi><mi>y</mi></mrow></msub><mi>.</mi></mrow></math> Por el resultado (9.228), las ondas reflejada y refractada también están en el plano de incidencia <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi><mi>Z</mi></mrow></math>: <em>el rayo incidente, el reflejado y el refractado están en el mismo plano, perpendicular a la superficie</em>. Por otra parte, usando (9.221) y la figura 9.34, si la velocidad de la onda en el medio superior (inferior) es <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> (<math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>), tenemos <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mi>e</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>k</mi><mi>e</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><mfrac><mi>ω</mi><msub><mi>v</mi><mn>1</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mi>i</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>k</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><mfrac><mi>ω</mi><msub><mi>v</mi><mn>1</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>k</mi><mrow><mi>r</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>k</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mo>=</mo><mfrac><mi>ω</mi><msub><mi>v</mi><mn>2</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub></mrow></math> y, por (9.229),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>ω</mi><msub><mi>v</mi><mn>1</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><mfrac><mi>ω</mi><msub><mi>v</mi><mn>1</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mfrac><mi>ω</mi><msub><mi>v</mi><mn>1</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><mfrac><mi>ω</mi><msub><mi>v</mi><mn>2</mn></msub></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.35</strong> Reflexión especular y reflexión difusa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Según (9.233), <em>los ángulos de incidencia y de reflexión son iguales</em>. Por ejemplo, la figura 9.35 muestra un haz estrecho de rayos de luz que, tras producirse en la fuente de luz <math display=\"inline\"><mi>P</mi></math>, se reflejan en una superficie lisa. Después de reflejarse, se propagan como si vinieran del punto <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> situado al otro lado de la superficie, y en el ojo no se distinguen de los de una fuente de luz que pusiéramos en el punto <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> tras quitar la superficie. Se dice que el punto <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math> es la <strong>imagen</strong> de <math display=\"inline\"><mi>P</mi></math> y el fenómeno se llama <strong>reflexión especular</strong>. En cambio, si la superficie es rugosa, en el ojo parece que los rayos vienen de fuentes distintas y no se forma una imagen nítida: es la <strong>reflexión difusa</strong>, y ocurre, por ejemplo, en una hoja de papel."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, si el <strong>índice de refracción</strong> de 2 respecto de 1 se define como <math display=\"block\"><mrow><msub><mi>n</mi><mn>21</mn></msub><mo>=</mo><mfrac><msub><mi>v</mi><mn>1</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mfrac></mrow></math>, el resultado (9.234) es la <strong>ley de Snell</strong>: <em>el cociente de los senos de los ángulos de incidencia y de refracción es igual a una constante que depende de los dos medios</em>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><msub><mi>n</mi><mn>21</mn></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Además, ha quedado patente el significado físico de dicha constante: el cociente de las velocidades de la onda en los dos medios."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.36</strong> Refracción de la luz."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Refracción de la luz"
    },
    {
     "mota": "testua",
     "html": "En el caso de las ondas electromagnéticas, tenemos una referencia natural para definir los índices de refracción absolutos: el vacío. Así, como se dijo en el apartado 9.12.3, si en un medio la luz se propaga con velocidad <math display=\"inline\"><mi>v</mi></math>, el índice de refracción absoluto del medio, es decir, el índice de refracción respecto del vacío, es este: <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mi>c</mi><mi>v</mi></mfrac><mi>.</mi></mrow></math> Si los índices de refracción absolutos de dos medios son <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>n</mi><mn>2</mn></msub></math>, el índice de refracción relativo es su cociente: <math display=\"block\"><mrow><msub><mi>n</mi><mn>21</mn></msub><mo>=</mo><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub></mfrac></mrow></math> y la ley de Snell aparece de forma más simétrica:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La velocidad de fase y el índice de refracción suelen depender de la frecuencia y, en consecuencia, en un prisma, por ejemplo, los distintos colores de la luz visible se desvían de modo distinto y se ve el espectro. Es el mismo fenómeno que origina los arcoíris (véase [22])."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.37</strong> Espectro visible producido por un prisma y arcoíris doble."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La velocidad de grupo se escribe así, usando el índice de refracción y la frecuencia: <math display=\"block\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mi>v</mi><mo>+</mo><mi>k</mi><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mi>v</mi><mo>+</mo><mi>k</mi><msub><mi>v</mi><mi>t</mi></msub><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>ω</mi></mrow></mfrac><mo>=</mo><mfrac><mi>c</mi><mi>n</mi></mfrac><mo>−</mo><mfrac><mrow><mi>ω</mi><mi>n</mi></mrow><mi>c</mi></mfrac><msub><mi>v</mi><mi>t</mi></msub><mfrac><mi>c</mi><msup><mi>n</mi><mn>2</mn></msup></mfrac><mfrac><mrow><mi>d</mi><mi>n</mi></mrow><mrow><mi>d</mi><mi>ω</mi></mrow></mfrac><mo>=</mo><mfrac><mi>c</mi><mrow><mi>n</mi><mo>+</mo><mi>ω</mi><mfrac><mrow><mi>d</mi><mi>n</mi></mrow><mrow><mi>d</mi><mi>ω</mi></mrow></mfrac></mrow></mfrac><mi>.</mi></mrow></math> Es evidente que cuando <math display=\"inline\"><mrow><mi>d</mi><mi>n</mi><mi>/</mi><mi>d</mi><mi>ω</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, es decir, si la dispersión es <strong>normal</strong>, <math display=\"inline\"><msub><mi>v</mi><mi>t</mi></msub></math> la velocidad de grupo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>c</mi><mi>/</mi><mi>n</mi></mrow></math> es menor que la velocidad de fase. En algunos experimentos se han obtenido velocidades de grupo de la luz muy pequeñas. Por otra parte, cuando la dispersión es <strong>anómala</strong>, es decir, <math display=\"inline\"><mrow><mi>d</mi><mi>n</mi><mi>/</mi><mi>d</mi><mi>ω</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, la velocidad de grupo puede ser mayor que la velocidad de fase. Es más, puede ser mayor que <math display=\"inline\"><mi>c</mi></math> o negativa y, de hecho, en experimentos se han obtenido velocidades de grupo de este tipo. Aunque todavía hay discusiones, parece (gracias a los trabajos de Sommerfeld, Brillouin y otros) que no puede usarse una velocidad de grupo <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>&gt;</mo><mi>c</mi></mrow></math> para transportar información o energía a una velocidad mayor que <math display=\"inline\"><mi>c</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Espejismos.",
     "src": "../media/irudiak/8421a78848195158.svg",
     "zabalera": 341
    },
    {
     "mota": "testua",
     "html": "Si el índice de refracción cambia de modo continuo, la dirección de los rayos también puede cambiar de modo continuo. Ese es el origen de los espejismos, como demostró Gaspard Monge en la expedición dirigida por Napoleón en Egipto. En el suelo el índice de refracción del aire caliente y ligero es algo menor y los rayos son curvos. En consecuencia, se ven dos imágenes de los objetos lejanos, y puede pensarse que la segunda es un reflejo en agua intermedia. Por la misma razón, en los días calurosos a veces parece que el camino está mojado."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reflexión interna total"
    },
    {
     "mota": "testua",
     "html": "Cuando el índice de refracción del segundo medio es menor (por ejemplo, al pasar la luz del agua al aire), el ángulo de refracción es mayor que el de incidencia y, cuando este último es igual al valor <math display=\"block\"><mrow><mi>η</mi><mo>≡</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mn>21</mn></msub></mrow></math> llamado <strong>ángulo crítico</strong>, el ángulo de refracción es <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, es decir, el rayo refractado es tangente a la superficie de separación entre los medios. Por tanto, cuando <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>≥</mo><mi>η</mi></mrow></math> tenemos <strong>reflexión interna total</strong> y el rayo no entra en el segundo medio (en realidad, por la continuidad de la componente tangencial del campo eléctrico, hay una onda tangente a la superficie, pero se atenúa de modo exponencial al aumentar la profundidad en el segundo medio; se llama onda superficial)."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.39</strong> A la derecha se produce reflexión interna total."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Gracias a este fenómeno se transporta la luz en las fibras ópticas, tan importantes en telecomunicaciones: si la curvatura de la fibra no es muy grande y el rayo de luz es paralelo al eje de la fibra delgada, incidirá en la pared en dirección casi tangente, es decir, con un ángulo mayor que el crítico, y se producirá reflexión total sin pérdida de energía. Kepler descubrió este fenómeno en 1611 y en el siglo XIX Colladon y Tyndall demostraron cómo puede usarse para conducir luz por un chorro de agua. Este fenómeno está bajo el brillo de los diamantes, como consecuencia de su alto índice de refracción."
    },
    {
     "mota": "irudia",
     "oina": "Reflexión total y fibra óptica.",
     "src": "../media/irudiak/74a4024666b0916e.svg",
     "zabalera": 382
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coeficientes de reflexión y de transmisión"
    },
    {
     "mota": "testua",
     "html": "Debido a la continuidad de las fases (9.220), la condición (9.219) se reduce a la continuidad de las amplitudes: <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><mi>.</mi></mrow></math> Es evidente que conocer la amplitud de la onda incidente no basta para calcular con esta ecuación las de las otras dos ondas; necesitamos otra condición de contorno."
    },
    {
     "mota": "irudia",
     "oina": "Ondas transversales en dos cuerdas distintas unidas.",
     "src": "../media/irudiak/33dc2b6cedc0d04d.svg",
     "zabalera": 362
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el sistema de la figura 9.41. Dos cuerdas distintas se han unido en un punto y puesto bajo tensión <math display=\"inline\"><mi>T</mi></math>. El sistema de referencia se elige de modo que el punto de unión esté en la abscisa <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. Teniendo en cuenta hacia dónde van, las ondas transversales incidente, reflejada y refractada se expresan así: <math display=\"block\"><mrow><msub><mi>u</mi><mi>e</mi></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mi>i</mi></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mi>r</mi></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> Como se propagan en el mismo medio, las ondas incidente y reflejada tienen el mismo número de onda (y vectores de onda opuestos: <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><msub><mi>k</mi><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>e</mi></msub></mrow></math>), pero el de la refractada es distinto. Es evidente que en el punto de unión <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> el desplazamiento es <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>: aquí recuperamos la condición (9.242). Como las oscilaciones son pequeñas, la componente vertical de la tensión (9.95)–(9.96) es esta en la cuerda izquierda: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>T</mi><mi>y</mi></msub><mo>=</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>≈</mo><mi>T</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>T</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>e</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>i</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Del mismo modo, en la cuerda derecha tenemos: <math display=\"block\"><mrow><msub><mi>T</mi><mi>y</mi></msub><mo>≈</mo><mi>T</mi><mfrac><mrow><mi>∂</mi><msub><mi>u</mi><mi>r</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>T</mi><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> Pero las dos tensiones son iguales en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>T</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> simplificando términos, tenemos <math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub></mrow></math> y, recordando (9.242), <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>−</mo><msub><mi>k</mi><mn>2</mn></msub></mrow><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mn>1</mn></msub></mrow><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>+</mo><msub><mi>k</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mi>.</mi></mrow></math> Como en una cuerda la velocidad de fase es <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mi>ω</mi><mi>/</mi><msub><mi>k</mi><mi>i</mi></msub></mrow></math>, el resultado se escribe también <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub></mrow></math> o, recordando (9.105), de este modo: <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mrow><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt><mo>−</mo><msqrt><msub><mi>μ</mi><mn>2</mn></msub></msqrt></mrow><mrow><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt><mo>+</mo><msqrt><msub><mi>μ</mi><mn>2</mn></msub></msqrt></mrow></mfrac><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt></mrow><mrow><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt><mo>+</mo><msqrt><msub><mi>μ</mi><mn>2</mn></msub></msqrt></mrow></mfrac><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub><mi>.</mi></mrow></math> Ahora, si el <strong>coeficiente de reflexión</strong> (de amplitud) es el cociente de las amplitudes con signo de la onda reflejada y la incidente, <math display=\"block\"><mrow><mi>R</mi><mo>≡</mo><mfrac><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub></mfrac><mo>,</mo></mrow></math> y el <strong>coeficiente de transmisión</strong> (de amplitud) el cociente de las amplitudes de la onda refractada y la incidente, <math display=\"block\"><mrow><mi>T</mi><mo>≡</mo><mfrac><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub></mfrac><mo>,</mo></mrow></math> tenemos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt><mo>−</mo><msqrt><msub><mi>μ</mi><mn>2</mn></msub></msqrt></mrow><mrow><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt><mo>+</mo><msqrt><msub><mi>μ</mi><mn>2</mn></msub></msqrt></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt></mrow><mrow><msqrt><msub><mi>μ</mi><mn>1</mn></msub></msqrt><mo>+</mo><msqrt><msub><mi>μ</mi><mn>2</mn></msub></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>T</mi></math> es siempre positivo, las ondas refractada e incidente están siempre en fase en el punto de unión <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; pero <math display=\"inline\"><mi>R</mi></math> puede ser positivo o negativo, y las ondas reflejada e incidente pueden estar en fase"
    },
    {
     "mota": "irudia",
     "oina": "Pulsos, cuando la cuerda izquierda (derecha) es más pesada.",
     "src": "../media/irudiak/794a0a34dbc2c760.svg",
     "zabalera": 490
    },
    {
     "mota": "testua",
     "html": "(cuando ambas se propagan en la cuerda pesada) o en oposición de fase (si están en la cuerda ligera). En la figura 9.42 se muestran estos dos casos, usando un pulso que es una superposición de ondas armónicas."
    },
    {
     "mota": "testua",
     "html": "Si la masa de la cuerda derecha es muy grande, es decir, en el límite <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>2</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>, no hay onda refractada (<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>r</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>) y toda la onda se refleja en oposición de fase (<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>u</mi><mrow><mi>e</mi><mn>0</mn></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>). Se obtiene lo mismo, claro, si se usa desde el principio que el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es fijo."
    },
    {
     "mota": "testua",
     "html": "Obsérvese que la condición (9.246) se escribe de este modo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>1</mn><mo>+</mo><mi>R</mi><mo>=</mo><mi>T</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Los coeficientes de reflexión y de transmisión de la energía se estudiarán en el problema 9.77.)"
    },
    {
     "mota": "testua",
     "html": "Coeficientes de reflexión y transmisión de las ondas electromagnéticas"
    },
    {
     "mota": "testua",
     "html": "Para estudiar la reflexión y la refracción de las ondas electromagnéticas hay que usar las condiciones de continuidad de las componentes de los campos que hemos mencionado en la nota de la página 487. Aquí nos limitaremos a presentar los resultados. El campo eléctrico (y el magnético) está en el plano perpendicular al vector de onda y allí es, en general, la superposición de dos polarizaciones, es decir, tiene dos componentes, como se muestra en la figura 9.43: <math display=\"inline\"><msub><mi>E</mi><mo>⟂</mo></msub></math> es paralela a la superficie de separación entre los dos medios y perpendicular al plano de incidencia, y <math display=\"inline\"><msub><mi>E</mi><mo>∥</mo></msub></math> perpendicular a la anterior. Supongamos, como se mencionó en la página 478, que se cumple la condición <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>, que a menudo se cumple en los dieléctricos. En ese caso, los coeficientes de reflexión y de transmisión en dichas direcciones son los siguientes (véase, por ejemplo, [18]): <math display=\"block\"><mrow><msub><mi>R</mi><mo>∥</mo></msub><mo>≡</mo><mfrac><msub><mi>E</mi><mrow><mi>i</mi><mo>∥</mo></mrow></msub><msub><mi>E</mi><mrow><mi>e</mi><mo>∥</mo></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>R</mi><mo>⟂</mo></msub><mo>≡</mo><mfrac><msub><mi>E</mi><mrow><mi>i</mi><mo>⟂</mo></mrow></msub><msub><mi>E</mi><mrow><mi>e</mi><mo>⟂</mo></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mo>∥</mo></msub><mo>≡</mo><mfrac><msub><mi>E</mi><mrow><mi>r</mi><mo>∥</mo></mrow></msub><msub><mi>E</mi><mrow><mi>e</mi><mo>∥</mo></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mo>⟂</mo></msub><mo>≡</mo><mfrac><msub><mi>E</mi><mrow><mi>r</mi><mo>⟂</mo></mrow></msub><msub><mi>E</mi><mrow><mi>e</mi><mo>⟂</mo></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Componentes del campo eléctrico.",
     "src": "../media/irudiak/dd15f39ac9ad6993.svg",
     "zabalera": 256
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la ley de Snell para demostrar que los resultados (9.257)–(9.260) equivalen a las <strong>ecuaciones de Fresnel</strong> que aparecen a continuación: <math display=\"block\"><mrow><msub><mi>R</mi><mo>∥</mo></msub><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>−</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>+</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>R</mi><mo>⟂</mo></msub><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>−</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>+</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mo>∥</mo></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>e</mi></msub><mo>+</mo><msub><mi>θ</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>e</mi></msub><mo>−</mo><msub><mi>θ</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mo>⟂</mo></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>+</mo><msub><mi>θ</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estudiemos qué ocurre (y cuándo) si <math display=\"inline\"><mrow><msub><mi>R</mi><mo>∥</mo></msub><mo>=</mo><mn>0</mn></mrow></math>. En ese caso, sea cual sea la polarización de la onda incidente, la onda reflejada está polarizada linealmente, precisamente en la dirección paralela a la superficie de separación entre los medios y perpendicular al plano de incidencia, pues <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mi>i</mi><mo>∥</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Según el resultado (9.257), para que eso ocurra debe cumplirse <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mo>=</mo><msub><mi>n</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow></math>; pero, multiplicando eso por la ley de Snell (9.239), obtenemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub></mrow></math>, es decir, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><msub><mi>θ</mi><mi>r</mi></msub></mrow></math>. Esto es, como la ley de Snell, junto con (9.257), prohíbe la solución <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>r</mi></msub></mrow></math>, la polarización total de la onda reflejada se obtiene cuando <math display=\"inline\"><mrow><mn>2</mn><msub><mi>θ</mi><mi>r</mi></msub><mo>=</mo><mi>π</mi><mo>−</mo><mn>2</mn><msub><mi>θ</mi><mi>e</mi></msub></mrow></math>, es decir, cuando <math display=\"block\"><mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>+</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>: <em>cuando los rayos reflejado y refractado son perpendiculares, el rayo reflejado está polarizado linealmente y el campo eléctrico es paralelo a la superficie de separación entre los medios y perpendicular al plano de incidencia</em>. Además, por la condición (9.265) tenemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>r</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>e</mi></msub></mrow></math> y, usando la ley de Snell (9.236), la polarización total se produce cuando el ángulo de incidencia es igual al <strong>ángulo de polarización</strong> definido por la siguiente ecuación: <math display=\"block\"><mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>n</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A este resultado se le llama <strong>ley de Brewster</strong>. Como consecuencia de este fenómeno, la luz reflejada en una superficie horizontal (en la superficie de un río, en el hielo del suelo o en el asfalto de las carreteras) está parcialmente polarizada y las gafas de sol pueden ser más eficaces si se hacen con materiales polarizadores."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.44</strong> Polarización de la luz reflejada."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el problema 9.96 demostraremos que <math display=\"inline\"><msub><mi>R</mi><mo>⟂</mo></msub></math> no es nunca cero y, por tanto, que la onda reflejada no está polarizada en el plano de incidencia, si la onda incidente no lo estaba. Es evidente, además, que los dos coeficientes de transmisión tampoco son cero: en general, la onda refractada no está polarizada. Como los coeficientes de transmisión son positivos, la onda refractada y la incidente están en fase; pero los coeficientes de reflexión pueden ser positivos o negativos, y la onda reflejada puede estar en fase o en oposición de fase."
    },
    {
     "mota": "testua",
     "html": "Si la incidencia es normal, <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, tenemos <math display=\"block\"><mrow><msub><mi>R</mi><mo>∥</mo></msub><mo>=</mo><msub><mi>R</mi><mo>⟂</mo></msub><mo>=</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mo>∥</mo></msub><mo>=</mo><msub><mi>T</mi><mo>⟂</mo></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>n</mi><mn>1</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>. En la onda reflejada habrá un desfase de valor <math display=\"inline\"><mi>π</mi></math> cuando <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></math>, es decir, como en el caso del apartado 9.14.4, cuando la onda refractada se propaga más despacio que la incidente."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la figura 9.44 para demostrar que, con incidencia (casi) tangente, <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>e</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, en la onda reflejada el campo eléctrico va al revés: <math display=\"block\"><mrow><mi>−</mi><msub><mi>R</mi><mo>∥</mo></msub><mo>≈</mo><msub><mi>R</mi><mo>⟂</mo></msub><mo>≈</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por otra parte, cuando el ángulo de incidencia es igual o mayor que el crítico, solo tenemos onda reflejada (y onda superficial) y (9.257)–(9.260) no se aplican (véase, por ejemplo, [13])."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Interferencia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando dos ondas armónicas de la misma frecuencia se superponen en un punto, se produce interferencia. Supongamos que en el punto <math display=\"inline\"><mi>P</mi></math> las expresiones de las dos ondas son <math display=\"block\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Las amplitudes <math display=\"inline\"><msub><mi>A</mi><mi>i</mi></msub></math> y las fases <math display=\"inline\"><msub><mi>φ</mi><mi>i</mi></msub></math> dependerán en ese punto de las características y de las historias de las ondas. Por ejemplo, en el caso de dos ondas esféricas de la misma longitud de onda procedentes de las fuentes puntuales <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math> que emiten en fase, tenemos <math display=\"block\"><mrow><msub><mi>u</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msub><mi>r</mi><mi>i</mi></msub></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>r</mi><mi>i</mi></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> las amplitudes <math display=\"inline\"><msub><mi>A</mi><mi>i</mi></msub></math> y las fases <math display=\"inline\"><msub><mi>φ</mi><mi>i</mi></msub></math> siguientes: <math display=\"block\"><mrow><msub><mi>A</mi><mi>i</mi></msub><mo>=</mo><mfrac><msub><mi>u</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><msub><mi>r</mi><mi>i</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mi>i</mi></msub><mo>=</mo><mi>k</mi><msub><mi>r</mi><mi>i</mi></msub><mo>−</mo><msub><mi>φ</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Interferencia de ondas esféricas procedentes de dos fuentes puntuales.",
     "src": "../media/irudiak/5c20b8e6ba3b9421.svg",
     "zabalera": 216
    },
    {
     "mota": "testua",
     "html": "La onda total en ese punto es armónica y la amplitud y la fase se calculan fácilmente usando fasores o identidades trigonométricas: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msqrt><mrow><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>A</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub></mrow><mi>A</mi></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub></mrow><mi>A</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba los resultados (9.274)–(9.277)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es evidente que la amplitud de la onda total depende del desfase <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub></mrow></math> de las dos ondas. Cuando las ondas llegan en fase,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>n</mi><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se obtiene la amplitud máxima, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>, y se dice que la interferencia es <strong>constructiva</strong>. Cuando están en oposición de fase,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "la amplitud es mínima, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>, y la interferencia <strong>destructiva</strong>. Por ejemplo, en el caso de la figura 9.45, como el desfase es <math display=\"block\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, los mínimos se producen cuando se cumple la condición <math display=\"block\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Esos puntos se llaman <strong>nodos</strong> y el lugar geométrico que forman, <strong>superficies nodales</strong>. Los máximos, en cambio, se obtienen con la condición <math display=\"block\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y a los puntos se les llama <strong>vientres</strong> o <strong>antinodos</strong>. Los antinodos (nodos) son, pues, los puntos en los que la diferencia de los caminos recorridos por las ondas es un múltiplo entero (semientero) de la longitud de onda."
    },
    {
     "mota": "testua",
     "html": "Usando el resultado (9.275) y que la intensidad es proporcional al cuadrado de la amplitud, la intensidad de la interferencia general de las ondas producidas por dos fuentes en un punto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msqrt><mrow><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es. Si las fuentes son dos bombillas, las fases y el argumento del coseno cambiarán al azar; como el valor medio del coseno es cero, la intensidad media total será la suma de las intensidades de las ondas en todos los puntos, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, y no se verán franjas de interferencia. También con rayos procedentes de una sola fuente se puede perder la coherencia si los caminos recorridos son muy distintos. En efecto, la onda monocromática es una idealización, que representa una onda de longitud infinita. Cuando un electrón de un átomo pasa a un nivel de menor energía, se emite una onda electromagnética en un intervalo de tiempo muy corto (de <math display=\"inline\"><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>9</mn></mrow></msup></mrow></math> s, es decir). Como consecuencia de esto (además, está el efecto Doppler producido por el movimiento térmico y el efecto de los choques entre átomos), el paquete de ondas será de longitud finita y, según el resultado (9.31), la superposición de ondas monocromáticas de un intervalo de frecuencias. Por tanto, solo en un intervalo de <strong>longitud de coherencia</strong> finita podemos considerar que es una onda armónica de fase definida. Si la diferencia de los caminos recorridos por los dos rayos es mayor que la longitud de coherencia, el desfase entre ambos cambiará deprisa y al azar y no se verá interferencia. En la luz natural blanca la longitud de coherencia es del orden de una micra, en el caso de una lámpara de descarga normal de unos milímetros, y en los láseres de más de cien metros."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Experimento de las dos rendijas"
    },
    {
     "mota": "testua",
     "html": "Como se ha dicho, para que las superficies (anti)nodales sean estables, las fuentes deben ser <strong>coherentes</strong>, es decir, el desfase entre ambas no debe cambiar con el tiempo. Para obtener fuentes coherentes se recurre a menudo a rayos procedentes de una sola fuente por caminos distintos (por reflexión, por ejemplo, como veremos en el problema 9.106). En los interferómetros, por ejemplo, se usan a menudo espejos semitransparentes para obtener rayos de luz coherentes."
    },
    {
     "mota": "irudia",
     "oina": "Experimento de las dos rendijas.",
     "src": "../media/irudiak/fbab41dbc18285db.svg",
     "zabalera": 595
    },
    {
     "mota": "testua",
     "html": "Otro método es el que estudiaremos ahora: hacer dos rendijas (o agujeros) en una pantalla tangente a los frentes de onda planos procedentes de la fuente lejana <math display=\"inline\"><mi>I</mi></math>, para ver las franjas de interferencia que se producen en otra pantalla (en el caso de la luz). Se entiende con bastante facilidad que la perturbación producida por una onda sonora plana en una rendija (o en un agujero) se propagará al otro lado y desde allí como ondas (casi) cilíndricas (o esféricas): esta es la propiedad fundamental de las ondas, que no tienen las partículas. Que con otras ondas (incluida la luz) ocurre lo mismo lo dice el <strong>principio de Huygens</strong>, que Kirchhoff puso sobre bases sólidas en la ecuación de ondas: <em>si el frente de onda llega a un punto, este último puede considerarse una segunda fuente de ondas</em>."
    },
    {
     "mota": "testua",
     "html": "En el caso del experimento de la figura 9.46, si las rendijas <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mn>2</mn></msub></math> están muy próximas, las amplitudes de las dos ondas serán iguales, <math display=\"inline\"><mrow><msub><mi>u</mi><mn>10</mn></msub><mo>=</mo><msub><mi>u</mi><mn>20</mn></msub></mrow></math>, y como <math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mi>d</mi></math>, si en el resultado (9.275) hacemos <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>r</mi><mn>2</mn></msub><mo>≈</mo><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>, la amplitud de la onda en la pantalla es <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msqrt><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>, por (9.278). En la figura 9.46 se ve que el desfase entre las ondas es <math display=\"block\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mi>a</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>a</mi><mi>x</mi></mrow><mrow><mi>λ</mi><mi>d</mi></mrow></mfrac></mrow></math>. Recordando que la intensidad es proporcional al cuadrado de la amplitud, en torno al punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> la intensidad de la interferencia es <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mrow><mi>π</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mrow><mi>π</mi><mi>a</mi><mi>x</mi></mrow><mrow><mi>λ</mi><mi>d</mi></mrow></mfrac></mrow></math>, si la de cada onda (en la pantalla) es <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa el binomio de Newton para comprobar la aproximación de la ecuación (9.283)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La intensidad no es, pues, igual en todos los puntos, aunque el valor medio, como cabía esperar, sea <math display=\"inline\"><mrow><mn>2</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math>. Los máximos (las franjas o puntos más brillantes, por tanto)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>n</mi><mfrac><mrow><mi>λ</mi><mi>d</mi></mrow><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se producen en los puntos y se dice que son los máximos de orden cero, primero, segundo, ... Los mínimos aparecen en los puntos siguientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>λ</mi><mi>d</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La distancia entre las franjas de interferencia es, pues, <math display=\"inline\"><mrow><mi>λ</mi><mi>d</mi><mi>/</mi><mi>a</mi></mrow></math>: aumenta al disminuir la distancia entre las rendijas y al alejar la pantalla."
    },
    {
     "mota": "irudia",
     "oina": "Intensidad y franjas de interferencia del experimento de las dos rendijas.",
     "src": "../media/irudiak/161a6dceb2dd1669.svg",
     "zabalera": 294
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La distancia entre las dos rendijas es de 1 mm. Si se usa luz de sodio de 589 nm de longitud de onda, ¿cuál es la distancia entre las franjas en una pantalla situada a 3 m?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Thomas Young realizó un experimento así en 1801 para demostrar la naturaleza ondulatoria de la luz. Antes, por la enorme influencia de la óptica de Newton, se creía que estaba formada por partículas. Más tarde, como hemos visto en el tema 3, desde la hipótesis del cuanto de luz que propuso Einstein para explicar (entre otras cosas) el efecto fotoeléctrico hasta la prueba experimental de Compton, la naturaleza corpuscular de la luz quedó establecida sobre bases sólidas. Hoy sabemos que los conceptos basados en la experiencia macroscópica no pueden trasladarse directamente a la física cuántica: la luz es partícula (fotón) y onda al mismo tiempo, pues ambas naturalezas se ven en los experimentos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Interferencia de fuentes sincrónicas"
    },
    {
     "mota": "testua",
     "html": "En el experimento de las dos rendijas teníamos dos fuentes sincrónicas. Estudiemos qué ocurre cuando hay más fuentes sincrónicas. Por ejemplo, en el caso de la figura 9.48, las <math display=\"inline\"><mi>N</mi></math> fuentes son iguales y están en fase, a distancias iguales. Consideraremos la interferencia que se produce a una distancia muy grande, para tener en cuenta los rayos en la dirección dada por el ángulo <math display=\"inline\"><mi>θ</mi></math>."
    },
    {
     "mota": "testua",
     "html": "El desfase entre dos rayos consecutivos es el de la expresión (9.283): <math display=\"block\"><mrow><mi>δ</mi><mo>≡</mo><msub><mi>φ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>φ</mi><mi>j</mi></msub><mo>=</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>r</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Por tanto, si usamos la primera onda para escribir todas las demás <math display=\"block\"><mrow><msub><mi>u</mi><mi>j</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mi>j</mi></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>δ</mi></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><mi>N</mi></math> fuentes sincrónicas iguales.",
     "src": "../media/irudiak/89a51d1d51a107f2.svg",
     "zabalera": 191
    },
    {
     "mota": "testua",
     "html": "como la onda total es esta: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msub><mi>u</mi><mi>j</mi></msub><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>δ</mi></mrow></msup><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>N</mi><mi>δ</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mfrac><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mi>δ</mi></mrow></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><mi>δ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>δ</mi></mrow></mfrac><mi>.</mi></mrow></math> Así pues, olvidando las fases, la amplitud total es <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><mi>δ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>δ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>A</mi><mn>1</mn></msub></mrow></math> y la intensidad"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><mi>δ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>δ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mi>π</mi><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>a</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Valores de <math display=\"inline\"><mrow><mi>I</mi><mi>/</mi><msub><mi>I</mi><mn>1</mn></msub></mrow></math> cuando <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math> y 10, en el intervalo <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>π</mi><mi>λ</mi><mo>≤</mo><mi>w</mi><mo>≡</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≤</mo><mn>2</mn><mi>π</mi><mi>λ</mi></mrow></math>.",
     "src": "../media/irudiak/4e15966a6d26258b.svg",
     "zabalera": 395
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Comprueba el resultado (9.289). (b) Usa fasores para demostrar (9.289) directamente."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estudiemos cómo cambia la intensidad de la onda total con el ángulo de observación <math display=\"inline\"><mi>θ</mi></math>. Los mínimos se dan cuando <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, cuando el numerador de la expresión (9.291) es cero sin que lo sea a la vez el denominador. Por tanto, los mínimos se producen cuando se cumplen <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>π</mi><mi>/</mi><mi>N</mi><mo>≠</mo><mn>2</mn><mi>n</mi><mi>π</mi></mrow></math> y <math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mi>m</mi><mi>N</mi></mfrac><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>≠</mo><mi>n</mi><mi>N</mi><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>m</mi><mo>,</mo><mi>n</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Entre dos mínimos consecutivos habrá un máximo, pero (sobre todo cuando <math display=\"inline\"><mi>N</mi></math> es grande) <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>2</mn><mi>n</mi><mi>π</mi></mrow></math> o"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "son los más altos los de las direcciones definidas por las condiciones, de valor <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mi>N</mi><mn>2</mn></msup><msub><mi>I</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe la última afirmación."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como vemos en la figura 9.49, cuando <math display=\"inline\"><mi>N</mi></math> es grande la intensidad es despreciable salvo en pequeños entornos de los valores de la ecuación (9.293). Por tanto, para emitir en un intervalo de direcciones muy estrecho pueden ponerse varias antenas en paralelo. Como ejemplo, la figura 9.50 muestra la intensidad que emiten cuatro antenas sincrónicas si la distancia entre ellas es la mitad de la longitud de onda."
    },
    {
     "mota": "irudia",
     "oina": "Intensidad emitida por cuatro antenas sincrónicas, cuando la distancia entre ellas es <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>.",
     "src": "../media/irudiak/d135a863b93e2c2e.svg",
     "zabalera": 290
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué son las rectas dibujadas en la figura 9.50 en las direcciones <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>/</mi><mn>6</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Además, si los puntos <math display=\"inline\"><msub><mi>I</mi><mi>j</mi></msub></math> de la figura 9.48, en lugar de fuentes, son detectores para ondas que vienen de una distancia muy grande, al superponer las señales recibidas en todos (usando instrumentación electrónica, por ejemplo) se obtendrá la misma interferencia, pues el estudio de este caso es completamente igual (solo hay que cambiar en la figura el sentido de los rayos). Este efecto se usa para estudiar con un conjunto de radiotelescopios las señales que vienen de una dirección precisa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Interferencia en películas delgadas"
    },
    {
     "mota": "testua",
     "html": "El origen de los desfases de los apartados anteriores ha sido la diferencia de los caminos recorridos por las ondas; pero hay otro origen que se da a menudo: el desfase de valor <math display=\"inline\"><mi>π</mi></math> que a veces se introduce en las ondas reflejadas. Estudiaremos un caso sencillo que se ve a menudo para tener esto en cuenta. En las manchas de aceite que hay en el agua (o en el camino) o en las burbujas de jabón se ven fácilmente colores de interferencia; veamos cuál es el fenómeno de interferencia en esos ejemplos. Obsérvese que la película es delgada, para que las ondas reflejadas en ambas caras puedan ser coherentes (recuérdese lo dicho sobre la longitud de coherencia en la página 498)."
    },
    {
     "mota": "testua",
     "html": "Consideremos las dos superficies planas paralelas de la figura 9.51, que separan tres medios. Una parte de la onda refractada que atraviesa la cara superior, tras reflejarse en la superficie inferior, se ha refractado a través de la cara superior. En consecuencia (si se desprecia la onda débil que queda tras producirse tres reflexiones), se verán dos ondas reflejadas."
    },
    {
     "mota": "irudia",
     "oina": "Reflexión en una película delgada.",
     "src": "../media/irudiak/6d8cc083fb9eb8c3.svg",
     "zabalera": 258
    },
    {
     "mota": "testua",
     "html": "El desfase entre las ondas reflejadas puede tener ahora dos orígenes distintos. Para empezar, como las dos ondas han recorrido caminos distintos, en el caso particular sencillo de incidencia normal tenemos el siguiente desfase: <math display=\"block\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mn>2</mn><mi>d</mi><mo>=</mo><mn>2</mn><msub><mi>n</mi><mn>21</mn></msub><msub><mi>k</mi><mn>1</mn></msub><mi>d</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><msub><mi>n</mi><mn>21</mn></msub><mi>d</mi></mrow><msub><mi>λ</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mfrac></mrow></math> Por otra parte, si <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><msub><mi>n</mi><mn>3</mn></msub></math>, al reflejarse en la superficie superior aparecerá un desfase de valor <math display=\"inline\"><mi>π</mi></math>, pero no en la inferior, y si <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><msub><mi>n</mi><mn>3</mn></msub></math>, solo habrá ese desfase adicional al reflejarse en la inferior. Por tanto, si el índice de refracción de la película central es el mayor o el menor, el desfase es <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><msub><mi>n</mi><mn>21</mn></msub><mi>d</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>±</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la interferencia constructiva se producirá cuando se cumpla la condición <math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>d</mi></mrow><msub><mi>λ</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>n</mi><mn>21</mn></msub><mi>d</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>m</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la destructiva cuando tengamos esto: <math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>d</mi></mrow><msub><mi>λ</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>n</mi><mn>21</mn></msub><mi>d</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>m</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Cuando <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>n</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math>, en las dos reflexiones se producirá el desfase de valor <math display=\"inline\"><mi>π</mi></math>; y si <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>n</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math>, no habrá desfase en las reflexiones. Por tanto, si el índice de refracción de la película es intermedio, en total no habrá desfase producido por las reflexiones y las condiciones de interferencia destructiva y constructiva serán (9.296) y (9.297), respectivamente."
    },
    {
     "mota": "testua",
     "html": "Las interferencias destructivas así obtenidas se usan para evitar reflexiones en las lentes mediante una capa de material adecuado (véase el problema 9.108). Además, como las condiciones de interferencia dependen del grosor de la película, pueden usarse para medir la homogeneidad del grosor. En los casos de la figura 9.52 el grosor no es constante y, como la longitud de onda aparece en las condiciones de interferencia (explícitamente y mediante el índice de refracción), la interferencia constructiva se producirá en colores distintos en puntos distintos. En el caso de una capa la proporción de luz reflejada suele ser pequeña, pero el fenómeno se refuerza con más capas: así ocurre, por ejemplo, en el nácar, en algunos escarabajos, en las alas de algunas mariposas y en la banda metalizada de los billetes de polímero."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.52</strong> Interferencia en películas delgadas."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Ondas estacionarias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos una onda armónica transversal <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> que se propaga de izquierda a derecha en una cuerda tensa con los extremos fijos en los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>, y la reflejada <math display=\"inline\"><mrow><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> que vuelve. La onda total que hay en el estado estacionario como consecuencia de la interferencia entre las dos ondas será, pues, <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>. Como el extremo izquierdo está fijo, allí tenemos la condición de contorno <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>0</mn></msub><mo>,</mo></mrow></math> y, como se dijo en el apartado 9.14.4, la onda se refleja toda y están en oposición de fase: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><mi>i</mi><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Pero esta no es una onda viajera, sino estacionaria: en cada punto tenemos una oscilación armónica de amplitud <math display=\"inline\"><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>u</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>k</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>, pero los nodos (puntos de amplitud nula) y los antinodos (de amplitud máxima), por ejemplo, no se mueven, están siempre en el mismo punto: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (nodoak): </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>π</mi></mrow><mi>k</mi></mfrac><mo>=</mo><mi>m</mi><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (antinodoak): </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi></mrow><mrow><mn>2</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>λ</mi><mn>4</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, como el otro extremo también está quieto, tenemos una segunda condición de contorno: <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>i</mi><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><msub><mi>k</mi><mi>n</mi></msub><mo>≡</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Por tanto, en el estado estacionario no pueden aparecer todas las longitudes de onda; solo pueden existir las que cumplen la condición <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>n</mi></msub><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>k</mi><mi>n</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>L</mi></mrow><mi>n</mi></mfrac><mo>=</mo><mn>2</mn><mi>L</mi><mi>/</mi><mi>n</mi><mo>=</mo><mn>2</mn><mi>L</mi><mo>,</mo><mi>L</mi><mo>,</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>L</mi><mo>,</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Las frecuencias correspondientes"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><msub><mi>ν</mi><mi>n</mi></msub><mo>≡</mo><mfrac><mi>v</mi><msub><mi>λ</mi><mi>n</mi></msub></mfrac><mo>=</mo><mi>n</mi><mfrac><mi>v</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "son, todas ellas armónicos de la frecuencia fundamental <math display=\"inline\"><mrow><msub><mi>ν</mi><mn>1</mn></msub><mo>≡</mo><mi>v</mi><mi>/</mi><mn>2</mn><mi>L</mi></mrow></math>. La condición (9.304) equivale a exigir que el extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> sea también un nodo. Así, los nodos de cada <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math> están en las posiciones siguientes: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>m</mi><mi>n</mi></mfrac><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Por tanto, dejando aparte los extremos, <em>el modo <math display=\"inline\"><mi>n</mi></math> tiene <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> nodos</em>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modos normales y separación de variables"
    },
    {
     "mota": "testua",
     "html": "Recuérdese que obtuvimos el mismo resultado al estudiar el límite continuo de la cuerda discreta en el apartado 7.9, y que en la figura 7.34 aparecen las amplitudes de los primeros armónicos. En dicho apartado encontramos las ondas estacionarias al calcular los modos normales de las oscilaciones. En efecto, en la ecuación de ondas <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "—o <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>— los modos normales de la cuerda continua se obtenían al probar soluciones periódicas. Con ese intento las variables se separan y nos queda la ecuación de Helmholtz para la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>f</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Como de costumbre, aquí hemos hecho <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>v</mi></mrow></math>.) Esta es la ecuación del oscilador armónico y, por tanto, sabemos cuál es su solución general. Además, hay que usar las condiciones de contorno adecuadas. En el caso de la cuerda, las condiciones <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> se reducen a <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y las soluciones, como hemos visto también en el apartado anterior, son estas: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Además,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>L</mi></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mi>n</mi><mfrac><mi>v</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como acabamos de ver, las ondas estacionarias pueden entenderse desde dos puntos de vista complementarios: como consecuencia de la interferencia constructiva entre la onda incidente y la reflejada, y como modos normales del sistema, al mismo tiempo. El método de separación de variables que hemos usado con la segunda interpretación suele ser el más rápido al resolver la mayoría de los problemas."
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora las ondas que se propagan en el gas contenido en una columna estrecha (por ejemplo, en un tubo de órgano). Si los dos extremos están cerrados, las condiciones de contorno serán las del caso de la cuerda y los resultados completamente iguales. Pero ¿qué ocurre si, aunque el extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> esté cerrado, el del punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> está abierto? Ahora, en este extremo derecho el desplazamiento no tiene por qué ser cero; en su lugar, la condición que debe cumplirse es que ahí (en realidad, a una pequeña distancia de ahí: véase el problema 9.159) la presión sea igual a la atmosférica: <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>. En el extremo abierto, en lugar de un nodo de desplazamiento, tenemos un nodo de presión. Si sustituimos esta condición en la ecuación (9.77), vemos que la segunda condición de contorno es esta: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Usando las condiciones de contorno <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> en la solución <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi></mrow></math> de la ecuación de Helmholtz, se obtiene <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (A la constante opcional <math display=\"inline\"><mi>B</mi></math> la hemos llamado aquí <math display=\"inline\"><mi>A</mi></math>.) Por tanto, tenemos <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>L</mi></mrow><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y solo aparecen los armónicos impares de la frecuencia fundamental:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>v</mi><mrow><mn>4</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Amplitudes de los primeros modos normales de desplazamiento en una columna de gas cuando un extremo (ambos) está abierto (están abiertos).",
     "src": "../media/irudiak/51043b406ce6bb05.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "Ahora, si los dos extremos están abiertos, las condiciones de contorno son <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y, en consecuencia, debe cumplirse <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math> y la solución es esta: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aparecen todos los armónicos de la frecuencia fundamental, que es el doble que en el caso anterior:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mi>n</mi><mfrac><mi>v</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>L</mi></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Desde el punto de vista de la interferencia, las ondas estacionarias de este problema son la superposición de ondas de las frecuencias (9.319) que se reflejan una y otra vez en los extremos abiertos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas estacionarias y resonancia"
    },
    {
     "mota": "testua",
     "html": "Estudiemos de nuevo la cuerda de longitud <math display=\"inline\"><mi>L</mi></math> sometida a tensión. Como antes, el extremo derecho está fijo, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; pero el izquierdo se mueve, mediante un motor, según la ley <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>. Para calcular la solución estacionaria que esto produce, probaremos en la ecuación de ondas (9.307) una solución <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> de la misma frecuencia. Como se ve, recuperamos la ecuación de Helmholtz (9.309), pero ahora el número de onda <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>/</mi><mi>v</mi></mrow></math> es único y las condiciones de contorno que debe cumplir la solución <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi></mrow></math> son las siguientes: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi><mi>.</mi></mrow></math> En consecuencia, la solución estacionaria es esta: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>.</mi></mrow></math> Como se ve, esta solución es infinita cuando <math display=\"inline\"><mrow><mi>k</mi><mi>L</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>; pero esta es la condición que obtuvimos en las soluciones (9.310). Vemos de nuevo que se produce resonancia cuando la frecuencia de la acción externa es la de un modo normal (es decir, de una onda estacionaria): <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>n</mi><mi>π</mi><mi>v</mi><mi>/</mi><mi>L</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como en el apartado 7.6.2, en la resonancia la solución es infinita, pues hemos despreciado el amortiguamiento."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas estacionarias en dos dimensiones"
    },
    {
     "mota": "testua",
     "html": "Consideremos la ecuación de ondas en dos dimensiones: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Para separar las variables, si probamos una solución del tipo <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, nos queda <math display=\"block\"><mrow><mfrac><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></math> y, si escribimos la constante de separación <math display=\"block\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mfrac><mo>=</mo><msubsup><mi>k</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>k</mi><mi>y</mi><mn>2</mn></msubsup></mrow></math> de modo más simétrico, <math display=\"inline\"><mi>f</mi></math> las ecuaciones que deben cumplir las funciones <math display=\"inline\"><mi>g</mi></math> y <math display=\"block\"><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msubsup><mi>k</mi><mi>x</mi><mn>2</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> son <math display=\"block\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msubsup><mi>k</mi><mi>y</mi><mn>2</mn></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Las soluciones son, de nuevo, las del oscilador armónico y hay que completarlas con las condiciones de contorno adecuadas. Por ejemplo, en el ejemplo del apartado 9.11 se estudiaban las ondas transversales que se propagaban en una membrana tensa. Si la membrana es un rectángulo <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>y</mi><mo>≤</mo><mi>b</mi></mrow></math> y el borde está fijo (como en el caso de un tambor), las condiciones de contorno son <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>a</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Amplitudes de las ondas estacionarias en una membrana cuadrada en los casos <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "../media/irudiak/8398e480a192e8be.svg",
     "zabalera": 464
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué no hemos elegido, en lugar de (9.327), <math display=\"inline\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><msubsup><mi>k</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>k</mi><mi>y</mi><mn>2</mn></msubsup><mo>≥</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>k</mi><mi>x</mi><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>k</mi><mi>y</mi><mn>2</mn></msubsup><mo>≥</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, se cumplirá <math display=\"block\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mo>=</mo><msub><mi>n</mi><mi>x</mi></msub><mfrac><mi>π</mi><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>y</mi></msub><mo>=</mo><msub><mi>n</mi><mi>y</mi></msub><mfrac><mi>π</mi><mi>b</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y las ondas estacionarias son <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>n</mi><mi>x</mi></msub><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>n</mi><mi>y</mi></msub><mi>π</mi><mi>y</mi></mrow><mi>b</mi></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, los vectores de onda <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>n</mi><mi>x</mi></msub><mi>a</mi></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mfrac><msub><mi>n</mi><mi>y</mi></msub><mi>b</mi></mfrac><mi mathvariant=\"bold-italic\">𝒋</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>, los números de onda <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>π</mi><msqrt><mrow><mfrac><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>b</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>,</mo></mrow></math>, las pulsaciones <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math> y las frecuencias"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>v</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac><msqrt><mrow><mfrac><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>b</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Dónde están los nodos de la membrana?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.55</strong> <strong>Figuras de Chladni</strong>: la arena se acumula en las líneas nodales cuando se mantienen fijos algunos puntos adecuados y la placa metálica se hace vibrar con un arco de violín."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas estacionarias con simetría cilíndrica"
    },
    {
     "mota": "testua",
     "html": "Si la membrana, en lugar de rectangular, es circular, para imponer las condiciones de contorno serán más convenientes las coordenadas polares que las cartesianas."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que en coordenadas polares la ecuación de ondas (9.324) se escribe de este modo: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Comprueba que si, para separar las variables, se prueba la solución <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, queda <math display=\"block\"><mrow><mfrac><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>r</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>m</mi></mrow></math>, con la definición habitual: <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><mi>ω</mi><mi>/</mi><mi>v</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las soluciones de la ecuación <math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>+</mo><mi>m</mi><mi>g</mi><mo>=</mo><mn>0</mn></mrow></math> que debe cumplir la parte angular son del tipo <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>e</mi><mrow><mi>λ</mi><mi>φ</mi></mrow></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>a</mi><mi>φ</mi><mo>+</mo><mi>b</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>e</mi><mrow><mi>i</mi><mi>λ</mi><mi>φ</mi></mrow></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math>. Pero solo son periódicas respecto del ángulo <math display=\"inline\"><mi>φ</mi></math> cuando el último <math display=\"inline\"><mi>λ</mi></math> es entero y <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi></mrow></math> y, por la simetría del problema, es evidente que la solución física debe ser así."
    },
    {
     "mota": "testua",
     "html": "En consecuencia, con cada valor de <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> elegimos <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>φ</mi></mrow></msup></mrow></math> y la ecuación radial que hay que resolver es <math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>r</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, pero si aquí hacemos <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>k</mi><mi>r</mi></mrow></math>, nos queda <math display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> La solución general de la ecuación de Bessel es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (véase [46]). La última solución, <math display=\"inline\"><mrow><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se va a infinito en el punto <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> y no podemos admitirla en este cálculo. Nos quedamos solo con la otra y, teniendo en cuenta la propiedad <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las ondas estacionarias son de la siguiente forma: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>φ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Pero todavía hay que estudiar la condición de contorno. Si el radio de la membrana es <math display=\"inline\"><mi>R</mi></math> y se tiene en cuenta que el perímetro está fijo, deben cumplirse las condiciones <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>R</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>J</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. En consecuencia, si los ceros positivos de la función <math display=\"inline\"><msub><mi>J</mi><mi>n</mi></msub></math> son <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>&gt;</mo><mn>0</mn></mrow></math>, el número de onda <math display=\"inline\"><mi>k</mi></math> no es cualquiera, sino de la forma <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mi>/</mi><mi>R</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Amplitudes de las ondas estacionarias en una membrana circular en los casos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "../media/irudiak/31796c70a87a0c51.svg",
     "zabalera": 529
    },
    {
     "mota": "testua",
     "html": "La solución general será una combinación lineal de los modos normales siguientes: <math display=\"block\"><mrow><mi>A</mi><msub><mi>J</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>φ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Dónde están los nodos de la membrana en los modos normales de la figura 9.56?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas estacionarias en tres dimensiones"
    },
    {
     "mota": "testua",
     "html": "Supongamos que dentro de un paralelepípedo hueco de lados <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mi>c</mi></math> se genera una onda de vector de onda <math display=\"inline\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>+</mo><msub><mi>k</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. Al reflejarse en las paredes quedarán ocho ondas, con vectores de onda <math display=\"inline\"><mrow><mi>±</mi><msub><mi>k</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>±</mo><msub><mi>k</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi><mo>±</mo><msub><mi>k</mi><mi>z</mi></msub><mi mathvariant=\"bold-italic\">𝒌</mi></mrow></math>. Si no hay pérdidas, podemos hacer el estudio del apartado 9.16.3, probando <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> en la ecuación de ondas tridimensional (9.127) y, por el equivalente del resultado (9.334), en el estado estacionario solo pueden darse los valores siguientes: <math display=\"block\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mo>=</mo><msub><mi>n</mi><mi>x</mi></msub><mfrac><mi>π</mi><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>y</mi></msub><mo>=</mo><msub><mi>n</mi><mi>y</mi></msub><mfrac><mi>π</mi><mi>b</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>z</mi></msub><mo>=</mo><msub><mi>n</mi><mi>z</mi></msub><mfrac><mi>π</mi><mi>c</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba el resultado (9.348)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los números de onda y frecuencias admisibles son, pues, estos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mi>π</mi><msqrt><mrow><mfrac><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>b</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>k</mi><mi>v</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac><msqrt><mrow><mfrac><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>b</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la geometría de la cavidad es esférica, cilíndrica o de otro tipo (y las ondas son electromagnéticas), el estudio exacto es más difícil, pero el resultado cualitativo no: puede quedar un conjunto discreto de frecuencias en el estado estacionario. Las cavidades resonantes se construyen basándose en este resultado. Las paredes suelen ser muy buenos reflectores y, así, pueden usarse como almacén de ondas de frecuencias concretas."
    },
    {
     "mota": "irudia",
     "oina": "Espacio de coordenadas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "../media/irudiak/662029a3818afea6.svg",
     "zabalera": 242
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, calculemos cuántos modos de frecuencia <math display=\"inline\"><mi>ν</mi></math> o menor hay en una cavidad cúbica de lado <math display=\"inline\"><mi>a</mi></math>. Como la cavidad es cúbica, hay que hacer <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>b</mi><mo>=</mo><mi>c</mi></mrow></math> en el resultado (9.350) y, por tanto, la condición que deben cumplir los modos que queremos contar es <math display=\"block\"><mrow><mfrac><mi>v</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><msqrt><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup></mrow></msqrt><mo>≤</mo><mi>ν</mi></mrow></math> o <math display=\"block\"><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo>≤</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>a</mi><mi>ν</mi></mrow><mi>v</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora la condición (9.352) en un espacio abstracto de tres dimensiones. Es evidente que la correspondencia entre los modos admisibles y los puntos de ese espacio de coordenadas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <em>enteras</em> es biunívoca. Pero dichos puntos son los vértices de la red de lado unidad: tenemos un cubo unidad por cada modo. Si <math display=\"inline\"><mi>ν</mi></math> es grande, los valores que cumplen la condición (9.352) son los que corresponden a los cubos unidad que están en el primer octante de la esfera de radio <math display=\"inline\"><mrow><mi>R</mi><mo>≡</mo><mn>2</mn><mi>a</mi><mi>ν</mi><mi>/</mi><mi>v</mi></mrow></math>, y su número será igual al volumen del octante: <math display=\"block\"><mrow><msub><mi>N</mi><mi>ν</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>a</mi><mi>ν</mi></mrow><mi>v</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><msup><mi>a</mi><mn>3</mn></msup><msup><mi>ν</mi><mn>3</mn></msup></mrow><mrow><mn>3</mn><msup><mi>v</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el volumen de la cavidad es <math display=\"inline\"><msup><mi>a</mi><mn>3</mn></msup></math>, el número de modos por unidad de volumen es este: <math display=\"block\"><mrow><msub><mi>n</mi><mi>ν</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><msup><mi>ν</mi><mn>3</mn></msup></mrow><mrow><mn>3</mn><msup><mi>v</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Ahora, el número de modos que hay en el intervalo infinitesimal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> es el siguiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><msub><mi>n</mi><mi>ν</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi>n</mi><mi>ν</mi></msub></mrow><mrow><mi>d</mi><mi>ν</mi></mrow></mfrac><mi>d</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>v</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>ν</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sin decirlo, en el cálculo anterior se ha usado que las ondas son longitudinales. Si son transversales, tenemos dos polarizaciones independientes por cada vector de onda admisible: los resultados anteriores deben duplicarse."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Guías de ondas"
    },
    {
     "mota": "testua",
     "html": "En los apartados anteriores hemos considerado ondas estacionarias en una región limitada; pero en algunos casos la región en la que se propagan las ondas es limitada en algunas direcciones e ilimitada en otras. Las guías de ondas son cavidades largas con los extremos abiertos. Como ejemplo, consideremos la onda armónica que se propaga entre los dos planos paralelos infinitos de la figura 9.58."
    },
    {
     "mota": "irudia",
     "oina": "Dos planos infinitos paralelos.",
     "src": "../media/irudiak/aaca15cec8565238.svg",
     "zabalera": 396
    },
    {
     "mota": "testua",
     "html": "Si al principio el vector de onda es <math display=\"inline\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math>, el de la onda reflejada será <math display=\"inline\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mi mathvariant=\"bold-italic\">𝒊</mi><mo>−</mo><msub><mi>k</mi><mi>y</mi></msub><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math>. Por tanto, en el estado estacionario tenemos dos ondas: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><mi>y</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><msub><mi>k</mi><mi>y</mi></msub><mi>y</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> Como en el plano <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> tenemos la condición de contorno <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>0</mn></msub><mo>+</mo><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>u</mi><mn>0</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>0</mn></msub></mrow></math> (por tanto, hay reflexión total), nos queda <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>i</mi><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>k</mi><mi>y</mi></msub><mi>y</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> y, con la otra condición de contorno: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>i</mi><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>k</mi><mi>y</mi></msub><mi>a</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>y</mi></msub><mo>=</mo><mi>n</mi><mfrac><mi>π</mi><mi>a</mi></mfrac><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La onda es, pues, de la forma"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>ω</mi><msub><mi>k</mi><mi>x</mi></msub></mfrac><mo>=</mo><mfrac><mi>k</mi><msub><mi>k</mi><mi>x</mi></msub></mfrac><mi>v</mi><mo>&gt;</mo><mi>v</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se mueve con velocidad de fase, si su velocidad en el vacío es <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac></mrow></math>. El número de onda operador será, pues, <math display=\"block\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mo>=</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>k</mi><mi>y</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><msup><mi>a</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mrow></math> y la frecuencia"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mi>v</mi><msqrt><mrow><msubsup><mi>k</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><msup><mi>a</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa el método de separación de variables para recuperar los resultados anteriores."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Primeros modos normales.",
     "src": "../media/irudiak/f748b65358fc2c35.svg",
     "zabalera": 377
    },
    {
     "mota": "testua",
     "html": "La figura 9.59 muestra los desplazamientos de los primeros modos normales en distintos puntos en un instante. En cada caso se han usado escalas horizontales (o <math display=\"inline\"><mi>v</mi></math>) distintas para mostrar una longitud de onda entera. También se indican, mediante rectas horizontales discontinuas, las posiciones de los planos nodales (es decir, de los lugares geométricos de los puntos en los que la onda es siempre nula)."
    },
    {
     "mota": "testua",
     "html": "Derivando el resultado (9.364), se obtiene la velocidad de grupo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><msub><mi>k</mi><mi>x</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>k</mi><mi>x</mi></msub><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>ω</mi></mfrac><mo>=</mo><mfrac><msub><mi>k</mi><mi>x</mi></msub><mi>k</mi></mfrac><mi>v</mi><mo>&lt;</mo><mi>v</mi><mo>&lt;</mo><msub><mi>v</mi><mi>f</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, la guía de ondas es un medio dispersivo (de índice de refracción <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msub><mi>k</mi><mi>x</mi></msub><mi>/</mi><mi>k</mi><mo>&lt;</mo><mn>1</mn></mrow></math> en el caso de la luz), y se cumple esto: <math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Además, hay una frecuencia mínima para cada modo, pues, por (9.364), debe cumplirse <math display=\"block\"><mrow><mi>ω</mi><mo>≥</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>v</mi></mrow><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>ν</mi><mo>≥</mo><mfrac><mrow><mi>n</mi><mi>v</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></mrow></math>: las guías de ondas son filtros de frecuencia."
    },
    {
     "mota": "testua",
     "html": "Las guías de ondas son muy corrientes. Las ondas de radio llegan muy lejos porque la superficie de la Tierra y la ionosfera, que está a unos 80 km de altura, se comportan como guía de ondas, como explicaron en 1902 Oliver Heaviside y Arthur Edwin Kennelly. Otras guías de ondas conocidas son estas: las fibras ópticas, el oído interno y las tuberías de la calefacción central."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.60</strong> Fibras ópticas."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Difracción",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para Huygens (y en opinión de Hooke y de Grimaldi) la luz, como el sonido, era una onda; pero Newton creía que la luz estaba formada por partículas, porque el sonido y la luz son muy distintos al producir sombras y al rodear obstáculos: oímos fácilmente lo que no vemos a través de un agujero. Más tarde, los experimentos de Young (y, sobre todo, los que hizo Fresnel sobre la difracción, que estudiaremos a partir de aquí) demostraron la naturaleza ondulatoria de la luz. Parece que Leonardo da Vinci fue el primero en darse cuenta de la difracción de la luz, pero el primer estudio detallado es de Francesco Maria Grimaldi y se publicó en 1665, tras la muerte del autor."
    },
    {
     "mota": "testua",
     "html": "Al estudiar la interferencia hemos admitido que de la rendija estrecha sobre la que incide una onda sale una única onda que se propaga en todas las direcciones; pero cuando la anchura de la rendija (o del objeto que está en el camino de la onda) es comparable a la longitud de onda, esa aproximación no es buena y habrá que estudiar la interferencia de las ondas producidas en distintos puntos de la rendija, es decir, la difracción. Esto fue lo que propuso Fresnel: las longitudes de onda del sonido y de la luz son muy distintas (del orden de un metro y de una micra, respectivamente); por tanto, en muchas condiciones los agujeros que son pequeños frente a la longitud de onda del sonido son muy grandes al compararlos con las longitudes de onda de la luz. En este último caso, según el principio de Huygens, podemos considerar que en el agujero hay muchas fuentes de luz y, como consecuencia de la interferencia destructiva entre las ondas producidas por ellas, aparece la sombra. En este apartado estudiaremos, pues, la difracción, que es la interferencia de ondas producidas por fuentes continuas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Difracción de Fraunhofer en una rendija larga"
    },
    {
     "mota": "testua",
     "html": "Consideremos una rendija rectangular estrecha. En este primer estudio supondremos que es muy larga, para poder despreciar el efecto de los extremos, y también que una onda plana normal incide sobre la rendija y que la difracción se observa al otro lado a una distancia muy grande, para poder considerar paralelos los rayos difractados (puede usarse una lente para reunir los rayos paralelos en un punto de una pantalla). Consideraremos que la rendija está formada por elementos rectangulares de anchura infinitesimal <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math>. Cada uno será una fuente de ondas y, en primera aproximación, cuando el ángulo de observación <math display=\"inline\"><mi>θ</mi></math> es pequeño podemos admitir que todos tienen la misma intensidad."
    },
    {
     "mota": "testua",
     "html": "Si la observación es normal, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, todas las ondas están en fase y todas tendrán la misma amplitud <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mi>/</mi><mi>b</mi><mi>d</mi><mi>x</mi></mrow></math>, si la amplitud de la onda total es <math display=\"inline\"><msub><mi>A</mi><mn>0</mn></msub></math> y la anchura de la rendija <math display=\"inline\"><mi>b</mi></math>. En caso contrario, to-"
    },
    {
     "mota": "irudia",
     "oina": "Difracción en una rendija estrecha larga.",
     "src": "../media/irudiak/44cc4b27caaa7c4a.svg",
     "zabalera": 372
    },
    {
     "mota": "testua",
     "html": "mando como referencia el rayo que pasa por el borde <math display=\"inline\"><mi>R</mi></math>, la diferencia de fase del que pasa por el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y la expresión de esa onda es la siguiente, si la fase del rayo que ha pasado por <math display=\"inline\"><mi>R</mi></math> es <math display=\"inline\"><msub><mi>φ</mi><mi>R</mi></msub></math>: <math display=\"block\"><mrow><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>0</mn></msub><mi>d</mi><mi>x</mi></mrow><mi>b</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mi>R</mi></msub><mo>+</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> La onda total es, pues, esta: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>u</mi><mo>=</mo><msubsup><mo>∫</mo><mi>R</mi><mi>S</mi></msubsup><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><msub><mi>A</mi><mn>0</mn></msub><mi>b</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mi>R</mi></msub></mrow></msup><msubsup><mo>∫</mo><mn>0</mn><mi>b</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>0</mn></msub><mi>λ</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>i</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mi>R</mi></msub></mrow></msup><msubsup><mrow><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>0</mn><mi>b</mi></msubsup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>0</mn></msub><mi>λ</mi></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>φ</mi><mi>R</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msup><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>φ</mi><mi>R</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msup><mi>.</mi></mtd></mtr></mtable></math> Dejando aparte la fase, en la dirección <math display=\"inline\"><mi>θ</mi></math> la amplitud <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> es <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> y la intensidad, que es proporcional al cuadrado de la amplitud,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> la intensidad de la observación normal."
    },
    {
     "mota": "testua",
     "html": "La interferencia es destructiva cuando el seno es cero sin que lo sea el argumento, que aparece también en el denominador:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(Por supuesto, como <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn></mrow></math>, el número de valores <math display=\"inline\"><mi>n</mi></math> es finito.)"
    },
    {
     "mota": "testua",
     "html": "Comparando (9.285) y (9.373), vemos que los mínimos de difracción de una sola rendija de anchura <math display=\"inline\"><mi>b</mi></math> están en las posiciones de los máximos de dos rendijas estrechas que distan <math display=\"inline\"><mi>b</mi></math>. En la dirección normal <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> todos los rayos están en fase y se obtiene la intensidad máxima <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub></mrow></math>. Hay otros máximos, pero su anchura es la mitad de la del máximo central y son mucho menores, como se muestra en la figura 9.62. Así pues, casi toda la intensidad se concentra en el máximo central, entre los dos mínimos centrales:"
    },
    {
     "mota": "irudia",
     "oina": "Difracción de Fraunhofer en una rendija estrecha.",
     "src": "../media/irudiak/fd2ff59627d5000e.svg",
     "zabalera": 303
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"block\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>λ</mi><mi>b</mi></mfrac><mo>&lt;</mo><mi>θ</mi><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mfrac><mi>λ</mi><mi>b</mi></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>b</mi></mrow></math>, el máximo principal está en el intervalo estrecho <math display=\"block\"><mrow><mi>−</mi><mfrac><mi>λ</mi><mi>b</mi></mfrac><mo>&lt;</mo><mi>θ</mi><mo>&lt;</mo><mfrac><mi>λ</mi><mi>b</mi></mfrac></mrow></math>: casi toda la intensidad va por ahí y hay sombra en todas las demás direcciones. Por otro lado, cuando <math display=\"inline\"><mrow><mi>b</mi><mo>≲</mo><mi>λ</mi></mrow></math>, el máximo central es muy ancho y todas las direcciones que nos interesan en un experimento están en el máximo central: la intensidad es casi igual en todas. Esta ha sido la hipótesis que hemos hecho sin decirlo al estudiar la interferencia en el apartado 9.15 —y explícitamente arriba al calcular la amplitud emitida desde el intervalo de anchura <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math>— (siempre en el caso de que el ángulo de observación <math display=\"inline\"><mi>θ</mi></math> sea pequeño)."
    },
    {
     "mota": "irudia",
     "oina": "Resolución gráfica de la ecuación <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>α</mi></mrow></math>.",
     "src": "../media/irudiak/8401e150f29374d2.svg",
     "zabalera": 465
    },
    {
     "mota": "testua",
     "html": "Si en la intensidad (9.372) hacemos <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></math>, la posición de los máximos viene dada por la ecuación <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>α</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mi>α</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mi>α</mi></mrow></math>. Esta ecuación es trascendente, pero las soluciones aproximadas se obtienen fácilmente con la figura 9.63: los máximos se producen en torno a las asíntotas verticales <math display=\"inline\"><mrow><mi>±</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, sobre todo cuando <math display=\"inline\"><mi>m</mi></math> es grande. Y en el punto <math display=\"inline\"><mrow><msub><mi>α</mi><mi>m</mi></msub><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>α</mi><mi>m</mi></msub><mo>≈</mo><mn>1</mn></mrow></math> y, como se ha dicho, la intensidad de los máximos disminuye muy deprisa al aumentar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>: <math display=\"block\"><mrow><mi>I</mi><mo>≈</mo><mfrac><mrow><mn>4</mn><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> En la tabla A.12 se muestran las posiciones exactas y aproximadas de los primeros máximos de difracción, y allí puede verse que la aproximación (9.377) es muy buena."
    },
    {
     "mota": "testua",
     "html": "Para obtener ese mismo resultado aproximado puede usarse que los máximos están, más o menos, en el punto medio entre los mínimos contiguos: por la ecuación (9.373), pues, los <strong>máximos de difracción de orden</strong> <math display=\"inline\"><mi>m</mi></math> están aproximadamente en las direcciones siguientes: <math display=\"block\"><mrow><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>±</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (Por supuesto, el de orden 0, es decir, el central, está en la dirección <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "irudia",
     "oina": "Diagramas de difracción con una y con dos fuentes.",
     "src": "../media/irudiak/6362f89db88db50f.svg",
     "zabalera": 479
    },
    {
     "mota": "testua",
     "html": "Los diagramas de difracción de dos fuentes lejanas muy próximas estarán casi en el mismo lugar y el observador no los distinguirá con facilidad. Al aumentar la distancia angular entre ambas, los diagramas de difracción empezarán a separarse y los dos máximos se verán claramente (en el caso de la luz, con un microscopio) cuando el de un rayo esté sobre el mínimo del otro, es decir, cuando la distancia angular entre ambos (en el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>b</mi></mrow></math>)"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo>=</mo><mfrac><mi>λ</mi><mi>b</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "sea. Según este <strong>criterio de Rayleigh</strong>, el <strong>poder de resolución</strong> de la rendija es la distancia angular (9.379). Hay que subrayar que en la figura 9.64 no se ha conservado la escala y que en el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>b</mi></mrow></math> que estamos estudiando los ángulos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi></mrow></math> son muy pequeños."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Difracción de Fraunhofer en un orificio circular"
    },
    {
     "mota": "testua",
     "html": "Si en lugar de una rendija tenemos un orificio circular, la geometría es distinta (y más difícil), pero los resultados cualitativos son parecidos. Si el radio del orificio es <math display=\"inline\"><mi>R</mi></math>, la intensidad en la dirección del ángulo de observación <math display=\"inline\"><mi>θ</mi></math> se escribe <math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>2</mn><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>R</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>π</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math> y se muestra en la figura 9.65 (véase, por ejemplo, [13])."
    },
    {
     "mota": "irudia",
     "oina": "Intensidad (9.380).",
     "src": "../media/irudiak/34eb1ec638c7c4f7.svg",
     "zabalera": 406
    },
    {
     "mota": "testua",
     "html": "Como los primeros ceros positivos de la función de Bessel <math display=\"inline\"><msub><mi>J</mi><mn>1</mn></msub></math> (véanse la página 510 y la tabla A.11) son <math display=\"block\"><mrow><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mn>11</mn></msub><mo>≈</mo><mn>3.83</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>z</mi><mn>12</mn></msub><mo>≈</mo><mn>7.02</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>z</mi><mn>13</mn></msub><mo>≈</mo><mn>10.2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>z</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi></mrow></math>, las posiciones de los anillos oscuros vienen dadas por las condiciones <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><msub><mi>μ</mi><mi>n</mi></msub><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>μ</mi><mn>1</mn></msub><mo>≈</mo><mn>1.22</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>μ</mi><mn>2</mn></msub><mo>≈</mo><mn>2.23</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>μ</mi><mn>3</mn></msub><mo>≈</mo><mn>3.24</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>μ</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>z</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub><mi>π</mi></mfrac><mo>≈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En consecuencia, en el centro hay un disco luminoso llamado <strong>disco de Airy</strong>, rodeado de anillos oscuros y luminosos. En efecto, según (9.382), la anchura angular del disco de Airy es <math display=\"block\"><mrow><mi>−</mi><mn>1.22</mn><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>&lt;</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>&lt;</mo><mn>1.22</mn><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></mrow></math>. (Por supuesto, cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>R</mi></mrow></math>, podemos hacer <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math> en el resultado anterior.)"
    },
    {
     "mota": "testua",
     "html": "Si la onda incidente no es normal al orificio, los resultados cualitativos son los mismos: la mayor parte de la intensidad está dentro de un cono cuyo eje tiene la dirección de la onda incidente."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.66</strong> Difracción de Fraunhofer en un orificio circular, con una fuente y con dos."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el caso de ondas coherentes procedentes de dos orificios, el diagrama de interferencia nítido solo se verá cuando los dos discos de Airy se superpongan. Por otra parte, desde un único orificio las dos fuentes se distinguirán bien cuando el máximo del diagrama de difracción de una esté en el primer anillo oscuro de la otra (o más lejos). El poder de resolución del orificio, es decir, el menor valor que puede tener el ángulo entre dos direcciones de incidencia para distinguir sus diagramas de difracción, es el término de la derecha de la expresión (9.383). En consecuencia, en este caso el criterio de Rayleigh se escribe así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo>=</mo><mn>1.22</mn><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>≪</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como las lentes suelen ser orificios circulares, la imagen de un punto es un disco pequeño. A menudo el radio de la lente es mucho mayor que la longitud de onda y este efecto puede despreciarse. Para aumentar el poder de resolución pueden usarse lentes de mayor diámetro o luz de menor longitud de onda."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, cuando el diámetro de la pupila del ojo es de 5 mm, con luz de sodio de 589 nm tenemos <math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>1.44</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> rad. Como la distancia entre el cristalino y la retina es de unos <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>2.5</mn></mrow></math> cm, ese poder de resolución se alcanzará si la distancia entre los conos es <math display=\"inline\"><mrow><mi>d</mi><mo>≤</mo><mi>r</mi><mi>θ</mi><mo>≈</mo><mn>3.6</mn><mi>μ</mi></mrow></math>m. En efecto, en la zona central de la retina la distancia es de unos 1 <math display=\"inline\"><mi>μ</mi></math>m y en otros puntos está entre 3 y 5 <math display=\"inline\"><mi>μ</mi></math>m."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Difracción de Fraunhofer en dos rendijas largas iguales"
    },
    {
     "mota": "testua",
     "html": "Estudiemos de nuevo el experimento de las dos rendijas teniendo en cuenta la difracción. Supongamos que las dos rendijas son largas, paralelas y de anchura <math display=\"inline\"><mi>b</mi></math>, y que la distancia entre ellas es <math display=\"inline\"><mi>a</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Difracción de Fraunhofer en dos rendijas.",
     "src": "../media/irudiak/b7d9ff99a0ef6cf0.svg",
     "zabalera": 377
    },
    {
     "mota": "testua",
     "html": "Ahora hay que sumar todos los rayos que pasan por las dos rendijas. Si con los que vienen de una rendija se repite el cálculo del apartado 9.17.1, en ambos casos se obtendrá la amplitud <math display=\"block\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>; pero, como los caminos recorridos son distintos, entre los dos haces de rayos habrá una diferencia de fase <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>λ</mi></mfrac></mrow></math>. En consecuencia, usando la onda del primer haz, la del segundo se escribe de la forma <math display=\"inline\"><mrow><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup></mrow></math> y la onda total así: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>δ</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>u</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>δ</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Interferencia y difracción de dos rendijas.",
     "src": "../media/irudiak/47b8f09ed01c0d31.svg",
     "zabalera": 302
    },
    {
     "mota": "testua",
     "html": "La amplitud es, pues, <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi>δ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mi mathvariant=\"normal\">cos</mi><mfrac><mrow><mi>π</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> y la intensidad <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mrow><mi>π</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>λ</mi></mfrac><mi>.</mi></mrow></math> En este resultado, el último término es el del resultado (9.284) que obtuvimos en el caso de la interferencia, pero ahora aparece con la modulación de la difracción de una sola rendija, como se muestra en la figura 9.68. Desde el punto de vista actual, el estudio del apartado 9.15.1 solo puede aplicarse en torno al máximo central de la difracción (o cuando <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>λ</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Redes de difracción"
    },
    {
     "mota": "testua",
     "html": "Del mismo modo, si en el resultado (9.291) de las <math display=\"inline\"><mi>N</mi></math> rendijas paralelas iguales de la figura 9.48 tenemos en cuenta la anchura <math display=\"inline\"><mi>b</mi></math>, habrá que introducir la modulación de la difracción:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>π</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los máximos principales vendrán dados por la condición (9.293),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub><mo>=</mo><mi>m</mi><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "pero ahora la intensidad de todos ellos no será <math display=\"inline\"><mrow><msup><mi>N</mi><mn>2</mn></msup><msub><mi>I</mi><mn>1</mn></msub></mrow></math>, pues los modula la difracción. El valor <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> correspondiente a cada uno es el orden del máximo y los mínimos contiguos se producen en la dirección <math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≡</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>m</mi></msub><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub><mo>+</mo><mi>a</mi><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><mi>N</mi><mo>±</mo><mn>1</mn></mrow><mi>N</mi></mfrac><mi>λ</mi></mrow></math>. La pequeña distancia angular entre el máximo y los mínimos contiguos es, pues, esta: <math display=\"block\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo>=</mo><mi>±</mi><mfrac><mi>λ</mi><mi>N</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo>=</mo><mi>±</mi><mfrac><mi>λ</mi><mrow><mi>a</mi><mi>N</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Diagrama de interferencia en una red de difracción, en el caso <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>8</mn></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mi>/</mi><mi>b</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn></mrow></math>.",
     "src": "../media/irudiak/b714b85e26fdb5cd.svg",
     "zabalera": 268
    },
    {
     "mota": "testua",
     "html": "Para estudiar la luz visible (o el infrarrojo cercano o el ultravioleta), se graban miles de rectas paralelas por cada centímetro en una película transparente. Los espacios entre las rectas hacen de rendijas. Estas redes de difracción se valen de la transmisión de la luz, pero también puede usarse la reflexión si se graban rectas paralelas en una superficie metálica (por eso se ven espectros en los CD y los DVD)."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.70</strong> Difracción a través de una tela y de un CD."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como se ve en el resultado (9.391), los máximos principales de distintas longitudes de onda (salvo el de orden cero) se producen en direcciones distintas: la onda se dispersará en la red de difracción y aparecerán los espectros de orden primero, segundo, etc. A diferencia de lo que ocurre en un prisma, en cada orden la desviación de la luz de mayor longitud de onda es la mayor: el rojo se desvía más que el violeta. Tras construir Henry A. Rowland en 1882 redes de difracción de gran calidad, estas se suelen usar en los espectrómetros en lugar de los prismas. (Las redes de difracción también se usan en holografía.) La <strong>dispersión angular</strong> de la red es <math display=\"inline\"><mrow><mi>d</mi><msub><mi>θ</mi><mi>m</mi></msub><mi>/</mi><mi>d</mi><mi>λ</mi></mrow></math> y, derivando (9.391), <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>θ</mi><mi>m</mi></msub></mrow><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mo>=</mo><mfrac><mi>m</mi><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub></mrow></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>−</mo><msup><mi>λ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> La dispersión es mayor al aumentar el orden. En consecuencia, la diferencia entre las direcciones de los máximos de orden <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> de longitudes de onda <math display=\"inline\"><mi>λ</mi></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow></math> es <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>θ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≈</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub></mrow></mfrac></mrow></math>. Según el criterio de Rayleigh, la red podrá distinguir ambos si <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>θ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> es igual o mayor que la distancia entre el máximo y el mínimo contiguo —dada por la ecuación (9.393)—, es decir, cuando <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>θ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≥</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub></mrow></mfrac><mo>≥</mo><mfrac><mi>λ</mi><mrow><mi>a</mi><mi>N</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>m</mi></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≥</mo><mi mathvariant=\"normal\">Δ</mi><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mfrac><mi>λ</mi><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>N</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mrow></math> es, pues, la menor diferencia entre longitudes de onda que pueden distinguirse. Si el <strong>poder de resolución</strong> de la red de difracción se define como <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>λ</mi><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mrow></mfrac></mrow></math>, tenemos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>N</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dos longitudes de onda próximas se distinguirán con más facilidad cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> el orden de difracción o el número de franjas sean mayores."
    },
    {
     "mota": "irudia",
     "oina": "Difracción de Fresnel al ensanchar la rendija.",
     "src": "../media/irudiak/986861d5af7885bf.svg",
     "zabalera": 292
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Difracción de Fresnel"
    },
    {
     "mota": "testua",
     "html": "En la difracción de Fraunhofer que hemos considerado hasta ahora, hemos admitido que la fuente de ondas incidentes y el punto de observación están a distancia infinita. Cuando una de esas hipótesis no es cierta tenemos la difracción de Fresnel: aunque las ideas físicas son las mismas, los cálculos exactos suelen ser complicados. Cuando la distancia es muy grande tenemos los máximos de la difracción de Fraunhofer; pero al disminuir la distancia el diagrama de difracción cambia, como se muestra cualitativamente en la figura 9.71."
    },
    {
     "mota": "testua",
     "html": "En la figura 9.72 se ven los esquemas de los diagramas de la difracción de Fresnel cuando la luz pasa por un orificio circular y cuando encuentra en su camino un disco opaco. En este último caso, en condiciones adecuadas, puede verse un pequeño disco luminoso en el centro: se llama <strong>punto de Poisson</strong> y ha tenido gran importancia en la historia de la física [91]. Cuando Fresnel presentó su teoría, Poisson la usó para demostrar que predecía un máximo en el centro en el caso del disco opaco y, creyendo imposible eso, concluyó que la teoría era inaceptable. Huelga decir que el hecho de que, a petición de Arago, se encontrara experimentalmente ese punto luminoso influyó mucho en que se aceptara la naturaleza ondulatoria de la luz."
    },
    {
     "mota": "testua",
     "html": "A la derecha de la figura 9.72 se muestra otro caso interesante: precisamente el de la difracción de Fresnel que se produce en torno a un borde afilado."
    },
    {
     "mota": "irudia",
     "oina": "Difracción de Fresnel: (a) orificio circular, (b) disco circular y (c) borde recto.",
     "src": "../media/irudiak/0da6d8593495c99d.svg",
     "zabalera": 385
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Difracción de rayos X"
    },
    {
     "mota": "testua",
     "html": "La difracción de ondas electromagnéticas de alta energía es muy pequeña en el caso de los objetos macroscópicos, pero, como en las redes cristalinas las distancias entre átomos o moléculas son de unos <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></math> m, los cristales son medios adecuados para producir la difracción de rayos X, como se dio cuenta Max von Laue. Este problema es bastante complejo, pues los átomos absorben y emiten luz: no son centros pasivos de difracción. Además, la geometría de las redes en tres dimensiones no es tan sencilla como en los ejemplos que hemos considerado hasta ahora. No obstante, como ocurre a menudo, un cálculo sencillo bastará para obtener conclusiones interesantes."
    },
    {
     "mota": "irudia",
     "oina": "Difracción de rayos X en una red cristalina.",
     "src": "../media/irudiak/4e3e707376114ebe.svg",
     "zabalera": 428
    },
    {
     "mota": "testua",
     "html": "Consideremos los rayos X que se reflejan en un haz de planos paralelos de la figura 9.73. El ángulo entre los rayos incidentes y los planos es <math display=\"inline\"><mi>θ</mi></math>. Es evidente que, en el caso de la izquierda de la figura 9.73, cuando los ángulos de incidencia y de reflexión son iguales, los rayos difractados en el mismo plano están siempre en fase y hacen interferencia constructiva. Pero solo estarán en fase los difractados en planos distintos para algunos valores especiales del ángulo <math display=\"inline\"><mi>θ</mi></math>. En consecuencia, por el efecto de muchos átomos, al cambiar la dirección de observación <math display=\"inline\"><mi>θ</mi></math> se producirán grandes máximos y mínimos en direcciones precisas. Estudiemos la interferencia en la pantalla lejana entre las ondas que se reflejan en dos planos consecutivos. Si la distancia entre los planos es <math display=\"inline\"><mi>d</mi></math>, la diferencia de caminos es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>B</mi><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math> y, como tenemos <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>B</mi><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Por tanto, la intensidad será máxima cuando la distancia <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi></mrow></math> sea un múltiplo entero de la longitud de onda:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En esta, llamada <strong>condición de Bragg</strong>, debe cumplirse la condición <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>≤</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mn>1</mn><mo>≤</mo><mi>n</mi><mo>≤</mo><mn>2</mn><mi>d</mi><mi>/</mi><mi>λ</mi></mrow></math>. Aquí vemos que para que haya difracción hay que usar longitudes de onda que cumplan la condición <math display=\"inline\"><mrow><mi>λ</mi><mo>≤</mo><mn>2</mn><mi>d</mi><mspace width=\"0.167em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m<math display=\"inline\"><mo stretchy=\"false\" form=\"postfix\">)</mo></math>."
    },
    {
     "mota": "testua",
     "html": "Para hacer el estudio completo de la difracción hay que tener en cuenta varias cosas que no hemos considerado aquí, como que en los cristales hay átomos de distinta naturaleza, que hay muchos planos en un cristal (en la figura 9.73 se han dibujado algunos con línea discontinua) y que las redes cristalinas son tridimensionales."
    },
    {
     "mota": "irudia",
     "oina": "Difracción de Laue con un monocristal.",
     "src": "../media/irudiak/d28cd885c589a655.svg",
     "zabalera": 428
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución de D&#x27;Alembert"
    },
    {
     "mota": "testua",
     "html": "<em>Escribe</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>la ecuación de ondas</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>en coordenadas luminosas y resuelve directamente la ecuación que queda.</em>"
    },
    {
     "mota": "testua",
     "html": "Las primeras derivadas se calculan directamente: <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>ξ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>ξ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>η</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>η</mi></mrow></mfrac><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>ξ</mi></mrow></mfrac><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>η</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>c</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>∂</mi><mi>ξ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>ξ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>η</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>η</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>η</mi></mrow></mfrac><mo>−</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>ξ</mi></mrow></mfrac><mi>.</mi></mrow></math> Asimismo, las segundas derivadas son estas: <math display=\"block\"><mrow><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>ξ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>η</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mn>2</mn><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><mi>ξ</mi><mi>∂</mi><mi>η</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>ξ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>η</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mn>2</mn><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><mi>ξ</mi><mi>∂</mi><mi>η</mi></mrow></mfrac><mi>.</mi></mrow></math> Igualando a cero su resta, la ecuación de ondas queda así: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><mi>ξ</mi><mi>∂</mi><mi>η</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Es evidente que su solución general es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><mi>g</mi></math> funciones arbitrarias. Si se deshace el cambio de variable, se recupera la solución de D&#x27;Alembert: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Presión de radiación"
    },
    {
     "mota": "testua",
     "html": "<em>Como las ondas electromagnéticas transportan momento lineal, ejercen sobre los cuerpos que golpean una presión, es decir, una presión de radiación. Supongamos que la incidencia es normal (es decir, que la superficie del cuerpo y la dirección de la onda son perpendiculares).</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(a) Si el cuerpo fuera un absorbente perfecto (es decir, si no hubiera onda reflejada), ¿cuál sería la presión de radiación?</em>"
    },
    {
     "mota": "testua",
     "html": "\\"
    },
    {
     "mota": "testua",
     "html": "<em>(b) ¿Y si fuera un reflector perfecto (es decir, si se reflejara toda la onda)?</em>"
    },
    {
     "mota": "testua",
     "html": "Volviendo a usar la figura 9.24, si la densidad de momento lineal de la onda de la ecuación (9.194) es <math display=\"inline\"><mi>P</mi></math>, el momento lineal que absorbe en el intervalo de tiempo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math> la superficie normal infinitesimal de área <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi></mrow></math> del cuerpo será <math display=\"inline\"><mrow><mi>d</mi><mi>P</mi><mo>=</mo><mi>P</mi><mi>d</mi><mi>V</mi><mo>=</mo><mi>P</mi><mi>c</mi><mi>d</mi><mi>t</mi><mi>d</mi><mi>S</mi></mrow></math>. Si el cuerpo es un absorbente perfecto, el impulso que sufre será igual al cambio de momento lineal: <math display=\"inline\"><mrow><mi>d</mi><mi>F</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>d</mi><mi>P</mi></mrow></math>. Por tanto, la fuerza ejercida por la radiación es <math display=\"inline\"><mrow><mi>d</mi><mi>F</mi><mo>=</mo><mi>P</mi><mi>c</mi><mi>d</mi><mi>S</mi></mrow></math> y la presión <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>F</mi></mrow><mrow><mi>d</mi><mi>S</mi></mrow></mfrac><mo>=</mo><mi>P</mi><mi>c</mi><mo>=</mo><mi>U</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora, si el cuerpo es un reflector perfecto, devuelve la onda y, en consecuencia, el cambio de momento lineal será el doble. La presión que sufre será, pues, el doble en este caso: <math display=\"inline\"><mrow><mi>d</mi><mi>F</mi><mi>/</mi><mi>d</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>P</mi><mi>c</mi><mo>=</mo><mn>2</mn><mi>U</mi><mo>=</mo><mn>2</mn><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Efecto Doppler"
    },
    {
     "mota": "testua",
     "html": "<em>En un globo llevado por un viento de 36 km/h se produce un sonido de 800 Hz cuando se acerca a una casa alta. ¿Cuál es la frecuencia que oye alguien que está en una ventana de esta última? ¿Y la del sonido reflejado que se oye en el globo?</em>"
    },
    {
     "mota": "testua",
     "html": "En el apartado 9.13 usamos el sistema del aire para estudiar el efecto Doppler. Por eso, en lugar de usar las transformaciones de Galileo para pasar al sistema de la Tierra, haremos el cálculo en el sistema del aire. Allí la velocidad del sonido es, aproximadamente, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>340</mn></mrow></math> m/s, el globo está en reposo y la casa se le acerca con velocidad <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><mn>36</mn></mrow></math> km/h <math display=\"inline\"><mrow><mo>=</mo><mi>−</mi><mn>10</mn></mrow></math> m/s (el sonido y la casa se mueven en sentidos contrarios). Por tanto, haciendo <math display=\"inline\"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mi>u</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> en el resultado (9.202), concluimos que en la casa se oye la frecuencia de valor <math display=\"block\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mi>/</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ν</mi><mo>=</mo><mn>825.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Después, la fuente (es decir, la casa) y el sonido se mueven en el mismo sentido: podemos elegir, pues, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>340</mn></mrow></math> m/s y <math display=\"inline\"><mrow><msub><mi>v</mi><mi>i</mi></msub><mo>=</mo><mn>10</mn></mrow></math> m/s. La frecuencia del sonido reflejado que se oye en el globo en reposo (<math display=\"inline\"><mrow><msub><mi>v</mi><mi>d</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) será esta: <math display=\"block\"><mrow><msup><mi>ν</mi><mo>″</mo></msup><mo>=</mo><mfrac><msup><mi>ν</mi><mo>′</mo></msup><mrow><mn>1</mn><mo>−</mo><msub><mi>v</mi><mi>i</mi></msub><mi>/</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mn>848.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Principio de Fermat"
    },
    {
     "mota": "testua",
     "html": "<em>En este principio, que Fermat enunció en óptica, se basaron Maupertuis, Euler, Lagrange y Hamilton para establecer el de mínima acción. Según el <strong>principio del tiempo mínimo</strong> de Fermat, el camino de la luz al ir de un punto a otro es el que se recorre en el intervalo de tiempo más corto (o más largo). Usa este principio para demostrar que los ángulos de incidencia y de reflexión son iguales y la ley de Snell.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/81b0f5e8f53a16c2.svg",
     "zabalera": 306
    },
    {
     "mota": "testua",
     "html": "Supongamos que un rayo emitido desde el punto <math display=\"inline\"><mi>P</mi></math> de la figura incide en la superficie de separación de los medios <math display=\"inline\"><mi>S</mi></math> en el punto <math display=\"inline\"><mi>Q</mi></math>. Si la distancia entre el punto <math display=\"inline\"><mi>P</mi></math> y la superficie <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mi>h</mi></math>, consideremos los puntos <math display=\"inline\"><msub><mi>P</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>P</mi><mn>2</mn></msub></math> del rayo reflejado y del refractado a distancia <math display=\"inline\"><mi>h</mi></math> de <math display=\"inline\"><mi>S</mi></math>. Si la velocidad de la luz en los medios superior e inferior es <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>, respectivamente, el intervalo de tiempo necesario para ir de <math display=\"inline\"><mi>P</mi></math> a <math display=\"inline\"><msub><mi>P</mi><mi>i</mi></msub></math> será este: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mfrac><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt><msub><mi>v</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt><msub><mi>v</mi><mi>i</mi></msub></mfrac><mi>.</mi></mrow></math> Los extremos de esta se producirán cuando se cumpla la condición <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>x</mi><mrow><msub><mi>v</mi><mn>1</mn></msub><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>L</mi><mo>−</mo><mi>x</mi></mrow><mrow><msub><mi>v</mi><mi>i</mi></msub><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msub><mi>v</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub></mrow><msub><mi>v</mi><mi>i</mi></msub></mfrac><mo>=</mo><mn>0</mn></mrow></math>. En el caso del rayo reflejado, como las velocidades son iguales, los ángulos de incidencia y de reflexión son iguales: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi></mrow></math> (si se considera la figura <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><mi>Q</mi></mrow></math> del rayo incidente, puede usarse que el camino más corto es el recto para obtener este resultado más fácilmente)."
    },
    {
     "mota": "testua",
     "html": "En el caso del rayo refractado, como <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><msub><mi>n</mi><mn>2</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow></math>, se recupera la ley de Snell."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos fuentes sincrónicas"
    },
    {
     "mota": "testua",
     "html": "<em>Discute el diagrama de interferencia cuando las dos fuentes están en dos puntos próximos de una recta perpendicular a la pantalla.</em>"
    },
    {
     "mota": "testua",
     "html": "Si la distancia de observación <math display=\"inline\"><mi>x</mi></math> es pequeña, podemos admitir que las amplitudes de las dos ondas en la pantalla son iguales: <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>. Por tanto, si la intensidad que habría en la pantalla si cada fuente estuviera sola es <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math>, tenemos, igual que en el experimento de Young: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>r</mi></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mrow><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>r</mi></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/73343a3499cbbb64.svg",
     "zabalera": 242
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/14fc368010c47e5a.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "La diferencia de los caminos recorridos por los rayos se calcula fácilmente con la figura y el binomio de Newton: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>≈</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>a</mi><mfrac><mi>d</mi><msqrt><mrow><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>≈</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>π</mi><mi>a</mi></mrow><mi>λ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Si se prefiere, como tenemos <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>≪</mo><mi>d</mi></mrow></math>, puede hacerse el desarrollo de Taylor doble respecto de <math display=\"inline\"><mrow><mi>x</mi><mi>/</mi><mi>d</mi></mrow></math> y de <math display=\"inline\"><mrow><mi>a</mi><mi>/</mi><mi>d</mi></mrow></math> en la expresión exacta de la diferencia de caminos: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>−</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Se demuestra fácilmente que los máximos se producen en los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>d</mi><msqrt><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mi>λ</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>, para los valores <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Propiedades básicas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La gráfica de un pulso viene dada por la expresión siguiente: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> ¿Cuál es la expresión matemática de la onda correspondiente en el instante <math display=\"inline\"><mi>t</mi></math>, si se mueve con velocidad <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>? ¿Cómo será la gráfica del pulso en los instantes <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math> s?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula la amplitud, la frecuencia, la velocidad de fase, el periodo y la longitud de onda de la siguiente onda: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.1</mn><mi>x</mi><mo>−</mo><mn>5</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
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
       "html": "Haz el análisis de Fourier de la función «diente de sierra» de la figura."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/920e825d18c2a1ad.svg",
       "zabalera": 292
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
       "html": "Si la gráfica de un pulso es <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>π</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bestela.</mtext></mrow></mtd></mtr></mtable></mrow></mrow></math>, ¿cuál será el espectro de la onda?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos las ondas transversales que se propagan en una cuerda tensa. De entre las siguientes funciones, ¿cuáles pueden ser la expresión matemática de una de esas ondas:"
      },
      {
       "mota": "testua",
       "html": "(a)  <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>v</mi><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mi>v</mi><mn>3</mn></msup><msup><mi>t</mi><mn>3</mn></msup></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "(b)  <math display=\"inline\"><mrow><mn>10</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "(c)  <math display=\"inline\"><mrow><mi>μ</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>T</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "(d)  <math display=\"inline\"><mroot><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mn>3</mn></mroot></math>,"
      },
      {
       "mota": "testua",
       "html": "(e)  <math display=\"inline\"><mrow><mn>3</mn><mi>v</mi><mi>t</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "(f)  <math display=\"inline\"><mrow><mn>5</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>v</mi><mi>t</mi></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "Cuando la respuesta sea afirmativa, escribe la función en la forma <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de d&#x27;Alembert."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una columna de gas está en el eje <math display=\"inline\"><mrow><mi>O</mi><mi>X</mi></mrow></math> y un manómetro situado en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> mide la presión <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La velocidad del sonido es <math display=\"inline\"><mi>v</mi></math>. ¿Cuál es la presión medida en los otros puntos?"
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
       "html": "Una onda sonora se mueve por un tubo estrecho de un extremo al otro. Según un manómetro situado en un punto fijo, el valor de la presión cambia al pasar la onda como se muestra en la figura. Dibuja la distribución espacial de la presión en un instante. Explica qué has hecho y por qué."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b8e4a751d14b5d9c.svg",
       "zabalera": 197
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las expresiones de las dos ondas que se muestran en la figura son estas: <math display=\"block\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>25</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>25</mn></munderover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>50</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mn>50</mn></munderover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> ¿Cuál es la de arriba, <math display=\"inline\"><msub><mi>u</mi><mn>1</mn></msub></math> o <math display=\"inline\"><msub><mi>u</mi><mn>2</mn></msub></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/cb22b1f7d682060e.svg",
       "zabalera": 309
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> de una cuerda tensa larga está fijo. Demuestra que la expresión de una onda transversal (lineal) que se propaga por la cuerda puede escribirse siempre como <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>x</mi><mi>/</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con una función adecuada <math display=\"inline\"><mi>f</mi></math>, si la velocidad de fase de la onda es <math display=\"inline\"><mi>v</mi></math>. Interpreta la solución."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Solución de D&#x27;Alembert",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos la ecuación de ondas junto con las condiciones iniciales: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Demuestra que la solución se escribe de este modo: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>v</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>v</mi><mi>t</mi></mrow></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>τ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ecuación de ondas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encuentra la solución general de la ecuación de ondas (9.144) con simetría esférica."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ecuación de propagación de un campo es <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>a</mi><mfrac><mrow><msup><mi>∂</mi><mn>4</mn></msup><mi>ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>4</mn></msup></mrow></mfrac></mrow></math>. ¿Habrá ondas armónicas? ¿Y ondas generales de la forma <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, aunque la ecuación de Schrödinger <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>i</mi><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mi>ħ</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> tiene soluciones de la forma <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> —o <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mfrac><mi>i</mi><mi>ħ</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>x</mi><mo>−</mo><mi>E</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>—, no admite soluciones <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Por qué ocurre esto?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ondas de plasma",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un plasma las fluctuaciones de la densidad de carga cumplen la ecuación <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>ρ</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>ρ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><msubsup><mi>ω</mi><mi>p</mi><mn>2</mn></msubsup><mi>ρ</mi></mrow></math> cuando ocurren en una sola dimensión. Aquí, <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la densidad de carga, <math display=\"inline\"><mi>c</mi></math> la velocidad de la luz y <math display=\"inline\"><msub><mi>ω</mi><mi>p</mi></msub></math> la constante llamada <strong>frecuencia del plasma</strong>."
      },
      {
       "mota": "testua",
       "html": "(a) Demuestra que la ecuación de ondas admite soluciones armónicas viajeras, es decir, de la forma <math display=\"inline\"><mrow><mi>ρ</mi><mo>∝</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, y halla la relación de dispersión <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(b) Comprueba además que también admite soluciones de la forma <math display=\"inline\"><mrow><mi>ρ</mi><mo>∝</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>x</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> que se atenúan de modo exponencial, y halla <math display=\"inline\"><mrow><mi>κ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(c) Cuando una onda electromagnética llega al borde de un plasma, hace oscilar allí la densidad de carga con la frecuencia <math display=\"inline\"><mi>ω</mi></math>. Explica cualitativamente qué ocurre en los casos <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><msub><mi>ω</mi><mi>p</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>p</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(d) En tu opinión, ¿por qué se dice que <math display=\"inline\"><msub><mi>ω</mi><mi>p</mi></msub></math> es la <strong>frecuencia de corte</strong>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Velocidad de grupo</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando una barra sufre esfuerzos transversales (en una barra horizontal, por ejemplo, los esfuerzos producidos por su peso) pueden aparecer ondas elásticas de flexión. Si la sección transversal de la barra es un círculo de radio <math display=\"inline\"><mi>R</mi></math>, la velocidad de fase de las ondas armónicas de flexión es esta: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>E</mi><mrow><mi>ρ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>λ</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mi>.</mi></mrow></math> ¿Cuál será la relación entre la velocidad de grupo y la velocidad de fase de las ondas, en el caso general y cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>≫</mo><mi>R</mi></mrow></math>?"
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
       "html": "En aguas profundas, la velocidad de fase de las ondas gravitatorias de número de onda <math display=\"inline\"><mi>k</mi></math> es (9.119): <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math>. Tras producirse un terremoto en el fondo del mar y muy lejos de tierra firme, un detector de la costa mide ondas de 0.1 Hz (es decir, paquetes de ondas en torno a esa frecuencia) a las 6:00 de la mañana y de 0.2 Hz a las 12:00."
      },
      {
       "mota": "testua",
       "html": "(a) ¿Cuándo se ha producido el terremoto?"
      },
      {
       "mota": "testua",
       "html": "(b) ¿Dónde se ha producido?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sabemos que en el caso de la cuerda discreta la relación de dispersión es <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>T</mi><mrow><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>k</mi><mi>a</mi></mrow><mn>2</mn></mfrac></mrow></math> (véase el problema 7.93) y que, sin cambiar la densidad <math display=\"inline\"><mrow><mi>μ</mi><mo>≡</mo><mi>m</mi><mi>/</mi><mi>a</mi></mrow></math> y la tensión <math display=\"inline\"><mi>T</mi></math> por unidad de longitud, si hacemos el límite <math display=\"inline\"><mrow><mi>a</mi><mo>→</mo><mn>0</mn></mrow></math> recuperamos la cuerda continua. La cuerda discreta es dispersiva, pero la continua no. ¿Cómo desaparece esa propiedad en el proceso de paso al límite?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La relación entre la velocidad de fase <math display=\"inline\"><msub><mi>v</mi><mi>f</mi></msub></math> y la velocidad de grupo <math display=\"inline\"><msub><mi>v</mi><mi>t</mi></msub></math> de la luz en un medio es <math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Calcula la relación de dispersión <math display=\"inline\"><mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el índice de refracción <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>c</mi><mi>/</mi><msub><mi>v</mi><mi>f</mi></msub></mrow></math>. Discute cuándo es <math display=\"inline\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>&gt;</mo><mi>c</mi></mrow></math> y cuándo <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>&gt;</mo><mi>c</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos cómo se mueven las ondas del apartado 9.10 en un canal. Calcula, mediante la aproximación adecuada, la velocidad de grupo en el caso de longitudes de onda grandes (es decir, de ondas gravitatorias). Repite el cálculo para el caso de longitudes de onda cortas (entonces tenemos ondas de tensión superficial). Compara, en cada caso, la velocidad del máximo de un paquete de ondas con la velocidad de los componentes armónicos."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La densidad, el radio, el módulo de Young y el coeficiente de Poisson de una barra cilíndrica larga son <math display=\"inline\"><mi>ρ</mi></math>, <math display=\"inline\"><mi>R</mi></math>, <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>σ</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, respectivamente. Teniendo en cuenta que una onda longitudinal también cambia las dimensiones transversales, Pochhammer (en 1876) y Rayleigh (en 1894) obtuvieron la siguiente expresión de la velocidad de fase:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "Calcula la velocidad de grupo. ¿Qué condiciones deben cumplirse para recuperar la velocidad de fase vista en la teoría? ¿Puede usarse la fórmula (9.400) para todas las frecuencias? ¿Por qué? Si dos ondas armónicas parten a la vez, ¿cuál se propagará más deprisa, la de mayor frecuencia o la otra? ¿Y si son dos paquetes de ondas estrechos centrados en torno a frecuencias distintas?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ondas mecánicas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La constante recuperadora y la masa de un muelle de longitud <math display=\"inline\"><mi>L</mi></math> son <math display=\"inline\"><mi>k</mi></math> y <math display=\"inline\"><mi>m</mi></math>, respectivamente. ¿Cuál será la velocidad de fase de las ondas longitudinales que se propagan por el muelle? <em>Sugerencia</em>: estudia la ley de Hooke en estática <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>K</mi><mi>u</mi><mi>/</mi><mi>x</mi></mrow></math> para demostrar que la relación entre el módulo de elasticidad <math display=\"inline\"><mi>K</mi></math> y la constante recuperadora <math display=\"inline\"><mi>k</mi></math> es <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mi>k</mi><mi>L</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa del muelle",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el movimiento estacionario del sistema de la figura, la evolución de los puntos del muelle viene dada por una onda estacionaria. Usa el resultado del problema 9.21 para escribir la ecuación de ondas del muelle y demostrar que las condiciones de contorno que deben cumplirse son las siguientes: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><mi>L</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>L</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> puntuan</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Separa las variables y demuestra que el número de onda <math display=\"inline\"><mi>κ</mi></math> debe cumplir la condición siguiente: <math display=\"block\"><mrow><mi>κ</mi><mi>L</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>κ</mi><mi>L</mi><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mi>.</mi></mrow></math> Usa que tenemos <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>M</mi><mo>≪</mo><mn>1</mn></mrow></math> para obtener, haciendo dos aproximaciones sucesivas en la ecuación anterior: <math display=\"block\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>≈</mo><mfrac><mi>k</mi><mi>M</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mo>≈</mo><mfrac><mi>k</mi><mrow><mi>M</mi><mo>+</mo><mi>m</mi><mi>/</mi><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9f4b67b7f0c23f2d.svg",
       "zabalera": 222
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La amplitud, la velocidad y la longitud de onda de una onda transversal sinusoidal en una cuerda horizontal tensa son <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>10</mn></mrow></math> cm, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>100</mn><mi mathvariant=\"bold-italic\">𝒊</mi></mrow></math> cm s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>200</mn></mrow></math> cm, respectivamente. En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> está en la ordenada <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, pero se mueve hacia abajo. ¿Cuáles son la pulsación y el número de onda? ¿Cuál es la ecuación de movimiento del punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>? ¿Cuál es la mayor velocidad que puede tener un punto?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La expresión matemática de la onda elástica longitudinal que se propaga en una barra es la siguiente: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mi>λ</mi></mfrac><mo>−</mo><mfrac><mi>t</mi><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Halla la expresión de la fuerza <math display=\"inline\"><mi>F</mi></math> que actúa en una sección normal de la barra y demuestra que entre las magnitudes <math display=\"inline\"><mi>F</mi></math> y <math display=\"inline\"><mi>u</mi></math> hay un desfase de valor <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>4</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El diámetro de una barra de acero es de <math display=\"inline\"><mn>4</mn></math> mm y en uno de sus extremos colocamos un oscilador armónico de <math display=\"inline\"><mn>0.1</mn></math> mm de amplitud y 10 Hz de frecuencia. ¿Cuál será la velocidad de propagación de las ondas longitudinales que aparecerán en la barra por efecto del oscilador? Calcula la densidad de energía elástica y el flujo de energía que atraviesa la sección normal."
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
       "html": "Estudiemos las ondas longitudinales que se propagan en una barra. Demuestra que la longitud de onda de las ondas de energía es la mitad de la que corresponde a las ondas de desplazamiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, en el caso de ondas armónicas transversales que se propagan en una cuerda, la potencia media que un elemento realiza sobre el contiguo es esta: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>μ</mi><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>u</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>v</mi><mi>.</mi></mrow></math> ¿Qué es lo que aparece entre paréntesis?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia de una onda armónica es de 60 Hz y la amplitud de 0.02 m. Si se mueve hacia la izquierda por una cuerda con velocidad 10 m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, ¿cuál es su ecuación? Si la tensión de la cuerda es de 1000 N, ¿qué potencia se necesita para mantener la onda? Calcula la densidad de la cuerda."
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
       "html": "En una cuerda tensa la tensión no es constante cuando está en equilibrio, sino la dada por la función <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demuestra que las ondas transversales que se propagan como consecuencia de una pequeña perturbación transversal cumplen la siguiente ecuación: <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>μ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Como ejemplo, consideremos la cuerda de la figura, colgada del techo: ¿cuál será la ecuación de las ondas transversales? ¿Se propaga por la cuerda alguna onda armónica de la forma <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/6ab4231d15732e3c.svg",
       "zabalera": 74
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
       "html": "¿Qué no está del todo bien en el enunciado del siguiente problema que hemos encontrado en un buen libro de texto?:"
      },
      {
       "mota": "testua",
       "html": "<span>Una cuerda pesada de 3 m de longitud está atada al techo y puede colgar libremente. (a) Demuestra que la velocidad de las ondas que van contra la cuerda es independiente de su masa y de su longitud, pero depende de la distancia. <math display=\"inline\"><mi>y</mi></math> desde abajo, según la fórmula <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>y</mi></mrow></msqrt></mrow></math>. (b) Si se da al extremo de la cuerda un desplazamiento súbito, ¿cuánto tiempo necesita el pulso de la onda obtenida para ir hasta el techo, reflexionar y volver al extremo de la cuerda?</span>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considera la cuerda discreta del apartado 7.8 y demuestra que la relación de dispersión (9.115) que hemos obtenido en el caso de las ondas viajeras y lo que demostramos en el problema 7.93 en el caso de las ondas estacionarias son compatibles."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "¿Verdadero o falso?",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«La velocidad de fase de la onda transversal que se propaga en una cuerda tensa es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> y, como <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>ν</mi></mrow></math> y <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>λ</mi></mrow></math>, tenemos <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ν</mi><mi>λ</mi></mrow></math>, es decir, que la velocidad de fase depende de la longitud de onda.»"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Densidad de energía",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La polarización de una onda transversal que se propaga en una cuerda tensa es lineal. Demuestra que las energías cinética y potencial por unidad de longitud son <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>. Calcula la energía mecánica de un elemento infinitesimal, en el caso de una onda armónica, y demuestra que se conserva en promedio."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de continuidad",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos de nuevo la onda del problema 9.33. Multiplica la ecuación de ondas por la velocidad <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> y deduce que queda lo siguiente: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> donde <math display=\"block\"><mrow><mi>U</mi><mo>≡</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>μ</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>T</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> es la densidad de energía mecánica y <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>≡</mo><mi>−</mi><mi>T</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi mathvariant=\"bold-italic\">𝒊</mi><mi>.</mi></mrow></math> Comprueba que esto último es el flujo de energía (la energía que pasa por cada punto en la unidad de tiempo)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Sonido</strong>"
    },
    {
     "mota": "problema",
     "izena": "Umbrales de audición y de dolor",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "A 500 Hz el umbral de audición corresponde, aproximadamente, a una presión de <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math> N m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>, y el umbral de dolor es de unos 28 N m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>. ¿Cuál será la intensidad del sonido en los dos casos mencionados, en el Sistema Internacional y en dB?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Impedancia acústica específica",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos una onda sonora plana. Calcula la impedancia acústica específica del medio, que es el cociente entre la sobrepresión y la velocidad de las partículas: <math display=\"block\"><mrow><msub><mi>Z</mi><mi>a</mi></msub><mo>=</mo><mfrac><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub></mrow><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un concierto de rock un altavoz produce <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> a 20 m. Supongamos que la energía sonora se propaga de modo isótropo en todas las direcciones. ¿Cuál es el nivel de intensidad a 20 y a 30 m? Calcula la potencia sonora total del altavoz. ¿Dónde hay que situarse para no llegar al umbral de dolor de 120 dB?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la intensidad de una onda sonora de 440 Hz es de 30 dB, ¿cuál es la amplitud del movimiento de las moléculas del aire?"
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
       "html": "La mayor intensidad sonora admitida en un aeropuerto es de 97 dB, medida al final de una pista de 1740 m. Un avión produce un nivel de intensidad de 100 dB cuando está a 100 m de altura sobre el suelo. Si, tras recorrer 1200 m en la pista, despega con un ángulo de <math display=\"inline\"><mrow><mn>15</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, ¿cumple la normativa?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una de dos ondas de la misma frecuencia e intensidad se propaga en el aire y la otra en el agua. ¿Cuál es el cociente de las amplitudes de las dos ondas? Y si son de la misma amplitud, ¿cuál es la razón entre las intensidades?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El radio de una esfera pequeña está en movimiento armónico, entre los valores 11.8 cm y 12.2 cm, con una frecuencia de 800 Hz. ¿Cuál es la intensidad que produce el movimiento en la superficie de la esfera? ¿Y la potencia sonora total emitida? Calcula la intensidad del sonido, la presión máxima y la amplitud de los desplazamientos a 10 m."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "¿Verdadero o falso?",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Explica por qué es verdadera o falsa cada una de las siguientes afirmaciones. Si es falsa, explica cuál puede ser el menor cambio para que sea verdadera."
      },
      {
       "mota": "testua",
       "html": "(a) «La intensidad de un sonido de 60 dB es el doble que la de uno de 30 dB.»"
      },
      {
       "mota": "testua",
       "html": "(b) «Como la velocidad del sonido a una temperatura de <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>15</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>C es <math display=\"inline\"><mrow><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mn>340</mn></mrow></math> m/s, cuando la temperatura es <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>C la velocidad del sonido es <math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><msub><mi>T</mi><mn>2</mn></msub><mi>/</mi><msub><mi>T</mi><mn>1</mn></msub></mrow></msqrt><msub><mi>v</mi><mn>1</mn></msub><mo>=</mo><mn>680</mn></mrow></math> m/s.»"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "¿Verdadero o falso?",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La intensidad de una onda no aumenta nunca con la distancia."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "«En una onda sonora que se propaga por una columna de gas, las ondas de desplazamiento y de presión están en fase», dice Ane. «De ninguna manera, están en oposición de fase», le dice Borja. ¿Qué opinas tú?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Velocidad del sonido",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para simplificar los cálculos prácticos, queremos una expresión adecuada y <em>sencilla</em> de la forma <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>t</mi></mrow></math> para calcular la velocidad del sonido en el aire cuando la temperatura <math display=\"inline\"><mi>t</mi></math>, medida en grados Celsius, está en el intervalo <math display=\"inline\"><mrow><mi>−</mi><mn>10</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>C <math display=\"inline\"><mrow><mo>≤</mo><mi>t</mi><mo>≤</mo><mn>40</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>C. ¿Cómo deben elegirse las constantes <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>? ¿Por qué? Valora el error relativo máximo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una misma recta están, de izquierda a derecha, la fuente sonora isótropa <math display=\"inline\"><mi>O</mi></math> y los detectores <math display=\"inline\"><mi>A</mi></math>, <math display=\"inline\"><mi>B</mi></math> y <math display=\"inline\"><mi>C</mi></math>. Las distancias <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>A</mi><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>B</mi><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></math> son iguales y el nivel de intensidad que mide <math display=\"inline\"><mi>A</mi></math> es 10 dB mayor que el que mide <math display=\"inline\"><mi>B</mi></math>. ¿Cuál será la diferencia entre lo que miden <math display=\"inline\"><mi>B</mi></math> y <math display=\"inline\"><mi>C</mi></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Antes de que se desarrollara la electrónica, los sordos usaban trompetillas para oír mejor. La expresión de una onda sonora que se propaga por el tubo de la figura es esta: <math display=\"block\"><mrow><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>≡</mo><msqrt><mrow><mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mfrac><mo>−</mo><msup><mi>α</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>v</mi></math> es la velocidad del sonido (en el aire) y <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> una constante."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9a8cdc432a7afc44.svg",
       "zabalera": 238
      },
      {
       "mota": "testua",
       "html": "Calcula la velocidad de fase <math display=\"inline\"><msub><mi>v</mi><mi>f</mi></msub></math>, la velocidad de grupo <math display=\"inline\"><msub><mi>v</mi><mi>t</mi></msub></math> y el producto <math display=\"inline\"><mrow><msub><mi>v</mi><mi>f</mi></msub><msub><mi>v</mi><mi>t</mi></msub></mrow></math>. ¿Por qué era útil este instrumento? ¿Cuál es la ecuación <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del tubo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una aguja de <math display=\"inline\"><mn>0.1</mn></math> g se suelta desde 1 m. Al golpear el suelo, el 0.05 % de la energía cinética se libera en un pulso sonoro de <math display=\"inline\"><mn>0.1</mn></math> s. Si el nivel de intensidad del sonido más débil que puede oírse sobre el ruido de fondo es de 40 dB, ¿desde qué distancia puede oírse la aguja? Explica las aproximaciones que has hecho."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ondas electromagnéticas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El campo eléctrico de una onda electromagnética plana sinusoidal vale <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> V m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. Halla la amplitud del campo magnético y la densidad de energía."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Explica la polarización de las siguientes ondas electromagnéticas:"
      },
      {
       "mota": "testua",
       "html": "   (a)  <math display=\"inline\"><mrow><msub><mi>E</mi><mi>y</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;"
      },
      {
       "mota": "testua",
       "html": "   (b)  <math display=\"inline\"><mrow><msub><mi>E</mi><mi>y</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;"
      },
      {
       "mota": "testua",
       "html": "   (c)  <math display=\"inline\"><mrow><msub><mi>E</mi><mi>y</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>;"
      },
      {
       "mota": "testua",
       "html": "   (d)  <math display=\"inline\"><mrow><msub><mi>E</mi><mi>y</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"0.222em\"></mspace><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>x</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>π</mi><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La emisión de un radar se produce dentro de un cono de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> sr. La amplitud del campo eléctrico vale <math display=\"inline\"><mn>10</mn></math> V m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> a <math display=\"inline\"><msup><mn>10</mn><mn>3</mn></msup></math> m. Halla la amplitud del campo magnético y la potencia del radar cuando la polarización de la onda es (a) lineal y (b) circular."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que tenemos <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⟂</mo><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math> si se cumplen las siguientes condiciones: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒖</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Este resultado, junto con las ecuaciones de Maxwell, demuestra que los campos eléctrico y magnético son perpendiculares a la dirección de propagación de la onda plana armónica."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El polarizador <math display=\"inline\"><mi>P</mi></math> y el analizador <math display=\"inline\"><mi>A</mi></math> son planos, iguales y paralelos. Se iluminan con un haz de luz normal. Cuando los ejes de transmisión de ambos son paralelos entre sí, la intensidad de la luz que sale del sistema es <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math>. Ahora se colocan los ejes de transmisión en direcciones perpendiculares y no pasa luz; pero si entre ambos se coloca otro polarizador igual, <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math>, la luz puede pasar. Calcula cuál es la intensidad que se ve en este último caso, en función del ángulo <math display=\"inline\"><mi>θ</mi></math> entre los ejes de transmisión <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><msup><mi>P</mi><mo>′</mo></msup></math>. ¿Cuándo se obtiene la intensidad máxima? ¿Cuál es el valor de esta última?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se apilan <math display=\"inline\"><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></math> polarizadores lineales <em>perfectos</em>. El ángulo entre los ejes de transmisión de un polarizador y el anterior es <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mi>N</mi></mrow></math>. (Así, el ángulo entre los ejes de los polarizadores último y primero es <math display=\"inline\"><mi>α</mi></math>.) El primer polarizador se ilumina en dirección normal con una onda de luz plana polarizada en la dirección de su eje de transmisión. Demuestra que en el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> la intensidad de la luz que sale de la pila no ha cambiado, pero su plano de polarización ha girado, de modo que el ángulo entre los planos de polarización inicial y final es <math display=\"inline\"><mi>α</mi></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando los ejes de transmisión de dos polarizadores ideales son paralelos, la intensidad que sale del analizador es <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math>. Sin cambiar la fuente de luz, cuando el ángulo entre los ejes es <math display=\"inline\"><mi>α</mi></math>, la intensidad que sale es <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math>. ¿Cuál será cuando el ángulo sea <math display=\"inline\"><mrow><mn>2</mn><mi>α</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un haz de luz parcialmente polarizada puede entenderse como la superposición de dos haces incoherentes polarizados en planos perpendiculares. Demuestra que la intensidad transmitida a través de un polarizador ideal es <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, si las intensidades de los haces son <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>&gt;</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre el plano de polarización del haz de intensidad <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> y el eje de transmisión del polarizador. Comprueba que el resultado se escribe también <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mfrac><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>θ</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>P</mi></mrow></mfrac></mrow></math>, si las intensidades máxima y mínima medidas al cambiar <math display=\"inline\"><mi>θ</mi></math> son <math display=\"inline\"><msub><mi>I</mi><mi mathvariant=\"normal\">max</mi></msub></math> y <math display=\"inline\"><msub><mi>I</mi><mi mathvariant=\"normal\">min</mi></msub></math>, y <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">max</mi></msub><mo>−</mo><msub><mi>I</mi><mi mathvariant=\"normal\">min</mi></msub></mrow><mrow><msub><mi>I</mi><mi mathvariant=\"normal\">max</mi></msub><mo>+</mo><msub><mi>I</mi><mi mathvariant=\"normal\">min</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> ¿Cómo se obtienen los valores mínimo y máximo de <math display=\"inline\"><mi>I</mi></math> y cuáles son sus valores? <em>Nota</em>: las intensidades de aquí son medias, como las del ejercicio 9.15 de la página 477, y, como los haces no son coherentes, las fases cambian deprisa y al azar y la media de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>E</mi><mn>1</mn></msub><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> es nula."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Constante solar",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La intensidad de la radiación total que llega del Sol a la superficie exterior de la atmósfera es de <math display=\"inline\"><mrow><mi>K</mi><mo>≈</mo><mn>1.37</mn></mrow></math> kW/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>. Calcula la potencia total emitida por el Sol y la que llega a toda la atmósfera. ¿Cuál es la masa que pierde el Sol cada segundo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que el campo eléctrico de una onda electromagnética armónica polarizada elípticamente cubre áreas iguales en intervalos iguales. ¿Es constante la velocidad angular del campo?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Efecto Doppler</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una fuente sonora de <math display=\"inline\"><msup><mn>10</mn><mn>3</mn></msup></math> Hz se mueve con velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>30</mn></mrow></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. ¿Cuál será la frecuencia medida por el observador en reposo, cuando la fuente se acerca al observador y cuando se aleja de él? ¿Cómo cambian los resultados si sopla un viento de <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>10</mn></mrow></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> en la dirección y el sentido de la fuente? ¿Y si sopla en sentido contrario?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuáles serán las respuestas del ejercicio 9.59 si la fuente sonora está en reposo y es el observador el que se mueve con la misma velocidad escalar?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al superponer las microondas de 2 GHz que emite un radar con las reflejadas en un automóvil se miden batidos de 293 Hz. ¿Cuál es la velocidad del automóvil?"
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
       "html": "Una fuente sonora de alta frecuencia <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math> se mueve en dirección horizontal, con velocidad constante <math display=\"inline\"><mi>u</mi></math> y a altura <math display=\"inline\"><mi>h</mi></math>, y está sobre un observador situado en el suelo en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Demuestra que, si la señal que este último oye en el instante <math display=\"inline\"><msub><mi>t</mi><mi>e</mi></msub></math> se emitió en el instante <math display=\"inline\"><msub><mi>t</mi><mi>i</mi></msub></math>, se cumple lo siguiente: <math display=\"block\"><mrow><msub><mi>t</mi><mi>e</mi></msub><mo>=</mo><msub><mi>t</mi><mi>i</mi></msub><mo>+</mo><mfrac><mn>1</mn><mi>v</mi></mfrac><msqrt><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>t</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>v</mi></math> es la velocidad del sonido.) Deduce que la frecuencia oída es la siguiente, si <math display=\"inline\"><mi>x</mi></math>: <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>≪</mo><mi>h</mi><mi>/</mi><mi>u</mi></mrow></math> <math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><msub><mi>ν</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>u</mi><mi>v</mi></mfrac><mfrac><mrow><mi>u</mi><msub><mi>t</mi><mi>i</mi></msub></mrow><msqrt><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>t</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Cuando la fuente se acercaba desde muy lejos la frecuencia era 5500 Hz y cuando se aleja muy lejos 4500 Hz. Además, cuando está sobre el observador la frecuencia baja de 5100 Hz a 4900 Hz en 4 s. Haciendo las aproximaciones adecuadas, calcula la altura y la velocidad de la fuente. (Se hacen estudios parecidos para medir la altura y la velocidad de los satélites, midiendo la frecuencia de los radiotransmisores que llevan.)"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un físico se acerca directamente a una pared con velocidad constante <math display=\"inline\"><mi>u</mi></math>, llevando en la mano un diapasón (un la de 440 Hz). Si oye diez batidos por segundo, ¿cuánto vale <math display=\"inline\"><mi>u</mi></math>? Si ahora se aleja de la pared con la misma velocidad, ¿cuántos batidos oirá por segundo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una ambulancia se mueve con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y en sentido contrario se le acerca un autobús con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>. La frecuencia de la sirena de la ambulancia es <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math>. Ana está en reposo entre la ambulancia y el autobús. ¿Cuántos batidos oye Ana por segundo? ¿Y el conductor de la ambulancia? <em>Nota</em>: cada persona oye dos sonidos: el que viene directamente de la sirena y el que se refleja en el autobús. Usa que la velocidad del sonido es <math display=\"inline\"><mrow><mi>v</mi><mo>≫</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math> y que <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> para hacer aproximaciones <em>desde el principio</em>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Repite el problema 9.64, pero ahora sin aproximaciones."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando un diapasón se acerca con velocidad constante a otro idéntico en reposo, quien está en reposo junto a este último oye <math display=\"inline\"><msub><mi>N</mi><mn>1</mn></msub></math> batidos por segundo y, luego, cuando se aleja, <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> batidos por segundo. Si la velocidad del sonido es <math display=\"inline\"><mi>v</mi></math>, ¿cuáles son la frecuencia propia de los diapasones y la velocidad del móvil? ¿Cómo cambian tus respuestas si sopla un viento con la velocidad del diapasón móvil?"
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
       "html": "El observador de la figura, que oye la sirena de la ambulancia de la izquierda directamente y reflejada en el coche de la derecha, mide <math display=\"inline\"><msub><mi>N</mi><mn>1</mn></msub></math> batidos cuando está en reposo y <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> cuando se mueve con la velocidad <math display=\"inline\"><mi>u</mi></math> que se muestra en la figura."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/579cf011cd78a94a.svg",
       "zabalera": 301
      },
      {
       "mota": "testua",
       "html": "(a) Demuestra que con esa información (es decir, sin conocer la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> de la ambulancia ni la frecuencia propia <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math> de la sirena) puede calcularse la velocidad <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> del coche. ¿Cómo?"
      },
      {
       "mota": "testua",
       "html": "(b) ¿Qué cambia en las respuestas anteriores si el observador va hacia la izquierda con velocidad escalar <math display=\"inline\"><mi>u</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "(c) Demuestra que usando <math display=\"inline\"><msub><mi>N</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> puede obtenerse una muy buena aproximación del valor de las frecuencias <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math>, si <math display=\"inline\"><mi>u</mi></math>, <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math> son mucho menores que la velocidad del sonido."
      },
      {
       "mota": "testua",
       "html": "(d) Si las últimas aproximaciones no son adecuadas, demuestra que, aunque se usen los batidos medidos con los valores 2, 3, ... de la velocidad <math display=\"inline\"><mi>u</mi></math>, como mucho se obtiene una relación entre las magnitudes <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math>, no el valor de cada una. <em>Nota</em>: en todos los casos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando un automóvil pasa junto a un físico en reposo, el cambio de la frecuencia de su claxon es del 10 %. ¿Cuál era la velocidad del automóvil?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre un detector situado en el suelo, a altura <math display=\"inline\"><mi>h</mi></math>, hay una fuente sonora. La frecuencia <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math> de la fuente es grande. Si la fuente se suelta en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, ¿cuál es la frecuencia que se mide en el detector en el instante <math display=\"inline\"><mi>t</mi></math>? ¿Cuáles son los valores máximo y mínimo de esta última? ¿Cuándo se alcanzan? <em>Nota</em>: desprecia el efecto del aire. La velocidad de la fuente es siempre subsónica."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un disco están fijos la fuente sonora I y el detector D, en las posiciones que se muestran en la figura. El disco gira con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. Si la frecuencia de la fuente es <math display=\"inline\"><mi>ν</mi></math>, ¿cuál es la que se mide en el detector? No hay viento."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/aaf0610e4a22859f.svg",
       "zabalera": 173
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un detector de movimiento emite ultrasonidos de 50 kHz. La alarma se activa si el cambio de frecuencia en la onda de eco medida en el detector es de <math display=\"inline\"><mrow><mi>±</mi><mn>10</mn></mrow></math> Hz o mayor. ¿A qué velocidad debe andar el ladrón prudente? <em>Nota</em>: haz hipótesis simplificadoras, como que el ladrón se acerca directamente al detector o se aleja directamente de él."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ondas de choque</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un avión que se mueve con velocidad <math display=\"inline\"><mi>a</mi></math> Mach pasa sobre un físico a altura <math display=\"inline\"><mi>h</mi></math>. ¿Cuál es la distancia entre ambos cuando este último oye el estampido de la onda de choque?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Reflexión y refracción</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una costa recta se quiere hacer una playa artificial, para ir a ella desde las ciudades A y B por caminos rectos. ¿Dónde debe situarse la playa para que la longitud total de los caminos sea lo más corta posible? <em>Nota</em>: usa regla y compás para hallar la ubicación."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/5527ba0a913f6271.svg",
       "zabalera": 182
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En verano un estudiante de física ha sido nombrado socorrista en la playa. Al ver que un bañista ha sufrido un calambre en el punto B, se dispone a ayudarle. Corriendo lo hace con velocidad <math display=\"inline\"><mn>8</mn></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y a nado con velocidad <math display=\"inline\"><mn>1</mn></math> m s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. ¿Qué recorrido debe elegir para llegar cuanto antes desde el punto S hasta el desafortunado bañista?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/5a3d34c3ba5ebfe5.svg",
       "zabalera": 258
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una onda atraviesa un medio limitado por dos superficies planas paralelas. Demuestra que el rayo que sale por el otro lado es paralelo al rayo de incidencia (véase la fotografía de la derecha de la figura 9.36). Halla la distancia transversal entre los dos rayos, si la anchura del medio es <math display=\"inline\"><mi>a</mi></math>, su índice de refracción <math display=\"inline\"><msub><mi>n</mi><mn>2</mn></msub></math>, el índice de refracción exterior <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> y el ángulo de incidencia <math display=\"inline\"><mi>θ</mi></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las masas por unidad de longitud de dos hilos unidos son <math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><mrow><mn>3</mn><mi>μ</mi></mrow></math>. Si se aplica en el extremo libre del primero una fuerza armónica transversal de 120 Hz, la longitud de onda de las ondas que se producen allí es de 10 cm. ¿Cuál es la velocidad de propagación en el primer hilo? ¿Y la longitud de onda en el segundo? Calcula los coeficientes de reflexión y de transmisión."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, si dos cuerdas están unidas (como hemos estudiado en el apartado 9.14.4), el cociente de las potencias medias de la onda transversal reflejada (refractada) y de la incidente, que se llama <strong>coeficiente de reflexión de la intensidad</strong> (<strong>coeficiente de transmisión de la intensidad</strong>), se escribe de este modo:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "ezezaguna",
         "izena": "zenb-ekuazioa"
        },
        {
         "mota": "ezezaguna",
         "izena": "zenb-ekuazioa"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Comprueba que la conservación de la energía es esta:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "ezezaguna",
         "izena": "zenb-ekuazioa"
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
       "html": "Considera de nuevo las dos cuerdas unidas del apartado 9.14.4. Escribe los coeficientes de reflexión y de transmisión de la amplitud y de la intensidad usando las impedancias de las cuerdas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los radios de dos alambres de hierro y de cobre son de 1 mm. Si se unen por un extremo, ¿cuáles son los coeficientes de reflexión y de transmisión? La onda incidente tiene una frecuencia de 10 Hz, una amplitud de 2 cm y la tensión es de 50 N. Escribe las ecuaciones de las tres ondas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los radios de dos alambres de cobre soldados son de 1 y 0.8 mm, respectivamente. Calcula los coeficientes de reflexión y de transmisión, en el caso de ondas que se propagan del primer alambre al segundo."
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
       "html": "Una onda sonora plana se propaga en el aire en dirección normal hasta incidir sobre la superficie del agua. Las condiciones de contorno adecuadas son la continuidad del desplazamiento y de la presión de la onda en la superficie de separación entre los dos medios. Demuestra que los coeficientes de reflexión y de transmisión son los siguientes: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>ρ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ρ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mi>R</mi><mi>.</mi></mrow></math> ¿Qué fracción del flujo de energía entra en el agua?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el fondo de un recipiente negro lleno hay una bombilla pequeña. La altura del agua es de <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0.5</mn></mrow></math> cm. Sobre el agua hay un cartón fino circular, como se muestra en la figura. ¿Cuál debe ser el radio mínimo del cartón para que la bombilla no se vea desde fuera?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/7a7b00a93970026c.svg",
       "zabalera": 224
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si el índice de refracción de una fibra óptica es <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1.5</mn></mrow></math>, ¿cuál puede ser el ángulo máximo (medido desde el eje de la fibra) de un rayo que se quiere enviar por la fibra?"
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
       "html": "Tras soldar un extremo de cada uno de dos alambres de distinta densidad, se pone el sistema bajo tensión. Cuando una onda armónica transversal llega al punto de unión, la amplitud de la onda reflejada es la mitad de la de la refractada. ¿Cuál es la proporción de la energía que se ha reflejado? ¿Y la que se ha transmitido? Calcula el cociente de las velocidades de las ondas en los dos alambres."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es el índice de refracción del prisma isósceles de la figura?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ec9f2b48f3c8fea2.svg",
       "zabalera": 205
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
       "html": "Un cuarto de cilindro que está sobre una mesa horizontal se ilumina con un haz de luz horizontal uniforme, como se muestra en la figura. Calcula el valor de <math display=\"inline\"><mi>x</mi></math> en función del ángulo <math display=\"inline\"><mi>θ</mi></math>, del radio <math display=\"inline\"><mi>R</mi></math> y del índice de refracción <math display=\"inline\"><mi>n</mi></math> del cilindro. Deduce que en la región <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>R</mi></mrow></math> la parte iluminada de la mesa viene dada por la condición siguiente: <math display=\"block\"><mrow><mfrac><mi>n</mi><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></msqrt></mfrac><mo>≤</mo><mfrac><mi>x</mi><mi>R</mi></mfrac><mo>≤</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/3402f67a4d0a1ea4.svg",
       "zabalera": 246
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se unen dos cuerdas y se ponen bajo tensión. Cuando una onda transversal va hacia la derecha, el coeficiente de reflexión de la amplitud es <math display=\"inline\"><mi>R</mi></math>. Si ahora la onda va hacia la izquierda, ¿cuáles serán los coeficientes de reflexión y de transmisión de la amplitud y de la energía?"
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
       "html": "La masa por unidad de longitud de una cuerda larga tensa es <math display=\"inline\"><mi>μ</mi></math> y tiene pegada en un punto una partícula puntual de masa <math display=\"inline\"><mi>m</mi></math>. Cuando la onda incidente de longitud de onda <math display=\"inline\"><mi>λ</mi></math> llega a la partícula, ¿qué proporción de la energía se refleja? ¿Qué ocurre en los límites <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>m</mi><mo>→</mo><mi>∞</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se han unido dos cuerdas largas en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. En ambas cuerdas la tensión es <math display=\"inline\"><mi>T</mi></math>. La masa por unidad de longitud de la cuerda izquierda es <math display=\"inline\"><msub><mi>μ</mi><mn>1</mn></msub></math>. Un pulso cuadrado se propaga de izquierda a derecha y en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> está como se indica en la parte superior de la figura. Halla cuál es el instante <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> que corresponde a la configuración que se ve abajo, en función de los demás datos. ¿Cuál es la densidad <math display=\"inline\"><msub><mi>μ</mi><mn>2</mn></msub></math> por unidad de longitud de la cuerda derecha? ¿Qué proporción de la energía se refleja? ¿Y cuál se transmite?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/14feb7c581e20e6f.svg",
       "zabalera": 302
      },
      {
       "mota": "testua",
       "html": "Calcula la posición, la anchura, la amplitud y la velocidad que tiene el pulso transmitido en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math>, para completar la figura de abajo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se han unido dos cuerdas, se han puesto bajo tensión y se ha producido una onda transversal. ¿Puede ser <math display=\"inline\"><mrow><mi>R</mi><mo>&gt;</mo><mn>1</mn></mrow></math> el coeficiente de reflexión?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Prisma de Porro",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El prisma de la figura se usa en óptica (en los prismáticos, por ejemplo). ¿Cómo puede ser el índice de refracción del prisma? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos cuerdas de la figura están unidas en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. Tras ponerlas bajo tensión, se envía un pulso desde la izquierda. Si más tarde, en un instante, está en la configuración de la figura, calcula los coeficientes de reflexión y de transmisión y dibuja el pulso incidente."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/5f4d4d604c15e19a.svg",
       "zabalera": 292
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo debe elegirse el ángulo <math display=\"inline\"><mi>α</mi></math> para que desaparezca el rayo <math display=\"inline\"><mi>T</mi></math>? ¿Cuándo desaparecerá para todo <math display=\"inline\"><mi>α</mi></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/583ec01586017123.svg",
       "zabalera": 162
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La tensión de la cuerda larga de la figura es <math display=\"inline\"><mi>T</mi></math> y las masas por unidad de longitud <math display=\"inline\"><mi>μ</mi></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>μ</mi></mrow></math> y <math display=\"inline\"><mi>μ</mi></math>, respectivamente. Cuando se envía desde la izquierda una onda armónica transversal de frecuencia <math display=\"inline\"><mi>ν</mi></math>, no hay onda reflejada en el tramo (a). Calcula la longitud <math display=\"inline\"><mi>L</mi></math>. ¿Cuál es la proporción de la energía transmitida al tramo (c)?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/7f9f0b73646365b0.svg",
       "zabalera": 275
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La madera es buena conductora del sonido (pon la oreja en una mesa de madera y pide a un amigo que frote el borde lejano). Entonces, ¿por qué cerramos la puerta para que los de fuera no oigan lo que decimos?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Reflexión y polarización</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la onda electromagnética reflejada no puede estar polarizada en el plano de incidencia (si la onda incidente no lo estaba, al menos)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La polarización de la onda que se refleja en una lámina de plástico es total cuando el ángulo de incidencia es <math display=\"inline\"><mrow><mn>51</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Cuál es el índice de refracción del plástico?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando la polarización de la onda que se refleja en una lámina de plástico es total, se refleja el 8.5 % de la intensidad del haz incidente. ¿Cuál es el grado de polarización del haz refractado?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Interferencia</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "A veces los radioastrónomos se valen de un sistema formado por dos radiotelescopios iguales. Las direcciones de las antenas y la distancia relativa <math display=\"inline\"><mi>a</mi></math> pueden cambiar, pero las antenas son siempre paralelas entre sí. Las dos señales recibidas por las antenas se mezclan en la sala de control. Demuestra que la señal así obtenida es máxima cuando las direcciones de incidencia cumplen la condición <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mi>/</mi><mi>a</mi></mrow></math>. El interferómetro doble de Green Bank trabajaba con una longitud de onda de 11 cm y la mayor distancia entre las dos antenas era de 2700 m. ¿Cuál era el intervalo angular correspondiente al máximo central, cuando la distancia era máxima?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la diferencia de caminos mínima para que aparezca un desfase <math display=\"inline\"><mi>π</mi></math> entre dos rayos de una luz de 600 nm de longitud de onda? ¿Cuál es el desfase cuando la diferencia de caminos es de 800 nm?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al enviar luz de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>589</mn></mrow></math> nm contra dos rendijas finas, en una pantalla situada a 3 m se ven 28 franjas luminosas por centímetro. ¿Cuál es la distancia entre las rendijas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las potencias acústicas de los altavoces <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>, que emiten sonido de modo isótropo, son <math display=\"inline\"><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> W y <math display=\"inline\"><mrow><mn>9</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> W, respectivamente, y ambos vibran en fase con una frecuencia de 172 Hz. El punto <math display=\"inline\"><mi>C</mi></math> está en el segmento que une los altavoces, a 4 m de <math display=\"inline\"><mi>A</mi></math> y a 3 m de <math display=\"inline\"><mi>B</mi></math>. Calcula la diferencia de fase de las dos señales en el punto <math display=\"inline\"><mi>C</mi></math> y la intensidad del sonido si los dos altavoces están encendidos, si se apaga <math display=\"inline\"><mi>B</mi></math>, y cuando se apaga <math display=\"inline\"><mi>A</mi></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El radio de una bahía semicircular es de 1500 m y, para protegerla de olas de 6 m de longitud de onda paralelas a la costa, se han construido los muelles que se muestran en la figura. Si <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>6</mn></mrow></math>, ¿cómo debe elegirse la distancia <math display=\"inline\"><mi>d</mi></math> entre los pasos para que la lancha situada en el punto <math display=\"inline\"><mi>A</mi></math> no sufra olas? ¿Qué le ocurrirá a la que está en el punto <math display=\"inline\"><mi>B</mi></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/69a8354773b1c632.svg",
       "zabalera": 284
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los lados de un triángulo que tiene en los vértices tres fuentes sincrónicas iguales son de longitud <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>. Calcula las diferencias de fase que se miden en una pantalla muy lejana en las dos direcciones de la figura."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ff0cbde6b958d02e.svg",
       "zabalera": 237
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud de onda de la fuente sonora <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mi>λ</mi></math> y está a una distancia pequeña <math display=\"inline\"><mi>d</mi></math> de una pared plana reflectora. Demuestra que se obtendría el mismo diagrama de interferencia así producido si, tras poner al otro lado de la pared, a distancia <math display=\"inline\"><mi>d</mi></math>, una fuente <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> igual, se quitara la pared, si la fuente imagen emite con un desfase de valor <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Compara la interferencia obtenida en este caso con la que se produce usando dos fuentes sincrónicas iguales en lugar de <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>."
      },
      {
       "mota": "testua",
       "html": "Una cadena de alta fidelidad <math display=\"inline\"><mi>S</mi></math> se coloca a <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0.3</mn></mrow></math> m de la pared, como se muestra en la figura. Si nos sentamos a <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>3.6</mn></mrow></math> m del equipo, con la cabeza a <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0.9</mn></mrow></math> m de la pared, ¿qué frecuencias se debilitarán por la interferencia?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/a6f22716ae7f9b2a.svg",
       "zabalera": 97
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Espejo de Lloyd",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la figura se muestra un instrumento para producir interferencias con una sola fuente. Cerca de un espejo dieléctrico (o metálico) horizontal se coloca una rendija larga fina horizontal. Halla dónde aparecen el máximo y el mínimo de interferencia más próximos al espejo. ¿Cuántas franjas oscuras se ven por centímetro si <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn></mrow></math> mm, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math> m y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>600</mn></mrow></math> nm?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/94c284a736175b5c.svg",
       "zabalera": 262
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos fuentes sonoras isótropas iguales de 2000 Hz están siempre en fase, a 40 cm, y emiten una potencia de 1 W. ¿Qué intensidad llegará a una pared situada a 10 m de cada fuente? ¿Qué ocurrirá en el punto en el que aparece el máximo de intensidad de primer orden, si se coloca otra fuente igual en el punto medio de las dos anteriores? Halla el cociente de las intensidades que se obtienen en el máximo de orden cero con dos y con tres fuentes. ¿Qué ocurre si las fuentes no son coherentes?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El vidrio de índice de refracción <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1.6</mn></mrow></math> de una lente se cubre con una capa de MgF<math display=\"inline\"><msub><mrow></mrow><mn>2</mn></msub></math> de índice <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1.38</mn></mrow></math> para que se refleje lo menos posible la luz de 540 nm. ¿Cuál es el grosor mínimo de la capa? ¿Se debilitará alguna otra longitud de onda visible reflejada? <em>Nota</em>: considera solo la incidencia normal."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, si la luz incidente, en lugar de perpendicular, se propaga en una dirección que forma un ángulo <math display=\"inline\"><mi>α</mi></math> con la normal a la pantalla con dos rendijas, los máximos de interferencia se producen en las direcciones <math display=\"inline\"><mi>θ</mi></math> que cumplen la siguiente condición: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>m</mi><mfrac><mi>λ</mi><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tres rendijas finas situadas a distancias iguales se iluminan con un rayo láser normal. Al tapar la rendija de un extremo, es el orden del máximo del lugar donde aparece el máximo de primer orden. Ahora, tapando la rendija central, si las de los extremos se ensanchan, ¿dónde aparecerá el máximo de primer orden? ¿Cuál es, en estas nuevas condiciones, el orden del máximo que aparece en el punto donde antes estaba el primer máximo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un experimento de Young, se iluminan dos rendijas estrechas paralelas situadas a <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>0.2</mn></mrow></math> mm de distancia con rayos normales de un láser de He-Ne (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.6</mn><mi>μ</mi></mrow></math>m) y la interferencia se ve en una pantalla situada a <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math> m de distancia."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/fd936e00b5ff2be7.svg",
       "zabalera": 281
      },
      {
       "mota": "testua",
       "html": "(a) ¿Cuáles son las intensidades en los puntos <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1.5</mn></mrow></math> mm y <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>6</mn></mrow></math> mm, en función de la intensidad <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math> que se obtendría en el caso de una sola rendija?"
      },
      {
       "mota": "testua",
       "html": "(b) Ahora se coloca delante de la rendija superior una lámina estrecha transparente de caras paralelas. El índice de refracción de la lámina es <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1.5</mn></mrow></math> y su grosor <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>9.0</mn><mi>μ</mi></mrow></math>m. ¿Qué ocurre ahora, si se desprecia el cambio de intensidad que sufre en la lámina el rayo superior?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es constructiva la interferencia producida por dos fuentes coherentes en fase en todo el espacio?"
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
       "html": "Dos extremos de dos láminas de vidrio iguales se tocan y entre los otros dos hay una tira fina de metal, como se muestra en la figura (sin respetar la escala). El vidrio se ilumina desde arriba con luz de 546 nm. ¿Cuántas franjas de interferencia oscuras se ven por centímetro en la luz reflejada?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/a95dbb7766d08ca1.svg",
       "zabalera": 249
      },
      {
       "mota": "testua",
       "html": "<em>Nota</em>: las láminas son más gruesas que la longitud de coherencia."
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
       "html": "La frecuencia de una fuente sonora isótropa es de 170 Hz y se ha colocado a un metro de una pared. Consideremos el plano horizontal que pasa por la fuente. Teniendo en cuenta el sonido reflejado en la pared, dibuja las direcciones de los máximos y mínimos de intensidad en dicho plano, a gran distancia de la fuente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la forma geométrica de las superficies nodales producidas por dos fuentes isótropas iguales coherentes?"
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
       "html": "(a) Usa el resultado del problema 9.115 para esbozar los lugares geométricos de los máximos y mínimos de la intensidad del problema 9.114 a todas las distancias."
      },
      {
       "mota": "testua",
       "html": "(b) Elige el origen del triedro en la fuente y el eje <math display=\"inline\"><mrow><mi>O</mi><mi>Z</mi></mrow></math> perpendicular a la pared y hacia ella. Usa coordenadas polares esféricas para calcular la ecuación de los lugares geométricos mencionados (en todo el espacio). Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Qué ocurre en el experimento de Young al colocar un polarizador delante de cada rendija, si los ejes de transmisión de ambos son (a) perpendiculares, (b) paralelos?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Anillos de Newton",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una lente de radio de curvatura muy grande se pone sobre una lámina de vidrio, como se muestra en la figura. Se ilumina desde arriba en dirección vertical con luz monocromática. Demuestra que desde arriba se ven anillos luminosos y oscuros alternados, debido al aire entre los dos vidrios. Calcula los radios de los anillos luminosos. ¿Cómo sería el diagrama de transmisión visto desde abajo?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ed42d5c898d80142.svg",
       "zabalera": 211
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
       "html": "Las tres rendijas largas iguales de la figura se iluminan con un láser de longitud de onda <math display=\"inline\"><mi>λ</mi></math>. ¿Dónde aparecerán los máximos y los mínimos en la pantalla lejana <math display=\"inline\"><mi>P</mi></math>? ¿Cuál será la intensidad en los máximos y en los mínimos? ¿Cuál será la anchura de los máximos principales? ¿Qué hay en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: un máximo, un mínimo o un punto intermedio?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/927df3695f24cd0f.svg",
       "zabalera": 287
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Trombón de Quincke",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El tubo en forma de «u» que está a la derecha del instrumento de la figura es móvil, como en un trombón. Si se conoce la velocidad <math display=\"inline\"><mi>v</mi></math> del sonido, ¿cómo puede usarse ese instrumento para medir la frecuencia del diapasón?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/a00e9cf44986e288.svg",
       "zabalera": 160
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Entre dos láminas de vidrio rectas se ha puesto un hilo cilíndrico fino, como se muestra en la figura. Iluminando desde arriba, en vertical, con luz monocromática de 600 nm, se ven 20 franjas luminosas entre los puntos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> en la luz reflejada."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/47076a065952d74a.svg",
       "zabalera": 182
      },
      {
       "mota": "testua",
       "html": "(a) ¿Cuál es el diámetro del hilo? Calcula el error máximo de la medida."
      },
      {
       "mota": "testua",
       "html": "(b) ¿Cómo cambian las respuestas si las 20 franjas se ven desde abajo, en luz transmitida? <em>Nota</em>: en la figura se ha cambiado la escala para verlo mejor: el diámetro real del hilo es mucho menor que el grosor y la longitud de las láminas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se colocan cinco antenas isótropas iguales a distancias iguales en una recta, siendo la distancia entre dos consecutivas igual a la longitud de onda. Las cinco antenas emiten en fase. Considera el plano horizontal que pasa por las antenas y esboza el gráfico polar de la intensidad, como se ha hecho en otro caso en la figura 9.50."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre una lámina de vidrio horizontal hay una capa líquida fina de índice de refracción <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>1</mn></mrow></math>. El sistema se ilumina desde arriba en dirección normal con luz monocromática de longitud de onda variable <math display=\"inline\"><mi>λ</mi></math> y se ve la luz reflejada en la misma dirección. Al cambiar <math display=\"inline\"><mi>λ</mi></math>, se ve un mínimo cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow></math> y la intensidad va aumentando con <math display=\"inline\"><mi>λ</mi></math>, hasta que se obtiene un máximo cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(a) ¿Cómo puede saberse, valiéndose de esta información, cuál es la anchura <math display=\"inline\"><mi>d</mi></math> de la capa y si su índice de refracción es menor o mayor que el del vidrio?"
      },
      {
       "mota": "testua",
       "html": "(b) ¿Cómo es <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><msub><mi>n</mi><mtext mathvariant=\"normal\">beira</mtext></msub></mrow></math> cuando <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>500</mn></mrow></math> nm y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>600</mn></mrow></math> nm?"
      },
      {
       "mota": "testua",
       "html": "(c) ¿Y si son <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>600</mn></mrow></math> nm y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>700</mn></mrow></math> nm?"
      },
      {
       "mota": "testua",
       "html": "(d) ¿Y con los valores <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>530</mn></mrow></math> nm y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>790</mn></mrow></math> nm que se dan en un libro?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las fuentes de ondas de los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>±</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son iguales y sincrónicas y emiten sonido de longitud de onda <math display=\"inline\"><mi>λ</mi></math>. La interferencia es destructiva en las semirrectas <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>. Estudiemos qué ocurre en el plano de la figura."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/dc1de64fe0557f1e.svg",
       "zabalera": 241
      },
      {
       "mota": "testua",
       "html": "(a) Demuestra que la distancia <math display=\"inline\"><mi>a</mi></math> entre las fuentes debe ser un valor de una sucesión creciente <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>a</mi><mn>2</mn></msub><mo>&lt;</mo><mi>⋅</mi></mrow></math> que debes hallar."
      },
      {
       "mota": "testua",
       "html": "(b) Dibuja los lugares geométricos de los puntos de interferencia constructiva y destructiva en los casos <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msub><mi>a</mi><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(c) A grandes distancias, ¿en qué direcciones se oirán los máximos y los mínimos en esos dos casos?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos fuentes isótropas emiten en oposición de fase sonido de longitud de onda <math display=\"inline\"><mi>λ</mi></math>. La distancia entre las fuentes es <math display=\"inline\"><mrow><mn>5</mn><mi>λ</mi><mi>/</mi><mn>4</mn></mrow></math>. Elijamos un plano que contiene las dos fuentes. Esboza el diagrama polar de la intensidad medida a gran distancia. Calcula la dirección y la intensidad de <em>todos</em> los máximos y mínimos."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las tres antenas de radio de la figura son iguales y sincrónicas. Cuando la longitud de onda es <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>, se mide un máximo principal en la dirección de la figura. ¿Cuál es el valor mínimo de la distancia <math display=\"inline\"><mi>a</mi></math>? ¿Y el valor del máximo medido, si con una sola antena se medía <math display=\"inline\"><msub><mi>I</mi><mn>1</mn></msub></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/bfa346de2effd75e.svg",
       "zabalera": 225
      },
      {
       "mota": "testua",
       "html": "Sin cambiar esa distancia mínima, si <math display=\"inline\"><mi>λ</mi></math> aumenta poco a poco, ¿qué se medirá en la dirección mencionada? Calcula cuándo se obtienen <em>todos</em> los mínimos y máximos y cuáles son sus valores. Dibuja la gráfica de la función <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuatro antenas sincrónicas iguales se han colocado en los vértices de un cuadrado y emiten en la dirección indicada en la figura. La intensidad medida a gran distancia es <math display=\"inline\"><mrow><mn>16</mn><mi>I</mi></mrow></math>, siendo <math display=\"inline\"><mi>I</mi></math> la medida cuando emite una sola antena. Si la longitud de onda de las emisiones es <math display=\"inline\"><mi>λ</mi></math>, ¿cuáles pueden ser los valores de la longitud <math display=\"inline\"><mi>a</mi></math> del lado del cuadrado? Sin cambiar estos últimos, ¿cómo debe elegirse la longitud de onda <math display=\"inline\"><msup><mi>λ</mi><mo>′</mo></msup></math> para que la intensidad medida a gran distancia sea mínima?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/e774fcd6351ef1e8.svg",
       "zabalera": 141
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se han colocado tres antenas isótropas iguales a distancias iguales en una recta. Las tres emiten en fase, con una longitud de onda que es el doble de la distancia entre las consecutivas. Considera el plano horizontal que pasa por las antenas y dibuja el gráfico polar de la intensidad. Halla las posiciones y los valores de <em>todos</em> los máximos y mínimos de la intensidad en ese plano."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos antenas iguales emiten de modo isótropo con longitud de onda <math display=\"inline\"><mi>λ</mi></math>. La distancia entre las antenas es <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>4</mn></mrow></math>. Calcula y dibuja el diagrama polar de la intensidad medida a gran distancia en los tres casos siguientes:"
      },
      {
       "mota": "testua",
       "html": "(a) Las dos emiten en fase."
      },
      {
       "mota": "testua",
       "html": "(b) Emiten en oposición de fase."
      },
      {
       "mota": "testua",
       "html": "(c) Están en cuadratura (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tres antenas sincrónicas iguales emiten en la dirección indicada en la figura. Cuando la longitud de onda es <math display=\"inline\"><mi>λ</mi></math>, la intensidad medida a gran distancia es nueve veces mayor que la medida con una sola antena. ¿Cuánto vale <math display=\"inline\"><mi>a</mi></math>? Si ahora se cambia la longitud de onda, sin cambiar <math display=\"inline\"><mi>a</mi></math>, ¿cuándo se obtiene la intensidad mínima? ¿Cuál es ese valor mínimo?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ecf176238d25b37d.svg",
       "zabalera": 135
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tres fuentes isótropas iguales están colocadas en una recta y emiten de modo isótropo con longitud de onda <math display=\"inline\"><mi>λ</mi></math>. La distancia entre fuentes consecutivas es <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>λ</mi><mi>/</mi><mn>3</mn></mrow></math>. Dibuja el diagrama polar de la intensidad que se mide, a gran distancia, en todas las direcciones de un plano que contiene las tres fuentes. ¿En qué direcciones es máxima la intensidad? ¿Y mínima? ¿Cuáles son los valores de esos máximos y mínimos? ¿Qué ocurre si <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>λ</mi><mi>/</mi><mn>3</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando la cuña fina de la figura se ilumina desde arriba, en dirección perpendicular, con luz de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>600</mn></mrow></math> nm, se ven 50 líneas luminosas, desde arriba, en la luz reflejada. Estima el índice de refracción <math display=\"inline\"><mi>n</mi></math> de la cuña. ¿Cuántas líneas luminosas se verán desde abajo, en luz transmitida?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/7dd44aefa69d6dff.svg",
       "zabalera": 259
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El diapasón",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si una de las ramas de un diapasón que vibra se cubre con un tubo de cartón, sin tocar el metal, la intensidad que se oye desde todos los puntos es mayor. ¿Cómo puede entenderse esto?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/dcbc26bbd39da094.svg",
       "zabalera": 67
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Potencia total",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos fuentes de la figura son isótropas y están a distancia <math display=\"inline\"><mi>a</mi></math>. Ambas emiten con longitud de onda <math display=\"inline\"><mi>λ</mi></math>, pero con desfase <math display=\"inline\"><mi>δ</mi></math>. Cuando emite solo una de las fuentes, la potencia total es <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mn>0</mn></msub></math>. Supongamos, ahora, que emiten las dos. Calcula, <em>a gran distancia</em> (<math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>a</mi></mrow></math>), el desfase entre las ondas y la intensidad, en función de <math display=\"inline\"><mi>r</mi></math> y <math display=\"inline\"><mi>θ</mi></math>. Usa coordenadas polares esféricas para calcular la potencia que pasa a través de una superficie esférica de radio grande <math display=\"inline\"><mi>r</mi></math>. Comprueba que es esta:"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/019fe19e5b2a2f22.svg",
       "zabalera": 182
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝒫</mi><mo>=</mo><mn>2</mn><msub><mi mathvariant=\"script\">𝒫</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>a</mi></mrow><mrow><mi>k</mi><mi>a</mi></mrow></mfrac><mi mathvariant=\"normal\">cos</mi><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "¿Cómo queda este resultado en los casos <math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>λ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mo>≫</mo><mi>λ</mi></mrow></math>? Y, en cada caso, cuando <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mi>π</mi></math>. Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud de onda de las dos antenas isótropas de la figura es <math display=\"inline\"><mi>λ</mi></math>, pero la de la izquierda emite con un adelanto <math display=\"inline\"><mi>δ</mi></math>: <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>δ</mi><mo>&lt;</mo><mi>π</mi></mrow></math>. Se quieren elegir la distancia <math display=\"inline\"><mi>a</mi></math> entre las antenas y el adelanto <math display=\"inline\"><mi>δ</mi></math> de modo que la intensidad emitida en la dirección <math display=\"inline\"><mi>+</mi></math> de la figura sea lo mayor posible y la emitida en la dirección <math display=\"inline\"><mi>−</mi></math> lo menor posible."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/43ed8d299c7f3c7b.svg",
       "zabalera": 202
      },
      {
       "mota": "testua",
       "html": "¿Cuáles son los menores valores de <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>δ</mi></math> que pueden elegirse para ello? Esboza el diagrama polar de la intensidad en el plano de la figura en el caso mencionado. <em>Nota</em>: la potencia de las dos antenas es la misma."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ondas estacionarias</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Escribe el tercer modo normal de oscilación de una cuerda de extremos fijos como suma de dos ondas armónicas viajeras que se propagan hacia la izquierda y hacia la derecha."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la superposición <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>R</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de una onda que va hacia la derecha y de la reflejada puede escribirse también como superposición de dos ondas estacionarias (modos normales): <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El aire de un tubo largo está a una presión de 1 atm, a 77 °C. Un extremo está abierto y el otro cerrado con un pistón móvil. Un diapasón de 500 Hz vibra junto al extremo abierto. Hay resonancia cuando el pistón está a 18.75, 56.25 y 93.75 cm de ese extremo. Calcula la velocidad del sonido y el cociente <math display=\"inline\"><mrow><msub><mi>c</mi><mi>p</mi></msub><mi>/</mi><msub><mi>c</mi><mi>v</mi></msub></mrow></math> a esa temperatura, teniendo en cuenta que la masa molecular del aire es de 28.8 g/mol."
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
       "html": "La masa por unidad de longitud de la cuerda tensa de la figura es <math display=\"inline\"><mi>μ</mi></math> y la tensión <math display=\"inline\"><mi>T</mi></math>. El punto medio se lleva a una pequeña distancia <math display=\"inline\"><mi>d</mi></math> de la posición de equilibrio y se suelta cuando todo vuelve a estar en reposo. Usa el desarrollo de Fourier adecuado para expresar la onda que se produce. Calcula la energía total de vibración, que es igual a la energía potencial que tenía al principio."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/6924d545b8844686.svg",
       "zabalera": 224
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un hilo de acero entre dos extremos fijos mide 40 cm de longitud y su diámetro es de 1 mm. Si la frecuencia fundamental del hilo es de 440 Hz, ¿cuál es la tensión del hilo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia del do central es de 262 Hz. Si un tubo de órgano tiene un extremo abierto y el otro cerrado, ¿cómo debe ser su longitud para que produzca esa nota a 20 °C? ¿A qué temperatura producirá el do sostenido, es decir, la nota de frecuencia <math display=\"inline\"><mrow><mroot><mn>2</mn><mn>12</mn></mroot><msub><mi>ν</mi><mtext mathvariant=\"normal\">do</mtext></msub></mrow></math>? <em>Nota</em>: desprecia la prolongación del tubo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ondas perpendiculares",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las ondas dadas por las expresiones <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se propagan por una membrana. Demuestra que la velocidad de fase de la onda total es <math display=\"inline\"><mrow><msqrt><mn>2</mn></msqrt><mi>v</mi></mrow></math>. ¿Cuáles son la dirección y la longitud de onda? Demuestra que las rectas <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son líneas nodales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el caso de las membranas cuadradas los modos son degenerados, pues hay distintas elecciones de los números enteros <math display=\"inline\"><msub><mi>n</mi><mi>x</mi></msub></math> y <math display=\"inline\"><msub><mi>n</mi><mi>y</mi></msub></math> para obtener la misma frecuencia. Calcula la frecuencia y la degeneración de algunos modos iniciales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia el problema del ejercicio 9.143 en el caso de que las ondas se propaguen en un cubo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una cavidad hay radiación electromagnética en equilibrio. ¿Cuántos modos de vibración hay por unidad de volumen y en el intervalo <math display=\"inline\"><mrow><mn>1.0</mn><mo>×</mo><msup><mn>10</mn><mn>15</mn></msup></mrow></math>–<math display=\"inline\"><mrow><mn>1.2</mn><mo>×</mo><msup><mn>10</mn><mn>15</mn></msup></mrow></math> Hz?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un tubo tres frecuencias consecutivas son 1310, 1834 y 2358 Hz. ¿Cómo están los extremos del tubo: ambos abiertos o uno abierto y el otro cerrado? ¿Cuál es la frecuencia fundamental? ¿Y la longitud del tubo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La sección normal de un tubo largo es un rectángulo de lados <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>. Demuestra que la onda guiada armónica que se propaga a lo largo del tubo viene dada por la siguiente expresión: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>k</mi><mi>y</mi></msub><mi>y</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>k</mi><mi>z</mi></msub><mi>z</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>y</mi></msub><mo>=</mo><msub><mi>n</mi><mi>y</mi></msub><mfrac><mi>π</mi><mi>a</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>z</mi></msub><mo>=</mo><msub><mi>n</mi><mi>z</mi></msub><mfrac><mi>π</mi><mi>b</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Comprueba que la frecuencia debe ser mayor que <math display=\"block\"><mrow><msub><mi>ν</mi><mi mathvariant=\"normal\">min</mi></msub><mo>≡</mo><msqrt><mrow><mfrac><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><msup><mi>b</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mfrac><mi>v</mi><mn>2</mn></mfrac></mrow></math>. Halla los planos nodales correspondientes a las condiciones <math display=\"inline\"><mrow><msub><mi>n</mi><mi>y</mi></msub><mo>=</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>3</mn></mrow></math>. <em>Sugerencia</em>: prueba en la ecuación de ondas la solución de la forma <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, separa las variables y usa las condiciones de contorno."
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
       "html": "En una cuerda de longitud <math display=\"inline\"><mi>L</mi></math> con extremos fijos la tensión es <math display=\"inline\"><mi>T</mi></math>. Calcula, en el modo normal <math display=\"inline\"><mi>n</mi></math>, la energía cinética media y la energía mecánica de un elemento infinitesimal de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math>, cuando la amplitud es <math display=\"inline\"><msub><mi>y</mi><mn>0</mn></msub></math>. Demuestra que la energía mecánica total de la cuerda es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>C</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math>. ¿Cuál es la constante de proporcionalidad <math display=\"inline\"><mi>C</mi></math>?"
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
       "html": "La masa por unidad de longitud, la tensión y la longitud de la cuerda de la figura son <math display=\"inline\"><mi>μ</mi></math>, <math display=\"inline\"><mi>T</mi></math> y <math display=\"inline\"><mi>L</mi></math>, respectivamente. El extremo izquierdo se hace oscilar en el plano horizontal según la ley <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> y el derecho puede moverse sin rozamiento a lo largo de una varilla rígida horizontal mediante un anillo sin masa."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9ce64eccd540be55.svg",
       "zabalera": 274
      },
      {
       "mota": "testua",
       "html": "Prueba la solución estacionaria de la forma <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> en la ecuación de ondas para separar las variables y usa las condiciones de contorno adecuadas para obtener el movimiento transversal de la cuerda. ¿Cuáles son las frecuencias de resonancia? <em>Nota</em>: <math display=\"inline\"><mi>A</mi></math> es muy pequeño."
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
       "html": "Una cuerda homogénea de longitud <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> tiene dos extremos fijos y una bolita de masa <math display=\"inline\"><mi>m</mi></math> en el punto medio, como se ve en la figura. La masa de la cuerda es <math display=\"inline\"><mi>M</mi></math> y la tensión <math display=\"inline\"><mi>T</mi></math>. Como se ve, las condiciones de contorno que hay que usar junto con la ecuación de ondas serán estas: (a) que los dos extremos están fijos, (b) que en el punto medio la cuerda no se rompe y (c) la ecuación de movimiento de la bolita. Demuestra que hay dos tipos de ondas estacionarias:"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/067e9f8d076b92a6.svg",
       "zabalera": 258
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Halla qué condiciones deben cumplir las frecuencias normales (en un caso queda una ecuación trascendente que <em>no tienes que resolver</em>). Describe cómo son los modos normales. ¿Qué ocurre en los límites <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math> y <math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mi>M</mi></mrow></math>? <em>Nota</em>: considera solo perturbaciones transversales pequeñas y desprecia la gravedad."
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
       "html": "La longitud de la cuerda de la figura es <math display=\"inline\"><mi>L</mi></math>, la tensión <math display=\"inline\"><mi>T</mi></math> y la masa por unidad de longitud <math display=\"inline\"><mi>μ</mi></math>. Los extremos están atados a dos varillas verticales y estas están en una plataforma horizontal que oscila verticalmente según la ley <math display=\"inline\"><mrow><mi>H</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/2fc4c13f9992d1f1.svg",
       "zabalera": 293
      },
      {
       "mota": "testua",
       "html": "(a) Escribe la ecuación de ondas que cumple el desplazamiento vertical <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la cuerda y la velocidad de fase correspondiente."
      },
      {
       "mota": "testua",
       "html": "(b) ¿Cuáles son las condiciones de contorno que cumple?"
      },
      {
       "mota": "testua",
       "html": "(c) Prueba en la ecuación de ondas la solución estacionaria adecuada <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para separar las variables y aplica las condiciones de contorno para hallar la solución."
      },
      {
       "mota": "testua",
       "html": "(d) Calcula las frecuencias de resonancia y las longitudes de onda correspondientes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando se toca un instrumento de viento, su tono sube; pero en el caso de un instrumento de cuerda el tono baja. ¿Por qué?"
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
       "html": "Estudiemos de nuevo la cuerda del problema 9.29. Ahora el extremo libre se hace vibrar según la ley <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>. Calcula cuándo se produce resonancia y cómo es entonces la onda estacionaria."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/681fc39d9a398731.svg",
       "zabalera": 104
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La frecuencia fundamental de un tubo de órgano es de 400 Hz cuando los dos extremos están abiertos. Tras cerrar un extremo, ¿cuál será la frecuencia fundamental?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los puntos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> de la cuerda tensa de la figura se hacen oscilar en oposición de fase, según la ley <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>. Calcula la solución estacionaria y las frecuencias de resonancia. ¿Por qué está mal la figura? ¿Cómo debe elegirse <math display=\"inline\"><mi>ω</mi></math> para que la solución tenga tres nodos entre los puntos <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b439a390fe284c12.svg",
       "zabalera": 231
      },
      {
       "mota": "testua",
       "html": "<em>Nota</em>: la amplitud de las oscilaciones es pequeña, la tensión de la cuerda <math display=\"inline\"><mi>T</mi></math> y la masa por unidad de longitud <math display=\"inline\"><mi>μ</mi></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una cuerda de densidad <math display=\"inline\"><mi>μ</mi></math> por unidad de longitud está sometida a tensión entre dos extremos fijos. El valor de la tensión es <math display=\"inline\"><mi>T</mi></math>. Vibra en un plano en un modo normal. Con un estroboscopio se ha medido que el punto medio se mueve según la ley siguiente: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>.</mi></mrow></math> ¿Cuáles pueden ser los valores de la longitud <math display=\"inline\"><mi>L</mi></math> de la cuerda? ¿Cómo se escribe el desplazamiento de todos los puntos? ¿Cuántos son los nodos?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una cuerda tensa con dos extremos fijos hay una onda estacionaria. Calcula la energía mecánica total de la cuerda y comprueba que es constante del movimiento. Supongamos, ahora, que, en lugar de usar la expresión del problema 9.33, la densidad de energía potencial se escribe así: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>T</mi><mi>u</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Comprueba que esta expresión no cambia la energía potencial total."
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
       "html": "Los extremos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>±</mi><mi>L</mi></mrow></math> de la cuerda tensa de la figura están fijos y el punto medio se mueve según la ley <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>. Calcula la expresión de la onda estacionaria producida y los modos normales que se excitan en la resonancia."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/c3b1627e3ee29610.svg",
       "zabalera": 290
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>: como en el punto medio se aplica una fuerza externa, la ecuación de ondas homogénea solo se cumple en los intervalos <math display=\"inline\"><mrow><mi>−</mi><mi>L</mi><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Velocidad del sonido con un <em>smartphone</em>",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Podemos valernos del método de la fotografía 9.75 para medir la velocidad del sonido, usando un trozo de papel, un tubo de cartón y un <em>smartphone</em>, si en este último se instala una <em>app</em> que mide el espectro del sonido. La longitud del tubo es <math display=\"inline\"><mi>L</mi></math> y el radio <math display=\"inline\"><mi>R</mi></math>. Al arrugar el papel se produce un espectro continuo (irregular), pero en el tubo las frecuencias de resonancia —es decir, las frecuencias normales de las ondas estacionarias— se refuerzan y serán máximos en el espectro."
      },
      {
       "mota": "testua",
       "html": "(a) Usa la figura de la derecha (o, <strong>smallcaps[mucho mejor, el experimento que hayas hecho tú]</strong>) para estimar las frecuencias de los primeros máximos."
      },
      {
       "mota": "irudia",
       "oina": "Sistema y espectro del problema 9.159.",
       "src": "../media/irudiak/ee40c92526becd2a.svg",
       "zabalera": 299
      },
      {
       "mota": "testua",
       "html": "(b) ¿Cuál es la velocidad <math display=\"inline\"><mi>v</mi></math> del sonido que se obtiene con cada frecuencia, si se usa la fórmula (9.319) del texto?"
      },
      {
       "mota": "testua",
       "html": "(c) Cuando el tubo no es muy muy estrecho —es decir, si <math display=\"inline\"><mrow><mi>R</mi><mo>≪</mo><mi>L</mi></mrow></math> no se cumple—, la presión atmosférica no se recupera en los extremos abiertos, sino un poco más lejos, a una distancia <math display=\"inline\"><mrow><mi>a</mi><mo>≈</mo><mn>0.61</mn><mi>R</mi></mrow></math>. Usa la fórmula <math display=\"block\"><mrow><msub><mi>ν</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mfrac><mi>v</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>+</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para obtener mejores resultados."
      },
      {
       "mota": "testua",
       "html": "(d) Compara los resultados con la velocidad dada por la fórmula (9.88)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Difracción</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para hacer un diagrama de difracción de Fraunhofer se ha puesto la pantalla a 140 cm de la rendija. Si la distancia entre el máximo central y el de primer orden es <math display=\"inline\"><mrow><msup><mn>10</mn><mn>4</mn></msup><mi>λ</mi></mrow></math>, ¿cuál es la anchura de la rendija?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando una luz que es la superposición de dos ondas monocromáticas incide en una rendija de difracción, el máximo de tercer orden del componente de 440 nm se produce sobre el máximo de segundo orden del otro componente. Calcula la longitud de onda del segundo componente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un láser de rubí emite luz de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>694</mn></mrow></math> nm a través de un orificio circular de 2 cm contra la Luna. ¿Cuál es el área que ilumina en esta última?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Valora la distancia mínima a la que está un automóvil si el ojo no distingue las dos luces."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El diámetro del telescopio espacial Hubble es de 2 m. ¿Dónde habría que ponerlo para que no fuera capaz de distinguir el Sol y Júpiter?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El diámetro del radiotelescopio de Green Bank es de unos 100 m. ¿Cuál es su poder de resolución en radianes y en minutos de arco (que usan los astrónomos)? <em>Nota</em>: recuerda el problema 9.99."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que cuando la anchura <math display=\"inline\"><mi>b</mi></math> de una rendija es muy pequeña (¿qué quiere decir esto?) su radiación es isótropa en el plano perpendicular a su longitud. Sin decirlo hemos hecho esa hipótesis al resolver el problema 9.103. ¿Cuál es la mayor anchura de los pasos de allí para que la hipótesis sea legítima?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un experimento de dos rendijas hay 13 máximos de <em>interferencia</em> en el máximo central de <em>difracción</em>. ¿Cuántos habrá (aproximadamente) en un máximo de difracción de primer orden?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las magnitudes de las dos estrellas del sistema doble Mizar, de la Osa Mayor, son parecidas. La distancia angular entre las estrellas es de 14&#x27;&#x27;. Si de las estrellas solo viniera luz de 400 nm, ¿cuál sería el diámetro mínimo de la pupila para distinguir las dos estrellas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el experimento de las dos rendijas, ¿cuál es el número mínimo de máximos principales de interferencia que hay dentro del máximo central de difracción?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las tres rendijas paralelas de la figura tienen una anchura de 1 cm y la distancia entre las consecutivas es de 2 cm. Se iluminan con microondas de <math display=\"inline\"><mrow><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> Hz, en dirección normal. Al tapar las dos rendijas de los extremos, a gran distancia, en la dirección <math display=\"inline\"><mi>O</mi></math>, la intensidad es <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math> W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>. Cuando las tres rendijas están destapadas, calcula:"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/4a9aa3994f6d0f43.svg",
       "zabalera": 272
      },
      {
       "mota": "testua",
       "html": "(a) La intensidad en la dirección <math display=\"inline\"><mi>O</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(b) La anchura angular del máximo central de difracción."
      },
      {
       "mota": "testua",
       "html": "(c) La anchura angular del máximo principal de interferencia de orden cero."
      },
      {
       "mota": "testua",
       "html": "(d) La dirección y la intensidad del máximo principal de interferencia de primer orden."
      },
      {
       "mota": "testua",
       "html": "(e) La dispersión angular que se da en el último máximo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Uno de los diagramas de difracción de la figura se ha hecho con dos rendijas y el otro con una sola. ¿Cuál es cuál?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/7cd642bc85bb20b4.svg",
       "zabalera": 255
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Redes de difracción</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una onda de 500 nm de longitud de onda incide en dirección normal sobre una red de difracción. El máximo de tercer orden del diagrama de difracción se mide en un ángulo de <math display=\"inline\"><mrow><mn>32</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Cuántas líneas hay por centímetro en la red? ¿Cuántos máximos pueden observarse en esta situación?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La anchura de las rendijas de una red de difracción es de <math display=\"inline\"><mrow><mn>0.2</mn><mi>μ</mi></mrow></math>m y la distancia entre ellas es 10 veces mayor. Valora la intensidad relativa de los máximos de los tres primeros órdenes en el caso de la luz roja (650 nm). ¿Qué ocurre en los casos de la luz verde (550 nm) y violeta (400 nm)?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, con incidencia normal, el máximo violeta de tercer orden aparece (aproximadamente) sobre el rojo del espectro de segundo orden, sea cual sea la distancia entre las líneas de la red de difracción."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una red de difracción tiene 2000 líneas por centímetro y se usa para estudiar el espectro del mercurio. ¿Cuál deberá ser la anchura del haz que ilumina la red para poder distinguir las líneas de 579 y 577 nm en el espectro de primer orden?"
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
       "html": "Se usa una red de difracción para estudiar el espectro entre 480 y 500 nm. Si la anchura angular del espectro de tercer orden es <math display=\"inline\"><mrow><mn>12</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, ¿cuántas líneas hay por centímetro? ¿Cuántos espectros pueden verse?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La distancia entre las franjas de una red de difracción es <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1.5</mn><mi>μ</mi></mrow></math>m y se ilumina con un láser de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>600</mn></mrow></math> nm. ¿Puede ocurrir que no haya luz en la dirección que cumple la condición <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>λ</mi></mrow></math>? ¿Y si <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>? ¿Y si <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>3</mn><mi>λ</mi></mrow></math>?"
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
       "html": "Al iluminar una red de difracción de 5000 líneas/cm con la luz amarilla del sodio, solo se transmite luz en cinco direcciones distintas. ¿Cómo puede ser la anchura de las líneas? ¿Cuál es el diámetro mínimo del haz de luz para poder distinguir los dos componentes de las líneas D del sodio (<math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>589.0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>589.6</mn></mrow></math> nm)?"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FIGURA 9.76</strong> Un CD iluminado por un láser rojo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando un CD se ilumina en dirección normal con un láser rojo (<math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>650</mn></mrow></math> nm), se ven cinco rayos reflejados. ¿Qué puede decirse de la anchura de la pista valiéndose de esto? <em>Nota</em>: en la figura 9.76 el plano de incidencia es el del goniómetro. Qué es lo que se ve en el plano del CD."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una red de difracción la distancia entre las rendijas es el doble de su anchura. Calcula las intensidades relativas que tiene una línea espectral en los distintos órdenes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Puede ocurrir que en un espectro producido por una red de difracción aparezca una franja oscura porque el máximo principal de la longitud de onda correspondiente está bajo un mínimo de difracción?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una red de difracción se ilumina con luz blanca normal y el espectro se ve en una pantalla situada a 8 m. En el espectro de segundo orden la distancia entre las longitudes de onda de 520 y 590 nm es de <math display=\"inline\"><mn>8.4</mn></math> cm. Halla cuántas líneas hay por centímetro y la distancia entre esas longitudes de onda en los espectros de primer y tercer orden. <em>Nota</em>: haz las aproximaciones adecuadas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La red de difracción de un espectrómetro tiene 300 líneas por milímetro. Una línea espectral que se ve en la dirección <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>24.46</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> es la superposición de dos componentes: uno rojo (entre 640 y 750 nm) y otro azul (entre 360 y 490 nm). Calcula las longitudes de onda de los dos componentes. ¿Se verán los dos a la vez en alguna otra dirección?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Difracción de rayos X</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La distancia entre los planos principales del cristal de NaCl es <math display=\"inline\"><mrow><mn>2.83</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m. La difracción de primer orden se produce en el ángulo <math display=\"inline\"><mrow><mn>10</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Cuáles son la longitud de onda de los rayos X y la dirección de la difracción de segundo orden?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que para que haya difracción en planos situados a distancia <math display=\"inline\"><mi>d</mi></math> hay que usar rayos X de longitud de onda <math display=\"inline\"><mrow><mi>λ</mi><mo>≤</mo><mn>2</mn><mi>d</mi></mrow></math>. Por eso no puede usarse la luz visible."
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
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La energía de los pulsos de luz que emite un láser de rubí es de <math display=\"inline\"><mn>0.3</mn></math> J y la duración <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math> s. La luz está polarizada linealmente y la longitud de onda es de 650 nm. El diámetro de la sección transversal del haz de luz es de <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> m. Calcula la amplitud del campo eléctrico. Tras atravesar un polarizador que forma un ángulo de <math display=\"inline\"><mrow><mn>60</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> con el plano de polarización del pulso, ¿cuál será la amplitud del campo eléctrico? Si al final el haz láser incide sobre una red de difracción, el máximo de segundo orden está en la dirección de <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y la mitad de la anchura del máximo central es <math display=\"inline\"><mrow><mn>0.573</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Calcula la distancia entre las líneas de la red y el número de franjas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se han colocado diez radiotelescopios iguales en una recta de este a oeste, a distancias iguales de <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>800</mn></mrow></math> m. El diámetro de los platos es de 25 m y miran hacia el sur, para detectar la emisión de longitud de onda de 6 cm de la radiofuente que hay en esa dirección. Por la rotación de la Tierra, la fuente se está moviendo de este a oeste."
      },
      {
       "mota": "testua",
       "html": "(a) Dibuja la intensidad medida en el interferómetro de diez telescopios, en función de la dirección <math display=\"inline\"><mi>θ</mi></math> medida desde el sur. Recuerda que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(b) Tras detectar el máximo de orden cero, ¿cuál es la distancia angular que ha recorrido la fuente cuando se detecta de nuevo, en el máximo de primer orden?"
      },
      {
       "mota": "testua",
       "html": "(c) ¿Cuál es la anchura del máximo de orden cero? ¿Y la del de segundo orden?"
      },
      {
       "mota": "testua",
       "html": "(d) Si el diámetro de los telescopios fuera de 100 m, ¿mejoraría la resolución angular?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una cuerda de piano realista, si la tensión es <math display=\"inline\"><mi>T</mi></math> y la masa por unidad de longitud <math display=\"inline\"><mi>μ</mi></math>, la relación de dispersión se escribe así: <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><msqrt><mrow><mfrac><mi>T</mi><mi>μ</mi></mfrac><mo>+</mo><mi>α</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> donde la constante <math display=\"inline\"><mi>α</mi></math> depende de la rigidez de la cuerda. Los dos extremos de la cuerda están fijos en los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mi>L</mi></math>. En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> está en reposo y el desplazamiento transversal es este: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>4</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>9</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a) Escribe la velocidad de fase de la onda, en función de <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>μ</mi></math>, <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>T</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(b) Escribe la velocidad de grupo de la onda, en función de <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mi>μ</mi></math>, <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>T</mi></math>."
      },
      {
       "mota": "testua",
       "html": "(c) Si se suelta de la posición mencionada, sin velocidad, en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, ¿cuál es el desplazamiento de la cuerda en el instante <math display=\"inline\"><mi>t</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "(d) Si despreciamos el amortiguamiento y otras pérdidas de energía, ¿cuándo estarán de nuevo en las posiciones de arriba todos los puntos de la cuerda? ¿O es imposible que eso ocurra? Explica la respuesta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El nanorreceptor de radio",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En 2007 se hizo la primera nanorradio [90]. El esquema se muestra en la figura. Es un nanotubo de menos de un micrómetro que es, a la vez, antena, sintonizador, amplificador y demodulador. La onda de radio hace oscilar el nanotubo cargado y la corriente que sale de su punta puede usarse para medir las oscilaciones."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/1825a5ff3edf97b5.svg",
       "zabalera": 322
      },
      {
       "mota": "testua",
       "html": "Para estudiar las oscilaciones del nanotubo descargado se usa la ecuación de Euler y Bernoulli, que describe la evolución de la flexión de una viga: <math display=\"block\"><mrow><mi>μ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>E</mi><msub><mi>I</mi><mi>a</mi></msub><mfrac><mrow><msup><mi>∂</mi><mn>4</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>4</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aquí, <math display=\"inline\"><mi>μ</mi></math> es la masa por unidad de longitud, <math display=\"inline\"><mi>E</mi></math> el módulo de Young e <math display=\"inline\"><msub><mi>I</mi><mi>a</mi></msub></math> el momento de inercia de área, que en coordenadas cartesianas de una sección normal se define así: <math display=\"block\"><mrow><msub><mi>I</mi><mi>a</mi></msub><mo>=</mo><mo>∫</mo><msup><mi>y</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math> Además, como el extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> está completamente fijo, deben cumplirse las condiciones siguientes (¿por qué?): <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Por otra parte, como el extremo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> está completamente libre, allí el esfuerzo cortante y el momento flector son cero: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>3</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(a) Demuestra que <math display=\"inline\"><mrow><msub><mi>I</mi><mi>a</mi></msub><mo>=</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>2</mn><mn>4</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>4</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>4</mn></mrow></math> es, si los radios interior y exterior del nanotubo son <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "(b) Separa las variables en la ecuación de Euler y Bernoulli."
      },
      {
       "mota": "testua",
       "html": "(c) Demuestra que las frecuencias de los modos normales son <math display=\"block\"><mrow><msub><mi>ν</mi><mi>n</mi></msub><mo>=</mo><mfrac><msubsup><mi>α</mi><mi>n</mi><mn>2</mn></msubsup><mrow><mn>2</mn><mi>π</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><msqrt><mfrac><mrow><mi>E</mi><msub><mi>I</mi><mi>a</mi></msub></mrow><mi>μ</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, si las soluciones positivas de la ecuación siguiente son <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(d) Usa la calculadora o algún programa adecuado de cálculo numérico para calcular los menores <math display=\"inline\"><msub><mi>α</mi><mi>n</mi></msub></math>."
      },
      {
       "mota": "testua",
       "html": "(e) Demuestra que, quitando los menores <math display=\"inline\"><msub><mi>α</mi><mi>n</mi></msub></math>, la siguiente es una muy buena aproximación: <math display=\"block\"><mrow><msub><mi>α</mi><mi>n</mi></msub><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El helio, la voz y el diapasón",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Seguramente alguna vez has oído la voz de una persona que ha inhalado helio. ¿Por qué es más alto el tono? Si hay helio (y oxígeno) en una cámara, ¿cambiará la frecuencia de un diapasón?"
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Examenes resueltos (1996-2000), mk:9",
     "hizkuntza": "eu"
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
     "html": "Un grupo de radioastrónomos del sistema planetario <math display=\"inline\"><mi>α</mi></math> de Centauri (que está a unos cuatro años luz de la Tierra) quiere estudiar nuestro sistema solar mediante radiación de microondas de frecuencia 0.3 GHz. ¿De qué tamaño debe ser su radiotelescopio para distinguir la Tierra y el Sol como puntos separados? [<em>Nota</em>: la luz del Sol tarda ocho minutos y veinte segundos en llegar a la Tierra]."
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
     "html": "Para que el Sol y la Tierra sean puntos distintos separados, la resolución angular del radiotelescopio debe ser mejor que la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo>=</mo><msub><mi>d</mi><mtext mathvariant=\"normal\">S-T</mtext></msub><mi>/</mi><msub><mi>d</mi><mrow><mtext mathvariant=\"normal\">T-</mtext><mi>α</mi></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mspace width=\"0.167em\"></mspace><msub><mi>t</mi><mtext mathvariant=\"normal\">S-T</mtext></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mspace width=\"0.167em\"></mspace><msub><mi>t</mi><mrow><mtext mathvariant=\"normal\">T-</mtext><mi>α</mi></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≃</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Según la teoría, el poder de resolución de un telescopio de diámetro <math display=\"inline\"><mi>D</mi></math> para la longitud de onda <math display=\"inline\"><mi>λ</mi></math> viene dado por esta expresión: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>θ</mi><mo>=</mo><mn>1.22</mn><mspace width=\"0.167em\"></mspace><mi>λ</mi><mi>/</mi><mi>D</mi></mrow></math>, así que en nuestro caso:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>1.22</mn><mspace width=\"0.167em\"></mspace><mfrac><mi>λ</mi><mi>D</mi></mfrac><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mfrac><mrow><mn>1.22</mn><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mi>/</mi><mn>0.3</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "un telescopio algo grande, ¿verdad?"
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
     "html": "Tenemos un diapasón afinado a la misma frecuencia que el modo fundamental de un tubo de cartón de 50 cm de longitud cerrado por ambos extremos. El diapasón se lanza al aire, verticalmente, de modo que alcance una altura máxima de 10 m. Calcula el intervalo de frecuencias que oye la persona que lo lanza y la posición del diapasón cuando se oye la frecuencia mínima."
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>R.</strong>"
    },
    {
     "mota": "testua",
     "html": "En los dos extremos de un tubo cerrado hay dos máximos de presión (dos"
    },
    {
     "mota": "testua",
     "html": "<em>vientres</em>"
    },
    {
     "mota": "testua",
     "html": "), pues en el modo fundamental la longitud del tubo es media longitud de onda. La frecuencia propia fundamental del tubo puede obtenerse de la siguiente relación, donde <math display=\"inline\"><mi>v</mi></math> es la velocidad del sonido (tomaremos 340 m·s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>), <math display=\"inline\"><mi>λ</mi></math> la longitud de onda del modo fundamental y <math display=\"inline\"><mi>ν</mi></math> su frecuencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>v</mi><mi>ν</mi></mfrac><mo>=</mo><mn>2</mn><mi>L</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>ν</mi><mo>=</mo><mfrac><mi>v</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>=</mo><mfrac><mn>340</mn><mrow><mn>2</mn><mo>⋅</mo><mn>0.5</mn></mrow></mfrac><mo>=</mo><mn>340</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La velocidad máxima del diapasón se obtiene fácilmente sabiendo que alcanza una altura máxima de 10 m. Será: <math display=\"inline\"><mrow><msub><mi>v</mi><mtext mathvariant=\"normal\">máx</mtext></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>g</mi><mi>h</mi></mrow></msqrt><mo>=</mo><mn>14</mn></mrow></math> m/s. Por tanto, el diapasón tendrá una velocidad máxima de alejamiento respecto del observador de 14 m/s (en el instante en que se lanza el tubo hacia arriba), y la velocidad máxima de acercamiento también será de 14 m/s (cuando el diapasón vuelve a la posición del lanzador). Si recordamos la expresión de la frecuencia que percibe un observador en movimiento relativo respecto de la fuente sonora, se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>O</mi></msub></mrow><mrow><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>S</mi></msub></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>v</mi><mi>O</mi></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mi>S</mi></msub></math> son las velocidades del observador y del foco, respectivamente. Esta expresión es válida siempre, si consideramos que el medio no se mueve (que no hay <em>brisa</em>) y que colocamos el foco a la izquierda del observador. Las velocidades serán positivas si vamos de izquierda a derecha y negativas en el caso contrario."
    },
    {
     "mota": "testua",
     "html": "En nuestro caso, la cuestión se simplifica porque en las dos situaciones indicadas la velocidad del observador es nula (<math display=\"inline\"><mrow><msub><mi>v</mi><mi>O</mi></msub><mo>=</mo><mn>0</mn></mrow></math>), y así la expresión anterior se convierte en esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>ν</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi>v</mi><mrow><mi>v</mi><mo>−</mo><msub><mi>v</mi><mi>S</mi></msub></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La velocidad del observador en el instante en que se lanza el diapasón hacia arriba, colocados del modo descrito antes (foco sonoro a la izquierda y observador a la derecha), es de por sí negativa e igual a la velocidad máxima calculada de 14 m/s, mientras que en el instante en que el diapasón vuelve a pasar junto al observador la velocidad es máxima y de por sí positiva, de nuevo de 14 m/s. Si llamamos <math display=\"inline\"><msubsup><mi>ν</mi><mrow><mi>a</mi><mi>l</mi></mrow><mo>′</mo></msubsup></math> y <math display=\"inline\"><msubsup><mi>ν</mi><mrow><mi>a</mi><mi>c</mi></mrow><mo>′</mo></msubsup></math> a las frecuencias que percibe el observador en las dos situaciones, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/902db0754d39909c.svg\" alt=\"nu&#x27;_(a l) = frac(340, 340 - \\( - 14 \\)) thin 340 tilde.eq 327 med upright(&quot;Hz&quot;) #h(2em) #h(2em) nu&#x27;_(a c) = frac(340, 340 - 14) thin 340 tilde.eq 355 med upright(&quot;Hz&quot;)\" style=\"width:35.527em;height:2.860em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, a lo largo del viaje del diapasón el observador oirá un sonido en el intervalo de frecuencias [327,355] Hz, y en ese orden, de menor a mayor."
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
     "html": "Estima la longitud mínima de un piano de cola, si debe ser capaz de producir una nota de entre 16 y 4,138 Hz, teniendo en cuenta que su armazón no puede soportar tensiones mayores de 4,000 N y que la tensión mínima de una cuerda debe ser de 100 N para sonar bien. Disponemos de cuerdas de densidad lineal entre 1 y 10 g/m."
    },
    {
     "mota": "testua",
     "html": "[Figura: silueta de un piano de cola (contorno de la tapa / caja armónica) con las cuerdas representadas en su interior mediante líneas horizontales.]"
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
     "html": "La frecuencia fundamental que emite una cuerda sometida a una tensión <math display=\"inline\"><mi>T</mi></math> puede expresarse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mi>v</mi><mi>λ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>T</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> es la velocidad con que se propagan las ondas en la cuerda, <math display=\"inline\"><mi>μ</mi></math> la densidad lineal y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>L</mi></mrow></math> la longitud de onda del modo fundamental, que en este caso es igual al doble de la longitud de la cuerda."
    },
    {
     "mota": "testua",
     "html": "Así pues, podremos jugar con la tensión, la longitud y la densidad lineal para cambiar la frecuencia que emite una cuerda, sobre todo con las dos primeras, pues se cambian con más facilidad. Por ejemplo, si mantenemos constantes la densidad y la tensión, para producir una nota alta habrá que reducir la longitud de la cuerda, y habrá que aumentarla si queremos producir notas bajas. Despejando la longitud <math display=\"inline\"><mi>L</mi></math>, nos queda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>ν</mi></mrow></mfrac><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como vemos en la expresión anterior, cuanto más baja es la frecuencia que queremos emitir, más larga será la cuerda necesaria en las mismas condiciones de tensión y densidad. Por tanto, la longitud mínima del piano será la de la cuerda más larga que deba tener en su interior, y esta será la correspondiente a la que produce la frecuencia más baja, es decir, la de 16 Hz."
    },
    {
     "mota": "testua",
     "html": "Pero esa frecuencia podemos conseguirla usando cuerdas distintas, de mayor o menor densidad, y afinadas con mayor o menor tensión. Es evidente que el valor de la longitud mínima de la cuerda que produce el sonido de 16 Hz será el de la de mayor densidad, bajo la tensión mínima. Es decir, con una tensión de 100 N y una densidad de 10 g/m:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mo>×</mo><mn>16</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">Hz</mtext></mrow></mfrac><msqrt><mfrac><mrow><mn>100</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">N</mi></mrow><mrow><mn>0.01</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">kg/m</mtext></mrow></mfrac></msqrt><mo>=</mo><mn>3.125</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres fuentes iguales están en los vértices de un triángulo equilátero de lado a = 2λ. Halla las diferencias de fase entre las tres fuentes si su radiación se observa en las direcciones 1 y 2 indicadas en la figura. [<em>Nota</em>: supón que la radiación se recoge en una pantalla muy lejana]."
    },
    {
     "mota": "testua",
     "html": "[Figura — dos triángulos con las mismas tres fuentes f1 (vértice superior izquierdo), f2 (vértice inferior izquierdo) y f3 (vértice derecho): - Triángulo 1 (dirección 1): flechas horizontales dirigidas hacia la derecha que salen de f1, f3 y f2. El lado f2–f3 está etiquetado como a = 2λ; el segmento horizontal que va de f2 a la vertical de f3 está etiquetado como √3a/2; una línea vertical discontinua baja de f3 a la horizontal de f2. Rótulo &quot;1&quot;."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Triángulo 2 (dirección 2): flechas diagonales dirigidas hacia arriba y a la derecha"
     ]
    },
    {
     "mota": "testua",
     "html": "que salen de f1, f3 y f2. El lado f2–f3 está etiquetado como a = 2λ; junto a f2 aparece la etiqueta a/2; una línea discontinua baja desde f1. Rótulo &quot;2&quot;.]"
    }
   ]
  },
  {
   "id": "a28",
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
     "html": "Para fijar la notación, llamaremos f1 a la fuente de arriba, f2 a la de abajo y f3 a la de la derecha."
    },
    {
     "mota": "testua",
     "html": "Para la dirección 1, llamemos r a la distancia desde la fuente f3 hasta la pantalla. En consecuencia, las distancias desde f1 y f2 hasta ese punto, salvo infinitésimos de orden superior indicados abajo, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mi>a</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mi>a</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>r</mi><mo>+</mo><msqrt><mn>3</mn></msqrt><mi>a</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><mo>≃</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>+</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mi>a</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≃</mo><mi>r</mi><mo>+</mo><mfrac><mrow><msqrt><mn>3</mn></msqrt><mi>a</mi></mrow><mn>2</mn></mfrac><mo>+</mo><mi>O</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pues se deduce fácilmente. Las diferencias de fase entre las distintas fuentes serán, por tanto, estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mi>k</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>r</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>r</mi></mrow><mi>a</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">{</mo><mn>0</mn><mo>=</mo><msub><mi>δ</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>2</mn><msqrt><mn>3</mn></msqrt><mspace width=\"0.167em\"></mspace><mi>π</mi><mo>=</mo><msub><mi>δ</mi><mn>13</mn></msub><mo>=</mo><msub><mi>δ</mi><mn>23</mn></msub></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "En la segunda dirección, por otra parte, supongamos que la distancia desde el punto medio entre las fuentes f1 y f2 hasta el punto de la pantalla en esa dirección es r&#x27;. Olvidando los infinitésimos que no influyen en los resultados finales (del tipo de los que hemos puesto de manifiesto en el caso anterior), las distancias desde las fuentes f1, f2 y f3 hasta el punto de la pantalla considerado serán, respectivamente, estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/de910e6bd6ec408c.svg\" alt=\"d_1 = r&#x27; - a / 4 #h(2em) d_2 = r&#x27; + a / 4 #h(2em) d_3 = r&#x27; - frac(3 a, 4)\" style=\"width:23.012em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las diferencias de fase entre las distintas fuentes, en valor absoluto, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>r</mi></mrow><mi>a</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">{</mo><mn>2</mn><mi>π</mi><mo>=</mo><msub><mi>δ</mi><mn>12</mn></msub><mo>=</mo><msub><mi>δ</mi><mn>13</mn></msub></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mn>4</mn><mi>π</mi><mo>=</mo><msub><mi>δ</mi><mn>23</mn></msub></mtd></mtr></mtable></math>"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Responde razonadamente a las siguientes preguntas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      " #set enum(numbering: &quot;a)&quot;, start: 1) + El semieje mayor de la órbita de Júpiter es 5.20 U.A. (una Unidad Astronómica es el tamaño del semieje mayor de la órbita de la Tierra alrededor del Sol, aproximadamente 1.5 × 10^8 km. El telescopio Hubble tiene dos metros de diámetro. ¿A qué distancia del Sol hay que ponerlo para que no sea capaz de distinguir las imágenes del Sol y de Júpiter? ",
      " #set enum(numbering: &quot;a)&quot;, start: 2) + Una civilización que está a miles de años luz de la Tierra podría detectar el planeta Júpiter sin verlo, midiendo el movimiento que tiene el Sol en torno al centro de masas Sol--Júpiter (se desprecia el efecto de los demás planetas), como en el problema 4. ¿Cómo pueden medirse la velocidad del Sol y el periodo orbital? ",
      " #set enum(numbering: &quot;a)&quot;, start: 3) + Dos altavoces iguales, alimentados coherentemente y en fase, están separados por una distancia d = 40 cm y emiten con una potencia de 1 vatio. A 10 metros hay una pared provista de micrófonos. ¿Con qué intensidad (julios por metro cuadrado y segundo) llegan a la pared las ondas sonoras de cada altavoz? ¿Qué ocurre con la intensidad del punto donde aparecía el máximo de interferencia de primer orden si se coloca en el punto medio de los dos otro altavoz exactamente igual a los anteriores? Halla la razón de las intensidades con dos y con tres altavoces en el máximo de orden cero. ¿Qué ocurre si los altavoces se alimentan de modo incoherente? "
     ]
    },
    {
     "mota": "testua",
     "html": "[Figura (pág. 172): a la izquierda, el símbolo del Sol y, encima, un punto (Júpiter); Δ marca la separación vertical entre ambos. Los rayos de líneas discontinuas convergen bajo un ángulo θ hacia una abertura de diámetro ⌀D situada a distancia d. Tras la abertura, otro ángulo θ y el diagrama de difracción (dos lóbulos).]"
    }
   ]
  },
  {
   "id": "a30",
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
     "html": "<strong>a)</strong>"
    },
    {
     "mota": "testua",
     "html": "El criterio de resolución de Lord Rayleigh, para poder considerar distinguibles dos puntos lejanos observados a través de una abertura circular, es que el primer mínimo del diagrama de difracción de un punto caiga en el máximo central del otro punto."
    },
    {
     "mota": "testua",
     "html": "Según la teoría de la difracción de Fraunhofer, el ángulo θ que subtiende el primer mínimo de la imagen de difracción de un objeto puntual en una abertura circular viene dado por:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> sin θ ≈ θ = 1.22 λ/D </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde λ es la longitud de onda de la luz y D el diámetro de la abertura (se supone que el ángulo θ es lo bastante pequeño para hacer la aproximación indicada). En la figura, si llamamos Δ a la separación entre el Sol y Júpiter y d a la distancia a la que ambos están desde el Hubble, podemos igualar ese ángulo que subtiende el primer mínimo de la imagen de difracción producida por el Sol con el ángulo que subtiende Δ visto desde el Hubble. Así pues, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> θ ≈ 1.22 λ/D ≈ Δ/d </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "es decir:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> d ≈ DΔ / (1.22 λ) = (2 · 5.2 · 1.5 × 10^11) / (1.22 · 5 × 10^-7) = 2.56 × 10^18 ≈ 270 a-l </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde como longitud de onda hemos usado el amarillo de la luz visible: λ = 5 × 10^3 Å"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 1,
   "izenburua": "5 × 10^-7 m.",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>b)</strong>"
    },
    {
     "mota": "testua",
     "html": "En el problema 4 hemos visto cuál sería el movimiento de un sistema conjunto estrella–planeta en torno al centro de masas del sistema: la estrella describe una trayectoria circular de radio r_e en torno a ese centro de masas, con el mismo periodo que tiene ese planeta en torno al mismo centro de masas."
    },
    {
     "mota": "testua",
     "html": "[Figura (pág. 173): a la izquierda, la estrella (símbolos del Sol) en cuatro posiciones sobre una circunferencia de línea discontinua; en la posición 2 (arriba) la velocidad v_e apunta hacia la izquierda, en la posición 1 (abajo) v_e apunta hacia la derecha, v_e indicada también en las posiciones laterales; a la derecha, tras un tramo de línea discontinua, el Observador (○). A la derecha, la gráfica v(t): oscilación entre un máximo v_1 y un mínimo v_2, con el periodo τ_e marcado entre dos máximos.]"
    },
    {
     "mota": "testua",
     "html": "Como es una estrella, emite luz y puede observarse que, en algunos casos, el foco emisor se está alejando del observador con velocidad v_e y, tras un semiperiodo de revolución, se está acercando al observador con la misma velocidad, como se muestra en la figura. El efecto Doppler nos dice que las frecuencias (o longitudes de onda) que llegan al observador no serán las propias de la emisión, pasando por una frecuencia máxima observada cuando el Sol se acerca a nosotros y por una mínima cuando se aleja. La evolución de la frecuencia observada será la que muestra la figura, siendo el tiempo entre dos máximos (o mínimos) el periodo orbital del Sol en torno al centro de masas común, τ_e, y la velocidad v_e se obtendrá de las relaciones del efecto Doppler de las frecuencias observadas:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ν_1 = ν_0 √((1 + β_e)/(1 - β_e))          ν_2 = ν_0 √((1 - β_e)/(1 + β_e)) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde ν_1 corresponde al caso de acercamiento y ν_2 al de alejamiento. El cociente de las dos expresiones, que llamaremos r, lleva directamente, sin necesidad siquiera de conocer ν_0, al valor de β_e y, por tanto, al de v_e:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> r = ν_1/ν_2 = (1 + β_e)/(1 - β_e)     →     β_e = (r - 1)/(r + 1)          [v_e = β_e c] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "<strong>c)</strong>"
    },
    {
     "mota": "testua",
     "html": "La energía que atraviesa por unidad de tiempo una superficie esférica de radio r, en cuyo centro hay una fuente sonora (un altavoz), es la energía por unidad de tiempo que emite la propia fuente. A medida que aumenta la distancia a la fuente, la cantidad de energía por unidad de tiempo y de área disminuirá, pues la energía por unidad de tiempo que emite la fuente debe repartirse en un área cada vez mayor. Teniendo en cuenta que a la energía por unidad de tiempo se le llama <em>potencia</em> y a la potencia por unidad de área <em>intensidad</em>, podemos establecer la siguiente relación:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> I · 4π r^2 = P     →     I = P / (4π r^2) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Si P se mantiene constante, la intensidad de una onda esférica disminuirá con el cuadrado de la distancia a la fuente emisora y, como esta es proporcional al cuadrado de la amplitud, la amplitud de la onda esférica (en ausencia de fenómenos de atenuación por absorción del medio) disminuirá proporcionalmente a la distancia a la fuente emisora. En nuestro caso, la intensidad de las ondas sonoras que llegan a la pared situada a diez metros de cada altavoz será esta:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> I = P / (4π r^2) = (1 J/s) / (4π 10^2 m^2) = 7.96 × 10^-4 J/(m^2·s) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "[Figura (pág. 175): esquema de interferencia de dos fuentes separadas por una distancia d; se marcan la diferencia de camino d sin θ_1 y el ángulo θ_1; a la derecha, la distribución de intensidad con un pico &quot;orden 0&quot; (central) y uno menor &quot;orden 1&quot; en θ_1.]"
    },
    {
     "mota": "testua",
     "html": "La figura muestra el esquema de interferencia, comparado con la distancia a la pared provista de micrófonos, para el caso de dos fuentes coherentes separadas por una distancia pequeña d. Al superponerse las ondas procedentes de cada fuente, se produce un retraso de fase por la distancia adicional que debe recorrer la onda procedente del altavoz inferior para llegar a la pared. Como se ve, esa distancia será igual a d sin θ. Si esta es un múltiplo entero de una longitud de onda λ, las ondas entrarán en fase y producirán un máximo. El de orden 0, evidentemente, se producirá para θ = 0 y el de orden 1, cuando la diferencia de caminos sea igual a una longitud de onda:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> d sin θ_1(2) = λ     →     sin θ_1(2) = λ/d </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Hay que olvidar la tentación de usar la aproximación sin θ_1(2) ≈ θ_1(2), pues para una frecuencia de 1,000 Hz, por ejemplo, la longitud de onda asociada λ es de 0.34 m, del mismo orden de magnitud que la distancia d a la que están los altavoces. [El subíndice &quot;1(2)&quot; indica (orden 1, caso de 2 altavoces)]. Usando esta que acabamos de mencionar como frecuencia de emisión de cada altavoz, el máximo de primer orden se produce para θ_1(2) ≈ 58°, sin que haya máximos de orden superior. También en este caso encontramos que las intensidades de los máximos no son iguales, pues al ser tan grande el ángulo de la dirección en que se produce el máximo de primer orden, la distancia a la pared desde los altavoces, de 10 m, es ya del orden de 15 m, y sabemos que para ondas esféricas la amplitud disminuye proporcionalmente a la distancia, y así la intensidad disminuirá proporcionalmente al cuadrado de esta. La distribución de intensidad de los máximos de orden 0 y de orden 1 es, cualitativamente, la que se muestra en la figura. [El máximo de orden 0 se produce en la intersección de la mediatriz del segmento que une los dos altavoces con la pared]."
    },
    {
     "mota": "testua",
     "html": "Si ahora introducimos otro altavoz en el punto medio de los dos anteriores, el máximo de orden 1 se producirá ahora en la dirección siguiente, aplicando la notación anterior:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> (d/2) sin θ_1(3) = λ     →     sin θ_1(3) = 2λ/d = 2 sin θ_1(2) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo los datos, encontramos que sin θ_1(3) &gt; 1, es decir,"
    },
    {
     "mota": "testua",
     "html": "<em>no hay máximo de primer orden</em>"
    },
    {
     "mota": "testua",
     "html": "y solo persiste el de orden 0, como antes, en la intersección de la mediatriz que une los altavoces de los extremos con la pared."
    },
    {
     "mota": "testua",
     "html": "Es fácil deducir que si la intensidad del sonido que llega al punto donde se produce el máximo de orden 0 correspondiente a un altavoz es I_0, la correspondiente al montaje de dos altavoces será 4 I_0 y la de tres altavoces, 9 I_0."
    },
    {
     "mota": "testua",
     "html": "Por último, si los altavoces se alimentan de modo incoherente, no se producirá interferencia y en cualquier punto la intensidad no es más que la suma de las intensidades correspondientes a cada fuente."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La velocidad del sonido en el aire es proporcional a la raíz cuadrada de la temperatura absoluta. Una flauta está afinada a 20°C, pero el concierto se da en una sala llena de gente y sin aire acondicionado, a una temperatura de 40°C. Calcula la variación relativa de la tensión que hay que aplicar en las cuerdas del violín para afinarlo con la flauta."
    }
   ]
  },
  {
   "id": "a33",
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
     "html": "La expresión de la velocidad del sonido en el aire, en condiciones adiabáticas, es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mi>γ</mi><mi>R</mi><mi>T</mi></mrow><mi>M</mi></mfrac></msqrt><mo>=</mo><mi>α</mi><msqrt><mi>T</mi></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>γ</mi></math> es el cociente de las capacidades caloríficas a presión y a volumen constantes, <math display=\"inline\"><mi>R</mi></math> la constante de los gases perfectos, <math display=\"inline\"><mi>M</mi></math> el peso molecular del gas (el aire, en este caso) y <math display=\"inline\"><mi>T</mi></math> la temperatura absoluta. Hemos reunido las constantes en una constante nueva: <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><msqrt><mrow><mi>γ</mi><mi>R</mi><mi>/</mi><mi>M</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La frecuencia producida por un tubo (abierto o cerrado) dependerá de la velocidad de propagación del sonido y de la longitud del tubo, según la expresión <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>n</mi></msub><mo>=</mo><mi>v</mi><mi>/</mi><msub><mi>λ</mi><mi>n</mi></msub></mrow></math>, donde <math display=\"inline\"><msub><mi>λ</mi><mi>n</mi></msub></math> dependerá de la longitud del tubo. Pero esa longitud no cambia de modo apreciable por un cambio de temperatura de unos pocos grados, mientras que la velocidad del sonido sí cambia, y por eso podemos decir que la frecuencia <math display=\"inline\"><msub><mi>ν</mi><mi>n</mi></msub></math> es directamente proporcional a la velocidad <math display=\"inline\"><mi>v</mi></math> del sonido, es decir, que podemos escribir <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>n</mi></msub><mo>∝</mo><msqrt><mi>T</mi></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En cuanto al violín, podemos decir algo parecido. La velocidad de propagación de las ondas estacionarias en una cuerda puede escribirse así: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msqrt><mrow><mi>F</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math>, donde <math display=\"inline\"><mi>F</mi></math> es la tensión que soporta la cuerda y <math display=\"inline\"><mi>μ</mi></math> la densidad lineal de masa. Como en el caso anterior, la frecuencia de las ondas producidas es <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>n</mi></msub><mo>=</mo><mi>v</mi><mi>/</mi><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>v</mi><mi>/</mi><mn>2</mn><mi>L</mi></mrow></math>, siendo <math display=\"inline\"><mi>L</mi></math> la longitud de la cuerda. Como en el caso anterior, la longitud entre trastes del violín no cambia de modo apreciable con la temperatura, y la densidad lineal de la cuerda tampoco cambia de modo apreciable con la tensión (dentro del intervalo de tensiones en que nos movemos), y por eso la frecuencia producida por el violín <math display=\"inline\"><mi>F</mi></math> será proporcional a la raíz cuadrada de la tensión, es decir, <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>n</mi></msub><mo>∝</mo><msqrt><mi>F</mi></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si el violín y la flauta estaban afinados para una temperatura de 20°C, al pasar esta a 40°C las notas emitidas por la flauta subirán un poco, mientras que las emitidas por el violín, al que no afecta esta subida de temperatura, seguirán siendo las mismas que las de 20°C. Por tanto, para que ambos sigan afinados habrá que aumentar la tensión de las cuerdas para producir el mismo cambio en las notas. Si con los subíndices 20 y 40 designamos las correspondientes de la tensión y de la temperatura, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msubsup><mi>ν</mi><mn>40</mn><mn>2</mn></msubsup><msubsup><mi>ν</mi><mn>20</mn><mn>2</mn></msubsup></mfrac><mo>=</mo><mfrac><msub><mi>F</mi><mn>40</mn></msub><msub><mi>F</mi><mn>20</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>T</mi><mn>40</mn></msub><msub><mi>T</mi><mn>20</mn></msub></mfrac><mo>=</mo><mfrac><mn>313</mn><mn>293</mn></mfrac><mo>=</mo><mn>1.068</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado el cociente de los cuadrados de las frecuencias a las dos temperaturas, sin precisar si es la del violín o la de la flauta, pues, como deben estar afinados, serán iguales. Así obtenemos que la razón de las tensiones de las cuerdas coincide con la razón de las temperaturas absolutas."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Una bahía semicircular de radio aproximado 1500 m se ve muy poco protegida en mar abierto cuando hay mar de fondo por una tormenta. En este caso, las olas llegan paralelas a la costa, con una longitud de onda de aproximadamente 6 m. Para evitar los efectos de esas olas, los miembros de un club de remo deciden cerrar la bahía con diques, como se indica en la figura. Si el club de remo está en el punto A, y el ángulo <math display=\"inline\"><mi>α</mi></math> es <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>6</mn></mrow></math>, ¿qué distancia debe haber entre las aberturas para que las lanchas no se muevan? ¿Qué le ocurrirá a una lancha amarrada en el punto B?"
    },
    {
     "mota": "testua",
     "html": "[Figura: una flecha vertical dirigida hacia abajo rotulada &quot;Dirección de las olas&quot;. Debajo, la bahía representada como una semicircunferencia (dique/costa) cerrada en la parte superior por una línea horizontal en la que hay una abertura central de anchura <math display=\"inline\"><mi>d</mi></math> (marcada con dos flechas que apuntan hacia fuera). Desde la abertura central baja, oblicuo hacia la izquierda, un segmento rotulado <math display=\"inline\"><mi>R</mi></math> que termina en el punto A sobre el arco; el ángulo entre ese segmento <math display=\"inline\"><mi>R</mi></math> y la vertical central está rotulado como <math display=\"inline\"><mi>α</mi></math>. En la parte inferior del arco están marcados el punto A (a la izquierda, extremo del segmento <math display=\"inline\"><mi>R</mi></math>) y el punto B (a media altura).]"
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "El dique tiene dos aberturas situadas a distancia <math display=\"inline\"><mi>d</mi></math>, que actúan como dos fuentes de ondas coherentes y producen interferencias en cualquier punto de la bahía y, en particular, en los puntos A (sede del club de remo) y B. Para que las lanchas no se muevan por el mar de fondo, en A el fenómeno de interferencia debe ser tal que haya un mínimo. O, en otras palabras, las ondas que llegan a A desde los dos orificios del dique deben llegar desfasadas un ángulo <math display=\"inline\"><mi>π</mi></math>, y eso, volviendo a las distancias, quiere decir que la diferencia de caminos que deben recorrer esas dos ondas debe ser igual a <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>2</mn></mrow></math>, siendo <math display=\"inline\"><mi>λ</mi></math> la longitud de onda de las olas que llegan del mar exterior."
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta las aproximaciones que hay que hacer, podemos decir que la diferencia de caminos que deben recorrer las ondas secundarias producidas en los dos orificios para llegar a A es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>≈</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>r</mi><mo>=</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mfrac><mi>λ</mi><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mi>λ</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En nuestro caso, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>6</mn></mrow></math> m y <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>6</mn></mrow></math>, y así <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mn>6</mn></mrow></math> m."
    },
    {
     "mota": "testua",
     "html": "En B se suman las contribuciones de las ondas procedentes de las dos aberturas (interferencia constructiva), y por eso tendremos en ese punto una amplitud de oscilación máxima (aunque no tan grande como cuando la bahía estaba sin protección)."
    }
   ]
  }
 ]
};
