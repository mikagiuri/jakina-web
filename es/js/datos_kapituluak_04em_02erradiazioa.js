/* JAKINA · kapitulua «B08.2 - Griffiths 9-12 eta M24 Optika» (04em_02erradiazioa), desde edicion2/kapituluak/04em_02erradiazioa/04em_02erradiazioa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["04em_02erradiazioa"] = {
 "gakoa": "04em_02erradiazioa",
 "titulua": "JAKINA - B08.2 - Griffiths 9-12 y M24 Óptica",
 "azala": "B08.2 - Griffiths 9-12 y M24 Óptica",
 "azpititulua": "Etapa III - L2",
 "iturburua": "kapituluak/04em_02erradiazioa/04em_02erradiazioa.typ",
 "sarrera": [],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Ondas electromagnéticas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las ecuaciones de Maxwell, desarrolladas y unificadas en los capítulos 7 y 8, tienen una solución que ni Coulomb, ni Ampère, ni Faraday habían previsto por separado: ondas que se alimentan a sí mismas, que no necesitan ninguna carga ni corriente para propagarse; entre ellas, la propia luz. Este capítulo desarrolla esa solución, desde la ecuación de ondas en el vacío hasta la propagación en la materia y la absorción en los conductores."
    },
    {
     "mota": "testua",
     "html": "El recorrido se organiza en cinco apartados. Primero, se precisa el concepto de onda en una sola dimensión —una cuerda tensa es el modelo mecánico natural— y se fija el vocabulario de la onda sinusoidal. A continuación, se deducen de las ecuaciones de Maxwell las ondas electromagnéticas en el vacío, con su estructura, su energía y su momento. En tercer lugar, se estudia cómo se propagan las ondas en la materia, así como la reflexión y la transmisión en las interfases, tanto en incidencia normal como oblicua (ecuaciones de Fresnel). En cuarto lugar, se trabajan la absorción en los conductores y la dispersión en los medios dieléctricos. Por último, el comportamiento especial de las ondas confinadas en un tubo conductor: las guías de ondas y sus modos."
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Ondas en una dimensión",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La ecuación de ondas"
    },
    {
     "mota": "testua",
     "html": "¿Qué es una onda? Definir el concepto con precisión es difícil, pero un buen punto de partida es este: una onda es <strong>una perturbación que se propaga en un medio continuo con forma fija y velocidad constante</strong>. Imagina que sacudes una cuerda tensa: la cresta generada viaja a lo largo de la cuerda, manteniendo su aspecto, con velocidad <math display=\"inline\"><mi>v</mi></math>. Si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> la forma de la cuerda es <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en un instante posterior <math display=\"inline\"><mi>t</mi></math> encontraremos la misma forma, pero desplazada una distancia <math display=\"inline\"><mrow><mi>v</mi><mi>t</mi></mrow></math> hacia la derecha."
    },
    {
     "mota": "testua",
     "html": "Una función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> describe una onda que viaja sin distorsión si depende de <math display=\"inline\"><mi>z</mi></math> y de <math display=\"inline\"><mi>t</mi></math> únicamente a través de la combinación <math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math> (o a través de <math display=\"inline\"><mrow><mi>z</mi><mo>+</mo><mi>v</mi><mi>t</mi></mrow></math>, para el sentido contrario). Tales funciones satisfacen la ecuación de ondas clásica:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Ecuación de ondas (unidimensional)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "¿De dónde viene esta ecuación? En una cuerda tensa, el movimiento depende de la tensión <math display=\"inline\"><mi>T</mi></math> y de la densidad lineal de masa <math display=\"inline\"><mi>μ</mi></math>. La fuerza transversal neta sobre el trozo de cuerda comprendido entre <math display=\"inline\"><mi>z</mi></math> y <math display=\"inline\"><mrow><mi>z</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math>, para pendientes pequeñas, puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>F</mi><mo>≈</mo><mi>T</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la segunda ley de Newton, siendo <math display=\"inline\"><mrow><mi>μ</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi></mrow></math> la masa del trozo, establece <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>F</mi><mo>=</mo><mi>μ</mi><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>. Igualar ambas expresiones da directamente la ecuación de ondas, con velocidad de propagación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>μ</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La estructura de la ecuación es fundamental: como <math display=\"inline\"><msup><mi>v</mi><mn>2</mn></msup></math> aparece, el tipo de solución estudiado se duplica; además de <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, también <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es solución (la onda que se propaga hacia la izquierda). Más aún, como la ecuación de ondas es <strong>lineal</strong>, la solución general es la suma de ambas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta linealidad garantiza el principio de superposición, que será la clave de todo el capítulo: cualquier onda, por compleja que sea, puede construirse como suma de soluciones más sencillas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas sinusoidales"
    },
    {
     "mota": "testua",
     "html": "Las soluciones más importantes son las ondas sinusoidales (monocromáticas):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Onda sinusoidal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde la longitud de onda es <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math>, el periodo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>ω</mi></mrow></math> y la velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay que fijar el vocabulario. <math display=\"inline\"><mi>A</mi></math> es la <strong>amplitud</strong> (el desplazamiento máximo de la oscilación, siempre positiva). El argumento del coseno es la <strong>fase</strong>, y <math display=\"inline\"><mi>δ</mi></math> es la <strong>constante de fase</strong> (suele tomarse en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>δ</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math>); <math display=\"inline\"><mrow><mi>δ</mi><mi>/</mi><mi>k</mi></mrow></math> indica cuánto &quot;retrasa&quot; la fase la cresta principal de la onda respecto del origen. <math display=\"inline\"><mi>k</mi></math> es el <strong>número de onda</strong>, ligado a la longitud de onda, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>λ</mi></mrow></math>: cuando <math display=\"inline\"><mi>z</mi></math> avanza <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math>, el coseno completa un ciclo entero. En un punto fijo, la cuerda completa el ciclo entero en el periodo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>ω</mi></mrow></math>, y la <strong>frecuencia</strong> es <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>T</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>λ</mi></mrow></math>. <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>ν</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math> es la <strong>frecuencia angular</strong>, la más cómoda para los cálculos."
    },
    {
     "mota": "testua",
     "html": "Una onda sinusoidal que viaja hacia la izquierda se escribiría <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: cambiar el signo de <math display=\"inline\"><mi>k</mi></math> cambia el sentido, dejando todo lo demás igual."
    },
    {
     "mota": "testua",
     "html": "La notación compleja simplifica mucho el trabajo con sinusoides. Gracias a la fórmula de Euler,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>θ</mi></mrow></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la onda sinusoidal puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> es la <strong>función de onda compleja</strong> y <math display=\"inline\"><mrow><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup></mrow></math> la <strong>amplitud compleja</strong>, que incorpora la constante de fase. La onda real es la parte real de <math display=\"inline\"><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover></math>. La ventaja es clara: las exponenciales se manejan mucho más fácilmente que los senos y los cosenos."
    },
    {
     "mota": "ezezaguna",
     "izena": "adibide-izenburua"
    },
    {
     "mota": "testua",
     "html": "Supongamos que queremos sumar dos ondas sinusoidales de la misma frecuencia y el mismo número de onda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo>=</mo><msub><mi>f</mi><mn>1</mn></msub><mo>+</mo><msub><mi>f</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si lo hiciéramos directamente con senos y cosenos, nos perderíamos entre identidades trigonométricas. Con la notación compleja, en cambio, es casi inmediato: como la suma lo es de partes reales,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Re</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub></mrow></math>. Como tienen la misma frecuencia y el mismo número de onda,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde las amplitudes complejas simplemente se suman:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>3</mn></msub><mo>=</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hau da, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mn>3</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mn>3</mn></msub></mrow></msup><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mn>1</mn></msub></mrow></msup><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mn>2</mn></msub></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La onda resultante conserva la misma frecuencia y la misma longitud de onda, con la forma <math display=\"inline\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>3</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y tanto la amplitud como la fase se obtienen directamente igualando las partes real e imaginaria:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mn>3</mn></msub><mo>=</mo><msqrt><mrow><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>A</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mn>2</mn><msub><mi>A</mi><mn>1</mn></msub><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>δ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>3</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub></mrow><mrow><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>δ</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los casos límite tienen sentido: cuando están en fase (<math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>δ</mi><mn>2</mn></msub></mrow></math>), <math display=\"inline\"><mrow><msub><mi>A</mi><mn>3</mn></msub><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub></mrow></math> (interferencia constructiva); en oposición de fase (<math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>−</mo><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi></mrow></math>), <math display=\"inline\"><mrow><msub><mi>A</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>A</mi><mn>1</mn></msub><mo>−</mo><msub><mi>A</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> (interferencia destructiva). La notación compleja convierte así todo el fenómeno de la interferencia en una simple suma de vectores."
    },
    {
     "mota": "testua",
     "html": "Aunque la onda sinusoidal sea una forma muy particular, el hecho fundamental es este: <strong>cualquier</strong> onda puede escribirse como combinación lineal de ondas sinusoidales,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>f</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"normal\">d</mi><mi>k</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como las ecuaciones de Maxwell son lineales, cualquier onda (de cualquier forma) puede construirse como superposición de ondas sinusoidales de distintas frecuencias: el teorema de Fourier, aplicado a la electrodinámica."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condiciones de contorno: reflexión y transmisión en una cuerda"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos supuesto una cuerda infinita. Pero ¿qué sucede cuando la onda llega a un extremo? Todo depende de cómo esté sujeta la cuerda. Supongamos que en <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> una primera cuerda (de velocidad <math display=\"inline\"><msub><mi>v</mi><mn>1</mn></msub></math>) se une a una segunda (<math display=\"inline\"><msub><mi>v</mi><mn>2</mn></msub></math>), con la misma tensión pero distintas densidades de masa. La <strong>onda incidente</strong>, que viene de la izquierda, genera una <strong>onda reflejada</strong> (que vuelve a la cuerda 1) y una <strong>onda transmitida</strong> (que avanza por la cuerda 2). Las tres oscilan con la misma frecuencia, pero los números de onda son distintos (<math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mi>/</mi><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><mn>2</mn></msub><mi>/</mi><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><msub><mi>v</mi><mn>2</mn></msub></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "En la unión deben cumplirse dos condiciones: que <math display=\"inline\"><mi>f</mi></math> sea continua (coincidencia en <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>), y —si el nudo no tiene masa— que <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>z</mi></mrow></math> también sea continua (de lo contrario habría una fuerza infinita en el nudo). Una vez impuestas las dos condiciones, las amplitudes de salida quedan en función de la de entrada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>R</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>I</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>T</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>I</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la segunda cuerda es más ligera (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&gt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>), las tres ondas están en fase. Si es más pesada (<math display=\"inline\"><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></math>), la onda reflejada está desfasada <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> —vuelve &quot;boca abajo&quot;—. Si la cuerda está fija en el extremo (segunda cuerda infinitamente pesada), <math display=\"inline\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>R</mi></msub><mo>=</mo><mi>−</mi><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>I</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi>T</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: todo se refleja (la onda reflejada vuelve invertida). Esta estructura se repetirá casi palabra por palabra en la incidencia normal de las ondas electromagnéticas, y por eso la hemos trabajado aquí de antemano."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Polarización"
    },
    {
     "mota": "testua",
     "html": "Las ondas generadas al sacudir una cuerda son <strong>transversales</strong>: el desplazamiento es perpendicular a la dirección de propagación. (Existen también ondas <strong>longitudinales</strong>, como el sonido en el aire, en las que el desplazamiento tiene la misma dirección que la propagación; las ondas electromagnéticas, en cambio, son siempre transversales.)"
    },
    {
     "mota": "testua",
     "html": "Como hay dos direcciones perpendiculares a la línea de propagación, las ondas transversales pueden darse en dos <strong>estados de polarización</strong> independientes. Puedes sacudir la cuerda verticalmente (&quot;polarización vertical&quot;),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒇</mi><mo accent=\"true\">̃</mo></mover><mi>v</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "u horizontalmente (&quot;polarización horizontal&quot;),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝒇</mi><mo accent=\"true\">̃</mo></mover><mi>h</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "o en cualquier otra dirección del plano <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>. El <strong>vector de polarización</strong> <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> define el plano de oscilación; la transversalidad exige <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. Mediante el ángulo de polarización <math display=\"inline\"><mi>θ</mi></math>, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y la onda general puede escribirse como superposición de dos ondas, una polarizada horizontalmente y la otra verticalmente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Polarización lineal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒇</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>A</mi><mo accent=\"true\">̃</mo></mover><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es la <strong>polarización lineal</strong> (o &quot;plana&quot;): el desplazamiento es siempre paralelo a un vector fijo <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math>, porque las dos componentes están <strong>en fase</strong>. Pero las componentes pueden estar <strong>desfasadas</strong>. Si se combinan dos componentes de igual amplitud desfasadas <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> (por ejemplo <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>y</mi></msub><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), en un punto fijo el extremo del desplazamiento describe una circunferencia alrededor del eje <math display=\"inline\"><mi>z</mi></math>: <strong>polarización circular</strong>. Según el sentido de giro, se distingue circular derecha o izquierda (en óptica, mirando en el sentido de las agujas del reloj o en el contrario, respectivamente). Si las amplitudes no son iguales, o el desfase no es <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, el extremo describe una elipse: <strong>polarización elíptica</strong>, el caso más general, cuyos casos límite son la lineal (desfase <math display=\"inline\"><mn>0</mn></math> o <math display=\"inline\"><mi>π</mi></math>) y la circular (amplitudes iguales, desfase <math display=\"inline\"><mrow><mi>±</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "irudia",
     "oina": "Estados de polarización, mirando hacia abajo por el eje <math display=\"inline\"><mi>z</mi></math>: el extremo del campo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> describe una recta (lineal), una circunferencia (circular) o una elipse (elíptica) en el plano transversal a la dirección de propagación.",
     "src": "../media/irudiak/f42cc447b6715640.svg",
     "zabalera": 428
    },
    {
     "mota": "testua",
     "html": "En las ondas electromagnéticas, por convención, se toma la dirección del campo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> para especificar la polarización."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Ondas electromagnéticas en el vacío",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de ondas de E y de B"
    },
    {
     "mota": "testua",
     "html": "En las regiones del espacio sin cargas ni corrientes, las ecuaciones de Maxwell adoptan esta forma:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Son ecuaciones acopladas de primer orden para <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y para <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>. Para desacoplarlas, se aplica el rotacional a las leyes de Faraday y de Ampère–Maxwell."
    },
    {
     "mota": "testua",
     "html": "Tomando el rotacional de la ley de Faraday y sustituyendo la ley de Ampère–Maxwell (ambas del capítulo 7), las ecuaciones de Maxwell quedan desacopladas, dando una ecuación de ondas para cada campo:"
    },
    {
     "mota": "testua",
     "html": "En efecto, usando la identidad <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>, y teniendo en cuenta que <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y análogamente para <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>. Así se obtienen las ecuaciones de ondas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Ecuaciones de ondas en el vacío",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemos pagado un precio: ahora son ecuaciones de segundo orden, pero separadas. Cada componente cartesiana satisface la ecuación de ondas en tres dimensiones, de la forma <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Comparando con la ecuación de ondas unidimensional, se identifica la velocidad de propagación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></msqrt></mfrac><mo>=</mo><mi>c</mi><mo>=</mo><mn>3.00</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "—la velocidad de la luz, precisamente. Las ecuaciones de Maxwell <strong>predicen</strong> ondas electromagnéticas que viajan con velocidad <math display=\"inline\"><mi>c</mi></math>; identificar la luz como una onda de este tipo fue una de las grandes unificaciones de la física del siglo XIX."
    },
    {
     "mota": "testua",
     "html": "Cabe señalar que <math display=\"inline\"><msub><mi>μ</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>ϵ</mi><mn>0</mn></msub></math> se miden en experimentos que no tenían nada que ver con la luz (cargas eléctricas, baterías, hilos); sin embargo, la teoría de Maxwell calcula <math display=\"inline\"><mi>c</mi></math> a partir de esos dos números. Es fundamental la aportación de Maxwell a la ley de Ampère (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>): sin ella no habría ecuación de ondas, y no habría teoría electromagnética de la luz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas planas monocromáticas"
    },
    {
     "mota": "testua",
     "html": "Por las razones vistas en el apartado 9.1.2, nos limitamos a ondas sinusoidales de una sola frecuencia <math display=\"inline\"><mi>ω</mi></math>: ondas <strong>monocromáticas</strong>. En el intervalo visible, las distintas frecuencias corresponden a distintos colores. Además, suponemos que viajan en la dirección <math display=\"inline\"><mi>z</mi></math> y que no dependen de <math display=\"inline\"><mi>x</mi></math> ni de <math display=\"inline\"><mi>y</mi></math>; son las <strong>ondas planas</strong>, pues en todo plano perpendicular a la dirección de propagación el campo es uniforme."
    },
    {
     "mota": "testua",
     "html": "Una onda plana que viaja en la dirección <math display=\"inline\"><mi>z</mi></math>, polarizada linealmente a lo largo de <math display=\"inline\"><mi>x</mi></math>, adopta esta forma:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Onda plana monocromática",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Una onda electromagnética plana: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> oscilan en fase, perpendiculares entre sí y a la dirección de propagación, cumpliendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>c</mi></mrow></math>.",
     "src": "../media/irudiak/5825a22483095667.svg",
     "zabalera": 298
    },
    {
     "mota": "testua",
     "html": "Tres hechos estructurales, los tres impuestos por las ecuaciones de Maxwell, no supuestos: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> son perpendiculares a la dirección de propagación (la onda es <strong>transversal</strong>), <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> son perpendiculares entre sí, y oscilan exactamente en fase, cumpliendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>c</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Estos hechos provienen directamente de <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>. El primero anula la componente <math display=\"inline\"><mi>z</mi></math> de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> (transversalidad); el segundo relaciona las amplitudes <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mn>0</mn></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><mfrac><mi>k</mi><mi>ω</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hortik </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>k</mi><mi>ω</mi></mfrac><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para una onda que viaja en una dirección arbitraria, se introduce el <strong>vector de propagación</strong> (o vector de onda) <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math>, de módulo <math display=\"inline\"><mi>k</mi></math> y con la dirección de propagación; entonces en lugar de <math display=\"inline\"><mrow><mi>k</mi><mi>z</mi></mrow></math> aparece <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>, y <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> con el vector de polarización (<math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La siguiente tabla muestra la amplitud del espectro electromagnético, desde los rayos gamma hasta las ondas de radio:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Espectro electromagnético (basado en la tabla 9.1 de Griffiths, alineado con <math display=\"inline\"><mrow><mi>λ</mi><mi>ν</mi><mo>=</mo><mi>c</mi></mrow></math>). El intervalo visible está entre <math display=\"inline\"><mrow><mn>4.0</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></math> m (violeta) y <math display=\"inline\"><mrow><mn>7.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></math> m (rojo).",
     "blokeak": [
      {
       "mota": "testua",
       "html": "table( columns: (auto, auto, auto), align: (center, center, center), inset: 5pt, stroke: 0.4pt + grisa, table.header([<strong>Frecuencia (Hz)</strong>], [<strong>Tipo</strong>], [<strong>Longitud de onda (m)</strong>]), [<math display=\"inline\"><msup><mn>10</mn><mn>20</mn></msup></math>], [rayos gamma], [<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></math>], [<math display=\"inline\"><msup><mn>10</mn><mn>18</mn></msup></math>], [rayos X], [<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></math>], [<math display=\"inline\"><msup><mn>10</mn><mn>16</mn></msup></math>], [ultravioleta], [<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></math>], [<math display=\"inline\"><mrow><mo>≈</mo><msup><mn>10</mn><mn>15</mn></msup></mrow></math>], [visible], [<math display=\"inline\"><mrow><mo>≈</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></math>], [<math display=\"inline\"><msup><mn>10</mn><mn>14</mn></msup></math>], [infrarrojo], [<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></math>], [<math display=\"inline\"><msup><mn>10</mn><mn>10</mn></msup></math>], [microondas], [<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>], [<math display=\"inline\"><msup><mn>10</mn><mn>8</mn></msup></math>], [TV, FM], [<math display=\"inline\"><mn>1</mn></math>], [<math display=\"inline\"><msup><mn>10</mn><mn>6</mn></msup></math>], [AM], [<math display=\"inline\"><msup><mn>10</mn><mn>2</mn></msup></math>], )"
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "izena": "adibide-izenburua"
    },
    {
     "mota": "testua",
     "html": "Supongamos que el campo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> apunta en la dirección <math display=\"inline\"><mi>x</mi></math>. Entonces <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> apunta en la dirección <math display=\"inline\"><mi>y</mi></math>, por la relación <math display=\"inline\"><mrow><msub><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: porque <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y porque <math display=\"inline\"><mrow><mi>k</mi><mi>/</mi><mi>ω</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>c</mi></mrow></math>. En notación compleja,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y tomando la parte real (con una constante de fase general, <math display=\"inline\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>δ</mi></mrow></msup></mrow></math>), se obtienen los campos reales:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El resultado confirma los tres hechos estructurales: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>∥</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (perpendiculares, y ambos transversales a la dirección de propagación <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math>), oscilando en fase, y con la relación de amplitudes <math display=\"inline\"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mi>/</mi><mi>c</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Energía y momento en las ondas EM"
    },
    {
     "mota": "testua",
     "html": "Usando el vector de Poynting del capítulo 8, el flujo de energía de una onda plana monocromática, promediado sobre un ciclo, da la <strong>intensidad</strong>:"
    },
    {
     "mota": "testua",
     "html": "Vayamos paso a paso. La densidad de energía almacenada en los campos electromagnéticos es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (ecuación 8.13). Como en una onda plana <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>E</mi><mi>/</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup></mrow></math>, y las contribuciones eléctrica y magnética son <strong>iguales</strong>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La densidad de flujo de energía la da el vector de Poynting, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y en la dirección <math display=\"inline\"><mi>z</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>c</mi><mi>u</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el caso de la luz, la longitud de onda es tan corta y el periodo tan breve que cualquier medida macroscópica abarca muchos ciclos; lo que nos interesa es el valor medio. Como el promedio de <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math> sobre un ciclo completo es <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La potencia media transportada por la onda por unidad de superficie es la <strong>intensidad</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Intensidad de una onda plana",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los campos electromagnéticos también transportan momento: la densidad de momento es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑺</mi></mrow></math>, y el valor medio <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝒈</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Cuando la luz llega a un absorbente perfecto cede su momento a la superficie, y eso produce la <strong>presión de radiación</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>ϵ</mi><mn>0</mn></msub><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mi>I</mi><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(En un reflector perfecto la presión es doble, porque el momento, en lugar de absorberse, cambia de sentido.) Esta presión es pequeña para la luz solar, pero medible, y está en la base de las fuerzas causadas por la luz de las estrellas o por láseres potentes."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: intensidad de la luz solar"
    },
    {
     "mota": "testua",
     "html": "La luz solar llega a la órbita de la Tierra con una intensidad de <math display=\"inline\"><mrow><mi>I</mi><mo>≈</mo><mn>1370</mn></mrow></math> W/m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> (la &quot;constante solar&quot;). El pico del campo eléctrico correspondiente es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>I</mi></mrow><mrow><mi>c</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mo>×</mo><mn>1370</mn></mrow><mrow><mn>3.00</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo>×</mo><mn>8.854</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></mrow></mfrac></msqrt><mo>≈</mo><mn>1.0</mn><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> V/m </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "—un número llamativo: la luz solar corriente, que no nos parece nada notable, lleva un pico de campo de unos 1000 V/m, comparable a los campos que se encuentran en muchos montajes de laboratorio, oscilando <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math> veces por segundo."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Ondas electromagnéticas en la materia",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Propagación en medios lineales"
    },
    {
     "mota": "testua",
     "html": "Dentro de un dieléctrico lineal (capítulo 4) o de un medio magnético (capítulo 6), la misma deducción da una ecuación de ondas, sustituyendo <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math> por <math display=\"inline\"><mrow><mi>μ</mi><mi>ϵ</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Velocidad e impedancia en la materia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>μ</mi><mi>ϵ</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mi>c</mi><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><msqrt><mrow><msub><mi>ϵ</mi><mi>r</mi></msub><msub><mi>μ</mi><mi>r</mi></msub></mrow></msqrt></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mi>n</mi></math> es el <strong>índice de refracción</strong> (para la mayoría de los materiales no magnéticos, <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>r</mi></msub><mo>≈</mo><mn>1</mn></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>n</mi><mo>≈</mo><msqrt><msub><mi>ϵ</mi><mi>r</mi></msub></msqrt></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como casi siempre <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>r</mi></msub><mo>&gt;</mo><mn>1</mn></mrow></math>, la luz viaja más despacio en la materia —un hecho bien conocido por la óptica—. Todos los resultados anteriores se adaptan directamente con las sustituciones <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mn>0</mn></msub><mo>→</mo><mi>ϵ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>→</mo><mi>μ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>c</mi><mo>→</mo><mi>v</mi></mrow></math>: la densidad de energía es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ϵ</mi><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y la intensidad"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ϵ</mi><mi>v</mi><msubsup><mi>E</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reflexión y transmisión en incidencia normal"
    },
    {
     "mota": "testua",
     "html": "En una interfase entre dos medios lineales, aplicando las condiciones de contorno del capítulo 7 a una onda en incidencia normal, se obtienen los coeficientes de reflexión y de transmisión, en función de las <strong>impedancias</strong> de onda (o, de forma equivalente, de los índices de refracción):"
    },
    {
     "mota": "irudia",
     "oina": "Una onda que incide sobre una interfase se divide en una onda reflejada (de nuevo hacia el medio 1) y una onda transmitida (hacia el medio 2), ambas determinadas aplicando las condiciones de contorno.",
     "src": "../media/irudiak/dbd48423cea2d02f.svg",
     "zabalera": 264
    },
    {
     "mota": "testua",
     "html": "Veamos de dónde vienen. Si el plano <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math> es el límite entre dos medios lineales, y viene desde la izquierda una onda que se propaga en la dirección <math display=\"inline\"><mi>z</mi></math> polarizada a lo largo de <math display=\"inline\"><mi>x</mi></math>, las condiciones de contorno (en <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>) exigen la continuidad de los campos paralelos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>+</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>−</mo><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><mi>β</mi><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Resolviendo ambas ecuaciones se obtienen las amplitudes de salida; en medios no magnéticos (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>β</mi><mo>≈</mo><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><msub><mi>v</mi><mn>2</mn></msub></mrow></math>, y los resultados son idénticos a los de las ondas en la cuerda:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Coeficientes de reflexión y de transmisión",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>R</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>−</mo><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>v</mi><mn>2</mn></msub><mo>+</mo><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "(Para medios no magnéticos, de forma equivalente, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En cuanto a las fracciones de energía, se definen el <strong>coeficiente de reflexión</strong> <math display=\"inline\"><mi>R</mi></math> y el <strong>coeficiente de transmisión</strong> <math display=\"inline\"><mi>T</mi></math> como el cociente entre las intensidades reflejada y transmitida y la intensidad de entrada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>4</mn><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "como exige la conservación de la energía."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: reflexión en una interfase aire–vidrio"
    },
    {
     "mota": "testua",
     "html": "La luz pasa del aire (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>≈</mo><mn>1.00</mn></mrow></math>) al vidrio (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>≈</mo><mn>1.50</mn></mrow></math>) en incidencia normal. El coeficiente de reflexión de la <strong>amplitud</strong> es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>R</mi></msub><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1.00</mn><mo>−</mo><mn>1.50</mn></mrow><mrow><mn>1.00</mn><mo>+</mo><mn>1.50</mn></mrow></mfrac><mo>=</mo><mi>−</mi><mn>0.20</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la <strong>intensidad</strong> (potencia) reflejada escala con el cuadrado del cociente de amplitudes, la fracción de potencia reflejada es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.20</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0.04</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "—alrededor del 4 %: el conocido reflejo débil que ves en los vidrios de ventana corrientes, mientras que el otro 96 % se transmite."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reflexión y transmisión en incidencia oblicua"
    },
    {
     "mota": "testua",
     "html": "En el apartado anterior la onda llegaba de frente contra la interfase (<math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). El caso más general es la <strong>incidencia oblicua</strong>: la onda llega con un ángulo <math display=\"inline\"><msub><mi>θ</mi><mi>I</mi></msub></math> arbitrario. Ahora las tres ondas —incidente, reflejada y transmitida— tienen vectores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> distintos, pero la misma frecuencia. Las condiciones de contorno exigen que la dependencia exponencial en <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>t</mi></math> sea la misma en toda la interfase; de ahí salen tres leyes geométricas, casi sin usar electrodinámica detallada:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Las tres leyes de la óptica geométrica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>R</mi></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (islapenaren legea)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Snell-en legea)</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La primera ley dice que los vectores de onda incidente, reflejado y transmitido forman un plano (el <strong>plano de incidencia</strong>), que incluye también la normal a la superficie. La segunda iguala los ángulos de incidencia y de reflexión. La tercera es la ley de Snell, la de la refracción."
    },
    {
     "mota": "irudia",
     "oina": "Incidencia oblicua: la onda incidente (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>I</mi></msub></math>), la reflejada (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>R</mi></msub></math>) y la transmitida (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝒌</mi><mi>T</mi></msub></math>) están en el plano de incidencia. <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>R</mi></msub></mrow></math>, y <math display=\"inline\"><msub><mi>θ</mi><mi>T</mi></msub></math> la da la ley de Snell.",
     "src": "../media/irudiak/e1d73dba79318342.svg",
     "zabalera": 331
    },
    {
     "mota": "testua",
     "html": "Aplicando las condiciones de contorno a las amplitudes (en el caso de polarización paralela al plano de incidencia), se obtienen las <strong>ecuaciones de Fresnel</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Ecuaciones de Fresnel (polarización paralela)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>α</mi><mo>−</mo><mi>β</mi></mrow><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>α</mi></math> depende del ángulo de incidencia, a través de Snell:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mi>T</mi></msub></mrow></msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><msub><mi>θ</mi><mi>I</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></msqrt><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>I</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En incidencia normal (<math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>, y se recuperan los resultados del apartado anterior. En incidencia rasante (<math display=\"inline\"><mrow><msub><mi>θ</mi><mi>I</mi></msub><mo>→</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>∞</mi></mrow></math> y la onda se refleja totalmente (el brillo deslumbrante que se ve al conducir de noche sobre una carretera mojada). Entre ambas, existe el <strong>ángulo de Brewster</strong> <math display=\"inline\"><msub><mi>θ</mi><mi>B</mi></msub></math>, en el que la onda reflejada se anula por completo (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>β</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msub><mi>θ</mi><mi>B</mi></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>/</mi><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>μ</mi><mn>2</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> denean, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>B</mi></msub><mo>≈</mo><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>n</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las fracciones de energía, por último, quedan así en polarización paralela:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>α</mi><mo>−</mo><mi>β</mi></mrow><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>α</mi><mi>β</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mi>α</mi><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(El caso de polarización <strong>perpendicular</strong> al plano de incidencia tiene otras dos ecuaciones de Fresnel, deducidas de forma parecida; en ese caso no hay ángulo de Brewster.) En el ángulo de Brewster, el rayo reflejado está totalmente polarizado paralelamente a la superficie; por eso reducen el deslumbramiento las gafas Polaroid, con el eje de transmisión vertical."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Absorción y dispersión",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ondas electromagnéticas en conductores"
    },
    {
     "mota": "testua",
     "html": "Dentro de un conductor (capítulo 5), la ley de Ohm (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><msub><mi>σ</mi><mi>c</mi></msub><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>) añade un término de amortiguamiento a la ecuación de ondas, y el número de onda pasa a ser complejo:"
    },
    {
     "mota": "testua",
     "html": "En efecto, al introducir <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>f</mi></msub><mo>=</mo><msub><mi>σ</mi><mi>c</mi></msub><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math> en la ley de Ampère–Maxwell, la ecuación de ondas de los campos adquiere un término nuevo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>μ</mi><mi>ϵ</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>μ</mi><msub><mi>σ</mi><mi>c</mi></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y las soluciones en ondas planas cumplen <math display=\"inline\"><mrow><msup><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msup><mo>=</mo><mi>μ</mi><mi>ϵ</mi><msup><mi>ω</mi><mn>2</mn></msup><mo>+</mo><mi>i</mi><mi>μ</mi><msub><mi>σ</mi><mi>c</mi></msub><mi>ω</mi></mrow></math>, siendo el número de onda complejo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>k</mi><mo>+</mo><mi>i</mi><mi>κ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>κ</mi><mo>=</mo><msqrt><mfrac><mrow><mi>μ</mi><mi>ϵ</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>σ</mi><mi>c</mi></msub><mrow><mi>ϵ</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La parte imaginaria de <math display=\"inline\"><mi>κ</mi></math> describe la atenuación exponencial, a medida que la onda penetra en el conductor:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Profundidad pelicular",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>z</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mi>d</mi></math>, la <strong>profundidad pelicular</strong>, es la distancia a la que la amplitud de la onda disminuye en un factor <math display=\"inline\"><mfrac><mn>1</mn><mi>e</mi></mfrac></math>."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Una onda que penetra en un conductor se amortigua exponencialmente, y el campo queda esencialmente confinado en una capa delgada de espesor <math display=\"inline\"><mi>d</mi></math> cercana a la superficie (profundidad pelicular).",
     "src": "../media/irudiak/d0e7e772c96cc2ec.svg",
     "zabalera": 266
    },
    {
     "mota": "testua",
     "html": "La parte real, <math display=\"inline\"><mi>k</mi></math>, determina la longitud de onda, la velocidad de propagación y el índice de refracción de la manera habitual. Por otra parte, el campo magnético va <strong>retrasado</strong> en fase respecto del eléctrico, un ángulo <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>κ</mi><mi>/</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: en los conductores <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> ya no están en fase."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: profundidad pelicular del cobre"
    },
    {
     "mota": "testua",
     "html": "Para un buen conductor, a frecuencias muy inferiores a la &quot;frecuencia de relajación&quot; (<math display=\"inline\"><mrow><msub><mi>σ</mi><mi>c</mi></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ϵ</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≫</mo><mn>1</mn></mrow></math>), la profundidad pelicular se simplifica a <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>σ</mi><mi>c</mi></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>. Para el cobre (<math display=\"inline\"><mrow><msub><mi>σ</mi><mi>c</mi></msub><mo>≈</mo><mn>5.96</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup></mrow></math> S/m), a 60 Hz (frecuencia de la red doméstica),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>σ</mi><mi>c</mi></msub><mi>ω</mi></mrow></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mn>2</mn><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mo>×</mo><mn>5.96</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mo>×</mo><mn>2</mn><mi>π</mi><mo>×</mo><mn>60</mn></mrow></mfrac></msqrt><mo>≈</mo><mn>8.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> mm </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A radiofrecuencias (en el orden de los MHz), la misma fórmula da profundidades peliculares de unas pocas micras: de ahí que, en la práctica, las corrientes de alta frecuencia circulen solo por una capa delgada superficial en hilos y antenas, y que los conductores de RF estén a menudo plateados en lugar de ser de plata maciza: solo la piel exterior transporta de verdad la corriente."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reflexión en la superficie de un conductor"
    },
    {
     "mota": "testua",
     "html": "También la onda que se refleja en un buen conductor puede tratarse, con condiciones de contorno más generales (cargas y corrientes libres en la superficie). En el caso de un conductor <strong>perfecto</strong> (<math display=\"inline\"><mrow><msub><mi>σ</mi><mi>c</mi></msub><mo>→</mo><mi>∞</mi></mrow></math>, luego <math display=\"inline\"><mrow><msub><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mn>2</mn></msub><mo>→</mo><mi>∞</mi></mrow></math>), el resultado es sencillo: <math display=\"inline\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>R</mi></msub></msub><mo>=</mo><mi>−</mi><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>I</mi></msub></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><msub><mn>0</mn><mi>T</mi></msub></msub><mo>=</mo><mn>0</mn></mrow></math>. La onda se refleja por completo, desfasada <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Por eso los buenos conductores son buenos espejos: en la práctica, se deposita una capa fina de plata en la cara posterior de un vidrio (la profundidad pelicular de la plata a frecuencias ópticas es de unos <math display=\"inline\"><mn>100</mn></math> Å, de modo que no hace falta una capa gruesa). El vidrio en sí no interviene en la reflexión; está solo como soporte y para proteger la plata de la oxidación."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Que la profundidad pelicular se contraiga con la frecuencia es una forma de <strong>dispersión</strong>: las distintas frecuencias penetran de modo distinto en un conductor y (en los aislantes) también viajan con distinta velocidad de fase, porque <math display=\"inline\"><mi>ϵ</mi></math> depende en sí misma de la frecuencia a nivel microscópico. Ese es el origen del arcoíris que despliega un prisma de vidrio: la luz violeta y la roja ven <math display=\"inline\"><mi>n</mi></math> ligeramente distintos."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dependencia del índice de refracción con la frecuencia"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos tomado <math display=\"inline\"><mi>ϵ</mi></math>, <math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><msub><mi>σ</mi><mi>c</mi></msub></math> como constantes. En realidad, las tres dependen en alguna medida de la frecuencia. Si la permitividad fuera realmente constante, el índice de refracción también lo sería; pero la óptica nos enseña bien que <math display=\"inline\"><mi>n</mi></math> depende de la longitud de onda: un prisma desvía la luz azul más que la roja. Este fenómeno se llama <strong>dispersión</strong>, y a todo medio en el que la velocidad de la onda depende de la frecuencia, <strong>dispersivo</strong>."
    },
    {
     "mota": "testua",
     "html": "Una consecuencia importante de la dispersión es que un paquete de ondas (un &quot;grupo de ondas&quot;) cambia de forma al propagarse. Mientras que cada componente sinusoidal se mueve con <strong>velocidad de fase</strong> <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math>, el paquete, en general, se mueve con <strong>velocidad de grupo</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Velocidad de fase y velocidad de grupo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (fase-abiadura)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">d</mi><mi>ω</mi></mrow><mrow><mi mathvariant=\"normal\">d</mi><mi>k</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (talde-abiadura)</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La energía que transporta un paquete de ondas viaja, en general, con la velocidad de grupo; por tanto, no debe sorprender que a veces <math display=\"inline\"><mi>v</mi></math> resulte mayor que <math display=\"inline\"><mi>c</mi></math>, ya que la energía no sigue esa velocidad."
    },
    {
     "mota": "testua",
     "html": "Para entender el origen microscópico de la dispersión se usa un modelo sencillo: cada electrón de un dieléctrico se representa en el extremo de un muelle, con una fuerza de ligadura de constante <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mtext mathvariant=\"normal\">malg </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>, más una fuerza de amortiguamiento proporcional a la velocidad (<math display=\"inline\"><mrow><mi>−</mi><mi>m</mi><mi>γ</mi><mi>d</mi><mi>x</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>). Una onda de frecuencia <math display=\"inline\"><mi>ω</mi></math> le aplica una fuerza impulsora <math display=\"inline\"><mrow><mi>q</mi><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la ley de Newton da la ecuación de un oscilador armónico amortiguado y forzado:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mfrac><mrow><msup><mi mathvariant=\"normal\">d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi mathvariant=\"normal\">d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>m</mi><mi>γ</mi><mfrac><mrow><mi mathvariant=\"normal\">d</mi><mi>x</mi></mrow><mrow><mi mathvariant=\"normal\">d</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><mi>q</mi><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es más fácil resolverla en notación compleja. En régimen estacionario el sistema oscila con la frecuencia del impulsor, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>x</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>q</mi><mi>/</mi><mi>m</mi></mrow><mrow><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mi>i</mi><mi>γ</mi><mi>ω</mi></mrow></mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si hay <math display=\"inline\"><mi>N</mi></math> moléculas por unidad de volumen, cada una con <math display=\"inline\"><msub><mi>f</mi><mi>j</mi></msub></math> electrones de frecuencia <math display=\"inline\"><msub><mi>ω</mi><mi>j</mi></msub></math> y amortiguamiento <math display=\"inline\"><msub><mi>γ</mi><mi>j</mi></msub></math>, la polarización (compleja) es <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑷</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msub><mi>ϵ</mi><mn>0</mn></msub><msub><mover><mi>χ</mi><mo accent=\"true\">̃</mo></mover><mi>e</mi></msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover></mrow></math>, y de ahí se obtienen la <strong>permitividad compleja</strong> y la <strong>constante dieléctrica compleja</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Constante dieléctrica compleja",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mover><mi>ϵ</mi><mo accent=\"true\">̃</mo></mover><mi>r</mi></msub><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><msub><mi>f</mi><mi>j</mi></msub><mrow><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><mi>i</mi><msub><mi>γ</mi><mi>j</mi></msub><mi>ω</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El número de onda es ahora complejo, <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msqrt><mrow><mover><mi>ϵ</mi><mo accent=\"true\">̃</mo></mover><msub><mi>μ</mi><mn>0</mn></msub></mrow></msqrt><mi>ω</mi><mo>=</mo><mi>k</mi><mo>+</mo><mi>i</mi><mi>κ</mi></mrow></math>. La parte imaginaria amortigua la onda (<math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>z</mi></mrow></msup></math>), y como la intensidad es <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>∝</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>κ</mi><mi>z</mi></mrow></msup></mrow></math>, se define el <strong>coeficiente de absorción</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>κ</mi></mrow></math>. Para los gases (donde el segundo término es pequeño), el índice de refracción y el coeficiente de absorción pueden aproximarse:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>k</mi></mrow><mi>ω</mi></mfrac><mo>≈</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><mrow><msub><mi>f</mi><mi>j</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msubsup><mi>γ</mi><mi>j</mi><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>κ</mi><mo>≈</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><mrow><msub><mi>f</mi><mi>j</mi></msub><msub><mi>γ</mi><mi>j</mi></msub></mrow><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msubsup><mi>γ</mi><mi>j</mi><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Índice de refracción (<math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>) y coeficiente de absorción (<math display=\"inline\"><mi>α</mi></math>) en torno a una resonancia. Normalmente <math display=\"inline\"><mi>n</mi></math> crece con la frecuencia, pero en la resonancia disminuye bruscamente (<strong>dispersión anómala</strong>), coincidiendo con la máxima absorción.",
     "src": "../media/irudiak/16df1087c910bd59.svg",
     "zabalera": 284
    },
    {
     "mota": "testua",
     "html": "Como se ve en la figura de arriba, casi siempre <math display=\"inline\"><mi>n</mi></math> crece poco a poco con la frecuencia (lo habitual en óptica), pero muy cerca de la resonancia disminuye bruscamente: esa es la <strong>dispersión anómala</strong>, y coincide con la región de máxima absorción (el material puede ser casi opaco en ese intervalo). Lejos de las resonancias, el amortiguamiento puede despreciarse y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>N</mi><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><munder><mo>∑</mo><mi>j</mi></munder><mfrac><msub><mi>f</mi><mi>j</mi></msub><mrow><msubsup><mi>ω</mi><mi>j</mi><mn>2</mn></msubsup><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En los materiales transparentes, las resonancias más cercanas suelen estar en el ultravioleta (<math display=\"inline\"><mrow><mi>ω</mi><mo>&lt;</mo><msub><mi>ω</mi><mi>j</mi></msub></mrow></math>); entonces el desarrollo da la <strong>fórmula de Cauchy</strong>, en función de la longitud de onda:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mi>B</mi><msup><mi>λ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>A</mi></math> es el <strong>coeficiente de refracción</strong> y <math display=\"inline\"><mi>B</mi></math> el <strong>coeficiente de dispersión</strong>. Esta fórmula describe bien la dispersión de la mayoría de los gases y vidrios en la región óptica, y explica que <math display=\"inline\"><mi>n</mi></math> aumente lentamente con la frecuencia, con algunas &quot;anomalías&quot; intermedias."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Ondas guiadas",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Guías de ondas"
    },
    {
     "mota": "testua",
     "html": "Una onda confinada en el interior de un tubo conductor hueco —una <strong>guía de ondas</strong>— se comporta de un modo muy distinto al de una onda en el espacio abierto. Las paredes conductoras imponen <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo></msup><mo>=</mo><mn>0</mn></mrow></math> en el contorno (capítulo 5), y eso cuantiza los patrones de campo transversales admitidos en <strong>modos</strong> discretos, cada uno con su propio comportamiento de propagación. Para una guía rectangular de anchura <math display=\"inline\"><mi>a</mi></math> y altura <math display=\"inline\"><mi>b</mi></math>, el modo dominante (el de menor frecuencia de corte, que en la práctica predomina) es <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math> —transversal eléctrico, con <math display=\"inline\"><mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> en todas partes y una variación de solo media longitud de onda a lo ancho—:"
    },
    {
     "mota": "testua",
     "html": "Veamos cómo surge. Una onda monocromática que se propaga por el tubo tiene esta forma general: <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><msub><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, siendo las condiciones de contorno <math display=\"inline\"><mrow><msup><mi>E</mi><mo>∥</mo></msup><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>B</mi><mo>⟂</mo></msup><mo>=</mo><mn>0</mn></mrow></math> en las paredes. Las ondas confinadas no son, en general, transversales: hay que incluir componentes longitudinales (<math display=\"inline\"><msub><mi>E</mi><mi>z</mi></msub></math> y <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math>). A partir de las ecuaciones de Maxwell, todas las componentes transversales (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>,</mo><msub><mi>E</mi><mi>y</mi></msub><mo>,</mo><msub><mi>B</mi><mi>x</mi></msub><mo>,</mo><msub><mi>B</mi><mi>y</mi></msub></mrow></math>) pueden expresarse mediante las derivadas de <math display=\"inline\"><msub><mi>E</mi><mi>z</mi></msub></math> y <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>=</mo><mfrac><mi>i</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mfrac><mrow><mi>∂</mi><msub><mi>E</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>ω</mi><mfrac><mrow><mi>∂</mi><msub><mi>B</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta antzera </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>E</mi><mi>y</mi></msub><mo>,</mo><msub><mi>B</mi><mi>x</mi></msub><mo>,</mo><msub><mi>B</mi><mi>y</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Basta, pues, con determinar <math display=\"inline\"><msub><mi>E</mi><mi>z</mi></msub></math> y <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math>. Cada una satisface su propia ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> berdin </mtext><mspace width=\"0.333em\"></mspace></mrow><msub><mi>B</mi><mi>z</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -rako</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, las ondas se llaman <math display=\"inline\"><mtext mathvariant=\"normal\">TE</mtext></math> (&quot;transversal eléctrico&quot;); si <math display=\"inline\"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mtext mathvariant=\"normal\">TM</mtext></math> (&quot;transversal magnético&quot;); si ambas son nulas, <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math>. En un tubo hueco no pueden darse los modos <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math>."
    },
    {
     "mota": "irudia",
     "oina": "El modo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math> de una guía de ondas rectangular: el campo eléctrico transversal varía según <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a lo ancho, anulándose en las dos paredes laterales, como exige la condición de contorno.",
     "src": "../media/irudiak/bc092aafbe7968cb.svg",
     "zabalera": 300
    },
    {
     "mota": "testua",
     "html": "Para los modos <math display=\"inline\"><mtext mathvariant=\"normal\">TE</mtext></math>, se resuelve por separación de variables, <math display=\"inline\"><msub><mi>B</mi><mi>z</mi></msub></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Las condiciones de contorno imponen <math display=\"inline\"><mrow><msub><mi>k</mi><mi>x</mi></msub><mo>=</mo><mi>m</mi><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>k</mi><mi>y</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>b</mi></mrow></math> (<math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>), y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>z</mi></msub><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>y</mi><mi>/</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este es el modo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mrow><mi>m</mi><mi>n</mi></mrow></msub></math>. El número de onda es <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow><mn>2</mn></msubsup></mrow></msqrt></mrow></math>, donde la frecuencia de corte es <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mi>c</mi><mi>π</mi><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>/</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>/</mi><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Frecuencia de corte y dispersión de los modos TE",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mi>c</mi><mi>π</mi><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msqrt><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow><mn>2</mn></msubsup></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La frecuencia de corte más baja es la del modo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math>, <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>10</mn></msub><mo>=</mo><mi>c</mi><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math>. La velocidad de fase es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi><mo>=</mo><mi>c</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mi>/</mi><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>, mayor que <math display=\"inline\"><mi>c</mi></math>; la velocidad de grupo, en cambio, es <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>c</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mi>/</mi><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>, menor que <math display=\"inline\"><mi>c</mi></math> —la que transporta la energía—."
    },
    {
     "mota": "irudia",
     "oina": "Relación de dispersión de la guía de ondas: por debajo de la frecuencia de corte, <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> se vuelve imaginario <math display=\"inline\"><mi>k</mi></math> y la onda no puede propagarse (se amortigua de forma evanescente); muy por encima del corte, la curva se aproxima a la recta ordinaria de la luz, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>c</mi><mi>k</mi></mrow></math>.",
     "src": "../media/irudiak/841cb810f8cfb10a.svg",
     "zabalera": 257
    },
    {
     "mota": "testua",
     "html": "Por debajo de la frecuencia de corte <math display=\"inline\"><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub></math>, el número de onda <math display=\"inline\"><mi>k</mi></math> se vuelve imaginario: el modo, sencillamente, no puede propagarse, y cualquier intento de excitarlo se amortigua exponencialmente con la distancia, en lugar de oscilar. Por eso una guía de ondas actúa como filtro paso alto: las señales por debajo de la frecuencia de corte más baja de la guía quedan totalmente bloqueadas —un fenómeno distinto, en realidad, de la absorción gradual que se ve en un conductor con pérdidas (apartado 9.4)—."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Línea de transmisión coaxial"
    },
    {
     "mota": "testua",
     "html": "Un tubo hueco rectangular (o circular) no puede sostener una onda <strong>sin ninguna</strong> frecuencia de corte; un cable coaxial, en cambio, con un conductor que corre por el centro del blindaje exterior, sí. Admite un modo <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> (transversal eléctrico <strong>y</strong> magnético, con ambos campos completamente transversales, igual que una onda plana en el espacio abierto), que se propaga a <strong>todas</strong> las frecuencias, hasta <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>0</mn></mrow></math>, sin corte alguno."
    },
    {
     "mota": "testua",
     "html": "¿Por qué? En un tubo hueco, el modo <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> exige la ecuación de Laplace en el plano transversal, con condiciones de contorno uniformes, y eso solo admite el campo nulo. Pero el conductor central añade un segundo contorno, a distinto potencial, y eso permite una solución no trivial. En el modo <math display=\"inline\"><mtext mathvariant=\"normal\">TEM</mtext></math> se cumple <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>ω</mi><mi>/</mi><mi>c</mi></mrow></math> (de modo que las ondas viajan con velocidad <math display=\"inline\"><mi>c</mi></math>, sin dispersión), y los campos son los de una carga lineal y de una corriente recta infinitas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>s</mi></mfrac><mover><mi>s</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>φ</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>c</mi><mi>s</mi></mrow></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "De ahí que el cableado doméstico y el de la difusión de radio habituales usen cable coaxial en lugar de guías de ondas huecas, por razones prácticas: las guías de ondas son excelentes a frecuencias de microondas (en las que las frecuencias de corte son cómodamente bajas y las pérdidas pequeñas), pero inútiles en corriente continua y a bajas frecuencias —justamente el terreno en el que el cable coaxial destaca—."
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Ejercicios resueltos (del manual de Griffiths)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes son problemas del libro <strong>Introduction to Electrodynamics</strong> de Griffiths (capítulo 9, ondas electromagnéticas), con la solución del manual del profesor, traducidos al euskera para JAKINA."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Griffiths 9.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba, derivando explícitamente, que las tres funciones siguientes"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>A</mi><mrow><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "satisfacen la ecuación de ondas unidimensional,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "y demuestra que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>5</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "no la satisfacen."
      },
      {
       "mota": "irudia",
       "oina": "<math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math> (gaussiana) y <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math>\n    (sinusoidal), ambas funciones simples de <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>, desplazan su forma\n  sin deformarla con velocidad <math display=\"inline\"><mi>v</mi></math>.",
       "src": "../media/irudiak/620f718b4e5228cb.svg",
       "zabalera": 319
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para las tres primeras definimos <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>. Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>v</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>f</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esto demuestra directamente que cualquier función derivable de <math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math> satisface la ecuación de ondas. Como <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>f</mi><mn>3</mn></msub></math> dependen únicamente de <math display=\"inline\"><mrow><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>, las tres son soluciones. En el caso de <math display=\"inline\"><msub><mi>f</mi><mn>1</mn></msub></math>, explícitamente,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><msub><mi>f</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>z</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>b</mi><mo>+</mo><mn>4</mn><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y derivar respecto de <math display=\"inline\"><mi>t</mi></math> introduce un factor <math display=\"inline\"><mrow><mi>−</mi><mi>v</mi></mrow></math> en la primera derivada y <math display=\"inline\"><msup><mi>v</mi><mn>2</mn></msup></math> en la segunda, de modo que <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></math> de inmediato. El mismo mecanismo vale para <math display=\"inline\"><msub><mi>f</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>f</mi><mn>3</mn></msub></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Funciones que fallan.</strong>  Para <math display=\"inline\"><mrow><msub><mi>f</mi><mn>4</mn></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mn>2</mn></msup><mo>+</mo><mi>v</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>4</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>b</mi><mo>+</mo><mn>4</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>f</mi><mn>4</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>4</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><msub><mi>f</mi><mn>4</mn></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y esas expresiones no son iguales para todo <math display=\"inline\"><mi>z</mi></math>; por tanto <math display=\"inline\"><msub><mi>f</mi><mn>4</mn></msub></math> no satisface la ecuación de ondas."
    },
    {
     "mota": "testua",
     "html": "Para <math display=\"inline\"><mrow><msub><mi>f</mi><mn>5</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la segunda derivada espacial es <math display=\"inline\"><mrow><mi>−</mi><msup><mi>b</mi><mn>2</mn></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>b</mi><mi>v</mi><mi>t</mi></mrow></math>; la segunda derivada temporal, en cambio, es <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>v</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><msub><mi>f</mi><mn>5</mn></msub></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mn>3</mn><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "no coincide en general con <math display=\"inline\"><mrow><mi>−</mi><msup><mi>b</mi><mn>2</mn></msup><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por ejemplo, cuando <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math>, la parte espacial es <math display=\"inline\"><mrow><mi>−</mi><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la parte temporal, dividida por <math display=\"inline\"><msup><mi>v</mi><mn>2</mn></msup></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>3</mn><mi>A</mi><msup><mi>b</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><msub><mi>f</mi><mn>2</mn></msub><mo>,</mo><msub><mi>f</mi><mn>3</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzioak dira </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mn>4</mn></msub><mo>,</mo><msub><mi>f</mi><mn>5</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez dira soluzioak </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Griffiths 9.9",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Escribe los campos eléctrico y magnético reales de una onda plana monocromática de amplitud <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>, frecuencia <math display=\"inline\"><mi>ω</mi></math> y ángulo de fase cero, (a) que se propaga en el sentido negativo del eje <math display=\"inline\"><mi>x</mi></math> y está polarizada en la dirección <math display=\"inline\"><mi>z</mi></math>, y (b) que se propaga desde el origen hacia el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, polarizada paralelamente al plano <math display=\"inline\"><mrow><mi>x</mi><mi>z</mi></mrow></math>. En cada caso, dibuja la onda y da las componentes cartesianas explícitas de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> y de <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la forma general de una onda plana monocromática, la dirección de propagación la da el vector unitario <math display=\"inline\"><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></math>, y la polarización <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> (la dirección del campo eléctrico); ambos son perpendiculares, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. Como el ángulo de fase es nulo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mi>c</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(a) Dirección <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>, polarización <math display=\"inline\"><mi>z</mi></math>.</strong> Aquí <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, luego <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></math>; la polarización es <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y se cumple <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. El producto vectorial es <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (pues <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>). Como el coseno es par, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mi>c</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi>x</mi><mo>+</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(b) Dirección <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, polarización en el plano <math display=\"inline\"><mrow><mi>x</mi><mi>z</mi></mrow></math>.</strong> La dirección de propagación es <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mn>3</mn></msqrt></mrow></math>, luego <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La polarización debe estar en el plano <math display=\"inline\"><mrow><mi>x</mi><mi>z</mi></mrow></math> y ser perpendicular a <math display=\"inline\"><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover></math>; por tanto, de la forma <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>α</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>β</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, donde ser <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math> impone <math display=\"inline\"><mrow><mi>α</mi><mo>+</mo><mi>β</mi><mo>=</mo><mn>0</mn></mrow></math> y ser unitario impone <math display=\"inline\"><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>+</mo><msup><mi>β</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; de ahí <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>. Calculando el producto vectorial mediante el determinante,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mi>c</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>ω</mi><mrow><msqrt><mn>3</mn></msqrt><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mn>2</mn><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow><msqrt><mn>6</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Estructura de la onda plana monocromática: <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y\n<math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> son perpendiculares, oscilan en fase y son\nperpendiculares a la dirección de propagación (onda transversal).",
     "src": "../media/irudiak/5825a22483095667.svg",
     "zabalera": 298
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>k</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (uhin lau ororentzat). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.9 (misma numeración en las ediciones 3.ª y 4.ª). El resultado coincide con el del problema 9.9 del manual de soluciones del profesor."
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Griffiths 9.10",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La intensidad de la luz solar que llega a la Tierra es de unos <math display=\"inline\"><mn>1300</mn></math> W/m². Si la luz solar incide sobre un absorbente perfecto, ¿qué presión ejerce? ¿Y sobre un reflector perfecto? ¿Qué fracción de la presión atmosférica es esa?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Una onda electromagnética transporta no solo energía sino también momento: la densidad de momento es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒈</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, y la intensidad <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. Un absorbente perfecto toma todo el momento de la luz: el momento que llega a una superficie <math display=\"inline\"><mi>A</mi></math> en un tiempo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>c</mi><mi>A</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>. La presión de radiación (fuerza media por unidad de superficie) resulta ser:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mi>A</mi></mfrac><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mi>I</mi><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con números,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1300</mn><mrow><mn>3.0</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>=</mo><mn>4.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N/m²</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En un reflector perfecto el momento cambia de dirección (no solo se absorbe), y por tanto la presión es doble:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">isla </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>I</mi></mrow><mi>c</mi></mfrac><mo>=</mo><mn>8.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> N/m²</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la presión atmosférica es de <math display=\"inline\"><mrow><mn>1.03</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></math> N/m², la presión de la luz (en el reflector) supone la siguiente fracción de la presión atmosférica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>8.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow><mrow><mn>1.03</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup></mrow></mfrac><mo>=</mo><mn>8.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La presión es extremadamente pequeña: por eso los efectos de la presión de radiación solo se aprecian en contextos especiales (colas de los cometas, equilibrio en el interior de las estrellas, manipulación mediante láser)."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mi>I</mi><mi>c</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (xurgatzailea)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>I</mi></mrow><mi>c</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (islatzailea). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.10 (misma numeración en las ediciones 3.ª y 4.ª). Los valores (<math display=\"inline\"><mrow><mn>4.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mn>8.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> N/m², <math display=\"inline\"><mrow><mn>8.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></mrow></math> atmósferas) coinciden con los del problema 9.10 del manual de soluciones del profesor."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Griffiths 9.11",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En notación compleja, demuestra el truco para calcular el promedio temporal del producto de dos funciones. Si"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "demostrar"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> batez.b.</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>a</mi></msub></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>b</mi></msub></mrow></msup></mrow></math> son amplitudes complejas. La fórmula vale para dos ondas con <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒌</mi></math> y <math display=\"inline\"><mi>ω</mi></math> iguales, aunque tengan amplitud y fase distintas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Escribiendo <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒌</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi>ω</mi><mi>t</mi></mrow></math>, resulta <math display=\"inline\"><mrow><mi>f</mi><mi>g</mi><mo>=</mo><mi>A</mi><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Usando la identidad <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mi>g</mi><mo>=</mo><mfrac><mrow><mi>A</mi><mi>B</mi></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo>+</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>+</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El promedio sobre un periodo elimina el segundo término, pues oscila con frecuencia <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> batez.b.</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>A</mi><mi>B</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo las amplitudes complejas <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>a</mi></msub></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>δ</mi><mi>b</mi></msub></mrow></msup></mrow></math>, resulta <math display=\"inline\"><mrow><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>δ</mi><mi>b</mi></msub></mrow></msup></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>A</mi><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> batez.b.</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mover><mi>G</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Aplicación a las ondas electromagnéticas.</strong> Se usa el mismo truco para los productos cuadráticos de los campos: con las amplitudes complejas <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover></math> y <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>0</mn></msub><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo>⋅</mo><mover><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">¯</mo></mover><mo>+</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo>⋅</mo><mover><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msub><mi>μ</mi><mn>0</mn></msub></mrow></mfrac><mi>ℜ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">̃</mo></mover><mo>×</mo><mover><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">̃</mo></mover><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> procede del promedio temporal del producto de dos cosenos; en la energía, además, aparece el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> propio de la densidad, y por eso queda <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></math>. El promedio no depende de las fases absolutas por separado, sino de la diferencia <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>a</mi></msub><mo>−</mo><msub><mi>δ</mi><mi>b</mi></msub></mrow></math>."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Griffiths 9.13",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula los coeficientes de reflexión y de transmisión exactos, sin suponer que <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>. Comprueba que se cumple <math display=\"inline\"><mrow><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la interfase entre dos medios lineales (plano <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>), incide normalmente una onda que se propaga en la dirección <math display=\"inline\"><mi>z</mi></math> y está polarizada en la dirección <math display=\"inline\"><mi>x</mi></math>. Las condiciones de contorno ligan la suma de las ondas incidente, reflejada y transmitida: <math display=\"inline\"><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo></msup></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi mathvariant=\"bold-italic\">𝑩</mi><mo>∥</mo></msup></mrow></math> deben ser continuas en <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math>. De ahí salen las siguientes amplitudes de salida, en función de la amplitud incidente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>R</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>I</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>T</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mover><mi>E</mi><mo accent=\"true\">̃</mo></mover><mrow><mn>0</mn><mi>I</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow><mrow><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El coeficiente de reflexión es el cociente entre la intensidad reflejada y la incidente. Como la intensidad es <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ε</mi><mi>v</mi><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>, y la onda reflejada atraviesa el mismo medio que la incidente,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><msub><mi>I</mi><mi>R</mi></msub><msub><mi>I</mi><mi>I</mi></msub></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>R</mi></mrow></msub><msub><mi>E</mi><mrow><mn>0</mn><mi>I</mi></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el coeficiente de transmisión, en cambio, aparece <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow></math> del segundo medio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><msub><mi>I</mi><mi>T</mi></msub><msub><mi>I</mi><mi>I</mi></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub></mrow><mrow><msub><mi>ε</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>E</mi><mrow><mn>0</mn><mi>T</mi></mrow></msub><msub><mi>E</mi><mrow><mn>0</mn><mi>I</mi></mrow></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>ε</mi><mi>v</mi><mo>=</mo><msqrt><mrow><mi>ε</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math>, resulta <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><msub><mi>v</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><msub><mi>μ</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>2</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mo>=</mo><mi>β</mi></mrow></math>, y por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>β</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sumando ambos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>4</mn><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>β</mi><mo>+</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "como exige la conservación de la energía. En medios no magnéticos (<math display=\"inline\"><mrow><msub><mi>μ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>2</mn></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>), <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><msub><mi>v</mi><mn>1</mn></msub><mi>/</mi><msub><mi>v</mi><mn>2</mn></msub><mo>=</mo><msub><mi>n</mi><mn>2</mn></msub><mi>/</mi><msub><mi>n</mi><mn>1</mn></msub></mrow></math>, y entonces <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>. Por ejemplo, al pasar la luz del aire (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>=</mo><mn>1</mn></mrow></math>) al vidrio (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mn>1.5</mn></mrow></math>), <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.5</mn><mi>/</mi><mn>2.5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0.04</mn></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0.96</mn></mrow></math>: se transmite el 96 % de la luz."
    },
    {
     "mota": "irudia",
     "oina": "Incidencia normal en la interfase de dos medios\nlineales: onda incidente, reflejada y transmitida.\nLos cocientes de amplitudes dependen de <math display=\"inline\"><mi>β</mi></math>.",
     "src": "../media/irudiak/dbd48423cea2d02f.svg",
     "zabalera": 264
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mi>β</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>+</mo><mi>T</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.13 (3.ª edición; en la 4.ª edición lleva el número 9.14). La solución coincide con la del problema 9.14 del manual de soluciones del profesor; el valor <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>0.04</mn></mrow></math> del aire al vidrio es el resultado del texto del libro (en torno a la ecuación 9.88)."
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Griffiths 9.19",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Demuestra que en un mal conductor (<math display=\"inline\"><mrow><mi>σ</mi><mo>≪</mo><mi>ω</mi><mi>ε</mi></mrow></math>) la profundidad pelicular es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>ε</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> (independiente de la frecuencia). Halla la profundidad pelicular del agua pura, en metros. (b) Demuestra que en un buen conductor (<math display=\"inline\"><mrow><mi>σ</mi><mo>≫</mo><mi>ω</mi><mi>ε</mi></mrow></math>) la profundidad pelicular es <math display=\"inline\"><mrow><mi>λ</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math> (siendo <math display=\"inline\"><mi>λ</mi></math> la longitud de onda en el conductor). Halla la profundidad pelicular de un metal típico (<math display=\"inline\"><mrow><mi>σ</mi><mo>≈</mo><msup><mn>10</mn><mn>7</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ω</mi><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>) en nanómetros, en el intervalo visible (<math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><msup><mn>10</mn><mn>15</mn></msup><mi>/</mi><mi>s</mi></mrow></math>), tomando <math display=\"inline\"><mrow><mi>ε</mi><mo>≈</mo><msub><mi>ε</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>μ</mi><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>. ¿Por qué son opacos los metales? (c) Demuestra que en un buen conductor el campo magnético va retrasado 45° respecto del campo eléctrico, y halla el cociente de sus amplitudes."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En un conductor el número de onda es complejo, <math display=\"inline\"><mrow><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover><mo>=</mo><mi>k</mi><mo>+</mo><mi>i</mi><mi>κ</mi></mrow></math>, y la parte imaginaria <math display=\"inline\"><mi>κ</mi></math> produce la atenuación; la profundidad pelicular es <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>κ</mi></mrow></math>, donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>=</mo><mi>ω</mi><msqrt><mfrac><mrow><mi>ε</mi><mi>μ</mi></mrow><mn>2</mn></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>σ</mi><mrow><mi>ε</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(a) Mal conductor.</strong> Si <math display=\"inline\"><mrow><mi>σ</mi><mo>≪</mo><mi>ω</mi><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>σ</mi><mi>/</mi><mi>ε</mi><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>≪</mo><mn>1</mn></mrow></math>, y con el desarrollo de <math display=\"inline\"><mrow><msqrt><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></msqrt><mo>≈</mo><mn>1</mn><mo>+</mo><mi>x</mi><mi>/</mi><mn>2</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>≈</mo><mi>ω</mi><msqrt><mfrac><mrow><mi>ε</mi><mi>μ</mi></mrow><mn>2</mn></mfrac></msqrt><mo>⋅</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><mfrac><mi>σ</mi><mrow><mi>ε</mi><mi>ω</mi></mrow></mfrac><mo>=</mo><mfrac><mi>σ</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>μ</mi><mi>ε</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> beraz </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>σ</mi></mfrac><msqrt><mfrac><mi>ε</mi><mi>μ</mi></mfrac></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "independiente de la frecuencia. Para agua pura (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>80.1</mn><msub><mi>ε</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>≈</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>≈</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msqrt><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8.85</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow></mfrac></msqrt><mo>≈</mo><mn>1.19</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir, casi <math display=\"inline\"><mn>12</mn></math> km: el agua pura es casi transparente para las ondas electromagnéticas."
    },
    {
     "mota": "testua",
     "html": "<strong>(b) Buen conductor.</strong> Si <math display=\"inline\"><mrow><mi>σ</mi><mo>≫</mo><mi>ω</mi><mi>ε</mi></mrow></math>, predomina <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>σ</mi><mi>/</mi><mi>ε</mi><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>≈</mo><mi>κ</mi><mo>≈</mo><msqrt><mrow><mi>ω</mi><mi>μ</mi><mi>σ</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, y como <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>κ</mi><mo>≈</mo><mi>λ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Para un metal típico,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>κ</mi><mo>≈</mo><msqrt><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mn>15</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mn>7</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac></msqrt><mo>≈</mo><mn>8</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mspace width=\"1.0em\"></mspace><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mn>1</mn><mi>κ</mi></mfrac><mo>≈</mo><mn>1.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>13</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los campos casi no penetran en el metal; eso explica la opacidad de los metales."
    },
    {
     "mota": "testua",
     "html": "<strong>(c) Retraso de fase.</strong> Como en un buen conductor <math display=\"inline\"><mrow><mi>k</mi><mo>≈</mo><mi>κ</mi></mrow></math>, la fase de <math display=\"inline\"><mover><mi>k</mi><mo accent=\"true\">̃</mo></mover></math> es <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>κ</mi><mi>/</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir, de 45°: el campo magnético va retrasado 45° respecto del eléctrico. El cociente de las amplitudes es, por su parte,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>B</mi><mn>0</mn></msub><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo>=</mo><msqrt><mrow><mi>ε</mi><mi>μ</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>σ</mi><mrow><mi>ε</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></msqrt><mo>≈</mo><msqrt><mfrac><mrow><mi>σ</mi><mi>μ</mi></mrow><mi>ω</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Atenuación de la onda dentro de un conductor:\nla amplitud decae como <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>z</mi><mi>/</mi><mi>d</mi></mrow></msup></math>, siendo <math display=\"inline\"><mi>d</mi></math> la profundidad pelicular.",
     "src": "../media/irudiak/d0e7e772c96cc2ec.svg",
     "zabalera": 266
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mo>=</mo><mfrac><mn>2</mn><mi>σ</mi></mfrac><msqrt><mfrac><mi>ε</mi><mi>μ</mi></mfrac></msqrt><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (eroale eskasa)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo>=</mo><mfrac><mi>λ</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (eroale ona). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.19 (3.ª edición; en la 4.ª edición lleva el número 9.20). Los valores (<math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>1.19</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> m para el agua, <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>13</mn></mrow></math> nm para el metal) coinciden con los del problema 9.20 del manual de soluciones del profesor."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Griffiths 9.22",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) La velocidad de fase de las olas en aguas profundas es proporcional a la raíz cuadrada de la longitud de onda. Demuestra que la velocidad de fase de esas olas es el doble de la velocidad de grupo."
      },
      {
       "mota": "testua",
       "html": "(b) En mecánica cuántica, una partícula libre de masa <math display=\"inline\"><mi>m</mi></math> que viaja en la dirección <math display=\"inline\"><mi>x</mi></math> se describe así:"
      },
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/ffc68e55a0fee32c.svg\" alt=\"Psi(x,t) = A e^(i(p x - E t)\\/hbar),\" style=\"width:12.035em;height:1.640em\" loading=\"lazy\">"
      },
      {
       "mota": "testua",
       "html": "siendo <math display=\"inline\"><mi>p</mi></math> el momento y <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la energía cinética. Calcula la velocidad de grupo y compárala con la velocidad clásica de la partícula. Observa, además, que la velocidad de fase es la mitad de la velocidad de grupo."
      },
      {
       "mota": "irudia",
       "oina": "Relación de dispersión de las olas en aguas profundas, <math display=\"inline\"><mrow><mi>ω</mi><mo>∝</mo><msqrt><mi>k</mi></msqrt></mrow></math>: la pendiente de la tangente a la curva da la velocidad de grupo, y la pendiente de la recta desde el origen hasta el punto, la velocidad de fase.",
       "src": "../media/irudiak/d6db8255de4796c5.svg",
       "zabalera": 245
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La velocidad de fase es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math> y la velocidad de grupo <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>d</mi><mi>ω</mi><mi>/</mi><mi>d</mi><mi>k</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Olas en aguas profundas.</strong> El enunciado dice que en aguas profundas <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>α</mi><msqrt><mi>λ</mi></msqrt></mrow></math>, siendo <math display=\"inline\"><mi>α</mi></math> una constante. Como <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi><mi>/</mi><mi>k</mi></mrow></msqrt></mrow></math>; como <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>/</mi><mi>k</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi><mo>=</mo><mi>α</mi><mi>k</mi><msqrt><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>k</mi></mfrac></msqrt><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><msqrt><mi>k</mi></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "derivando respecto de <math display=\"inline\"><mi>k</mi></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msqrt><mi>k</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; como la velocidad de fase era <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>α</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><mi>/</mi><msqrt><mi>k</mi></msqrt></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mi>v</mi><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo baliokidean </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mn>2</mn><msub><mi>v</mi><mi>g</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Partícula libre cuántica.</strong> Comparando la onda dada con la forma canónica <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>, como <img class=\"formula\" src=\"../media/formulak/c58319e3ab93f318.svg\" alt=\"e^(i(p x-E t)\\/hbar) = e^(i((p\\/hbar)x - (E\\/hbar)t))\" style=\"width:16.180em;height:1.001em\" loading=\"lazy\">, identificamos <img class=\"formula\" src=\"../media/formulak/6f76365d792eb1a6.svg\" alt=\"k=p\\/hbar\" style=\"width:4.791em;height:1.001em\" loading=\"lazy\"> y <img class=\"formula\" src=\"../media/formulak/baa512d53436ab25.svg\" alt=\"omega=E\\/hbar\" style=\"width:5.220em;height:1.001em\" loading=\"lazy\">. Usando <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <img class=\"formula\" src=\"../media/formulak/bb026a6c0d5f05cb.svg\" alt=\"p=hbar k\" style=\"width:4.213em;height:1.001em\" loading=\"lazy\">,"
    },
    {
     "mota": "testua",
     "html": "<img class=\"formula formula-d\" src=\"../media/formulak/437d845e61a85e66.svg\" alt=\"omega = frac(1,hbar) frac(p^2,2m) = frac(hbar k^2, 2m).\" style=\"width:10.264em;height:3.397em\" loading=\"lazy\">"
    },
    {
     "mota": "testua",
     "html": "La velocidad de fase es <img class=\"formula\" src=\"../media/formulak/82a3cafc543f03af.svg\" alt=\"v = omega\\/k = hbar k\\/(2m) = p\\/(2m)\" style=\"width:15.957em;height:1.001em\" loading=\"lazy\">, y la velocidad de grupo <img class=\"formula\" src=\"../media/formulak/6b1a2d40f0975306.svg\" alt=\"v_g = dif omega\\/dif k = hbar k\\/m = p\\/m\" style=\"width:14.859em;height:1.001em\" loading=\"lazy\">. Como la velocidad clásica de una partícula no relativista cumple <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mtext mathvariant=\"normal\">klas.</mtext></msub></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">klas.</mtext></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>v</mi><mi>g</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Resultado.</strong> Para las olas en aguas profundas, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>2</mn><msub><mi>v</mi><mi>g</mi></msub></mrow></math>; para la partícula libre cuántica no relativista, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>p</mi><mi>/</mi><mi>m</mi><mo>=</mo><msub><mi>v</mi><mtext mathvariant=\"normal\">klas.</mtext></msub></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><msub><mi>v</mi><mi>g</mi></msub><mi>/</mi><mn>2</mn></mrow></math>. La velocidad física asociada al desplazamiento del paquete de ondas es la velocidad de grupo, no la de fase."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Griffiths 9.28",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considera una guía de ondas rectangular de dimensiones <math display=\"inline\"><mn>2.28</mn></math> cm <math display=\"inline\"><mi>×</mi></math> <math display=\"inline\"><mn>1.01</mn></math> cm. ¿Qué modos TE se propagarán en esta guía si la frecuencia de excitación es <math display=\"inline\"><mrow><mn>1.70</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> Hz? Si quisieras excitar un único modo TE, ¿qué intervalo de frecuencias podrías usar? ¿Cuáles son las longitudes de onda correspondientes en el espacio libre?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En una guía de ondas rectangular (lado mayor <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2.28</mn></mrow></math> cm, lado menor <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>1.01</mn></mrow></math> cm), la frecuencia de corte del modo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mrow><mi>m</mi><mi>n</mi></mrow></msub></math> es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mfrac><msub><mi>ω</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A frecuencias inferiores a la de corte el número de onda es imaginario y el campo se extingue exponencialmente; el modo no se propaga. Las frecuencias de corte de los modos más bajos (en Hz):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mn>10</mn></msub><mo>=</mo><mfrac><mi>c</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>=</mo><mn>0.66</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>20</mn></msub><mo>=</mo><mfrac><mi>c</mi><mi>a</mi></mfrac><mo>=</mo><mn>1.32</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>01</mn></msub><mo>=</mo><mfrac><mi>c</mi><mrow><mn>2</mn><mi>b</mi></mrow></mfrac><mo>=</mo><mn>1.49</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mn>11</mn></msub><mo>=</mo><mn>1.62</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>30</mn></msub><mo>=</mo><mn>1.97</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>02</mn></msub><mo>=</mo><mn>2.97</mn><mo>×</mo><msup><mn>10</mn><mrow><mn>10</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo la frecuencia de excitación <math display=\"inline\"><mrow><mn>1.70</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> Hz, se propagan los modos cuya frecuencia de corte está por debajo de ella: <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math>, <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>20</mn></msub></math>, <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>01</mn></msub></math> y <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>11</mn></msub></math> (cuatro modos). <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>30</mn></msub></math> y <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>02</mn></msub></math> quedan cortados."
    },
    {
     "mota": "testua",
     "html": "Para tener un único modo (solo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math>), la frecuencia de excitación debe estar entre <math display=\"inline\"><msub><mi>ν</mi><mn>10</mn></msub></math> y la siguiente frecuencia de corte (<math display=\"inline\"><msub><mi>ν</mi><mn>20</mn></msub></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0.66</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>&lt;</mo><mi>ν</mi><mo>&lt;</mo><mn>1.32</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las longitudes de onda en el espacio libre (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>c</mi><mi>/</mi><mi>ν</mi></mrow></math>) correspondientes a ese intervalo son: <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ν</mi><mn>10</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>a</mi><mo>=</mo><mn>4.56</mn></mrow></math> cm y <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ν</mi><mn>20</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>=</mo><mn>2.28</mn></mrow></math> cm, es decir,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2.28</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>&lt;</mo><mi>λ</mi><mo>&lt;</mo><mn>4.56</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Sección transversal de la guía de ondas rectangular y\npatrón de campo del modo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mn>10</mn></msub></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∝</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "../media/irudiak/bc092aafbe7968cb.svg",
     "zabalera": 300
    },
    {
     "mota": "irudia",
     "oina": "Relación de dispersión de la guía de ondas: por debajo de la\nfrecuencia de corte <math display=\"inline\"><msub><mi>ω</mi><mi>c</mi></msub></math> no hay propagación; por encima, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>ω</mi><mi>c</mi><mn>2</mn></msubsup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>k</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mrow></math> se aproxima a la recta de la luz.",
     "src": "../media/irudiak/841cb810f8cfb10a.svg",
     "zabalera": 257
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub><mo>=</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>n</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> TE</mtext></mrow><mn>10</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakarra: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>2.28</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>&lt;</mo><mi>λ</mi><mo>&lt;</mo><mn>4.56</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths 9.28 (3.ª edición; en la 4.ª edición lleva el número 9.29). Los cuatro modos (<math display=\"inline\"><mrow><mn>10</mn><mo>,</mo><mn>20</mn><mo>,</mo><mn>01</mn><mo>,</mo><mn>11</mn></mrow></math>) y el intervalo de modo único coinciden con los del problema 9.29 del manual de soluciones del profesor."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ejercicios propuestos",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes son problemas del capítulo 9 del libro de Griffiths (numeración de la 3.ª edición), propuestos sin resolver. Tratan la polarización, la dispersión y las guías de ondas, como complemento de los temas de este capítulo. Equivalentes en la 4.ª edición: <math display=\"inline\"><mrow><mn>9.14</mn><mo>→</mo><mn>9.15</mn></mrow></math>, <math display=\"inline\"><mrow><mn>9.24</mn><mo>→</mo><mn>9.25</mn></mrow></math>, <math display=\"inline\"><mrow><mn>9.29</mn><mo>→</mo><mn>9.30</mn></mrow></math>, <math display=\"inline\"><mrow><mn>9.30</mn><mo>→</mo><mn>9.31</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.14 (polarización).</strong> Al escribir la onda reflejada y la transmitida, se ha aceptado tácitamente que tienen la misma polarización que la incidente (ambas en la dirección <math display=\"inline\"><mi>x</mi></math>). Demuestra que así debe ser. Pista: toma como vectores de polarización de la transmitida y de la reflejada <math display=\"inline\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mi>T</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>T</mi></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mi>R</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>R</mi></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mi>R</mi></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y demuestra a partir de las condiciones de contorno que <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>T</mi></msub><mo>=</mo><msub><mi>θ</mi><mi>R</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.24 (dispersión).</strong> Halla la anchura de la región de dispersión anómala, en el caso de una única resonancia de frecuencia <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>. Admite que <math display=\"inline\"><mrow><mi>γ</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>. Demuestra que el índice de refracción toma sus valores máximo y mínimo en los puntos en los que el coeficiente de absorción está en su semimáximo."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.29 (guías de ondas).</strong> Comprueba que la energía del modo <math display=\"inline\"><msub><mtext mathvariant=\"normal\">TE</mtext><mrow><mi>m</mi><mi>n</mi></mrow></msub></math> viaja con la velocidad de grupo. Pista: halla el vector de Poynting medio en el tiempo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y la densidad de energía <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; intégralos sobre la sección transversal de la guía, para obtener la energía por unidad de tiempo y de longitud, y toma su cociente."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Griffiths 9.30 (guías de ondas).</strong> Desarrolla la teoría de los modos TM para una guía de ondas rectangular. En particular, halla el campo eléctrico longitudinal, las frecuencias de corte y las velocidades de fase y de grupo. Halla el cociente entre la menor frecuencia de corte TM y la menor frecuencia de corte TE. Cuidado: ¿cuál es el modo TM más bajo?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Este capítulo desarrolla las ondas electromagnéticas —la ecuación de ondas, las ondas planas en el vacío, la propagación en la materia, la reflexión y la transmisión, y la absorción en los conductores— con dibujos originales en CeTZ, traducido al euskera para JAKINA. </em>"
    }
   ]
  },
  {
   "id": "a17",
   "maila": 1,
   "izenburua": "Potenciales y campos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En los capítulos 2 y 5 se introdujeron el potencial escalar <math display=\"inline\"><mi>V</mi></math> y el potencial vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> como atajos cómodos para problemas estáticos. Este capítulo los convierte en las variables <strong>fundamentales</strong> de la electrodinámica: el lenguaje natural para fuentes que dependen del tiempo, y el camino para entender cómo los campos se propagan hacia fuera desde cargas aceleradas con velocidad finita <math display=\"inline\"><mi>c</mi></math>."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Formulación potencial",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potencial escalar y potencial vector"
    },
    {
     "mota": "testua",
     "html": "La pregunta de este capítulo es esta: cómo generan las fuentes (<math display=\"inline\"><mi>ρ</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math>) los campos, es decir, cuál es la solución <strong>general</strong> de las ecuaciones de Maxwell:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>ρ</mi><mi>/</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mrow><mtext mathvariant=\"normal\">(ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iv) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Dados <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ¿cuáles son <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? En el caso estático responden las leyes de Coulomb y de Biot–Savart; aquí buscamos la generalización de esas leyes con dependencia del tiempo. Conviene expresar los campos mediante los potenciales."
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> se cumple siempre (capítulo 5), <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> puede escribirse siempre como un rotacional; sustituyéndolo en la ley de Faraday (capítulo 7), se ve entonces que <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>+</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> es irrotacional y, por tanto, derivable de un potencial escalar:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potenciales generales",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estas dos definiciones satisfacen automáticamente las dos ecuaciones de Maxwell sin fuentes (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> y la ley de Faraday); sustituyéndolas en las dos ecuaciones con fuentes (ley de Gauss y Ampère–Maxwell), se obtiene un par de ecuaciones acopladas para <math display=\"inline\"><mi>V</mi></math> y para <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>, en función de <math display=\"inline\"><mi>ρ</mi></math> y de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Haciendo explícitas esas sustituciones, se ve el acoplamiento. Introduciendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> en la ley de Gauss,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mi>ρ</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que sustituye a la ecuación de Poisson (a la que se reduce en el caso estático). Sustituyendo en la ley de Ampère–Maxwell, y usando la identidad <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∇</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas dos ecuaciones acopladas contienen toda la información de las ecuaciones de Maxwell: hemos reducido seis componentes (tres de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>, tres de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>) a cuatro magnitudes —<math display=\"inline\"><mi>V</mi></math> y las tres componentes de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>—."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 10.1 — Fuentes a partir de los potenciales"
    },
    {
     "mota": "testua",
     "html": "Como primera prueba de la formulación potencial, haremos el camino inverso: dados los <strong>potenciales</strong>, hallar qué fuentes <math display=\"inline\"><mi>ρ</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> generan. Tomemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>c</mi><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn mathvariant=\"bold\">𝟎</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>c</mi><mi>t</mi></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>k</mi></math> es una constante y <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><msub><mi>ϵ</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Una lámina de corriente de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> se enciende en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>; los campos son no nulos solo en la región <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>c</mi><mi>t</mi></mrow></math>: la &quot;noticia&quot; se propaga con velocidad <math display=\"inline\"><mi>c</mi></math> en ambos sentidos.",
     "src": "../media/irudiak/76b6d2052cc11249.svg",
     "zabalera": 311
    },
    {
     "mota": "testua",
     "html": "Calculemos primero los campos. El campo eléctrico procede únicamente de la derivada temporal (pues <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El campo magnético es el rotacional de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>; como <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> depende solo de <math display=\"inline\"><mi>x</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><msub><mi>A</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>±</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(signo <math display=\"inline\"><mi>+</mi></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, signo <math display=\"inline\"><mi>−</mi></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>). Ambos valen en la región <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>c</mi><mi>t</mi></mrow></math>; si <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>c</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Calculando todas las derivadas a la vista,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>∓</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>±</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "Las cuatro ecuaciones de Maxwell se cumplen con <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> en el vacío; por ejemplo, la de Ampère–Maxwell exige <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> se comprueba (porque <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Sin embargo, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> presenta una discontinuidad en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>: allí <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mn>0</mn><mo>+</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mn>0</mn><mo>−</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Esa discontinuidad indica que en el plano <math display=\"inline\"><mrow><mi>y</mi><mi>z</mi></mrow></math> hay una corriente superficial <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑲</mi></math>; la condición de contorno del capítulo 7 (<math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">goi </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">behe </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑲</mi><mo>×</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>) da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑲</mi><mo>=</mo><mi>k</mi><mi>t</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es una corriente superficial uniforme en la dirección <math display=\"inline\"><mi>z</mi></math>, que se enciende en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> y crece proporcionalmente a <math display=\"inline\"><mi>t</mi></math>. La noticia (la corriente ya circula) se propaga a la velocidad de la luz en ambos sentidos: a los puntos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>c</mi><mi>t</mi></mrow></math> todavía no ha llegado, y allí los campos son nulos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transformaciones gauge"
    },
    {
     "mota": "testua",
     "html": "Los potenciales no son únicos: la sustitución"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Transformación gauge",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo>→</mo><mi>V</mi><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>λ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo>→</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><mi>∇</mi><mi>λ</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "—para <strong>cualquier</strong> función escalar <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>— deja <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> totalmente inalterados."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esa libertad —la <strong>libertad gauge</strong>— no es un inconveniente, sino una auténtica herramienta de simplificación: una elección adecuada de <math display=\"inline\"><mi>λ</mi></math> puede desacoplar las ecuaciones de <math display=\"inline\"><mi>V</mi></math> y de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Gauge de Coulomb y gauge de Lorenz"
    },
    {
     "mota": "testua",
     "html": "En la práctica destacan dos elecciones. El <strong>gauge de Coulomb</strong>, <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>, implica que <math display=\"inline\"><mi>V</mi></math> cumple la ecuación de Poisson ordinaria <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>=</mo><mi>−</mi><mi>ρ</mi><mi>/</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math> de forma instantánea (como en electrostática): cómodo, pero con un coste: la ecuación de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> queda acoplada a <math display=\"inline\"><mi>V</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Una peculiaridad del gauge de Coulomb: el potencial <math display=\"inline\"><mi>V</mi></math> lo determina de inmediato la distribución de carga <strong>actual</strong>, reflejando los cambios lejanos en el mismo instante. Eso no viola la relatividad, porque <math display=\"inline\"><mi>V</mi></math> por sí mismo no es una magnitud medible; el <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> medible incluye también la contribución de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>, y es esa combinación la que se retrasa, hasta que transcurre el tiempo necesario para que llegue la &quot;noticia&quot;."
    },
    {
     "mota": "testua",
     "html": "El <strong>gauge de Lorenz</strong> es más natural para los problemas de radiación:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Condición del gauge de Lorenz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En este gauge, <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> quedan totalmente desacoplados, cumpliendo cada uno su propia ecuación de ondas inhomogénea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potenciales en el gauge de Lorenz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>ρ</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "—la generalización exacta de la ecuación de Poisson con dependencia del tiempo, con el <strong>operador de ondas</strong> en lugar del laplaciano. El límite estático (suprimiendo las derivadas temporales) recupera exactamente los capítulos 2 y 5."
    },
    {
     "mota": "testua",
     "html": "Las dos ecuaciones de ondas tienen el mismo operador diferencial, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><msup><mi>∂</mi><mn>2</mn></msup><mi>/</mi><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>, llamado <strong>operador de d&#x27;Alembert</strong>: la generalización cuatridimensional del laplaciano. Con él, ambas quedan en una forma compacta y simétrica, y el gauge de Lorenz trata <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> en pie de igualdad: toda la electrodinámica se reduce a resolver la ecuación de ondas inhomogénea para fuentes dadas. De eso se ocupa el apartado siguiente."
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Distribuciones continuas",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potenciales retardados"
    },
    {
     "mota": "testua",
     "html": "La solución de las ecuaciones de ondas en el gauge de Lorenz es una generalización directa de las fórmulas integrales electrostáticas y magnetostáticas, con un único cambio esencial: la fuente no debe evaluarse en el instante presente <math display=\"inline\"><mi>t</mi></math>, sino en el <strong>tiempo retardado</strong> anterior —<math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>, descontando el tiempo que tarda la luz en viajar desde la fuente hasta el punto del campo—."
    },
    {
     "mota": "irudia",
     "oina": "Una señal que sale de la fuente en el tiempo retardado <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> llega al punto del campo solo tras el retraso del viaje de la luz <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>; por tanto, el campo &quot;actual&quot; depende de la fuente &quot;de entonces&quot;.",
     "src": "../media/irudiak/c64c13f35d946fd3.svg",
     "zabalera": 291
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potenciales retardados",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Todas las fórmulas de los capítulos 2 y 5 se recuperan en el límite estático, donde <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> no importa, porque nada cambia con el tiempo."
    },
    {
     "mota": "testua",
     "html": "Estas fórmulas son <strong>razonables</strong>, pero todavía no las hemos demostrado: las hemos obtenido con un argumento heurístico, &quot;la noticia viaja a la velocidad de la luz&quot;. Para demostrarlas hay que probar que satisfacen la ecuación de ondas inhomogénea y la condición de Lorenz. Cuidado, sin embargo: si el mismo argumento se aplica directamente a los <strong>campos</strong>, el resultado es <strong>erróneo</strong> —"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mi>—</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "porque los campos retardados tienen términos adicionales (ecuaciones de Jefimenko, más abajo)."
    },
    {
     "mota": "testua",
     "html": "Para calcular el laplaciano de <math display=\"inline\"><mi>V</mi></math>, la clave es esta: el integrando depende de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> en <strong>dos</strong> lugares: explícitamente, en el denominador (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>), e implícitamente, en el numerador <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>. Por tanto, el gradiente"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>+</mo><mi>ρ</mi><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El gradiente de <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aparece solo a través de <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mi>ρ</mi><mo>=</mo><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mi>∇</mi><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mi>∇</mi><mi mathvariant=\"script\">𝓇</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y sustituyendo eso,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mi>c</mi></mfrac><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>−</mo><mi>ρ</mi><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando la divergencia y usando los resultados <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>4</mn><mi>π</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mover><mi>ρ</mi><mo accent=\"true\">̈</mo></mover><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>−</mo><mn>4</mn><mi>π</mi><mi>ρ</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es, precisamente,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>ρ</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "la ecuación de ondas inhomogénea (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math>). El mismo argumento vale para <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>. Además, a partir de la ecuación de continuidad de la conservación de la carga, puede comprobarse que los potenciales retardados también cumplen la condición de Lorenz. Por tanto, los potenciales retardados son una verdadera solución de las ecuaciones de Maxwell."
    },
    {
     "mota": "testua",
     "html": "Ese argumento se aplica exactamente igual a los <strong>potenciales avanzados</strong> —los que evalúan las fuentes en el tiempo <strong>avanzado</strong> <math display=\"inline\"><mrow><msub><mi>t</mi><mi>a</mi></msub><mo>=</mo><mi>t</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>—, que son perfectamente compatibles con las ecuaciones de Maxwell pero violan la <strong>causalidad</strong>: pondrían el efecto antes que la causa. Físicamente, elegimos los retardados, admitiendo que las influencias electromagnéticas se propagan hacia adelante en el tiempo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: una carga encendida de repente"
    },
    {
     "mota": "testua",
     "html": "Una carga puntual <math display=\"inline\"><mi>q</mi></math> aparece en el origen en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> (una idealización: ninguna carga antes, <math display=\"inline\"><mi>q</mi></math> constante después) y permanece allí. En un punto del campo a distancia <math display=\"inline\"><mi>r</mi></math>, el instante correspondiente al tiempo retardado que tarda en llegar una señal emitida en <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><mi>r</mi><mi>c</mi></mfrac></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Campo de una carga que aparece de repente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&lt;</mo><mfrac><mi>r</mi><mi>c</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mfrac><mi>r</mi><mi>c</mi></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El potencial —y el campo— se enciende de repente en cada punto, en el instante exacto en que llega allí la &quot;noticia&quot; de la aparición de la carga, que viaja hacia fuera con velocidad <math display=\"inline\"><mi>c</mi></math>. Ninguna información sobre la carga se propaga más deprisa que la luz; este ejemplo sencillo hace explícito ese límite."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 10.2 — Hilo infinito encendido de repente"
    },
    {
     "mota": "testua",
     "html": "Consideremos ahora un ejemplo completo de fuente continua. Un hilo recto infinito lleva esta corriente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>≤</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>I</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, una corriente constante <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> se enciende de repente en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>. Halla los campos eléctrico y magnético resultantes."
    },
    {
     "mota": "irudia",
     "oina": "Hilo infinito en el eje <math display=\"inline\"><mi>z</mi></math>; el punto del campo <math display=\"inline\"><mi>P</mi></math> está a distancia <math display=\"inline\"><mi>s</mi></math>. Cuando <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math>, solo contribuye la parte <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>: la señal exterior todavía no ha llegado.",
     "src": "../media/irudiak/b5b8b5eac69bfa25.svg",
     "zabalera": 260
    },
    {
     "mota": "testua",
     "html": "Como el hilo es eléctricamente neutro, el potencial escalar es nulo (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>). Tomemos el hilo en el eje <math display=\"inline\"><mi>z</mi></math>; el potencial vector retardado en el punto <math display=\"inline\"><mi>P</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math>, la &quot;noticia&quot; todavía no ha llegado a <math display=\"inline\"><mi>P</mi></math> y el potencial es nulo. Si <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math>, solo contribuye la parte <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (fuera, <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>&lt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>); por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mi>t</mi><mo>+</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>s</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mtd></mtr></mtable></math>"
    },
    {
     "mota": "testua",
     "html": "El campo eléctrico procede de la derivada temporal:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>π</mi><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El campo magnético, del rotacional de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mi>∂</mi><msub><mi>A</mi><mi>z</mi></msub><mi>/</mi><mi>∂</mi><mi>s</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi><mi>s</mi></mrow></mfrac><mfrac><mrow><mi>c</mi><mi>t</mi></mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el límite <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> se recupera el caso estático: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>→</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>I</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mi>π</mi><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, el conocido campo magnético de un hilo infinito."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de Jefimenko"
    },
    {
     "mota": "testua",
     "html": "Derivando directamente los potenciales retardados se obtienen <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> sin pasos intermedios por los potenciales: la generalización completa, con dependencia del tiempo, de la ley de Coulomb y de la ley de Biot–Savart:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Ecuaciones de Jefimenko",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mfrac><mrow><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>c</mi><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>c</mi><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi>ρ</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑱</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> están evaluadas en el tiempo retardado. El primer término de cada ecuación es, precisamente, la ley de Coulomb o la de Biot–Savart, evaluada en <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>; los términos adicionales —los que contienen la <strong>velocidad de cambio</strong> de la fuente— son, en última instancia, los que producen la radiación (capítulo 11)."
    },
    {
     "mota": "testua",
     "html": "Estas ecuaciones se deducen directamente de los potenciales retardados. Tomando <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>: <math display=\"inline\"><mrow><mi>∇</mi><mi>V</mi></mrow></math> ya lo hemos calculado antes, y <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math> es inmediato; sumándolos (<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></math>), se obtiene el <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> de arriba. El rotacional de <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math> tiene dos términos, y usando <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, sale el <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> de arriba. En la práctica, sin embargo, es más fácil calcular los potenciales retardados y derivar después que recurrir directamente a las ecuaciones de Jefimenko; O. Jefimenko las publicó por primera vez en 1966."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: recuperar el límite estático"
    },
    {
     "mota": "testua",
     "html": "Como prueba de coherencia, las ecuaciones de Jefimenko deben reducirse a las conocidas fórmulas estáticas de los capítulos 2 y 5 siempre que <math display=\"inline\"><mi>ρ</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> sean constantes en el tiempo."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>ρ</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> no dependen del tiempo, entonces <math display=\"inline\"><mrow><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> son idénticamente nulas: todos los términos de las ecuaciones de Jefimenko, salvo el primero de cada una, desaparecen. Lo que queda es esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>×</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "—la ley de Coulomb (capítulo 2) y la ley de Biot–Savart (capítulo 5), exactamente, sin referencia alguna a <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> (como nada cambia, <strong>cuándo</strong> salió la señal de la fuente carece de importancia para cuando llega). Es, justamente, el modelo general prometido al comienzo de este capítulo: toda la teoría estática de los capítulos 2 a 6 es un caso <math display=\"inline\"><mrow><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> particular de la maquinaria aquí desarrollada."
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Cargas puntuales",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potenciales de Liénard–Wiechert"
    },
    {
     "mota": "testua",
     "html": "Para una única carga puntual <math display=\"inline\"><mi>q</mi></math> que se mueve a lo largo de una trayectoria dada <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la integral del potencial retardado colapsa en una forma cerrada (gracias a la fuente con función delta):"
    },
    {
     "mota": "irudia",
     "oina": "Para una carga en movimiento, el campo en <math display=\"inline\"><mi>P</mi></math> depende de la posición y de la velocidad <strong>retardadas</strong> de la carga, no de su posición actual, que un punto del campo no puede &quot;conocer&quot; todavía respetando la velocidad de la luz.",
     "src": "../media/irudiak/7c450efe0ae83da4.svg",
     "zabalera": 241
    },
    {
     "mota": "testua",
     "html": "Merece la pena ver de dónde viene este resultado, porque el denominador tiene un aspecto extraño. Un ingenuo podría pensar que el potencial retardado de una carga puntual es simplemente <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, siendo <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> la distancia a la posición retardada. Pero eso es <strong>erróneo</strong>, por una razón sutil: aunque en una fuente puntual <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> puede sacarse fuera de la integral, la integral <math display=\"inline\"><mrow><mo>∫</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math> que queda <strong>no</strong> es igual al valor de la carga. El retardo nos obliga a evaluar las distintas partes de la configuración <math display=\"inline\"><mi>ρ</mi></math> en <strong>tiempos distintos</strong>, y si la fuente se mueve, eso da una imagen distorsionada de la carga total."
    },
    {
     "mota": "testua",
     "html": "El efecto es puramente geométrico. Un tren que viene hacia ti parece más largo de lo que es, porque la luz que recibes del último vagón salió antes de la locomotora, en comparación con la que recibes de esta al mismo tiempo, y en ese momento el tren estaba más lejos. El mismo cálculo muestra que, cuando la velocidad de la fuente forma un ángulo <math display=\"inline\"><mi>θ</mi></math> con la visual, el volumen aparente aumenta en un factor:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi>q</mi><mrow><mn>1</mn><mo>−</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>c</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> es la velocidad de la carga en el tiempo retardado. Este factor de corrección no hace referencia al tamaño de la carga y, por tanto, es válido también para una carga puntual. En consecuencia,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El potencial vector viene enseguida: como la densidad de corriente de un objeto rígido es <math display=\"inline\"><mrow><mi>ρ</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>∫</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Potenciales de Liénard–Wiechert",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> se evalúan en el tiempo retardado <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El factor <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> del denominador —en lugar de <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> simplemente, como en la fórmula estática de Coulomb— es un auténtico efecto relativista: la contribución de una fuente en movimiento al potencial está ponderada según la velocidad con que, en el tiempo retardado, se aproxima o se aleja; un efecto sin ningún análogo estático."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 10.3 — Potenciales de una carga con velocidad constante"
    },
    {
     "mota": "testua",
     "html": "Consideremos una carga que se mueve con velocidad constante <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> y pasa por el origen en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math>. Halla sus potenciales."
    },
    {
     "mota": "testua",
     "html": "El tiempo retardado sale de la condición <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Elevando al cuadrado,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>t</mi><mi>r</mi></msub><mo>+</mo><msup><mi>v</mi><mn>2</mn></msup><msubsup><mi>t</mi><mi>r</mi><mn>2</mn></msubsup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>t</mi><msub><mi>t</mi><mi>r</mi></msub><mo>+</mo><msubsup><mi>t</mi><mi>r</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Una ecuación de segundo grado para <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>. Resolviéndola,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(el límite <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> exige <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math>, de modo que elegimos el signo negativo). De ahí, usando <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, el denominador se reduce a la forma cerrada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así, los potenciales de Liénard–Wiechert, explícitamente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>V</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El radical puede escribirse de forma más compacta, introduciendo el vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> para la posición <strong>actual</strong> y el ángulo <math display=\"inline\"><mi>θ</mi></math> entre <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>: es <math display=\"inline\"><mrow><mi>R</mi><mi>c</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, y entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><mrow><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campos de una carga puntual en movimiento"
    },
    {
     "mota": "testua",
     "html": "Derivando los potenciales de Liénard–Wiechert (un cálculo largo, pero puramente mecánico), el <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> que se obtiene se divide en dos partes diferenciadas por su estructura:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Campos de una carga puntual en movimiento",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (abiadura-eremua) </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (azelerazio-eremua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El campo de velocidad decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> (un campo de Coulomb generalizado, presente incluso con velocidad uniforme); el campo de aceleración decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math>, y está presente <strong>únicamente</strong> cuando la carga acelera."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este esquema puede hacerse explícito. El cálculo es largo —hay que tomar el gradiente y la derivada temporal de los potenciales de Liénard–Wiechert, donde <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> dependen ambos de <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>, y el propio <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> depende de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> y de <math display=\"inline\"><mi>t</mi></math>—, pero el resultado es elegante. Introduciendo el vector auxiliar <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≡</mo><mi>c</mi><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>, el campo eléctrico es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> es la aceleración de la carga en el tiempo retardado, y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi mathvariant=\"script\">𝓇</mi><mi>c</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. El campo magnético, por su parte, resulta ser siempre perpendicular a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y a <math display=\"inline\"><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El primer término —el que lleva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>— decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> y no depende de la aceleración: es el <strong>campo de velocidad</strong>, y haciendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> se reduce al resultado de Coulomb <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math> de la electrostática. El segundo término —el que lleva <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>— decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> y es proporcional a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>: es el <strong>campo de aceleración</strong> o <strong>campo de radiación</strong>. Estos campos, junto con la ley de fuerza de Lorentz, contienen toda la electrodinámica clásica: determinan por completo la fuerza que una carga ejerce sobre otra."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> es enteramente el campo de aceleración, tema del capítulo 11: como decae más lentamente que <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math>, domina a grandes distancias y transporta energía hasta el infinito; eso es la <strong>radiación</strong>, que existe si y solo si la carga fuente acelera."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 10.4 — Campos de una carga con velocidad uniforme"
    },
    {
     "mota": "testua",
     "html": "Para una carga que se mueve con velocidad <strong>constante</strong> <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> (sin aceleración), solo subsiste el campo de velocidad, y desarrollando explícitamente los potenciales de Liénard–Wiechert se obtiene una forma cerrada en función de la posición <strong>actual</strong> de la carga (no de la posición retardada; ambas coinciden, en un sentido adecuado, justamente porque el movimiento es uniforme):"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> en la fórmula general,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒖</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En este caso, como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mi mathvariant=\"script\">𝓇</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>c</mi><mi mathvariant=\"bold-italic\">𝑹</mi></mrow></math>, siendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> el vector desde la posición <strong>actual</strong> de la carga hasta el punto del campo. Del ejemplo 10.3 sabemos también que <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>R</mi><mi>c</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. Juntándolo todo, las potencias de <math display=\"inline\"><mi>c</mi></math> se cancelan, y el resultado se expresa únicamente mediante la posición <strong>actual</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Campo de una carga con velocidad uniforme",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mi>v</mi><mi>c</mi></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> y la recta que va de la posición <strong>actual</strong> de la carga al punto del campo."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "(La distancia que aparece en la fórmula es, por tanto, la distancia a la posición <strong>actual</strong> de la carga, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>, no a la retardada; aunque el &quot;mensaje&quot; venga de la posición retardada, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> señala la dirección de la posición actual, por una coincidencia sorprendente.)"
    },
    {
     "mota": "testua",
     "html": "Dos regímenes son ilustrativos. Cuando <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> (<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>), esto se reduce al campo de Coulomb isótropo corriente, como cabía esperar. Cuando <math display=\"inline\"><mi>v</mi></math> se aproxima a <math display=\"inline\"><mi>c</mi></math>, el campo se comprime con fuerza en el plano perpendicular a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> (<math display=\"inline\"><mrow><mi>θ</mi><mo>≈</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) y, por consiguiente, queda débil en la dirección del movimiento: un patrón de campo en forma de &quot;crepe&quot;, un avance directo, puramente clásico, de la contracción relativista de la longitud que se desarrollará formalmente en el capítulo 12."
    },
    {
     "mota": "testua",
     "html": "El campo magnético procede de la fórmula <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>. Como <math display=\"inline\"><mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mi>/</mi><mi mathvariant=\"script\">𝓇</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>/</mi><mi>c</mi></mrow></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> es paralelo a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las líneas de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> giran alrededor de la carga, en circunferencias. Oliver Heaviside obtuvo por primera vez, en 1888, estos campos de una carga con velocidad constante. Cuando <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, se reducen a las aproximaciones habituales: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ϵ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (Coulomb) y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (la ley de &quot;Biot–Savart&quot; de una carga puntual)."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Ejercicios resueltos (del manual de Griffiths)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes son problemas del libro <strong>Introduction to Electrodynamics</strong> de Griffiths (capítulo 10, potenciales y campos), con la solución del manual del profesor, traducidos al euskera para JAKINA."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Griffiths 10.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que las ecuaciones diferenciales de los potenciales <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> pueden escribirse en una forma más simétrica: <math display=\"block\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>▫</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><mi>∇</mi><mi>L</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mo>≡</mo><msup><mi>∇</mi><mn>2</mn></msup><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> (operador de d&#x27;Alembert) y <math display=\"inline\"><mrow><mi>L</mi><mo>≡</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la formulación potencial, la ley de Gauss da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el lado izquierdo sumamos y restamos el término <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∇</mi><mn>2</mn></msup><mi>V</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>V</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El primer paréntesis es <math display=\"inline\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi>V</mi></mrow></math>; el segundo es <math display=\"inline\"><mi>L</mi></math>, de modo que el segundo término es <math display=\"inline\"><mrow><mi>∂</mi><mi>L</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi>V</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>L</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mi>ρ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ley de Ampère–Maxwell, usando la identidad <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>∇</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>∇</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da, es decir, directamente"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>▫</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>−</mo><mi>∇</mi><mi>L</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><mi mathvariant=\"bold-italic\">𝑱</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las dos ecuaciones llevan toda la información de Maxwell, y ponen <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> en pie de igualdad: en el gauge de Lorenz (<math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>0</mn></mrow></math>) ambas se convierten en ecuaciones de ondas inhomogéneas con fuentes."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), p. 210, ejercicio 10.1; el número es el mismo en la 3.ª edición."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Griffiths 10.2",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Respecto de la configuración del ejemplo 10.1, considera una caja rectangular de longitud <math display=\"inline\"><mi>l</mi></math>, anchura <math display=\"inline\"><mi>w</mi></math> y altura <math display=\"inline\"><mi>h</mi></math>, a distancia <math display=\"inline\"><mi>d</mi></math> del plano <math display=\"inline\"><mrow><mi>y</mi><mi>z</mi></mrow></math>, es decir, entre <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(a) Halla la energía contenida en la caja en los instantes <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>c</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>c</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(b) Halla el vector de Poynting y determina la energía por unidad de tiempo que entra en la caja en el intervalo <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "(c) Integra el resultado de (b) entre <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> y comprueba que coincide con el incremento de energía de (a)."
      },
      {
       "mota": "irudia",
       "oina": "Lámina de corriente en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y caja a distancia <math display=\"inline\"><mi>d</mi></math>;\n  el frente de onda <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math> se propaga hacia la derecha\n  con velocidad <math display=\"inline\"><mi>c</mi></math>.",
       "src": "../media/irudiak/8d866a26743b67dd.svg",
       "zabalera": 213
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el semiespacio <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, tras la llegada de la perturbación, los campos del ejemplo 10.1"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>c</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "son. Si <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>c</mi><mi>t</mi></mrow></math>, la noticia de la lámina de corriente todavía no ha llegado, y los campos son nulos. Como <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>c</mi></mrow></math>, la densidad de energía"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><msup><mi>B</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Energía en la caja.</strong>  En <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>c</mi></mrow></math> la señal acaba de llegar a la cara inferior <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math>; en la caja todavía no hay volumen con campo, luego <math display=\"inline\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. En <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>c</mi></mrow></math> la señal acaba de llegar a la cara superior <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi></mrow></math>; toda la caja está llena de campo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>l</mi><mi>w</mi><msubsup><mo>∫</mo><mi>d</mi><mrow><mi>d</mi><mo>+</mo><mi>h</mi></mrow></msubsup><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con el cambio de variable <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo>−</mo><mi>x</mi></mrow></math>, usando <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>h</mi></msubsup><msubsup><mi>u</mi><mi>x</mi><mn>2</mn></msubsup><mi>d</mi><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><msup><mi>h</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></math>. El incremento de energía"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>=</mo><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>W</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Flujo de Poynting.</strong>  Es <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math>; como <math display=\"inline\"><mi>E</mi></math> está en <math display=\"inline\"><mrow><mi>−</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mi>B</mi></math> en <math display=\"inline\"><mrow><mi>+</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, el flujo va en <math display=\"inline\"><mrow><mi>+</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, alejándose del plano de corriente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el intervalo <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>, la señal ya ha atravesado la cara <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi></mrow></math> pero todavía no ha salido por <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>d</mi><mo>+</mo><mi>h</mi></mrow></math>; por tanto, la entrada neta viene solo de la cara inferior:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">sartu</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>S</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>l</mi><mi>w</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>d</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Comprobación integral.</strong>  Integrando de <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>c</mi></mrow></math> a <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>c</mi></mrow></math>, con el cambio de variable <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mi>c</mi><mi>t</mi><mo>−</mo><mi>d</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mrow><mtext mathvariant=\"normal\">sartu </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>h</mi></msubsup><msup><mi>q</mi><mn>2</mn></msup><mi>d</mi><mi>q</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mi>l</mi><mi>w</mi><msup><mi>h</mi><mn>3</mn></msup></mrow><mrow><mn>12</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>W</mi><mrow><mtext mathvariant=\"normal\">sartu </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "exactamente igual al incremento de energía almacenada en la caja: el flujo integrado del vector de Poynting recupera el incremento de la densidad de energía del campo."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), pp. 210–211, ejercicio 10.2; el número es el mismo en la 3.ª edición. Los campos del semiespacio son los del ejemplo 10.1, y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>W</mi><mo>=</mo><msub><mi>W</mi><mtext mathvariant=\"normal\">sartu</mtext></msub></mrow></math> se recupera a partir del flujo de Poynting."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Griffiths 10.3",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla los campos y las distribuciones de carga y de corriente correspondientes a los siguientes potenciales: <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>t</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El campo eléctrico es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>. Como <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>, solo contribuye la derivada temporal de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El campo magnético es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>. Como <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> es radial y depende únicamente de <math display=\"inline\"><mi>r</mi></math>, <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estos son, precisamente, los campos de una carga puntual <math display=\"inline\"><mi>q</mi></math> en reposo en el origen. Las fuentes proceden de las leyes de Maxwell: Gauss da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><msub><mi>ε</mi><mn>0</mn></msub><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mi>∇</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>q</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y como <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> es estático (<math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>) y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math>, Ampère–Maxwell da <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo>=</mo><mi>q</mi><msup><mi>δ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Así, estos potenciales &quot;raros&quot; generan los campos corrientes de una carga puntual en reposo, aunque <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> sean inusuales. Una transformación gauge los lleva a la forma habitual: tomando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>t</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (ejercicio 10.5), quedan <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑨</mi><mo>′</mo></msup><mo>=</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><mi>∇</mi><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo>=</mo><mi>V</mi><mo>−</mo><mi>∂</mi><mi>λ</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir, los potenciales de Coulomb de siempre."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), p. 211, ejercicio 10.3. El ejercicio 10.3 de la 4.ª edición reúne el 10.3 y el 10.5 de la 3.ª (&quot;mod&quot;); el número principal (10.3) es el mismo."
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Griffiths 10.4",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, donde <math display=\"inline\"><msub><mi>A</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi>k</mi></math> son constantes. Halla <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math>, y comprueba que satisfacen las ecuaciones de Maxwell en el vacío. ¿Qué condiciones hay que imponer a <math display=\"inline\"><mi>ω</mi></math> y a <math display=\"inline\"><mi>k</mi></math>?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Directamente a partir de los potenciales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>k</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los comparamos con las ecuaciones de Maxwell en el vacío (<math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑱</mi><mo>=</mo><mn>0</mn></mrow></math>). Las divergencias son inmediatas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La ley de Faraday se cumple: <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msub><mi>E</mi><mi>y</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><msub><mi>A</mi><mn>0</mn></msub><mi>ω</mi><mi>k</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ampère–Maxwell, por su parte, <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><msub><mi>B</mi><mi>z</mi></msub></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><msup><mi>k</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>A</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da; para que sean iguales debe cumplirse <math display=\"inline\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. Como <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub></mrow></msqrt></mrow></math>, la relación de dispersión"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mi>c</mi><mi>k</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es: estos potenciales corresponden a una onda plana que se propaga con velocidad <math display=\"inline\"><mi>c</mi></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), p. 211, ejercicio 10.4; el número es el mismo en la 3.ª edición."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Griffiths 10.9",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Supón que un hilo recto infinito (eje <math display=\"inline\"><mi>z</mi></math>) lleva una corriente que crece linealmente, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math>, para <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math> (y <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math>). Halla los campos eléctrico y magnético que genera a distancia <math display=\"inline\"><mi>s</mi></math>. (b) Haz lo mismo para el caso de un pulso de corriente instantáneo: <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": "Hilo recto infinito en el eje <math display=\"inline\"><mi>z</mi></math>; <math display=\"inline\"><mi>P</mi></math>\n  punto de observación a distancia <math display=\"inline\"><mi>s</mi></math>; <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>.",
       "src": "../media/irudiak/3287d459fb96f745.svg",
       "zabalera": 196
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El potencial vector retardado es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><mi>z</mi></mrow></math>, siendo <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>. La noticia se propaga con velocidad <math display=\"inline\"><mi>c</mi></math>: si <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math> la señal no ha llegado y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>; si <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mi>s</mi><mi>/</mi><mi>c</mi></mrow></math>, solo contribuye la parte <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>(a) <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math>.</strong>  Como el integrando es par en <math display=\"inline\"><mi>z</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>t</mi><msubsup><mo>∫</mo><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></msubsup><mi>d</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera integral es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la segunda <math display=\"inline\"><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></math>; evaluando en los extremos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>t</mi><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mi>t</mi><mo>+</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>s</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el campo eléctrico, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>; en la derivada respecto de <math display=\"inline\"><mi>t</mi></math>, los dos últimos términos se cancelan entre sí, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mi>t</mi><mo>+</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>s</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para el campo magnético, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>−</mi><mi>∂</mi><msub><mi>A</mi><mi>z</mi></msub><mi>/</mi><mi>∂</mi><mi>s</mi><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>; derivando,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>s</mi><mi>c</mi></mrow></mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>(b) <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.</strong>  Ahora <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><mi>z</mi></mrow></math>. Con el cambio de variable <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msqrt><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (<math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mo>=</mo><mi mathvariant=\"script\">𝓇</mi><mi>d</mi><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><msqrt><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>) y usando <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mspace width=\"0.167em\"></mspace><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>c</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><msubsup><mo>∫</mo><mi>s</mi><mi>∞</mi></msubsup><mfrac><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msqrt><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>d</mi><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>c</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mfrac><mn>1</mn><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(si <math display=\"inline\"><mrow><mi>c</mi><mi>t</mi><mo>&gt;</mo><mi>s</mi></mrow></math>; en caso contrario <math display=\"inline\"><mn>0</mn></math>). De ahí los campos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup><mi>t</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>c</mi><mi>s</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), pp. 214–215. El ejercicio 10.9 de la 3.ª edición es el 10.11 en la 4.ª (el hilo del ejemplo 10.2)."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Griffiths 10.10",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un trozo de hilo doblado forma una espira: dos semicircunferencias concéntricas de radios <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>, unidas por dos tramos rectos sobre el eje <math display=\"inline\"><mi>x</mi></math>. La corriente crece linealmente, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math>. Calcula el potencial vector retardado en el centro. Halla el campo eléctrico en el centro. Explica por qué un hilo neutro produce un campo eléctrico, y por qué no puede determinarse el campo magnético con este cálculo en un solo punto de <math display=\"inline\"><mi>A</mi></math>."
      },
      {
       "mota": "irudia",
       "oina": "Espira: semicircunferencias concéntricas de radios <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>, unidas por dos tramos rectos\n  sobre el eje <math display=\"inline\"><mi>x</mi></math>; <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mi>t</mi></mrow></math> corriente creciente.",
       "src": "../media/irudiak/c32f61b44f0e1630.svg",
       "zabalera": 224
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El potencial vector retardado de un filamento de corriente"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>r</mi></mfrac><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. En el centro de la espira, <math display=\"inline\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>t</mi><mi>r</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El segundo término lleva la integral vectorial cerrada <math display=\"inline\"><mrow><mo>∫</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mo>=</mo><mn>0</mn></mrow></math>, porque se integra a lo largo de toda la espira. Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow><mi>r</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En las semicircunferencias <math display=\"inline\"><mi>r</mi></math> es constante: <math display=\"inline\"><mi>a</mi></math> en la interior y <math display=\"inline\"><mi>b</mi></math> en la exterior; sus contribuciones se cancelan en la dirección vectorial, como indica la geometría. La contribución neta viene de los dos tramos rectos, ambos paralelos al eje <math display=\"inline\"><mi>x</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow><mi>r</mi></mfrac><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(La contribución de las semicircunferencias es trivial: en cada una <math display=\"inline\"><mrow><mo>∫</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow></math> es igual a su cuerda —<math display=\"inline\"><mrow><mn>2</mn><mi>a</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> en la interior y <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mi>b</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> en la exterior—, y divididas por las constantes <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> dan <math display=\"inline\"><mrow><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, que se cancelan. En los tramos rectos, en cambio, son <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒍</mi><mo>=</mo><mi>x</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>x</mi></mrow></math>.)"
    },
    {
     "mota": "testua",
     "html": "Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi><mi>t</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El campo eléctrico es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>. El hilo es neutro, y en este problema el potencial escalar no contribuye en el centro, así que"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>k</mi></mrow><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Interpretación.</strong> Aunque el hilo es eléctricamente neutro, la corriente varía con el tiempo. Esa corriente variable genera un campo magnético variable, y por la ley de Faraday aparece un campo eléctrico inducido. Por eso no hace falta una densidad de carga neta para que haya <math display=\"inline\"><mi>E</mi></math>."
    },
    {
     "mota": "testua",
     "html": "No podemos determinar <math display=\"inline\"><mi>B</mi></math> en el centro a partir de esta expresión puntual de <math display=\"inline\"><mi>A</mi></math>, porque <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>, y eso exige saber cómo varía <math display=\"inline\"><mi>A</mi></math> en el espacio alrededor del centro, no solo el valor central."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), p. 215. El ejercicio 10.10 de la 3.ª edición (la espira de la fig. 10.5) es el 10.12 en la 4.ª. Conociendo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> en un único punto, no puede obtenerse <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Griffiths 10.14",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que el potencial escalar de una carga puntual que se mueve con velocidad constante —<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>c</mi></mrow><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mrow></math>— puede escribirse de forma equivalente <math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><mrow><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>≡</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> es el vector desde la posición <strong>actual</strong> de la carga hasta el punto del campo y <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>. Deduce que para velocidades no relativistas (<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>) es <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mi>/</mi><mi>R</mi></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": "Posición retardada y actual de la carga;\n  <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑹</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi></mrow></math> es el vector desde la posición actual hasta el punto del campo.",
       "src": "../media/irudiak/7c450efe0ae83da4.svg",
       "zabalera": 241
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Desarrollamos la expresión bajo la raíz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Efectuando los productos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝑹</mi></mrow></math>, de <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> sale <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>t</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; sustituyendo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>R</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora, como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mi>R</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>. Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y tomando la raíz, <math display=\"inline\"><mrow><msqrt><mi>I</mi></msqrt><mo>=</mo><mi>c</mi><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mrow></math>. Introduciéndolo en la expresión,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi>q</mi><mrow><mi>R</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></msqrt></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el límite <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math> la raíz tiende a <math display=\"inline\"><mn>1</mn></math> y se recupera <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mi>/</mi><mi>R</mi></mrow></math>: este es el potencial de una carga en movimiento que obtuvo Heaviside (1888)."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), p. 216. El ejercicio 10.14 de la 3.ª edición es el 10.16 en la 4.ª."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Griffiths 10.20",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para la configuración del problema 10.13, halla los campos eléctrico y magnético en el centro. A partir de la expresión de <math display=\"inline\"><mi>B</mi></math>, extrae <math display=\"inline\"><mi>I</mi></math> el campo magnético en el centro de una espira circular con corriente estacionaria, y compáralo con el resultado del ejemplo 5.6."
      },
      {
       "mota": "testua",
       "html": "La configuración 10.13 es una carga <math display=\"inline\"><mi>q</mi></math> que gira uniformemente en una circunferencia de radio <math display=\"inline\"><mi>a</mi></math> con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. El punto de observación es el centro de la circunferencia."
      },
      {
       "mota": "irudia",
       "oina": "Carga <math display=\"inline\"><mi>q</mi></math> girando en el radio <math display=\"inline\"><mi>a</mi></math>\n    con <math display=\"inline\"><mi>ω</mi></math>; <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math> apunta desde la carga retardada hacia el centro.",
       "src": "../media/irudiak/40e74787a485b893.svg",
       "zabalera": 150
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> el tiempo retardado; en ese instante la carga está en la posición <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒘</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y su velocidad es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>ω</mi><mi>a</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Para el campo en el centro, el vector unitario que apunta desde la carga retardada hacia el centro es <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math>. Como el movimiento es circular, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mtext mathvariant=\"normal\">azel. </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y la velocidad es perpendicular a <math display=\"inline\"><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></math>, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math>. Definimos <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>c</mi><mo>=</mo><mi>ω</mi><mi>a</mi><mi>/</mi><mi>c</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Campo eléctrico.</strong> Con la forma de Liénard–Wiechert, como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi></mrow></math>. Sustituyendo en la expresión general, los términos se separan en una parte radial y otra tangencial; en el centro"
    },
    {
     "mota": "testua",
     "html": "Con más precisión, el campo general de Liénard–Wiechert es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mtext mathvariant=\"normal\">azel.</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> (Griffiths 10.65), siendo <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><mi>a</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>a</mi><mi>c</mi></mrow></math>. Como <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> azel. </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mrow><mtext mathvariant=\"normal\">azel. </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝒂</mi><mtext mathvariant=\"normal\">azel.</mtext></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><msup><mi>β</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. Además, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La suma, sustituyendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>β</mi><mi>c</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, da <math display=\"inline\"><mrow><msup><mi>c</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>β</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; el prefactor es <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>c</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto, en el centro:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi>β</mi><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El primer término apunta desde la carga retardada hacia el centro. El segundo es opuesto a la velocidad retardada instantánea. La dirección completa de <math display=\"inline\"><mi>E</mi></math> gira con la carga, porque depende de la posición retardada."
    },
    {
     "mota": "testua",
     "html": "<strong>Campo magnético.</strong> Para una carga puntual en movimiento, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>. Aplicándolo al resultado anterior, la parte radial de <math display=\"inline\"><mi>E</mi></math> no contribuye, porque <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>. Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mi>q</mi><mi>β</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si la carga positiva gira en sentido antihorario visto desde <math display=\"inline\"><mrow><mi>+</mi><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>ρ</mi><mo accent=\"true\">̂</mo></mover></mrow></math> es y <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>; por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>q</mi><mi>β</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>q</mi><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>a</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este campo no gira: para todos los puntos de la órbita, el campo magnético en el centro apunta en la misma dirección axial."
    },
    {
     "mota": "testua",
     "html": "<strong>Espira circular con corriente estacionaria.</strong> Una espira continua puede verse como muchas cargas que giran en la misma circunferencia. Cada elemento de carga <math display=\"inline\"><mrow><mi>d</mi><mi>q</mi></mrow></math> aporta <math display=\"inline\"><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>ω</mi><mi>/</mi><mn>4</mn><mi>π</mi><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>q</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> en el centro. Integrando a lo largo de toda la espira,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>a</mi></mrow></mfrac><mo>∫</mo><mi>d</mi><mi>q</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>ω</mi><mi>Q</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>a</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la corriente estacionaria cumple <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>Q</mi><mi>/</mi><mi>T</mi><mo>=</mo><mi>Q</mi><mi>ω</mi><mi>/</mi><mn>2</mn><mi>π</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">espira</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "exactamente el campo en el centro de una espira circular de radio <math display=\"inline\"><mi>a</mi></math> hallado en el ejemplo 5.6."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, manual del profesor (4.ª ed.), p. 220. El ejercicio 10.20 de la 3.ª edición (configuración 10.13) es el 10.23 en la 4.ª. Se recupera el resultado de la espira circular con corriente <math display=\"inline\"><mi>I</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> en el centro (Griffiths, ejemplo 5.6; 4.ª ed. ejemplo 5.7 y ec. 5.41)."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Ejercicios propuestos",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Lo que sigue son ejercicios del capítulo 10 de Griffiths (numeración de la 3.ª edición), propuestos sin resolución. Adaptación al euskera de los enunciados de las fotografías del libro."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.6.)</strong> De los potenciales del ejemplo 10.1, del ejercicio 10.3 y del ejercicio 10.4, ¿cuáles están en el gauge de Coulomb (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mn>0</mn></mrow></math>)? ¿Cuáles en el gauge de Lorenz (<math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>)? (Esos gauges no son mutuamente excluyentes.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.18.)</strong> Una carga puntual <math display=\"inline\"><mi>q</mi></math> está obligada a moverse sobre el eje <math display=\"inline\"><mi>x</mi></math>. Demuestra que en los puntos del eje a la <strong>derecha</strong> de la carga los campos son <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mn>1</mn><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>c</mi><mo>+</mo><mi>v</mi></mrow><mrow><mi>c</mi><mo>−</mo><mi>v</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math>. ¿Cuáles son los campos a la <strong>izquierda</strong>?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.19.)</strong> (a) Usando la ecuación 10.68, calcula el campo eléctrico a distancia <math display=\"inline\"><mi>d</mi></math> de un hilo recto infinito con densidad lineal de carga uniforme <math display=\"inline\"><mi>λ</mi></math>, cuando el hilo se mueve en su propia dirección con velocidad constante <math display=\"inline\"><mi>v</mi></math>. (b) Usando la ecuación 10.69, halla el campo magnético del mismo hilo."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 10.21.)</strong> A un anillo de plástico de radio <math display=\"inline\"><mi>a</mi></math> se le pega carga de modo que tenga una densidad lineal de carga <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></math>. El anillo gira alrededor de su eje con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. Halla los potenciales escalar y vector exactos en el centro del anillo. <em>(Resultado: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>λ</mi><mn>0</mn></msub><mi>ω</mi><mi>a</mi><mi>/</mi><mn>3</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"normal\">sin</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>a</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>.)</em>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Este capítulo desarrolla la formulación potencial de la electrodinámica —la libertad gauge, los potenciales retardados, las ecuaciones de Jefimenko y los potenciales de Liénard–Wiechert de una carga puntual en movimiento— con dibujos originales en CeTZ, traducido al euskera para JAKINA. </em>"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 1,
   "izenburua": "Radiación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El capítulo 10 dividió el campo de una carga puntual acelerada en dos partes: la parte de velocidad, que decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math>, y la parte de aceleración, que decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math>. Este capítulo se dedica por entero a esa segunda parte: la <strong>radiación</strong>, el mecanismo por el cual las cargas aceleradas emiten energía a distancias arbitrariamente grandes, y el origen último de la luz, de las ondas de radio y de cualquier otra transmisión electromagnética que no requiera contacto físico con la fuente."
    },
    {
     "mota": "testua",
     "html": "El capítulo se divide en dos partes. En la primera (<strong>radiación dipolar</strong>) se estudian las fuentes radiantes más sencillas —dipolos eléctricos y magnéticos oscilantes—, calculando explícitamente los campos y la potencia radiada a partir de los potenciales retardados. En la segunda (<strong>cargas puntuales</strong>) se pasa a la radiación de una sola carga acelerada: la fórmula general de Larmor y, por último, la fuerza de reacción de la radiación. Todo se construye sobre los potenciales retardados y los campos del capítulo 10; este capítulo muestra un procedimiento sistemático, aplicado a los casos particulares más significativos."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "¿Qué es la radiación?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La característica de la radiación es esta: el flujo de energía de los campos, integrado sobre una esfera grande, <strong>no</strong> se anula al crecer el radio de la esfera; es decir, una energía real escapa hasta el infinito, en lugar de ser llevada de aquí para allá en el lugar mismo (como hacen los campos estáticos o casi estáticos). Como el flujo de Poynting a través de una esfera de radio <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> escala como <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mo>×</mo><mi>S</mi></mrow></math>, eso exige que <math display=\"inline\"><mi>S</mi></math> (y, por tanto, <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>B</mi></math>) decaiga como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math>, no como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math>: precisamente el campo de aceleración identificado en el capítulo 10."
    },
    {
     "mota": "testua",
     "html": "Para precisar esta idea, imaginemos que la fuente está localizada en torno al origen, y tomemos a su alrededor una esfera gigante de radio <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math>. La potencia total que sale por esa superficie es el flujo del vector de Poynting:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo>∮</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mo>∮</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la potencia <strong>radiada</strong> es el límite de ese flujo cuando la esfera se extiende hasta el infinito:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≡</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi mathvariant=\"script\">𝓇</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el área de la esfera es <math display=\"inline\"><mrow><mn>4</mn><mi>π</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math>, para que haya radiación el vector de Poynting no puede decaer más deprisa que <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math>: si decayera como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> iría como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> y <math display=\"inline\"><msub><mi>P</mi><mtext mathvariant=\"normal\">rad</mtext></msub></math> sería cero. Pero la ley de Coulomb dice que los campos electro<strong>státicos</strong> decaen como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> (o más deprisa, si la carga total es cero), y la ley de Biot–Savart dice lo mismo para los magneto<strong>státicos</strong>; por tanto, <math display=\"inline\"><mrow><mi>S</mi><mo>∼</mo><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>4</mn></msup></mrow></math> en configuraciones estáticas, y las fuentes estáticas <strong>no</strong> radian. En las fuentes que dependen del tiempo, en cambio, las ecuaciones de Jefimenko (los términos con <math display=\"inline\"><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover></math> y <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝑱</mi><mo accent=\"true\">̇</mo></mover></math>) aportan contribuciones que decaen como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math>: esos términos son los responsables de la radiación electromagnética. El estudio de la radiación consiste, pues, en esto: elegir las partes <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"script\">𝓇</mi></mrow></math> de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> a distancias lejanas, construir con ellas el término <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math>, integrar sobre una esfera grande y tomar el límite <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>→</mo><mi>∞</mi></mrow></math>. Llevaremos a cabo este procedimiento primero para dipolos eléctricos y magnéticos oscilantes y después, en el apartado 11.2, para el caso más difícil de una carga puntual acelerada."
    },
    {
     "mota": "oharra",
     "titulua": "Nota sobre la notación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En este capítulo <math display=\"inline\"><mi>r</mi></math> designa la distancia radial del punto del campo, medida desde el origen, y <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> (la <em>script</em>-r de Griffiths) la distancia desde el elemento de fuente hasta el punto del campo. En la zona lejana ambas se igualan, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≈</mo><mi>r</mi></mrow></math>; por eso las expresiones abreviadas de los campos lejanos (y las integrales esféricas anteriores) pueden usar <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> como distancia radial."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Radiación del dipolo eléctrico",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El dipolo oscilante"
    },
    {
     "mota": "testua",
     "html": "El sistema radiante más sencillo es un dipolo físico (capítulo 3) cuyo momento oscila en el tiempo, <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: el modelo clásico de una antena de radio o de un enlace molecular que vibra. Resolviendo para esta fuente las integrales de los potenciales retardados (capítulo 10), en la <strong>zona lejana</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≫</mo><mi>λ</mi></mrow></math>), se obtienen los campos de radiación:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Campos de radiación del dipolo eléctrico (zona lejana)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mi mathvariant=\"bold-italic\">𝑬</mi><mi>c</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Patrón de radiación de un dipolo eléctrico oscilante: la intensidad es máxima transversalmente al eje del dipolo (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) y se anula en el propio eje (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>): la característica forma de rosquilla, <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>.",
     "src": "../media/irudiak/10b04d6b8dd3229d.svg",
     "zabalera": 199
    },
    {
     "mota": "testua",
     "html": "Veamos ahora, paso a paso, de dónde sale ese resultado. Tomemos dos esferas pequeñas a distancia <math display=\"inline\"><mi>d</mi></math>, unidas por un hilo fino: la de arriba tiene carga <math display=\"inline\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la de abajo <math display=\"inline\"><mrow><mi>−</mi><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y empujamos la carga de un lado a otro del hilo con frecuencia <math display=\"inline\"><mi>ω</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eso produce un dipolo eléctrico oscilante, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>≡</mo><msub><mi>q</mi><mn>0</mn></msub><mi>d</mi></mrow></math> es el valor máximo del momento dipolar. El potencial retardado de las dos cargas es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><msub><mi>q</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><msub><mi mathvariant=\"script\">𝓇</mi><mo>+</mo></msub><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>+</mo></msub></mfrac><mo>−</mo><mfrac><mrow><msub><mi>q</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><msub><mi mathvariant=\"script\">𝓇</mi><mo>−</mo></msub><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>−</mo></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde, por la ley de los cosenos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub><mo>=</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>∓</mo><mi>r</mi><mi>d</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para convertir el dipolo físico en un dipolo <strong>perfecto</strong> queremos una separación muy pequeña: <strong>aproximación 1</strong>: <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>r</mi></mrow></math>. A primer orden en <math display=\"inline\"><mi>d</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub><mo>≈</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>∓</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub></mfrac><mo>≈</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mrow><mn>2</mn><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y, admitiendo que el tamaño del dipolo es mucho menor que la longitud de onda (<strong>aproximación 2</strong>: <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>), desarrollando el coseno:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><msub><mi mathvariant=\"script\">𝓇</mi><mo>±</mo></msub><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∓</mo><mfrac><mrow><mi>ω</mi><mi>d</mi></mrow><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Introduciendo todo esto en el potencial, el potencial escalar de un dipolo oscilante perfecto queda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el límite estático (<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>), el segundo término recupera el conocido potencial de un dipolo en reposo, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Pero lo que ahora nos importa es el campo lejano, llamado <strong>zona de radiación</strong> —<strong>aproximación 3</strong>: <math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math> (es decir, <math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>λ</mi></mrow></math>)—. Allí domina el término <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entretanto, el potencial vector lo determina la corriente del hilo, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑰</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>q</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><msub><mi>q</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y a primer orden en <math display=\"inline\"><mi>d</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Obtener los campos a partir de los potenciales es directo. Calculando <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>−</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> y conservando solo los términos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> (aproximación 3), y haciendo lo mismo con <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>≈</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>≈</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estos son los campos de radiación del recuadro de arriba (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≈</mo><mi>r</mi></mrow></math> en la zona lejana). <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> están en fase, son perpendiculares entre sí y transversales a la dirección de propagación (<math display=\"inline\"><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></math>), la razón de las amplitudes es <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mi>/</mi><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi></mrow></math> y la amplitud decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>: son exactamente ondas electromagnéticas esféricas del espacio libre, localmente planas en regiones suficientemente lejanas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potencia total radiada"
    },
    {
     "mota": "testua",
     "html": "Integrando el flujo de Poynting sobre una esfera grande se obtiene la potencia total radiada, promediada sobre un ciclo:"
    },
    {
     "mota": "testua",
     "html": "El cálculo parte de los campos radiados. El vector de Poynting"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><msub><mi>μ</mi><mn>0</mn></msub></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, y promediando la intensidad sobre un ciclo completo (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Obsérvese que en el <strong>eje</strong> del dipolo no hay radiación (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>); el perfil de intensidad adopta la forma de rosquilla, con el máximo en el plano ecuatorial (figura 11.1). La potencia total se obtiene integrando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> sobre una esfera; usando <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mn>4</mn><mi>/</mi><mn>3</mn></mrow></math> y <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El resultado es independiente del radio de la esfera, como exige la conservación de la energía (con la aproximación 3 estábamos anticipando el límite <math display=\"inline\"><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fórmula de Larmor para un dipolo oscilante",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math> es una dependencia fuerte: es la razón por la que la luz azul se dispersa mucho más eficazmente que la roja en partículas pequeñas (dispersión de Rayleigh, la física del azul del cielo): el dipolo oscilante inducido radia una potencia proporcional a la cuarta potencia de la frecuencia impulsora."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 11.1 — El azul del cielo y el rojo del atardecer"
    },
    {
     "mota": "testua",
     "html": "La acusada dependencia de la fórmula de potencia con la frecuencia (<math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math> de Larmor) es, precisamente, la responsable del azul del cielo. Cuando la luz solar atraviesa la atmósfera, hace oscilar los átomos como pequeños dipolos. La radiación solar incidente abarca un amplio intervalo de frecuencias (luz blanca), pero la energía absorbida y reemitida por los dipolos de la atmósfera es mucho mayor a frecuencias altas, por el factor <math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math> de la fórmula de Larmor: la radiación reemitida es más intensa en el azul que en el rojo. Esa es la luz que vemos al mirar al cielo (salvo que estemos mirando directamente al Sol)."
    },
    {
     "mota": "testua",
     "html": "Además, como las ondas electromagnéticas son transversales, los dipolos oscilan en un plano ortogonal a los rayos del Sol. En el arco del cielo perpendicular a esos rayos —donde el azul es más intenso—, los dipolos que oscilan a lo largo de la visual del observador no le envían ninguna radiación (por el factor <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>, véase <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>); por tanto, la luz recibida con ese ángulo está polarizada perpendicularmente a los rayos solares. Eso explica por qué el cielo está polarizado a <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> del Sol."
    },
    {
     "mota": "testua",
     "html": "El rojo del atardecer es la otra cara de la moneda: la luz solar que entra tangente a la superficie de la Tierra tiene que atravesar una porción de atmósfera mucho más larga que la que viene desde arriba. En consecuencia, buena parte del azul se ha eliminado por dispersión, y lo que queda es rojo."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>∝</mo><msup><mi>ω</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> urdina </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> handia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> askoz gehiago sakabanatua </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> gorria </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> txikia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baino </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: una antena de radio"
    },
    {
     "mota": "testua",
     "html": "Una antena dipolar corta, de longitud <math display=\"inline\"><mrow><mi>l</mi><mo>≪</mo><mi>λ</mi></mrow></math>, alimentada con una corriente de pico <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> a la frecuencia <math display=\"inline\"><mi>ω</mi></math>, tiene (a partir de <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mover><mi>p</mi><mo accent=\"true\">̇</mo></mover></mrow></math>, integrando) un momento dipolar efectivo <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mi>l</mi><mi>/</mi><mi>ω</mi></mrow></math> en el pico. Sustituyendo en la fórmula de Larmor,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mn>0</mn></msub><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para una longitud de antena fija, la potencia radiada crece como <math display=\"inline\"><msup><mi>ω</mi><mn>2</mn></msup></math>: una de las razones principales por las que la ingeniería de radio, en busca de una transmisión eficaz, ha ido históricamente hacia frecuencias más altas (y, por tanto, hacia antenas más cortas y más prácticas)."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Radiación del dipolo magnético",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un dipolo magnético oscilante <math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> —una espira de corriente con corriente oscilante— radia por el mismo mecanismo, con una fórmula análoga:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fórmula de Larmor para un dipolo magnético oscilante",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La deducción es paralela a la del dipolo eléctrico. Tomemos una espira de hilo de radio <math display=\"inline\"><mi>b</mi></math>, alimentada con una corriente alterna, <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; esto modela un dipolo magnético oscilante, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, donde <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>≡</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msub><mi>I</mi><mn>0</mn></msub></mrow></math>. Como la espira está descargada, el potencial escalar es cero, y el potencial vector retardado"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. Para un punto del eje <math display=\"inline\"><mi>x</mi></math>, por simetría <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> debe apuntar en la dirección <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></math>; usando la ley de los cosenos (<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>r</mi><mi>b</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></msqrt></mrow></math>) y las aproximaciones de espira pequeña (aproximación 1: <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>r</mi></mrow></math>; aproximación 2: <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>), tras hacer la integral,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el límite estático (<math display=\"inline\"><mrow><mi>ω</mi><mo>→</mo><mn>0</mn></mrow></math>) se recupera el conocido potencial de un dipolo magnético, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. En la zona de radiación (aproximación 3: <math display=\"inline\"><mrow><mi>r</mi><mo>≫</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>) el primer término es despreciable, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub><mi>ω</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De aquí se obtienen los campos lejanos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>m</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mi>r</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estos campos tienen la misma estructura que los del dipolo eléctrico, pero ahora <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> va en la dirección <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> en la dirección <math display=\"inline\"><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></math> (al revés que en el eléctrico). Integrando el promedio del vector de Poynting, la intensidad tiene la misma forma de rosquilla, y la potencia total vuelve a ir como <math display=\"inline\"><msup><mi>ω</mi><mn>4</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hay, sin embargo, una diferencia importante entre el dipolo eléctrico y el magnético: para configuraciones de tamaño comparable, la potencia radiada eléctricamente es mucho mayor. Comparando las dos fórmulas de Larmor,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>m</mi><mn>0</mn></msub><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y sustituyendo <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msub><mi>I</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>d</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>ω</mi></mrow></math> (tomando <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi>π</mi><mi>b</mi></mrow></math> para la comparación), queda <math display=\"inline\"><mrow><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><mi>/</mi><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>b</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>: la cantidad <math display=\"inline\"><mrow><mi>ω</mi><mi>b</mi><mi>/</mi><mi>c</mi></mrow></math> que consideramos muy pequeña (aproximación 2), y que aquí aparece al cuadrado."
    },
    {
     "mota": "testua",
     "html": "El factor adicional <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> respecto del caso eléctrico significa que la radiación del dipolo magnético es, normalmente, mucho más débil que la del dipolo eléctrico de una fuente de tamaño parecido; por eso la radiación dipolar eléctrica predomina en la mayoría de las antenas prácticas y de las transiciones atómicas, y la radiación dipolar magnética (y la de los multipolos superiores) queda relegada, en física atómica, a las transiciones prohibidas por las reglas de selección."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: comparar las radiaciones del dipolo eléctrico y del magnético"
    },
    {
     "mota": "testua",
     "html": "Para ver con precisión la supresión, comparemos un dipolo eléctrico oscilante <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>q</mi><mi>a</mi></mrow></math> con una espira de corriente oscilante del mismo tamaño (<math display=\"inline\"><mi>a</mi></math>) y de la misma amplitud de corriente (<math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math>), es decir, <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. Usando <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mi>q</mi><mi>ω</mi></mrow></math> (orden de magnitud, a partir de <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mover><mi>q</mi><mo accent=\"true\">̇</mo></mover></mrow></math>), se obtiene <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>∼</mo><mi>q</mi><mi>ω</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La razón entre las potencias radiadas es entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac><mo>=</mo><mfrac><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><mo>∼</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>q</mi><mi>ω</mi><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>ω</mi></mrow><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para una fuente mucho menor que la longitud de onda (<math display=\"inline\"><mrow><mi>a</mi><mo>≪</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>, el régimen en que es válida la propia aproximación dipolar), <math display=\"inline\"><mrow><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><mo>≪</mo><mn>1</mn></mrow></math> y, por tanto, <math display=\"inline\"><mrow><msub><mi>P</mi><mtext mathvariant=\"normal\">mag</mtext></msub><mi>/</mi><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">elek </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><mn>1</mn></mrow></math>: la radiación del dipolo magnético está suprimida por el <strong>cuadrado</strong> del mismo cociente pequeño que justificó al principio el desarrollo multipolar."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este es el mismo factor de supresión <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> que se identifica en la jerarquía multipolar general del apartado siguiente; aquí se ha trabajado en concreto para el caso particular de las radiaciones dipolares eléctrica y magnética, en lugar de enunciarlo solo en términos generales."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Radiación de una fuente arbitraria",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En los apartados anteriores hemos usado dos sistemas concretos: dipolos eléctricos y magnéticos oscilantes. Ahora queremos aplicar el mismo procedimiento a una fuente arbitraria: cualquier distribución de carga y de corriente, con la única condición de estar localizada en un volumen finito en torno al origen. El potencial escalar retardado"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mo>∫</mo><mfrac><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"script\">𝓇</mi></mfrac><mi>d</mi><msup><mi>τ</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, donde <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>=</mo><msqrt><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow></msqrt></mrow></math>. Como en los casos anteriores, admitiremos que el punto del campo está mucho más lejos que el tamaño de la fuente: <strong>aproximación 1</strong>: <math display=\"inline\"><mrow><msup><mi>r</mi><mo>′</mo></msup><mo>≪</mo><mi>r</mi></mrow></math>. Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"script\">𝓇</mi><mo>≈</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mi mathvariant=\"script\">𝓇</mi></mfrac><mo>≈</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y, desarrollando <math display=\"inline\"><mi>ρ</mi></math> en serie de Taylor en torno al tiempo retardado en el origen (<math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>≡</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math>),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><mi>t</mi><mo>−</mo><mfrac><mi mathvariant=\"script\">𝓇</mi><mi>c</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mover><mi>ρ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup><mo>,</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><msup><mi mathvariant=\"bold-italic\">𝒓</mi><mo>′</mo></msup></mrow><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Conservando solo los términos de primer orden (aproximación 2, que para un oscilador es <math display=\"inline\"><mrow><msup><mi>r</mi><mo>′</mo></msup><mo>≪</mo><mi>c</mi><mi>/</mi><mi>ω</mi></mrow></math>), el potencial se divide en tres términos: monopolo, dipolo y derivada temporal del dipolo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>Q</mi><mi>r</mi></mfrac><mo>+</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>r</mi><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera integral es la carga total, <math display=\"inline\"><mi>Q</mi></math>, que es independiente del tiempo por conservarse la carga; las otras dos son el momento dipolar en el instante <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math>. Es precisamente la conservación de la carga lo que garantiza que el monopolo no radie. El potencial vector, por su parte,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>r</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es (según el problema 3.7, la integral de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑱</mi></math> es la derivada temporal del momento dipolar). Al pasar a los campos, en la zona de radiación (solo los términos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>) quedan únicamente los términos que derivan <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> del argumento; el resultado es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>−</mi><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi><mi>c</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover></math> se evalúa en el instante <math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi></mrow></math>. Tomando el eje <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math> en la dirección de <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en coordenadas polares esféricas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El vector de Poynting y la potencia total son, por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>≈</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este es el resultado general de la radiación de una fuente arbitraria: el desarrollo multipolar de los potenciales retardados llevado hasta el orden más bajo capaz de generar campos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>: precisamente el término del dipolo eléctrico."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 11.2 — Recuperar el dipolo oscilante y la carga puntual única"
    },
    {
     "mota": "testua",
     "html": "<strong>(a)</strong> En el caso de un dipolo eléctrico oscilante, <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mover><mi>p</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Introduciéndolos en las fórmulas anteriores de campos y de potencia, se recuperan los resultados del apartado 11.1.2: los campos tienen la dependencia <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>/</mi><mi>r</mi></mrow></math>, el patrón tiene forma de rosquilla, y la potencia"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ω</mi><mn>2</mn></msup><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "resulta (el promedio sobre un ciclo introduce el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>), en acuerdo con la fórmula de Larmor del dipolo."
    },
    {
     "mota": "testua",
     "html": "<strong>(b)</strong> Para una única carga puntual, el momento dipolar es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>q</mi><mi mathvariant=\"bold-italic\">𝒅</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒅</mi></math> es la posición de la carga respecto del origen. Por tanto <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒑</mi><mo accent=\"true\">̈</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>q</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> la aceleración de la carga. En este caso la potencia radiada"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es: la célebre <strong>fórmula de Larmor</strong>, que deduciremos también más adelante por otro camino. Obsérvese que la potencia radiada por una carga puntual es proporcional al <strong>cuadrado</strong> de su aceleración."
    },
    {
     "mota": "testua",
     "html": "Lo que hemos hecho en este apartado es un desarrollo multipolar de los potenciales retardados, llevado hasta el orden más bajo capaz de generar campos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> (radiación): el término del dipolo eléctrico. Si el momento dipolar desaparece (o si su derivada temporal segunda es cero), hay que pasar en <math display=\"inline\"><msup><mi>r</mi><mo>′</mo></msup></math> al término de segundo orden —las radiaciones del dipolo magnético y del cuadrupolo eléctrico—, y si estos también se anulan, a los siguientes."
    },
    {
     "mota": "testua",
     "html": "Para una fuente cuyo momento dipolar eléctrico se anula (o que oscila con demasiada debilidad para importar), la radiación no desaparece sin más: la transporta el término <strong>siguiente</strong> que sobrevive en el desarrollo multipolar del capítulo 3, evaluado en el tiempo retardado. La jerarquía general, en orden decreciente de intensidad típica, es esta:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Cada multipolo sucesivo radia más débilmente que el anterior, aproximadamente en un factor <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, donde <math display=\"inline\"><mi>a</mi></math> es el tamaño de la fuente: el mismo parámetro de desarrollo que controlaba la serie multipolar estática del capítulo 3.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "table( columns: 2, stroke: 0.4pt + grisa, inset: 6pt, [<strong>Momento radiante</strong>], [<strong>Escala de la potencia</strong>], [Dipolo eléctrico (<math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math>)], [<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>4</mn></msup><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math>], [Dipolo magnético (<math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math>) / cuadrupolo eléctrico], [<math display=\"inline\"><mrow><msup><mi>ω</mi><mn>6</mn></msup><mo>×</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (tamaina)</mtext></mrow><mn>2</mn></msup></mrow></math>, suprimido respecto del dipolo por un factor <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>], )"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por eso, precisamente, las transiciones atómicas prohibidas por el dipolo eléctrico (en las que las reglas de selección cuánticas imponen <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> entre los estados inicial y final) se ven mucho más débiles que las transiciones dipolares ordinarias, y con una duración mucho mayor: el átomo se ve obligado a radiar mediante la radiación del dipolo magnético o del cuadrupolo eléctrico, ambas notablemente más débiles, por la misma supresión <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>ω</mi><mi>/</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> deducida aquí de forma clásica."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Cargas puntuales",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmula de Larmor"
    },
    {
     "mota": "testua",
     "html": "Para una única carga puntual acelerada (en lugar de un dipolo oscilante idealizado), la potencia radiada depende únicamente de la aceleración instantánea:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fórmula de Larmor (carga puntual)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es, probablemente, la fórmula de mayor alcance de toda la teoría clásica de la radiación: <strong>toda</strong> carga acelerada radia, con una potencia proporcional al cuadrado de su aceleración, sean cuales sean los detalles de la trayectoria."
    },
    {
     "mota": "testua",
     "html": "Deduzcámosla ahora directamente, a partir de los campos de la carga puntual. En el capítulo 10 obtuvimos los campos de una carga puntual con movimiento arbitrario:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math> es. El primer término (el que no es un triple producto) es el <strong>campo de velocidad</strong>; el segundo, con la aceleración, es el <strong>campo de aceleración</strong>. El vector de Poynting"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>E</mi><mn>2</mn></msup><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. Pero no todo ese flujo de energía es radiación: una parte es solo la energía de campo que la carga lleva consigo. La energía radiada es la que se <strong>desprende</strong> de la carga, la que se propaga hacia el infinito. Para calcular la potencia total radiada por la partícula en el instante <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>, dibujamos una esfera gigante de radio <math display=\"inline\"><mi mathvariant=\"script\">𝓇</mi></math> centrada en la posición de la partícula (en el instante <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>), esperamos un intervalo adecuado (<math display=\"inline\"><mrow><mi>t</mi><mo>−</mo><msub><mi>t</mi><mi>r</mi></msub><mo>=</mo><mi mathvariant=\"script\">𝓇</mi><mi>/</mi><mi>c</mi></mrow></math>) e integramos el vector de Poynting sobre la superficie. Como el área de la esfera es proporcional a <math display=\"inline\"><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></math>, solo los términos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mrow></math> de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑺</mi></math> dan un resultado finito en el límite; por eso solo los <strong>campos de aceleración</strong> representan la verdadera radiación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>q</mi><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mi mathvariant=\"script\">𝓇</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝓇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"script\">𝓇</mi><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mtext mathvariant=\"normal\">rad</mtext></msub></math> es perpendicular a <math display=\"inline\"><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></math>, el segundo término de Poynting desaparece, y queda <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑺</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>E</mi><mtext mathvariant=\"normal\">rad</mtext><mn>2</mn></msubsup><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math>. Cuando la carga está <strong>en reposo</strong> en el instante <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math> (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>c</mi><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math>),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>q</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi mathvariant=\"script\">𝓇</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝑺</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre <math display=\"inline\"><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>. No se radia potencia en la dirección de avance ni de retroceso; es una rosquilla en torno a la dirección de la aceleración instantánea. Integrando sobre toda la esfera se recupera la fórmula de Larmor:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo>∮</mo><msub><mi mathvariant=\"bold-italic\">𝑺</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mo>∫</mo><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup></mfrac><msup><mi mathvariant=\"script\">𝓇</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mi>d</mi><mi>φ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aunque la hemos deducido suponiendo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math>, la fórmula es una buena aproximación mientras <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>. El caso exacto <math display=\"inline\"><mrow><mi>v</mi><mo>≠</mo><mn>0</mn></mrow></math> es más difícil; la distribución angular"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, e integrando sobre todos los ángulos el resultado es la <strong>generalización de Liénard</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fórmula de Liénard (carga relativista)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>≡</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El factor <math display=\"inline\"><msup><mi>γ</mi><mn>6</mn></msup></math> significa que la potencia radiada crece enormemente a medida que la velocidad de la partícula se aproxima a la de la luz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 11.3 — v y a colineales: bremsstrahlung"
    },
    {
     "mota": "testua",
     "html": "Supongamos que <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math> son <strong>colineales</strong> en un instante (en el instante <math display=\"inline\"><msub><mi>t</mi><mi>r</mi></msub></math>), por ejemplo en un movimiento rectilíneo. Hallemos la distribución angular de la radiación y la potencia total radiada."
    },
    {
     "mota": "testua",
     "html": "<strong>Resolución.</strong> En este caso <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, luego"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>−</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora <math display=\"inline\"><mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math>, y por tanto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi mathvariant=\"script\">𝓇</mi><mo accent=\"true\">̂</mo></mover><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒂</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>. Tomando el eje <math display=\"inline\"><mi>z</mi></math> en la dirección de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>, y definiendo <math display=\"inline\"><mrow><mi>β</mi><mo>≡</mo><mi>v</mi><mi>/</mi><mi>c</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>5</mn></msup></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A velocidades pequeñas (<math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mn>0</mn></mrow></math>) se vuelve a la rosquilla ordinaria; a velocidades muy altas (<math display=\"inline\"><mrow><mi>β</mi><mo>≈</mo><mn>1</mn></mrow></math>), la rosquilla se alarga y se empuja hacia delante en un factor <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>β</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>5</mn></mrow></msup></math>, y la radiación se concentra en un cono cada vez más estrecho en torno a la dirección de avance. Integrando sobre todos los ángulos (la integral de <math display=\"inline\"><mi>φ</mi></math> es <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>; la de <math display=\"inline\"><mi>θ</mi></math>, con la sustitución <math display=\"inline\"><mrow><mi>x</mi><mo>≡</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>), la potencia total"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es, en acuerdo con la fórmula de Liénard (para el caso <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∥</mo><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math>). La distribución angular es la misma tanto si la partícula acelera como si frena: depende solo de <math display=\"inline\"><msup><mi>a</mi><mn>2</mn></msup></math>. A la radiación así emitida cuando un electrón rápido, al chocar contra un blanco metálico, se frena de golpe se le llama <strong>bremsstrahlung</strong> (&quot;radiación de frenado&quot;); este ejemplo describe en lo esencial la teoría clásica del bremsstrahlung."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: por qué los átomos clásicos son inestables"
    },
    {
     "mota": "testua",
     "html": "Tratando clásicamente el electrón de un átomo de hidrógeno —como una carga puntual que orbita alrededor del protón en un radio <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>≈</mo><mn>5.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></mrow></math> m, bajo la atracción de Coulomb—, la aceleración centrípeta es <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msub><mi>a</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><mi>v</mi></math> se fija exigiendo que la fuerza de Coulomb suministre la fuerza centrípeta. Sustituyendo en la fórmula de Larmor se obtiene una potencia radiada del orden de <math display=\"inline\"><mrow><mi>P</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> W: pequeñísima, pero no nula, y absorbe continuamente la energía orbital del electrón."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un cálculo breve (integrando la tasa de pérdida de energía frente a la energía orbital, cada vez menor) muestra que un átomo de hidrógeno clásico radiaría toda su energía orbital y caería en espiral hacia el núcleo en unos <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></math> segundos. Los átomos reales son estables indefinidamente: históricamente, una de las pruebas más directas de que la electrodinámica clásica <strong>tiene</strong> que fallar a escalas atómicas, problema resuelto solo por la mecánica cuántica."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Radiación de una carga acelerada"
    },
    {
     "mota": "irudia",
     "oina": "Una carga que acelera durante un tiempo breve desarrolla un &quot;codo&quot; en sus líneas de campo —un auténtico pulso de radiación— que se propaga hacia fuera con velocidad <math display=\"inline\"><mi>c</mi></math>, uniendo el antiguo patrón de campo (de velocidad) con el nuevo.",
     "src": "../media/irudiak/6734cd9b33dfbfaa.svg",
     "zabalera": 209
    },
    {
     "mota": "testua",
     "html": "Una manera viva y puramente geométrica de ver la radiación: las líneas de campo de una carga con velocidad constante (en cualquier instante) apuntan hacia su posición <strong>actual</strong>, en líneas rectas hacia fuera. Si la carga acelera durante un tiempo breve, las líneas de campo no pueden &quot;saberlo&quot; en todas partes al mismo tiempo —la información se propaga con velocidad <math display=\"inline\"><mi>c</mi></math>—, y por eso se forma un codo en el radio correspondiente al suceso de aceleración, que se expande hacia fuera. Ese codo, que lleva una componente de campo transversal y, por tanto, un auténtico flujo de energía, <strong>es</strong>, justamente, el pulso de radiación."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reacción de la radiación"
    },
    {
     "mota": "testua",
     "html": "Si una carga acelerada radia energía, por conservación de la energía también debe sentir una fuerza de reacción que se oponga a la aceleración: una autofuerza que el propio campo radiado de la carga ejerce retroactivamente sobre ella misma. La fórmula de Abraham–Lorentz (no relativista) estima esa fuerza:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Fuerza de reacción de la radiación de Abraham–Lorentz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Deduzcámosla a partir de la conservación de la energía. Para una partícula no relativista (<math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>), la potencia radiada la da la fórmula de Larmor, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi></mrow></math>. La conservación de la energía sugiere que esa es también la tasa a la que la partícula pierde energía bajo la fuerza de reacción <math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mtext mathvariant=\"normal\">rad</mtext></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esa ecuación es, estrictamente, <strong>incorrecta</strong> instante a instante (los campos de velocidad intercambian energía en cada momento), pero es correcta <strong>en promedio</strong> si el sistema vuelve a su estado inicial entre <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math> (por ejemplo, integrando sobre algunos ciclos completos). Entonces <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover><mo>⋅</mo><mover><mi mathvariant=\"bold-italic\">𝒗</mi><mo accent=\"true\">̇</mo></mover></mrow></math> puede integrarse por partes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><msup><mi>a</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><msubsup><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>⋅</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mo>−</mo><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi><mi>t</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El término de contorno desaparece (la velocidad y la aceleración son iguales en los instantes <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>), y por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>t</mi><mn>1</mn></msub><msub><mi>t</mi><mn>2</mn></msub></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esa ecuación se cumplirá, con toda probabilidad, si el integrando entero es cero, es decir, como dice la fórmula de Abraham–Lorentz. Esta fórmula tiene una consecuencia inquietante: para una partícula sin fuerzas externas, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math> la ley de Newton da <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝒂</mi></mrow></math>, cuya solución"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>t</mi><mi>/</mi><mi>τ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>≡</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>m</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es (para el electrón, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup></mrow></math> s). La aceleración <strong>crece</strong> espontáneamente de forma exponencial con el tiempo: una consecuencia absurda, que puede evitarse exigiendo <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>; pero el descarte sistemático de esas <strong>soluciones desbocadas</strong> acarrea una consecuencia todavía más desagradable: si se aplica una fuerza externa, la partícula empieza a responder <strong>antes</strong> de que la fuerza entre en acción (preaceleración acausal), aunque sea durante un intervalo breve <math display=\"inline\"><mi>τ</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Esta fórmula es célebre por sus patologías (admite soluciones desbocadas no físicas, y para evitarlas hay que conocer la aceleración <strong>futura</strong>): una señal, considerada muy significativa, de que no existe una teoría clásica totalmente coherente de la autofuerza de una carga puntual, y de que un tratamiento adecuado exige, en último término, la electrodinámica cuántica."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 11.4 — Amortiguamiento por radiación de una carga unida a un muelle"
    },
    {
     "mota": "testua",
     "html": "Calculemos el amortiguamiento por radiación de una carga unida a un muelle de frecuencia natural <math display=\"inline\"><msub><mi>ω</mi><mn>0</mn></msub></math>, impulsada a la frecuencia <math display=\"inline\"><mi>ω</mi></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Resolución.</strong> La ecuación de movimiento es (fuerzas del muelle, de radiación y de impulsión):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">mal </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>+</mo><mi>m</mi><mi>τ</mi><mover><mi>x</mi><mo accent=\"true\">⃛</mo></mover><mo>+</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><mi>τ</mi><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>m</mi><mi>τ</mi><mover><mi>x</mi><mo accent=\"true\">⃛</mo></mover></mrow></math> es. Como el sistema oscila con frecuencia <math display=\"inline\"><mi>ω</mi></math>, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y entonces <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">⃛</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover></mrow></math>. Introduciéndolo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>m</mi><mi>γ</mi><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>m</mi><msubsup><mi>ω</mi><mn>0</mn><mn>2</mn></msubsup><mi>x</mi><mo>=</mo><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">bult </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y el factor de amortiguamiento"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>τ</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es. (En el capítulo 9, al escribir <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mtext mathvariant=\"normal\">moteltze </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>−</mi><mi>γ</mi><mi>m</mi><mi>v</mi></mrow></math>, admitimos por sencillez que el amortiguamiento era proporcional a la velocidad; ahora sabemos que el amortiguamiento por radiación, al menos, es proporcional a <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></math>. Pero eso importa poco: en las oscilaciones sinusoidales, cualquier derivada impar de <math display=\"inline\"><mi>v</mi></math> es proporcional a <math display=\"inline\"><mi>v</mi></math>.) Como <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>m</mi><mi>c</mi></mrow></math> es muy pequeño, ese amortiguamiento es débil lejos de las resonancias ópticas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fundamento físico de la reacción de la radiación"
    },
    {
     "mota": "testua",
     "html": "En el apartado anterior hemos deducido la fórmula de Abraham–Lorentz a partir de la conservación de la energía, pero sin identificar el <strong>mecanismo</strong> de esa fuerza. El mecanismo es una autofuerza: la reacción de los campos de la propia carga sobre ella misma. Como los campos de una carga puntual se hacen infinitos en la propia partícula, calcular esa fuerza directamente es difícil; por eso se toma una carga <strong>extensa</strong> (con el campo finito en todas partes) y, al final, se lleva el tamaño a cero."
    },
    {
     "mota": "testua",
     "html": "En general, la fuerza electromagnética que una parte de una distribución de carga (<math display=\"inline\"><mi>A</mi></math>) ejerce sobre otra parte (<math display=\"inline\"><mi>B</mi></math>) no es igual y opuesta a la que <math display=\"inline\"><mi>B</mi></math> ejerce sobre <math display=\"inline\"><mi>A</mi></math>: la tercera ley de Newton se viola dentro de la distribución, y la suma de todos los desequilibrios es una <strong>fuerza neta de la carga sobre sí misma</strong>: la autofuerza, responsable de la reacción de la radiación. Un modelo sencillo es una &quot;mancuerna&quot;: la carga total <math display=\"inline\"><mi>q</mi></math> dividida en dos mitades iguales, a una distancia <math display=\"inline\"><mi>d</mi></math>. Moviéndose en la dirección <math display=\"inline\"><mi>x</mi></math> y estando en reposo en el tiempo retardado, calculando la fuerza de interacción entre las dos mitades y desarrollándola en potencias de <math display=\"inline\"><mi>d</mi></math>, cuando el tamaño tiende a cero solo sobrevive un término (además de la corrección de masa):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi mathvariant=\"bold-italic\">𝑭</mi><mtext mathvariant=\"normal\">rad</mtext><mrow><mtext mathvariant=\"normal\">int </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esto es solo la mitad de la fórmula de Abraham–Lorentz, porque el término de interacción es (la fuerza de una mitad sobre la otra). Sumando la fuerza que cada mitad ejerce sobre sí misma, el resultado total"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es, recuperando exactamente la fórmula de Abraham–Lorentz. <strong>Conclusión:</strong> la reacción de la radiación es la fuerza de la carga sobre sí misma; más precisamente, la fuerza neta que ejercen entre sí los campos generados por las distintas partes de la distribución de carga. Otro término que aparece en el mismo cálculo (proporcional a <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒂</mi></math>) se suma a la masa de la partícula; la divergencia de esa masa electromagnética en el límite <math display=\"inline\"><mrow><mi>d</mi><mo>→</mo><mn>0</mn></mrow></math> es un problema conocido de la física clásica, que en la electrodinámica cuántica se &quot;oculta&quot; como <strong>renormalización de la masa</strong>."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Ejercicios resueltos (del manual de Griffiths)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes son problemas del libro <strong>Introduction to Electrodynamics</strong> de Griffiths (capítulo 11, radiación), con la solución del manual del profesor, traducidos al euskera para JAKINA."
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Griffiths 11.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comprueba que los potenciales retardados de un dipolo eléctrico oscilante (ecuaciones 11.12 y 11.17) satisfacen la condición de Lorenz. No uses la aproximación de la zona lejana: el cálculo no debe limitarse a la zona de radiación."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Escribiendo <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, para un dipolo oscilante orientado en la dirección <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mi>ω</mi><mi>c</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En coordenadas esféricas, como <math display=\"inline\"><mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mi>r</mi></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mi>θ</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La condición de Lorenz es <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mi>∂</mi><mi>V</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Divergencia de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math>.</strong>  Sin dependencia de <math display=\"inline\"><mi>φ</mi></math>, <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>∂</mi><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>A</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>r</mi><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>∂</mi><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mi>A</mi><mi>θ</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>. Usando <math display=\"inline\"><mrow><mi>∂</mi><mi>ψ</mi><mi>/</mi><mi>∂</mi><mi>r</mi><mo>=</mo><mi>−</mi><mi>ω</mi><mi>/</mi><mi>c</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>∂</mi><mi>r</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>A</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><mrow><mi>c</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mi>A</mi><mi>θ</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mi>/</mi><mn>4</mn><mi>π</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msub><mi>∂</mi><mi>θ</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><msub><mi>A</mi><mi>θ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sumando las dos contribuciones,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><mrow><mi>c</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Derivada temporal de <math display=\"inline\"><mi>V</mi></math>.</strong>  Como <math display=\"inline\"><mrow><mi>∂</mi><mi>ψ</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>ω</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>t</mi></msub><mi>V</mi><mo>=</mo><mfrac><mrow><msub><mi>p</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi>c</mi></mfrac><mi mathvariant=\"normal\">cos</mi><mi>ψ</mi><mo>−</mo><mfrac><mi>ω</mi><mi>r</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y multiplicando por <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>∂</mi><mi>t</mi></msub><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ω</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><mrow><mi>c</mi><mi>r</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ψ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑨</mi><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>V</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Resultado.</strong> Los potenciales retardados completos del dipolo oscilante satisfacen la condición de Lorenz; la comprobación utiliza los términos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math> de <math display=\"inline\"><mi>V</mi></math>, de modo que no depende de la aproximación de la zona lejana."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), p. 231: problema 11.1. Ambas ediciones tienen el mismo número."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Griffiths 11.3",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla la <strong>resistencia de radiación</strong> del hilo que une los dos extremos del dipolo: es decir, la resistencia que disiparía en forma de calor la misma potencia media que el dipolo pierde en forma de radiación. Demuestra que es <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>790</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>/</mi><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> ohmios, siendo <math display=\"inline\"><mi>λ</mi></math> la longitud de onda de la radiación. Con los hilos de una radio corriente (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>5</mn></mrow></math> cm), ¿tendrías que preocuparte por la contribución radiativa a la resistencia total?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La corriente en el dipolo es <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>q</mi><mn>0</mn></msub><mi>ω</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (ecuación 11.15), de modo que el valor medio temporal de <math display=\"inline\"><msup><mi>I</mi><mn>2</mn></msup></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math>. La potencia media que se disiparía por efecto Joule en una resistencia <math display=\"inline\"><mi>R</mi></math> sería"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>R</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup><mi>R</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La potencia media que el dipolo radia realmente la da, en cambio, la ecuación 11.22, tomando <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msub><mi>q</mi><mn>0</mn></msub><mi>d</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igualando ambas expresiones, <math display=\"inline\"><mrow><msubsup><mi>q</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>2</mn></msup></mrow></math> se simplifica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>d</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mn>3</mn></mfrac><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>80</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>≃</mo><mn>790</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>d</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Números.</strong> En una radio corriente, tomando <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>5</mn></mrow></math> cm y, por ejemplo, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>R</mi><mo>≃</mo><mn>790</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> ohmios. Ese valor es despreciable frente a la resistencia óhmica del hilo: la pérdida por radiación no es motivo de preocupación en las antenas cortas."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), p. 231: problema 11.3 (mismo número en ambas ediciones). El resultado exacto es <math display=\"inline\"><mrow><mn>80</mn><msup><mi>π</mi><mn>2</mn></msup><mo>=</mo><mn>789.6</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Griffiths 11.4",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un dipolo eléctrico giratorio puede entenderse como la superposición de dos dipolos oscilantes, uno sobre el eje <math display=\"inline\"><mi>x</mi></math> y otro sobre el eje <math display=\"inline\"><mi>y</mi></math>, este último desfasado <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Usando el principio de superposición y las ecuaciones 11.18–11.19, halla los campos del dipolo giratorio, el vector de Poynting y la intensidad de la radiación. Dibuja el patrón de intensidad en función del ángulo <math display=\"inline\"><mi>θ</mi></math>, y calcula la potencia total radiada. ¿Es razonable el resultado?"
      },
      {
       "mota": "irudia",
       "oina": "Dipolo eléctrico giratorio en el plano <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>:\n    el vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> gira con frecuencia <math display=\"inline\"><mi>ω</mi></math>,\n    con cargas <math display=\"inline\"><mrow><mi>+</mi><mi>q</mi></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>q</mi></mrow></math> en los extremos.",
       "src": "../media/irudiak/f99af94d809eb130.svg",
       "zabalera": 179
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El campo radiativo de un dipolo en la dirección <math display=\"inline\"><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></math> puede escribirse como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mi>π</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (11.18, en coordenadas cartesianas). Por superposición, sumando los dipolos de los ejes <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><mi>x</mi><mi>r</mi></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><mi>y</mi><mi>r</mi></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mn>1</mn><mi>c</mi></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Vector de Poynting.</strong>  Como <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>E</mi><mn>2</mn></msup><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>p</mi><mn>0</mn></msub><msup><mi>ω</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Promediando en el tiempo (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Patrón.</strong> La intensidad es proporcional a <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>: máxima en el eje de giro del dipolo (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>, valor <math display=\"inline\"><mn>1</mn></math>) y mínima en el plano de giro (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>, valor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>): una rosquilla aplastada, a la inversa del <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math> de un dipolo único."
    },
    {
     "mota": "testua",
     "html": "<strong>Potencia total.</strong> Integrando sobre una esfera,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>16</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mn>2</mn><mi>π</mi><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>¿Es razonable?</strong> Un dipolo oscilante único radia <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (11.22); el resultado de aquí es el doble. Como la potencia es cuadrática en los campos, en principio no debería depender de la superposición; pero como los dos dipolos están desfasados <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, en el promedio temporal el término cruzado se anula y las potencias se suman. Por eso parece que se cumple la superposición."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), pp. 232–233: problema 11.4 (mismo número en ambas ediciones)."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Griffiths 11.6",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halla la resistencia de radiación del dipolo magnético oscilante (problema 11.3), para una espira de radio <math display=\"inline\"><mi>b</mi></math>. Expresa el resultado en función de <math display=\"inline\"><mi>λ</mi></math> y de <math display=\"inline\"><mi>b</mi></math>, y compáralo con la resistencia de radiación del dipolo eléctrico."
      },
      {
       "mota": "irudia",
       "oina": "Espira de radio <math display=\"inline\"><mi>b</mi></math>, corriente <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y dipolo magnético <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
       "src": "../media/irudiak/1e5f017db005484d.svg",
       "zabalera": 182
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La corriente en la espira es <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>I</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>I</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup></mrow></math> y, por efecto Joule, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup><mi>R</mi></mrow></math>. La potencia media que radia el dipolo magnético la da la ecuación 11.40, tomando <math display=\"inline\"><mrow><msub><mi>m</mi><mn>0</mn></msub><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msub><mi>I</mi><mn>0</mn></msub></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>π</mi><mn>2</mn></msup><msup><mi>b</mi><mn>4</mn></msup><msubsup><mi>I</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>12</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igualando ambas expresiones,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>π</mi><msup><mi>b</mi><mn>4</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>π</mi><msup><mi>b</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>=</mo><mfrac><mn>8</mn><mn>3</mn></mfrac><msup><mi>π</mi><mn>5</mn></msup><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>b</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>≃</mo><mn>3.08</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>b</mi><mi>λ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"normal\">Ω</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Comparación.</strong> La resistencia de radiación del dipolo eléctrico depende de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>/</mi><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> (11.3), y la del magnético de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>λ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow></math>. Como <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>λ</mi></mrow></math>, la cuarta potencia hace mucho menor la resistencia magnética. Con las dimensiones del problema 11.3 (<math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>5</mn></mrow></math> cm, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math> m), <math display=\"inline\"><mrow><mi>R</mi><mo>≃</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>5</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></mrow></math> ohmios: una millonésima de la resistencia de radiación del dipolo eléctrico."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), p. 234: problema 11.6 (mismo número en ambas ediciones)."
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Griffiths 11.12",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una corriente <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> circula por una espira circular pequeña. Deduce la fórmula general de la potencia radiada, expresada mediante el momento dipolar magnético <math display=\"inline\"><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la espira."
      },
      {
       "mota": "irudia",
       "oina": "Espira pequeña de radio <math display=\"inline\"><mi>b</mi></math>, corriente <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y momento dipolar <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; punto de observación <math display=\"inline\"><mi>P</mi></math>\n  bajo el ángulo <math display=\"inline\"><mi>θ</mi></math>.",
       "src": "../media/irudiak/1e5f017db005484d.svg",
       "zabalera": 182
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como la espira es neutra, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>. El potencial vector retardado de un filamento de corriente es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∫</mo><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>r</mi><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup></mrow></math>. Si el radio de la espira es <math display=\"inline\"><mi>b</mi></math> y el punto de observación está lejos, el término de orden cero del desarrollo angular se anula porque <math display=\"inline\"><mrow><mo>∫</mo><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>; por tanto deben conservarse los términos de primer orden en <math display=\"inline\"><mi>b</mi></math>. En la zona de radiación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mi>I</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y el momento magnético de la espira es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒎</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Ese <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑨</mi></math> de la zona lejana procede del desarrollo de primer orden. Sustituyendo <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi><mo>≃</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mi mathvariant=\"normal\">cos</mi><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>r</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≃</mo><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>I</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math>, y usando que <math display=\"inline\"><mrow><mi>d</mi><msup><mi mathvariant=\"bold-italic\">𝒍</mi><mo>′</mo></msup><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><msup><mi>φ</mi><mo>′</mo></msup><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">cos</mi><msup><mi>φ</mi><mo>′</mo></msup><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><msup><mi>φ</mi><mo>′</mo></msup></mrow></math>, solo los términos de primer orden dan <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><msup><mi>φ</mi><mo>′</mo></msup><mi>d</mi><msup><mi>φ</mi><mo>′</mo></msup><mo>=</mo><mi>π</mi></mrow></math> (las demás integrales <math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math>, <math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math> y <math display=\"inline\"><mrow><mo>∫</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><msup><mi>φ</mi><mo>′</mo></msup></mrow></math> son nulas); así se obtiene <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑨</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>I</mi><mo>′</mo></msup><mi>/</mi><mi>c</mi><mo>+</mo><mi>I</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, y en la zona lejana, al descartar el término <math display=\"inline\"><mrow><mi>I</mi><mi>/</mi><mi>r</mi></mrow></math> (de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></math>), queda la expresión de arriba."
    },
    {
     "mota": "testua",
     "html": "<strong>Campos de radiación.</strong>  Como <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑨</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>; conservando solo los términos radiativos <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mrow><mtext mathvariant=\"normal\">rad</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El campo magnético radiativo es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mtext mathvariant=\"normal\">rad</mtext></msub></mrow></math>; como <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mover><mi>φ</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑩</mi><mrow><mtext mathvariant=\"normal\">rad</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mi>r</mi></mfrac><mover><mi>θ</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Vector de Poynting.</strong>  <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math> Sustituyendo esos campos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑺</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>b</mi><mn>4</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>16</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integrando sobre una esfera grande, como <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>8</mn><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>π</mi><msup><mi>b</mi><mn>4</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>6</mn><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msup><mi>m</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup><msup><mi>I</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>m</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El patrón angular es proporcional a <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>: no hay radiación en el eje del dipolo magnético, y la emisión es máxima en el plano de la espira."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), p. 236: problema 11.11 de la 4.ª edición (11.12 en la 3.ª). Mejora T5: se ha añadido el paso del desarrollo de primer orden de <math display=\"inline\"><mi>b</mi></math>, siguiendo el método del manual."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Griffiths 11.14",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la teoría de Bohr del hidrógeno, el electrón en el estado fundamental describía una circunferencia de radio <math display=\"inline\"><mrow><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></mrow></math> m, sostenido en órbita por la atracción de Coulomb del protón. Según la electrodinámica clásica, ese electrón debería radiar y, por tanto, caer en espiral hacia el núcleo. Demuestra que <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math> en la mayor parte de la trayectoria (para poder usar la fórmula de Larmor), y calcula la vida del átomo de Bohr. (Supón que cada vuelta es esencialmente circular.)"
      },
      {
       "mota": "irudia",
       "oina": "El electrón cayendo en espiral hacia el núcleo,\n    mientras pierde energía por radiación.",
       "src": "../media/irudiak/5b657a1c6cd04c87.svg",
       "zabalera": 137
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Velocidad.</strong> En la órbita circular la fuerza de Coulomb es centrípeta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>q</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><mi>r</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el radio inicial <math display=\"inline\"><mrow><msub><mi>r</mi><mn>0</mn></msub><mo>=</mo><mn>0.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>v</mi><mi>/</mi><mi>c</mi><mo>≃</mo><mn>0.0075</mn><mo>≪</mo><mn>1</mn></mrow></math>; al disminuir el radio, <math display=\"inline\"><mi>v</mi></math> aumenta, pero en casi toda la trayectoria <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>, así que puede usarse la fórmula de Larmor."
    },
    {
     "mota": "testua",
     "html": "<strong>Larmor y conservación de la energía.</strong> La aceleración centrípeta es <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>r</mi><mo>=</mo><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y Larmor da <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La energía total del electrón"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>q</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es (por el virial, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>). Como la energía se pierde por radiación, <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mi>P</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Reuniendo los términos que dependen de <math display=\"inline\"><mi>r</mi></math> e integrando (de <math display=\"inline\"><msub><mi>r</mi><mn>0</mn></msub></math> a <math display=\"inline\"><mn>0</mn></math>),"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><mi>c</mi></mrow><msup><mi>q</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi>d</mi><mi>r</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>τ</mi><mo>=</mo><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi><mi>c</mi></mrow><msup><mi>q</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msubsup><mi>r</mi><mn>0</mn><mrow><mn>3</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo los números,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>≃</mo><mn>1.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>s</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Así, el átomo clásico colapsaría en una escala de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup></math> segundos: precisamente el resultado que muestra que la electrodinámica clásica no puede explicar la estabilidad del átomo de hidrógeno."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), pp. 237–238: problema 11.14 (mismo número en ambas ediciones)."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Griffiths 11.17",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de carga <math display=\"inline\"><mi>q</mi></math> describe una circunferencia de radio <math display=\"inline\"><mi>R</mi></math> con velocidad constante <math display=\"inline\"><mi>v</mi></math>. Para mantener el movimiento tienes que aportar la fuerza centrípeta <math display=\"inline\"><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mi>R</mi></mrow></math>; ¿qué fuerza <strong>adicional</strong> (<math display=\"inline\"><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub></math>) tienes que ejercer para contrarrestar la reacción de la radiación? ¿Qué potencia (<math display=\"inline\"><msub><mi>P</mi><mi>e</mi></msub></math>) suministra esa fuerza? Compárala con la potencia radiada <math display=\"inline\"><msub><mi>P</mi><mi>e</mi></msub></math> (Larmor). (b) Repite el cálculo para un movimiento armónico simple de amplitud <math display=\"inline\"><mi>A</mi></math> y frecuencia <math display=\"inline\"><mi>ω</mi></math>; explica la discrepancia. (c) Analiza el caso de la caída libre (aceleración constante <math display=\"inline\"><mi>g</mi></math>): ¿cuál es la fuerza de reacción de la radiación y cuál la potencia radiada?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>(a) Movimiento circular.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, luego <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math> y <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>. La fuerza de Abraham–Lorentz es <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>; para contrarrestarla"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mi>e</mi></msub><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Larmor da <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y como <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>),"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>P</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La potencia suministrada y la radiada son iguales en todo momento."
    },
    {
     "mota": "testua",
     "html": "<strong>(b) Movimiento armónico simple.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒗</mi></mrow></math>; como antes <math display=\"inline\"><mrow><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn><mi>π</mi><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>A</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Pero ahora <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>A</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msup><mi>ω</mi><mn>4</mn></msup><msup><mi>A</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><msub><mi>P</mi><mi>e</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En cada instante no coinciden (<math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math> frente a <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math>), pero como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, en un ciclo completo tienen el mismo promedio: la energía suministrada y la radiada son iguales. Mientras tanto, la energía se almacena por momentos en los campos circundantes."
    },
    {
     "mota": "testua",
     "html": "<strong>(c) Caída libre.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>g</mi><mi>t</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> (aceleración <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒂</mi><mo>=</mo><mi>g</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover></mrow></math> constante), luego <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn></mrow></math> y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mover><mi mathvariant=\"bold-italic\">𝒂</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi>e</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sin embargo, Larmor da radiación:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>g</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hay radiación, pero la fuerza de reacción de la radiación es nula: la energía sale continuamente de los campos circundantes. Esta paradoja persiste incluso en la solución exacta (problema 11.31)."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), p. 240: problema 11.17 (mismo número en ambas ediciones)."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Griffiths 11.21",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> y carga <math display=\"inline\"><mi>q</mi></math> cuelga del techo de un muelle de constante <math display=\"inline\"><mi>k</mi></math>. Su posición de equilibrio está a una altura <math display=\"inline\"><mi>h</mi></math> del suelo. Se desplaza una distancia <math display=\"inline\"><mi>d</mi></math> de la posición de equilibrio y se suelta en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Bajo la hipótesis <math display=\"inline\"><mrow><mi>d</mi><mo>≪</mo><mi>λ</mi><mo>≪</mo><mi>h</mi></mrow></math>, calcula la intensidad de la radiación que llega al suelo en función de la distancia <math display=\"inline\"><mi>R</mi></math> al punto situado bajo la carga; halla dónde es máxima; comprueba el resultado integrando sobre todo el suelo; y estima el tiempo que tarda la amplitud en bajar de <math display=\"inline\"><mi>d</mi></math> a <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mi>e</mi></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": "La carga <math display=\"inline\"><mi>q</mi></math> oscilando en el muelle a altura <math display=\"inline\"><mi>h</mi></math>\n    radia hacia un punto del suelo a distancia <math display=\"inline\"><mi>R</mi></math>.",
       "src": "../media/irudiak/e256865e84a6c900.svg",
       "zabalera": 243
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La carga oscila verticalmente con frecuencia <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>m</mi></mrow></msqrt></mrow></math>; la amplitud inicial del momento dipolar eléctrico es <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>q</mi><mi>d</mi></mrow></math>. Para un dipolo eléctrico oscilante, el valor medio del vector de Poynting"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"bold-italic\">𝑺</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>p</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mover><mi>r</mi><mo accent=\"true\">̂</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da."
    },
    {
     "mota": "testua",
     "html": "<strong>Intensidad en el suelo.</strong> La intensidad que recibe el suelo es la componente normal del flujo. En la geometría <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msqrt><mrow><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>R</mi><mi>/</mi><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>r</mi></mrow></math>, luego"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">lur</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><mi>c</mi></mrow></mfrac><mfrac><mrow><msup><mi>R</mi><mn>2</mn></msup><mi>h</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para maximizar basta maximizar <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>; resolviendo <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>5</mn><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, es decir"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>h</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Potencia total que llega al suelo.</strong> Integrando en anillos de suelo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">lur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msub><mi>I</mi><mrow><mtext mathvariant=\"normal\">lur</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mn>2</mn><mi>π</mi><mi>R</mi><mi>d</mi><mi>R</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup><mi>h</mi></mrow><mrow><mn>16</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msup><mi>R</mi><mn>3</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>d</mi><mi>R</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y como <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>R</mi><mn>3</mn></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>R</mi><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">lur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>24</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es la mitad de la potencia media total que radia el dipolo, <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">osoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>d</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la otra mitad se emite hacia el hemisferio superior."
    },
    {
     "mota": "testua",
     "html": "<strong>Amortiguamiento radiativo.</strong> Si la amplitud instantánea es <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la energía mecánica del oscilador es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> y la potencia total radiada <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mtext mathvariant=\"normal\">osoa</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>π</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por conservación de la energía, <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>−</mi><msub><mi>P</mi><mtext mathvariant=\"normal\">osoa</mtext></msub></mrow></math>, es decir"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>−</mi><mi>κ</mi><msubsup><mi>x</mi><mn>0</mn><mn>2</mn></msubsup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>κ</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>4</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>k</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>k</mi></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(usando <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mi>k</mi><mi>/</mi><mi>m</mi></mrow></math>). La amplitud cumple <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>κ</mi><mi>t</mi><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, y para que <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>d</mi><mi>/</mi><mi>e</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>τ</mi><mo>=</mo><mfrac><mn>2</mn><mi>κ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>12</mn><mi>π</mi><mi>c</mi><msup><mi>m</mi><mn>2</mn></msup></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), pp. 244–245: problema 11.22 de la 4.ª edición (11.21 en la 3.ª)."
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Griffiths 11.31",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Determina si la partícula radia en movimiento hiperbólico. Usa la fórmula exacta de la potencia radiada para calcular <math display=\"inline\"><mi>P</mi></math>. A continuación, determina si esa partícula sufre una fuerza de reacción de la radiación, usando la fórmula exacta del problema 11.30."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomamos la forma habitual del movimiento hiperbólico, <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi></mrow><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>a</mi><mo>=</mo><mover><mi>v</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El factor relativista cumple <math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msup><mi>b</mi><mn>2</mn></msup></mrow></math>, es decir <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt><mi>/</mi><mi>b</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Potencia radiada.</strong> Para el movimiento rectilíneo, como <math display=\"inline\"><mi>v</mi></math> y <math display=\"inline\"><mi>a</mi></math> son colineales, la fórmula exacta de Liénard"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se convierte en. Como <math display=\"inline\"><mrow><msup><mi>γ</mi><mn>6</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mi>/</mi><msup><mi>b</mi><mn>6</mn></msup><mo>⋅</mo><msup><mi>b</mi><mn>4</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><msup><mi>c</mi><mn>4</mn></msup><mi>/</mi><msup><mi>b</mi><mn>2</mn></msup></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup><msup><mi>c</mi><mn>3</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><mi>c</mi></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La potencia es constante: la partícula radia realmente en movimiento hiperbólico."
    },
    {
     "mota": "testua",
     "html": "<strong>Reacción de la radiación.</strong> Para el movimiento rectilíneo, la fuerza exacta, según indica el problema 11.30, contiene la combinación <math display=\"inline\"><mrow><mover><mi>a</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>3</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Como <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>a</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mfrac><mrow><mn>3</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mi>t</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>3</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>v</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>b</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>b</mi><mn>4</mn></msup><msup><mi>c</mi><mn>4</mn></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi></mrow><msqrt><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>b</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mi>t</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mover><mi>a</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mn>3</mn><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑭</mi><mrow><mtext mathvariant=\"normal\">rad </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Resultado.</strong> El movimiento hiperbólico produce radiación de potencia constante, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>q</mi><mn>2</mn></msup><mi>c</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>b</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, pero la fuerza de reacción de la radiación sobre la partícula es nula. Este es el punto conceptual del ejercicio: la radiación emitida y la fuerza de reacción local no aparecen necesariamente paralelas en todos los movimientos relativistas."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Manual de soluciones de Griffiths (4.ª ed.), pp. 260–261: problema 11.34 de la 4.ª edición (11.31 en la 3.ª). La &quot;fórmula exacta del problema 11.30&quot; utilizada (fuerza de reacción en movimiento rectilíneo) es la 11.33 de la 4.ª edición."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Ejercicios propuestos",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los siguientes son problemas del capítulo 11 de Griffiths, propuestos aquí sin resolver. Los números corresponden a la 3.ª edición."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcula los campos eléctrico y magnético de un dipolo magnético oscilante <strong>sin</strong> usar la tercera aproximación (la de la zona lejana). Halla el vector de Poynting, y demuestra que la intensidad de la radiación es exactamente la que se obtiene con la tercera aproximación. (Griffiths 11.5)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la transformación de &quot;dualidad&quot; del problema 7.60, junto con los campos de un dipolo eléctrico oscilante (ecuaciones 11.18 y 11.19), para determinar los campos que produciría un dipolo magnético &quot;gilbertiano&quot; oscilante, formado por cargas magnéticas iguales y opuestas. Compáralos con las ecuaciones 11.36 y 11.37, y comenta el resultado. (Griffiths 11.7)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) Suponiendo que el factor de amortiguamiento <math display=\"inline\"><mi>γ</mi></math> se debe enteramente al amortiguamiento por radiación (ecuación 11.84), demuestra que el amortiguamiento para la dispersión óptica es &quot;pequeño&quot; (<math display=\"inline\"><mrow><mi>γ</mi><mo>≪</mo><msub><mi>ω</mi><mn>0</mn></msub></mrow></math>), admitiendo que las resonancias están en el intervalo de frecuencias ópticas o cerca de él. (b) Usando los resultados del problema 9.24, estima la anchura de la región de dispersión anómala. (Griffiths 11.18)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Este capítulo desarrolla la teoría de la radiación —la radiación dipolar (eléctrica y magnética), la fórmula de Larmor para cargas puntuales aceleradas y la reacción de la radiación— con dibujos originales en CeTZ, traducido al euskera para JAKINA. </em>"
    }
   ]
  },
  {
   "id": "a48",
   "maila": 1,
   "izenburua": "Electrodinámica y relatividad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este último capítulo cierra el libro dejando a la vista algo sorprendente que ha estado oculto a plena vista a lo largo de los once anteriores: las ecuaciones de Maxwell, desarrolladas pieza a pieza a partir de experimentos estáticos, ya son plenamente compatibles con la relatividad especial; más aún, el propio magnetismo no es, en último término, sino electrostática vista desde un sistema de referencia en movimiento. La electrodinámica era relativista incluso antes de que se descubriera la relatividad."
    },
    {
     "mota": "testua",
     "html": "Empecemos por un fenómeno trabajado en los capítulos anteriores, visto ahora con ojos relativistas. Supongamos que una vía de tren pasa entre los polos de un imán gigante, y que montamos una espira conductora en un vagón de carga. Cuando la espira se mueve por el campo magnético se genera una fuerza electromotriz de movimiento; según la regla del flujo (<math display=\"inline\"><mrow><mi mathvariant=\"script\">ℰ</mi><mo>=</mo><mi>−</mi><mi>d</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>), se debe a la fuerza <strong>magnética</strong> sobre las cargas de la espira, porque las cargas se mueven junto con el tren. Pero el observador que va en el tren, como ve la espira en reposo, no puede atribuirle fuerza magnética alguna: para él es el imán el que se mueve, y un campo magnético variable induce un campo eléctrico, según la ley de Faraday; esa fuerza <strong>eléctrica</strong> es la que produce la fem. Los dos observadores miden la misma fem —el mismo número—, pero la <strong>interpretación</strong> del proceso es completamente distinta: uno la llama eléctrica, el otro magnética. Einstein no podía creer que fuera pura coincidencia; la tomó como indicio de que el electromagnetismo, como la mecánica, cumple el principio de relatividad. Este capítulo sigue ese indicio hasta el final."
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "La teoría de la relatividad especial",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los postulados de Einstein"
    },
    {
     "mota": "testua",
     "html": "La mecánica clásica cumple desde hace mucho el <strong>principio de relatividad</strong>: las mismas leyes valen en todos los sistemas de referencia inerciales. La palabra «inercial» significa un sistema en reposo o que se mueve con velocidad constante. Imagina una mesa de billar en un vagón de tren: si el tren va en línea recta y sin sacudidas con velocidad constante, el juego se desarrollará igual que en la estación, y, con las ventanillas cerradas, no podrías decir si el tren se mueve o no. Galileo dejó claro ese principio para la mecánica. La pregunta es: ¿vale también para la electrodinámica?"
    },
    {
     "mota": "testua",
     "html": "A primera vista parece que no, pues una carga en movimiento crea campo magnético y una en reposo no. Los físicos del siglo XIX creían que las ondas electromagnéticas se propagaban en un medio invisible llamado <strong>éter</strong>, y que la velocidad <math display=\"inline\"><mi>c</mi></math> debía medirse respecto del éter. De ser así, el movimiento de la Tierra respecto del éter («viento de éter») produciría una pequeña variación de la velocidad de la luz según la dirección. El magnífico experimento de Michelson y Morley, con un interferómetro óptico de precisión enorme, mostró que la velocidad de la luz era <strong>exactamente la misma</strong> en todas las direcciones: no hay viento de éter, no hay éter."
    },
    {
     "mota": "testua",
     "html": "Impulsado por el resultado de Michelson–Morley y guiado por los indicios internos de la electrodinámica (las leyes dan la respuesta correcta incluso aplicadas en el sistema «equivocado»), Einstein propuso sus dos célebres postulados: (1) el <strong>principio de relatividad</strong> —las leyes de la física adoptan la misma forma en todos los sistemas de referencia inerciales—; y (2) la <strong>universalidad de la velocidad de la luz</strong> —la velocidad de la luz en el vacío es la misma para todos los observadores inerciales, sea cual sea el movimiento de la fuente—."
    },
    {
     "mota": "testua",
     "html": "La relatividad especial se construye sobre dos postulados: las leyes de la física adoptan la misma forma en todos los sistemas de referencia inerciales, y la velocidad de la luz en el vacío, <math display=\"inline\"><mi>c</mi></math>, es la misma en todos los sistemas de referencia inerciales, sea cual sea el movimiento de la fuente. El segundo postulado es dramático, justamente porque las ecuaciones de Maxwell (capítulo 9) predicen una velocidad <strong>única</strong> para las ondas electromagnéticas, sin hacer referencia a ningún sistema privilegiado: exactamente lo que el postulado exige, y exactamente lo que la mecánica clásica (galileana) no podía explicar."
    },
    {
     "mota": "testua",
     "html": "Una consecuencia directa del segundo postulado es que debe cambiar la propia manera de sumar velocidades. Supongamos que un objeto <math display=\"inline\"><mi>A</mi></math> se mueve en el sistema <math display=\"inline\"><mi>B</mi></math> con velocidad <math display=\"inline\"><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub></math>, y que <math display=\"inline\"><mi>B</mi></math> se mueve respecto del sistema <math display=\"inline\"><mi>C</mi></math> con velocidad <math display=\"inline\"><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></math>. El sentido común —y Galileo— diría: <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></mrow></math>. Pero si <math display=\"inline\"><mi>A</mi></math> fuera un rayo de luz, el segundo postulado exige <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math>, aunque <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math>; la regla de Galileo es, pues, incompatible con el postulado. En su lugar entra la ley de adición de velocidades de Einstein:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>+</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></mrow><mrow><mn>1</mn><mo>+</mo><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A velocidades «ordinarias» (<math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>,</mo><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub><mo>≪</mo><mi>c</mi></mrow></math>) el denominador es casi <math display=\"inline\"><mn>1</mn></math> y se recupera la fórmula de Galileo; pero si hacemos <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>B</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math>, sale automáticamente <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>A</mi><mi>C</mi></mrow></msub><mo>=</mo><mi>c</mi></mrow></math>, para cualquier <math display=\"inline\"><msub><mi>v</mi><mrow><mi>B</mi><mi>C</mi></mrow></msub></math>. La relatividad, en último término, no tiene que ver con la luz misma: <math display=\"inline\"><mi>c</mi></math> es una velocidad fundamental, y la luz simplemente se mueve a esa velocidad; lo que describe la relatividad es la propia estructura del espacio y del tiempo, el «escenario» donde ocurre todo suceso físico."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La geometría de la relatividad"
    },
    {
     "mota": "testua",
     "html": "De los postulados se derivan tres consecuencias puramente geométricas, todas confirmadas con precisión extraordinaria:"
    },
    {
     "mota": "testua",
     "html": "Las tres pueden deducirse con simples <strong>experimentos mentales</strong>: la dilatación del tiempo, la contracción de la longitud y la relatividad de la simultaneidad. Tomemos la primera. Imagina un reloj de luz: una fuente en el techo de un vagón y un espejo en el suelo, con un rayo de luz que sube y baja, siendo cada «tic» una ida y vuelta."
    },
    {
     "mota": "irudia",
     "oina": "Un reloj de luz: en un sistema que se mueve lateralmente con velocidad <math display=\"inline\"><mi>v</mi></math>, la luz recorre en cada &quot;tic&quot; un camino diagonal más largo que en su sistema en reposo: el origen geométrico de la dilatación del tiempo.",
     "src": "../media/irudiak/fb5feb96bbc71585.svg",
     "zabalera": 153
    },
    {
     "mota": "testua",
     "html": "Para el observador que va en el tren, si la altura del vagón es <math display=\"inline\"><mi>h</mi></math>, la luz tarda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>h</mi><mi>/</mi><mi>c</mi></mrow></math> en llegar al suelo (señalaré con una barra las medidas hechas en el tren; en el recuadro de fórmulas, en cambio, las medidas hechas en reposo respecto del reloj se indican con una prima). Desde tierra, sin embargo, el mismo rayo recorre un camino más largo, porque el propio tren avanza: como se ve en la figura de arriba, esa distancia es <math display=\"inline\"><msqrt><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></math>, y por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><msqrt><mrow><msup><mi>h</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mi>/</mi><mi>c</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, y comparando las dos medidas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El tiempo transcurrido entre los <strong>mismos</strong> sucesos es, pues, distinto para los dos observadores: el intervalo medido por el reloj del tren, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, es más corto en un factor <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. La consecuencia puede resumirse en una sola frase: <strong>los relojes en movimiento marchan más despacio.</strong> Esto no es cuestión de mecanismos de relojería, sino una afirmación sobre la naturaleza del tiempo, que vale para cualquier aparato de medida."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Dilatación del tiempo, contracción de la longitud",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mi>γ</mi><mi mathvariant=\"normal\">Δ</mi><msup><mi>t</mi><mo>′</mo></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>l</mi><mo>=</mo><mi>l</mi><mfrac><mi>′</mi><mi>γ</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde las magnitudes con prima se miden en el sistema en que el reloj (o el objeto) está en reposo."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "De todas las predicciones de Einstein, ninguna se ha confirmado de manera tan visible como la dilatación del tiempo. La mayoría de las partículas elementales son inestables: tras una vida determinada, se desintegran. Pero cuando se mueven a gran velocidad duran mucho más, porque sus relojes internos marchan despacio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.1 — Alargamiento de la vida de un muón"
    },
    {
     "mota": "testua",
     "html": "Un muón se mueve por el laboratorio con una velocidad de tres quintos de la velocidad de la luz (<math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>c</mi></mrow></math>). ¿Cuánto dura? En este caso"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>5</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "luego dura un factor <math display=\"inline\"><mrow><mn>5</mn><mi>/</mi><mn>4</mn></mrow></math> más que en reposo. Como la vida de un muón en reposo es <math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mn>5</mn><mn>4</mn></mfrac><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este efecto es real y se mide a diario en los aceleradores y en los muones de los rayos cósmicos: de lo contrario, los muones producidos en la alta atmósfera se desintegrarían mucho antes de llegar al nivel del suelo, pero gracias a la dilatación del tiempo llegan."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.2 — La paradoja de los gemelos"
    },
    {
     "mota": "testua",
     "html": "En su 21.º cumpleaños, una astronauta parte en un cohete con velocidad <math display=\"inline\"><mrow><mfrac><mn>12</mn><mn>13</mn></mfrac><mi>c</mi></mrow></math>. Tras 5 años según su reloj, da la vuelta y regresa a casa con la misma velocidad, junto a su hermano gemelo, que se ha quedado en casa. ¿Cuántos años tiene cada uno al reencontrarse? La gemela viajera ha envejecido 10 años (5 de ida, 5 de vuelta); por tanto llega a celebrar su 31.º cumpleaños. Pero, visto desde la Tierra, el reloj en movimiento ha marchado más despacio, en este factor:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>12</mn><mi>/</mi><mn>13</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>13</mn><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El tiempo transcurrido en los relojes terrestres es <math display=\"inline\"><mrow><mn>13</mn><mi>/</mi><mn>5</mn><mo>×</mo><mn>10</mn><mo>=</mo><mn>26</mn></mrow></math> años; el hermano celebrará su 47.º cumpleaños: ¡ahora es 16 años mayor que su hermana gemela! Pero no es una fuente de juventud: la hermana no ha vivido más, sino más despacio; todos sus procesos biológicos (metabolismo, pulso, pensamiento) han estado sujetos a la misma dilatación del tiempo. La «paradoja» surge cuando se quiere contar la historia desde el punto de vista de la viajera; pero los dos gemelos <strong>no son equivalentes</strong>: la viajera sufre una aceleración al dar la vuelta, y el hermano no; por eso la viajera no puede reclamar ser un observador en reposo."
    },
    {
     "mota": "testua",
     "html": "La tercera consecuencia —la contracción de la longitud— puede deducirse poniendo el reloj de luz tumbado: con una fuente y un espejo en los extremos de un vagón, y comparando el tiempo de ida y vuelta en los dos sistemas, se obtiene <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>, donde <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math> es la longitud en reposo del objeto (medida en su propio sistema) y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> la longitud con que se lo ve en movimiento. Es decir: <strong>los objetos en movimiento se acortan</strong>, en el mismo factor <math display=\"inline\"><mi>γ</mi></math>, pero solo en la dirección del movimiento; las direcciones perpendiculares no se contraen."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.3 — La paradoja del establo y la escalera"
    },
    {
     "mota": "testua",
     "html": "Un granjero tiene una escalera demasiado larga para guardarla en su establo. Tras leer sobre la relatividad, se le ocurre una solución: le pide a su hija que lleve la escalera corriendo; la escalera en movimiento, contraída por Lorentz, cabría en el establo, y el granjero cerraría la puerta tras ella. La hija, sin embargo, le advierte de esto: en <strong>su</strong> sistema de referencia es el establo el que se contrae, no la escalera, y por tanto cabría todavía peor. ¿Quién tiene razón? ¡Los dos! Decir «la escalera está en el establo» significa que todas sus partes están dentro <strong>en el mismo instante</strong>, pero esa es una condición que depende de la relatividad de la simultaneidad. Hay dos sucesos: (a) la parte trasera de la escalera entra por la puerta, y (b) la parte delantera de la escalera llega a la pared del fondo del establo. El granjero dice que <math display=\"inline\"><mi>a</mi></math> ocurre antes que <math display=\"inline\"><mi>b</mi></math> (por tanto, hay un instante en que toda la escalera está dentro); la hija dice que <math display=\"inline\"><mi>b</mi></math> ocurre antes que <math display=\"inline\"><mi>a</mi></math> (no hay tal instante). No es una contradicción, sino una diferencia de punto de vista. Si la escalera se detiene, se pierde en la relatividad la propia «rigidez», y el resultado exacto queda indeterminado: la pared tiene que ceder, o la escalera romperse."
    },
    {
     "mota": "testua",
     "html": "También la simultaneidad es relativa: dos sucesos simultáneos en un sistema <strong>no</strong> lo son, en general, en un sistema que se mueve respecto del primero; un hecho sin análogo alguno en la mecánica de Newton, y la más profunda de las tres consecuencias geométricas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Las transformaciones de Lorentz"
    },
    {
     "mota": "testua",
     "html": "Las coordenadas <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> de dos sistemas, si <math display=\"inline\"><mi>v</mi></math> se mueve con velocidad <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> a lo largo del eje <math display=\"inline\"><mi>x</mi></math> compartido, se relacionan así:"
    },
    {
     "mota": "testua",
     "html": "¿De dónde vienen? Todo proceso físico está formado por <strong>sucesos</strong>: un suceso es algo que ocurre en un lugar determinado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y en un instante determinado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El físico clásico, suponiendo que los orígenes coinciden en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, escribiría el «vocabulario» de Galileo: <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></math>. Las tres últimas son medidas perpendiculares a la dirección del movimiento, o el tiempo universal supuesto; la cuarta, precisamente, falla ahí, porque el tiempo no es el mismo para todos los observadores. Y la primera también necesita una corrección, ya que una vara en movimiento se ve contraída desde <math display=\"inline\"><mi>S</mi></math> (porque <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msup><mi>x</mi><mo>′</mo></msup><mi>/</mi><mi>γ</mi></mrow></math>, donde <math display=\"inline\"><mi>d</mi></math> es la distancia original). Sustituyendo, se completa el vocabulario de la relatividad:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Transformación de Lorentz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>v</mi><mfrac><mi>x</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El vocabulario inverso se obtiene cambiando el signo de <math display=\"inline\"><mi>v</mi></math>, como dicta la simetría de la situación: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi><msup><mi>t</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>t</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El término <math display=\"inline\"><mrow><mi>−</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow></math> de la cuarta ecuación es la falta de sincronización de los relojes en movimiento: los relojes más alejados del origen de coordenadas muestran un desfase cada vez mayor."
    },
    {
     "mota": "testua",
     "html": "Estas se reducen a la conocida transformación de Galileo (<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>t</mi></mrow></math>) en el límite <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>: la intuición ordinaria de Newton no es más que la aproximación de baja velocidad de una geometría más general."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.4 — Simultaneidad, sincronización y dilatación del tiempo"
    },
    {
     "mota": "testua",
     "html": "Supongamos que el suceso <math display=\"inline\"><mi>A</mi></math> ocurre en <math display=\"inline\"><mrow><msub><mi>x</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, en el punto <math display=\"inline\"><mrow><msub><mi>t</mi><mi>A</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y el suceso <math display=\"inline\"><mi>B</mi></math> en <math display=\"inline\"><mrow><msub><mi>x</mi><mi>B</mi></msub><mo>=</mo><mi>b</mi></mrow></math>, en el punto <math display=\"inline\"><mrow><msub><mi>t</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Son simultáneos en <math display=\"inline\"><mi>S</mi></math> (ambos en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>). Pero <strong>no</strong> lo son en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>: las transformaciones de Lorentz dan <math display=\"inline\"><mrow><msubsup><mi>x</mi><mi>A</mi><mo>′</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>t</mi><mi>A</mi><mo>′</mo></msubsup><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>x</mi><mi>B</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>t</mi><mi>B</mi><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>b</mi></mrow></math>. Según los relojes de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, por tanto, <math display=\"inline\"><mi>B</mi></math> ha ocurrido antes: la relatividad de la simultaneidad, salida directamente de las transformaciones de Lorentz. Además, si en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> miramos todos los relojes de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, leen <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></mrow></math>: los de la izquierda del origen están <strong>adelantados</strong>, y los de la derecha <strong>atrasados</strong>: de nuevo la falta de sincronización de los relojes en movimiento."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.5 — Contracción de la longitud a partir de la transformación de Lorentz"
    },
    {
     "mota": "testua",
     "html": "Supongamos que una vara se mueve hacia la derecha con velocidad <math display=\"inline\"><mi>v</mi></math>; su longitud en reposo (medida en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>) es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><msubsup><mi>x</mi><mrow><mtext mathvariant=\"normal\">esk </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>x</mi><mtext mathvariant=\"normal\">ezk</mtext><mo>′</mo></msubsup></mrow></math>. El observador de <math display=\"inline\"><mi>S</mi></math> debe medir las posiciones de los dos extremos <strong>en el mismo instante de su tiempo</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mrow><mtext mathvariant=\"normal\">esk </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>x</mi><mtext mathvariant=\"normal\">ezk</mtext></msub></mrow></math>. De la primera ecuación de Lorentz, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>, es decir"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>γ</mi></mfrac><mspace width=\"0.167em\"></mspace><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es la fórmula clásica de la contracción de la longitud. Aquí se mantiene fija <math display=\"inline\"><mi>t</mi></math> (porque la medida se hace en <math display=\"inline\"><mi>S</mi></math>, marcando los dos extremos a la vez); en la dilatación del tiempo, en cambio, lo que se fijaba era <math display=\"inline\"><msup><mi>x</mi><mo>′</mo></msup></math> (porque se miraba un <strong>único</strong> reloj en movimiento)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.6 — Ley de adición de velocidades"
    },
    {
     "mota": "testua",
     "html": "Diferenciando la transformación de Lorentz se obtiene la regla relativista de adición de velocidades, el sustituto correcto del <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi></mrow></math> ingenuo de Galileo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Adición relativista de velocidades",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mo>′</mo></msup><mi>v</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> es la velocidad de un objeto en el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, y <math display=\"inline\"><mi>u</mi></math> su velocidad en <math display=\"inline\"><mi>S</mi></math> (ambas a lo largo del eje compartido)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A diferencia de la fórmula de Galileo, esta nunca da un resultado que supere <math display=\"inline\"><mi>c</mi></math>: poniendo <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>c</mi></mrow></math> (la luz, en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>), se obtiene exactamente <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>+</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>v</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi></mrow></math>, sea cual sea <math display=\"inline\"><mi>v</mi></math>; la ley de adición de velocidades está construida para respetar automáticamente el segundo postulado."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: adición relativista de velocidades"
    },
    {
     "mota": "testua",
     "html": "Una nave espacial se mueve con velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>0.8</mn><mi>c</mi></mrow></math> respecto de la Tierra. Lanza una sonda hacia delante, con velocidad <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>0.6</mn><mi>c</mi></mrow></math> respecto de sí misma. ¿Qué velocidad mide para la sonda un observador de la Tierra?"
    },
    {
     "mota": "testua",
     "html": "La suma ingenua (galileana) daría <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0.8</mn><mi>c</mi><mo>+</mo><mn>0.6</mn><mi>c</mi><mo>=</mo><mn>1.4</mn><mi>c</mi></mrow></math>: ya es una señal de alarma, porque nada puede superar <math display=\"inline\"><mi>c</mi></math>. La fórmula relativista, en cambio, da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mn>0.6</mn><mi>c</mi><mo>+</mo><mn>0.8</mn><mi>c</mi></mrow><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1.4</mn><mi>c</mi></mrow><mn>1.48</mn></mfrac><mo>≈</mo><mn>0.946</mn><mi>c</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "—tranquilamente por debajo de <math display=\"inline\"><mi>c</mi></math>, como debe ser. Obsérvese que incluso combinando dos fracciones grandes de <math display=\"inline\"><mi>c</mi></math> (0,6 y 0,8), el resultado queda muy por debajo de <math display=\"inline\"><mi>c</mi></math>; <math display=\"inline\"><mi>c</mi></math> combinada con cualquier <math display=\"inline\"><mi>v</mi></math> solo llega exactamente a <math display=\"inline\"><mi>c</mi></math>, de acuerdo con la invariancia de la velocidad de la luz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La estructura del espacio-tiempo"
    },
    {
     "mota": "testua",
     "html": "Reuniendo el espacio y el tiempo en un único cuadrivector, <math display=\"inline\"><mrow><msup><mi>x</mi><mi>μ</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la transformación de Lorentz actúa como una aplicación lineal que conserva el <strong>intervalo invariante</strong>:"
    },
    {
     "mota": "testua",
     "html": "Para compactar la notación, se definen <math display=\"inline\"><mrow><msup><mi>x</mi><mn>0</mn></msup><mo>=</mo><mi>c</mi><mi>t</mi></mrow></math> (el tiempo medido en metros), <math display=\"inline\"><mrow><msup><mi>x</mi><mn>1</mn></msup><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><mi>z</mi></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>c</mi></mrow></math>. Entonces la transformación de Lorentz es una simple aplicación lineal, <math display=\"inline\"><mrow><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>μ</mi></msup><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow><mn>3</mn></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>ν</mi><mi>μ</mi></msubsup><mspace width=\"0.167em\"></mspace><msup><mi>x</mi><mi>ν</mi></msup></mrow></math>, donde <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> es la matriz de transformación (para una transformación a lo largo de <math display=\"inline\"><mi>x</mi></math>, con los términos <math display=\"inline\"><mi>γ</mi></math> y <math display=\"inline\"><mrow><mi>−</mi><mi>γ</mi><mi>β</mi></mrow></math>). Se llama <strong>cuadrivector</strong> a cualquier conjunto de cuatro componentes que se transforme como <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>0</mn></msup><mo>,</mo><msup><mi>x</mi><mn>1</mn></msup><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Igual que en las rotaciones una matriz de giro mezcla las componentes de los 3-vectores, aquí la transformación de Lorentz mezcla las de los cuadrivectores."
    },
    {
     "mota": "testua",
     "html": "El producto escalar, sin embargo, tiene una diferencia: la componente cero lleva signo negativo, <math display=\"inline\"><mrow><mi>−</mi><msup><mi>a</mi><mn>0</mn></msup><msup><mi>b</mi><mn>0</mn></msup><mo>+</mo><msup><mi>a</mi><mn>1</mn></msup><msup><mi>b</mi><mn>1</mn></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><msup><mi>a</mi><mn>3</mn></msup><msup><mi>b</mi><mn>3</mn></msup></mrow></math>, y esa combinación es <strong>invariante</strong> bajo las transformaciones de Lorentz, igual que el producto escalar ordinario bajo las rotaciones. Al producto escalar <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>x</mi><mi>μ</mi></msup></mrow></math> del cuadrivector desplazamiento entre dos sucesos se le llama <strong>intervalo</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Intervalo espaciotemporal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>z</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Todos los observadores inerciales calculan el mismo valor de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> entre los dos sucesos, aunque no coincidan por separado en <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> ni en <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>: es el espacio-tiempo, y no el espacio y el tiempo por separado, el objeto que posee una estructura geométrica independiente del observador."
    },
    {
     "mota": "testua",
     "html": "Según los dos sucesos, el intervalo puede cambiar de signo, y se distinguen tres tipos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si el intervalo es de <strong>tipo tiempo</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>), existe un sistema inercial en el que los dos sucesos ocurren en el mismo lugar; es el signo que se obtiene cuando un suceso llega de un punto a otro moviéndose con velocidad <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>d</mi><mi>/</mi><mi>t</mi><mo>&lt;</mo><mi>c</mi></mrow></math>.",
      "Si es de <strong>tipo espacio</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>), existe un sistema en el que son simultáneos, pero en ningún sistema están en el mismo lugar.",
      "Si es de <strong>tipo luz</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>s</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>), una señal que viaja a la velocidad de la luz une los dos sucesos."
     ]
    },
    {
     "mota": "irudia",
     "oina": "Cono de luz. Las rectas de <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> (trayectorias de los rayos de luz) separan el futuro del pasado; los sucesos causalmente conectados están en el interior, unidos por intervalos de tipo tiempo.",
     "src": "../media/irudiak/64ed0a7674a505fc.svg",
     "zabalera": 245
    },
    {
     "mota": "testua",
     "html": "Esta diferencia tiene una consecuencia profunda: el <strong>orden</strong> de dos sucesos separados por un intervalo de tipo tiempo es absoluto (todos los observadores coinciden en cuál ha ocurrido antes), y eso es fundamental para la <strong>causalidad</strong>: para poder decir «<math display=\"inline\"><mi>A</mi></math> ha causado <math display=\"inline\"><mi>B</mi></math>». Dos sucesos conectados causalmente son siempre de tipo tiempo. En los diagramas espaciotemporales (diagramas de Minkowski), contra la costumbre, <math display=\"inline\"><mi>x</mi></math> se dibuja en vertical y <math display=\"inline\"><mrow><mi>c</mi><mi>t</mi></mrow></math> en horizontal; la velocidad es el <strong>inverso</strong> de la pendiente, una partícula en reposo es una recta vertical, y un rayo de luz es una de <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. La trayectoria de una partícula es su <strong>línea de universo</strong>, y nunca puede tener una pendiente menor que <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Mecánica relativista",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tiempo propio y velocidad propia"
    },
    {
     "mota": "testua",
     "html": "A medida que avanzas por tu línea de universo, tu reloj marcha despacio: mientras el reloj de la pared marca un intervalo <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi></mrow></math>, el tuyo avanza solo <math display=\"inline\"><mrow><mi>d</mi><mi>τ</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>d</mi><mi>τ</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Al tiempo <math display=\"inline\"><mi>τ</mi></math> se le llama <strong>tiempo propio</strong>, y es el tiempo medido en el sistema en reposo del objeto (aquí <math display=\"inline\"><mi>u</mi></math> es la propia velocidad del objeto, no la relativa entre los dos sistemas). El tiempo propio tiene una gran ventaja: es <strong>invariante</strong>. Eso permite definir algo natural —la <strong>velocidad propia</strong>—, dividiendo la distancia (medida en tierra) por el tiempo propio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>η</mi><mo>≡</mo><mfrac><mrow><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mspace width=\"0.167em\"></mspace><mi mathvariant=\"bold-italic\">𝒖</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las velocidades ordinarias, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>, en cambio, se transforman de manera muy incómoda (hay que cambiar el numerador <strong>y</strong> el denominador). La velocidad propia, en cambio, es la parte espacial de un cuadrivector, <math display=\"inline\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>d</mi><msup><mi>x</mi><mi>μ</mi></msup><mi>/</mi><mi>d</mi><mi>τ</mi></mrow></math>, cuya componente cero es <math display=\"inline\"><mrow><msup><mi>η</mi><mn>0</mn></msup><mo>=</mo><mi>c</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>; por eso se transforma tan limpiamente. A <math display=\"inline\"><msup><mi>η</mi><mi>μ</mi></msup></math> se le llama <strong>cuadrivector velocidad propia</strong> o <strong>cuadrivelocidad</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Momento y energía"
    },
    {
     "mota": "testua",
     "html": "El momento y la energía ordinarios no se conservan de sistema en sistema de forma compatible con la transformación de Lorentz; la generalización relativista correcta es esta:"
    },
    {
     "mota": "testua",
     "html": "En mecánica clásica el momento es masa por velocidad. Al llevar esa definición al dominio relativista, es esencial usar la <strong>velocidad propia</strong>, no la ordinaria: de lo contrario, la ley de conservación del momento sería incompatible con el principio de relatividad. Luego <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>≡</mo><mi>m</mi><mi mathvariant=\"bold-italic\">𝜼</mi></mrow></math>, y este es el momento relativista. El momento es la parte espacial de un cuadrivector, <math display=\"inline\"><mrow><msup><mi>p</mi><mi>μ</mi></msup><mo>≡</mo><mi>m</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow></math>, cuya componente temporal es <math display=\"inline\"><mrow><msup><mi>p</mi><mn>0</mn></msup><mo>=</mo><mi>m</mi><mi>c</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>. Esa componente (salvo el factor 1/c) es la energía relativista:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Momento y energía relativistas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒑</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mi>γ</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "La identidad <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> liga a ambos."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A velocidad pequeña (<math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>), <math display=\"inline\"><mrow><mi>E</mi><mo>≈</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>: la célebre energía en reposo de Einstein más la energía cinética ordinaria de Newton, recuperada como primera corrección."
    },
    {
     "mota": "testua",
     "html": "La energía relativista no es cero ni siquiera cuando el objeto está en reposo; es la <strong>energía en reposo</strong>, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">pausa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. El resto, atribuible al movimiento, es la <strong>energía cinética</strong>, <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">zin </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, que a velocidad pequeña tiene el desarrollo <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>/</mi><mn>8</mn><mi>m</mi><msup><mi>u</mi><mn>4</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mi>…</mi></mrow></math> (el primer término es la fórmula clásica). El producto escalar de <math display=\"inline\"><msup><mi>p</mi><mi>μ</mi></msup></math> consigo mismo es la masa invariante, y de ahí viene la identidad del recuadro, <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup></mrow></math>, muy útil: permite calcular <math display=\"inline\"><mi>E</mi></math> a partir de <math display=\"inline\"><mi>p</mi></math> (o a la inversa) sin conocer la velocidad. Para una partícula sin masa (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>), solo queda <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>p</mi><mi>c</mi></mrow></math>: justamente el caso del fotón."
    },
    {
     "mota": "testua",
     "html": "Dejando aparte la notación, la física real está en el experimento: en un sistema cerrado, la energía relativista total y el momento total se <strong>conservan</strong>. Pero cuidado con una distinción: una magnitud <strong>invariante</strong> (el mismo valor en todos los sistemas) y una magnitud <strong>conservada</strong> (el mismo valor antes y después de un proceso) no son lo mismo. La masa es invariante, pero no se conserva; la energía se conserva, pero no es invariante; la carga eléctrica, como veremos, es las dos cosas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: equivalencia masa-energía"
    },
    {
     "mota": "testua",
     "html": "Una reacción nuclear convierte por completo en energía una masa de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><mo>=</mo><mn>3.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup></mrow></math> kg (orden de magnitud típico de la fisión). ¿Cuánta energía se libera?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><mspace width=\"0.167em\"></mspace><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>28</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3.00</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>≈</mo><mn>3.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En unidades del SI parece pequeñísima, pero a la escala de una sola reacción es enorme: pasada a electronvoltios, <math display=\"inline\"><mrow><mi>E</mi><mo>≈</mo><mn>2.1</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><mn>210</mn></mrow></math> MeV, unas diez millones de veces la energía que se libera al romper un único enlace químico en una reacción de combustión corriente. Ese factor de diez millones, atribuible por entero al <math display=\"inline\"><msup><mi>c</mi><mn>2</mn></msup></math> de <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, es la razón fundamental por la que las reacciones nucleares liberan, por unidad de masa, muchísima más energía que las reacciones químicas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cinemática relativista"
    },
    {
     "mota": "testua",
     "html": "Aplicando las leyes de conservación a desintegraciones y choques de partículas se obtienen resultados sorprendentes. En un choque clásico, el momento y la masa se conservan siempre; en relatividad, se conservan siempre el momento y la energía total, pero la masa y la energía cinética, en general, no."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.7 — Choque plástico de bolas de arcilla"
    },
    {
     "mota": "testua",
     "html": "Dos bolas de arcilla, cada una de masa en reposo <math display=\"inline\"><mi>m</mi></math>, chocan frontalmente con velocidad <math display=\"inline\"><mrow><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>c</mi></mrow></math> y se quedan pegadas. ¿Cuál es la masa <math display=\"inline\"><mi>M</mi></math> de la bola compuesta?"
    },
    {
     "mota": "irudia",
     "oina": "Choque plástico: las dos bolas se pegan y quedan en reposo; la energía cinética se convierte en energía en reposo, y la masa aumenta.",
     "src": "../media/irudiak/e8dd333e4a6a5d94.svg",
     "zabalera": 287
    },
    {
     "mota": "testua",
     "html": "La conservación del momento es trivial: cero antes, cero después. La energía de cada bola antes del choque es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msqrt><mrow><mn>1</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>5</mn><mi>/</mi><mn>4</mn><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, y la de la bola compuesta, <math display=\"inline\"><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> (porque está en reposo). La conservación de la energía"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>5</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>M</mi><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da: ¡mayor que la suma de las masas iniciales (<math display=\"inline\"><mrow><mn>2</mn><mi>m</mi></mrow></math>)! La masa no se ha conservado en este choque: la energía cinética se ha convertido en energía en reposo, y por eso la masa ha aumentado. En el análisis clásico diríamos que la energía cinética se ha convertido en energía térmica (la bola compuesta está más caliente); la relatividad dice que esa energía microscópica se refleja en la masa del objeto."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.8 — Desintegración de un pion"
    },
    {
     "mota": "testua",
     "html": "Un pion, en reposo, se desintegra en un muón y un neutrino. Hallemos la energía del muón saliente en función de las dos masas (<math display=\"inline\"><msub><mi>m</mi><mi>π</mi></msub></math>, <math display=\"inline\"><msub><mi>m</mi><mi>μ</mi></msub></math>), tomando <math display=\"inline\"><mrow><msub><mi>m</mi><mi>ν</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Desintegración de un pion en reposo: el muón y el neutrino salen en sentidos opuestos, con momentos iguales y opuestos.",
     "src": "../media/irudiak/b456056736b23d94.svg",
     "zabalera": 270
    },
    {
     "mota": "testua",
     "html": "En este caso <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">aur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>m</mi><mi>π</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mrow><mtext mathvariant=\"normal\">aur </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">ond </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>E</mi><mi>μ</mi></msub><mo>+</mo><msub><mi>E</mi><mi>ν</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>p</mi><mrow><mtext mathvariant=\"normal\">ond </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub><mo>+</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>ν</mi></msub></mrow></math>. La conservación del momento exige <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>ν</mi></msub><mo>=</mo><mi>−</mi><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub></mrow></math>. La conservación de la energía, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>μ</mi></msub><mo>+</mo><msub><mi>E</mi><mi>ν</mi></msub><mo>=</mo><msub><mi>m</mi><mi>π</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Ahora <math display=\"inline\"><mrow><msub><mi>E</mi><mi>ν</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>ν</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>c</mi></mrow></math> (el neutrino no tiene masa), y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>μ</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>c</mi><mo>=</mo><msqrt><mrow><msubsup><mi>E</mi><mi>μ</mi><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>m</mi><mi>μ</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup></mrow></msqrt></mrow></math>; por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>μ</mi></msub><mo>+</mo><msqrt><mrow><msubsup><mi>E</mi><mi>μ</mi><mn>2</mn></msubsup><mo>−</mo><msubsup><mi>m</mi><mi>μ</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup></mrow></msqrt><mo>=</mo><msub><mi>m</mi><mi>π</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y de ahí"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>μ</mi></msub><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>m</mi><mi>π</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>m</mi><mi>μ</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>π</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.9 — Dispersión Compton"
    },
    {
     "mota": "testua",
     "html": "Un fotón de energía <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math> «rebota» en un electrón en reposo. Hallemos la energía <math display=\"inline\"><mi>E</mi></math> del fotón saliente en función del ángulo de dispersión <math display=\"inline\"><mi>θ</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Dispersión Compton: el fotón se dispersa con ángulo <math display=\"inline\"><mi>θ</mi></math>; el electrón retrocede. Conservando la energía y el momento se obtiene <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
     "src": "../media/irudiak/d79e530962d38c26.svg",
     "zabalera": 272
    },
    {
     "mota": "testua",
     "html": "Conservación del momento en la dirección «vertical»: <math display=\"inline\"><mrow><msub><mi>p</mi><mi>e</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><msub><mi>p</mi><mi>p</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mi>/</mi><msub><mi>p</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> (porque <math display=\"inline\"><mrow><msub><mi>p</mi><mi>p</mi></msub><mo>=</mo><mi>E</mi><mi>/</mi><mi>c</mi></mrow></math> para el fotón). En la «horizontal»: <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mi>/</mi><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mi>/</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>p</mi><mi>e</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>; reescribiendo, <math display=\"inline\"><mrow><msubsup><mi>p</mi><mi>e</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mi>E</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><msub><mi>E</mi><mn>0</mn></msub><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msup><mi>E</mi><mn>2</mn></msup></mrow></math>. La conservación de la energía, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>+</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>E</mi><mo>+</mo><msqrt><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msubsup><mi>p</mi><mi>e</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>; sustituyendo y despejando <math display=\"inline\"><mi>E</mi></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>1</mn><mi>/</mi><msub><mi>E</mi><mn>0</mn></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Expresado en longitudes de onda queda más elegante: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>m</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>m</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la <strong>longitud de onda Compton</strong> del electrón."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dinámica relativista"
    },
    {
     "mota": "testua",
     "html": "La primera ley de Newton está contenida en el propio principio de relatividad; la segunda, en la forma <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒑</mi><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>, también es válida en el dominio relativista, <strong>si se usa el momento relativista</strong>. El trabajo, como siempre, es la integral de línea de la fuerza, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mo>∫</mo><mi mathvariant=\"bold-italic\">𝑭</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒍</mi></mrow></math>, y el teorema trabajo-energía se cumple en relatividad: <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">amai </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>E</mi><mtext mathvariant=\"normal\">has</mtext></msub></mrow></math>, es decir, el trabajo neto sobre una partícula es igual al incremento de su energía. La tercera ley de Newton, en cambio, no se generaliza, en general: si dos objetos están separados en el espacio, la relatividad de la simultaneidad implica que el par acción-reacción se produce en <strong>instantes distintos</strong>, y la tercera ley se viola."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.10 — Movimiento bajo una fuerza constante"
    },
    {
     "mota": "testua",
     "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> está sometida a una fuerza constante <math display=\"inline\"><mi>F</mi></math>. Si parte del reposo en el origen en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, hallemos su posición (<math display=\"inline\"><mi>x</mi></math>) en función del tiempo. Como <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>F</mi></mrow></math>, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>F</mi><mi>t</mi></mrow></math> (la constante es cero, porque <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math> en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>). Ahora <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>u</mi><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>F</mi><mi>t</mi></mrow></math>, y despejando <math display=\"inline\"><mi>u</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>t</mi><mi>/</mi><mi>m</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El numerador es la respuesta clásica; el denominador garantiza que <math display=\"inline\"><mi>u</mi></math> nunca supere <math display=\"inline\"><mi>c</mi></math>: cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mi>c</mi></mrow></math>. Integrando de nuevo,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>F</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>t</mi><mi>/</mi><mi>m</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msqrt><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En lugar de la parábola clásica (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>F</mi><mi>/</mi><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math>), la gráfica es una <strong>hipérbola</strong>; por eso al movimiento bajo fuerza constante se le llama «movimiento hiperbólico». Ocurre, por ejemplo, al colocar una carga en un campo eléctrico uniforme."
    },
    {
     "mota": "irudia",
     "oina": "Movimiento hiperbólico: la parábola clásica supera la recta <math display=\"inline\"><mrow><mn>45</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>c</mi></mrow></math>); la hipérbola relativista se aproxima a ella como asíntota, sin superarla nunca.",
     "src": "../media/irudiak/1efe01e687dac529.svg",
     "zabalera": 171
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.11 — Movimiento ciclotrónico"
    },
    {
     "mota": "testua",
     "html": "La trayectoria típica de una carga en un campo magnético uniforme es el movimiento ciclotrónico. La fuerza magnética, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>Q</mi><mi>u</mi><mi>B</mi></mrow></math>, hacia el centro, aporta la aceleración centrípeta necesaria para sostener el movimiento circular. Cuidado, sin embargo: en relatividad la fuerza centrípeta <strong>no</strong> es <math display=\"inline\"><mrow><mi>m</mi><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><mi>R</mi></mrow></math>, como en la mecánica clásica. Como <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mi>p</mi><mspace width=\"0.167em\"></mspace><mi>d</mi><mi>θ</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mfrac><mi>u</mi><mi>R</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Movimiento ciclotrónico: la fuerza magnética (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math>) da la aceleración centrípeta. <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> sale del papel.",
     "src": "../media/irudiak/75eedbd66aee1eed.svg",
     "zabalera": 168
    },
    {
     "mota": "testua",
     "html": "Por tanto <math display=\"inline\"><mrow><mi>Q</mi><mi>u</mi><mi>B</mi><mo>=</mo><mi>p</mi><mi>u</mi><mi>/</mi><mi>R</mi></mrow></math>, es decir,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mi>Q</mi><mi>B</mi><mi>R</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En esta forma, la fórmula relativista del ciclotrón es idéntica a la no relativista; la única diferencia es que <math display=\"inline\"><mi>p</mi></math> es ahora el momento relativista (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi>u</mi></mrow></math>)."
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "El magnetismo como fenómeno relativista",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Un experimento mental clásico"
    },
    {
     "mota": "testua",
     "html": "Consideremos un hilo infinito, eléctricamente neutro en el sistema del laboratorio, que lleva una corriente <math display=\"inline\"><mi>I</mi></math>: las densidades de cargas positivas (en reposo) y de cargas negativas (a la deriva con velocidad <math display=\"inline\"><mi>v</mi></math>) se superponen exactamente, dando una densidad de carga neta cero y, por tanto —en el sistema del laboratorio—, ningún campo eléctrico fuera del hilo, y dejando solo el campo magnético del capítulo 5. Una carga de prueba <math display=\"inline\"><mi>q</mi></math> que se mueve paralelamente al hilo con velocidad <math display=\"inline\"><mi>v</mi></math> (igual que la velocidad de deriva de las cargas negativas) siente una fuerza magnética, <math display=\"inline\"><mrow><mi>q</mi><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math>, que la atrae hacia el hilo (o la aleja de él)."
    },
    {
     "mota": "irudia",
     "oina": "Experimento mental clásico: en el sistema en reposo del hilo, la carga de prueba en movimiento siente una fuerza <strong>magnética</strong>; en el sistema en reposo de la propia carga, la contracción de la longitud de la densidad de carga que deriva produce una carga <strong>eléctrica</strong> neta en el hilo, y la misma fuerza aparece como puramente electrostática.",
     "src": "../media/irudiak/85baa44ef7453f86.svg",
     "zabalera": 296
    },
    {
     "mota": "testua",
     "html": "Veamos ahora la misma situación desde el sistema en reposo de la propia carga de prueba. En este sistema, las cargas <strong>positivas</strong> del hilo se mueven (hacia atrás) y las cargas <strong>negativas</strong> están en reposo (o se mueven más despacio); y como la contracción de la longitud (apartado 12.1) afecta de forma <strong>distinta</strong> a las dos densidades de carga (que tienen velocidades distintas en este sistema), el hilo ya no es eléctricamente neutro en el nuevo sistema. Aparece una densidad lineal de carga neta, que crea un campo electrostático ordinario (capítulo 2) que, si se calcula con cuidado, ejerce <strong>exactamente</strong> la misma fuerza sobre la carga de prueba, ahora en reposo, que ejercía la fuerza magnética en el sistema original."
    },
    {
     "mota": "testua",
     "html": "Veamos la cuestión con números, siguiendo el razonamiento de Purcell. Tomemos una densidad lineal de carga <math display=\"inline\"><mrow><mi>+</mi><mi>λ</mi></mrow></math> que va hacia la derecha con velocidad <math display=\"inline\"><mi>v</mi></math>, y superpuesta una <math display=\"inline\"><mrow><mi>−</mi><mi>λ</mi></mrow></math> hacia la izquierda con el mismo <math display=\"inline\"><mi>v</mi></math>; la corriente neta, por tanto, es <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mi>v</mi></mrow></math> hacia la derecha. A distancia <math display=\"inline\"><mi>s</mi></math>, una carga de prueba <math display=\"inline\"><mi>q</mi></math> se mueve hacia la derecha con velocidad <math display=\"inline\"><mrow><mi>u</mi><mo>&lt;</mo><mi>v</mi></mrow></math>. En el sistema <math display=\"inline\"><mi>S</mi></math> las dos líneas de carga se anulan entre sí: no hay fuerza eléctrica sobre <math display=\"inline\"><mi>q</mi></math>. Veámoslo desde el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> (en el que <math display=\"inline\"><mi>q</mi></math> está en reposo, y que se mueve hacia la derecha con velocidad <math display=\"inline\"><mi>u</mi></math>). Según la regla de adición de velocidades, las velocidades de las líneas positiva y negativa son ahora <math display=\"inline\"><mrow><msub><mi>v</mi><mo>±</mo></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>∓</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>∓</mo><mi>v</mi><mi>u</mi><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Como <math display=\"inline\"><msub><mi>v</mi><mo>−</mo></msub></math> es mayor que <math display=\"inline\"><msub><mi>v</mi><mo>+</mo></msub></math>, el espaciado entre las cargas negativas sufre una contracción mayor; en este sistema <strong>el hilo lleva carga negativa neta</strong>. Con un poco de álgebra,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">tot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msub><mi>λ</mi><mo>+</mo></msub><mo>+</mo><msub><mi>λ</mi><mo>−</mo></msub><mo>=</mo><msub><mi>λ</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mo>+</mo></msub><mo>−</mo><msub><mi>γ</mi><mo>−</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>λ</mi><mi>u</mi><mi>v</mi></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> es la densidad de carga propia (en reposo) de las líneas. Esta densidad lineal de carga crea un campo eléctrico, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>λ</mi><mtext mathvariant=\"normal\">tot</mtext></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y por tanto una fuerza sobre <math display=\"inline\"><mi>q</mi></math> en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>q</mi><mi>E</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mi>s</mi></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero para volver a <math display=\"inline\"><mi>S</mi></math> hay que recurrir a la regla de transformación de las fuerzas (porque <math display=\"inline\"><mi>q</mi></math> está en reposo en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>, y <math display=\"inline\"><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover></math> es perpendicular al movimiento, <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mspace width=\"0.167em\"></mspace><mover><mi>F</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>v</mi><mi>q</mi><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mi>s</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>0</mn></msub><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y expresando mediante la corriente <math display=\"inline\"><mrow><mi>λ</mi><mi>v</mi></mrow></math>, adopta la forma más conocida:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>q</mi><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><mi>I</mi></mrow><mrow><mn>2</mn><mi>π</mi><mi>s</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El término entre paréntesis es el campo magnético de un hilo recto largo; la fuerza es, exactamente, la misma que obtendríamos en el sistema <math display=\"inline\"><mi>S</mi></math> con la ley de la fuerza de Lorentz. La fuerza «magnética» no es, pues, más que una forma de fuerza electrostática, para un observador en movimiento relativo."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esto no es una casualidad, ni una analogía: es una identidad matemática exacta. El magnetismo es el aspecto que adopta la electrostática para un observador en movimiento relativo. Los capítulos 2 y 5 de este libro, que se enseñan normalmente como temas separados, son en silencio un único fenómeno relativista, visto desde dos sistemas distintos."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo resuelto: ¿qué tamaño tiene el efecto?"
    },
    {
     "mota": "testua",
     "html": "Merece la pena comprobar con números lo pequeño que debe ser el desequilibrio de carga provocado por la contracción de la longitud para reproducir una fuerza magnética cotidiana. Las velocidades de deriva típicas de los electrones en los cables domésticos son asombrosamente lentas, <math display=\"inline\"><mrow><mi>v</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> m/s (los propios electrones se mueven deprisa por agitación térmica, pero su <strong>deriva</strong> neta —la corriente— avanza a paso de tortuga)."
    },
    {
     "mota": "testua",
     "html": "El factor de contracción de la longitud correspondiente se aparta de 1, aproximadamente, en: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>γ</mi></mfrac><mo>≈</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>∼</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "—un desequilibrio fraccionario de carga casi impensablemente pequeño: una parte entre <math display=\"inline\"><msup><mn>10</mn><mn>25</mn></msup></math> de las densidades de carga positiva y negativa, ya equilibradas, del hilo. Pero como un hilo macroscópico contiene una cantidad enorme de carga (del orden de <math display=\"inline\"><msup><mn>10</mn><mn>23</mn></msup></math> por centímetro de un cable de cobre ordinario), incluso ese minúsculo desequilibrio fraccionario crea una densidad lineal de carga suficiente para producir las fuerzas magnéticas perfectamente corrientes que se observan en el sistema del laboratorio."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por eso el magnetismo se descubrió y se usó en la práctica durante milenios (imanes naturales, brújulas), mucho antes de que nadie sospechara su relación con la electrostática: la corrección relativista responsable es diminuta a velocidades de deriva cotidianas, pero la enorme cantidad de carga de la materia ordinaria la amplifica hasta convertirla en una fuerza intensa y fácilmente observable."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cómo se transforman los campos"
    },
    {
     "mota": "testua",
     "html": "De acuerdo con el experimento mental anterior, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> se mezclan bajo una transformación de Lorentz a lo largo de <math display=\"inline\"><mi>x</mi></math>, igual que el espacio y el tiempo se mezclan bajo la transformación de coordenadas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Transformación de los campos (transformación a lo largo de <math display=\"inline\"><mi>x</mi></math>)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>E</mi><mi>x</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi>E</mi><mi>x</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>E</mi><mi>y</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>y</mi></msub><mo>−</mo><mi>v</mi><msub><mi>B</mi><mi>z</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>E</mi><mi>z</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>z</mi></msub><mo>+</mo><mi>v</mi><msub><mi>B</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>B</mi><mi>x</mi><mo>′</mo></msubsup><mo>=</mo><msub><mi>B</mi><mi>x</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>B</mi><mi>y</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>B</mi><mi>y</mi></msub><mo>+</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><msub><mi>E</mi><mi>z</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>B</mi><mi>z</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>B</mi><mi>z</mi></msub><mo>−</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><msub><mi>E</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "¿De dónde salen estas reglas? El punto de partida es que <strong>la carga eléctrica es invariante</strong>: como la masa, pero no como la energía, la carga de una partícula es un número fijo, sea cual sea la velocidad con que se mueva. Tomemos el campo eléctrico más sencillo posible: el campo uniforme entre las placas de un condensador plano, <math display=\"inline\"><mrow><msub><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>σ</mi><mn>0</mn></msub><mi>/</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi mathvariant=\"bold-italic\">𝒚</mi><mo accent=\"true\">̂</mo></mover></mrow></math>, en reposo en <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>, con cargas superficiales <math display=\"inline\"><mrow><mi>±</mi><msub><mi>σ</mi><mn>0</mn></msub></mrow></math>. Visto desde <math display=\"inline\"><mi>S</mi></math> (que se mueve hacia la derecha con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math>), la carga total y la anchura de las placas no cambian, pero la longitud sufre una contracción de Lorentz; por tanto la carga por unidad de superficie aumenta en un factor <math display=\"inline\"><msub><mi>γ</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msub><mi>σ</mi><mn>0</mn></msub></mrow></math>, y en consecuencia"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⟂</mo></msup><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msubsup><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn><mo>⟂</mo></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(aquí <math display=\"inline\"><mo>⟂</mo></math> designa la componente <strong>perpendicular</strong> a la dirección del movimiento). Con las placas paralelas a la dirección, la <strong>distancia</strong> entre ellas se contrae, pero el campo no depende de la distancia; así que la componente paralela no cambia, <math display=\"inline\"><mrow><msup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>∥</mo></msup><mo>=</mo><msubsup><mi mathvariant=\"bold-italic\">𝑬</mi><mn>0</mn><mo>∥</mo></msubsup></mrow></math>. Las placas en movimiento de <math display=\"inline\"><mi>S</mi></math> llevan corrientes superficiales, que crean un campo magnético; analizando el mismo proceso desde un tercer sistema se obtienen las reglas de transformación de todas las componentes, que aparecen en el recuadro de fórmulas. Dos casos especiales merecen atención:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si en <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math>, entonces <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
      "Si en <math display=\"inline\"><mi>S</mi></math> es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math>, entonces <math display=\"inline\"><mrow><mover><mi mathvariant=\"bold-italic\">𝑬</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mover><mi mathvariant=\"bold-italic\">𝑩</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.13 — Campo eléctrico de una carga puntual en movimiento"
    },
    {
     "mota": "testua",
     "html": "Una carga puntual <math display=\"inline\"><mi>q</mi></math> está en reposo en el origen de <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>. ¿Cuál es el campo eléctrico de la misma carga en el sistema <math display=\"inline\"><mi>S</mi></math>, que se mueve hacia la derecha con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> respecto de <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>? En <math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math> el campo es el campo radial de Coulomb; aplicando las reglas de transformación (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>x</mi></msub><mo>=</mo><msub><mi>E</mi><mrow><mi>x</mi><mn>0</mn></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>y</mi></msub><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msub><mi>E</mi><mrow><mi>y</mi><mn>0</mn></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>z</mi></msub><mo>=</mo><msub><mi>γ</mi><mn>0</mn></msub><msub><mi>E</mi><mrow><mi>z</mi><mn>0</mn></mrow></msub></mrow></math>) y la transformación de Lorentz de las coordenadas, se obtiene un resultado limpio en función de las coordenadas <math display=\"inline\"><mi>S</mi></math> del punto <math display=\"inline\"><mi>P</mi></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mfrac><mover><mi mathvariant=\"bold-italic\">𝑹</mi><mo accent=\"true\">̂</mo></mover><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑹</mi></math> es el vector desde la posición <strong>actual</strong> de la carga hasta <math display=\"inline\"><mi>P</mi></math>, y <math display=\"inline\"><mi>θ</mi></math> el ángulo entre él y la dirección del movimiento. El mismo resultado se obtuvo en el capítulo 10 con los potenciales retardados; la deducción de aquí es mucho más eficiente, y aclara un dato sorprendente: los campos se alejan de la posición <strong>actual</strong> de la carga, no de la retardada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 12.14 — Campo magnético de una carga puntual en movimiento"
    },
    {
     "mota": "testua",
     "html": "Hallemos ahora el campo <strong>magnético</strong> de la carga puntual <math display=\"inline\"><mi>q</mi></math> que se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math>. En el sistema en reposo de la carga (<math display=\"inline\"><msub><mi>S</mi><mn>0</mn></msub></math>) el campo magnético es cero (en todas partes); por tanto, en el sistema <math display=\"inline\"><mi>S</mi></math> que se mueve hacia la derecha con velocidad <math display=\"inline\"><mi>v</mi></math>, puede aplicarse el caso especial anterior, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Usando el campo eléctrico del ejemplo anterior,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mi>q</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mfrac><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover><msup><mi>R</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mover><mi mathvariant=\"bold-italic\">𝝋</mi><mo accent=\"true\">̂</mo></mover></math> va en sentido antihorario viendo cómo se acerca la carga. A velocidad pequeña (<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>≪</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>), esta fórmula se reduce a la ley de Biot–Savart para una carga puntual, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>q</mi><mspace width=\"0.167em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑹</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></math>; es decir, la de Biot–Savart no es más que la aproximación de baja velocidad del campo magnético de una carga en movimiento."
    },
    {
     "mota": "testua",
     "html": "Un campo puramente eléctrico en un sistema tiene, en general, componentes eléctrica <strong>y</strong> magnética en otro: los campos no son tanto objetos físicos independientes como las dos caras de un único campo relativista, el tensor del campo electromagnético."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El tensor del campo"
    },
    {
     "mota": "testua",
     "html": "Toda la estructura queda recogida de forma compacta en un tensor antisimétrico de orden 2 construido con las seis componentes de los campos:"
    },
    {
     "mota": "testua",
     "html": "Como muestran las reglas de transformación de los campos, <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> no se transforman como las partes espaciales de dos cuadrivectores: sus componentes se mezclan entre sí al cambiar de sistema. ¿Qué tipo de objeto tiene seis componentes y se transforma según esas reglas? La respuesta: un tensor <strong>antisimétrico</strong> de segundo orden. Si un cuadrivector se transforma con un <strong>único</strong> factor de la matriz <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math>, un tensor de dos índices se transforma con dos factores, <math display=\"inline\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>λ</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>σ</mi><mi>ν</mi></msubsup><mspace width=\"0.167em\"></mspace><msup><mi>t</mi><mrow><mi>λ</mi><mi>σ</mi></mrow></msup></mrow></math>. En cuatro dimensiones tiene <math display=\"inline\"><mrow><mn>4</mn><mo>×</mo><mn>4</mn><mo>=</mo><mn>16</mn></mrow></math> componentes, pero por la antisimetría (<math display=\"inline\"><mrow><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup></mrow></math>) solo quedan seis componentes independientes; las reglas de transformación de esas seis dan, si se calculan, exactamente las mismas reglas de transformación de los campos (las del recuadro de fórmulas). Incorporando <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> en un único tensor antisimétrico:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": "Tensor del campo electromagnético (esquemático)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>E</mi><mi>x</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>E</mi><mi>y</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mfrac><msub><mi>E</mi><mi>z</mi></msub><mi>c</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>E</mi><mi>x</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>B</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>E</mi><mi>y</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>B</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mfrac><msub><mi>E</mi><mi>z</mi></msub><mi>c</mi></mfrac></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>B</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>B</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Existe una segunda manera de incorporar <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math> y <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑩</mi></math> en un tensor antisimétrico, dada por el <strong>tensor dual</strong> (<math display=\"inline\"><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>), que se obtiene sustituyendo <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>c</mi><mo>→</mo><mi mathvariant=\"bold-italic\">𝑩</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑩</mi><mo>→</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝑬</mi><mi>/</mi><mi>c</mi></mrow></math> en <math display=\"inline\"><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>; los dos tensores producen las reglas de transformación correctas de los campos. (El convenio de signos puede variar de texto en texto: unos autores toman <math display=\"inline\"><mrow><msup><mi>F</mi><mn>01</mn></msup><mo>≡</mo><msub><mi>E</mi><mi>x</mi></msub></mrow></math>, otros los signos opuestos; el de aquí es el de esta reproducción.) Las fuentes de los campos también se reúnen en un cuadrivector: la densidad de carga y la densidad de corriente, <math display=\"inline\"><mrow><msup><mi>J</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mi>ρ</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝑱</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, escribiendo la ecuación de continuidad en la forma compacta <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>J</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En este lenguaje, las cuatro ecuaciones de Maxwell (capítulos 2, 5 y 7) se reúnen en dos ecuaciones tensoriales compactas, y la ley de la fuerza de Lorentz queda en una sola línea: la expresión más económica de todo lo desarrollado en este libro, y el punto final natural de la reproducción."
    },
    {
     "mota": "testua",
     "html": "En concreto, esas dos ecuaciones tensoriales son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>J</mi><mi>ν</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La primera recoge la ley de Gauss (<math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>0</mn></mrow></math>) y la ley de Ampère–Maxwell (<math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math>); la segunda, <math display=\"inline\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn></mrow></math> y la ley de Faraday. Y la ley de la fuerza de Lorentz queda en una sola línea, mediante la fuerza de Minkowski, <math display=\"inline\"><mrow><msup><mi>K</mi><mi>μ</mi></msup><mo>=</mo><mi>q</mi><msub><mi>η</mi><mi>ν</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></mrow></math>, cuya parte espacial recupera la fuerza ordinaria: <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑭</mi><mo>=</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La formulación con el tensor del campo de este capítulo es deliberadamente breve: una señal hacia el tratamiento covariante completo (cuadripotenciales, ecuaciones tensoriales de Maxwell <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>μ</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>J</mi><mi>ν</mi></msup></mrow></math> y electrodinámica lagrangiana), que corresponde de por sí a un curso de continuación de teoría relativista de campos, más allá del alcance de esta reproducción."
      }
     ]
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "Ejercicios resueltos (del manual de Griffiths)",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejercicios siguientes son problemas del capítulo 12 (Relatividad) del libro <strong>Introduction to Electrodynamics</strong> de Griffiths, basados en la solución del manual del profesor (<code>Instructor&#x27;s Solution Manual</code>, 4.ª edición). Fuente original: <code>espazio-ontzia/08_elektromagnetismoa/_cruce_electromagnetismo/</code>. El texto se ha traducido íntegramente al euskera para JAKINA, conservando todos los pasos."
      }
     ]
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Griffiths 12.1",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la regla galileana de adición de velocidades. Sea <math display=\"inline\"><mi>S</mi></math> un sistema inercial."
      },
      {
       "mota": "testua",
       "html": "(a)  Si el sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math> respecto de <math display=\"inline\"><mi>S</mi></math>, demuestra que <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> también es inercial."
      },
      {
       "mota": "testua",
       "html": "(b) Recíprocamente, si <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es inercial, demuestra que se mueve con velocidad constante respecto de <math display=\"inline\"><mi>S</mi></math>."
      },
      {
       "mota": "irudia",
       "oina": "Referencia — el mismo concepto: definición\n  operativa de sistema inercial, basada en que la velocidad de una partícula libre es\n  constante.",
       "src": "../media/irudiak/a8197259d94ee249.svg",
       "zabalera": 322
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Planteamiento"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mi>u</mi></math> la velocidad de una partícula medida en <math display=\"inline\"><mi>S</mi></math>, y <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> la velocidad de la misma partícula medida en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>. En la mecánica galileana,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>v</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>v</mi></math> es la velocidad de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> respecto de <math display=\"inline\"><mi>S</mi></math>."
    },
    {
     "mota": "testua",
     "html": "La definición operativa de sistema inercial es esta: una partícula libre tiene velocidad constante."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Apartado (a)"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>S</mi></math> es inercial, la partícula libre tiene velocidad constante <math display=\"inline\"><mi>u</mi></math> en <math display=\"inline\"><mi>S</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Además, si <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> se mueve con velocidad constante <math display=\"inline\"><mi>v</mi></math> respecto de <math display=\"inline\"><mi>S</mi></math>, entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La diferencia de dos velocidades constantes es constante. Por tanto, la partícula libre también se mueve con velocidad constante en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> es inercial."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Apartado (b)"
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora que <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> también es inercial. Para una partícula libre,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstante </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es en <math display=\"inline\"><mi>S</mi></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstante </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "da <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>-n."
    },
    {
     "mota": "testua",
     "html": "La regla galileana da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>u</mi><mo>−</mo><msup><mi>u</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>u</mi></math> y <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math> son constantes, <math display=\"inline\"><mi>v</mi></math> también lo es."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> inertziala </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>S</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -rekiko. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La noción de sistema inercial queda cerrada bajo las transformaciones galileanas: moverse con velocidad relativa constante no altera la validez de la primera ley de Newton."
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Griffiths 12.7",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un experimento de laboratorio se observa que un muón recorre <math display=\"inline\"><mn>800</mn></math> m antes de desintegrarse. Un estudiante mira la vida del muón (<math display=\"inline\"><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s) y concluye que su velocidad era:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow><mrow><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></mfrac><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "¡Más rápido que la luz! Halla el error del estudiante y calcula la velocidad real del muón."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El error del estudiante"
    },
    {
     "mota": "testua",
     "html": "La vida del muón, <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup></mrow></math> s, es la vida propia, medida en su sistema en reposo. Pero el recorrido de <math display=\"inline\"><mn>800</mn></math> m se mide en el laboratorio, donde el muón se mueve: su reloj interno marcha más despacio, por la dilatación del tiempo. En el laboratorio el muón"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><mi>γ</mi><mi>τ</mi><mo>=</mo><mfrac><mi>τ</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dura, donde <math display=\"inline\"><mrow><mi>γ</mi><mo>&gt;</mo><mn>1</mn></mrow></math>. Por tanto, la velocidad correcta es esta,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow><mrow><mi>γ</mi><mi>τ</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y no la que usó el estudiante, que tomó tácitamente <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cálculo de la velocidad"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>800</mn></mrow></math> m y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>c</mi></mrow></math>. Sustituyendo el tiempo dilatado,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>γ</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mrow><mi>τ</mi></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mi>c</mi><mi>τ</mi><mo>=</mo><mi>d</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Elevando al cuadrado y despejando <math display=\"inline\"><msup><mi>β</mi><mn>2</mn></msup></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>β</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msup><mi>τ</mi><mn>2</mn></msup><mo>=</mo><msup><mi>d</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>β</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>τ</mi><mn>2</mn></msup><mo>+</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>d</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mi>d</mi><msqrt><mrow><msup><mi>d</mi><mn>2</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>τ</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Poniendo los números, como <math display=\"inline\"><mrow><mi>c</mi><mi>τ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>600</mn></mrow></math> m,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>800</mn><msqrt><mrow><msup><mn>800</mn><mn>2</mn></msup><mo>+</mo><msup><mn>600</mn><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>800</mn><msqrt><mn>1000000</mn></msqrt></mfrac><mo>=</mo><mfrac><mn>800</mn><mn>1000</mn></mfrac><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mn>4</mn><mn>5</mn></mfrac><mi>c</mi><mo>=</mo><mn>2.4</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Desde el sistema del muón la visión es complementaria: allí el recorrido de <math display=\"inline\"><mn>800</mn></math> m del laboratorio se reduce por la contracción de Lorentz a <math display=\"inline\"><mrow><mn>800</mn><mi>/</mi><mi>γ</mi></mrow></math> m, y el muón dura solo <math display=\"inline\"><mi>τ</mi></math> propios; haciendo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>800</mn><mi>/</mi><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>τ</mi></mrow></math> se obtiene el mismo resultado. La dilatación del tiempo y la contracción de la longitud se complementan: por eso los muones producidos en la alta atmósfera llegan hasta el nivel del mar, pese a su breve vida propia."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Griffiths, <strong>Introduction to Electrodynamics</strong> (3.ª ed.), problema 12.7 (dilatación del tiempo; en el ejemplo 12.1 del texto se usa el mismo muón con <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><mi>c</mi></mrow></math>). La solución coincide con la del problema 12.7 del manual del profesor (4.ª ed.), p. 263: <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>4</mn><mi>/</mi><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>2.4</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m/s."
      }
     ]
    }
   ]
  },
  {
   "id": "a55",
   "maila": 2,
   "izenburua": "Griffiths 12.11",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un disco de radio <math display=\"inline\"><mi>R</mi></math> gira con velocidad angular <math display=\"inline\"><mi>ω</mi></math>. En la periferia la velocidad tangencial es <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>. Si se aplica la contracción de Lorentz directamente a la circunferencia, pero no al radio (por ser perpendicular a la velocidad), parece que el cociente circunferencia/diámetro resulta distinto de <math display=\"inline\"><mi>π</mi></math>. Determina qué ocurre y explica el problema conceptual."
      },
      {
       "mota": "irudia",
       "oina": "Un elemento del borde del disco se mueve\n  con velocidad tangencial <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>; el radio es perpendicular a la velocidad.",
       "src": "../media/irudiak/a8197259d94ee249.svg",
       "zabalera": 322
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Una cuenta ingenua"
    },
    {
     "mota": "testua",
     "html": "En el borde del disco, cada pequeño elemento de la circunferencia se mueve tangencialmente"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mi>ω</mi><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con velocidad. Si aplicamos mecánicamente a esos elementos la contracción longitudinal de Lorentz,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>ω</mi><mn>2</mn></msup><mfrac><msup><mi>R</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la longitud tangencial observada se reduciría en un factor <math display=\"inline\"><mfrac><mn>1</mn><mi>γ</mi></mfrac></math>."
    },
    {
     "mota": "testua",
     "html": "El radio, en cambio, apunta perpendicularmente a la velocidad tangencial del punto del borde. La regla sencilla de la contracción longitudinal no contrae las direcciones perpendiculares al movimiento. Por tanto, la cuenta rápida diría"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">inozoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow><mi>γ</mi></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>D</mi><mrow><mtext mathvariant=\"normal\">inozoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>2</mn><mi>R</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>C</mi><mtext mathvariant=\"normal\">inozoa</mtext></msub><msub><mi>D</mi><mtext mathvariant=\"normal\">inozoa</mtext></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>γ</mi></mfrac><mfrac><mrow><mn>2</mn><mi>π</mi><mi>R</mi></mrow><mrow><mn>2</mn><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mi>π</mi><mi>γ</mi></mfrac><mo>=</mo><mi>π</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta expresión crea la paradoja: daría un cociente menor que <math display=\"inline\"><mi>π</mi></math> cuando <math display=\"inline\"><mrow><mi>ω</mi><mi>R</mi><mo>≠</mo><mn>0</mn></mrow></math>, aunque se trate de una circunferencia de radio <math display=\"inline\"><mi>R</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Por qué no es la respuesta física"
    },
    {
     "mota": "testua",
     "html": "El paso inválido no está en la fórmula local de Lorentz, sino en usar todos los puntos del disco como si fueran de un único sistema inercial ligado rígidamente al disco."
    },
    {
     "mota": "testua",
     "html": "Un punto del borde tiene aceleración centrípeta. El disco entero no es un sistema inercial, y en relatividad un cuerpo extenso no puede mantenerse globalmente en aceleración rígida sin especificar cómo se transmiten las tensiones, las deformaciones y las fuerzas internas."
    },
    {
     "mota": "testua",
     "html": "Por tanto, no basta con decir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> zirkunferentzia uzkurtua </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> erradioa uzkurtu gabe. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esa frase confunde las reglas locales de los sistemas inerciales con una configuración global acelerada. Para saber qué geometría física mide una red de reglas pegada al disco, o qué radio/circunferencia quedan al girar, hay que dar un modelo material del disco: elasticidad, tensiones internas, procedimiento de aceleración y criterio de simultaneidad utilizado."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "testua",
     "html": "La cuenta formal ingenua da:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mfrac><mi>C</mi><mi>D</mi></mfrac><mrow><mtext mathvariant=\"normal\">inozoa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>π</mi><mi>γ</mi></mfrac><mo>=</mo><mi>π</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>R</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Pero eso no es una predicción física universalmente válida. La conclusión directa del ejercicio es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ez dago </mtext><mspace width=\"0.333em\"></mspace></mrow><mfrac><mi>C</mi><mi>D</mi></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arrazoi bakarrik </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>ω</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -k eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>R</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -k soilik zehazten dutenik. </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El problema es la paradoja de Ehrenfest: un disco que gira está acelerado y no puede tratarse como un objeto relativistamente rígido sin especificar sus fuerzas internas y su proceso de puesta en rotación."
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Griffiths 12.21",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos sucesos tienen estas coordenadas:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>A</mi></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>t</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>B</mi></msub><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><msub><mi>t</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Se supone que el intervalo entre ellos es de tipo espacio. Halla la velocidad del sistema inercial en el que los dos sucesos son simultáneos."
      },
      {
       "mota": "irudia",
       "oina": "Diagrama espaciotemporal en el sistema <math display=\"inline\"><mi>S</mi></math>: <math display=\"inline\"><mi>A</mi></math>\n  y <math display=\"inline\"><mi>B</mi></math> están separados por un intervalo de tipo espacio; el eje temporal de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math>\n    &quot;tumbado&quot; marca los dos como simultáneos.",
       "src": "../media/irudiak/1a3ebf9c079665b6.svg",
       "zabalera": 287
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Planteamiento"
    },
    {
     "mota": "testua",
     "html": "Como solo cambian <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>t</mi></math>, basta con usar la transformación de Lorentz del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Queremos un sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> en el que los dos sucesos ocurran a la vez, es decir,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>t</mi><mi>A</mi><mo>′</mo></msubsup><mo>=</mo><msubsup><mi>t</mi><mi>B</mi><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Equivalente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>=</mo><msub><mi>t</mi><mi>B</mi></msub><mo>−</mo><msub><mi>t</mi><mi>A</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mi>B</mi></msub><mo>−</mo><msub><mi>x</mi><mi>A</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cálculo"
    },
    {
     "mota": "testua",
     "html": "Restamos la transformación temporal de los dos sucesos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La condición de simultaneidad en <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> establece"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mn>0</mn></mrow></math>, queda"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En las coordenadas originales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msub><mi>t</mi><mi>B</mi></msub><mo>−</mo><msub><mi>t</mi><mi>A</mi></msub></mrow><mrow><msub><mi>x</mi><mi>B</mi></msub><mo>−</mo><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación relativista"
    },
    {
     "mota": "testua",
     "html": "El enunciado dice que el intervalo es de tipo espacio. Usando el convenio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que sea de tipo espacio significa"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>&gt;</mo><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>c</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mn>1</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mrow><mi>c</mi><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>&lt;</mo><mi>c</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La velocidad hallada es físicamente admisible: existe realmente un sistema inercial en el que los dos sucesos separados por un intervalo de tipo espacio son simultáneos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msub><mi>t</mi><mi>B</mi></msub><mo>−</mo><msub><mi>t</mi><mi>A</mi></msub></mrow><mrow><msub><mi>x</mi><mi>B</mi></msub><mo>−</mo><msub><mi>x</mi><mi>A</mi></msub></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El signo indica el sentido del movimiento de <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> respecto de <math display=\"inline\"><mi>S</mi></math>: si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> tienen el mismo signo, <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> se mueve en la dirección <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math>; si tienen signo contrario, se mueve en la dirección <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Griffiths 12.30",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hay un conjunto de partículas, todas moviéndose en la dirección <math display=\"inline\"><mi>x</mi></math>, con energías <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>,</mo><msub><mi>E</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi></mrow></math> y momentos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi></mrow></math>. Halla la velocidad del sistema del centro de momento, es decir, aquel en el que el momento total es cero."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sumas"
    },
    {
     "mota": "testua",
     "html": "Definimos la energía total y el momento total en <math display=\"inline\"><mi>S</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>T</mi></msub><mo>=</mo><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msub><mi>E</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>E</mi><mi>i</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>T</mi></msub><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como todo el movimiento está en el eje <math display=\"inline\"><mi>x</mi></math>, el ejercicio es unidimensional."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transformación del momento"
    },
    {
     "mota": "testua",
     "html": "Para una transformación de Lorentz a un sistema <math display=\"inline\"><msup><mi>S</mi><mo>′</mo></msup></math> que se mueve en la dirección <math display=\"inline\"><mi>x</mi></math> con velocidad <math display=\"inline\"><mi>v</mi></math> respecto de <math display=\"inline\"><mi>S</mi></math>, el momento de cada partícula se transforma así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>i</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sumamos sobre todas las partículas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msubsup><mi>p</mi><mi>i</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>i</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>v</mi></math> y <math display=\"inline\"><mi>γ</mi></math> son iguales para todo el sistema,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub><mo>−</mo><mfrac><mi>v</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>E</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>T</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>T</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición del centro de momento"
    },
    {
     "mota": "testua",
     "html": "El sistema del centro de momento se define así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>p</mi><mi>T</mi><mo>′</mo></msubsup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>T</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>T</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>T</mi></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mi>T</mi></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando la velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>p</mi><mi>T</mi></msub></mrow><msub><mi>E</mi><mi>T</mi></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo las sumas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi></mrow><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msub><mi>E</mi><mn>2</mn></msub><mo>+</mo><mi>…</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">CM </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>p</mi><mi>T</mi></msub></mrow><msub><mi>E</mi><mi>T</mi></msub></mfrac><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>p</mi><mi>i</mi></msub></mrow><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>E</mi><mi>i</mi></msub></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El sentido lo determina el signo de <math display=\"inline\"><msub><mi>p</mi><mi>T</mi></msub></math>: si el momento total apunta en la dirección <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math>, el sistema del centro de momento se mueve en la dirección <math display=\"inline\"><mrow><mi>+</mi><mi>x</mi></mrow></math> respecto de <math display=\"inline\"><mi>S</mi></math>; si apunta en la dirección <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>, se mueve en la dirección <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Griffiths 12.40",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que la aceleración ordinaria de una partícula de masa <math display=\"inline\"><mi>m</mi></math> y carga <math display=\"inline\"><mi>q</mi></math>, que se mueve con velocidad <math display=\"inline\"><mi>u</mi></math> bajo la acción de los campos electromagnéticos <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>B</mi></math>, es la siguiente:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Usa la relación relativista entre fuerza y aceleración ordinarias."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Punto de partida"
    },
    {
     "mota": "testua",
     "html": "La ecuación 12.73 expresa la fuerza ordinaria en función de la aceleración ordinaria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mfrac><mi>m</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Escribimos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La fuerza electromagnética ordinaria es la fuerza de Lorentz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Despejar <math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Hacemos el producto escalar con <math display=\"inline\"><mi>u</mi></math> en la ecuación mecánica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo>+</mo><mfrac><mrow><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sacamos factor común <math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El corchete se simplifica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>c</mi><mn>2</mn></msup><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Despejar <math display=\"inline\"><mi>a</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Volvemos a la ecuación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>m</mi><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dividiendo por <math display=\"inline\"><mrow><mi>m</mi><mi>γ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>F</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mo>=</mo><mi>a</mi><mo>+</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>F</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituimos <math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>a</mi><mo>=</mo><mfrac><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>F</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>c</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "el segundo término queda así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><msup><mi>γ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mi>γ</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>F</mi><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sustituir la fuerza de Lorentz"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mrow><mi>m</mi><mi>γ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por último, usando <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>γ</mi></mfrac><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>q</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El término magnético ayuda dentro de la fuerza de Lorentz, pero no aparece en <math display=\"inline\"><mrow><mi>u</mi><mo>⋅</mo><mi>F</mi></mrow></math>, porque siempre es perpendicular a <math display=\"inline\"><mi>u</mi></math>. La corrección paralela viene solo del término eléctrico, porque es el que realiza trabajo sobre la partícula."
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Griffiths 12.49",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestra que si un tensor de segundo orden es simétrico o antisimétrico en un sistema inercial, esa propiedad se mantiene tras una transformación de Lorentz."
      },
      {
       "mota": "testua",
       "html": "Es decir:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ley de transformación"
    },
    {
     "mota": "testua",
     "html": "Un tensor contravariante de segundo orden se transforma así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> son índices mudos: se suman y, por tanto, pueden renombrarse, siempre que se haga de forma coherente."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Caso simétrico"
    },
    {
     "mota": "testua",
     "html": "Supongamos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Queremos comparar <math display=\"inline\"><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup></math> y <math display=\"inline\"><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>."
    },
    {
     "mota": "testua",
     "html": "Según la ley de transformación,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora renombramos los índices mudos <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>α</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como el tensor original es simétrico,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los factores escalares pueden intercambiarse:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mo>=</mo><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, el tensor transformado sigue siendo simétrico."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Caso antisimétrico"
    },
    {
     "mota": "testua",
     "html": "Supongamos ahora"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Partimos de nuevo de"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "esto. Renombrando los índices mudos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usamos la antisimetría:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>β</mi><mi>α</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Intercambiando los factores escalares,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>−</mi><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>α</mi><mi>μ</mi></msubsup><msubsup><mi mathvariant=\"normal\">Λ</mi><mi>β</mi><mi>ν</mi></msubsup><msup><mi>t</mi><mrow><mi>α</mi><mi>β</mi></mrow></msup><mo>=</mo><mi>−</mi><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, el tensor transformado sigue siendo antisimétrico."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "testua",
     "html": "Las transformaciones de Lorentz conservan la simetría y la antisimetría de los tensores de segundo orden:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>t</mi><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>±</mi><msup><mi>t</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>ν</mi><mi>μ</mi></mrow></msup><mo>=</mo><mi>±</mi><msup><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La razón estructural es esta: la transformación usa dos matrices de Lorentz, una por índice, y los índices de suma pueden intercambiarse sin cambiar el valor de la suma."
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Griffiths 12.59",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> choca elásticamente con otra idéntica, inicialmente en reposo. En mecánica clásica, las trayectorias de salida forman siempre un ángulo recto. Calcula relativistamente, en el laboratorio, el ángulo <math display=\"inline\"><mi>θ</mi></math> entre las trayectorias de salida en función del ángulo de dispersión <math display=\"inline\"><mi>φ</mi></math> en el sistema del centro de momento y de la velocidad <math display=\"inline\"><mi>v</mi></math> en ese sistema."
      },
      {
       "mota": "irudia",
       "oina": "Las dos trayectorias tras el choque elástico\n  en el laboratorio, formando un ángulo <math display=\"inline\"><mi>θ</mi></math>; la dirección original del sistema de coordenadas\n  del laboratorio es <math display=\"inline\"><mi>x</mi></math>.",
       "src": "../media/irudiak/6c3ab9ac4a4f3a0f.svg",
       "zabalera": 320
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema del centro de momento"
    },
    {
     "mota": "testua",
     "html": "En el sistema del centro de momento, antes del choque las dos partículas tienen momentos opuestos de igual módulo. Tras el choque elástico, tienen la misma energía y el mismo módulo del momento, <math display=\"inline\"><mi>p</mi></math>, pero salen desviadas."
    },
    {
     "mota": "testua",
     "html": "Tomamos los cuadrimomentos de salida así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>,</mo><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>s</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>,</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>,</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>γ</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi>v</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>p</mi><mi>c</mi></mrow><mi>E</mi></mfrac><mo>=</mo><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>=</mo><mi>β</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transformación al laboratorio"
    },
    {
     "mota": "testua",
     "html": "Para pasar al sistema del laboratorio, en el que una de las dos partículas que chocan estaba inicialmente en reposo, hacemos un boost en la dirección <math display=\"inline\"><mi>x</mi></math> con velocidad <math display=\"inline\"><mi>v</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Las componentes espaciales transformadas son estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>+</mo><mi>β</mi><mfrac><mi>E</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>=</mo><mi>p</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>+</mo><mi>β</mi><mfrac><mi>E</mi><mi>c</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>=</mo><mi>−</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los signos de las componentes <math display=\"inline\"><mi>y</mi></math> indican únicamente que las dos partículas salen en lados opuestos del eje."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Producto escalar espacial"
    },
    {
     "mota": "testua",
     "html": "El ángulo <math display=\"inline\"><mi>θ</mi></math> entre las dos trayectorias del laboratorio viene dado por:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El producto escalar espacial es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los módulos son:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>p</mi><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow></msqrt><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>p</mi><msqrt><mrow><msup><mi>γ</mi><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Simplificación del ángulo"
    },
    {
     "mota": "testua",
     "html": "Para obtener directamente el ángulo <math display=\"inline\"><mi>θ</mi></math> entre dos vectores del laboratorio, lo más conveniente es usar el cociente entre el producto vectorial y el producto escalar:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como son dos vectores del mismo plano (sin componente <math display=\"inline\"><mi>z</mi></math>), el producto vectorial tiene una única componente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo las componentes,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><msub><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mi>x</mi></msub><mo>=</mo><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi mathvariant=\"normal\">sin</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>γ</mi><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mn>2</mn><mi>γ</mi><msup><mi>p</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mn>2</mn><mi>γ</mi><msup><mi>p</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>. El numerador ya lo hemos obtenido antes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>r</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>s</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi><msup><mi>p</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow><mrow><msup><mi>p</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>γ</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además, como <math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, también puede escribirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mi>γ</mi><msup><mi>v</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>γ</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mi>γ</mi><msup><mi>v</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el límite no relativista, <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>γ</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>≈</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></math>, luego <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> se hace muy grande y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>θ</mi><mo>→</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así se recupera el resultado clásico: las trayectorias de salida son perpendiculares."
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "Griffiths 12.60",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula parte del reposo en el origen del eje <math display=\"inline\"><mi>x</mi></math> y se mueve bajo una fuerza de Minkowski constante <math display=\"inline\"><mi>K</mi></math> dirigida en la dirección <math display=\"inline\"><mi>x</mi></math>. Hay que hallar <math display=\"inline\"><mi>x</mi></math> en función de <math display=\"inline\"><mi>t</mi></math>, dejando la respuesta en forma implícita, es decir, escribiendo <math display=\"inline\"><mi>t</mi></math> en función de <math display=\"inline\"><mi>x</mi></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Punto de partida"
    },
    {
     "mota": "testua",
     "html": "La fuerza de Minkowski se define como la derivada del momento ordinario respecto del tiempo propio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El movimiento es unidimensional; por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mi>γ</mi><mi>m</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>d</mi><mfrac><mi>x</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math>. Además,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mi>τ</mi><mo>=</mo><mi>d</mi><mi>t</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Multiplicando por <math display=\"inline\"><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>m</mi></mfrac></math> queda"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>u</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cambio de la variable espacial"
    },
    {
     "mota": "testua",
     "html": "Queremos integrar hasta obtener <math display=\"inline\"><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto usamos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>u</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>w</mi><mo>=</mo><mfrac><mi>u</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces la ecuación anterior se convierte en:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mfrac><mrow><mi>d</mi><mi>w</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mfrac><mi>u</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt><mi>u</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>w</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>w</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mrow><mi>m</mi><mi>w</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Multiplicando por <math display=\"inline\"><mi>w</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>w</mi><mfrac><mrow><mi>d</mi><mi>w</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>w</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>K</mi><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integramos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>w</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mi>m</mi></mfrac><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La partícula parte de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> con <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto, inicialmente es <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>w</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Velocidad en función de la posición"
    },
    {
     "mota": "testua",
     "html": "Según la definición de <math display=\"inline\"><mi>w</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>w</mi><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igualando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mi>m</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Despejando <math display=\"inline\"><msup><mi>u</mi><mn>2</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mi>m</mi></mfrac></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>d</mi><mfrac><mi>x</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow><mrow><mn>2</mn><mi>K</mi><mfrac><mi>x</mi><mi>m</mi></mfrac></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Multiplicando por <math display=\"inline\"><mi>c</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><mi>t</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mi>K</mi><mi>x</mi><mfrac><mi>′</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow><mrow><mn>2</mn><mi>K</mi><mi>x</mi><mfrac><mi>′</mi><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></mfrac></msqrt><mi>d</mi><msup><mi>x</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Integración"
    },
    {
     "mota": "testua",
     "html": "Definimos una variable adimensional:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>K</mi></mrow></mfrac><msup><mi>z</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>K</mi></mfrac><mi>z</mi><mi>d</mi><mi>z</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La integral se transforma en:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>K</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>z</mi></msubsup><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></msqrt><mi>d</mi><msup><mi>z</mi><mo>′</mo></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primitiva necesaria es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mi>d</mi><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>K</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "testua",
     "html": "La relación implícita entre <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>t</mi></math> es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>2</mn><mi>K</mi><mi>t</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mi>z</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>K</mi><mi>x</mi></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es la forma pedida: no despeja <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> mediante funciones elementales, pero determina la posición de manera única para cada <math display=\"inline\"><mrow><mi>t</mi><mo>≥</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como comprobación, si <math display=\"inline\"><mi>x</mi></math> es pequeña, <math display=\"inline\"><mrow><mi>z</mi><mo>≪</mo><mn>1</mn></mrow></math> y el lado derecho vale aproximadamente <math display=\"inline\"><mrow><mn>2</mn><mi>z</mi></mrow></math>. De ahí"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>≈</mo><mfrac><mrow><mi>K</mi><mi>t</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>≈</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mi>K</mi><mi>m</mi></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "lo que recupera, al comienzo de la trayectoria, el movimiento uniformemente acelerado no relativista."
    }
   ]
  },
  {
   "id": "a62",
   "maila": 2,
   "izenburua": "Griffiths 12.64",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En cierto sistema inercial <math display=\"inline\"><mi>S</mi></math>, los campos <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>B</mi></math> en un punto no son ni paralelos ni perpendiculares. Demuestra que existe otro sistema inercial en el que los campos transformados son paralelos, si ese sistema se mueve con velocidad <math display=\"inline\"><mi>v</mi></math> que cumpla la condición siguiente:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>v</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Decide también si existe un sistema inercial que haga perpendiculares los campos."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Elección de ejes"
    },
    {
     "mota": "testua",
     "html": "Tomamos el eje <math display=\"inline\"><mi>z</mi></math> en la dirección de <math display=\"inline\"><mi>E</mi></math>, y dejamos <math display=\"inline\"><mi>B</mi></math> en el plano <math display=\"inline\"><mrow><mi>y</mi><mi>z</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>E</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>B</mi><mo>=</mo><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como los campos no son paralelos, <math display=\"inline\"><mrow><msub><mi>B</mi><mo>⟂</mo></msub><mo>≠</mo><mn>0</mn></mrow></math>. Como no son perpendiculares, <math display=\"inline\"><mrow><msub><mi>B</mi><mo>∥</mo></msub><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El producto vectorial <math display=\"inline\"><mi>x</mi></math> queda en la dirección:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi><mo>=</mo><mi>E</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, elegimos el boost en esa dirección. La velocidad del sistema nuevo la escribimos así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>=</mo><mi>−</mi><mi>v</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><mi>v</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Campos transformados"
    },
    {
     "mota": "testua",
     "html": "Para un boost perpendicular a ambos campos, no hay componente longitudinal en la dirección del boost; por tanto, las transformaciones relevantes son estas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>E</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Calculamos los productos vectoriales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>v</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><mi>v</mi><msub><mi>B</mi><mo>⟂</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mi>v</mi><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝒗</mi><mo>×</mo><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>v</mi><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>v</mi><mi>E</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>v</mi><msub><mi>B</mi><mo>⟂</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>B</mi><mo>⟂</mo></msub><mo>−</mo><mi>v</mi><mfrac><mi>E</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>+</mo><msub><mi>B</mi><mo>∥</mo></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El factor común <math display=\"inline\"><mi>γ</mi></math> no afecta a la condición de paralelismo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición de paralelismo"
    },
    {
     "mota": "testua",
     "html": "Para que <math display=\"inline\"><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover></math> y <math display=\"inline\"><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></math> sean paralelos, sus componentes <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>z</mi></math> deben tener la misma proporción:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>v</mi><msub><mi>B</mi><mo>∥</mo></msub></mrow><mrow><msub><mi>B</mi><mo>⟂</mo></msub><mo>−</mo><mi>v</mi><mfrac><mi>E</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mo>−</mo><mi>v</mi><msub><mi>B</mi><mo>⟂</mo></msub></mrow><msub><mi>B</mi><mo>∥</mo></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Multiplicando en cruz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><msubsup><mi>B</mi><mo>∥</mo><mn>2</mn></msubsup><mo>=</mo><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mo>−</mo><mi>v</mi><msubsup><mi>B</mi><mo>⟂</mo><mn>2</mn></msubsup><mo>−</mo><mfrac><mrow><mi>v</mi><msup><mi>E</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><msup><mi>v</mi><mn>2</mn></msup><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Reordenamos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>B</mi><mo>⟂</mo><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mo>∥</mo><mn>2</mn></msubsup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>B</mi><mo>⟂</mo><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>B</mi><mo>∥</mo><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>E</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>E</mi><msub><mi>B</mi><mo>⟂</mo></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "obtenemos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>v</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>E</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Restableciendo la dirección vectorial del boost,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"bold-italic\">𝒗</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es justamente la relación pedida."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Existencia de una velocidad subluminal"
    },
    {
     "mota": "testua",
     "html": "La ecuación anterior no da solo una dirección, sino una velocidad físicamente admisible. Para verlo basta observar que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>v</mi><mrow><mn>1</mn><mo>+</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la función <math display=\"inline\"><mfrac><mi>c</mi><mn>2</mn></mfrac></math> tiene su máximo cuando <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>c</mi></mrow></math>. Por otra parte,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>E</mi><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>≤</mo><mfrac><mrow><mi>E</mi><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "mediante la desigualdad <math display=\"inline\"><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>≥</mo><mn>2</mn><mi>a</mi><mi>b</mi></mrow></math>, siendo <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>B</mi></mrow></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mfrac><mi>E</mi><mi>c</mi></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>≥</mo><mn>2</mn><mi>E</mi><mfrac><mi>B</mi><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>E</mi><mi>B</mi></mrow><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><mfrac><msup><mi>E</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></mfrac><mo>≤</mo><mfrac><mi>c</mi><mn>2</mn></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si los campos ya no son paralelos, la desigualdad para la componente perpendicular es estricta; por tanto, la velocidad necesaria queda por debajo de <math display=\"inline\"><mi>c</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "¿Hay algún sistema que haga perpendiculares los campos?"
    },
    {
     "mota": "testua",
     "html": "No. El producto escalar electromagnético es invariante:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>E</mi><mo>⋅</mo><mi>B</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como en el sistema original los campos no son perpendiculares, <math display=\"inline\"><mrow><mi>E</mi><mo>⋅</mo><mi>B</mi><mo>≠</mo><mn>0</mn></mrow></math>. Por la invariancia, tampoco puede conseguirse en otro sistema inercial"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>⋅</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, si los campos no eran perpendiculares al principio, no existe ningún boost que los haga perpendiculares."
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Griffiths 12.67",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una carga <math display=\"inline\"><mi>q</mi></math> se suelta en reposo en el origen. En el laboratorio hay estos campos uniformes:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "siendo <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></math>. Hay que determinar la trayectoria, transformando a un sistema en el que desaparezca el campo eléctrico, resolviendo allí el movimiento y volviendo luego al laboratorio. Después hay que comparar el resultado con la cicloide no relativista de campos cruzados."
      },
      {
       "mota": "irudia",
       "oina": "Aspecto de la cicloide relativista: giro\n  de Larmor combinado con una deriva uniforme en la dirección <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow></math>.",
       "src": "../media/irudiak/c59be29fc150f062.svg",
       "zabalera": 447
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sistema de deriva"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>B</mi></math> son perpendiculares y <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>&lt;</mo><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></math>, existe un sistema que se mueve en la dirección <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow></math>, es decir, en la dirección <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></math>, con la velocidad siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msub><mi>B</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en el que el campo eléctrico se anula."
    },
    {
     "mota": "testua",
     "html": "Definimos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><mrow><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando las transformaciones de los campos para un boost en la dirección <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><msub><mi>B</mi><mn>0</mn></msub><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>−</mi><mi>v</mi><msub><mi>B</mi><mn>0</mn></msub><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>v</mi><msub><mi>B</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>z</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El campo magnético transformado es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mo>×</mo><mi>E</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>B</mi><mn>0</mn></msub><mo>−</mo><mfrac><mrow><mi>v</mi><msub><mi>E</mi><mn>0</mn></msub></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msub><mi>B</mi><mn>0</mn></msub></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msub><mi>B</mi><mn>0</mn></msub><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>β</mi><mn>2</mn></msup></mrow></msqrt><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><msub><mi>B</mi><mn>0</mn></msub><mi mathvariant=\"normal\">Γ</mi></mfrac><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "En el sistema en que el movimiento es <math display=\"inline\"><mrow><mover><mi>E</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el sistema cruzado solo hay un campo magnético uniforme. La partícula, que en el laboratorio estaba en reposo, aparece inicialmente con esta velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Su velocidad se mantiene constante. La ecuación de movimiento es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi>p</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mi>q</mi><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como la velocidad es constante,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>p</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mi>m</mi><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>q</mi><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mi>m</mi></mrow></mfrac><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mo>×</mo><mover><mi>x</mi><mo accent=\"true\">̂</mo></mover><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Definimos una frecuencia angular con signo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>q</mi><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></mrow><mrow><mi mathvariant=\"normal\">Γ</mi><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>q</mi><msub><mi>B</mi><mn>0</mn></msub></mrow><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las componentes cumplen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mi>ω</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>z</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>z</mi></msub></mrow><mrow><mi>d</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></mfrac><mo>=</mo><mi>−</mi><mi>ω</mi><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con las condiciones iniciales <math display=\"inline\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>−</mi><mi>v</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>y</mi></msub><mo>=</mo><mi>−</mi><mi>v</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mover><mi>u</mi><mo accent=\"true\">¯</mo></mover><mi>z</mi></msub><mo>=</mo><mi>v</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Integramos desde el origen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>−</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>v</mi><mi>ω</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>q</mi></math> es negativa, el signo de <math display=\"inline\"><mi>ω</mi></math> cambia el sentido del giro; el aspecto geométrico es el mismo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Transformación de vuelta al laboratorio"
    },
    {
     "mota": "testua",
     "html": "El sistema cruzado se mueve respecto del laboratorio en la dirección <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">̂</mo></mover></math> con velocidad <math display=\"inline\"><mi>v</mi></math>. La transformación inversa es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mi>v</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mfrac><mrow><mi>v</mi><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Sustituyendo la trayectoria circular cruzada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>R</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>t</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mfrac><mrow><mi>v</mi><mi>R</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas ecuaciones paramétricas, con el parámetro <math display=\"inline\"><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></math>, dan la trayectoria en el laboratorio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Forma implícita"
    },
    {
     "mota": "testua",
     "html": "También podemos eliminar parcialmente el parámetro. A partir de la transformación directa,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>y</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como en el sistema cruzado la órbita cumple"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mover><mi>y</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>z</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en el laboratorio queda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con más precisión,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>R</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>y</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">Γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mfrac><mrow><mi>v</mi><mi>y</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La presencia de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> en la combinación temporal y la de <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup></math> en la ecuación geométrica es la corrección relativista principal, frente a la cicloide no relativista."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comparación con el resultado clásico"
    },
    {
     "mota": "testua",
     "html": "En el límite <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>≪</mo><mi>c</mi><msub><mi>B</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>≈</mo><mn>1</mn></mrow></math> y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo>≈</mo><msub><mi>B</mi><mn>0</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>≈</mo><mfrac><mrow><mi>q</mi><msub><mi>B</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mfrac><msub><mi>E</mi><mn>0</mn></msub><msub><mi>B</mi><mn>0</mn></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La forma implícita se reduce a la cicloide ordinaria asociada al movimiento en campos cruzados: un giro de Larmor combinado con una deriva uniforme, en la dirección <math display=\"inline\"><mrow><mi>E</mi><mo>×</mo><mi>B</mi></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>v</mi><mi>t</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Relativistamente, la figura persiste, pero la coordenada horizontal queda alargada en un factor <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>: la partícula sigue una cicloide deformada, no la cicloide clásica exacta."
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Griffiths 12.68",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hay que construir el tensor <math display=\"inline\"><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>, análogo a <math display=\"inline\"><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>, usando <math display=\"inline\"><mi>D</mi></math> y <math display=\"inline\"><mi>H</mi></math>, para escribir las ecuaciones macroscópicas de Maxwell en la materia con la corriente libre <math display=\"inline\"><msubsup><mi>J</mi><mi>f</mi><mi>μ</mi></msubsup></math>. Después hay que construir el tensor dual correspondiente. Por último, hay que usar las relaciones constitutivas relativistas de Minkowski, para un medio lineal de permitividad propia <math display=\"inline\"><mi>ε</mi></math> y permeabilidad propia <math display=\"inline\"><mi>μ</mi></math>, y obtener las fórmulas de <math display=\"inline\"><mi>D</mi></math> y de <math display=\"inline\"><mi>H</mi></math> cuando el material se mueve con velocidad ordinaria <math display=\"inline\"><mi>u</mi></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tensor macroscópico"
    },
    {
     "mota": "testua",
     "html": "Con los convenios del capítulo 12, el tensor que contiene <math display=\"inline\"><mi>D</mi></math> y <math display=\"inline\"><mi>H</mi></math> se toma así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msubsup><mi>J</mi><mi>f</mi><mi>μ</mi></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>f</mi><mi>μ</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><msub><mi>ρ</mi><mi>f</mi></msub><mo>,</mo><msub><mi>J</mi><mi>f</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La componente temporal dice"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>D</mi><mrow><mn>0</mn><mi>ν</mi></mrow></msup><mo>=</mo><mi>c</mi><mi>∇</mi><mo>⋅</mo><mi>D</mi><mo>=</mo><mi>c</mi><msub><mi>ρ</mi><mi>f</mi></msub><mo>=</mo><msubsup><mi>J</mi><mi>f</mi><mrow><mn>0</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las componentes espaciales dan, por ejemplo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>D</mi><mrow><mn>1</mn><mi>ν</mi></mrow></msup><mo>=</mo><mi>−</mi><msub><mi>∂</mi><mi>t</mi></msub><msub><mi>D</mi><mi>x</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∇</mi><mo>×</mo><mi>H</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></msub><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mi>f</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y análogamente para <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>z</mi></math>. Esta es la ecuación macroscópica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi>H</mi><mo>−</mo><msub><mi>∂</mi><mi>t</mi></msub><mi>D</mi><mo>=</mo><msub><mi>J</mi><mi>f</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El tensor dual con D y H"
    },
    {
     "mota": "testua",
     "html": "El dual correspondiente al tensor macroscópico intercambia el papel estructural de <math display=\"inline\"><mi>D</mi></math> y de <math display=\"inline\"><mi>H</mi></math>. Con los mismos convenios:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>H</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>H</mi><mi>z</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><msub><mi>H</mi><mi>z</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>−</mi><mi>c</mi><msub><mi>D</mi><mi>y</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>c</mi><msub><mi>D</mi><mi>x</mi></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mn>0</mn></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta forma es la analogía directa del tensor dual electromagnético <math display=\"inline\"><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Relaciones de Minkowski"
    },
    {
     "mota": "testua",
     "html": "Sea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la 4-velocidad del material, donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Minkowski propone estas relaciones covariantes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>D</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mi>ε</mi><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>H</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><msub><mi>η</mi><mi>ν</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cuando el medio está en reposo, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Entonces solo contribuye la componente temporal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>D</mi><mrow><mi>μ</mi><mn>0</mn></mrow></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mi>ε</mi><msup><mi>F</mi><mrow><mi>μ</mi><mn>0</mn></mrow></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que reproduce"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>ε</mi><mi>E</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por su parte, la segunda relación da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mi>B</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así, las fórmulas de Minkowski se reducen correctamente a las relaciones constitutivas ordinarias en el sistema propio del material."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones auxiliares para un medio en movimiento"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el factor común <math display=\"inline\"><mi>γ</mi></math> se cancela en ambos lados. Las componentes temporales dan dos relaciones escalares:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las componentes espaciales dan dos relaciones vectoriales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>H</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>−</mo><mi>u</mi><mo>×</mo><mi>D</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas cuatro ecuaciones son la forma intermedia limpia: contienen las relaciones en reposo y todos los acoplamientos provocados por el movimiento del medio."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución para D"
    },
    {
     "mota": "testua",
     "html": "Introducimos la velocidad propia de la luz en el medio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>m</mi></msub><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mi>ε</mi><mi>μ</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usamos la ecuación de <math display=\"inline\"><mi>H</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>u</mi><mo>×</mo><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituimos esto en la ecuación"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>H</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>+</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mrow><mi>μ</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><mrow><mi>μ</mi><msup><mi>c</mi><mn>4</mn></msup></mrow></mfrac><mi>u</mi><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aplicamos esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>⋅</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mi>A</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando también <math display=\"inline\"><mrow><mi>D</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mi>ε</mi><mi>E</mi><mo>⋅</mo><mi>u</mi></mrow></math>, se despeja:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mrow><msup><mi>c</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>E</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución para H"
    },
    {
     "mota": "testua",
     "html": "De forma simétrica, usamos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>H</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en la ecuación de <math display=\"inline\"><mi>H</mi></math>. Tras aplicar la misma identidad del triple producto y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>⋅</mo><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mi>B</mi><mo>⋅</mo><mi>u</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "usar, se obtiene:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>B</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "testua",
     "html": "Las relaciones constitutivas de un medio lineal en movimiento son, por tanto, estas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>ε</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mrow><msup><mi>c</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>E</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>×</mo><mi>B</mi><mo>−</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mfrac><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
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
       "html": "<math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mfrac><msup><mi>γ</mi><mn>2</mn></msup><mi>μ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>B</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msubsup><mi>v</mi><mi>m</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>⋅</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, las dos expresiones se reducen enseguida a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><mi>ε</mi><mi>E</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>H</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac><mi>B</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "como cabía esperar."
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Griffiths 12.69",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usa la fórmula de Larmor y la relatividad especial para deducir la fórmula de Liénard de la potencia que radia relativistamente una carga acelerada."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Punto de partida: el reposo instantáneo"
    },
    {
     "mota": "testua",
     "html": "En el sistema instantáneamente comóvil con la carga, la velocidad ordinaria es cero y la fórmula de Larmor da:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msubsup><mi>a</mi><mn>0</mn><mn>2</mn></msubsup></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> es la aceleración ordinaria medida en ese sistema instantáneo."
    },
    {
     "mota": "testua",
     "html": "La magnitud relativista que sustituye a <math display=\"inline\"><msubsup><mi>a</mi><mn>0</mn><mn>2</mn></msubsup></math> es el cuadrado de la 4-aceleración:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mfrac><mrow><mi>d</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el sistema de reposo instantáneo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto, con el convenio de signos usado en el capítulo,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msubsup><mi>a</mi><mn>0</mn><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, la generalización covariante natural de la potencia es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como se expresa mediante un escalar de Lorentz, esta potencia puede evaluarse en cualquier sistema."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La 4-aceleración en función de v y a"
    },
    {
     "mota": "testua",
     "html": "Sea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></mrow></msqrt></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y sea <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>d</mi><mfrac><mi>v</mi><mi>d</mi></mfrac><mi>t</mi></mrow></math> la aceleración ordinaria en el laboratorio."
    },
    {
     "mota": "testua",
     "html": "La 4-velocidad es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto del tiempo propio,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>γ</mi><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "También necesitamos esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>γ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mn>3</mn></msup><mfrac><mrow><mi>v</mi><mo>⋅</mo><mi>a</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La componente temporal de la 4-aceleración es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mn>0</mn></msup><mo>=</mo><mi>γ</mi><mfrac><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><mfrac><mrow><mi>v</mi><mo>⋅</mo><mi>a</mi></mrow><mi>c</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La parte espacial es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝜶</mi><mo>=</mo><mi>γ</mi><mfrac><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>γ</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>γ</mi><mn>2</mn></msup><mi>a</mi><mo>+</mo><msup><mi>γ</mi><mn>4</mn></msup><mfrac><mrow><mi>v</mi><mo>⋅</mo><mi>a</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>v</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cuadrado invariante"
    },
    {
     "mota": "testua",
     "html": "Con el convenio de signo positivo para el módulo espacial de la 4-aceleración,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msup><mi mathvariant=\"bold-italic\">𝜶</mi><mn>2</mn></msup><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"bold-italic\">𝜶</mi><mn>2</mn></msup><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>γ</mi><mn>6</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>γ</mi><mn>8</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>v</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>4</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>α</mi><mn>0</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>γ</mi><mn>8</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>γ</mi><mn>6</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta forma ya es correcta, pero la fórmula de Liénard se escribe normalmente mediante <math display=\"inline\"><mrow><mi>v</mi><mo>×</mo><mi>a</mi></mrow></math>. Usamos esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><msup><mi>v</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>γ</mi><mn>4</mn></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que coincide con esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>γ</mi><mn>4</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>γ</mi><mn>6</mn></msup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>⋅</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><msup><mi>γ</mi><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resultado"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo el invariante en la fórmula covariante de la potencia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>γ</mi><mn>6</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es la fórmula de Liénard."
    },
    {
     "mota": "testua",
     "html": "En el límite no relativista, <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mn>1</mn></mrow></math> y el término <math display=\"inline\"><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>v</mi><mo>×</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mfrac></math> desaparece, de modo que se recupera enseguida"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>→</mo><mfrac><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la fórmula de Larmor."
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Griffiths 12.70",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La generalización relativista más directa de la fórmula de Abraham–Lorentz toma esta forma:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><msup><mi>α</mi><mi>μ</mi></msup></math> es la 4-aceleración. Hay que demostrar que esa expresión no puede ser una Minkowski-fuerza admisible, y luego hallar un término de corrección que conserve el carácter covariante y no modifique el límite no relativista."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Condición para una fuerza de Minkowski"
    },
    {
     "mota": "testua",
     "html": "La 4-velocidad se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mfrac><mrow><mi>d</mi><msup><mi>x</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y cumple"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto del tiempo propio, se obtiene:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, la 4-aceleración es perpendicular a la 4-velocidad."
    },
    {
     "mota": "testua",
     "html": "Para una partícula de masa propia constante, una fuerza de Minkowski física debe cumplir la condición análoga:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>K</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es la prueba ineludible: no basta con que una expresión sea un 4-vector."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El fallo de la propuesta ingenua"
    },
    {
     "mota": "testua",
     "html": "Tomamos la propuesta correcta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Teniendo en cuenta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "derivamos el producto escalar completo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><msub><mi>α</mi><mi>μ</mi></msub></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><msup><mi>η</mi><mi>μ</mi></msup><mo>+</mo><msub><mi>α</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msup><mi>η</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><msup><mi>α</mi><mi>μ</mi></msup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>α</mi><mi>μ</mi></msub></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><msup><mi>η</mi><mi>μ</mi></msup><mo>+</mo><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Contraemos la fuerza propuesta con la 4-velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msub><mi>η</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En general, como <math display=\"inline\"><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>≠</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mn>0</mn><mi>μ</mi></msubsup><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La expresión es covariante, pero no es una Minkowski-fuerza posible."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El término de corrección"
    },
    {
     "mota": "testua",
     "html": "Buscamos una corrección proporcional a la 4-velocidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>+</mo><mi>λ</mi><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Imponemos la condición necesaria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>η</mi><mi>μ</mi></msub><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>+</mo><mi>λ</mi><msub><mi>η</mi><mi>μ</mi></msub><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando las identidades anteriores,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>−</mi><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup><mo>+</mo><mi>λ</mi><msup><mi>c</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En consecuencia,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><msub><mi>α</mi><mi>μ</mi></msub><msup><mi>α</mi><mi>μ</mi></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La fuerza radiativa corregida es:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><msup><mi>α</mi><mi>μ</mi></msup></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><msup><mi>η</mi><mi>μ</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ahora la contracción se anula exactamente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>η</mi><mi>μ</mi></msub><msubsup><mi>K</mi><mtext mathvariant=\"normal\">rad</mtext><mi>μ</mi></msubsup><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup><mo>+</mo><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Límite no relativista"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>v</mi><mo>≪</mo><mi>c</mi></mrow></math>, es <math display=\"inline\"><mrow><mi>d</mi><mi>τ</mi><mo>≈</mo><mi>d</mi><mi>t</mi></mrow></math> y la parte espacial de la primera contribución es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>α</mi></mrow><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>d</mi><mi>a</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El término de corrección espacial es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msub><mi>α</mi><mi>ν</mi></msub><msup><mi>α</mi><mi>ν</mi></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>v</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y frente al término principal queda atenuado por un factor <math display=\"inline\"><mfrac><mi>v</mi><mi>c</mi></mfrac></math>. Por eso la parte espacial de la fuerza se reduce a:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mtext mathvariant=\"normal\">rad</mtext></msub><mo>≈</mo><mfrac><mrow><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>q</mi><mn>2</mn></msup></mrow><mrow><mn>6</mn><mi>π</mi><mi>c</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>a</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>q</mi><mn>2</mn></msup><mrow><mn>6</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>c</mi><mn>3</mn></msup></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>a</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, la fórmula ordinaria de Abraham–Lorentz."
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Griffiths 12.71",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Amplía la formulación relativista de la electrodinámica para admitir, además de la carga eléctrica, también carga magnética. Escribe las ecuaciones covariantes de Maxwell con ambas fuentes, y la ley de fuerza relativista para una partícula de cargas <math display=\"inline\"><msub><mi>q</mi><mi>e</mi></msub></math> y <math display=\"inline\"><msub><mi>q</mi><mi>m</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Corrientes de cuatro componentes"
    },
    {
     "mota": "testua",
     "html": "La corriente eléctrica se define como antes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>e</mi><mi>μ</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><msub><mi>ρ</mi><mi>e</mi></msub><mo>,</mo><msub><mi>J</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la fuente magnética, en perfecto paralelismo, se introduce"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>J</mi><mi>m</mi><mi>μ</mi></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><msub><mi>ρ</mi><mi>m</mi></msub><mo>,</mo><msub><mi>J</mi><mi>m</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí <math display=\"inline\"><msub><mi>ρ</mi><mi>e</mi></msub></math> y <math display=\"inline\"><msub><mi>J</mi><mi>e</mi></msub></math> son la densidad y la corriente eléctricas, y <math display=\"inline\"><msub><mi>ρ</mi><mi>m</mi></msub></math> y <math display=\"inline\"><msub><mi>J</mi><mi>m</mi></msub></math> la densidad y la corriente magnéticas."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones covariantes"
    },
    {
     "mota": "testua",
     "html": "Con el tensor electromagnético <math display=\"inline\"><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math> y su tensor dual <math display=\"inline\"><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup></math>, las leyes fundamentales se escriben así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msubsup><mi>J</mi><mi>e</mi><mi>μ</mi></msubsup><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>∂</mi><mi>ν</mi></msub><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>=</mo><mfrac><msub><mi>μ</mi><mn>0</mn></msub><mi>c</mi></mfrac><msubsup><mi>J</mi><mi>m</mi><mi>μ</mi></msubsup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera ecuación reproduce las ecuaciones ordinarias con fuente eléctrica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi>E</mi><mo>=</mo><mfrac><msub><mi>ρ</mi><mi>e</mi></msub><msub><mi>ε</mi><mn>0</mn></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>J</mi><mi>e</mi></msub><mo>+</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><mi>∂</mi><mi>E</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La segunda introduce las fuentes magnéticas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>ρ</mi><mi>m</mi></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi>E</mi><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>J</mi><mi>m</mi></msub><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Así se obtiene la versión covariante de Maxwell con carga magnética, con el mismo convenio de signos del manual."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "La fuerza de Lorentz generalizada"
    },
    {
     "mota": "testua",
     "html": "Para una partícula con carga eléctrica <math display=\"inline\"><msub><mi>q</mi><mi>e</mi></msub></math> y carga magnética <math display=\"inline\"><msub><mi>q</mi><mi>m</mi></msub></math>, la fuerza de Minkowski se escribe así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>K</mi><mi>μ</mi></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mi>e</mi></msub><msup><mi>F</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo>+</mo><mfrac><msub><mi>q</mi><mi>m</mi></msub><mi>c</mi></mfrac><msup><mi>G</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>η</mi><mi>ν</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La parte espacial de esa ecuación da la fuerza ordinaria, multiplicada por el factor relativista correspondiente. Dividiendo por ese factor se obtiene:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msub><mi>q</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>q</mi><mi>m</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo>−</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>u</mi><mo>×</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El primer bloque es la fuerza de Lorentz ordinaria sobre una carga eléctrica. El segundo es su análogo magnético: una carga magnética siente directamente <math display=\"inline\"><mi>B</mi></math> y, si se mueve, también un término cruzado con <math display=\"inline\"><mi>E</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Comprobación de coherencia"
    },
    {
     "mota": "testua",
     "html": "Si no hay fuente magnética, entonces <math display=\"inline\"><mrow><msub><mi>ρ</mi><mi>m</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>J</mi><mi>m</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, de modo que la segunda ecuación tensorial se reduce a las dos ecuaciones homogéneas ordinarias:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>∇</mi><mo>×</mo><mi>E</mi><mo>=</mo><mi>−</mi><mfrac><mrow><mi>∂</mi><mi>B</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además, si <math display=\"inline\"><mrow><msub><mi>q</mi><mi>m</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, la fuerza queda así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><msub><mi>q</mi><mi>e</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>+</mo><mi>u</mi><mo>×</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, la ley de Lorentz ordinaria. Por tanto, la generalización conserva el formalismo anterior como caso particular."
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Ejercicios propuestos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los siguientes son problemas sin resolver del capítulo 12 de Griffiths, para que los trabaje el lector; los enunciados se han tomado, traducidos, de las fotografías de la 3.ª edición del libro."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 12.6)</strong> Más o menos cada dos años aparece en la prensa que un astrónomo ha descubierto un objeto que se mueve más deprisa que la luz. Muchas veces proviene del error de no distinguir lo que se <strong>ve</strong> de lo que se <strong>observa</strong>, es decir, de no corregir el tiempo de trayecto de la luz. Por ejemplo: una estrella se mueve con velocidad <math display=\"inline\"><mi>v</mi></math>, formando un ángulo <math display=\"inline\"><mi>θ</mi></math> con la visual. ¿Cuál es su velocidad <strong>aparente</strong> a través del cielo? Halla el ángulo que da la velocidad aparente máxima, y demuestra que, aunque <math display=\"inline\"><mrow><mi>v</mi><mo>&lt;</mo><mi>c</mi></mrow></math>, la velocidad aparente puede ser mucho mayor que <math display=\"inline\"><mi>c</mi></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 12.9)</strong> Un Lincoln Continental es el doble de largo que un VW Beetle cuando ambos están en reposo. Mientras el Continental adelanta al VW, al pasar por un control de velocidad, un policía (en reposo) observa que ambos tienen la misma longitud. El VW va a la mitad de la velocidad de la luz. ¿A qué velocidad va el Lincoln? (Da la respuesta como múltiplo de <math display=\"inline\"><mi>c</mi></math>.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(Griffiths 12.10)</strong> Un velero está construido de tal modo que el mástil se inclina un ángulo <math display=\"inline\"><mover><mi>θ</mi><mo accent=\"true\">¯</mo></mover></math> respecto de la popa. Un observador situado en el muelle ve pasar el barco con velocidad <math display=\"inline\"><mi>v</mi></math>. ¿Qué ángulo mide el observador para el mástil?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>\n  Este capítulo desarrolla el fundamento relativista de la electrodinámica —los postulados y la geometría de la relatividad especial, la mecánica relativista, el magnetismo como consecuencia relativista de la electrostática y las leyes de transformación de los campos— con dibujos originales en CeTZ, traducido al euskera para JAKINA, cerrando la reproducción de la serie de doce capítulos. </em>"
    },
    {
     "mota": "modulua",
     "kodea": "M24",
     "izenburua": "Óptica física",
     "maila": "L2"
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M23 — Ondas electromagnéticas (Griffiths 9)"
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "MASTERFISMOtex.pdf",
     "xehetasuna": "Mikel Aguirre, del usuario al 100 %; apartado 7 (ecuación de onda, interferencia, Young)",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a69",
   "maila": 1,
   "izenburua": "La ecuación de onda, interferencia y experimento de Young",
   "blokeak": []
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "1. La ecuación de onda",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideramos la forma general de describir una onda como perturbación en un medio. La ecuación que la describe es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Su solución es una función con el tiempo y la posición como variables (<math display=\"inline\"><mi>y</mi></math> puede representar también presión, campo eléctrico, etc.) y puede expresarse como"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>v</mi></math> es una velocidad, una constante que depende del medio. Algunos ejemplos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soinurako: </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>B</mi><mi>ρ</mi></mfrac></msqrt></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soka baterako: </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>v</mi><mo>=</mo><msqrt><mfrac><mi>T</mi><mi>λ</mi></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo.</strong> Para el caso de la función"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se verifica la ecuación de onda. Comprobando las derivadas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>v</mi><mi>x</mi><mi>t</mi><mo>−</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>y</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>2</mn><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>v</mi><mi>x</mi><mi>t</mi><mo>−</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>v</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de manera que <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, como debía ser."
    },
    {
     "mota": "irudia",
     "oina": "Desplazamiento de un pulso: <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, y desplazado una distancia <math display=\"inline\"><mi>v</mi></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></msup></mrow></math> en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>1</mn></mrow></math>.",
     "src": "../media/irudiak/ae2e448b31f5c321.svg",
     "zabalera": 377
    },
    {
     "mota": "testua",
     "html": "Se ve que la forma de la onda es igual para ambos valores de <math display=\"inline\"><mi>t</mi></math>: la onda se desplaza con una velocidad <math display=\"inline\"><mi>v</mi></math> (distancia entre los valores máximos). La relación entre la velocidad, la longitud de onda y el periodo es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mi>λ</mi><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De todas las soluciones posibles nos interesan especialmente las funciones armónicas, cuya forma es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "siendo <math display=\"inline\"><mi>ϕ</mi></math> el desfase. Siendo <math display=\"inline\"><mi>k</mi></math> el número de onda: el número de veces que vibra una onda en una magnitud de distancia. Usando radianes por metro:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>k</mi><mi>T</mi></mrow></mfrac></mrow></math>, y llamando <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mrow><mi>k</mi><mi>v</mi></mrow></mfrac></mrow></math>; dado que <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac></mrow></math> se obtiene <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mi>k</mi><mi>v</mi></mrow></math>, así que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>v</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>±</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "2. Interferencia",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Según el principio de superposición una interferencia puede calcularse como la suma de las ecuaciones de dos ondas. En este caso la ecuación de onda puede escribirse de esta manera:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>v</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función consiste en la suma de ambas funciones"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>y</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><msub><mi>x</mi><mn>2</mn></msub><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para estudiar el experimento de las dos rendijas realizado por Young en 1801 (que se tuvo como prueba definitiva de la naturaleza ondulatoria de la luz) desarrollaremos estas nociones para un punto <math display=\"inline\"><mi>P</mi></math> sobre el que inciden dos ondas provenientes de dos rendijas separadas por una distancia <math display=\"inline\"><mi>d</mi></math> y separadas a su vez una distancia <math display=\"inline\"><mi>D</mi></math> respecto de la pantalla en la que se encuentra <math display=\"inline\"><mi>P</mi></math>."
    },
    {
     "mota": "irudia",
     "oina": "Esquema del experimento de Young: dos rendijas separadas una distancia <math display=\"inline\"><mi>d</mi></math>,\n  pantalla a distancia <math display=\"inline\"><mi>D</mi></math>, y punto <math display=\"inline\"><mi>P</mi></math> al que llegan los caminos <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>.",
     "src": "../media/irudiak/d24d91354ca58d74.svg",
     "zabalera": 320
    },
    {
     "mota": "testua",
     "html": "Utilizando la identidad trigonométrica"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>B</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>−</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><mi>ω</mi><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La intensidad es proporcional al cuadrado de la función; podemos dejar a un lado la dependencia respecto del tiempo y centrarnos en los casos en los que el coseno es máximo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mfrac><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></mfrac><mo>=</mo><mi>n</mi><mi>π</mi><mo>⇒</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mi>λ</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Mediante el mismo procedimiento se demuestra que los mínimos corresponden a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>x</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sin embargo, resulta de más utilidad relacionar estos máximos y mínimos con el ángulo entre la posición entre la mitad de las rendijas y la posición de <math display=\"inline\"><mi>P</mi></math>. Para ello, asumimos que la distancia entre las rendijas es mucho menor que la distancia entre las rendijas y la pantalla, de manera que podemos considerar que la trayectoria de las ondas es paralela; así podemos relacionar la resta de las posiciones con uno de los lados de un triángulo cuyo ángulo es aquel que buscamos."
    },
    {
     "mota": "irudia",
     "oina": "Cuando <math display=\"inline\"><mrow><mi>D</mi><mo>≫</mo><mi>d</mi></mrow></math>, los dos rayos hacia <math display=\"inline\"><mi>P</mi></math> son aproximadamente\n  paralelos y forman un ángulo <math display=\"inline\"><mi>θ</mi></math> con la línea de las rendijas;\n  la diferencia de camino óptico es <math display=\"inline\"><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>.",
     "src": "../media/irudiak/5fc8e2a5f4ec0b5a.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "De esta manera, los máximos serán"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y los mínimos serán"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>λ</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a72",
   "maila": 2,
   "izenburua": "3. Pulsos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para estudiar los pulsos partimos de dos ondas casi iguales (difieren por un diferencial):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><mi>d</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo>+</mo><mi>d</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si volvemos a usar la identidad trigonométrica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi>k</mi><mi>x</mi><mo>−</mo><mi>d</mi><mi>ω</mi><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mi>d</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mo>+</mo><mi>d</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si consideramos la función en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>d</mi><mi>k</mi><mi>x</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mi>d</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De manera que tenemos, por una parte, una función semejante a la original pero multiplicada por un coseno que modifica su amplitud, de forma que se genera un nuevo máximo de la amplitud con un periodo distinto. Consideraremos cuál es la <math display=\"inline\"><mi>k</mi></math> asociada a la modificación de la amplitud (<math display=\"inline\"><msub><mi>k</mi><mi>g</mi></msub></math>) y la relacionaremos con el nuevo periodo."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>k</mi><mi>x</mi></mrow><mn>2</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>k</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><msub><mi>λ</mi><mi>g</mi></msub></mfrac><mo>⇒</mo><msub><mi>λ</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La velocidad de grupo de una onda es la velocidad con la que las variaciones en la forma de la amplitud de la onda (también llamada modulación o envolvente) se propagan en el espacio. Si la velocidad de la onda la definimos como velocidad de fase,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la velocidad de grupo está definida por"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la derivada de <math display=\"inline\"><mi>ω</mi></math> respecto de <math display=\"inline\"><mi>k</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Por otra parte, la función armónica compleja se expresa así para la suma de dos ondas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><msup><mi>e</mi><msub><mi>δ</mi><mn>1</mn></msub></msup><mo>+</mo><msub><mi>A</mi><mn>2</mn></msub><msup><mi>e</mi><msub><mi>δ</mi><mn>2</mn></msub></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de reproducción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo procede directamente de las notas propias del usuario (MASTERFISMOtex.pdf), no de un libro publicado. La cadena de cálculo está encadenada en el original, la mayoría de las veces, mediante &quot;<math display=\"inline\"><mo>⇒</mo></math>&quot;; aquí se han intercalado ocasionalmente textos breves por claridad, sin alterar el resultado matemático."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "fismoderna_analizaryextraer",
     "xehetasuna": "Mikel Aguirre, del usuario al 100 %; interferencia múltiple, difracción por rejilla y difracción de rayos X en cristales",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a73",
   "maila": 1,
   "izenburua": "Interferencia de muchas fuentes y difracción por rejilla",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo reproduce, traducidas del euskera, notas propias del usuario (Mikel Aguirre) sobre interferencia de múltiples fuentes y difracción por rejilla. No es un libro de terceros — se reproduce con la misma libertad que el resto de MASTERFISMOtex."
      }
     ]
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "Intensidad de la superposición de ondas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La intensidad de una onda es proporcional al cuadrado de su amplitud, <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>. Consideremos dos ondas armónicas de la misma frecuencia superpuestas en un punto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>δ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cada una, por separado, tendría intensidad <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>∝</mo><msubsup><mi>A</mi><mn>1</mn><mn>2</mn></msubsup></mrow></math> e <math display=\"inline\"><mrow><msub><mi>I</mi><mn>2</mn></msub><mo>∝</mo><msubsup><mi>A</mi><mn>2</mn><mn>2</mn></msubsup></mrow></math>. Cuando ambas están presentes a la vez, la intensidad resultante es proporcional al cuadrado de la amplitud de la suma, y —como ya vimos al sumar dos ondas con la identidad trigonométrica del capítulo de interferencia— resulta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><msub><mi>I</mi><mn>1</mn></msub><mo>+</mo><msub><mi>I</mi><mn>2</mn></msub><mo>+</mo><mn>2</mn><msqrt><mrow><msub><mi>I</mi><mn>1</mn></msub><msub><mi>I</mi><mn>2</mn></msub></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>δ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>δ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Casos límite.</strong>  Si <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>1</mn></msub><mo>=</mo><msub><mi>δ</mi><mn>2</mn></msub></mrow></math> (ondas en fase), <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>I</mi><mn>1</mn></msub></msqrt><mo>+</mo><msqrt><msub><mi>I</mi><mn>2</mn></msub></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, y si además <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><msub><mi>I</mi><mn>1</mn></msub></mrow></math> (el cuádruple de una sola onda — interferencia constructiva). Si <math display=\"inline\"><mrow><msub><mi>δ</mi><mn>2</mn></msub><mo>=</mo><mi>π</mi><mo>+</mo><msub><mi>δ</mi><mn>1</mn></msub></mrow></math> (en oposición de fase), <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>I</mi><mn>1</mn></msub></msqrt><mo>−</mo><msqrt><msub><mi>I</mi><mn>2</mn></msub></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, y si <math display=\"inline\"><mrow><msub><mi>I</mi><mn>1</mn></msub><mo>=</mo><msub><mi>I</mi><mn>2</mn></msub></mrow></math>: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math> (interferencia destructiva total)."
    },
    {
     "mota": "testua",
     "html": "Para observar estos efectos experimentalmente hacen falta al menos dos fuentes con una relación de fase fija entre ellas —igual que las dos rendijas de Young del capítulo anterior, pero ahora generalizamos a más de dos fuentes."
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "Máximos de interferencia de una rejilla",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando varias fuentes puntuales (o rendijas) emiten ondas en fase, cada una genera un frente de onda circular; en una pantalla lejana, estos frentes se superponen y producen una serie de máximos y mínimos."
    },
    {
     "mota": "irudia",
     "oina": "Geometría para hallar la dirección de los máximos: dos caminos <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> desde rendijas separadas <math display=\"inline\"><mi>d</mi></math> hasta un punto lejano <math display=\"inline\"><mi>P</mi></math>, en la dirección <math display=\"inline\"><mi>θ</mi></math>.",
     "src": "../media/irudiak/3633c8a90164663b.svg",
     "zabalera": 369
    },
    {
     "mota": "testua",
     "html": "Para que en <math display=\"inline\"><mi>P</mi></math> haya un máximo, la diferencia de camino óptico entre ondas procedentes de fuentes vecinas debe ser un número entero de longitudes de onda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>±</mi><mn>1</mn><mo>,</mo><mi>±</mi><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Y como (para <math display=\"inline\"><mi>P</mi></math> suficientemente lejos) esa diferencia de camino es, geométricamente, <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mfrac><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>−</mo><msub><mi>r</mi><mn>2</mn></msub></mrow><mi>d</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><mi>λ</mi></mrow><mi>d</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es la condición de máximo para una rejilla de fuentes separadas <math display=\"inline\"><mi>d</mi></math> (la misma fórmula que ya obtuvimos para dos rendijas, ahora generalizada a cualquier número de fuentes igualmente espaciadas: cuantas más fuentes, más estrechos y definidos son los máximos)."
    },
    {
     "mota": "testua",
     "html": "<strong>Condición sobre <math display=\"inline\"><mi>λ</mi></math> y <math display=\"inline\"><mi>d</mi></math>.</strong>  Para que existan máximos con <math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>0</mn></mrow></math> hace falta <math display=\"inline\"><mrow><mi>λ</mi><mo>≤</mo><mi>d</mi></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mn>1</mn></mrow></math> obliga a ello). Si <math display=\"inline\"><mrow><mi>λ</mi><mo>≫</mo><mi>d</mi></mrow></math> no hay ningún máximo aparte del central. Si <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>d</mi></mrow></math> los máximos aparecen muy juntos entre sí. El caso interesante —franjas bien separadas y observables— ocurre cuando <math display=\"inline\"><mi>λ</mi></math> y <math display=\"inline\"><mi>d</mi></math> son del mismo orden de magnitud."
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "De la rejilla al cristal: por qué se necesitan rayos X",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El razonamiento anterior no depende de que las fuentes estén dispuestas en una línea. Una rejilla de difracción es un arreglo <strong>unidimensional</strong> periódico de rendijas; una red bidimensional de puntos (una malla) difracta igual, en dos direcciones a la vez; y un cristal —los átomos de un sólido, dispuestos periódicamente en las tres direcciones del espacio— es una red <strong>tridimensional</strong> de centros dispersores, y difracta según el mismo principio geométrico, ahora en tres dimensiones."
    },
    {
     "mota": "oharra",
     "titulua": "Figura que falta",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Comparación esquemática de redes de difracción en 1, 2 y 3 dimensiones: rejilla de rendijas paralelas, malla plana de puntos, y red cúbica de átomos en un sólido."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para que la difracción sea observable hace falta que <math display=\"inline\"><mi>λ</mi></math> y el espaciado <math display=\"inline\"><mi>d</mi></math> de la red sean del mismo orden de magnitud (ni <math display=\"inline\"><mrow><mi>λ</mi><mo>≫</mo><mi>d</mi></mrow></math> ni <math display=\"inline\"><mrow><mi>λ</mi><mo>≪</mo><mi>d</mi></mrow></math>). En un sólido cristalino, la distancia entre átomos vecinos es del orden de <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mn>1</mn></mrow></math> Å. Por tanto, para observar difracción en un cristal hace falta luz de longitud de onda <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>1</mn></mrow></math> Å — y esa es, precisamente, la longitud de onda típica de los <strong>rayos X</strong>. Por eso la difracción de rayos X (y no la de luz visible, <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>5000</mn></mrow></math> Å, mil veces más larga) es la herramienta que permite determinar experimentalmente la estructura interna de los cristales: es exactamente el mismo fenómeno de interferencia de una rejilla, aplicado a la red atómica tridimensional de un sólido."
    },
    {
     "mota": "hutsunea",
     "izenburua": "Óptica física: patrón de difracción (Fraunhofer) y polarización",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ecuación de onda, la interferencia (Young) y la difracción por rejilla (posición de los máximos, vínculo con los cristales) ya están redactadas. Quedan por escribir el patrón de difracción de una sola rendija (Fraunhofer, distribución exacta de la intensidad) y la polarización."
      }
     ]
    }
   ]
  }
 ]
};
