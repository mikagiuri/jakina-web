/* JAKINA · kapitulua «B9.7 - Oszilazio txikiak» (05mk_07oszilazioak), desde edicion2/kapituluak/05mk_07oszilazioak/05mk_07oszilazioak.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["05mk_07oszilazioak"] = {
 "gakoa": "05mk_07oszilazioak",
 "titulua": "JAKINA - B9 - Mecánica clásica - 7/10",
 "azala": "B9.7 - Pequeñas oscilaciones",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/05mk_07oszilazioak/05mk_07oszilazioak.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Oscilaciones pequeñas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El movimiento más sencillo es el reposo, y en la sección 6.2 vimos que solo puede darse en los puntos extremos de la energía potencial. Si el punto de equilibrio es estable, los movimientos que comienzan cerca permanecen en su entorno: son oscilaciones. En este tema estudiaremos las oscilaciones <em>lineales</em> en torno a un mínimo de la energía potencial; las oscilaciones no lineales y los comportamientos más complejos se mencionan en algunos problemas y en el tema 8. Para empezar, veremos las oscilaciones en una sola dimensión, estudiando con atención el fenómeno de la resonancia. Cuando hay más dimensiones, en general, las oscilaciones lineales están acopladas, pero se vuelven independientes si se eligen coordenadas generalizadas adecuadas. Para obtener la ecuación de ondas que estudiaremos en el tema 9, nos serviremos de la cuerda discreta sometida a tensión, pasando al límite continuo."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Equilibrio estable y oscilador armónico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que una partícula de masa <math display=\"inline\"><mi>m</mi></math> se mueve en una sola dimensión en el potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como recordamos en la sección 1.4.6, en un mínimo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> del potencial la partícula puede estar en equilibrio estable y, si está muy cerca de él, la fuerza que experimenta viene dada por la ley de Hooke: <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Eligiendo el origen del sistema de referencia en el punto de equilibrio, podemos tomar <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> sin ninguna restricción. Sabemos además que la ecuación de movimiento de la partícula será la del oscilador armónico en un pequeño entorno del punto de equilibrio:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>ω</mi><mo>≡</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> es la <strong>pulsación propia</strong> del oscilador. <br> Hay que subrayar que el concepto de oscilador armónico es muy general, ya que, en la aproximación adecuada, corresponde a muchos modelos mecánicos. Por ejemplo, en el caso del péndulo matemático, que se obtiene haciendo <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> en la ecuación (1.50), si las oscilaciones son pequeñas tenemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math> y la ecuación de movimiento es <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo la pulsación <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></math>. Es más, resulta muy útil para estudiar otros sistemas físicos (y económicos, geofísicos, ecológicos, etc.). Por ello, en este tema estudiaremos las oscilaciones en un contexto matemático general, sin precisar el modelo físico subyacente. En este contexto abstracto se dice que la variable <math display=\"inline\"><mi>x</mi></math>, que puede tener dimensiones cualesquiera, es la <strong>elongación</strong> del oscilador."
    },
    {
     "mota": "testua",
     "html": "La solución del oscilador la escribimos con las constantes de integración <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> en la expresión (1.113):"
    },
    {
     "mota": "testua",
     "html": "como sigue:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La solución (7.3) del oscilador armónico es periódica, como lo es el coseno. El periodo de este es <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por lo que el <strong>periodo</strong> del oscilador es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y su <strong>frecuencia</strong> es<span class=\"j-oin\">[Como la diferencia entre la pulsación y la frecuencia es un factor constante, el nombre «frecuencia» se usa a menudo (casi siempre) también para la primera.]</span>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como los periodos de todas las oscilaciones son iguales, estas oscilaciones son <strong>isócronas</strong><span class=\"j-oin\">[Galileo se dio cuenta de esta propiedad midiendo el periodo del balanceo de la lámpara de la catedral de Pisa con su pulso. Así concluyó por primera vez que las pequeñas oscilaciones de los péndulos podían usarse para medir el tiempo. Pronto se hicieron algunos intentos de construir relojes (y metrónomos), pero parece que el primer diseño práctico fue el descrito en el libro <em>Horologium</em> de Huygens.]</span>. <br> Al argumento <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> del coseno se le llama <strong>fase</strong> y a <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>, <strong>fase inicial</strong>, ya que es el valor de la fase en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Por otra parte, el coeficiente constante <math display=\"inline\"><mrow><mi>A</mi><mo>≥</mo><mn>0</mn></mrow></math> se llama <strong>amplitud</strong> y es el valor máximo de la elongación. Naturalmente, cuando la elongación es máxima (o mínima), <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la velocidad es cero."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la solución también puede escribirse de las formas siguientes: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mi>ω</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "¿Cuál es el significado de las constantes <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>? ¿Por qué se puede elegir siempre en la solución (7.3) el coeficiente <math display=\"inline\"><mi>A</mi></math> de modo que sea no negativo?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como la fuerza de Hooke es conservativa, la energía mecánica es una constante del movimiento y, por ejemplo, cuando la elongación es máxima se calcula fácilmente en función de la amplitud: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En un contexto más general, la estructura de la energía será parecida,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>∝</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>A</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "aunque la constante de proporcionalidad dependa del modelo físico. Por ejemplo, en el caso de las pequeñas oscilaciones del péndulo matemático, la elongación <math display=\"inline\"><mi>θ</mi></math> es el ángulo y la energía mecánica es <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> es el ángulo máximo de la amplitud."
    },
    {
     "mota": "irudia",
     "oina": "Diagrama <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y espacio de fases del oscilador armónico.",
     "src": "../media/irudiak/91a681f0b8922c98.svg",
     "zabalera": 353
    },
    {
     "mota": "testua",
     "html": "En este tema, al espacio abstracto de las variables <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se le llama <strong>espacio de fases</strong>. La ley de conservación (7.10) nos dice que las <strong>trayectorias de fase</strong> del oscilador armónico son elipses con semiejes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mrow><mi>ω</mi><mi>A</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se dice que el punto de equilibrio estable situado en el origen es un <strong>centro</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fasores"
    },
    {
     "mota": "testua",
     "html": "Para estudiar las oscilaciones (y las ondas), las expresiones complejas de las magnitudes físicas suelen ser más útiles que las reales. Siguiendo lo dicho en la sección 1.4.4, supongamos que buscamos soluciones de la ecuación lineal (7.1) de la forma <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con constantes <math display=\"inline\"><mi>C</mi></math> y <math display=\"inline\"><mi>λ</mi></math> adecuadas. Al sustituir una solución así en la ecuación se obtiene <math display=\"block\"><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y, como la exponencial no se anula, para tener una solución no nula debemos elegir <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>ω</mi></mrow></math>, pero la constante <math display=\"inline\"><mi>C</mi></math> es arbitraria. Como la ecuación es lineal, si <math display=\"inline\"><mi>C</mi></math> y <math display=\"inline\"><mi>D</mi></math> son constantes complejas arbitrarias, vemos que la combinación <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es solución. Además, en esa expresión están todas las soluciones (véase, por ejemplo, [46]). Como los coeficientes de la ecuación son reales, el complejo conjugado de una solución también es solución —basta elegir <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>D</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> en lugar de las constantes <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>,</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>— y, en consecuencia, también lo son su parte real y su parte imaginaria. <br> Si la magnitud que describe el oscilador es real, la expresión (7.14)"
    },
    {
     "mota": "testua",
     "html": "de la solución <math display=\"inline\"><mi>x</mi></math> para que sea real debe cumplirse <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y entonces, si el módulo y el argumento de la constante <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>a</mi><mo>+</mo><mi>i</mi><mi>b</mi></mrow></math> son <math display=\"block\"><mrow><mi>A</mi><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mn>0</mn></msub><mo>≡</mo><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>C</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mi>b</mi><mi>a</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "respectivamente, <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>a</mi><mo>−</mo><mi>i</mi><mi>b</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tenemos. Por tanto, la solución de la ecuación armónica libre se escribe de las formas siguientes, teniendo en cuenta que es arbitraria, si escribimos <math display=\"inline\"><mrow><mi>C</mi><mi>/</mi><mn>2</mn></mrow></math> en lugar de <math display=\"inline\"><mi>C</mi></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><mover><mi>C</mi><mo accent=\"true\">¯</mo></mover><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow><mn>2</mn></mfrac><mo>=</mo><mi>A</mi><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "En la última línea recuperamos las expresiones (1.113) y (7.3) de la solución, y (1.112) y (7.7) son <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la parte imaginaria (que, como hemos dicho arriba, también es solución). <br> En consecuencia,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "si usamos la solución compleja, la solución real es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi></mrow></math>. (A menudo, para aligerar la notación, se escribe <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>: va sin decir que hay que tomar la parte real.)"
    },
    {
     "mota": "testua",
     "html": "Para hacer la representación gráfica de la solución podemos usar el diagrama de Argand de los números complejos: en el plano complejo el número <math display=\"inline\"><mi>z</mi></math> se representa mediante un punto o mediante un vector que lo define junto con el origen. La longitud del vector es el módulo del número, es decir, la amplitud constante <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>A</mi></mrow></math> de la solución. El ángulo entre el vector y el eje real es el argumento del número y la fase de la solución: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math>. Como esta es variable, el vector <math display=\"inline\"><mi>z</mi></math> gira con velocidad angular constante <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> y se dice que es un <strong>fasor</strong>. La proyección <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi></mrow></math> del fasor sobre el eje real es la solución real."
    },
    {
     "mota": "irudia",
     "oina": "Elongación, velocidad y los fasores correspondientes.",
     "src": "../media/irudiak/34772eb2efe88c1e.svg",
     "zabalera": 184
    },
    {
     "mota": "testua",
     "html": "Como la parte real de la derivada es la derivada de la parte real, para calcular la velocidad podemos derivar la solución <math display=\"inline\"><mi>z</mi></math> y, usando <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, se obtiene lo siguiente: <math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>i</mi><mi>ω</mi><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><mi>C</mi><mi>ω</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>i</mi><mi>ω</mi><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>A</mi><mi>ω</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(7.6) Para obtener la velocidad real basta tomar su parte real: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>+</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>A</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><mi>A</mi><mi>ω</mi></mrow></math> es la longitud del fasor que representa la velocidad, es decir, la amplitud de la velocidad. Además, este <strong>fasor de velocidad</strong> gira con la misma velocidad angular que el fasor (7.20) correspondiente a la elongación,"
    },
    {
     "mota": "testua",
     "html": "pero con un adelanto de <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, ya que su fase es <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cómo es el fasor de aceleración?"
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Oscilador amortiguado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si el oscilador está amortiguado (porque sufre un rozamiento proporcional a la velocidad, por ejemplo), su ecuación (1.91) es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde la constante <math display=\"inline\"><mi>γ</mi></math> es el <strong>coeficiente de amortiguamiento</strong><span class=\"j-oin\">[En algunos libros se llama coeficiente de amortiguamiento al valor de <math display=\"inline\"><mrow><mn>2</mn><mi>γ</mi></mrow></math> de aquí. Aquí hemos elegido <math display=\"inline\"><mi>γ</mi></math> para abreviar algunas expresiones.]</span>. Para buscar la solución, probaremos la solución exponencial (7.12) en la ecuación (7.23): <math display=\"block\"><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>γ</mi><mi>λ</mi><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>λ</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mo>±</mo><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las soluciones de esta ecuación, que también se estudiaron en la sección 1.4.4, se clasifican en tres casos distintos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Amortiguamiento débil"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mi>ω</mi></mrow></math>, las raíces características son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mi>γ</mi><mo>±</mo><mi>i</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. Como son conjugadas entre sí, si se usan fasores basta elegir una y volver a poner <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup></mrow></math>, de modo que la solución <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>γ</mi><mo>+</mo><mi>i</mi><msub><mi>ω</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mi>γ</mi></msub><mo>≡</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "o"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>γ</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se escribe así. Ahora la pulsación de la parte periódica (es decir, la velocidad angular del fasor) es <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>γ</mi></msub><mo>=</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y la amplitud (el módulo del fasor) es monótonamente decreciente: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mi>t</mi></mrow></msup></mrow></math>. La trayectoria de fase, por tanto, tenderá hacia el origen y diremos que el punto de equilibrio, asintóticamente estable, es un <strong>foco</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Diagrama <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y espacio de fases del oscilador armónico amortiguado.",
     "src": "../media/irudiak/699a13d9858ff69f.svg",
     "zabalera": 347
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dibuja el fasor (7.25) y la trayectoria que describe su punta."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las dimensiones del coeficiente de amortiguamiento <math display=\"inline\"><msup><mi>T</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> son: de hecho, el valor <math display=\"inline\"><mrow><mi>τ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mi>γ</mi></mrow></math> llamado <strong>tiempo característico</strong> —y, en algunos contextos, <strong>tiempo de relajación</strong>— es la duración del intervalo de tiempo necesario para que la amplitud se reduzca <math display=\"inline\"><mi>e</mi></math> veces."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la energía mecánica perdida en un ciclo (es decir, en un periodo de longitud <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><msub><mi>ω</mi><mi>γ</mi></msub></mrow></math> de la parte periódica) viene dada por la expresión siguiente: <math display=\"block\"><mrow><mfrac><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>γ</mi><mi>T</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sobreamortiguamiento"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mo>±</mo></msub><mo>≡</mo><mi>γ</mi><mo>±</mo><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt><mo>&gt;</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "si se usan constantes, las raíces características son <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mo>±</mo></msub></mrow></math> y, como se vio en el ejercicio 1.28, no hay oscilación propiamente dicha, pues la solución (1.118) es: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>+</mo></msub><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>λ</mi><mo>−</mo></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><msub><mi>C</mi><mi>i</mi></msub></math> son constantes arbitrarias que son reales en la solución real.)  <br>  El primer término de la solución (7.28) tiende a cero más rápido que el otro al aumentar <math display=\"inline\"><mi>t</mi></math>; por tanto, el tiempo característico es <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>λ</mi><mo>−</mo></msub></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Diagrama <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y espacio de fases del oscilador armónico sobreamortiguado.",
     "src": "../media/irudiak/3e0a71ac02fe6e1d.svg",
     "zabalera": 352
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Amortiguamiento crítico"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math> solo hay una raíz característica: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>γ</mi><mo>=</mo><mi>ω</mi></mrow></math>. De nuevo no hay oscilación, y la solución (1.119) es: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo>+</mo><mi>D</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aunque este caso es el límite matemático de los dos anteriores, a menudo es muy importante. Por ejemplo, para que las agujas de los medidores<span class=\"j-oin\">[Hoy en día, como se usan pantallas de cristal líquido, el oscilador que interviene es electrónico, en lugar de mecánico.]</span> vayan lo antes posible a la posición de equilibrio, se quiere que el tiempo de relajación sea el menor posible. Y eso se consigue con el amortiguamiento crítico, como se ve en la figura 7.6. (El espacio de fases es parecido al que se muestra en la figura 7.5 para el caso amortiguado.)"
    },
    {
     "mota": "irudia",
     "oina": "Tiempo característico del oscilador amortiguado.",
     "src": "../media/irudiak/e4e563e71a76c016.svg",
     "zabalera": 143
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba analíticamente que el tiempo característico más corto es el del caso crítico."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Oscilador forzado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que sobre un oscilador mecánico se aplican la fuerza recuperadora <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "el rozamiento y una fuerza externa <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Si definimos <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi></mrow></math>, la ecuación del oscilador armónico forzado es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Naturalmente, en contextos más generales la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede ser otra magnitud. Por ejemplo, como la ecuación del circuito RLC es <math display=\"block\"><mrow><mi>L</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>I</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>R</mi><mfrac><mrow><mi>d</mi><mi>I</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mi>I</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>V</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en este caso la elongación <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>I</mi></mrow></math> es la intensidad, el coeficiente de amortiguamiento es <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>R</mi><mi>/</mi><mn>2</mn><mi>L</mi></mrow></math>, la pulsación propia es <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mover><mi>V</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi>L</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Circuito RLC.",
     "src": "../media/irudiak/a72750709fa95db6.svg",
     "zabalera": 176
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fuerza sinusoidal"
    },
    {
     "mota": "testua",
     "html": "El caso más sencillo —y, como veremos en las secciones 7.3.6 y 7.3.7, el más importante— es cuando la acción externa es sinusoidal:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>&gt;</mo><mn>0</mn><mo>,</mo><mi mathvariant=\"normal\">Ω</mi><mo>≥</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math> son constantes. Esta ecuación es lineal pero no homogénea; por tanto, la solución se escribe de la forma siguiente (véase, por ejemplo, [46]):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mi>g</mi></msub><mo>+</mo><msub><mi>x</mi><mi>u</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aquí, la parte <math display=\"inline\"><msub><mi>x</mi><mi>g</mi></msub></math> es la <strong>solución transitoria</strong>, la que corresponde al oscilador libre que se obtiene haciendo <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, es decir, la solución general de la ecuación homogénea. Según el coeficiente de amortiguamiento, esta parte de la solución es (7.26), (7.28) o (7.29); pero en cualquier caso es monótonamente decreciente (pues <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>): pasados unos cuantos tiempos característicos será despreciable y quedará solo la parte <math display=\"inline\"><msub><mi>x</mi><mi>u</mi></msub></math>, la llamada <strong>solución estacionaria</strong>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Fuerza externa del oscilador forzado, las tres soluciones y espacio de fases.",
     "src": "../media/irudiak/aac377893fb94c72.svg",
     "zabalera": 363
    },
    {
     "mota": "testua",
     "html": "Esta última es una solución particular especial de la ecuación completa. De nuevo, usaremos fasores para hacer el cálculo. Para ello escribiremos la fuerza externa <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la ecuación en forma compleja: <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>z</mi><mo>=</mo><mi>f</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para hallar una solución particular <em>periódica</em>, probaremos el fasor <math display=\"block\"><mrow><msub><mi>z</mi><mi>u</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con la estructura de la fuerza externa: <math display=\"block\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>φ</mi><mn>0</mn></msub></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>i</mi><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para que el fasor (7.36) sea solución, igualando las partes real e imaginaria del resultado anterior vemos que deben cumplirse las condiciones siguientes: <math display=\"block\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>A</mi><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, la solución estacionaria es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>z</mi><mi>u</mi></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aunque se usen las mismas letras, la amplitud <math display=\"inline\"><mi>A</mi></math> y la fase <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> de aquí no son las de la solución (7.26) dada por las condiciones iniciales, sino las definidas por las condiciones (7.38)–(7.39):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay que subrayar que estas constantes son independientes de las condiciones iniciales. Los valores de las condiciones iniciales son necesarios para conocer la respuesta transitoria, pero luego esta parte de la solución se va amortiguando y, al final, perdida la memoria de las condiciones iniciales, la solución es casi idéntica a (7.40). Esta solución especial"
    },
    {
     "mota": "testua",
     "html": "es un <strong>atractor</strong>"
    },
    {
     "mota": "testua",
     "html": ", porque atrae a todas las soluciones."
    },
    {
     "mota": "irudia",
     "oina": "Fasores de la fuerza externa y de la solución estacionaria.",
     "src": "../media/irudiak/76b1178c5c884d41.svg",
     "zabalera": 197
    },
    {
     "mota": "testua",
     "html": "Los fasores que representan la fuerza (7.34) y la solución estacionaria (7.36) giran con velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> (y no con la <math display=\"inline\"><msub><mi>ω</mi><mi>γ</mi></msub></math> de la solución transitoria), pero, como vemos en la condición (7.42), la solución <math display=\"inline\"><msub><mi>z</mi><mi>u</mi></msub></math> siempre está retrasada, como se muestra en la figura 7.9 usando <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math>. Como se ve en las expresiones (7.42) y (7.43), el retraso <math display=\"inline\"><mrow><mi>α</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> no depende de la amplitud <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "de la fuerza externa."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Impedancia"
    },
    {
     "mota": "testua",
     "html": "Supongamos que por el circuito de la figura 7.7 circula una corriente sinusoidal <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup></mrow></math>. Según la ley de Ohm, en el caso de la resistencia la relación entre la diferencia de potencial y la intensidad de corriente viene dada por la resistencia: <math display=\"block\"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mi>R</mi><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la autoinducción, en cambio, tenemos: <math display=\"block\"><mrow><msub><mi>V</mi><mi>L</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><mi>d</mi><mi>I</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mi>I</mi><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La diferencia de potencial lleva un adelanto de <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> y el resultado final puede escribirse en la forma de la ley de Ohm (7.44), <math display=\"block\"><mrow><msub><mi>V</mi><mi>L</mi></msub><mo>=</mo><msub><mi>Z</mi><mi>L</mi></msub><mi>I</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "si definimos la impedancia <math display=\"block\"><mrow><msub><mi>Z</mi><mi>L</mi></msub><mo>=</mo><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>L</mi></mrow></math>, que se mide en ohmios en el SI."
    },
    {
     "mota": "testua",
     "html": "De la misma manera, en el condensador, como la diferencia de potencial es <math display=\"block\"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><mfrac><mi>q</mi><mi>C</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mo>∫</mo><mi>I</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mfrac><mi>i</mi><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>−</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "vemos que hay un retraso <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> y, si se define la impedancia <math display=\"block\"><mrow><msub><mi>Z</mi><mi>C</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>i</mi><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "queda lo siguiente: <math display=\"block\"><mrow><msub><mi>V</mi><mi>C</mi></msub><mo>=</mo><msub><mi>Z</mi><mi>C</mi></msub><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La impedancia del circuito RLC es, por tanto, <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mi>R</mi><mo>+</mo><msub><mi>Z</mi><mi>L</mi></msub><mo>+</mo><msub><mi>Z</mi><mi>C</mi></msub><mo>=</mo><mi>R</mi><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la diferencia de potencial total <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>V</mi><mi>R</mi></msub><mo>+</mo><msub><mi>V</mi><mi>L</mi></msub><mo>+</mo><msub><mi>V</mi><mi>C</mi></msub></mrow></math> viene dada por la ley de Ohm generalizada: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>Z</mi><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El módulo de la impedancia se escribe así, mediante la resistencia <math display=\"inline\"><mi>R</mi></math> y las <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>L</mi></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>reactancias</strong>"
    },
    {
     "mota": "testua",
     "html": ": <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El desfase entre la diferencia de potencial y la intensidad <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>Z</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mfrac><mn>1</mn><mi>R</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, por lo que tenemos: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>Z</mi><mi>I</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas dos componentes de la impedancia, el módulo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> y el ángulo <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arg</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow></math>, dependen de la frecuencia, y la primera es mínima cuando las dos reactancias son iguales: si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mi>L</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Ω</mi><mi>C</mi></mrow></math>, tenemos <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mi>R</mi></mrow></math> y <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "De la misma manera, <math display=\"block\"><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>F</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en el caso del oscilador mecánico, si la velocidad es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup></mrow></math>, la <strong>impedancia mecánica</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>γ</mi><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>−</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ω</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mi>m</mi><mi mathvariant=\"normal\">Ω</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi><mo>+</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se define de modo que la fuerza sea la siguiente: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>Z</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El rozamiento desempeña el papel de la resistencia, la inercia el de la autoinducción y la rigidez que origina la fuerza recuperadora el de la capacidad."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba el resultado (7.58). ¿Por qué no se define la impedancia <math display=\"inline\"><mi>Z</mi></math> de modo que sea <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>Z</mi><mi>x</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, el módulo y la fase de la impedancia mecánica son: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mi>m</mi><mi mathvariant=\"normal\">Ω</mi></mfrac><msqrt><mrow><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><msqrt><mrow><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi></mrow><msqrt><mrow><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con estos resultados podemos recuperar los de la sección anterior, pues integrando <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>Z</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>i</mi><mi>F</mi></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mi>Z</mi></mrow></mfrac><mo>=</mo><mfrac><mi>F</mi><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>δ</mi><mo>+</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que los resultados (7.59)–(7.62) son equivalentes a las expresiones (7.36) y (7.41)–(7.43)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resonancia"
    },
    {
     "mota": "testua",
     "html": "La amplitud <math display=\"inline\"><mi>A</mi></math> de la respuesta estacionaria es proporcional a la intensidad <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> de la acción externa, pero la dependencia de la pulsación <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es más interesante. Cuando <math display=\"inline\"><mrow><mi>ω</mi><mi>/</mi><msqrt><mn>2</mn></msqrt><mo>&lt;</mo><mi>γ</mi><mo>&lt;</mo><mi>ω</mi></mrow></math>, la amplitud tiene un máximo de valor <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "cuando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, cuando la fuerza externa es constante. Si el amortiguamiento es tan débil que se cumple la condición <math display=\"inline\"><mrow><mi>γ</mi><mo>&lt;</mo><mi>ω</mi><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>, en cambio, hay un mínimo en la pulsación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Amplitud <math display=\"inline\"><mi>A</mi></math> de la respuesta estacionaria.",
     "src": "../media/irudiak/4c090a00ca8d3869.svg",
     "zabalera": 229
    },
    {
     "mota": "testua",
     "html": "Además, ahora"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "en el punto <math display=\"block\"><mrow><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≡</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>γ</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hay un máximo de valor, como se muestra en la figura 7.10. En este último caso se dice que hay <strong>resonancia de amplitud</strong>"
    },
    {
     "mota": "testua",
     "html": ". <br>  La amplitud máxima (7.65) tiende a infinito cuando el coeficiente de amortiguamiento tiende a cero. De hecho, como vemos en la figura 7.11, al disminuir <math display=\"inline\"><mi>γ</mi></math> la gráfica es más alta y más estrecha."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La anchura de las curvas de resonancia suele medirse a la altura <math display=\"inline\"><mrow><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>. Demuestra que, según (7.10), en esa pulsación, en la que la energía es la mitad de la máxima, tenemos lo siguiente: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msqrt><mn>2</mn></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mo>±</mo></msub><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mo>±</mo></msub><mo>=</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>γ</mi><mn>2</mn></msup><mo>±</mo><mn>2</mn><mi>γ</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></msqrt></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>±</mo><mi>γ</mi><mo>−</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>ω</mi></mrow></mfrac><mo>±</mo><mfrac><msup><mi>γ</mi><mn>3</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>4</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Por tanto, la anchura de la curva de resonancia, la amplitud máxima y la pulsación de resonancia son estas<span class=\"j-oin\">[Con la notación <math display=\"inline\"><mi mathvariant=\"script\">𝒪</mi></math> se quiere decir que se desprecian los términos equivalentes a la magnitud entre paréntesis. (Véase, por ejemplo, [46].) Así, tenemos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mi>!</mi><mo>+</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mi>!</mi><mo>−</mo><mi>⋯</mi><mo>=</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mi>!</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.]</span>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><msub><mi mathvariant=\"normal\">Ω</mi><mo>+</mo></msub><mo>−</mo><msub><mi mathvariant=\"normal\">Ω</mi><mo>−</mo></msub><mo>=</mo><mn>2</mn><mi>γ</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msub><mi>f</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>γ</mi><mi>ω</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>=</mo><mi>ω</mi><mo>−</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>ω</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>4</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo>=</mo><mi>−</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>γ</mi><mi>ω</mi></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Amplitud <math display=\"inline\"><mrow><mi>γ</mi><mi>/</mi><mi>ω</mi></mrow></math> para algunos valores.",
     "src": "../media/irudiak/70c428a46bdf479e.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "Al disminuir el amortiguamiento, la gráfica de la amplitud es más estrecha y más alta, y la frecuencia de resonancia correspondiente al máximo está más cerca de la frecuencia propia del oscilador, como se ve en la figura 7.11. Por tanto, aunque la amplitud <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math> de la acción externa sea muy pequeña, la de la solución estacionaria puede ser muy grande cuando el oscilador es muy <em>bueno</em> (es decir, si <math display=\"inline\"><mi>γ</mi></math> es pequeño), si la pulsación de la fuerza externa es casi igual al valor <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>=</mo><mi>ω</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que, cuando en el circuito RLC de la figura 7.7 tenemos <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la condición de resonancia, es decir, la condición para que la intensidad estacionaria sea máxima, es la siguiente: <math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mi>L</mi><mi>C</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Deduce que la resonancia se obtiene cuando el valor absoluto de la impedancia (7.53) es mínimo."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resonancia de energía"
    },
    {
     "mota": "testua",
     "html": "Como la energía potencial del oscilador es proporcional al cuadrado de la elongación, su valor medio es: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∝</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, en la resonancia de amplitud la energía potencial media es máxima. Pero calculemos la energía cinética media, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∝</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mfrac><mi mathvariant=\"normal\">Ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la potencia media que absorbe el oscilador<span class=\"j-oin\">[Véase, además, el problema 7.41.]</span>, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>F</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>∝</mo><mi>−</mi><msub><mi>f</mi><mn>0</mn></msub><mi>A</mi><mi mathvariant=\"normal\">Ω</mi><mfrac><mi mathvariant=\"normal\">Ω</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>f</mi><mn>0</mn></msub><mi>A</mi><mi mathvariant=\"normal\">Ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>γ</mi><msup><mi>A</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": "Energía cinética media y potencia.",
     "src": "../media/irudiak/5e20d661bae58084.svg",
     "zabalera": 198
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba las integrales para calcular los valores medios de las expresiones (7.75)–(7.76)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>γ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∝</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mfrac><msubsup><mi>f</mi><mn>0</mn><mn>2</mn></msubsup><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>−</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ω</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es máximo cuando el primer término del denominador es mínimo, es decir, cero. Así pues, la energía cinética media y la potencia absorbida son máximas, es decir, hay resonancia de energía, cuando las frecuencias de la acción externa y del oscilador libre son iguales: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>T</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>γ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒫</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∝</mo><mfrac><msubsup><mi>f</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mn>16</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "También aquí el efecto es mucho mayor cuando el coeficiente <math display=\"inline\"><mi>γ</mi></math> es pequeño, y en ese caso las dos resonancias se producen muy cerca una de otra:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A consecuencia de la expresión (7.42), <math display=\"block\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><mi>α</mi><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tenemos: <em>en la resonancia, la oscilación estacionaria que provoca la acción externa está retrasada un cuarto de periodo respecto de esta</em>, y los fasores correspondientes son perpendiculares."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué es nulo el mínimo de la resonancia de energía?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El fenómeno de la resonancia es muy importante en varios campos de la ciencia y la técnica: en geofísica, en física atómica y nuclear, en la teoría de circuitos electrónicos, etc. Se utiliza en los sintonizadores de radio y televisión, e incluso al empujar un columpio; pero a veces se evita, para eludir las posibles consecuencias perjudiciales. Por ejemplo, en los hornos microondas se elige la frecuencia de 2.45 GHz porque no se usa en telecomunicaciones y porque está muy por debajo de las frecuencias de resonancia del agua (véase [14]). Si fuera igual (o parecida) a una frecuencia normal del agua (véase la sección 7.6.1), las moléculas de agua de la superficie absorberían la mayor parte de las microondas y el interior no se calentaría. Por otro lado, parece que las causas de la célebre ruina del puente de Tacoma Narrows, mencionada en muchos textos, no fueron tan sencillas (véase [70, 83])."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Principio de superposición"
    },
    {
     "mota": "testua",
     "html": "En la sección anterior hemos considerado una única fuerza sinusoidal, pero ¿qué ocurre si las fuerzas externas son dos? Como las oscilaciones (7.30) de este tema son lineales, la respuesta es muy sencilla, porque se cumple el principio de superposición: en la solución general la solución transitoria será la misma, y si las funciones <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> son las soluciones estacionarias correspondientes a las fuerzas externas <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "y <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math>, y <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math> son constantes, la solución estacionaria correspondiente a la fuerza externa <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msub><mi>f</mi><mn>2</mn></msub></mrow></math> es la combinación <math display=\"inline\"><mrow><msub><mi>a</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math>. En consecuencia, si la fuerza externa se escribe como combinación de fuerzas sinusoidales, la solución correspondiente será la combinación de soluciones del tipo que conocemos."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra el principio de superposición para el oscilador (7.30)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fuerza periódica"
    },
    {
     "mota": "testua",
     "html": "Supongamos que en la ecuación (7.30) la acción externa es una función de periodo <math display=\"inline\"><mi>T</mi></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Una función así puede escribirse como combinación de sinusoides mediante una <strong>serie de Fourier</strong> adecuada (véase, por ejemplo, [46])<span class=\"j-oin\">[Véase la animación de la página .]</span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que al sustituir la serie de la expresión (7.81) en la integral de (7.82) se recupera el coeficiente <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>, ya que se cumple: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>=</mo><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde hemos usado la delta de Kronecker."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Oscilación rectangular.",
     "src": "../media/irudiak/a7da5225f3f9de83.svg",
     "zabalera": 231
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos el perfil rectangular de la figura 7.13. Como el periodo es <math display=\"inline\"><mi>T</mi></math>, la pulsación es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>T</mi></mrow></math> y los coeficientes de Fourier son <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>c</mi><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>a</mi><mi>T</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>T</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>π</mi><mi>i</mi><mi>n</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>−</mo><msubsup><mo>∫</mo><mrow><mi>T</mi><mi>/</mi><mn>2</mn></mrow><mi>T</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>π</mi><mi>i</mi><mi>n</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup><mi>d</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>a</mi><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>π</mi><mi>n</mi></mrow></msup></mrow><mrow><mi>i</mi><mi>π</mi><mi>n</mi></mrow></mfrac><mo>=</mo><mi>a</mi><mfrac><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mi>i</mi><mi>π</mi><mi>n</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>a</mi><mrow><mi>i</mi><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mi>±</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>±</mi><mn>4</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>…</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>2</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mi>±</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>±</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>…</mi></mtd></mtr></mtable></mrow></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta las propiedades de simetría de la función, es evidente que <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. La serie de Fourier del perfil, por tanto, se escribe así, escribiendo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msup><mi>e</mi><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>i</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>i</mi><mi>t</mi><mi>/</mi><mi>T</mi></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>t</mi></mrow><mi>T</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la función es impar, aparecen solo senos y no cosenos. En la figura 7.14 se muestran las sumas de los primeros <math display=\"inline\"><mi>N</mi></math> armónicos. Es evidente que la convergencia es más lenta en el entorno de los puntos de discontinuidad: esto se llama <strong>fenómeno de Gibbs</strong>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Fenómeno de Gibbs.",
     "src": "../media/irudiak/320ff173f8e3a869.svg",
     "zabalera": 269
    },
    {
     "mota": "testua",
     "html": "La solución correspondiente a la fuerza (7.81), que se obtiene directamente usando el principio de superposición, es de la estructura (7.40)"
    },
    {
     "mota": "testua",
     "html": "; pero, aunque como antes la solución transitoria <math display=\"inline\"><msub><mi>x</mi><mi>g</mi></msub></math> sea (7.26), (7.28) o (7.29), la solución estacionaria <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><msub><mi>c</mi><mi>n</mi></msub><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es la siguiente, con las definiciones siguientes: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>γ</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi></mrow><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub><mo>≡</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que esa es la solución."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las soluciones reales se recuperan con las condiciones <math display=\"inline\"><mrow><msub><mi>c</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><mover><msub><mi>c</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><msub><mi>c</mi><mi>n</mi></msub><mo>+</mo><msub><mi>c</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mi>n</mi></msub><mo>−</mo><msub><mi>c</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>2</mn><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fuerza general"
    },
    {
     "mota": "testua",
     "html": "Aunque la acción externa no sea periódica, puede expresarse mediante sinusoides usando la <strong>transformada de Fourier</strong> (véase, por ejemplo, [46]):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que si en la integral de la expresión (7.92) se sustituye la de (7.93), se recupera <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ya que la delta de Dirac (véase la sección B.7) se escribe así: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La solución correspondiente se obtiene directamente usando el principio de superposición: tiene la estructura (7.40). Como de costumbre, <math display=\"inline\"><msub><mi>x</mi><mi>g</mi></msub></math> será la solución transitoria (7.26), (7.28) o (7.29) y la estacionaria será la siguiente: <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>γ</mi><mi mathvariant=\"normal\">Ω</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que esa es la solución."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las expresiones manifiestamente reales se obtienen haciendo <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">¯</mo></mover></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>i</mi><mfrac><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hay otra expresión útil de la solución estacionaria: <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mn>1</mn><msub><mi>ω</mi><mi>γ</mi></msub></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>γ</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es la llamada <strong>función de Green</strong>"
    },
    {
     "mota": "testua",
     "html": "—o, a veces, <strong>propagador</strong>—."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra las siguientes propiedades de la función de Green: <math display=\"block\"><mrow><mover><mi>G</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay que usar estas últimas propiedades para ver que (7.101) es la solución: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>ω</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>2</mn><mi>γ</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>1</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>t</mi></msubsup><mover><mi>G</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>G</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>u</mi></msub><mo>+</mo><mn>2</mn><mi>γ</mi><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mi>u</mi></msub><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><mn>0</mn><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "En el cálculo anterior hemos usado el siguiente resultado general: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msubsup><mo>∫</mo><mi>a</mi><mi>t</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>=</mo><msubsup><mo>∫</mo><mi>a</mi><mi>t</mi></msubsup><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema fundamental"
    },
    {
     "mota": "testua",
     "html": "Supongamos que el oscilador está en reposo y que en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>a</mi></mrow></math> se le aplica un impulso de valor <math display=\"inline\"><msub><mi>f</mi><mn>0</mn></msub></math>. Usando la delta de Dirac (véase la sección B.7), este problema fundamental se escribe así: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&lt;</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa (7.101)–(7.102), la función de Heaviside, <math display=\"block\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>&gt;</mo><mi>a</mi><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>&lt;</mo><mi>a</mi></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "y la definición de <math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": ", para comprobar que la solución del problema fundamental es <math display=\"inline\"><mrow><msub><mi>f</mi><mn>0</mn></msub><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Después, comprueba directamente en la ecuación de movimiento que es solución."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "La fuerza <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede entenderse como una suma de impulsos infinitesimales.",
     "src": "../media/irudiak/447885e7776f0e4b.svg",
     "zabalera": 205
    },
    {
     "mota": "testua",
     "html": "A la inversa, como todas las fuerzas son una suma de impulsos infinitesimales, <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la solución estacionaria correspondiente se obtiene usando la solución del problema fundamental, gracias al principio de superposición: <math display=\"block\"><mrow><msub><mi>x</mi><mi>u</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que (7.101) y (7.112) son equivalentes."
      }
     ]
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Pulsaciones (batidos)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Supongamos que en un punto tenemos la suma de dos oscilaciones de frecuencias distintas (por ejemplo, esto ocurre cuando se oyen dos notas musicales): <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>+</mo><msub><mi>z</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El ángulo <math display=\"block\"><mrow><mi>δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>20</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>20</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "entre los dos fasores varía con la pulsación <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math> y, en consecuencia, lo mismo le ocurre a la amplitud total <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> (véase la figura 7.16). Así, cuando <math display=\"inline\"><mrow><mi>δ</mi><mrow><mi mathvariant=\"normal\">mod</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo>≈</mo><mn>0</mn></mrow></math> los dos fasores estarán en fase y la amplitud será máxima: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≈</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>. Por otra parte, cuando <math display=\"inline\"><mrow><mi>δ</mi><mrow><mi mathvariant=\"normal\">mod</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>π</mi><mo>≈</mo><mi>π</mi></mrow></math> los dos fasores están en oposición de fase y la amplitud es mínima: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Batidos en el caso <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> arriba y cuando <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>2</mn></msub></mrow></math> abajo.",
     "src": "../media/irudiak/9a2748a6a02ffe80.svg",
     "zabalera": 312
    },
    {
     "mota": "testua",
     "html": "Además, se comprueba fácilmente que la oscilación total (7.113) se escribe de la siguiente forma equivalente: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>10</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>≡</mo><mfrac><mrow><msub><mi>φ</mi><mn>10</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>20</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>ξ</mi><mo>≡</mo><mfrac><mrow><msub><mi>φ</mi><mn>10</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>20</mn></msub></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(Naturalmente, intercambiando los índices 1 y 2 en el resultado (7.115) se obtiene otra expresión equivalente.)"
    },
    {
     "mota": "testua",
     "html": "Consideremos, para empezar, que <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>. En ese caso, la oscilación (7.113) se reduce a: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Son oscilaciones de amplitud <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> que varía lentamente (de pulsación <math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "): se llaman <strong>batidos</strong>. Se muestran en la figura 7.16, en el gráfico superior, en el caso <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>/</mi><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>0.9</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>10</mn></msub><mo>=</mo><msub><mi>φ</mi><mn>20</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. En el gráfico inferior puede verse lo que ocurre cuando <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math>: la modulación de la amplitud no es total. En cualquier caso, la frecuencia de los batidos es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mi>t</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ν</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ν</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Por qué (7.119) y no <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, los batidos pueden usarse para medir la velocidad de los automóviles mediante un radar, junto con el efecto Doppler (véase el problema 9.61). Por otra parte, al colocar un diapasón junto a una cuerda de piano de la misma nota, se oirán batidos si las frecuencias no son exactamente iguales: se puede variar la tensión para hacer desaparecer los batidos y afinar el piano."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Oscilador armónico anisótropo en dos dimensiones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos el movimiento de una partícula de masa <math display=\"inline\"><mi>m</mi></math> en <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "un potencial elástico anisótropo (véase el problema 7.76). En el lagrangiano correspondiente las coordenadas <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math> aparecen separadas, <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>L</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>x</mi></msub><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msub><mi>k</mi><mi>y</mi></msub><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>x</mi></msub><mo>≡</mo><msqrt><mfrac><msub><mi>k</mi><mi>x</mi></msub><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mo>≡</mo><msqrt><mfrac><msub><mi>k</mi><mi>y</mi></msub><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y lo mismo ocurre en las ecuaciones de movimiento: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>x</mi><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mi>y</mi><mn>2</mn></msubsup><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tenemos dos osciladores armónicos <em>independientes</em>. Las soluciones se escriben directamente: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mi>x</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mi>y</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>y</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este ejemplo (y, por ejemplo, en las pequeñas oscilaciones del problema 6.69) las oscilaciones independientes se obtienen en las coordenadas originales, pero esto no ocurre siempre así, y en las secciones 7.6 y 7.7 estudiaremos el método para encontrar las coordenadas que ponen de manifiesto las oscilaciones independientes (las coordenadas normales, precisamente)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modos normales"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><msub><mi>A</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, solo tenemos la pulsación <math display=\"inline\"><msub><mi>ω</mi><mi>x</mi></msub></math>, el movimiento es periódico y se dice que el oscilador está en el <strong>primer modo</strong>. Del mismo modo, cuando <math display=\"inline\"><mrow><msub><mi>A</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, tenemos un movimiento periódico de pulsación <math display=\"inline\"><msub><mi>ω</mi><mi>y</mi></msub></math> y el oscilador está en el segundo modo. Por tanto, <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>y</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>x</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>y</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "usando la notación matricial, la solución se escribe como combinación de dos modos independientes <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msub><mi>C</mi><mi>x</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi></mrow></msup><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>x</mi></msub><mo>+</mo><msub><mi>C</mi><mi>y</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi></mrow></msup><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>y</mi></msub><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>x</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>x</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>x</mi></msub><mo>+</mo><msub><mi>A</mi><mi>y</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>y</mi></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mover><mi mathvariant=\"bold-italic\">𝒆</mi><mo accent=\"true\">̂</mo></mover><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Figuras de Lissajous.",
     "src": "../media/irudiak/c54d365d9684a873.svg",
     "zabalera": 401
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Figuras de Lissajous"
    },
    {
     "mota": "testua",
     "html": "Si el cociente de las dos pulsaciones es racional, tenemos <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mi>/</mi><msub><mi>ω</mi><mi>x</mi></msub><mo>=</mo><mi>p</mi><mi>/</mi><mi>q</mi></mrow></math>, siendo <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math> números naturales primos entre sí. Por tanto, el cociente de los periodos de las oscilaciones en ambas direcciones también es racional <math display=\"inline\"><mrow><msub><mi>T</mi><mi>y</mi></msub><mi>/</mi><msub><mi>T</mi><mi>x</mi></msub><mo>=</mo><mi>q</mi><mi>/</mi><mi>p</mi></mrow></math> y ambas admiten el periodo <math display=\"inline\"><mrow><mi>T</mi><mo>≡</mo><mi>q</mi><msub><mi>T</mi><mi>x</mi></msub><mo>=</mo><mi>p</mi><msub><mi>T</mi><mi>y</mi></msub></mrow></math>: el movimiento será periódico. En las ocho primeras filas de la figura 7.17 pueden verse algunas órbitas periódicas, clasificadas mediante las magnitudes <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>y</mi></msub><mi>/</mi><msub><mi>ω</mi><mi>x</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>δ</mi><mo>≡</mo><msub><mi>φ</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub><mo>−</mo><msub><mi>φ</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub></mrow></math>. <br> Si las pulsaciones de las dos oscilaciones no son conmensurables, la órbita no es periódica; no se cierra y pasa tan cerca como se quiera de cada punto del rectángulo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><msub><mi>A</mi><mi>x</mi></msub><mo>≤</mo><mi>x</mi><mo>≤</mo><msub><mi>A</mi><mi>x</mi></msub><mo>,</mo><mi>−</mi><msub><mi>A</mi><mi>y</mi></msub><mo>≤</mo><mi>y</mi><mo>≤</mo><msub><mi>A</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: es densa en dicho rectángulo. En la última línea de la figura 7.17 pueden verse algunos ejemplos: si se dibujara una parte más larga de las órbitas, el rectángulo aparecería lleno. El movimiento es biperiódico."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Oscilaciones acopladas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Estudiemos el sistema mecánico de la figura 7.19. En la parte superior los muelles están sin deformar. Como coordenadas generalizadas elegiremos las abscisas <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> medidas desde ese equilibrio. Así, las deformaciones de los muelles izquierdo y derecho son <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, y la del central, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math>. Por tanto, el lagrangiano es: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>k</mi><mo>′</mo></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msubsup><mi>x</mi><mn>2</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Oscilaciones acopladas.",
     "src": "../media/irudiak/310af721becbf2ca.svg",
     "zabalera": 207
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de movimiento se calculan directamente, <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y es evidente que no son independientes: están acopladas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modos normales"
    },
    {
     "mota": "testua",
     "html": "El método para hallar las soluciones consiste en buscar soluciones periódicas (es decir, modos normales). Probemos en las ecuaciones (7.131)–(7.132) una solución periódica de la forma siguiente: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Simplificando las exponenciales obtenemos: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este sistema lineal homogéneo admite siempre la solución nula correspondiente al equilibrio: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Para admitir otras soluciones hay que exigir que el determinante del sistema sea cero: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><mn>2</mn><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, solo pueden darse dos pulsaciones,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>+</mo><mn>2</mn><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "las <strong>pulsaciones normales</strong>"
    },
    {
     "mota": "testua",
     "html": "(o <strong>frecuencias normales</strong>), precisamente. Los coeficientes <math display=\"inline\"><msub><mi>C</mi><mi>k</mi></msub></math> se obtienen resolviendo una de las ecuaciones (7.133)–(7.134)"
    },
    {
     "mota": "testua",
     "html": "(ambas son proporcionales entre sí cuando admiten soluciones no nulas): <math display=\"block\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msup><mfrac><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>k</mi></mfrac><mo>′</mo></msup><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>;</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msub><mi>C</mi><mn>1</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tenemos, pues, dos modos normales (es decir, dos soluciones periódicas independientes). La solución del sistema <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "cuando, las dos partículas se mueven en fase y en el mismo sentido: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>. El muelle central está sin deformar y, por tanto, como si no existiera, la frecuencia normal es <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Primer y segundo modo normal.",
     "src": "../media/irudiak/32186a4c143b6087.svg",
     "zabalera": 377
    },
    {
     "mota": "testua",
     "html": "En el otro modo, en cambio, ese muelle trabaja, la frecuencia es mayor y tenemos: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El desfase entre las dos partículas vale <math display=\"inline\"><mi>π</mi></math>, están en oposición de fase y se mueven en sentidos distintos: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub></mrow></math>. <br> Usando el principio de superposición, vemos que la solución general de las ecuaciones de movimiento es <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>−</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": ". Usando las condiciones iniciales pueden calcularse las cuatro constantes de integración: <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>C</mi><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>C</mi><mo>,</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>D</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>D</mi></mrow></math>; o <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi><mo>,</mo><msub><mi>φ</mi><mn>01</mn></msub></mrow></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>02</mn></msub></math>. La solución será periódica si <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math> son conmensurables y biperiódica en caso contrario. Además, aprovechando la libertad para elegir las coordenadas generalizadas, las ecuaciones de movimiento pueden escribirse como las de dos osciladores independientes como los que hemos visto en la sección anterior. Es evidente —en este ejemplo sencillo— que para ello basta calcular la suma y la diferencia de las ecuaciones (7.144) y (7.145)"
    },
    {
     "mota": "testua",
     "html": ". En efecto, definamos las siguientes coordenadas generalizadas, que son combinaciones lineales de las coordenadas iniciales: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>≡</mo><msqrt><mfrac><mi>m</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>≡</mo><msqrt><mfrac><mi>m</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas se llaman <strong>coordenadas normales</strong>"
    },
    {
     "mota": "testua",
     "html": ". Se ve directamente que en ese caso la solución (7.144)–(7.145) se escribe de la forma siguiente, escribiendo las amplitudes mediante las constantes <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>C</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>D</mi></mrow></math> (es decir, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>A</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>≡</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mi>B</mi></mrow></math>): <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>≡</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>≡</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el espacio abstracto de estas coordenadas normales, por tanto, la órbita será una figura de Lissajous. <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "cuando, solo varía la <math display=\"inline\"><msub><mi>Q</mi><mn>1</mn></msub></math> que representa el modo normal <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>1</mn></msub><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>; <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "si, la coordenada <math display=\"inline\"><msub><mi>Q</mi><mn>2</mn></msub></math> que queda corresponde al modo <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>2</mn></msub><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>. En general, en el movimiento participarán los dos modos y las dos coordenadas normales. <br> Las dos coordenadas normales aparecen separadas no solo en la solución, sino también en el lagrangiano y en las ecuaciones de movimiento."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que en coordenadas normales el lagrangiano (7.130) y las ecuaciones de movimiento (7.131)–(7.132) se escriben como los de osciladores independientes: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>1</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como veremos, lo que hemos hecho aquí puede hacerse en un caso muy general. Aunque los osciladores estén acoplados, mediante una transformación <em>lineal</em> adecuada de las coordenadas, las <em>coordenadas normales</em> aparecen separadas en el lagrangiano y en las ecuaciones de movimiento. Aunque en el movimiento general haya más de un periodo, para cada coordenada normal tenemos un oscilador (abstracto) independiente, que corresponde a un movimiento periódico especial del sistema. El estudio del sistema se reduce, pues, al caso del oscilador armónico, el que mejor conocemos. El método que hemos usado en este ejemplo para encontrar las coordenadas y las frecuencias normales es parecido a la resolución del problema de autovalores y autovectores: la condición (7.137) tiene la estructura de las ecuaciones características y las (7.135)–(7.136) son del tipo de las que luego hay que resolver para calcular las componentes de los autovectores. En la sección 7.7 plantearemos el caso general, resolviendo un problema de autovalores y autovectores generalizados para obtener la solución."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oscilaciones forzadas"
    },
    {
     "mota": "testua",
     "html": "En el ejemplo anterior hemos trabajado suponiendo nulos el rozamiento y las fuerzas externas, pero evidentemente en muchos casos esto no será cierto y para resolver las ecuaciones de movimiento habrá que resolver un problema algebraico más complicado. Como el sistema es lineal, para empezar hay que resolver el problema homogéneo correspondiente a fuerzas externas nulas para obtener la <strong>solución transitoria</strong>; luego hay que añadirle la <strong>solución estacionaria</strong>, que es una solución particular del sistema completo."
    },
    {
     "mota": "testua",
     "html": "Como ejemplo, consideremos que la masa izquierda del caso anterior sufre la fuerza externa <math display=\"inline\"><mrow><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En lugar de las ecuaciones de movimiento (7.131)–(7.132) tendremos: <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La solución del sistema homogéneo será (7.144)–(7.145) de la sección anterior y, como no hay rozamiento, no será transitoria en este caso especial, sino de amplitud media constante. Para encontrar la solución particular que hay que añadirle, usaremos lo visto en la sección 7.3.1. Al no haber rozamiento, como consecuencia de la expresión (7.42)"
    },
    {
     "mota": "testua",
     "html": "esperamos que el desfase entre la solución y la fuerza sea <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math>. Como <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>π</mi></mrow></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, es un mero signo de desfase de valor <math display=\"inline\"><mi>π</mi></math> y, por tanto, <math display=\"inline\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msub><mi>C</mi><mi>i</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "hemos probado una solución particular de la forma en las ecuaciones (7.155)–(7.156): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>1</mn></msub><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este sistema es parecido al (7.135)–(7.136): en lugar de <math display=\"inline\"><mi>ω</mi></math> de los osciladores aparece <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> de la fuerza externa"
    },
    {
     "mota": "testua",
     "html": "y ahora el sistema es no homogéneo y tendrá una única solución cuando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>≠</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>,</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": ", es decir, cuando no hay resonancia."
    },
    {
     "mota": "testua",
     "html": "De hecho, la solución, que se calcula fácilmente, es <math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></mfrac><msub><mi>F</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><msup><mi>k</mi><mo>′</mo></msup><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo>−</mo><mi>m</mi><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></mfrac><msub><mi>F</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "o bien, usando las pulsaciones normales (7.138), <math display=\"block\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mfrac><msub><mi>F</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mfrac><msub><mi>F</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y se muestra en la figura 7.21 usando el parámetro <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mn>2</mn></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "."
    },
    {
     "mota": "irudia",
     "oina": "Los coeficientes <math display=\"inline\"><msub><mi>C</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>C</mi><mn>2</mn></msub></math>.",
     "src": "../media/irudiak/dd300aee744b611e.svg",
     "zabalera": 322
    },
    {
     "mota": "testua",
     "html": "Como era de esperar, la resonancia se producirá cuando la frecuencia de la fuerza externa y una frecuencia normal sean iguales. Al despreciar el rozamiento, la amplitud de resonancia tiende a infinito (en realidad, en el límite la solución estacionaria no es periódica y el estudio anterior no se aplica directamente: véase el problema 7.53). En la figura 7.21 se ve cuándo están en fase y en oposición de fase los dos osciladores, y cada oscilador respecto de las fuerzas externas, en la solución estacionaria. (El efecto de las fuerzas externas y del amortiguamiento en el caso general se estudia en [37].)"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Pequeñas oscilaciones y coordenadas normales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Estudiemos el movimiento en torno a un mínimo cuadrático aislado de una energía potencial general, es decir, las oscilaciones que se dan cerca de un equilibrio estable. Como en el mínimo las derivadas <math display=\"inline\"><mrow><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub></mrow></math> son cero, el desarrollo de Taylor de la energía potencial <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></math> en torno al punto de equilibrio se escribe así: <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>i</mi></msub><mo>−</mo><msub><mi>q</mi><mrow><mi>i</mi><mn>0</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>j</mi></msub><mo>−</mo><msub><mi>q</mi><mrow><mi>j</mi><mn>0</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "No cambia nada si tomamos la constante <math display=\"inline\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> igual a cero, aprovechando la libertad de elegir el nivel cero de la energía. Del mismo modo, no se pierde nada si mediante una traslación adecuada se elige el origen de las coordenadas generalizadas en el punto de equilibrio, de modo que <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. De aquí en adelante, para abreviar la notación, haremos siempre esas dos elecciones y, por ejemplo, quedará <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si se cumplen las hipótesis hechas, la primera aproximación interesante de la energía potencial es cuadrática:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msub><mi>q</mi><mi>i</mi></msub><mi>∂</mi><msub><mi>q</mi><mi>j</mi></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>0</mn></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde la <strong>matriz de rigidez</strong> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>, de elementos, es simétrica y definida positiva, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "porque en el punto hay un mínimo: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, admitiremos siempre que <em>el sistema mecánico es natural</em>; por tanto, la aproximación del resultado (6.140) se escribe así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>≡</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mrow><mi>j</mi><mi>i</mi></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como la energía mecánica no es negativa, la <strong>matriz de masas</strong> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> de elementos constantes <math display=\"inline\"><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math>"
    },
    {
     "mota": "testua",
     "html": "es simétrica y definida positiva: <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>≥</mo><mn>0</mn><mo>,</mo><mo>∀</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>…</mi><mo>=</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la aproximación que queremos estudiar, en el lagrangiano solo se conservarán los términos cuadráticos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>−</mo><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de Lagrange que se obtienen de aquí serán las aproximaciones lineales de las ecuaciones de movimiento:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̈</mo></mover><mi>j</mi></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para hallar los modos y las pulsaciones normales pueden probarse directamente soluciones periódicas de la forma <math display=\"inline\"><mrow><msub><mi>q</mi><mi>k</mi></msub><mo>=</mo><msub><mi>C</mi><mi>k</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><msub><mi>A</mi><mi>k</mi></msub><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; pero el siguiente resultado algebraico nos da una manera sistemática de hacer el cálculo."
    },
    {
     "mota": "testua",
     "html": "<strong>Problema de valores y vectores propios generalizados</strong>"
    },
    {
     "mota": "testua",
     "html": "Supongamos que tenemos dos matrices simétricas, <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑻</mi><mi>⊤</mi></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑽</mi><mi>⊤</mi></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, y que la primera es definida positiva. Las soluciones <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub></mrow></math> de la siguiente <strong>ecuación característica</strong> (<strong>raíces características</strong> o autovalores generalizados) son reales:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>11</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>12</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>21</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mn>22</mn></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mn>22</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mi>n</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mi>n</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>V</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>T</mi><mrow><mi>n</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la forma <math display=\"inline\"><mi>V</mi></math> también es definida positiva, los autovalores generalizados son positivos. En cualquier caso, resolviendo el sistema lineal asociado a cada <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>i</mi></msub></mrow></math> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi></mrow></math> o"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5489692b2a2f04be.svg\" alt=\"mat(delim: #none, (V_(11) - lambda T_(11)) u_1 + (V_(12) - lambda T_(12)) u_2 + ... + (V_(1 n) - lambda T_(1 n)) u_n, =, 0; (V_(21) - lambda T_(21)) u_1 + (V_(22) - lambda T_(22)) u_2 + ... + (V_(2 n) - lambda T_(2 n)) u_n, =, 0; dots.v, , ; (V_(n 1) - lambda T_(n 1)) u_1 + (V_(n 2) - lambda T_(n 2)) u_2 + ... + (V_(n n) - lambda T_(n n)) u_n, =, 0;)\" style=\"width:31.128em;height:5.539em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se obtienen vectores independientes <math display=\"inline\"><mi>n</mi></math> (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mrow><mi>i</mi><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mrow><mi>i</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>S</mi><mrow><mi>i</mi><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>) que cumplen las condiciones siguientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑺</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mn mathvariant=\"bold\">𝟏</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msubsup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi><mi>⊤</mi></msubsup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>j</mi></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>k</mi><mo>,</mo><mi>l</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>k</mi><mi>l</mi></mrow></msub><msub><mi>S</mi><mrow><mi>k</mi><mi>i</mi></mrow></msub><msub><mi>S</mi><mrow><mi>l</mi><mi>j</mi></mrow></msub><mo>=</mo><msub><mi>δ</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math> que tiene esos vectores en las columnas es invertible (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">det</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>≠</mo><mn>0</mn></mrow></math>) y, con el cambio lineal de variable correspondiente (<strong>transformación de semejanza</strong>), las coordenadas normales <math display=\"inline\"><msub><mi>X</mi><mi>i</mi></msub></math> definidas,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>S</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>X</mi><mi>j</mi></msub><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y si se usa la matriz diagonal <math display=\"inline\"><mrow><mi mathvariant=\"bold\">𝚲</mi><mo>≡</mo><msup><mi mathvariant=\"bold-italic\">𝑺</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> diag</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>λ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de los autovalores generalizados, las dos formas cuadráticas aparecen en forma normal (diagonalizada):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑿</mi><mi>⊤</mi></msup><mo>⋅</mo><mn mathvariant=\"bold\">𝟏</mn><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>X</mi><mi>k</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝒙</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒙</mi><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝑿</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold\">𝚲</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑿</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>x</mi><mi>i</mi></msub><msub><mi>x</mi><mi>j</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>λ</mi><mi>k</mi></msub><msubsup><mi>X</mi><mi>k</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí no demostraremos estos resultados; bastará decir que es un problema muy parecido al de los autovalores y autovectores ordinarios: solo hay que poner en algunos lugares la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> en lugar de la matriz identidad. Naturalmente, como en dicho problema, aquí también los autovalores pueden ser múltiples y, como las matrices <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> son simétricas, si la multiplicidad de un autovalor generalizado es <math display=\"inline\"><mi>m</mi></math>, siempre pueden elegirse —de infinitas maneras— <math display=\"inline\"><mi>m</mi></math> autovectores generalizados independientes que cumplan la condición de ortogonalidad (7.173) en el subespacio de los autovectores correspondiente (en la sección 7.7.2 estudiaremos un caso así)."
    },
    {
     "mota": "testua",
     "html": "Todo el cálculo, que a menudo resulta tedioso, puede hacerse automáticamente en el sistema <em>Mathematica</em> [52] usando el siguiente fichero (véase la figura 7.22): <code>http://tp.lc.ehu.eus/jma/mekanika/bbpo.nb</code>"
    },
    {
     "mota": "irudia",
     "oina": "Modos normales del sistema de la figura 7.19 con <em>Mathematica</em>.",
     "src": "../media/irudiak/422710c8e3418a4e.svg",
     "zabalera": 3
    },
    {
     "mota": "testua",
     "html": "Como en el origen hay un mínimo cuadrático aislado, la forma <math display=\"inline\"><mi>V</mi></math> será definida positiva y expresaremos los autovalores correspondientes como <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>i</mi></msub><mo>≡</mo><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><mo>&gt;</mo><mn>0</mn></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑸</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>q</mi><mi>i</mi></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>S</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>Q</mi><mi>j</mi></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "en las coordenadas normales definidas por las ecuaciones, las energías cinética y potencial aparecen diagonalizadas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒒</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mover><mi mathvariant=\"bold-italic\">𝑸</mi><mo accent=\"true\">̇</mo></mover><mi>⊤</mi></msup><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝑸</mi><mo accent=\"true\">̇</mo></mover><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mi>k</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi mathvariant=\"bold-italic\">𝒒</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi mathvariant=\"bold-italic\">𝑸</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold\">𝚲</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑸</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>,</mo><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>ω</mi><mi>k</mi><mn>2</mn></msubsup><msubsup><mi>Q</mi><mi>k</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces, los modos normales se desacoplan:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>L</mi><mi>i</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>L</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><msubsup><mi>Q</mi><mi>i</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑸</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi mathvariant=\"bold\">𝚲</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑸</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mi>i</mi></msub><mo>+</mo><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><msub><mi>Q</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el espacio abstracto de coordenadas <math display=\"inline\"><msub><mi>Q</mi><mi>i</mi></msub></math> tenemos <math display=\"inline\"><mi>n</mi></math> oscilaciones independientes, cada una de las cuales es una solución periódica del sistema (un modo normal)."
    },
    {
     "mota": "testua",
     "html": "Sin embargo, si la forma <math display=\"inline\"><mi>V</mi></math> no es definida positiva (porque el mínimo no es aislado, etc.), alguna de las frecuencias propias puede ser cero. En un caso así, el modo normal correspondiente no será periódico, ya que al hacer <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> en la ecuación (7.177) se obtiene la solución <math display=\"inline\"><mrow><msub><mi>Q</mi><mi>i</mi></msub><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>t</mi></mrow></math>. Cuando esto ocurre, se dice que el modo es nulo. (Véase la sección 7.7.3.)"
    },
    {
     "mota": "irudia",
     "oina": "Péndulos acoplados.",
     "src": "../media/irudiak/75139186221635cc.svg",
     "zabalera": 171
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulos acoplados"
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, consideremos los dos péndulos idénticos de la figura 7.23. Cuando están en posición vertical el muelle está sin deformar: esa es, por tanto, la posición de equilibrio. La energía mecánica y la matriz correspondiente se escriben directamente y, como son cuadráticas, no hay que hacer ninguna otra aproximación: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mn>11</mn></msub><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>T</mi><mn>12</mn></msub><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mn>22</mn></msub><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> (Como la energía cinética es diagonal, se dice que las coordenadas elegidas son <strong>ortogonales</strong>.)"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, la energía potencial gravitatoria de un péndulo es mínima en la posición mencionada; por tanto, haremos la aproximación <math display=\"block\"><mrow><mi>m</mi><mi>g</mi><msub><mi>y</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>≈</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><msubsup><mi>θ</mi><mi>i</mi><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y olvidaremos el término constante <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi></mrow></math>, sin consecuencias. Para calcular la energía elástica del muelle hay que usar la deformación: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>l</mi><msub><mi>θ</mi><mn>2</mn></msub><mo>−</mo><mi>l</mi><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba esta aproximación mediante el desarrollo de Taylor."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como en la energía potencial aparece el cuadrado de la deformación, basta la aproximación lineal de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>d</mi></mrow></math>: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>θ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>θ</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mn>11</mn></msub><msubsup><mi>θ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>V</mi><mn>12</mn></msub><msub><mi>θ</mi><mn>1</mn></msub><msub><mi>θ</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mn>22</mn></msub><msubsup><mi>θ</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑽</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para hallar los autovalores generalizados <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math> hay que resolver la ecuación característica (7.171): <img class=\"formula formula-d\" src=\"../media/formulak/63bf12ab5566aee6.svg\" alt=\"0 = abs(bold(V) - omega^2 bold(T)) = mat(delim: &quot;|&quot;, m g l + k l^2 - m l^2 omega^2, -k l^2; -k l^2, m g l + k l^2 - m l^2 omega^2) #linebreak() = (m g l + k l^2 - m l^2 omega^2)^2 - (k l^2)^2 = (m g l - m l^2 omega^2) (m g l + 2 k l^2 - m l^2 omega^2).\" style=\"width:37.072em;height:5.414em\" loading=\"lazy\"> Las pulsaciones normales son, pues, las siguientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay que sustituir estos valores en las ecuaciones (7.172) para calcular los autovectores generalizados. En este caso las dos ecuaciones son proporcionales entre sí y, por ejemplo, resolviendo <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>l</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mn>1</mn></msub><mo>−</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><msub><mi>u</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> con los valores (7.187), se obtiene <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><msub><mi>u</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>u</mi><mn>2</mn></msub></mrow></math>. Como corresponden a valores generalizados distintos, los dos vectores son automáticamente ortogonales (respecto de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math>) y la normalización se obtiene haciendo <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mi>j</mi></mrow></math> en la condición (7.173): <math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi><mi>⊤</mi></msubsup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mi>i</mi></msub><mo>=</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>u</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>u</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> En consecuencia, los autovectores normalizados y la matriz de semejanza se escriben así: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La relación entre las coordenadas originales y las normales es, por tanto, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>Q</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>Q</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>. Así pues, las coordenadas generalizadas originales se escriben mediante las coordenadas normales de esta manera: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>−</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Modos normales de los péndulos acoplados.",
     "src": "../media/irudiak/6fccd5163904754c.svg",
     "zabalera": 349
    },
    {
     "mota": "testua",
     "html": "En el primer modo normal, por tanto, tenemos <math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mn>1</mn></msub><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup></mrow></math>: los dos péndulos se mueven del mismo modo con su frecuencia normal, con el muelle sin deformar, como si no estuviera en el sistema. En el segundo modo, en cambio, la frecuencia es mayor y los dos péndulos están en oposición de fase: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><msub><mi>Q</mi><mn>2</mn></msub><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Prueba directamente soluciones periódicas de la forma <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>i</mi></msub><mo>=</mo><msub><mi>C</mi><mi>i</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> para encontrar las frecuencias y los modos normales del ejemplo anterior."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La solución general será de la forma: <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>−</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo>=</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>01</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mn>02</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Pulsaciones</strong>"
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que, cuando el péndulo derecho está en reposo en posición vertical, soltamos el izquierdo desde un ángulo de valor <math display=\"inline\"><mi>α</mi></math>. Las condiciones iniciales son <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mo>,</mo><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y la solución correspondiente es <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>α</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mi>t</mi><mi>.</mi></mrow></math> Por tanto, teniendo en cuenta lo hecho en la sección 7.4, con las definiciones <math display=\"block\"><mrow><mi>ε</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>≡</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac></mrow></math>, las soluciones de las ecuaciones de movimiento se escriben <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mi>ε</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi mathvariant=\"normal\">sin</mi><mi>ε</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> o bien <math display=\"block\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mi>ε</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ε</mi><mi>t</mi><mo>−</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de los péndulos en el caso de acoplamiento débil.",
     "src": "../media/irudiak/4a9ceedf5da4d87a.svg",
     "zabalera": 480
    },
    {
     "mota": "testua",
     "html": "Si ahora el acoplamiento es débil, <math display=\"block\"><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>≪</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>,</mo></mrow></math> queda lo siguiente: <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>≈</mo><mfrac><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow><mrow><mn>2</mn><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow><mn>2</mn></mfrac><mo>≈</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>≪</mo><mi>ω</mi></mrow></math>. Por tanto, las evoluciones (7.203)–(7.204) de los dos ángulos son batidos, es decir, oscilaciones de amplitud que varía lentamente. Además, hay un desfase de valor <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> entre las amplitudes, que varían con la frecuencia pequeña <math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. Al principio la amplitud de un péndulo es máxima y la del otro nula, pero la del primero va disminuyendo a medida que la del otro aumenta, hasta que es máxima. Así, intercambian continuamente entre sí amplitud y energía mecánica."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de los péndulos en el caso <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>.",
     "src": "../media/irudiak/8f724c71b3b8e919.svg",
     "zabalera": 418
    },
    {
     "mota": "testua",
     "html": "En la sección 7.4 vimos que cuando se superponen dos oscilaciones de frecuencias parecidas, como en el caso (7.196), aparecen batidos<span class=\"j-oin\">[Escucha lo de la página <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/taupadak.html</code> y mira la simulación <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/normalak.html</code>.]</span>."
    },
    {
     "mota": "testua",
     "html": "Si el segundo oscilador no está en reposo al principio, su energía nunca es cero: la transferencia de energía no es total, como se muestra en la figura 7.27."
    },
    {
     "mota": "irudia",
     "oina": "Evolución de los péndulos cuando la relación entre las longitudes es <math display=\"inline\"><mrow><msub><mi>l</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><msub><mi>l</mi><mn>1</mn></msub></mrow></math>.",
     "src": "../media/irudiak/a8600666dba753ad.svg",
     "zabalera": 418
    },
    {
     "mota": "testua",
     "html": "Hay que subrayar que los batidos que se dan en este caso son consecuencia de que las frecuencias normales de los osciladores (péndulos) son iguales (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></math>. Lo mismo ocurre cuando las dos frecuencias normales son casi iguales, pero si son muy distintas y un oscilador empieza a moverse, las amplitudes de los dos modos normales serán muy distintas: el segundo oscilador casi no se moverá y la amplitud del primero será casi constante."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelve el ejemplo de la sección 7.6 usando el método sistemático de aquí."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modos normales degenerados"
    },
    {
     "mota": "testua",
     "html": "Consideremos la placa homogénea de la figura 7.28, colocada sobre cuatro muelles idénticos. Supongamos que estos solo pueden moverse en la dirección vertical. En ese caso, las coordenadas generalizadas adecuadas son la altura <math display=\"inline\"><mi>z</mi></math> del centro de masas y —para conocer la orientación— los ángulos <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mi>θ</mi></math> de la figura. En esas coordenadas generalizadas, y recordando que estamos cerca de la configuración de equilibrio horizontal, las alturas de los cuatro vértices se escriben así: <math display=\"block\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mi>z</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>−</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mo>=</mo><mi>z</mi><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>−</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>3</mn></msub><mo>=</mo><mi>z</mi><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>+</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>z</mi><mn>4</mn></msub><mo>=</mo><mi>z</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mi>φ</mi><mo>+</mo><mfrac><mi>b</mi><mn>2</mn></mfrac><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Placa colocada sobre unos muelles.",
     "src": "../media/irudiak/caea735751baad54.svg",
     "zabalera": 226
    },
    {
     "mota": "testua",
     "html": "No hemos dicho desde dónde se miden las alturas del centro de masas y de los vértices. Si las coordenadas <math display=\"inline\"><msub><mi>z</mi><mi>i</mi></msub></math> son los alargamientos de los muelles, la energía potencial es: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>m</mi><mi>g</mi><mi>z</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>4</mn></munderover><msubsup><mi>z</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><mi>m</mi><mi>g</mi><mi>z</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Pero hay que desarrollarla en torno a la configuración de equilibrio <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>0</mn></msub><mo>,</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≡</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dada por las condiciones <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>m</mi><mi>g</mi><mo>+</mo><mn>4</mn><mi>k</mi><mi>z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>φ</mi></mrow></mfrac><mo>=</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>k</mi><msup><mi>b</mi><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><msub><mi>z</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mi>k</mi><msubsup><mi>z</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>4</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> (En este ejemplo, como el orden más alto que aparece en la energía potencial es cuadrático, este desarrollo es exacto, no una aproximación.) Por tanto, dejando de lado el primer término sin importancia, si las alturas se miden desde la configuración de equilibrio (haciendo <math display=\"inline\"><mrow><mi>y</mi><mo>≡</mo><mi>z</mi><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>y</mi><mi>i</mi></msub><mo>≡</mo><msub><mi>z</mi><mi>i</mi></msub><mo>−</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>), la energía potencial queda así, sin términos lineales: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>4</mn></munderover><msubsup><mi>y</mi><mi>i</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para escribir la energía cinética usaremos el triedro del sistema del sólido: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>24</mn></mfrac><mi>m</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Como las energías (7.214) y (7.215) son diagonales, el problema de autovalores y autovectores está casi resuelto, pues las oscilaciones son independientes: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>φ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>12</mn></mfrac><mi>m</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>k</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Aquí se ve directamente que las pulsaciones normales son <math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>12</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt></mrow></math> y que las coordenadas originales son proporcionales a las normales: <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msqrt><mi>m</mi></msqrt><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mi>m</mi><mn>12</mn></mfrac></msqrt><mi>a</mi><mi>φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msqrt><mfrac><mi>m</mi><mn>12</mn></mfrac></msqrt><mi>b</mi><mi>θ</mi><mi>.</mi></mrow></math> De hecho, se ve fácilmente que con esas definiciones el lagrangiano queda así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>1</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>Q</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><msubsup><mi>Q</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En este ejemplo un autovalor, una pulsación normal, es doble, y todas las combinaciones lineales normalizadas de los coeficientes constantes de las dos coordenadas normales correspondientes también son normales, pues ambas cumplen la misma ecuación de movimiento: <math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>3</mn></msub><mo>+</mo><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Como se ve, todas las combinaciones <math display=\"inline\"><mrow><mi>Q</mi><mo>≡</mo><msub><mi>C</mi><mn>1</mn></msub><msub><mi>Q</mi><mn>2</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msub><mi>D</mi><mn>1</mn></msub><mi>φ</mi><mo>+</mo><msub><mi>D</mi><mn>2</mn></msub><mi>θ</mi></mrow></math> cumplirán la misma ecuación: <math display=\"block\"><mrow><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mi>Q</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En consecuencia, en el primer modo tenemos <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y en todos los demás <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>D</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modos normales nulos"
    },
    {
     "mota": "testua",
     "html": "Estudiemos el movimiento del sistema mecánico lineal simétrico de la figura 7.29 en la dirección de su eje, suponiendo despreciable la influencia de la gravedad. Podemos considerar este sistema como un modelo sencillo de las moléculas lineales triatómicas. Aunque para calcular las frecuencias normales de las moléculas reales hay que usar la física cuántica, para obtener una idea cualitativa (y entender las consecuencias de las simetrías) bastará el siguiente cálculo clásico."
    },
    {
     "mota": "irudia",
     "oina": "Modelo sencillo de molécula lineal triatómica.",
     "src": "../media/irudiak/b3544879a3295764.svg",
     "zabalera": 236
    },
    {
     "mota": "testua",
     "html": "La energía cinética y la potencial y las matrices correspondientes son sencillas si elegimos como coordenadas generalizadas los desplazamientos <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><msub><mi>x</mi><mn>3</mn></msub></math> medidos desde las posiciones de reposo (véase la figura 7.29): <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>M</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>3</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑽</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Como las dos energías son cuadráticas, no hay que hacer ninguna aproximación. La ecuación característica es: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>k</mi><mo>−</mo><mi>M</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que las pulsaciones y los autovectores de este sistema son los siguientes:"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>M</mi></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mi>M</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>m</mi><mi>/</mi><mi>M</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Deduce que las relaciones entre las coordenadas iniciales y las normales son <math display=\"block\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>m</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><mi>M</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>M</mi><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><mi>m</mi><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> o bien <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msqrt><mi>M</mi></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>+</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><msub><mi>Q</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msqrt><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>−</mo><msqrt><mi>M</mi></msqrt><msub><mi>Q</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msqrt><mi>M</mi></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>+</mo><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><msub><mi>Q</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, hay tres modos normales:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Cuando <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, tenemos un modo simétrico: las masas de los extremos oscilan en oposición de fase en torno a la del centro, que está en reposo: <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>",
      "Cuando <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, las tres masas se mueven, las de los extremos en un sentido y la central en oposición de fase: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mfrac><mi>M</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mi>M</mi><mrow><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>",
      "Si <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>=</mo><msub><mi>Q</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, la coordenada normal que cambia es proporcional a la abscisa (el desplazamiento) <math display=\"inline\"><mi>X</mi></math> del centro de masas: <math display=\"inline\"><mrow><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt><mi>X</mi></mrow></math>. Por otra parte, como <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, no hay oscilación propiamente dicha, se dice que el modo es nulo y la ecuación que cumple la coordenada normal es la correspondiente al movimiento uniforme: <math display=\"block\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̈</mo></mover><mn>3</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msub><mi>C</mi><mn>3</mn></msub><mi>t</mi><mo>+</mo><msub><mi>D</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math> En este modo las tres partículas se mueven con la misma velocidad lineal constante: <math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><msub><mi>x</mi><mn>3</mn></msub><mo>=</mo><mi>X</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi><mo>+</mo><mi>M</mi></mrow></msqrt></mfrac><msub><mi>Q</mi><mn>3</mn></msub><mo>=</mo><msub><mi>A</mi><mn>3</mn></msub><mi>t</mi><mo>+</mo><msub><mi>B</mi><mrow><mn>3</mn><mi>.</mi></mrow></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "En los dos modos anteriores el centro de masas estaba en reposo y el momento lineal no solo era constante, sino nulo. (Naturalmente, si el problema se plantea en el sistema del centro de masas, solo hay dos grados de libertad y no aparece este modo nulo.) En este modo nulo la coordenada normal correspondiente es cíclica y no hay oscilación propiamente dicha: el sistema se mueve en conjunto con velocidad constante en la misma dirección (abstracta). Los modos nulos aparecen cuando el sistema tiene una simetría en esa dirección. Aquí hay una simetría de traslación global, y el cambio de la coordenada <math display=\"inline\"><msub><mi>Q</mi><mn>3</mn></msub></math> corresponde a esa traslación. Pero en otros casos la simetría del modo nulo expresará la invariancia respecto de un giro o de cualquier otra transformación, pues tal es el significado del cambio de la coordenada normal. En realidad, cuando hay un modo nulo, la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> no es definida positiva, pues hay una dirección nula: (al menos en el sistema lineal) en el origen no hay un mínimo aislado y en la dirección nula el equilibrio es neutro."
    },
    {
     "mota": "irudia",
     "oina": "Modos normales de vibración del formaldehído.",
     "src": "../media/irudiak/b060e3fb7b241537.svg",
     "zabalera": 486
    },
    {
     "mota": "testua",
     "html": "Si la molécula tiene <math display=\"inline\"><mi>N</mi></math> átomos, tendrá <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> grados de libertad y modos normales. Como en el espacio hay 3 direcciones de traslación independientes, siempre habrá 3 modos nulos de traslación. Del mismo modo hay 3 modos nulos de rotación independientes (2 en el caso de las moléculas lineales). Los modos de vibración propiamente dichos son, por tanto, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi><mo>−</mo><mn>6</mn></mrow></math> (<math display=\"inline\"><mrow><mn>3</mn><mi>N</mi><mo>−</mo><mn>5</mn></mrow></math> en las moléculas lineales)."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Cuerda discreta sometida a tensión",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una cuerda de longitud <math display=\"inline\"><mi>L</mi></math> tiene <math display=\"inline\"><mi>N</mi></math> partículas idénticas a distancias iguales <math display=\"inline\"><mrow><mi>a</mi><mo>≡</mo><mi>L</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir, en las abscisas <math display=\"inline\"><mrow><msub><mi>x</mi><mi>s</mi></msub><mo>=</mo><mi>s</mi><mi>a</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (en la figura 7.31 se ha dibujado el caso <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math>). La cuerda carece de masa y está sometida a tensión entre los extremos fijos <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></msub></math>: <math display=\"inline\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Las masas pueden oscilar en la dirección perpendicular, sin cambiar las abscisas. Supongamos que las amplitudes de las oscilaciones son pequeñas, que el módulo de la tensión <math display=\"inline\"><mi>T</mi></math> de la cuerda no cambia —véase, más adelante, el resultado (9.102)— y que la gravedad y el rozamiento son despreciables."
    },
    {
     "mota": "irudia",
     "oina": "Cuerda discreta sometida a tensión con <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math> partículas idénticas.",
     "src": "../media/irudiak/edeb1bb9607fa433.svg",
     "zabalera": 325
    },
    {
     "mota": "testua",
     "html": "Si se eligen como coordenadas generalizadas los desplazamientos perpendiculares <math display=\"inline\"><msub><mi>y</mi><mi>s</mi></msub></math> de las masas, es evidente que la energía cinética es: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mi>…</mi><mo>+</mo><msubsup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mi>N</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para calcular la energía potencial, consideremos el trozo de cuerda entre las partículas <math display=\"inline\"><mi>s</mi></math> y <math display=\"inline\"><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></math>. La longitud del trozo es <math display=\"inline\"><mi>a</mi></math> cuando las dos partículas están en equilibrio y al oscilar es <math display=\"block\"><mrow><mi>a</mi><mo>+</mo><mi>d</mi><msub><mi>l</mi><mi>s</mi></msub><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>x</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>≈</mo><mi>a</mi><mo>+</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>d</mi><msub><mi>l</mi><mi>s</mi></msub><mo>≈</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>y</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mi>.</mi></mrow></math> (Como los desplazamientos son pequeños, hemos usado el binomio de Newton para desarrollar la raíz cuadrada.) La variación de la energía potencial del trozo de cuerda será opuesta al trabajo realizado por la tensión <math display=\"inline\"><mi>T</mi></math> de la cuerda: <math display=\"inline\"><mrow><mi>d</mi><msub><mi>V</mi><mi>s</mi></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mi>s</mi></msub><mo>=</mo><mi>T</mi><mi>d</mi><msub><mi>l</mi><mi>s</mi></msub></mrow></math>. Por tanto, dejando de lado la energía potencial elástica constante que tiene en equilibrio, la energía potencial de la cuerda entera es: <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>…</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mi>N</mi></msub><mo>−</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msubsup><mi>y</mi><mi>N</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>0</mn></msub><mo>≡</mo><msqrt><mfrac><mi>T</mi><mrow><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Calculando las componentes perpendiculares de las fuerzas también se escriben fácilmente las ecuaciones de Lagrange: <math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><msub><mi>y</mi><mn>2</mn></msub><mo>+</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>⋮</mi></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>s</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>y</mi><mi>s</mi></msub><mo>+</mo><msub><mi>y</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>⋮</mi></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mi>N</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msub><mi>y</mi><mi>N</mi></msub><mo>+</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Todas se escriben como (7.246) si se recuerda que se cumplen las condiciones de contorno siguientes: <math display=\"block\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo>=</mo><msub><mi>y</mi><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Para encontrar los modos normales probamos la solución <math display=\"inline\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><msub><mi>C</mi><mi>s</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, y hay que resolver el siguiente problema algebraico: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mo>⋱</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>…</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mi>N</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>2</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mi>N</mi></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Cuando <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>1</mn></mrow></math> solo hay un modo normal: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> (véase el problema 7.8). El caso <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn></mrow></math> lo estudiaremos en el problema 7.77. Cuando <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>3</mn></mrow></math>, la ecuación característica es <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>4</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y los modos normales se calculan fácilmente<span class=\"j-oin\">[Mira la animación de la página <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/moduak1.html</code>.]</span>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/a30456618569a635.svg",
           "zabalera": 88
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>2</mn><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/1ed70dbd26b06669.svg",
           "zabalera": 88
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mo>:</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>C</mi><mn>3</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∝</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>2</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/0c9030807fa12078.svg",
           "zabalera": 88
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Asimismo, como en otros casos, el modo normal más lento se obtiene cuando todas las partículas se mueven en fase, es decir, en el mismo sentido, y el más rápido cuando las partículas sucesivas se mueven en oposición de fase. Como ejemplo, en la parte izquierda de la figura 7.32 se muestran los modos normales del caso <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>14</mn></mrow></math>. La simetría del problema es evidente en todos los modos y en los de arriba la cuerda tiene el aspecto de una sinusoide. En el centro de la figura, con líneas discontinuas, se muestra que en otros modos lentos ocurre lo mismo. Algo parecido ocurre para todos los valores de <math display=\"inline\"><mi>N</mi></math> (véase el problema 7.93) y, por tanto, en el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> cabe esperar que los modos normales sean sinusoides: en la sección 7.9 confirmaremos que es así."
    },
    {
     "mota": "testua",
     "html": "En la parte derecha de la figura 7.32 se muestra que la distribución de las frecuencias normales tiende a un límite determinado (en el problema 7.32 demostraremos el resultado exacto). Según eso, parece que existe un límite superior para la frecuencia normal: esto ocurre siempre cuando el número de partículas es finito. (Véanse la sección 9.9 y el problema 9.31 para ver qué ondas viajeras se propagan a lo largo de la cuerda.)"
    },
    {
     "mota": "irudia",
     "oina": "Modos normales (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>14</mn></mrow></math>) y pulsaciones normales (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>50</mn><mo>,</mo><mn>100</mn></mrow></math>).",
     "src": "../media/irudiak/7a76aaf64fabfcb7.svg",
     "zabalera": 408
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Cuerda continua sometida a tensión",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para estudiar lo que ocurre en el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math>, supongamos que al disminuir <math display=\"inline\"><mi>a</mi></math> también disminuye <math display=\"inline\"><mi>m</mi></math>, de modo que el límite <math display=\"block\"><mrow><mi>μ</mi><mo>≡</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>a</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mi>m</mi><mi>a</mi></mfrac><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></munder><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></mrow><mi>L</mi></mfrac></mrow></math> sea finito (y positivo). En dicho límite, por tanto, recuperaremos la cuerda continua de masa <math display=\"inline\"><mi>μ</mi></math> por unidad de longitud."
    },
    {
     "mota": "irudia",
     "oina": "Cuerda continua sometida a tensión.",
     "src": "../media/irudiak/4867168641fa66f0.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "En el límite, en lugar de las variables discretas <math display=\"inline\"><msub><mi>x</mi><mi>s</mi></msub></math> y <math display=\"inline\"><msub><mi>y</mi><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>, nos quedarán las variables continuas <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, según las siguientes sustituciones: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mi>s</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>x</mi><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>s</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mi>s</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>s</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mi>s</mi></msub><mo>−</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>a</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mn>2</mn></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mrow><mi>s</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>→</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msub><mi>x</mi><mi>s</mi></msub><mo>+</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>a</mi><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><msup><mi>a</mi><mn>2</mn></msup><mn>2</mn></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> (Como <math display=\"inline\"><mi>a</mi></math> es muy pequeño, en las dos últimas expresiones hemos hecho el desarrollo de Taylor.) En consecuencia, la ecuación de movimiento (7.246) de una partícula (punto) la escribimos como <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>T</mi><mrow><mi>μ</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>≈</mo><mfrac><mi>T</mi><mi>μ</mi></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "se reduce a la ecuación de ondas<span class=\"j-oin\">[Lagrange estudió la ecuación de la cuerda vibrante siguiendo la línea de esta sección.]</span> —véase (9.5)— y la velocidad de fase correspondiente es: <math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt><mi>.</mi></mrow></math> Para encontrar los modos normales probaremos la solución <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> en la ecuación (7.257), en lugar de <math display=\"inline\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><msub><mi>C</mi><mi>s</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>. Es evidente que se obtiene la condición <math display=\"block\"><mrow><msup><mi>C</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math><span class=\"j-oin\">[A esto se reduce, en una dimensión, la <strong>ecuación de Helmholtz</strong> tridimensional: <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>.]</span>, si el número de onda (véase la sección 9.2) es: <math display=\"block\"><mrow><mi>k</mi><mo>≡</mo><mfrac><mi>ω</mi><mi>v</mi></mfrac><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math> Como la ecuación (7.259) es la del oscilador armónico, sabemos que la solución general es <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi></mrow></math> de la página 25. Pero en este caso, como los extremos de la cuerda no se mueven, hay que cumplir las dos condiciones de contorno siguientes, en lugar de (7.248): <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Para cumplir la primera hay que tomar <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> y de la segunda se deduce <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math>. Como las soluciones no nulas de esta última ecuación son <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las pulsaciones normales"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>v</mi></mrow><mi>L</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "son, es decir<span class=\"j-oin\">[Las <strong>leyes de Mersenne</strong> recogen los resultados (7.264) y la primera, la relación <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>∝</mo><mn>1</mn><mi>/</mi><mi>L</mi></mrow></math>, es la <strong>ley de Pitágoras</strong>.]</span>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>π</mi><mi>v</mi></mrow><mi>L</mi></mfrac><mo>=</mo><mfrac><mi>π</mi><mi>L</mi></mfrac><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "los múltiplos <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><msub><mi>ω</mi><mn>1</mn></msub></mrow></math> de la pulsación fundamental (los <strong>armónicos</strong>)."
    },
    {
     "mota": "testua",
     "html": "Los modos normales son, por tanto, las partes reales de los siguientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>π</mi><mi>v</mi><mi>t</mi><mi>/</mi><mi>L</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La gráfica de la amplitud de los primeros modos se recoge en la figura 7.34. Cada modo es una onda estacionaria, de longitud de onda <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi><mi>/</mi><mi>n</mi></mrow></math>, y tiene <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> nodos<span class=\"j-oin\">[Esta propiedad es una consecuencia general de la teoría de Sturm y Liouville: véase, por ejemplo, la pág. 219 del texto [46].]</span>, es decir, <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> puntos (y los extremos) están siempre en reposo."
    },
    {
     "mota": "irudia",
     "oina": "Amplitudes de los cinco primeros modos normales de la cuerda continua.",
     "src": "../media/irudiak/9cfe7e7820d503fe.svg",
     "zabalera": 355
    },
    {
     "mota": "testua",
     "html": "En el caso de la cuerda discreta de la sección 7.8 hemos visto que existe un límite superior de las frecuencias normales. Aunque esto ocurre cuando el número de partículas es finito, en el límite continuo tenemos: <math display=\"block\"><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mi>T</mi><mrow><mi>m</mi><mi>a</mi></mrow></mfrac><mo>≈</mo><mfrac><mi>T</mi><mrow><mi>μ</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>→</mo><mi>∞</mi><mi>.</mi></mrow></math> Por tanto, como hemos encontrado en el resultado (7.263), en el límite continuo, a diferencia del discreto, la frecuencia normal máxima es infinita."
    },
    {
     "mota": "testua",
     "html": "El movimiento general de la cuerda continua sometida a tensión será la superposición de todos los modos normales, es decir, una oscilación de periodo <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi><mi>/</mi><mi>v</mi><mo>=</mo><mn>2</mn><msqrt><mrow><mi>M</mi><mi>L</mi><mi>/</mi><mi>T</mi></mrow></msqrt></mrow></math> dada por la siguiente serie de Fourier (o, si se prefiere, por la parte real de la siguiente serie)<span class=\"j-oin\">[A veces a este resultado se le llama <strong>solución de Bernoulli</strong>.]</span>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>π</mi><mi>v</mi><mi>t</mi><mi>/</mi><mi>L</mi></mrow></msup><mi>.</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Problemas resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factor de calidad"
    },
    {
     "mota": "testua",
     "html": "<em>El factor de calidad\n<math display=\"inline\"><mi>Q</mi></math> del oscilador amortiguado es el cociente entre la energía y la energía perdida en una variación de 1 rad de la fase:</em>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>≡</mo><mfrac><mi>E</mi><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">Δ</mi><mi>φ</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> r</mtext></mrow></mrow></msub></mrow></mfrac><mo>=</mo><mn>2</mn><mi>π</mi><mfrac><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>T</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>ω</mi><mi>γ</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Supongamos que el amortiguamiento es muy débil (<math display=\"inline\"><mrow><mi>γ</mi><mo>≪</mo><mi>ω</mi></mrow></math>), es decir, que el oscilador es de muy alta calidad: <math display=\"inline\"><mrow><mi>Q</mi><mo>≫</mo><mn>1</mn></mrow></math>. Demuestra que el factor de calidad</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>≈</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>γ</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>es ... y que la altura de la curva de resonancia viene dada por la siguiente expresión:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>≈</mo><mi>Q</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>¿Cómo se escribe la anchura de la curva de resonancia mediante <math display=\"inline\"><mi>Q</mi></math>? ¿Cuál es el\nfactor de calidad de un circuito RLC?</em>"
    },
    {
     "mota": "testua",
     "html": "Si el amortiguamiento es débil, como <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>γ</mi></msub><mo>≈</mo><mi>ω</mi></mrow></math>, (7.27) se escribe así: <math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>Q</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>E</mi></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>γ</mi><mi>T</mi></mrow></msup><mo>≈</mo><mn>2</mn><mi>γ</mi><mi>T</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>γ</mi></mrow><msub><mi>ω</mi><mi>γ</mi></msub></mfrac><mo>≈</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>γ</mi></mrow><mi>ω</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>Q</mi><mo>≈</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>γ</mi></mrow></mfrac><mi>.</mi></mrow></math> Usando esto y el binomio de Newton, (7.65) queda: <math display=\"block\"><mrow><mfrac><msub><mi>A</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>γ</mi><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mi>Q</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>Q</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>≈</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mrow><mn>8</mn><msup><mi>Q</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>Q</mi><mi>.</mi></mrow></math> Además, la anchura (7.69) de la curva de resonancia es: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>2</mn><mi>γ</mi><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>ω</mi><mi>Q</mi></mfrac><mo>+</mo><mi mathvariant=\"script\">𝒪</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>Q</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como la ecuación de los circuitos RLC es (7.31), tenemos: <math display=\"block\"><mrow><mi>Q</mi><mo>≈</mo><mfrac><mi>ω</mi><mrow><mn>2</mn><mi>γ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mfrac><mfrac><mi>L</mi><mi>R</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>R</mi></mfrac><msqrt><mfrac><mi>L</mi><mi>C</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Periodo de las oscilaciones no lineales"
    },
    {
     "mota": "testua",
     "html": "<em>Una partícula oscila bajo la acción de una fuerza conservativa entre los puntos de retorno <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>. Demuestra que el periodo de oscilación es el siguiente:</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><msqrt><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como en los puntos de retorno la velocidad y la energía cinética son cero, la ley de conservación de la energía mecánica se expresa así, usando su valor en el punto de retorno <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>±</mi><msqrt><mrow><mfrac><mn>2</mn><mi>m</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math> Si <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>&lt;</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, en la velocidad hay que elegir el signo <math display=\"inline\"><mi>+</mi></math> si la partícula va de <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> a <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> y el signo <math display=\"inline\"><mi>−</mi></math> en el viaje de vuelta. Como los intervalos de tiempo de esos dos trayectos son iguales, el periodo completo se escribe así: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><msqrt><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Periodo del péndulo matemático"
    },
    {
     "mota": "testua",
     "html": "<em>Usa la integral elíptica adecuada para calcular el periodo del péndulo matemático en función de la amplitud angular <math display=\"inline\"><mi>α</mi></math>. ¿Cómo se recupera del resultado exacto el que solemos usar en la aproximación de pequeñas oscilaciones?</em>"
    },
    {
     "mota": "testua",
     "html": "En la línea del ejercicio anterior, si la amplitud angular (es decir, el ángulo máximo) es <math display=\"inline\"><mi>α</mi></math>, el principio de conservación de la energía mecánica se escribe así: <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>l</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mi>.</mi></mrow></math> Separando las variables, y usando que la energía potencial es par, tenemos el periodo: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>α</mi></mrow><mi>α</mi></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><mn>4</mn><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><mi>l</mi></mrow><mi>g</mi></mfrac></msqrt><msubsup><mo>∫</mo><mn>0</mn><mi>α</mi></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math> Aquí, usando la identidad <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, el cambio de variable <math display=\"block\"><mrow><mi>m</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo>=</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>ν</mi></mrow></math> y la integral elíptica completa de primera especie de Legendre, <math display=\"block\"><mrow><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>2</mn></mfrac></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mi>m</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mfrac><mo>,</mo></mrow></math> (véase la sección B.5), se obtiene la siguiente expresión: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mi>K</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En esta última ecuación, haciendo el desarrollo de Taylor (B.117) respecto de la variable <math display=\"inline\"><mrow><mi>k</mi><mo>≡</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math>, vemos que el periodo del péndulo es <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>9</mn><mn>64</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y haciendo el desarrollo de Taylor respecto de <math display=\"inline\"><mi>α</mi></math>, lo siguiente: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><msup><mi>α</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>11</mn><mn>3072</mn></mfrac><msup><mi>α</mi><mn>4</mn></msup><mo>+</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Péndulo doble (Daniel Bernoulli, Euler, 1775)"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/3991c546a8e06f8e.svg",
     "zabalera": 181
    },
    {
     "mota": "testua",
     "html": "<em>¿Cuáles son las frecuencias normales del péndulo doble plano? Calcula los modos normales en los casos particulares <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≪</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>.</em>"
    },
    {
     "mota": "testua",
     "html": "Eligiendo como coordenadas generalizadas los ángulos <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math> de la figura, las ecuaciones de transformación exactas y aproximadas son: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>≈</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>l</mi><mn>1</mn></msub><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>x</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>≈</mo><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>y</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>≈</mo><mi>−</mi><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><msubsup><mi>φ</mi><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> Por tanto, las energías cinética y potencial y la ecuación característica que da los autovalores generalizados se escriben así: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>T</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mi mathvariant=\"normal\">cos</mi><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub><msubsup><mi>φ</mi><mn>2</mn><mn>2</mn></msubsup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">+konstantea</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑻</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑽</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>l</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>l</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><msub><mi>l</mi><mn>1</mn></msub><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi><mo>+</mo><mfrac><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac><mfrac><msup><mi>g</mi><mn>2</mn></msup><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>λ</mi><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>±</mo><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>1</mn></msub></mrow></mfrac><mfrac><mi>g</mi><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mtd></mtr></mtable></math> En el modo lento, que se obtiene con la resta, los dos péndulos se moverán en fase, y en el modo rápido en oposición de fase."
    },
    {
     "mota": "testua",
     "html": "Para simplificar los cálculos siguientes usemos estas variables adimensionales: <math display=\"block\"><mrow><mi>μ</mi><mo>≡</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><mi>g</mi></mfrac><mi>λ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>m</mi><mo>≡</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>l</mi><mo>≡</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mfrac></mrow></math> Entonces las pulsaciones normales se escriben así: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>±</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>l</mi></mrow></msqrt></mrow><mn>2</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>4</mn><mi>l</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mtd></mtr></mtable></math> La ecuación de los autovectores generalizados es <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><mi>l</mi><mi>μ</mi></mrow><mrow><mi>l</mi><mo>−</mo><mi>μ</mi></mrow></mfrac><mi>A</mi></mrow></math> y la condición de normalización, <math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑼</mi><mi>⊤</mi></msup><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><mi>l</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math> De ahí se obtienen los autovectores generalizados: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><mi>μ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mo>−</mo><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(a) <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≪</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math> (en el caso <math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mn>1</mn></mrow></math>), el cálculo de los modos normales queda así: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>4</mn><mi>l</mi></mrow><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mi>l</mi><mrow><mn>1</mn><mo>+</mo><mi>l</mi></mrow></mfrac><mo>,</mo></mtd></mtr></mtable></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑼</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>m</mi></msqrt></mfrac><mfrac><mn>1</mn><mi>l</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mo>−</mo><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>+</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>m</mi></msqrt></mfrac><mfrac><mn>1</mn><mi>l</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>μ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi><mi>μ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mi>m</mi></msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>l</mi></mrow><mi>l</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>l</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msub><mi>l</mi><mn>1</mn></msub></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msub><mi>l</mi><mn>2</mn></msub></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>m</mi></msqrt></mfrac><mfrac><mi>l</mi><mrow><mn>1</mn><mo>+</mo><mi>l</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msub><mi>l</mi><mn>1</mn></msub></mfrac><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow><msub><mi>l</mi><mn>2</mn></msub></mfrac><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mi>.</mi></mtd></mtr></mtable></math> Por tanto,"
    },
    {
     "mota": "testua",
     "html": "(a.1) En el modo <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>−</mo></msub><mo>=</mo><mn>0</mn></mrow></math>: tenemos <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, porque la masa de <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> es demasiado pequeña para hacer que <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> se mueva en dirección horizontal."
    },
    {
     "mota": "testua",
     "html": "(a.2) En el modo <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>=</mo><mn>0</mn></mrow></math>: tenemos <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>φ</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>+</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> se mueve como un péndulo matemático <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, como si <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> no existiera."
    },
    {
     "mota": "testua",
     "html": "(b) En el caso <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>≠</mo><mn>1</mn></mrow></math>), tenemos, en cambio: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>l</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mfrac><mi>l</mi><mrow><mi>l</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mi>l</mi><mo>,</mo></mtd></mtr></mtable></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>+</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>−</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>m</mi><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>2</mn></msub></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>+</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mi>l</mi><mrow><mi>l</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mi>m</mi></msqrt><mfrac><mi>l</mi><mrow><mi>l</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mi>l</mi><msqrt><mi>m</mi></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>Q</mi><mo>+</mo></msub><mo>−</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><msub><mi>l</mi><mn>1</mn></msub><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></mfrac><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><msub><mi>l</mi><mn>1</mn></msub><msub><mi>l</mi><mn>2</mn></msub></mfrac><msub><mi>Q</mi><mo>−</mo></msub><mi>.</mi></mtd></mtr></mtable></math> Entonces,"
    },
    {
     "mota": "testua",
     "html": "(b.1) En el modo <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>−</mo></msub><mo>=</mo><mn>0</mn></mrow></math> las dos masas se mueven en fase: <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(b.2) En el modo <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>=</mo><mn>0</mn></mrow></math> las dos masas se mueven en oposición de fase: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>1</mn></msub><mo>−</mo><msub><mi>l</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><msub><mi>l</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(c) En el caso <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≫</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>l</mi><mn>1</mn></msub><mo>=</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>1</mn></mrow></math>), <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>μ</mi><mo>±</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>1</mn><mo>±</mo><msqrt><mi>m</mi></msqrt><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msubsup><mi>ω</mi><mo>±</mo><mn>2</mn></msubsup></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mi>g</mi><msub><mi>l</mi><mn>1</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>+</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mo>−</mo></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>φ</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msub><mi>Q</mi><mo>−</mo></msub></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo>,</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msub><mi>Q</mi><mo>−</mo></msub></mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mo>=</mo><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mfrac><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>+</mo><msub><mi>Q</mi><mo>−</mo></msub></mrow><msqrt><mn>2</mn></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(c.1) En el modo <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>−</mo></msub><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msqrt><msub><mi>m</mi><mn>1</mn></msub></msqrt><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msqrt><msub><mi>m</mi><mn>2</mn></msub></msqrt><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "(c.2) En el modo <math display=\"inline\"><mrow><msub><mi>Q</mi><mo>+</mo></msub><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msqrt><msub><mi>m</mi><mn>1</mn></msub></msqrt><msub><mi>φ</mi><mn>1</mn></msub><mo>=</mo><msqrt><msub><mi>m</mi><mn>2</mn></msub></msqrt><msub><mi>φ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Oscilaciones eléctricas"
    },
    {
     "mota": "testua",
     "html": "<em>Halla los modos normales del circuito de la figura.</em>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/08bc9119ffc9f792.svg",
     "zabalera": 188
    },
    {
     "mota": "testua",
     "html": "Si definimos el sentido de las corrientes con el convenio de la figura, y recordando la ecuación <math display=\"block\"><mrow><mi>L</mi><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>R</mi><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mi>I</mi><mo>=</mo><mi>L</mi><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> del circuito RLC (o el lagrangiano <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>L</mi><msup><mover><mi>I</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>C</mi></mrow></mfrac><msup><mi>I</mi><mn>2</mn></msup></mrow></math>), tenemos: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>L</mi><msub><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>L</mi><msub><mover><mi>I</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑻</mi><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝑰</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑰</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑻</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑽</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/dcdd717d5d300e3f.svg",
     "zabalera": 188
    },
    {
     "mota": "testua",
     "html": "Un cálculo directo demuestra que las soluciones de la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> son las pulsaciones normales <math display=\"block\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>L</mi><mi>C</mi></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mfrac><mn>3</mn><mrow><mi>L</mi><mi>C</mi></mrow></mfrac></msqrt></mrow></math> y las soluciones de las condiciones <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msubsup><mi>ω</mi><mi>i</mi><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑼</mi><mo>=</mo><mn>0</mn></mrow></math> son las siguientes: <math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑼</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto, las relaciones entre las intensidades y las coordenadas normales son: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>I</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>I</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><mi>−</mi><msub><mi>Q</mi><mn>1</mn></msub><mo>+</mo><msub><mi>Q</mi><mn>2</mn></msub></mrow><msqrt><mrow><mn>2</mn><mi>L</mi></mrow></msqrt></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>Q</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>−</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>Q</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> En el primer modo normal tenemos <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>I</mi><mn>2</mn></msub></mrow></math> y las dos corrientes irán en el mismo sentido (en el de las agujas del reloj o al revés): es el modo lento. En el modo rápido, como <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>, los sentidos de las dos corrientes serán opuestos."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Osciladores armónicos, amortiguados y forzados</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La energía potencial de una partícula viene dada por la siguiente expresión: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>c</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Calcula la posición de equilibrio estable y el periodo de las pequeñas oscilaciones. Supongamos que la partícula empieza a moverse desde la posición de equilibrio estable. ¿Cómo debe ser la velocidad inicial para que la partícula (a) empiece a oscilar, (b) vaya hacia <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi></mrow></math>, (c) escape hacia <math display=\"inline\"><mrow><mi>+</mi><mi>∞</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si dos muelles están en paralelo o en serie, ¿cuál es la constante recuperadora equivalente, es decir, la constante recuperadora del muelle equivalente que ejerce la misma fuerza sobre la partícula?"
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/d35d779a061af1ca.svg",
       "zabalera": 111
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la amplitud de la oscilación <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un oscilador amortiguado pierde la mitad de su amplitud en cada ciclo. ¿Cuánta energía pierde en un ciclo? ¿Cuál es el factor de calidad del oscilador?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La siguiente fuerza externa empieza a actuar en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> sobre un oscilador en reposo: <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>ω</mi><mi>t</mi><mi>.</mi></mrow></math> (a) Si el coeficiente de amortiguamiento es <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mn>4</mn></mrow></math> y la pulsación propia del oscilador <math display=\"inline\"><mi>ω</mi></math>, ¿cómo es el movimiento del oscilador? (b) ¿Qué condición debe cumplirse para que la oscilación correspondiente a la pulsación <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math> sea mayor que la correspondiente a <math display=\"inline\"><mi>ω</mi></math>?"
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
       "html": "Halla la solución del oscilador de la figura sometido a la fuerza externa en el caso <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi><mo>=</mo><mi>γ</mi></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9aa20c85dad23aa5.svg",
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
       "html": "La fuerza externa que sufre un oscilador mecánico es: <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>F</mi><mn>0</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bestela</mtext></mrow><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math> ¿Cuál será el movimiento del oscilador si está en reposo en la posición de equilibrio en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudia el movimiento transversal del oscilador de la figura, en la aproximación de pequeñas oscilaciones, teniendo en cuenta que la tensión <math display=\"inline\"><mi>T</mi></math> de la cuerda tensa no cambia (véase el resultado (9.102)). No hay gravedad."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/154cc59da4847fbd.svg",
       "zabalera": 131
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En alta mar, el movimiento de la habitación de un marinero de 80 kilos es armónico, de amplitud <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2</mn></mrow></math> m y periodo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>8</mn></mrow></math> s. Si se sube a una báscula, ¿cuáles serán las lecturas máxima y mínima?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se usan una cuerda ligera de longitud <math display=\"inline\"><mi>l</mi></math> y una bola homogénea de radio <math display=\"inline\"><mi>r</mi></math> para hacer un péndulo. Halla el periodo de las pequeñas oscilaciones en el caso general y en la aproximación <math display=\"inline\"><mrow><mi>r</mi><mo>≪</mo><mi>l</mi></mrow></math>. ¿Cómo debe ser el cociente <math display=\"inline\"><mrow><mi>r</mi><mi>/</mi><mi>l</mi></mrow></math> para que el error cometido en el periodo al despreciar las dimensiones de la bola sea menor del 1 %?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un paralelepípedo homogéneo de lados <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> y <math display=\"inline\"><mi>c</mi></math> tiene una densidad relativa al agua <math display=\"inline\"><mi>ρ</mi></math> y está en equilibrio sobre el agua con el lado de longitud <math display=\"inline\"><mi>a</mi></math> en dirección vertical. Si se presiona en dirección vertical, ¿cuál será el periodo de las oscilaciones que aparecen?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La energía potencial de la molécula de K Cl es <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mi>A</mi><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>R</mi><mn>7</mn></msup><mrow><mn>8</mn><msup><mi>r</mi><mn>7</mn></msup></mrow></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde <math display=\"inline\"><mi>r</mi></math> es la distancia entre los dos átomos, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>2.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>2.31</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup></mrow></math> J m. Halla la frecuencia de las pequeñas oscilaciones radiales. <em>Datos</em>: <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">K </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>39.10</mn></mrow></math> u y <math display=\"inline\"><mrow><msub><mi>m</mi><mrow><mtext mathvariant=\"normal\">Cl </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>34.45</mn></mrow></math> u."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula la variación del periodo del péndulo matemático cuando la variación de la aceleración de la gravedad es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>g</mi></mrow></math>. ¿Cómo cambia un reloj de péndulo que funciona bien en Quito (a 2850 m de altitud) cuando se usa en Leioa y en el monte Everest? <em>Nota</em>: Desprecia las diferencias de latitud."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando una persona de 70 kg entra en un automóvil de 500 kg, el centro de masas de este queda 2 cm más abajo. ¿Cuál es la constante recuperadora de los muelles de la suspensión? ¿Cómo debe ser el coeficiente de amortiguamiento para que el automóvil no empiece a oscilar al pasar sobre pequeños baches de la carretera?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuál es la capacidad del condensador que hay que colocar junto con una bobina de <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>6</mn><mi>μ</mi><mi>H</mi></mrow></math> para sintonizar señales de radio de frecuencia 6195 kHz?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un oscilador armónico amortiguado se aplica la fuerza <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a partir del instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. ¿Qué condiciones iniciales hacen falta para que no haya respuesta transitoria en ese instante?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La constante recuperadora de un muelle vertical es <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>3</mn></mrow></math> N/m y tiene una masa de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0.6</mn></mrow></math> kg en equilibrio en el extremo inferior. Si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> se empieza a aplicar una fuerza de valor <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>12</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn><mi>t</mi></mrow></math> N, halla la solución de las ecuaciones de movimiento despreciando el rozamiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> está en equilibrio colgada de un muelle de constante <math display=\"inline\"><mi>k</mi></math>. Si en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se le aplica una fuerza constante <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub></mrow></math>, demuestra que la distancia a la que se encuentra del punto de equilibrio cuando la fuerza desaparece es: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><msub><mi>F</mi><mn>0</mn></msub><mi>k</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>≡</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud de un péndulo matemático es <math display=\"inline\"><mi>l</mi></math> y su masa <math display=\"inline\"><mi>m</mi></math>. Si la fuerza de rozamiento que le ejerce el medio es <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi><msqrt><mrow><mi>g</mi><mi>l</mi></mrow></msqrt><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, ¿cómo es el movimiento?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelve la ecuación de movimiento del oscilador forzado que sufre una fuerza constante y comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se usan una masa de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g y un muelle de constante <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> dina/cm para hacer un oscilador con un tiempo de relajación de <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>0.5</mn></mrow></math> s. Si la fuerza externa es <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>10</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>90</mn><mi>t</mi></mrow></math> dina, halla la pulsación propia y la del oscilador amortiguado, la amplitud de la oscilación forzada estacionaria y el desfase entre esta y la fuerza externa."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un péndulo matemático mide 1 m de longitud. Al principio la amplitud de oscilación es 0.05 m, pero 5 minutos después se ha reducido a la mitad. Calcula el coeficiente de amortiguamiento, el tiempo característico, el factor <math display=\"inline\"><mi>Q</mi></math> y la energía que pierde en un ciclo al principio, si la masa es 0.1 kg."
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
       "html": "Explica por qué es verdadera o falsa cada una de las afirmaciones siguientes. Si es falsa, explica cuál puede ser el cambio más pequeño para que sea verdadera. (a) «El movimiento de todas las partículas que se mueven muy cerca de cualquier mínimo de la energía potencial es armónico.» (b) «La energía mecánica de un oscilador armónico es proporcional al cuadrado de su velocidad en el punto de equilibrio.»"
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
       "html": "La amplitud de la onda portadora de <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>g</mi></msub><mo>=</mo><mn>1</mn></mrow></math> MHz de la señal de una radio AM se modula con la frecuencia de <math display=\"inline\"><mrow><msub><mi>ν</mi><mi>m</mi></msub><mo>=</mo><mn>1</mn></mrow></math> kHz. Por tanto, como se muestra en la figura, se producen muchas oscilaciones de la portadora casi sin cambiar la amplitud. En la misma figura puede verse el esquema de un receptor de radio. La onda incidente produce en la antena la tensión oscilante <math display=\"inline\"><mrow><msub><mi>V</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>g</mi></msub><mi>t</mi></mrow></msup></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>≈</mo><mn>1</mn></mrow></math> mV y <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>g</mi></msub><mo>=</mo><mn>2</mn><mi>π</mi><msub><mi>ν</mi><mi>g</mi></msub></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/724d7307b569af2e.svg",
       "zabalera": 290
      },
      {
       "mota": "testua",
       "html": "(a) Si <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>300</mn></mrow></math> pF y <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>5</mn><mi mathvariant=\"normal\">Ω</mi></mrow></math>, ¿cómo hay que elegir <math display=\"inline\"><mi>L</mi></math> para que el circuito y la onda estén en resonancia? (b) Calcula el coeficiente de amortiguamiento para comprobar que el amortiguamiento de la respuesta transitoria es más rápido que el cambio de la modulación. (Esto es necesario para amplificar bien la onda incidente.) (c) Halla la amplificación del circuito, es decir, el cociente entre la tensión máxima en el condensador y <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math>. (d) Si la frecuencia de la portadora de otra radio es 20 kHz mayor, ¿cuál será el cociente de las amplificaciones de las dos señales?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un oscilador amortiguado pierde el 2 % de la energía en cada ciclo. ¿Cuál es el factor de calidad <math display=\"inline\"><mi>Q</mi></math> del oscilador? Si se le aplica una fuerza externa y la frecuencia de resonancia del oscilador es 300 Hz, ¿cuál es la anchura de la curva de resonancia?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fuerza armónica <math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mrow></math> y el rozamiento <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math> actúan sobre una partícula de masa <math display=\"inline\"><mi>m</mi></math>. El amortiguamiento es débil y en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> la posición y la velocidad de la partícula son <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math>. Calcula cuánta energía pierde el oscilador desde el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> hasta que se vuelven a cumplir las condiciones <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>&gt;</mo><mn>0</mn></mrow></math>. Deduce que el movimiento será periódico si cada vez que se cumplen dichas condiciones se le da al oscilador, mediante un impulso adecuado, una energía del valor calculado. ¿Será armónico el movimiento? ¿Qué impulso hay que aplicar en cada caso?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un tubo de vidrio en forma de «U» se vierten 2 Kg de mercurio. La sección transversal del tubo es <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math> cm<sup>2</sup>. Para estudiar las oscilaciones en torno a la posición de equilibrio, (a) halla la constante <math display=\"inline\"><mi>k</mi></math> que relaciona la altura de la columna de mercurio medida desde el punto de equilibrio y la fuerza recuperadora y (b) calcula el periodo de las oscilaciones. <em>Nota</em>: Desprecia la viscosidad del aire y la tensión superficial."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Cilindros giratorios y varilla",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos que en el caso del problema 1.99 los dos cilindros giran en sentidos contrarios muy despacio. Si el coeficiente de rozamiento dinámico entre los cilindros y la barra es <math display=\"inline\"><mi>μ</mi></math> y la distancia entre los cilindros <math display=\"inline\"><mi>a</mi></math>, ¿cuál es el periodo de las oscilaciones? <em>Nota</em>: Desprecia el radio de la barra."
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
       "html": "Calcula la frecuencia de las pequeñas oscilaciones en torno a los puntos de equilibrio estable del sistema del problema 6.8."
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
       "html": "Si la amplitud del oscilador armónico es <math display=\"inline\"><mi>A</mi></math>, ¿cuál es la probabilidad de encontrar la elongación en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>?"
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
       "html": "Como la diana circular de radio <math display=\"inline\"><mi>R</mi></math> oscila demasiado deprisa en torno al punto <math display=\"inline\"><mi>O</mi></math>, el tirador dispara al punto <math display=\"inline\"><mi>O</mi></math>. Si la oscilación es armónica y de amplitud <math display=\"inline\"><mi>A</mi></math>, ¿cuál será la probabilidad de dar en el disco? ¿Será mayor si dispara al punto <math display=\"inline\"><mi>P</mi></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa <math display=\"inline\"><mi>m</mi></math> de la figura puede moverse a lo largo de una barra horizontal lisa y está unida a la masa <math display=\"inline\"><mi>M</mi></math> mediante una cuerda larga sin masa y una polea de radio pequeño. Si, tras desplazarla una pequeña distancia <math display=\"inline\"><mi>A</mi></math> de la posición de equilibrio, se suelta la masa <math display=\"inline\"><mi>m</mi></math>, ¿cómo se moverá? ¿Cuál será el periodo de <math display=\"inline\"><mi>M</mi></math>? ¿Dónde estará la masa <math display=\"inline\"><mi>m</mi></math> cuando la velocidad escalar de <math display=\"inline\"><mi>M</mi></math> sea máxima?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un bloque está sobre una plataforma horizontal. Esta ha empezado a moverse en dirección vertical, hacia arriba. El movimiento de la plataforma es armónico y su pulsación y su amplitud son <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mrow><mi>A</mi><mo>&gt;</mo><mi>g</mi><mi>/</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>, respectivamente. Después de dejar atrás la plataforma, ¿cuál será la altura máxima del bloque, medida desde la posición inicial?"
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
       "html": "La barra homogénea de la figura se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math> sobre un plano horizontal liso. Si a partir del punto <math display=\"inline\"><mi>O</mi></math> el coeficiente de rozamiento dinámico entre la barra y la varilla es <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, ¿cuánto tiempo pasará —después de que el extremo derecho pase por el punto <math display=\"inline\"><mi>O</mi></math>— hasta que la barra se detenga? ¿Dónde se detendrá la barra?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Teorema de Parseval (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra las siguientes integrales: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>≡</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mi>.</mi></mtd></mtr></mtable></math> Como la fuerza externa que sufre un oscilador armónico es periódica, su solución estacionaria se escribe como (7.91): <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Demuestra que el valor medio de <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> es el siguiente: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≡</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>A</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Teorema de Parseval (II)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa el ejercicio 7.13 para calcular el promedio de la serie de Fourier (7.81): <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≡</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><mi>T</mi><mo>≡</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> es. Usa este resultado para recuperar el del problema 7.35 en el caso en que <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es real."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Teorema de Plancherel",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa el ejercicio 7.15 para demostrar la siguiente propiedad de la transformada de Fourier (7.92): <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre una mesa horizontal lisa hay una partícula de masa <math display=\"inline\"><mi>m</mi></math> en reposo, pegada a un extremo de un muelle sin deformar. En un instante se mueve el otro extremo con velocidad constante <math display=\"inline\"><mi>v</mi></math> y se detiene cuando ha recorrido una distancia <math display=\"inline\"><mi>d</mi></math>. ¿Cómo hay que elegir <math display=\"inline\"><mi>v</mi></math> para que en ese último instante <math display=\"inline\"><mi>m</mi></math> quede en reposo, sin oscilar?"
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
       "html": "Dos bloques en reposo sobre una plataforma se han unido entre sí mediante una cuerda y por los extremos con muelles idénticos. Aunque el rozamiento entre los bloques y la plataforma es despreciable, el coeficiente de rozamiento estático entre la plataforma y el suelo es <math display=\"inline\"><mi>μ</mi></math>. ¿Cuál es el valor máximo de la tensión <math display=\"inline\"><mi>T</mi></math> de la cuerda para que, tras cortarla, la plataforma no se mueva? <em>Nota</em>: Hay que considerar dos casos: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>9</mn><msub><mi>m</mi><mn>2</mn></msub></mrow></math> y cuando <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></math> es irracional."
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
       "html": "La varilla vertical de la figura es lisa y el radio de la polea es despreciable. ¿Qué condición debe cumplir el sistema para poder estar en equilibrio bajo la acción de la gravedad? ¿Cuál es entonces la configuración de equilibrio? ¿Y la frecuencia de las pequeñas oscilaciones?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La pulsación propia de un oscilador armónico amortiguado es <math display=\"inline\"><mi>ω</mi></math> y la de la fuerza externa armónica que sufre, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Consideremos la potencia <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>k</mi></msub></math> que esa fuerza da al oscilador y la que pierde por efecto de la fuerza de rozamiento: <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>m</mi></msub></math>. Demuestra que en la solución estacionaria los promedios de esas dos magnitudes son iguales: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi mathvariant=\"script\">𝒫</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi mathvariant=\"script\">𝒫</mi><mi>m</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Demuestra que esas dos magnitudes también son iguales en todos los instantes (<math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒫</mi><mi>k</mi></msub><mo>=</mo><msub><mi mathvariant=\"script\">𝒫</mi><mi>m</mi></msub></mrow></math>) cuando la frecuencia de la fuerza externa y la del oscilador son iguales (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi></mrow></math>). <em>Nota</em>: Usa las propiedades de la solución estacionaria y no su expresión explícita."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El anillo horizontal de la figura gira en torno a su centro con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Una partícula de masa <math display=\"inline\"><mi>m</mi></math> puede moverse a lo largo de un diámetro, sin rozamiento, y está unida con muelles idénticos. La longitud propia de los muelles es <math display=\"inline\"><mi>L</mi></math> y la constante recuperadora <math display=\"inline\"><mi>k</mi></math>. (a) Calcula la(s) configuración(es) de equilibrio relativo. (b) ¿Cuándo será oscilante el movimiento de la masa? ¿Cuál es entonces su frecuencia? Si no es oscilante, ¿cómo se mueve la masa? (c) ¿Qué cambia en tus respuestas si se quita uno de los muelles?"
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
       "html": "¿Qué hay mal en la solución de este problema que hemos encontrado en un libro de ejercicios? ¿Cuál es el periodo real?"
      },
      {
       "mota": "testua",
       "html": " «En los extremos de una barra de masa despreciable y longitud <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn></mrow></math> m hay unidas dos esferas pequeñas de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g. La barra cuelga de una articulación, de modo que puede girar sin rozamiento alrededor de un eje vertical que pasa por su punto medio. Dos esferas grandes de <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>20</mn></mrow></math> kg están en la misma recta de la barra. La distancia entre los centros de la esfera grande y la pequeña es <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>16</mn></mrow></math> cm (figura 226). Calcula el periodo de las oscilaciones pequeñas del péndulo de torsión.»"
      },
      {
       "mota": "testua",
       "html": "«Cada mitad de la barra con una esfera en el extremo tiene el aspecto de un péndulo simple de longitud <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mn>2</mn></mrow></math> y oscila en el campo newtoniano de la esfera grande. En el campo gravitatorio de la Tierra, el periodo de las pequeñas oscilaciones del péndulo simple es <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>. Según la ley de gravitación universal, <math display=\"inline\"><mrow><mi>m</mi><mi>g</mi><mo>=</mo><mi>γ</mi><mi>m</mi><msub><mi>M</mi><mrow><mtext mathvariant=\"normal\">Lurra </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>; por tanto, <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><msup><mi>R</mi><mn>2</mn></msup><mi>/</mi><mi>γ</mi><msub><mi>M</mi><mtext mathvariant=\"normal\">Lurra</mtext></msub></mrow></msqrt></mrow></math>, donde <math display=\"inline\"><mi>γ</mi></math> es la constante de gravitación universal, <math display=\"inline\"><msub><mi>M</mi><mtext mathvariant=\"normal\">Lurra</mtext></msub></math> es la masa de la Tierra y <math display=\"inline\"><mi>R</mi></math> es la distancia del péndulo al centro de la Tierra. Así, en el campo gravitatorio de la esfera grande, el periodo de las pequeñas oscilaciones del péndulo simple de longitud <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mi>d</mi><mi>/</mi><mn>2</mn></mrow></math> será: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>d</mi><msup><mi>R</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mi>γ</mi><mi>M</mi></mrow></msqrt><mo>≈</mo><mn>5</mn><mo>,</mo><mn>4</mn></mrow></math> horas.» ]"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La mesa de la figura es lisa, pero el coeficiente de rozamiento estático entre los dos bloques es <math display=\"inline\"><mi>μ</mi></math>. ¿Cómo debe ser la amplitud de las oscilaciones para que el bloque superior no empiece a deslizar?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de la plataforma de la figura es <math display=\"inline\"><mi>M</mi></math> y está sobre dos cilindros homogéneos idénticos y sujeta a la pared mediante un muelle de constante recuperadora <math display=\"inline\"><mi>k</mi></math>, como se muestra en la figura. Las masas y los radios de los cilindros son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>r</mi></math>, respectivamente. Si la plataforma y los cilindros no deslizan, ¿cuál es la frecuencia de las oscilaciones?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La barra <math display=\"inline\"><mrow><mi>A</mi><mi>B</mi></mrow></math> de la figura puede girar en un plano vertical en torno a una articulación lisa. Ese plano, igual que la articulación, gira en torno al eje vertical <math display=\"inline\"><mrow><mi>C</mi><mi>D</mi></mrow></math> con velocidad angular constante <math display=\"inline\"><mi>ω</mi></math>. La longitud y la masa de la barra son <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>m</mi></math>, respectivamente. Elige un triedro principal de la barra para escribir la energía cinética. Escribe la ecuación de movimiento y estudia los puntos de equilibrio relativo, su estabilidad y las frecuencias de las pequeñas oscilaciones en torno a los puntos de equilibrio estable. <em>Nota</em>: Desprecia el diámetro de la barra."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El bloque de la figura se mueve sobre la mesa lisa, perpendicularmente a la pared, por efecto del muelle. El sistema está en equilibrio cuando <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><msub><mi>α</mi><mn>0</mn></msub></mrow></math>. Calcula la frecuencia de las pequeñas oscilaciones."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La barra lisa de la figura gira con velocidad angular constante <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> en un plano horizontal. La masa <math display=\"inline\"><mi>m</mi></math>, que puede moverse a lo largo de la barra, está unida al eje de giro mediante un muelle. La longitud propia del muelle es <math display=\"inline\"><mi>L</mi></math> y la constante recuperadora <math display=\"inline\"><mi>k</mi></math>. ¿Cuándo habrá alguna configuración de equilibrio relativo? ¿Cuál será? ¿Y la frecuencia de las pequeñas oscilaciones en torno a la configuración de equilibrio estable? ¿Qué ocurre cuando no hay configuración de equilibrio?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa izquierda de la figura se mueve sobre una mesa horizontal lisa en una oscilación lineal de amplitud <math display=\"inline\"><mi>A</mi></math>. Cuando la elongación del muelle es <math display=\"inline\"><mrow><mi>A</mi><mi>/</mi><mn>2</mn></mrow></math>, choca con una masa idéntica y las dos quedan unidas. Calcula la amplitud de las nuevas oscilaciones. ¿Qué cambia en tu respuesta si el choque es elástico?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un campo eléctrico homogéneo <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> se coloca (en reposo) la carga <math display=\"inline\"><mi>q</mi></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Calcula la velocidad máxima de la carga y el camino más largo que recorre."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Sistemas del problema 7.51.",
     "src": "../media/irudiak/0ddc5625ae20adbb.svg",
     "zabalera": 129
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si con un corcho, una aguja y dos tenedores se construye el sistema que aparece a la izquierda de la figura 7.35, puede colocarse en equilibrio en la boca de una botella. Para hacer un modelo simplificado del sistema, consideremos el que aparece a la derecha de la figura. La barra ligera central tiene longitud <math display=\"inline\"><mi>l</mi></math> y puede girar sin obstáculo en torno al punto <math display=\"inline\"><mi>A</mi></math>. Las barras de longitud <math display=\"inline\"><mi>L</mi></math> también son ligeras y tienen en los extremos libres partículas idénticas de masa <math display=\"inline\"><mi>m</mi></math>. Las tres barras están unidas de forma rígida en el punto <math display=\"inline\"><mi>B</mi></math>, siendo <math display=\"inline\"><mi>α</mi></math> el ángulo entre ellas. Consideremos las pequeñas oscilaciones que se dan en un plano vertical. Calcula la frecuencia y la condición que debe cumplir el cociente <math display=\"inline\"><mrow><mi>l</mi><mi>/</mi><mi>L</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que la siguiente magnitud es una constante del movimiento en la evolución del oscilador armónico amortiguado: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>γ</mi><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mn>2</mn><mi>γ</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El amortiguamiento de un oscilador forzado es nulo: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Calcula la solución general y estudia la solución estacionaria. ¿Qué ocurre si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>ω</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para estabilizar el péndulo matemático invertido de la figura, se ha sujetado a la pared, a la altura <math display=\"inline\"><mi>d</mi></math>, mediante un muelle. El muelle está sin deformar cuando el péndulo está en vertical. La longitud y la masa del péndulo son <math display=\"inline\"><mi>L</mi></math> y <math display=\"inline\"><mi>m</mi></math>. ¿Cómo hay que elegir la constante recuperadora <math display=\"inline\"><mi>k</mi></math> del muelle? ¿Cuál es entonces la frecuencia de las pequeñas oscilaciones?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El punto de suspensión de un péndulo matemático se mueve según la ley <math display=\"inline\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math> en dirección horizontal, en el plano de oscilación. Calcula la solución de la ecuación de movimiento de las pequeñas oscilaciones en torno a la vertical. ¿Cuándo se produce la resonancia? ¿Cuál es entonces la solución de la ecuación de movimiento?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ecuación de un oscilador amortiguado es <math display=\"inline\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y la energía mecánica <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. Calcula <math display=\"inline\"><mrow><mi>d</mi><mi>E</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math> y demuestra que es negativa en todos los instantes."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La polea y la cuerda de la figura no tienen masa. La cuerda está enrollada en la polea inferior y no resbala. Solo se mueve verticalmente la masa de la derecha y la de <math display=\"inline\"><mi>M</mi></math> está fija en la periferia de la polea. Los rozamientos son despreciables. ¿Qué condición(es) debe(n) cumplirse para que el sistema pueda estar en equilibrio? Halla la(s) configuración(es) de equilibrio estable y la frecuencia de las pequeñas oscilaciones en torno a ellas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Resonancia sin amortiguamiento",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El coeficiente de amortiguamiento de un oscilador es <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>. Escribe la solución de las ecuaciones siguientes: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math> ¿Son compatibles las dos soluciones en la resonancia, es decir, en el límite <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>→</mo><mi>ω</mi></mrow></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Oscilaciones no armónicas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el instante que se indica en la figura la partícula está en reposo y empieza a deslizar. El rozamiento es despreciable. ¿Es armónico el movimiento de la partícula? ¿Cuál es el periodo?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador cuártico",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud propia de los dos muelles idénticos de la figura es <math display=\"inline\"><mi>d</mi></math> y el sistema está sobre una mesa horizontal lisa. La masa puede moverse a lo largo de la barra lisa."
      },
      {
       "mota": "testua",
       "html": "(a) Suponiendo que el desplazamiento transversal <math display=\"inline\"><mi>q</mi></math> es mucho menor que <math display=\"inline\"><mi>d</mi></math>, escribe la ecuación de movimiento y halla una constante del movimiento."
      },
      {
       "mota": "testua",
       "html": "(b) Usa algún programa adecuado para dibujar el espacio de fases."
      },
      {
       "mota": "testua",
       "html": "(c) Demuestra que las oscilaciones, aunque sean pequeñas, no son isócronas, porque la frecuencia es proporcional a la amplitud."
      },
      {
       "mota": "testua",
       "html": "(d) En el problema 7.8 se estudió un sistema parecido, pero con cuerdas en lugar de muelles. ¿Son semejantes los resultados? ¿Por qué?"
      },
      {
       "mota": "testua",
       "html": "(e) ¿Qué ocurre si la longitud propia de los muelles es <math display=\"inline\"><mrow><mi>l</mi><mo>&lt;</mo><mi>d</mi></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "(f) ¿Y si <math display=\"inline\"><mrow><mi>l</mi><mo>&gt;</mo><mi>d</mi></mrow></math> (y los muelles son rectos en todo instante)?"
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
       "html": "Calcula el periodo del oscilador que se mueve en el siguiente campo de fuerzas, cuando las oscilaciones son pequeñas y en el caso general: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><msup><mi>a</mi><mn>4</mn></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Péndulo cicloidal (1)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un alambre de hierro vertical tiene la forma de una cicloide, dada por las siguientes ecuaciones paramétricas: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>θ</mi><mo>≤</mo><mn>2</mn><mi>π</mi><mi>.</mi></mrow></math> Una cuenta que se mueve sin rozamiento se suelta en reposo desde el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Calcula el periodo de las oscilaciones y comprueba (como hizo Huygens en 1673, en su libro <em>Horologium Oscillatorium</em>) que es independiente de la amplitud."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Péndulo cicloidal (2)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Continuando con el péndulo del problema anterior, usa la abscisa curvilínea (1.20) como coordenada generalizada para escribir el lagrangiano y calcular el periodo de las oscilaciones generales. Comenta el resultado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Péndulo cicloidal (3)",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra el recíproco del resultado del problema 7.62:"
      },
      {
       "mota": "testua",
       "html": "si las oscilaciones de una partícula que se mueve a lo largo de una curva plana, por efecto de la gravedad, son isócronas, la trayectoria es cicloidal."
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>: Si se elige como coordenada generalizada la abscisa curvilínea <math display=\"inline\"><mi>s</mi></math> medida desde el mínimo, la energía cinética será <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>s</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math> y las oscilaciones serán isócronas si y solo si <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>s</mi><mn>2</mn></msup></mrow></math> tiene la estructura adecuada."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Un oscilador armónico curioso",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos masas idénticas de la figura están unidas mediante una varilla rígida ligera. Pueden moverse en direcciones perpendiculares, sobre una mesa horizontal lisa. Demuestra que el movimiento de cada partícula es armónico, pero que estos osciladores son bastante curiosos, porque la frecuencia depende de la energía mecánica (es decir, de las condiciones iniciales). ¿Cómo es la amplitud de las oscilaciones? ¿Y la configuración de equilibrio? ¿Cómo es la trayectoria del centro de la varilla? ¿Y la velocidad angular de la varilla?"
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
       "html": "Estudia el movimiento del sistema de la figura sin despreciar el rozamiento entre el bloque y la superficie horizontal."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Periodo del péndulo matemático",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El periodo del péndulo matemático lo calculamos en el problema 7.10.3: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mi>K</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Sabemos, además, que cuando la amplitud <math display=\"inline\"><mi>α</mi></math> de las oscilaciones es pequeña, el oscilador armónico es una muy buena aproximación: <math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math>. Se han propuesto las siguientes aproximaciones, que también son buenas cuando las oscilaciones son mayores [87, 92, 94, 99]: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><msqrt><mfrac><mrow><msqrt><mn>3</mn></msqrt><mi>α</mi><mi>/</mi><mn>2</mn></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mi>α</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></msqrt><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>α</mi><mi mathvariant=\"normal\">sin</mi></mfrac><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>8</mn></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mfrac><mn>1</mn><msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>α</mi><mn>2</mn></mfrac></mrow></msqrt></mfrac><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>4</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">ln</mi><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mn>1</mn><mo>−</mo><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>≡</mo><mi mathvariant=\"normal\">cos</mi><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msub><mi>T</mi><mn>5</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><msup><mi>a</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mroot><mi>a</mi><mn>8</mn></mroot></mrow></msup><mi>.</mi></mtd></mtr></mtable></math> Compara los desarrollos de Taylor, las gráficas y las propiedades de las expresiones <math display=\"inline\"><mrow><mi>T</mi><mo>,</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub><mo>,</mo><msub><mi>T</mi><mn>3</mn></msub></mrow></math> y <math display=\"inline\"><msub><mi>T</mi><mn>4</mn></msub></math> en el límite <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>π</mi></mrow></math>. Demuestra que en todos los casos la primera aproximación no lineal es la <strong>fórmula de Borda</strong>: <math display=\"block\"><mrow><mi>T</mi><mo>≈</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>α</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Comprueba que el error de esta última fórmula es menor del 1 % para todos los <math display=\"inline\"><mrow><mi>α</mi><mo>≲</mo><mn>74</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. ¿Cómo debe ser la amplitud <math display=\"inline\"><mi>α</mi></math> para que el error del valor <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></mrow></math> de la aproximación lineal sea menor del 1 %?"
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
       "html": "Calcula el tiempo que necesita un péndulo matemático, soltado casi desde la posición vertical (<math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>π</mi><mo>−</mo><mi>ε</mi></mrow></math>, cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≪</mo><mn>1</mn></mrow></math>), para volver a la posición inicial. ¿Qué ocurre en el límite <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math>? <em>Sugerencia</em>: Ayúdate resolviendo el problema 7.10.3."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un péndulo matemático y una barra homogénea suspendida de un extremo (mediante una articulación lisa), de la misma longitud, se sueltan desde la misma orientación. Calcula el cociente de los periodos. ¿Depende el resultado de la orientación inicial? ¿Es cierto si las oscilaciones no son pequeñas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador armónico relativista",
     "izar": 2,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula el periodo del oscilador armónico relativista del problema 3.59."
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
       "html": "Calcula en el problema 5.105 el periodo de las oscilaciones que se producen después de romperse las dos cuerdas a la vez, usando la siguiente integral: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>α</mi><mrow><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>α</mi><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
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
       "html": "¿Cómo cambia el periodo de las pequeñas oscilaciones en torno al origen si al potencial armónico <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math> se le añade un término no armónico <em>pequeño</em> <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>m</mi><mi>λ</mi><msup><mi>x</mi><mn>4</mn></msup></mrow></math>? <em>Nota</em>: Diremos que el término no armónico es pequeño si se cumple la condición <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mi>λ</mi><mo>≪</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> cuando la amplitud es <math display=\"inline\"><mi>A</mi></math> (o, si se prefiere, si se cumple <math display=\"inline\"><mrow><mi>E</mi><mi>λ</mi><mo>≪</mo><mi>m</mi><msup><mi>ω</mi><mn>4</mn></msup></mrow></math> cuando la energía mecánica es <math display=\"inline\"><mi>E</mi></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Oscilaciones acopladas</strong>"
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En ingeniería, para amortiguar vibraciones mecánicas, a veces se añade otro oscilador al sistema. Sobre la masa <math display=\"inline\"><mi>M</mi></math> de la figura se aplica la fuerza armónica <math display=\"inline\"><mrow><msub><mi>F</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math> (producida, por ejemplo, por las vibraciones que un motor provoca en la plataforma). La plataforma <math display=\"inline\"><mi>M</mi></math> está sobre dos muelles idénticos y, para reducir las vibraciones, se cuelga de la plataforma la masa <math display=\"inline\"><mi>m</mi></math> de otro muelle. Todos los amortiguamientos son despreciables."
      },
      {
       "mota": "testua",
       "html": "(a) Dibuja las fuerzas que actúan sobre las masas <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>m</mi></math> y halla las ecuaciones de movimiento."
      },
      {
       "mota": "testua",
       "html": "(b) Demuestra que los pesos de las masas <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>m</mi></math> pueden eliminarse del problema. Explica el efecto de esos pesos en la solución."
      },
      {
       "mota": "testua",
       "html": "(c) Halla la solución estacionaria de las ecuaciones y demuestra que las vibraciones de la plataforma son mínimas cuando se cumple la condición <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><msup><mi>k</mi><mo>′</mo></msup><mi>/</mi><mi>m</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(d) Estudia la condición de resonancia del sistema."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Energía potencial de Hénon y Heiles",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al estudiar el movimiento de las estrellas en las galaxias, Hénon y Heiles encontraron en la energía potencial <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> el ejemplo más famoso de caos determinista hamiltoniano (véase el tema 8). Halla los puntos de equilibrio y discute su estabilidad."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Pueden ser periódicas las pequeñas oscilaciones de un sistema cuando no está en un modo normal?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador armónico anisótropo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa <math display=\"inline\"><mi>m</mi></math>, que está sobre una mesa horizontal lisa, está sujeta a dos puntos fijos mediante muelles idénticos, como se muestra en la figura. La longitud propia de los muelles es <math display=\"inline\"><mi>L</mi></math>. Demuestra que cuando <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>L</mi></mrow></math> la posición central es inestable. ¿Cuál es la razón física? Comprueba que si <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mi>L</mi></mrow></math>, en dicha posición hay equilibrio estable y que en las pequeñas oscilaciones la energía potencial puede escribirse como (7.120), con las constantes adecuadas <math display=\"inline\"><msub><mi>k</mi><mi>x</mi></msub></math> y <math display=\"inline\"><msub><mi>k</mi><mi>y</mi></msub></math> que debes calcular. ¿Cuáles son los modos y las frecuencias normales en este último caso?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siguiendo la línea del ejercicio 7.8, estudia las pequeñas oscilaciones transversales de las dos masas de la figura. ¿Cuáles son los modos normales del sistema?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador armónico isótropo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa <math display=\"inline\"><mi>m</mi></math>, que está entre dos láminas horizontales lisas, está sujeta a cuatro puntos fijos mediante muelles idénticos, como se muestra en la figura. La longitud propia de los muelles es <math display=\"inline\"><mi>L</mi></math>. ¿Cuándo es de equilibrio estable el punto central? Demuestra que en este último caso, cuando las oscilaciones son pequeñas, se recupera la energía potencial del problema 4.5, con la constante recuperadora adecuada que debes calcular."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La longitud natural del muelle que aparece en la figura es igual a la distancia <math display=\"inline\"><mi>s</mi></math> entre los puntos de suspensión de los péndulos. Halla los modos normales planos del sistema. <em>Nota</em>: Para simplificar los cálculos pueden elegirse los valores <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>6</mn><mi>M</mi></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>2</mn><mi>d</mi></mrow></math> y <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>M</mi><mi>g</mi><mi>/</mi><mi>d</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fuerza externa que actúa sobre el sistema de la figura es <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>. El rozamiento es despreciable. Estudia el movimiento recto del sistema."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las tres masas de la figura son idénticas y pueden moverse a lo largo de una circunferencia horizontal lisa. Si los muelles también son idénticos, ¿cuáles son los modos normales del sistema?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos el sistema formado por tres péndulos planos idénticos, cuando el acoplamiento entre ellos es débil. En variables adimensionales (es decir, si las unidades de longitud, masa y tiempo son <math display=\"inline\"><mi>l</mi></math>, <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><msqrt><mrow><mi>l</mi><mi>/</mi><mi>g</mi></mrow></msqrt></math>, respectivamente) el lagrangiano del sistema se expresa así: <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>φ</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>φ</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>φ</mi><mn>3</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mi>ε</mi><msub><mi>φ</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><mi>ε</mi><msub><mi>φ</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo>−</mo><mn>2</mn><mi>ε</mi><msub><mi>φ</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> ¿Cuáles son las pulsaciones y las coordenadas normales de este sistema?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Despreciando el rozamiento, estudia las pequeñas oscilaciones planas del sistema de la figura."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Aunque es muy sencillo, el sistema de la figura es un modelo útil de los automóviles. Calcula los modos normales correspondientes usando los datos siguientes: Masa de las ruedas y de los ejes: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mn>200</mn></mrow></math> kg. Masa total del coche: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mn>1000</mn></mrow></math> kg. Constante de los neumáticos: <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mn>500</mn></mrow></math> N/mm. Constante de los muelles de la suspensión: <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mn>50</mn></mrow></math> N/mm."
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
       "html": "Un cilindro hueco se mueve sobre una superficie horizontal y tiene dentro un cilindro macizo. Si los dos cilindros se mueven sin deslizar, ¿cuál es el periodo de las pequeñas oscilaciones? Describe los modos normales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si el coeficiente de inducción mutua entre los circuitos de la figura es <math display=\"inline\"><mi>M</mi></math>, ¿cuáles son los modos normales del sistema?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla las frecuencias, las coordenadas y los modos normales del sistema de la figura. Para simplificar los cálculos, elige <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>/</mi><mi>l</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Suponiendo que el rozamiento en el sistema de la figura es despreciable, halla las coordenadas, las frecuencias y los modos normales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula las frecuencias y los modos normales del sistema de la figura, si el movimiento de la cuña se produce en un plano vertical y el del centro de masas en dirección vertical."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla las pulsaciones y los modos normales del sistema de la figura, en el caso particular en que se cumple la condición <math display=\"inline\"><mrow><mi>k</mi><mi>/</mi><mi>m</mi><mo>=</mo><mn>6</mn><mi>g</mi><mi>/</mi><mi>l</mi></mrow></math>."
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
       "html": "Las cuatro cargas de la figura están fijas. La carga de la quinta partícula también es <math display=\"inline\"><mi>q</mi></math> y puede moverse en el plano <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Escribe la energía potencial de la partícula <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Haciendo el desarrollo de Taylor en torno al origen, halla la aproximación cuadrática del potencial y demuestra que en el origen hay un equilibrio estable. Halla los modos normales. ¿Cómo será la órbita de la partícula si se mueve muy cerca del origen?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra, sin hacer ningún cálculo, que en el caso de la cuerda discreta de la sección 7.8, cuando <math display=\"inline\"><mi>n</mi></math> es impar, entre las pulsaciones normales siempre habrá una de valor <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mn>2</mn></msqrt><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. ¿Cómo se moverán las partículas en ese caso?"
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
       "html": "Comprueba que en el caso general de la cuerda discreta de la sección 7.8 las frecuencias normales son <math display=\"block\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msub><mi>ω</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math> y que el modo correspondiente a una <math display=\"inline\"><mi>n</mi></math> es <math display=\"inline\"><mrow><msub><mi>y</mi><mi>s</mi></msub><mo>=</mo><msub><mi>C</mi><mi>s</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>ω</mi><mi>n</mi></msub><mi>t</mi></mrow></msup></mrow></math>, con los coeficientes siguientes: <math display=\"block\"><mrow><msub><mi>C</mi><mi>s</mi></msub><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>s</mi><mi>n</mi><mi>π</mi></mrow><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi><mi>.</mi></mrow></math>"
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
       "html": "Los <math display=\"inline\"><mi>N</mi></math> péndulos matemáticos idénticos de la figura están suspendidos a distancias iguales: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mo>,</mo><mn>2</mn><mi>a</mi><mo>,</mo><mi>…</mi><mi>N</mi><mi>a</mi></mrow></math>. Cuando los péndulos sucesivos están en equilibrio vertical, el muelle que une a ambos está sin deformar."
      },
      {
       "mota": "testua",
       "html": "Calcula la ecuación de un péndulo cuando las oscilaciones son pequeñas y haz el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math> para comprobar que se cumple la ecuación de ondas de la siguiente estructura: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>v</mi><mn>2</mn></msup></mfrac><mi>u</mi><mi>.</mi></mrow></math> ¿Cuáles son las constantes <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y <math display=\"inline\"><mi>v</mi></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa del aro de la figura es <math display=\"inline\"><mi>M</mi></math> y puede oscilar en un plano vertical en torno al punto <math display=\"inline\"><mi>P</mi></math> bajo la acción de la gravedad. Una cuenta de masa <math display=\"inline\"><mi>m</mi></math> puede moverse a lo largo del aro sin rozamiento."
      },
      {
       "mota": "testua",
       "html": "(a) Halla las frecuencias normales de las pequeñas oscilaciones y los modos normales correspondientes."
      },
      {
       "mota": "testua",
       "html": "(b) Describe cualitativamente los modos normales."
      },
      {
       "mota": "testua",
       "html": "(c) ¿Qué condiciones iniciales hay que elegir para que el sistema oscile en los modos normales?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos masas idénticas pueden moverse a lo largo de las varillas lisas verticales paralelas de la figura y están unidas mediante muelles como se muestra. La distancia entre las varillas es igual a la longitud propia del muelle de constante recuperadora <math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math>. Halla las frecuencias y las coordenadas normales. Describe los modos normales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las masas de los dos bloques de la figura son <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>m</mi></mrow></math> y están sobre una mesa horizontal lisa, unidos entre sí y a la pared mediante dos muelles idénticos, como se muestra en la figura. Si se usan las abscisas <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math> medidas desde la posición de equilibrio, las condiciones iniciales son <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Halla la solución de las ecuaciones de movimiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Péndulo elástico",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La varilla ligera de la figura puede girar en un plano vertical en torno a una articulación lisa. Además, la masa <math display=\"inline\"><mi>m</mi></math> puede moverse a lo largo de la varilla sin rozamiento y está unida a la articulación de la varilla mediante un muelle ligero de longitud propia <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math>. Calcula las frecuencias y los modos normales. Comenta el resultado. <em>Nota</em>: Para ver lo que ocurre cuando las oscilaciones no son pequeñas, usa esta simulación: <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/elastikoa.html</code>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos el sistema de la figura 7.20 en el caso particular <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi></mrow></math>. Si se sujeta una partícula en su posición de equilibrio, el periodo de oscilación de la otra es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>3</mn></mrow></math> s. Halla cómo es el movimiento si al principio los desplazamientos eran 0 y <math display=\"inline\"><mi>A</mi></math> y las velocidades nulas. ¿Cuál es el tiempo característico que mide la transferencia de energía entre las partículas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Amortiguamiento y frecuencias normales",
     "izar": 1,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos la aproximación cuadrática en torno a un punto de equilibrio estable de un sistema en coordenadas generalizadas ortogonales: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>m</mi><mi>j</mi></msub><msubsup><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><munderover><mo>∑</mo><mrow><mi>j</mi><mo>,</mo><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>V</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><msub><mi>q</mi><mi>j</mi></msub><msub><mi>q</mi><mi>k</mi></msub><mi>.</mi></mrow></math> Las pulsaciones normales son <math display=\"inline\"><msub><mi>ω</mi><mi>k</mi></msub></math> y los autovectores generalizados correspondientes <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mrow><mn>1</mn><mi>k</mi></mrow></msub><mo>,</mo><msub><mi>C</mi><mrow><mn>2</mn><mi>k</mi></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>C</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Supongamos ahora que cada coordenada <math display=\"inline\"><msub><mi>q</mi><mi>j</mi></msub></math> sufre un rozamiento débil <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>γ</mi><msub><mi>m</mi><mi>j</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math>. Demuestra que el movimiento es ahora igual que el encontrado en el caso conservativo, si en lugar de las pulsaciones normales <math display=\"inline\"><msub><mi>ω</mi><mi>k</mi></msub></math> se usan las pulsaciones complejas <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mi>k</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mi>k</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>γ</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>i</mi><mi>γ</mi></mrow></math>, para escribir la solución como <math display=\"inline\"><mrow><msub><mi>q</mi><mi>j</mi></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>C</mi><mrow><mi>j</mi><mi>k</mi></mrow></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi mathvariant=\"normal\">Ω</mi><mi>k</mi></msub><mi>t</mi></mrow></msup></mrow></math>. Comenta el resultado."
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
       "html": "Una varilla puede girar en torno a una articulación horizontal lisa situada a una distancia <math display=\"inline\"><mi>d</mi></math> de uno de sus extremos. De ese extremo se ha colgado un péndulo matemático, como se muestra en la figura."
      },
      {
       "mota": "testua",
       "html": "(a) Halla las configuraciones de equilibrio y discute su estabilidad."
      },
      {
       "mota": "testua",
       "html": "(b) Elige los valores <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>3</mn><mi>m</mi></mrow></math>, <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>3</mn><mi>d</mi></mrow></math> y <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>8</mn><mi>d</mi></mrow></math> y considera las pequeñas oscilaciones en torno a la configuración de equilibrio estable, cuando los planos de oscilación del péndulo y de la varilla son paralelos. Calcula las frecuencias normales. Escribe la solución general de las ecuaciones de movimiento. Describe los modos normales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos discos idénticos de la figura tienen masa <math display=\"inline\"><mi>m</mi></math> y radio <math display=\"inline\"><mi>R</mi></math>. Están unidos entre sí y al suelo y al techo mediante tres barras de torsión idénticas. Como veremos en la sección 10.2.6, el momento de fuerza recuperador <math display=\"inline\"><mi>N</mi></math> que ejerce una barra de torsión es proporcional al ángulo de deformación <math display=\"inline\"><mi>φ</mi></math>: <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>K</mi><mi>φ</mi></mrow></math>. Los discos pueden girar en torno al eje vertical y los desplazamientos angulares medidos desde la configuración de equilibrio son <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "(a) Calcula y describe las frecuencias y los modos normales."
      },
      {
       "mota": "testua",
       "html": "(b) Al principio los discos estaban en la posición de equilibrio, <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, pero mientras el primero estaba en reposo, <math display=\"inline\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, el otro estaba girando: <math display=\"inline\"><mrow><msub><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi></mrow></math>. Describe el movimiento posterior y calcula cuánto tiempo hace falta para que el primer disco gane toda la energía cinética."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El extremo izquierdo del sistema de la figura se mueve según la ley <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mi>t</mi></mrow></math>, por efecto de una fuerza externa adecuada. Escribe las ecuaciones de movimiento de las dos masas. ¿Cuál es el desplazamiento de las masas en el movimiento estacionario? ¿Cuándo se produce la resonancia? <em>Nota</em>: Desprecia el rozamiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre la plataforma de la figura se ha colocado un hemisferio hueco de radio <math display=\"inline\"><mi>R</mi></math>, que puede girar sin deslizar, como se muestra. La masa de la plataforma es <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>m</mi><mi>/</mi><mn>2</mn></mrow></math>. Calcula las frecuencias y los modos normales y describe estos últimos. Escribe la solución general de las ecuaciones de movimiento. ¿Cómo se moverá el sistema si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> la plataforma está en reposo y el borde <math display=\"inline\"><mrow><mi>A</mi><mi>O</mi><mi>B</mi></mrow></math> horizontal pero girando con una pequeña velocidad angular <math display=\"inline\"><mi>ω</mi></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las masas de la figura pueden moverse sin rozamiento sobre una recta horizontal."
      },
      {
       "mota": "testua",
       "html": "(a) Si <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><mi>∞</mi></mrow></math>, ¿cuáles son las frecuencias normales del sistema?"
      },
      {
       "mota": "testua",
       "html": "(b) ¿Y cuando <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "(c) ¿Y si <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "<em>Sugerencia</em>: Casi no hay que hacer cálculos."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La rueda de la figura puede girar en torno a su eje horizontal liso central. La masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> de la rueda está en la periferia de radio <math display=\"inline\"><mi>R</mi></math> (es decir, tiene el momento de inercia de un aro). De un punto de la periferia se ha colgado un péndulo matemático de masa <math display=\"inline\"><mi>m</mi></math> y longitud <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi></mrow></math>. El plano de oscilación del péndulo es el de la rueda."
      },
      {
       "mota": "testua",
       "html": "(a) Calcula las frecuencias y los modos normales."
      },
      {
       "mota": "testua",
       "html": "(b) ¿Cómo hay que elegir las condiciones iniciales para poner el sistema en cada modo?"
      },
      {
       "mota": "testua",
       "html": "(c) ¿Cuándo será periódico el movimiento?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos masas de la figura se mueven en dirección vertical, bajo la acción de una fuerza externa vertical sinusoidal aplicada a la masa central. Elige las coordenadas adecuadas y escribe la solución general de las ecuaciones de movimiento."
      },
      {
       "mota": "testua",
       "html": "(a) ¿Cómo hay que elegir la pulsación <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> de la fuerza externa para poner el sistema en resonancia?"
      },
      {
       "mota": "testua",
       "html": "(b) Si se quita la fuerza externa, ¿cómo hay que elegir las condiciones iniciales para que el movimiento sea periódico? <em>Nota</em>: Desprecia el rozamiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos masas de la figura se mueven en dirección vertical, bajo la acción de una fuerza externa vertical sinusoidal aplicada a la masa inferior. La longitud propia de los dos muelles es <math display=\"inline\"><mi>ℓ</mi></math>. Elige las coordenadas de la figura y escribe la solución general de las ecuaciones de movimiento. ¿Cómo hay que elegir <math display=\"inline\"><msub><mi>F</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> y las condiciones iniciales (en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>), (a) para poner el sistema en resonancia, (b) para que el sistema se mueva en un modo normal? <em>Nota</em>: Desprecia el rozamiento."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una masa puede moverse a lo largo de una varilla lisa ligera, unida mediante un muelle a la articulación lisa de la varilla. La longitud propia del muelle es <math display=\"inline\"><mi>L</mi></math> y la constante recuperadora <math display=\"inline\"><mi>k</mi></math>. Al principio el sistema está en equilibrio, en posición vertical, pero en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> otra partícula de la misma masa golpea la del péndulo con una pequeña velocidad horizontal <math display=\"inline\"><mi>v</mi></math>. Las dos masas quedan unidas. Si las oscilaciones en torno al nuevo punto de equilibrio son pequeñas, ¿cuáles son <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? ¿Qué condiciones deben cumplirse para que las oscilaciones sean pequeñas?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para indicar direcciones, en la facultad se han colgado carteles parecidos al de la figura. Si las cuerdas están tensas, ¿cuántos son los grados de libertad? Describe cualitativamente los modos normales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla las frecuencias y los modos normales de las oscilaciones verticales del sistema de la figura. ¿Cómo hay que elegir las condiciones iniciales para que el movimiento sea periódico?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Tres muelles",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos masas idénticas pueden moverse en direcciones perpendiculares, sin rozamiento, y están unidas al punto fijo <math display=\"inline\"><mi>O</mi></math> y entre sí mediante los muelles de la figura. Calcula las frecuencias y los modos normales. ¿Cómo hay que elegir las condiciones iniciales para poner el sistema en cada modo normal? <em>Nota</em>: Los tres muelles son rectos en todo instante."
      },
      {
       "mota": "testua",
       "html": "Véase <code>http://tp.lc.ehu.eus/jma/mekanika/oszilazioak/malgukiak.html</code>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa de la plataforma de la figura es <math display=\"inline\"><mi>m</mi></math> y puede moverse horizontalmente sin obstáculo. El bloque de masa <math display=\"inline\"><mi>m</mi></math> que tiene encima puede moverse sin rozamiento. Estando en reposo la plataforma y ese bloque, un segundo bloque de masa <math display=\"inline\"><mi>m</mi></math> que se mueve con velocidad horizontal <math display=\"inline\"><mi>v</mi></math> golpea al que está sobre la plataforma. Si los dos bloques quedan unidos, ¿cómo se mueven los elementos del sistema tras el choque?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los discos idénticos de la figura pueden girar en el mismo plano vertical, en torno a ejes horizontales lisos. No hay deslizamiento entre los discos. De puntos simétricos de la periferia de los discos se han colgado péndulos matemáticos idénticos. La masa y la longitud de los péndulos son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>R</mi></math>, y la masa y el radio de los discos <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math> y <math display=\"inline\"><mi>R</mi></math>. Calcula las frecuencias y los modos normales de las pequeñas oscilaciones del sistema. ¿Cómo hay que elegir las condiciones iniciales para que el movimiento sea periódico?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las masas y los muelles de la figura se mueven en la misma recta. (a) Calcula la solución general de las ecuaciones de movimiento y las condiciones de resonancia. (b) ¿Cómo hay que elegir las condiciones iniciales para que el movimiento sea periódico? (c) Si se quitan los muelles de los extremos, ¿cuál(es) es(son) la(s) frecuencia(s) normal(es)?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa <math display=\"inline\"><mi>M</mi></math> de la figura puede moverse a lo largo de una barra horizontal lisa y <math display=\"inline\"><mi>m</mi></math> en dirección vertical. La constante recuperadora del muelle es <math display=\"inline\"><mi>k</mi></math>. Supongamos que el alargamiento del muelle medido desde el equilibrio es la coordenada generalizada <math display=\"inline\"><mi>y</mi></math>. Calcula las frecuencias, las coordenadas y los modos normales. ¿Cómo hay que elegir las condiciones iniciales para poner el sistema en un modo normal?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La masa y la longitud de la barra homogénea de la figura son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>l</mi></math>. El pequeño anillo que tiene en un extremo puede moverse a lo largo de la barra horizontal lisa. Las pequeñas oscilaciones se dan en el plano de la figura. Calcula las frecuencias y los modos normales. Cuando estaba en equilibrio se le aplica un pequeño impulso horizontal <math display=\"inline\"><mi>J</mi></math> a una distancia <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>2</mn><mi>l</mi><mi>/</mi><mn>3</mn></mrow></math> del anillo. Calcula la solución de las ecuaciones de movimiento de la barra."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un extremo de una barra homogénea de longitud <math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>l</mi></mrow></math> y un punto fijo se han unido mediante una cuerda ligera de longitud <math display=\"inline\"><mi>l</mi></math>. Calcula las frecuencias y los modos normales de las pequeñas oscilaciones planas. Además de los modos normales, ¿hay otras soluciones periódicas?"
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
       "html": "Un aro puede moverse en un plano horizontal, sin rozamiento, como se muestra en la figura: el aro puede girar, pero el centro se mueve a lo largo de una recta. La masa y el radio del aro son <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>r</mi></math>. La longitud propia de los muelles ligeros es <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> y la constante recuperadora <math display=\"inline\"><mi>k</mi></math>. En equilibrio la longitud de los muelles es <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math>. Calcula las frecuencias y los modos normales."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula las frecuencias y los modos normales del sistema de la figura, en el caso <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mi>m</mi></mrow></math> y <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>k</mi></mrow></math>. ¿Cuándo es periódica la oscilación? <em>Nota</em>: El rozamiento es despreciable."
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
       "html": "Los dos bloques de la figura están sobre una mesa horizontal lisa y sobre el izquierdo actúa una fuerza externa armónica. Halla qué condición debe cumplirse para que la masa izquierda pueda permanecer en reposo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Choque inelástico (I)",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Consideremos un modelo simplista de la estructura elástica de un cuerpo. Los componentes <em>microscópicos</em> de un <em>cuerpo</em> son las masas <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mrow><mi>α</mi><mi>m</mi></mrow></math> y la interacción entre ellas la ejerce un muelle sin masa. La constante recuperadora del muelle es <math display=\"inline\"><mi>k</mi></math> y el parámetro <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>α</mi><mo>≤</mo><mn>0.697</mn><mi>…</mi></mrow></math> es constante. Dos <em>cuerpos</em> así se mueven sobre una mesa horizontal lisa."
      },
      {
       "mota": "testua",
       "html": "(a) Halla las frecuencias y los modos normales de cada <em>cuerpo</em>. Escribe la solución general de las ecuaciones de movimiento."
      },
      {
       "mota": "testua",
       "html": "(b) Calcula de nuevo la solución general, usando que el movimiento de cada <em>cuerpo</em> es un problema de dos cuerpos."
      },
      {
       "mota": "testua",
       "html": "(c) Al principio se mueven como se muestra en la figura, con velocidad constante <math display=\"inline\"><mi>v</mi></math> y los muelles sin deformar. Si el choque entre las masas centrales es elástico (como suele ocurrir entre los elementos <em>microscópicos</em> de los verdaderos <em>cuerpos macroscópicos</em>), ¿cuál es el movimiento de cada bloque después del choque?"
      },
      {
       "mota": "testua",
       "html": "(d) Tras el choque hay dos contribuciones a la energía cinética de cada <em>cuerpo</em>: la correspondiente a la traslación del centro de masas y la intrínseca (la que se mide en el sistema del centro de masas). Ahora, desde el punto de vista <em>macroscópico</em>, interpretamos la primera contribución como la energía cinética del <em>cuerpo</em>, y la segunda como la energía elástica interna excitada por el choque. En esta interpretación <em>macroscópica</em>, el choque entre los <em>cuerpos</em> es inelástico. Calcula, desde este punto de vista, la proporción de energía cinética perdida en el choque en función del parámetro <math display=\"inline\"><mi>α</mi></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Choque inelástico (II)",
     "izar": 3,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiemos de nuevo el choque del problema 7.122. (a) Resuelve el caso <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>, usando la física."
      },
      {
       "mota": "testua",
       "html": "(b) Explica por qué se ha puesto la condición <math display=\"inline\"><mrow><mi>α</mi><mo>≤</mo><mn>0.697</mn><mi>…</mi></mrow></math>. (Para resolver alguna ecuación trascendente necesitarás una calculadora.)"
      },
      {
       "mota": "testua",
       "html": "(c) ¿Qué ocurre cuando <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn></mrow></math>? (Se pueden usar una calculadora y paciencia, pero es más fácil si se hace una simulación de todo el proceso.)"
      },
      {
       "mota": "testua",
       "html": "(d) Haz una simulación del proceso."
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
       "html": "Para hacer un modelo mecánico de la trampa de Paul que se usa para sujetar iones, consideremos una partícula puntual que se mueve sobre una superficie lisa en forma de silla de montar. Si la ecuación de la superficie es <math display=\"inline\"><mrow><mi>z</mi><mo>∝</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, la energía potencial gravitatoria puede escribirse, usando una constante adecuada <math display=\"inline\"><mrow><mi>ω</mi><mo>&gt;</mo><mn>0</mn></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Comprueba que no hay ninguna configuración de equilibrio estable. Ahora se hace girar en torno al eje vertical de simetría con velocidad angular <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. ¿Qué condición debe cumplirse para que pueda haber equilibrio estable (y oscilaciones en torno a él)? <em>Nota</em>: Para ver herramientas mecánicas reales, busca en Internet <em>rotating saddle</em>, <em>Paul trap</em> o palabras parecidas."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "EHU 2000, ISBN 84-8373-295-5",
     "xehetasuna": "Exámenes resueltos (1996-2000), mk:7",
     "hizkuntza": "eu"
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Calcula las pulsaciones de los dos sistemas oscilantes que se muestran en las figuras de abajo, teniendo en cuenta que en el primer caso el cilindro rueda sin deslizar y que en el segundo solo se consideran las pequeñas oscilaciones."
    },
    {
     "mota": "testua",
     "html": "[Figura 1 (apartado a) — descripción editorial: cilindro de masa <math display=\"inline\"><mi>m</mi></math> y radio <math display=\"inline\"><mi>R</mi></math>, con centro <math display=\"inline\"><mi>O</mi></math>, apoyado sobre el suelo horizontal (sombreado). Del centro <math display=\"inline\"><mi>O</mi></math> sale un muelle horizontal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que se une a una pared vertical fija a la derecha. Una flecha en la parte superior marca el desplazamiento horizontal <math display=\"inline\"><mi>x</mi></math> del centro. El ángulo <math display=\"inline\"><mi>θ</mi></math> se mide sobre un radio <math display=\"inline\"><mi>R</mi></math> respecto de la vertical. El cilindro rueda sin deslizar sobre el suelo.]"
    },
    {
     "mota": "testua",
     "html": "[Figura 2 (apartado b) — descripción editorial: techo horizontal (sombreado) con el punto <math display=\"inline\"><mi>O</mi></math> (pivote) en su parte superior derecha. De <math display=\"inline\"><mi>O</mi></math> cuelga una varilla de longitud <math display=\"inline\"><mi>L</mi></math> que forma el ángulo <math display=\"inline\"><mi>θ</mi></math> con la vertical (línea de puntos), con la masa <math display=\"inline\"><mi>m</mi></math> (círculo negro) en su extremo. A la izquierda hay una pared vertical (sombreada). Sobre el techo se marca la distancia horizontal <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> desde la pared izquierda hasta <math display=\"inline\"><mi>O</mi></math>. En la pared izquierda, a una distancia vertical <math display=\"inline\"><mi>a</mi></math> por debajo del techo, se ancla un muelle horizontal <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que se une a un punto de la varilla situado a una distancia <math display=\"inline\"><mi>a</mi></math> del pivote <math display=\"inline\"><mi>O</mi></math>.]"
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
     "html": "a) El procedimiento más sencillo para resolver la cuestión planteada parece ser el de la energía. Como el sistema es conservativo, su derivada total respecto del tiempo es nula. Por tanto, basta llegar a la expresión de la energía total."
    },
    {
     "mota": "testua",
     "html": "Como el cilindro rueda, según dice el enunciado, existe una relación entre la variable lineal y la angular que se muestran en la primera figura: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><mi>θ</mi></mrow></math>. La energía total, por tanto, puede expresarse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>O</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math> el momento de inercia del cilindro respecto de su eje. Usando la ecuación de ligadura, esta expresión queda así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>θ</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>k</mi><msup><mi>R</mi><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "esto nos lleva directamente a la ecuación diferencial:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mn>3</mn><mi>m</mi></mrow></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ecuación diferencial de un oscilador armónico cuya pulsación es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mrow><mn>3</mn><mi>m</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como curiosidad, hay que señalar que en este caso no tenemos que hacer ninguna aproximación de pequeñas oscilaciones, y que el movimiento armónico simple obtenido se da para cualquier amplitud de dichas oscilaciones."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Sigamos el mismo procedimiento de la sección anterior. Si tomamos los ejes coordenados con origen <math display=\"inline\"><mi>O</mi></math> y el eje vertical hacia arriba, las coordenadas de la masa del péndulo serán: <math display=\"inline\"><mrow><msub><mi>x</mi><mi>p</mi></msub><mo>=</mo><mi>L</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>−</mi><mi>L</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. De aquí es fácil deducir la energía cinética y la energía potencial gravitatoria de la masa <math display=\"inline\"><mi>m</mi></math>:"
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/198ee2b2f8012746.svg\" alt=\"T = 1 / 2 m L^2 dot(theta)^2 #h(2em) V_g = - m g L cos theta\" style=\"width:17.552em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "En cuanto a la energía potencial elástica almacenada en el muelle, la expresión se complica si se quiere hacer el cálculo con rigor. Por ejemplo, en la posición indicada en la figura la longitud del muelle sería, como se comprueba fácilmente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>l</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la energía potencial elástica, por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>e</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><msub><mi>l</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de una complejidad notable. Por tanto, conviene hacer aproximaciones para pequeñas oscilaciones (aquí sí, su amplitud es decisiva en el movimiento resultante) y quedarse con los términos significativos. Estas aproximaciones se traducen así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/a0a313252843a4fd.svg\" alt=\"sin theta tilde.eq theta #h(2em) cos theta tilde.eq 1 - theta^2 / 2 #h(2em) \\[ theta upright(&quot; muy pequeño&quot;) \\]\" style=\"width:25.009em;height:2.747em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "(en el caso del coseno, a menudo podremos quedarnos con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≃</mo><mn>1</mn></mrow></math>, según la naturaleza de los demás términos). Si aplicamos estas aproximaciones al término de longitud <math display=\"inline\"><mi>l</mi></math>, podremos escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>l</mi><mo>≃</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>θ</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>≃</mo><msub><mi>l</mi><mn>0</mn></msub><mo>+</mo><mi>a</mi><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado de nuevo una segunda aproximación, despreciando el segundo término del radicando (proporcional a <math display=\"inline\"><msup><mi>θ</mi><mn>4</mn></msup></math>) frente al primero (cuyo término menor es proporcional a <math display=\"inline\"><msup><mi>θ</mi><mn>2</mn></msup></math>). De este modo, la energía potencial elástica toma una forma muy sencilla, y a la energía potencial gravitatoria, salvo una constante aditiva que no tendremos en cuenta, le ocurre lo mismo. Las expresiones finales de ambas son:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/70832cf0da47c817.svg\" alt=\"V_g = 1 / 2 m g L theta^2 #h(2em) V_e = 1 / 2 k a^2 theta^2\" style=\"width:15.696em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por último, la expresión de la energía es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>θ</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lo que nos lleva a la ecuación diferencial del movimiento:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ecuación de un oscilador armónico simple cuya pulsación es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></msqrt></mrow></math>"
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
     "html": "Un péndulo de un metro de longitud y masa 0.1 kg empieza a oscilar con una amplitud de 0.05 m. Pasados 5 minutos, la amplitud es de 0.025 m. Calcula: a) el coeficiente de amortiguamiento, b) el tiempo de relajación, c) el factor de calidad <math display=\"inline\"><mi>Q</mi></math>, y d) la energía perdida en el ciclo inicial."
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
     "html": "El sistema es un sistema oscilante amortiguado subcrítico (se producen oscilaciones mientras la amplitud va disminuyendo). La solución, por tanto, será de la forma:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>θ</mi></math> es la elongación angular del péndulo, <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> la elongación máxima o amplitud, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> la pulsación del movimiento amortiguado, <math display=\"inline\"><mi>β</mi></math> el coeficiente de amortiguamiento y <math display=\"inline\"><mi>δ</mi></math> la fase inicial. La pulsación de las oscilaciones libres en nuestro caso es <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>l</mi></mrow></msqrt></mrow></math> (es un péndulo simple). Según el texto, pasado un tiempo de <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>300</mn></mrow></math> s, la amplitud se ha reducido a la mitad, y por eso escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>300</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mn>300</mn><mi>β</mi></mrow></msup><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mn>300</mn></mfrac><mo>=</mo><mn>2.31</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por otra parte, el valor de la pulsación propia del oscilador libre será: <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mn>3.13</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, que como se ve es mucho mayor que la de <math display=\"inline\"><mi>β</mi></math>."
    },
    {
     "mota": "testua",
     "html": "El tiempo de relajación del fenómeno es el tiempo en que una magnitud significativa se reduce en un factor <math display=\"inline\"><mi>e</mi></math>. En nuestro caso, el tiempo <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> necesario para que la amplitud angular <math display=\"inline\"><msub><mi>θ</mi><mn>0</mn></msub></math> pase a ser <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mi>/</mi><mi>e</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>θ</mi><mn>0</mn></msub><mi>e</mi></mfrac><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>t</mi><mi>r</mi></msub></mrow></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>=</mo><mfrac><mn>1</mn><mi>β</mi></mfrac><mo>=</mo><mn>432.9</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Factor de calidad</em>"
    },
    {
     "mota": "testua",
     "html": "se llama <math display=\"inline\"><mi>Q</mi></math> al cociente entre la amplitud en la resonancia <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>R</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la amplitud para <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>. Cuando el amortiguamiento es pequeño frente a la pulsación propia del oscilador libre, es decir, cuando <math display=\"inline\"><mrow><mi>β</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> (nuestro caso), <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>≃</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math> es y resulta que <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msub><mi>ω</mi><mi>R</mi></msub><mi>/</mi><mn>2</mn><mi>β</mi><mo>≃</mo><msub><mi>ω</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mi>β</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><msub><mi>ω</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>β</mi></mrow></mfrac><mo>=</mo><mn>677.6</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El factor de calidad, además, en el caso de amortiguamiento pequeño, está relacionado con la pérdida relativa de energía por ciclo, pudiendo escribirse así: <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>/</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mtext mathvariant=\"normal\">ciclo</mtext></msub></mrow></math>. La energía inicial del primer ciclo es <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>l</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> y, tras sustituir, tendremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><mi>Q</mi></mfrac><mo>=</mo><mfrac><mrow><mi>π</mi><mo>×</mo><mn>0.1</mn><mo>×</mo><mn>9.8</mn><mo>×</mo><msup><mn>1</mn><mn>2</mn></msup><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.05</mn><mi>/</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>677.6</mn></mfrac><mo>=</mo><mn>1.14</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "a ese resultado podríamos haber llegado igualmente usando la expresión general de la energía del oscilador amortiguado escrita como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><mi>t</mi></mrow></msup></mrow></math>. En el primer ciclo, esta energía pasará de valer <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> a valer <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><msub><mi>τ</mi><mn>1</mn></msub></mrow></msup><mo>≈</mo><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><msub><mi>τ</mi><mn>0</mn></msub></mrow></msup></mrow></math>. Por tanto, la energía perdida en el primer ciclo será, como antes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>4</mn><mi>π</mi><mi>β</mi><mi>/</mi><msub><mi>ω</mi><mn>0</mn></msub></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≃</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>β</mi></mrow><msub><mi>ω</mi><mn>0</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>β</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><msub><mi>ω</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><mi>Q</mi></mfrac></mrow></math>"
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
     "html": "En la figura se muestra un sistema oscilante formado por tres masas, unidas por tres muelles de constante recuperadora k idéntica, que están insertados en un bastidor circular de radio R. La masa de la partícula superior es 2m y la de las otras dos, m. ¿Cuáles son las pulsaciones propias del sistema? ¿Cuáles son los modos normales y las condiciones iniciales que activan cada modo por separado? [<em>Nota</em>: No hay rozamiento entre los muelles y el bastidor, ni gravedad]."
    },
    {
     "mota": "testua",
     "html": "(Figura: un bastidor circular de radio R, con tres masas unidas por tres muelles de constante k a lo largo del aro. La masa 2m está en la parte superior derecha; las otras dos masas m, una a la izquierda y la otra en la parte inferior derecha. Desde el centro se trazan las direcciones radiales hacia las tres masas, definiéndose los ángulos θ_1 (arriba, junto a la masa 2m), θ_2 (abajo a la derecha, junto a la masa m inferior) y θ_3 (a la izquierda, junto a la masa m izquierda). Los tres arcos de muelle están etiquetados con la constante k.)"
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
     "html": "Supongamos que el sistema está desplazado respecto de su posición de equilibrio, definiéndose ese desplazamiento mediante las coordenadas θ_i, i = 1..3. Por tanto, hay tres grados de libertad. Nuestro primer objetivo es obtener las expresiones de la energía cinética y de la energía potencial en función de esas variables y de sus derivadas temporales, _i, i = 1..3. Teniendo en cuenta que los alargamientos l_i, i = 1..3 de los muelles pueden expresarse en función de las variables anteriores así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> l_1 = R(θ_2 − θ_1)      l_2 = R(θ_3 − θ_2)      l_3 = R(θ_1 − θ_3) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "la energía potencial podrá escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> V = (1/2) k R² [ (θ_2 − θ_1)² + (θ_3 − θ_2)² + (θ_1 − θ_3)² ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "La energía cinética, por su parte, tiene una expresión sencilla:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> T = (1/2) R² [ 2m \\dot{θ}_1² + m \\dot{θ}_2² + m \\dot{θ}_3² ] = (1/2) m R² ( 2\\dot{θ}_1² + \\dot{θ}_2² + \\dot{θ}_3² ) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Los tensores de energía cinética y potencial correspondientes serán, por tanto, estos:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 2  0  0 |                  |  2  −1  −1 | T = mR² | 0  1  0 |          V = kR² | −1   2  −1 | | 0  0  1 |                  | −1  −1   2 | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Las pulsaciones propias son las soluciones del determinante característico |V_ij − ω²T_ij| = 0. Usaremos el procedimiento abreviado, pues obtendremos los mismos resultados resolviendo el determinante |v_ij − λt_ij| = 0, siendo v_ij = βV_ij, t_ij = αT_ij y λ = (β/α) ω². Las constantes α y β en nuestro caso son α = 1/mR², β = 1/kR², y de aquí en adelante trabajaremos con estos tensores:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 2  0  0 |            |  2  −1  −1 | t = | 0  1  0 |        v = | −1   2  −1 | | 0  0  1 |            | −1  −1   2 | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Por consiguiente:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 2−2λ   −1    −1  | |  −1   2−λ    −1  | = 0     →     λ_1 = 0  →  ω_1 = 0 |  −1    −1   2−λ  |                λ_2 = 2  →  ω_2 = √(2k/m) λ_3 = 3  →  ω_3 = √(3k/m) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "La primera de ellas (ω_1 = 0) era previsible. Es el modo rotacional, en el que las tres partículas se desplazan ángulos iguales y en el mismo sentido, sin que los muelles se deformen más de lo que estaban en la posición de equilibrio."
    },
    {
     "mota": "testua",
     "html": "Para calcular los modos normales, hay que conocer previamente los vectores asociados a los valores ω_r que son soluciones de la ecuación característica. Para ello, sustituiremos ω = ω_r en esta ecuación y así obtendremos un sistema de ecuaciones lineales homogéneas, de cuya resolución obtendremos los vectores a_r. De nuevo usaremos el método abreviado, pues sabemos que los vectores asociados son iguales:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> • λ = 0    |  2  −1  −1 | | a_11 |             →   a_11 = a_21 = a_31 | −1   2  −1 | | a_21 | = 0 | −1  −1   2 | | a_31 |</code>"
    },
    {
     "mota": "testua",
     "html": "• λ = 2    | −2  −1  −1 | | a_12 |             →   a_12 = −a_22 = −a_32 | −1   0  −1 | | a_22 | = 0 | −1  −1   0 | | a_32 |"
    },
    {
     "mota": "testua",
     "html": "• λ = 3    | −4  −1  −1 | | a_13 |             →   a_13 = 0,  a_23 = −a_33 | −1  −1  −1 | | a_23 | = 0 | −1  −1  −1 | | a_33 | <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Con la notación a_ir queremos expresar la i-ésima componente del vector asociado a la solución λ_r de la ecuación característica, es decir, a la pulsación ω_r."
    },
    {
     "mota": "testua",
     "html": "Hemos obtenido algunas relaciones entre las componentes de los vectores asociados, pero para superar la indeterminación hay que recurrir a la condición de ortonormalización. Esta, como sabemos, se escribe en forma matricial así: Ã t A = α I, donde hemos usado la matriz abreviada t, siendo A el tensor construido a partir de los vectores columna. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | a_11   a_11   a_11 | | 2  0  0 | | a_11   a_12    0   |   | α  0  0 | | a_12  −a_12  −a_12 | | 0  1  0 | | a_11  −a_12   a_23 | = | 0  α  0 | |  0     a_23  −a_23 | | 0  0  1 | | a_11  −a_12  −a_23 |   | 0  0  α | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Los valores indeterminados pasan a tener estos valores:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> a_11 = a_12 = 1/(2√m R)              a_23 = √2/(2√m R) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Los vectores a_r serán, por tanto, estos:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 1 |                        |  1 |                        |  0 | a_1 = ————— | 1 |        a_2 = ————— | −1 |        a_3 = ————— | 1 | 2√m R | 1 |              2√m R | −1 |             2√m R  | −1 |</code>"
    },
    {
     "mota": "testua",
     "html": "(a_1 = (1/(2√m R))·[1, 1, 1]ᵀ ;  a_2 = (1/(2√m R))·[1, −1, −1]ᵀ ;  a_3 = (√2/(2√m R))·[0, 1, −1]ᵀ) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "y la matriz A derivada de ellos:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | 1   1    0  | A = ————— | 1  −1   √2  | 2√m R | 1  −1  −√2  | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "A partir de aquí ya podemos expresar la forma de los modos normales. En el caso de que las velocidades generalizadas _i(0) sean nulas (que normalmente es el caso más habitual), podemos escribir así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | η_10 | η_0 =   | η_20 |  = Ã T q_0 | η_30 | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde q_0 es el vector columna que contiene las coordenadas generalizadas iniciales {q_i}_0. En nuestro caso, sustituyendo las matrices indicadas y haciendo las operaciones, tendremos:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | η_10 |    mR²   | 1   1    1  | | 2  0  0 | | θ_10 |     √m R  | 2θ_10 + θ_20 + θ_30 | | η_20 | = —————  | 1  −1   −1  | | 0  1  0 | | θ_20 |  =  ————  | 2θ_10 − θ_20 − θ_30 | | η_30 |   2√m R  | 0  √2  −√2  | | 0  0  1 | | θ_30 |      2    |   √2(θ_20 − θ_30)   | </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "No es difícil comprobar que las condiciones iniciales para activar cada modo por separado deben ajustarse a estos valores:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> • El modo 1 solo se activará si:   θ_10 = θ_20 = θ_30 • El modo 2 solo se activará si:   θ_10 = −θ_20 = −θ_30 • El modo 3 solo se activará si:   θ_10 = 0  y  θ_20 = −θ_30 </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "El caso más general corresponde a una combinación lineal de los tres modos de oscilación, pudiendo escribirse así: q_j = a_jr η_r, o, en forma matricial: q = A η."
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
     "html": "El sistema dinámico de la figura, formado por un aro de radio <math display=\"inline\"><mi>R</mi></math> y masa <math display=\"inline\"><mrow><mn>3</mn><mi>m</mi></mrow></math>, cuelga de un punto fijo del aro. Asimismo, una masa puntual <math display=\"inline\"><mi>m</mi></math> cuelga de otro punto fijo del aro, diametralmente opuesto al punto de suspensión, mediante una varilla sin masa de longitud <math display=\"inline\"><mrow><mn>5</mn><mi>R</mi></mrow></math>. El sistema oscila sin rozamiento en un plano vertical. a) Escribe la función lagrangiana del sistema, y b) Calcula las frecuencias propias de oscilación y los modos normales del sistema."
    },
    {
     "mota": "testua",
     "html": "[Figura: un aro etiquetado «<math display=\"inline\"><mrow><mn>3</mn><mi>m</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>R</mi></mrow></math>» que cuelga de un punto fijo de su periferia; en ese punto de suspensión se mide el ángulo <math display=\"inline\"><mi>ϕ</mi></math> (entre la vertical y el diámetro que baja hasta el punto diametralmente opuesto). De ese punto opuesto cuelga una varilla de longitud <math display=\"inline\"><mrow><mn>5</mn><mi>R</mi></mrow></math>, que forma el ángulo <math display=\"inline\"><mi>θ</mi></math> con la vertical, con la masa puntual <math display=\"inline\"><mi>m</mi></math> en su extremo.]"
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
     "html": "a) Como se ve en la figura, tenemos dos grados de libertad, expresados por las coordenadas generalizadas <math display=\"inline\"><mi>ϕ</mi></math> y <math display=\"inline\"><mi>θ</mi></math>. Si tomamos el punto de suspensión del aro como origen del sistema de coordenadas, con el eje vertical hacia arriba, las coordenadas de la masa inferior y las componentes de la velocidad serán:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mi>x</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>z</mi><mo>=</mo><mi>−</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mover><mi>z</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mn>5</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "La energía cinética del sistema será la suma de la energía cinética del aro (que será una rotación pura en torno a su punto de suspensión) y la de la masa colgante inferior. El momento de inercia del aro, respecto del eje perpendicular al plano que pasa por un punto de su periferia, usando el teorema de Steiner, será <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>6</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, y así la energía cinética del sistema será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>6</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La energía potencial, igualmente, será la suma de las energías potenciales del aro y de la masa colgante. Haciendo las operaciones, será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mn>5</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De estas dos últimas expresiones, la función lagrangiana será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϕ</mi><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mn>5</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Consideremos ahora el caso de las pequeñas oscilaciones que realiza el sistema. Supondremos que los ángulos <math display=\"inline\"><mi>ϕ</mi></math> y <math display=\"inline\"><mi>θ</mi></math> son lo bastante pequeños para hacer las aproximaciones habituales: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mn>1</mn><mo>−</mo><msup><mi>φ</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math>. Si usamos la teoría general de las pequeñas oscilaciones, intentaremos expresar la energía cinética y la potencial en formas cuadráticas, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub></mrow></math>, donde <math display=\"inline\"><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub></math> son constantes, funciones de las características físicas (masa y dimensiones) de los elementos que componen el sistema."
     ],
     "etiketak": [
      "2."
     ]
    },
    {
     "mota": "testua",
     "html": "La energía cinética y la energía potencial, tras las aproximaciones, se escribirán así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≃</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>5</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>≃</mo><mi>−</mi><mn>10</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mn>5</mn><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>ϕ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>θ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El término aditivo <math display=\"inline\"><mrow><mi>−</mi><mn>10</mn><mi>m</mi><mi>g</mi><mi>R</mi></mrow></math> que aparece en la energía potencial podemos ignorarlo, porque un simple cambio del nivel nulo de la energía potencial nos llevaría a su anulación. Por tanto, tenemos las energías cinéticas expresadas como queríamos. El siguiente paso es escribir las matrices de la energía cinética y de la potencial, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>, y también las abreviadas, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>. Se ve enseguida:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/aea523c9a9fa991a.svg\" alt=\"upright(bold(T)) = 5 m R^2 mat(delim: &quot;[&quot;, 2, 2; 2, 5) med arrow.r med upright(bold(t)) = mat(delim: &quot;[&quot;, 2, 2; 2, 5) #h(2em) [alpha = frac(1, 5 m R^2)]\" style=\"width:24.379em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/e911fff55726aa2a.svg\" alt=\"upright(bold(V)) = 5 m g R mat(delim: &quot;[&quot;, 1, 0; 0, 1) med arrow.r med upright(bold(v)) = mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) [beta = frac(1, 5 m g R)]\" style=\"width:24.778em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "A partir de aquí, podemos calcular las pulsaciones propias como función de las raíces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>v</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><mi>λ</mi><msub><mi>t</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> del determinante, siendo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. En nuestro caso:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>2</mn><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>λ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mn>5</mn><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>R</mi></mrow></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mn>6</mn><mi>R</mi></mrow></msqrt></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para calcular los modos normales, primero tenemos que obtener los vectores asociados a las pulsaciones normales <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math>, que son iguales a los correspondientes a los valores <math display=\"inline\"><msub><mi>λ</mi><mi>r</mi></msub></math> obtenidos de las matrices abreviadas. Por tanto, usaremos estas expresiones:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>4</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>21</mn></msub></mrow></math>",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>6</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mn>2</mn><msub><mi>a</mi><mn>12</mn></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><msub><mi>a</mi><mrow><mi>i</mi><mi>r</mi></mrow></msub></math> las componentes de los vectores modales asociados a cada pulsación <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math>."
    },
    {
     "mota": "testua",
     "html": "Apliquemos la condición de ortonormalización para eliminar la indeterminación. Como sabemos, usando la matriz abreviada <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math>, esta se escribe así: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"0.222em\"></mspace><mo>→</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>5</mn><msqrt><mi>m</mi></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>5</mn><msqrt><mrow><mn>6</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi></mrow></mfrac></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "así, los vectores <math display=\"inline\"><msub><mi>a</mi><mi>r</mi></msub></math> y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> derivada de ellos se expresarán así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/247ae9045d8460f8.svg\" alt=\"a_1 = frac(1, 5 sqrt(m) thin R) mat(delim: &quot;[&quot;, - 2; 1) #h(2em) a_2 = frac(1, 5 sqrt(6 m) thin R) mat(delim: &quot;[&quot;, 1; 2) quad arrow.r quad upright(bold(A)) = frac(1, 5 sqrt(6 m) thin R) mat(delim: &quot;[&quot;, - 2 sqrt(6), 1; sqrt(6), 2)\" style=\"width:36.977em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "A partir de aquí ya podemos expresar la forma de los modos normales. En el caso de que las velocidades generalizadas <math display=\"inline\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sean nulas (que normalmente es el caso más habitual), podemos escribir así: <math display=\"inline\"><mrow><msub><mi>η</mi><mn>0</mn></msub><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><msub><mi>q</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><msub><mi>q</mi><mn>0</mn></msub></math> es el vector columna que contiene las coordenadas generalizadas iniciales <math display=\"inline\"><msub><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mn>0</mn></msub></math>. En nuestro caso, sustituyendo las matrices indicadas y haciendo las operaciones, tendremos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mn>5</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mn>5</mn><msqrt><mrow><mn>6</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msqrt><mn>6</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>6</mn></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>5</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>ϕ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msqrt><mi>m</mi></msqrt><mspace width=\"0.167em\"></mspace><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>2</mn><msub><mi>ϕ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>6</mn></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>ϕ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>θ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "No es difícil comprobar que las condiciones iniciales para activar cada modo por separado deben ajustarse a estos valores:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El modo 1 solo se activará si: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><msub><mi>ϕ</mi><mn>0</mn></msub></mrow></math>",
      "El modo 2 solo se activará si: <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "El caso más general corresponde a una combinación lineal de los dos modos de oscilación, pudiendo escribirse así: <math display=\"inline\"><mrow><msub><mi>q</mi><mi>j</mi></msub><mo>=</mo><msub><mi>a</mi><mrow><mi>j</mi><mi>r</mi></mrow></msub><msub><mi>η</mi><mi>r</mi></msub></mrow></math>, o, en forma matricial: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mi>η</mi></mrow></math>."
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
     "html": "El sistema de dos masas de la figura está entre las placas de un condensador, y la masa izquierda tiene carga eléctrica. Al condensador se le aplica un campo eléctrico oscilante cuya frecuencia <math display=\"inline\"><mi>ω</mi></math> puede variarse a voluntad. ¿Para qué valores de <math display=\"inline\"><mi>ω</mi></math> se producen las oscilaciones de mayor amplitud? ¿Cómo son? [<em>Nota</em>: Desprecia el amortiguamiento]."
    },
    {
     "mota": "testua",
     "html": "<em>(Figura)</em>"
    },
    {
     "mota": "testua",
     "html": "Condensador con la placa izquierda marcada <math display=\"inline\"><mi>+</mi></math> y la placa derecha marcada <math display=\"inline\"><mi>−</mi></math>. Entre las dos placas, dispuestos horizontalmente en serie: muelle <math display=\"inline\"><mi>k</mi></math> — masa <math display=\"inline\"><mi>m</mi></math> con carga <math display=\"inline\"><mi>q</mi></math> — muelle <math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math> — masa <math display=\"inline\"><mi>m</mi></math> — muelle <math display=\"inline\"><mi>k</mi></math>. Es decir: placa(<math display=\"inline\"><mi>+</mi></math>) — [<math display=\"inline\"><mi>k</mi></math>] — <math display=\"inline\"><mi>m</mi></math>(con <math display=\"inline\"><mi>q</mi></math>) — [<math display=\"inline\"><msup><mi>k</mi><mo>′</mo></msup></math>] — <math display=\"inline\"><mi>m</mi></math> — [<math display=\"inline\"><mi>k</mi></math>] — placa(<math display=\"inline\"><mi>−</mi></math>)."
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
     "html": "Supondremos que los extremos de los muelles izquierdo y derecho están unidos a las dos placas mediante materiales aislantes. La pregunta anterior es saber cuáles son las frecuencias propias de oscilación de este sistema de dos grados de libertad. Para ello, podemos recurrir a cualquiera de los procedimientos habituales. Nosotros aquí usaremos el cálculo de los tensores de energía cinética y potencial. Teniendo en cuenta que las masas de las dos partículas son iguales, es fácil llegar a esto:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/53f8c8a9b8ed0218.svg\" alt=\"upright(bold(T)) = m mat(delim: &quot;|&quot;, 1, 0; 0, 1) #h(2em) #h(2em) upright(bold(V)) = mat(delim: &quot;|&quot;, k + k&#x27;, - k&#x27;; - k&#x27;, k + k&#x27;)\" style=\"width:20.841em;height:3.110em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Y de aquí, las pulsaciones propias se obtienen de la resolución del determinante secular:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/7540ba4fe627a6a8.svg\" alt=\"\\| upright(bold(V)) - omega^2 upright(bold(T)) \\| = 0 #h(2em) arrow.r #h(2em) {omega_1 = sqrt(k / m)\\ omega_2 = sqrt(frac(k + 2 k&#x27;, m))\" style=\"width:19.917em;height:6.635em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "El impulso oscilante que recibe la masa izquierda cargada al estar entre las placas del condensador puede expresarse como <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>, y así la segunda ley de Newton aplicada a cada partícula, tras simplificar, se escribirá así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>k</mi><mfrac><mi>′</mi><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mfrac><mrow><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup></mrow><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mi>k</mi><mfrac><mi>′</mi><mi>m</mi></mfrac><mspace width=\"0.167em\"></mspace><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>F</mi><mn>0</mn></msub><mi>/</mi><mi>m</mi></mrow></math>, y <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> los desplazamientos de las dos masas respecto de sus posiciones de equilibrio. Dejando de lado la complejidad de los factores de fase, probamos soluciones particulares como esta:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/66a0260b4dee2119.svg\" alt=\"x_(1 p) = D_1 cos omega t #h(2em) #h(2em) x_(2 p) = D_2 cos omega t\" style=\"width:20.216em;height:1.445em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "haciendo las operaciones y simplificando, los valores de <math display=\"inline\"><msub><mi>D</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>D</mi><mn>2</mn></msub></math> que nos dan son:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/121c1a09f4bf1522.svg\" alt=\"D_1 = frac(A \\( omega_0^2 - omega^2 \\), \\( omega_1^2 - omega^2 \\) \\( omega_2^2 - omega^2 \\)) #h(2em) #h(2em) D_2 = frac(A \\( omega_0^2 - omega_1^2 \\), \\( omega_1^2 - omega^2 \\) \\( omega_2^2 - omega^2 \\))\" style=\"width:30.506em;height:3.100em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math> como abreviatura. Es evidente que se producen amplitudes máximas (resonancia) para los valores <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>. Dichas amplitudes máximas serán infinitas cuando no hay amortiguamiento."
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
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>00Jun09(2P)</strong>"
    },
    {
     "mota": "testua",
     "html": "a) Halla las frecuencias de los modos normales y la forma de las coordenadas normales para el sistema formado por dos péndulos simples de la misma longitud <math display=\"inline\"><mi>l</mi></math>, de masas <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, acoplados mediante un muelle de constante recuperadora <math display=\"inline\"><mi>k</mi></math>. En equilibrio, los péndulos están en dirección vertical. b) Halla igualmente la combinación de modos correspondiente al estado en que los dos péndulos están en vertical pero el péndulo derecho se mueve hacia la izquierda con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>."
    },
    {
     "mota": "testua",
     "html": "[Figura: dos péndulos simples colgados del techo (indicado con sombreado). El izquierdo, de longitud <math display=\"inline\"><mi>l</mi></math>, forma el ángulo <math display=\"inline\"><mi>θ</mi></math> con la vertical y termina en la masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>; el derecho, de longitud <math display=\"inline\"><mi>l</mi></math>, forma el ángulo <math display=\"inline\"><mi>ϕ</mi></math> con la vertical y termina en la masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>. Las dos masas están unidas mediante un muelle horizontal de constante <math display=\"inline\"><mi>k</mi></math>. Una flecha <math display=\"inline\"><mi>g</mi></math> (la gravedad) apunta hacia abajo.]"
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
     "html": "En la figura se muestra un estado del sistema en un instante cualquiera. Hay que señalar que este estado no refleja la realidad, pues se ha hecho una primera simplificación del problema suponiendo que el muelle se mantiene paralelo a la horizontal, y eso no es cierto, ya que la masa derecha estará a una altura distinta de la de la izquierda. Sin embargo, considerando pequeñas oscilaciones, la contribución de este desplazamiento vertical de una masa respecto de la otra es insignificante (y, por tanto, despreciable) frente a la contribución al alargamiento del muelle de los desplazamientos horizontales. Con esto no queremos decir que despreciemos el propio desplazamiento vertical (tendremos en cuenta la contribución de los términos gravitatorios al considerar la energía potencial), sino que su contribución a la energía potencial elástica del muelle es insignificante frente a la contribución del desplazamiento horizontal."
    },
    {
     "mota": "testua",
     "html": "Tomando el eje vertical hacia arriba y el nivel cero de las energías potenciales gravitatorias en el punto de suspensión de uno de los péndulos (por ejemplo, el izquierdo), y teniendo en cuenta que la longitud del muelle en equilibrio es <math display=\"inline\"><mi>a</mi></math>, podremos expresar las coordenadas y velocidades generalizadas así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/4ff6bc5c7844f760.svg\" alt=\"cases(delim: &quot;{&quot;, x_1 = l sin theta &amp; x_2 = a + l sin phi.alt, z_1 = - l cos theta &amp; z_2 = - l cos phi.alt) #h(2em) cases(delim: &quot;{&quot;, dot(x)_1 = l dot(theta) cos theta &amp; dot(x)_2 = l dot(phi.alt) cos phi.alt, dot(z)_1 = l dot(theta) sin theta &amp; dot(z)_2 = l dot(phi.alt) sin phi.alt)\" style=\"width:30.933em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "A partir de estas expresiones, podemos calcular las energías cinética y potencial (con la simplificación mencionada antes). Tendremos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/3913a81d3025b9d0.svg\" alt=\"T = 1 / 2 #scale(x: 120%, y: 120%)[\\[] m_1 \\( dot(x)_1^2 + dot(z)_1^2 \\) + m_2 \\( dot(x)_2^2 + dot(z)_2^2 \\) #scale(x: 120%, y: 120%)[\\]] = 1 / 2 l^2 \\( m_1 dot(theta)^2 + m_2 dot(phi.alt)^2 \\)\" style=\"width:29.853em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>g</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ϕ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el caso de las pequeñas oscilaciones, haremos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>≃</mo><mn>1</mn><mo>−</mo><msup><mi>φ</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math>, y reescribiremos estas dos energías en formas cuadráticas, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>V</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub></mrow></math>. Haciendo las operaciones y simplificando, nos quedará:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/2b5a67bcabc97285.svg\" alt=\"V approx 1 / 2 #scale(x: 120%, y: 120%)[\\[] \\( m_1 g l + k l^2 \\) theta^2 + \\( m_2 g l + k l^2 \\) phi.alt^2 - 2 k l^2 theta phi.alt #scale(x: 120%, y: 120%)[\\]]\" style=\"width:26.297em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las matrices de energía cinética y de energía potencial que se usan en el formalismo general de las pequeñas oscilaciones acopladas serán, por tanto, estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ee499e6dd3db6b69.svg\" alt=\"upright(bold(T)) = l^2 mat(delim: &quot;[&quot;, m_1, 0; 0, m_2) #h(2em) upright(bold(V)) = l mat(delim: &quot;[&quot;, m_1 g + k l, - k l; - k l, m_2 g + k l)\" style=\"width:24.462em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las matrices abreviadas <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math> serán estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/11c1c6d9aad3964e.svg\" alt=\"upright(bold(t)) = mat(delim: &quot;[&quot;, m_1, 0; 0, m_2) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, m_1 g + k l, - k l; - k l, m_2 g + k l) #h(2em) \\[ alpha = 1 \\/ l^2 \\, med beta = 1 \\/ l \\]\" style=\"width:34.138em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las pulsaciones propias son las raíces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> de la ecuación secular o, usando las matrices abreviadas, las raíces <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> de la ecuación, siendo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo>−</mo><mi>λ</mi><msub><mi>m</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><mi>l</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>k</mi><mi>l</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo>−</mo><mi>λ</mi><msub><mi>m</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>g</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>g</mi><mo>+</mo><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><mi>μ</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>+</mo><mfrac><mi>k</mi><mi>μ</mi></mfrac></mrow></msqrt></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado la abreviatura <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, como <em>masa reducida</em> del conjunto de las dos masas."
    },
    {
     "mota": "testua",
     "html": "A partir de aquí, calcularemos los vectores asociados a estas pulsaciones propias (o los asociados a las soluciones <math display=\"inline\"><mi>λ</mi></math> de la ecuación característica usando las matrices abreviadas). Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/85097ed1c135fd7e.svg\" alt=\"bullet med lambda = g : #h(2em) mat(delim: &quot;[&quot;, k l, - k l; - k l, k l) mat(delim: &quot;[&quot;, a_11; a_21) = 0 quad arrow.r quad a_11 = a_21\" style=\"width:25.504em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/3e6519b597926008.svg\" alt=\"bullet med lambda = g + frac(k l, mu) : #h(2em) mat(delim: &quot;[&quot;, - m_1 / m_2 k l, - k l; - k l, - m_2 / m_1 k l) mat(delim: &quot;[&quot;, a_12; a_22) = 0 quad arrow.r quad a_22 = - m_1 / m_2 a_12\" style=\"width:34.100em;height:3.832em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde las componentes de los vectores modales quedan sin determinar salvo un factor constante multiplicativo. Apliquemos la condición de ortonormalización mediante la matriz abreviada <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> para eliminar la indeterminación. Esta se escribe así: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>1</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>m</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>α</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de ahí obtenemos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/c3564943e31c8bd7.svg\" alt=\"a_11 = frac(1, l sqrt(m_1 + m_2)) #h(2em) a_12 = frac(sqrt(m_2 \\/ m_1), l sqrt(m_1 + m_2))\" style=\"width:20.898em;height:3.234em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "los vectores <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub></math> y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> derivada de ellos se expresarán así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/6d14efd4059c5b05.svg\" alt=\"upright(bold(a))_1 = frac(1, l sqrt(m_1 + m_2)) mat(delim: &quot;[&quot;, 1; 1) #h(2em) upright(bold(a))_2 = frac(1, l sqrt(m_1 + m_2)) mat(delim: &quot;[&quot;, sqrt(m_2 \\/ m_1); - sqrt(m_1 \\/ m_2))\" style=\"width:29.114em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>l</mi><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mrow><msub><mi>m</mi><mn>2</mn></msub><mi>/</mi><msub><mi>m</mi><mn>1</mn></msub></mrow></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mi>/</mi><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la expresión de las coordenadas normales, la situación cambia respecto de otros casos en que el sistema partía de un estado de reposo inicial. Hay que decir que, en este caso, las coordenadas normales pueden expresarse con la parte real de la siguiente expresión compleja:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/48b74bcff036473f.svg\" alt=\"eta_r = T_(j k) thin a_(k r) thin e^(i omega_r t) [q_(j 0) - frac(i dot(q)_(j 0), omega_r)] #h(2em) \\[ upright(&quot;suma en &quot;) j upright(&quot; y &quot;) k \\]\" style=\"width:26.016em;height:3.002em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/8a0f854faf460931.svg\" alt=\"eta_r = T_(j k) thin a_(k r) [q_(j 0) cos omega_r t + frac(dot(q)_(j 0) sin omega_r t, omega_r)] #h(2em) \\[ upright(&quot;suma en &quot;) j upright(&quot; y &quot;) k \\]\" style=\"width:30.143em;height:3.002em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Afortunadamente, en nuestro caso los cálculos se simplifican bastante, entre otras cosas porque <math display=\"inline\"><mrow><msub><mi>T</mi><mn>12</mn></msub><mo>=</mo><msub><mi>T</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mrow><mi>j</mi><mn>0</mn></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>10</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Así, y teniendo en cuenta que <math display=\"inline\"><mrow><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>20</mn></msub><mo>=</mo><msub><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>0</mn></msub><mi>/</mi><mi>l</mi></mrow></math>, las coordenadas normales, haciendo las operaciones y simplificando, podrán escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>1</mn></msub><mo>=</mo><msub><mi>T</mi><mn>22</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>21</mn></msub><mspace width=\"0.167em\"></mspace><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>20</mn></msub><mspace width=\"0.167em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>1</mn></msub><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>2</mn></msub><mo>=</mo><msub><mi>T</mi><mn>22</mn></msub><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mspace width=\"0.167em\"></mspace><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mn>20</mn></msub><mspace width=\"0.167em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>2</mn></msub><msqrt><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></msqrt></mrow></mfrac><msqrt><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "o en forma de vector columna, usando la <em>masa reducida</em> definida antes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜼</mi><mo>=</mo><msqrt><mi>μ</mi></msqrt><mspace width=\"0.167em\"></mspace><msub><mi>v</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mfrac><msub><mi>m</mi><mn>2</mn></msub><msub><mi>m</mi><mn>1</mn></msub></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las coordenadas generalizadas en función de los modos normales, matricialmente, se escribirán así: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mi mathvariant=\"bold-italic\">𝜼</mi></mrow></math>. Haciendo el producto matricial correspondiente, llegamos a las expresiones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>ϕ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Otro método:</em> Usemos el formalismo lagrangiano para llegar a las ecuaciones de movimiento. La función lagrangiana es:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/bdd40015bbf4aa78.svg\" alt=\"L = 1 / 2 l^2 \\( m_1 dot(theta)^2 + m_2 dot(phi.alt)^2 \\) - 1 / 2 #scale(x: 120%, y: 120%)[\\[] \\( m_1 g l + k l^2 \\) theta^2 + \\( m_2 g l + k l^2 \\) phi.alt^2 - 2 k l^2 theta phi.alt #scale(x: 120%, y: 120%)[\\]]\" style=\"width:36.975em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde hemos eliminado directamente la constante aditiva de la energía potencial, además de haber usado las aproximaciones para pequeñas oscilaciones."
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de movimiento para las dos coordenadas generalizadas serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>m</mi><mn>1</mn></msub><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>l</mi><mi>θ</mi><mo>−</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>1</mn></msub><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>1</mn></msub><mi>g</mi><mi>θ</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><msup><mi>l</mi><mn>2</mn></msup><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>ϕ</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>−</mi><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>l</mi><mi>ϕ</mi><mo>+</mo><mi>k</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>m</mi><mn>2</mn></msub><mi>l</mi><mover><mi>ϕ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>ϕ</mi><mo>−</mo><mi>k</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "No es difícil ver a simple vista que, si sumamos término a término las dos ecuaciones, obtenemos una ecuación más sencilla con un patrón determinado que se repite:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mi>θ</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Asimismo, si dividimos la primera ecuación por <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>, la segunda por <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>, y las restamos, nos queda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>+</mo><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><msub><mi>m</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><msub><mi>m</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>−</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con un nuevo patrón que se repite. Es fácil ver que las ecuaciones de movimiento pueden desacoplarse si usamos como nuevas variables estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/03821250dd94d811.svg\" alt=\"Theta = frac(m_1 theta + m_2 phi.alt, m_1 + m_2) #h(2em) Phi = theta - phi.alt\" style=\"width:16.010em;height:2.891em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde, en la primera, hemos elegido dividirlo todo por la constante <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>, para usar otras coordenadas adimensionales equivalentes a las angulares originales, y eso no cambia en absoluto los resultados."
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de movimiento con estas nuevas variables serán estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/eddd8a141f8bf462.svg\" alt=\"dot.double(Theta) + g / l Theta = 0 #h(2em) #h(2em) dot.double(Phi) + (g / l + k / m_1 + k / m_2) Phi = 0\" style=\"width:25.102em;height:2.980em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "evidentemente desacopladas y representativas del movimiento individual de vibraciones armónicas simples, que tienen como pulsaciones características las obtenidas antes con el formalismo general:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/0bf7aca079463fe4.svg\" alt=\"omega_1 = sqrt(g / l) #h(2em) omega_2 = sqrt(g / l + k / mu) #h(2em) [mu = frac(m_1 m_2, m_1 + m_2)]\" style=\"width:24.907em;height:3.740em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las soluciones generales de estas ecuaciones diferenciales serán, por tanto, de la forma:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ba8580c8f70b48a4.svg\" alt=\"Theta = A_1 sin \\( omega_1 t + delta_1 \\) #h(2em) Phi = A_2 sin \\( omega_2 t + delta_2 \\)\" style=\"width:23.411em;height:1.364em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Para obtener la solución del problema propuesto, tenemos que determinar las cuatro constantes indeterminadas <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>δ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>δ</mi><mn>2</mn></msub></math> a partir de las condiciones de contorno (en este caso, las condiciones iniciales para <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>ϕ</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>ϕ</mi><mo accent=\"true\">̇</mo></mover><mn>0</mn></msub><mo>=</mo><mi>−</mi><msub><mi>v</mi><mn>0</mn></msub><mi>/</mi><mi>l</mi></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta las definiciones de las nuevas variables, sus valores iniciales para <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> serán estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/b2e83225082f5276.svg\" alt=\"Theta_0 = frac(m_1 theta_0 + m_2 phi.alt_0, m_1 + m_2) = 0 #h(2em) Phi_0 = theta_0 - phi.alt_0 = 0\" style=\"width:23.171em;height:2.891em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y en cuanto a las velocidades:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/1355e32f4d19672e.svg\" alt=\"dot(Theta)_0 = frac(m_1 dot(theta)_0 + m_2 dot(phi.alt)_0, m_1 + m_2) = - frac(m_2 v_0, l \\( m_1 + m_2 \\)) #h(2em) dot(Phi)_0 = dot(theta)_0 - dot(phi.alt)_0 = v_0 / l\" style=\"width:30.408em;height:3.155em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Si llevamos estos resultados a las soluciones generales, nos encontramos con este conjunto de cuatro ecuaciones para determinar las constantes indeterminadas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/94da7d3ea6fa8c4b.svg\" alt=\"Theta_0 = 0 = A_1 sin delta_1 #h(2em) dot(Theta)_0 = - frac(m_2 v_0, m_1 + m_2) = omega_1 A_1 cos delta_1\" style=\"width:27.546em;height:2.587em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/0d3c835fef8d6ee5.svg\" alt=\"Phi_0 = 0 = A_2 sin delta_2 #h(2em) dot(Phi)_0 = v_0 / l = omega_2 A_2 cos delta_2\" style=\"width:23.068em;height:2.313em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math> no deben ser nulas, de las relaciones de la primera columna se deduce que <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mi>π</mi></math> y que <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mi>π</mi></math>. Para resolver la duda del valor doble, y también para determinar los coeficientes <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, recurriremos a las relaciones entre las <em>velocidades</em> de la segunda columna, teniendo en cuenta que se supone positivas <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, como <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math>. De este modo:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/3bb57b54febc0e03.svg\" alt=\"- frac(m_2 v_0, l \\( m_1 + m_2 \\)) = plus.minus omega_1 A_1 #h(2em) v_0 / l = plus.minus omega_2 A_2\" style=\"width:20.896em;height:2.588em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "(el signo doble no es más que expresar <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub></mrow></math>, para las dos opciones de los ángulos de fase <math display=\"inline\"><mi>δ</mi></math> que se acaban de obtener). De la primera obtenemos que el signo asociado en el segundo término debe ser negativo"
    },
    {
     "mota": "testua",
     "html": "(<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mo>→</mo><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><mi>π</mi></mrow></math>), y de la segunda, en cambio, que el signo debe ser positivo (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mi>+</mi><mn>1</mn><mo>→</mo><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>). Además, los valores de las amplitudes <math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>A</mi><mn>2</mn></msub></math>, respectivamente, serán estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/5b89910d4b9adc23.svg\" alt=\"A_1 = frac(m_2 v_0, omega_1 l \\( m_1 + m_2 \\)) #h(2em) A_2 = frac(v_0, omega_2 l)\" style=\"width:17.451em;height:2.588em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las ecuaciones de movimiento en las nuevas variables desacopladas serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Θ</mi><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mfrac><msub><mi>v</mi><mn>0</mn></msub><mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>l</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si ahora queremos expresar las coordenadas generalizadas <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>ϕ</mi></math> en función de las nuevas variables <math display=\"inline\"><mi mathvariant=\"normal\">Θ</mi></math> y <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>, solo necesitamos despejarlas de sus ecuaciones de definición, para obtener:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo>+</mo><mfrac><msub><mi>m</mi><mn>2</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>=</mo><mi mathvariant=\"normal\">Θ</mi><mo>−</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></mfrac><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>m</mi><mn>2</mn></msub><msub><mi>v</mi><mn>0</mn></msub></mrow><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>1</mn></msub></mfrac><mo>+</mo><mfrac><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow><msub><mi>ω</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Vemos que las nuevas coordenadas generalizadas que actúan como coordenadas normales, <math display=\"inline\"><mi mathvariant=\"normal\">Θ</mi></math> y <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>, no coinciden con las coordenadas normales obtenidas por el formalismo general, <math display=\"inline\"><msub><mi>η</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>η</mi><mn>2</mn></msub></math>. De hecho, estas últimas ni siquiera tienen dimensión angular, ya que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>η</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><msup><mi>M</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup><msup><mi>L</mi><mn>1</mn></msup></mrow></math>. Esta comprobación, como se ve, no altera el resultado final y, a la vez, demuestra que se puede elegir más de un conjunto de coordenadas normales que lleve el sistema a una solución sencilla de movimientos desacoplados."
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
     "html": "El sistema de masas idénticas de la figura se pone en movimiento con estas condiciones iniciales: la masa izquierda está en la posición de equilibrio pero con velocidad inicial v_0, mientras que la derecha está en reposo a una distancia a hacia la derecha de su posición de equilibrio. Determina la posición de las masas en función del tiempo."
    },
    {
     "mota": "testua",
     "html": "[Figura: cadena horizontal entre dos paredes. De izquierda a derecha: muelle de constante k_1 unido a la pared izquierda; masa m; muelle de constante k_2; masa m; muelle de constante k_1 unido a la pared derecha. Sobre los muelles k_1 (izquierdo) y k_2, con flechas acotadas x_1 y x_2, se indican los desplazamientos de la masa izquierda y de la masa derecha, respectivamente, respecto de sus posiciones de equilibrio.]"
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
     "html": "Usaremos primero la teoría general de las pequeñas oscilaciones acopladas para calcular las pulsaciones propias y los modos normales del sistema y, después, a partir de las condiciones iniciales, determinar la posición de las masas en función del tiempo. Para ello hay que escribir las funciones de energía cinética y potencial, suponiendo que solo hay desplazamientos horizontales. Si en un instante cualquiera las masas están desplazadas unas distancias x_1 y x_2 de la posición de equilibrio del sistema (que de aquí en adelante tomaremos como coordenadas generalizadas del sistema), las funciones mencionadas se escribirán, respectivamente, así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> T = (1/2) T_ij q̇_i q̇_j = (1/2) m (ẋ_1^2 + ẋ_2^2)</code>"
    },
    {
     "mota": "testua",
     "html": "V = (1/2) V_ij q_i q_j = (1/2) [ (k_1 + k_2) x_1^2 + (k_1 + k_2) x_2^2 − 2 k_1 k_2 x_1 x_2 ] <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde se usa el convenio de Einstein para sumar en los subíndices repetidos. Por la sencillez de los dos tensores, no usaremos el procedimiento abreviado. Los tensores correspondientes de energía cinética y de energía potencial serán estos:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> T = [ m   0 ;  0   m ]        V = [ k_1+k_2    −k_2 ;  −k_2    k_1+k_2 ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Las pulsaciones propias del sistema se obtienen resolviendo la ecuación secular |V − ω^2 T| = 0. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> | k_1+k_2−ω^2 m       −k_2      | |    −k_2         k_1+k_2−ω^2 m | = 0    →    { ω_1 = √(k_1/m) ;  ω_2 = √((k_1 + 2k_2)/m) } </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Como era de esperar, la primera de las pulsaciones corresponde al llamado <em>modo simétrico</em>, con las dos partículas desplazadas la misma distancia hacia un lado y sin que trabaje el muelle central. La segunda, al <em>modo antisimétrico</em>, con las dos partículas desplazadas la misma distancia pero en sentidos contrarios."
    },
    {
     "mota": "testua",
     "html": "<strong>• Modos normales.</strong>"
    },
    {
     "mota": "testua",
     "html": "Calculemos los autovectores asociados a las dos primeras pulsaciones, para construir después la matriz correspondiente, tras ortogonalizar a partir del tensor de energía cinética. Según la teoría, sabemos que los autovectores asociados a las pulsaciones propias son soluciones de: (V − ω_r^2 T) a_r = 0. En nuestro caso, tras sustituir y simplificar, nos quedará:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> • ω = ω_1:    [ k_2   −k_2 ;  −k_2   k_2 ] [ a_11 ; a_21 ] = [ 0 ; 0 ]    →    a_21 = a_11</code>"
    },
    {
     "mota": "testua",
     "html": "• ω = ω_2:    [ −k_2   −k_2 ;  −k_2   −k_2 ] [ a_12 ; a_22 ] = [ 0 ; 0 ]    →    a_22 = −a_12 <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Y la matriz A de autovectores correspondiente se escribirá, por tanto, así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> A = [ a_11    a_11 ;  a_12    −a_12 ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "La condición de ortogonalización mediante la matriz de energía cinética nos permitirá determinar los valores a_11 y a_12. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> Ã T A = I    →    a_11 = a_12 = 1/√(2m) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "y la matriz de autovectores, ya normalizada, se escribirá así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> A = (1/√(2m)) [ 1    1 ;  1   −1 ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "<strong>• Coordenadas normales.</strong>"
    },
    {
     "mota": "testua",
     "html": "Recordemos que la expresión de las coordenadas normales se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> η_r = Σ_{jk} T_jk a_kr [ q_{j0} cos ω_r t + (q̇_{j0}/ω_r) sin ω_r t ] </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde q_{j0} y q̇_{j0} expresan los valores iniciales de las coordenadas generalizadas. En nuestro caso, son estos: x_10 = 0, x_20 = a, ẋ_10 = v_0, ẋ_20 = 0. Sustituyendo estos valores, nos quedará:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> η_1 = √(m/2) ( a cos ω_1 t + (v_0/ω_1) sin ω_1 t )</code>"
    },
    {
     "mota": "testua",
     "html": "η_2 = √(m/2) ( −a cos ω_2 t + (v_0/ω_2) sin ω_2 t ) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "De aquí obtendremos la evolución temporal de las coordenadas generalizadas según la expresión q = A η. Sustituyendo:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_1 = (1/2) [ a (cos ω_1 t − cos ω_2 t) + v_0 ( (sin ω_1 t)/ω_1 + (sin ω_2 t)/ω_2 ) ]</code>"
    },
    {
     "mota": "testua",
     "html": "x_2 = (1/2) [ a (cos ω_1 t + cos ω_2 t) + v_0 ( (sin ω_1 t)/ω_1 − (sin ω_2 t)/ω_2 ) ] <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Es fácil comprobar que estas dos expresiones cumplen las condiciones iniciales especificadas."
    },
    {
     "mota": "testua",
     "html": "<strong>• Otro método.</strong>"
    },
    {
     "mota": "testua",
     "html": "Por la naturaleza del sistema oscilante (masas idénticas unidas a las paredes mediante muelles de la misma constante elástica y entre sí mediante otro muelle de constante elástica distinta de las anteriores), es intuitivo deducir que los dos modos indicados antes son los posibles: el simétrico, en el que las dos partículas se desplazan cantidades iguales hacia un lado, y el antisimétrico, en el que las dos partículas se desplazan cantidades iguales en sentidos contrarios. Supondremos también que hemos obtenido las dos pulsaciones características de estos modos, que valen:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ω_1 = √(k_1/m)        ω_2 = √((k_1 + 2k_2)/m) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Los estados de oscilación de cada modo, para cada partícula, serán estos:"
    },
    {
     "mota": "testua",
     "html": "<strong>• Modo simétrico:</strong>"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_{1(1)} = A_1 cos(ω_1 + φ_1)</code>"
    },
    {
     "mota": "testua",
     "html": "x_{2(1)} = A_1 cos(ω_1 + φ_1) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Las dos partículas están desplazadas la misma distancia hacia el mismo lado en cualquier instante."
    },
    {
     "mota": "testua",
     "html": "<strong>• Modo antisimétrico:</strong>"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_{1(2)} = A_2 cos(ω_2 + φ_2)</code>"
    },
    {
     "mota": "testua",
     "html": "x_{2(2)} = −A_2 cos(ω_2 + φ_2) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Las dos partículas están desplazadas la misma distancia en sentidos contrarios en cualquier instante."
    },
    {
     "mota": "testua",
     "html": "Pero la solución general (la ecuación de movimiento de cada partícula) es la suma de los estados de oscilación de cada modo. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x_1 = x_{1(1)} + x_{1(2)} = A_1 cos(ω_1 + φ_1) + A_2 cos(ω_2 + φ_2)</code>"
    },
    {
     "mota": "testua",
     "html": "x_2 = x_{2(1)} + x_{2(2)} = A_1 cos(ω_1 + φ_1) − A_2 cos(ω_2 + φ_2) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Igualmente, las velocidades de cada partícula se obtendrán derivando las expresiones anteriores:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ẋ_1 = −ω_1 A_1 sin(ω_1 + φ_1) − ω_2 A_2 sin(ω_2 + φ_2)</code>"
    },
    {
     "mota": "testua",
     "html": "ẋ_2 = −ω_1 A_1 sin(ω_1 + φ_1) + ω_2 A_2 sin(ω_2 + φ_2) <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Las cuatro constantes indeterminadas que aparecen se calcularán a partir de las condiciones iniciales de posición y velocidad de cada partícula. Sustituyendo, llegaremos a esto:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> { x_10 = 0 = A_1 cos φ_1 + A_2 cos φ_2 x_20 = a = A_1 cos φ_1 − A_2 cos φ_2 ẋ_10 = v_0 = −ω_1 A_1 sin φ_1 − ω_2 A_2 sin φ_2 ẋ_20 = 0 = −ω_1 A_1 sin φ_1 + ω_2 A_2 sin φ_2 } </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "cuya resolución simultánea nos lleva a los siguientes resultados:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> { tan φ_1 = −v_0/(ω_1 a)        A_1 = a/(2 cos φ_1) tan φ_2 = v_0/(ω_2 a)        A_2 = −a/(2 cos φ_2) } </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Es un ejercicio puramente académico comprobar que la sustitución de estos valores en las expresiones de x_1 y x_2 reproduce las ecuaciones de movimiento obtenidas por el primer procedimiento (afortunadamente, las funciones seno y coseno no habrá que calcularlas en función de las tangentes correspondientes, pues podrán simplificarse y en dichas expresiones solo aparecerá esta última)."
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
     "html": "Una barra AB recta y homogénea, de longitud 2a, puede moverse en un plano vertical, y cuelga del origen O por uno de sus extremos A mediante un hilo OA inextensible y sin masa de longitud L. Halla las frecuencias de las pequeñas oscilaciones de la barra en torno a su posición de equilibrio. Estudia los casos límite L ≫ a y L ≪ a."
    },
    {
     "mota": "testua",
     "html": "[Figura: techo horizontal (sombreado) en la parte superior; ejes con origen O, el eje z hacia arriba y el eje x hacia la derecha. De O cuelga el hilo OA de longitud L, que forma el ángulo θ con la vertical trazada hacia abajo desde O (línea continua). En el extremo A comienza la barra, que forma el ángulo φ con la vertical trazada desde A (línea de puntos); V es el centro de la barra y el extremo inferior lleva la etiqueta «2a, M».]"
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
     "html": "Usemos las variables generalizadas que se muestran en la segunda figura. Las coordenadas del centro de la varilla, el punto V, y las componentes de la velocidad son estas:"
    },
    {
     "mota": "testua",
     "html": "{ x_V = L sin θ + a sin φ → ẋ_V = L θ̇ cos θ + a φ̇ cos φ { z_V = −(L cos θ + a cos φ) → ż_V = L θ̇ sin θ + a φ̇ sin φ"
    },
    {
     "mota": "testua",
     "html": "A la energía cinética de la masa concentrada en el centro de masas de la varilla hay que añadirle la energía cinética de rotación. Los términos de la energía cinética y de la potencial, tras hacer los cálculos y las simplificaciones oportunas, serán estos:"
    },
    {
     "mota": "testua",
     "html": "T = (1/2) M [ L²θ̇² + a²φ̇² + 2La θ̇φ̇ cos(θ − φ) ] + (1/2) [ (1/12) M (2a)² ] φ̇² = (1/2) M [ L²θ̇² + (4/3) a²φ̇² + 2La θ̇φ̇ cos(θ − φ) ]"
    },
    {
     "mota": "testua",
     "html": "V = −Mg (L cos θ + a cos φ)"
    },
    {
     "mota": "testua",
     "html": "Hagamos las aproximaciones correspondientes al caso de pequeñas oscilaciones: sin α ≈ α y cos α ≈ 1 − α²/2, despreciando los términos infinitesimales de orden superior. Por tanto, nos quedará:"
    },
    {
     "mota": "testua",
     "html": "T = (1/2) M [ L²θ̇² + (4/3) a²φ̇² + 2La θ̇φ̇ ] = (1/2) T_ij q̇_i q̇_j V = (1/2) Mg [ Lθ² + aφ² ] = (1/2) V_ij q_i q_j"
    },
    {
     "mota": "testua",
     "html": "En el término de energía potencial hemos despreciado también una constante aditiva, que no influye en el movimiento del sistema y que podría anularse eligiendo adecuadamente el origen del sistema de coordenadas usado. Siguiendo el procedimiento indicado en la teoría general de las pequeñas oscilaciones, las frecuencias propias de oscilación del sistema serán las soluciones del determinante secular |V − ω²T| = 0, donde V y T son, respectivamente, los tensores correspondientes de la energía cinética y de la potencial de arriba, que en nuestro caso son:"
    },
    {
     "mota": "testua",
     "html": "V = [ MgL 0 ] T = [ ML² MLa ] [ 0 Mga ] [ MLa (4/3)Ma² ]"
    },
    {
     "mota": "testua",
     "html": "Como M aparece en todos los términos de las dos matrices, podemos simplificarla al calcular las frecuencias propias. Por tanto, las frecuencias propias vendrán de la resolución de:"
    },
    {
     "mota": "testua",
     "html": "gL − ω²L² −ω²La | <br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;| = 0 <br>−ω²La ga − ω²(4/3)a² |"
    },
    {
     "mota": "testua",
     "html": "Es decir:"
    },
    {
     "mota": "testua",
     "html": "ω²_{1,2} = (g / 2La) [ 4a + 3L ± √(16a² + 9L² + 12La) ]"
    },
    {
     "mota": "testua",
     "html": "esas son las frecuencias propias buscadas."
    },
    {
     "mota": "testua",
     "html": "▶ Aproximaciones para los casos L ≫ a y L ≪ a. Una tentación (que hay que superar) nos lleva a escribir la expresión anterior de las frecuencias propias en una de estas dos formas:"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≫ a: ω²_{1,2} = (g / 2a) [ 4(a/L) + 3 ± √(16(a²/L²) + 9 + 12(a/L)) ] —(a/L → 0)→ { 3g/a , 0 }"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≪ a: ω²_{1,2} = (g / 2L) [ 4 + 3(L/a) ± √(16 + 9(L²/a²) + 12(L/a)) ] —(L/a → 0)→ { 4g/L , 0 }"
    },
    {
     "mota": "testua",
     "html": "La segunda de las frecuencias es nula en cada caso. Estos resultados chocan con lo que nos dice nuestra intuición. En primer lugar, si L ≫ a, esto nos dice que el sistema es equivalente a un péndulo simple que cuelga una masa M (casi puntual) del extremo de un hilo de longitud L. Por tanto, esperamos obtener la pulsación propia de un péndulo simple: ω² = g/L. En segundo lugar, la misma intuición nos dice que, si L ≪ a, el sistema se reduciría a una barra de longitud 2a colgada de uno de sus extremos y oscilando en un plano vertical, y por eso la pulsación esperada es la del péndulo compuesto: ω² = Mgb/I = 3g/4a, donde b es la distancia del punto de suspensión al centro de masas (en este caso a), e I es el momento de inercia de la varilla respecto del eje perpendicular al plano que pasa por el punto de suspensión, que vale (1/3)M(2a)². Como estos resultados esperados no concuerdan en absoluto con los obtenidos usando el formalismo general de las pequeñas oscilaciones y las aproximaciones correspondientes a cada caso, volveremos atrás para saber qué ha ocurrido."
    },
    {
     "mota": "testua",
     "html": "Recordemos las expresiones de las energías cinética y potencial tras la primera aproximación:"
    },
    {
     "mota": "testua",
     "html": "T = (1/2) M [ L²θ̇² + (4/3) a²φ̇² + 2La θ̇φ̇ ] V = (1/2) Mg [ Lθ² + aφ² ]"
    },
    {
     "mota": "testua",
     "html": "Si ahora sacamos factor común L (o L², según sea la energía potencial o la cinética) en el primer caso, y a (o a², según lo dicho antes) en el segundo, nos quedará:"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≫ a: { T = (1/2) ML² [ θ̇² + (4/3)(a²/L²) φ̇² + 2(a/L) θ̇φ̇ ] { V = (1/2) MgL [ θ² + (a/L) φ² ]"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≪ a: { T = (1/2) Ma² [ (L²/a²) θ̇² + (4/3) φ̇² + 2(L/a) θ̇φ̇ ] { V = (1/2) Mga [ (L/a) θ² + φ² ]"
    },
    {
     "mota": "testua",
     "html": "Una primera conclusión es que ahora no estamos ante energías cinética y potencial de la forma T = (1/2) T_ij q̇_i q̇_j y V = (1/2) V_ij q_i q_j, con parámetros T_ij y V_ij constantes y finitos, sino que algunos coeficientes son infinitesimales, y por eso el formalismo general usado hasta ahora no se les aplicará. Por tanto, despreciaremos esos coeficientes infinitesimales en las expresiones de las energías cinética y potencial, y así nos quedará:"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≫ a: { T = (1/2) ML² θ̇² { V = (1/2) MgL θ²"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≪ a: { T = (1/2)(4/3) Ma² φ̇² { V = (1/2) Mga φ²"
    },
    {
     "mota": "testua",
     "html": "Como se ve, cada caso se ha convertido en un problema de un grado de libertad, que puede resolverse usando el formalismo lagrangiano (las ecuaciones de Lagrange de cada función lagrangiana) o (ahora sí) usando el formalismo general de las pequeñas oscilaciones empleado en la sección anterior, pues ahora tenemos la energía cinética y la potencial en la forma indicada antes. Usando este formalismo, el determinante a resolver, en cada caso, sería:"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≫ a: | MgL − ω²ML² | = 0 • Caso L ≪ a: | Mga − ω²(4/3)Ma² | = 0"
    },
    {
     "mota": "testua",
     "html": "lo que nos lleva a estos dos resultados:"
    },
    {
     "mota": "testua",
     "html": "• Caso L ≫ a: ω² = g/L • Caso L ≪ a: ω² = 3g/4a"
    },
    {
     "mota": "testua",
     "html": "que es lo que esperábamos."
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
     "html": "En el sistema de la figura, el muelle y la varilla sin masa están en un plano vertical. Además, el único movimiento posible del muelle es en dirección vertical. Escribe la función lagrangiana del sistema. Obtén las ecuaciones diferenciales del movimiento. Haz la aproximación para desplazamientos angulares y lineales pequeños e interpreta los resultados. Supón ahora <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>. Resuelve las ecuaciones resultantes para esta situación en los siguientes casos límite: a) <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, b) $y = $ cte, c) <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "[Figura: techo (horizontal, sombreado) del que cuelga un muelle de constante <math display=\"inline\"><mi>k</mi></math>; ejes <math display=\"inline\"><mi>x</mi></math> hacia la derecha y <math display=\"inline\"><mi>y</mi></math> hacia arriba, con el origen en el techo; el desplazamiento vertical de <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> respecto del eje <math display=\"inline\"><mi>x</mi></math> se marca con trazos, hacia abajo, y se denomina <math display=\"inline\"><mi>y</mi></math>. Del extremo inferior del muelle cuelga la masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>; de ella parte una varilla de longitud <math display=\"inline\"><mi>a</mi></math>, que forma el ángulo <math display=\"inline\"><mi>θ</mi></math> con la vertical (línea de puntos), y en su extremo está la masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>.]"
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
     "html": "Escribamos las coordenadas de las dos masas y sus correspondientes derivadas temporales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>y</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>y</mi><mn>2</mn></msub><mo>=</mo><mi>y</mi><mo>−</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Los cuadrados de las velocidades de las partículas serán estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/97100048f6dc789d.svg\" alt=\"v_1^2 = dot(y)^2 #h(2em) v_2^2 = dot(y)^2 + a^2 dot(theta)^2 + 2 a dot(y) dot(theta) sin theta\" style=\"width:19.839em;height:1.584em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La energía potencial del sistema tiene dos componentes: la gravitatoria y la elástica. Teniendo en cuenta todos estos datos, podemos escribir a la vez la función lagrangiana y la energía mecánica, la magnitud que se conservará, pues todas las fuerzas que actúan son conservativas. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>y</mi><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>1</mn></msub><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>a</mi><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>y</mi><mo>−</mo><msub><mi>m</mi><mn>2</mn></msub><mi>g</mi><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mtext mathvariant=\"normal\">cte</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de Lagrange para las dos variables generalizadas, <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>θ</mi></math>, una vez simplificadas, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>g</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la hipótesis de pequeñas oscilaciones (<math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>y</mi></math> muy pequeñas), las ecuaciones anteriores quedan así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>1</mn></msub><mo>+</mo><msub><mi>m</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo>+</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>g</mi><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos descartado los términos infinitesimales de orden superior al primero. Como puede verse, en estas situaciones los dos movimientos oscilatorios quedan desacoplados y cada uno representa un movimiento oscilatorio armónico simple. [<em>Nota</em>: Como puede verse, esta manera de hacer la aproximación es bastante burda, porque nos lleva a un resultado que va contra la intuición, ya que debe esperarse un acoplamiento entre los dos movimientos]."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>, estas ecuaciones quedarán así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/a2b8f5c0c90f7c2e.svg\" alt=\"dot.double(y) + frac(k, 2 m) y = - g #h(2em) dot.double(theta) + g / a theta = 0\" style=\"width:15.496em;height:2.605em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La primera de ellas representa un movimiento armónico simple en la vertical en torno a la posición de equilibrio (<math display=\"inline\"><mrow><msub><mi>y</mi><mtext mathvariant=\"normal\">eq</mtext></msub><mo>=</mo><mi>−</mi><mn>2</mn><mi>m</mi><mi>g</mi><mi>/</mi><mi>k</mi></mrow></math>) con frecuencia angular de valor <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>, y la segunda, otro movimiento armónico simple en torno a la vertical con frecuencia angular <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Estudiemos los casos límite propuestos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> (cte): Solo nos queda el movimiento oscilatorio vertical, con la frecuencia angular obtenida antes: <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "$y = $ cte: Solo nos queda el movimiento pendular de la masa inferior, con frecuencia angular <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mi>a</mi></mrow></msqrt></mrow></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>∞</mi></mrow></math>: El único término significativo de la primera ecuación diferencial es el que tiene <math display=\"inline\"><mi>k</mi></math>. Es fácil ver que el resultado de esta primera ecuación es $y = 0 = $ cte. Por tanto, este caso es equivalente al anterior."
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Dado el sistema de la figura, formado por dos discos circulares de radio <math display=\"inline\"><mi>R</mi></math>, conectados entre sí mediante un muelle de constante <math display=\"inline\"><mi>k</mi></math> unido a los puntos indicados, halla las frecuencias propias de oscilación del sistema. Obtén, asimismo, los modos normales de vibración. [Considérese el caso en que no hay deslizamiento entre los discos y el suelo]."
    },
    {
     "mota": "testua",
     "html": "<strong>Figura.</strong>"
    },
    {
     "mota": "testua",
     "html": "Dos discos circulares de radio <math display=\"inline\"><mi>R</mi></math> apoyados en el suelo (sombreado), unidos por su parte superior mediante un muelle de constante <math display=\"inline\"><mi>k</mi></math>. Disco izquierdo: desplazamiento del centro <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, desplazamiento del punto de unión superior del muelle <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, giro <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math>. Disco derecho: desplazamiento del centro <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, desplazamiento del punto de unión superior del muelle <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, giro <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math>."
    }
   ]
  },
  {
   "id": "a32",
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
     "html": "Si hay rodadura pura entre los discos y el suelo, el sistema solo tiene dos grados de libertad (por ejemplo, los dos desplazamientos de los centros de los discos <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, o los ángulos girados por cada uno, <math display=\"inline\"><msub><mi>θ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>θ</mi><mn>2</mn></msub></math>, para hacer esos desplazamientos). Si hubiera habido deslizamiento, estas cuatro magnitudes no tendrían relación entre sí y estaríamos ante un sistema de cuatro grados de libertad."
    },
    {
     "mota": "testua",
     "html": "Además de los desplazamientos de los centros de masas de los dos discos, hemos indicado también los desplazamientos de los puntos de unión entre el muelle y los discos, que hemos llamado <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub></mrow></math>, porque si hay rodadura es fácil comprobar que los puntos superiores tienen un desplazamiento doble que el del centro (además, suponemos que los desplazamientos son pequeños y, por tanto, que el alargamiento o la contracción del muelle se produce en la dirección paralela al suelo). Por último, y antes de empezar a usar el formalismo general de las pequeñas oscilaciones, recordemos las ecuaciones de ligadura entre los desplazamientos lineales y angulares: <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>R</mi><msub><mi>θ</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>R</mi><msub><mi>θ</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, usaremos la teoría general de las pequeñas oscilaciones y expresaremos la energía cinética y la potencial como funciones cuadráticas de las velocidades y de las coordenadas generalizadas, respectivamente, en la forma <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>j</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><msub><mi>q</mi><mi>j</mi></msub></mrow></math>. En esta aproximación, las energías cinética y potencial se escribirán así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msubsup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mspace width=\"0.167em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>8</mn><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos usado las relaciones de ligadura anteriores. Las matrices <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>, y también las reducidas, mediante los factores constantes <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mn>2</mn><mrow><mn>3</mn><mi>m</mi></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>k</mi></mrow></mfrac></mrow></math>, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/68def8cbfd9ece96.svg\" alt=\"upright(bold(T)) = frac(3 m, 2) mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) upright(bold(t)) = mat(delim: &quot;[&quot;, 1, 0; 0, 1)\" style=\"width:14.805em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/e7a5708b7335a10a.svg\" alt=\"upright(bold(V)) = 4 k mat(delim: &quot;[&quot;, 1, - 1; - 1, 1) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, 1, - 1; - 1, 1)\" style=\"width:18.046em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Las pulsaciones propias se obtienen de las soluciones <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>v</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><mi>λ</mi><mspace width=\"0.167em\"></mspace><msub><mi>t</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> del determinante, siendo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>β</mi><mi>α</mi></mfrac><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mrow><mn>8</mn><mi>k</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"0.222em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn><msqrt><mfrac><mi>k</mi><mrow><mn>3</mn><mi>m</mi></mrow></mfrac></msqrt></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera de las soluciones corresponde al llamado modo antisimétrico, con desplazamientos iguales y del mismo sentido, que no conlleva variación en la longitud del muelle (traslación pura), y por eso le corresponde una pulsación propia nula."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Modos normales.</em> Para los modos normales, aplicaremos el mismo modo abreviado, usando las matrices reducidas, que nos dan los mismos vectores. Si <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> son los vectores modales correspondientes a los valores <math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>λ</mi><mn>2</mn></msub></math>, podremos escribir:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>•</mi><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><msub><mi>a</mi><mn>11</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>•</mi><mspace width=\"0.222em\"></mspace><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Nos queda aplicar la condición de ortogonalidad y normalización de los vectores modales bajo la métrica definida por <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math>, que en forma matricial se escribe así: <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">¯</mo></mover><mi>r</mi></msub><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>s</mi></msub><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><msub><mi>δ</mi><mrow><mi>r</mi><mi>s</mi></mrow></msub></mrow></math>, siendo <math display=\"inline\"><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">¯</mo></mover><mi>r</mi></msub></math> un vector fila. En nuestro caso, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> es el tensor unidad, y por eso su acción deja igual a un vector o a otro tensor. Por tanto, podremos descartarlo y la condición de ortogonalidad y normalización se escribirá así: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, siendo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> el tensor construido a partir de los vectores columna. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mrow><mn>3</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así, los autovectores <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub></math> y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> construida con ellos son estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/284779c3a6270ebc.svg\" alt=\"upright(bold(a))_1 = 1 / sqrt(3 m) mat(delim: &quot;[&quot;, 1; 1) #h(2em) upright(bold(a))_2 = 1 / sqrt(3 m) mat(delim: &quot;[&quot;, 1; - 1) quad arrow.r quad upright(bold(A)) = 1 / sqrt(3 m) mat(delim: &quot;[&quot;, 1, 1; 1, - 1)\" style=\"width:30.725em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<em>Modos normales.</em> La expresión de los modos normales, cuando las velocidades generalizadas iniciales <math display=\"inline\"><msub><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover><mi>i</mi></msub></math> son nulas (que normalmente es el caso más habitual), es:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>r</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>T</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mi>a</mi><mrow><mi>j</mi><mi>r</mi></mrow></msub><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mi>r</mi></msub><mi>t</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">suma en </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>i</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>j</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las amplitudes correspondientes a la función coseno pueden escribirse en forma matricial así, teniendo en cuenta en este caso que <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑻</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mn>2</mn></mfrac><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>3</mn><mi>m</mi></mrow><mn>2</mn></mfrac><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">¯</mo></mover><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>x</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De aquí se deduce que los modos normales son estos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>1</mn></msub><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>x</mi><mn>10</mn></msub><mo>+</mo><msub><mi>x</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>2</mn></msub><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><msub><mi>x</mi><mn>10</mn></msub><mo>−</mo><msub><mi>x</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El único modo vibracional es el 2.º, que se activará si <math display=\"inline\"><mrow><msub><mi>x</mi><mn>20</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>10</mn></msub></mrow></math>. Si <math display=\"inline\"><mrow><msub><mi>x</mi><mn>20</mn></msub><mo>=</mo><mi>−</mi><msub><mi>x</mi><mn>10</mn></msub></mrow></math>, se <em>activará</em> el modo traslacional (?)."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las masas <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> de la figura están conectadas mediante un muelle sin masa y de constante recuperadora <math display=\"inline\"><mi>k</mi></math>. Si a la masa <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> se le aplica una fuerza constante de valor <math display=\"inline\"><mi>F</mi></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> (que se mantendrá constante en lo sucesivo), y suponiendo que las masas pueden deslizar sin rozamiento sobre la superficie horizontal, halla la ecuación de movimiento de la partícula 1. Evalúa la energía cinética y la potencial del sistema y el trabajo realizado por la fuerza <math display=\"inline\"><mi>F</mi></math>, y compáralos con la energía mecánica del sistema. [Datos: Las masas parten del reposo en <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y con el muelle con su longitud propia. Además, las dos masas son iguales: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>]."
    },
    {
     "mota": "testua",
     "html": "[Figura: sobre una superficie horizontal (sombreada), dos bloques, <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math> (el izquierdo) y <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> (el derecho), unidos mediante un muelle de constante <math display=\"inline\"><mi>k</mi></math>. Una fuerza <math display=\"inline\"><mi>F</mi></math> (flecha horizontal hacia la derecha) actúa sobre <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>. En la parte superior, tres flechas hacia la derecha marcan los desplazamientos: <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> (sobre <math display=\"inline\"><msub><mi>m</mi><mn>1</mn></msub></math>), <math display=\"inline\"><msub><mi>x</mi><mi>c</mi></msub></math> (en el centro) y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> (sobre <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math>).]"
    }
   ]
  },
  {
   "id": "a34",
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
     "html": "Supondremos que la longitud natural del muelle es <math display=\"inline\"><mi>L</mi></math>. La figura muestra la posición de partida, con las posiciones de los tres orígenes para medir los desplazamientos coincidiendo con los puntos indicados (la referencia para medir <math display=\"inline\"><msub><mi>x</mi><mi>c</mi></msub></math>, que expresa el desplazamiento respecto del centro de masas del sistema, está a una distancia <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> a la derecha de la referencia para medir los desplazamientos de la partícula izquierda, porque suponemos que las dos masas son iguales: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>). En el instante <math display=\"inline\"><mi>t</mi></math>, los desplazamientos de las dos partículas respecto de la posición de partida vienen dados por las coordenadas <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, y, en consecuencia, el desplazamiento del centro de masas y la aceleración correspondiente cumplirán estas relaciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>c</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La deformación del muelle valdrá <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "▶ <em>Método de Newton.</em> Apliquemos las ecuaciones de Newton a las dos masas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub></mrow></math> <math display=\"block\"><mrow><msub><mi>R</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sumando y restando las dos ecuaciones, llegamos a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mi>c</mi></msub></mrow></math> <math display=\"block\"><mrow><mi>F</mi><mo>−</mo><mn>2</mn><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>−</mo><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera ecuación, integrada dos veces respecto del tiempo y teniendo en cuenta las condiciones iniciales (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>), nos permite hallar <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub></mrow></math> en función del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La segunda ecuación se identifica fácilmente con la ecuación de un oscilador armónico con el segundo término no nulo, cuya solución es bien conocida y depende de dos constantes que hay que determinar. Haciendo el cambio de variable <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mrow></math>, esta segunda ecuación es de la forma <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, cuya solución es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. Las dos constantes <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>δ</mi></math> se determinan a partir de las condiciones iniciales: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>→</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, lo que nos permite obtener <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mn>0</mn></mrow></math>, que sustituidas en la solución nos permiten escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, las ecuaciones de movimiento de las dos masas serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "▶ <em>Formalismo de Lagrange.</em> Podemos obtener las mismas ecuaciones diferenciales del movimiento usando el formalismo lagrangiano. El sistema tiene dos grados de libertad, y a ellos les asignaremos las variables <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math> como coordenadas generalizadas. Las velocidades generalizadas serán <math display=\"inline\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub></math>. La energía cinética, la energía potencial (solo elástica) y la función lagrangiana correspondiente serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>T</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>V</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">}</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>L</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Las ecuaciones de Lagrange tendrán que tener en cuenta, en este caso, además de las fuerzas activas procedentes de los potenciales, que hay una fuerza, constante en módulo y dirección, que actúa sobre la primera partícula. Por tanto, habrá que tener en cuenta este hecho en la ecuación de Lagrange correspondiente a la primera variable generalizada, pues tendremos que incluir la fuerza generalizada correspondiente a esa fuerza activa que no está incluida en el término de la función lagrangiana. La expresión de las ecuaciones de Lagrange para este caso es la siguiente:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/8160d0fffc4a871e.svg\" alt=\"frac(d, dif t) (frac(partial L, partial dot(q)_j)) - frac(partial L, partial q_j) = Q_j #h(2em) [Q_j = upright(bold(F))_i dot.op frac(partial upright(bold(r))_i, partial q_j)]\" style=\"width:22.087em;height:3.684em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "En nuestro caso:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/da3e8ffd27b9fdf2.svg\" alt=\"Q_1 = upright(bold(F)) dot.op frac(partial upright(bold(r))_1, partial x_1) = F #h(2em) Q_2 = 0\" style=\"width:15.257em;height:2.904em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "pues <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>1</mn></msub><mo>=</mo><mi mathvariant=\"bold-italic\">𝑭</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (además, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑭</mi></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub></math> tienen la misma dirección). Usando la función lagrangiana obtenida antes y los valores de las fuerzas generalizadas que acabamos de escribir, las ecuaciones de movimiento correspondientes son estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>1</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi></mrow></math> <math display=\"block\"><mrow><mi>m</mi><msub><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msub><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas ecuaciones son iguales a las obtenidas antes usando el método de Newton."
    },
    {
     "mota": "testua",
     "html": "▶ <em>Trabajo y energía mecánica.</em> La energía mecánica del sistema es la suma de la energía cinética y la potencial. Teniendo en cuenta las ecuaciones de movimiento de las dos masas obtenidas antes, las velocidades correspondientes serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>t</mi><mo>+</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi></mrow></math> <math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msub><mo>=</mo><mfrac><mi>F</mi><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>t</mi><mo>−</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De ahí podremos calcular la energía cinética, que, haciendo las operaciones y simplificando, nos quedará así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>F</mi><mn>2</mn></msup><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>t</mi><mn>2</mn></msup><mi>m</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>k</mi></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igualmente, la energía potencial elástica almacenada en el muelle será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><msub><mi>x</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>F</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>k</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la energía mecánica, por tanto, será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>T</mi><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mrow><msup><mi>F</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>F</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la energía inicial es nula y la final es la que aparece arriba, siendo el sistema formado por las masas y el muelle un sistema conservativo, el trabajo realizado por la fuerza constante será exactamente igual a la variación de la energía mecánica entre el instante inicial y el final. Esto puede comprobarse usando la propia definición del trabajo desarrollado por una fuerza. Como la fuerza es constante, este trabajo será directamente el producto de la fuerza por el desplazamiento de la masa sobre la que actúa. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mo>∫</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><msub><mi mathvariant=\"bold-italic\">𝒓</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mo>⋅</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mi>F</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>m</mi></mrow></mfrac><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mi>F</mi><mrow><mn>4</mn><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que coincide con la expresión de la energía mecánica obtenida antes."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "Consideremos el sistema dinámico que se muestra en la figura, formado por un aro de radio <math display=\"inline\"><mi>R</mi></math> y masa <math display=\"inline\"><mi>M</mi></math>, que puede oscilar en un plano vertical en torno a un punto fijo de su circunferencia, y por una cuenta de masa <math display=\"inline\"><mi>m</mi></math> insertada en el aro, que puede deslizar sin rozamiento. a) Calcula el momento de inercia del aro respecto del eje de rotación, b) suponiendo que <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>, ¿cuál será la frecuencia de las pequeñas oscilaciones?, c) Obtén la función lagrangiana del sistema para el caso general en que <math display=\"inline\"><mrow><mi>m</mi><mo>≠</mo><mn>0</mn></mrow></math> usando las coordenadas generalizadas que se muestran en la figura (<math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>φ</mi></math>), d) Haz la aproximación de pequeñas oscilaciones en el lagrangiano, e) Obtén las frecuencias normales del sistema, f) ¿Qué ocurre si <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math>? Describe los modos normales de las pequeñas oscilaciones y calcula sus frecuencias normales, g) Lo mismo para el caso <math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mi>M</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "[Figura: circunferencia (el aro, de masa <math display=\"inline\"><mi>M</mi></math>, etiquetado <math display=\"inline\"><mi>M</mi></math> en su parte superior derecha) con el punto de suspensión <math display=\"inline\"><mi>O</mi></math> en su punto más alto y centro <math display=\"inline\"><mi>C</mi></math>. Una cuenta <math display=\"inline\"><mi>m</mi></math> (punto negro) está en la circunferencia, a la derecha. De <math display=\"inline\"><mi>O</mi></math> baja una línea vertical de puntos. El ángulo <math display=\"inline\"><mi>θ</mi></math> se mide en <math display=\"inline\"><mi>O</mi></math> entre esa vertical y la línea que va de <math display=\"inline\"><mi>O</mi></math> a <math display=\"inline\"><mi>C</mi></math> (el diámetro, prolongado hasta el punto diametralmente opuesto a <math display=\"inline\"><mi>O</mi></math>; la cuenta <math display=\"inline\"><mi>m</mi></math> NO está en esa línea). De <math display=\"inline\"><mi>C</mi></math> parte el radio <math display=\"inline\"><mi>R</mi></math> hasta <math display=\"inline\"><mi>m</mi></math>; junto a <math display=\"inline\"><mi>C</mi></math> se marcan el ángulo <math display=\"inline\"><mi>φ</mi></math> y, de nuevo, el ángulo <math display=\"inline\"><mi>θ</mi></math> respecto de la vertical de puntos trazada desde <math display=\"inline\"><mi>C</mi></math>.]"
    }
   ]
  },
  {
   "id": "a36",
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
     "html": "La respuesta a la primera pregunta es inmediata. Al ser un aro, la masa está concentrada en la circunferencia que lo forma, y así el momento de inercia respecto del eje perpendicular al plano del aro que pasa por su centro <math display=\"inline\"><mi>C</mi></math> es <math display=\"inline\"><mrow><msub><mi>I</mi><mi>C</mi></msub><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>, y aplicando el teorema de Steiner calcularemos el momento de inercia respecto del eje paralelo al anterior que pasa por <math display=\"inline\"><mi>O</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mi>O</mi></msub><mo>=</mo><msub><mi>I</mi><mi>C</mi></msub><mo>+</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la suposición de que <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>, el sistema anterior corresponde a un péndulo físico, cuya pulsación para pequeñas oscilaciones se define según la teoría así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>M</mi><mi>g</mi><mi>d</mi></mrow><msub><mi>I</mi><mi>O</mi></msub></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mi>M</mi><mi>g</mi><mi>R</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mi>g</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>R</mi></mrow></math> la distancia del punto de suspensión al centro de gravedad. Podríamos haber obtenido la misma expresión a partir de la ecuación de movimiento correspondiente al sistema. La energía cinética, rotación pura en torno a <math display=\"inline\"><mi>O</mi></math>, se escribe <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>I</mi><mi>O</mi></msub><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup></mrow></math>, y la potencial será <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>M</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> (suponiendo <math display=\"inline\"><mi>O</mi></math> nula al nivel del centro de suspensión). Por tanto, la función lagrangiana será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>M</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que nos lleva sin dificultad a esta ecuación de movimiento:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La aproximación <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mi>θ</mi></mrow></math>, para pequeñas oscilaciones, nos deja una ecuación diferencial correspondiente a un oscilador armónico de la pulsación obtenida antes: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>g</mi><mi>/</mi><mn>2</mn><mi>R</mi></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Pasemos al problema general, al caso en que <math display=\"inline\"><mrow><mi>m</mi><mo>≠</mo><mn>0</mn></mrow></math>. A la energía cinética y a la potencial del aro tenemos que añadirle la correspondiente a la masa <math display=\"inline\"><mi>m</mi></math>, en función de la nueva coordenada generalizada, <math display=\"inline\"><mi>φ</mi></math>, que se define en la figura para su localización. Las coordenadas y velocidades generalizadas correspondientes serán estas:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/a3dd8d8176182106.svg\" alt=\"x_m = R \\[ sin theta + sin \\( theta + phi \\) \\] #h(2em) dot(x)_m = R \\[ dot(theta) cos theta + \\( dot(theta) + dot(phi) \\) cos \\( theta + phi \\) \\]\" style=\"width:33.949em;height:1.584em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/e446970729fa7c1c.svg\" alt=\"y_m = - R \\[ cos theta + cos \\( theta + phi \\) \\] #h(2em) dot(y)_m = R \\[ dot(theta) sin theta + \\( dot(theta) + dot(phi) \\) sin \\( theta + phi \\) \\]\" style=\"width:34.660em;height:1.584em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "así, la energía cinética y la potencial de la masa <math display=\"inline\"><mi>m</mi></math>, haciendo las operaciones y simplificando, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la función lagrangiana, teniendo en cuenta los dos elementos del sistema (el aro y la partícula):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>+</mo><mi>M</mi><mi>g</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando las aproximaciones para pequeñas oscilaciones, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>∼</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>θ</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>, y despreciando los términos infinitesimales de orden superior al segundo, nos quedará:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mi>g</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><mi>φ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde ya hemos despreciado una constante aditiva, que no influye en el desarrollo posterior del problema."
    },
    {
     "mota": "testua",
     "html": "A continuación, usaremos el formalismo general de las pequeñas oscilaciones para obtener las frecuencias y los modos normales de vibración. Por tanto, escribiremos la energía cinética y la potencial, por separado, asignando los tensores correspondientes <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math> (para buscar después su forma reducida, si existe, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>). Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>m</mi><msup><mi>R</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mi>R</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>R</mi><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>m</mi><mi>g</mi><mi>R</mi><mi>θ</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "O bien:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/4f4dc77542112897.svg\" alt=\"upright(bold(T)) = mat(delim: &quot;[&quot;, 2 \\( M + 2 m \\) R^2, 2 m R^2; 2 m R^2, m R^2) #h(2em) upright(bold(t)) = mat(delim: &quot;[&quot;, 2 \\( 1 + 2 delta \\), 2 delta; 2 delta, delta)\" style=\"width:26.598em;height:2.989em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/93bd74296a64402c.svg\" alt=\"upright(bold(V)) = mat(delim: &quot;[&quot;, \\( M + 2 m \\) g R, m g R; m g R, m g R) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, 1 + 2 delta, delta; delta, delta)\" style=\"width:23.757em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "siendo los factores <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ff7d456b49effb79.svg\" alt=\"alpha = frac(1, M R^2) #h(2em) beta = M g R = frac(1, M R^2 Omega^2)\" style=\"width:18.499em;height:2.585em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "En estas expresiones, además, hemos usado las identificaciones <math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>g</mi><mi>R</mi></mfrac></mrow></math> para abreviar la escritura de aquí en adelante."
    },
    {
     "mota": "testua",
     "html": "Las pulsaciones propias se obtienen de las soluciones <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math> del determinante. En nuestro caso, los valores <math display=\"inline\"><mi>λ</mi></math> que son soluciones de la ecuación de segundo grado resultante son estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/66d12a6481f2bbdd.svg\" alt=\"lambda_1 = 1 / 2 #h(2em) lambda_2 = 1 + delta\" style=\"width:11.377em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y, teniendo en cuenta que las pulsaciones propias están relacionadas con los valores <math display=\"inline\"><mi>λ</mi></math> mediante la relación <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>α</mi><mi>β</mi></mfrac><mi>λ</mi><mo>=</mo><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup><mi>λ</mi></mrow></math>, las pulsaciones buscadas serán estas:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/e31032c69a00b204.svg\" alt=\"omega_1 = sqrt(frac(g, 2 R)) #h(2em) omega_2 = sqrt(frac(M + m, M) g / R)\" style=\"width:17.183em;height:3.186em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Una ampliación de este problema es el cálculo de los modos normales. Para ello, recordaremos, primero, que para cada <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>r</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>1</mn><mi>.</mi><mn>.2</mn></mrow></math>, tendremos que resolver este sistema: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>v</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo>−</mo><msub><mi>λ</mi><mi>r</mi></msub><msub><mi>t</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi>a</mi><mrow><mi>j</mi><mi>r</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>1</mn><mi>.</mi><mn>.2</mn></mrow></math> :"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mi>δ</mi><mn>2</mn></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>δ</mi></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>δ</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><mi>δ</mi></mfrac><msub><mi>a</mi><mn>12</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y de la condición de ortogonalidad, escrita ahora en forma matricial: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, siendo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> el tensor construido a partir de los vectores columna:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><mi>δ</mi></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><mi>δ</mi></mfrac><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "una vez hechas las operaciones y simplificaciones oportunas, se obtendrán estas expresiones:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/842a49f4ee563b16.svg\" alt=\"a_11 = frac(1, R sqrt(M + 2 m)) sqrt(2) / 2 #h(2em) a_12 = frac(1, R sqrt(M + 2 m)) sqrt(m / M)\" style=\"width:25.930em;height:3.162em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, los autovectores correspondientes a las pulsaciones propias <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math>, escritos como vectores columna, son estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/3794135c05786157.svg\" alt=\"upright(bold(a))_1 = frac(1, R sqrt(M + 2 m)) mat(delim: &quot;[&quot;, sqrt(2) / 2; 0) #h(2em) upright(bold(a))_2 = frac(1, R sqrt(M + 2 m)) mat(delim: &quot;[&quot;, sqrt(delta); - frac(1 + 2 delta, sqrt(delta)))\" style=\"width:28.243em;height:3.834em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> construida con estos autovectores, colocados por columnas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>R</mi><msqrt><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mi>δ</mi></msqrt></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><msqrt><mi>δ</mi></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, los modos propios podrán escribirse en la forma <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒒</mi></mrow></math>, siendo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒒</mi></math> la matriz columna formada por las coordenadas generalizadas <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mi>φ</mi></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>η</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup></mrow><mrow><mi>R</mi><msqrt><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msqrt><mn>2</mn></msqrt><mn>2</mn></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mi>δ</mi></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi></mrow><msqrt><mi>δ</mi></msqrt></mfrac></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mi>δ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>δ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>φ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando esta expresión, los modos propios quedan así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>1</mn></msub><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><msqrt><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></msqrt></mfrac><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mo>+</mo><mi>m</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>η</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><msqrt><mfrac><mrow><mi>M</mi><mi>m</mi></mrow><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow></mfrac></msqrt><mi>R</mi><mi>φ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al primero de ellos, <math display=\"inline\"><msub><mi>η</mi><mn>1</mn></msub></math>, lo llamamos <em>modo simétrico</em>, y al segundo, <math display=\"inline\"><msub><mi>η</mi><mn>2</mn></msub></math>, <em>modo antisimétrico</em>. De estas expresiones se deduce que el modo 1 solo se activará si <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>, y el modo 2 se activará si <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>M</mi><mo>+</mo><mn>2</mn><mi>m</mi></mrow><mi>m</mi></mfrac><mi>θ</mi></mrow></math>. El primero de ellos corresponde a la masa <math display=\"inline\"><mi>m</mi></math> fija en el aro, moviéndose como lo haría una masa <math display=\"inline\"><mi>m</mi></math> de un péndulo simple de longitud <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>2</mn><mi>R</mi></mrow></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Caso <math display=\"inline\"><mrow><mi>m</mi><mo>≪</mo><mi>M</mi></mrow></math>. La primera de las pulsaciones propias no cambia, mientras que la segunda, con la aproximación propuesta, queda como <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>∼</mo><msqrt><mfrac><mi>g</mi><mi>R</mi></mfrac></msqrt></mrow></math>. El modo simétrico y el antisimétrico, tras usar las aproximaciones, los escribiremos ahora así:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/7bcd93172a42361f.svg\" alt=\"eta_1 = sqrt(2 M) thin R [theta + m / M phi] #h(2em) eta_2 = - sqrt(m) thin R phi\" style=\"width:21.739em;height:2.336em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Para activar el modo antisimétrico, <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mi>φ</mi></math> es mucho mayor que <math display=\"inline\"><mi>θ</mi></math>. Por tanto, en este modo parece que el aro casi no se mueve y la masa <math display=\"inline\"><mi>m</mi></math> tendría un movimiento parecido al de un péndulo que tuviera el centro en el <em>centro</em> del círculo, es decir, de longitud <math display=\"inline\"><mi>R</mi></math>. En el movimiento simétrico, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>, la masa y el aro se mueven juntos."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Caso <math display=\"inline\"><mrow><mi>m</mi><mo>≫</mo><mi>M</mi></mrow></math>. La primera de las pulsaciones propias no cambia, mientras que la segunda, con la aproximación propuesta, queda como <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>∼</mo><msqrt><mrow><mfrac><mi>m</mi><mi>M</mi></mfrac><mfrac><mi>g</mi><mi>R</mi></mfrac></mrow></msqrt></mrow></math>. El modo simétrico y el antisimétrico, tras usar las aproximaciones, los escribiremos ahora así:"
     ]
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/9169b10339ff466d.svg\" alt=\"eta_1 = sqrt(m) thin R \\[ 2 theta + phi \\] #h(2em) eta_2 = - sqrt(M / 2) thin R phi\" style=\"width:20.248em;height:3.046em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "El modo antisimétrico se activará cuando <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>θ</mi></mrow></math>, y eso, llevado a la práctica, hace que la partícula <math display=\"inline\"><mi>m</mi></math> parezca casi no moverse en el lugar en que está (conviene hacer una representación gráfica de la situación que se da). En cuanto al modo simétrico, podemos decir lo mismo que en el caso anterior."
    },
    {
     "mota": "testua",
     "html": "line(start: (25%,0%), end: (75%,0%))"
    },
    {
     "mota": "testua",
     "html": "Notas de transcripción (no forman parte del texto original): - Se transcribe literalmente. En la página 50 el autor escribe <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>M</mi><mi>g</mi><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>; el término central <math display=\"inline\"><mrow><mi>M</mi><mi>g</mi><mi>R</mi></mrow></math> no coincide con su homólogo de la derecha (<math display=\"inline\"><mrow><mfrac><mn>1</mn><mrow><mi>M</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>M</mi><mi>g</mi><mi>R</mi></mrow></mfrac></mrow></math>): es una errata del original, se respeta así. - &quot;problerma&quot; (p. 51) es una errata del original; se respeta. - Se ha respetado la acentuación del original: &quot;construida&quot;-&gt;&quot;construída&quot;, &quot;esta&quot;-&gt;&quot;esta&quot; (sin acento en la frase &quot;cuyo centro esta en el centro&quot;)."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la figura se muestra un dispositivo para medir vibraciones. La base está unida rígidamente, en dirección vertical, a un cuerpo sometido a una vibración x₂ = A sin ωt. La constante del muelle y el factor de amortiguamiento son, respectivamente, k y β. Suponiendo que la masa m solo puede desplazarse verticalmente, halla la solución estacionaria de sus oscilaciones <em>respecto de la base</em>. Halla la amplitud y el desfase de esas oscilaciones, haciendo las aproximaciones correspondientes, en estos casos: i) ω₀ ≪ ω, ii) ω₀ ≫ ω (usa la relación de pulsaciones r = ω/ω₀). Dos aplicaciones de este dispositivo son el <em>sismógrafo</em>, cuando la base está unida a la Tierra, y el <em>acelerómetro</em>, cuando la base está unida al cuerpo cuya aceleración se quiere medir. Justifica cuál corresponde a cada uno de los casos anteriores."
    },
    {
     "mota": "testua",
     "html": "[Figura: bloque de masa m en la parte superior; debajo, en paralelo, un amortiguador (etiquetado β) y un muelle (etiquetado k) que lo unen a una plataforma horizontal etiquetada &quot;Base&quot;. A la derecha, la coordenada x₁ (flecha hacia arriba) indica la posición del bloque m y la coordenada x₂ (flecha hacia arriba) indica la posición de la base.]"
    }
   ]
  },
  {
   "id": "a38",
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
     "html": "El sistema de la figura representa un sistema oscilante amortiguado forzado unidimensional, en el que el impulso de la fuerza externa sobre la masa oscilante m procede del movimiento de la base. Puede decirse que también existe el impulso de la fuerza del peso, pero como es una fuerza constante, no influye en las oscilaciones más que desplazando la posición de equilibrio, y por eso no la tendremos en cuenta de aquí en adelante y haremos la hipótesis de que el desplazamiento x₁ se mide desde esa posición de equilibrio y en ausencia de vibración de la base (sistema inercial). Igualmente, el desplazamiento x₂ se mide respecto del estado de reposo del cuerpo sometido a vibración."
    },
    {
     "mota": "testua",
     "html": "Un aspecto importante del problema es que la masa m no está unida a un punto fijo en reposo en un sistema inercial, sino que el punto de sujeción del muelle (y también del amortiguador) es un cuerpo en movimiento acelerado. Como la fuerza elástica es proporcional al alargamiento del muelle, será proporcional a x₁ − x₂. Asimismo, como la fuerza de amortiguamiento es proporcional a la velocidad, en este caso habrá que tener en cuenta también la velocidad relativa ẋ₁ − ẋ₂. Escribamos, por tanto, la ecuación de movimiento de la masa m respecto de un observador inercial:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> m ẍ₁ = −k(x₁ − x₂) − 2mβ(ẋ₁ − ẋ₂) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Restando m ẍ₂ a los dos miembros y usando una nueva variable x = x₁ − x₂, que, salvo una constante aditiva, nos da la posición relativa de la masa m respecto de la base, tras simplificar nos quedará:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ẍ + 2βẋ + ω₀²x = −ẍ₂ = Aω² sin ωt </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "formalmente la ecuación correspondiente a un movimiento amortiguado forzado, con fuerza externa impulsora sinusoidal de pulsación ω y con pulsación del movimiento oscilatorio libre ω₀ = √(k/m). La solución del movimiento estacionario es bien conocida, según la teoría, y es de la forma:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> x = D sin(ωt − δ) </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde D y δ tienen estos valores:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> D = Aω² / √((ω₀² − ω²)² + 4β²ω²) = Ar² / √((1 − r²)² + 4β²r²/ω₀²)</code>"
    },
    {
     "mota": "testua",
     "html": "δ = tan⁻¹ [ 2βω / (ω₀² − ω²) ] = tan⁻¹ [ (2βr/ω₀) / (1 − r²) ] <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Estudiemos los dos casos propuestos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "ω₀ ≪ ω → r ≫ 1. Esto puede conseguirse con un muelle de constante elástica débil y una masa oscilante grande (como ocurre en los sismógrafos). En este caso, los valores de la amplitud del movimiento estacionario y del ángulo de desfase tienden a esto:"
     ]
    },
    {
     "mota": "testua",
     "html": "<code></code><code> D = lim(r→∞) Ar² / √((1 − r²)² + 4β²r²/ω₀²) = A</code>"
    },
    {
     "mota": "testua",
     "html": "δ = lim(r→∞) tan⁻¹ [ (2βr/ω₀) / (1 − r²) ] = tan⁻¹(0⁻) = π <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "El detalle de la última expresión es importante, donde escribimos tan⁻¹(0⁻), que quiere indicar que es el arco cuya tangente se aproxima a 0, pero por el lado negativo. Las oscilaciones de la masa m respecto de la base tienen en el sistema inercial la misma amplitud que las de esta, pero están en oposición de fase."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "ω₀ ≫ ω → r ≪ 1. Esto puede conseguirse con un muelle de constante elástica grande y una masa oscilante pequeña (como ocurre en los acelerómetros). La amplitud y el desfase, en este caso, tienen estos valores:"
     ]
    },
    {
     "mota": "testua",
     "html": "<code></code><code> D = lim(r→0) Ar² / √((1 − r²)² + 4β²r²/ω₀²) = Ar² = Aω²/ω₀²</code>"
    },
    {
     "mota": "testua",
     "html": "δ = lim(r→0) tan⁻¹ [ (2βr/ω₀) / (1 − r²) ] = tan⁻¹(0⁺) = 0 <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Igual que lo dicho en el apartado anterior, aquí hablamos del arco cuya tangente se aproxima a 0 por el lado positivo. Las oscilaciones de la masa m respecto de la base tienen una amplitud mucho menor (pues r ≪ 1) que la amplitud de las oscilaciones de la base en el sistema inercial, y además están en fase con estas."
    },
    {
     "mota": "testua",
     "html": "En el caso ω₀ ≪ ω (r muy grande), las oscilaciones de la masa m respecto de la base reproducen exactamente las de esta, pero con un desfase de π. Así, el registro de las oscilaciones de la masa m respecto de la base, es decir, el de x, con el desfase mencionado, nos da las vibraciones del cuerpo al que está unida. Esto se consigue con muelles nada rígidos (k pequeña) y con masas muy grandes (<em>sismógrafo</em>)."
    },
    {
     "mota": "testua",
     "html": "Por otro lado, en el caso ω₀ ≫ ω (r muy pequeña), las oscilaciones de la masa m respecto de la base nos dan una medida en fase de la aceleración del cuerpo al que está unida (la base), pues Aω² = Dω₀² y el primer término es la amplitud de la aceleración del cuerpo sometido a vibración. Esto se consigue con muelles muy rígidos (k grande) y con masas muy pequeñas (<em>acelerómetro</em>)."
    },
    {
     "mota": "testua",
     "html": "▶ Un procedimiento alternativo para obtener las mismas ecuaciones es considerar el problema como uno de movimiento relativo. Si escribimos la relación entre las aceleraciones respecto de un sistema inercial y respecto de otro sistema no inercial con movimiento de traslación (y no de rotación):"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> a = A_NI + a′   →   ma = F = mA_NI + ma′ = mA_NI + F′ </code><code></code>"
    },
    {
     "mota": "testua",
     "html": "donde a es la aceleración respecto del sistema inercial, a′ la aceleración respecto del sistema de referencia móvil (con el que identificamos la base) y A_NI la aceleración del sistema móvil. En nuestro caso, como el movimiento se da en una dimensión, las ecuaciones de movimiento se escriben fácilmente, pues a = ẍ₁, a′ = ẍ₁ − ẍ₂ = ẍ y A_NI = ẍ₂ = −Aω² sin ωt. La ecuación de movimiento desde el sistema no inercial será:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> F′ = ma′ = F − mA_NI</code>"
    },
    {
     "mota": "testua",
     "html": "m ẍ = −kx − 2mβẋ − m ẍ₂ <code></code><code></code>"
    },
    {
     "mota": "testua",
     "html": "Los dos primeros términos del segundo miembro son la fuerza real que actúa sobre la masa m, procedente del alargamiento del muelle y del amortiguamiento proporcional a la velocidad relativa de la masa m respecto de la base. Sustituyendo el valor de ẍ₂, llegamos a la misma ecuación de movimiento que antes:"
    },
    {
     "mota": "testua",
     "html": "<code></code><code> ẍ + 2βẋ + ω₀²x = −ẍ₂ = Aω² sin ωt </code><code></code>"
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tres alambres rectos y lisos están en un plano horizontal y <em>soldados</em> entre sí formando ángulos iguales de 120°. Tres cuentas de la misma masa <math display=\"inline\"><mi>m</mi></math> están insertadas en los alambres, una en cada uno, y pueden deslizar sin rozamiento a lo largo de ellos. Asimismo, las tres cuentas están unidas dos a dos mediante muelles de la misma constante recuperadora <math display=\"inline\"><mi>k</mi></math>. Además, para simplificar los cálculos, supondremos que sus longitudes naturales son nulas. Halla las frecuencias propias de vibración y los modos normales correspondientes a las pequeñas oscilaciones que realiza el sistema."
    }
   ]
  },
  {
   "id": "a40",
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
     "html": "En la figura se representa la situación en un instante cualquiera. El término <em>soldados</em>, resaltado, quiere sugerir que los alambres dejan que las partículas pasen al otro lado del punto O (de ahí su prolongación con líneas discontinuas). Como coordenadas generalizadas hemos usado los desplazamientos de cada cuenta a lo largo de cada alambre, a partir del origen O."
    },
    {
     "mota": "testua",
     "html": "[Figura (p. 74): tres alambres que se cruzan en O, formando ángulos de 120°, con sus prolongaciones en línea discontinua. En cada alambre hay una cuenta de masa <math display=\"inline\"><mi>m</mi></math>, cuyo desplazamiento desde O es <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>3</mn></msub></math>. Las tres cuentas están unidas dos a dos mediante muelles etiquetados <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>1</mn></msub></mrow></math> ; <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>2</mn></msub></mrow></math> ; <math display=\"inline\"><mrow><mi>k</mi><mo>,</mo><msub><mi>l</mi><mn>3</mn></msub></mrow></math>.]"
    },
    {
     "mota": "testua",
     "html": "Como la energía potencial del sistema es solo elástica, necesitaremos las longitudes de los tres muelles para evaluarla. Estas (mejor dicho, sus cuadrados) se determinarán mediante la simple aplicación del teorema del coseno. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>120</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></mrow></math> <math display=\"block\"><mrow><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub></mrow></math> <math display=\"block\"><mrow><msubsup><mi>l</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las energías cinética y potencial vendrán dadas, por tanto, por las siguientes expresiones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>l</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>l</mi><mn>3</mn><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msubsup><mi>x</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msubsup><mi>x</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub><mo>+</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><msub><mi>x</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y las matrices asociadas <strong>T</strong> y <strong>V</strong> correspondientes:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/138f48e86f977001.svg\" alt=\"upright(bold(T)) = m mat(delim: &quot;[&quot;, 1, 0, 0; 0, 1, 0; 0, 0, 1) #h(2em) upright(bold(V)) = k mat(delim: &quot;[&quot;, 2, 1 \\/ 2, 1 \\/ 2; 1 \\/ 2, 2, 1 \\/ 2; 1 \\/ 2, 1 \\/ 2, 2)\" style=\"width:21.537em;height:4.541em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Si usamos la formulación abreviada, definiendo las matrices <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, obtendremos los mismos resultados que obtendríamos calculando los &quot;autovalores&quot; y &quot;autovectores&quot; con las matrices completas. En nuestro caso:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/2173616ec3292986.svg\" alt=\"upright(bold(t)) = mat(delim: &quot;[&quot;, 1, 0, 0; 0, 1, 0; 0, 0, 1) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, 2, 1 \\/ 2, 1 \\/ 2; 1 \\/ 2, 2, 1 \\/ 2; 1 \\/ 2, 1 \\/ 2, 2) #h(2em) alpha = 1 \\/ m \\, med beta = 1 \\/ k\" style=\"width:30.562em;height:4.541em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Resolvamos, pues, la ecuación de los &quot;autovalores&quot;:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mi>λ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así obtenemos una ecuación de tercer grado en <math display=\"inline\"><mi>λ</mi></math>, en este caso especialmente fácil de resolver:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msup><mi>λ</mi><mn>3</mn></msup><mo>−</mo><mn>6</mn><msup><mi>λ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>45</mn><mn>4</mn></mfrac><mi>λ</mi><mo>−</mo><mfrac><mn>27</mn><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>λ</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">(doble)</mtext></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "La relación entre estos valores <math display=\"inline\"><mi>λ</mi></math> y las pulsaciones propias viene dada así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>ω</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">(doble)</mtext></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Los autovectores correspondientes se obtendrán de la resolución de la ecuación general para cada autovalor. Es decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><msub><mi>λ</mi><mi>r</mi></msub><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la raíz simple <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math> no hay problema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>31</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><msub><mi>a</mi><mn>21</mn></msub><mo>=</mo><msub><mi>a</mi><mn>31</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la raíz doble <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>, en cambio, la situación no es tan sencilla. En este caso, el sistema de ecuaciones a resolver me da una única ecuación válida, y por eso podré tomar arbitrariamente dos de las componentes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn><mi>/</mi><mn>2</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn><mo>−</mo><mn>3</mn><mi>/</mi><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>32</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>12</mn></msub><mo>+</mo><msub><mi>a</mi><mn>22</mn></msub><mo>+</mo><msub><mi>a</mi><mn>32</mn></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde hemos supuesto <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub></mrow></math>. Si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>3</mn></msub></mrow></math>, la ecuación resultante es exactamente igual a la que acabamos de obtener: <math display=\"inline\"><mrow><msub><mi>a</mi><mn>13</mn></msub><mo>+</mo><msub><mi>a</mi><mn>23</mn></msub><mo>+</mo><msub><mi>a</mi><mn>33</mn></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Apliquemos la condición de normalización bajo la matriz <strong>T</strong> al autovector <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub></math>. Esto nos lleva a:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>11</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>3</mn><mi>m</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los autovectores correspondientes a la raíz doble los escribiremos como <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math>, cada uno de los cuales debe ser ortogonal bajo <strong>T</strong> a <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>1</mn></msub></math> (como nos dice la teoría), pero eso no asegura la ortogonalidad entre ellos. Sin embargo, si <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math> son autovectores correspondientes a la raíz doble, cualquier combinación lineal de ambos también lo será. Por ejemplo, suponiendo que fijamos <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> como uno de los definitivos, podemos construir <math display=\"inline\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></mrow></math> que, además de ser autovector para ese autovalor degenerado, también es ortogonal a <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> mediante la matriz <strong>T</strong>. Por tanto, un primer paso es elegir los dos vectores <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math> que cumplen la única ecuación válida escrita arriba. Como podemos hacerlo casi arbitrariamente, si hacemos <math display=\"inline\"><mrow><msub><mi>a</mi><mn>32</mn></msub><mo>=</mo><mn>0</mn></mrow></math> en el primero y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>23</mn></msub><mo>=</mo><mn>0</mn></mrow></math> en el segundo, podremos escribir:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>:</mo><msub><mi>a</mi><mn>32</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>22</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>12</mn></msub></mrow></math>",
      "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>3</mn></msub><mo>:</mo><msub><mi>a</mi><mn>23</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>33</mn></msub><mo>=</mo><mi>−</mi><msub><mi>a</mi><mn>13</mn></msub></mrow></math>"
     ]
    },
    {
     "mota": "testua",
     "html": "así, los autovectores asociados serán estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/a7d5b03abd2e2403.svg\" alt=\"upright(bold(a))_2 = a_12 mat(delim: &quot;[&quot;, 1; - 1; 0) #h(2em) upright(bold(a))_3 = a_13 mat(delim: &quot;[&quot;, 1; 0; - 1)\" style=\"width:17.209em;height:4.526em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Tomando el vector <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> como definitivo, el vector <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup></math> que cumple a la vez la condición de ser ortogonal a <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> bajo <strong>T</strong> será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Apliquemos a los dos primeros vectores, <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub></math>, la condición de normalización:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>12</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math> <math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>13</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y exijamos ahora que <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup></math> sea ortogonal a <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub></math>, lo que nos permitirá determinar una relación entre <math display=\"inline\"><msub><mi>c</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>c</mi><mn>3</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn><mo>′</mo></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>2</mn></msub><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><mspace width=\"0.167em\"></mspace><msub><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mi mathvariant=\"bold-italic\">𝑻</mi><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además, como <math display=\"inline\"><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup></math> debe estar igualmente normalizado, deberá cumplirse lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn><mo>′</mo></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><msubsup><mi mathvariant=\"bold-italic\">𝒂</mi><mn>3</mn><mo>′</mo></msubsup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>c</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>c</mi><mn>3</mn><mn>2</mn></msubsup><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando la relación que acabamos de obtener, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>2</mn><msub><mi>c</mi><mn>2</mn></msub></mrow></math>, llegaremos a una ecuación de segundo grado en <math display=\"inline\"><msub><mi>c</mi><mn>2</mn></msub></math>, que nos dará dos parejas de valores <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>2</mn></msub><mo>,</mo><msub><mi>c</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que cumplen las propiedades deseadas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>3</mn><msubsup><mi>c</mi><mn>2</mn><mn>2</mn></msubsup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>±</mi><mfrac><msqrt><mn>3</mn></msqrt><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>∓</mi><mfrac><mrow><mn>2</mn><msqrt><mn>3</mn></msqrt></mrow><mn>3</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para simplificar, aquí elegiremos solo una de las parejas (por ejemplo, la primera opción), y así los autovectores correspondientes al valor degenerado de la frecuencia propia serán estos (nos ahorramos los cálculos):"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/b87624319a1c8e81.svg\" alt=\"upright(bold(a))_2 = 1 / sqrt(2 m) mat(delim: &quot;[&quot;, 1; - 1; 0) #h(2em) upright(bold(a))_3 = 1 / sqrt(6 m) mat(delim: &quot;[&quot;, - 1; - 1; 2)\" style=\"width:19.593em;height:4.526em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por último, la matriz que diagonaliza a la vez la matriz de energía cinética y la de energía potencial será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>6</mn><mi>m</mi></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msqrt><mn>3</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msqrt><mn>2</mn></msqrt></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>2</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un péndulo simple de masa <math display=\"inline\"><mi>m</mi></math>, cuyo periodo cuando cuelga de un soporte fijo es 1 s, se cuelga de un bloque de masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> que puede moverse sin rozamiento a lo largo de una recta horizontal en el mismo plano del péndulo. Este bloque está unido a una pared mediante un muelle horizontal de constante recuperadora <math display=\"inline\"><mi>k</mi></math>. El periodo del movimiento de este bloque sin el péndulo es 0.1 s. Halla el periodo de los dos modos normales. Describe los modos normales. ¿Cambian mucho respecto de los correspondientes a las oscilaciones desacopladas? ¿Por qué? Consideremos que el sistema oscila en el modo más lento y que la amplitud de la masa del péndulo es 100 mm. ¿Cuál es la amplitud correspondiente al bloque?"
    },
    {
     "mota": "testua",
     "html": "[Figura: sistema de ejes con el eje <math display=\"inline\"><mi>y</mi></math> vertical y el eje <math display=\"inline\"><mi>x</mi></math> horizontal desde el origen <math display=\"inline\"><mi>O</mi></math>. Un muelle horizontal de constante <math display=\"inline\"><mi>k</mi></math> está anclado a la pared izquierda y unido a un bloque de masa <math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math> apoyado sobre una superficie horizontal (la mesa, sombreada). El desplazamiento horizontal del bloque se mide con la coordenada <math display=\"inline\"><mi>x</mi></math>. Del bloque cuelga un péndulo de longitud <math display=\"inline\"><mi>l</mi></math>, que forma el ángulo <math display=\"inline\"><mi>θ</mi></math> con la vertical, con la masa <math display=\"inline\"><mi>m</mi></math> en su extremo.]"
    }
   ]
  },
  {
   "id": "a42",
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
     "html": "El sistema oscila como se muestra en la figura. Existe una relación directa entre los periodos de los dos osciladores y sus características físico-geométricas por separado. En el caso de un péndulo simple, <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>p</mi><mn>2</mn></msubsup><mo>=</mo><mi>g</mi><mi>/</mi><mi>l</mi></mrow></math>. Como en el caso del péndulo el periodo vale <math display=\"inline\"><mrow><msub><mi>τ</mi><mi>p</mi></msub><mo>=</mo><mn>1</mn></mrow></math> s, podremos escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>=</mo><msubsup><mi>ω</mi><mi>p</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><msubsup><mi>τ</mi><mi>p</mi><mn>2</mn></msubsup></mfrac><mo>=</mo><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "pues <math display=\"inline\"><mrow><msub><mi>τ</mi><mi>p</mi></msub><mo>=</mo><mn>1</mn></mrow></math> s es el periodo de la oscilación libre del péndulo. Igualmente, en el caso del bloque sobre la mesa se cumple <math display=\"inline\"><mrow><msubsup><mi>ω</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><mi>k</mi><mi>/</mi><mn>2</mn><mi>m</mi></mrow></math>, y así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>k</mi><mi>m</mi></mfrac><mo>=</mo><mn>2</mn><msubsup><mi>ω</mi><mi>b</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><msubsup><mi>τ</mi><mi>b</mi><mn>2</mn></msubsup></mfrac><mo>=</mo><mn>800</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><msub><mi>τ</mi><mi>b</mi></msub><mo>=</mo><mn>0.1</mn></mrow></math> s el periodo de la oscilación libre del bloque."
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mi>x</mi></math> la coordenada que indica la posición del bloque sobre la mesa horizontal (para simplificar, supondremos que la longitud propia del muelle es nula; es decir, que en la posición de equilibrio la cara izquierda del bloque coincide con el eje vertical de coordenadas, y por eso <math display=\"inline\"><mi>x</mi></math> es el alargamiento neto del muelle). Además, la longitud del bloque no influye en el desarrollo del problema. Por otro lado, la inclinación del péndulo respecto de la vertical se mide con el ángulo <math display=\"inline\"><mi>θ</mi></math> (tanto <math display=\"inline\"><mi>x</mi></math> como <math display=\"inline\"><mi>θ</mi></math> cumplen la condición de ser muy pequeños, para tratar los movimientos que hacen el bloque y el péndulo como pequeñas oscilaciones). Las coordenadas del bloque y de la masa del péndulo nos permiten calcular la energía cinética y la potencial, como vemos a continuación:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/1e7a2f709e7e2c1e.svg\" alt=\"{x_b = x\\ y_b = 0 quad {dot(x)_b = dot(x)\\ dot(y)_b = 0 #h(2em) {x_p = x + l sin theta\\ y_p = - l cos theta quad {dot(x)_p = dot(x) + l dot(theta) cos theta\\ dot(y)_p = l dot(theta) sin theta\" style=\"width:16.567em;height:9.903em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y de aquí:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/1104f58eb265e2b0.svg\" alt=\"T = 1 / 2 m [3 dot(x)^2 + l^2 dot(theta)^2 + 2 l dot(x) dot(theta) cos theta] #h(2em) V = 1 / 2 k x^2 - m g l cos theta\" style=\"width:29.907em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Haciendo las aproximaciones correspondientes al caso de pequeñas oscilaciones, y despreciando una constante aditiva en el término de la energía potencial, los valores de las energías cinética y potencial y sus matrices asociadas serán estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/e2533fd062401d39.svg\" alt=\"T = 1 / 2 m [3 dot(x)^2 + l^2 dot(theta)^2 + 2 l dot(x) dot(theta)] #h(2em) V = 1 / 2 k x^2 + 1 / 2 m g l theta^2\" style=\"width:26.814em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/bcd33fece144d0c7.svg\" alt=\"upright(bold(T)) = m mat(delim: &quot;[&quot;, 3, l; l, l^2) #h(2em) upright(bold(V)) = mat(delim: &quot;[&quot;, k, 0; 0, m g l)\" style=\"width:16.181em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La ecuación secular para calcular las pulsaciones propias nos lleva a esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mn>3</mn><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>2</mn></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mi>m</mi><mi>l</mi><msup><mi>ω</mi><mn>4</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>m</mi><mi>g</mi><mo>+</mo><mi>k</mi><mi>l</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mi>g</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si ahora tenemos en cuenta las relaciones obtenidas al principio de la resolución del problema y dividimos término a término:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>k</mi><mi>l</mi></mrow><mrow><mi>m</mi><mi>g</mi></mrow></mfrac><mo>=</mo><mn>200</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "llevado a la ecuación secular, lo que nos permite simplificarla, y así obtenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>203</mn><mo>±</mo><mn>199.02</mn></mrow><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">{</mo><msubsup><mi>ω</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow><mn>2</mn></msubsup><mo>≃</mo><mn>402.02</mn><msup><mi>π</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msubsup><mi>ω</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow><mn>2</mn></msubsup><mo>≃</mo><mn>3.9799</mn><msup><mi>π</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">{</mo><msub><mi>τ</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow></msub><mo>≃</mo><mn>0.09975</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mi>τ</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow></msub><mo>≃</mo><mn>1.00252</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "donde ya hemos usado la relación obtenida arriba: <math display=\"inline\"><mrow><mi>g</mi><mi>/</mi><mi>l</mi><mo>=</mo><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math>. Como se ve, los periodos de los dos modos normales están muy cerca de los de las oscilaciones desacopladas individuales. Calculemos la relación de amplitudes de los modos normales usando el formalismo general. Sabemos que para cada <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>r</mi></msub></mrow></math> debe cumplirse, si <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub></math> es el vector asociado al modo normal indicado, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑽</mi><mo>−</mo><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mi mathvariant=\"bold-italic\">𝑻</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>k</mi><mo>−</mo><mn>3</mn><mi>m</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>m</mi><mi>l</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>m</mi><mi>g</mi><mi>l</mi><mo>−</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es evidente que la relación entre las amplitudes podrá escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mi>k</mi><mo>−</mo><mn>3</mn><mi>m</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mrow><mrow><mi>m</mi><mi>l</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mi>g</mi><mi>/</mi><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>800</mn><mi>m</mi><msup><mi>π</mi><mn>2</mn></msup></mrow></math>, y así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>800</mn><msup><mi>π</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>g</mi><msubsup><mi>ω</mi><mi>r</mi><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo los valores de <math display=\"inline\"><msub><mi>ω</mi><mi>r</mi></msub></math> para los valores <math display=\"inline\"><msub><mi>ω</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow></msub></math>, llegamos a:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/7537f38d4c5b00a7.svg\" alt=\"(a_2 / a_1)_(r p d) = - 4.07 med upright(&quot;m&quot;)^(- 1) #h(2em) (a_2 / a_1)_(l n t) = 798 med upright(&quot;m&quot;)^(- 1)\" style=\"width:23.996em;height:3.369em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Si consideramos que la amplitud <math display=\"inline\"><msub><mi>a</mi><mrow><mn>1</mn><mi>r</mi></mrow></msub></math> corresponde a la elongación lineal del muelle y la amplitud <math display=\"inline\"><msub><mi>a</mi><mrow><mn>2</mn><mi>r</mi></mrow></msub></math> a la elongación angular del péndulo, se ve que en el modo lento (es decir, para el valor <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><msub><mi>ω</mi><mrow><mi>l</mi><mi>n</mi><mi>t</mi></mrow></msub></mrow></math>) la amplitud angular del péndulo en radianes es mucho mayor que la del bloque, y además oscilan en fase, mientras que en el modo rápido, para el valor <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>r</mi></msub><mo>=</mo><msub><mi>ω</mi><mrow><mi>r</mi><mi>p</mi><mi>d</mi></mrow></msub></mrow></math>, la amplitud angular del péndulo en radianes es del orden de cuatro veces la del bloque y además oscilan en oposición de fase (cociente negativo)."
    },
    {
     "mota": "testua",
     "html": "Si la masa del péndulo oscila en el modo lento con una amplitud de 100 mm, primero tenemos que expresar en radianes su amplitud angular de oscilación para conocerla. Para ello tenemos que usar la longitud del péndulo que se obtiene del valor del periodo dado como dato:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>τ</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mi>π</mi><msqrt><mfrac><mi>l</mi><mi>g</mi></mfrac></msqrt><mo>=</mo><mn>1</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">s</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>l</mi><mo>=</mo><mfrac><mn>9.8</mn><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0.248</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, la amplitud angular de oscilación del péndulo es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>0.1</mn><mn>0.248</mn></mfrac><mo>=</mo><mn>0.403</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">rad</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la amplitud de oscilación correspondiente del bloque en este modo lento:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>0.403</mn><mrow><mn>798</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">m</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>5.05</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": ""
    },
    {
     "mota": "testua",
     "html": "<strong>99Feb03.</strong>"
    },
    {
     "mota": "testua",
     "html": "Una barra uniforme de masa <math display=\"inline\"><mi>m</mi></math> y longitud <math display=\"inline\"><mi>L</mi></math> está sometida a diferentes fuerzas elásticas. Por un lado, su extremo izquierdo está <em>soldado</em> a un muelle espiral de constante <math display=\"inline\"><mi>K</mi></math>, y por otro, su extremo derecho está unido mediante una articulación a dos muelles lineales de la misma constante <math display=\"inline\"><mi>k</mi></math> y la misma longitud natural <math display=\"inline\"><mi>l</mi></math> (que coincide con la longitud de cada muelle en equilibrio). Ligeramente apartada de su posición de equilibrio, halla la pulsación de las pequeñas oscilaciones que realiza la barra, usando al menos dos métodos distintos. [<em>Nota:</em> Considera que no actúa la gravedad]."
    }
   ]
  },
  {
   "id": "a44",
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
     "html": "Supondremos que al principio la barra está en posición horizontal, con todos los muelles en su longitud natural. Además, la longitud de la barra es lo bastante grande para suponer que, para pequeñas oscilaciones, el desplazamiento del extremo unido a los dos muelles lineales es, según la figura, completamente vertical. Recordaremos asimismo que, igual que en los muelles lineales la deformación se mide en unidades de longitud y, por tanto, la constante <math display=\"inline\"><mi>k</mi></math> tiene dimensiones de fuerza partido por longitud (N/m), en el muelle espiral la deformación se mide en radianes y la constante <math display=\"inline\"><mi>K</mi></math> tiene dimensiones de energía (J)."
    },
    {
     "mota": "testua",
     "html": "[Figura: a la izquierda, una pared vertical (sombreada) de la que parte un muelle espiral de constante <math display=\"inline\"><mi>K</mi></math>; de él parte, horizontalmente, la barra uniforme etiquetada <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>L</mi></mrow></math>. Su extremo derecho está articulado con dos muelles lineales de constante <math display=\"inline\"><mi>k</mi></math> —uno hacia arriba, anclado al techo (sombreado), y el otro hacia abajo, anclado al suelo (sombreado)—. El ángulo de giro de la barra respecto de la horizontal se denomina <math display=\"inline\"><mi>θ</mi></math> en ese extremo derecho.]"
    },
    {
     "mota": "testua",
     "html": "<em>Método vectorial.</em>"
    },
    {
     "mota": "testua",
     "html": "Según la teoría, el momento de las fuerzas (en este caso son fuerzas o momentos recuperadores) es la derivada temporal del momento angular. Como todos los momentos son perpendiculares al plano del papel, trabajaremos con escalares en lugar de vectores. Además, el momento de inercia de la barra respecto del punto fijo (la soldadura con el muelle espiral) es constante, y así la ecuación de movimiento se escribirá así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>J</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>I</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>−</mi><mi>K</mi><mi>θ</mi><mo>−</mo><mn>2</mn><mo>⋅</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>L</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El factor 2 se debe a la presencia de los dos muelles que empujan en el mismo sentido, siendo la fuerza recuperadora que da cada uno de valor <math display=\"inline\"><mrow><mi>k</mi><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y su momento respecto del punto fijo, por tanto, <math display=\"inline\"><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>L</mi><mo>=</mo><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mi>θ</mi></mrow></math>. El momento de inercia vale <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math>. Sustituyendo este valor, la ecuación diferencial del movimiento corresponde formalmente a un oscilador armónico:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La pulsación asociada, por tanto, será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">rad/s</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Método de la energía.</em>"
    },
    {
     "mota": "testua",
     "html": "La energía mecánica se conserva. Por tanto, su derivada temporal será nula. La energía mecánica procede de la energía cinética de rotación de la barra en torno al punto fijo y de la energía potencial almacenada en los muelles:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>K</mi><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>E</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir, nos reproduce la ecuación de la sección anterior:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Método de Lagrange.</em>"
    },
    {
     "mota": "testua",
     "html": "La función lagrangiana <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> se escribirá así (hemos omitido la escritura de todos los pasos):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>θ</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "así, la ecuación de la única variable <math display=\"inline\"><mi>θ</mi></math> será de nuevo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">{</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>θ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>K</mi><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"0.167em\"></mspace><mi>θ</mi><mo>=</mo><mn>0</mn></mtd></mtr></mtable></math>"
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un vehículo de <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>000</mn></mrow></math> kg de masa circula por una carretera ondulada de perfil sinusoidal, como se indica en la figura. Si la constante elástica de la suspensión es <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> kg·s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> y los amortiguadores le dan un coeficiente de amortiguamiento <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>3.53</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, calcula: a) la velocidad <math display=\"inline\"><mi>V</mi></math> para la que la amplitud de las oscilaciones del vehículo será máxima, b) la amplitud de las oscilaciones cuando la velocidad del vehículo es 50 km·h<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. c) Responde a las mismas preguntas para un vehículo idéntico pero sin amortiguadores y compara los resultados. [<em>Nota</em>. Hágase la hipótesis simplificadora (y discutible) de que el amortiguamiento es proporcional a la velocidad <em>absoluta</em> de la masa <math display=\"inline\"><mi>m</mi></math> respecto del referencial inercial (y no respecto del que tiene el origen en el punto de anclaje, que está acelerado)]."
    },
    {
     "mota": "testua",
     "html": "<strong>Figura del enunciado</strong>"
    },
    {
     "mota": "testua",
     "html": "(dos dibujos): - Izquierda: perfil sinusoidal de la carretera. Amplitud de pico a valle acotada como <strong>10 cm</strong>; longitud de onda (periodo espacial) acotada como <strong>2.5 m</strong>. - Derecha: esquema del oscilador vertical. La masa <math display=\"inline\"><mi>m</mi></math> (representada como una barra horizontal) sobre un muelle. Ejes: <math display=\"inline\"><mi>x</mi></math> vertical (hacia arriba) y <math display=\"inline\"><mi>V</mi></math> horizontal. Acotaciones: <math display=\"inline\"><mi>x</mi></math> (desplazamiento de la masa respecto de su posición), <math display=\"inline\"><mrow><msub><mi>l</mi><mn>0</mn></msub><mo>−</mo><mi>d</mi></mrow></math> (hacia abajo desde el nivel de la masa cargada) y <math display=\"inline\"><mi>h</mi></math> (en el punto inferior de anclaje del muelle, que sigue la curva ondulada de la carretera)."
    }
   ]
  },
  {
   "id": "a46",
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
     "html": "En la figura de la izquierda se presenta el perfil ondulado de la carretera, que al moverse el vehículo con velocidad <math display=\"inline\"><mi>V</mi></math> actúa como una fuerza externa de tipo <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msub><mi>h</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>h</mi><mn>0</mn></msub><mo>=</mo><mn>0.05</mn></mrow></math> m y <math display=\"inline\"><mi>ω</mi></math> dependen de la velocidad <math display=\"inline\"><mi>V</mi></math> del vehículo. Este perfil ondulado es el que sigue el anclaje del amortiguador, como se indica en la figura de la derecha, transmitiendo así al resto del vehículo la irregularidad sinusoidal descrita."
    },
    {
     "mota": "testua",
     "html": "Nos interesa fundamentalmente el movimiento vertical. Así, usamos un referencial que se mueve con la misma velocidad horizontal <math display=\"inline\"><mi>V</mi></math> del vehículo, con el eje vertical como único eje útil, al que llamaremos <math display=\"inline\"><mi>x</mi></math>, y también a la deformación del muelle con el vehículo cargado respecto de su longitud. Suponiendo que el vehículo está en reposo sobre una superficie horizontal, la contracción inicial del muelle respecto de su longitud natural es <math display=\"inline\"><msub><mi>l</mi><mn>0</mn></msub></math> <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>g</mi></mrow><mi>k</mi></mfrac></mrow></math>, como se deduce fácilmente (en realidad, esta contracción corresponde a un vehículo con un solo amortiguador <math display=\"inline\"><mi>d</mi></math>; en el caso de un vehículo con dos o cuatro amortiguadores, que es lo más habitual, la deformación inicial será la mitad o la cuarta parte de lo escrito. En cualquier caso, esto no influye en el desarrollo posterior del problema, y por eso lo dejamos así). La longitud <math display=\"inline\"><mi>l</mi></math> del muelle y su deformación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math> respecto de su longitud natural en un instante cualquiera (la indicada en la citada figura), por tanto, serán:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/141a6030292c6731.svg\" alt=\"l = l_0 - d - h + x #h(2em) #h(2em) Delta l = l_0 - l = d + h_0 cos omega t - x\" style=\"width:29.238em;height:1.342em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La ecuación diferencial del movimiento según el eje <math display=\"inline\"><mi>x</mi></math> será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mi>k</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>−</mo><mi>b</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>−</mo><mi>m</mi><mi>g</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mi>β</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mfrac><mi>k</mi><mi>m</mi></mfrac><mi>x</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msub><mi>h</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mfrac><mi>b</mi><mi>m</mi></mfrac><mo>=</mo><mn>2</mn><mi>β</mi></mrow></math> y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msub><mi>h</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac></mrow></math> son. [El primer término del segundo miembro, <math display=\"inline\"><mrow><mi>k</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>l</mi></mrow></math>, nos da el sentido real de la fuerza elástica, pues si <math display=\"inline\"><mrow><mi>l</mi><mo>&lt;</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), el muelle está contraído y tiende a dilatarse, empujando la masa <math display=\"inline\"><mi>m</mi></math> hacia arriba, es decir, hacia <math display=\"inline\"><mi>x</mi></math> positivas. Cuando <math display=\"inline\"><mrow><mi>l</mi><mo>&gt;</mo><msub><mi>l</mi><mn>0</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>l</mi><mo>&lt;</mo><mn>0</mn></mrow></math>), funciona igualmente bien]. A la ecuación diferencial del movimiento podríamos haber llegado de manera más directa considerando simplemente que se trata de un sistema oscilador amortiguado forzado, en el que la fuerza impulsora es de tipo sinusoidal, y por eso le corresponde una ecuación de movimiento general como esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>b</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>k</mi><mi>x</mi><mo>=</mo><msub><mi>f</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La pulsación de las oscilaciones libres <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> y la amplitud de aceleración <math display=\"inline\"><mi>A</mi></math>, en función de los datos, serán estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow><msup><mn>10</mn><mn>3</mn></msup></mfrac></msqrt><mo>=</mo><mn>15.81</mn><mspace width=\"0.222em\"></mspace><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mi>k</mi><msub><mi>h</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo>⋅</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow><msup><mn>10</mn><mn>3</mn></msup></mfrac><mo>=</mo><mn>12.5</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>⋅</mo><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>a.</strong>"
    },
    {
     "mota": "testua",
     "html": "Si la velocidad del vehículo es <math display=\"inline\"><mi>V</mi></math>, el tiempo que necesita para recorrer una oscilación completa de la carretera, <math display=\"inline\"><mi>λ</mi></math>, será igual al periodo <math display=\"inline\"><mi>τ</mi></math> de la fuerza impulsora, y este, a su vez, es igual a <math display=\"inline\"><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></math>. Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mi>λ</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>ω</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La amplitud de las oscilaciones será máxima para la pulsación de resonancia <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>15</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, según el valor <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math> que acabamos de obtener y el dato <math display=\"inline\"><mi>β</mi></math> dado en el texto. Por tanto, la velocidad del vehículo correspondiente a la pulsación de resonancia será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mi>R</mi></msub><mi>λ</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>15</mn><mo>⋅</mo><mn>2.5</mn></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>5.97</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>⋅</mo><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>≃</mo><mn>21.5</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">km/h</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La amplitud máxima de resonancia se obtiene simplemente sustituyendo estos resultados en la expresión obtenida en la teoría:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>A</mi><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>ω</mi><mi>R</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msubsup><mi>ω</mi><mi>R</mi><mn>2</mn></msubsup><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0.115</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>=</mo><mn>11.5</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">cm</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>b.</strong>"
    },
    {
     "mota": "testua",
     "html": "Cuando la velocidad del vehículo es <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>50</mn></mrow></math> km/h <math display=\"inline\"><mrow><mo>=</mo><mn>13.89</mn></mrow></math> m·s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, la pulsación correspondiente de la fuerza impulsora será: <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>V</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>34.91</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. La amplitud de las oscilaciones, por tanto, será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>A</mi><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>4</mn><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mn>0.0125</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>=</mo><mn>1.25</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">cm</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>c.</strong>"
    },
    {
     "mota": "testua",
     "html": "Si no hay amortiguamiento, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mn>15.81</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. La velocidad para la resonancia de amplitud será ahora:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>R</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>ω</mi><mi>R</mi></msub><mi>λ</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mn>6.29</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>⋅</mo><msup><mi mathvariant=\"normal\">s</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>≃</mo><mn>22.65</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">km/h</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "velocidad a la que la amplitud máxima se hará infinita, pues el denominador de <math display=\"inline\"><msub><mi>D</mi><mi mathvariant=\"normal\">max</mi></msub></math> se anula en la resonancia sin amortiguamiento: <math display=\"inline\"><mrow><msub><mi>D</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>∞</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Para el valor <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>50</mn></mrow></math> km/h <math display=\"inline\"><mrow><mo>→</mo><mi>ω</mi><mo>=</mo><mn>34.91</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, la amplitud de oscilación será:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mfrac><mo>=</mo><mn>0.0129</mn><mspace width=\"0.222em\"></mspace><mi mathvariant=\"normal\">m</mi><mo>=</mo><mn>1.29</mn><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">cm</mtext></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la figura siguiente se muestran las gráficas de la amplitud de oscilación en la resonancia para los casos de amortiguamiento nulo y el indicado en el texto del problema."
    },
    {
     "mota": "testua",
     "html": "<strong>Figura de la resolución</strong>"
    },
    {
     "mota": "testua",
     "html": "(gráfico de resonancia): eje <math display=\"inline\"><mi>D</mi></math> (cm) en las ordenadas y <math display=\"inline\"><mi>ω</mi></math> (s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>) en las abscisas. Se dibujan dos curvas de resonancia: - <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>: diverge a <math display=\"inline\"><mi>∞</mi></math> en el valor <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>0</mn></msub><mo>=</mo><mn>15.81</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (asíntota vertical de puntos). - <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>3.53</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>: pico finito de valor <math display=\"inline\"><mn>11.5</mn></math> cm situado en el valor <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>R</mi></msub><mo>=</mo><mn>15</mn></mrow></math> s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
    },
    {
     "mota": "testua",
     "html": "Marcas del eje <math display=\"inline\"><mi>D</mi></math>: <math display=\"inline\"><mn>11.5</mn></math>, <math display=\"inline\"><mn>5.0</mn></math>, <math display=\"inline\"><mn>1.29</mn></math>, <math display=\"inline\"><mn>1.25</mn></math>. Marcas del eje <math display=\"inline\"><mi>ω</mi></math>: <math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mn>15</mn></math>, <math display=\"inline\"><mrow><mn>15.81</mn><mo>=</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mn>34.91</mn></math>."
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Enunciado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Considera un sistema oscilante formado por dos péndulos simples de longitud <math display=\"inline\"><mi>l</mi></math> y masa <math display=\"inline\"><mi>m</mi></math>, que pueden oscilar en un plano vertical. Las dos masas están unidas mediante un muelle sin masa, de constante <math display=\"inline\"><mi>k</mi></math> y con una longitud propia igual a la distancia entre los puntos de suspensión de los dos péndulos. Halla las pulsaciones propias, los modos normales y las condiciones iniciales que activan cada modo por separado."
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Solución (resuelta y comentada por el autor)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La teoría general de las pequeñas oscilaciones nos exige escribir la energía potencial y la cinética en forma cuadrática de las coordenadas y velocidades generalizadas. Es decir, que al hacer las aproximaciones correspondientes a pequeñas oscilaciones, las dos funciones sean así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/a0c3a8875a77491d.svg\" alt=\"T = 1 / 2 T_(i j) thin dot(q)_i dot(q)_j \\, #h(2em) V = 1 / 2 V_(i j) thin q_i q_j .\" style=\"width:16.535em;height:2.560em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "[Figura: dos péndulos de longitud L colgados de dos puntos O_1 y O_2, separados una distancia d, de un techo horizontal (sombreado). El péndulo izquierdo forma el ángulo theta con la vertical y el derecho el ángulo phi (L dibujada en cada varilla). Las dos masas m de los extremos están unidas por un muelle (zigzag) etiquetado &quot;k, d&quot;. El eje z es vertical hacia arriba en O_1.]"
    },
    {
     "mota": "testua",
     "html": "En la figura se muestra el estado de los dos péndulos en un instante cualquiera. La longitud del muelle de acoplamiento, para pequeñas oscilaciones, en la aproximación usada, puede tomarse igual a la diferencia entre los desplazamientos horizontales de las dos masas, pues, en realidad, esta es igual a la hipotenusa del triángulo rectángulo dibujado con trazos, que puede obtenerse como el cociente entre el cateto horizontal (la diferencia entre los desplazamientos mencionados antes) y el coseno del ángulo adyacente, y dicho ángulo es tan pequeño que en su desarrollo solo necesitaríamos su primer término, es decir, la unidad, como se comprueba sin dificultad. Por tanto, partiremos de esta aproximación anterior."
    },
    {
     "mota": "testua",
     "html": "Calculemos la energía cinética y la potencial del sistema, siendo las coordenadas generalizadas las variables angulares de la figura: <math display=\"inline\"><mrow><msub><mi>q</mi><mn>1</mn></msub><mo>=</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mn>2</mn></msub><mo>=</mo><mi>φ</mi></mrow></math>. Más adelante, con el subíndice 0 indicaremos los valores de las variables en el instante inicial. Por tanto, escribiremos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/fa388f2484b7c815.svg\" alt=\"x_1 = L sin theta #h(2em) #h(2em) x_2 = d + L sin phi\" style=\"width:18.862em;height:1.313em\" loading=\"lazy\"> <img class=\"formula formula-d\" src=\"../media/formulak/ede2d58f016108d9.svg\" alt=\"z_1 = - L cos theta #h(2em) #h(2em) z_2 = - L cos phi\" style=\"width:18.625em;height:1.313em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "de las que se deducen inmediatamente las expresiones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>m</mi><mi>g</mi><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para pequeñas oscilaciones y usando la aproximación adecuada para las funciones seno y coseno, estas expresiones se reducen a la forma conocida:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mi>V</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>θ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mi>L</mi><mo>+</mo><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>φ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>k</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>θ</mi><mi>φ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde se ha ignorado una constante aditiva en el término de la energía potencial, que carece de importancia en la resolución del problema. Los tensores de energía cinética y potencial serán, por tanto, estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/bb84e00cd65cdafd.svg\" alt=\"upright(bold(T)) = m L^2 mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) #h(2em) upright(bold(V)) = L mat(delim: &quot;[&quot;, m g + k L, - k L; - k L, m g + k L)\" style=\"width:26.589em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "donde se ve un acoplamiento en las energías potenciales pero no en las cinéticas."
    },
    {
     "mota": "testua",
     "html": "<strong>• Pulsaciones propias.</strong>"
    },
    {
     "mota": "testua",
     "html": "Recurriendo al método abreviado de las nuevas matrices <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>, según el cual las pulsaciones propias pueden obtenerse de la resolución de la ecuación de <math display=\"inline\"><mi>λ</mi></math> dada por el determinante secular, siendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi mathvariant=\"bold-italic\">𝑽</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒕</mi><mo>=</mo><mi>α</mi><mi mathvariant=\"bold-italic\">𝑻</mi></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>/</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. Las constantes <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> son necesarias para simplificar al máximo los dos tensores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>. En nuestro caso, podemos elegirlas así: <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>L</mi></mrow></math>, y así <math display=\"inline\"><mrow><mi>β</mi><mi>/</mi><mi>α</mi><mo>=</mo><mi>m</mi><mi>L</mi></mrow></math>. De aquí en adelante, por tanto, trabajaremos con estos tensores:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/c476101456291887.svg\" alt=\"upright(bold(t)) = mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(2em) #h(2em) upright(bold(v)) = mat(delim: &quot;[&quot;, m g + k L, - k L; - k L, m g + k L)\" style=\"width:22.757em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, la ecuación característica para el cálculo abreviado de las pulsaciones propias se escribirá así:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ff3d836e5904affb.svg\" alt=\"mat(delim: &quot;|&quot;, m g + k L - lambda, - k L; - k L, m g + k L - lambda) = 0 #h(0em) arrow.r #h(0em) lambda^2 - 2 \\( m g + k L \\) lambda + m g \\( m g + 2 k L \\) = 0\" style=\"width:38.100em;height:3.110em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "ecuación cuyas raíces asociadas son estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>1</mn></msub><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>L</mi></mfrac></msqrt></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi><mi>g</mi><mo>+</mo><mn>2</mn><mi>k</mi><mi>L</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ω</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mfrac><mi>g</mi><mi>L</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>k</mi></mrow><mi>m</mi></mfrac></mrow></msqrt></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>• Vectores modales.</strong>"
    },
    {
     "mota": "testua",
     "html": "Por la sencillez de las matrices <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>, usaremos de nuevo el método abreviado para calcular los vectores modales (como dice la teoría, los autovectores correspondientes a los tensores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑻</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑽</mi></math>, para autovalores <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>r</mi></msub></mrow></math> distintos, coinciden con los correspondientes a los autovalores de los tensores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒕</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> para los autovalores <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>r</mi></msub></mrow></math> que acabamos de obtener). Usando la forma matricial del sistema de ecuaciones, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>−</mo><msub><mi>λ</mi><mi>r</mi></msub><mi mathvariant=\"bold-italic\">𝒕</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/daa88aee2e7858ab.svg\" alt=\"bullet #h(0em) lambda_1 = m g #h(2em) mat(delim: &quot;[&quot;, k L, - k L; - k L, k L) mat(delim: &quot;[&quot;, a_11; a_21) = mat(delim: &quot;[&quot;, 0; 0) #h(0em) arrow.r #h(0em) a_21 = a_11\" style=\"width:25.940em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ab4bbfc040d6c08d.svg\" alt=\"bullet #h(0em) lambda_2 = m g + 2 k L #h(2em) mat(delim: &quot;[&quot;, - k L, - k L; - k L, - k L) mat(delim: &quot;[&quot;, a_12; a_22) = mat(delim: &quot;[&quot;, 0; 0) #h(0em) arrow.r #h(0em) a_22 = - a_12\" style=\"width:30.244em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y de la condición de ortogonalidad, escrita ahora en forma matricial: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒕</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>α</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑰</mi></mrow></math>, siendo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> el tensor construido a partir de los vectores columna:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/2932693d81e57d9d.svg\" alt=\"mat(delim: &quot;[&quot;, a_11, a_11; a_12, - a_12) mat(delim: &quot;[&quot;, 1, 0; 0, 1) mat(delim: &quot;[&quot;, a_11, a_12; a_11, - a_12) = frac(1, m L^2) mat(delim: &quot;[&quot;, 1, 0; 0, 1) #h(0em) arrow.r #h(0em) a_11 = 1 \\/ sqrt(2 m) thin L\\ a_12 = 1 \\/ sqrt(2 m) thin L\" style=\"width:31.042em;height:5.159em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "Por tanto, los autovectores correspondientes a las pulsaciones propias <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ω</mi><mn>2</mn></msub></math>, escritos como vectores columna, son estos:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/1ce8ea617da25216.svg\" alt=\"upright(bold(a))_1 = frac(1, sqrt(2 m) thin L) mat(delim: &quot;[&quot;, 1; 1) #h(2em) #h(2em) upright(bold(a))_2 = frac(1, sqrt(2 m) thin L) mat(delim: &quot;[&quot;, 1; - 1)\" style=\"width:22.328em;height:2.989em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y la matriz <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> construida con estos vectores modales, colocados por columnas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>• Modos normales.</strong>"
    },
    {
     "mota": "testua",
     "html": "Tendremos en cuenta que el sistema se suelta desde el reposo. En estas situaciones, la expresión de los modos normales se escribirá en forma matricial compacta así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>η</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>2</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒒</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y limitando nuestros cálculos a las amplitudes de esos modos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝑨</mi><mo accent=\"true\">̃</mo></mover><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝑻</mi><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒒</mi><mn>0</mn></msub></math> es el vector columna que contiene las coordenadas generalizadas iniciales <math display=\"inline\"><msub><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>q</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mn>0</mn></msub></math>. En nuestro caso, <math display=\"inline\"><mrow><msub><mi>q</mi><mn>10</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mn>20</mn></msub><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math>, y así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>10</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>η</mi><mn>20</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>φ</mi><mn>0</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, podemos escribir así los modos normales de vibración:"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/0a6806402ed0a66d.svg\" alt=\"eta_1 = frac(sqrt(2 m) thin L, 2) \\( theta_0 + phi_0 \\) cos omega_1 t #h(2em) #h(2em) eta_2 = frac(sqrt(2 m) thin L, 2) \\( theta_0 - phi_0 \\) cos omega_2 t\" style=\"width:34.216em;height:2.859em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "y las coordenadas generalizadas, a partir de las coordenadas normales, se escribirán en forma matricial así: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒒</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mspace width=\"0.167em\"></mspace><mi>η</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>θ</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>φ</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow></mfrac><mo>⋅</mo><mfrac><mrow><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>L</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>1</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mn>1</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Realizando las operaciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>θ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De la observación de los modos normales de oscilación, se deduce fácilmente cuáles deben ser las condiciones iniciales que me llevarán a activar cada uno por separado:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "El modo 1 solo se activará si: <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>",
      "El modo 2 solo se activará si: <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><msub><mi>φ</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><msub><mi>θ</mi><mn>0</mn></msub></mrow></math>"
     ]
    }
   ]
  }
 ]
};
