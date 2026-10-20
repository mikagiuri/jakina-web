/* JAKINA · kapitulua «B10.1 - M26 Fisika kuantikoa» (06fm_01kuantika), desde edicion2/kapituluak/06fm_01kuantika/06fm_01kuantika.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["06fm_01kuantika"] = {
 "gakoa": "06fm_01kuantika",
 "titulua": "JAKINA - B10.1 - M26 Física cuántica",
 "azala": "B10.1 - M26 Física cuántica",
 "azpititulua": "Etapa IV - L2",
 "iturburua": "kapituluak/06fm_01kuantika/06fm_01kuantika.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Física moderna",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Último paso del curso. Todos los bloques anteriores miran hacia aquí: espacios vectoriales (estados), valores propios (observables), Sturm–Liouville (Schrödinger), formalismo de Hamilton (evolución), termodinámica y probabilidad (física estadística). La relatividad especial ya está trabajada en dos sitios (capítulo 3 de M25 y el 12 de M23); aquí se sitúa conceptualmente."
    }
   ],
   "edukia": [
    "Erlatibitate berezia (ikus M25-3 eta M23-12)",
    "Kuantizazioaren jatorri esperimentala eta Schrödinger-en ekuazioa",
    "Formalismoa: egoerak, behagarriak, balio propioak",
    "Fisika estatistikoaren oinarriak"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M26",
   "izenburua": "Física cuántica",
   "maila": "L2"
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M11 — Diagonalización; M20 — EDOs (Sturm–Liouville); M25 — Formalismo de Hamilton"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "MASTERFISMOtex.pdf",
   "xehetasuna": "Mikel Aguirre, del usuario 100%; apartados 1-6 y 8-17 (origen experimental de la cuantización + ecuación de Schrödinger)",
   "hizkuntza": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Física moderna",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Radiación térmica y postulado de Planck</strong>"
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "1. Radiación térmica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La radiación térmica es la emitida por un cuerpo a consecuencia de su temperatura. Todos los cuerpos emiten esta radiación. A temperaturas ordinarias, la mayoría de los cuerpos son visibles no por la luz que emiten sino por la luz que reflejan. Sin embargo, a muy altas temperaturas, los cuerpos son luminosos por sí mismos."
    },
    {
     "mota": "testua",
     "html": "La materia en un estado condensado emite un espectro de radiación continuo; los detalles del espectro son casi independientes del material pero dependen fuertemente de la temperatura. Solo hay una clase de cuerpos que emiten espectros térmicos de características universales: los <em>cuerpos negros</em>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Evidencias experimentales"
    },
    {
     "mota": "testua",
     "html": "Los cuerpos negros emiten radiación térmica con el mismo espectro. La distribución espectral de la radiación de un cuerpo negro se especifica por la cantidad"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mi>T</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "llamada <em>radiancia espectral</em>."
    },
    {
     "mota": "irudia",
     "oina": "Radiancia espectral <math display=\"inline\"><msub><mi>R</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> de un cuerpo negro para tres temperaturas: la curva se desplaza a frecuencias mayores y la potencia total (área bajo la curva) crece rápidamente con <math display=\"inline\"><mi>T</mi></math>.",
     "src": "../media/irudiak/2139d087337a2b86.svg",
     "zabalera": 329
    },
    {
     "mota": "testua",
     "html": "La integral de la radiancia espectral sobre toda frecuencia es la energía total emitida de un cuerpo negro a temperatura <math display=\"inline\"><mi>T</mi></math>, por unidad de tiempo y por unidad de área. Se le llama <em>radiancia</em>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Observaciones experimentales sobre la forma de estas curvas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Cuando la frecuencia es cero la potencia es cero; a medida que crece la frecuencia crece la potencia hasta que alcanza un máximo tras el cual decrece, y nos permite prever que dada una frecuencia infinita la potencia radiada alcanzará el cero.",
      "La frecuencia para la cual la potencia radiada ocurre con mayor intensidad (potencia máxima para esa <math display=\"inline\"><mi>T</mi></math>) aumenta <em>linealmente</em> conforme la temperatura aumenta."
     ]
    },
    {
     "mota": "testua",
     "html": "Estas frecuencias máximas son proporcionales a la temperatura, y podemos relacionar a su vez qué longitud de onda corresponde a la energía máxima para una temperatura dada (<strong>ley de Wien</strong>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde la constante de Wien es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La potencia total radiada, en todas las frecuencias, aumenta conforme la temperatura aumenta, pero más rápidamente que en forma lineal. Este aumento se corresponde con la <strong>ley de Stefan-Boltzmann</strong>:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde la constante de Stefan-Boltzmann es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>W</mi><mrow><msup><mi>m</mi><mn>2</mn></msup><mo>⋅</mo><msup><mi>K</mi><mn>4</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 4.</strong> La temperatura de la superficie del Sol es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>5700</mn></mrow></math> K. Utilizando la ley de Stefan-Boltzmann, calcula cuál es la proporción de la masa perdida por el Sol durante un año. Datos: radio del Sol <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>6.96</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m, masa del Sol <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> Kg."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Segundos en un año: <math display=\"inline\"><mrow><mn>365</mn><mspace width=\"0.222em\"></mspace><mi>d</mi><mi>í</mi><mi>a</mi><mi>s</mi><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mn>24</mn><mo>⋅</mo><mn>60</mn><mo>⋅</mo><mn>60</mn><mo>=</mo><mn>31536000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></math>. Según la ley de Stefan-Boltzmann:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5700</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>=</mo><mn>59.85</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mtext mathvariant=\"normal\">  </mtext><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La superficie del Sol es <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6.96</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>6.087</mn><mo>⋅</mo><msup><mn>10</mn><mn>18</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></math>, así que la potencia es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>S</mi><mo>=</mo><mn>3.64</mn><mo>⋅</mo><msup><mn>10</mn><mn>26</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la energía en un año:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Energía </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Tiempo </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>1.1479</mn><mo>⋅</mo><msup><mn>10</mn><mn>34</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con la ecuación de Einstein <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> obtenemos la masa perdida:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mo>=</mo><mfrac><mi>E</mi><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>1.277211</mn><mo>⋅</mo><msup><mn>10</mn><mn>17</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El porcentaje respecto a la masa total del Sol es pequeño:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Porcentaje </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mi>m</mi><mi>M</mi></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>6.386</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Todo el problema puede resolverse en un solo paso (para lograr un resultado más ajustado):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Porcentaje </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup><mi>S</mi><mi>t</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>6.392</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 5.</strong> Para un cuerpo negro concreto sabemos que a cierta temperatura la longitud de onda para la cual su radiancia espectral alcanza un máximo es 6500 Å. Al cambiar la temperatura, la radiancia total se ha doblado. ¿Cuál es la longitud de onda que corresponde al máximo en la nueva temperatura?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Hay un camino que no requiere calcular temperaturas ni radiancias concretas: usando la constante de Wien,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><mfrac><mi>b</mi><msub><mi>T</mi><mn>1</mn></msub></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mi>b</mi><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo>⇒</mo><msub><mi>T</mi><mn>1</mn></msub><mo>⋅</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>⋅</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>⇒</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><msub><mi>T</mi><mn>1</mn></msub><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo>⋅</mo><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>1</mn></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La relación entre ambas temperaturas puede deducirse mediante la ley de Stefan-Boltzmann, ya que la relación entre las radiancias es dato: <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>σ</mi><msubsup><mi>T</mi><mn>1</mn><mn>4</mn></msubsup></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi><mo>=</mo><mi>σ</mi><msubsup><mi>T</mi><mn>2</mn><mn>4</mn></msubsup></mrow></math>. Dividiendo la primera ecuación entre la segunda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>T</mi><mn>1</mn></msub><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>4</mn></msup><mo>⇒</mo><mfrac><msub><mi>T</mi><mn>1</mn></msub><msub><mi>T</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo>,</mo><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mfrac><mn>1</mn><mn>4</mn></mfrac></msup></mfrac><mo>⋅</mo><mn>6500</mn><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>5465.8</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 6.</strong> ¿Cuál longitud de onda corresponde a la máxima energía irradiada por un ser humano? ¿En qué intervalo del espectro electromagnético se encuentra?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>273</mn><mo>+</mo><mn>36</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>K</mi></mrow></mfrac><mo>=</mo><mn>93786.4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se encuentra en el infrarrojo."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 7.</strong> Considérense a las estrellas como cuerpos negros que irradian energía según la temperatura de su superficie."
    },
    {
     "mota": "testua",
     "html": "(a) La temperatura de una estrella es de 50000 K. ¿Para qué valor de longitud de onda será máxima la radiancia?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mn>50000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mn>5.796</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>579.6</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(b) Sabiendo que la estrella está a 10 años luz y que la intensidad que llega a la Tierra desde ella es <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>40</mn></mrow></math> microwatt/metro cuadrado, ¿cuánto mide el radio de la estrella en kilómetros?"
    },
    {
     "mota": "testua",
     "html": "Consideramos primero cuál es la potencia de la irradiación de la estrella teniendo en cuenta el dato de la intensidad y el de la distancia de la estrella respecto de la Tierra:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>I</mi><mo>⋅</mo><mi>S</mi><mo>=</mo><mn>40</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>⋅</mo><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>10</mn><mo>⋅</mo><mn>299792458</mn><mfrac><mi>m</mi><mi>s</mi></mfrac><mo>⋅</mo><mn>31536000</mn><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>4.499</mn><mo>⋅</mo><msup><mn>10</mn><mn>30</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La radiancia en la superficie de la estrella es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo>⋅</mo><msup><mn>50000</mn><mn>4</mn></msup><mo>=</mo><mn>3.54</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dado que la potencia calculada es la misma, podemos usar la relación entre la potencia y la radiancia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mi>P</mi><mi>S</mi></mfrac><mo>⇒</mo><mn>4</mn><mi>π</mi><mo>⋅</mo><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>P</mi><mi>R</mi></mfrac><mo>⇒</mo><mi>r</mi><mo>=</mo><msqrt><mfrac><mi>P</mi><mrow><mn>4</mn><mi>π</mi><mi>R</mi></mrow></mfrac></msqrt><mo>=</mo><mn>1.00566</mn><mo>⋅</mo><msup><mn>10</mn><mn>6</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Km </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(c) La temperatura de la estrella ha aumentado hasta que su potencia se ha doblado. ¿Cuál es la nueva longitud de onda para la nueva radiancia máxima?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>R</mi><mo>=</mo><mn>7.08</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>⇒</mo><mi>T</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>7.08</mn><mo>⋅</mo><mfrac><msup><mn>10</mn><mn>11</mn></msup><mn>5.67</mn></mfrac><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>4</mn></mfrac></msup><mo>=</mo><mn>59444</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mn>59444</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mn>48.75</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>487.5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El modelo de Rayleigh-Jeans"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este apartado solo tenía título en la fuente original (&quot;1.1.3. El modelo de Raleigh-James&quot;), sin desarrollo. El contenido que sigue es exposición propia (no transcrita de ningún libro), apoyada en el tratamiento estándar del tema — coherente con el de Eisberg &amp; Resnick, <em>Quantum Physics</em>, cap. 1, que el usuario también posee."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Antes de Planck, la física clásica ya intentaba predecir la forma de <math display=\"inline\"><msub><mi>R</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> a partir de dos ingredientes puramente clásicos: contar cuántos modos de vibración electromagnética caben en una cavidad, y suponer que cada modo, en equilibrio térmico, almacena en promedio la misma energía que predice la mecánica estadística clásica."
    },
    {
     "mota": "testua",
     "html": "<strong>Contar los modos.</strong> Dentro de una cavidad de lado <math display=\"inline\"><mi>L</mi></math>, las ondas estacionarias electromagnéticas deben anularse en las paredes, lo que restringe las frecuencias posibles a un conjunto discreto (análogo a los modos de una cuerda con extremos fijos, pero en las tres direcciones del espacio). Contando cuántos de esos modos caen en el intervalo <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> —un cálculo puramente geométrico, sin física cuántica alguna— se obtiene que el número de modos por unidad de volumen y por intervalo de frecuencia es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(el factor 2 de las dos polarizaciones posibles de la luz ya está incluido)."
    },
    {
     "mota": "testua",
     "html": "<strong>Energía media clásica por modo.</strong> La física estadística clásica (teorema de equipartición) asigna a cada modo, considerado como un oscilador armónico, una energía térmica media"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mrow><mtext mathvariant=\"normal\">clasica </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>K</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "independiente de la frecuencia — esta es precisamente la energía media que ya calculamos arriba en el límite <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≪</mo><mn>1</mn></mrow></math> del tratamiento cuántico, y no es casualidad: para frecuencias bajas (cuantos de energía pequeños frente a <math display=\"inline\"><mrow><mi>K</mi><mi>T</mi></mrow></math>) la cuantización de Planck es indistinguible de la física clásica."
    },
    {
     "mota": "testua",
     "html": "<strong>La ley de Rayleigh-Jeans.</strong> Multiplicando la densidad de modos por la energía media por modo se obtiene la densidad de energía espectral clásica, y de ella la radiancia espectral:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">RJ </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>c</mi><mn>4</mn></mfrac><mo>⋅</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msub><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mrow><mtext mathvariant=\"normal\">clasica </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mi>K</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>La catástrofe ultravioleta.</strong> Esta expresión crece sin límite conforme <math display=\"inline\"><mrow><mi>ν</mi><mo>→</mo><mi>∞</mi></mrow></math>: la energía total radiada, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">RJ </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi></mrow></math>, diverge. Ningún cuerpo real emite energía infinita, así que el modelo clásico falla de manera catastrófica precisamente en el extremo de altas frecuencias (ultravioleta y más allá) — de ahí el nombre. Es exactamente el fallo que el postulado de Planck corrige: al sustituir la energía media clásica <math display=\"inline\"><mrow><mi>K</mi><mi>T</mi></mrow></math> por la expresión cuantizada <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, la exponencial del denominador hace que la contribución de cada modo se anule rápidamente cuando <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>≫</mo><mi>K</mi><mi>T</mi></mrow></math>, aunque para <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>≪</mo><mi>K</mi><mi>T</mi></mrow></math> ambas expresiones coincidan. La ley de Rayleigh-Jeans es, por tanto, exactamente el límite de baja frecuencia de la ley de Planck — no una teoría rival, sino el caso particular que la física clásica sí lograba predecir bien."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Postulado de Planck"
    },
    {
     "mota": "testua",
     "html": "Consiste en considerar que la energía no es continua sino que está cuantizada; también podríamos decir que se trata de discretizar los modos normales. Planck propuso que la energía dependía de la frecuencia, una constante (que con el tiempo llevaría su nombre) y un número entero (he ahí la cuantización)."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> Según el modelo de Planck, un oscilador de frecuencia <math display=\"inline\"><mi>ν</mi></math> tiene una probabilidad"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℰ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi mathvariant=\"script\">ℰ</mi><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de tener una energía"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Calcula el valor del factor <math display=\"inline\"><mi>A</mi></math> (constante de normalización) y calcula la energía promedio del oscilador."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> En ambos casos <math display=\"inline\"><mi>A</mi></math> se calcula teniendo en cuenta que la suma de todas las probabilidades es uno. Para el caso de la energía continua:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi mathvariant=\"script\">ℰ</mi><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></msup><mi>d</mi><mi mathvariant=\"script\">ℰ</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>⇒</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">ℰ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi mathvariant=\"script\">ℰ</mi><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></msup><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la energía cuantizada usamos un sumatorio en vez de una integral (dado que contamos con <math display=\"inline\"><mi>n</mi></math> en la fórmula):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>A</mi><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Refrescando la memoria sobre series de potencias, <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msup><mi>x</mi><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow></mfrac></mrow></math>, de manera que si consideramos la exponencial con su potencia como una variable a la enésima potencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aplicando esto al cálculo de la constante de normalización:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi>A</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></mfrac><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora podemos calcular la energía promedio y comprobar si se evita la catástrofe ultravioleta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo>⋅</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">ℰ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>n</mi><mi>h</mi><mi>ν</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(desarrollando, derivando la serie geométrica respecto de <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>h</mi><mi>ν</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>h</mi><mi>ν</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para comprobar que la fórmula cumple las observaciones experimentales, la desarrollamos como una serie: <math display=\"inline\"><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mrow><mi>n</mi><mi>!</mi></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Para los casos en los que la frecuencia es muy baja recuperamos el resultado conocido:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>≪</mo><mn>1</mn><mo>⇒</mo><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></mfrac><mo>⇒</mo><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mi>K</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para los casos en los que la frecuencia no es muy baja el resultado es CERO, de manera que se evita la catástrofe ultravioleta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac><mo>≫</mo><mn>1</mn><mo>⇒</mo><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover><mo>≈</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 2.</strong> Utilizando la expresión de Planck de la densidad de energía (en función de la longitud de onda), demuéstrese que la ley de Wien es una conclusión de la misma. Aplíquese el mismo procedimiento en función de la frecuencia en busca de una constante."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> La radiancia espectral es una función dependiente de la temperatura y la frecuencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>h</mi></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>⋅</mo><mfrac><msup><mi>ν</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "No podemos sustituir directamente la frecuencia por la velocidad de la luz entre la longitud de onda: debemos tener en cuenta el diferencial. Si <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mi>c</mi><mi>λ</mi></mfrac></mrow></math> entonces <math display=\"inline\"><mrow><mi>d</mi><mi>ν</mi><mo>=</mo><mi>−</mi><mfrac><mi>c</mi><msup><mi>λ</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>λ</mi></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mover><mi>R</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mfrac><mi>c</mi><mi>λ</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>c</mi><msup><mi>λ</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>λ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función dependiente de la longitud de onda es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>h</mi><mfrac><msup><mi>c</mi><mn>2</mn></msup><mrow><msup><mi>λ</mi><mn>5</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El enunciado pide calcular a partir de la densidad, pero conocemos la relación entre la radiancia y la densidad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>8</mn><mi>π</mi><mi>h</mi><mfrac><mi>c</mi><mrow><msup><mi>λ</mi><mn>5</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para encontrar el máximo, <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>ρ</mi></mrow><mrow><mi>d</mi><mi>λ</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>. Desarrollando y haciendo el cambio de variable <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>λ</mi><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math> se llega a la ecuación trascendental"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mn>5</mn><mo>+</mo><mi>x</mi><mfrac><msup><mi>e</mi><mi>x</mi></msup><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>≈</mo><mn>4.965114231</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mn>4.965114231</mn><mo>⋅</mo><mi>K</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2.8991</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que es precisamente el valor de la constante de Wien. El mismo procedimiento aplicado a la frecuencia da, con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>3</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>x</mi><mo>≈</mo><mn>2.8</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mrow><mn>2.8</mn><mi>K</mi></mrow><mi>h</mi></mfrac><mo>⋅</mo><mi>T</mi><mo>≈</mo><mn>5.8315</mn><mo>⋅</mo><msup><mn>10</mn><mn>10</mn></msup><mfrac><mrow><mi>H</mi><mi>z</mi></mrow><mi>K</mi></mfrac><mo>⋅</mo><mi>T</mi></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "Septiembre 2005, IEM/Física Moderna, problema 5",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La distribución de Planck para la densidad de energía de la radiación puede escribirse en la forma (<math display=\"inline\"><mi>A</mi></math> es una constante positiva): <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Comentar las analogías y las diferencias entre esta expresión y la que da la energía total de un gas ideal monoatómico: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En particular, discutir el significado de los términos entre paréntesis, y decir en qué circunstancias el segundo factor de la distribución de Planck se parecerá al correspondiente del gas."
      },
      {
       "mota": "testua",
       "html": "b) Demostrar que si denotamos por <math display=\"inline\"><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> la posición del máximo de la distribución de Planck en función de la frecuencia, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math> es una cierta constante (Ley de Wien). Para calcular la constante, usar el hecho de que el Sol es una estrella &quot;amarilla&quot; en el sentido de que la longitud de onda más abundante en su radiación corresponde a ese color. Suponer que esa longitud de onda es 6000 Å, y que la temperatura de la superficie del Sol es aproximadamente 5000 K."
      },
      {
       "mota": "testua",
       "html": "c) Un astrónomo observa que la radiación más abundante de una cierta estrella corresponde a fotones de 3 eV. Calcular la temperatura de la estrella."
      },
      {
       "mota": "testua",
       "html": "d) Estimar el orden de magnitud de la proporción <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>/</mi><msub><mi>N</mi><mn>1</mn></msub></mrow></math> de átomos de hidrógeno en la estrella del apartado anterior en los estados con <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>. (La energía de ionización del átomo de hidrógeno es <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV.)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) En ambos casos, la energía total es (número de &quot;modos&quot; o grados de libertad) <math display=\"inline\"><mi>×</mi></math> (energía media por modo). En el gas, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> es el número total de grados de libertad (<math display=\"inline\"><mi>N</mi></math> átomos, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> la energía media por grado de libertad según equipartición). En Planck, el primer paréntesis <math display=\"inline\"><mrow><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi></mrow></math> corresponde al número de modos (ondas permitidas) dentro de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> contando direcciones y polarización; el segundo, <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, es la energía media de un oscilador de esa frecuencia — depende de la frecuencia, a diferencia de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>. A altas temperaturas (<math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><mi>ν</mi><mo>≪</mo><mn>1</mn></mrow></math>) debe parecerse a la del gas, y en efecto: <math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>β</mi></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mi>ν</mi><mn>3</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, imponiendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>ν</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>3</mn><msup><mi>ν</mi><mn>2</mn></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>ν</mi><mn>3</mn></msup><mi>β</mi><mi>h</mi><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>−</mo><mfrac><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ecuación que fija <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte</mtext></mrow></mrow></math> (independiente de la temperatura: la Ley de Wien). Numéricamente, con <math display=\"inline\"><mrow><msub><mi>C</mi><mtext mathvariant=\"normal\">Wien</mtext></msub><mo>=</mo><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub></mrow></mfrac></mrow></math>: <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>510</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5700</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>4.92</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>3</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>4.9</mn></mrow></math>: <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>4.9</mn><mrow><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>4.9</mn></mfrac><mo>=</mo><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>7100</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV. Despreciando el efecto de la degeneración: <math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo>×</mo><mn>13.6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1.6</mn><mo>×</mo><mn>13.6</mn><mo>×</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup><mo>≈</mo><mn>8.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Discrepancia con el enunciado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado da <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>6000</mn></mrow></math> Å y <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">sol </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>5000</mn></mrow></math> K, pero la solución oficial manuscrita usa <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>5100</mn></mrow></math> Å y <math display=\"inline\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub><mo>=</mo><mn>5700</mn></mrow></math> K (con los que el resultado numérico <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>4.92</mn></mrow></math> es autoconsistente). Se transcriben los valores de la solución tal cual, sin forzarlos a coincidir con el enunciado impreso. El examen completo (los 5 problemas, con solución oficial) está en la sección &quot;Septiembre 2005&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 3.</strong> Teniendo en cuenta la expresión de la densidad de energía de Planck, comprueba que a temperatura <math display=\"inline\"><mi>T</mi></math> la potencia irradiada por un cuerpo negro concuerda con la ley de Stefan-Boltzmann. Ayuda: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>π</mi><mn>4</mn></msup><mn>15</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>c</mi><mn>4</mn></mfrac><mo>⋅</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo>,</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>c</mi><mn>4</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mn>8</mn><mi>π</mi><mi>h</mi></mrow><msup><mi>c</mi><mn>3</mn></msup></mfrac><mo>⋅</mo><mfrac><msup><mi>ν</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ν</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con el cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>K</mi><mi>T</mi></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>T</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup></mrow><mrow><msup><mi>c</mi><mn>2</mn></msup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msup><mi>x</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>π</mi><mn>5</mn></msup><msup><mi>K</mi><mn>4</mn></msup></mrow><mrow><mn>15</mn><msup><mi>c</mi><mn>2</mn></msup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msup><mi>T</mi><mn>4</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para que se cumpla la ley de Stefan-Boltzmann, la constante debe ser"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>π</mi><mn>5</mn></msup><msup><mi>K</mi><mn>4</mn></msup></mrow><mrow><mn>15</mn><msup><mi>c</mi><mn>2</mn></msup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mn>5.66</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mfrac><mi>W</mi><mrow><msup><mi>m</mi><mn>2</mn></msup><msup><mi>K</mi><mn>4</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Reto.</strong> Una bombilla de 60 W posee la misma radiancia que un cuerpo negro a una temperatura de 3000 K. Calcúlese el área efectivo del filamento de la bombilla. Calcúlese el rendimiento efectivo de la bombilla: el porcentaje de la radiancia que corresponde al espectro visible."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Por la ley de Stefan-Boltzmann,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Radiancia </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>σ</mi><msup><mi>T</mi><mn>4</mn></msup><mo>=</mo><mn>5.67</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mo>⋅</mo><msup><mn>3000</mn><mn>4</mn></msup><mo>=</mo><mn>4592700</mn><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la superficie:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Superficie </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia</mtext></mrow><mrow><mtext mathvariant=\"normal\">Radiancia </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>60</mn><mi>W</mi></mrow><mrow><mn>4592700</mn><mi>W</mi><mi>/</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>1.30642106</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><msup><mi>m</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el rendimiento aproximamos la integral de la radiancia espectral <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sobre el intervalo visible (4000-7000 Å, anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow></math>) tomando un valor representativo de <math display=\"inline\"><mi>R</mi></math> y multiplicándolo por <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow></math>. Antes de elegir ese valor, situamos el intervalo respecto al máximo de la curva:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mfrac><mi>b</mi><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2.898</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>m</mi><mo>⋅</mo><mi>K</mi></mrow><mrow><mn>3000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mn>9.66</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>9660</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El máximo cae muy por encima del visible, así que dentro del intervalo <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está creciendo; tomamos primero el punto medio, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>550</mn></mrow></math> nm, con la fórmula de Planck:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>h</mi><mfrac><msup><mi>c</mi><mn>2</mn></msup><mrow><msup><mi>λ</mi><mn>5</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>K</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3000</mn><mi>K</mi><mo>,</mo><mn>5.5</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1.214373294</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Rendimiento </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mi>R</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mrow><mtext mathvariant=\"normal\">Radiancia </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mfrac><mrow><mn>1.214373294</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow><mn>4592700</mn></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>7.93</mn><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> crece deprisa dentro del intervalo, esta aproximación de un solo punto subestima el valor real. La mejoramos promediando <math display=\"inline\"><mi>R</mi></math> en los dos extremos del intervalo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3000</mn><mi>K</mi><mo>,</mo><mn>4</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2.268187878</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math> <math display=\"block\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3000</mn><mi>K</mi><mo>,</mo><mn>7</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2.358090838</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>R</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mn>2.268187878</mn><mo>⋅</mo><msup><mn>10</mn><mn>11</mn></msup><mo>+</mo><mn>2.358090838</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup></mrow><mn>2</mn></mfrac><mo>=</mo><mn>1.292454813</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mfrac><mi>W</mi><msup><mi>m</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Rendimiento </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><mrow><mn>1.292454813</mn><mo>⋅</mo><msup><mn>10</mn><mn>12</mn></msup><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup></mrow><mn>4592700</mn></mfrac><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>8.44</mn><mi>%</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "corrigiendo el cálculo del punto medio en torno a un <math display=\"inline\"><mrow><mn>0.5</mn><mi>%</mi></mrow></math>."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 1,
   "izenburua": "Efecto fotoeléctrico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fenómeno por el cual un metal emite electrones al ser iluminado con luz de determinada frecuencia."
    },
    {
     "mota": "irudia",
     "oina": "Aparato para estudiar el efecto fotoeléctrico: luz monocromática incide sobre la placa <math display=\"inline\"><mi>A</mi></math>; los fotoelectrones liberados son recogidos por la copa <math display=\"inline\"><mi>B</mi></math> si el potencial <math display=\"inline\"><mi>V</mi></math> los atrae, y la corriente se mide en <math display=\"inline\"><mi>G</mi></math>.",
     "src": "../media/irudiak/a76d0e495d7c4ce0.svg",
     "zabalera": 409
    },
    {
     "mota": "testua",
     "html": "En el aparato una envoltura de vidrio encierra el sistema en un espacio al vacío. La luz incidente, que es monocromática, penetra a través de una ventana de cuarzo, incide sobre la placa de metal <math display=\"inline\"><mi>A</mi></math> y libera electrones (fotoelectrones) los cuales, si son atraídos a la copa de metal <math display=\"inline\"><mi>B</mi></math> mediante una diferencia de potencial <math display=\"inline\"><mi>V</mi></math> entre <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math>, se podrán detectar como una corriente. El amperímetro <math display=\"inline\"><mi>G</mi></math> sirve para medir esta corriente fotoeléctrica."
    },
    {
     "mota": "testua",
     "html": "Analizando la energía de un fotoelectrón en su recorrido de <math display=\"inline\"><mi>A</mi></math> a <math display=\"inline\"><mi>B</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mi>A</mi></msub><mo>−</mo><mi>E</mi><msub><mi>p</mi><mi>A</mi></msub><mo>=</mo><msub><mi>T</mi><mi>B</mi></msub><mo>−</mo><mi>E</mi><msub><mi>p</mi><mi>B</mi></msub><mo>⇒</mo><msub><mi>T</mi><mi>A</mi></msub><mo>−</mo><mi>e</mi><msub><mi>V</mi><mi>A</mi></msub><mo>=</mo><msub><mi>T</mi><mi>B</mi></msub><mo>−</mo><mi>e</mi><msub><mi>V</mi><mi>B</mi></msub><mo>⇒</mo><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>B</mi></msub><mo>−</mo><msub><mi>V</mi><mi>A</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>T</mi><mi>B</mi></msub><mo>−</mo><msub><mi>T</mi><mi>A</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Electronvoltio</em> (eV) es la energía que adquiere la carga de un electrón cuando se acelera con una diferencia de potencial de 1 voltio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>T</mi><mo>=</mo><mi>e</mi><mo>⋅</mo><mn>1</mn><mi>V</mi><mo>⇒</mo><mi mathvariant=\"normal\">Δ</mi><mi>T</mi><mo>=</mo><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><mn>1</mn><mfrac><mi>J</mi><mi>C</mi></mfrac><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Corriente fotoeléctrica en función del voltaje aplicado, para dos intensidades de luz (curva <math display=\"inline\"><mi>b</mi></math> con la mitad de intensidad que <math display=\"inline\"><mi>a</mi></math>). El potencial de frenado <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math> es el mismo en ambos casos: no depende de la intensidad, solo de la frecuencia.",
     "src": "../media/irudiak/4f1e6d34ec5f9c60.svg",
     "zabalera": 298
    },
    {
     "mota": "testua",
     "html": "La curva de la corriente fotoeléctrica en función de <math display=\"inline\"><mi>V</mi></math> alcanza, para <math display=\"inline\"><mi>V</mi></math> suficientemente grande, un valor límite (<em>valor de saturación</em>): todos los electrones emitidos desde <math display=\"inline\"><mi>A</mi></math> son colectados por la copa <math display=\"inline\"><mi>B</mi></math>. Si se invierte el signo de <math display=\"inline\"><mi>V</mi></math>, la corriente no cae inmediatamente a cero, lo cual sugiere que los electrones son emitidos con energía cinética; algunos alcanzarán <math display=\"inline\"><mi>B</mi></math> aunque el campo eléctrico se oponga a su movimiento."
    },
    {
     "mota": "testua",
     "html": "Si esta diferencia de potencial se hace lo suficientemente grande alcanzará un valor <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math> para el cual la corriente fotoeléctrica se hace cero: es el <em>potencial de frenado</em> o <em>potencial de detención</em>. Esta diferencia de potencial multiplicada por la carga del electrón es una medida de la energía cinética <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> de los electrones más rápidos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>=</mo><mi>e</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Experimentalmente resulta que la cantidad <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> es <strong>independiente de la intensidad</strong> de la luz."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tres hechos que la teoría clásica no explica"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La teoría ondulatoria exige que el vector eléctrico oscilante <math display=\"inline\"><mi>E</mi></math> de la onda luminosa aumente en amplitud conforme aumenta la intensidad del haz. Puesto que la fuerza aplicada al electrón es <math display=\"inline\"><mrow><mi>e</mi><mi>E</mi></mrow></math>, la energía cinética de los fotoelectrones debería aumentar de acuerdo con el aumento en intensidad del haz. Sin embargo, <math display=\"inline\"><mrow><msub><mi>T</mi><mi mathvariant=\"normal\">max</mi></msub><mo>=</mo><mi>e</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></math> es independiente de la intensidad de la luz.",
      "Según la teoría ondulatoria, el efecto fotoeléctrico debería ocurrir para cualquier frecuencia de luz, tomando en cuenta solo que la intensidad sea suficientemente intensa. Sin embargo, para cada superficie existe una frecuencia de corte característica: para frecuencias menores el efecto no ocurre.",
      "En la teoría clásica la energía luminosa se encuentra uniformemente distribuida sobre el frente de onda; si la luz es suficientemente débil existiría un tiempo de retraso mensurable entre el instante en que la luz empieza a incidir sobre la superficie y la expulsión del electrón. Sin embargo, nunca se ha medido un tiempo de retraso mensurable."
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> A una distancia de un metro de una fuente luminosa cuya potencia es 1 W se coloca una placa de potasio. Supóngase que un fotoelectrón emitido puede recibir su energía de un área circular de la placa cuyo radio <math display=\"inline\"><mi>r</mi></math> es, por ejemplo, un radio atómico (1 Å). La energía necesaria para obtener un electrón de la superficie de potasio es aproximadamente 2.1 eV. ¿Cuánto tiempo le tomará a este blanco absorber esta cantidad de energía de la fuente luminosa? Supóngase que la energía luminosa está esparcida uniformemente sobre el frente de onda."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> El área de una esfera de un metro con centro en la fuente es <math display=\"inline\"><mrow><mn>4</mn><mi>π</mi><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>π</mi><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></math>. La intensidad de la bombilla será"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Potencia</mtext></mrow><mrow><mtext mathvariant=\"normal\">Superficie </mtext><mspace width=\"0.333em\"></mspace></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mi>W</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mi>m</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>0.25</mn><mi>π</mi></mfrac><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si la fuente radía uniformemente en todas direcciones, el electrón absorbe"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>0.25</mn><mi>π</mi></mfrac><mfrac><mi>W</mi><msup><mi>m</mi><mn>2</mn></msup></mfrac><mo>⋅</mo><mi>π</mi><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup><msup><mi>m</mi><mn>2</mn></msup><mo>=</mo><mn>0.25</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup><mi>W</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La energía de extracción del metal es <math display=\"inline\"><mrow><mn>2.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.364570623</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow></math>, así que el tiempo necesario es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>3.364570623</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow><mrow><mn>0.25</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup><mi>J</mi><mi>/</mi><mi>s</mi></mrow></mfrac><mo>=</mo><mn>134.58</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> min </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Formulación de Einstein"
    },
    {
     "mota": "testua",
     "html": "La luz transporta energía en forma de pequeños paquetes, cuantos o fotones. La energía cinética de cada fotoelectrón es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A la energía mínima necesaria para arrancar un electrón al metal se le llama energía umbral, trabajo de extracción, función de trabajo o función de corte. En ese caso la energía cinética es cero:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>⇒</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math>: frecuencia umbral, mínima capaz de arrancar electrones al metal. <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math>: longitud de onda umbral, máxima capaz de arrancar electrones al metal."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio A.</strong> Si para extraer electrones del cinc se necesita una energía de 4.3 eV, ¿cuál es la longitud de onda máxima de la luz que se puede utilizar para producir el efecto fotoeléctrico en el cinc? ¿Cuál será la energía cinética máxima de los electrones emitidos por el cinc si se utiliza luz de longitud de onda de 100 nm?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>E</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mi>m</mi><mi>/</mi><mi>s</mi></mrow><mrow><mn>4.3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>1.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi><mi>/</mi><mtext mathvariant=\"normal\">eV</mtext></mrow></mfrac><mo>=</mo><mn>2.89</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La energía de radiación empleada con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>100</mn></mrow></math> nm:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>1.9864455</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><mi>J</mi><mo>=</mo><mn>12.3984</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto los electrones adquirirían una energía cinética de"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mn>12.3984</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>4.3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>8.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "Junio 2006, IEM/Física Moderna, problema 1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una estrella con una temperatura en superficie de 5000 K tiene el máximo de su radiancia en 5800 Å. Para generar un efecto fotoeléctrico en un metal, se utiliza la radiación de un cuerpo negro a 500 K."
      },
      {
       "mota": "testua",
       "html": "a) Determinar la longitud de onda correspondiente al máximo de la radiancia del cuerpo negro a 500 K."
      },
      {
       "mota": "testua",
       "html": "b) Si la función de trabajo del metal es de 0.214 eV, calcular la máxima longitud de onda de los fotones emitidos por el cuerpo negro, capaces de generar foto-electrones en el metal."
      },
      {
       "mota": "testua",
       "html": "c) Dibujar en un esquema la radiancia <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del cuerpo negro y sombrear la región del espectro de los fotones útiles para generar efecto fotoeléctrico en dicho metal."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><msub><mi>T</mi><mo>⋆</mo></msub><mo>=</mo><mn>5000</mn></mrow></math> K, <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><mo>=</mo><mn>5800</mn></mrow></math> Å."
      },
      {
       "mota": "testua",
       "html": "a) Ley de Wien: <math display=\"inline\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>T</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>C</mi></mrow></math>, luego <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>5800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.9</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math> Para el cuerpo negro a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>500</mn></mrow></math> K: <math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>T</mi><mo>=</mo><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><msub><mi>T</mi><mo>⋆</mo></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mn>0.214</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> (frecuencia umbral mínima), luego <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi><mi>/</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>W</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>0.214</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>58</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (Coincide con el valor de <math display=\"inline\"><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> del apartado anterior.)"
      },
      {
       "mota": "testua",
       "html": "c) En el esquema de <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del cuerpo negro a 500 K, la región útil para efecto fotoeléctrico es <math display=\"inline\"><mrow><mi>ν</mi><mo>&gt;</mo><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> (equivalentemente <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>): dado que <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math>, esa región es justo la mitad de mayor frecuencia de la curva, la que queda a la derecha del máximo."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El examen completo (los 6 problemas, con solución oficial) está en la sección &quot;Junio 2006&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 2.</strong> Para iluminar una placa de sodio se ha usado una longitud de onda de 4000 Å, y en ese caso el potencial de detención era 1.85 V. El potencial de detención es de 0.82 V cuando usamos una longitud de onda de 3000 Å. Calcula la constante de Planck, el trabajo de extracción del sodio y la longitud de onda umbral."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> A cada longitud de onda corresponde un potencial de detención concreto, pero el trabajo de extracción no cambia porque se trata de una placa del mismo material."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>e</mi><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>e</mi><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>2</mn></msub></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mtd></mtr></mtable></mrow><mo>⇒</mo><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>h</mi><mi>c</mi><mo>⋅</mo><mfrac><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub></mrow><mrow><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>λ</mi><mn>2</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>1</mn></msub><mo>−</mo><msub><mi>V</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>λ</mi><mn>1</mn></msub><msub><mi>λ</mi><mn>2</mn></msub></mrow><mrow><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mn>6.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el trabajo de extracción:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>⇒</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>1</mn></msub></mfrac><mo>−</mo><mi>e</mi><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>3.64</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y para la longitud de onda umbral:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>=</mo><mn>5439</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El experimento de Millikan"
    },
    {
     "mota": "testua",
     "html": "Demostró que tomando la teoría de Einstein del efecto fotoeléctrico se llegaba a determinar el mismo valor para la constante <math display=\"inline\"><mi>h</mi></math> que el determinado por Planck en su estudio de la radiación del cuerpo negro, dado que en la expresión <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mrow></math> se da una relación lineal entre la energía cinética y la frecuencia."
    },
    {
     "mota": "irudia",
     "oina": "Medidas de Millikan del potencial de frenado en función de la frecuencia (caso del sodio): la relación es lineal, la pendiente da la constante de Planck y el corte con el eje da la frecuencia umbral <math display=\"inline\"><msub><mi>ν</mi><mn>0</mn></msub></math>.",
     "src": "../media/irudiak/b486223da18b1fdb.svg",
     "zabalera": 257
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 3.</strong> Para iluminar una placa de aluminio se ha usado una longitud de onda de 2000 Å; el trabajo de extracción del aluminio es de 4.2 eV. ¿Cuáles son las energías cinéticas de los electrones más rápidos y de los más lentos? ¿Cuál es el potencial de detención? ¿Cuál es la longitud de onda umbral? Si la intensidad es de 2 W/m², ¿cuántos fotones impactan en la superficie del aluminio?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> El trabajo de extracción se refiere a los electrones de la superficie, que son los más rápidos; cuanto más dentro de la placa se halle el electrón, menor será su velocidad y mayor el trabajo necesario para extraerlo, llegando al caso en que la energía cinética del electrón sea cero. Para los electrones más rápidos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mn>3.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El potencial de detención es <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mrow><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub></mrow><mi>e</mi></mfrac><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> V</mtext></mrow></mrow></math>. La longitud de onda umbral es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>=</mo><mn>2952</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el número de fotones por unidad de superficie y tiempo, con <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi><mo>=</mo><mi>n</mi><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>I</mi><mi>λ</mi></mrow><mrow><mi>h</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>W</mi><mo>⋅</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></mfrac><mo>≈</mo><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mn>18</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fotones por </mtext><mspace width=\"0.333em\"></mspace></mrow><msup><mi>m</mi><mn>2</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> por segundo </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "Septiembre 2005, IEM/Física Moderna, problema 1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntos) Una lámpara ultravioleta (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å) de 1 vatio de potencia está a 10 m de una placa de cesio de 10 cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> de área, de forma que la luz incide perpendicularmente a la placa. Si se supone que cada fotón que llega a la placa extrae un electrón:"
      },
      {
       "mota": "testua",
       "html": "a) Calcular el número de electrones emitidos por segundo."
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la energía máxima de los electrones emitidos, si el trabajo de extracción del Cs es 1.9 eV?"
      },
      {
       "mota": "testua",
       "html": "c) ¿Cómo varían las magnitudes calculadas anteriormente si se acerca la lámpara a 5 m?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math> W <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> J s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>10</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>10</mn></mrow></math> cm<math display=\"inline\"><mrow><msup><mrow></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>."
      },
      {
       "mota": "testua",
       "html": "a) Potencia sobre la placa: <math display=\"block\"><mrow><msub><mi>P</mi><mi>S</mi></msub><mo>=</mo><mi>P</mi><mo>⋅</mo><mfrac><mi>S</mi><mrow><mn>4</mn><mi>π</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Número de fotones por segundo, con <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>N</mi><mi>γ</mi></msub><mo>=</mo><mfrac><msub><mi>P</mi><mi>S</mi></msub><mrow><mi>h</mi><mi>ν</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mi>S</mi></msub><mi>λ</mi></mrow><mrow><mi>h</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mfrac><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/eV</mtext></mrow></mrow></mfrac><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fotones/s</mtext></mrow><mi>.</mi></mrow></math> Con un electrón por fotón: <math display=\"inline\"><mrow><msub><mi>N</mi><mi>e</mi></msub><mo>=</mo><msub><mi>N</mi><mi>γ</mi></msub><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup></mrow></math> electrones/s."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow></mfrac><mo>=</mo><mn>4.96</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1.9</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.06</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) La potencia <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> varía con <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math>. Por tanto, al disminuir <math display=\"inline\"><mi>d</mi></math> a la mitad, <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> aumenta por un factor 4, y lo mismo hará el número de electrones extraídos. Sin embargo, la energía cinética máxima no cambiará (depende solo de <math display=\"inline\"><mi>λ</mi></math>, no de la intensidad)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El examen completo (los 5 problemas, con solución oficial) está en la sección &quot;Septiembre 2005&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 4.</strong> Un electrón, tras ser arrancado por efecto fotoeléctrico, se mueve en un campo magnético uniforme <math display=\"inline\"><mi>B</mi></math> describiendo una trayectoria circular de radio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0.188</mn></mrow></math> mm bajo un campo <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> T. Calcula su velocidad y su energía cinética."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> De la fuerza magnética como fuerza centrípeta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mi>e</mi><mi>B</mi><mi>v</mi></mrow><mi>m</mi></mfrac><mo>⇒</mo><mi>v</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mi>B</mi><mi>r</mi></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>T</mi><mo>⋅</mo><mn>0.188</mn><mi>m</mi></mrow><mrow><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg</mtext></mrow></mrow></mfrac><mo>=</mo><mn>3.3</mn><mo>⋅</mo><msup><mn>10</mn><mn>7</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3.3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>4.98</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>16</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de reproducción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la fuente original algunos datos del ejercicio 4 (por ejemplo, la velocidad inicial o la aplicación concreta) no están escritos en el texto, pero sí la respuesta; se ha dado tal como está, sin modificar."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Verificación experimental: medida de la constante de Planck"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta sección reproduce el informe de laboratorio propio del usuario (Mikel Aguirre, escrito originalmente en euskera; en la fuente en castellano estaba traducido del euskera): &quot;Efektu fotoelektrikoa. Planck-en konstantearen zenbatespena&quot;, práctica de la asignatura de física moderna (UPV/EHU). No es un libro de terceros — se reproduce íntegro, como el resto del material de MASTERFISMOtex."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El objetivo de esta práctica es medir experimentalmente la constante de Planck a partir de la teoría del efecto fotoeléctrico desarrollada arriba. Material: una célula fotoeléctrica con fotocátodo de PbS, una lámpara espectral de Hg, un juego de filtros de interferencia, un amplificador de medida universal y un multímetro."
    },
    {
     "mota": "testua",
     "html": "<strong>Contexto histórico.</strong> En 1887, H. R. Hertz descubrió que los electrodos sobre los que incide luz ultravioleta producen descargas eléctricas con más facilidad. En 1888, Hallwachs encontró que esas cargas eran negativas, y en 1899 J. J. Thomson demostró que eran electrones. Finalmente, en 1902, Philip Lenard hizo el descubrimiento sorprendente que la teoría clásica no lograba explicar: la energía cinética máxima de los electrones, <math display=\"inline\"><msub><mi>K</mi><mi mathvariant=\"normal\">max</mi></msub></math>, no depende de la intensidad de la luz incidente sino de su frecuencia (y esa dependencia es lineal). La luz, como onda clásica, tendría que entregar más energía cuanta más intensidad tuviera, y además predecía un retraso entre la incidencia de la luz y la emisión de electrones que nunca se observaba. Einstein propuso en 1905 la explicación cuántica: cuando la superficie de un material absorbe un fotón, una parte de la energía del fotón se usa para arrancar un electrón del átomo, y el resto se transmite al electrón como energía cinética <math display=\"inline\"><msub><mi>K</mi><mi mathvariant=\"normal\">max</mi></msub></math>. Siendo <math display=\"inline\"><mi>ϕ</mi></math> la función de trabajo de la superficie,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>ϕ</mi><mo>+</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función de trabajo depende de la naturaleza de la superficie fotoemisora e indica la energía que necesitan los electrones para salir del cátodo. Según la intensidad de la radiación incidente, llega al ánodo un cierto número de electrones; estos inducen una carga negativa que genera una diferencia de potencial que dificulta que más electrones lo alcancen. Al aumentar el número de electrones que llegan al ánodo, la diferencia de potencial también aumenta, hasta un valor límite <math display=\"inline\"><mi>V</mi></math> —el potencial de corte— a partir del cual ningún electrón, por mucha energía cinética que tenga, puede superar la diferencia de potencial. Si <math display=\"inline\"><mi>e</mi></math> es la carga del electrón,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y combinando ambas ecuaciones,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mi>ϕ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Procedimiento.</strong> Este experimento reproduce el de R. A. Millikan de 1916: se colocan distintos filtros monocromáticos sobre una lámpara espectral de mercurio, y un fotocátodo y un receptor recogen la luz filtrada. La diferencia de potencial entre ambos sube hasta alcanzar el potencial de corte, que se anota para cada filtro. La longitud de onda, la frecuencia y el potencial de corte medido para cada filtro se recogen en esta tabla:"
    },
    {
     "mota": "taula",
     "goiburua": [],
     "lerroak": [
      [
       "Uhin-luzera (nm)",
       "Maiztasuna (<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math>)",
       "Mozte-potentziala (V)"
      ],
      [
       "578",
       "5.1867",
       "0.65"
      ],
      [
       "546",
       "5.4907",
       "0.75"
      ],
      [
       "436",
       "6.8759",
       "1.29"
      ],
      [
       "405",
       "7.4022",
       "1.5"
      ],
      [
       "366",
       "8.191",
       "1.79"
      ]
     ]
    },
    {
     "mota": "irudia",
     "oina": "Potencial de corte <math display=\"inline\"><mi>V</mi></math> frente a la frecuencia <math display=\"inline\"><mi>ν</mi></math> de cada filtro: los 5 puntos experimentales y la recta de regresión lineal <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>/</mi><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ν</mi><mo>−</mo><mi>ϕ</mi><mi>/</mi><mi>e</mi></mrow></math>.",
     "src": "../media/irudiak/cf201aa40241c6e0.svg",
     "zabalera": 195
    },
    {
     "mota": "testua",
     "html": "De la ecuación anterior, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>h</mi><mi>e</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ν</mi><mo>−</mo><mfrac><mi>ϕ</mi><mi>e</mi></mfrac></mrow></math>: el potencial de corte y la frecuencia están relacionados linealmente, así que graficando <math display=\"inline\"><mi>V</mi></math> frente a <math display=\"inline\"><mi>ν</mi></math> y ajustando por regresión lineal (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow></math>, con <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mfrac><mi>h</mi><mi>e</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mfrac><mi>ϕ</mi><mi>e</mi></mfrac></mrow></math>) obtenemos el valor de <math display=\"inline\"><mfrac><mi>h</mi><mi>e</mi></mfrac></math>. Para la regresión necesitamos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo>⋅</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>6.629</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mn>4.395</mn><mo>⋅</mo><msup><mn>10</mn><mn>29</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>4.5242</mn><mo>⋅</mo><msup><mn>10</mn><mn>29</mn></msup></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1.196</mn><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mn>1.430416</mn><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>1.62064</mn></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo>⋅</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>8.425</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>7.929</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando las fórmulas habituales del error de la regresión lineal (con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ν</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>V</mi></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>a</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo>⋅</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>3.8323</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>b</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mn>1.34455377</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mfrac><mi>n</mi><mrow><mi>n</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>V</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mo>=</mo><mfrac><mi>σ</mi><msqrt><mrow><mi>n</mi><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac><mo>=</mo><mn>3.376</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>b</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>ν</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mo>=</mo><mn>0.02270766</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Redondeando, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>b</mi><mo>=</mo><mn>0.02</mn></mrow></math>, así que <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>1.34</mn><mo>±</mo><mn>0.02</mn></mrow></math>, y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mo>=</mo><mn>0.03</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math>, así que <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.83</mn><mo>±</mo><mn>0.03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math>. De las ecuaciones (4.1)-(4.2) obtenemos el valor de <math display=\"inline\"><mi>h</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mi>a</mi><mo>⋅</mo><mi>e</mi><mo>=</mo><mn>3.83</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup><mo>⋅</mo><mn>1.602176565</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo>=</mo><mn>6.136336</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En ambos casos el error de <math display=\"inline\"><mi>e</mi></math> es despreciable frente al de <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><mi>b</mi></math>, así que no se tiene en cuenta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>h</mi><mi>h</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>a</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>e</mi><mi>e</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>4.8065297</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.14</mn><mo>±</mo><mn>0.05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De igual manera, para la función de trabajo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mi>ϕ</mi><mo>=</mo><mi>b</mi><mo>⋅</mo><mi>e</mi><mo>=</mo><mi>−</mi><mn>1.34</mn><mo>⋅</mo><mn>1.602176565</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo>=</mo><mn>2.1469166</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ϕ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2.15</mn><mo>±</mo><mn>0.03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Y para la frecuencia umbral del PbS, la mínima capaz de arrancar electrones sin ganancia de energía cinética, <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>−</mo><mi>ϕ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>ϕ</mi><mi>h</mi></mfrac><mo>=</mo><mn>3.498695</mn><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⇒</mo><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.50</mn><mo>±</mo><mn>0.06</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.14</mn><mo>±</mo><mn>0.05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>ϕ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2.15</mn><mo>±</mo><mn>0.03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi><mtext mathvariant=\"normal\">  </mtext><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3.50</mn><mo>±</mo><mn>0.06</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><msup><mn>10</mn><mn>14</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Comparando el valor obtenido de la constante de Planck con el valor teórico (<math display=\"inline\"><mrow><mn>6.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math>) vemos que la desviación es de <math display=\"inline\"><mrow><mn>0.41</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup></mrow></math> (tomando el valor máximo): los valores no son compatibles dentro del margen de error. El resultado poco ajustado puede deberse a error instrumental, o a que se dispone de pocos puntos para construir la regresión lineal."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 1,
   "izenburua": "Experimento de Compton",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Al lanzar rayos X a través de grafito y medir la intensidad en función de la longitud de onda, Compton descubrió que, además de la intensidad máxima esperada para la longitud de onda de los rayos X, aparecían máximos para otra longitud de onda, relacionada con el ángulo en el que el rayo X se había dispersado."
    },
    {
     "mota": "testua",
     "html": "Esto contradecía la teoría clásica, ya que en ella el rayo causa en los electrones sobre los que incide una oscilación igual a la frecuencia que tiene, y éstos, a su vez, deberían radiar una onda con la misma frecuencia."
    },
    {
     "mota": "testua",
     "html": "Compton (e independientemente Debye) interpretaron el experimento como si los rayos X no fueran una onda sino un conjunto de fotones que impactaran con electrones; el fotón incidente transfiere parte de su energía al electrón y se dispersa. (Obsérvese que en el caso del efecto fotoeléctrico se consideraba que los electrones absorbían <em>toda</em> la energía de la luz.)"
    },
    {
     "mota": "irudia",
     "oina": "Dispositivo experimental de Compton: rayos X inciden sobre un blanco de carbono; el espectro disperso a un ángulo <math display=\"inline\"><mi>θ</mi></math> muestra dos picos, el de longitud de onda original <math display=\"inline\"><mi>λ</mi></math> (más débil) y el desplazado <math display=\"inline\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>=</mo><mi>λ</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow></math> (dominante).",
     "src": "../media/irudiak/a34cc813f32a4397.svg",
     "zabalera": 380
    },
    {
     "mota": "testua",
     "html": "Para establecer una relación entre el cambio de longitud de onda y el ángulo de dispersión, tenemos en cuenta que en el choque del fotón con el electrón se conservan la energía y el momento lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>E</mi><mi>γ</mi></msub><mo>+</mo><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><msubsup><mi>E</mi><mi>γ</mi><mo>′</mo></msubsup><mo>+</mo><msubsup><mi>E</mi><mi>e</mi><mo>′</mo></msubsup></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>+</mo><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>e</mi></msub><mo>=</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>+</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>e</mi></msub></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sabemos que la energía de la partícula es <math display=\"inline\"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><mi>c</mi><msub><mi>p</mi><mi>γ</mi></msub></mrow></math>, y la energía del electrón en reposo es <math display=\"inline\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. Usando la invariante relativista <math display=\"inline\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mrow></math> e introduciendo estas relaciones en la ecuación de conservación de energía:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>c</mi><msub><mi>p</mi><mi>γ</mi></msub><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>c</mi><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo>+</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msubsup><mi>p</mi><msup><mi>e</mi><mo>′</mo></msup><mn>2</mn></msubsup></mrow></msqrt><mo>⇒</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>=</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo>+</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msubsup><mi>p</mi><msup><mi>e</mi><mo>′</mo></msup><mn>2</mn></msubsup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Elevando al cuadrado y simplificando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>−</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>−</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>=</mo><msubsup><mi>p</mi><msup><mi>e</mi><mo>′</mo></msup><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por otro lado, de la conservación del momento (el momento inicial del electrón es cero, pues la energía de los rayos X es mucho mayor):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>=</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>+</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>e</mi></msub><mo>⇒</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>e</mi></msub><mo>=</mo><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub><mo>−</mo><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando el cuadrado, con <math display=\"inline\"><mi>θ</mi></math> el ángulo entre <math display=\"inline\"><msub><mover><mi>p</mi><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub></math> y <math display=\"inline\"><msub><mover><msup><mi>p</mi><mo>′</mo></msup><mo accent=\"true\">→</mo></mover><mi>γ</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>e</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mn>2</mn><msub><mi>p</mi><mi>γ</mi></msub><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Introduciendo este resultado en la ecuación anterior, los términos <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> se cancelan y queda"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>γ</mi></msub><mo>−</mo><msubsup><mi>p</mi><mi>γ</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mfrac><mn>1</mn><mi>p</mi></mfrac><mi>γ</mi><mo>′</mo></msubsup><mo>−</mo><mfrac><mn>1</mn><msub><mi>p</mi><mi>γ</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al considerar el fotón <math display=\"inline\"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><mi>h</mi><mi>ν</mi></mrow></math>, se tiene <math display=\"inline\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><mo>=</mo><mfrac><mi>h</mi><mi>λ</mi></mfrac></mrow></math>, así que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mfrac><mi>′</mi><mi>h</mi></mfrac><mo>−</mo><mfrac><mi>λ</mi><mi>h</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi><mo>⇒</mo><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "También se escribe <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>C</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>C</mi></msub><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo>=</mo><mn>0.0243</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es la llamada <strong>longitud de onda de Compton</strong>."
    },
    {
     "mota": "problema",
     "izena": "Junio 2007, IEM/Física Moderna, problema 1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para estudiar el efecto Compton se diseña un equipo experimental constituido por un tubo de rayos X, una muestra de carbono, un cristal analizador y un detector de rayos X."
      },
      {
       "mota": "testua",
       "html": "a) Realizar un esquema elemental del dispositivo experimental, mostrando los componentes en las configuraciones requeridas para observar la dispersión Compton a <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) El haz de rayos X incidente se monocromatiza a una longitud de onda <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å, y como analizador se utiliza un cristal en el que se utiliza la reflexión de Bragg asociada a los planos cristalinos de espaciado <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>3.023</mn></mrow></math> Å. El espectro medido para un ángulo de dispersión Compton de <math display=\"inline\"><mrow><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> se representa en la figura adjunta en función del ángulo <math display=\"inline\"><mi>θ</mi></math> de la reflexión de Bragg en el analizador: dos picos de intensidad, a <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> (el segundo marcado también con la referencia <math display=\"inline\"><mrow><mn>135</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, correspondiente al ángulo entre los haces incidente y reflejado en el cristal). A partir de este resultado, calcular el valor de la constante de Planck."
      },
      {
       "mota": "testua",
       "html": "c) Indicar brevemente al menos otros tres métodos experimentales diferentes a este para medir la constante de Planck."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) El dispositivo consta de: un tubo de rayos X que emite un haz monocromático hacia la muestra de carbono; en la muestra se produce la dispersión Compton, con el haz dispersado saliendo a <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> del haz incidente; ese haz dispersado incide sobre el cristal analizador, que por reflexión de Bragg (con ángulo <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">Bragg</mtext></msub></math> entre el haz y los planos cristalinos) separa angularmente las distintas longitudes de onda presentes; el haz así difractado llega finalmente al detector de rayos X."
      },
      {
       "mota": "testua",
       "html": "b) Por la ley de Bragg (<math display=\"inline\"><mrow><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7106</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7310</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (<math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> coincide, como cabía esperar, con el valor de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å del haz incidente mencionado en el enunciado.) El corrimiento Compton es entonces <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>≈</mo><mn>0.0203</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> Y por la fórmula de Compton, con <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mspace width=\"0.222em\"></mspace><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Numéricamente, con <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.8367</mn></mrow></math>: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mn>0.0203</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mn>0.8367</mn></mfrac><mo>≈</mo><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Otros métodos para medir <math display=\"inline\"><mi>h</mi></math>: midiendo el potencial de frenado en función de la frecuencia <math display=\"inline\"><mi>ν</mi></math> en el efecto fotoeléctrico; midiendo la longitud de onda mínima emitida en función del potencial acelerador en un tubo de rayos X; a partir de la medida de la constante de Rydberg; a partir de la medida de la radiación de un cuerpo negro y su ajuste a la función de Planck."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El examen completo (los 5 problemas, con solución oficial) está en la sección &quot;Junio 2007&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio A.</strong> Considérese un haz de rayos X con una longitud de onda de 0.1 nm y haz de rayos gamma con una longitud de onda de 0.00188 nm. Si estudiamos la radiación dispersada por los electrones libres en un ángulo de 90 grados: (a) ¿Cuál es el cambio de longitud de onda en cada caso? (b) ¿Cuál es la energía cinética dada al electrón en cada caso? (c) ¿Cuál es el porcentaje de energía perdida por el fotón incidente en cada caso?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> (a) El cambio de longitud de onda para 90° es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mi>C</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mn>90</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.0243</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este resultado es independiente de la longitud de onda del fotón incidente."
    },
    {
     "mota": "testua",
     "html": "(b) La energía cinética del electrón es la diferencia entre la energía inicial y final del fotón:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>=</mo><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msup><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>′</mo></msup><mo>=</mo><mi>h</mi><mi>c</mi><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>+</mo><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para los rayos X: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>4.7125</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup><mi>J</mi><mo>=</mo><mn>0.294</mn></mrow></math> KeV. Para los rayos gamma: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>5.9572</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup><mi>J</mi><mo>=</mo><mn>371.8</mn></mrow></math> KeV."
    },
    {
     "mota": "testua",
     "html": "(c) La energía del haz de rayos X incidente es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>12.4</mn></mrow></math> KeV, así que el porcentaje perdido por el fotón es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.294</mn><mi>/</mi><mn>12.4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>2.37</mn><mi>%</mi></mrow></math>. La energía del haz de rayos gamma incidente es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>659.5</mn></mrow></math> KeV, así que el porcentaje es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>371.8</mn><mi>/</mi><mn>659.5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>100</mn><mo>=</mo><mn>56.376</mn><mi>%</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> Normalmente, en el experimento de Compton suponemos que el electrón está en reposo. Si suponemos que en el momento inicial el electrón se mueve a velocidad constante en sentido contrario al fotón, y tras el choque la frecuencia del fotón no ha cambiado pero se mueve en sentido contrario al inicial, ¿cuál es la velocidad inicial del electrón?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Si la frecuencia del fotón es la misma, la energía del electrón es la misma. El momento lineal del fotón puede expresarse mediante la constante de Planck y el momento del electrón mediante la invariante relativista:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>=</mo><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup><mo>⇒</mo><msub><mi>p</mi><mi>e</mi></msub><mo>=</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>E</mi><mo>=</mo><mi>p</mi><mi>c</mi><mo>⇒</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>p</mi><mi>c</mi><mo>⇒</mo><msub><mi>p</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Planteando la conservación del momento en componentes (el electrón se mueve en dirección contraria, ángulo <math display=\"inline\"><mi>π</mi></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>c</mi></mfrac><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mover><mi>i</mi><mo accent=\"true\">̂</mo></mover><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mover><mi>j</mi><mo accent=\"true\">̂</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si asumimos que el electrón se mueve en dirección contraria, el ángulo es <math display=\"inline\"><mi>π</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mo>−</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>c</mi></mfrac><mo>+</mo><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac><mo>⇒</mo><mn>2</mn><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mo>=</mo><mn>2</mn><mfrac><msqrt><mrow><msup><mi>E</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mi>c</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Con la energía del electrón conocida, para hallar la velocidad usamos el factor <math display=\"inline\"><mi>γ</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mi>γ</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt><mo>⇒</mo><mi>γ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y desarrollando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> se llega a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>h</mi><mi>ν</mi></mrow><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msubsup><mi>E</mi><mn>0</mn><mn>2</mn></msubsup></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "Septiembre 2006, IEM/Física Moderna, problema 1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) Considérese una colisión Compton entre un fotón de longitud de onda <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> y un electrón libre moviéndose con momento de módulo <math display=\"inline\"><mi>P</mi></math> en la misma dirección y sentido que el fotón incidente."
      },
      {
       "mota": "testua",
       "html": "a) Deducir, para este caso, la expresión que relaciona la longitud de onda del fotón saliente con el ángulo de dispersión. ¿Qué ocurre si el electrón se mueve en sentido opuesto al del fotón?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es el máximo valor que puede tomar el momento del electrón después de la colisión? Compárese con el electrón en reposo. Calcular en este caso la longitud de onda de la radiación incidente si el ángulo de dispersión del fotón es <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y el momento del electrón de retroceso es <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Método: en el sistema de referencia propio del electrón (que se mueve con <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> respecto al laboratorio), la frecuencia del fotón incidente aparece desplazada por efecto Doppler relativista: <math display=\"block\"><mrow><msub><mi>ν</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>ν</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>λ</mi><mn>0</mn></msub></mrow></math> (el electrón se mueve en el mismo sentido que el fotón). En ese sistema el electrón está en reposo, así que aplica la fórmula estándar de Compton deducida arriba: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Sustituyendo <math display=\"inline\"><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub></math>: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (mismo sentido). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Si el electrón se mueve en sentido opuesto al fotón, el signo de <math display=\"inline\"><mi>β</mi></math> se invierte: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (sentido opuesto). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Para esta parte se compara con el caso estándar (electrón inicialmente en reposo). El momento de retroceso del electrón es máximo cuando el fotón retrodispersa (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), caso en que el desplazamiento Compton es máximo, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>2</mn><mi>h</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por conservación del momento, <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mi>e</mi><mo>,</mo><mtext mathvariant=\"normal\">max</mtext></mrow></msub><mo>=</mo><mi>p</mi><mo>+</mo><msup><mi>p</mi><mo>′</mo></msup><mo>=</mo><mi>h</mi><mi>/</mi><msub><mi>λ</mi><mn>0</mn></msub><mo>+</mo><mi>h</mi><mi>/</mi><msup><mi>λ</mi><mo>′</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Cálculo numérico incompleto en la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cálculo numérico final de b) (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, momento de retroceso <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>, hallar <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math>) no se pudo transcribir con fiabilidad: la fuente manuscrita corta la última línea de cuentas. El examen completo (los 6 problemas, con solución oficial) está en la sección &quot;Septiembre 2006&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 2.</strong> Comprueba que un electrón libre no puede absorber un fotón porque no podrían conservarse la energía y el momento lineal. Por tanto, para que ocurra el efecto fotoeléctrico es imprescindible que el electrón esté unido a un átomo o un sólido. Sin embargo, en el efecto Compton puede tratarse de un electrón libre, ¿por qué?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Para todo marco de referencia el momento lineal de un fotón es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mi>E</mi><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac></mrow></math>. Sin embargo, si la absorción ocurriera, el momento lineal se anularía: en el marco de referencia del electrón el momento lineal es cero. Se trata de una contradicción. El caso del efecto Compton es distinto ya que se trata de un fotón con una nueva frecuencia, de manera que la energía y el momento lineal se conservan."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 4.</strong> (a) ¿Qué conclusión podemos extraer sobre la naturaleza de la radiación dado el experimento de Compton? ¿Por qué? (b) Queremos repetir el experimento de Compton pero, en lugar de usar electrones, usaremos partículas alfa. Para realizar una buena medición del cambio relativo de longitud de onda ha de ser de un 1 por ciento cuando el ángulo sea de 90 grados. ¿Cuál ha de ser la longitud de onda de los fotones? ¿En qué intervalo del espectro se encuentra? (c) [sin enunciado en la fuente]"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> (a) [sin desarrollar en la fuente]. (b)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>2</mn><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi></mrow></mfrac><mo>⇒</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mn>2</mn><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi><mi>λ</mi></mrow></mfrac><mo>⇒</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>α</mi></msub><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mi>/</mi><mi>λ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>200</mn><mo>⋅</mo><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><mrow><mn>6.68</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>299792458</mn><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></mfrac><mo>=</mo><mn>6.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se trata de rayos gamma: su longitud de onda es menor al picómetro."
    },
    {
     "mota": "testua",
     "html": "<strong>Reto.</strong> Emitimos un fotón de longitud de onda lambda cero y este vuelve en dirección contraria (efecto Compton mediante) para chocarse contra una placa expulsando de ella un fotoelectrón de velocidad despreciable. Calcúlese la longitud de onda inicial. Dato: trabajo de extracción del metal de la placa <math display=\"inline\"><mrow><mo>=</mo><mn>2.1</mn></mrow></math> eV."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> La variación en la longitud de onda es debida al efecto Compton:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mi>λ</mi><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mi>C</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dado que </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>180</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "A su vez, la longitud de onda para la cual un fotoelectrón se desprende de un material con velocidad despreciable cumple <math display=\"inline\"><mrow><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>−</mo><msub><mi>w</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>=</mo><mi>λ</mi></mrow></math>. Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>w</mi><mn>0</mn></msub></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><msub><mi>m</mi><mn>0</mn></msub><mi>c</mi></mrow></mfrac><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><msub><mi>w</mi><mn>0</mn></msub></mrow><mrow><mi>c</mi><msub><mi>m</mi><mn>0</mn></msub><msub><mi>w</mi><mn>0</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>5.904</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si el cálculo se hace en dos pasos en vez de uno se ve que la desviación por efecto Compton apenas altera la longitud de onda. El efecto Compton es relevante para frecuencias medias, mientras que el fotoeléctrico es relevante para las bajas: Compton usó rayos X (y por eso logra resultados que difieren de los logrados por Rayleigh en un experimento similar), mientras que el efecto fotoeléctrico es perceptible en el espectro visible."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fotones y emisión de rayos X"
    },
    {
     "mota": "testua",
     "html": "El proceso de <em>bremsstrahlung</em> puede considerarse como un efecto fotoeléctrico inverso: en el efecto fotoeléctrico se absorbe un fotón cuya energía e impulso van al electrón y al núcleo que retrocede; en el proceso de bremsstrahlung se crea un fotón cuya energía e impulso vienen de la colisión de un electrón y un núcleo. En bremsstrahlung se trata de la creación de fotones, no de su absorción o dispersión por la materia."
    },
    {
     "mota": "testua",
     "html": "Un electrón de energía cinética inicial <math display=\"inline\"><mi>T</mi></math> es desacelerado durante una colisión con un núcleo pesado; la energía que este pierde aparece en forma de radiación como un fotón de rayos X. El electrón interactúa con el núcleo cargado mediante el campo de Coulomb y transfiere impulso al núcleo. Si <math display=\"inline\"><msup><mi>K</mi><mo>′</mo></msup></math> es la energía cinética del electrón después del choque, la energía del fotón es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>K</mi><mo>−</mo><msup><mi>K</mi><mo>′</mo></msup><mo>⇒</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mi>K</mi><mo>−</mo><msup><mi>K</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los electrones del haz incidente pueden perder diferentes cantidades de energía en las colisiones, y un electrón determinado podrá alcanzar el punto de reposo solamente después de muchas de ellas; los rayos X producidos por muchos electrones constituyen así el espectro continuo."
    },
    {
     "mota": "irudia",
     "oina": "Espectro continuo de bremsstrahlung emitido por electrones de distintas energías al incidir sobre un blanco metálico. Cada curva tiene un corte abrupto en <math display=\"inline\"><mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: ningún fotón puede llevarse más energía que la que tenía el electrón.",
     "src": "../media/irudiak/2d09414cf5d9ec8e.svg",
     "zabalera": 322
    },
    {
     "mota": "testua",
     "html": "Son muchos los fotones discretos cuyas longitudes de onda varían desde el mínimo hasta el infinito, correspondiendo a las diferentes pérdidas de energía en los choques individuales. El fotón de longitud de onda más corta se emite cuando un electrón pierde toda su energía cinética en un proceso de desaceleración; entonces, haciendo <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>=</mo><mi>K</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ya que <math display=\"inline\"><mi>K</mi></math> es igual a <math display=\"inline\"><mrow><mi>e</mi><mi>V</mi></mrow></math> (la energía adquirida por el electrón al acelerarse mediante una diferencia de potencial <math display=\"inline\"><mi>V</mi></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>⇒</mo><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mfrac><mrow><mn>1.239841875</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> volt </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mi>m</mi></mrow><mi>V</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 3.</strong> Determinar la constante de Planck <math display=\"inline\"><mi>h</mi></math> a partir del hecho de que la longitud de onda mínima de rayos X producida por electrones de 40 KeV es 0.311 Å."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mfrac><mo>⇒</mo><mi>h</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mi>V</mi><msub><mi>λ</mi><mi mathvariant=\"normal\">min</mi></msub></mrow><mi>c</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><mn>4</mn><mo>⋅</mo><msup><mn>10</mn><mn>4</mn></msup><mi>V</mi><mo>⋅</mo><mn>3.11</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mi>m</mi></mrow><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></mfrac><mo>=</mo><mn>6.648</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Producción y aniquilación de pares",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta sección solo tenía título en la fuente original. La exposición es propia (no transcrita de ningún libro) y se apoya en el tratamiento estándar de Eisberg &amp; Resnick, <em>Quantum Physics</em>, §2-7, que el usuario también posee."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Producción de pares"
    },
    {
     "mota": "testua",
     "html": "Un fotón de energía suficientemente alta puede materializarse en un par electrón-positrón:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>γ</mi><mo>→</mo><msup><mi>e</mi><mo>−</mo></msup><mo>+</mo><msup><mi>e</mi><mo>+</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es la contrapartida del efecto Compton en el régimen de muy alta energía: mientras el efecto fotoeléctrico domina a bajas energías y Compton a energías medias, la producción de pares domina cuando la energía del fotón supera con holgura el umbral que vamos a calcular."
    },
    {
     "mota": "testua",
     "html": "<strong>¿Por qué el fotón no puede materializarse en un par él solo, en el vacío?</strong> Supongamos que sí pudiera. En el sistema de referencia del centro de masas del par recién creado, la energía y el momento total del par en el instante de la creación deben coincidir con los del fotón incidente. Pero un fotón siempre lleva momento <math display=\"inline\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>E</mi><mi>γ</mi></msub><mi>/</mi><mi>c</mi><mo>≠</mo><mn>0</mn></mrow></math>, mientras que un par creado justo en el umbral (con la mínima energía posible, es decir, sin energía cinética sobrante) tiene, en su propio centro de masas, momento total nulo. Un fotón con momento no nulo no puede convertirse en un sistema de momento nulo: la conservación simultánea de energía y momento lo prohíbe. Por eso la producción de pares nunca se observa en el espacio vacío: requiere la proximidad de un núcleo atómico, que absorbe el momento sobrante sin apenas llevarse energía (por ser mucho más pesado que el par electrón-positrón: la relación <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"inline\"><mi>M</mi></math> grande implica poca energía cinética para un momento dado)."
    },
    {
     "mota": "testua",
     "html": "<strong>Energía umbral.</strong> En el sistema de referencia del núcleo (que aproximamos en reposo, dada su gran masa), la energía mínima del fotón para crear el par —sin dejar energía cinética sobrante al electrón ni al positrón— es simplemente la necesaria para formar las dos masas en reposo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><msub><mi>ν</mi><mi mathvariant=\"normal\">min</mi></msub><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>1.022</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>h</mi><mi>ν</mi></mrow></mfrac></mrow></math>, esto corresponde a una longitud de onda umbral de <math display=\"inline\"><mn>0.0121</mn></math> Å: rayos gamma o rayos X muy duros, muy por encima de la energía típica de los rayos X del efecto Compton."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio.</strong> ¿Qué energía cinética total (repartida entre el electrón y el positrón) tiene un par creado por un fotón de <math display=\"inline\"><mn>3</mn></math> MeV, si suponemos que el núcleo no se lleva energía apreciable?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> La energía del fotón se reparte entre las dos masas en reposo y la energía cinética sobrante:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">total </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⇒</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">total </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>−</mo><mn>1.022</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>1.978</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Aniquilación de pares"
    },
    {
     "mota": "testua",
     "html": "El proceso inverso: un electrón y un positrón, prácticamente en reposo el uno respecto del otro, se aniquilan y su masa se convierte íntegramente en radiación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mo>−</mo></msup><mo>+</mo><msup><mi>e</mi><mo>+</mo></msup><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> radiación </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El sistema tiene, antes de la aniquilación, momento total prácticamente nulo (ambas partículas casi en reposo). Por conservación del momento, <strong>no puede crearse un único fotón</strong>: un solo fotón lleva siempre momento <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>E</mi><mi>/</mi><mi>c</mi><mo>≠</mo><mn>0</mn></mrow></math>, y eso violaría la conservación del momento si el momento inicial es cero — exactamente el mismo argumento, en sentido inverso, que usamos para descartar la producción de un par por un fotón aislado. El proceso más probable crea <strong>dos</strong> fotones, emitidos en direcciones opuestas para que sus momentos se cancelen:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><msub><mi>p</mi><mn>2</mn></msub><mo>⇒</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>p</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>p</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>⇒</mo><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>2</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los dos fotones tienen, por tanto, la misma energía. La conservación de la energía total da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo>+</mo><mi>h</mi><msub><mi>ν</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>h</mi><mi>ν</mi><mo>⇒</mo><mi>h</mi><mi>ν</mi><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>0.511</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0.0243</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(el lector reconocerá esta última cantidad: es exactamente la longitud de onda de Compton <math display=\"inline\"><msub><mi>λ</mi><mi>C</mi></msub></math> que definimos en la sección anterior — no es casualidad, ambas surgen de comparar <math display=\"inline\"><mrow><mi>h</mi><mi>/</mi><mi>λ</mi></mrow></math> con <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></math>.)"
    }
   ]
  },
  {
   "id": "a6",
   "maila": 1,
   "izenburua": "Modelo atómico de Thomson",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El modelo propuesto por Thomson consiste en un átomo esférico de 1 Å de radio en el que la carga positiva está distribuida de manera homogénea, mientras que los electrones están distribuidos (como partículas individuales) en posiciones que dependen de su cantidad. Se tenía en cuenta que a la carga positiva correspondía una masa 2000 veces mayor que la del electrón, y se consideraba que los electrones podían vibrar en torno a una posición. Para el átomo más simple, el hidrógeno, se consideraba que el electrón se hallaba en el centro del átomo."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio A.</strong> Supóngase una carga <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math> dentro de una región esférica de densidad de carga positiva <math display=\"inline\"><mi>ρ</mi></math> (un átomo de hidrógeno de Thomson). Demuestre que su movimiento, si tiene energía cinética, puede ser una oscilación armónica en torno al centro de la esfera."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Digamos que el electrón se desplaza a una distancia <math display=\"inline\"><mi>a</mi></math> desde el centro (siendo <math display=\"inline\"><mi>a</mi></math> menor que el radio del átomo). Por la ley de Gauss, se puede calcular la fuerza usando la ley de Coulomb:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>a</mi><mn>3</mn></msup><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>e</mi><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mi>a</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Podemos escribir la fuerza como <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi></mrow></math> donde <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mrow><mi>e</mi><mi>ρ</mi></mrow><mrow><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac></mrow></math>. Si tenemos en cuenta la fórmula del oscilador armónico y su velocidad angular:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>ω</mi><mo>=</mo><msqrt><mfrac><mi>k</mi><mi>m</mi></mfrac></msqrt><mo>⇒</mo><mn>2</mn><mi>π</mi><mi>ν</mi><mo>=</mo><msqrt><mfrac><mrow><mi>e</mi><mi>ρ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>m</mi></mfrac></msqrt><mo>⇒</mo><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mrow><mi>e</mi><mi>ρ</mi></mrow><mrow><mn>3</mn><msub><mi>ε</mi><mn>0</mn></msub><mi>m</mi></mrow></mfrac></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para una esfera de radio 1 Å:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msqrt><mfrac><mrow><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi><mo>⋅</mo><mfrac><mrow><mn>3</mn><mo>⋅</mo><mn>1.602</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>C</mi></mrow><mrow><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></mfrac></mrow><mrow><mn>3</mn><mo>⋅</mo><mn>8.8542</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mfrac><mrow><msup><mi>s</mi><mn>2</mn></msup><msup><mi>C</mi><mn>2</mn></msup></mrow><mrow><msup><mi>m</mi><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg</mtext></mrow></mrow></mfrac><mo>⋅</mo><mn>9.11</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg</mtext></mrow></mrow></mfrac></msqrt><mo>=</mo><mn>2.533</mn><mo>⋅</mo><msup><mn>10</mn><mn>15</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Hz </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>c</mi><mi>ν</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mn>8</mn></msup><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow><mrow><mn>2.533</mn><mo>⋅</mo><msup><mn>10</mn><mn>15</mn></msup></mrow></mfrac><mo>=</mo><mn>1.185</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>1185</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El grave problema que afrontaba este modelo era la incapacidad para explicar por qué podían surgir radiaciones a otras frecuencias aparte de esta."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Modelo atómico de Rutherford",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Rutherford diseñó un experimento para comprobar cuál era la desviación de un haz de partículas alfa al ser dirigido contra una hoja muy fina de oro. Hizo sus cálculos teniendo en cuenta el modelo de Thomson y la previsión era que la desviación sería muy pequeña. Sin embargo, cuando Geiger y Marsden efectuaron el experimento la desviación observada era muy grande."
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El tratamiento cuantitativo que sigue reproduce, traducida del euskera, una derivación propia del usuario (Mikel Aguirre), de sus apuntes de física moderna (UPV/EHU). No es un libro de terceros — se reproduce con la misma libertad que el resto de MASTERFISMOtex."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El tratamiento cuantitativo de Rutherford"
    },
    {
     "mota": "testua",
     "html": "Consideremos una partícula alfa (carga <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mi>e</mi></mrow></math>) que se aproxima a un núcleo fijo (carga <math display=\"inline\"><mrow><msub><mi>z</mi><mn>2</mn></msub><mi>e</mi></mrow></math>) bajo la repulsión de Coulomb, descrita en coordenadas polares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> centradas en el núcleo. Las componentes radial y tangencial de la segunda ley de Newton son:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>m</mi><msub><mi>a</mi><mi>r</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mi>r</mi><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>m</mi><msub><mi>a</mi><mi>φ</mi></msub><mo>=</mo><mn>0</mn><mo>=</mo><mi>r</mi><mover><mi>φ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De la ecuación tangencial, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>, así que <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> es constante: es, salvo la masa, el momento angular, <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mi>L</mi><mi>m</mi></mfrac></mrow></math>. Muy lejos del núcleo la trayectoria es recta con velocidad <math display=\"inline\"><msub><mi>v</mi><mn>0</mn></msub></math> y parámetro de impacto <math display=\"inline\"><mi>b</mi></math> (la distancia entre esa recta y el núcleo), así que <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>b</mi><msub><mi>v</mi><mn>0</mn></msub></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>b</mi><msub><mi>v</mi><mn>0</mn></msub><mo>⇒</mo><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>b</mi><msub><mi>v</mi><mn>0</mn></msub></mrow><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo esto en la ecuación radial (usando la regla de la cadena, <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mrow><mi>d</mi><mi>r</mi></mrow><mrow><mi>d</mi><mi>φ</mi></mrow></mfrac><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover></mrow></math>) para eliminar el tiempo, y cambiando de variable <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac></mrow></math>, la ecuación radial se convierte en una ecuación diferencial lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>d</mi><msup><mi>φ</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> con </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>D</mi><mo>=</mo><mfrac><mrow><msub><mi>z</mi><mn>1</mn></msub><msub><mi>z</mi><mn>2</mn></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mn>0</mn><mn>2</mn></msubsup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>D</mi></math> es la <strong>distancia de máximo acercamiento</strong>: la distancia mínima a la que llegaría la partícula en un choque frontal (<math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>0</mn></mrow></math>), donde toda la energía cinética inicial se convierte en energía potencial de repulsión. La solución general es <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, es decir,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>−</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Con las condiciones iniciales (<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>∞</mi></mrow></math> —o sea <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>—, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msub><mi>v</mi><mn>0</mn></msub></mrow></math>) se obtiene <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mi>b</mi></mfrac></mrow></math>, así que la trayectoria (una rama de hipérbola) es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>r</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>b</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>+</mo><mfrac><mi>D</mi><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>φ</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> la partícula vuelve a estar infinitamente lejos (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> de nuevo), a un ángulo asintótico <math display=\"inline\"><mrow><mi>φ</mi><mo>≠</mo><mn>0</mn></mrow></math> que, usando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cumple <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>b</mi><mi>/</mi><mi>D</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Cuidado: el ángulo asintótico <math display=\"inline\"><mi>φ</mi></math> no es el mismo que el ángulo de dispersión <math display=\"inline\"><mi>θ</mi></math></strong> (el ángulo entre la dirección de entrada y la de salida de la partícula). Se relacionan por"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>D</mi><mrow><mn>2</mn><mi>b</mi></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mo>⇒</mo><mtext mathvariant=\"normal\">  </mtext><mi>b</mi><mo>=</mo><mfrac><mi>D</mi><mn>2</mn></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para un parámetro de impacto <math display=\"inline\"><mi>b</mi></math> dado, la desviación es siempre la misma: si <math display=\"inline\"><mrow><mi>b</mi><mo>≫</mo><mi>D</mi></mrow></math> la trayectoria es casi recta (desviación casi nula), si <math display=\"inline\"><mrow><mi>b</mi><mo>≪</mo><mi>D</mi></mrow></math> la desviación puede acercarse a <math display=\"inline\"><mrow><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, y si <math display=\"inline\"><mrow><mi>b</mi><mo>≈</mo><mi>D</mi></mrow></math> la desviación es del orden de un radián."
    },
    {
     "mota": "testua",
     "html": "<strong>El experimento real.</strong> Las partículas alfa bombardean una lámina de oro cuyos átomos actúan cada uno como un centro dispersor independiente, a una distancia entre átomos de <math display=\"inline\"><mrow><mi>D</mi><mo>≈</mo><mn>3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> Å. Como el experimento es esencialmente aleatorio (no se controla con qué parámetro de impacto llega cada partícula a cada átomo), <math display=\"inline\"><mi>b</mi></math> debe tratarse estadísticamente, no partícula a partícula: la fracción de partículas que llega con parámetro de impacto entre <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>+</mo><mi>d</mi><mi>b</mi></mrow></math> es proporcional al área del anillo correspondiente, <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El número de partículas dispersadas por unidad de tiempo hacia ángulos entre <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>+</mo><mi>d</mi><mi>θ</mi></mrow></math> es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi><mo>=</mo><mi>−</mi><mi>I</mi><mi>ρ</mi><mi>t</mi><mo>⋅</mo><mn>2</mn><mi>π</mi><mi>b</mi><mi>d</mi><mi>b</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>I</mi></math> es el número de partículas alfa incidentes por unidad de tiempo, <math display=\"inline\"><mi>ρ</mi></math> es la densidad areal de átomos de la lámina (átomos por unidad de superficie) y <math display=\"inline\"><mi>t</mi></math> es su espesor. Sustituyendo <math display=\"inline\"><mrow><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mi>D</mi><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>θ</mi></mrow></math> (obtenidos derivando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>D</mi><mrow><mn>2</mn><mi>b</mi></mrow></mfrac></mrow></math>) se llega a la fórmula de dispersión de Rutherford:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi><mo>=</mo><mfrac><mrow><mi>ρ</mi><mi>t</mi><mi>I</mi><mi>π</mi><msup><mi>D</mi><mn>2</mn></msup></mrow><mn>8</mn></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>θ</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Número de partículas dispersadas <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en función del ángulo de dispersión <math display=\"inline\"><mi>θ</mi></math>: cae muy deprisa, según <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — la firma característica de la dispersión de Rutherford, incompatible con el modelo de Thomson.",
     "src": "../media/irudiak/3e88f48ddd34de4e.svg",
     "zabalera": 286
    },
    {
     "mota": "testua",
     "html": "Este resultado (y no el modelo de Thomson, que predice una desviación mucho más suave y ninguna partícula a ángulos grandes) es exactamente lo que Geiger y Marsden observaron, incluidas partículas dispersadas a más de <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>. Por eso se acepta el modelo planetario de Rutherford: un núcleo positivo puntual con los electrones orbitando a su alrededor."
    },
    {
     "mota": "problema",
     "izena": "Mayo 2012, IEM/Física Moderna, problema 1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Mediante un experimento de dispersión de partículas <math display=\"inline\"><mi>α</mi></math> por átomos de plata Ag (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>47</mn></mrow></math>) se ha estimado que el radio del núcleo es <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m. ¿Hasta qué energía máxima de las partículas <math display=\"inline\"><mi>α</mi></math> su dispersión sigue el comportamiento predicho por el modelo de Rutherford?"
      },
      {
       "mota": "testua",
       "html": "b) Considerar un proceso de dispersión Compton. Calcular la energía mínima de un fotón para que este transfiera la mitad de su energía al electrón."
      },
      {
       "mota": "testua",
       "html": "c) En un tubo de rayos X, ¿cuál debe ser el mínimo voltaje de aceleración de los electrones para producir rayos X de 1 Å?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La energía máxima para la que aún vale el modelo de Rutherford es aquella para la que la partícula <math display=\"inline\"><mi>α</mi></math> (carga <math display=\"inline\"><mrow><msup><mi>Z</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn></mrow></math>) llega justo a rozar el núcleo (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m), es decir, toda su energía cinética se convierte en energía potencial culombiana a esa distancia: <math display=\"block\"><mrow><mi>K</mi><mo>=</mo><mfrac><mrow><mi>Z</mi><msup><mi>Z</mi><mo>′</mo></msup><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>47</mn><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>2.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>135</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El fotón dispersado tendrá la mitad de la energía del incidente (<math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>E</mi></mrow></math>, pues la otra mitad se transfiere al electrón). Como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, entonces <math display=\"inline\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>. Aplicando la relación de Compton (deducida en el capítulo anterior): <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>λ</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La energía mínima del fotón corresponde a la longitud de onda máxima, que según la relación anterior ocurre en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>h</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>h</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>256</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>λ</mi><mi>e</mi></mrow></mfrac><mo>=</mo><mn>12.4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los apartados b) y c) de este mismo problema pertenecen en realidad al efecto Compton y a la emisión de rayos X (capítulo anterior); se transcriben aquí completos, junto con a), por fidelidad al examen original. El examen completo (los 4 problemas, con solución oficial) está en la sección &quot;Mayo 2012&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con este modelo surge, sin embargo, un problema nuevo: los electrones en órbita circular alrededor del núcleo están acelerando constantemente (aunque sea solo cambiando de dirección), y por las leyes del electromagnetismo clásico deberían radiar energía continuamente. Al perderla, el radio de su órbita se reduciría sin freno, y el átomo colapsaría en una fracción de segundo. Esta inestabilidad clásica del átomo planetario es precisamente lo que Bohr necesitaba resolver con sus postulados."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Modelo atómico de Bohr"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Postulados de Bohr"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Un electrón en un átomo se mueve en una órbita circular en torno a un núcleo bajo la influencia de la atracción de Coulomb entre el electrón y el núcleo, obedeciendo las leyes de la mecánica clásica.",
      "En lugar de las infinitas órbitas posibles según la mecánica clásica, para el electrón solo es posible moverse en órbitas cuyo momento angular orbital <math display=\"inline\"><mi>L</mi></math> es múltiplo de la constante de Planck entre <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi></mrow></math>:"
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>L</mi><mo>=</mo><mi>n</mi><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cuantizar el momento angular orbital supone cuantizar la energía, pero esa cuantización no es la misma que la propuesta por Planck."
    },
    {
     "mota": "testua",
     "html": "Pese a que sufre una aceleración constante, el electrón no irradia energía electromagnética en todo momento y su energía se mantiene constante. Bohr propone desechar la noción de que el electrón irradie constantemente; noción que, por otra parte, llevaba a una conclusión imposible, ya que todo electrón acabaría chocando con su núcleo. Un electrón emite radiación electromagnética cuando se mueve de una órbita a otra. La frecuencia de esa radiación depende de la diferencia de energía que tiene el electrón en una y otra órbita."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><mfrac><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi></mrow><mi>h</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (reformulando la teoría de Einstein) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Contrastación de los postulados con la evidencia empírica"
    },
    {
     "mota": "testua",
     "html": "Con estos postulados vamos a calcular la velocidad del electrón y el radio de la circunferencia que describe su trayectoria:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>r</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>m</mi><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>m</mi><mi>v</mi><mi>r</mi><mo>=</mo><mi>n</mi><mi>ħ</mi></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "dividiendo, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>n</mi><mi>ħ</mi></mrow></mfrac></mrow></math>; sustituyendo esta <math display=\"inline\"><mi>v</mi></math> en la segunda ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El desarrollo que sigue (energía de las órbitas, diagrama de niveles, principio de correspondencia, Franck-Hertz, crítica de la teoría cuántica antigua) es exposición propia, informada por la lectura de &quot;Física (ESP) - Gratton, Julio - Introducción a la Mecánica Cuántica&quot; (apuntes de cátedra de Julio Gratton, Física 4, no del usuario; tratados con el mismo criterio que Eisberg-Resnick: referencia, no transcripción), que trae un desarrollo cuantitativo completo del átomo de Bohr que la fuente original (MASTERFISMOtex) solo esbozaba con los postulados."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>La energía de las órbitas.</strong> Ya tenemos <math display=\"inline\"><msub><mi>v</mi><mi>n</mi></msub></math> y <math display=\"inline\"><msub><mi>r</mi><mi>n</mi></msub></math>; calculemos ahora la energía total. La energía potencial eléctrica es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><msub><mi>r</mi><mi>n</mi></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De la propia ecuación de la fuerza centrípeta, <math display=\"inline\"><mrow><mi>m</mi><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><msub><mi>r</mi><mi>n</mi></msub></mfrac><mo>=</mo><mi>−</mi><msub><mi>V</mi><mi>n</mi></msub></mrow></math>, así que la energía cinética es <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup><mo>=</mo><mi>−</mi><mfrac><msub><mi>V</mi><mi>n</mi></msub><mn>2</mn></mfrac></mrow></math>, y la energía total resulta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msub><mi>T</mi><mi>n</mi></msub><mo>+</mo><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><msub><mi>V</mi><mi>n</mi></msub><mn>2</mn></mfrac><mo>+</mo><msub><mi>V</mi><mi>n</mi></msub><mo>=</mo><mfrac><msub><mi>V</mi><mi>n</mi></msub><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>8</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><mrow><mi>Z</mi><msup><mi>e</mi><mn>2</mn></msup></mrow><msub><mi>r</mi><mi>n</mi></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><msub><mi>r</mi><mi>n</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>e</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>32</mn><msup><mi>π</mi><mn>2</mn></msup><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>n</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><msub><mi>E</mi><mn>1</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde, usando <math display=\"inline\"><mrow><mi>ħ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><msup><mi>e</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>8</mn><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>h</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mi>−</mi><mn>13.6</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es la energía del estado fundamental del hidrógeno (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></math>): el primer resultado <strong>cuantitativo</strong> de toda la física atómica que concuerda con el experimento (la energía de ionización medida del hidrógeno es, en efecto, 13.6 eV)."
    },
    {
     "mota": "testua",
     "html": "<strong>La fórmula de Rydberg.</strong> Cuando el electrón pasa de una órbita <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> a otra de menor energía (<math display=\"inline\"><mrow><msub><mi>n</mi><mi>f</mi></msub><mo>&lt;</mo><msub><mi>n</mi><mi>i</mi></msub></mrow></math>), emite un fotón de frecuencia, según el cuarto postulado,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ν</mi><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>,</mo><msub><mi>n</mi><mi>f</mi></msub></mrow></msub><mo>=</mo><mfrac><mrow><msub><mi>E</mi><msub><mi>n</mi><mi>i</mi></msub></msub><mo>−</mo><msub><mi>E</mi><msub><mi>n</mi><mi>f</mi></msub></msub></mrow><mi>h</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>e</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msup><mi>Z</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msubsup><mi>n</mi><mi>f</mi><mn>2</mn></msubsup></mfrac><mo>−</mo><mfrac><mn>1</mn><msubsup><mi>n</mi><mi>i</mi><mn>2</mn></msubsup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es exactamente la fórmula empírica de Rydberg-Balmer que los espectroscopistas ya conocían desde el siglo XIX, con la constante de Rydberg <math display=\"inline\"><mrow><msub><mi>R</mi><mi>∞</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>e</mi><mn>4</mn></msup></mrow><mrow><mn>8</mn><msubsup><mi>ε</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>h</mi><mn>3</mn></msup><mi>c</mi></mrow></mfrac></mrow></math> prediciéndose ahora <strong>desde la teoría</strong>, en vez de ser un simple ajuste empírico — y coincide con el valor medido dentro de una fracción de un uno por mil."
    },
    {
     "mota": "irudia",
     "oina": "Niveles de energía del átomo de hidrógeno según Bohr, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mtext mathvariant=\"normal\">eV</mtext><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> (posiciones verticales esquemáticas, no a escala lineal, para mantener legibles los niveles altos), y origen de las series espectrales: Lyman (transiciones a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, ultravioleta), Balmer (a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>, visible), Paschen (a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>, infrarrojo).",
     "src": "../media/irudiak/f1bdda75b61513e9.svg",
     "zabalera": 204
    },
    {
     "mota": "problema",
     "izena": "Junio 2005, IEM/Física Moderna, problema 1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntos) En un proceso nuclear violento, un átomo de uranio (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></math>) pierde todos sus electrones. Poco después, el núcleo de U captura un único electrón que está prácticamente en reposo en su vecindad."
      },
      {
       "mota": "testua",
       "html": "a) ¿De qué signo es el cambio de energía del sistema núcleo-electrón?"
      },
      {
       "mota": "testua",
       "html": "b) Calcular la energía máxima del fotón emitido o absorbido en el proceso."
      },
      {
       "mota": "testua",
       "html": "c) Calcular, para el caso de máxima energía del fotón, el &quot;radio de la órbita&quot; del electrón, y estimar su velocidad (comentar el resultado de este último cálculo)."
      },
      {
       "mota": "testua",
       "html": "(Energía del estado fundamental del H: <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La energía del sistema núcleo-electrón disminuye al pasar de un estado no ligado a un estado ligado."
      },
      {
       "mota": "testua",
       "html": "b) El electrón pasará a ocupar el estado estacionario fundamental (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>) del átomo hidrogenoide formado por el núcleo de U y el electrón. Como en general las energías de los estados estacionarios vienen dadas por <math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>∝</mo><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>→</mo><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msup><mi>E</mi><mi>H</mi></msup><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> donde <math display=\"inline\"><msup><mi>E</mi><mi>H</mi></msup></math> es la energía del estado <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></math> (es decir, <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV): <math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>92</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>1</mn></mfrac><mo>=</mo><mi>−</mi><mn>115</mn><mspace width=\"0.167em\"></mspace><mn>110</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>−</mi><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math> La energía del fotón emitido será, dado que <math display=\"inline\"><mrow><msub><mi>E</mi><mtext mathvariant=\"normal\">inic</mtext></msub><mo>=</mo><mn>0</mn></mrow></math> (electrón en reposo y no ligado): <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">inic </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) El radio de la &quot;órbita&quot;, según la teoría de Bohr, es inversamente proporcional a <math display=\"inline\"><mi>Z</mi></math>: <math display=\"block\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>=</mo><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></msub><mfrac><mn>1</mn><mi>Z</mi></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mi>Z</mi></mfrac><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0.53</mn></mrow></math> Å es el radio de Bohr: <math display=\"block\"><mrow><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></msub><mo>=</mo><mn>0.53</mn><mspace width=\"0.167em\"></mspace><mfrac><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>92</mn></mfrac><mo>=</mo><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Hueco de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La estimación numérica de la velocidad y el comentario del apartado c) piden algo que la solución oficial escaneada no desarrolla explícitamente (se detiene tras el cálculo del radio). No se inventa aquí: con <math display=\"inline\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>∝</mo><mfrac><mn>1</mn><mi>Z</mi></mfrac></mrow></math> tan pequeño, el resultado esperable es que <math display=\"inline\"><mrow><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>≈</mo><mi>Z</mi><mi>α</mi><mo>≈</mo><mfrac><mn>92</mn><mn>137</mn></mfrac><mo>≈</mo><mn>0.67</mn></mrow></math>, una fracción apreciable de <math display=\"inline\"><mi>c</mi></math> — el modelo de Bohr no relativista deja de ser fiable en este régimen, que es probablemente el &quot;comentario&quot; que pedía el enunciado. El examen completo (los 7 problemas, con solución oficial) está en la sección &quot;Junio 2005&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El principio de correspondencia"
    },
    {
     "mota": "testua",
     "html": "Las reglas de cuantificación de Bohr son eficaces pero no explican <strong>por qué</strong> funcionan — mezclan, de forma que el propio Bohr reconocía como poco satisfactoria, leyes clásicas (el electrón orbita según Coulomb) con una regla puramente cuántica (el momento angular está cuantizado). Bohr propuso en 1923 un principio general para acotar esta arbitrariedad:"
    },
    {
     "mota": "oharra",
     "titulua": "El principio de correspondencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para todo sistema físico, las predicciones de la teoría cuántica deben coincidir con las predicciones clásicas en el límite de números cuánticos grandes (<math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es una exigencia razonable: la física clásica funciona perfectamente bien para describir sistemas macroscópicos, así que cualquier teoría cuántica correcta debe reducirse a ella cuando el sistema se vuelve &quot;grande&quot; en el sentido apropiado. Ya vimos un ejemplo de esto: la ley de Rayleigh-Jeans (clásica) es precisamente el límite de baja frecuencia —equivalentemente, de número medio de fotones grande— de la ley de Planck (cuántica). El principio de correspondencia no es una ley nueva, sino una condición de consistencia que cualquier teoría cuántica válida debe satisfacer."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El experimento de Franck y Hertz"
    },
    {
     "mota": "testua",
     "html": "Los niveles de energía discretos que predice la teoría de Bohr se manifiestan también fuera del contexto óptico. En 1914, James Franck y Gustav Hertz idearon un experimento que confirma la cuantización de la energía sin necesidad de medir espectros de luz en absoluto."
    },
    {
     "mota": "irudia",
     "oina": "Esquema del experimento de Franck-Hertz: electrones emitidos por un cátodo caliente <math display=\"inline\"><mi>C</mi></math> se aceleran hacia la grilla <math display=\"inline\"><mi>A</mi></math> mediante un potencial <math display=\"inline\"><mi>V</mi></math>, atraviesan vapor de mercurio, y son recogidos por el colector <math display=\"inline\"><mi>P</mi></math>; se mide la corriente en función de <math display=\"inline\"><mi>V</mi></math>.",
     "src": "../media/irudiak/ec29fc313b24fb77.svg",
     "zabalera": 265
    },
    {
     "mota": "testua",
     "html": "Un cátodo caliente <math display=\"inline\"><mi>C</mi></math> emite electrones acelerados hacia un ánodo en forma de grilla <math display=\"inline\"><mi>A</mi></math> mediante un potencial <math display=\"inline\"><mi>V</mi></math>, y los electrones que lo atraviesan son recogidos por una placa colectora <math display=\"inline\"><mi>P</mi></math>. El dispositivo contiene vapor de mercurio a baja presión. Al medir la corriente <math display=\"inline\"><mi>I</mi></math> recogida en <math display=\"inline\"><mi>P</mi></math> en función de <math display=\"inline\"><mi>V</mi></math>, se observa que <math display=\"inline\"><mi>I</mi></math> aumenta con <math display=\"inline\"><mi>V</mi></math> —como cabría esperar clásicamente— pero cae <strong>abruptamente</strong> cada vez que <math display=\"inline\"><mi>V</mi></math> alcanza un múltiplo de 4.9 voltios."
    },
    {
     "mota": "testua",
     "html": "La interpretación es directa: mientras la energía cinética del electrón sea menor que 4.9 eV, sus choques con los átomos de mercurio son elásticos (no pueden transferirles energía, porque el mercurio no tiene ningún estado excitado accesible con menos energía). Mediante un choque elástico con un átomo miles de veces más pesado, el electrón pierde una fracción de energía despreciable. Pero en cuanto la energía cinética alcanza 4.9 eV, el electrón puede excitar al átomo de mercurio a su primer estado excitado, perdiendo de golpe toda esa energía en un único choque inelástico —y quedando entonces sin energía suficiente para vencer el pequeño potencial de frenado entre <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>P</mi></math>—, de modo que la corriente colectada cae. Al seguir aumentando <math display=\"inline\"><mi>V</mi></math>, el proceso se repite cada 4.9 V adicionales (el electrón ahora tiene margen para excitar un átomo, seguir acelerando, y excitar un segundo átomo antes de llegar a <math display=\"inline\"><mi>A</mi></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>Confirmación cruzada.</strong> Si esta interpretación es correcta, el átomo de mercurio excitado debe desexcitarse emitiendo un fotón de energía 4.9 eV, es decir de longitud de onda 2536 Å. Franck y Hertz efectivamente observaron esa línea espectral —y solo esa— apareciendo justo cuando <math display=\"inline\"><mi>V</mi></math> superaba 4.9 V, nunca antes. Dos métodos completamente independientes (la caída de corriente y la aparición de la línea espectral) miden la misma diferencia de energía: una confirmación directa, sin pasar por espectroscopía óptica, de que los niveles de energía atómicos están cuantizados."
    },
    {
     "mota": "problema",
     "izena": "Septiembre 2006, IEM/Física Moderna, problema 2",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(5 puntos) En un experimento tipo Franck-Hertz, sustituido el mercurio por hidrógeno atómico, se aprecian máximos pronunciados en la corriente que circula por el galvanómetro para los valores del potencial acelerador <math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV y <math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV, y si se analiza espectroscópicamente la radiación emitida se observan 3 líneas espectrales. Explicar estos resultados."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Niveles del hidrógeno: <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV, luego <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>3.4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1.51</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>0.85</mn></mrow></math> eV."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: corresponde a la excitación <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: corresponde a la excitación <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> (posible en colisión directa con suficiente energía)."
      },
      {
       "mota": "testua",
       "html": "Desde <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>, el átomo puede desexcitarse en cascada de tres formas: <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>1</mn></mrow></math> (emite <math display=\"inline\"><mn>12.09</mn></math> eV), <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>2</mn></mrow></math> (emite <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>1.89</mn></mrow></math> eV) y, tras llegar a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mo>→</mo><mn>1</mn></mrow></math> (emite <math display=\"inline\"><mn>10.2</mn></math> eV). Esas son exactamente las 3 líneas espectrales observadas — la misma lógica de cascada que en el experimento original con mercurio, pero con los niveles conocidos del hidrógeno en vez de medirlos por primera vez."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El examen completo (los 6 problemas, con solución oficial) está en la sección &quot;Septiembre 2006&quot; del capítulo 7."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Crítica de la Teoría Cuántica Antigua"
    },
    {
     "mota": "testua",
     "html": "El modelo de Bohr (y su generalización posterior, la regla de cuantificación de Wilson-Sommerfeld para sistemas periódicos cualesquiera) tuvo éxitos notables: predijo cuantitativamente el espectro del hidrógeno, series enteras de líneas que ni siquiera se habían observado todavía. Pero como conjunto de reglas tiene defectos serios:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Solo se aplica a sistemas <strong>periódicos en el tiempo</strong> — deja fuera la inmensa mayoría de sistemas físicos.",
      "Da las energías permitidas y las frecuencias de la radiación emitida, pero no dice nada sobre el <strong>tiempo</strong> que tarda una transición, ni sobre su probabilidad.",
      "Solo funciona bien para átomos de un electrón; falla ya con el átomo más simple que tiene un segundo electrón, el átomo de helio.",
      "Y, sobre todo, mezcla de forma arbitraria leyes clásicas (órbitas newtonianas, ley de Coulomb) con una condición puramente cuántica (la cuantización del momento angular), sin ninguna justificación de fondo — la propia pregunta de &quot;por qué el momento angular, y no otra cantidad&quot; queda sin responder."
     ]
    },
    {
     "mota": "testua",
     "html": "Estas limitaciones —no defectos de detalle, sino de principio— son las que llevaron a Heisenberg (1925, con su mecánica de matrices) y a Schrödinger (1926, con la mecánica ondulatoria que desarrollamos en el resto de este capítulo) a construir una teoría genuinamente nueva, no una corrección más al modelo de Bohr. Ambas formulaciones resultaron ser, pese a su apariencia completamente distinta, matemáticamente equivalentes."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> Para pasar de un nivel de energía a otro, el átomo debe emitir un fotón. Además, el átomo debe ganar energía cinética para conservar el momento lineal. Si tenemos en cuenta esta corrección, la frecuencia del fotón es menor. (a) En una primera aproximación, siendo <math display=\"inline\"><mi>M</mi></math> la masa del átomo, comprueba que la frecuencia es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><msub><mi>ν</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>M</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> siendo </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>h</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(b) Para un átomo de hidrógeno, calcula la frecuencia que corresponde a la transición de <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, con la corrección previa y sin ella."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> (a) El momento lineal del átomo es cero, pero hemos de considerar que la energía que irradiará posee un momento lineal, por tanto hemos de suponer que el átomo adquirirá un momento en dirección contraria al fotón emitido. Por otra parte, dado que la energía total se conserva, consideramos que la energía en el orbital anterior equivale a la energía en el nuevo orbital más la energía del fotón más la energía cinética adquirida por el átomo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mi>c</mi></mfrac><mo>−</mo><mi>M</mi><mi>v</mi><mo>⇒</mo><mi>v</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>M</mi><mi>c</mi></mrow></mfrac><mo>⇒</mo><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>M</mi><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>E</mi><mrow><mi>n</mi><mi>i</mi></mrow></msub><mo>=</mo><msub><mi>E</mi><mrow><mi>n</mi><mi>f</mi></mrow></msub><mo>+</mo><mi>h</mi><mi>ν</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo la primera en la segunda:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>M</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mi>M</mi><mi>c</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Reescribiendo como una ecuación de segundo grado en <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mi>ν</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mi>h</mi><mi>ν</mi><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mo>±</mo><msqrt><mrow><mn>4</mn><msup><mi>M</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msqrt><mrow><msup><mi>M</mi><mn>2</mn></msup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>+</mo><msqrt><mrow><mn>1</mn><mo>+</mo><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando la raíz con el polinomio de Taylor, <math display=\"inline\"><msqrt><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></msqrt></math> con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>, así que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇒</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ν</mi><mo>=</mo><msub><mi>ν</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mrow><mn>2</mn><mi>M</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a8",
   "maila": 1,
   "izenburua": "El postulado de De Broglie",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Repasemos algunas de las fórmulas que aplicamos al fotón: la energía del fotón es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>c</mi><mi>p</mi></mrow></math>; con la cuantización de la energía <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi></mrow></math> se obtiene <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mi>c</mi><mi>h</mi></mrow><mi>λ</mi></mfrac></mrow></math>. Tenemos varias relaciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mfrac><mi>h</mi><mi>λ</mi></mfrac><mo>⇒</mo><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mi>ħ</mi><mi>k</mi><mi>c</mi><mo>⇒</mo><mi>ω</mi><mo>=</mo><mi>k</mi><mi>c</mi><mo>⇒</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>λ</mi></mfrac><mi>c</mi><mo>⇒</mo><mi>c</mi><mo>=</mo><mfrac><mi>λ</mi><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De Broglie propuso en 1924 que no solo los fotones sino todas las partículas podrían poseer cualidades ondulatorias, de manera que podríamos calcular la longitud de onda de las mismas usando las fórmulas anteriores:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><mfrac><mi>E</mi><mi>ħ</mi></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo A.</strong> ¿Cuál es la longitud de onda de De Broglie de una pelota de béisbol de 1 kg que se mueve a 10 m/s de velocidad?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>10</mn><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></mfrac><mo>=</mo><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>35</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo B.</strong> ¿Cuál es la longitud de onda de De Broglie de un electrón cuya energía cinética es 100 eV?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><mi>m</mi><mi>K</mi></mrow></msqrt></mfrac><mo>=</mo><mfrac><mrow><mn>6.626</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><msqrt><mrow><mn>2</mn><mo>⋅</mo><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>100</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>1.6</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>J</mi><mi>/</mi><mtext mathvariant=\"normal\">eV</mtext></mrow></msqrt></mfrac><mo>=</mo><mn>1.2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mi>m</mi><mo>=</mo><mn>1.2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solamente en los casos de partícula con muy poca masa podría medirse la longitud de onda."
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El siguiente ejercicio reproduce, traducida del euskera, una derivación propia del usuario (Mikel Aguirre) sobre la corrección relativista a la longitud de onda de De Broglie. No es un libro de terceros — se reproduce con la misma libertad que el resto de MASTERFISMOtex."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio.</strong> Verifica que la longitud de onda asociada a una partícula de carga <math display=\"inline\"><mi>e</mi></math>, masa en reposo <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math>, acelerada desde el reposo por una diferencia de potencial <math display=\"inline\"><mi>V</mi></math> (y por tanto con velocidad relativista) es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y calcula el límite no relativista de esta expresión."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> La energía relativista total es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt></mrow></math>, y también <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mi>V</mi><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math> (la energía en reposo más la energía cinética ganada al acelerar). Igualando ambas expresiones y elevando al cuadrado:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><mo>+</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>e</mi><mi>V</mi><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los términos <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></math> se cancelan, y despejando <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>V</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>e</mi><mi>V</mi><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la relación de De Broglie, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mrow><mi>e</mi><mi>V</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Límite no relativista.</strong> Usando la física clásica, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>p</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>E</mi><mi>m</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mrow></math> (con <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>e</mi><mi>V</mi></mrow></math> la energía cinética clásica), así que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">clásica </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>h</mi><mi>p</mi></mfrac><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que es exactamente el resultado relativista cuando el factor de corrección se hace 1, es decir, cuando <math display=\"inline\"><mrow><mi>e</mi><mi>V</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>m</mi><mn>0</mn></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≪</mo><mn>1</mn></mrow></math>: la energía cinética ganada es pequeña comparada con la energía en reposo de la partícula."
    },
    {
     "mota": "testua",
     "html": "Comparemos cuál sería la relación entre la velocidad de la partícula y la velocidad de su onda asociada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> como </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>E</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi><mo>⇒</mo><mi>ħ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>⇒</mo><mi>ω</mi><mo>=</mo><mfrac><mrow><mi>ħ</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es la relación entre <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi>k</mi></math>. Por otra parte, la velocidad de fase sería"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mi>ω</mi><mi>k</mi></mfrac><mo>⇒</mo><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>k</mi></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> dado que </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>ħ</mi><mi>k</mi><mo>=</mo><mi>p</mi><mo>=</mo><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub><mo>⇒</mo><msub><mi>v</mi><mi>f</mi></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msub><mi>v</mi><mi>p</mi></msub><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero este resultado no es el mismo que el logrado para el fotón, de manera que la velocidad de fase no es la velocidad de la onda asociada a la partícula: esa velocidad es la <strong>velocidad de grupo</strong>. Demostración:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>ħ</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>k</mi></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub></mrow><mi>m</mi></mfrac><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub><mo>⇒</mo><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Recordemos que la velocidad de fase se usa para un solo frente de ondas; la onda asociada a la partícula solo podrá definirse como una suma de ondas. (Apuntamos que en el caso del fotón ambas velocidades coinciden, pero es un caso excepcional, debido a la relación lineal entre <math display=\"inline\"><mi>ω</mi></math> y <math display=\"inline\"><mi>k</mi></math>.)"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> Verifica que para el caso de la partícula relativista la velocidad de la partícula coincide con la velocidad de grupo."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mrow></msqrt><mo>⇒</mo><mi>ħ</mi><mi>ω</mi><mo>=</mo><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mi>ω</mi></mrow><mrow><mi>d</mi><mi>k</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>ħ</mi></mfrac><mfrac><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><mi>k</mi></mrow><mrow><mn>2</mn><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>ħ</mi><mi>k</mi></mrow><msqrt><mrow><msubsup><mi>m</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>c</mi><mn>4</mn></msup><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mfrac><mrow><mi>p</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mi>E</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><msub><mi>v</mi><mi>p</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto <math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><msub><mi>v</mi><mi>p</mi></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos secciones que siguen (interpretación ondulatoria de la cuantización de Bohr, experimento de Davisson-Germer) son exposición propia, informada por la lectura de &quot;Física (ESP) - Gratton, Julio - Introducción a la Mecánica Cuántica&quot; (apuntes de cátedra de Julio Gratton, Física 4 UBA — no del usuario, tratados como referencia, no como transcripción), con el mismo criterio de cita ya aplicado a Eisberg-Resnick."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "La interpretación de De Broglie de la cuantización de Bohr",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El postulado de cuantización de Bohr —que el momento angular orbital solo puede tomar los valores <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math>— aparecía en el modelo original como una regla <strong>ad hoc</strong>, sin más justificación que «da el resultado correcto». La hipótesis de De Broglie permite, a posteriori, entenderlo como una consecuencia natural."
    },
    {
     "mota": "testua",
     "html": "Si el electrón en órbita lleva asociada una onda de longitud <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi></mrow></math>, resulta razonable exigir que esa onda encaje sobre sí misma tras dar una vuelta completa a la órbita: que la circunferencia contenga un número entero de longitudes de onda,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mo>=</mo><mi>n</mi><mi>λ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En caso contrario, la onda interferiría destructivamente consigo misma en sucesivas vueltas y no podría formar un estado estable. Sustituyendo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi><mo>=</mo><mi>h</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mo>=</mo><mi>n</mi><mfrac><mi>h</mi><mrow><mi>m</mi><mi>v</mi></mrow></mfrac><mo>⇒</mo><mi>m</mi><mi>v</mi><mi>r</mi><mo>=</mo><mi>n</mi><mfrac><mi>h</mi><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que es exactamente el postulado de cuantización del momento angular de Bohr. La regla, que en 1913 parecía arbitraria, se revela así como la condición de onda estacionaria más simple posible: la órbita permitida es aquella donde la onda de De Broglie del electrón «cierra» sobre sí misma."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "El experimento de Davisson-Germer",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La hipótesis de De Broglie —que a toda partícula le corresponde una onda— parecía, en 1924, una especulación matemática sin contacto directo con el experimento. En 1927, Clinton Davisson y Lester Germer lo comprobaron directamente, casi por accidente: estudiaban la dispersión de electrones en un blanco de níquel cuando una fuga de aire oxidó la muestra, obligándolos a recocerla a alta temperatura para purificarla. El recocido reorganizó el níquel policristalino en unos pocos grandes cristales, y al repetir las medidas encontraron algo inesperado."
    },
    {
     "mota": "irudia",
     "oina": "Geometría del experimento de Davisson-Germer: electrones de energía fija inciden sobre un monocristal de níquel; se mide la intensidad del haz difractado en función del ángulo <math display=\"inline\"><mi>ϕ</mi></math> respecto de la normal.",
     "src": "../media/irudiak/d0c7be8eeceba169.svg",
     "zabalera": 355
    },
    {
     "mota": "testua",
     "html": "Con electrones de 54 eV, la intensidad del haz difractado presentaba un máximo pronunciado a un ángulo <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mn>50</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> — exactamente el comportamiento de una difracción de Bragg, como la de los rayos X sobre un cristal, no el de partículas clásicas dispersándose. La longitud de onda que se deduce de la posición de ese máximo, usando la ley de Bragg y el espaciado atómico del níquel (conocido de antemano por cristalografía de rayos X), resulta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">exp </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>1.65</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en excelente acuerdo con la predicción de De Broglie para un electrón de 54 eV,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><mi>e</mi><mi>V</mi></mrow></msqrt></mfrac><mo>≈</mo><mn>1.67</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dos valores obtenidos por caminos completamente independientes —uno a partir de la geometría de un patrón de difracción, el otro a partir de la fórmula <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi></mrow></math> propuesta tres años antes sin ninguna evidencia experimental— coinciden dentro de un uno por ciento. Fue la confirmación decisiva: los electrones, partículas por excelencia desde Thomson, se difractan como ondas."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Desarrollo en series de Fourier",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> El periodo de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mi>L</mi></math>. Para un periodo, la expresión es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>48</mn><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mi>L</mi><mn>4</mn></mfrac></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mi>L</mi><mn>4</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mfrac><mi>L</mi><mn>4</mn></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(a) Calcula los primeros armónicos (que no sean nulos, teniendo en cuenta senos y cosenos) del desarrollo de Fourier de la función. (b) Dibuja junto con la función 3 de sus armónicos. (c) Dibuja el desarrollo (la suma de los tres armónicos) de manera cualitativa. (d) Dibuja la función y su desarrollo usando un programa."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> (a) Partimos de"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al ser una función par basta con el término del coseno."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mrow><mn>3</mn><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mfrac><mn>48</mn><msup><mi>L</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>16</mn></mfrac><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mfrac><mi>L</mi><mn>4</mn></mfrac><mrow><mn>3</mn><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow></msubsup><mn>0</mn><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>−</mo><mfrac><mrow><mn>48</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mi>x</mi><mo>−</mo><mn>16</mn><mfrac><msup><mi>x</mi><mn>3</mn></msup><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>48</mn><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>6</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mn>96</mn><msup><mi>L</mi><mn>3</mn></msup></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><msup><mi>x</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La primera integral, al ser función impar el seno resultante y evaluando en los límites:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>6</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>6</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>L</mi><mrow><mn>2</mn><mi>π</mi><mi>n</mi></mrow></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><mo>=</mo><mfrac><mn>6</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la segunda integral se usa integración por partes dos veces sucesivas (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>; luego <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>), que tras simplificar (los términos impares se cancelan en los límites simétricos) da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><mn>96</mn><msup><mi>L</mi><mn>3</mn></msup></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>L</mi><mn>4</mn></mfrac></mrow><mfrac><mi>L</mi><mn>4</mn></mfrac></msubsup><msup><mi>x</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>6</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sumando ambos resultados, los términos <math display=\"inline\"><mrow><mfrac><mn>6</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se cancelan entre sí y queda"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Evaluando para los primeros armónicos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>:</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mn>48</mn><msup><mi>π</mi><mn>3</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>48</mn><msup><mi>π</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>:</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>6</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mo>:</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mn>48</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>16</mn><mrow><mn>9</mn><msup><mi>π</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La serie de Fourier correspondiente a la función es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>24</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>n</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Comparación entre <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (parábola en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mi>/</mi><mn>4</mn><mo>,</mo><mi>L</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, cero en el resto del periodo) y la suma de sus 3 primeros armónicos no nulos, sobre 1.5 periodos. Con solo 3 términos la aproximación ya captura la forma general; añadir más armónicos afinaría los detalles (esquinas, planitud del tramo nulo).",
     "src": "../media/irudiak/94acbef359d657f0.svg",
     "zabalera": 330
    },
    {
     "mota": "problema",
     "izena": "23 de marzo de 2012, IEM/Física Moderna (Control I), problema 3",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la función de onda de una partícula libre que se mueve en una dimensión es <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la región <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, y nula en el resto. <math display=\"inline\"><mi>a</mi></math> es una constante."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el valor de <math display=\"inline\"><mi>A</mi></math> para que la función esté normalizada."
      },
      {
       "mota": "testua",
       "html": "b) ¿Puede asignarse un valor determinado a la longitud de onda de de Broglie asociada a la onda de la partícula?"
      },
      {
       "mota": "testua",
       "html": "c) Dar una expresión de <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la probabilidad de encontrar la partícula entre <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></math> por unidad de longitud. Calcular la posición promedio de la partícula y dar una estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad de encontrar la partícula en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es la posición promedio calculada anteriormente."
      },
      {
       "mota": "testua",
       "html": "e) Expresando la función de onda como combinación lineal de funciones armónicas, calcular la amplitud <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> asociada a la función de onda armónica de vector de onda <math display=\"inline\"><mi>k</mi></math>. Calcular <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f) Calcular el valor medio de <math display=\"inline\"><mi>k</mi></math> y dar una estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Ayuda: <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mi>n</mi></msup><mrow><mi>d</mi><msup><mi>k</mi><mi>n</mi></msup></mrow></mfrac><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La normalización: <math display=\"block\"><mrow><mn>1</mn><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>a</mi><mn>4</mn></msup><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mo>=</mo><mfrac><mn>16</mn><mn>15</mn></mfrac><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo></mrow></math> luego <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msqrt><mrow><mn>15</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) No: no es una función armónica (no tiene un único <math display=\"inline\"><mi>k</mi></math> asociado) — la longitud de onda de De Broglie <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>h</mi><mi>/</mi><mi>p</mi></mrow></math> solo está bien definida para una onda plana pura de momento fijo. Aquí, como en cualquier paquete localizado, hay que hablar de una <strong>distribución</strong> de valores de <math display=\"inline\"><mi>k</mi></math> (apartados e-f), no de un único <math display=\"inline\"><mi>λ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La posición media es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (la función es simétrica respecto a ese punto). Como estimación puede tomarse <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>∼</mo><mn>2</mn><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Como el intervalo es muy pequeño, se aproxima: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><mi>a</mi></mrow></mfrac><mo>×</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>∼</mo><mn>1.9</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Hay que calcular la transformada de Fourier: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msqrt><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> La primera integral: <math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mi>i</mi><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Para la segunda, usando la ayuda: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>k</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Restando: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>15</mn><mrow><mn>32</mn><mi>π</mi><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "f) <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es par respecto a <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>. Como estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> puede tomarse el doble del valor que anula el primer término (ocurre después de anularse el segundo), para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>. Por tanto <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>4</mn><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Obsérvese que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>2</mn><mi>a</mi><mo>⋅</mo><mn>4</mn><mi>π</mi><mi>/</mi><mi>a</mi><mo>=</mo><mn>8</mn><mi>π</mi></mrow></math>: del orden de la unidad salvo factores numéricos, la relación de incertidumbre <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>1</mn></mrow></math> que motiva el principio de incertidumbre de Heisenberg (capítulo siguiente)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El examen completo (los 3 problemas, con solución oficial) está en la sección &quot;Control I — 23 de marzo de 2012&quot; del capítulo 7."
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 1,
   "izenburua": "La ecuación de Schrödinger",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La función de onda es un instrumento computacional que contiene toda la información sobre la partícula asociada (dado el principio de incertidumbre)."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Deducción de la ecuación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 1.</strong> La función de onda del estado de energía más bajo de un oscilador armónico simple, consistiendo en una masa <math display=\"inline\"><mi>m</mi></math> sobre la que actúa una fuerza restauradora lineal constante <math display=\"inline\"><mi>C</mi></math>, puede ser expresada como"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>/</mi><mn>2</mn><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>C</mi><mi>/</mi><mi>m</mi></mrow></msqrt><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde la constante real <math display=\"inline\"><mi>A</mi></math> puede tener cualquier valor. Verifica que esa expresión es una solución a la ecuación de Schrödinger con un potencial apropiado."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Dado que <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>d</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>C</mi><mi>x</mi></mrow></math>, el potencial es <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac></mrow></math>. Introduciendo el potencial en la ecuación de Schrödinger:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mi>C</mi><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Calculamos las derivadas para verificar la igualdad:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>i</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>ħ</mi></mfrac><mi>x</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>ħ</mi></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo>+</mo><mfrac><mrow><mi>C</mi><mi>m</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><msqrt><mrow><mi>C</mi><mi>m</mi></mrow></msqrt><mi>ħ</mi></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo>+</mo><mfrac><mrow><mi>C</mi><mi>m</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mi>C</mi><mn>2</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>i</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac><msqrt><mfrac><mi>C</mi><mi>m</mi></mfrac></msqrt><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La igualdad se cumple, así que la expresión propuesta es en efecto solución de la ecuación de Schrödinger con el potencial del oscilador armónico."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Razones para aceptar la ecuación de Schrödinger",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta sección solo tenía título en la fuente original. El contenido que sigue es exposición propia (no transcrita de ningún libro), apoyada en el tratamiento estándar del tema —el &quot;argumento de plausibilidad&quot; que Eisberg &amp; Resnick desarrollan en el §5-2 de su <em>Quantum Physics</em>, que el usuario también posee— pero redactada con palabras y estructura propias."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ecuación de Schrödinger <strong>no se deduce</strong> de principios más fundamentales: es un postulado, igual que las leyes de Newton lo son en mecánica clásica. Lo que sí puede hacerse es un <strong>argumento de plausibilidad</strong>: construir, a partir de lo que ya sabemos sobre partículas libres, la ecuación más simple que sea consistente con ello, y comprobar después que sus predicciones concuerdan con el experimento."
    },
    {
     "mota": "testua",
     "html": "<strong>Punto de partida: la partícula libre.</strong> De Broglie asocia a una partícula libre de energía <math display=\"inline\"><mi>E</mi></math> y momento <math display=\"inline\"><mi>p</mi></math> una onda plana"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> con </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><mi>k</mi><mo>=</mo><mfrac><mi>p</mi><mi>ħ</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>ω</mi><mo>=</mo><mfrac><mi>E</mi><mi>ħ</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para una partícula no relativista, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Queremos una ecuación diferencial que tenga esta <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> como solución y que reproduzca automáticamente esa relación energía-momento."
    },
    {
     "mota": "testua",
     "html": "<strong>Derivadas de la onda de prueba.</strong> Derivando <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> respecto de <math display=\"inline\"><mi>x</mi></math> y de <math display=\"inline\"><mi>t</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>i</mi><mi>k</mi><mi mathvariant=\"normal\">Ψ</mi><mo>⇒</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>i</mi><mi>ω</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>−</mi><mi>i</mi><mfrac><mi>E</mi><mi>ħ</mi></mfrac><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Reconstruyendo <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como ecuación diferencial.</strong> De la segunda derivada espacial obtenemos <math display=\"inline\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, y de la derivada temporal, <math display=\"inline\"><mrow><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math>. Sustituyendo ambas en <math display=\"inline\"><mrow><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi mathvariant=\"normal\">Ψ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que es exactamente la ecuación de Schrödinger libre (sin potencial) que venimos usando. Al añadir un potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la energía total pasa a ser <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>p</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>V</mi></mrow></math>, y el mismo procedimiento da la forma general"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Por qué esto es solo &quot;plausible&quot; y no una demostración.</strong> El paso delicado es sustituir <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math> por sus expresiones en derivadas antes de multiplicar por <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> — no hemos demostrado que esa sustitución sea válida en general, solo que funciona para la onda plana de partida. La ecuación de Schrödinger es, en última instancia, un postulado que se propone porque (a) es consistente con la relación de De Broglie y con la conservación de la energía, (b) es lineal en <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math>, lo cual garantiza el principio de superposición esencial para la interferencia, (c) es de primer orden en el tiempo (a diferencia de la ecuación de onda clásica, de segundo orden), lo que basta para determinar la evolución completa del sistema conociendo solo <math display=\"inline\"><mi mathvariant=\"normal\">Ψ</mi></math> en un instante, y sobre todo (d) sus predicciones concuerdan con el experimento: reproduce el espectro del átomo de hidrógeno, el efecto túnel, los niveles del oscilador armónico, y todos los resultados de los capítulos anteriores obtenidos por vías más directas (Planck, Bohr) emergen de ella como casos particulares o límites."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El principio de incertidumbre"
    },
    {
     "mota": "testua",
     "html": "Una consecuencia inmediata de describir una partícula mediante una onda —y no mediante un punto con posición y velocidad perfectamente definidas, como en mecánica clásica— es que posición y momento no pueden conocerse ambos con precisión arbitraria simultáneamente."
    },
    {
     "mota": "testua",
     "html": "Una onda plana pura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math> tiene un momento <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi></mrow></math> perfectamente definido, pero se extiende por todo el espacio: no hay información alguna sobre la posición (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> es constante, la misma probabilidad en cualquier <math display=\"inline\"><mi>x</mi></math>). Para localizar la partícula en una región de anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> hace falta <strong>superponer</strong> varias ondas planas de números de onda distintos, formando un paquete de ondas: es exactamente el fenómeno de pulsos que estudiamos en el capítulo de ondas (<math display=\"inline\"><mrow><msub><mi>v</mi><mi>g</mi></msub><mo>=</mo><mi>d</mi><mi>ω</mi><mi>/</mi><mi>d</mi><mi>k</mi></mrow></math>), llevado ahora a una superposición de muchos números de onda en vez de solo dos."
    },
    {
     "mota": "testua",
     "html": "Un resultado general del análisis de Fourier —el mismo tipo de herramienta que usamos en el capítulo anterior— es que un paquete de ondas construido con números de onda repartidos en un intervalo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> no puede tener una anchura espacial <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> menor que, aproximadamente, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>: cuanto más estrecho en el espacio, más ancho tiene que ser el rango de frecuencias que lo compone (y viceversa). Con <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>k</mi></mrow></math>, esto se traduce en"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "el <strong>principio de incertidumbre de Heisenberg</strong>. No es una limitación de nuestros instrumentos de medida, sino una propiedad estructural de cualquier sistema descrito por una función de onda: cuanto más localizada esté una partícula en posición, menos definido está su momento, y al revés."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo.</strong> Un electrón está confinado en una región de anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Å (del orden de un átomo). ¿Cuál es, como mínimo, la incertidumbre en su momento, y qué energía cinética típica implica?"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mfrac><mi>ħ</mi><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1.055</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Js</mtext></mrow></mrow><mrow><mn>2</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mi>m</mi></mrow></mfrac><mo>=</mo><mn>5.3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tomando esta incertidumbre como orden de magnitud del momento típico del electrón, la energía cinética asociada es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>T</mi><mo>∼</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5.3</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><mo>⋅</mo><mn>9.1</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>1.5</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "del orden de magnitud correcto para las energías de ligadura atómicas — una primera pista, mucho antes de resolver la ecuación de Schrödinger para el átomo de hidrógeno, de que el principio de incertidumbre es el motivo último por el que los átomos tienen el tamaño que tienen: un electrón no puede &quot;caer&quot; sobre el núcleo, porque confinarlo en una región más pequeña que el radio atómico le costaría una energía cinética mayor que la energía potencial que ganaría al acercarse."
    },
    {
     "mota": "problema",
     "izena": "Junio 2005, IEM/Física Moderna, problema 4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 punto) En la figura se representa el módulo al cuadrado de la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de un protón en un instante dado, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Å. La velocidad media del protón es <math display=\"inline\"><msup><mn>10</mn><mn>3</mn></msup></math> m/s. Indicar cuál será la anchura aproximada de la función <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> que representa la densidad de probabilidad de los diferentes valores del número de onda <math display=\"inline\"><mi>k</mi></math> (<math display=\"inline\"><mrow><mo>=</mo><mfrac><mi>p</mi><mi>ħ</mi></mfrac></mrow></math>), y discutir en qué zona del eje <math display=\"inline\"><mi>k</mi></math> estará localizada."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Por el principio de indeterminación, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>, luego <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> La función <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> está centrada en <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>, con <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>h</mi></mfrac><mi>.</mi></mrow></math> Numéricamente, con <math display=\"inline\"><mi>m</mi></math> la masa del protón (<math display=\"inline\"><mrow><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg): <math display=\"block\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> está localizada en torno a <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>1.6</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (en la parte positiva del eje <math display=\"inline\"><mi>k</mi></math>), con una anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mn>1</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> — el mismo tipo de estimación cualitativa <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mn>1</mn><mi>/</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> que usamos arriba para el electrón, ahora aplicado a un protón con velocidad media no nula."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Septiembre 2006, IEM/Física Moderna, problema 3",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) Una partícula de masa <math display=\"inline\"><mi>m</mi></math> está confinada en una región unidimensional de anchura <math display=\"inline\"><mi>a</mi></math>. Usando el principio de incertidumbre, obtener una expresión para la energía mínima de la partícula. Calcular el valor de esta energía mínima para <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm, y para un electrón en una región de <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math>, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tomando el valor mínimo, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Para <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> kg y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm <math display=\"inline\"><mrow><mo>=</mo><mn>0.1</mn></mrow></math> m: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>64</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Para un electrón (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>≈</mo><mn>9.11</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg), <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∼</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El contraste entre ambos resultados —<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>64</mn></mrow></msup></math> J para el objeto macroscópico frente a <math display=\"inline\"><mn>1</mn></math> eV para el electrón— es la razón última por la que el principio de incertidumbre nunca se nota en la vida cotidiana pero domina por completo la escala atómica: coincide, además, con el orden de magnitud obtenido en el ejemplo anterior por el mismo método."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los exámenes completos (Junio 2005: 7 problemas; Septiembre 2006: 6 problemas, ambos con solución oficial) están en el capítulo 7, en las secciones &quot;Junio 2005&quot; y &quot;Septiembre 2006&quot;."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Postulado de Born",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La conexión entre las propiedades de la función de onda y el comportamiento de la partícula asociada se expresa en términos de la densidad de probabilidad: la probabilidad de que una partícula se encuentre en un momento dado en un punto del eje <math display=\"inline\"><mi>x</mi></math>. Según el postulado de Born:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">¯</mo></mover><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Constante de normalización de la función de onda e imprescindibilidad de la normalización",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para poder relacionar la función de onda con la densidad de probabilidad es imprescindible que esté normalizada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mtext mathvariant=\"normal\">  </mtext><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "por tanto"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es decir, que si se da el caso de que el valor logrado es distinto de uno, deberemos multiplicar la función por una constante de manera que su valor sea uno. En general: si <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math> entonces <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>A</mi></msqrt></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El problema está en que hay que comprobar si está normalizada o no realizando la integral."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 1 — exponencial gaussiana.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>. Comprobamos que <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mi>π</mi><mrow><mn>2</mn><mi>a</mi></mrow></mfrac></msqrt></mrow></math>, así que para normalizar:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>a</mi><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>1</mn><mn>4</mn></mfrac></msup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 2 — onda plana.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>. Comprobamos que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "No es normalizable."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Delta de Dirac",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Dirac quería una función de onda muy localizada pero que fuera integrable."
    },
    {
     "mota": "irudia",
     "oina": "La delta de Dirac <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: una &quot;función&quot; nula en todo punto salvo en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>, donde es infinita, con área total 1 bajo la curva.",
     "src": "../media/irudiak/ded145f0346ea6c4.svg",
     "zabalera": 233
    },
    {
     "mota": "testua",
     "html": "Tomemos la siguiente función:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>f</mi><mi>ε</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mn>1</mn><mi>ε</mi></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si calculamos la integral de esta función mediante la superficie bajo la gráfica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo>⋅</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>ε</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>ε</mi></mfrac><mo>⋅</mo><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "<math display=\"inline\"><msub><mi>f</mi><mrow><mi>ε</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>: un rectángulo estrecho de anchura <math display=\"inline\"><mi>ε</mi></math> y altura <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>ε</mi></mrow></math>, con área siempre igual a 1. Al reducir <math display=\"inline\"><mi>ε</mi></math>, se vuelve cada vez más alto y estrecho, tendiendo a la delta de Dirac.",
     "src": "../media/irudiak/ddef5b7b4f9f1ea8.svg",
     "zabalera": 210
    },
    {
     "mota": "testua",
     "html": "Si reducimos <math display=\"inline\"><mi>ε</mi></math> la superficie será la misma pero la gráfica será cada vez más alta y estrecha: para <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></math> será una línea infinita. La delta de Dirac puede ser definida como"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>ε</mi><mo>→</mo><mn>0</mn></mrow></munder><msub><mi>f</mi><mi>ε</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto se cumple que <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. Para estudiarla en cualquier punto <math display=\"inline\"><mi>a</mi></math> basta con cambiar el argumento de <math display=\"inline\"><mi>x</mi></math> a <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>a</mi></mrow></math>. Hay que decir que esta representación de la función no es la única posible."
    },
    {
     "mota": "testua",
     "html": "Cuando la delta de Dirac se halla multiplicada por una función dentro de una integral:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>0</mn></msub><mo>∉</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>x</mi><mn>0</mn></msub><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Desarrollo formal de la ecuación de Schrödinger con potencial independiente del tiempo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para el caso en el que el potencial no depende del tiempo podemos desarrollar la ecuación de Schrödinger con el método de separación de variables: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>i</mi><mi>ħ</mi><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>⇒</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>φ</mi><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi><mo>=</mo><mi>i</mi><mi>ħ</mi><mi mathvariant=\"normal\">Ψ</mi><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si dividimos entre <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mi>φ</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mrow><mi>i</mi><mi>ħ</mi></mrow><mi>φ</mi></mfrac><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cada lado depende únicamente de una variable y consta de su derivada, por lo que ambos lados son iguales a una constante que llamaremos <math display=\"inline\"><mi>E</mi></math>. Desarrollando el lado izquierdo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi><mo>⇒</mo><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mi>V</mi><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Introduciendo el operador hamiltoniano, <math display=\"inline\"><mrow><mover><mi>H</mi><mo accent=\"true\">̂</mo></mover><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi></mrow></math>, estableciendo así autovalores y autofunciones del hamiltoniano: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>E</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si desarrollamos el lado derecho:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>i</mi><mi>ħ</mi></mrow><mi>φ</mi></mfrac><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>E</mi><mo>⇒</mo><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mi>φ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>i</mi><mi>ħ</mi></mrow></mfrac><mi>E</mi><mi>d</mi><mi>t</mi><mo>⇒</mo><msubsup><mo>∫</mo><msub><mi>φ</mi><mn>0</mn></msub><mi>φ</mi></msubsup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mi>φ</mi></mfrac><mo>=</mo><mfrac><mi>E</mi><mrow><mi>i</mi><mi>ħ</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>t</mi></msubsup><mi>d</mi><mi>t</mi><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>φ</mi><msub><mi>φ</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mi>E</mi><mi>t</mi></mrow><mrow><mi>i</mi><mi>ħ</mi></mrow></mfrac><mo>⇒</mo><mi>φ</mi><mo>=</mo><msub><mi>φ</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi>i</mi><mi>ħ</mi></mfrac><mi>E</mi><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Uniendo ambos resultados tenemos los modos normales (llamados también estacionarios, permanentes o correspondientes a las autofunciones del hamiltoniano):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mi>i</mi><mi>ħ</mi></mfrac><msub><mi>E</mi><mi>n</mi></msub><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Y podemos escribir cualquier función de onda como una combinación de funciones como esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Se dicen estacionarios no porque sean independientes del tiempo, sino porque el cuadrado del módulo sí lo es."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 1.</strong> Una partícula de masa <math display=\"inline\"><mi>m</mi></math> en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> tiene una función de onda"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde el parámetro <math display=\"inline\"><mi>α</mi></math> es mayor que 0. Con la condición de que en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>, calcula cuál es la expresión de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que corresponda a la autofunción del hamiltoniano para la ecuación de onda de la partícula. Da también el autovalor."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Una duda que puede surgir es si es necesario normalizar: si nos piden información sobre la probabilidad es imprescindible, en este caso no hace falta ya que no haríamos otra cosa que introducir una constante. Hacemos las derivadas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi><mi>α</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>α</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>α</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>V</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>=</mo><mi>E</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mi>E</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como sabemos que <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac></mrow></math>. Sustituyendo en la ecuación anterior:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac><mo>−</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac><mo>+</mo><mi>V</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>α</mi></mrow><mi>m</mi></mfrac><mo>⇒</mo><mi>V</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>α</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><mi>m</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Potencial correspondiente al oscilador armónico, estado fundamental."
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Pozo de potencial infinito",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 16.1.</strong>"
    },
    {
     "mota": "irudia",
     "oina": "Pozo de potencial infinito: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dentro del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> fuera de él. La partícula queda estrictamente confinada al pozo.",
     "src": "../media/irudiak/65b72d0ac20b9ffa.svg",
     "zabalera": 321
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>,</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>∞</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Sabemos que allí donde el potencial sea cero:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Ψ</mi><mo>⇒</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac></mrow></math> entonces <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi></mrow><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>x</mi></mrow></mfrac><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mn>0</mn></mrow></math>. Probando con una solución del tipo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>α</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>α</mi><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>α</mi><mn>2</mn></msup><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>α</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mo>⇒</mo><mi>α</mi><mo>=</mo><mi>±</mi><mi>i</mi><mi>k</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta ecuación solo es válida en el intervalo en el que el potencial es nulo. Normalmente hay que tener en cuenta la continuidad de la derivada, pero en este caso, como tenemos intervalos en los que el potencial es infinito, eso no se cumple, y lo que haremos será asegurar la continuidad de la función. El valor de la función en los extremos ha de ser nulo a causa del potencial infinito:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mrow></math> <math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sin embargo, de ser ambas ecuaciones linealmente independientes el resultado logrado sería trivial; por tanto, hemos de buscar que una sea combinación lineal de la otra, y para lograrlo podemos igualar a cero el determinante del sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dado que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>i</mi><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>x</mi></mrow></msup></mrow><mrow><mn>2</mn><mi>i</mi></mrow></mfrac></mrow></math>, se debe cumplir <math display=\"inline\"><mrow><mn>2</mn><mi>i</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>k</mi><mi>a</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si recuperamos la definición de <math display=\"inline\"><msup><mi>k</mi><mn>2</mn></msup></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mo>⇒</mo><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estos son los valores que puede adquirir la energía. Podemos escribir una constante en función de la otra:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>0</mn><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mo>⇒</mo><mi>B</mi><mo>=</mo><mi>−</mi><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyéndola en la ecuación inicial, con la restricción de que la energía dependa de <math display=\"inline\"><mi>n</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi></mrow></msup><mo>−</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mi>a</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi></mrow></msup><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>i</mi><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mi>n</mi></msub><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "También podemos escribir la función como"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero no sabemos si esta función está normalizada o no."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow><mfrac><mi>a</mi><mn>2</mn></mfrac></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Procedemos a cambiar el cuadrado por el ángulo doble:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow><mfrac><mi>a</mi><mn>2</mn></mfrac></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al integrar el coseno logramos un seno que se anula, por tanto el valor de la integral es <math display=\"inline\"><mfrac><mi>a</mi><mn>2</mn></mfrac></math>, y para que la función esté normalizada:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mo>⇒</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo>−</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> para valores impares</mtext></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> para valores pares</mtext></mrow></mtd></mtr></mtable></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "También podemos colocar el origen en <math display=\"inline\"><mrow><mi>−</mi><mfrac><mi>x</mi><mn>2</mn></mfrac></mrow></math> y escribir"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "problema",
     "izena": "Junio 2006, IEM/Física Moderna, problema 4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) La función de onda en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> de una partícula en un pozo de potencial de anchura <math display=\"inline\"><mi>a</mi></math> viene dada por <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo></mrow></math> constante)."
      },
      {
       "mota": "testua",
       "html": "a) Normalizar la función."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la probabilidad de que al medir la energía en este estado, se obtenga el valor de la energía del estado fundamental."
      },
      {
       "mota": "testua",
       "html": "Estados estacionarios para un pozo de potencial de anchura <math display=\"inline\"><mi>a</mi></math>: <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mi>a</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Formalmente, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∣</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msubsup><mi>φ</mi><mi>n</mi><mo>*</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Para el caso <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><mo>⋅</mo><mfrac><mi>a</mi><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>a</mi></msubsup><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>π</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mn>0</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mi>π</mi></mfrac><mi>.</mi></mrow></math> Probabilidad de obtener <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> en una medida de la energía: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>8</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac><mo>≈</mo><mn>0.81</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Junio 2007, IEM/Física Moderna, problema 4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se encuentra en un pozo de potencial infinito de anchura <math display=\"inline\"><mi>L</mi></math>, situado en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. La función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la partícula es nula excepto dentro del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, donde es constante. Calcular su incertidumbre en la posición, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> constante en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y cero en el resto. La normalización: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mi>.</mi></mrow></math> El valor medio de la posición: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>L</mi><mo>,</mo></mrow></math> como cabía esperar, en la mitad del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. Y <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>24</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>7</mn><mn>12</mn></mfrac><msup><mi>L</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La incertidumbre: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mrow><mfrac><mn>7</mn><mn>12</mn></mfrac><mo>−</mo><mfrac><mn>9</mn><mn>16</mn></mfrac></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mfrac><mn>1</mn><mn>48</mn></mfrac></msqrt><mo>≈</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mi>L</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los exámenes completos (Junio 2006: 6 problemas; Junio 2007: 5 problemas, ambos con solución oficial) están en el capítulo 7, en las secciones &quot;Junio 2006&quot; y &quot;Junio 2007&quot;. El &quot;Ejercicio 16.2&quot; de este capítulo es esencialmente el mismo que el problema 5 de Junio 2007 (con otra notación, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>↔</mo><msub><mi>φ</mi><mi>n</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>↔</mo><msub><mi>E</mi><mi>n</mi></msub></mrow></math>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejercicio 16.2.</strong> Una partícula cargada de masa <math display=\"inline\"><mi>m</mi></math> se mueve entre <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> en un pozo de potencial infinito. En <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> su estado es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Calcula el desarrollo respecto del tiempo de la densidad de probabilidad en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Transformamos la función eliminando la tercera potencia:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Utilizando la identidad trigonométrica <math display=\"inline\"><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>−</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>A</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>B</mi></mrow></math>, con <math display=\"inline\"><mrow><mfrac><mrow><mi>A</mi><mo>−</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><mfrac><mrow><mi>A</mi><mo>+</mo><mi>B</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac></mrow></math>, se obtiene <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>L</mi></mfrac></mrow></math>. La nueva ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por ser el seno una función impar:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dado que la forma general para una autofunción normalizada es <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Todavía no hemos normalizado la función en su conjunto. Para ello utilizaremos las autofunciones logradas (a modo de comprobación tomaremos directamente la ecuación dada):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>9</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msubsup><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mn>2</mn><mo>⋅</mo><mfrac><mn>3</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msubsup><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn><mn>2</mn></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Dado que las autofunciones sí están normalizadas y que la integral de sus productos se anula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>9</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>10</mn><mi>L</mi></mrow><mn>32</mn></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>L</mi></mrow><mn>16</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> no está normalizada </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Comprobación directa:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>6</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando el cubo y usando <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>⋅</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>…</mi></mrow></math> se llega a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>8</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>7</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>6</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Al integrar, todos los cosenos se anulan y nos quedamos con"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>⋅</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>5</mn><mi>L</mi></mrow><mn>16</mn></mfrac><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> comprobado </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Normalizamos la función dividiéndola entre la raíz cuadrada del valor de la integral:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>4</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>4</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msqrt><mfrac><mi>L</mi><mn>2</mn></mfrac></msqrt><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>3</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><mo>−</mo><mfrac><mn>1</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Su desarrollo en función del tiempo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>−</mo><mfrac><mn>1</mn><msqrt><mn>10</mn></msqrt></mfrac><msub><mi mathvariant=\"normal\">Ψ</mi><mn>3</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La consideramos en <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><msqrt><mn>10</mn></msqrt></mfrac><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>−</mo><mfrac><mn>1</mn><msqrt><mn>10</mn></msqrt></mfrac><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>π</mi></mrow><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>3</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para calcular la densidad de probabilidad, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mover><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo accent=\"true\">¯</mo></mover><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><msqrt><mrow><mn>5</mn><mi>L</mi></mrow></msqrt></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mfrac><msub><mi>ε</mi><mn>3</mn></msub><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>9</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><mo>+</mo><mfrac><mn>3</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mfrac><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>3</mn></msub></mrow><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>3</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>ħ</mi></mfrac><mi>t</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>⇒</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mo>+</mo><mfrac><mn>3</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>3</mn></msub></mrow><mi>ħ</mi></mfrac><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Análisis estadístico",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Distribución de probabilidad"
    },
    {
     "mota": "testua",
     "html": "Por una parte, por la interpretación de onda: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>. Por otra parte, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. Si queremos estudiar la posibilidad de que esté entre dos posiciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mn>1</mn></msub><msub><mi>x</mi><mn>2</mn></msub></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Valor esperado"
    },
    {
     "mota": "testua",
     "html": "Para una variable continua, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. Para una gráfica simétrica en la que haya un solo máximo, éste coincide con el valor esperado; para los demás casos el valor esperado no tiene por qué ser significativo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Desviación estándar"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El documento original se corta aquí a media frase, sin completar la fórmula. El cierre que sigue es exposición propia, completando de forma estándar lo que el apartado anterior (&quot;valor esperado&quot;) deja a medias."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El valor esperado <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> dice dónde está centrada, en promedio, la densidad de probabilidad, pero no dice nada sobre lo dispersa que está alrededor de ese centro. La <strong>desviación estándar</strong> <math display=\"inline\"><msub><mi>σ</mi><mi>x</mi></msub></math> mide precisamente eso: la anchura típica de <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en torno a <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>."
    },
    {
     "mota": "testua",
     "html": "Se define, igual que en estadística clásica, como la raíz cuadrada del valor esperado del cuadrado de la desviación respecto de la media:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>σ</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando el cuadrado y usando que <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> es una constante (no depende de <math display=\"inline\"><mi>x</mi></math>, la variable de integración):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>σ</mi><mi>x</mi><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><msup><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "ya que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math> por definición. Esta es la forma más práctica de calcular la desviación estándar: basta con conocer los dos valores esperados <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, sin necesidad de volver a integrar la resta al cuadrado."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>σ</mi><mi>x</mi></msub><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta misma definición, aplicada a la variable <math display=\"inline\"><mi>p</mi></math> en vez de a <math display=\"inline\"><mi>x</mi></math> (con <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> la densidad de probabilidad en el espacio de momentos, obtenida de la transformada de Fourier de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), da <math display=\"inline\"><msub><mi>σ</mi><mi>p</mi></msub></math> — y es precisamente en términos de estas dos desviaciones estándar como se formula rigurosamente el principio de incertidumbre que introdujimos antes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>σ</mi><mi>x</mi></msub><mo>⋅</mo><msub><mi>σ</mi><mi>p</mi></msub><mo>≥</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(la desigualdad <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math> de la sección anterior es exactamente esta relación, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math> entendidos como las respectivas desviaciones estándar)."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 1,
   "izenburua": "Exámenes oficiales (UPV/EHU)",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "fis mo exam emparejados",
     "xehetasuna": "Introducción a la Estructura de la Materia (IEM) / Física Moderna, ZTF-FCT, UPV/EHU. Exámenes oficiales con solución oficial, en PDF limpio (no fotografiados).",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de transcripción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estos exámenes se incluyen con enunciado <strong>y</strong> solución oficial completos, por decisión expresa del usuario (a diferencia de fuentes de terceros como Gratton o Eisberg-Resnick, que solo se usan como referencia). Las soluciones oficiales están manuscritas (escaneadas, letra clara); se transcriben fielmente. Cuando una pregunta no tiene solución en el documento original, se declara explícitamente en vez de inventarla."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Junio 2005",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntos) En un violento proceso nuclear, un átomo de uranio (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></math>) pierde todos sus electrones. Un poco más tarde, el núcleo de U captura un único electrón que está prácticamente en reposo en su vecindad."
      },
      {
       "mota": "testua",
       "html": "a) ¿De qué signo es el cambio de energía del sistema núcleo-electrón?"
      },
      {
       "mota": "testua",
       "html": "b) Calcular la energía máxima del fotón emitido o absorbido en el proceso."
      },
      {
       "mota": "testua",
       "html": "c) Calcular, para el caso de máxima energía del fotón, el &quot;radio de la órbita&quot; del electrón, y estimar su velocidad (comentar el resultado de este último cálculo)."
      },
      {
       "mota": "testua",
       "html": "(Energía del estado fundamental del H: <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La energía del sistema núcleo-electrón disminuye al pasar de un estado no ligado a un estado ligado."
      },
      {
       "mota": "testua",
       "html": "b) El electrón pasará a ocupar el estado estacionario fundamental (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>) del átomo hidrogenoide formado por el núcleo de U y el electrón. Como en general las energías de los estados estacionarios vienen dadas por <math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>∝</mo><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>→</mo><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><msup><mi>E</mi><mi>H</mi></msup><mfrac><msup><mi>Z</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> donde <math display=\"inline\"><msup><mi>E</mi><mi>H</mi></msup></math> es la energía del estado <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></math> (es decir, <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV): <math display=\"block\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>92</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>1</mn></mfrac><mo>=</mo><mi>−</mi><mn>115</mn><mspace width=\"0.167em\"></mspace><mn>110</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>−</mi><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math> La energía del fotón emitido será, dado que <math display=\"inline\"><mrow><msub><mi>E</mi><mtext mathvariant=\"normal\">inic</mtext></msub><mo>=</mo><mn>0</mn></mrow></math> (electrón en reposo y no ligado): <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">inic </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>115.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) El radio de la &quot;órbita&quot;, según la teoría de Bohr, es inversamente proporcional a <math display=\"inline\"><mi>Z</mi></math>: <math display=\"block\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>=</mo><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>1</mn></mrow></msub><mfrac><mn>1</mn><mi>Z</mi></mfrac><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mi>Z</mi></mfrac><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0.53</mn></mrow></math> Å es el radio de Bohr: <math display=\"block\"><mrow><msub><mi>r</mi><mrow><mi>Z</mi><mo>=</mo><mn>92</mn></mrow></msub><mo>=</mo><mn>0.53</mn><mspace width=\"0.167em\"></mspace><mfrac><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>92</mn></mfrac><mo>=</mo><mn>5.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Hueco de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La estimación numérica de la velocidad y el comentario del apartado c) piden algo que la solución oficial escaneada no desarrolla explícitamente (se detiene tras el cálculo del radio). No se inventa aquí: con <math display=\"inline\"><mrow><msub><mi>r</mi><mi>Z</mi></msub><mo>∝</mo><mfrac><mn>1</mn><mi>Z</mi></mfrac></mrow></math> tan pequeño, el resultado esperable es que <math display=\"inline\"><mrow><mfrac><mi>v</mi><mi>c</mi></mfrac><mo>≈</mo><mi>Z</mi><mi>α</mi><mo>≈</mo><mfrac><mn>92</mn><mn>137</mn></mfrac><mo>≈</mo><mn>0.67</mn></mrow></math>, una fracción apreciable de <math display=\"inline\"><mi>c</mi></math> — el modelo de Bohr no relativista deja de ser fiable en este régimen, que es probablemente el &quot;comentario&quot; que pedía el enunciado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 punto) Discutir un método para determinar el valor de la constante de Boltzmann."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 punto) Los hipotéticos habitantes de Marte tienen solamente cuatro dedos en cada mano, pero han alcanzado buenos conocimientos de física cuántica. ¿Qué valor numérico aproximado aparece en sus libros para el inverso de la constante de estructura fina? (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mi>c</mi></mrow></mfrac></mrow></math>)"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Sin resolver",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los problemas 2 y 3 no tienen solución en el documento original (las 12 páginas del solucionario manuscrito saltan directamente a los problemas 1, 4, 5, 6 y 7). No se inventa la solución: solo se transcribe el enunciado."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1 punto) En la figura se representa el módulo al cuadrado de la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de un protón en un instante dado, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> Å. La velocidad media del protón es <math display=\"inline\"><msup><mn>10</mn><mn>3</mn></msup></math> m/s. Indicar cuál será la anchura aproximada de la función <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> que representa la densidad de probabilidad de los diferentes valores del número de onda <math display=\"inline\"><mi>k</mi></math> (<math display=\"inline\"><mrow><mo>=</mo><mfrac><mi>p</mi><mi>ħ</mi></mfrac></mrow></math>), y discutir en qué zona del eje <math display=\"inline\"><mi>k</mi></math> estará localizada."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Por el principio de indeterminación, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>, luego <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>≈</mo><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> La función <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> está centrada en <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>, con <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>h</mi></mfrac><mi>.</mi></mrow></math> Numéricamente, con <math display=\"inline\"><mi>m</mi></math> la masa del protón (<math display=\"inline\"><mrow><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg): <math display=\"block\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mo>×</mo><mn>1.7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mn>10</mn><mn>3</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> está localizada en torno a <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>1.6</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> (zona positiva del eje <math display=\"inline\"><mi>k</mi></math>), con anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mn>1</mn></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntos) En la figura se muestran las funciones de onda de varios estados estacionarios de una partícula (tres curvas, con curvatura creciente: la primera sin nodos, la segunda con dos nodos, la tercera con varios nodos y oscilaciones más rápidas)."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál de ellas es la de energía más alta, y por qué?"
      },
      {
       "mota": "testua",
       "html": "b) Identificar razonadamente el estado de energía más baja de entre los presentados."
      },
      {
       "mota": "testua",
       "html": "c) Dibujar la densidad de probabilidad de presencia para la segunda función de onda."
      },
      {
       "mota": "testua",
       "html": "d) Identificar los puntos de inflexión en las funciones de onda mostradas."
      },
      {
       "mota": "testua",
       "html": "e) ¿Puede inferirse la existencia de alguna zona clásicamente prohibida para la partícula?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La energía más alta corresponde a la tercera, ya que la segunda derivada <math display=\"inline\"><msup><mi>φ</mi><mo>″</mo></msup></math> de la función es claramente más grande, y según la ecuación de Schrödinger independiente del tiempo <math display=\"block\"><mrow><msup><mi>φ</mi><mo>″</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>m</mi></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> eso indica que las diferencias <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> son mayores."
      },
      {
       "mota": "testua",
       "html": "b) Por la misma razón, la de más baja energía debe ser la primera de las tres."
      },
      {
       "mota": "testua",
       "html": "c) La densidad de probabilidad de la segunda función de onda es el cuadrado de una función con dos nodos: dos lóbulos con un cero intermedio en cada nodo."
      },
      {
       "mota": "testua",
       "html": "d) Los puntos de inflexión son aquellos en los que <math display=\"inline\"><msup><mi>φ</mi><mo>″</mo></msup></math> cambia de signo."
      },
      {
       "mota": "testua",
       "html": "e) Las zonas prohibidas clásicamente corresponden a la situación en que <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math> es negativo, y en ellas la curvatura cambia de signo con respecto al signo de la función <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En los tres casos esas zonas prohibidas están a la izquierda y derecha de los puntos de inflexión más extremos."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntos) Se han hecho 1000 medidas experimentales de la energía en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> de una partícula de masa <math display=\"inline\"><mi>m</mi></math> que está confinada en una caja de potencial entre <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>. En 600 casos se obtuvo la energía <math display=\"inline\"><mrow><msub><mi>E</mi><mi>a</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, y en 400 ocasiones se obtuvo <math display=\"inline\"><mrow><msub><mi>E</mi><mi>b</mi></msub><mo>=</mo><mn>4</mn><msub><mi>E</mi><mi>a</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Determinan unívocamente estos resultados la función de onda <math display=\"inline\"><mi>ψ</mi></math> de la partícula?"
      },
      {
       "mota": "testua",
       "html": "b) Calcular el valor medio de la posición <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> de la partícula en función del tiempo."
      },
      {
       "mota": "testua",
       "html": "c) ¿Dependen del tiempo las probabilidades asociadas a las medidas de la energía?"
      },
      {
       "mota": "testua",
       "html": "(Suponer que el valor de la función de onda en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es real.)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>E</mi><mi>a</mi></msub><mo>=</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>600</mn><mn>1000</mn></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>2</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msub><mi>P</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>400</mn><mn>1000</mn></mfrac><mo>=</mo><mfrac><mn>2</mn><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math> Esto NO determina <math display=\"inline\"><mi>ψ</mi></math> unívocamente: solo fija los módulos de los coeficientes, no sus fases relativas. Escribiendo <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>3</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub></mrow></msup><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msqrt><mfrac><mn>2</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub></mrow></msup><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> la fase global es arbitraria, así que se puede elegir <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> (lo que hace <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>/</mi><mn>4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> real y positiva). La forma más general es entonces <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>3</mn><mn>5</mn></mfrac></msqrt><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msqrt><mfrac><mn>2</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>i</mi><mi>ε</mi></mrow></msup><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> con <math display=\"inline\"><mi>ε</mi></math> una fase relativa indeterminada por estos datos."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mspace width=\"0.222em\"></mspace><mi>x</mi><mspace width=\"0.222em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> que se descompone usando <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>a</mi><mn>2</mn></mfrac></mrow></math> (el valor medio de <math display=\"inline\"><mi>x</mi></math> en cualquier estado estacionario está en el centro de la caja, por simetría) y la integral cruzada <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mspace width=\"0.222em\"></mspace><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Sumando los términos: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><msqrt><mfrac><mn>6</mn><mn>25</mn></mfrac></msqrt><mi>I</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ε</mi><mi>.</mi></mrow></math> Incluyendo la evolución temporal de las fases <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mi>n</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><msqrt><mfrac><mn>6</mn><mn>25</mn></mfrac></msqrt><mi>I</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>−</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow><mi>ħ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>E</mi><mi>a</mi></msub></mrow><mi>ħ</mi></mfrac><mi>.</mi></mrow></math> Es decir, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> SÍ varía con el tiempo (oscila en torno al centro de la caja)."
      },
      {
       "mota": "testua",
       "html": "c) Las probabilidades de medir <math display=\"inline\"><msub><mi>E</mi><mi>a</mi></msub></math> y <math display=\"inline\"><mrow><mn>4</mn><msub><mi>E</mi><mi>a</mi></msub></mrow></math> NO varían con el tiempo, ya que son los módulos al cuadrado de las amplitudes complejas que multiplican a <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math>: <math display=\"block\"><mrow><msub><mi>P</mi><mn>1</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msqrt><mfrac><mn>3</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mi>a</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mn>2</mn></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><msqrt><mfrac><mn>2</mn><mn>5</mn></mfrac></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mn>4</mn><msub><mi>E</mi><mi>a</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>2</mn><mrow><mn>5</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntos) Se tiene un sistema de <math display=\"inline\"><mi>N</mi></math> partículas no interaccionantes, cada una con cuatro estados, de energías respectivas: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>4</mn></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la energía total del sistema en el límite de temperaturas &quot;altas&quot; y &quot;bajas&quot; (y especificar el sentido físico de esos límites)."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la probabilidad de que una partícula dada tenga energías <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> y <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> en esos límites, y relacionar el resultado con el del punto anterior."
      },
      {
       "mota": "testua",
       "html": "c) (<strong>1 punto extra</strong>) Un científico disidente sugiere que son tres y no dos los estados con energía nula. Mostrar que la cuestión puede decidirse haciendo medidas del calor específico a temperaturas altas."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La función de partición de una partícula, con <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math>: <math display=\"block\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La energía total del sistema de <math display=\"inline\"><mi>N</mi></math> partículas: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi>N</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mn>1</mn></msub></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>N</mi><mfrac><mrow><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mrow><mrow><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Límite <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo></mrow></math> &quot;alta&quot;</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mn>0</mn></mrow></math>): <math display=\"inline\"><mrow><mi>U</mi><mo>→</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Límite <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo></mrow></math> &quot;baja&quot;</strong> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mi>∞</mi></mrow></math>): <math display=\"block\"><mrow><mi>U</mi><mo>≈</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mfrac><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mo>,</mo></mrow></math> es decir, <math display=\"inline\"><mrow><mi>U</mi><mo>→</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> cuando <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math> K: todas las partículas caen al estado fundamental <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Las probabilidades de cada energía son <math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>2</mn><msub><mi>Z</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msub><mi>Z</mi><mn>1</mn></msub></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msub><mi>Z</mi><mn>1</mn></msub></mfrac><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math></strong> (<math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mi>∞</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>≈</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mrow></math>): <math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>→</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo>→</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mo>→</mo><mn>0</mn><mi>.</mi></mrow></math> Es decir, para <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math> K la probabilidad es 1 de encontrar a la partícula en su estado fundamental — coherente con <math display=\"inline\"><mrow><mi>U</mi><mo>→</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mi>∞</mi></mrow></math></strong> (<math display=\"inline\"><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>→</mo><mn>4</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>P</mi><mn>0</mn></msub><mo>→</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo>→</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mo>→</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math> Es obvio entonces que para <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mi>∞</mi></mrow></math>: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>P</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>P</mi><mn>0</mn></msub><mo>⋅</mo><mn>0</mn><mo>+</mo><msub><mi>P</mi><mi mathvariant=\"normal\">Δ</mi></msub><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>0</mn><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> coherente con el límite de temperatura alta del apartado a)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Sin resolver",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El apartado c) (punto extra: científico disidente, tres estados nulos vs. dos) no está resuelto en las 12 páginas escaneadas de la fuente."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Septiembre 2005",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2 puntos) Una lámpara ultravioleta (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å) de 1 watio de potencia está a 10 m de una placa de cesio de 10 cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> de área, de forma que la luz incide perpendicularmente a la placa. Si se supone que cada fotón que llega a la placa extrae un electrón:"
      },
      {
       "mota": "testua",
       "html": "a) Calcular el número de electrones emitidos por segundo."
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la energía máxima de los electrones emitidos, si el trabajo de extracción del Cs es 1.9 eV?"
      },
      {
       "mota": "testua",
       "html": "c) ¿Cómo varían las magnitudes calculadas anteriormente si se acerca la lámpara a 5 m?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math> W <math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math> J s<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>10</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>10</mn></mrow></math> cm<math display=\"inline\"><mrow><msup><mrow></mrow><mn>2</mn></msup><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>."
      },
      {
       "mota": "testua",
       "html": "a) Potencia sobre la placa: <math display=\"block\"><mrow><msub><mi>P</mi><mi>S</mi></msub><mo>=</mo><mi>P</mi><mo>⋅</mo><mfrac><mi>S</mi><mrow><mn>4</mn><mi>π</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><mo>×</mo><msup><mn>10</mn><mn>2</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> Número de fotones por segundo, con <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>N</mi><mi>γ</mi></msub><mo>=</mo><mfrac><msub><mi>P</mi><mi>S</mi></msub><mrow><mi>h</mi><mi>ν</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>P</mi><mi>S</mi></msub><mi>λ</mi></mrow><mrow><mi>h</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mfrac><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/eV</mtext></mrow></mrow></mfrac><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fotones/s</mtext></mrow><mi>.</mi></mrow></math> Con un electrón por fotón: <math display=\"inline\"><mrow><msub><mi>N</mi><mi>e</mi></msub><mo>=</mo><msub><mi>N</mi><mi>γ</mi></msub><mo>≈</mo><msup><mn>10</mn><mn>12</mn></msup></mrow></math> electrones/s."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>250</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow></mfrac><mo>=</mo><mn>4.96</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1.9</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.06</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) La potencia <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> varía con <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math>. Por tanto, al disminuir <math display=\"inline\"><mi>d</mi></math> a la mitad, <math display=\"inline\"><msub><mi>P</mi><mi>S</mi></msub></math> aumenta por un factor 4, y lo mismo hará el número de electrones extraídos. Sin embargo, la energía cinética máxima no cambiará (depende solo de <math display=\"inline\"><mi>λ</mi></math>, no de la intensidad)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Suponiendo que la función de onda en el espacio de vectores de onda <math display=\"inline\"><mi>k</mi></math> correspondiente a una función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar que la correspondiente a <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>x</mi><mn>0</mn></msub><mi>k</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) La función de onda en el espacio del momento lineal de un protón es <math display=\"block\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>p</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mrow><mn>2</mn><msubsup><mi>p</mi><mn>1</mn><mn>2</mn></msubsup></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>p</mi><mi>/</mi><msub><mi>p</mi><mn>2</mn></msub></mrow></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup></mrow></math> kg m/s, <math display=\"inline\"><mrow><msub><mi>p</mi><mn>1</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup></mrow></math> kg m/s y <math display=\"inline\"><mrow><msub><mi>p</mi><mn>2</mn></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>35</mn></mrow></msup></mrow></math> m/s. Dibujar aproximadamente la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y estimar su anchura y la localización de su máximo."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Sea <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por definición, <math display=\"block\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math> Con el cambio <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>: <math display=\"block\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>d</mi><mi>y</mi><mspace width=\"0.222em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>y</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>10</mn></mrow></math> μm (valores traducidos de <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><msub><mi>p</mi><mn>2</mn></msub></mrow></math> vía <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></math>): comparando con el apartado a), la función <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> correspondiente a este <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> debe poder ponerse en la forma <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (la función <math display=\"inline\"><mi>φ</mi></math> trasladada <math display=\"inline\"><mrow><mi>−</mi><mi>b</mi></mrow></math>), donde <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene como transformada de Fourier la función <math display=\"inline\"><mrow><msub><mi>g</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>. Esta es una gaussiana centrada en <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math>; sabemos entonces que <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> debe ser otra gaussiana, de anchura inversa a la de <math display=\"inline\"><mrow><msub><mi>g</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto el esquema será <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>b</mi></mrow></math> con anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>≈</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>, y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> centrada en <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math> con anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>≈</mo><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>=</mo><mfrac><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow><mrow><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>3950</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(1.5 puntos) Una partícula se mueve en un potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con pared infinita en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y un escalón de altura <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> (i.e. <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math>). <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> son niveles ligados (<math display=\"inline\"><mrow><mo>&lt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math>); <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math> es un nivel con <math display=\"inline\"><mrow><msub><mi>E</mi><mi>D</mi></msub><mo>&gt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Dibujar aproximadamente las funciones de onda correspondientes a los estados estacionarios con las energías <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "b) Obtener la forma funcional de <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para el estado estacionario de energía <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math>."
      },
      {
       "mota": "testua",
       "html": "c) ¿Hay algún otro nivel de energía permitido entre <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math>?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (energía <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math>, sin nodos) y <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (energía <math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math>, con un nodo) oscilan dentro del pozo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y decaen exponencialmente para <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math> (estados ligados, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>,</mo><msub><mi>E</mi><mn>2</mn></msub><mo>&lt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "b) Para <math display=\"inline\"><msub><mi>E</mi><mi>D</mi></msub></math>: <math display=\"inline\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>; <math display=\"block\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>x</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>&gt;</mo><mi>a</mi><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>k</mi><mn>1</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>m</mi><msub><mi>E</mi><mi>D</mi></msub></mrow></msqrt><mi>/</mi><mi>ħ</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>k</mi><mn>2</mn></msub><mo>=</mo><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>D</mi></msub><mo>−</mo><msub><mi>V</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>/</mi><mi>ħ</mi></mrow></math>. La condición <math display=\"inline\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>−</mi><mi>B</mi></mrow></math>, luego <math display=\"block\"><mrow><msub><mi>ψ</mi><mi>D</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math> Igualando valor y derivada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> (<math display=\"inline\"><mrow><msubsup><mi>ψ</mi><mi>D</mi><mrow><mtext mathvariant=\"normal\">I </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mi>ψ</mi><mi>D</mi><mrow><mtext mathvariant=\"normal\">II </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y sus derivadas): <math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>k</mi><mn>1</mn></msub><msup><mi>A</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>1</mn></msub><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo>−</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>k</mi><mn>2</mn></msub><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> lo que relaciona los coeficientes <math display=\"inline\"><mrow><mi>C</mi><mo>,</mo><mi>D</mi></mrow></math> con <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math> (queda un coeficiente global libre, al ser un estado no ligado y por tanto no normalizable en sentido estricto)."
      },
      {
       "mota": "testua",
       "html": "c) Sí, ya que a partir de energías <math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math> los estados estacionarios serán no ligados y el espectro de energías será continuo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2.5 puntos) La función de onda en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> de una partícula sometida a un potencial armónico con niveles de energía <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi></mrow></math> es <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math> complejo en general."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es la probabilidad de que al medir la energía en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> el resultado sea <math display=\"inline\"><mrow><mi>E</mi><mo>&gt;</mo><mn>3</mn><mi>ħ</mi><mi>ω</mi></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "b) Supongamos ahora que <math display=\"inline\"><mrow><msub><mi>c</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mi>i</mi><mo>≥</mo><mn>2</mn></mrow></math>. Se sabe que el valor medio de la energía es <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>4</mn><mi>ħ</mi><mi>ω</mi></mrow></math>. ¿Cuál es la probabilidad de que al medir la energía de la partícula el resultado sea <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>?"
      },
      {
       "mota": "testua",
       "html": "c) En las mismas hipótesis que en el apartado anterior, suponer además que <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> es real y positivo. Se sabe que el valor medio de la posición de la partícula en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msqrt><mrow><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>m</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></mrow></math>. Encontrar <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Usar como estados estacionarios: <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>α</mi><mi>/</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>4</mn><mi>α</mi></mrow></msqrt><mi>x</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>≡</mo><mi>m</mi><mi>ω</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (el valor medio de <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> en el estado <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> es <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi><mo>&gt;</mo><mn>3</mn><mi>ħ</mi><mi>ω</mi></mrow></math>: la probabilidad de que la energía medida esté por encima de <math display=\"inline\"><mrow><mn>3</mn><mi>ħ</mi><mi>ω</mi></mrow></math> es <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo></mrow></math>, dado que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> es la probabilidad de que la energía medida sea <math display=\"inline\"><msub><mi>E</mi><mi>n</mi></msub></math>."
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><msub><mi>c</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mi>i</mi><mo>≥</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>0</mn></msub><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mi>ħ</mi><mi>ω</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Con la normalización <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mn>3</mn><mi>/</mi><mn>4</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mn>3</mn><mi>/</mi><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>0</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mo>,</mo></mrow></math> que es la probabilidad de obtener <math display=\"inline\"><msub><mi>E</mi><mn>0</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "c) Con <math display=\"inline\"><msub><mi>c</mi><mn>0</mn></msub></math> real, tomando <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>c</mi><mn>0</mn><mo>*</mo></msubsup><msub><mi>c</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> c.c.</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><mn>4</mn><mi>α</mi></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><msup><mi>x</mi><mn>2</mn></msup><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msqrt><mrow><mn>4</mn><mi>α</mi></mrow></msqrt><mfrac><mn>1</mn><mrow><mn>4</mn><mi>α</mi></mrow></mfrac><mo>,</mo></mrow></math> (los términos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>0</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>,</mo><mi>x</mi><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se anulan por simetría: el valor medio de <math display=\"inline\"><mi>x</mi></math> en cualquier estado estacionario es cero), se obtiene <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msqrt><mi>α</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><msqrt><mrow><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>m</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>8</mn><mi>α</mi></mrow></msqrt><mi>.</mi></mrow></math> Despejando: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mo>=</mo><mn>4</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>3</mn></msqrt><msqrt><mn>8</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>/</mi><msqrt><mn>6</mn></msqrt></mrow></math>, es decir <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><msqrt><mn>6</mn></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mn>3</mn></msqrt><mn>2</mn></mfrac><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>0</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>i</mi><mi>φ</mi></mrow></msup><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>1</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(2.5 puntos) La distribución de Planck para la densidad de energía de la radiación puede escribirse en la forma (<math display=\"inline\"><mi>A</mi></math> es una constante positiva): <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Comentar las analogías y las diferencias entre esta expresión y la que da la energía total de un gas ideal monoatómico: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> En particular, discutir el significado de los términos entre paréntesis, y decir en qué circunstancias el segundo factor de la distribución de Planck se parecerá al correspondiente del gas."
      },
      {
       "mota": "testua",
       "html": "b) Demostrar que si denotamos por <math display=\"inline\"><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> la posición del máximo de la distribución de Planck en función de la frecuencia, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math> es una cierta constante (Ley de Wien). Para calcular la constante, usar el hecho de que el Sol es una estrella &quot;amarilla&quot; en el sentido de que la longitud de onda más abundante en su radiación corresponde a ese color. Suponer que esa longitud de onda es 6000 Å, y que la temperatura de la superficie del Sol es aproximadamente 5000 K."
      },
      {
       "mota": "testua",
       "html": "c) Un astrónomo observa que la radiación más abundante de una cierta estrella corresponde a fotones de 3 eV. Calcular la temperatura de la estrella."
      },
      {
       "mota": "testua",
       "html": "d) Estimar el orden de magnitud de la proporción <math display=\"inline\"><mrow><msub><mi>N</mi><mn>2</mn></msub><mi>/</mi><msub><mi>N</mi><mn>1</mn></msub></mrow></math> de átomos de hidrógeno en la estrella del apartado anterior en los estados con <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>. (La energía de ionización del átomo de hidrógeno es <math display=\"inline\"><mrow><mi>−</mi><mn>13.6</mn></mrow></math> eV.)"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) En ambos casos, la energía total es (número de &quot;modos&quot; o grados de libertad) <math display=\"inline\"><mi>×</mi></math> (energía media por modo). En el gas, <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> es el número total de grados de libertad (<math display=\"inline\"><mi>N</mi></math> átomos, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> la energía media por grado de libertad según equipartición). En Planck, el primer paréntesis <math display=\"inline\"><mrow><mi>A</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>d</mi><mi>ν</mi></mrow></math> corresponde al número de modos (ondas permitidas) dentro de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>ν</mi><mo>,</mo><mi>ν</mi><mo>+</mo><mi>d</mi><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> contando direcciones y polarización; el segundo, <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, es la energía media de un oscilador de esa frecuencia — depende de la frecuencia, a diferencia de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>. A altas temperaturas (<math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><mi>ν</mi><mo>≪</mo><mn>1</mn></mrow></math>) debe parecerse a la del gas, y en efecto: <math display=\"block\"><mrow><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi><mi>h</mi><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>β</mi></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><msup><mi>ν</mi><mn>3</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, imponiendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>ν</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>3</mn><msup><mi>ν</mi><mn>2</mn></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>ν</mi><mn>3</mn></msup><mi>β</mi><mi>h</mi><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>−</mo><mfrac><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ecuación que fija <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte</mtext></mrow></mrow></math> (independiente de la temperatura: la Ley de Wien). Numéricamente, con <math display=\"inline\"><mrow><msub><mi>C</mi><mtext mathvariant=\"normal\">Wien</mtext></msub><mo>=</mo><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub></mrow></mfrac></mrow></math>: <math display=\"block\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mn>1240</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow></mrow><mrow><mn>510</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5700</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>4.92</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>3</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>β</mi><mi>h</mi><msub><mi>ν</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>4.9</mn></mrow></math>: <math display=\"block\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>4.9</mn><mrow><mn>3</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow></mfrac><mo>=</mo><mn>1.6</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>4.9</mn></mfrac><mo>=</mo><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mrow><mn>0.61</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mn>8.617</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>7100</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV. Despreciando el efecto de la degeneración: <math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mo>×</mo><mn>13.6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1.6</mn><mo>×</mo><mn>13.6</mn><mo>×</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></msup><mo>≈</mo><mn>8.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Discrepancia con el enunciado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado da <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>6000</mn></mrow></math> Å y <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">sol </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>5000</mn></mrow></math> K, pero la solución oficial manuscrita usa <math display=\"inline\"><mrow><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>5100</mn></mrow></math> Å y <math display=\"inline\"><mrow><msub><mi>T</mi><mtext mathvariant=\"normal\">sol</mtext></msub><mo>=</mo><mn>5700</mn></mrow></math> K (con los que el resultado numérico <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mtext mathvariant=\"normal\">Wien </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>4.92</mn></mrow></math> es autoconsistente). Se transcriben los valores de la solución tal cual, sin forzarlos a coincidir con el enunciado impreso."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Junio 2006",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) Una estrella con una temperatura en superficie de 5000 K tiene el máximo de su radiancia en 5800 Å. Para generar un efecto fotoeléctrico en un metal, se utiliza la radiación de un cuerpo negro a 500 K."
      },
      {
       "mota": "testua",
       "html": "a) Determinar la longitud de onda correspondiente al máximo de la radiancia del cuerpo negro a 500 K."
      },
      {
       "mota": "testua",
       "html": "b) Si la función de trabajo del metal es de 0.214 eV, calcular la máxima longitud de onda de los fotones emitidos por el cuerpo negro, capaces de generar foto-electrones en el metal."
      },
      {
       "mota": "testua",
       "html": "c) Dibujar en un esquema la radiancia <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del cuerpo negro y sombrear la región del espectro de los fotones útiles para generar efecto fotoeléctrico en dicho metal."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><msub><mi>T</mi><mo>⋆</mo></msub><mo>=</mo><mn>5000</mn></mrow></math> K, <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><mo>=</mo><mn>5800</mn></mrow></math> Å."
      },
      {
       "mota": "testua",
       "html": "a) Ley de Wien: <math display=\"inline\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>⋅</mo><mi>T</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cte </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mi>C</mi></mrow></math>, luego <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>5800</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>5000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.9</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math> Para el cuerpo negro a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>500</mn></mrow></math> K: <math display=\"block\"><mrow><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mi>T</mi><mo>=</mo><msubsup><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext><mo>⋆</mo></msubsup><msub><mi>T</mi><mo>⋆</mo></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mn>0.214</mn></mrow></math> eV, <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> (frecuencia umbral mínima), luego <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi><mi>/</mi><msub><mi>ν</mi><mn>0</mn></msub><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>W</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mrow><mn>0.214</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow></mfrac><mo>≈</mo><mn>58</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>58</mn><mspace width=\"0.167em\"></mspace><mn>000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (Coincide con <math display=\"inline\"><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></math> del apartado a).)"
      },
      {
       "mota": "testua",
       "html": "c) En el esquema de <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del cuerpo negro, a 500 K, la región útil para efecto fotoeléctrico es <math display=\"inline\"><mrow><mi>ν</mi><mo>&gt;</mo><msub><mi>ν</mi><mn>0</mn></msub></mrow></math> (equivalentemente <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>): dado que <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><msub><mi>λ</mi><mtext mathvariant=\"normal\">max</mtext></msub></mrow></math>, esa región es justo la mitad de mayor frecuencia de la curva, la que queda a la derecha del máximo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) Se pretende describir clásicamente (usando <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>p</mi></math>) un electrón en una caja de potencial de anchura <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> Å. El electrón tiene una velocidad de <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math> m/s, comparable a la de la primera órbita de Bohr del átomo de hidrógeno. La precisión en la medida de <math display=\"inline\"><mi>x</mi></math> (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>) debería ser del orden de 0.1 Å."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la imprecisión en la medida del momento, compararla con el valor de <math display=\"inline\"><mi>p</mi></math> y comentar la validez de esta descripción clásica."
      },
      {
       "mota": "testua",
       "html": "b) Dibujar un esquema a escala de un paquete de ondas con el <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> indicado dentro del pozo, y otro esquema de la función <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>, que representa la distribución de probabilidad del momento."
      },
      {
       "mota": "testua",
       "html": "c) Discutir la validez de la descripción clásica del movimiento de un balón en un campo de fútbol (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>10</mn></mrow></math> cm, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>30</mn></mrow></math> m/s)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>0.1</mn></mrow></math> Å, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>6</mn></msup></mrow></math> m/s, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>30</mn></mrow></msup></mrow></math> kg."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow></math>. Por indeterminación, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>⋅</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mi>ħ</mi></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mfrac><mi>ħ</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow><mi>p</mi></mfrac><mo>∼</mo><mn>3</mn><mi>.</mi></mrow></math> La incertidumbre es muy grande (del orden del propio <math display=\"inline\"><mi>p</mi></math>): una descripción basada en valores definidos de <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>p</mi></math> simultáneamente NO es posible."
      },
      {
       "mota": "testua",
       "html": "b) El paquete de ondas ocupa el pozo con anchura <math display=\"inline\"><mrow><mi>a</mi><mo>∼</mo><mn>1</mn></mrow></math> Å; la función <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> es muy ancha, centrada en <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi></mrow></math> con anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mn>3</mn><mi>p</mi></mrow></math> (comparable a <math display=\"inline\"><mi>p</mi></math> mismo)."
      },
      {
       "mota": "testua",
       "html": "c) Para el balón: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>m</mi><mi>v</mi><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>30</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>30</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow></math>. <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>∼</mo><mfrac><mi>ħ</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow></mrow><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow></mrow></mfrac><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>33</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≪</mo><mi>p</mi><mi>.</mi></mrow></math> La descripción clásica es correcta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Decir si la función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> (en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>) puede representar a una partícula libre o solamente al estado fundamental de partícula en un potencial armónico. Argumentar la respuesta."
      },
      {
       "mota": "testua",
       "html": "b) En cualquiera de los casos anteriores, discutir la evolución temporal de la distribución de probabilidad asociada."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Sí, puede representar a cualquiera de las dos: cualquier función (razonable) puede ser una función de onda válida en un instante dado. El sistema (el hamiltoniano <math display=\"inline\"><mover><mi>H</mi><mo accent=\"true\">̂</mo></mover></math>) determina <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (la evolución temporal), pero no las condiciones iniciales."
      },
      {
       "mota": "testua",
       "html": "b) <strong>Si es una partícula libre</strong>: hay que expresar <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como integral de Fourier (descomposición en autoestados de <math display=\"inline\"><mover><mi>H</mi><mo accent=\"true\">̂</mo></mover></math> o <math display=\"inline\"><mover><mi>p</mi><mo accent=\"true\">̂</mo></mover></math>): <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo>−</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>k</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>ħ</mi><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi>.</mi></mrow></math> Esto se hizo en clase para la función de onda <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>, que corresponde a un paquete de ondas que se mueve con velocidad media <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub><mi>/</mi><mi>m</mi></mrow></math>. En este caso <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, luego el paquete se queda centrado en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, ensanchándose gradualmente con el tiempo (misma forma gaussiana, cada vez más ancha y baja)."
      },
      {
       "mota": "testua",
       "html": "<strong>Si es el estado fundamental de un potencial armónico</strong> (con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>), la solución sería <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>0</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> La distribución de probabilidad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> permanecería constante en el tiempo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) La función de onda en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> de una partícula en un pozo de potencial de anchura <math display=\"inline\"><mi>a</mi></math> viene dada por <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo></mrow></math> constante)."
      },
      {
       "mota": "testua",
       "html": "a) Normalizar la función."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la probabilidad de que al medir la energía en este estado, se obtenga el valor de la energía del estado fundamental."
      },
      {
       "mota": "testua",
       "html": "Estados estacionarios para un pozo de potencial de anchura <math display=\"inline\"><mi>a</mi></math>: <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mi>a</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Formalmente, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∣</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msubsup><mi>φ</mi><mi>n</mi><mo>*</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>a</mi></mfrac><mo>⋅</mo><mfrac><mi>a</mi><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>a</mi></msubsup><mo>=</mo><mfrac><msqrt><mn>2</mn></msqrt><mi>π</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mn>0</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mi>π</mi></mfrac><mi>.</mi></mrow></math> Probabilidad de obtener <math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math> en una medida de la energía: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>8</mn><msup><mi>π</mi><mn>2</mn></msup></mfrac><mo>≈</mo><mn>0.81</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Consideremos un oscilador armónico cuántico unidimensional descrito por un potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>. En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la partícula se describe por la función de onda: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msqrt><mn>2</mn></msqrt><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son autofunciones normalizadas con autovalores de la energía <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Calcular un valor de la constante <math display=\"inline\"><mi>A</mi></math> para que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> esté normalizada."
      },
      {
       "mota": "testua",
       "html": "b) Obtener una expresión para la función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> dependiente del tiempo, en función de <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>φ</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>2</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "c) Calcular el valor esperado de la energía <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> de la partícula descrita por <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Varía este valor con el tiempo?"
      },
      {
       "mota": "testua",
       "html": "d) Si se realiza una sola medida de la energía en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, ¿cuál es la probabilidad de obtener un valor igual a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Las <math display=\"inline\"><msub><mi>φ</mi><mi>n</mi></msub></math> son ortonormales, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"normal\">Ψ</mi><mo>∣</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"normal\">Ψ</mi><mo>∣</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><msub><mi>c</mi><mn>0</mn></msub><mo>=</mo><mi>A</mi><msqrt><mn>2</mn></msqrt><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mi>A</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mn>2</mn></msqrt></mfrac><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>0</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>1</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>φ</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>2</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>E</mi><mn>0</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>⋅</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>3</mn><mn>8</mn></mfrac><mo>+</mo><mfrac><mn>5</mn><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mfrac><mn>5</mn><mn>4</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> No varía con el tiempo: las probabilidades <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> son estacionarias."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Prob</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ya que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≠</mo><msub><mi>E</mi><mi>n</mi></msub></mrow></math> para ningún <math display=\"inline\"><mi>n</mi></math> (los valores posibles de una medida de energía son siempre alguno de los <math display=\"inline\"><msub><mi>E</mi><mi>n</mi></msub></math>)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) En un sistema de <math display=\"inline\"><mi>N</mi></math> partículas distinguibles, éstas disponen de dos niveles de energía <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>±</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el calor específico (<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>T</mi></mrow></math>) en función de la temperatura."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la razón de las probabilidades de ocupación de los dos estados a altas y a bajas temperaturas."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mi>+</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>Z</mi><mn>1</mn></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><munder><mo>∑</mo><mi>j</mi></munder><msub><mi>ε</mi><mi>j</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow><mrow><munder><mo>∑</mo><mi>j</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><msub><mi>Z</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><mi>k</mi><mi>T</mi></mrow></math> (temperaturas bajas): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>→</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> (todas las partículas están en el estado fundamental)."
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><mi>k</mi><mi>T</mi></mrow></math> (temperaturas altas): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>→</mo><mn>0</mn></mrow></math> (hay aproximadamente el mismo número de partículas en los dos estados)."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mfrac><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><mi>k</mi><mi>T</mi></mrow></math> (<math display=\"inline\"><mi>T</mi></math> bajas), esta razón <math display=\"inline\"><mrow><mo>→</mo><mn>0</mn></mrow></math>; con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><mi>k</mi><mi>T</mi></mrow></math> (<math display=\"inline\"><mi>T</mi></math> altas), <math display=\"inline\"><mrow><mo>→</mo><mn>1</mn></mrow></math>. Ejemplo: con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>1</mn></mrow></math> eV y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>1000</mn></mrow></math> K: <math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><mi>k</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mn>0.025</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>/</mi><mn>300</mn><mrow><mtext mathvariant=\"normal\">K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>1000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>0.0833</mn></mfrac><mo>≈</mo><mn>12</mn><mo>≫</mo><mn>1</mn><mo>,</mo></mrow></math> es decir, estamos en el régimen de temperaturas bajas."
      },
      {
       "mota": "testua",
       "html": "a) (continuación) <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><mi>k</mi><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> Para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≪</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mi>T</mi></math> altas): <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>1</mn></mrow></math>, luego <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msup><mi>T</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mn>0</mn></mrow></math> conforme <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mi>∞</mi></mrow></math>. Para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≫</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mi>T</mi></math> bajas): <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>, luego <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><msup><mi>T</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>. Esta forma de <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (anomalía de Schottky) es típica de sistemas cuya energía total está acotada: el decrecimiento exponencial a bajas temperaturas se debe a la cuantización, y a altas temperaturas el sistema no puede seguir absorbiendo energía indefinidamente, por lo que <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cae como <math display=\"inline\"><msup><mi>T</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Septiembre 2006",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) Considérese la colisión Compton de un fotón de longitud de onda <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math> y un electrón libre moviéndose con momento de módulo <math display=\"inline\"><mi>P</mi></math> en la misma dirección y sentido que el fotón incidente."
      },
      {
       "mota": "testua",
       "html": "a) Deducir, para este caso, la expresión que relaciona la longitud de onda del fotón saliente con el ángulo de dispersión. ¿Qué ocurre si el electrón se mueve en sentido opuesto al del fotón?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es el máximo valor que puede tomar el momento del electrón después de la colisión? Compárese con el electrón en reposo. Calcular en este caso la longitud de onda de la radiación incidente si el ángulo de dispersión del fotón es <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y el momento del electrón de retroceso es <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Método: en el sistema de referencia propio del electrón (que se mueve con <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> respecto al laboratorio), la frecuencia del fotón incidente aparece desplazada por efecto Doppler relativista: <math display=\"block\"><mrow><msub><mi>ν</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>ν</mi><mn>0</mn></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>β</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>β</mi></mrow></mfrac></msqrt><msub><mi>λ</mi><mn>0</mn></msub></mrow></math> (electrón moviéndose en el mismo sentido que el fotón). En ese sistema el electrón está en reposo, así que aplica la fórmula estándar de Compton: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Sustituyendo <math display=\"inline\"><msub><mi>λ</mi><msup><mn>0</mn><mo>′</mo></msup></msub></math>: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (mismo sentido). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Si el electrón se mueve en sentido opuesto al fotón, el signo de <math display=\"inline\"><mi>β</mi></math> se invierte: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><msub><mi>λ</mi><mn>0</mn></msub><msqrt><mfrac><mrow><mn>1</mn><mo>−</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></msqrt><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (sentido opuesto). </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Para esta parte se compara con el caso estándar (electrón inicialmente en reposo). El momento de retroceso del electrón es máximo cuando el fotón retrodispersa (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>), caso en que el desplazamiento Compton es máximo, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mn>2</mn><mi>h</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y por conservación del momento <math display=\"inline\"><mrow><msub><mi>P</mi><mrow><mi>e</mi><mo>,</mo><mtext mathvariant=\"normal\">max</mtext></mrow></msub><mo>=</mo><mi>p</mi><mo>+</mo><msup><mi>p</mi><mo>′</mo></msup><mo>=</mo><mi>h</mi><mi>/</mi><msub><mi>λ</mi><mn>0</mn></msub><mo>+</mo><mi>h</mi><mi>/</mi><msup><mi>λ</mi><mo>′</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Cálculo numérico incompleto",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cálculo numérico final de b) (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, momento de retroceso <math display=\"inline\"><mn>100</mn></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>, hallar <math display=\"inline\"><msub><mi>λ</mi><mn>0</mn></msub></math>) no se pudo transcribir con fiabilidad: la fuente manuscrita corta la última línea de cuentas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(5 puntos) En un experimento de tipo Franck-Hertz en el que se ha sustituido el mercurio por hidrógeno atómico, se aprecian máximos pronunciados en la corriente que circula por el galvanómetro para los valores del potencial acelerador <math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV y <math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV, y si se analiza espectroscópicamente la radiación emitida se observan 3 líneas espectrales. Explicar estos resultados."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Niveles del hidrógeno: <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV, luego <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mn>13.6</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>3.4</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1.51</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>0.85</mn></mrow></math> eV."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: corresponde a la excitación <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>V</mi><mn>2</mn></msub><mo>=</mo><mn>12.09</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub></mrow></math>: corresponde a la excitación <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math> (posible en colisión directa con suficiente energía)."
      },
      {
       "mota": "testua",
       "html": "Desde <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>, el átomo puede desexcitarse en cascada de tres formas: <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>1</mn></mrow></math> (emite <math display=\"inline\"><mn>12.09</mn></math> eV), <math display=\"inline\"><mrow><mn>3</mn><mo>→</mo><mn>2</mn></mrow></math> (emite <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mn>1.89</mn></mrow></math> eV) y, tras llegar a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mo>→</mo><mn>1</mn></mrow></math> (emite <math display=\"inline\"><mn>10.2</mn></math> eV). Esas son exactamente las 3 líneas espectrales observadas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) Una partícula de masa <math display=\"inline\"><mi>m</mi></math> está confinada en una región unidimensional de anchura <math display=\"inline\"><mi>a</mi></math>. Usando el principio de incertidumbre, obtener una expresión para la energía mínima de la partícula. Calcular el valor de esta energía mínima para <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm, y para un electrón en una región de <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math>, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>≥</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tomando el valor mínimo, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Para <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> g <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math> kg y <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>10</mn></mrow></math> cm <math display=\"inline\"><mrow><mo>=</mo><mn>0.1</mn></mrow></math> m: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>64</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Para un electrón (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>≈</mo><mn>9.11</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg), <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0.1</mn></mrow></math> nm <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup></mrow></math> m: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>1.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>∼</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos)"
      },
      {
       "mota": "testua",
       "html": "a1) Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se encuentra para <math display=\"inline\"><mrow><mi>t</mi><mo>&lt;</mo><mn>0</mn></mrow></math> en el estado fundamental de un pozo infinito centrado en el origen y de anchura <math display=\"inline\"><mi>a</mi></math> (paredes en <math display=\"inline\"><mrow><mi>±</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>). Repentinamente, en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, el pozo cambia a una anchura <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>. Justo después del cambio, la función de onda es la misma que la anterior. Representar esquemáticamente la función de onda antes y después del cambio. Si se mide la energía justo después del cambio, ¿cuál es la probabilidad de que se encuentre el valor de la energía del estado fundamental del nuevo pozo?"
      },
      {
       "mota": "testua",
       "html": "a2) Supongamos que en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> las paredes del pozo se retiran (partícula libre para <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>), con la misma condición inicial: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = estado fundamental del pozo original. Usando las autofunciones del momento <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt><msup><mi>e</mi><mrow><mi>i</mi><mi>p</mi><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "a&#x27;) Desarrollar <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mi>p</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi></mrow></math> y encontrar la distribución de probabilidad de momentos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b&#x27;) Dibujar un esquema de esa distribución, indicando dónde tiene un máximo."
      },
      {
       "mota": "testua",
       "html": "c&#x27;) Escribir una expresión integral para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>a1)</strong> Estado fundamental del pozo original (anchura <math display=\"inline\"><mi>a</mi></math>, centrado en 0): <math display=\"inline\"><mrow><msub><mi>ψ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mi>a</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> (par, sin nodos). Justo después del cambio, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msup><mn>0</mn><mo>+</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene esa misma forma en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y es cero en el resto del nuevo pozo (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mo>,</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>) — la función de onda no ha tenido tiempo de cambiar, solo el potencial."
      },
      {
       "mota": "testua",
       "html": "Autoestados del nuevo pozo (anchura <math display=\"inline\"><mrow><mn>2</mn><mi>a</mi></mrow></math>): <math display=\"block\"><mrow><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> impar</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>a</mi></msqrt></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> par</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Desarrollando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msub><mi>ψ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>ψ</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> (la integral se reduce a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> porque <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es cero fuera de ahí). Calculando la integral de solape para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> (usando el producto de cosenos), se obtiene <math display=\"block\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>4</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>32</mn><mrow><mn>9</mn><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>0.36</mn><mo>,</mo></mrow></math> que es la probabilidad pedida de medir la energía del nuevo estado fundamental."
      },
      {
       "mota": "testua",
       "html": "<strong>a2)</strong> <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>p</mi><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>p</mi><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Descomponiendo el coseno en exponenciales y resolviendo la integral (reduciendo los límites de integración por paridad), se obtiene una suma de dos términos tipo seno cardinal: <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msqrt><mrow><mi>π</mi><mi>ħ</mi></mrow></msqrt></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>+</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>π</mi><mi>/</mi><mi>a</mi><mo>+</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><mi>ħ</mi></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mi>a</mi><mo>−</mo><mi>p</mi><mi>/</mi><mi>ħ</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (término simétrico)</mtext></mrow><mi>.</mi></mrow></math> Cada término tiene la forma de un seno cardinal al cuadrado, con máximos en <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>ħ</mi><mi>/</mi><mi>a</mi></mrow></math> (donde el denominador se anula pero el límite es finito, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi mathvariant=\"normal\">Δ</mi><mo>→</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>). El esquema es una función tipo <math display=\"inline\"><msup><mtext mathvariant=\"normal\">sinc</mtext><mn>2</mn></msup></math> con dos lóbulos principales centrados en <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>±</mi><mi>π</mi><mi>ħ</mi><mi>/</mi><mi>a</mi></mrow></math> y lóbulos secundarios decrecientes."
      },
      {
       "mota": "testua",
       "html": "<strong>c&#x27;)</strong> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi><mi>ħ</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>x</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>p</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Una partícula de masa <math display=\"inline\"><mi>m</mi></math> en un potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se encuentra en el estado descrito por la función de onda: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>m</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>ħ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>a</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Calcular en términos de <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>m</mi></math> y constantes fundamentales:"
      },
      {
       "mota": "testua",
       "html": "a) La energía de la partícula."
      },
      {
       "mota": "testua",
       "html": "b) El potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Qué tipo de potencial es?"
      },
      {
       "mota": "testua",
       "html": "c) La constante de normalización <math display=\"inline\"><mi>A</mi></math>."
      },
      {
       "mota": "testua",
       "html": "d) Los valores de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "e) Los valores de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f) A partir de los valores anteriores, el límite impuesto por el principio de incertidumbre."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Comparando con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>E</mi><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup></mrow></math>: <math display=\"inline\"><mrow><mi>E</mi><mi>/</mi><mi>ħ</mi><mo>=</mo><mi>a</mi></mrow></math>, luego <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>a</mi><mi>ħ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>m</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>ħ</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>a</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>ħ</mi></mfrac><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>φ</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>ħ</mi></mfrac><mo>+</mo><mfrac><mrow><mn>4</mn><msup><mi>m</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow><msup><mi>ħ</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Sustituyendo en la ecuación de Schrödinger independiente del tiempo, <math display=\"inline\"><mrow><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>φ</mi><mo>″</mo></msup><mo>+</mo><mi>V</mi><mi>φ</mi><mo>=</mo><mi>E</mi><mi>φ</mi></mrow></math>: <math display=\"block\"><mrow><mi>ħ</mi><mi>a</mi><mi>φ</mi><mo>−</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>φ</mi><mo>+</mo><mi>V</mi><mi>φ</mi><mo>=</mo><mi>a</mi><mi>ħ</mi><mi>φ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Comparando con <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>4</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. Es un potencial armónico."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>φ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>m</mi><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><msqrt><mfrac><mrow><mi>π</mi><mi>ħ</mi></mrow><mrow><mn>2</mn><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>m</mi><mi>a</mi></mrow><mrow><mi>π</mi><mi>ħ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (integrando impar). Usando <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mi>π</mi></msqrt><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>α</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> con <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>a</mi><mi>/</mi><mi>ħ</mi></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>ħ</mi><mrow><mn>4</mn><mi>m</mi><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mi>ħ</mi><mrow><mn>4</mn><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Con <math display=\"inline\"><mrow><mi>p</mi><mo>→</mo><mi>−</mi><mi>i</mi><mi>ħ</mi><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (integrando impar tras la sustitución). Para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, usando <math display=\"inline\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mo>→</mo><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>∂</mi><mn>2</mn></msup><mi>/</mi><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> y la misma integral gaussiana: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>ħ</mi><mi>m</mi><mi>a</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><msqrt><mrow><mi>ħ</mi><mi>m</mi><mi>a</mi></mrow></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "f) <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><msqrt><mfrac><mi>ħ</mi><mrow><mn>4</mn><mi>m</mi><mi>a</mi></mrow></mfrac></msqrt><msqrt><mrow><mi>ħ</mi><mi>m</mi><mi>a</mi></mrow></msqrt><mo>=</mo><mfrac><mi>ħ</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> es decir, este estado <strong>satura</strong> el principio de incertidumbre (es un estado de incertidumbre mínima, como corresponde a un paquete gaussiano)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) La separación típica entre los niveles de energía de un átomo es del orden de 1 eV. Para un gas de átomos ideales a temperatura ambiente, con dos niveles de energía no degenerados separados 1 eV, calcular la razón entre el número de átomos en el estado excitado respecto a los átomos en el estado fundamental. Para el átomo de hidrógeno, ¿a qué temperatura tendríamos el 10% de los átomos en el primer nivel excitado?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><mfrac><msub><mi>N</mi><mn>2</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn><mtext mathvariant=\"normal\">eV</mtext><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> A temperatura ambiente (<math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>293</mn></mrow></math> K, <math display=\"inline\"><mrow><mi>k</mi><mi>T</mi><mo>≈</mo><mn>0.0253</mn></mrow></math> eV): <math display=\"block\"><mrow><mi>n</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>0.0253</mn></mrow></msup><mo>≈</mo><mn>6.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Para hidrógeno, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>10.2</mn></mrow></math> eV, despejando <math display=\"inline\"><mi>T</mi></math> de la condición <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0.1</mn><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>10.2</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1.38</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mi>T</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>≈</mo><mn>70</mn><mspace width=\"0.167em\"></mspace><mn>876</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Grado de simplificación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El cálculo de 6b) trata el hidrógeno como un sistema de dos niveles no degenerados (igual que en el enunciado general de a), sin incluir explícitamente el factor de degeneración <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>4</mn></mrow></math> del nivel <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> del hidrógeno real; se transcribe tal cual aparece en la fuente."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Junio 2008",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) En el experimento de Rutherford un haz de partículas <math display=\"inline\"><mi>α</mi></math> incide sobre una fina lámina de oro."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el cociente entre: partículas dispersadas bajo un anillo de espesor <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi></mrow></math> a <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math> y partículas dispersadas bajo un anillo de espesor <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi></mrow></math> a <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Explicar en una o dos frases qué es la sección eficaz diferencial."
      },
      {
       "mota": "testua",
       "html": "c) Explicar en una o dos frases cuál es la característica importante del resultado del experimento de Rutherford y las conclusiones que pueden extraerse sobre la estructura del átomo."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) El número de partículas dispersadas a <math display=\"inline\"><mi>θ</mi></math> es proporcional a <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y el área del anillo de anchura <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi></mrow></math> es <math display=\"inline\"><mrow><mn>2</mn><mi>π</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>d</mi><mi>θ</mi></mrow></math>. De aquí, la relación de partículas dispersadas a dos ángulos <math display=\"inline\"><mi>θ</mi></math> y <math display=\"inline\"><msup><mi>θ</mi><mo>′</mo></msup></math> es <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msup><mi>θ</mi><mo>′</mo></msup></mrow></mfrac><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>θ</mi><mo>′</mo></msup><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mn>2.95</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) La sección eficaz diferencial <math display=\"inline\"><mrow><mi>d</mi><mi>σ</mi><mi>/</mi><mi>d</mi><mi mathvariant=\"normal\">Ω</mi></mrow></math> expresa el flujo de partículas dispersadas por unidad de ángulo sólido respecto al flujo incidente por unidad de área."
      },
      {
       "mota": "testua",
       "html": "c) Alto número de partículas <math display=\"inline\"><mi>α</mi></math> dispersadas por una lámina de Au a altos ángulos. Esto implica una concentración de la carga positiva en un volumen mucho menor que el del átomo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) Al iluminar una masa de hidrógeno que contiene cierta cantidad de deuterio (<math display=\"inline\"><mrow><msup><mrow></mrow><mn>2</mn></msup><mi>H</mi></mrow></math>) y tritio (<math display=\"inline\"><mrow><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi></mrow></math>) se observa que, en el espectro de absorción, las rayas correspondientes al H han sufrido desdoblamiento (efecto isotópico)."
      },
      {
       "mota": "testua",
       "html": "a) Discutir el origen y el valor de estos desdoblamientos (considerar por ejemplo el desdoblamiento de la primera línea de la serie de Lyman debido a la presencia del deuterio)."
      },
      {
       "mota": "testua",
       "html": "b) Estimar la separación entre la primera línea de la serie de Lyman del hidrógeno H y de su isótopo (<math display=\"inline\"><mrow><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi></mrow></math>)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La masa reducida viene dada por <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>M</mi><mi>p</mi></msub><msub><mi>m</mi><mi>e</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Para los isótopos, la masa reducida varía y con ella el coeficiente <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mi>/</mi><msub><mi>m</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>R</mi><mi>∞</mi></msub></mrow></math> cambia, dando lugar a diferentes longitudes de onda <math display=\"inline\"><mi>λ</mi></math> de emisión según el isótopo de donde proceda: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>M</mi><mi>p</mi></msub><mrow><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msub><mi>R</mi><mi>∞</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>2</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>M</mi><mi>p</mi></msub></mrow><mrow><mn>2</mn><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msub><mi>R</mi><mi>∞</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>M</mi><mi>p</mi></msub></mrow><mrow><mn>3</mn><msub><mi>M</mi><mi>p</mi></msub><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msub><mi>R</mi><mi>∞</mi></msub><mi>.</mi></mrow></math> Para la primera línea de la serie de Lyman: <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mfrac><mn>1</mn><mi>λ</mi></mfrac><mo>′</mo></msup><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>2</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mn>2</mn><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><msub><mi>M</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>30</mn></mrow></msup></mrow></math> kg y <math display=\"inline\"><mrow><msub><mi>R</mi><mi>∞</mi></msub><mo>=</mo><mn>0.01098</mn></mrow></math> nm<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.008231</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><msup><mi>λ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.008236</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> nm</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math> La diferencia en longitud de onda es <math display=\"inline\"><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>λ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mrow></mrow><mn>3</mn></msup><mi>H</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.04</mn></mrow></math> nm."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) La siguiente gráfica representa un autoestado sin normalizar <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del hamiltoniano correspondiente a un electrón: nula para <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, sinusoidal con dos máximos y dos mínimos (amplitud decreciente) entre <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>4</mn></mrow></math> Å, y decayendo suavemente de la forma <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><mi>x</mi></mrow></msup></math> para <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>4</mn></mrow></math> Å. Las líneas verticales en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>4</mn></mrow></math> Å separan tres zonas en las que la energía potencial asociada al electrón es constante en cada una. Tomando medidas directas de esta gráfica, calcular el valor de la energía <math display=\"inline\"><mi>E</mi></math> asociada a esta autofunción, y las expresiones analíticas de la energía potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y de la función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La función de onda corresponde a un electrón en un pozo de potencial: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≥</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi>E</mi><mo>&lt;</mo><msub><mi>V</mi><mn>0</mn></msub></mrow></math>. Para este tipo de potencial: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><msub><mi mathvariant=\"normal\">Ψ</mi><mi>I</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac><mo>;</mo></mrow></math> <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mtext mathvariant=\"normal\">II </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mo>′</mo></msup><mi>x</mi></mrow></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≥</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mi>.</mi></mrow></math> Aplicando las condiciones de contorno <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>I</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><mi>I</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"normal\">Ψ</mi><mrow><mtext mathvariant=\"normal\">II </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Ψ</mi><msup><mi>I</mi><mo>′</mo></msup></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mi mathvariant=\"normal\">Ψ</mi><mtext mathvariant=\"normal\">II</mtext><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>4</mn></mrow></math> Å, se obtiene <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><msup><mi>k</mi><mo>′</mo></msup><mi>a</mi></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Esta última relación permite obtener numéricamente los posibles valores de <math display=\"inline\"><mi>E</mi></math> o de <math display=\"inline\"><msub><mi>V</mi><mn>0</mn></msub></math>: <math display=\"block\"><mrow><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "A partir de las medidas de la gráfica, en la región I <math display=\"inline\"><mrow><mi>λ</mi><mo>≈</mo><mn>2.1</mn></mrow></math> Å, luego <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mn>2.1</mn><mo>=</mo><mn>0.95</mn><mi>π</mi></mrow></math> Å<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>. De ahí se estima la energía: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>k</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><mo>≈</mo><mn>2.16</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>16</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>1000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> La función de onda viene dada por <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0.95</mn><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (sin normalizar, con <math display=\"inline\"><mi>x</mi></math> en Å). A partir de <math display=\"inline\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el valor de <math display=\"inline\"><mi>E</mi></math> obtenido, se calcula <math display=\"block\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>≈</mo><mn>6.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>16</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>4000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> Este cálculo es muy sensible al valor que se mida para <math display=\"inline\"><mi>λ</mi></math>, que en todo caso debe ser mayor que 2 Å."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se encuentra en un pozo infinito unidimensional de anchura <math display=\"inline\"><mi>a</mi></math> descrito por el potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> para <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi></mrow></math> en otro caso. Supongamos que en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> la partícula se encuentra localizada en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi><mi>/</mi><mn>4</mn></mrow></math> y descrita por: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>4</mn><mi>a</mi></mfrac></msqrt><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>a</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> en otro caso</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Si se mide la energía, ¿qué valores se observan y con qué probabilidad? ¿Existen autovalores de la energía que no se observan nunca?"
      },
      {
       "mota": "testua",
       "html": "b) Dar una expresión del valor esperado del inverso de la energía <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mn>1</mn><mi>/</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es un autoestado; se expresa como combinación de los autoestados del pozo, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup></mrow></math>. Los coeficientes: <math display=\"block\"><mrow><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>4</mn></mrow></msubsup><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><msqrt><mfrac><mn>4</mn><mi>a</mi></mfrac></msqrt><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>4</mn></mrow></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><msqrt><mn>2</mn></msqrt></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Las probabilidades de medir cada <math display=\"inline\"><msub><mi>E</mi><mi>n</mi></msub></math> son <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>32</mn><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>8</mn><mi>m</mi></mrow></math> (<math display=\"inline\"><mi>m</mi></math> entero), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mrow><mn>8</mn><mi>m</mi></mrow></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>: los valores de energía con <math display=\"inline\"><mi>n</mi></math> múltiplo de 8 nunca se medirán."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo>∑</mo><mfrac><mn>32</mn><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>16</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>∑</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mfrac><mn>1</mn><mi>E</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mi>n</mi></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mfrac><mn>1</mn><msub><mi>E</mi><mi>n</mi></msub></mfrac><mo>=</mo><mfrac><mrow><mn>64</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><msup><mi>π</mi><mn>4</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mo>∑</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.167</mn><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> usando la fórmula dada <math display=\"inline\"><mrow><mn>32</mn><mi>/</mi><msup><mi>π</mi><mn>2</mn></msup><msubsup><mo>∑</mo><mn>1</mn><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>n</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>4</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.167</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Considerar un sistema formado por <math display=\"inline\"><mi>N</mi></math> dipolos distinguibles con momento dipolar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>. Al aplicar un campo eléctrico <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>, la energía electrostática asociada al momento dipolar es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>p</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. En nuestro sistema consideraremos la aproximación en la que los dipolos son paralelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) o anti-paralelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) al campo eléctrico aplicado. Obtener una expresión para el momento dipolar total <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></msubsup><msub><mi>p</mi><mi>i</mi></msub></mrow></math> a partir de la expresión: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>F</mi></math> es la energía libre del sistema."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con solo dos orientaciones, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>, cada una lleva asociado un nivel de energía <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>±</mi><mi>p</mi><mi>E</mi></mrow></math>. La función de partición (por dipolo) es <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La energía libre de Helmholtz: <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> y de ahí: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub><mo>=</mo><mi>N</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Junio 2010",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) Un alumno pretende analizar el comportamiento cuántico de un pequeño oscilador, que consiste en un objeto de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></math> g de masa que vibra con una amplitud máxima de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></math> cm a la frecuencia de 1000 Hz."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es aproximadamente el número cuántico del sistema en el estado descrito?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la energía (en eV) de su estado fundamental? Comparar este valor con la energía cinética promedio de una molécula de oxígeno a temperatura ambiente."
      },
      {
       "mota": "testua",
       "html": "c) ¿Cuál sería su amplitud en el estado fundamental si se describe como un oscilador clásico?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math> m, <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mn>1000</mn></mrow></math> Hz."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>A</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mn>6.62</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>n</mi><mo>≈</mo><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><mo>×</mo><msup><mn>10</mn><mn>12</mn></msup><mo>=</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mn>13</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El estado fundamental corresponde a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>h</mi><mi>ν</mi><mo>=</mo><mn>3.3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>O</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≈</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msub><mi>E</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>ω</mi><mn>2</mn></msup><msup><mi>A</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>0.04</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) En un átomo de Bohr ficticio el electrón está sometido a un potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>C</mi><mi>/</mi><msup><mi>r</mi><mn>6</mn></msup></mrow></math>. Utilizar la condición de cuantización del momento angular de una órbita circular, inicialmente propuesta por Bohr, para obtener los niveles de energía correspondientes a los diferentes valores del número cuántico <math display=\"inline\"><mi>n</mi></math>. Expresar los resultados en términos de <math display=\"inline\"><mi>C</mi></math>, <math display=\"inline\"><mi>m</mi></math> y <math display=\"inline\"><mi>ħ</mi></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Las ecuaciones básicas son: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mi>C</mi><msup><mi>r</mi><mn>6</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><mi>C</mi></mrow><msup><mi>r</mi><mrow><mn>7</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Combinando ambas: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>C</mi></mrow><msup><mi>r</mi><mrow><mn>6</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Por otra parte, la cuantización de Bohr <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mi>m</mi><mi>v</mi><mi>r</mi><mo>=</mo><mi>n</mi><mi>ħ</mi></mrow></math> da <math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>=</mo><mfrac><msqrt><mrow><mn>6</mn><mi>C</mi><mi>m</mi></mrow></msqrt><mrow><mi>n</mi><mi>ħ</mi></mrow></mfrac><mi>.</mi></mrow></math> De ahí: <math display=\"block\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>C</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>C</mi><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow></mfrac><msup><mi>n</mi><mn>3</mn></msup><msup><mi>ħ</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar una función de onda normalizada <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, tal que los valores esperados <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> y <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> son constantes. Se define una nueva función de onda: <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> es real."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el valor esperado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> para la nueva función <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Expresar el resultado en términos de las cantidades anteriores."
      },
      {
       "mota": "testua",
       "html": "b) Calcular el valor esperado <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> para la función <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, también en términos de cantidades definidas en el enunciado."
      },
      {
       "mota": "testua",
       "html": "c) Describir en dos o tres líneas el significado físico del resultado de aplicar el factor <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a la función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msubsup><mi mathvariant=\"normal\">Φ</mi><mn>1</mn><mo>*</mo></msubsup><mfrac><mi>ħ</mi><mi>i</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mfrac><mi>ħ</mi><mi>i</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mfrac><mi>ħ</mi><mi>i</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>i</mi><mfrac><msub><mi>p</mi><mn>1</mn></msub><mi>ħ</mi></mfrac><mo>+</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>p</mi><mn>1</mn></msub><mo>+</mo><msub><mi>p</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo>∫</mo><msubsup><mi mathvariant=\"normal\">Φ</mi><mn>1</mn><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>x</mi><msub><mi mathvariant=\"normal\">Φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>*</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mi>x</mi><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>x</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) El significado físico de aplicar el factor <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>i</mi><msub><mi>p</mi><mn>1</mn></msub><mi>x</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a la función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es desplazar en <math display=\"inline\"><msub><mi>p</mi><mn>1</mn></msub></math> el origen de la función de onda en el espacio de momentos, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Una partícula se encuentra atrapada en el siguiente potencial unidimensional: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Supongamos que sólo existe un estado ligado (el estado fundamental), que precisamente corresponde a una energía <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Esquematizar la función de onda del estado fundamental señalando los límites del pozo."
      },
      {
       "mota": "testua",
       "html": "b) Demuestra que en este caso <math display=\"inline\"><mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></msqrt><mi>a</mi><mi>/</mi><mi>ħ</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Nota del enunciado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado añade: dada la simetría del problema, para determinar los coeficientes en la función de onda del estado fundamental, conviene considerar que esta función de onda es simétrica (par), lo que reduce considerablemente el número de constantes a determinar."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una función par, máxima en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, oscilante (cosenoidal) dentro del pozo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi></mrow></math> y decayendo exponencialmente fuera, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Las ecuaciones de Schrödinger para las dos regiones son <math display=\"block\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>+</mo><msub><mi>V</mi><mn>0</mn></msub><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Φ</mi><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>=</mo><mi>E</mi><mi mathvariant=\"normal\">Φ</mi><mspace width=\"0.222em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Solución para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>a</mi></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>x</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>−</mi><mi>a</mi></mrow></math>), <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>x</mi></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>a</mi></mrow></math>), con <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>. Para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>a</mi></mrow></math>, por simetría (par): <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mi>E</mi></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>. La condición de contorno en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> da la relación <math display=\"inline\"><mrow><mi>q</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>: <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mo>=</mo><mfrac><msqrt><mrow><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>V</mi><mn>0</mn></msub><mo>−</mo><mi>E</mi><mo>=</mo><mn>3</mn><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn></mrow></math>: <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mi>ħ</mi></mfrac><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac></mrow></math>. Sustituyendo en <math display=\"inline\"><mrow><mi>q</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><msqrt><mrow><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msqrt><mrow><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></msqrt><mi>ħ</mi></mfrac><mo>,</mo></mrow></math> de donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mn>3</mn></msqrt></mrow></math>, es decir <math display=\"inline\"><mrow><mi>q</mi><mi>a</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>3</mn></mrow></math> (estado fundamental). Sustituyendo <math display=\"inline\"><mi>q</mi></math>, esto equivale a <math display=\"block\"><mrow><msqrt><mrow><mn>2</mn><mi>m</mi><msub><mi>V</mi><mn>0</mn></msub></mrow></msqrt><mfrac><mi>a</mi><mi>ħ</mi></mfrac><mo>=</mo><mn>2</mn><mfrac><mi>π</mi><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Considerar un sistema formado por un número <math display=\"inline\"><mi>N</mi></math> grande de osciladores cuánticos independientes y de la misma frecuencia <math display=\"inline\"><mi>ω</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) Supongamos que inicialmente todos los osciladores se encuentran en el estado con número cuántico <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>. Calcular la energía del sistema. Justificar que este estado inicial no puede tratarse de un estado de equilibrio térmico."
      },
      {
       "mota": "testua",
       "html": "b) En un instante posterior, el sistema evoluciona completamente aislado de su entorno hasta alcanzar el equilibrio térmico. Calcular dicha temperatura de equilibrio en función de <math display=\"inline\"><mi>ω</mi></math> y constantes fundamentales."
      },
      {
       "mota": "testua",
       "html": "Ayuda: suma de una progresión geométrica infinita <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Para un conjunto de <math display=\"inline\"><mi>N</mi></math> osciladores armónicos cuánticos: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ħ</mi><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>7</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> La configuración de equilibrio a cada temperatura se corresponde con la distribución que da lugar al mayor número de microestados. La distribución actual, con todos los osciladores en un único nivel (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>), da lugar a un número mínimo de microestados, por lo que NO corresponde a un estado de equilibrio."
      },
      {
       "mota": "testua",
       "html": "b) La función de partición de un oscilador: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munderover><mo>∑</mo><mn>0</mn><mo accent=\"false\">∞</mo></munderover><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>n</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>∑</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> La suma es una progresión geométrica, luego <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> De ahí la energía: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><mi>ħ</mi><mi>ω</mi><mo>+</mo><mfrac><mrow><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>7</mn><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow><mn>2</mn></mfrac><mo>,</mo></mrow></math> de donde se obtiene <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Junio 2011",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Una lámpara de luz ultravioleta (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2500</mn></mrow></math> Å) de 1 W de potencia está a 10 m de una placa de cesio de 10 cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math> de área, de forma que la luz incide perpendicularmente a la placa. Si se supone que cada fotón que llega a la placa extrae un electrón:"
      },
      {
       "mota": "testua",
       "html": "a) Calcular el número de electrones emitidos por segundo."
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la energía máxima de los electrones emitidos si el trabajo de extracción del Cs es de 1.9 eV?"
      },
      {
       "mota": "testua",
       "html": "c) ¿Cómo varían las magnitudes calculadas anteriormente si la luz incide oblicuamente bajo un ángulo de <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> respecto a la normal de la placa?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La placa de Cs recibe la fracción proporcional <math display=\"inline\"><mrow><mi>A</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>10</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mo>×</mo><mn>100</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Dividiendo por la energía de un fotón UV, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi><mo>=</mo><mn>7.944</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>5</mn></mrow></math> eV, se obtienen <math display=\"inline\"><mrow><mn>1</mn><mo>×</mo><msup><mn>10</mn><mn>11</mn></msup></mrow></math> fotones/s sobre la placa. Con un electrón por fotón, esto da la misma cantidad de electrones/s, es decir, una corriente de <math display=\"inline\"><mrow><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> A."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mi>W</mi><mo>+</mo><mi>K</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>K</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>ε</mi><mo>−</mo><mi>W</mi><mo>=</mo><mn>5</mn><mo>−</mo><mn>1.9</mn><mo>=</mo><mn>3.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Si la luz incide bajo un ángulo <math display=\"inline\"><mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, la proyección del campo eléctrico es <math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>30</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, y como <math display=\"inline\"><mrow><mi>I</mi><mo>∝</mo><msup><mi>E</mi><mn>2</mn></msup></mrow></math>, la intensidad que recibe la placa se ve afectada en el factor <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mn>30</mn><msup><mi></mi><mo>∘</mo></msup><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>. Por tanto, la corriente de electrones se reduce también en ese factor <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>4</mn></mrow></math>. La energía cinética máxima de los electrones NO varía (depende solo de <math display=\"inline\"><mi>λ</mi></math>)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) La función de onda unidimensional de una partícula libre está dada por la superposición de ondas planas. La amplitud de la onda armónica de número de onda <math display=\"inline\"><mi>k</mi></math> es: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>&lt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>a</mi></mrow></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>a</mi></mrow></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Calcular la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Dibujar la función densidad de probabilidad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>. Hacer una estimación del valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>. ¿Qué significado físico tiene el parámetro <math display=\"inline\"><mi>a</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "c) Hacer una estimación del valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>. Estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math> y verificar si está de acuerdo con el principio de incertidumbre de Heisenberg. Comentar el resultado."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad de encontrar a la partícula en el intervalo <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msqrt><mrow><mn>2</mn><mi>a</mi></mrow></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>a</mi></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>a</mi></mrow></msqrt><mrow><mi>a</mi><mo>−</mo><mi>i</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi></mrow><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Es una lorentziana centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. La anchura se estima por el valor de <math display=\"inline\"><mi>x</mi></math> a media altura de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>2</mn><mi>a</mi></mrow></math> El parámetro <math display=\"inline\"><mi>a</mi></math> es, por tanto, directamente la escala de longitud de localización del paquete de ondas."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>k</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Sustituyendo: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><msqrt><mrow><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></msqrt><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>a</mi></mrow></mfrac><mi>.</mi></mrow></math> (También puede estimarse <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> a partir del valor de <math display=\"inline\"><mi>k</mi></math> para el que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> decae en el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>e</mi></mrow></math>: <math display=\"inline\"><mrow><msub><mi>k</mi><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>, dando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mi>a</mi></mrow></math>.) La aplicación del principio de incertidumbre da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mn>2</mn><mi>ħ</mi></mrow></math>, consistente con (mayor que) el límite de Heisenberg <math display=\"inline\"><mrow><mi>ħ</mi><mi>/</mi><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>a</mi><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mfrac><mn>1</mn><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arctan</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mn>1</mn></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar un volumen <math display=\"inline\"><mi>V</mi></math> de sodio (valencia <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>), cuyos electrones de conducción pueden considerarse como un gas."
      },
      {
       "mota": "testua",
       "html": "a) Describir mediante un esquema la distribución de los electrones de conducción en los niveles de energía a muy baja temperatura. Explicar brevemente las principales características del esquema."
      },
      {
       "mota": "testua",
       "html": "b) Obtener la expresión para la energía de Fermi y calcular su valor para el sodio. ¿Para qué temperatura la energía térmica se corresponde con la energía de Fermi?"
      },
      {
       "mota": "testua",
       "html": "c) Demostrar que a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K, la energía promedio de los electrones vale <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Na</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>968</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Na</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>23</mn></mrow></math> u.m.a., <math display=\"inline\"><mn>1</mn></math> u.m.a.<math display=\"inline\"><mrow><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg. <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, los electrones se distribuyen, de acuerdo con el principio de exclusión, ocupando todos los niveles disponibles desde el más bajo hasta agotar todos los electrones. El último nivel alcanzado es el nivel de Fermi."
      },
      {
       "mota": "testua",
       "html": "b) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, todos los niveles hasta el de Fermi están ocupados. El número total de electrones: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mi>V</mi></mrow><mrow><mn>3</mn><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math> Calculando <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mi>V</mi></mrow></math> a partir de la densidad, con un electrón de conducción por átomo: <math display=\"block\"><mrow><mfrac><mi>N</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>968</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg/m</mtext></mrow><mn>3</mn></msup></mrow><mrow><mn>23</mn><mo>×</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow><mi>/</mi><mtext mathvariant=\"normal\">átomo</mtext></mrow></mfrac><mo>=</mo><mn>2.54</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> elec.</mtext></mrow><mi>/</mi><msup><mi>m</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Sustituyendo: <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mn>5.04</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3.14</mn></mrow></math> eV."
      },
      {
       "mota": "testua",
       "html": "c) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, la energía cinética total: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ε</mi><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>∫</mo><mi>ε</mi><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mfrac><mn>2</mn><mn>5</mn></mfrac><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>5</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mi>.</mi></mrow></math> La energía por electrón: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>E</mi><mi>N</mi></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msub><mi>ϵ</mi><mi>F</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Un sistema contiene <math display=\"inline\"><mi>N</mi></math> partículas distinguibles y cada una de ellas se puede encontrar en tres posibles niveles energéticos: <math display=\"inline\"><mrow><mi>−</mi><mi>ε</mi></mrow></math>, <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mi>ε</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) Obtener la expresión de la energía interna del sistema en función de la temperatura."
      },
      {
       "mota": "testua",
       "html": "b) Representar en una misma gráfica las probabilidades de ocupación de cada nivel en función de la temperatura."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La ocupación de cada nivel viene dada por la distribución de Boltzmann. Función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math> Energía interna: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo>∑</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mfrac><mrow><mi>ε</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>0</mn><mo>−</mo><mi>ε</mi><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mi>ε</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) La ocupación de cada nivel: <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>Z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> A temperatura baja, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>1</mn></mrow></math> (todas las partículas en el estado fundamental) y <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math>. Las tres funciones convergen al valor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> a alta temperatura (equipartición entre los tres niveles), con <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en todo momento."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Julio 2011",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de fecha",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El encabezado del PDF de este examen dice, por error del original, &quot;Examen Junio 2011&quot;; por el resto del documento y por su ubicación en la carpeta de exámenes se corresponde con la convocatoria de julio de 2011."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) En el modelo de Bohr para el átomo de hidrógeno se asume que el electrón describe una órbita circular en la que el radio y velocidad del electrón están relacionados de acuerdo con las leyes clásicas de la mecánica. Además, se postula que el momento angular del electrón solamente puede ser un múltiplo entero de la constante reducida de Planck, <math display=\"inline\"><mi>ħ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) Calcular los valores posibles de la energía del sistema. ¿Cómo cambia la expresión si se considera la masa finita del núcleo?"
      },
      {
       "mota": "testua",
       "html": "b) Se hace pasar luz blanca (superposición de todas las longitudes de onda) a través de un recipiente que contiene hidrógeno y deuterio atómicos. El deuterio es un átomo de hidrógeno cuyo núcleo contiene un neutrón además del protón (misma masa que el protón, aproximadamente). Dibujar esquemáticamente el diagrama de absorción de este gas (líneas del espectro de absorción), sabiendo que inicialmente todos los átomos están en su estado fundamental."
      },
      {
       "mota": "testua",
       "html": "c) Calcular la expresión para las longitudes de onda de los fotones absorbidos, <math display=\"inline\"><msubsup><mi>λ</mi><mi>n</mi><mi>H</mi></msubsup></math> y <math display=\"inline\"><msubsup><mi>λ</mi><mi>n</mi><mi>D</mi></msubsup></math>, en la transición <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math> para hidrógeno y deuterio respectivamente."
      },
      {
       "mota": "testua",
       "html": "d) ¿Cuál es la diferencia relativa entre las longitudes de onda emitidas por los dos átomos en la transición <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "e) ¿Cómo se podría determinar la proporción hidrógeno/deuterio del gas?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) De la ecuación de Newton y el postulado de Bohr: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>e</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><mfrac><msup><mi>v</mi><mn>2</mn></msup><mi>r</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mi>r</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>L</mi><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi><mi>v</mi><mo>=</mo><mi>n</mi><mi>ħ</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>n</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> De ahí: <math display=\"block\"><mrow><mi>r</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>e</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>v</mi><mo>=</mo><mfrac><mrow><mi>n</mi><mi>ħ</mi></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mi>n</mi></mrow></mfrac><mi>.</mi></mrow></math> Sustituyendo en la energía: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msub><mi>m</mi><mi>e</mi></msub><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub></mrow></mfrac><mfrac><msup><mi>e</mi><mn>2</mn></msup><mi>r</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>e</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><msup><mi>n</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Para tener en cuenta que la masa del núcleo no es infinita, se sustituye la masa del electrón por la masa reducida: <math display=\"block\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>→</mo><mi>μ</mi><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>e</mi></msub><msub><mi>m</mi><mi>n</mi></msub></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>+</mo><msub><mi>m</mi><mi>n</mi></msub></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El espectro de absorción muestra, para cada isótopo, una serie de líneas convergiendo hacia el límite de ionización (<math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>∞</mi></mrow></math>), con las líneas del deuterio ligeramente desplazadas respecto a las del hidrógeno (en la práctica, tan próximas que aparecen superpuestas como dobletes finos)."
      },
      {
       "mota": "testua",
       "html": "c) En la transición <math display=\"inline\"><mrow><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><mrow><mi>μ</mi><msup><mi>e</mi><mn>4</mn></msup></mrow><mrow><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow><mrow><mi>μ</mi><msup><mi>e</mi><mn>4</mn></msup></mrow></mfrac><mfrac><msup><mi>n</mi><mn>2</mn></msup><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><msub><mi>m</mi><mi>H</mi></msub><mo>=</mo><mn>1835</mn><msub><mi>m</mi><mi>e</mi></msub></mrow></math> (masa del protón): <math display=\"block\"><mrow><msub><mi>μ</mi><mi>H</mi></msub><mo>=</mo><mfrac><mrow><msub><mi>m</mi><mi>e</mi></msub><msub><mi>m</mi><mi>H</mi></msub></mrow><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>+</mo><msub><mi>m</mi><mi>H</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1835</mn><mn>1836</mn></mfrac><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>0.9995</mn><msub><mi>m</mi><mi>e</mi></msub><mo>,</mo></mrow></math> y con <math display=\"inline\"><mrow><msub><mi>m</mi><mi>D</mi></msub><mo>=</mo><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub></mrow></math>: <math display=\"block\"><mrow><msub><mi>μ</mi><mi>D</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>1835</mn></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mo>×</mo><mn>1835</mn></mrow></mfrac><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>0.9997</mn><msub><mi>m</mi><mi>e</mi></msub><mi>.</mi></mrow></math> Las líneas de absorción corresponden entonces a <math display=\"block\"><mrow><msubsup><mi>λ</mi><mi>n</mi><mi>i</mi></msubsup><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>c</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow><mrow><msub><mi>μ</mi><mi>i</mi></msub><msup><mi>e</mi><mn>4</mn></msup></mrow></mfrac><mfrac><msup><mi>n</mi><mn>2</mn></msup><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><mn>896</mn><mfrac><msup><mi>n</mi><mn>2</mn></msup><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>i</mi><mo>=</mo><mi>H</mi><mo>,</mo><mi>D</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msubsup><mi>λ</mi><mi>n</mi><mi>H</mi></msubsup><mo>−</mo><msubsup><mi>λ</mi><mi>n</mi><mi>D</mi></msubsup></mrow><mrow><msubsup><mi>λ</mi><mi>n</mi><mi>H</mi></msubsup><mo>+</mo><msubsup><mi>λ</mi><mi>n</mi><mi>D</mi></msubsup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>H</mi></msub><mo>−</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>D</mi></msub></mrow><mrow><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>H</mi></msub><mo>+</mo><mn>1</mn><mi>/</mi><msub><mi>μ</mi><mi>D</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>μ</mi><mi>D</mi></msub><mo>−</mo><msub><mi>μ</mi><mi>H</mi></msub></mrow><mrow><msub><mi>μ</mi><mi>D</mi></msub><mo>+</mo><msub><mi>μ</mi><mi>H</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msub><mi>m</mi><mi>e</mi></msub><mrow><mn>3</mn><msub><mi>m</mi><mi>e</mi></msub><mo>+</mo><mn>4</mn><msub><mi>m</mi><mi>p</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>3</mn><mo>+</mo><mn>4</mn><mo>×</mo><mn>1835</mn></mrow></mfrac><mo>=</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo>,</mo></mrow></math> independiente de <math display=\"inline\"><mi>n</mi></math>."
      },
      {
       "mota": "testua",
       "html": "e) Midiendo la intensidad relativa de las líneas del espectro correspondientes al hidrógeno y al deuterio: cuanto mayor sea la proporción de un isótopo, más intensas serán sus líneas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Aplicando el principio de incertidumbre, demostrar que la energía mínima de una partícula de masa <math display=\"inline\"><mi>m</mi></math> dentro de un pozo de potencial infinito de anchura <math display=\"inline\"><mi>L</mi></math> viene dada por <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>∼</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Aplicar el resultado del apartado anterior para demostrar que la energía potencial que retiene a un protón en el interior de un núcleo es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> MeV."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><msub><mi>m</mi><mi>p</mi></msub><mo>=</mo><mn>1.67</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>R</mi><mtext mathvariant=\"normal\">núcleo</mtext></msub><mo>=</mo><mn>1.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La mayor incertidumbre de la posición de la partícula dentro del pozo es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> (con <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>L</mi></mrow></math>), luego <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>p</mi><mo>=</mo><mi>ħ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El valor mínimo del momento es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>p</mi></mrow></math>, y de ahí la energía cinética mínima: <math display=\"block\"><mrow><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Considerando el núcleo como un pozo infinito de tamaño <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>2</mn><msub><mi>R</mi><mtext mathvariant=\"normal\">núcleo</mtext></msub></mrow></math> y el protón como una partícula en su interior, del cálculo anterior se obtiene <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>≈</mo><mn>0.88</mn></mrow></math> MeV. Considerando la partícula retenida por un potencial <math display=\"inline\"><mi>V</mi></math> tal que la energía de enlace total es <math display=\"inline\"><mrow><mi>E</mi><mo>−</mo><mi>V</mi></mrow></math>, se estima que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mn>1</mn></mrow></math> MeV aproximadamente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) El <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He líquido es un isótopo del He, con espín <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, y por tanto se comporta como fermiones."
      },
      {
       "mota": "testua",
       "html": "a) Considerando el <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He como un gas perfecto de fermiones cuya densidad es <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0.081</mn></mrow></math> g/cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, calcular su energía de Fermi <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la temperatura <math display=\"inline\"><msub><mi>T</mi><mi>F</mi></msub></math> para la que la energía térmica se corresponde con la energía de Fermi (temperatura a la que aparecen los efectos cuánticos)."
      },
      {
       "mota": "testua",
       "html": "Datos: 1 u.m.a. <math display=\"inline\"><mrow><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg. <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La energía de Fermi se define como el nivel energético más alto ocupado a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. A esa temperatura, la fracción de ocupación por nivel es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> hasta <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><msub><mi>ϵ</mi><mi>F</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msub><msubsup><mo>∫</mo><mn>0</mn><mi>ϵ</mi></msubsup><mi>F</mi></msub><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow><mrow><mn>3</mn><msup><mi>h</mi><mn>3</mn></msup></mrow></mfrac><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mrow><mn>8</mn><mi>π</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mi>V</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>3</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg (masa del <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He) y <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>81</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>: <math display=\"block\"><mrow><mfrac><mi>N</mi><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>81</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg/m</mtext></mrow><mn>3</mn></msup></mrow><mrow><mn>3</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg</mtext></mrow><mi>/</mi><mtext mathvariant=\"normal\">átomo</mtext></mrow></mfrac><mo>=</mo><mfrac><mn>81</mn><mn>4.8</mn></mfrac><mo>×</mo><msup><mn>10</mn><mn>27</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> átomos</mtext></mrow><mi>/</mi><msup><mi>m</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Sustituyendo: <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mn>7.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>4.5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mi>F</mi></msub><mo>=</mo><msub><mi>ϵ</mi><mi>F</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>F</mi></msub><mo>≈</mo><mn>5.2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Aplicamos un campo magnético, <math display=\"inline\"><mi>B</mi></math>, a un cristal que contiene <math display=\"inline\"><mi>N</mi></math> átomos no interactuantes de espín <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>1</mn></mrow></math>. En estas condiciones, la energía de cada átomo puede ser <math display=\"inline\"><mrow><mi>μ</mi><mi>B</mi></mrow></math>, <math display=\"inline\"><mn>0</mn></math> o <math display=\"inline\"><mrow><mi>−</mi><mi>μ</mi><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Obtener la expresión de la energía interna del sistema en función de la temperatura."
      },
      {
       "mota": "testua",
       "html": "b) Representar en una misma gráfica las probabilidades de ocupación de cada nivel en función de la temperatura."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Se trata de un sistema de átomos en un cristal, es decir, partículas distinguibles. Los niveles disponibles para cada átomo son <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>−</mi><mi>μ</mi><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>μ</mi><mi>B</mi></mrow></math>. La ocupación de cada nivel viene dada por la distribución de Boltzmann, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>/</mi><mi>Z</mi></mrow></math> con <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>. La energía interna: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo>∑</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>ε</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi>μ</mi><mi>B</mi><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>B</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>B</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>μ</mi><mi>B</mi></mrow></math>, las ocupaciones son <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>ε</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> Igual que en el ejercicio análogo de Junio 2011: a baja temperatura <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>1</mn></mrow></math> y los otros dos <math display=\"inline\"><mrow><mo>→</mo><mn>0</mn></mrow></math>; las tres funciones convergen a <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math> a alta temperatura."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Junio 2012",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los puntos indican la valoración máxima de cada ejercicio. El planteamiento de cada solución debe incluir una breve explicación o justificación de las fórmulas o ecuaciones empleadas. Los resultados numéricos finales deben incluir sus unidades."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Se realiza el experimento de Franck-Hertz introduciendo un gas monoatómico en la ampolla de vidrio; todos los átomos están en el estado fundamental. Entre los dos extremos del cilindro se aplica una diferencia de potencial <math display=\"inline\"><mi>V</mi></math> variable para acelerar los electrones liberados en el filamento. Al representar la corriente transportada por los electrones en función de <math display=\"inline\"><mi>V</mi></math>, la curva tiene dos primeros mínimos para <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>15.3</mn></mrow></math> V y <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>18.5</mn></mrow></math> V."
      },
      {
       "mota": "testua",
       "html": "a) Hacer un esquema del dispositivo experimental."
      },
      {
       "mota": "testua",
       "html": "b) ¿Por qué ocurren los mínimos de intensidad mencionados?"
      },
      {
       "mota": "testua",
       "html": "c) Alrededor del tubo de vidrio se ha colocado otro dispositivo que mide la longitud de onda emitida por los átomos del gas. ¿Qué longitud o longitudes de onda se medirán?"
      },
      {
       "mota": "testua",
       "html": "d) Responder a la pregunta anterior si en el tubo se aplica una diferencia de potencial <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>12</mn></mrow></math> V. ¿Y si el potencial aplicado es <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>17</mn></mrow></math> V?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "b) Los mínimos ocurren cuando el potencial acelerador es tal que la energía cinética que adquieren los electrones coincide con la diferencia de energía entre niveles de los átomos del gas. En esas condiciones, los electrones ceden toda o parte de su energía a los átomos (que quedan excitados) en el choque, y pierden la energía cinética necesaria para alcanzar el cátodo, por lo que la corriente se reduce. En resumen: los mínimos se corresponden con los potenciales para los que se optimiza la transferencia de energía a los átomos en las colisiones."
      },
      {
       "mota": "testua",
       "html": "c) Los valores 15.3 V y 18.5 V se corresponden con las energías de los dos primeros estados de excitación de los átomos del gas. La transición entre los dos estados excitados emite un fotón de longitud de onda: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>18.5</mn><mo>−</mo><mn>15.3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>3.86</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>7</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>3860</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> Esta longitud de onda corresponde al ultravioleta. Otras longitudes de onda posibles corresponden a las transiciones entre el primer nivel excitado y el fundamental, o entre el segundo nivel excitado y el fundamental, con valores de <math display=\"inline\"><mn>812.5</mn></math> Å y <math display=\"inline\"><mn>672</mn></math> Å respectivamente. Ninguna de estas longitudes de onda corresponde al visible."
      },
      {
       "mota": "testua",
       "html": "d) Para un potencial de aceleración de 12 V no hay suficiente energía para excitar ningún nivel, así que no se emite radiación. Para 17 V solo se alcanza a excitar átomos al primer nivel, y la transición al estado fundamental emite la longitud de onda de 812.5 Å antes dada, que tampoco corresponde al visible."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Sin resolver",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El apartado a) (esquema del dispositivo experimental) no se reproduce: es un dibujo, no un desarrollo transcribible."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) En <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la función de onda de una partícula libre en una dimensión se puede expresar como combinación lineal de ondas planas. La amplitud asociada a cada onda plana de vector de onda <math display=\"inline\"><mi>k</mi></math> viene dada por una función triangular: <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mi>/</mi><msub><mi>k</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> para <math display=\"inline\"><mrow><mi>−</mi><msub><mi>k</mi><mn>0</mn></msub><mo>&lt;</mo><mi>k</mi><mo>&lt;</mo><msub><mi>k</mi><mn>0</mn></msub></mrow></math>, y nula en el resto (con <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el valor de <math display=\"inline\"><mi>α</mi></math> para que la función esté normalizada."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la función de onda de la partícula <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la densidad de probabilidad <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Representar gráficamente la función de onda (su parte real) y estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> y verificar si se cumple el principio de incertidumbre de Heisenberg."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La condición de normalización: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><msub><mi>k</mi><mn>0</mn></msub></mrow><mn>0</mn></msubsup><mfrac><msup><mi>α</mi><mn>2</mn></msup><msubsup><mi>k</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>+</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>+</mo><msubsup><mo>∫</mo><mn>0</mn><msub><mi>k</mi><mn>0</mn></msub></msubsup><mfrac><msup><mi>α</mi><mn>2</mn></msup><msubsup><mi>k</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mn>2</mn><mfrac><msup><mi>α</mi><mn>2</mn></msup><msubsup><mi>k</mi><mn>0</mn><mn>2</mn></msubsup></mfrac><msubsup><mo>∫</mo><mn>0</mn><msub><mi>k</mi><mn>0</mn></msub></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub></mrow><mn>3</mn></mfrac><msup><mi>α</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> de donde <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><msqrt><mrow><mn>3</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la transformada de Fourier de <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>α</mi></mrow><mrow><msub><mi>k</mi><mn>0</mn></msub><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><msub><mi>k</mi><mn>0</mn></msub></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mo>−</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>k</mi><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac></msqrt><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mn>0</mn></msub></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una función tipo <math display=\"inline\"><msup><mtext mathvariant=\"normal\">sinc</mtext><mn>2</mn></msup></math> centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, con lóbulos secundarios decrecientes a ambos lados. La anchura se estima a partir de los dos primeros mínimos, que ocurren en <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>π</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>/</mi><msub><mi>k</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) De la gráfica de <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (soporte en <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><msub><mi>k</mi><mn>0</mn></msub><mo>,</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>), se estima <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub></mrow></math>. Por tanto <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi></mrow><msub><mi>k</mi><mn>0</mn></msub></mfrac><mo>⋅</mo><mn>2</mn><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><mn>8</mn><mi>π</mi><mo>,</mo></mrow></math> claramente por encima del límite de Heisenberg."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar una vasija que contiene, a temperatura ambiente, un gas de moléculas de <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> formadas por pares de átomos de H (<math display=\"inline\"><mrow><msub><mi>m</mi><mi>H</mi></msub><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup></mrow></math> g) separados una distancia <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>8</mn></mrow></msup></mrow></math> cm. Considerar comportamiento de gas ideal, con las moléculas rotando alrededor de dos ejes perpendiculares, ignorando los grados de libertad vibracionales."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es la velocidad de traslación promedio de las moléculas?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es la velocidad de rotación promedio de las moléculas alrededor de uno de los ejes que bisectan la línea de enlace H-H?"
      },
      {
       "mota": "testua",
       "html": "Fórmulas útiles: <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><mi>A</mi><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>d</mi><mi>v</mi></mrow></math>; energía del rotor cuántico <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><mi>J</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>J</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><msup><mi>ħ</mi><mn>2</mn></msup></mrow></math>, con degeneración <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>2</mn><mi>J</mi><mo>+</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Por equipartición, cada uno de los 3 grados de libertad traslacionales aporta <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><mi>k</mi><mi>T</mi></mrow></math>. La energía traslacional promedio de cada molécula (masa <math display=\"inline\"><mrow><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub></mrow></math>): <math display=\"block\"><mrow><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><mi>k</mi><mi>T</mi></mrow><mrow><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub></mrow></mfrac></msqrt><mo>≈</mo><mn>2000</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math> Alternativamente, con la distribución de Maxwell-Boltzmann <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>m</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>v</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi></mrow><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mrow><msqrt><mi>π</mi></msqrt><mi>α</mi></mrow></mfrac><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>π</mi><mi>m</mi></mrow></mfrac></msqrt><mo>≈</mo><mn>1780</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) A cada grado de libertad rotacional le corresponde una energía <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn><mi>k</mi><mi>T</mi></mrow></math> (dos ejes, dos grados de libertad rotacional): <math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ω</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>2</mn><mn>2</mn></mfrac><mi>k</mi><mi>T</mi><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><msub><mi>m</mi><mi>H</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>/</mi><mn>2</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>2.08</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>48</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup></mrow></math> el momento de inercia de la molécula. De ahí: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>k</mi><mi>T</mi></mrow><mi>I</mi></mfrac></msqrt><mo>≈</mo><mn>3.2</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Tenemos un sistema de <math display=\"inline\"><mi>N</mi></math> dipolos distinguibles de momento dipolar <math display=\"inline\"><mi>p</mi></math>. Al aplicar un campo eléctrico constante y uniforme <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝑬</mi></math>, la energía de un dipolo es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi mathvariant=\"bold-italic\">𝒑</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>p</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Supongamos que en nuestro sistema los dipolos solo pueden ser paralelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>0</mn></mrow></math>) o antiparalelos (<math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mn>180</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>) al campo aplicado — un sistema de dos niveles de energía. El momento dipolar total del sistema es <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑷</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></msubsup><msub><mi mathvariant=\"bold-italic\">𝒑</mi><mi>i</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el módulo del momento dipolar total, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"bold-italic\">𝑷</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, en función de <math display=\"inline\"><msub><mi>N</mi><mo>+</mo></msub></math> y <math display=\"inline\"><msub><mi>N</mi><mo>−</mo></msub></math> (número de dipolos paralelos y antiparalelos al campo, respectivamente)."
      },
      {
       "mota": "testua",
       "html": "b) Si el sistema está en equilibrio termodinámico, ¿cuál es el valor de <math display=\"inline\"><mi>P</mi></math> a temperatura <math display=\"inline\"><mi>T</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "c) Demostrar que <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub></mrow></math>, con <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Errata del enunciado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado escribe la fórmula del apartado c) como <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub></mrow></math> (derivada respecto a <math display=\"inline\"><mi>T</mi></math> manteniendo <math display=\"inline\"><mi>T</mi></math> constante, lo cual no tiene sentido). La propia solución oficial deriva respecto a <math display=\"inline\"><mi>E</mi></math>; se transcribe corregido como <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "a) La polarización neta: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mi>N</mi><mo>+</mo></msub><mi>p</mi><mo>−</mo><msub><mi>N</mi><mo>−</mo></msub><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>N</mi><mo>+</mo></msub><mo>−</mo><msub><mi>N</mi><mo>−</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Sistema de dos niveles de energía. Función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Poblaciones de cada nivel: <math display=\"inline\"><mrow><msub><mi>N</mi><mo>±</mo></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>±</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>. <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>N</mi><mo>+</mo></msub><mo>−</mo><msub><mi>N</mi><mo>−</mo></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mi>p</mi></mrow><mi>Z</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><mi>p</mi></mrow><mi>Z</mi></mfrac><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Sustituyendo <math display=\"inline\"><mi>Z</mi></math> en <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow></math> y derivando respecto a <math display=\"inline\"><mi>E</mi></math>: <math display=\"block\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub><mo>=</mo><mi>−</mi><mi>N</mi><mi>p</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>E</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>E</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>T</mi></msub><mo>,</mo></mrow></math> coherente con el resultado del apartado b)."
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Mayo 2012",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los puntos indican la valoración máxima de cada ejercicio. El planteamiento de cada solución debe incluir una breve explicación o justificación de las fórmulas o ecuaciones empleadas. Los resultados numéricos finales deben incluir sus unidades."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Mediante un experimento de dispersión de partículas <math display=\"inline\"><mi>α</mi></math> por átomos de plata Ag (<math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><mn>47</mn></mrow></math>) se ha estimado que el radio del núcleo es <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m. ¿Hasta qué energía máxima de las partículas <math display=\"inline\"><mi>α</mi></math> su dispersión sigue el comportamiento predicho por el modelo de Rutherford?"
      },
      {
       "mota": "testua",
       "html": "b) Considerar un proceso de dispersión Compton. Calcular la energía mínima de un fotón para que este transfiera la mitad de su energía al electrón."
      },
      {
       "mota": "testua",
       "html": "c) En un tubo de rayos X, ¿cuál debe ser el mínimo voltaje de aceleración de los electrones para producir rayos X de 1 Å?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La energía máxima para la que aún vale el modelo de Rutherford es aquella para la que la partícula <math display=\"inline\"><mi>α</mi></math> (carga <math display=\"inline\"><mrow><msup><mi>Z</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn></mrow></math>) llega justo a rozar el núcleo (<math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></math> m), es decir, toda su energía cinética se convierte en energía potencial culombiana a esa distancia: <math display=\"block\"><mrow><mi>K</mi><mo>=</mo><mfrac><mrow><mi>Z</mi><msup><mi>Z</mi><mo>′</mo></msup><msup><mi>e</mi><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mo>×</mo><mn>47</mn><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>4</mn><mi>π</mi><msub><mi>ε</mi><mn>0</mn></msub><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup></mrow></mfrac><mo>=</mo><mn>2.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>11</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>135</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) El fotón dispersado tendrá la mitad de la energía del incidente (<math display=\"inline\"><mrow><msup><mi>E</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>E</mi></mrow></math>, ya que la otra mitad se transfiere al electrón). Como <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, entonces <math display=\"inline\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>λ</mi></mrow></math>. Aplicando la relación de Compton: <math display=\"block\"><mrow><msup><mi>λ</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mn>2</mn><mi>λ</mi><mo>−</mo><mi>λ</mi><mo>=</mo><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> La energía mínima del fotón corresponde a la longitud de onda máxima, que según la relación anterior ocurre en <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>E</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>h</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>h</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>=</mo><mn>256</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>e</mi><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mi>λ</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mi>λ</mi><mi>e</mi></mrow></mfrac><mo>=</mo><mn>12.4</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> keV</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) En <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la transformada de Fourier de la función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de una partícula libre es <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demostrar que la transformada de Fourier de una función de onda desplazada <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> respecto a la anterior, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Supongamos que la transformada de Fourier de la función de onda de un protón es <math display=\"block\"><mrow><mi>A</mi><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>k</mi><mn>0</mn></msub><mo>=</mo><msup><mn>10</mn><mn>10</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>, <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math> m<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math> y <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mn>10</mn></mrow></math> m. Teniendo en cuenta el resultado del apartado anterior, hacer una representación gráfica aproximada de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math>. Estimar el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math> e indicar dónde se encuentra el valor máximo de la función."
      },
      {
       "mota": "testua",
       "html": "c) ¿Cuál es la velocidad media del protón?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Con <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt><mo>∫</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><mo>∫</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>y</mi></mrow></msup><mi>d</mi><mi>y</mi><mo>×</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo>,</mo></mrow></math> usando el cambio de variable <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Primero se calcula la función de onda para <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> (sin el factor de fase <math display=\"inline\"><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup></math>): <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>A</mi><mn>0</mn></msub><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>k</mi><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>a</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mi>x</mi><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> completando el cuadrado en el exponente y usando la integral gaussiana dada. Aplicando el resultado del apartado a) con <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>b</mi></mrow></msup></mrow></math> (desplazamiento <math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mi>−</mi><mi>b</mi></mrow></math>): <math display=\"block\"><mrow><msup><mi>ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mi>a</mi><msup><mi>e</mi><mrow><mi>i</mi><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msup><mi>ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><msubsup><mi>A</mi><mn>0</mn><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math> Es una gaussiana centrada en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>b</mi></mrow></math>, con anchura <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>∼</mo><mn>1</mn><mi>/</mi><mi>a</mi></mrow></math>; el máximo está en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>b</mi><mo>=</mo><mi>−</mi><mn>10</mn></mrow></math> m."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>ħ</mi><mi>m</mi></mfrac><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mi>ħ</mi><mi>m</mi></mfrac><mfrac><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi></mrow><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>k</mi></mrow></mfrac><mi>.</mi></mrow></math> Descomponiendo <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>k</mi><mn>0</mn></msub></mrow></math>, la parte <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> integra a cero por imparidad (cambio de variable <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub></mrow></math>, integrando gaussiana impar), quedando <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mi>ħ</mi><msub><mi>k</mi><mn>0</mn></msub></mrow><mi>m</mi></mfrac><mo>≈</mo><mn>632</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos)"
      },
      {
       "mota": "testua",
       "html": "a) Explicar las diferencias básicas entre las hipótesis sobre las que se fundamentan las estadísticas de Maxwell-Boltzmann, Bose-Einstein y Fermi-Dirac."
      },
      {
       "mota": "testua",
       "html": "b) Describir tres tipos concretos de sistemas a los que serían aplicables cada una de las estadísticas anteriores. Para dichos sistemas, ¿en qué condiciones sería aplicable la estadística de M-B?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Estadística M-B: partículas distinguibles, densidad de partículas baja. Estadística B-E: partículas indistinguibles (bosones), aplicable a densidad alta o baja temperatura. Estadística F-D: partículas indistinguibles (fermiones), sujetas al principio de exclusión de Pauli."
      },
      {
       "mota": "testua",
       "html": "b) Un gas ideal a presión y temperatura ambiente (M-B); los átomos de <math display=\"inline\"><msup><mrow></mrow><mn>4</mn></msup></math>He, spin 0, a temperatura baja (B-E); los electrones de conducción de un metal (F-D). Para los dos últimos ejemplos, a temperaturas muy altas las estadísticas de B-E y F-D convergen a la de M-B."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Tenemos un sistema con <math display=\"inline\"><mi>N</mi></math> partículas distinguibles en el que éstas pueden estar en cuatro estados diferentes de energía: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>4</mn></msub><mo>=</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál es el número de partículas en cada estado si el sistema se encuentra en equilibrio termodinámico a temperatura <math display=\"inline\"><mi>T</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es el número de partículas en cada nivel de energía en las condiciones anteriores?"
      },
      {
       "mota": "testua",
       "html": "c) Supongamos que en un instante determinado el número de partículas en cada nivel de energía es <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Calcular la energía del sistema. El sistema no se encuentra en equilibrio termodinámico. ¿Por qué?"
      },
      {
       "mota": "testua",
       "html": "d) En la situación del apartado anterior, se aísla completamente el sistema de manera que no puede intercambiar energía con su entorno. Después de alcanzar el equilibrio termodinámico, ¿cuál es la temperatura del sistema?"
      },
      {
       "mota": "testua",
       "html": "Fórmula útil: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>β</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mrow><mi>π</mi><mi>/</mi><mi>α</mi></mrow></msqrt></mrow></math>, <math display=\"inline\"><mi>β</mi></math> cualquier número complejo."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Sistema de partículas distinguibles (estadística de M-B), con cuatro estados disponibles, uno de ellos degenerado (<math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>2</mn></mrow></math>, con el mismo valor de energía <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math>). Función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Distribución de partículas por <strong>estado</strong>: <math display=\"block\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mn>2</mn></msub><mo>=</mo><msub><mi>N</mi><mn>3</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mn>4</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Distribución de partículas por <strong>nivel</strong> de energía: <math display=\"block\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi></mrow><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>N</mi><mn>4</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) La energía del sistema, en unidades de <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math>: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>.</mi></mrow></math> Esta distribución NO se corresponde con la de equilibrio (M-B), a la que corresponde: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>N</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msub><mi>N</mi><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow></msub><msub><mi>ε</mi><mn>2</mn></msub><mo>+</mo><msub><mi>N</mi><mn>4</mn></msub><msub><mi>ε</mi><mn>4</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi></mrow><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow><mrow><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> El sistema evolucionará hacia la distribución de partículas por niveles que maximiza el número de microestados (la distribución de M-B)."
      },
      {
       "mota": "testua",
       "html": "d) Como el sistema está aislado, su energía no varía. Igualando la energía inicial (c) con la energía de equilibrio: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow><mrow><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Mayo 2014",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los puntos indican la valoración máxima de cada ejercicio. El planteamiento de cada solución debe incluir una breve explicación o justificación de las fórmulas o ecuaciones empleadas. Los resultados numéricos finales deben incluir sus unidades."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Un pion neutro, <math display=\"inline\"><msup><mi>π</mi><mn>0</mn></msup></math>, se desintegra, vía interacción electromagnética, en dos fotones, <math display=\"inline\"><mrow><msup><mi>π</mi><mn>0</mn></msup><mo>→</mo><mi>γ</mi><mo>+</mo><mi>γ</mi></mrow></math>, que se mueven simétricamente con respecto a la dirección del pion. Determinar el ángulo entre las direcciones de movimiento de los dos fotones si el momento del pion incidente es igual a 220 MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>m</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mo>∼</mo><mn>140</mn></mrow></math> MeV<math display=\"inline\"><mrow><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Aplicando las leyes de conservación del momento y de la energía. Dado que los fotones se mueven simétricamente respecto a la dirección del pion: <math display=\"block\"><mrow><mn>2</mn><msub><mi>p</mi><mi>γ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>p</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>θ</mi></math> es el ángulo entre la dirección del pion y cualquiera de los fotones. Para la energía (consideración relativista): <math display=\"block\"><mrow><mn>2</mn><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>E</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mo>=</mo><msqrt><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mi>π</mi></msub><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><msup><mi>π</mi><mn>0</mn></msup></msub><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></msqrt><mo>=</mo><msqrt><mrow><msup><mn>220</mn><mn>2</mn></msup><mo>+</mo><msup><mn>140</mn><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>261</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> MeV</mtext></mrow><mi>.</mi></mrow></math> De aquí <math display=\"inline\"><mrow><msub><mi>E</mi><mi>γ</mi></msub><mo>=</mo><mn>131</mn></mrow></math> MeV y <math display=\"inline\"><mrow><msub><mi>p</mi><mi>γ</mi></msub><mo>=</mo><msub><mi>E</mi><mi>γ</mi></msub><mi>/</mi><mi>c</mi><mo>=</mo><mn>131</mn></mrow></math> MeV<math display=\"inline\"><mrow><mi>/</mi><mi>c</mi></mrow></math>. Sustituyendo en la primera ecuación: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>p</mi><msup><mi>π</mi><mn>0</mn></msup></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>p</mi><mi>γ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.843</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>θ</mi><mo>=</mo><mn>32.6</mn><msup><mi></mi><mo>∘</mo></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Considerar una partícula de masa <math display=\"inline\"><mi>m</mi></math> en un pozo de potencial infinito definido en el rango <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math> y cuya función de onda <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> viene dada por: <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Normalizar la función."
      },
      {
       "mota": "testua",
       "html": "b) Calcular <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Calcular <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi>a</mi><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>i</mi><mi>k</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) No podemos evaluar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> a partir de <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><mi>ħ</mi><mi>∂</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, ya que <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no es derivable (tiene un salto discontinuo en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>). Debemos usar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>p</mi><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>p</mi><mi>/</mi><mi>ħ</mi></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi>ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>p</mi><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>p</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>p</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>p</mi><mn>2</mn></msup></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>p</mi><mi>a</mi></mrow><mrow><mn>2</mn><mi>ħ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>p</mi><mi>d</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><mi>p</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>p</mi><mi>a</mi></mrow><mrow><mn>2</mn><mi>ħ</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>p</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mi>a</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mfrac><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>a</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> ya que la función integrando es impar."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Una molécula de hidrógeno en estado sólido puede existir en dos formas: orto-hidrógeno, con los espines paralelos (spin neto no nulo), y para-hidrógeno, con los espines antiparalelos (spin nulo). La forma orto puede estar en tres estados de spin, todos con la misma energía <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; la forma para solo tiene un estado, de energía <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>. Considerar un sólido de <math display=\"inline\"><mi>N</mi></math> moléculas de hidrógeno, consideradas partículas distinguibles localizadas en los nudos de la red cristalina, en equilibrio, con energía <math display=\"inline\"><mi>U</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Qué valores puede tomar la energía total del sistema, <math display=\"inline\"><mi>U</mi></math>? Razonar la respuesta."
      },
      {
       "mota": "testua",
       "html": "b) Obtener una expresión de <math display=\"inline\"><mi>U</mi></math> en función de la temperatura."
      },
      {
       "mota": "testua",
       "html": "c) Cuando la temperatura es máxima, ¿qué distribución tienen las partículas en los estados orto y para?"
      },
      {
       "mota": "testua",
       "html": "d) Estando el sistema en equilibrio termodinámico, ¿es posible tener la mitad de partículas en el estado fundamental?"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Si es posible, obtener la temperatura de ese estado; si no lo es, explicar por qué."
       ]
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Sistema de partículas distinguibles con 2 niveles de energía (<math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mi>ε</mi></math>), el segundo con degeneración 3 (los tres estados de spin de la forma orto, todos con la misma energía). Función de partición de una partícula: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mn>0</mn></msup><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> La energía del sólido, usando <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><mi>Z</mi><mi>/</mi><mi>∂</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mn>3</mn><mi>ε</mi></mrow><mrow><mi>Z</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><mi>N</mi><mn>3</mn><mi>ε</mi><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>N</mi><mi>ε</mi></mrow><mrow><mn>3</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> Los valores extremos de <math display=\"inline\"><mi>U</mi></math>: a <math display=\"inline\"><mi>T</mi></math> alta, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>≈</mo><msup><mi>e</mi><mn>0</mn></msup><mo>=</mo><mn>1</mn></mrow></math>, luego <math display=\"inline\"><mrow><msub><mi>U</mi><mtext mathvariant=\"normal\">max</mtext></msub><mo>=</mo><mn>3</mn><mi>N</mi><mi>ε</mi><mi>/</mi><mn>4</mn></mrow></math>; a <math display=\"inline\"><mi>T</mi></math> baja, <math display=\"inline\"><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> es muy grande, luego <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>0</mn></mrow></math>. Entre ambos límites, la energía puede tomar cualquier valor según la temperatura."
      },
      {
       "mota": "testua",
       "html": "b) Con <math display=\"inline\"><mi>n</mi></math> el número de partículas en el nivel <math display=\"inline\"><mi>ε</mi></math>: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>n</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>N</mi><mi>ε</mi></mrow><mrow><mn>3</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mi>n</mi></mfrac><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Para <math display=\"inline\"><mi>T</mi></math> alta, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ε</mi><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mn>0</mn><mo>=</mo><mi>n</mi><mi>ε</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn><mi>N</mi><mi>/</mi><mn>4</mn></mrow></math> (estado orto) para la máxima temperatura (máxima energía); <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>4</mn></mrow></math> en el estado para."
      },
      {
       "mota": "testua",
       "html": "d) En el equilibrio sí es posible: la fracción de moléculas en el estado fundamental viene dada por la distribución de Boltzmann: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>0</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>Z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi>ε</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math> Por ejemplo, si <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> meV, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>10.6</mn></mrow></math> K."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar un volumen <math display=\"inline\"><mi>V</mi></math> de magnesio (valencia <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn></mrow></math>), cuyos electrones de conducción pueden considerarse como un gas."
      },
      {
       "mota": "testua",
       "html": "a) Describir brevemente cuál es la distribución de los electrones de conducción en los niveles de energía a muy baja temperatura. Comparar esta distribución con la de un sistema de partículas distinguibles."
      },
      {
       "mota": "testua",
       "html": "b) Obtener la expresión para la energía de Fermi y calcular su valor para el magnesio. ¿A qué temperatura debería estar un gas ideal para que la energía promedio de sus moléculas sea igual a la energía de Fermi del magnesio?"
      },
      {
       "mota": "testua",
       "html": "c) Demostrar que a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K, la energía promedio de los electrones es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Mg</mtext><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1740</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Mg</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>24</mn></mrow></math> u.m.a., 1 u.m.a.<math display=\"inline\"><mrow><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg. <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, la fracción de ocupación <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: todos los niveles están ocupados desde <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math> hasta el nivel de Fermi <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>. A muy baja temperatura, algunos electrones inmediatamente por debajo de <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math> saltan a niveles inmediatamente por encima: se ocupan niveles por encima de <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math> y se desocupan niveles por debajo. Esto contrasta con un sistema de partículas distinguibles (Boltzmann), donde la ocupación decae exponencialmente con la energía desde <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>; la distribución de Fermi converge a la de Boltzmann a alta temperatura."
      },
      {
       "mota": "testua",
       "html": "b) El número de electrones en <math display=\"inline\"><mi>V</mi></math> a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mfrac><mn>2</mn><mn>3</mn></mfrac><msubsup><mi>ϵ</mi><mi>F</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mfrac><mi>N</mi><mrow><mn>8</mn><mi>π</mi><mi>V</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mi>.</mi></mrow></math> Calculando la densidad de electrones a partir de <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>N</mi><msub><mi>m</mi><mtext mathvariant=\"normal\">Mg</mtext></msub><mi>/</mi><mi>V</mi></mrow></math> (con 2 electrones de conducción por átomo, dada la valencia <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mi>e</mi></msub><mi>V</mi></mfrac><mo>=</mo><mn>2</mn><mo>×</mo><mfrac><mn>1738</mn><mrow><mn>24</mn><mo>×</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>8.72</mn><mo>×</mo><msup><mn>10</mn><mn>28</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> elec.</mtext></mrow><mi>/</mi><msup><mi>m</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> Sustituyendo: <math display=\"inline\"><mrow><msub><mi>ϵ</mi><mi>F</mi></msub><mo>=</mo><mn>7.13</mn></mrow></math> eV. Para un gas ideal, la energía promedio por molécula es <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>; igualando a <math display=\"inline\"><msub><mi>ϵ</mi><mi>F</mi></msub></math>: <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><msub><mi>ϵ</mi><mi>F</mi></msub></mrow><mn>3</mn></mfrac><mo>≈</mo><mn>55</mn><mspace width=\"0.167em\"></mspace><mn>111</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) La energía del gas de electrones: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mo>∫</mo><mi>ε</mi><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>ε</mi><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><mi>N</mi><msub><mi>ϵ</mi><mi>F</mi></msub><mi>.</mi></mrow></math> La energía promedio por electrón: <math display=\"inline\"><mrow><mi>U</mi><mi>/</mi><mi>N</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>ϵ</mi><mi>F</mi></msub></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Control I — 23 de marzo de 2012",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se ha diseñado un experimento para medir el valor de la carga del electrón <math display=\"inline\"><mi>e</mi></math> y de la constante de Planck <math display=\"inline\"><mi>h</mi></math>. Se ilumina un metal cuyo trabajo de extracción es <math display=\"inline\"><mrow><mi>W</mi><mo>=</mo><mn>7</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup></mrow></math> J utilizando una fuente de luz de longitud de onda variable. Cuando se utiliza luz visible no ocurre nada, pero cuando la longitud de onda alcanza el valor <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mn>3800</mn></mrow></math> Å (luz ultravioleta) el metal comienza a perder electrones. Para un valor menor de la longitud de onda, <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2780</mn></mrow></math> Å, la corriente eléctrica asociada a la pérdida de electrones en el metal es <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> A. Teniendo en cuenta que la superficie metálica iluminada es <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow></math> cm<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>, que cada fotón incidente extrae un electrón, que la potencia de la lámpara para cualquier longitud de onda es <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>7</mn></mrow></math> W, y que el metal está colocado a 30 cm de la lámpara, calcular <math display=\"inline\"><mi>e</mi></math> y <math display=\"inline\"><mi>h</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Nota: este es un ejercicio con valores no realistas, por lo que los valores de <math display=\"inline\"><mi>e</mi></math> y <math display=\"inline\"><mi>h</mi></math> a obtener no son los reales. <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup></mrow></math> m/s."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Un fotón de longitud de onda <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mn>3800</mn></mrow></math> Å tiene la energía justa para extraer un electrón: <math display=\"block\"><mrow><mi>W</mi><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><msub><mi>λ</mi><mn>0</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>=</mo><mfrac><mrow><mi>W</mi><msub><mi>λ</mi><mn>0</mn></msub></mrow><mi>c</mi></mfrac><mo>=</mo><mn>8.87</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>33</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math> La energía que llega a la superficie metálica por unidad de tiempo: <math display=\"block\"><mrow><msub><mi>P</mi><mi>L</mi></msub><mo>=</mo><mi>P</mi><mo>×</mo><mfrac><mi>S</mi><mrow><mn>4</mn><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>6.19</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> W</mtext></mrow><mi>.</mi></mrow></math> La energía de cada fotón es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>2780</mn></mrow></math> Å. El número de fotones que llega a la superficie por unidad de tiempo: <math display=\"block\"><mrow><msub><mi>n</mi><mi>f</mi></msub><mo>=</mo><mfrac><msub><mi>P</mi><mi>L</mi></msub><mi>E</mi></mfrac><mo>=</mo><mn>9.57</mn><mo>×</mo><msup><mn>10</mn><mn>18</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> fot.</mtext></mrow><mi>/</mi><mi>s</mi><mi>.</mi></mrow></math> La carga que pierde la superficie por unidad de tiempo (intensidad) es <math display=\"inline\"><mrow><mi>i</mi><mo>=</mo><mi>e</mi><msub><mi>n</mi><mi>f</mi></msub></mrow></math>. Por tanto: <math display=\"block\"><mrow><mi>e</mi><mo>=</mo><mfrac><mi>i</mi><msub><mi>n</mi><mi>f</mi></msub></mfrac><mo>=</mo><mn>4.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>18</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> C</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un péndulo cuántico. Consideremos un electrón de masa <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>30</mn></mrow></msup></mrow></math> kg suspendido por un hilo sin masa de longitud <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>1</mn></mrow></math> Å, que se comporta como un péndulo bajo la acción de un campo eléctrico <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn></mrow></math> V/m uniforme, de manera que oscila como un péndulo simple."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la frecuencia <math display=\"inline\"><mi>ω</mi></math> de oscilación según la mecánica clásica, en la aproximación de pequeñas oscilaciones."
      },
      {
       "mota": "testua",
       "html": "b) Aplicando las reglas de Wilson-Sommerfeld, demostrar que la elongación de las oscilaciones (amplitud máxima) del péndulo está cuantizada y viene dada por <math display=\"block\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>ħ</mi><mi>n</mi></mrow><mrow><mi>m</mi><mi>ω</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Calcular la elongación de la oscilación del estado fundamental y su energía."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>θ</mi></math> el ángulo de separación del péndulo respecto a la posición vertical de equilibrio. En presencia del campo <math display=\"inline\"><mi>E</mi></math>, el electrón está sometido a la fuerza vertical <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>E</mi><mi>e</mi></mrow></math>; su componente tangencial es <math display=\"inline\"><mrow><msub><mi>F</mi><mi>t</mi></msub><mo>=</mo><mi>e</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, y la ecuación dinámica <math display=\"inline\"><mrow><mi>e</mi><mi>E</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><msub><mi>m</mi><mi>e</mi></msub><mi>l</mi><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover></mrow></math> da, en la aproximación de pequeñas oscilaciones: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mi>e</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>m</mi><mi>l</mi></mrow></mfrac><mi>θ</mi><mi>.</mi></mrow></math> Esta ecuación admite soluciones <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><msub><mi>θ</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"block\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mfrac><mrow><mi>E</mi><mi>e</mi></mrow><mrow><mi>m</mi><mi>l</mi></mrow></mfrac></msqrt><mo>=</mo><mn>4</mn><mo>×</mo><msup><mn>10</mn><mn>10</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) La regla de W-S para el momento angular del péndulo: <math display=\"block\"><mrow><mo>∮</mo><mi>L</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mo>∮</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover><mi>d</mi><mi>θ</mi><mo>=</mo><mo>∮</mo><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>ω</mi><msub><mi>θ</mi><mn>0</mn></msub><mi mathvariant=\"normal\">sin</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>θ</mi><mi>.</mi></mrow></math> Manipulando la expresión anterior se obtiene <math display=\"block\"><mrow><mo>∮</mo><mi>L</mi><mi>d</mi><mi>θ</mi><mo>=</mo><mi>m</mi><mi>ω</mi><msup><mi>l</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mi>π</mi><mo>=</mo><mi>n</mi><mi>h</mi><mo>,</mo></mrow></math> y de ahí <math display=\"block\"><mrow><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>ħ</mi><mi>n</mi></mrow><mrow><mi>m</mi><mi>ω</mi><msup><mi>l</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) La energía del péndulo: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><msup><mi>ω</mi><mn>2</mn></msup><msubsup><mi>θ</mi><mn>0</mn><mn>2</mn></msubsup><mo>=</mo><mi>n</mi><mi>ħ</mi><mi>ω</mi><mi>.</mi></mrow></math> Para el estado fundamental, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>0</mn></msub><mo>=</mo><mn>1.82</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> rad, <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>=</mo><mn>4.2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>24</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>2.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow></math> eV."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la función de onda de una partícula libre que se mueve en una dimensión es <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en la región <math display=\"inline\"><mrow><mi>−</mi><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, y nula en el resto. <math display=\"inline\"><mi>a</mi></math> es una constante."
      },
      {
       "mota": "testua",
       "html": "a) Calcular el valor de <math display=\"inline\"><mi>A</mi></math> para que la función esté normalizada."
      },
      {
       "mota": "testua",
       "html": "b) ¿Puede asignarse un valor determinado a la longitud de onda de de Broglie asociada a la onda de la partícula?"
      },
      {
       "mota": "testua",
       "html": "c) Dar una expresión de <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la probabilidad de encontrar la partícula entre <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>d</mi><mi>x</mi></mrow></math> por unidad de longitud. Calcular la posición promedio de la partícula y dar una estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad de encontrar la partícula en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>,</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es la posición promedio calculada anteriormente."
      },
      {
       "mota": "testua",
       "html": "e) Expresando la función de onda como combinación lineal de funciones armónicas, calcular la amplitud <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> asociada a la función de onda armónica de vector de onda <math display=\"inline\"><mi>k</mi></math>. Calcular <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f) Calcular el valor medio de <math display=\"inline\"><mi>k</mi></math> y dar una estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Ayuda: <math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mi>n</mi></msup><mrow><mi>d</mi><msup><mi>k</mi><mi>n</mi></msup></mrow></mfrac><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La normalización: <math display=\"block\"><mrow><mn>1</mn><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>a</mi><mn>4</mn></msup><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>a</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mo>=</mo><mfrac><mn>16</mn><mn>15</mn></mfrac><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>,</mo></mrow></math> luego <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msqrt><mrow><mn>15</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) No: no es una función armónica (no tiene un único <math display=\"inline\"><mi>k</mi></math> asociado)."
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La posición media es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math> (la función es simétrica respecto a ese punto). Como estimación puede tomarse <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>∼</mo><mn>2</mn><mi>a</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Como el intervalo es muy pequeño, se aproxima: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><mfrac><mn>15</mn><mrow><mn>16</mn><mi>a</mi></mrow></mfrac><mo>×</mo><mn>2</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>a</mi><mo>∼</mo><mn>1.9</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Hay que calcular la transformada de Fourier: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mfrac><msqrt><mfrac><mn>15</mn><mrow><mn>16</mn><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> La primera integral: <math display=\"block\"><mrow><msup><mi>a</mi><mn>2</mn></msup><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>a</mi><mn>2</mn></msup><mrow><mi>i</mi><mi>k</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>k</mi><mi>a</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Para la segunda, usando la ayuda: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>i</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mfrac><msup><mi>d</mi><mn>2</mn></msup><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>a</mi></mrow><mi>a</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>k</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>d</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>d</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>k</mi></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mn>2</mn><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>k</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Restando: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>15</mn><mrow><mn>32</mn><mi>π</mi><msup><mi>a</mi><mn>5</mn></msup></mrow></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><msup><mi>k</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><mn>4</mn><mi>a</mi></mrow><msup><mi>k</mi><mn>2</mn></msup></mfrac><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "f) <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es par respecto a <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>, luego <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>. Como estimación de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi></mrow></math> puede tomarse el doble del valor que anula el primer término (ocurre después de anularse el segundo), para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mi>a</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>. Por tanto, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>k</mi><mo>∼</mo><mn>4</mn><mi>π</mi><mi>/</mi><mi>a</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Mayo 2013",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Criterios de evaluación (del enunciado)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los puntos indican la valoración máxima de cada ejercicio. El planteamiento de cada solución debe incluir una breve explicación o justificación de las fórmulas o ecuaciones empleadas. Los resultados numéricos finales deben incluir sus unidades."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) En el experimento de Compton se hacen incidir fotones de energía <math display=\"inline\"><mi>E</mi></math> sobre electrones en reposo. ¿Cuál es la energía cinética máxima que puede adquirir un electrón en este experimento? Expresar el resultado únicamente en función de <math display=\"inline\"><mi>E</mi></math> y de <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La energía de un fotón viene dada por <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>c</mi><mi>/</mi><mi>λ</mi></mrow></math>, por lo que cuanto mayor sea su longitud de onda, menor será su energía. Según la fórmula de Compton, la máxima pérdida de energía del fotón (mayor longitud de onda) corresponde al máximo cambio de longitud de onda, es decir, <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>h</mi></mrow><mrow><mi>m</mi><mi>c</mi></mrow></mfrac><mo>=</mo><mfrac><mi>c</mi><msub><mi>ν</mi><mn>2</mn></msub></mfrac><mo>−</mo><mfrac><mi>c</mi><msub><mi>ν</mi><mn>1</mn></msub></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>ν</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><msub><mi>ν</mi><mn>1</mn></msub></mrow><mrow><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub></mrow></mfrac><mi>.</mi></mrow></math> La energía cinética máxima del electrón: <math display=\"block\"><mrow><msub><mi>K</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo>−</mo><mi>h</mi><msub><mi>ν</mi><mn>2</mn></msub><mo>=</mo><mfrac><mrow><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub></mrow><mrow><mn>1</mn><mo>+</mo><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>h</mi><msub><mi>ν</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mi>E</mi><mrow><mn>1</mn><mo>+</mo><msub><mi>m</mi><mi>e</mi></msub><msup><mi>c</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(30 puntos) Considerar una partícula de masa <math display=\"inline\"><mi>m</mi></math> cuya función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> es la superposición de los dos primeros autoestados de un pozo infinito de anchura <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, con energías <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mi>ħ</mi><msub><mi>ω</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mi>ħ</mi><msub><mi>ω</mi><mn>2</mn></msub></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Dar la expresión para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Comprobar que el factor de normalización <math display=\"inline\"><msqrt><mrow><mn>1</mn><mi>/</mi><mi>a</mi></mrow></msqrt></math> es válido para cualquier instante <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Representar gráficamente <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> para <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mi>ħ</mi></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Calcular la probabilidad (dependiente del tiempo) de que la partícula se encuentre en la mitad izquierda del pozo."
      },
      {
       "mota": "testua",
       "html": "e) Demostrar que la densidad de probabilidad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math> es independiente del tiempo."
      },
      {
       "mota": "testua",
       "html": "f) Calcular el valor promedio de la energía de la partícula. Expresar el resultado en función de <math display=\"inline\"><msub><mi>ω</mi><mn>1</mn></msub></math> y constantes fundamentales."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Cada autofunción varía con <math display=\"inline\"><mi>t</mi></math> según <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mi>n</mi></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>ω</mi><mn>1</mn></msub><mi>t</mi></mrow></msup><mo>+</mo><msqrt><mfrac><mn>1</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>ω</mi><mn>2</mn></msub><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Para cualquier instante <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>∞</mi></mrow><mi>∞</mi></msubsup><msup><mi mathvariant=\"normal\">Ψ</mi><mrow><mi>*</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mfrac><mn>1</mn><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mfrac><mn>1</mn><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><mi>a</mi><mn>2</mn></mfrac><mo>+</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Para <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mfrac><mrow><mi>π</mi><mi>ħ</mi></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>2</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup></mrow></math> es simplemente la suma de los dos términos cuadráticos (dos jorobas separadas, sin término de interferencia)."
      },
      {
       "mota": "testua",
       "html": "d) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><msup><mi mathvariant=\"normal\">Ψ</mi><mo>*</mo></msup><mi mathvariant=\"normal\">Ψ</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mi>a</mi><mi>/</mi><mn>2</mn></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>4</mn><mrow><mn>3</mn><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ω</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Para <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (el segundo factor se anula), luego desaparece el término de interferencia: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>a</mi></mfrac><mo>,</mo></mrow></math> independiente de <math display=\"inline\"><mi>t</mi></math>."
      },
      {
       "mota": "testua",
       "html": "f) La función dada es combinación lineal de los dos primeros autoestados <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>a</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>, con coeficientes <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>=</mo><mn>1</mn><mi>/</mi><msqrt><mn>2</mn></msqrt></mrow></math>. El valor promedio de la energía: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mi>c</mi><mn>1</mn><mn>2</mn></msubsup><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msubsup><mi>c</mi><mn>2</mn><mn>2</mn></msubsup><msub><mi>E</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><msub><mi>E</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><mn>4</mn><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>5</mn><msub><mi>E</mi><mn>1</mn></msub></mrow><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>ħ</mi><msub><mi>ω</mi><mn>1</mn></msub></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) Un sistema tiene dos niveles de energía que se diferencian en 0.1 eV."
      },
      {
       "mota": "testua",
       "html": "a) Si el sistema está en contacto térmico con un baño a 300 K, ¿cuál es la probabilidad de encontrar el sistema en el nivel de energía superior?"
      },
      {
       "mota": "testua",
       "html": "b) ¿Para qué temperatura esta probabilidad es 0.25?"
      },
      {
       "mota": "testua",
       "html": "c) ¿Puede darse la situación en la que ambos niveles de energía estén igualmente poblados?"
      },
      {
       "mota": "testua",
       "html": "d) Calcular la energía interna y el calor específico del sistema."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) La función de partición: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>0.1</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>Z</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>0.1</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup></mrow></math> J. Para <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K: <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.0205</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mo>=</mo><mn>1052</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) La igualdad de poblaciones no puede alcanzarse: requeriría <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, lo que da <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>∞</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) La energía interna: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mfrac><mi>N</mi><mi>Z</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><msub><mi>ε</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>0.1</mn><mo>×</mo><mn>1.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math> También puede calcularse a partir de <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac></mrow></math>. El calor específico: <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considerar un sistema formado por un conjunto de osciladores armónicos tridimensionales cuyos niveles de energía vienen dados por <math display=\"block\"><mrow><msub><mi>ε</mi><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></msub><mo>=</mo><mi>ħ</mi><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math> son enteros <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Calcular la degeneración de los niveles de energía <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> y <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Si el sistema de osciladores está en contacto térmico con un baño a temperatura <math display=\"inline\"><mi>T</mi></math>, ¿para qué temperatura el nivel de energía <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> está más poblado que el de <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>? Calcular el valor numérico de dicha temperatura para osciladores de frecuencia <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) El nivel <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> corresponde a <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>2</mn></mrow></math>, con los microestados <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo></mrow></math> <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>: degeneración <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El nivel <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> corresponde a <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, con los microestados <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: degeneración <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>10</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Las poblaciones de cada nivel: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>7</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mi>Z</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>10</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>9</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mi>Z</mi></mfrac><mi>.</mi></mrow></math> La fracción relativa entre ambos niveles: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>7</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mrow><mn>10</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>9</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> implica <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><mo>&lt;</mo><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, es decir, <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>&gt;</mo><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sustituyendo el valor de la frecuencia: <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>894</mn></mrow></math> K."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Septiembre 2009",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Sin solución en la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "A diferencia del resto de exámenes de este capítulo, no se encontró un documento de soluciones emparejado para este examen en el archivo del usuario. Se transcribe únicamente el enunciado; no se inventan las soluciones."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(10 puntos) En un experimento Compton se adquieren espectros que representan la intensidad de la radiación X dispersada como función de su longitud de onda a distintos ángulos de dispersión. A <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> se observan dos máximos de intensidad que se encuentran a <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>0.709</mn></mrow></math> Å y <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>0.733</mn></mrow></math> Å. Describe brevemente qué representan esos dos máximos y qué hubiese sucedido si el espectro se hubiese medido con un ángulo de <math display=\"inline\"><mrow><mn>0</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(20 puntos) En el instante inicial la función de onda de una partícula libre es <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Si en cualquier tiempo <math display=\"inline\"><mi>t</mi></math> se mide la cantidad de movimiento <math display=\"inline\"><msub><mi>p</mi><mi>x</mi></msub></math>, ¿qué valores son posibles y cuáles son sus probabilidades?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) Considera el siguiente potencial unidimensional: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>6</mn><mi>x</mi></mfrac><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∞</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Representa gráficamente el potencial y sobre esta figura dibuja cualitativamente la densidad de probabilidad correspondiente al primer estado excitado."
      },
      {
       "mota": "testua",
       "html": "Considerando que tomamos unidades en las que <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ħ</mi><mo>=</mo><mn>1</mn></mrow></math>, la función de onda correspondiente al estado fundamental es <math display=\"block\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>x</mi></mrow></msup><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>≤</mo><mi>x</mi><mo>&lt;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>β</mi></math> son dos constantes a determinar. Calcular la energía del estado fundamental."
      },
      {
       "mota": "testua",
       "html": "Nota: <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>d</mi><mi>x</mi><mspace width=\"0.222em\"></mspace><msup><mi>x</mi><mi>n</mi></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>a</mi><mi>x</mi></mrow></msup><mo>=</mo><msup><mi>a</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>n</mi><mi>!</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(25 puntos) La función de onda de una partícula en el espacio de momentos (<math display=\"inline\"><mi>k</mi></math>, con <math display=\"inline\"><mrow><mi>−</mi><mi>∞</mi><mo>&lt;</mo><mi>k</mi><mo>&lt;</mo><mi>∞</mi></mrow></math>), viene dada por: <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><msup><mrow><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><msub><mi>k</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mo>+</mo><mi>i</mi><mi>π</mi><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>a</mi></math> y <math display=\"inline\"><msub><mi>k</mi><mn>0</mn></msub></math> son parámetros dados."
      },
      {
       "mota": "testua",
       "html": "a) Calcula la función de onda en su representación en el espacio real, <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Calcula <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "(15 puntos) Un sistema pequeño tiene solo dos niveles energéticos. El nivel inferior tiene energía <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> y degeneración <math display=\"inline\"><msub><mi>g</mi><mn>1</mn></msub></math>, mientras que el nivel superior tiene energía <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> y degeneración <math display=\"inline\"><msub><mi>g</mi><mn>2</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "a) Sin realizar ningún cálculo explícito, razona qué valores debe tomar la energía media del sistema en los casos límite de temperaturas muy altas y muy bajas. Haz una representación gráfica cualitativa de la energía media en función de la temperatura <math display=\"inline\"><mi>T</mi></math>."
      },
      {
       "mota": "testua",
       "html": "b) Utilizando el resultado del apartado anterior, haz una representación cualitativa del calor específico en función de la temperatura."
      },
      {
       "mota": "testua",
       "html": "c) ¿Qué magnitud adimensional debe ser suficientemente mayor que la unidad para que podamos decir que estamos en el límite de temperaturas elevadas?"
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Junio 2007",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota sobre la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "A diferencia de la mayoría de los exámenes de este capítulo, este documento (nombrado _soluciones_examen_IEM_jun2007.pdf_) es autocontenido: su primera página es el enunciado completo y las páginas 2 a 14 son la solución oficial manuscrita, con el mismo formato que _Control_Bloque_I_2012_ y _Examen_Mayo_2013_."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para estudiar el efecto Compton se diseña un equipo experimental constituido por un tubo de rayos X, una muestra de carbono, un cristal analizador y un detector de rayos X."
      },
      {
       "mota": "testua",
       "html": "a) Realizar un esquema elemental del dispositivo experimental, mostrando los componentes en las configuraciones requeridas para observar la dispersión Compton a <math display=\"inline\"><mrow><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) El haz de rayos X incidente se monocromatiza a una longitud de onda <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å, y como analizador se utiliza un cristal en el que se utiliza la reflexión de Bragg asociada a los planos cristalinos de espaciado <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>3.023</mn></mrow></math> Å. El espectro medido para un ángulo de dispersión Compton de <math display=\"inline\"><mrow><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> se representa en la figura adjunta en función del ángulo <math display=\"inline\"><mi>θ</mi></math> de la reflexión de Bragg en el analizador: dos picos de intensidad, a <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> (el segundo marcado también con la referencia <math display=\"inline\"><mrow><mn>135</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>, correspondiente al ángulo entre los haces incidente y reflejado en el cristal). A partir de este resultado, calcular el valor de la constante de Planck."
      },
      {
       "mota": "testua",
       "html": "c) Indicar brevemente al menos otros tres métodos experimentales diferentes a este para medir la constante de Planck."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) El dispositivo consta de: un tubo de rayos X que emite un haz monocromático hacia la muestra de carbono; en la muestra se produce la dispersión Compton, con el haz dispersado saliendo a <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>90</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math> del haz incidente; ese haz dispersado incide sobre el cristal analizador, que por reflexión de Bragg (con ángulo <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">Bragg</mtext></msub></math> entre el haz y los planos cristalinos) separa angularmente las distintas longitudes de onda presentes; el haz así difractado llega finalmente al detector de rayos X."
      },
      {
       "mota": "testua",
       "html": "b) Por la ley de Bragg (<math display=\"inline\"><mrow><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mi>n</mi><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>λ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>1</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.750</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7106</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msub><mi>λ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><msub><mi>θ</mi><mn>2</mn></msub><mo>=</mo><mn>2</mn><mo>×</mo><mn>3.023</mn><mspace width=\"0.167em\"></mspace><mrow><mtext mathvariant=\"normal\">Å </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6.944</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.7310</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> (<math display=\"inline\"><msub><mi>λ</mi><mn>1</mn></msub></math> coincide, como cabía esperar, con la <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0.7107</mn></mrow></math> Å del haz incidente mencionada en el enunciado.) El corrimiento Compton es entonces <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><msub><mi>λ</mi><mn>2</mn></msub><mo>−</mo><msub><mi>λ</mi><mn>1</mn></msub><mo>≈</mo><mn>0.0203</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Å</mtext></mrow><mi>.</mi></mrow></math> Y por la fórmula de Compton, con <math display=\"inline\"><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">Compton</mtext></msub><mo>=</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mo>=</mo><mfrac><mi>h</mi><mrow><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>λ</mi><mspace width=\"0.222em\"></mspace><msub><mi>m</mi><mi>e</mi></msub><mi>c</mi></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math> Numéricamente, con <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>80.6</mn><msup><mi></mi><mo>∘</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>0.8367</mn></mrow></math>: <math display=\"block\"><mrow><mi>h</mi><mo>=</mo><mfrac><mrow><mn>0.0203</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>10</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kg </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>×</mo><mn>3</mn><mo>×</mo><msup><mn>10</mn><mn>8</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s</mtext></mrow></mrow><mn>0.8367</mn></mfrac><mo>≈</mo><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> s</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Otros métodos para medir <math display=\"inline\"><mi>h</mi></math>: midiendo el potencial de frenado en función de la frecuencia <math display=\"inline\"><mi>ν</mi></math> en el efecto fotoeléctrico; midiendo la longitud de onda mínima emitida en función del potencial acelerador en un tubo de rayos X; a partir de la medida de la constante de Rydberg; a partir de la medida de la radiación de un cuerpo negro y su ajuste a la función de Planck."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las propiedades térmicas de un gas ideal se pueden explicar utilizando la Física estadística clásica, despreciando la cuantización de los niveles de energía traslacional de las moléculas que forman el gas."
      },
      {
       "mota": "testua",
       "html": "a) Si consideramos un gas ocupando un volumen de <math display=\"inline\"><mn>1</mn></math> cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, estimar la temperatura a partir de la cuál habría que corregir las predicciones de la teoría clásica debido a esos efectos cuánticos."
      },
      {
       "mota": "testua",
       "html": "b) La llamada condensación de Bose-Einstein se produce en un gas poco denso cuando las distancias promedio intermoleculares son del mismo orden de magnitud que el valor típico de la longitud de onda de De Broglie asociada a las moléculas. Utilizando la aproximación clásica para las propiedades térmicas del gas y sabiendo que las densidades típicas utilizadas son del orden de <math display=\"inline\"><msup><mn>10</mn><mn>14</mn></msup></math> átomos<math display=\"inline\"><mrow><mi>/</mi><msup><mtext mathvariant=\"normal\">cm</mtext><mn>3</mn></msup></mrow></math>, estimar la temperatura a la que tendrá lugar la condensación Bose-Einstein."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Los niveles de energía en una caja son <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup></mrow></math>, luego la escala de los saltos de energía viene dada por <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Los fenómenos de cuantización habrá que considerarlos para temperaturas por debajo de aquella en que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>≈</mo><msub><mi>k</mi><mi>B</mi></msub><msub><mi>T</mi><mi>q</mi></msub></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>T</mi><mi>q</mi></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>. Con <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mn>1</mn></mrow></math> cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math> (luego <math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math> cm <math display=\"inline\"><mrow><mo>=</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> m) y tomando como masa <math display=\"inline\"><mi>m</mi></math> el orden de magnitud de un átomo o molécula típica (decenas o centenas de la masa del protón, <math display=\"inline\"><mrow><mi>m</mi><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup></mrow></math> kg): <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6.63</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mo>×</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mo>≈</mo><mn>5</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>39</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>38</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>19</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msub><mi>T</mi><mi>q</mi></msub><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><msub><mi>k</mi><mi>B</mi></msub></mfrac><mo>≈</mo><mfrac><mrow><msup><mn>10</mn><mrow><mi>−</mi><mn>38</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J</mtext></mrow></mrow><mrow><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J/K</mtext></mrow></mrow></mfrac><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>15</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Si la densidad de átomos en el gas es <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><msup><mn>10</mn><mn>14</mn></msup></mrow></math> cm<math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>3</mn></mrow></msup></math>, hay aproximadamente un átomo por volumen elemental <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>ρ</mi></mrow></math>, luego la distancia típica entre átomos es del orden de: <math display=\"block\"><mrow><mi>d</mi><mo>≈</mo><msup><mi>ρ</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>14</mn></mrow></msup><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> cm</mtext></mrow><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn><mi>/</mi><mn>3</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mi>.</mi></mrow></math> Por otro lado, usando la Física estadística clásica, <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, luego el orden de magnitud del momento lineal es <math display=\"inline\"><mrow><msub><mi>p</mi><mi>T</mi></msub><mo>≈</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>p</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msqrt></mrow></math>, y la longitud de onda de De Broglie asociada, <math display=\"block\"><mrow><msub><mi>λ</mi><mi>B</mi></msub><mo>=</mo><mfrac><mi>h</mi><msub><mi>p</mi><mi>T</mi></msub></mfrac><mo>=</mo><mfrac><mi>h</mi><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msqrt></mfrac><mi>.</mi></mrow></math> La condensación de Bose-Einstein ocurre cuando <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>B</mi></msub><mo>≈</mo><mi>d</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">B-E </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mspace width=\"0.222em\"></mspace><msup><mi>d</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><mi>m</mi><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup></mrow></math> kg (mismo orden que en a)): <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">B-E </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>6.6</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>3</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>25</mn></mrow></msup><mo>×</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>40</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></mfrac><mo>≈</mo><mn>4.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> μK</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos un sistema sencillo con tres niveles de energía <math display=\"inline\"><mrow><mi>−</mi><mi>ε</mi></mrow></math>, <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mrow><mi>+</mi><mi>ε</mi></mrow></math> y degeneraciones <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>. El sistema está en contacto térmico con un reservorio de temperatura <math display=\"inline\"><mi>T</mi></math> y alcanza el equilibrio térmico. Demostrar que el calor específico del sistema es: <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La función de partición de una partícula: <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>E</mi><mi>i</mi></msub></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>ε</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>ε</mi></mrow></msup><mo>=</mo><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mi>.</mi></mrow></math> La energía media: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>Z</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>Z</mi></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>ε</mi><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>ε</mi><mi>.</mi></mrow></math> El calor específico, con <math display=\"inline\"><mrow><mi>∂</mi><mi>β</mi><mi>/</mi><mi>∂</mi><mi>T</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>β</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Derivando <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>ε</mi><mn>2</mn></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> y usando <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, el numerador se reduce a <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>1</mn></mrow></math>, con lo que <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ε</mi><mn>2</mn></msup><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mo>,</mo></mrow></math> que es el resultado pedido. <math display=\"inline\"><mi>◼</mi></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula de masa <math display=\"inline\"><mi>m</mi></math> se encuentra en un pozo de potencial infinito de anchura <math display=\"inline\"><mi>L</mi></math>, situado en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. La función de onda <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la partícula es nula excepto dentro del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, donde es constante. Calcular su incertidumbre en la posición, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi></mrow></math> constante en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y cero en el resto. La normalización: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>A</mi><mn>2</mn></msup><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>L</mi></mfrac></msqrt><mi>.</mi></mrow></math> El valor medio de la posición: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>8</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mi>L</mi><mo>,</mo></mrow></math> como cabía esperar, en la mitad del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>L</mi><mi>/</mi><mn>2</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. Y <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><msup><mi>A</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow><mi>L</mi></msubsup><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>L</mi><mn>3</mn></msup><mn>24</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>7</mn><mn>12</mn></mfrac><msup><mi>L</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> La incertidumbre: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>x</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mrow><mfrac><mn>7</mn><mn>12</mn></mfrac><mo>−</mo><mfrac><mn>9</mn><mn>16</mn></mfrac></mrow></msqrt><mo>=</mo><mi>L</mi><msqrt><mfrac><mn>1</mn><mn>48</mn></mfrac></msqrt><mo>≈</mo><mfrac><mn>1</mn><mn>7</mn></mfrac><mi>L</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una partícula cargada de masa <math display=\"inline\"><mi>m</mi></math> se encuentra localizada entre los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>, confinada en un pozo de potencial infinito de anchura <math display=\"inline\"><mi>L</mi></math>."
      },
      {
       "mota": "testua",
       "html": "a) ¿Cuál sería la longitud de onda máxima de la radiación que emitiría la partícula al pasar de un estado excitado a otro?"
      },
      {
       "mota": "testua",
       "html": "b) Ahora supongamos que la partícula se encuentra en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> en el estado dado por la función (sin normalizar) <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Determinar la expresión de la densidad de probabilidad de presencia de la partícula en un instante <math display=\"inline\"><mi>t</mi></math> cualquiera posterior. ¿Cuál es la densidad de probabilidad de presencia en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math> en función del tiempo <math display=\"inline\"><mi>t</mi></math>?"
      },
      {
       "mota": "testua",
       "html": "c) Bajo las mismas condiciones que en el apartado b, ¿cuál es la incertidumbre de la energía en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>10</mn></mrow></math> s?"
      },
      {
       "mota": "testua",
       "html": "Ayuda: <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mspace width=\"0.222em\"></mspace><msup><mi>n</mi><mn>2</mn></msup></mrow></math>, con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><msup><mi>h</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La frecuencia emitida en una transición <math display=\"inline\"><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>→</mo><mi>n</mi></mrow></math> es <math display=\"block\"><mrow><mi>h</mi><msub><mi>ν</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>n</mi></mrow></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msub><mi>E</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>E</mi><mi>n</mi></msub><mi>.</mi></mrow></math>. La frecuencia menor (y por tanto la longitud de onda mayor) ocurre para la transición de menor salto relativo, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>→</mo><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mi>h</mi><msub><mi>ν</mi><mrow><mtext mathvariant=\"normal\">min </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>×</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mrow><mi>h</mi><mi>c</mi></mrow><mrow><mn>3</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>8</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mi>c</mi></mrow><mrow><mn>3</mn><mi>h</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Usando la ayuda, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>3</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Las funciones seno que aparecen (salvo normalización) son los estados estacionarios del pozo infinito para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mi>L</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>/</mi><mi>L</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Escribiendo <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mi>N</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>4</mn><mi>A</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>4</mn><mi>A</mi><msqrt><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></msqrt></mrow></math>, la normalización <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> da <math display=\"block\"><mrow><mfrac><mi>L</mi><mn>2</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>9</mn><mn>16</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>16</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>5</mn><mn>16</mn></mfrac><msup><mi>A</mi><mn>2</mn></msup><mi>L</mi><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mo>=</mo><mn>4</mn><msqrt><mfrac><mn>1</mn><mrow><mn>5</mn><mi>L</mi></mrow></mfrac></msqrt><mi>.</mi></mrow></math> Con esto, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn><msqrt><mrow><mn>1</mn><mi>/</mi><mn>10</mn></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><msub><mi>c</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><msqrt><mrow><mn>1</mn><mi>/</mi><mn>10</mn></mrow></msqrt></mrow></math> (en módulo, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>9</mn><mi>/</mi><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mi>/</mi><mn>10</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "La evolución temporal: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>1</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>+</mo><msub><mi>c</mi><mn>3</mn></msub><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><msub><mi>E</mi><mn>3</mn></msub><mi>t</mi><mi>/</mi><mi>ħ</mi></mrow></msup><mo>,</mo></mrow></math> y la densidad de probabilidad: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><msub><mi>c</mi><mn>1</mn></msub><msub><mi>c</mi><mn>3</mn></msub><msub><mi>φ</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>φ</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mi>/</mi><mi>ħ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mo>=</mo><mfrac><mn>1</mn><mrow><mn>10</mn><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>18</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>12</mn><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>t</mi><mi>ħ</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Con <math display=\"inline\"><mrow><msub><mi>E</mi><mn>3</mn></msub><mo>−</mo><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><mn>9</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></math>, y evaluando en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math> (donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi mathvariant=\"normal\">Ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>10</mn><mi>L</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>18</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>12</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>ħ</mi></mfrac><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mo>−</mo><mn>1.2</mn><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>8</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow><mi>ħ</mi></mfrac><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mn>1</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msub><mi>E</mi><mn>3</mn></msub><mo>=</mo><mfrac><mn>9</mn><mn>10</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>+</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9</mn><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>9</mn><mn>5</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>E</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>1</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mi>E</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><msub><mi>c</mi><mn>3</mn></msub><msup><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>2</mn></msup><msubsup><mi>E</mi><mn>3</mn><mn>2</mn></msubsup><mo>=</mo><mfrac><mn>9</mn><mn>10</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><msup><mi>E</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>81</mn><mi mathvariant=\"normal\">Δ</mi><msup><mi>E</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>9</mn><mi mathvariant=\"normal\">Δ</mi><msup><mi>E</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><msub><mi>E</mi><mrow><mtext mathvariant=\"normal\">incert </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>E</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><msqrt><mrow><mn>9</mn><mo>−</mo><mfrac><mn>81</mn><mn>25</mn></mfrac></mrow></msqrt><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><msqrt><mfrac><mn>144</mn><mn>25</mn></mfrac></msqrt><mo>=</mo><mfrac><mn>12</mn><mn>5</mn></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>.</mi></mrow></math> Esta incertidumbre NO depende del tiempo (es constante, como debe ser: la energía es una constante del movimiento para un estado que no cambia su composición en autoestados)."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Física cuántica: formalismo moderno",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El origen experimental de la cuantización (cuerpo negro, efecto fotoeléctrico, Compton, modelos atómicos, De Broglie) y el desarrollo formal de la ecuación de Schrödinger (postulado de Born, normalización, delta de Dirac, pozo infinito) ya están cubiertos. Todavía faltan: la notación bra-ket, los operadores hermíticos y los observables de forma abstracta, el principio de incertidumbre de forma formal, y la producción y aniquilación de pares (§4, apartado que en la fuente original solo tenía título)."
      }
     ]
    }
   ]
  }
 ]
};
