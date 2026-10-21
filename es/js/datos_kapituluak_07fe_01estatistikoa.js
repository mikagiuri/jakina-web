/* JAKINA · kapitulua «B10.2 - M27 Fisika estatistikoa» (07fe_01estatistikoa), desde edicion2/kapituluak/07fe_01estatistikoa/07fe_01estatistikoa.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["07fe_01estatistikoa"] = {
 "gakoa": "07fe_01estatistikoa",
 "titulua": "JAKINA - B10.2 - M27 Física estadística",
 "azala": "B10.2 - M27 Física estadística",
 "azpititulua": "Etapa IV - L2",
 "iturburua": "kapituluak/07fe_01estatistikoa/07fe_01estatistikoa.typ",
 "sarrera": [
  {
   "mota": "modulua",
   "kodea": "M27",
   "izenburua": "Física estadística",
   "maila": "L2"
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M22 — Termodinámica; M21 — Probabilidad y estadística"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "FismoTex SEGUNDO BLOQUE.pdf",
   "xehetasuna": "Mikel Aguirre, del usuario al 100 %; microestados/macroestados, postulado fundamental y sólido de Einstein",
   "hizkuntza": "es"
  },
  {
   "mota": "iturria",
   "proiektua": "cuaderno fismo",
   "xehetasuna": "Mikel Aguirre, del usuario al 100 %; Bloque 2: Mecánica Estadística (distribución de Boltzmann, estadísticas cuánticas, gas de electrones libres)",
   "hizkuntza": "es"
  },
  {
   "mota": "iturria",
   "proiektua": "fismo_2bloque_teoria",
   "xehetasuna": "Mikel Aguirre, del usuario al 100 %; Bloque 2 completo (temas 11-16): sobre todo gas ideal clásico (tema 14) y rotor rígido/molécula diatómica (tema 15); el resto es repetición/mejora de lo ya trabajado",
   "hizkuntza": "es"
  },
  {
   "mota": "iturria",
   "proiektua": "fismo_2bloque_ejercicios",
   "xehetasuna": "Física Moderna, ZTF-UPV/EHU. Boletín oficial impreso, por temas (11-16), con hoja de Resultados y resolución manuscrita",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Fundamentos de la mecánica estadística",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo reproduce y desarrolla apuntes propios del usuario (Mikel Aguirre) — parte de ellos ya tipografiados en LaTeX (<code>FismoTex SEGUNDO BLOQUE.pdf</code>) y parte manuscritos en su cuaderno de física moderna (&quot;2. Blokea: Mekanika Estatistikoa&quot;). No es un libro de terceros: por eso se reproduce con total libertad. La derivación general del sólido de Einstein es una exposición propia estándar, basada en el ejercicio numérico concreto que aparece en el cuaderno (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math>)."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 1,
   "izenburua": "Microestados y macroestados: el ejemplo de la moneda",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Antes de tratar sistemas físicos, conviene fijar el vocabulario con un ejemplo puramente combinatorio. Supongamos que tenemos una moneda: una cara es roja y la otra es azul. La lanzamos cuatro veces. ¿Cuáles son todas las combinaciones posibles?"
    },
    {
     "mota": "testua",
     "html": "Hay <math display=\"inline\"><mrow><msup><mn>2</mn><mn>4</mn></msup><mo>=</mo><mn>16</mn></mrow></math> resultados posibles, cada uno una secuencia concreta de cuatro colores (por ejemplo, rojo-rojo-azul-rojo). A cada uno de estos resultados —una descripción completa y detallada del sistema— lo llamamos <strong>microestado</strong>. Si lanzamos la moneda <math display=\"inline\"><mi>N</mi></math> veces, el número total de microestados posibles es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>W</mi><mo>=</mo><msup><mn>2</mn><mi>N</mi></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>N</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℕ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Primer postulado.</strong> En un microestado, todos los intentos son independientes y la moneda no está trucada, así que todos los microestados tienen la misma probabilidad de ocurrir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">emandako mikroegoera bat</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ahora bien, si no nos importa la secuencia exacta sino solo <strong>cuántas</strong> caras rojas y cuántas azules salieron, la pregunta cambia. Para <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>4</mn></mrow></math>, contando cuántos microestados corresponden a cada resultado:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "4 rojas y 0 azules: 1 combinación.",
      "3 rojas y 1 azul: 4 combinaciones.",
      "2 rojas y 2 azules: 6 combinaciones.",
      "1 roja y 3 azules: 4 combinaciones.",
      "0 rojas y 4 azules: 1 combinación."
     ]
    },
    {
     "mota": "testua",
     "html": "A cada uno de estos resultados agrupados —definido solo por <strong>cuántas</strong> hay de cada tipo, no por el orden— lo llamamos <strong>macroestado</strong>. Un macroestado agrupa, en general, muchos microestados distintos."
    },
    {
     "mota": "testua",
     "html": "<strong>Segundo postulado.</strong> El macroestado que tiene más microestados asociados es el más probable. Para contar cuántos microestados corresponden a un macroestado dado —<math display=\"inline\"><mi>n</mi></math> caras rojas y <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow></math> azules, en cualquier orden— usamos la combinatoria: es el número de formas de elegir qué <math display=\"inline\"><mi>n</mi></math> de los <math display=\"inline\"><mi>N</mi></math> lanzamientos fueron rojos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>N</mi><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>4</mn></mrow></math> esta fórmula reproduce exactamente los números de arriba: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "El macroestado más probable",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<strong>Ejercicio.</strong> Demuestra que, para <math display=\"inline\"><mi>N</mi></math> par, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> crece mientras <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> y decrece cuando <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math>; y que, para <math display=\"inline\"><mi>N</mi></math> impar, el máximo ocurre en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mo>±</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>Respuesta.</em> Consideremos el cociente entre valores consecutivos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este cociente es mayor que 1 —es decir, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> está creciendo— exactamente cuando <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo>&gt;</mo><mi>n</mi></mrow></math>, o sea cuando <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math>. Para <math display=\"inline\"><mi>N</mi></math> par esto equivale a <math display=\"inline\"><mrow><mi>n</mi><mo>≤</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math>; para <math display=\"inline\"><mi>N</mi></math> impar, a <math display=\"inline\"><mrow><mi>n</mi><mo>≤</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math>. Por simetría (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, elegir <math display=\"inline\"><mi>n</mi></math> rojas es lo mismo que elegir <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow></math> azules), el comportamiento decreciente en la segunda mitad es el reflejo del creciente en la primera. El máximo se alcanza, por tanto, en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> si <math display=\"inline\"><mi>N</mi></math> es par, y en cualquiera de los dos valores centrales <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mo>±</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math> si <math display=\"inline\"><mi>N</mi></math> es impar (ambos dan el mismo <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>, por la misma simetría)."
    },
    {
     "mota": "testua",
     "html": "<strong>¿Qué tan pronunciado es ese máximo?</strong> Cuando <math display=\"inline\"><mi>N</mi></math> es muy grande —del orden del número de Avogadro, como en cualquier sistema físico real— puede demostrarse (usando la aproximación de Stirling sobre los factoriales) que la anchura relativa de la distribución alrededor del máximo se estrecha como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>N</mi></msqrt></mrow></math>: para <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msup><mn>10</mn><mn>24</mn></msup></mrow></math>, la probabilidad de que el sistema se desvíe de forma apreciable del reparto <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac></mrow></math> es astronómicamente pequeña. Esta es la razón profunda por la que un sistema macroscópico en equilibrio no se aparta jamás, de forma perceptible, del macroestado de máxima multiplicidad: no es que las demás configuraciones sean imposibles, es que son <strong>estadísticamente</strong> irrelevantes frente al número aplastante de microestados que tiene la configuración de equilibrio."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "El postulado fundamental de la mecánica estadística",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El ejemplo de la moneda se generaliza directamente a cualquier sistema físico aislado. Un sistema físico —un gas, un sólido, un conjunto de espines— tiene, para una energía total <math display=\"inline\"><mi>U</mi></math> dada, un número enorme de configuraciones microscópicas compatibles con esa energía (posiciones y momentos de todas sus partículas, o estados cuánticos ocupados). A cada una de ellas la llamamos microestado del sistema."
    },
    {
     "mota": "oharra",
     "titulua": "Postulado fundamental",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema aislado en equilibrio, con energía total <math display=\"inline\"><mi>U</mi></math> fija, tiene la misma probabilidad de encontrarse en cualquiera de sus microestados accesibles."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Igual que antes, distintas configuraciones macroscópicas del sistema (definidas por variables observables, no por el estado microscópico exacto) tendrán, en general, un número muy distinto de microestados asociados. Llamamos <strong>multiplicidad</strong> <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> de un macroestado al número de microestados que le corresponden. El macroestado de equilibrio es, por el mismo argumento de antes, el de multiplicidad máxima: es el que domina de forma abrumadora sobre todos los demás cuando el sistema tiene muchísimas partículas."
    },
    {
     "mota": "testua",
     "html": "Esta idea —que el equilibrio termodinámico <strong>es</strong>, microscópicamente, el macroestado más probable— es el puente entre la mecánica (que describe microestados) y la termodinámica (que describe macroestados). La conexión precisa con la entropía, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>, se establece en el capítulo siguiente."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "¿Por qué <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math>? Dos subsistemas en contacto",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El capítulo siguiente introduce la distribución de Boltzmann mediante el multiplicador de Lagrange <math display=\"inline\"><mi>β</mi></math>, identificado con <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> &quot;por comparación con la termodinámica&quot;. Esa identificación puede fundamentarse rigurosamente, sin dar nada por supuesto, considerando dos subsistemas distintos en contacto térmico."
    },
    {
     "mota": "irudia",
     "oina": "Dos subsistemas, con <math display=\"inline\"><mi>N</mi></math> y <math display=\"inline\"><mi>M</mi></math> partículas respectivamente (y distintos niveles de energía, <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math> y <math display=\"inline\"><msubsup><mi>ε</mi><mi>i</mi><mo>′</mo></msubsup></math>), en contacto térmico dentro de un sistema conjunto aislado: la energía puede fluir de uno a otro, pero las partículas no pueden pasar de un subsistema al otro, y el número de partículas de cada uno, así como la energía total, son fijos.",
     "src": "../media/irudiak/46dd99d77640ece8.svg",
     "zabalera": 224
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> la ocupación de los niveles del subsistema <math display=\"inline\"><mi>N</mi></math> y <math display=\"inline\"><msub><mi>m</mi><mi>i</mi></msub></math> la de los niveles del subsistema <math display=\"inline\"><mi>M</mi></math>. La multiplicidad del sistema conjunto es el producto, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub><mo>=</mo><mi>N</mi><mi>!</mi><mi>/</mi><msub><mo>∏</mo><mi>i</mi></msub><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mo>×</mo><mi>M</mi><mi>!</mi><mi>/</mi><msub><mo>∏</mo><mi>i</mi></msub><msub><mi>m</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub></mrow></math>, y hay que maximizar <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> sujeto a <strong>tres</strong> condiciones: <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>m</mi><mi>i</mi></msub><mo>=</mo><mi>M</mi></mrow></math> (el número de partículas de cada subsistema se conserva por separado), y la energía <strong>total</strong> <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>+</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>m</mi><mi>i</mi></msub><msubsup><mi>ε</mi><mi>i</mi><mo>′</mo></msubsup></mrow></math> fija (pero no las energías de cada subsistema por separado: pueden intercambiar energía). Introduciendo tres multiplicadores <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> (uno por cada <strong>condición de partículas</strong>) y uno solo, <math display=\"inline\"><mi>β</mi></math>, para la condición conjunta de energía, y repitiendo el procedimiento de Lagrange + Stirling de siempre sobre cada <math display=\"inline\"><msub><mi>n</mi><mi>j</mi></msub></math> y cada <math display=\"inline\"><msub><mi>m</mi><mi>j</mi></msub></math> por separado se obtiene"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mi>j</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>α</mi><mn>1</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>m</mi><mi>j</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>α</mi><mn>2</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msubsup><mi>ε</mi><mi>j</mi><mo>′</mo></msubsup></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>El punto esencial: el mismo <math display=\"inline\"><mi>β</mi></math> aparece en ambas fórmulas.</strong> Esto no es una coincidencia ni una elección de conveniencia — es una consecuencia directa de haber impuesto una única condición sobre la energía <strong>total</strong> del sistema conjunto (en vez de una condición separada para la energía de cada subsistema): matemáticamente, solo puede haber un multiplicador de Lagrange para una única restricción. Físicamente, <math display=\"inline\"><mi>β</mi></math> es entonces una propiedad <strong>compartida</strong> por cualquier par de sistemas en equilibrio térmico entre sí — exactamente la definición operativa de temperatura en termodinámica (la magnitud que se iguala cuando dos cuerpos alcanzan el equilibrio térmico). Esto identifica a <math display=\"inline\"><mi>β</mi></math> como una función de la temperatura común a ambos subsistemas, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, aunque no fija todavía su forma exacta."
    },
    {
     "mota": "testua",
     "html": "<strong>Por qué <math display=\"inline\"><mrow><mi>S</mi><mo>∝</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> (y no otra función).</strong> La entropía debe ser una magnitud <strong>extensiva</strong>: la del sistema conjunto debe ser la suma de las de sus partes, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>. Pero la multiplicidad del sistema conjunto es el <strong>producto</strong> de las multiplicidades, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub></mrow></math> (cada microestado de <math display=\"inline\"><mi>N</mi></math> puede combinarse con cualquier microestado de <math display=\"inline\"><mi>M</mi></math>). La única forma de que una cantidad que depende de <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> sea aditiva cuando <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es multiplicativa es que dependa de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>: <math display=\"inline\"><mrow><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>S</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"normal\">Ω</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se satisface si <math display=\"inline\"><mrow><mi>S</mi><mo>∝</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> (es la ecuación funcional del logaritmo). Junto con la identificación termodinámica <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>S</mi><mi>/</mi><mi>∂</mi><mi>U</mi><msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>N</mi><mo>,</mo><mi>V</mi></mrow></msub></mrow></math>, esto fija la constante de proporcionalidad como <math display=\"inline\"><msub><mi>k</mi><mi>B</mi></msub></math> y cierra el círculo: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, coherentes entre sí y con la termodinámica clásica."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "El sólido de Einstein: un ejemplo con energía cuantizada",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos un modelo sencillo de sólido: <math display=\"inline\"><mi>N</mi></math> átomos, cada uno vibrando como un oscilador armónico cuántico independiente de la misma frecuencia <math display=\"inline\"><mi>ν</mi></math>, con niveles de energía <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, midiendo la energía desde el punto cero). Si el sólido tiene una energía total <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>q</mi><mi>h</mi><mi>ν</mi></mrow></math>, con <math display=\"inline\"><mi>q</mi></math> un entero, el problema es repartir <math display=\"inline\"><mi>q</mi></math> &quot;cuantos&quot; de energía indistinguibles entre los <math display=\"inline\"><mi>N</mi></math> osciladores (distinguibles, porque cada uno ocupa una posición fija en la red)."
    },
    {
     "mota": "testua",
     "html": "Es un problema combinatorio clásico —&quot;bolas en cajas&quot;—: ¿de cuántas formas se pueden repartir <math display=\"inline\"><mi>q</mi></math> objetos indistinguibles entre <math display=\"inline\"><mi>N</mi></math> cajas distinguibles (cada oscilador puede recibir cualquier número de cuantos, de 0 a <math display=\"inline\"><mi>q</mi></math>)? La respuesta es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn></mrow><mi>q</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mi>q</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(el argumento habitual —&quot;estrellas y barras&quot;— es: alinear los <math display=\"inline\"><mi>q</mi></math> cuantos y los <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></math> separadores entre cajas en una fila, y contar de cuántas formas se pueden intercalar; hay <math display=\"inline\"><mrow><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn></mrow></math> posiciones en total, de las cuales hay que elegir cuáles <math display=\"inline\"><mi>q</mi></math> son cuantos)."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo numérico.</strong> Para <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math> osciladores con energía total <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>h</mi><mi>ν</mi></mrow></math> (es decir, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>6</mn></mrow></math> cuantos), la multiplicidad total es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>15</mn><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>15</mn><mi>!</mi></mrow><mrow><mn>6</mn><mi>!</mi><mspace width=\"0.167em\"></mspace><mn>9</mn><mi>!</mi></mrow></mfrac><mo>=</mo><mn>5005</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cada uno de esos 5005 microestados corresponde a una forma distinta de repartir los 6 cuantos entre los 10 osciladores (por ejemplo: un oscilador con los 6 cuantos y los otros 9 en reposo; o seis osciladores distintos con un cuanto cada uno y los otros cuatro en reposo; o cualquier reparto intermedio) — y, según el postulado fundamental, los 5005 son igualmente probables."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 1,
   "izenburua": "La distribución de Boltzmann",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo reproduce y desarrolla apuntes propios del usuario (Mikel Aguirre) de su cuaderno de física moderna (&quot;2. Blokea: Mekanika Estatistikoa&quot;). No es un libro de terceros — se reproduce con la misma libertad que el resto de MASTERFISMOtex. La derivación general se presenta en la forma estándar (multiplicadores de Lagrange sobre la multiplicidad), basada en el desarrollo del cuaderno."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Derivación de la distribución de equilibrio",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"inline\"><mi>N</mi></math> partículas idénticas, distinguibles (por ejemplo, por su posición en una red) y sin interacción entre ellas, cada una de las cuales puede ocupar cualquiera de un conjunto de niveles de energía <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math>. Un macroestado queda definido por los números de ocupación <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> (cuántas partículas hay en el nivel <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math>), sujetos a las dos condiciones que fijan el sistema:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (número total de partículas) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>U</mi><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (energía total) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La multiplicidad de un macroestado dado es el número de formas de repartir las <math display=\"inline\"><mi>N</mi></math> partículas distinguibles en los grupos de ocupación <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><munder><mo>∏</mo><mi>i</mi></munder><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Buscamos el macroestado de equilibrio: el que maximiza <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> (o, equivalentemente, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math>, que es más cómodo de manejar) sujeto a las dos condiciones anteriores. Usando multiplicadores de Lagrange <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> para las dos condiciones, y la aproximación de Stirling (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>!</mi><mo>≈</mo><mi>n</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mo>−</mo><mi>n</mi></mrow></math>) para tratar <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> con <math display=\"inline\"><mi>N</mi></math> grande:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo>−</mo><mi>N</mi><mo>−</mo><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Maximizamos <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>−</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mi>N</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><mi>U</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> respecto de cada <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><msub><mi>n</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mn>1</mn><mo>+</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>−</mi><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La constante <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi></mrow></msup></math> se fija con la condición <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math>. Definiendo la <strong>función de partición</strong>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "se obtiene <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi></mrow></msup><mo>=</mo><mi>N</mi><mi>/</mi><mi>z</mi></mrow></math>, y la distribución de equilibrio (<strong>distribución de Boltzmann</strong>) resulta"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mfrac><mi>N</mi><mi>z</mi></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Identificación de <math display=\"inline\"><mi>β</mi></math>.</strong> El multiplicador <math display=\"inline\"><mi>β</mi></math> resulta ser <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: puede comprobarse (comparando la definición termodinámica de la temperatura, <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi><mo>=</mo><mi>∂</mi><mi>S</mi><mi>/</mi><mi>∂</mi><mi>U</mi></mrow></math>, con la expresión estadística de la entropía que se da a continuación) que solo con esa identificación las fórmulas de la mecánica estadística reproducen la termodinámica ordinaria."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Magnitudes termodinámicas a partir de <math display=\"inline\"><mi>z</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, todas las magnitudes termodinámicas del sistema se obtienen a partir de la función de partición <math display=\"inline\"><mi>z</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mi>/</mi><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>U</mi><mi>/</mi><mi>T</mi><mo>+</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(esta última se obtiene sustituyendo la distribución de equilibrio en <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi></mrow></math> y usando Stirling; la constante aditiva depende del convenio, y en muchos casos —cuando se puede reabsorber en una redefinición de <math display=\"inline\"><mi>z</mi></math>— se escribe simplemente <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>+</mo><mi>U</mi><mi>/</mi><mi>T</mi></mrow></math>). Y la energía libre de Helmholtz:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mi>U</mi><mo>−</mo><mi>T</mi><mi>S</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Estas tres fórmulas son la caja de herramientas de toda la mecánica estadística clásica: basta con calcular <math display=\"inline\"><mi>z</mi></math> para un sistema dado —una suma (o integral, en el caso continuo) sobre sus niveles de energía accesibles— para obtener <math display=\"inline\"><mi>U</mi></math>, <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>F</mi></math>, y de ahí cualquier otra magnitud termodinámica."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Ejemplo: sistema de dos niveles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"inline\"><mi>N</mi></math> partículas que solo pueden ocupar dos niveles de energía, <math display=\"inline\"><msub><mi>ε</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math>, con <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> partículas en el nivel 1 y <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></math> en el nivel 2."
    },
    {
     "mota": "testua",
     "html": "<strong>Verificación cruzada de la entropía.</strong> Podemos calcular el cambio de entropía al pasar una partícula del nivel 1 al nivel 2 (pasando de <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> a <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow></math> partículas en el nivel 1) por dos caminos independientes, y comprobar que coinciden."
    },
    {
     "mota": "testua",
     "html": "<strong>Vía termodinámica</strong>, usando <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>+</mo><mi>U</mi><mi>/</mi><mi>T</mi></mrow></math> (con <math display=\"inline\"><mrow><msub><mi>U</mi><mn>1</mn></msub><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math> antes del cambio, <math display=\"inline\"><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>ε</mi><mn>2</mn></msub></mrow></math> después, y la misma <math display=\"inline\"><mi>z</mi></math> en ambos casos porque el sistema no ha cambiado, solo la ocupación):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msub><mi>S</mi><mn>2</mn></msub><mo>−</mo><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><msub><mi>U</mi><mn>2</mn></msub><mo>−</mo><msub><mi>U</mi><mn>1</mn></msub></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>2</mn></msub></mrow><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Vía estadística</strong>, contando directamente la multiplicidad de cada macroestado, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>S</mi><mn>2</mn></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow><mrow><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aunque las dos expresiones de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></math> parecen distintas a primera vista, son la misma cantidad calculada de dos formas: una a partir de la distribución de equilibrio ya sustituida (que relaciona <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> con <math display=\"inline\"><msub><mi>ε</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> y <math display=\"inline\"><mi>T</mi></math>), la otra directamente de la combinatoria — es la consistencia que garantiza que la mecánica estadística y la termodinámica describen el mismo sistema."
    },
    {
     "mota": "testua",
     "html": "<strong>Poblaciones relativas.</strong> De la distribución de Boltzmann, la razón de poblaciones entre los dos niveles es simplemente"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>1</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo numérico.</strong> Para dos niveles separados <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> eV a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8.617</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV/K </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>⋅</mo><mn>300</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>≈</mo><msup><mi>e</mi><mn>38.7</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "un número astronómicamente grande: a temperatura ambiente, prácticamente todas las partículas están en el nivel de menor energía cuando la separación es del orden del electronvoltio (mucho mayor que <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≈</mo><mn>0.026</mn></mrow></math> eV a esa temperatura)."
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Calor específico: la anomalía de Schottky",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tomemos ahora el mismo sistema de dos niveles, pero centrado simétricamente en el origen de energías: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mi>+</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> (con <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> la mitad de la separación entre niveles). La función de partición de una sola partícula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La energía media por partícula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><munder><mo>∑</mo><mi>j</mi></munder><msub><mi>ε</mi><mi>j</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow><mrow><munder><mo>∑</mo><mi>j</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mi>j</mi></msub></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>β</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y la energía interna del sistema de <math display=\"inline\"><mi>N</mi></math> partículas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Energía interna <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en función de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (equivalentemente, de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>): tiende a 0 a temperaturas altas (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, poblaciones casi iguales) y a <math display=\"inline\"><mrow><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> a temperaturas bajas (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, todas las partículas en el estado fundamental).",
     "src": "../media/irudiak/3f47a998a70fde42.svg",
     "zabalera": 352
    },
    {
     "mota": "testua",
     "html": "Las poblaciones relativas se comportan de forma coherente con este límite:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mtext mathvariant=\"normal\">Prob</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>2</mn></msub></mrow></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><msub><mi>ε</mi><mn>1</mn></msub></mrow></msup></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>β</mi><mi mathvariant=\"normal\">Δ</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T bajas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mo>→</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"normal\">Δ</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T altas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mo>→</mo><mn>1</mn></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo numérico.</strong> Para <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mn>1</mn></mrow></math> eV y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>1000</mn></mrow></math> K:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eV</mtext></mrow></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0.025</mn><mtext mathvariant=\"normal\">eV</mtext><mi>/</mi><mn>300</mn><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>×</mo><mn>1000</mn><mi>K</mi></mrow></mfrac><mo>=</mo><mfrac><mn>0.3</mn><mn>0.025</mn></mfrac><mo>=</mo><mn>12</mn><mo>≫</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— estamos claramente en el régimen de temperaturas bajas (en el sentido de este problema: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>≫</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, no que <math display=\"inline\"><mi>T</mi></math> sea literalmente baja)."
    },
    {
     "mota": "testua",
     "html": "<strong>El calor específico.</strong> Derivando <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> respecto de la temperatura, con <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>1</mn><mi>/</mi><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mfrac><mn>1</mn><mrow><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En los dos límites de temperatura, se tiene <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>0</mn></mrow></math> por razones distintas:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo>≪</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T altas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mo>→</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mi mathvariant=\"normal\">Δ</mi><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo>≫</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">T bajas</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><mfrac><mrow><mi>N</mi><msup><mi mathvariant=\"normal\">Δ</mi><mn>2</mn></msup></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "El calor específico de Schottky <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: nulo en ambos límites (T baja: &quot;congelado&quot; por la cuantización, exactamente igual que vimos con la catástrofe ultravioleta y el sólido de Einstein; T alta: el sistema, con energía total acotada entre <math display=\"inline\"><mrow><mi>−</mi><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>N</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, no puede seguir absorbiendo energía indefinidamente), con un máximo pronunciado en la escala <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> y una cola que decae como <math display=\"inline\"><msup><mi>T</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> a temperaturas altas.",
     "src": "../media/irudiak/67baa5abd63bb3bf.svg",
     "zabalera": 288
    },
    {
     "mota": "testua",
     "html": "Esta forma de <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> —nula en ambos extremos, con un máximo intermedio— es la firma característica de cualquier sistema cuya energía total está acotada (a diferencia de, por ejemplo, un gas ideal clásico, cuyo calor específico no depende de <math display=\"inline\"><mi>T</mi></math>): aparece cada vez que hay un espectro de energía discreto y finito, y se conoce como <strong>anomalía de Schottky</strong>."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "Ejemplo: paramagnetismo y la ley de Curie",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"inline\"><mi>N</mi></math> átomos con momento angular <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mi>ħ</mi></mrow></math> (número cuántico <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow></math>) en un campo magnético externo <math display=\"inline\"><mi>B</mi></math>. Por el desdoblamiento tipo Zeeman, cada átomo tiene tres niveles de energía posibles, según su proyección <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>−</mi><mi>ħ</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>ħ</mi></mrow></msub><mo>=</mo><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ε</mi><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>ε</mi><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>ħ</mi></mrow></msub><mo>=</mo><mi>−</mi><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><msub><mi>μ</mi><mi>B</mi></msub></math> es el magnetón de Bohr, <math display=\"inline\"><msub><mi>g</mi><mi>j</mi></msub></math> el factor giromagnético y <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> un desplazamiento común a los tres niveles (que no afecta a nada de lo que sigue, porque siempre aparece en diferencias de energía). La función de partición de un solo átomo es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>2</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>3</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Magnetización y susceptibilidad.</strong> La magnetización se obtiene de la energía libre, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>−</mi><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>B</mi></mrow></math>, y la susceptibilidad magnética de <math display=\"inline\"><mrow><mi>χ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>M</mi><mi>/</mi><mi>B</mi></mrow></math>. Derivando <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math> respecto de <math display=\"inline\"><mi>B</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>M</mi><mo>=</mo><mn>2</mn><mi>N</mi><msub><mi>μ</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi mathvariant=\"normal\">cosh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ley de Curie.</strong> En el límite de temperatura alta o campo débil, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>j</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (que es, con diferencia, el régimen relevante en la práctica: a temperatura ambiente y campos de laboratorio, la energía Zeeman es muchísimo menor que <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>), podemos aproximar <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>, y la susceptibilidad se simplifica a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>χ</mi><mo>∝</mo><mfrac><mn>1</mn><mi>T</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la célebre <strong>ley de Curie</strong>: la susceptibilidad paramagnética de un material es inversamente proporcional a la temperatura. Físicamente: al subir la temperatura, la agitación térmica desordena cada vez más los momentos magnéticos individuales frente al campo aplicado, y el material se magnetiza menos para un campo dado."
    },
    {
     "mota": "irudia",
     "oina": "La ley de Curie, <math display=\"inline\"><mrow><mi>χ</mi><mo>∝</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>: la susceptibilidad paramagnética decrece con la temperatura porque la agitación térmica desordena los momentos magnéticos frente al campo aplicado.",
     "src": "../media/irudiak/d8ba9006771a292b.svg",
     "zabalera": 288
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Estadísticas cuánticas",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo reproduce y desarrolla apuntes propios del usuario (Mikel Aguirre) de su cuaderno de física moderna (&quot;2. blokea: Mekanika Estatistikoa&quot;), traducidos del euskera. No es un libro de terceros — se reproduce con la misma libertad que el resto de MASTERFISMOtex."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Partículas distinguibles e indistinguibles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La distribución de Boltzmann del capítulo anterior supone partículas <strong>distinguibles</strong>: cada una es identificable (por su posición en una red, por ejemplo), así que intercambiar dos partículas entre dos niveles distintos produce un microestado nuevo. Esto es razonable para átomos fijos en un sólido, pero deja de serlo para partículas idénticas y libres —electrones en un metal, átomos de un gas— donde intercambiar dos partículas entre sí <strong>no</strong> produce ningún estado físicamente distinto: no hay manera de distinguir &quot;el electrón A en el estado 1 y el electrón B en el estado 2&quot; de &quot;el electrón B en el estado 1 y el electrón A en el estado 2&quot;, porque los electrones son literalmente idénticos."
    },
    {
     "mota": "testua",
     "html": "La mecánica cuántica añade además una distinción fundamental entre dos familias de partículas, según el comportamiento de su función de onda conjunta al intercambiar dos partículas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Fermiones</strong> (espín semientero: electrones, protones, neutrones, ³He...): la función de onda es antisimétrica frente al intercambio, lo que obliga —es el <strong>principio de exclusión de Pauli</strong>— a que dos fermiones idénticos nunca ocupen el mismo estado cuántico. Cada nivel de energía, con su degeneración <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math>, admite como máximo <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> fermiones (uno por estado).",
      "<strong>Bosones</strong> (espín entero: fotones, ⁴He...): la función de onda es simétrica, y no hay ninguna restricción sobre cuántos bosones pueden compartir el mismo estado cuántico."
     ]
    },
    {
     "mota": "testua",
     "html": "Esta distinción cambia la combinatoria de cómo se cuenta un macroestado, y por tanto cambia la distribución de equilibrio que se obtiene al maximizar la multiplicidad."
    },
    {
     "mota": "problema",
     "izena": "Mayo de 2012, IEM/Física Moderna, problema 3",
     "izar": 0,
     "blokeak": [
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
       "html": "a) <strong>Maxwell-Boltzmann</strong>: partículas distinguibles (o, equivalentemente, indistinguibles pero en el régimen diluido donde la ocupación media de cada estado es baja — el &quot;caso límite&quot; ya discutido en el capítulo anterior). <strong>Bose-Einstein</strong>: partículas indistinguibles sin restricción sobre la ocupación de un mismo estado (bosones). <strong>Fermi-Dirac</strong>: partículas indistinguibles sujetas al principio de exclusión de Pauli (fermiones), como máximo una por estado."
      },
      {
       "mota": "testua",
       "html": "b) Un gas ideal a presión y temperatura ambiente (M-B, densidad baja frente al número de estados accesibles); los átomos de <math display=\"inline\"><msup><mrow></mrow><mn>4</mn></msup></math>He (espín 0, bosones) a temperatura muy baja, donde aparece la condensación de Bose-Einstein (capítulo 5); los electrones de conducción de un metal (F-D, más abajo en este mismo capítulo). Tanto el caso bosónico como el fermiónico se reducen a la estadística de M-B en el límite de alta temperatura o baja densidad —es decir, cuando la ocupación media de cada estado es mucho menor que 1— tal como se verá en el recuadro &quot;Caso límite: Maxwell-Boltzmann&quot; más abajo."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Derivación de la distribución de Fermi-Dirac",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos un conjunto de niveles de energía <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math>, cada uno con degeneración <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> (número de estados cuánticos distintos con esa energía), y <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> fermiones ocupándolos (<math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>≤</mo><msub><mi>g</mi><mi>i</mi></msub></mrow></math>, por el principio de exclusión). El número de formas de colocar <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> fermiones indistinguibles en los <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> estados disponibles del nivel <math display=\"inline\"><mi>i</mi></math> (cada estado, vacío u ocupado) es un coeficiente binomial, y la multiplicidad total del macroestado es el producto sobre todos los niveles:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">FD </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><munder><mo>∏</mo><mi>i</mi></munder><mfrac><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mrow><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Igual que en el capítulo anterior, maximizamos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mtext mathvariant=\"normal\">FD</mtext></msub></mrow></math> sujeto a <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>U</mi></mrow></math>, con multiplicadores de Lagrange <math display=\"inline\"><mi>α</mi></math>, <math display=\"inline\"><mi>β</mi></math>. Usando Stirling en cada uno de los tres factoriales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">FD </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>g</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(los términos lineales de Stirling, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, se cancelan exactamente). Derivando el lagrangiano, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">FD </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><mi>U</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, respecto de <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><msub><mi>n</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub></mrow><msub><mi>n</mi><mi>i</mi></msub></mfrac><mo>=</mo><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>⇒</mo><mfrac><msub><mi>g</mi><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub></mfrac><mo>−</mo><mn>1</mn><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y despejando la ocupación relativa del nivel <math display=\"inline\"><mi>i</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es la <strong>distribución de Fermi-Dirac</strong>. Con <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (la misma identificación que en el caso clásico) y escribiendo <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>−</mi><msub><mi>ε</mi><mi>F</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (se verá enseguida por qué esta elección es natural), se escribe habitualmente como"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><msub><mi>ε</mi><mi>F</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Derivación de la distribución de Bose-Einstein",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para bosones no hay límite en cuántos pueden compartir un mismo estado, así que el conteo combinatorio es distinto: es el número de formas de repartir <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> bosones indistinguibles entre <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> estados (sin restricción de ocupación), que da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">BE </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><munder><mo>∏</mo><mi>i</mi></munder><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow><mrow><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El mismo procedimiento —Stirling, Lagrange, derivar respecto de <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math>— da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mtext mathvariant=\"normal\">BE </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><munder><mo>∑</mo><mi>i</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><msub><mi>g</mi><mi>i</mi></msub><mi mathvariant=\"normal\">ln</mi><msub><mi>g</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi mathvariant=\"script\">ℒ</mi></mrow><mrow><mi>∂</mi><msub><mi>n</mi><mi>i</mi></msub></mrow></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>n</mi><mi>i</mi></msub><mo>−</mo><mi>α</mi><mo>−</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mfrac><mrow><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub></mrow><msub><mi>n</mi><mi>i</mi></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la <strong>distribución de Bose-Einstein</strong>: idéntica a la de Fermi-Dirac salvo por el signo del <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> en el denominador —una diferencia mínima en la fórmula, con consecuencias físicas enormes (entre otras, la condensación de Bose-Einstein a bajas temperaturas, cuando el nivel de energía más bajo empieza a acumular una fracción macroscópica de todas las partículas del sistema)."
    },
    {
     "mota": "oharra",
     "titulua": "Caso límite: Maxwell-Boltzmann",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando la ocupación de cada nivel es baja (<math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mi>/</mi><msub><mi>g</mi><mi>i</mi></msub><mo>≪</mo><mn>1</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>≫</mo><mn>1</mn></mrow></math>), el <math display=\"inline\"><mrow><mi>±</mi><mn>1</mn></mrow></math> del denominador es despreciable frente a la exponencial, y ambas distribuciones cuánticas se reducen a la misma forma: <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mi>/</mi><msub><mi>g</mi><mi>i</mi></msub><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, la distribución de Boltzmann del capítulo anterior. Es el régimen en el que un gas se comporta &quot;clásicamente&quot;: cuando hay muchos más estados disponibles que partículas, la cuestión de si dos partículas pueden compartir un estado deja de ser relevante en la práctica."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Las tres estadísticas comparadas: ocupación media <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> frente a <math display=\"inline\"><mrow><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Fermi-Dirac (azul) nunca supera 1 (Pauli); Bose-Einstein (rojo) diverge al hacer <math display=\"inline\"><mrow><mi>ε</mi><mo>→</mo><mi>μ</mi></mrow></math> (germen de la condensación); y a energías altas las tres colapsan en la exponencial de Maxwell-Boltzmann (verde, discontinua): el régimen clásico.",
     "src": "../media/irudiak/5c79ba0a632ae8db.svg",
     "zabalera": 330
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "El gas de electrones libres",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como aplicación central de la estadística de Fermi-Dirac, consideremos <math display=\"inline\"><mi>N</mi></math> electrones libres (no interactuantes entre sí) confinados en una caja cúbica de volumen <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></mrow></math> —un modelo simplificado, pero notablemente eficaz, de los electrones de conducción de un metal."
    },
    {
     "mota": "testua",
     "html": "<strong>Niveles de energía.</strong> Resolviendo la ecuación de Schrödinger de una partícula libre en una caja cúbica con paredes infinitas (el pozo de potencial infinito del capítulo de Schrödinger, ahora en tres dimensiones), los niveles de energía permitidos son"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Densidad de estados.</strong> Para contar cuántos estados hay con energía menor que un valor <math display=\"inline\"><mi>ε</mi></math> dado, es más cómodo pensar en el espacio de números cuánticos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>: la condición <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>≤</mo><mi>ε</mi></mrow></math> define el interior de una esfera de radio"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>R</mi><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>a</mi><mn>2</mn></msup><mi>ε</mi></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac></msqrt><mo>=</mo><mfrac><mrow><mn>2</mn><mi>a</mi><msqrt><mrow><mn>2</mn><mi>m</mi><mi>ε</mi></mrow></msqrt></mrow><mi>h</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub></mrow></math> son todos positivos, solo cuenta un octante de esa esfera. El número de estados con energía menor que <math display=\"inline\"><mi>ε</mi></math> es, entonces,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>8</mn></mfrac><mo>⋅</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>3</mn></msup><mo>=</mo><mfrac><mn>4</mn><mn>3</mn></mfrac><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>ε</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(usando <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msup><mi>a</mi><mn>3</mn></msup></mrow></math>). Derivando respecto de <math display=\"inline\"><mi>ε</mi></math> se obtiene la <strong>densidad de estados</strong>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>G</mi><mi>/</mi><mi>d</mi><mi>ε</mi></mrow></math> —número de estados por unidad de energía—, a la que hay que añadir un factor 2, porque cada estado espacial admite dos electrones de espín opuesto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><msqrt><mi>ε</mi></msqrt></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Densidad de estados del gas de electrones libres, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msqrt><mi>ε</mi></msqrt></mrow></math>. A <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, todos los estados están ocupados hasta la energía de Fermi, <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math> (área sombreada, aunque no se muestre) y vacíos por encima.",
     "src": "../media/irudiak/5197c746ccad1715.svg",
     "zabalera": 278
    },
    {
     "mota": "testua",
     "html": "<strong>La energía de Fermi.</strong> A temperatura cero, los electrones ocupan los estados de menor energía disponibles, uno por estado (Pauli), hasta agotar los <math display=\"inline\"><mi>N</mi></math> electrones: se llenan todos los niveles hasta una energía máxima <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>, la <strong>energía de Fermi</strong>, y ninguno por encima. Integrando la densidad de estados hasta <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><msub><mi>ε</mi><mi>F</mi></msub></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo>⋅</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msubsup><mi>ε</mi><mi>F</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msubsup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y despejando:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mrow><mn>8</mn><mi>π</mi><mi>V</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>2</mn><mn>3</mn></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Depende solo de la densidad de electrones, <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mi>V</mi></mrow></math>: cuanto más apretados están los electrones, mayor es la energía de Fermi (el principio de exclusión los obliga a ocupar estados de energía cada vez más alta)."
    },
    {
     "mota": "irudia",
     "oina": "La función de ocupación de Fermi: a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> es un escalón (todo lleno hasta <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>, todo vacío por encima); a <math display=\"inline\"><mrow><mi>T</mi><mo>&gt;</mo><mn>0</mn></mrow></math> el escalón se suaviza en una franja de anchura <math display=\"inline\"><mrow><mo>∼</mo><mi>k</mi><mi>T</mi></mrow></math> alrededor de <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math> — solo los electrones de esa franja participan en la conducción y el calor específico.",
     "src": "../media/irudiak/0133852c4547d4d3.svg",
     "zabalera": 301
    },
    {
     "mota": "testua",
     "html": "<strong>Energía media a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> La energía total del gas a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><msub><mi>ε</mi><mi>F</mi></msub></msubsup><mi>ε</mi><mspace width=\"0.167em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi></mrow></math>, que da <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>N</mi><msub><mi>ε</mi><mi>F</mi></msub></mrow></math>, así que la energía media por electrón es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>ε</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mi>U</mi><mi>N</mi></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msub><mi>ε</mi><mi>F</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Nótese que esto es una consecuencia puramente cuántica (del principio de exclusión): a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, un gas <strong>clásico</strong> tendría energía cinética nula (todas las partículas en reposo), pero un gas de electrones tiene una energía media considerable incluso en el cero absoluto, porque Pauli les prohíbe amontonarse todos en el estado de energía mínima."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo numérico.</strong> Para el sodio metálico, con un electrón de conducción por átomo y densidad conocida, la energía de Fermi resulta <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>F</mi></msub><mo>≈</mo><mn>3.1</mn></mrow></math> eV — un valor típico de metal, muchísimo mayor que <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> a temperatura ambiente (<math display=\"inline\"><mrow><mo>≈</mo><mn>0.026</mn></mrow></math> eV). Esta es la razón por la que, a diferencia de un gas clásico, el gas de electrones de un metal apenas cambia su energía con la temperatura ambiente: solo los electrones muy cercanos a <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math> (una fracción pequeña del total, del orden de <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><msub><mi>ε</mi><mi>F</mi></msub></mrow></math>) tienen estados vacíos accesibles justo por encima, mientras que la inmensa mayoría está &quot;atrapada&quot; muy por debajo de <math display=\"inline\"><msub><mi>ε</mi><mi>F</mi></msub></math>, rodeada de estados ya ocupados."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "El gas de fotones: la ley de Planck por otro camino",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta sección reproduce apuntes propios del usuario (Mikel Aguirre) — cuaderno de física moderna, traducidos del euskera (&quot;2. blokea: Mekanika Estatistikoa&quot;, tema 16). No es un libro de terceros."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los fotones son bosones (espín 1), así que en principio se rigen por la distribución de Bose-Einstein anterior: <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mi>/</mi><msub><mi>g</mi><mi>i</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Pero hay una diferencia esencial respecto al gas de electrones o de átomos: el <strong>número de fotones no se conserva</strong> — una pared puede absorber o emitir fotones libremente, cambiando <math display=\"inline\"><mi>N</mi></math> sin ninguna restricción física. Como el multiplicador <math display=\"inline\"><mi>α</mi></math> era precisamente el que imponía la condición <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math> <strong>fija</strong>, y aquí esa condición no existe, el procedimiento de Lagrange no incluye ese término: <strong>para los fotones, <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math></strong> (equivalentemente, potencial químico <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>), y la distribución de ocupación de un modo de frecuencia <math display=\"inline\"><mi>ν</mi></math> se reduce a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta es exactamente la misma expresión que la energía media (en unidades de <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math>) del oscilador de Planck que dedujimos en el capítulo 1 de Física Moderna — no por casualidad: <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es el número medio de fotones en un modo, y cada fotón aporta <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> de energía, así que la energía media de un modo de frecuencia <math display=\"inline\"><mi>ν</mi></math> es <math display=\"inline\"><mrow><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mi>h</mi><mi>ν</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, idéntica a <math display=\"inline\"><mover><mi mathvariant=\"script\">ℰ</mi><mo accent=\"true\">¯</mo></mover></math> del oscilador cuántico de Planck. Son dos formas distintas de contar lo mismo: &quot;un oscilador con niveles equiespaciados <math display=\"inline\"><mrow><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math>&quot; (la vía de Planck, 1900) y &quot;un modo electromagnético que puede alojar cualquier número de fotones idénticos, cada uno de energía <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math>&quot; (la vía de Bose-Einstein, 1924) dan la misma física."
    },
    {
     "mota": "testua",
     "html": "<strong>Reconstruyendo la ley de Planck.</strong> La densidad de modos electromagnéticos en una cavidad, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><msup><mi>ν</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ν</mi></mrow></math>, ya se estableció en el capítulo 1 de Física Moderna (con el factor 2 de las dos polarizaciones de la luz ya incluido, jugando aquí el mismo papel que el factor 2 de espín en la densidad de estados del gas de electrones). Multiplicando esa densidad de modos por la energía media de cada modo:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ν</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mover><mi>n</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ν</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mi>ν</mi><mi>d</mi><mi>ν</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>π</mi><mi>h</mi></mrow><msup><mi>c</mi><mn>3</mn></msup></mfrac><mfrac><msup><mi>ν</mi><mn>3</mn></msup><mrow><msup><mi>e</mi><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ν</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta es, de nuevo, la ley de radiación de Planck — la misma fórmula que se dedujo en el capítulo 1 postulando la cuantización de un único oscilador, obtenida ahora como caso particular de la estadística de Bose-Einstein con potencial químico nulo. Integrando sobre todas las frecuencias se recupera igualmente la ley de Stefan-Boltzmann, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>T</mi><mn>4</mn></msup></mrow></math>, tal como ya se verificó allí."
    },
    {
     "mota": "oharra",
     "titulua": "Por qué esto importa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Que dos derivaciones tan distintas —una centrada en un solo oscilador cuantizado, la otra en la estadística de un gas de partículas cuyo número no se conserva— converjan en la misma fórmula es una confirmación estructural fuerte: la radiación de cuerpo negro no depende de los detalles del modelo microscópico concreto, solo de que la energía electromagnética esté cuantizada en paquetes <math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math>. El caso <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> de Bose-Einstein es, además, el prototipo de cualquier gas de bosones cuyo número no se conserva (fonones en un sólido, por ejemplo) — a diferencia del gas de bosones <strong>masivos</strong> del capítulo siguiente, donde <math display=\"inline\"><mi>N</mi></math> sí está fijo y <math display=\"inline\"><mi>μ</mi></math> puede ser distinto de cero (y de hecho debe acercarse a cero por abajo para producir la condensación de Bose-Einstein)."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 1,
   "izenburua": "El sólido de Einstein: calor específico",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El capítulo 1 introdujo el sólido de Einstein solo como ejemplo combinatorio (contar <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a energía total fija). Aquí se completa con el tratamiento canónico —vía la función de partición— que permite obtener <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><msub><mi>C</mi><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> como funciones continuas de la temperatura. Es exposición propia (no hay fuente manuscrita del usuario para esta parte), pero reutiliza directamente dos resultados ya establecidos en este libro: la energía media de un oscilador cuántico (idéntica al cálculo de Planck para el cuerpo negro, capítulo 1 de Física Moderna) y la caja de herramientas <math display=\"inline\"><mrow><mi>U</mi><mo>,</mo><mi>S</mi><mo>,</mo><mi>F</mi></mrow></math> a partir de <math display=\"inline\"><mi>z</mi></math> (capítulo anterior)."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "El modelo: <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osciladores independientes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El modelo combinatorio del capítulo 1 trataba cada átomo como un único oscilador. Para reproducir correctamente el comportamiento de un sólido real hace falta un ajuste pequeño pero importante: cada átomo puede vibrar en las <strong>tres</strong> direcciones del espacio, así que un sólido de <math display=\"inline\"><mi>N</mi></math> átomos equivale, en esta aproximación, a <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osciladores armónicos cuánticos independientes, todos con la misma frecuencia <math display=\"inline\"><mi>ν</mi></math> (la hipótesis simplificadora de Einstein: en un sólido real cada átomo vibra acoplado a sus vecinos, con todo un espectro de frecuencias posibles, pero Einstein demostró que una única frecuencia efectiva ya reproduce el rasgo cualitativo esencial, como se verá)."
    },
    {
     "mota": "testua",
     "html": "Cada oscilador tiene niveles de energía <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>), y su función de partición —una serie geométrica, exactamente la misma suma que ya calculamos en el capítulo 1 de Física Moderna para el oscilador de Planck— es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>n</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y su energía media, por el mismo cálculo de entonces,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>β</mi><mi>h</mi><mi>ν</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "Energía interna y calor específico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osciladores independientes, la energía interna del sólido es simplemente <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> veces la energía media de un oscilador:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>N</mi><mfrac><mrow><mi>h</mi><mi>ν</mi></mrow><mrow><msup><mi>e</mi><mrow><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es conveniente definir la <strong>temperatura de Einstein</strong> <math display=\"inline\"><mrow><msub><mi>θ</mi><mi>E</mi></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (una temperatura característica del material, fijada por su frecuencia de vibración), con la que"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto de <math display=\"inline\"><mi>T</mi></math> se obtiene el calor específico a volumen constante:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "El calor específico de Einstein, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, en función de <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><msub><mi>θ</mi><mi>E</mi></msub></mrow></math>: tiende a la constante clásica de Dulong-Petit (<math display=\"inline\"><mrow><mo>=</mo><mn>1</mn></mrow></math>) a temperaturas altas, y cae exponencialmente a cero a temperaturas bajas — la misma &quot;congelación&quot; de los grados de libertad cuantizados que ya vimos en la catástrofe ultravioleta (capítulo 1) y en la anomalía de Schottky (capítulo anterior).",
     "src": "../media/irudiak/c0b4799a57a886a7.svg",
     "zabalera": 310
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Límite de temperaturas altas: la ley de Dulong-Petit"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mi>E</mi></msub></mrow></math> (equivalentemente, <math display=\"block\"><mrow><mi>h</mi><mi>ν</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>: el cuanto de vibración es pequeño frente a la energía térmica), podemos aproximar <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>≈</mo><mn>1</mn><mo>+</mo><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></math>, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><mn>1</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Es la <strong>ley de Dulong-Petit</strong>, conocida experimentalmente desde 1819 —mucho antes de la mecánica cuántica— para prácticamente todos los sólidos a temperatura ambiente: el calor específico molar de un sólido tiende a <math display=\"inline\"><mrow><mn>3</mn><mi>R</mi></mrow></math> (con <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msub><mi>N</mi><mi>A</mi></msub><msub><mi>k</mi><mi>B</mi></msub></mrow></math> la constante de los gases), independiente del material. Es exactamente lo que predeciría la física clásica sin más: por el teorema de equipartición, cada uno de los <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math> osciladores armónicos clásicos almacena una energía media <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (mitad cinética, mitad potencial), así que <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, sin ninguna dependencia de <math display=\"inline\"><mi>T</mi></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Límite de temperaturas bajas: la congelación cuántica"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mi>E</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>≫</mo><mn>1</mn></mrow></math> domina el denominador, y"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mi>E</mi></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mi>E</mi></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>→</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>→</mo><mn>0</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> denean </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Este fue el gran éxito histórico del modelo de Einstein (1907): la física clásica —a través de la ley de Dulong-Petit— predice que <math display=\"inline\"><msub><mi>C</mi><mi>V</mi></msub></math> debería permanecer constante en <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> a <strong>cualquier</strong> temperatura, incluida <math display=\"inline\"><mrow><mi>T</mi><mo>→</mo><mn>0</mn></mrow></math>. Experimentalmente, sin embargo, se observaba que el calor específico de los sólidos caía hacia cero al enfriarlos — un comportamiento inexplicable clásicamente. El modelo de Einstein fue el primero en explicarlo: la cuantización de la energía vibratoria —la misma idea que Planck había introducido siete años antes para la radiación— resuelve también este problema: a bajas temperaturas no hay suficiente energía térmica disponible (<math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi>h</mi><mi>ν</mi></mrow></math>) para excitar ni siquiera el primer nivel vibracional por encima del fundamental, así que los osciladores quedan efectivamente &quot;congelados&quot; y dejan de poder absorber calor."
    },
    {
     "mota": "oharra",
     "titulua": "Forma real de la caída a bajas temperaturas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El modelo de Einstein predice una caída <strong>exponencial</strong> de <math display=\"inline\"><msub><mi>C</mi><mi>V</mi></msub></math> a bajas temperaturas. Las medidas experimentales muestran, en cambio, una caída bastante más lenta, como <math display=\"inline\"><msup><mi>T</mi><mn>3</mn></msup></math> (ley de Debye). La discrepancia se debe a la hipótesis simplificadora del modelo: en un sólido real los átomos no vibran de forma independiente con una única frecuencia <math display=\"inline\"><mi>ν</mi></math>, sino acoplados entre sí, dando lugar a todo un espectro continuo de modos normales (fonones) hasta una frecuencia máxima. El modelo de Debye, que sí tiene en cuenta ese espectro completo, corrige este detalle a bajas temperaturas mientras conserva el límite de Dulong-Petit a temperaturas altas (queda fuera del alcance de este capítulo)."
      }
     ]
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Conexión con el recuento combinatorio del capítulo 1",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El ejemplo numérico del capítulo 1 (<math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math> osciladores, energía total <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>h</mi><mi>ν</mi></mrow></math>, multiplicidad <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5005</mn></mrow></math>) es, en realidad, el mismo sistema físico visto desde el postulado fundamental —contando directamente los microestados accesibles a energía fija— en vez de desde la función de partición —que trabaja a temperatura fija, promediando sobre todas las energías posibles con su peso de Boltzmann—. Ambos enfoques (llamados, respectivamente, colectividad microcanónica y colectividad canónica) deben dar la misma física en el límite en que el sistema es grande: es la misma equivalencia que ya verificamos, de otra forma, en el capítulo anterior al comprobar que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></math> coincidía calculada por dos caminos distintos en el sistema de dos niveles."
    },
    {
     "mota": "problema",
     "izena": "Física Moderna (temas 12-13), problema 5",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema consta de <math display=\"inline\"><mi>N</mi></math> osciladores distinguibles de frecuencia <math display=\"inline\"><mi>ν</mi></math> (modelo de osciladores armónicos isótropos <math display=\"inline\"><mrow><mn>3</mn><mi>N</mi></mrow></math>, es decir, cada átomo del modelo del sólido de Einstein vibra en tres dimensiones). La temperatura es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>. Calcular, tomando un oscilador concreto, la probabilidad de que esté en el nivel de energía <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Cada oscilador es en realidad <strong>tridimensional</strong> e isótropo, con energía <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>h</mi><mi>ν</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> los tres números cuánticos independientes de cada dirección). Agrupando por energía total, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mi>ν</mi></mrow></math> con <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math>, el nivel <math display=\"inline\"><mi>n</mi></math> tiene degeneración <math display=\"block\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>n</mi><mo>+</mo><mn>2</mn></mrow><mn>2</mn></mfrac></mrow></math> (número de formas de escribir <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math> con enteros no negativos): <math display=\"inline\"><mrow><msub><mi>g</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>1</mn></msub><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>, etc."
      },
      {
       "mota": "testua",
       "html": "La función de partición del oscilador 3D es, con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, simplemente el cubo de la función de partición 1D ya usada en este capítulo (tres direcciones independientes, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msub><mi>z</mi><mi>x</mi></msub><msub><mi>z</mi><mi>y</mi></msub><msub><mi>z</mi><mi>z</mi></msub><mo>=</mo><msup><mi>z</mi><mn>3</mn></msup></mrow></math> ): <math display=\"block\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac></mrow></math> Puede comprobarse que esto coincide con sumar directamente sobre los niveles degenerados, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup></mrow></math>. Ambas vías dan el mismo resultado, otra verificación cruzada del mismo tipo que las de capítulos anteriores."
      },
      {
       "mota": "testua",
       "html": "La probabilidad de que un oscilador esté en el nivel <math display=\"inline\"><mi>n</mi></math> es <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi></mrow></msup><mi>/</mi><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>n</mi><mi>x</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math>. Con <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> dado en el enunciado, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, y para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math>):"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>≈</mo><mn>6</mn><mo>×</mo><mn>0.1353</mn><mo>×</mo><mn>0.2525</mn><mo>≈</mo><mn>0.205</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "es decir, aproximadamente <math display=\"inline\"><mrow><mn>20</mn><mi>%</mi></mrow></math> — muy distinto del resultado que daría un oscilador 1D no degenerado (<math display=\"inline\"><mrow><mo>≈</mo><mn>8.6</mn><mi>%</mi></mrow></math>): la degeneración <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mn>6</mn></mrow></math> pesa más que la caída exponencial extra en energía."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Mayo de 2013, IEM/Física Moderna, problema 4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considerar un sistema formado por un conjunto de osciladores armónicos tridimensionales cuyos niveles de energía vienen dados por <math display=\"block\"><mrow><msub><mi>ε</mi><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></msub><mo>=</mo><mi>ħ</mi><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>+</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub></mrow></math> son enteros <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Calcular la degeneración de los niveles de energía <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> y <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Si el sistema de osciladores está en contacto térmico con un baño a temperatura <math display=\"inline\"><mi>T</mi></math>, ¿para qué temperatura el nivel de energía <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> está más poblado que el de <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math>? Calcular el valor numérico de dicha temperatura para osciladores de frecuencia <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow></math> s <math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Con la fórmula de degeneración ya establecida arriba, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>: el nivel <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> corresponde a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>2</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>=</mo><mn>6</mn></mrow></math>; el nivel <math display=\"inline\"><mrow><mn>9</mn><mi>/</mi><mn>2</mn><mi>ħ</mi><mi>ω</mi></mrow></math> corresponde a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mn>3</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>=</mo><mn>10</mn></mrow></math> (puede comprobarse también enumerando directamente las ternas <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>,</mo><msub><mi>n</mi><mn>2</mn></msub><mo>,</mo><msub><mi>n</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> que suman 2 o 3)."
      },
      {
       "mota": "testua",
       "html": "b) Las poblaciones de cada nivel son proporcionales a <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>n</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>7</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow><mrow><mn>10</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>9</mn><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>5</mn></mfrac><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> Para que el nivel superior esté más poblado, <math display=\"inline\"><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>9</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, se necesita <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><mo>&lt;</mo><msup><mi>e</mi><mrow><mi>ħ</mi><mi>ω</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, es decir, <math display=\"block\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>&gt;</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> Sustituyendo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>6</mn><mo>×</mo><msup><mn>10</mn><mn>13</mn></msup></mrow></math> s <math display=\"inline\"><msup><mrow></mrow><mrow><mi>−</mi><mn>1</mn></mrow></msup></math>: <math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>894</mn></mrow></math> K — una temperatura muy alta, coherente con que a temperaturas bajas domina siempre el nivel de menor energía (aunque tenga menos degeneración), y solo a temperaturas suficientemente altas la mayor degeneración del nivel superior puede compensar su desventaja energética."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "La condensación de Bose-Einstein",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo es exposición propia (no hay fuente manuscrita del usuario con este desarrollo), presentada en la forma estándar de la mayoría de los libros de texto — el mismo criterio de cita ya aplicado en otras secciones &quot;de puente&quot; de este libro (por ejemplo, el modelo de Rayleigh-Jeans o el principio de correspondencia en Física Moderna). Retoma directamente la distribución de Bose-Einstein y el cálculo de la densidad de estados del apartado de estadísticas cuánticas."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "El problema: demasiadas partículas para muy pocos estados",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Recordemos la distribución de Bose-Einstein del capítulo anterior, escrita ahora con el <strong>potencial químico</strong> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mi>α</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (una forma habitual de escribir la constante de normalización <math display=\"inline\"><mi>α</mi></math>, expresada en unidades de energía):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>i</mi></msub><msub><mi>g</mi><mi>i</mi></msub></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mi>i</mi></msub><mo>−</mo><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para que la ocupación <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> de cualquier nivel sea positiva y finita, el denominador debe ser positivo, lo que exige <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><msub><mi>ε</mi><mi>i</mi></msub></mrow></math> para <strong>todo</strong> nivel accesible — en particular, tomando como origen de energías el nivel fundamental ( <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> ), el potencial químico de un gas de bosones debe cumplir siempre <math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"inline\"><mi>N</mi></math> bosones (por ejemplo, átomos de un gas, con espín entero) en una caja de volumen <math display=\"inline\"><mi>V</mi></math>, sin interacción entre ellos. El potencial químico <math display=\"inline\"><mi>μ</mi></math> es, en general, una función de la temperatura, fijada por la condición de que el número total de partículas sea <math display=\"inline\"><mi>N</mi></math>. A temperatura alta, <math display=\"inline\"><mi>μ</mi></math> resulta muy negativo (el gas se comporta casi clásicamente, como vimos en el capítulo anterior). Al bajar la temperatura, para mantener el mismo número de partículas <math display=\"inline\"><mi>N</mi></math> repartidas entre los niveles disponibles, <math display=\"inline\"><mi>μ</mi></math> tiene que crecer, acercándose a 0. La pregunta central de este capítulo es: <strong>¿qué pasa cuando <math display=\"inline\"><mi>μ</mi></math> ya no puede seguir subiendo?</strong>"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "La ocupación máxima de los estados excitados",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Igual que en el gas de electrones libres (capítulo anterior), para un gas en una caja cúbica grande los niveles de energía están tan juntos que podemos tratarlos como un continuo, con densidad de estados"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>V</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></msup></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><msqrt><mi>ε</mi></msqrt></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(la misma fórmula que para los electrones, pero sin el factor 2 de espín: aquí consideramos bosones de espín 0). El número de partículas en los estados <strong>excitados</strong> ( <math display=\"inline\"><mrow><mi>ε</mi><mo>&gt;</mo><mn>0</mn></mrow></math> ) a temperatura <math display=\"inline\"><mi>T</mi></math> y potencial químico <math display=\"inline\"><mi>μ</mi></math> es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>N</mi><mrow><mtext mathvariant=\"normal\">exc </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo>,</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ε</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí está el punto crucial, y es puramente matemático: como función de <math display=\"inline\"><mi>μ</mi></math>, esta integral <strong>crece</strong> al subir <math display=\"inline\"><mi>μ</mi></math> hacia 0 (el denominador se hace más pequeño en todo el rango), pero permanece <strong>finita</strong> incluso en el caso límite <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>e</mi><mrow><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>ε</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>V</mi><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>3</mn><mn>2</mn></mfrac></msup><msup><mi>h</mi><mn>3</mn></msup></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msqrt><mi>x</mi></msqrt><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tras el cambio de variable <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>. La integral restante, un número puro, es un caso particular de las integrales de Bose, que aparecen sistemáticamente en este tipo de cálculos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mfrac><msqrt><mi>x</mi></msqrt><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mn>2.612</mn><mo>×</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mo>≈</mo><mn>2.315</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(con <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> la función gamma y <math display=\"inline\"><mi>ζ</mi></math> la función zeta de Riemann; para lo que sigue solo hace falta su valor numérico). Así,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2.612</mn><mspace width=\"0.222em\"></mspace><mi>V</mi><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>3</mn><mn>2</mn></mfrac></msup><msup><mi>h</mi><mn>3</mn></msup></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ese es el número <strong>máximo</strong> de partículas que los estados excitados pueden alojar a temperatura <math display=\"inline\"><mi>T</mi></math> — y crece con <math display=\"inline\"><mi>T</mi></math>, porque a mayor temperatura hay más estados térmicamente accesibles."
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "La temperatura crítica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>N</mi></math> es el número total (fijo) de partículas del gas, la ecuación anterior tiene una consecuencia inevitable: como <math display=\"inline\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> disminuye al enfriar el gas, existe una temperatura <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math> —la <strong>temperatura crítica</strong>— por debajo de la cual <math display=\"inline\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi>N</mi></mrow></math>: los estados excitados, aunque estén ocupados al máximo posible (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>), ya no pueden alojar a todas las partículas del gas."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>N</mi><mo>=</mo><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>c</mi></msub><mo>=</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mrow><mn>2.612</mn><mspace width=\"0.222em\"></mspace><mi>V</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mn>2</mn><mn>3</mn></mfrac></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "¿Qué ocurre entonces con las partículas &quot;sobrantes&quot;? No pueden estar en ningún estado excitado (ya están todos ocupados al máximo que permite <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>), así que se acumulan en el <strong>estado fundamental</strong> (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>0</mn></mrow></math>), cuya ocupación —a diferencia de la de cualquier estado excitado individual— no está acotada por ninguna densidad de estados continua: es un único estado cuántico, y puede albergar una fracción <strong>macroscópica</strong> de todas las partículas del sistema. Este fenómeno es la <strong>condensación de Bose-Einstein</strong>."
    },
    {
     "mota": "irudia",
     "oina": "Fracción de partículas en el condensado, <math display=\"inline\"><mrow><msub><mi>N</mi><mn>0</mn></msub><mi>/</mi><mi>N</mi><mo>=</mo><mn>1</mn><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>T</mi><mi>/</mi><msub><mi>T</mi><mi>c</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, para <math display=\"inline\"><mrow><mi>T</mi><mo>&lt;</mo><msub><mi>T</mi><mi>c</mi></msub></mrow></math>: en <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> todo el gas está en el estado fundamental; al acercarse a <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math> la fracción condensada cae a cero. Por encima de <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math> no hay condensado (<math display=\"inline\"><mrow><msub><mi>N</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>): todas las partículas caben en los estados excitados.",
     "src": "../media/irudiak/ca682c2efcffffb5.svg",
     "zabalera": 299
    },
    {
     "mota": "testua",
     "html": "Por debajo de <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>, el número de partículas en el condensado es sencillamente lo que sobra tras llenar los estados excitados al máximo, <math display=\"inline\"><mrow><msub><mi>N</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mo>−</mo><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y usando que <math display=\"inline\"><mrow><msubsup><mi>N</mi><mtext mathvariant=\"normal\">exc</mtext><mrow><mtext mathvariant=\"normal\">máx </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (de la fórmula de arriba) junto con la definición de <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><msub><mi>N</mi><mn>0</mn></msub><mi>N</mi></mfrac><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>T</mi><msub><mi>T</mi><mi>c</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>&lt;</mo><msub><mi>T</mi><mi>c</mi></msub></mrow></math>"
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Comparación con la estimación de orden de magnitud",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este mismo fenómeno ya apareció en este libro, tratado de forma mucho más aproximada, como el apartado b) del problema 2 del examen de Junio 2007 (capítulo de Azterketak): allí se estimaba la temperatura de condensación igualando la longitud de onda de De Broglie térmica, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>B</mi></msub><mo>=</mo><mi>h</mi><mi>/</mi><msqrt><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msqrt></mrow></math>, a la distancia típica entre átomos, <math display=\"inline\"><mrow><mi>d</mi><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mi>/</mi><mi>N</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>. Esa estimación da"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>T</mi><mtext mathvariant=\"normal\">B-E</mtext><mrow><mtext mathvariant=\"normal\">aprox </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>≈</mo><mfrac><msup><mi>h</mi><mn>2</mn></msup><mrow><mn>3</mn><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mi>V</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta tiene <strong>exactamente</strong> la misma dependencia en <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mi>V</mi></mrow></math> y en las constantes fundamentales que la fórmula rigurosa de <math display=\"inline\"><msub><mi>T</mi><mi>c</mi></msub></math> obtenida arriba, y solo difiere de ella en el factor numérico (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><msup><mn>2.612</mn><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mn>0.19</mn></mrow></math>, frente a <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> exacto, ambos del mismo orden): la estimación cualitativa &quot;cuando la longitud de onda térmica se vuelve comparable a la separación entre partículas&quot; captura correctamente la física esencial del fenómeno, y el cálculo completo con la integral de Bose solo afina la constante numérica de la estimación."
    },
    {
     "mota": "oharra",
     "titulua": "Un fenómeno genuinamente cuántico",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La condensación de Bose-Einstein no tiene ningún análogo clásico: un gas clásico, al enfriarse, simplemente reduce la energía cinética de sus partículas sin que ninguna &quot;elija&quot; preferentemente el mismo estado. Aquí, en cambio, una fracción macroscópica de las partículas ocupa literalmente el mismo estado cuántico —posible únicamente porque los bosones no están sujetos al principio de exclusión de Pauli (a diferencia de los fermiones del capítulo anterior, donde cada estado admite como máximo una partícula)—. Predicha por Einstein en 1924-1925 a partir del trabajo de Bose sobre la estadística de los fotones, la condensación no se observó experimentalmente en un gas atómico hasta 1995 (Cornell y Wieman, con átomos de rubidio enfriados a temperaturas del orden del nanokelvin) — siete décadas después de la predicción teórica."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 1,
   "izenburua": "El gas ideal clásico",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo reproduce y desarrolla apuntes propios del usuario (Mikel Aguirre) — cuaderno de física moderna, &quot;2. Blokea: Mekanika Estatistikoa&quot;, tema 14. No es un libro de terceros — se reproduce con la misma libertad que el resto del material propio. Es el tratamiento completo del gas ideal monoatómico clásico vía la distribución de Maxwell-Boltzmann: hasta ahora este libro solo trataba gases cuánticos (electrones, capítulo de estadísticas cuánticas)."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Partículas distinguibles y el factor <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos un gas de <math display=\"inline\"><mi>N</mi></math> partículas idénticas, libres, confinadas en un volumen <math display=\"inline\"><mi>V</mi></math>. A diferencia del sólido del capítulo 1 (donde cada átomo ocupa una posición fija en la red y es, por tanto, distinguible de sus vecinos por su posición), las partículas de un gas se mueven libremente y son indistinguibles entre sí."
    },
    {
     "mota": "testua",
     "html": "Si tratamos el sistema completo de <math display=\"inline\"><mi>N</mi></math> partículas con función de partición de una sola partícula <math display=\"inline\"><mi>z</mi></math>, hay dos posibilidades según sean distinguibles o no:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "La función de partición del sistema completo de <math display=\"inline\"><mi>N</mi></math> partículas, según sean distinguibles o no.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<div class=\"j-taula\"><table><thead><tr><th>Partículas <strong>distinguibles</strong></th><th>Partículas <strong>indistinguibles</strong></th></tr></thead><tbody><tr><td><math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup></mrow></math></td><td><math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mfrac><msup><mi>z</mi><mi>N</mi></msup><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></mrow></math></td></tr></tbody></table></div>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El factor <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></math> corrige el hecho de que, al contar microestados del sistema completo como si las partículas llevaran una etiqueta, se cuenta <math display=\"inline\"><mrow><mi>N</mi><mi>!</mi></mrow></math> veces cada configuración físicamente idéntica (todas las formas de repartir las mismas <math display=\"inline\"><mi>N</mi></math> partículas idénticas entre los mismos estados individuales ocupados). Este factor —ausente en el tratamiento del capítulo 2 (Boltzmann), donde las partículas eran distinguibles por su posición en una red— es imprescindible para un gas, y su ausencia es precisamente el origen de la paradoja de Gibbs que cierra este capítulo."
    },
    {
     "mota": "testua",
     "html": "A partir de <math display=\"inline\"><msub><mi>Z</mi><mi>N</mi></msub></math>, las magnitudes termodinámicas se obtienen igual que siempre:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mi>−</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "que, para partículas indistinguibles (<math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mfrac><msup><mi>z</mi><mi>N</mi></msup><mrow><mi>N</mi><mi>!</mi></mrow></mfrac></mrow></math>, usando Stirling para <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math>), se reducen a"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo>=</mo><mfrac><mi>U</mi><mi>T</mi></mfrac><mo>+</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>−</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math>"
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Densidad de estados de una partícula libre",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Igual que en el capítulo de estadísticas cuánticas (gas de electrones), una partícula libre de masa <math display=\"inline\"><mi>m</mi></math> en una caja cúbica de lado <math display=\"inline\"><mi>L</mi></math> (<math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msup><mi>L</mi><mn>3</mn></msup></mrow></math>) tiene niveles de energía"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>z</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Contando estados dentro de una esfera de radio <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mfrac><msqrt><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup><mi>ε</mi></mrow></msqrt><mrow><mi>π</mi><mi>ħ</mi></mrow></mfrac></mrow></math> en el espacio de números cuánticos (un octante, ya que <math display=\"inline\"><mrow><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>,</mo><msub><mi>n</mi><mi>z</mi></msub><mo>&gt;</mo><mn>0</mn></mrow></math>) se obtiene el número acumulado de estados con energía menor que <math display=\"inline\"><mi>ε</mi></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>V</mi><mrow><mn>6</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mi>ε</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(a diferencia del gas de electrones, aquí <strong>no</strong> hay factor 2 de espín: un átomo o molécula de un gas clásico no lleva esa degeneración). La densidad de estados es la derivada, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mi>G</mi><mi>/</mi><mi>d</mi><mi>ε</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>V</mi><mrow><mn>4</mn><msup><mi>π</mi><mn>2</mn></msup><msup><mi>ħ</mi><mn>3</mn></msup></mrow></mfrac><msup><msqrt><mrow><mn>2</mn><mi>m</mi></mrow></msqrt><mn>3</mn></msup><msqrt><mi>ε</mi></msqrt></mrow></math>"
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "La distribución de Maxwell-Boltzmann y la función de partición",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aplicando la distribución de Boltzmann en el continuo, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi></mrow></math>, la función de partición de una partícula es la integral de <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math> sobre todas las energías. Con el cambio de variable <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>ε</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y usando <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msqrt><mi>π</mi></msqrt><mi>/</mi><mn>4</mn></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi><mo>=</mo><mi>V</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><msup><mi>h</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(la constante de Planck <math display=\"inline\"><mi>h</mi></math> aparece de forma natural al simplificar <math display=\"inline\"><mi>ħ</mi></math> y las potencias de <math display=\"inline\"><mi>π</mi></math>). La distribución de energías resultante,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>N</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><msqrt><mi>ε</mi></msqrt><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es la <strong>distribución de Maxwell-Boltzmann</strong> para la energía de un gas monoatómico."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Ecuaciones termodinámicas del gas ideal",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mi>z</mi></math> ya calculada, <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math>, y las fórmulas generales de la sección anterior:"
    },
    {
     "mota": "testua",
     "html": "<strong>Energía interna.</strong> <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>n</mi><mi>R</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(usando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><msub><mi>N</mi><mi>A</mi></msub></mrow></math> mol, <math display=\"inline\"><mrow><msub><mi>N</mi><mi>A</mi></msub><msub><mi>k</mi><mi>B</mi></msub><mo>=</mo><mi>R</mi></mrow></math>) — el resultado clásico de equipartición para un gas monoatómico: <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> por partícula, un medio por cada uno de los 3 grados de libertad de traslación."
    },
    {
     "mota": "testua",
     "html": "<strong>Calor específico.</strong> <math display=\"block\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>n</mi><mi>R</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Energía libre y ecuación de estado.</strong> Usando <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub></mrow></math> (con <math display=\"inline\"><mrow><mi>N</mi><mo>,</mo><mi>T</mi></mrow></math> fijos, solo <math display=\"inline\"><mrow><mi>z</mi><mo>∝</mo><mi>V</mi></mrow></math> depende de <math display=\"inline\"><mi>V</mi></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>V</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><msub><mi>N</mi><mi>A</mi></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mi>n</mi><mi>R</mi><mi>T</mi></mrow><mi>V</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mi>V</mi><mo>=</mo><mi>n</mi><mi>R</mi><mi>T</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la ecuación de estado del gas ideal, deducida aquí desde primeros principios estadísticos —no postulada, como es habitual en un curso de termodinámica clásica."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "La entropía y la fórmula de Sackur-Tetrode",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mi>z</mi></math> en la expresión de <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>U</mi><mi>/</mi><mi>T</mi><mo>+</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo>−</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math> y usando Stirling (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi><mo>≈</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mo>−</mo><mi>N</mi></mrow></math>), se obtiene la <strong>ecuación de Sackur-Tetrode</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi mathvariant=\"normal\">ln</mi><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub></mrow><msup><mi>h</mi><mn>2</mn></msup></mfrac><mo>−</mo><mi mathvariant=\"normal\">ln</mi><mi>N</mi><mo>+</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es la primera expresión de la entropía de un gas ideal deducida enteramente desde la mecánica estadística (no como una integral indefinida <math display=\"inline\"><mrow><mi>d</mi><mi>S</mi><mo>=</mo><mi>d</mi><mi>Q</mi><mi>/</mi><mi>T</mi></mrow></math>, sino con la constante aditiva completamente determinada)."
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Aplicación: procesos adiabáticos reversibles",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En un proceso adiabático reversible el sistema está aislado, así que <math display=\"inline\"><mi>S</mi></math> permanece constante. De la fórmula de Sackur-Tetrode, a <math display=\"inline\"><mi>N</mi></math> fijo, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo></mrow></math> cte exige <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo></mrow></math> cte (los demás términos no dependen de <math display=\"inline\"><mi>V</mi></math> ni de <math display=\"inline\"><mi>T</mi></math>). Entre un estado inicial <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>a</mi></msub><mo>,</mo><msub><mi>T</mi><mi>a</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y uno final <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>b</mi></msub><mo>,</mo><msub><mi>T</mi><mi>b</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mi>a</mi></msub><msubsup><mi>T</mi><mi>a</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mo>=</mo><msub><mi>V</mi><mi>b</mi></msub><msubsup><mi>T</mi><mi>b</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msubsup><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mi>b</mi></msub><mo>=</mo><msub><mi>T</mi><mi>a</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>V</mi><mi>b</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y combinando con la ecuación de estado del gas ideal se obtiene la relación equivalente en presión,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>P</mi><mi>b</mi></msub><mo>=</mo><msub><mi>P</mi><mi>a</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>V</mi><mi>a</mi></msub><msub><mi>V</mi><mi>b</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— la conocida relación <math display=\"inline\"><mrow><mi>P</mi><msup><mi>V</mi><mi>γ</mi></msup><mo>=</mo></mrow></math> cte de las adiabáticas de un gas monoatómico (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>5</mn><mi>/</mi><mn>3</mn></mrow></math>), obtenida aquí directamente de Sackur-Tetrode en vez de postularse aparte."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "La distribución de velocidades de Maxwell",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Reescribiendo la distribución de energías en términos de la velocidad (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>ε</mi><mo>=</mo><mi>m</mi><mi>v</mi><mi>d</mi><mi>v</mi></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>N</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>d</mi><mi>v</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Distribución de velocidades de Maxwell <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: asimétrica, con el máximo (velocidad más probable) ligeramente por debajo de la velocidad media <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, que a su vez queda por debajo de la velocidad cuadrática media.",
     "src": "../media/irudiak/f70c1bdaf6caf438.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "De esta distribución se derivan tres velocidades características, cada una útil en un contexto distinto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>v</mi><mspace width=\"0.222em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>π</mi><mi>m</mi></mrow></mfrac></msqrt><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batez besteko abiadura) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">pro </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (abiadura probableena, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -ren maximoa) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mtext mathvariant=\"normal\">  </mtext><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batez besteko abiadura koadratikoa, </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -tik) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Nótese que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> coincide, consistentemente, con <math display=\"inline\"><mrow><mi>U</mi><mi>/</mi><mi>N</mi></mrow></math> ya obtenido arriba por la vía de la función de partición: son la misma física calculada de dos formas distintas, igual que la verificación cruzada del capítulo 2."
    },
    {
     "mota": "oharra",
     "titulua": "Magnitud típica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para un gas a temperatura ambiente (<math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>21</mn></mrow></msup></mrow></math> J) con moléculas de masa típica <math display=\"inline\"><mrow><mi>m</mi><mo>∼</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math>-<math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>26</mn></mrow></msup></math> kg, estas velocidades son del orden de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>∼</mo><msup><mn>10</mn><mn>3</mn></msup></mrow></math> m/s — cientos de metros por segundo, consistente con la velocidad del sonido en el aire."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "La fórmula barométrica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si además de la energía cinética las partículas tienen energía potencial gravitatoria (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mo>+</mo><mi>m</mi><mi>g</mi><mi>z</mi></mrow></math>; atmósfera isoterma, temperatura uniforme con la altura), el factor de Boltzmann <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></math> se factoriza en una parte cinética (que no depende de <math display=\"inline\"><mi>z</mi></math>) y una parte que sí:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>z</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la <strong>fórmula barométrica</strong>: la densidad de partículas decae exponencialmente con la altura, con una escala de decaimiento <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — tanto mayor cuanto más ligera es la molécula y más alta la temperatura. Es la misma estructura matemática que la distribución de Boltzmann entre niveles de energía discretos del capítulo 2, ahora aplicada a un &quot;nivel&quot; continuo de energía potencial."
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "La paradoja de Gibbs",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos dos compartimentos idénticos, cada uno con <math display=\"inline\"><mi>N</mi></math> partículas de un gas a la misma temperatura <math display=\"inline\"><mi>T</mi></math> y volumen <math display=\"inline\"><mi>V</mi></math>, separados por una pared. Al retirar la pared, el volumen disponible para cada gas se duplica (<math display=\"inline\"><mrow><mi>V</mi><mo>→</mo><mn>2</mn><mi>V</mi></mrow></math>); calculamos el cambio de entropía del sistema completo con la fórmula de Sackur-Tetrode, en dos casos."
    },
    {
     "mota": "testua",
     "html": "<strong>Gases distintos (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>≠</mo><msub><mi>m</mi><mn>2</mn></msub></mrow></math>).</strong> Antes de retirar la pared, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>h</mi></msubsup><mo>=</mo><msubsup><mi>S</mi><mn>1</mn><mi>h</mi></msubsup><mo>+</mo><msubsup><mi>S</mi><mn>2</mn><mi>h</mi></msubsup></mrow></math> (cada gas en su volumen <math display=\"inline\"><mi>V</mi></math>); después, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>b</mi></msubsup><mo>=</mo><msubsup><mi>S</mi><mn>1</mn><mi>b</mi></msubsup><mo>+</mo><msubsup><mi>S</mi><mn>2</mn><mi>b</mi></msubsup></mrow></math> (cada gas expandido a <math display=\"inline\"><mrow><mn>2</mn><mi>V</mi></mrow></math>, mezclado con el otro pero sin que eso afecte a su propia entropía, ya que son especies distintas). El cambio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>b</mi></msubsup><mo>−</mo><msubsup><mi>S</mi><mtext mathvariant=\"normal\">total</mtext><mi>h</mi></msubsup><mo>=</mo><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "un resultado físicamente razonable: la entropía de mezcla aumenta, porque cada gas se ha expandido a un volumen mayor (con independencia de si hay o no otro gas de por medio) — este es precisamente el mismo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi></mrow></math> que se obtendría por la fórmula termodinámica elemental de expansión libre, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>V</mi><mi>f</mi></msub><mi>/</mi><msub><mi>V</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para cada gas."
    },
    {
     "mota": "testua",
     "html": "<strong>El mismo gas (<math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><mo>=</mo><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>m</mi></mrow></math>), sin el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math>.</strong> Repitiendo el cálculo con <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup></mrow></math> (partículas &quot;distinguibles&quot;) se obtiene <strong>exactamente el mismo</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math> que en el caso de gases distintos. Aquí está la paradoja: si ambos compartimentos contienen el mismo gas, retirar la pared no debería cambiar nada físicamente observable (las partículas eran, y siguen siendo, indistinguibles entre sí) — la entropía no debería aumentar en absoluto. Sin embargo, el cálculo &quot;distinguible&quot; predice el mismo aumento que si los gases fueran diferentes."
    },
    {
     "mota": "testua",
     "html": "<strong>La resolución: el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math>.</strong> Repitiendo el cálculo con <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mi>z</mi><mi>N</mi></msup><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math> (partículas indistinguibles) para el caso del mismo gas, los términos <math display=\"inline\"><mrow><mi>−</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>N</mi><mi>!</mi></mrow></math> ya no se cancelan igual en ambos lados y, entre los dos estados:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msup><mi>S</mi><mi>b</mi></msup><mo>−</mo><msup><mi>S</mi><mi>h</mi></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La paradoja de Gibbs muestra que el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi></mrow></math> no es un simple detalle de normalización: es <strong>necesario</strong> para que la mecánica estadística clásica dé resultados físicamente sensatos con partículas indistinguibles, y prefigura (ya en el contexto puramente clásico) la distinción fermión/bosón que la mecánica cuántica formalizaría después."
    }
   ]
  },
  {
   "id": "a38",
   "maila": 1,
   "izenburua": "El rotor rígido y la molécula diatómica",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este capítulo reproduce y desarrolla apuntes propios del usuario (Mikel Aguirre) — cuaderno de física moderna, &quot;2. Blokea: Mekanika Estatistikoa&quot;, tema 15. No es un libro de terceros. Extiende el gas ideal del capítulo anterior (válido para un gas <strong>monoatómico</strong>, donde la única forma de energía es la traslación) al caso de una molécula <strong>diatómica</strong>, que además puede rotar y vibrar."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Tres formas de energía",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para un átomo aislado, la única energía posible es la traslación: <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><msub><mi>ε</mi><mi>t</mi></msub></mrow></math>. Una molécula diatómica —dos átomos de masa <math display=\"inline\"><msub><mi>m</mi><mn>2</mn></msub></math> separados una distancia <math display=\"inline\"><mi>d</mi></math>— tiene, además, dos formas más de energía: la de <strong>rotación</strong> (<math display=\"inline\"><msub><mi>ε</mi><mtext mathvariant=\"normal\">rot</mtext></msub></math>) alrededor del centro de masas, y la de <strong>vibración</strong> (<math display=\"inline\"><msub><mi>ε</mi><mtext mathvariant=\"normal\">vib</mtext></msub></math>) del enlace, que se comporta como un oscilador armónico de longitud variable en torno a <math display=\"inline\"><mi>d</mi></math>. La energía total de la molécula es la suma de las tres, independientes entre sí:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><msub><mi>ε</mi><mi>t</mi></msub><mo>+</mo><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>+</mo><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Contando grados de libertad: 3 de traslación, 2 de rotación (los dos ángulos que orientan el eje de la molécula — rotar alrededor del propio eje no cuenta, por simetría), y 1 de vibración (que, al ser armónica, cuenta doble: energía cinética y potencial) — 6 en total, coherente con los 3 grados de libertad de cada uno de los 2 átomos que componen la molécula."
    },
    {
     "mota": "testua",
     "html": "Como las tres energías son independientes, la función de partición de una molécula se factoriza:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msub><mi>z</mi><mi>t</mi></msub><mo>×</mo><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>×</mo><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "y cada factor puede calcularse por separado. <math display=\"inline\"><msub><mi>z</mi><mi>t</mi></msub></math> ya se calculó en el capítulo anterior, <math display=\"inline\"><mrow><msub><mi>z</mi><mi>t</mi></msub><mo>=</mo><msup><mrow><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><msup><mi>h</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, dando la misma <math display=\"inline\"><mrow><msub><mi>U</mi><mi>t</mi></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> de siempre."
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Rotación: el rotor rígido",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El momento angular de una molécula que rota como un rotor rígido está cuantizado, siendo <math display=\"inline\"><mrow><msup><mi>J</mi><mn>2</mn></msup><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con <math display=\"inline\"><mrow><mi>j</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> (número cuántico del momento angular orbital), y cada nivel <math display=\"inline\"><mi>j</mi></math> tiene degeneración <math display=\"inline\"><mrow><msub><mi>g</mi><mi>j</mi></msub><mo>=</mo><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn></mrow></math> (los <math display=\"inline\"><mrow><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn></mrow></math> valores posibles de la proyección <math display=\"inline\"><mrow><msub><mi>J</mi><mi>z</mi></msub><mo>=</mo><mi>m</mi><mi>ħ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>−</mi><mi>j</mi><mo>,</mo><mi>…</mi><mo>,</mo><mi>j</mi></mrow></math>). La energía rotacional correspondiente es"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>J</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi></mrow></mfrac><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mi>I</mi></math> es el momento de inercia de la molécula. La función de partición rotacional:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>ħ</mi><mn>2</mn></msup><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>I</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Definiendo la <strong>temperatura rotacional característica</strong> <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>I</mi><msub><mi>k</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, la suma se aproxima por una integral cuando <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math> (el caso habitual a temperatura ambiente, como se verá), con el cambio <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>j</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo>≈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>j</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mi>T</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>T</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "de donde, con las fórmulas habituales <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>d</mi><mi>T</mi></mrow></mfrac></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo numérico.</strong> Para el N₂ (<math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1.1</mn></mrow></math> Å, masa reducida <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>m</mi><mi>/</mi><mn>2</mn><mo>≈</mo><mn>7</mn><mo>×</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>μ</mi><msup><mi>d</mi><mn>2</mn></msup><mo>≈</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>46</mn></mrow></msup></mrow></math> kg m<math display=\"inline\"><msup><mrow></mrow><mn>2</mn></msup></math>): <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>2.9</mn></mrow></math> K. Para el H₂ (mucho más ligero): <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>86</mn></mrow></math> K. En ambos casos, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">giroa </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>300</mn></mrow></math> K, así que la aproximación integral (<math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math>) es excelente a temperatura ambiente para prácticamente cualquier molécula diatómica común."
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Vibración: el oscilador armónico del enlace",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El enlace se modela como un oscilador armónico cuántico de frecuencia <math display=\"inline\"><mrow><mi>ν</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msqrt><mrow><mi>k</mi><mi>/</mi><mi>μ</mi></mrow></msqrt></mrow></math> (<math display=\"inline\"><mi>k</mi></math> la constante elástica efectiva del enlace, <math display=\"inline\"><mi>μ</mi></math> la masa reducida), con niveles <math display=\"inline\"><mrow><msub><mi>ε</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mi>ν</mi></mrow></math> — el mismo tipo de oscilador que ya apareció en el sólido de Einstein y en el oscilador de Planck de Física Moderna. Definiendo la <strong>temperatura vibracional</strong> <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, la función de partición (la misma serie geométrica de siempre) y la energía interna resultan"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mn>2</mn><mi>T</mi></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>U</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mfrac><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow><mrow><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y el calor específico vibracional,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">vib</mtext></mrow></msub><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mfrac><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es <strong>exactamente</strong> la misma expresión funcional que el calor específico del sólido de Einstein (capítulo 4) — no es casualidad: en ambos casos se trata de un oscilador armónico cuántico independiente, y la física de la &quot;congelación&quot; a bajas temperaturas es idéntica."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo numérico.</strong> <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></math>(H₂)<math display=\"inline\"><mrow><mo>≈</mo><mn>6210</mn></mrow></math> K, <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></math>(N₂)<math display=\"inline\"><mrow><mo>≈</mo><mn>3340</mn></mrow></math> K — muchísimo mayor que <math display=\"inline\"><msub><mi>T</mi><mtext mathvariant=\"normal\">giro</mtext></msub></math> en ambos casos: justo el caso contrario al de la rotación."
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Las mesetas del calor específico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Resumiendo los tres límites:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (beti)</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">vib</mtext></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mtd></mtr></mtable></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "con <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">vib</mtext></mrow></msub></mrow></math>. Como para la mayoría de las moléculas diatómicas comunes <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><msub><mi>T</mi><mrow><mtext mathvariant=\"normal\">giro </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math>, el calor específico de un gas diatómico presenta tres regímenes o &quot;mesetas&quot; según la temperatura:"
    },
    {
     "mota": "irudia",
     "oina": "Calor específico de una molécula diatómica en función de <math display=\"inline\"><mi>T</mi></math> (escala logarítmica): tres mesetas, <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (solo traslación, <math display=\"inline\"><mrow><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math>), <math display=\"inline\"><mrow><mn>5</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (traslación + rotación, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≪</mo><mi>T</mi><mo>≪</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math>) y <math display=\"inline\"><mrow><mn>7</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (las tres, <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math>) — la vibración se &quot;activa&quot; mucho más tarde que la rotación porque <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math> en casi cualquier molécula diatómica común.",
     "src": "../media/irudiak/da1df6e27436068d.svg",
     "zabalera": 390
    },
    {
     "mota": "testua",
     "html": "Esta es la misma &quot;congelación cuántica&quot; de grados de libertad que ya vimos con el sólido de Einstein (capítulo 4): cada grado de libertad solo contribuye al calor específico —con el valor de equipartición clásico— una vez que <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> supera el cuanto de energía característico de ese grado de libertad (<math display=\"inline\"><mrow><mi>h</mi><mi>ν</mi></mrow></math> para vibración, <math display=\"inline\"><mrow><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mi>I</mi></mrow></math> para rotación)."
    },
    {
     "mota": "oharra",
     "titulua": "El caso del O₂ a temperatura ambiente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para el O₂ (<math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>2.1</mn></mrow></math> K, <math display=\"inline\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>2200</mn></mrow></math> K), a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>298</mn></mrow></math> K estamos claramente en la meseta intermedia: <math display=\"inline\"><mrow><msub><mi>C</mi><mi>V</mi></msub><mo>=</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>+</mo><msub><mi>C</mi><mrow><mi>V</mi><mo>,</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msub><mo>=</mo><mn>5</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, con la contribución vibracional siendo solo del orden de un <math display=\"inline\"><mn>1</mn></math> - <math display=\"inline\"><mrow><mn>2</mn><mi>%</mi></mrow></math> de ese valor — prácticamente congelada, porque <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>≈</mo><mn>0.14</mn><mo>≪</mo><mn>1</mn></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 1,
   "izenburua": "Ejercicios oficiales (UPV/EHU)",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "fismo_2bloque_ejercicios",
     "xehetasuna": "Física Moderna, Grado en Física/Grado en Ingeniería Electrónica, ZTF-UPV/EHU. Boletín oficial, por temas (temas 11-16), con hoja de Resultados y resolución manuscrita.",
     "hizkuntza": "eu"
    },
    {
     "mota": "oharra",
     "titulua": "Nota de transcripción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estos boletines se incluyen con enunciado <strong>y</strong> solución oficial, igual que los exámenes del capítulo de Física Moderna. Varios problemas ya están cubiertos por la teoría de los capítulos 1-7 de este bloque (están señalados); se transcriben aquí de todas formas, completos, por fidelidad a la fuente. Cuando una solución no está desarrollada en el documento original, se declara explícitamente en vez de inventarla."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Tema 11",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Boletín sin hoja de resultados",
     "blokeak": [
      {
       "mota": "testua",
       "html": "A diferencia de los boletines siguientes, este no tiene hoja de &quot;Emaitzak&quot; fotografiada — pero sí resolución manuscrita completa para los tres problemas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una moneda roja-azul se lanza <math display=\"inline\"><mi>N</mi></math> veces; la probabilidad de obtener <math display=\"inline\"><mi>n</mi></math> rojas y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> azules viene dada por la función de distribución <math display=\"block\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Si <math display=\"inline\"><mi>N</mi></math> es par, demostrar que para <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> la función de distribución <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es creciente, es decir, que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Si <math display=\"inline\"><mi>N</mi></math> es par, demostrar que para <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> la función de distribución <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es decreciente, es decir, que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Teniendo en cuenta los dos apartados anteriores, demostrar que la función de distribución <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es máxima cuando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Si <math display=\"inline\"><mi>N</mi></math> es impar, demostrar que para <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> la función de distribución <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es creciente, es decir, que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "e) Si <math display=\"inline\"><mi>N</mi></math> es impar, demostrar que para <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> la función de distribución <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> es decreciente, es decir, que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "f) Teniendo en cuenta los dos apartados anteriores, demostrar que el máximo de la función de distribución <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>±</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mspace width=\"0.222em\"></mspace><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mspace width=\"0.222em\"></mspace><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mi>.</mi></mrow></math> para <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>&gt;</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn></mrow><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>2</mn><mi>N</mi></mfrac><mo>&gt;</mo><mn>1</mn><mi>.</mi></mrow></math> Como el cociente es mayor que 1, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: la función es creciente."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> para <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>−</mo><mi>n</mi></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow><mrow><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn></mrow></mfrac><mo>&lt;</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><mo>&lt;</mo><mn>1</mn><mi>.</mi></mrow></math> Como el cociente es menor que 1, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: la función es decreciente."
      },
      {
       "mota": "testua",
       "html": "c) De (a) y (b): <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> crece hasta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> y decrece a partir de ahí, así que su máximo está en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Igual que en (a), <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math> para <math display=\"inline\"><mrow><mi>n</mi><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo>−</mo><mn>1</mn><mo>&gt;</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>&gt;</mo><mn>1</mn><mo>,</mo></mrow></math> luego <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&gt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: creciente."
      },
      {
       "mota": "testua",
       "html": "e) Igual que en (b), <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math> para <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>&lt;</mo><mfrac><mrow><mi>N</mi><mo>+</mo><mn>1</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn></mrow></mfrac><mo>−</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>N</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>N</mi><mo>+</mo><mn>3</mn></mrow></mfrac><mo>&lt;</mo><mn>1</mn><mo>,</mo></mrow></math> luego <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>&lt;</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: decreciente."
      },
      {
       "mota": "testua",
       "html": "f) De (d) y (e): para <math display=\"inline\"><mi>N</mi></math> impar, <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> crece hasta <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math> y decrece a partir de <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>; comprobando directamente que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (son simétricos respecto al centro), ambos valores son máximos igualmente probables — a diferencia del caso de <math display=\"inline\"><mi>N</mi></math> par, donde el máximo es único."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al lanzar una moneda roja/azul <math display=\"inline\"><mi>N</mi></math> veces, la probabilidad de obtener <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> rojas y <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> azules es la mayor de todas las posibles, <math display=\"block\"><mrow><msub><mi mathvariant=\"normal\">Ω</mi><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> Para comprobar que, siendo <math display=\"inline\"><mi>N</mi></math> muy grande, la probabilidad de desviarse de esa situación es muy pequeña: calcular cuál es el cociente entre las probabilidades de obtener <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> respectivamente, y a continuación calcular el valor de <math display=\"inline\"><mi>m</mi></math> para el cual ese cociente es la mitad del máximo. Comprobar que <math display=\"inline\"><mrow><mi>m</mi><mo>∼</mo><msqrt><mi>N</mi></msqrt></mrow></math>, por lo que la desviación relativa es <math display=\"inline\"><mrow><mi>m</mi><mi>/</mi><mi>N</mi><mo>≪</mo><mn>1</mn></mrow></math>. Por ejemplo, para <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msup><mn>10</mn><mn>24</mn></msup></mrow></math>, comprobar que la probabilidad de que se desvíe uno entre <math display=\"inline\"><msup><mn>10</mn><mn>12</mn></msup></math> monedas del equilibrio es la mitad de la probabilidad máxima. <strong>Ayuda:</strong> escribir la igualdad, tomar el logaritmo y usar la aproximación de Stirling."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "El cociente pedido, usando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mspace width=\"0.222em\"></mspace><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></math> (los factores <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msup><mn>2</mn><mi>N</mi></msup><mi>N</mi><mi>!</mi></mrow></math> se cancelan). Igualando el valor de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a la mitad del máximo <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>=</mo><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> Tomando logaritmos y usando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>a</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>a</mi><mi>b</mi></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>a</mi></mrow></math>: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mrow><mn>2</mn><mi>!</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Desarrollando cada factorial con la aproximación de Stirling <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mi>!</mi><mo>=</mo><mi>n</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>n</mi><mo>−</mo><mi>n</mi></mrow></math> (los términos lineales, <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>N</mi></mrow></math>, se cancelan con los del lado derecho, <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>N</mi></mrow></math>): <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>+</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>−</mo><mi>m</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> Con el cambio <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mi>m</mi><mi>/</mi><mi>N</mi></mrow></math> (es decir, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>α</mi><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>), y dividiendo entre <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mi>N</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow></math> Para <math display=\"inline\"><mrow><mi>N</mi><mo>≫</mo><mn>1</mn></mrow></math> el lado derecho es muy pequeño, así que <math display=\"inline\"><mrow><mi>α</mi><mo>≪</mo><mn>1</mn></mrow></math>; desarrollando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>±</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>±</mi><mi>α</mi><mo>−</mo><msup><mi>α</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math> y sustituyendo, los términos lineales y cúbicos se cancelan y queda, a segundo orden, <math display=\"block\"><mrow><msup><mi>α</mi><mn>2</mn></msup><mo>≈</mo><mfrac><mn>2</mn><mi>N</mi></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>≈</mo><msqrt><mfrac><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mi>N</mi></mfrac></msqrt></mrow></math> y por tanto, con <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>α</mi><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mi>m</mi><mo>≈</mo><msqrt><mfrac><mrow><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mn>2</mn></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>m</mi><mi>N</mi></mfrac><mo>≈</mo><msqrt><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mn>2</mn><mrow><mn>2</mn><mi>N</mi></mrow></mfrac></mrow></msqrt><mo>∼</mo><mfrac><mn>1</mn><msqrt><mi>N</mi></msqrt></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Con esto, la desviación relativa del reparto respecto al equilibrio <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math>-<math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>N</mi></msqrt></mrow></math>: para <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><msup><mn>10</mn><mn>24</mn></msup></mrow></math>, del orden de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>12</mn></mrow></msup></math> — consistente con el enunciado, que pide comprobar que desviarse en una parte entre <math display=\"inline\"><msup><mn>10</mn><mn>12</mn></msup></math> monedas ya reduce la probabilidad a la mitad de la máxima."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Calcularemos el resultado anterior de forma más precisa. Usando la relación <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><msup><mn>2</mn><mi>N</mi></msup><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "a) Demostrar que la media de <math display=\"inline\"><mi>n</mi></math> es: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mi>n</mi><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><mi>n</mi><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mi>N</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) Demostrar que la media de la magnitud <math display=\"inline\"><msup><mi>n</mi><mn>2</mn></msup></math> es: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><msup><mi>n</mi><mn>2</mn></msup><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>N</mi></munderover><msup><mi>n</mi><mn>2</mn></msup><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Demostrar que la desviación estándar es: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>n</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mfrac><msqrt><mi>N</mi></msqrt><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Con <math display=\"inline\"><mrow><mi>n</mi><mi>/</mi><mi>n</mi><mi>!</mi><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math> y el cambio <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>N</mi><mo>−</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mfrac><mi>n</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mn>2</mn><mi>N</mi></msup></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>N</mi></munderover><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mi>N</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mi>M</mi></munderover><mfrac><mrow><mi>M</mi><mi>!</mi></mrow><mrow><mi>m</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mi>N</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><msup><mn>2</mn><mi>M</mi></msup><mo>=</mo><mfrac><mi>N</mi><msup><mn>2</mn><mi>N</mi></msup></mfrac><msup><mn>2</mn><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></msup><mo>=</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>,</mo></mrow></math> usando la relación <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>m</mi></msub><mi>M</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mn>2</mn><mi>M</mi></msup></mrow></math> dada en el enunciado."
      },
      {
       "mota": "testua",
       "html": "b) Separando <math display=\"inline\"><mrow><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>n</mi></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> Para el primer término, con <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>n</mi><mi>!</mi><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></math> y el cambio <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mi>N</mi><mo>−</mo><mn>2</mn></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow><mi>N</mi></munderover><mfrac><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mi>N</mi></msup></mfrac><mfrac><mrow><mi>N</mi><mi>!</mi></mrow><mrow><mi>n</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mi>N</mi></msup></mfrac><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow><mi>M</mi></munderover><mfrac><mrow><mi>M</mi><mi>!</mi></mrow><mrow><mi>m</mi><mi>!</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mn>2</mn><mi>N</mi></msup></mfrac><msup><mn>2</mn><mi>M</mi></msup><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math> Sumando el segundo término, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> (del apartado a): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></mfrac><mo>+</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo>=</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><mo>−</mo><mi>N</mi><mo>+</mo><mn>2</mn><mi>N</mi></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"normal\">Δ</mi><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><msup><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>4</mn></mfrac><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>N</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><mo>+</mo><mi>N</mi><mo>−</mo><msup><mi>N</mi><mn>2</mn></msup></mrow><mn>4</mn></mfrac><mo>=</mo><mfrac><mi>N</mi><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Δ</mi><mi>n</mi><mo>=</mo><mfrac><msqrt><mi>N</mi></msqrt><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Y la desviación <strong>relativa</strong>: <math display=\"block\"><mrow><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>n</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msqrt><mi>N</mi></msqrt><mi>/</mi><mn>2</mn></mrow><mrow><mi>N</mi><mi>/</mi><mn>2</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>N</mi></msqrt></mfrac><mo>,</mo></mrow></math> que <math display=\"inline\"><mrow><mo>→</mo><mn>0</mn></mrow></math> en el límite <math display=\"inline\"><mrow><mi>N</mi><mo>→</mo><mi>∞</mi></mrow></math>: cuanto mayor es el sistema, más estrecho (relativamente) es el pico de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en torno a <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>N</mi><mi>/</mi><mn>2</mn></mrow></math> — es la versión exacta y rigurosa de la estimación cualitativa &quot;la anchura relativa decae como <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><msqrt><mi>N</mi></msqrt></mrow></math>&quot; que el capítulo 1 de este bloque afirma sin demostrar, y del mismo orden que el resultado del problema 2."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Temas 12 y 13",
   "blokeak": [
    {
     "mota": "problema",
     "izena": "[cubierto por el capítulo 1: sólido de Einstein]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un sistema los niveles de energía son los siguientes: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>ε</mi><mo>,</mo><mn>2</mn><mi>ε</mi><mo>,</mo><mn>3</mn><mi>ε</mi><mo>,</mo><mi>…</mi></mrow></math> Supongamos que el sistema tiene 10 partículas y que la energía interna es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math>. Calcular cuáles pueden ser todos los macroestados del sistema. Calcular el número de microestados de cada macroestado. ¿Cuál tiene el número más alto? Para hacer el ejercicio, intentar no usar la expresión general de <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Enumerando todas las formas de repartir la energía total (10 partículas, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math>), y calculando el <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math> de cada una mediante el coeficiente multinomial:"
      },
      {
       "mota": "taula-kutxa",
       "oina": "Los 11 macroestados con energía total <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>6</mn><mi>ε</mi></mrow></math> (10 osciladores distinguibles): cada fila indica cuántos osciladores están en cada nivel de energía (en unidades de <math display=\"inline\"><mi>ε</mi></math>), y su multiplicidad <math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math>. Dos macroestados distintos comparten la mayor multiplicidad, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>1260</mn></mrow></math>.",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<div class=\"j-taula\"><table><tbody><tr><td>Distribución de 10 osciladores (nivel: cuántos)</td><td><math display=\"inline\"><mi mathvariant=\"normal\">Ω</mi></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>6</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>9</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>9</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>5</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>8</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>8</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>90</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>4</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>8</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>8</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>90</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>4</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>7</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>2</mn><mi>!</mi><mn>7</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>360</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>3</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>8</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>!</mi><mn>8</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>45</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>3</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>7</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>1</mn><mi>!</mi><mn>7</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>720</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>3</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>3</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>6</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>3</mn><mi>!</mi><mn>6</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>840</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>3</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>7</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>!</mi><mn>7</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>120</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>2</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>6</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>!</mi><mn>2</mn><mi>!</mi><mn>6</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1260</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>2</mn><mo>:</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>:</mo><mn>4</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>5</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>!</mi><mn>4</mn><mi>!</mi><mn>5</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1260</mn></mrow></math></td></tr><tr><td><math display=\"inline\"><mrow><mn>1</mn><mo>:</mo><mn>6</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>:</mo><mn>4</mn></mrow></math></td><td><math display=\"inline\"><mrow><mn>10</mn><mi>!</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>!</mi><mn>4</mn><mi>!</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>210</mn></mrow></math></td></tr></tbody></table></div>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Hay 11 macroestados en total, y sumando todas las multiplicidades se recupera <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><mo>+</mo><mn>90</mn><mo>+</mo><mn>90</mn><mo>+</mo><mn>360</mn><mo>+</mo><mn>45</mn><mo>+</mo><mn>720</mn><mo>+</mo><mn>840</mn><mo>+</mo><mn>120</mn><mo>+</mo><mn>1260</mn><mo>+</mo><mn>1260</mn><mo>+</mo><mn>210</mn><mo>=</mo><mn>5005</mn></mrow></math> — el mismo resultado que da directamente la fórmula combinatoria <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mi>N</mi><mo>+</mo><mi>q</mi><mo>−</mo><mn>1</mn></mrow><mi>q</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> ya usada en el capítulo 1, obtenido aquí por enumeración explícita de cada reparto posible, en vez de por la fórmula cerrada."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En los átomos, el orden de magnitud de la diferencia entre los niveles de energía de los electrones es el electronvoltio. En un sistema, los valores de energía que pueden tener los átomos son dos, siendo la diferencia entre ambas energías <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn></mrow></math> eV. En condiciones normales, a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K, ¿cuál es el cociente entre los números de partículas de los dos niveles? <strong>Resultado:</strong> <math display=\"inline\"><mrow><mo>∼</mo><msup><mi>e</mi><mn>38</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><mi>/</mi><mi>z</mi><mspace width=\"0.222em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>, el cociente entre dos niveles separados <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mn>1</mn></mrow></math> eV a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K: <math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>n</mi><mn>1</mn></msub></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>≈</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>39</mn></mrow></msup><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup><mi>.</mi></mrow></math> Aplicando el mismo tipo de cálculo a los niveles del átomo de hidrógeno (<math display=\"inline\"><mrow><msub><mi>E</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mn>13.6</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math> eV), con <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>≈</mo><mn>1</mn></mrow></math> eV entre niveles consecutivos altos: <math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mn>3</mn></msub><msub><mi>n</mi><mn>1</mn></msub></mfrac><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>17</mn></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><msub><mi>n</mi><mn>3</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac><mo>≈</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>34</mn></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[cubierto por el capítulo 2: verificación cruzada de la entropía]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las <math display=\"inline\"><mi>N</mi></math> partículas de un sistema pueden tener dos valores posibles de energía, <math display=\"inline\"><msub><mi>ε</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math>. Las partículas son distinguibles. El sistema está en contacto con un sistema externo, a temperatura constante. El número de partículas en cada nivel de energía es <math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math> y <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mi>N</mi><mo>−</mo><msub><mi>n</mi><mn>1</mn></msub></mrow></math>. En un proceso cuántico, las partículas pueden pasar de un nivel a otro, es decir, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>1</mn></msub><mo>→</mo><msub><mi>n</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>→</mo><msub><mi>n</mi><mn>2</mn></msub><mo>−</mo><mn>1</mn></mrow></math>. Como consecuencia de este proceso, se intercambia energía con el sistema externo. Calcular el cambio de entropía del sistema cuando ocurre ese proceso cuántico."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Vía macroscópica:</strong> de <math display=\"inline\"><mrow><mi>d</mi><mi>U</mi><mo>=</mo><mi>T</mi><mi>d</mi><mi>S</mi><mo>−</mo><mi>P</mi><mi>d</mi><mi>V</mi></mrow></math> (a volumen constante), <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>U</mi></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>1</mn></msub></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi></mrow><mi>T</mi></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Vía microscópica:</strong> con <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><msub><mi>n</mi><mn>2</mn></msub><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> antes del cambio y <math display=\"inline\"><mrow><msup><mi>S</mi><mo>′</mo></msup><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> después: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msup><mi>S</mi><mo>′</mo></msup><mo>−</mo><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mrow><msub><mi>n</mi><mn>1</mn></msub><mi>!</mi><msub><mi>n</mi><mn>2</mn></msub><mi>!</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>1</mn></msub><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi></mrow></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn></mrow></mfrac><mo>≈</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>2</mn></msub></mfrac></mrow></math> (aproximando <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>+</mo><mn>1</mn><mo>≈</mo><msub><mi>n</mi><mn>2</mn></msub></mrow></math>, para <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>≫</mo><mn>1</mn></mrow></math>). Sustituyendo la distribución de equilibrio <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>∝</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>S</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mfrac><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>−</mo><msub><mi>ε</mi><mn>1</mn></msub></mrow><mi>T</mi></mfrac><mo>=</mo><mfrac><mrow><mi mathvariant=\"normal\">Δ</mi><mi>ε</mi></mrow><mi>T</mi></mfrac><mo>,</mo></mrow></math> el mismo resultado que por la vía macroscópica — es exactamente la verificación cruzada ya presentada en el capítulo 2 de este bloque (§ &quot;Ejemplo: sistema de dos niveles&quot;), con notación equivalente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[cubierto por el capítulo 2: paramagnetismo y ley de Curie]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un sólido el momento angular de los iones es <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>ħ</mi></mrow></math>. Cada ion puede estar en tres estados distintos, siendo la componente <math display=\"inline\"><mi>z</mi></math> del momento angular, <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>−</mi><mi>ħ</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>ħ</mi></mrow></math> en cada caso. Por efectos eléctricos, los estados <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mi>±</mi><mi>ħ</mi></mrow></math> tienen una energía <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> menor que el estado <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Además, gracias al campo magnético <math display=\"inline\"><mi>B</mi></math> aplicado en la dirección del eje <math display=\"inline\"><mi>z</mi></math>, los estados tienen una energía magnética <math display=\"inline\"><mrow><msub><mi>E</mi><mi>B</mi></msub><mo>=</mo><msub><mi>j</mi><mi>z</mi></msub><mi>/</mi><mi>ħ</mi><mspace width=\"0.222em\"></mspace><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Eligiendo bien el origen de energías, comprobar que las energías de los tres estados son las siguientes: <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>3</mn></msub><mo>=</mo><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>−</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Obtener la función de partición y la susceptibilidad, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>M</mi><mi>/</mi><mi>B</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Según la ley de Curie, la susceptibilidad de un material paramagnético es inversamente proporcional a la temperatura (cuando el campo <math display=\"inline\"><mi>B</mi></math> es muy pequeño, es decir, en el límite <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mn>0</mn></mrow></math>). Comprobar que la ley de Curie se cumple en los dos límites <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≫</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>, pero no cuando <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) En esos dos límites, comprobar que el cociente entre las susceptibilidades es <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Tomando como origen la energía del estado <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: el efecto eléctrico resta <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> (el estado <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> queda en <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math>, no en <math display=\"inline\"><mn>0</mn></math>; ver tabla), y se suma la energía magnética <math display=\"inline\"><mrow><msub><mi>E</mi><mi>B</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>j</mi><mi>z</mi></msub><mi>/</mi><mi>ħ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math>:"
      },
      {
       "mota": "taula-kutxa",
       "oina": "Energías de los tres estados. Con el origen desplazado de modo que el valor <math display=\"inline\"><mrow><msub><mi>ε</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math> corresponda al estado <math display=\"inline\"><mrow><msub><mi>j</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><msub><mi>ε</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>ε</mi><mn>3</mn></msub></math> resultan de restar <math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> a la columna &quot;Energía total&quot;.",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<div class=\"j-taula\"><table><tbody><tr><td><math display=\"inline\"><msub><mi>j</mi><mi>z</mi></msub></math></td><td><math display=\"inline\"><msub><mi>E</mi><mi>B</mi></msub></math></td><td>En. eléctrica</td><td>Energía total</td></tr><tr><td><math display=\"inline\"><mi>ħ</mi></math></td><td><math display=\"inline\"><mrow><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math></td><td><math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math></td><td><math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math></td></tr><tr><td><math display=\"inline\"><mn>0</mn></math></td><td><math display=\"inline\"><mn>0</mn></math></td><td><math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math></td><td><math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math> (referencia)</td></tr><tr><td><math display=\"inline\"><mrow><mi>−</mi><mi>ħ</mi></mrow></math></td><td><math display=\"inline\"><mrow><mi>−</mi><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow></math></td><td><math display=\"inline\"><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi></mrow></math></td><td><math display=\"inline\"><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Δ</mi><mo>+</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></td></tr></tbody></table></div>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "b) La función de partición de un ion: <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>−</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> El momento magnético total, <math display=\"inline\"><mrow><mi>H</mi><mo>=</mo><msub><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub></mrow></math>, con <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>−</mi><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math>: <math display=\"block\"><mrow><mi>H</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mfrac><mi>T</mi><mi>z</mi></mfrac><mfrac><mrow><mi>∂</mi><mi>z</mi></mrow><mrow><mi>∂</mi><mi>B</mi></mrow></mfrac><mo>=</mo><mi>N</mi><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> y la susceptibilidad, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mi>H</mi><mi>/</mi><mi>B</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><msub><mi>μ</mi><mn>0</mn></msub></mrow><mi>B</mi></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mi>B</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) Para el límite <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mn>0</mn></mrow></math> (límite de Curie), <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>≈</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>≈</mo><mfrac><mrow><mi>N</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mfrac><mn>1</mn><mrow><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> <strong>Límite <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math></strong> (<math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>→</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>≈</mo><mfrac><msup><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math> <strong>Límite <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≫</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math></strong> (<math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>→</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>≈</mo><mfrac><msup><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>J</mi></msub><msub><mi>μ</mi><mi>B</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mrow><msub><mi>μ</mi><mn>0</mn></msub><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> En ambos límites, <math display=\"inline\"><mrow><msub><mi>χ</mi><mi>m</mi></msub><mo>∝</mo><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>: ley de Curie; en el régimen intermedio <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>∼</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>, el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi mathvariant=\"normal\">Δ</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> varía con <math display=\"inline\"><mi>T</mi></math> de forma no trivial, y la ley de Curie deja de cumplirse en su forma simple."
      },
      {
       "mota": "testua",
       "html": "d) El cociente entre los dos límites de (c) es, precisamente, <math display=\"block\"><mrow><mfrac><msubsup><mi>χ</mi><mi>m</mi><mrow><mi>T</mi><mo>≫</mo><mi mathvariant=\"normal\">Δ</mi></mrow></msubsup><msubsup><mi>χ</mi><mi>m</mi><mrow><mi>T</mi><mo>≪</mo><mi mathvariant=\"normal\">Δ</mi></mrow></msubsup></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> — o, en el otro sentido, <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>: el resultado pedido. Esta es, esencialmente, la misma derivación del capítulo 2 de este bloque (§ &quot;Ejemplo: paramagnetismo y la ley de Curie&quot;), aquí con la degeneración/desdoblamiento hecho explícito paso a paso y los dos límites de <math display=\"inline\"><msub><mi>χ</mi><mi>m</mi></msub></math> comparados numéricamente."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[resuelto en el capítulo 4: sólido de Einstein]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema consta de <math display=\"inline\"><mi>N</mi></math> osciladores distinguibles de frecuencia <math display=\"inline\"><mi>ν</mi></math>. La temperatura es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>. Calcular, tomando un oscilador concreto, la probabilidad de que esté en el nivel de energía <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este problema está resuelto en detalle en el capítulo 4 de este bloque (sólido de Einstein): cada oscilador es en realidad <strong>tridimensional</strong> e isótropo (3 osciladores 1D por átomo, como establece el modelo de Einstein), con niveles degenerados: <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>. El resultado es <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>6</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>≈</mo><mn>20</mn><mi>%</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema consta de <math display=\"inline\"><mi>N</mi></math> osciladores de frecuencia angular <math display=\"inline\"><mi>ω</mi></math> (osciladores armónicos isótropos tridimensionales, <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi></mrow></math>, con degeneración <math display=\"inline\"><mrow><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>)."
      },
      {
       "mota": "testua",
       "html": "a) Supongamos que, en un instante dado, todos los osciladores están en el nivel de energía <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>. Calcular la energía total del sistema. Ese estado no puede ser un estado de equilibrio. ¿Por qué?"
      },
      {
       "mota": "testua",
       "html": "b) El sistema está aislado, por lo que la energía total es constante. El sistema evolucionará hasta alcanzar el equilibrio termodinámico. Al alcanzar el estado de equilibrio, ¿cuál es la temperatura del sistema?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Con todos los osciladores en el nivel <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>3</mn></mrow></math>, la energía total es <math display=\"inline\"><mrow><msub><mi>U</mi><mn>0</mn></msub><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mo>=</mo><mn>9</mn><mi>/</mi><mn>2</mn><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow></math>. No puede ser un estado de equilibrio, porque corresponde a un único microestado posible (todos los osciladores en el mismo nivel, sin repartir de ninguna otra forma): su multiplicidad es <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>1</mn></mrow></math>, la mínima posible — justo lo opuesto al macroestado de equilibrio, que por el postulado fundamental es el de multiplicidad <strong>máxima</strong>."
      },
      {
       "mota": "testua",
       "html": "b) <strong>Vía macroscópica</strong>, usando la función de partición ya calculada en el problema 5 (<math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>3</mn><mi>x</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ħ</mi><mi>ω</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>): <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi></mrow></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> igualando a <math display=\"inline\"><mrow><msub><mi>U</mi><mn>0</mn></msub><mo>=</mo><mn>9</mn><mi>/</mi><mn>2</mn><mi>N</mi><mi>ħ</mi><mi>ω</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mi>ħ</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>9</mn><mn>2</mn></mfrac><mi>N</mi><mi>ħ</mi><mi>ω</mi><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arcoth </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>3</mn></mrow></math> y por tanto <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>ħ</mi><mi>ω</mi></mrow><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mspace width=\"0.222em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> arcoth</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Vía microscópica</strong>, sumando directamente <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub></mrow></math> con <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi><mi>/</mi><msub><mi>z</mi><mrow><mn>3</mn><mi>D</mi><mspace width=\"0.222em\"></mspace></mrow></msub><mspace width=\"0.222em\"></mspace><msub><mi>g</mi><mi>i</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>i</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math> sobre los niveles degenerados: tras el desarrollo de la serie se llega exactamente al mismo resultado, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ħ</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">coth</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: las dos vías (canónica y microcanónica) son consistentes, como ya se verificó de otras formas en capítulos anteriores."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Sin resolver",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una pregunta del problema 1 (indicar cuál de los 11 macroestados tiene la multiplicidad más alta — es una simple lectura de la tabla del problema 1, no requiere cálculo adicional) no tiene desarrollo explícito en las fotos disponibles."
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Tema 14",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un sistema hay 8 partículas. Tres partículas tienen una velocidad de 10 m/s, y las demás partículas una velocidad de 20 m/s. Obtener <math display=\"inline\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover></msqrt></mrow></math> y <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><mn>5</mn><msub><mi>v</mi><mn>2</mn></msub></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>8</mn></mfrac><mo>=</mo><mn>16.25</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mn>3</mn><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><mn>5</mn><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup></mrow><mi>N</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>100</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>400</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>8</mn></mfrac><mo>=</mo><mn>287.5</mn><msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m</mtext></mrow><mn>2</mn></msup><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover></msqrt><mo>=</mo><mn>16.95</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtener <math display=\"inline\"><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover></math>, <math display=\"inline\"><msub><mi>v</mi><mi>r</mi></msub></math> y la velocidad más probable del gas oxígeno que se encuentra a <math display=\"inline\"><mn>300</mn></math> K."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Partiendo de la distribución de Maxwell, <math display=\"block\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><mn>4</mn><mi>π</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>m</mi><mrow><mn>2</mn><mi>π</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>N</mi><msup><mi>v</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>v</mi><mo>,</mo></mrow></math> las tres velocidades características (mismas fórmulas que en el capítulo 6 de este bloque, § &quot;La distribución de velocidades de Maxwell&quot;) aplicadas al <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>300</mn></mrow></math> K: <math display=\"block\"><mrow><mover><mi>v</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mi>N</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>v</mi><mspace width=\"0.222em\"></mspace><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>=</mo><msqrt><mfrac><mrow><mn>8</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>π</mi><mi>m</mi></mrow></mfrac></msqrt><mo>≈</mo><mn>445</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mi>r</mi></msub><mo>=</mo><msqrt><mover><msup><mi>v</mi><mn>2</mn></msup><mo accent=\"true\">¯</mo></mover></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>3</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mo>≈</mo><mn>484</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>v</mi><mrow><mtext mathvariant=\"normal\">max </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>m</mi></mfrac></msqrt><mo>≈</mo><mn>395</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m/s </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un sólido, las partículas solo pueden moverse por la superficie. El potencial es un pozo de potencial infinito, cuadrado y bidimensional, de lado <math display=\"inline\"><mi>a</mi></math>. Escribir la expresión de la energía. ¿Cuáles son los estados con energía menor que <math display=\"inline\"><mi>ε</mi></math>? Calcular el número de estados anterior, <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. A partir de ahí, calcular la densidad de estados que hay entre <math display=\"inline\"><mi>ε</mi></math> y <math display=\"inline\"><mrow><mi>ε</mi><mo>+</mo><mi>d</mi><mi>ε</mi></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi></mrow></math>. Por último, calcular la función de partición y la energía interna de este sistema bidimensional."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Para una partícula confinada a moverse en dos dimensiones (superficie cuadrada de lado <math display=\"inline\"><mi>L</mi></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msup><mi>L</mi><mn>2</mn></msup></mrow></math>), la ecuación de Schrödinger da <math display=\"block\"><mrow><mi>ε</mi><mo>=</mo><mfrac><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi></mrow></math>. Los estados con energía menor que <math display=\"inline\"><mi>ε</mi></math> satisfacen: <math display=\"block\"><mrow><msubsup><mi>n</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>n</mi><mi>y</mi><mn>2</mn></msubsup><mo>≤</mo><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mi>ε</mi><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (el interior de un cuarto de círculo de radio <math display=\"inline\"><mi>R</mi></math> en el espacio <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mi>x</mi></msub><mo>,</mo><msub><mi>n</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, ya que ambos números cuánticos son positivos). El número de estados con energía menor que <math display=\"inline\"><mi>ε</mi></math>: <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>π</mi><msup><mi>R</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mi>π</mi><mfrac><mrow><mn>2</mn><mi>m</mi><msup><mi>L</mi><mn>2</mn></msup></mrow><mrow><msup><mi>ħ</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mi>ε</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>S</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mi>ε</mi></mrow></math> (con <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><msup><mi>L</mi><mn>2</mn></msup></mrow></math> el área). La densidad de estados: <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>d</mi><mi>G</mi></mrow><mrow><mi>d</mi><mi>ε</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>m</mi><mi>S</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> — constante, a diferencia del caso 3D (donde <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∝</mo><msqrt><mi>ε</mi></msqrt></mrow></math>, capítulo de estadísticas cuánticas) — una peculiaridad característica de los sistemas bidimensionales. La función de partición de una partícula: <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>ε</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mi>m</mi><mi>S</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> y para el sistema completo de <math display=\"inline\"><mi>N</mi></math> partículas indistinguibles, <math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mfrac><msup><mi>z</mi><mi>N</mi></msup><mrow><mi>N</mi><mi>!</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>N</mi><mi>!</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>S</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>ħ</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>N</mi></msup><mo>,</mo></mrow></math> siendo su energía interna: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> — el mismo resultado de equipartición que en el caso 3D, pero ahora con solo 2 grados de libertad de traslación en vez de 3 (aquí se obtiene <math display=\"inline\"><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> en vez de <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> del caso 3D, y <math display=\"inline\"><mrow><mi>z</mi><mo>∝</mo><msup><mi>T</mi><mn>1</mn></msup></mrow></math> en vez de <math display=\"inline\"><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></math>, por ser <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> constante en vez de <math display=\"inline\"><mrow><mo>∝</mo><msqrt><mi>ε</mi></msqrt></mrow></math>)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "A nivel del mar y en condiciones normales (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>273</mn></mrow></math> K, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>1</mn></mrow></math> atm) la composición del aire (en porcentajes de volumen) es la siguiente: <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> (78.084), <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> (20.946), Ar (0.934), Ne (0.0018), He (0.000524) e <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> (0.00005). Supondremos que el aire es un gas ideal y que la temperatura es constante."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la densidad del aire a nivel del mar."
      },
      {
       "mota": "testua",
       "html": "b) Calcular la composición del aire en masa a nivel del mar."
      },
      {
       "mota": "testua",
       "html": "c) Calcular la composición del aire (proporciones en masa) en La Paz (altura<math display=\"inline\"><mrow><mo>=</mo><mn>3.632</mn></mrow></math> m) y en la cima del Everest (altura<math display=\"inline\"><mrow><mo>=</mo><mn>8.848</mn></mrow></math> m)."
      },
      {
       "mota": "testua",
       "html": "d) A nivel del mar, una persona respira 15 veces por minuto. Para tomar la misma cantidad de oxígeno, ¿cuántas veces tiene que respirar tanto en La Paz como en el Everest?"
      },
      {
       "mota": "testua",
       "html": "e) Supondremos que el trabajo que puede realizar un montañero es proporcional a la cantidad de oxígeno que toma. Si a nivel del mar es capaz de superar un desnivel de 100 m en seis minutos, ¿cuánto tiempo necesitará para superar el mismo desnivel a ocho mil metros de altura?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Con la densidad de partículas a nivel del mar <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>P</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>≈</mo><mn>2.69</mn><mo>×</mo><msup><mn>10</mn><mn>25</mn></msup></mrow></math> partículas/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, y la fórmula barométrica del capítulo 6 de este bloque, <math display=\"inline\"><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>n</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>m</mi><mi>g</mi><mi>z</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>, aplicada <strong>componente a componente</strong> (cada gas de la mezcla tiene su propia masa molecular, y por tanto decae con la altura a un ritmo distinto — los gases más pesados, como el <math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math> y el <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math>, se enrarecen más deprisa que el <math display=\"inline\"><msub><mi>H</mi><mn>2</mn></msub></math> o el He):"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Nota de transcripción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los apartados a)-c) requieren tablas numéricas extensas (densidad de partículas, densidad de masa y proporción de cada uno de los 6 gases de la mezcla, a tres altitudes distintas) que no se reproducen aquí línea a línea por economía de espacio; están íntegras en la fuente manuscrita. Los resultados finales, según la hoja de &quot;Emaitzak&quot;:"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "d) El número de veces que hay que respirar para tomar la misma cantidad de oxígeno es inversamente proporcional a la proporción de <math display=\"inline\"><msub><mi>O</mi><mn>2</mn></msub></math> en el aire a esa altitud: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> La Paz</mtext></mrow><mo>:</mo><mn>25</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> veces/min</mtext></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Everest</mtext></mrow><mo>:</mo><mn>50</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> veces/min </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "e) Con el mismo razonamiento aplicado al trabajo realizable, <math display=\"block\"><mrow><mi>t</mi><mo>≈</mo><mn>20</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> minutos </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> para hacer el mismo desnivel de 100 m a la altitud del Everest."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La función de partición de un gas es la siguiente, <math display=\"block\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow><mi>N</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>N</mi></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>N</mi><mi>/</mi><mn>2</mn></mrow></msup><msup><mi>e</mi><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>V</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> donde <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> y <math display=\"inline\"><mi>c</mi></math> son constantes. Comprobar que la expresión de la presión es la ecuación de Van der Waals. Calcular la energía interna."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Tomando logaritmos, <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mi>N</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow><mi>N</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mn>2</mn><mi>π</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>V</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac></mrow></math> La presión, <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msub><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><msub><mi>Z</mi><mi>N</mi></msub><mi>/</mi><mi>∂</mi><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>T</mi></msub></mrow></math>: <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>N</mi><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><msup><mi>V</mi><mn>2</mn></msup><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mrow><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><msup><mi>V</mi><mn>2</mn></msup></mfrac></mrow></math> Reordenando, se obtiene exactamente la ecuación de Van der Waals: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo>+</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><msup><mi>V</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo>−</mo><mi>N</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (el término <math display=\"inline\"><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup><mi>/</mi><msup><mi>V</mi><mn>2</mn></msup></mrow></math> corrige la presión por la atracción entre partículas, y <math display=\"inline\"><mrow><mi>N</mi><mi>b</mi></mrow></math> corrige el volumen disponible por su tamaño finito — a diferencia del gas ideal del capítulo 6, que no tiene en cuenta ninguna de las dos correcciones)."
      },
      {
       "mota": "testua",
       "html": "La energía interna, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"normal\">ln</mi><msub><mi>Z</mi><mi>N</mi></msub><mi>/</mi><mi>∂</mi><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>V</mi></msub></mrow></math> (derivando solo los términos que dependen de <math display=\"inline\"><mi>T</mi></math>): <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>3</mn><mi>N</mi></mrow><mrow><mn>2</mn><mi>T</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mrow><mi>V</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>−</mo><mfrac><mrow><msup><mi>N</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow><mi>V</mi></mfrac></mrow></math> El segundo término, negativo, es la corrección de la energía interna debida a la atracción entre partículas (ausente en el gas ideal, para el que <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> exactamente): su sentido físico es reducir <math display=\"inline\"><mi>U</mi></math>, ya que las partículas están, en promedio, ligeramente ligadas entre sí."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Tema 15",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un sistema formado por <math display=\"inline\"><mi>N</mi></math> partículas, los niveles de energía son <math display=\"inline\"><mrow><msub><mi>E</mi><mi>l</mi></msub><mo>=</mo><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> La degeneración de cada nivel es <math display=\"inline\"><mrow><msub><mi>g</mi><mi>l</mi></msub><mo>=</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "a) Supongamos que <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0.1</mn></mrow></math> eV. Teniendo en cuenta la degeneración de los niveles de energía, ¿cuál debe ser el valor de la temperatura para que los números de partículas de los dos primeros niveles sean iguales?"
      },
      {
       "mota": "testua",
       "html": "b) Cuando el sistema está en equilibrio termodinámico, y siendo <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>T</mi></math> arbitrarios, calcular el valor del cociente <math display=\"inline\"><mrow><msub><mi>n</mi><mi>l</mi></msub><mi>/</mi><msub><mi>n</mi><mn>0</mn></msub></mrow></math>, donde <math display=\"inline\"><msub><mi>n</mi><mi>l</mi></msub></math> es el número de partículas correspondiente al nivel <math display=\"inline\"><mi>l</mi></math>."
      },
      {
       "mota": "testua",
       "html": "c) Calcular la función de partición <math display=\"inline\"><mi>Z</mi></math> (dejarla como una suma sobre <math display=\"inline\"><mi>l</mi></math>)."
      },
      {
       "mota": "testua",
       "html": "d) Para hacer la suma, usar la siguiente expresión: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∼</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> para convertir la suma en una integral. Tras hacer la integral, calcular la energía interna <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la capacidad calorífica <math display=\"inline\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿En qué caso es correcto el resultado obtenido, cuando <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi>α</mi></mrow></math> o cuando <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≫</mo><mi>α</mi></mrow></math>?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Con <math display=\"inline\"><mrow><msub><mi>n</mi><mi>l</mi></msub><mo>=</mo><mi>N</mi><mi>/</mi><mi>z</mi><mspace width=\"0.222em\"></mspace><msub><mi>g</mi><mi>l</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>l</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ε</mi><mi>l</mi></msub><mo>=</mo><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>g</mi><mi>l</mi></msub><mo>=</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mn>1</mn><mo>=</mo><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>n</mi><mn>0</mn></msub></mfrac><mo>=</mo><mfrac><mrow><msub><mi>g</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>1</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow><mrow><msub><mi>g</mi><mn>0</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mn>0</mn></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>α</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow><mn>1</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msup><mi>e</mi><mrow><mn>2</mn><mi>α</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><mn>3</mn></mrow></math> <math display=\"block\"><mrow><mi>T</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>α</mi></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>3</mn></mrow></mfrac><mo>≈</mo><mn>2113</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> (siendo <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0.1</mn></mrow></math> eV <math display=\"inline\"><mrow><mo>=</mo><mn>1.602</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>20</mn></mrow></msup></mrow></math> J)."
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><mfrac><msub><mi>n</mi><mi>l</mi></msub><msub><mi>n</mi><mn>0</mn></msub></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) <math display=\"block\"><mrow><mi>Z</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>g</mi><mi>l</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>ε</mi><mi>l</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) Con el cambio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>l</mi><mn>2</mn></msup><mo>+</mo><mi>l</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>l</mi></mrow></math>, la integral es directa: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>l</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mi>t</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></msup><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><mi>α</mi></mfrac></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><mi>α</mi></mrow></math> (para una partícula), y <math display=\"inline\"><mi>N</mi></math> para partículas indistinguibles, <math display=\"inline\"><mrow><msub><mi>Z</mi><mi>N</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>N</mi><mi>!</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mi>/</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>N</mi></msup></mrow></math>. La energía interna: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mo>=</mo><msub><mi>k</mi><mi>B</mi></msub><msup><mi>T</mi><mn>2</mn></msup><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>T</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>N</mi><mi mathvariant=\"normal\">ln</mi><mi>α</mi><mo>−</mo><mi mathvariant=\"normal\">ln</mi><mi>N</mi><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> y la capacidad calorífica, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>U</mi><mi>/</mi><mi>∂</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "La aproximación de sustituir la suma por una integral vale cuando los niveles, comparados con <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math>, están tan juntos que pueden tratarse como continuos — es decir, cuando <math display=\"inline\"><mrow><mi>α</mi><mo>≪</mo><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow></math> (temperaturas altas). Cuando <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>≪</mo><mi>α</mi></mrow></math>, la suma está dominada por unos pocos términos y la aproximación integral no es válida."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos una molécula diatómica a una temperatura <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, donde <math display=\"inline\"><mi>ν</mi></math> es la frecuencia de vibración. Comprobar que la función de partición es de la forma <math display=\"block\"><mrow><mi>Z</mi><mo>∝</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (no olvidar la rotación). Si en un proceso la entropía se mantiene constante, entonces en ese proceso el factor <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> es constante."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La función de partición se factoriza, <math display=\"inline\"><mrow><mi>Z</mi><mo>=</mo><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>×</mo><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>×</mo><msub><mi>Z</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math> (capítulo 7 de este bloque): <math display=\"block\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>V</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>m</mi><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi></mrow><msup><mi>h</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>∝</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> <math display=\"block\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><mi>T</mi><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mfrac><mo>∝</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (régimen clásico, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <math display=\"block\"><mrow><msub><mi>Z</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mn>2</mn><mi>T</mi></mrow></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></msup></mrow></mfrac><mo>∝</mo><mi>T</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (régimen clásico, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mi>h</mi><mi>ν</mi><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> , el caso de este enunciado) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> Multiplicando las tres: <math display=\"block\"><mrow><mi>Z</mi><mo>∝</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>×</mo><mi>T</mi><mo>×</mo><mi>T</mi><mo>=</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mo>+</mo><mn>1</mn><mo>+</mo><mn>1</mn></mrow></msup><mo>=</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> Con <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>α</mi><mo>+</mo><mn>7</mn><mi>/</mi><mn>2</mn><msub><mi>k</mi><mi>B</mi></msub><mi>T</mi><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (de <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>U</mi><mi>/</mi><mi>T</mi><mo>+</mo><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>Z</mi><mi>N</mi></msub></mrow></math>), si en un proceso <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo></mrow></math> es cte, y <math display=\"inline\"><mi>T</mi></math> queda determinado (a través de <math display=\"inline\"><mi>U</mi></math>), el término <math display=\"inline\"><mrow><msub><mi>k</mi><mi>B</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> debe permanecer constante, es decir, <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>7</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo></mrow></math> cte — la relación adiabática de un gas diatómico (con 7 &quot;grados de libertad&quot; efectivos: 3 traslación + 2 rotación + 2 vibración, en el régimen <math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub></mrow></math>), análoga a la relación <math display=\"inline\"><mrow><mi>V</mi><msup><mi>T</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo></mrow></math> cte del gas monoatómico (capítulo 6)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la molécula de oxígeno, la distancia de equilibrio entre los dos átomos es de <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mn>1.2</mn></mrow></math> Å."
      },
      {
       "mota": "testua",
       "html": "a) Calcular la temperatura de rotación <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">bir</mtext></msub></math> de esa molécula."
      },
      {
       "mota": "testua",
       "html": "b) La temperatura de Einstein <math display=\"inline\"><msub><mi>θ</mi><mtext mathvariant=\"normal\">bib</mtext></msub></math> del oxígeno molecular es de <math display=\"inline\"><mn>2200</mn></math> K. A temperatura ambiente, calcular la contribución relativa de las vibraciones a la capacidad calorífica."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Para dos átomos iguales a una distancia <math display=\"inline\"><mi>d</mi></math>, el momento de inercia respecto al centro de masas es <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>m</mi><msup><mi>d</mi><mn>2</mn></msup></mrow></math> (cada átomo a una distancia <math display=\"inline\"><mrow><mi>d</mi><mi>/</mi><mn>2</mn></mrow></math> del centro): <math display=\"block\"><mrow><msub><mi>θ</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>I</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mi>m</mi><msup><mi>d</mi><mn>2</mn></msup><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><mo>≈</mo><mn>2.1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) La capacidad calorífica total es la suma de las tres contribuciones, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>+</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>+</mo><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">vib</mtext></msubsup></mrow></math>. Las dos primeras están en su régimen clásico a temperatura ambiente (<math display=\"inline\"><mrow><mi>T</mi><mo>≫</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">rot</mtext></msub></mrow></math>): <math display=\"block\"><mrow><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">tr</mtext></msubsup><mo>=</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">rot</mtext></msubsup><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>+</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msubsup><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> Para la vibración, con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi></mrow></math>: <math display=\"block\"><mrow><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">vib </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>=</mo><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math> A temperatura ambiente (<math display=\"inline\"><mrow><mi>T</mi><mo>≈</mo><mn>330</mn></mrow></math> K en este cálculo), <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>θ</mi><mtext mathvariant=\"normal\">vib</mtext></msub><mi>/</mi><mi>T</mi><mo>=</mo><mn>2200</mn><mi>/</mi><mn>330</mn><mo>≈</mo><mn>6.7</mn></mrow></math> (nada pequeño, así que la vibración <strong>no</strong> está en su régimen clásico): <math display=\"block\"><mrow><mfrac><msubsup><mi>C</mi><mi>v</mi><mtext mathvariant=\"normal\">vib</mtext></msubsup><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr</mtext><mo>+</mo><mtext mathvariant=\"normal\">rot</mtext></mrow></msubsup></mfrac><mo>=</mo><mfrac><mrow><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mi>/</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mn>5</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mn>5</mn></mfrac><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo>≈</mo><mn>0.014</mn></mrow></math> es decir, la vibración solo contribuye con <math display=\"inline\"><mrow><mn>1.4</mn><mi>%</mi></mrow></math> a la capacidad calorífica total: está casi congelada. Por tanto, <math display=\"block\"><mrow><msub><mi>C</mi><mi>v</mi></msub><mo>=</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">tr </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>+</mo><msubsup><mi>C</mi><mi>v</mi><mrow><mtext mathvariant=\"normal\">rot </mtext><mspace width=\"0.333em\"></mspace></mrow></msubsup><mo>=</mo><mfrac><mn>5</mn><mn>2</mn></mfrac><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math> (la contribución vibracional es despreciable en la práctica) — el mismo resultado ya usado como ejemplo en el capítulo 7 de este bloque."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Tema 16",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de transcripción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los problemas 1, 2 y 5 de este boletín piden derivar exactamente lo ya establecido en el capítulo 3 de este bloque (distribuciones de Bose-Einstein y Fermi-Dirac por Lagrange, y la energía media del gas de electrones, <math display=\"inline\"><mrow><mover><mi>ε</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>E</mi><mi>F</mi></msub></mrow></math>) — se enuncian por completitud, sin repetir la derivación. Los problemas 4, 6 y 7 tienen los mismos datos numéricos que ya aparecen resueltos en <code>cuaderno fismo/</code> (catalogados como problemas ④, ⑥ y ⑦ en <code>CATALOGO.md</code>); se resuelven aquí de nuevo, de forma independiente, como verificación cruzada."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[cubierto por el capítulo 3: distribución de Bose-Einstein]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema contiene <math display=\"inline\"><mi>N</mi></math> bosones indistinguibles. Hay <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> estados de energía <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math>; las formas distintas de colocar <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> partículas en esos estados son <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Maximizar <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><msub><mo>∏</mo><mi>i</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>+</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, bajo las condiciones <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><msub><mi>ε</mi><mi>i</mi></msub><mo>=</mo><mi>U</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mo>∑</mo><mi>i</mi></msub><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><mi>N</mi></mrow></math>. Comprobar que <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><msub><mi>g</mi><mi>i</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[cubierto por el capítulo 3: distribución de Fermi-Dirac]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema contiene <math display=\"inline\"><mi>N</mi></math> fermiones indistinguibles. Hay <math display=\"inline\"><msub><mi>g</mi><mi>i</mi></msub></math> estados de energía <math display=\"inline\"><msub><mi>ε</mi><mi>i</mi></msub></math>; las formas distintas de colocar <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> partículas en esos estados son <math display=\"inline\"><mrow><msub><mi>g</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>n</mi><mrow><mi>i</mi><mi>!</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>g</mi><mi>i</mi></msub><mo>−</mo><msub><mi>n</mi><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>!</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Maximizar bajo condiciones similares. Comprobar que <math display=\"inline\"><mrow><msub><mi>n</mi><mi>i</mi></msub><mo>=</mo><msub><mi>g</mi><mi>i</mi></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo>+</mo><mi>β</mi><msub><mi>ε</mi><mi>i</mi></msub></mrow></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se puede admitir que los electrones de conducción de un metal de sodio (valencia <math display=\"inline\"><mrow><mi>+</mi><mn>1</mn></mrow></math>) de volumen <math display=\"inline\"><mi>V</mi></math> forman un gas."
      },
      {
       "mota": "testua",
       "html": "a) Describir mediante un esquema la probabilidad de ocupación de los niveles de energía de los electrones de conducción a valores de <math display=\"inline\"><mi>T</mi></math> muy pequeños. Explicar brevemente las características principales."
      },
      {
       "mota": "testua",
       "html": "b) Cuando <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K, obtener la expresión general de la energía de Fermi <math display=\"inline\"><msub><mi>E</mi><mi>F</mi></msub></math> (en función de <math display=\"inline\"><mrow><mi>m</mi><mo>,</mo><mi>V</mi><mo>,</mo><mi>N</mi></mrow></math>). En el caso del sodio, ¿cuál es el valor de la energía de Fermi? En este caso, ¿cuál es el valor de la temperatura para el que la energía térmica es comparable a la energía de Fermi?"
      },
      {
       "mota": "testua",
       "html": "c) Cuando <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> K, demostrar que la media de la energía de los electrones cumple la siguiente relación: <math display=\"inline\"><mrow><mover><mi>ε</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Datos: <math display=\"inline\"><mrow><msub><mi>ρ</mi><mrow><mtext mathvariant=\"normal\">Na </mtext><mspace width=\"0.333em\"></mspace></mrow></msub><mo>=</mo><mn>968</mn></mrow></math> kg/m<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>, <math display=\"inline\"><mrow><msub><mi>M</mi><mtext mathvariant=\"normal\">Na</mtext></msub><mo>=</mo><mn>23</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1.66</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>27</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><msub><mi>m</mi><mi>e</mi></msub><mo>=</mo><mn>9.1</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>31</mn></mrow></msup></mrow></math> kg, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ε</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ε</mi><mo>=</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>V</mi></mrow><msup><mi>h</mi><mn>3</mn></msup></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><msqrt><mi>ε</mi></msqrt><mi>d</mi><mi>ε</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Este problema es el mismo desarrollo del &quot;gas de electrones libres&quot; ya presentado en el capítulo 3 (densidad de estados, energía de Fermi <math display=\"inline\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>=</mo><msup><mi>h</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>N</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>π</mi><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>, energía media <math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>E</mi><mi>F</mi></msub></mrow></math>). Aplicado numéricamente al sodio (un electrón de conducción por átomo, densidad <math display=\"inline\"><msub><mi>ρ</mi><mtext mathvariant=\"normal\">Na</mtext></msub></math>), da el mismo resultado ya citado allí, <math display=\"inline\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>≈</mo><mn>3.1</mn></mrow></math> eV, con temperatura de Fermi asociada <math display=\"inline\"><mrow><msub><mi>T</mi><mi>F</mi></msub><mo>=</mo><msub><mi>E</mi><mi>F</mi></msub><mi>/</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>, del orden de <math display=\"inline\"><mrow><mn>3.7</mn><mo>×</mo><msup><mn>10</mn><mn>4</mn></msup></mrow></math> K — muy por encima de la temperatura ambiente; por eso el gas de electrones de un metal se comporta de forma tan distinta a un gas clásico."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un sistema tiene 3 niveles de energía y 2 partículas. Indicar cuáles son los microestados del sistema en los tres casos siguientes:"
      },
      {
       "mota": "testua",
       "html": "a) Cuando las partículas son distinguibles."
      },
      {
       "mota": "testua",
       "html": "b) Cuando las partículas son bosones indistinguibles."
      },
      {
       "mota": "testua",
       "html": "c) Cuando las partículas son fermiones indistinguibles."
      },
      {
       "mota": "testua",
       "html": "d) Definiendo este parámetro, <math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mfrac><mrow><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>g</mi><mi>o</mi><mi>e</mi><mi>r</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>b</mi><mi>e</mi><mi>r</mi><mi>e</mi><mi>a</mi><mi>n</mi><mspace width=\"0.222em\"></mspace><mn>2</mn><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>a</mi><mi>r</mi><mi>t</mi><mi>i</mi><mi>k</mi><mi>u</mi><mi>l</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>e</mi><mi>g</mi><mi>o</mi><mi>t</mi><mi>e</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>r</mi><mi>o</mi><mi>b</mi><mi>a</mi><mi>b</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>a</mi><mi>r</mi><mi>t</mi><mi>i</mi><mi>k</mi><mi>u</mi><mi>l</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>e</mi><mi>g</mi><mi>o</mi><mi>e</mi><mi>r</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>d</mi><mi>e</mi><mi>s</mi><mi>b</mi><mi>e</mi><mi>r</mi><mi>d</mi><mi>i</mi><mi>n</mi><mi>e</mi><mi>t</mi><mi>a</mi><mi>n</mi><mspace width=\"0.222em\"></mspace><mi>e</mi><mi>g</mi><mi>o</mi><mi>t</mi><mi>e</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mi>p</mi><mi>r</mi><mi>o</mi><mi>b</mi><mi>a</mi><mi>b</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>t</mi><mi>a</mi><mi>t</mi><mi>e</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace></mrow></mfrac></mrow></math> ¿Cuál es el valor del parámetro <math display=\"inline\"><mi>α</mi></math> en los tres casos anteriores?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Partículas distinguibles (A, B): cada una puede estar en cualquiera de los 3 niveles, independientemente de la otra; <math display=\"inline\"><mrow><mn>3</mn><mo>×</mo><mn>3</mn><mo>=</mo><mn>9</mn></mrow></math> microestados: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>9</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Bosones indistinguibles: los microestados son las combinaciones con repetición de 2 partículas en 3 niveles, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mrow><mn>3</mn><mo>+</mo><mn>2</mn><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>4</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>6</mn></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "c) Fermiones indistinguibles (principio de exclusión: como máximo una partícula por nivel): <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>3</mn></mrow></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Ω</mi><mo>=</mo><mn>3</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "d) Contando, en cada caso, cuántos de los microestados anteriores tienen ambas partículas en el mismo nivel, y cuántos en niveles distintos:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Distinguibles: 3 microestados con ambas en el mismo nivel (AA en cada uno de los tres niveles <math display=\"inline\"><mi>×</mi></math> orden único <math display=\"inline\"><mrow><mo>=</mo><mn>3</mn></mrow></math>, de 9), y 6 en niveles distintos <math display=\"inline\"><mrow><mo>→</mo><mi>α</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>/</mi><mn>9</mn></mrow><mrow><mn>6</mn><mi>/</mi><mn>9</mn></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>.",
        "Bosones: 3 microestados con ambas en el mismo nivel, y 3 en niveles distintos <math display=\"inline\"><mrow><mo>→</mo><mi>α</mi><mo>=</mo><mfrac><mrow><mn>3</mn><mi>/</mi><mn>6</mn></mrow><mrow><mn>3</mn><mi>/</mi><mn>6</mn></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math>.",
        "Fermiones: 0 microestados con ambas en el mismo nivel (prohibido), y 3 en niveles distintos <math display=\"inline\"><mrow><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Los fermiones se &quot;evitan&quot; entre sí (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn></mrow></math>, exclusión de Pauli), y los bosones se &quot;prefieren&quot; (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>, mayor que el <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> del caso distinguible) — una manera muy directa de visualizar la diferencia cualitativa entre las tres estadísticas."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "[cubierto por el capítulo 3: energía media del gas de Fermi]",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un gas de volumen <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi>N</mi></math> electrones está a la temperatura <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. Calcular la energía media de los electrones, en función de la energía de Fermi."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando se agota el combustible de estrellas como el Sol, estas se enfrían, colapsan y se convierten en enanas blancas. La presión gravitatoria y la presión del gas de electrones se igualan."
      },
      {
       "mota": "testua",
       "html": "a) Supongamos que la masa y el radio de una enana blanca son <math display=\"inline\"><mi>M</mi></math> y <math display=\"inline\"><mi>R</mi></math>. Casi toda la masa es masa de protones. Como la carga eléctrica de la estrella es nula, ¿cuántos electrones hay en esa estrella? ¿Cuál es la densidad electrónica del gas de electrones?"
      },
      {
       "mota": "testua",
       "html": "b) Se admitirá que la temperatura de la estrella es <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. Comprobar que la energía cinética del gas de electrones es la siguiente: <math display=\"block\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>ħ</mi><mn>2</mn></msup></mrow><mrow><mn>10</mn><msub><mi>m</mi><mi>e</mi></msub><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>9</mn><mi>π</mi></mrow><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>M</mi><msub><mi>m</mi><mi>p</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>5</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) La energía potencial gravitatoria es <math display=\"block\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>G</mi><msup><mi>M</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>5</mn><mi>R</mi></mrow></mfrac></mrow></math> y la energía total es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>E</mi><mi>e</mi></msub><mo>+</mo><msub><mi>E</mi><mi>p</mi></msub></mrow></math>. Minimizando esa energía, comprobar que el radio de equilibrio de la estrella es: <math display=\"block\"><mrow><mi>R</mi><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mi>G</mi><msub><mi>m</mi><mi>e</mi></msub></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>81</mn><msup><mi>π</mi><mn>2</mn></msup></mrow><mrow><mn>16</mn><msubsup><mi>m</mi><mi>p</mi><mn>5</mn></msubsup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mi>M</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "d) Tras convertirse en enana blanca, calcular el radio que tendrá el Sol. Comparar ese valor con el valor actual. Datos: diámetro actual del Sol <math display=\"inline\"><mrow><mn>2</mn><mi>R</mi><mo>=</mo><mn>1.4</mn><mo>×</mo><msup><mn>10</mn><mn>9</mn></msup></mrow></math> m; masa del Sol <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2.0</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> kg."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Como cada protón aporta una carga <math display=\"inline\"><mrow><mi>+</mi><mi>e</mi></mrow></math> y el electrón asociado <math display=\"inline\"><mrow><mi>−</mi><mi>e</mi></mrow></math>, el número de electrones es igual al de protones, <math display=\"inline\"><mrow><msub><mi>N</mi><mi>e</mi></msub><mo>=</mo><mi>M</mi><mi>/</mi><msub><mi>m</mi><mi>p</mi></msub></mrow></math>, y la densidad electrónica <math display=\"inline\"><mrow><msub><mi>n</mi><mi>e</mi></msub><mo>=</mo><msub><mi>N</mi><mi>e</mi></msub><mi>/</mi><mi>V</mi><mo>=</mo><mn>3</mn><mi>M</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><msub><mi>m</mi><mi>p</mi></msub><msup><mi>R</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "b) Usando <math display=\"inline\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>=</mo><msup><mi>ħ</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msub><mi>m</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>π</mi><mn>2</mn></msup><msub><mi>n</mi><mi>e</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>=</mo><mn>3</mn><mi>/</mi><mn>5</mn><msub><mi>N</mi><mi>e</mi></msub><msub><mi>E</mi><mi>F</mi></msub></mrow></math> (energía media del gas de electrones a <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, problema 3), sustituyendo <math display=\"inline\"><msub><mi>n</mi><mi>e</mi></msub></math> y <math display=\"inline\"><msub><mi>N</mi><mi>e</mi></msub></math> del apartado (a) y simplificando las potencias de <math display=\"inline\"><mi>π</mi></math>, se obtiene exactamente la expresión dada."
      },
      {
       "mota": "testua",
       "html": "c) Minimizando <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>E</mi><mrow><mi>e</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>+</mo><msub><mi>E</mi><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math> respecto de <math display=\"inline\"><mi>R</mi></math> (<math display=\"inline\"><mrow><mi>d</mi><mi>E</mi><mi>/</mi><mi>d</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, ya que <math display=\"inline\"><mrow><msub><mi>E</mi><mi>e</mi></msub><mo>∝</mo><msup><mi>R</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>E</mi><mi>p</mi></msub><mo>∝</mo><msup><mi>R</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> compiten con signos opuestos), se despeja <math display=\"inline\"><mi>R</mi></math> y se obtiene la fórmula del radio de equilibrio de la enana blanca — resultado de equilibrar la presión de degeneración electrónica (que se opone al colapso) con la gravedad."
      },
      {
       "mota": "testua",
       "html": "d) Sustituyendo <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>2.0</mn><mo>×</mo><msup><mn>10</mn><mn>30</mn></msup></mrow></math> kg: <math display=\"block\"><mrow><mi>R</mi><mo>≈</mo><mn>2.3</mn><mo>×</mo><msup><mn>10</mn><mn>7</mn></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> m </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>≈</mo><mn>0.033</mn><msub><mi>R</mi><mrow><mtext mathvariant=\"normal\">Sol,actual </mtext><mspace width=\"0.333em\"></mspace></mrow></msub></mrow></math> El Sol, convertido en enana blanca, tendría un radio unas 30 veces menor que el actual (del orden del radio de la Tierra)."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El helio líquido <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He es un isótopo del helio. Su espín total es <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, por lo que es un fermión."
      },
      {
       "mota": "testua",
       "html": "a) Tomando el sistema como un gas de fermiones, calcular la energía de Fermi <math display=\"inline\"><msub><mi>E</mi><mi>F</mi></msub></math>. Tener en cuenta que la densidad del líquido es <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0.081</mn></mrow></math> g/cm<math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>."
      },
      {
       "mota": "testua",
       "html": "b) ¿Cuál es <math display=\"inline\"><msub><mi>T</mi><mi>F</mi></msub></math>, es decir, la temperatura correspondiente a la energía de Fermi? A esa temperatura, los efectos cuánticos empiezan a ser importantes."
      },
      {
       "mota": "testua",
       "html": "c) Calcular la capacidad calorífica a temperaturas <math display=\"inline\"><mrow><mi>T</mi><mo>≪</mo><msub><mi>T</mi><mi>F</mi></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "a) Con <math display=\"inline\"><mi>n</mi></math> la densidad de átomos de <math display=\"inline\"><msup><mrow></mrow><mn>3</mn></msup></math>He (a partir de <math display=\"inline\"><mi>ρ</mi></math> y la masa atómica): <math display=\"block\"><mrow><msub><mi>E</mi><mi>F</mi></msub><mo>=</mo><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><msup><mi>n</mi><mrow><mn>2</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>≈</mo><mn>6.8</mn><mo>×</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>23</mn></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> J </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mn>0.42</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> meV </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "b) <math display=\"block\"><mrow><msub><mi>T</mi><mi>F</mi></msub><mo>=</mo><mfrac><msub><mi>E</mi><mi>F</mi></msub><msub><mi>k</mi><mi>B</mi></msub></mfrac><mo>≈</mo><mn>4.9</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> K </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "c) A temperaturas muy por debajo de <math display=\"inline\"><msub><mi>T</mi><mi>F</mi></msub></math>, solo los fermiones cercanos al nivel de Fermi pueden excitarse térmicamente (fracción del orden de <math display=\"inline\"><mrow><mi>T</mi><mi>/</mi><msub><mi>T</mi><mi>F</mi></msub></mrow></math> del total, como ya se discutió cualitativamente en el capítulo 3 para el gas de electrones metálico); esto da un calor específico lineal en <math display=\"inline\"><mi>T</mi></math>, <math display=\"block\"><mrow><msub><mi>c</mi><mi>v</mi></msub><mo>≈</mo><mfrac><mrow><mi>N</mi><msubsup><mi>k</mi><mi>B</mi><mn>2</mn></msubsup></mrow><msub><mi>E</mi><mi>F</mi></msub></mfrac><mi>T</mi></mrow></math> — muy distinto del calor específico constante (<math display=\"inline\"><mrow><mn>3</mn><mi>/</mi><mn>2</mn><mi>N</mi><msub><mi>k</mi><mi>B</mi></msub></mrow></math>) que predeciría un gas clásico, y otra manifestación de la misma física de degeneración cuántica que domina el gas de electrones de un metal."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "Física estadística: formalismo abstracto de la colectividad canónica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las distribuciones principales (Boltzmann, Fermi-Dirac, Bose-Einstein), el gas de electrones libres, el calor específico del sólido de Einstein, el gas ideal clásico (Maxwell-Boltzmann, Sackur-Tetrode, paradoja de Gibbs), el rotor rígido/molécula diatómica y la condensación de Bose-Einstein ya están cubiertos, cada uno con sus exámenes/ejercicios oficiales (capítulo 8). Falta todavía: el tratamiento formal abstracto de las colectividades canónica y gran canónica (la función de partición del sistema completo <math display=\"inline\"><mi>Z</mi></math> como suma sobre todos los estados microscópicos, distinguida de la <math display=\"inline\"><mi>z</mi></math> de una sola partícula; las fluctuaciones; el potencial químico en general)."
      }
     ]
    }
   ]
  }
 ]
};
