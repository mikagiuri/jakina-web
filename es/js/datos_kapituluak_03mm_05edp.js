/* JAKINA · kapitulua «B6.7 - Deribatu partzialetako ekuazioak (9. gaia)» (03mm_05edp), desde edicion2/kapituluak/03mm_05edp/03mm_05edp.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_05edp"] = {
 "gakoa": "03mm_05edp",
 "titulua": "JAKINA - B6 - Métodos matemáticos - 7/9",
 "azala": "B6.7 - Ecuaciones en derivadas parciales (tema 9)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/03mm_05edp/03mm_05edp.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "IMG_2026_07_30_02_32_34S_CNmet2_p0_y_p1.jpg",
   "xehetasuna": "CNmet2, página 0 (fragmento 1, etiqueta canónica CN MET2 p0): clasificación de las EDP y operador de Laplace; página inicial sin rótulo, edición crítica literal",
   "hizkuntza": "en/es"
  },
  {
   "mota": "iturria",
   "proiektua": "AAA_TEXES_metodo_matematikoak",
   "xehetasuna": "Apuntes de Métodos Matemáticos del usuario (2014-2016, 100 % propios): espacios de funciones, series de Fourier (ejercicios resueltos), función de Green. Bancos de ejercicios catalogados: METODO MATEMATIKOAK/ (31 exámenes), met mat/ (375 fotografías), AYO (apuntes EU), metodos_estabilidad (complemento del cap. 8) — CATALOGO_B6_METODOS.md",
   "hizkuntza": "eu"
  },
  {
   "mota": "iturria",
   "proiektua": "METODO MATEMATIKOAK",
   "xehetasuna": "Paquete completo de la asignatura Métodos Matemáticos (UPV/EHU 2010-2014): programa oficial, hojas de ejercicios de cada tema, colecciones de exámenes y el examen completo del 24-05-2013",
   "hizkuntza": "eu"
  },
  {
   "mota": "iturria",
   "proiektua": "CG-06 (carpeta_grande)",
   "xehetasuna": "Cuaderno de Métodos Matemáticos del usuario (233 fotografías): el tema 2 (EDP) es la columna vertebral de la teoría de EDP — introducción, clasificación, condiciones de contorno, separación de variables y resoluciones completas de exámenes",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Ecuaciones en derivadas parciales",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La columna vertebral de este capítulo es el cuaderno de <strong>Métodos Matemáticos</strong> del propio usuario (CG-06, &quot;Tema 2: Ecuaciones en derivadas parciales&quot;): su introducción, la clasificación, la tabla de condiciones de contorno y las resoluciones completas de problemas de examen se reelaboran y desarrollan aquí. Con ello se cierra una de las lagunas del módulo (la teoría de EDP); la base de ejercicios son las secciones de EDP de la colección siguiente."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 1,
   "izenburua": "¿Qué cambia al pasar a las derivadas parciales?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En una EDO la incógnita era una función de una sola variable; en una EDP, de varias: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>... La introducción del cuaderno resume lo esencial en dos ideas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Si una variable no está derivada, la EDP es una EDO</strong>, pero las constantes de integración pasan a ser <strong>funciones arbitrarias</strong> de la otra variable: la ecuación <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (factor integrante <math display=\"inline\"><msup><mi>x</mi><mn>3</mn></msup></math>) da <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msup><mi>x</mi><mn>3</mn></msup></mrow></math>, con <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cualquiera.",
      "<strong>Cada condición debe determinar una función entera.</strong> Una EDO necesitaba un número por cada constante; una EDP necesita los valores sobre una curva entera. El cuaderno lo demuestra con un contraejemplo: para la ecuación <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> la condición <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> no basta para fijar la solución (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> y muchas otras son válidas); el valor en un único punto, mucho menos."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Del cuaderno: el zoo de las EDP de la física",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Panorámica de las hojas <code>met mat</code> del usuario (hoja &quot;DPE&quot;): las principales EDP de la física, todas ellas variantes de cuatro mismos modelos de segundo orden — la <strong>ecuación de ondas</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math> (hiperbólica), la <strong>ecuación de difusión/calor</strong> <math display=\"inline\"><mrow><mi>k</mi><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math> (parabólica), la de <strong>Laplace</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> y la de <strong>Poisson</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (elípticas), y la de <strong>Schrödinger</strong> <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>ħ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>+</mo><mi>V</mi><mi>u</mi><mo>=</mo><mi>…</mi></mrow></math> (de tipo difusión, con tiempo imaginario). La misma hoja distingue las <strong>condiciones iniciales</strong> (C.I.: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en el tiempo) de las <strong>condiciones de contorno</strong> (C.C.: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en el espacio) — y las cuatro preguntas para clasificar los problemas: el orden, el número de variables independientes, si los coeficientes son constantes y si es lineal."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "Clasificación de las EDP de segundo orden",
   "blokeak": [
    {
     "mota": "testua",
     "html": "EDP cuasilineal general de segundo orden en dos variables:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">beheragoko ordenak</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las <strong>curvas características</strong> —las curvas que transportan la información— vienen dadas por esta ecuación (fórmula del cuaderno):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>B</mi><mo>±</mo><msqrt><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></msqrt></mrow><mrow><mn>2</mn><mi>A</mi></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y el discriminante bajo la raíz clasifica la ecuación:"
    },
    {
     "mota": "taula-kutxa",
     "oina": "Clasificación. Si los coeficientes son variables, la misma ecuación puede ser de tipos distintos según la región (observación del cuaderno): ese es el sentido de los ejercicios de &quot;clasificar&quot; de la colección.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<div class=\"j-taula\"><table><thead><tr><th><strong>Tipo</strong></th><th><strong>Discriminante</strong></th><th><strong>Características</strong></th><th><strong>Modelo</strong></th></tr></thead><tbody><tr><td>Hiperbólico</td><td><math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>&gt;</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math></td><td>dos familias reales</td><td>ecuación de ondas <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math></td></tr><tr><td>Parabólico</td><td><math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math></td><td>una sola familia</td><td>ecuación del calor (de tipo <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math>)</td></tr><tr><td>Elíptico</td><td><math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>&lt;</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math></td><td>no hay ninguna real</td><td>Laplace <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math></td></tr></tbody></table></div>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos del cuaderno: en la ecuación <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>C</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, <strong>elíptica</strong>. En la ecuación de ondas <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <strong>hiperbólica</strong>."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "Condiciones de contorno: qué exigir a cada una",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La tabla del cuaderno, que vale palabra por palabra: para que el problema esté bien planteado, el tipo de ecuación dicta qué tipo de condición y qué tipo de frontera hacen falta:"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Dirichlet</strong>: el valor de <math display=\"inline\"><mi>u</mi></math> en el contorno (p. ej. temperatura fija en la superficie).",
        "<strong>Neumann</strong>: el valor de <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>n</mi></mrow></math> en el contorno (p. ej. el flujo; si está aislado, nulo).",
        "<strong>Cauchy</strong>: ambas a la vez (<math display=\"inline\"><mi>u</mi></math> Y <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>n</mi></mrow></math>) — análogo de las condiciones iniciales."
       ]
      }
     ]
    },
    {
     "mota": "taula-kutxa",
     "oina": "Tabla del cuaderno: problemas bien planteados. La ecuación de ondas (abierta en <math display=\"inline\"><mi>t</mi></math>) necesita al principio la posición Y la velocidad; la ecuación del calor, solo la temperatura inicial; la de Laplace, los valores en todo el contorno cerrado.",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<div class=\"j-taula\"><table><thead><tr><th><strong>Tipo de ecuación</strong></th></tr></thead><tbody><tr><td><strong>Frontera</strong></td></tr><tr><td><strong>Condición</strong></td></tr><tr><td>Hiperbólica</td></tr><tr><td>abierta</td></tr><tr><td>Cauchy</td></tr><tr><td>Parabólica</td></tr><tr><td>abierta</td></tr><tr><td>Dirichlet o Neumann</td></tr><tr><td>Elíptica</td></tr><tr><td>cerrada</td></tr><tr><td>Dirichlet o Neumann</td></tr></tbody></table></div>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El cuaderno añade una observación rigurosa: si las condiciones de contorno cortan una curva característica <strong>más de una vez</strong>, cuidado — estamos dando la misma información dos veces, y debe ser compatible (el ejercicio 3 de características de la colección, con las condiciones dadas a lo largo de líneas propias, es un ejemplo)."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "Método de las características: d&#x27;Alembert",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para la ecuación de ondas <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, las características son las rectas <math display=\"inline\"><mrow><mi>x</mi><mo>±</mo><mi>c</mi><mi>t</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow></mrow></math>, y al pasar a esas variables la solución general es la suma de dos ondas viajeras"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "— una hacia la derecha y otra hacia la izquierda, ambas con velocidad <math display=\"inline\"><mi>c</mi></math>. Con las condiciones iniciales (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) sale la fórmula de d&#x27;Alembert: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> — un pulso se divide en dos mitades, en sentidos opuestos (dibujarlo es el ejercicio 1 de características de la colección)."
    },
    {
     "mota": "irudia",
     "oina": "Las características en el plano <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: la información del pulso inicial se propaga solo a lo largo de las rectas <math display=\"inline\"><mrow><mi>x</mi><mo>±</mo><mi>c</mi><mi>t</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow></mrow></math>. En el instante <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> hay dos copias (de amplitud mitad), en las regiones delimitadas por las características — la imagen exacta de la causalidad.",
     "src": "../media/irudiak/c7234f86ec84be72.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "En ecuaciones más generales el camino es el mismo: calcular las características (fórmula <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math> de arriba), tomarlas como nuevas coordenadas y reducir la ecuación a su forma canónica — el ejercicio 3 de la colección (con solución general <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>4</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>5</mn></mrow></msup><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) es un ejemplo guiado de todo el proceso."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Separación de variables: la receta completa",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El método principal en problemas lineales, el que el cuaderno emplea una y otra vez. Pasos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Homogeneizar las condiciones</strong> si hace falta: cambio <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>g</mi></mrow></math> (recuadro &quot;Del cuaderno&quot; de la colección).",
      "<strong>Separar</strong>: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (o <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, según la geometría); dividir la ecuación en dos miembros y extraer la constante de separación: <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>.",
      "<strong>La parte espacial es un problema de S-L</strong>: las condiciones de contorno homogéneas discretizan los valores propios (<math display=\"inline\"><msub><mi>λ</mi><mi>n</mi></msub></math>) y dan funciones propias ortogonales (<math display=\"inline\"><mi mathvariant=\"normal\">sin</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math>, <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>P</mi><mi>l</mi></msub></math>... — la geometría elige la familia).",
      "<strong>Superponer</strong>: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Coeficientes por ortogonalidad</strong>: la condición que queda (la inicial, o la de contorno no homogénea) se desarrolla en la base de funciones propias, con el peso adecuado."
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Modelo canónico: varilla con extremos a 0 grados, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La separación da <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>λ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>c</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> — serie de senos de Fourier, cada modo extinguiéndose a su ritmo (las altas frecuencias más rápido: el calor suaviza). En la ecuación de ondas lo mismo, pero <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi></mrow></math>: los modos no se extinguen, oscilan."
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Los tres primeros modos normales de una cuerda/varilla, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: la separación escribe cualquier solución como superposición de estos modos. En la ecuación del calor cada modo se extingue con el factor <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>λ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup></math>; en la de ondas, oscila con frecuencia <math display=\"inline\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><mi>c</mi><msub><mi>λ</mi><mi>n</mi></msub></mrow></math>.",
     "src": "../media/irudiak/bdc460fa8bc282b2.svg",
     "zabalera": 313
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Ejemplo resuelto (del cuaderno): cilindro, fuente y condición de Robin",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Problema de examen de septiembre de 2003 de la colección, resuelto íntegramente en el cuaderno: cilindro infinito de radio <math display=\"inline\"><mi>R</mi></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>∇</mi><mn>2</mn></msup><mi>T</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>T</mi><mo>+</mo><mi>α</mi><mfrac><mrow><mi>∂</mi><mi>T</mi></mrow><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "(fuente homogénea <math display=\"inline\"><msup><mi>b</mi><mn>2</mn></msup></math> y condición de emisión de tipo <strong>Robin</strong> — combinación de Dirichlet y Neumann)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El camino del cuaderno:"
      },
      {
       "mota": "testua",
       "html": "<strong>1. Separar la parte homogénea.</strong> Con <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>Z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y simetría axial <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>∂</mi><mi>r</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><msub><mi>∂</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mfrac><msup><mi>Z</mi><mo>′</mo></msup><mrow><msup><mi>a</mi><mn>2</mn></msup><mi>Z</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>r</mi><mi mathvariant=\"script\">ℛ</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><msup><mi mathvariant=\"script\">ℛ</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>m</mi><mn>2</mn></msup><mtext mathvariant=\"normal\">  </mtext><mo>⇒</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>Z</mi><mo>′</mo></msup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>m</mi><mn>2</mn></msup><mi>Z</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msup><mi>r</mi><mn>2</mn></msup><msup><mi mathvariant=\"script\">ℛ</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi mathvariant=\"script\">ℛ</mi><mo>′</mo></msup><mo>+</mo><msup><mi>m</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi mathvariant=\"script\">ℛ</mi><mo>=</mo><mn>0</mn></mrow></math> — la segunda es la ecuación de Bessel: <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℛ</mi><mo>=</mo><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (y <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math>, descartada porque explota en el centro — en el cuaderno &quot;no aparecerá, para no explotar&quot;)."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Valores propios a partir de la condición de Robin.</strong> Imponiendo la condición en <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></math>, usando <math display=\"inline\"><mrow><msubsup><mi>J</mi><mn>0</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><msub><mi>J</mi><mn>1</mn></msub></mrow></math> (el cuaderno lo saca de la <math display=\"inline\"><mrow><msubsup><mi>J</mi><mi>n</mi><mo>′</mo></msubsup><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>J</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>−</mo><msub><mi>J</mi><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> general): <math display=\"block\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>α</mi><mi>m</mi><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ecuación trascendente: <math display=\"inline\"><msub><mi>m</mi><mi>n</mi></msub></math> familia discreta de valores propios (compárese con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><msqrt><mi>λ</mi></msqrt><mo>=</mo><mn>2</mn><msqrt><mi>λ</mi></msqrt></mrow></math> de la hoja de S-L: misma estructura)."
      },
      {
       "mota": "testua",
       "html": "<strong>3. Desarrollar la fuente en serie de funciones propias.</strong> <math display=\"inline\"><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>=</mo><mo>∑</mo><msub><mi>C</mi><mi>n</mi></msub><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, por ortogonalidad (peso <math display=\"inline\"><mi>r</mi></math>) y con el cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi></mrow></math>, usando <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>x</mi><msub><mi>J</mi><mn>0</mn></msub></mrow></math>: <math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><msup><mi>b</mi><mn>2</mn></msup><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi><mi>d</mi><mi>r</mi></mrow><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>R</mi></msubsup><msubsup><mi>J</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>r</mi><mi>d</mi><mi>r</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>b</mi><mn>2</mn></msup></mrow><mrow><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi></mrow></mfrac><mfrac><mrow><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msubsup><mi>J</mi><mn>0</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msubsup><mi>J</mi><mn>1</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>R</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> (con la condición de Robin la integral de normalización conserva dos términos — en Dirichlet puro solo quedaba <math display=\"inline\"><msubsup><mi>J</mi><mn>1</mn><mn>2</mn></msubsup></math>, como en el problema del gimnasta)."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Resolver la EDO no homogénea de cada modo.</strong> Introduciendo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mo>∑</mo><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>m</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>T</mi><mi>n</mi><mo>′</mo></msubsup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>m</mi><mi>n</mi><mn>2</mn></msubsup><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mi>n</mi></msub></mrow></math>, con <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> al principio: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>C</mi><mi>n</mi></msub><mrow><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>m</mi><mi>n</mi><mn>2</mn></msubsup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msubsup><mi>m</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — la temperatura sube desde cero y tiende a la distribución estable (<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>: equilibrio entre la fuente y la emisión)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este mismo esquema resuelve los problemas de membrana de la colección (incluido el del gimnasta — allí era la ecuación de ondas y los <math display=\"inline\"><msub><mi>T</mi><mi>n</mi></msub></math> eran osciladores) y los de la esfera (donde en lugar de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> aparecen Legendre o Bessel de orden semientero, con los cambios <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>r</mi><mi>T</mi></mrow></math> o <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>S</mi></mrow></math> — sugerencias de la colección). El único apartado teórico que falta es la resolución mediante transformaciones integrales (la última parte del tema 9 del programa): ahí la serie de Fourier se convierte en <strong>transformada</strong> de Fourier en dominios infinitos."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Ejercicios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La base de ejercicios de este capítulo son estas tres secciones de la colección: <strong>Separación de variables</strong> (de los exámenes 12 + 14), <strong>Características</strong> (9) y los problemas 1 a 3 del examen completo. Itinerario recomendado, siguiendo el orden del cuaderno: primero los ejercicios de clasificación (el 5 de características), después d&#x27;Alembert (el 1), luego separaciones sencillas (varilla: febrero de 2005), luego Bessel (membranas y cilindros) y por último las esferas (Legendre)."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 1,
   "izenburua": "Clasificación de las EDP y operador de Laplace en sistemas de coordenadas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las ecuaciones en derivadas parciales se clasifican según el signo del discriminante (elípticas, hiperbólicas, parabólicas), con una lista de modelos físicos; y el operador de Laplace en coordenadas cartesianas, polares, cilíndricas y esféricas."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Clasificación de las EDP",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Clasificación según el discriminante",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Elípticas</strong> (<math display=\"inline\"><mrow><mi>D</mi><mo>&lt;</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Laplace</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Helmholtz</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Poisson</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo>−</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">Schrödinger</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>",
        "<strong>Hiperbólicas</strong> (<math display=\"inline\"><mrow><mi>D</mi><mo>&gt;</mo><mn>0</mn></mrow></math>): ecuaciones de ondas, p. ej. <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mi>o</mi><mi>k</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mi>b</mi><mi>i</mi><mi>b</mi><mi>r</mi><mi>a</mi><mi>k</mi><mi>o</mi><mi>r</mi><mi>r</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">uhina dimentsio handiagoetan</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> con variantes de rozamiento (<math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><msub><mi>u</mi><mi>t</mi></msub></mrow></math>), fuerza externa (<math display=\"inline\"><mrow><mi>+</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y línea de transmisión (<math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><mi>k</mi><mi>u</mi></mrow></math>).",
        "<strong>Parabólicas</strong> (<math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>): ecuaciones de difusión, p. ej. <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>i</mi><mi>f</mi><mi>u</mi><mi>s</mi><mi>i</mi><mi>o</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mn>1</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> con variantes de convección (<math display=\"inline\"><mrow><mi>−</mi><mi>h</mi><msub><mi>u</mi><mi>x</mi></msub></mrow></math>), pérdida lateral (<math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>u</mi></mrow></math>) y fuentes (<math display=\"inline\"><mrow><mi>+</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "Operador de Laplace en sistemas de coordenadas",
   "blokeak": [
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mi>r</mi><mi>t</mi><mi>e</mi><mi>s</mi><mi>i</mi><mi>a</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><msub><mi>u</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>u</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>o</mi><mi>l</mi><mi>a</mi><mi>r</mi><mspace width=\"0.222em\"></mspace><mn>2</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><msub><mi>u</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>u</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mi>i</mi><mi>l</mi><mi>i</mi><mi>n</mi><mi>d</mi><mi>r</mi><mi>i</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><msub><mi>u</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>u</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><msup><mi>r</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msub><mi>u</mi><mi>θ</mi></msub><mo>+</mo><mfrac><mn>1</mn><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><msub><mi>u</mi><mrow><mi>φ</mi><mi>φ</mi></mrow></msub></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>e</mi><mi>s</mi><mi>f</mi><mi>e</mi><mi>r</mi><mi>i</mi><mi>k</mi><mi>o</mi><mspace width=\"0.222em\"></mspace><mn>3</mn><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Coordenadas esféricas: <math display=\"inline\"><mrow><mi>r</mi><mo>≥</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>θ</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>φ</mi><mo>≤</mo><mi>π</mi></mrow></math>, <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;MÉTODOS MATEMÁTICOS&quot;, página 0 (mitad izquierda). La lista es de ecuaciones modelo (Laplace, Helmholtz, Poisson, Schrödinger, ondas, difusión): es <strong>correcta</strong>, aunque la convención de clasificación (la letra del discriminante) depende del curso. ⚠ <strong>Mención:</strong> en el laplaciano esférico el original asocia <math display=\"inline\"><mi>θ</mi></math> con los términos <math display=\"inline\"><mi mathvariant=\"normal\">cot</mi></math>/<math display=\"inline\"><mi mathvariant=\"normal\">sin</mi></math> (como si el ángulo polar fuera <math display=\"inline\"><mi>θ</mi></math>), pero las transformaciones de coordenadas de la parte inferior (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span>...) hacen de <math display=\"inline\"><mi>φ</mi></math> el ángulo polar; la estructura es correcta, solo hay un intercambio de los nombres de los ángulos (no es un error del operador). El texto no se ha abreviado. Véase <code>koadernoa_metodo_n2_p000.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2 — rótulo METODOS MATEMATICOS, páginas 1 a 13 (7 fragmentos): EDP, ecuación del calor y condiciones de contorno; comprobado de forma autónoma el 04-08-2026",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a12",
   "maila": 1,
   "izenburua": "Ecuación del calor: separación de variables y espectro de Dirichlet",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ecuación del calor forzada (con condiciones de contorno homogéneas de Dirichlet y dato inicial nulo); el problema homogéneo asociado se resuelve por <strong>separación de variables</strong>, obteniendo los modos propios."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "Problema",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Problema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Una solución particular es <math display=\"inline\"><mrow><msub><mi>u</mi><mi>p</mi></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>p</mi><mo>,</mo><mi>t</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>p</mi><mo>,</mo><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>), pero no cumple <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; por tanto el problema es <strong>no homogéneo</strong>."
      }
     ]
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Problema homogéneo: separación de variables",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para resolver <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>λ</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De ahí dos ecuaciones: <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Problema de valores propios</strong> <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>r</mi><mi>x</mi></mrow></msup></mrow></math> probando <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mi>λ</mi></msqrt></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></mrow></math>; <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> trae <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <strong>No hay solución no trivial.</strong>",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>X</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi></mrow></math> (lineal); <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>X</mi><mo>≡</mo><mn>0</mn></mrow></math>. <strong>No.</strong>",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math></span>."
       ]
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
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cada modo cumple la ecuación homogénea y las dos condiciones de contorno."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 13-03-2014 (página 1). La separación de variables es <strong>correcta</strong>: con Dirichlet, <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> no tienen autofunciones no triviales; <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>. ⚠ <strong>Precisiones (con mención):</strong> (1) en el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> el original repite las exponenciales, pero la solución de <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math> es <strong>lineal</strong> (<math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mi>x</mi></mrow></math>); corregido aquí. (2) A la solución particular el autor la llama <math display=\"inline\"><msub><mi>y</mi><mi>p</mi></msub></math>, que en este contexto debería ser <math display=\"inline\"><msub><mi>u</mi><mi>p</mi></msub></math>. La resolución de la fuente forzada (<math display=\"inline\"><mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>) y del dato inicial continúa en la página siguiente (<code>koadernoa_metodo_n2_p002.typ</code>). No se ha abreviado. Véase <code>koadernoa_metodo_n2_p001.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Difusión forzada: variación de coeficientes y resolución en serie de senos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La ecuación del calor <strong>forzada</strong> (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>) se resuelve proponiendo un desarrollo en los modos propios, con coeficientes dependientes del tiempo (<strong>variación de coeficientes</strong>): desarrollar <math display=\"inline\"><mi>x</mi></math> en serie de senos, integrar los coeficientes y fijar las constantes con el dato inicial."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Desarrollo y sustitución"
    },
    {
     "mota": "testua",
     "html": "Proponer <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (<math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> <strong>dependiente de <math display=\"inline\"><mi>t</mi></math></strong>, a diferencia del caso homogéneo). Al sustituir en la ecuación se anulan la mayoría de los términos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Serie de senos de <math display=\"inline\"><mi>x</mi></math> y coeficientes"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde por ortogonalidad <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math></span>. Igualando término a término:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Integración (integración por partes)"
    },
    {
     "mota": "testua",
     "html": "Usando <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo>∫</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>d</mi><mi>t</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>a</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">cos</mi><mi>t</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>a</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>⋅</mo><mfrac><mrow><msup><mi>e</mi><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>t</mi><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi mathvariant=\"normal\">cos</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dato inicial y constantes"
    },
    {
     "mota": "testua",
     "html": "Imponiendo <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mi>n</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 13-03-2014 (páginas 2-3). El desarrollo es <strong>correcto</strong>: por variación de coeficientes la proyección <math display=\"inline\"><mi>n</mi></math>-ésima de <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math></span>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y por integración por partes <math display=\"inline\"><msub><mi>b</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>. ⚠ <strong>Corrección (con mención):</strong> a partir del dato inicial la constante es <math display=\"inline\"><mrow><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>4</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (en el recuadro está bien); pero el autor escribe en la <strong>solución final</strong> <math display=\"inline\"><mrow><mn>4</mn><mi>n</mi><mi>π</mi></mrow></math> (se ha perdido un factor de ortogonalidad), que debe ser <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi><mi>π</mi></mrow></math>. Aquí se ha usado <math display=\"inline\"><mrow><mn>2</mn><mi>n</mi><mi>π</mi></mrow></math>. No se ha abreviado. Véase <code>koadernoa_metodo_n2_p002.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Ecuación del calor: homogeneización de contorno y fuente no homogéneos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La ecuación del calor con contorno no homogéneo y fuente se <strong>homogeneiza</strong> en dos pasos (primero el contorno, luego la fuente), dejando un problema homogéneo que se resuelve por separación de variables."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Problema completo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>3</mn><mi>x</mi><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>t</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paso 1: homogeneizar el contorno (<math display=\"inline\"><mi>v</mi></math>)"
    },
    {
     "mota": "testua",
     "html": "Una recta (lineal en <math display=\"inline\"><mi>x</mi></math>) que cumpla las condiciones de contorno: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow></math> con <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>b</mi><mo>=</mo><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>⇒</mo><mi>a</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi></mrow></math>. Por tanto <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>t</mi></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>0</mn><mo>=</mo><msup><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paso 2: homogeneizar la fuente (<math display=\"inline\"><mi>z</mi></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estacionaria, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>⇒</mo><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>; <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mi>A</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>w</mi><mo>−</mo><mi>z</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mi>t</mi></msub><mo>−</mo><msub><mi>y</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn><mo>+</mo><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Paso 3: separación de variables (<math display=\"inline\"><mi>y</mi></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>. Por tanto <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo>∑</mo><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y de <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math></span> resulta <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>v</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>t</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 13-03-2014 (páginas 4-5). Todo es <strong>correcto</strong>, verificado paso a paso: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mi>t</mi></mrow></math> (contorno), <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>2</mn></mrow></math>; <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi></mrow></math> (fuente), <math display=\"inline\"><mrow><msub><mi>y</mi><mi>t</mi></msub><mo>−</mo><msub><mi>y</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>); por separación de variables <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>v</mi><mo>+</mo><mi>z</mi><mo>+</mo><mi>y</mi></mrow></math>. Ejemplo limpio de homogeneización doble (contorno + fuente). No se ha abreviado. Véase <code>koadernoa_metodo_n2_p005.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Ecuación del calor con extremos aislados: espectro de Neumann y serie de cosenos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Ecuación del calor con extremos <strong>aislados</strong> (condiciones de contorno de Neumann, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>): la separación de variables da el espectro de <strong>cosenos</strong>, y la temperatura inicial a trozos se desarrolla en serie de cosenos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Extremos aislados",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><mi>α</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&gt;</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mtd></mtr></mtable></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>δ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>T</mi><mn>2</mn></msub><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>δ</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Separación de variables y espectro"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><mi>λ</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></mrow></math>; <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mi>B</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><msqrt><mi>λ</mi></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>L</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>L</mi></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math></span>. <strong>Trivial.</strong>",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo>=</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi></mrow></math> (<strong>la constante es válida</strong>), <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>T</mi><mo>=</mo><mi>C</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>B</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math></span>."
       ]
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
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución general y <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una serie de cosenos (Neumann). El término constante, proyectando con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>L</mi></mrow><mn>2</mn></mfrac><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>δ</mi></msubsup><msub><mi>T</mi><mn>1</mn></msub><mi>d</mi><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>δ</mi><mi>L</mi></msubsup><msub><mi>T</mi><mn>2</mn></msub><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mi>L</mi><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>L</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 14-03-2014 (páginas 6-7). Todo es <strong>correcto</strong>: el espectro de Neumann (<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> constante válida, <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), la solución general en serie de cosenos, y <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>L</mi></mrow></math> (es decir, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math> = media de <math display=\"inline\"><mi>f</mi></math>). El autor escribe la difusividad como <math display=\"inline\"><mi>α</mi></math> (no <math display=\"inline\"><msup><mi>α</mi><mn>2</mn></msup></math>); se ha respetado su notación. Los coeficientes <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>) se calculan en los pasos siguientes. No se ha abreviado. Véase <code>koadernoa_metodo_n2_p006.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Coeficientes de cosenos de Neumann y estado estacionario; evolución de un dato <math display=\"inline\"><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación del problema anterior: coeficientes de Fourier en cosenos del dato a trozos (<math display=\"inline\"><msub><mi>a</mi><mi>k</mi></msub></math>), solución completa y estado estacionario (<math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>); y evolución de un dato sinusoidal cuadrático (apartado b)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Coeficientes <math display=\"inline\"><msub><mi>a</mi><mi>k</mi></msub></math> (dato a trozos)"
    },
    {
     "mota": "testua",
     "html": "Por ortogonalidad (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math></span>), la proyección del dato a trozos: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>δ</mi></msubsup><msub><mi>T</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><msubsup><mo>∫</mo><mi>δ</mi><mi>L</mi></msubsup><msub><mi>T</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mrow><mi>k</mi><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>δ</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>a</mi><mi>k</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>k</mi><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>δ</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mi>L</mi><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mi>δ</mi></mrow><mi>L</mi></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>2</mn><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>δ</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Estado estacionario:</strong> cuando <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, todos los términos exponenciales tienden a <math display=\"inline\"><mn>0</mn></math>, por lo que <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mi>δ</mi><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>L</mi></mrow></math> (la media de la temperatura inicial)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por la identidad del ángulo doble, el dato es una <strong>serie de cosenos finita</strong>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><msub><mi>a</mi><mn>4</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>, y los demás <math display=\"inline\"><mn>0</mn></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>16</mn><mi>α</mi><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>4</mn><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "CNmet2, &quot;METODOS MATEMATICOS&quot;, 14-03-2014 (páginas 8-9). El apartado (a) es <strong>correcto</strong>: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>k</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>k</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>π</mi><mi>δ</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (usando las integrales impares <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), la solución y el estado estacionario (la media). ⚠ <strong>Correcciones (con mención) en el apartado (b):</strong> el original mezcla escalas/índices: es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (no <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), por lo que el término es <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>4</mn></mrow></math> (no <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>); y es <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>), no <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>L</mi></mrow></math>. El resultado correcto es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>16</mn><mi>α</mi><msup><mi>π</mi><mn>2</mn></msup><mi>t</mi><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, recogido aquí. No se ha abreviado. Véase <code>koadernoa_metodo_n2_p008.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Ecuación del calor con condiciones mixtas de Dirichlet-Neumann",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Separando variables, tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mi>X</mi></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>α</mi><mn>2</mn></msup></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Las condiciones dan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>α</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>α</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La ortogonalidad de los modos es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>m</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mrow></math></span>; por tanto <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>α</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Función escalón"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>δ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> en el intervalo <math display=\"inline\"><mrow><mi>δ</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mi>δ</mi><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>α</mi><mi>n</mi></msub></mfrac><mi>.</mi></mrow></math> En consecuencia,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>δ</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><mrow><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>x</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el punto de salto, la serie da la media de los valores a ambos lados."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Rampa y meseta"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> en el intervalo <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>δ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi></mrow></math> en el intervalo <math display=\"inline\"><mrow><mi>δ</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, al integrar por partes los términos del borde se cancelan: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msubsup><mi>α</mi><mi>n</mi><mrow><mn>2</mn><mi>.</mi></mrow></msubsup></mfrac></mrow></math> Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>L</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>δ</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><mrow><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mfrac><mi>x</mi><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel obtiene el modo espacial correcto y la norma <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math>, pero tuerce el factor temporal, el inicio de la serie y los dos coeficientes. [CORREGIDO: el papel escribe <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow></msup></math> y comienza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math>; aquí se usa <math display=\"inline\"><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><mrow><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup></mrow></mfrac></mrow></msup></math> desde <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>.] En el apartado (a) se pierde el <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del límite inferior; en el (b) las escalas no concuerdan. Las dos proyecciones calculadas aquí cumplen la EDP, los dos contornos y el dato inicial. Véase <code>koadernoa_metodo_n2_p010.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Ecuación del calor forzada: elevación de las condiciones de contorno",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tenemos este problema: <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>π</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math> Se elige la elevación independiente del tiempo: <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi></mrow></math>. Las dos integraciones"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "dan. Poniendo <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>V</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Los modos del problema mixto son <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>. Como la norma es <math display=\"inline\"><mfrac><mi>π</mi><mn>2</mn></mfrac></math>, <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Integrando por partes dos veces, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>16</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></mfrac></mrow></math></span>; por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mn>32</mn><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mi>π</mi><mi>x</mi><mo>+</mo><mn>1</mn><mo>−</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>32</mn><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac><msup><mi>e</mi><mrow><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, la serie transitoria desaparece y queda el perfil estacionario <math display=\"inline\"><mi>V</mi></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La elevación, los modos y el coeficiente <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>32</mn><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup></mfrac></mrow></math> están bien. [CORREGIDO: el papel comienza la serie en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> y elimina el modo fundamental; la expansión completa comienza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>.] Si se quita el primer término, no se recupera el perfil inicial <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>π</mi><mi>x</mi></mrow></math>. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p012.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2 — rótulo METODO MATEMATIKOAK, páginas 14 a 21 (4 fragmentos): Laplace esférico, propagación del calor y ejercicios resueltos; cambio de rótulo conservado tal cual",
     "hizkuntza": "eu/es/en"
    }
   ]
  },
  {
   "id": "a21",
   "maila": 1,
   "izenburua": "Ecuación de Laplace en coordenadas esféricas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En coordenadas esféricas, <math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>∂</mi><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mrow><msup><mi>r</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><msub><mi>∂</mi><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><msub><mi>u</mi><mi>θ</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></mfrac><msub><mi>u</mi><mrow><mi>φ</mi><mi>φ</mi></mrow></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> separando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y eligiendo la constante de separación <math display=\"inline\"><mrow><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la ecuación radial es <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>−</mo><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>. El cambio <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup></mrow></math> da las raíces <math display=\"inline\"><mi>l</mi></math> y <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><msup><mi>r</mi><mi>l</mi></msup><mo>+</mo><mi>B</mi><msup><mi>r</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La periodicidad del acimut exige <math display=\"inline\"><mi>m</mi></math> entero: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>D</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Cuando <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>, la rama lineal de <math display=\"inline\"><mi>φ</mi></math> no es periódica y debe eliminarse. Poniendo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>μ</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>μ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi mathvariant=\"normal\">Θ</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>l</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><msup><mi>m</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>μ</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi mathvariant=\"normal\">Θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Esta es la ecuación de Legendre asociada. Para ser regular en los polos se toma <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Θ</mi><mo>=</mo><msubsup><mi>P</mi><mi>l</mi><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup></mrow></math>, <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>l</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, la solución regular general es una combinación de ramas radiales y armónicos esféricos: <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>l</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><munderover><mo>∑</mo><mrow><mi>m</mi><mo>=</mo><mi>−</mi><mi>l</mi></mrow><mi>l</mi></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mrow><mi>l</mi><mi>m</mi></mrow></msub><msup><mi>r</mi><mi>l</mi></msup><mo>+</mo><msub><mi>B</mi><mrow><mi>l</mi><mi>m</mi></mrow></msub><msup><mi>r</mi><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mi>Y</mi><mi>l</mi><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi>.</mi></mrow></math> En la convención estándar, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mi>Y</mi><mi>l</mi><mi>m</mi></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup><msqrt><mrow><mfrac><mrow><mn>2</mn><mi>l</mi><mo>+</mo><mn>1</mn></mrow><mrow><mn>4</mn><mi>π</mi></mrow></mfrac><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>−</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>l</mi><mo>+</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>!</mi></mrow></mfrac></mrow></msqrt><msubsup><mi>P</mi><mi>l</mi><mrow><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><msup><mi>e</mi><mrow><mi>i</mi><mi>m</mi><mi>φ</mi></mrow></msup></mrow></math></span>, y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>d</mi><mi>φ</mi><mover><msubsup><mi>Y</mi><mi>l</mi><mi>m</mi></msubsup><mo accent=\"true\">¯</mo></mover><msubsup><mi>Y</mi><msup><mi>l</mi><mo>′</mo></msup><msup><mi>m</mi><mo>′</mo></msup></msubsup><mo>=</mo><msub><mi>δ</mi><mrow><mi>l</mi><msup><mi>l</mi><mo>′</mo></msup></mrow></msub><msub><mi>δ</mi><mrow><mi>m</mi><msup><mi>m</mi><mo>′</mo></msup></mrow></msub></mrow></math></span>."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Esfera conductora en un campo uniforme",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el exterior de la esfera conectada a tierra de radio <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo>∼</mo><mi>−</mi><mi>E</mi><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> cuando <math display=\"inline\"><mrow><mi>r</mi><mo>→</mo><mi>∞</mi></mrow></math>. El dato de contorno tiene solo el modo <math display=\"inline\"><mrow><mi>l</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mfrac><msup><mi>a</mi><mn>3</mn></msup><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>≥</mo><mi>a</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El desarrollo de la fotografía termina al plantear el problema de la esfera; el resultado se ha completado aquí a partir de las condiciones. [CORREGIDO: el papel deja incompleto el rango de la segunda suma y escribe la fase <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>l</mi></msup></mrow></math>; aquí se explicita <math display=\"inline\"><mrow><mi>−</mi><mi>l</mi><mo>≤</mo><mi>m</mi><mo>≤</mo><mi>l</mi></mrow></math> y se usa la convención de Condon-Shortley <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>m</mi></msup></mrow></math>.] El cambio de una fase general coherente no altera la ortogonalidad. Véase <code>koadernoa_metodo_n2_p014.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "EDP lineales de primer orden: método de las características",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para la ecuación <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, las características dan las relaciones <math display=\"inline\"><mrow><mi>d</mi><mfrac><mi>x</mi><mi>A</mi></mfrac><mo>=</mo><mi>d</mi><mfrac><mi>y</mi><mi>B</mi></mfrac></mrow></math>. Si su invariante es <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><msub><mi>φ</mi><mi>x</mi></msub><mo>+</mo><mi>B</mi><msub><mi>φ</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Con la coordenada transversal <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi></mrow></math>, donde el jacobiano es no nulo, <math display=\"block\"><mrow><mi>B</mi><msub><mi>u</mi><mi>η</mi></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>,</mo><mi>η</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Si <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>η</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: la solución es constante en las características."
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Ejemplo con dos variables",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>t</mi></msub><mo>+</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> se tiene <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>d</mi><mi>t</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>t</mi></mrow></math>. Integrando <math display=\"inline\"><mrow><msub><mi>u</mi><mi>η</mi></msub><mo>+</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la comprobación, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><msup><mi>g</mi><mo>′</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>t</mi></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>g</mi><mo>−</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; los tres términos se cancelan."
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Más variables independientes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para la ecuación <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>a</mi><mrow><mi>j</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><msub><mi>u</mi><msub><mi>x</mi><mi>j</mi></msub></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, el sistema característico es <math display=\"inline\"><mrow><mi>d</mi><mfrac><msub><mi>x</mi><mn>1</mn></msub><msub><mi>a</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>…</mi><mo>=</mo><mi>d</mi><mfrac><msub><mi>x</mi><mi>n</mi></msub><msub><mi>a</mi><mi>n</mi></msub></mfrac><mo>=</mo><mi>d</mi><mfrac><mi>u</mi><mi>f</mi></mfrac></mrow></math>. En el ejemplo <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>+</mo><msub><mi>u</mi><mi>z</mi></msub><mo>=</mo><mn>3</mn><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>z</mi></mrow></math> son invariantes; por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Datos en ecuaciones de segundo orden",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En una ecuación <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><msub><mi>u</mi><mi>x</mi></msub><mo>,</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>, los datos habituales sobre la curva <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son: Dirichlet fija <math display=\"inline\"><mi>u</mi></math>; Neumann, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>n</mi></msub><mo>=</mo><mi>∇</mi><mi>u</mi><mo>⋅</mo><mi>n</mi></mrow></math>; y Cauchy, ambos. La admisibilidad de los datos la deciden los coeficientes y el hecho de que la curva sea o no característica."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos soluciones características son correctas. Donde <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> no se puede usar automáticamente el cambio <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi></mrow></math>; hay que elegir otra coordenada transversal. La página presenta la geometría de los datos de segundo orden, pero aún no desarrolla el criterio de clasificación. Véase <code>koadernoa_metodo_n2_p016.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Datos de Cauchy y ecuación de ondas con rozamiento",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Datos sobre una curva"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>τ</mi></mrow></mfrac><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><msup><mi>x</mi><mo>′</mo></msup><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>φ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Un normal no unitario es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><mi>−</mi><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto <math display=\"block\"><mrow><mi>∇</mi><mi>u</mi><mo>⋅</mo><mi>n</mi><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msub><mi>u</mi><mi>y</mi></msub><msup><mi>x</mi><mo>′</mo></msup><mi>.</mi></mrow></math> Si se usa el normal unitario, lo anterior se divide por <math display=\"inline\"><msqrt><mrow><msup><mi>x</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></msqrt></math> y los datos de Neumann/Cauchy se igualan con <math display=\"inline\"><mrow><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Onda con rozamiento"
    },
    {
     "mota": "testua",
     "html": "Separando <math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>k</mi><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mi>X</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>k</mi><msup><mi>T</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><msup><mi>c</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. Los casos <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> solo tienen la solución espacial trivial. <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>, cuando <math display=\"inline\"><mrow><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><msup><mi>n</mi><mo>″</mo></msup></msub><mo>+</mo><mn>2</mn><mi>k</mi><msub><mi>T</mi><msup><mi>n</mi><mo>′</mo></msup></msub><mo>+</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Las raíces son <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mi>k</mi><mo>±</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Sobreamortiguamiento</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&gt;</mo><mi>n</mi><mi>c</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msub><mi>A</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>+</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>−</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Amortiguamiento crítico</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>n</mi><mi>c</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Subamortiguamiento</strong>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>n</mi><mi>c</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≥</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por linealidad, también las series convergentes de estos modos dan soluciones del problema."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la línea normal del papel termina en <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><msup><mi>y</mi><mo>′</mo></msup></mrow></math>; faltan <math display=\"inline\"><mrow><mi>−</mi><msub><mi>u</mi><mi>y</mi></msub><msup><mi>x</mi><mo>′</mo></msup></mrow></math> y, para <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mover><mrow></mrow><mo accent=\"true\">̂</mo></mover></mrow></math>, la normalización.] [CORREGIDO: el papel escribe <math display=\"inline\"><mrow><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow><mi>c</mi></mfrac><mo>≤</mo><mi>n</mi></mrow></math> para el régimen oscilatorio; debe ser estricto, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mi>n</mi><mi>c</mi></mrow></math>, para no solapar el caso crítico.] El resto de la separación y las raíces características son correctas. Véase <code>koadernoa_metodo_n2_p018.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Serie de la onda amortiguada y espectro de Robin de la ecuación del calor",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Todos los modos de la onda amortiguada"
    },
    {
     "mota": "testua",
     "html": "Para el problema <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>k</mi><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>. Cada modo se clasifica comparando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mi>c</mi></mrow></math>:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>:</mo><mi>n</mi><mi>c</mi><mo>&lt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>+</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>−</mo><msqrt><mrow><msup><mi>k</mi><mn>2</mn></msup><mo>−</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"1.0em\"></mspace><mo>+</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>:</mo><mi>n</mi><mi>c</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"1.0em\"></mspace><mo>+</mo><munder><mo>∑</mo><mrow><mi>n</mi><mo>:</mo><mi>n</mi><mi>c</mi><mo>&gt;</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></munder><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mo>−</mo><msup><mi>k</mi><mn>2</mn></msup></mrow></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: el papel usa cotas <math display=\"inline\"><mo>≤</mo></math> y <math display=\"inline\"><mo>≥</mo></math> en las sumas exteriores; aquí son estrictas para no contar tres veces un modo crítico.]"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación del calor con condiciones de Dirichlet-Robin"
    },
    {
     "mota": "testua",
     "html": "Separando <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>T</mi><mi>X</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mi>λ</mi><mi>T</mi></mrow></math> y <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>=</mo><mi>λ</mi><mi>X</mi></mrow></math>. Los casos <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> solo tienen solución trivial. Cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>μ</mi><mn>2</mn></msup></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; de <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> resulta <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>, y la condición de Robin da <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math></span>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msub><mi>μ</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>μ</mi><mi>n</mi></msub><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>π</mi><mo>,</mo><mi>n</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por autoadjunción, los modos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son ortogonales. Su norma es <math display=\"block\"><mrow><msub><mi>N</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mn>2</mn></mrow><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math>. Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow><msub><mi>N</mi><mi>n</mi></msub></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>B</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>μ</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el papel anota dos veces <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, pero el enunciado y el cálculo usan <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.] [CORREGIDO: la última copia pierde <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>μ</mi><mi>n</mi><mn>2</mn></msubsup><mi>t</mi></mrow></msup></math> y añade un <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> tras el seno; la fórmula completa es la encuadrada aquí.] Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p020.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2 — rótulo METODOS MATEMATICOS con acento, páginas 22 a 26 (3 fragmentos): Sturm-Liouville y Green; fechas visibles 04/07-04-2014",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Laplaciano en coordenadas cilíndricas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>z</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Las derivadas auxiliares son <math display=\"block\"><mrow><msub><mi>r</mi><mi>x</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>r</mi><mi>y</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>θ</mi><mi>y</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac></mrow></math>. La regla de la cadena da <math display=\"block\"><mrow><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><msub><mi>V</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>−</mo><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac></mrow></math> y <math display=\"block\"><mrow><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><msub><mi>V</mi><mi>r</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>+</mo><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Desarrollando por completo las segundas derivadas, <math display=\"block\"><mrow><msub><mi>U</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>−</mo><mn>2</mn><msub><mi>V</mi><mrow><mi>r</mi><mi>θ</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mi>r</mi></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mn>2</mn><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> es <math display=\"block\"><mrow><msub><mi>U</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>+</mo><mn>2</mn><msub><mi>V</mi><mrow><mi>r</mi><mi>θ</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mi>r</mi></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><mi>r</mi></mfrac><mo>+</mo><msub><mi>V</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>θ</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>2</mn><msub><mi>V</mi><mi>θ</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mfrac><mi>θ</mi><msup><mi>r</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mfrac></mrow></math> <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub></mrow></math>. En la suma se cancelan los términos mixtos y los términos <math display=\"inline\"><msub><mi>V</mi><mi>θ</mi></msub></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>U</mi><mo>=</mo><msub><mi>V</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><msub><mi>V</mi><mi>r</mi></msub><mo>+</mo><mfrac><mn>1</mn><msup><mi>r</mi><mn>2</mn></msup></mfrac><msub><mi>V</mi><mrow><mi>θ</mi><mi>θ</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>z</mi><mi>z</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>r</mi><mo>&gt;</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el eje <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> los coeficientes son singulares; la regularidad de una función cartesiana suave impone límites compatibles."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fotografía escribe <math display=\"inline\"><msub><mi>V</mi><mrow><mi>r</mi><mi>θ</mi></mrow></msub></math> y <math display=\"inline\"><msub><mi>V</mi><mrow><mi>θ</mi><mi>r</mi></mrow></msub></math> por separado; cuando <math display=\"inline\"><mrow><mi>V</mi><mo>∈</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></math> son iguales y dan el factor <math display=\"inline\"><mn>2</mn></math> que aparece aquí. El enunciado pide también las coordenadas esféricas, pero la página solo desarrolla las cilíndricas, y la fotografía siguiente pasa a otro ejercicio; no se ha inventado la parte esférica que falta. Véase <code>koadernoa_metodo_n2_p022.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Coordenadas polares y cambio de variables de d&#x27;Alembert",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Dos EDP de primer orden"
    },
    {
     "mota": "testua",
     "html": "Usando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>r</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><msub><mi>U</mi><mi>y</mi></msub><mo>−</mo><mi>y</mi><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><msub><mi>V</mi><mi>θ</mi></msub></mrow></math>. Por tanto la solución general de la ecuación <math display=\"inline\"><mrow><mi>x</mi><msub><mi>U</mi><mi>y</mi></msub><mo>−</mo><mi>y</mi><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math> es radial:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La segunda ecuación es <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>y</mi></mfrac><msub><mi>U</mi><mi>y</mi></msub><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, en una región donde <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>. Toda función radial está en el núcleo del operador homogéneo. Tomando <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>P</mi><mi>x</mi></msub><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>3</mn></msup></mrow></math>, y la sustitución directa da el segundo miembro. Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación de ondas unidimensional"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>U</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Poniendo <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>,</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>ξ</mi><mi>ξ</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>V</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><msub><mi>V</mi><mrow><mi>η</mi><mi>η</mi></mrow></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>ξ</mi><mi>ξ</mi></mrow></msub><mo>−</mo><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>η</mi><mi>η</mi></mrow></msub></mrow></math>. Por tanto <math display=\"inline\"><mrow><msub><mi>V</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Las condiciones iniciales dan <math display=\"inline\"><mrow><mi>φ</mi><mo>+</mo><mi>ψ</mi><mo>=</mo><mi>f</mi></mrow></math> y <math display=\"inline\"><mrow><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>φ</mi><mo>′</mo></msup><mo>−</mo><msup><mi>ψ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi></mrow></math>. Si <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>+</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>−</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>−</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>+</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math>; la constante <math display=\"inline\"><mi>k</mi></math> se cancela en la suma final."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La primera solución la da el papel como <math display=\"inline\"><mrow><mi>k</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; esa forma expresa la solución radial general, con la constante absorbida en la función. La reconstrucción final de la onda se completa en la página siguiente. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p024.typ</code>"
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
   "id": "a31",
   "maila": 2,
   "izenburua": "Fórmula de d&#x27;Alembert",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se toma la ecuación <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> en la recta real, <math display=\"inline\"><mrow><mi>c</mi><mo>≠</mo><mn>0</mn></mrow></math>, y los datos <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En las características, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Al sustituir las expresiones <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>+</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>−</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>ψ</mi><mo>=</mo><mfrac><mrow><mi>f</mi><mo>−</mo><mfrac><mi>G</mi><mi>c</mi></mfrac><mo>+</mo><mi>k</mi></mrow><mn>2</mn></mfrac></mrow></math> de la página anterior, se cancelan <math display=\"inline\"><mrow><mi>−</mi><mfrac><mi>k</mi><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mfrac><mi>k</mi><mn>2</mn></mfrac></math>. Como <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>=</mo><mi>g</mi></mrow></math>, el teorema fundamental del cálculo da <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi></mrow></math></span>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>c</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>, la integral colapsa y <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Derivando en el tiempo por la regla de Leibniz, la aportación de la integral es <math display=\"inline\"><mfrac><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac></math>; en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> se obtiene <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Solo cada término dependiente de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math> o <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow></math> cumple la ecuación de ondas."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La página derecha de la fotografía está en blanco. No hay corrección: el papel aplica correctamente la cancelación de constantes y el teorema de Barrow. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p026.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "cNmet2",
     "xehetasuna": "CNmet2, páginas 27 a 82 (41 fragmentos): Green y Sturm-Liouville, características de las EDP, Fourier, ecuaciones de ondas/calor/Laplace/Helmholtz y funciones especiales; múltiples rótulos de contenido conservados literalmente",
     "hizkuntza": "es/en"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 1,
   "izenburua": "Función de Green para un problema de Sturm-Liouville",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos <math display=\"block\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El problema homogéneo da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math>; el sistema de los dos contornos solo admite <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. Por tanto el operador es invertible y existe la función de Green."
    },
    {
     "mota": "testua",
     "html": "La integración directa da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>2</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math>. Con los contornos, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>411</mn><mn>70</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mfrac><mn>44</mn><mn>35</mn></mfrac></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>137</mn><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>70</mn></mfrac><mo>+</mo><mfrac><mn>44</mn><mrow><mn>35</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función de Green cumple <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><msub><mi>G</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Usando las ramas homogéneas y los contornos, es <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>ζ</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>ζ</mi></mrow></math>. La continuidad da <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Imponiendo el salto de flujo <math display=\"inline\"><mrow><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup><msub><mi>G</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>ζ</mi><mo>−</mo></msup><msup><mi>ζ</mi><mo>+</mo></msup></msubsup><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mfrac><mrow><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ζ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&lt;</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>ζ</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&gt;</mo><mi>ζ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Entonces <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi></mrow></math>, e integrando las dos ramas se obtiene la misma solución directa."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fotografía hace la construcción hasta la continuidad, pero deja la normalización sin terminar. [CORREGIDO: se impone el salto de flujo unitario y se obtiene el factor <math display=\"inline\"><mfrac><mn>1</mn><mn>21</mn></mfrac></math>.] [CORREGIDO: la última línea del papel usa <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> en la integral respecto de <math display=\"inline\"><mi>s</mi></math>; debe ser <math display=\"inline\"><mrow><mi>d</mi><mi>s</mi></mrow></math>.] Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p027.typ</code>"
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
   "id": "a33",
   "maila": 2,
   "izenburua": "Operador de Sturm-Liouville de tipo Euler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><msup><mi>e</mi><mi>π</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>π</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. Poniendo <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>t</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>Y</mi><mfrac><mi>′</mi><mi>x</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mfrac><mrow><msup><mi>Y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>Y</mi><mo>′</mo></msup></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>; por tanto <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><msup><mi>Y</mi><mo>″</mo></msup></mrow></math>. El problema se convierte en <math display=\"inline\"><mrow><mi>−</mi><msup><mi>Y</mi><mo>″</mo></msup><mo>=</mo><mi>λ</mi><mi>Y</mi></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Los casos <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> solo tienen la solución trivial. Cuando <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; los contornos dan <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>π</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El operador puede escribirse como <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup></mrow></math>. Dividiendo por <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math>; por tanto el peso de Sturm-Liouville es <math display=\"inline\"><mrow><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>. En efecto, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>1</mn><msup><mi>e</mi><mi>π</mi></msup></msubsup><msub><mi>y</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msub><mi>y</mi><mrow><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>d</mi><mfrac><mi>x</mi><mi>x</mi></mfrac><mo>=</mo><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el papel escribe <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> pero declara <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math>; la familia completa comienza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> e incluye <math display=\"inline\"><mrow><msub><mi>λ</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>.] Por lo demás, es equivalente usar <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>. La normalización <math display=\"inline\"><msqrt><mfrac><mn>2</mn><mi>π</mi></mfrac></msqrt></math> y el peso <math display=\"inline\"><mfrac><mn>1</mn><mi>x</mi></mfrac></math> son correctos. Véase <code>koadernoa_metodo_n2_p029.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Función de Green del problema de Sturm-Liouville",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hay que resolver <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>π</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>λ</mi><msup><mrow><mo>≠</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mi>…</mi></mrow></math>, cuando."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Desarrollo espectral"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mo>+</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>y</mi><mi>n</mi></msub><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>π</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>G</mi><mrow><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>z</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>λ</mi><mo>−</mo><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El coeficiente de la fuente <math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math> es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>1</mn><msup><mi>e</mi><mi>π</mi></msup></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mfrac><mi>z</mi><mi>z</mi></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup></mfrac></mrow></math></span>; por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>−</mo><msubsup><mi>a</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Construcción directa"
    },
    {
     "mota": "testua",
     "html": "Escribiendo <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math>, empalmando las dos ramas que cumplen cada contorno e imponiendo el salto <math display=\"inline\"><mrow><msub><mi>G</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mo>+</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>−</mo><msub><mi>G</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>z</mi><mo>−</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mfrac><mn>1</mn><msup><mi>z</mi><mn>2</mn></msup></mfrac></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>z</mi></mrow></math> cuando, y <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mi>z</mi></mrow></math> cuando. El núcleo no existe en los autovalores donde <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El inicio de la Green espectral y el de <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> son correctos. [CORREGIDO: la reindexación posterior del papel introduce frecuencias <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>; como <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, las frecuencias correctas son <math display=\"inline\"><mfrac><mrow><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mn>2</mn></mfrac></math>, sin ese factor <math display=\"inline\"><mi>π</mi></math>.] La construcción directa se interrumpe en esta página antes de normalizar el salto y se cierra en p033. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p031.typ</code>"
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
   "id": "a35",
   "maila": 2,
   "izenburua": "Normalización de Green y solución cerrada",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>G</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>G</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>G</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, uniendo el coeficiente delta de las dos ramas anteriores, se obtiene <math display=\"block\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>z</mi><msqrt><mi>λ</mi></msqrt></mrow></mfrac></mrow></math>. Con la abreviatura <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><msqrt><mi>λ</mi></msqrt></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&lt;</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi mathvariant=\"normal\">ln</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>−</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>a</mi><mi>z</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mrow><mtext mathvariant=\"normal\">si </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>&gt;</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Integrando el núcleo respecto de <math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>λ</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>−</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta fórmula cumple <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>Y</mi><mo>=</mo><mi>−</mi><mi>t</mi></mrow></math> en la variable <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, y también <math display=\"inline\"><mrow><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, siempre que <math display=\"inline\"><mrow><mi>λ</mi><mo>≠</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El caso <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> resuelto por paso al límite o directamente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>x</mi><mn>2</mn></mfrac><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></msup><mn>6</mn></mfrac><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>π</mi><mn>2</mn></msup><mfrac><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mfrac><mi>x</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fotografía da correctamente la constante del salto, la Green completa, las integrales y el límite <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>. En los autovalores, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y el resolvente diverge; entonces hace falta la compatibilidad de Fredholm. La página derecha está en blanco. Véase <code>koadernoa_metodo_n2_p033.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Onda cosmológica: modos radiales de Bessel",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"block\"><mrow><mi>−</mi><mfrac><msub><mi>μ</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>3</mn><mfrac><msub><mi>μ</mi><mi>t</mi></msub><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mfrac><mi>μ</mi><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Con simetría axial, <math display=\"inline\"><mrow><msub><mi>μ</mi><mi>φ</mi></msub><mo>=</mo><msub><mi>μ</mi><mi>z</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>μ</mi><mo>=</mo><mfrac><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ρ</mi><msub><mi>μ</mi><mi>ρ</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ρ</mi></msub><mi>ρ</mi></mfrac></mrow></math>. Separando <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>R</mi><mfrac><mi>′</mi><mi>ρ</mi></mfrac><mo>+</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><mi>T</mi><mfrac><mi>′</mi><mi>t</mi></mfrac><mo>+</mo><msup><mi>c</mi><mn>2</mn></msup><mi>λ</mi><mfrac><mi>T</mi><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La regularidad de <math display=\"inline\"><mi>R</mi></math> descarta <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math>; la condición <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. Si <math display=\"inline\"><msub><mi>β</mi><mi>n</mi></msub></math> es el <math display=\"inline\"><mi>n</mi></math>-ésimo cero positivo de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><msubsup><mi>β</mi><mi>n</mi><mn>2</mn></msubsup><msup><mi>a</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>R</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, imponiendo regularidad y un contorno, solo tiene el modo trivial; la rama regular <math display=\"inline\"><msub><mi>I</mi><mn>0</mn></msub></math> de <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> no tiene ceros positivos."
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mfrac><msubsup><mi>β</mi><mi>n</mi><mn>2</mn></msubsup><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msup><mi>t</mi><mi>b</mi></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>b</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>b</mi><mo>+</mo><msub><mi>K</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, es decir, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msub><mi>K</mi><mi>n</mi></msub></mrow></msqrt></mrow></math>. Cuando <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>&lt;</mo><mn>1</mn></mrow></math> hay dos potencias reales decrecientes. En el caso crítico <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><msup><mi>t</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Cuando <math display=\"inline\"><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>&gt;</mo><mn>1</mn></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msup><mi>t</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>−</mo><mn>1</mn></mrow></msqrt><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><msub><mi>K</mi><mi>n</mi></msub><mo>−</mo><mn>1</mn></mrow></msqrt><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msub><mi>β</mi><mi>n</mi></msub><mo>→</mo><mi>∞</mi></mrow></math>, siempre existen modos oscilatorios de índice alto."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel deduce correctamente la separación, el espectro de Bessel de orden cero y la oscilación de los modos altos en <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>. El caso crítico no aparece explícitamente en las tres líneas del papel; aquí se ha tomado de la raíz doble. Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n2_p034.typ</code>"
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
   "id": "a37",
   "maila": 2,
   "izenburua": "Onda cosmológica: proyección de Bessel del dato inicial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>ω</mi><mi>n</mi></msub><mo>=</mo><msqrt><mrow><msup><mi>c</mi><mn>2</mn></msup><mfrac><msubsup><mi>β</mi><mi>n</mi><mn>2</mn></msubsup><mrow><msup><mi>q</mi><mn>2</mn></msup><msup><mi>a</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mn>1</mn></mrow></msqrt></mrow></math>. Si <math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>c</mi><mfrac><msub><mi>β</mi><mn>1</mn></msub><mi>q</mi></mfrac></mrow></math>, como <math display=\"inline\"><msub><mi>β</mi><mi>n</mi></msub></math> es creciente todos los modos son oscilatorios. La solución radial es la serie de los modos <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "Se imponen <math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>a</mi><mi>c</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>μ</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. La ortogonalidad de Bessel da el coeficiente de la constante: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><mi>ρ</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ρ</mi><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>J</mi><mn>1</mn></msub><mfrac><msub><mi>β</mi><mi>n</mi></msub><msub><mi>β</mi><mi>n</mi></msub></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>F</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><mi>δ</mi><mrow><msub><mi>β</mi><mi>n</mi></msub><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Al resolver a la vez las dos condiciones iniciales, el modo temporal es <math display=\"block\"><mrow><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>F</mi><mi>n</mi></msub><mfrac><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>F</mi><mi>n</mi></msub><mfrac><msub><mi>t</mi><mn>0</mn></msub><mi>t</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El coeficiente de proyección es correcto. [CORREGIDO: la fórmula enmarcada del papel conserva solo el coseno; así reproduce <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>δ</mi></mrow></math> pero da una derivada no nula. Se añade <span class=\"j-mat-luzea\"><math display=\"inline\"><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>t</mi><msub><mi>t</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msub><mi>ω</mi><mi>n</mi></msub></mfrac></math></span> para cumplir <math display=\"inline\"><mrow><msub><mi>μ</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo>,</mo><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>.] La serie recupera la constante en el interior y <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></math> tiende a cero en el contorno. Véase <code>koadernoa_metodo_n2_p035.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Temperatura estacionaria en un disco y en una corona",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> en el disco, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math>, y en el círculo interior <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>b</mi></mrow></math> <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>φ</mi><mo>≤</mo><mi>π</mi></mrow></math> cuando y <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><mi>π</mi><mo>&lt;</mo><mi>φ</mi><mo>&lt;</mo><mn>2</mn><mi>π</mi></mrow></math> cuando. El laplaciano polar es <math display=\"inline\"><mrow><msub><mi>μ</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><msub><mi>μ</mi><mi>r</mi></msub><mi>r</mi></mfrac><mo>+</mo><mfrac><msub><mi>μ</mi><mrow><mi>φ</mi><mi>φ</mi></mrow></msub><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La serie de Fourier del dato del contorno interior es <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mi>π</mi></mfrac><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></mrow></munder><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></mrow></math>. La solución interior, regular en el centro:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>μ</mi><mo>∈</mo></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mi>π</mi></mfrac><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></mrow></munder><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>r</mi><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>r</mi><mo>&lt;</mo><mi>b</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No hay término constante; también por la propiedad del valor medio, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la media de los valores <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>1</mn></math> de las dos semicircunferencias: <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En la corona, definamos <math display=\"inline\"><mrow><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mrow><msup><mi>r</mi><mi>n</mi></msup><mo>−</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><msup><mi>r</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></mrow><mrow><msup><mi>b</mi><mi>n</mi></msup><mo>−</mo><msup><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msup><msup><mi>b</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></mrow></mfrac></mrow></math>; entonces <math display=\"inline\"><mrow><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. La solución que cumple los dos contornos"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>μ</mi><mtext mathvariant=\"normal\">out</mtext></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>r</mi><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>a</mi><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>−</mo><mfrac><mn>4</mn><mi>π</mi></mfrac><munder><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow></mrow></munder><msub><mi>H</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>b</mi><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fotografía termina en el ansatz de separación de variables; la página siguiente empieza otro ejercicio. Aquí el resultado se ha completado a partir de los datos de contorno y verificado directamente. En los saltos <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>π</mi></mrow></math> la serie converge a la media de los dos lados, cero. Véase <code>koadernoa_metodo_n2_p036.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 1,
   "izenburua": "EDP hiperbólica: coordenadas características",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La ecuación es <math display=\"block\"><mrow><mi>y</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>a</mi><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>. Con la convención <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>. Es hiperbólica cuando <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>, parabólica en la recta <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, y totalmente degenerada en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La ecuación característica se factoriza como <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>y</mi><mo>−</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>+</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; los dos invariantes"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>ξ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El jacobiano es <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sustituyendo las derivadas, la ecuación se convierte en <math display=\"block\"><mrow><mi>−</mi><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ξ</mi><msub><mi>U</mi><mi>η</mi></msub><mo>=</mo><msup><mrow><mi>η</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>. Cuando <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mn>2</mn><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mi>−</mi><mi>η</mi></mrow></math>, y la integración general"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>,</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>η</mi><mn>2</mn></msup><mfrac><mi>ξ</mi><mn>4</mn></mfrac><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Imponer <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> sobre <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>s</mi><mn>5</mn></msup><mn>20</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>. Pero de <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> a <math display=\"inline\"><mi>Q</mi></math> no puede haber una única función a la vez para las ramas <math display=\"inline\"><mrow><mi>x</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>. En la rama <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math>; en la rama <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>+</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math>. En el origen se convierte en curva característica/degenerada."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>1</mn></mrow></math>, poniendo <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>U</mi><mi>η</mi></msub></mrow></math> queda una ecuación lineal de primer orden; el factor integrante es <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>η</mi><mo>−</mo><msup><mi>ξ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mn>1</mn><mo>−</mo><mi>a</mi></mrow><mn>2</mn></mfrac></msup></math>, y se puede resolver por cuadraturas."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la solución final del papel con <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math> solo satisface los datos en la rama <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>; para <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></math> se necesita el signo opuesto.] <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> es una curva característica: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> exige que <math display=\"inline\"><mi>Q</mi></math> sea constante, pero <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> necesitaría <math display=\"inline\"><mrow><msup><mi>F</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup></mrow></math>, imposible en un intervalo entero. Véase <code>koadernoa_metodo_n2_p037.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Forma canónica de las EDP hiperbólicas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la ecuación <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>D</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mi>E</mi><msub><mi>u</mi><mi>y</mi></msub><mo>+</mo><mi>F</mi><mi>u</mi><mo>=</mo><mi>G</mi></mrow></math></span>, tomando <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>η</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, los coeficientes de segundo orden"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mi>A</mi><msubsup><mi>ξ</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><mi>B</mi><msub><mi>ξ</mi><mi>x</mi></msub><msub><mi>ξ</mi><mi>y</mi></msub><mo>+</mo><mi>C</mi><msubsup><mi>ξ</mi><mi>y</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mi>A</mi><msubsup><mi>η</mi><mi>x</mi><mn>2</mn></msubsup><mo>+</mo><mi>B</mi><msub><mi>η</mi><mi>x</mi></msub><msub><mi>η</mi><mi>y</mi></msub><mo>+</mo><mi>C</mi><msubsup><mi>η</mi><mi>y</mi><mn>2</mn></msubsup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>A</mi><msub><mi>ξ</mi><mi>x</mi></msub><msub><mi>η</mi><mi>x</mi></msub><mo>+</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mi>x</mi></msub><msub><mi>η</mi><mi>y</mi></msub><mo>+</mo><msub><mi>ξ</mi><mi>y</mi></msub><msub><mi>η</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>C</mi><msub><mi>ξ</mi><mi>y</mi></msub><msub><mi>η</mi><mi>y</mi></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "son. Los de primer orden son <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>A</mi><msub><mi>ξ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>ξ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>ξ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>D</mi><msub><mi>ξ</mi><mi>x</mi></msub><mo>+</mo><mi>E</mi><msub><mi>ξ</mi><mi>y</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>A</mi><msub><mi>η</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>B</mi><msub><mi>η</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>C</mi><msub><mi>η</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>D</mi><msub><mi>η</mi><mi>x</mi></msub><mo>+</mo><mi>E</mi><msub><mi>η</mi><mi>y</mi></msub></mrow></math>. Al elegir <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> resultan las dos familias características."
    },
    {
     "mota": "testua",
     "html": "En el caso <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>η</mi><mn>2</mn></msup><mo>−</mo><msup><mi>ξ</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>η</mi><msub><mi>U</mi><mi>ξ</mi></msub><mo>−</mo><mn>2</mn><mi>ξ</mi><msub><mi>U</mi><mi>η</mi></msub><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por otro lado, en el ejercicio 23, con <math display=\"block\"><mrow><mi>y</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, usando <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mi>−</mi><mfrac><mi>η</mi><mn>2</mn></mfrac></mrow></math>. La solución general es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><msup><mi>η</mi><mn>2</mn></msup><mfrac><mi>ξ</mi><mn>4</mn></mfrac><mo>+</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en la llamada «versión correcta», de <math display=\"inline\"><mrow><msup><mi>F</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac></mrow></math> se obtiene <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>s</mi><mn>5</mn></msup><mn>20</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>, no <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>s</mi><mn>5</mn></msup><mn>20</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>.] Para cumplir los dos datos de <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> en la rama <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> se necesita <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>η</mi><mfrac><mn>5</mn><mn>2</mn></mfrac></msup><mn>5</mn></mfrac><mo>−</mo><mi>C</mi></mrow></math>; en la rama <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mn>0</mn></mrow></math> el signo se invierte. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> es una curva característica, y no puede llevar los dos datos arbitrarios de Cauchy."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Tres ejemplos de coordenadas características",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la primera ecuación, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>4</mn><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> son los invariantes. La ecuación se convierte en <math display=\"inline\"><mrow><mn>25</mn><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>5</mn><msub><mi>U</mi><mi>η</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>5</mn></mfrac></msup><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la segunda, <math display=\"inline\"><mrow><mn>4</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>5</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>p</mi></msub><mo>=</mo><mn>2</mn><mi>y</mi></mrow></math> es particular. Las raíces características son <math display=\"inline\"><mn>1</mn></math> y <math display=\"inline\"><mfrac><mn>1</mn><mn>4</mn></mfrac></math>; por tanto, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>. Para la parte homogénea <math display=\"inline\"><mrow><mi>−</mi><mn>9</mn><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>U</mi><mi>ξ</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mfrac><mrow><mi>y</mi><mo>−</mo><mi>x</mi></mrow><mn>3</mn></mfrac></msup><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la tercera ecuación se toman <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>y</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>. Como el jacobiano es <math display=\"inline\"><mi>x</mi></math>, el cambio solo es válido en la región <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>. Ahí <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en el segundo ejemplo la característica escrita <math display=\"inline\"><mrow><mi>y</mi><mo>−</mo><mn>4</mn><mi>x</mi></mrow></math> no corresponde a la raíz <math display=\"inline\"><mfrac><mn>1</mn><mn>4</mn></mfrac></math>; la invariante correcta es <math display=\"inline\"><mrow><mn>4</mn><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>.] La tercera EDP es hiperbólica cuando <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>, parabólica <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, para los puntos <math display=\"inline\"><mrow><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>, y totalmente degenerada en el origen."
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Advección-difusión y contornos no homogéneos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El problema es: <math display=\"block\"><mrow><msub><mi>φ</mi><mi>t</mi></msub><mo>=</mo><msub><mi>φ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>φ</mi><mi>x</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>π</mi><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn></mrow></math> y <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mfrac><mi>x</mi><mi>π</mi></mfrac></mrow></math>. Se elige <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mfrac><mi>x</mi><mi>π</mi></mfrac><mo>+</mo><mn>2</mn><mi>t</mi></mrow></math> que cumpla los contornos y el dato inicial y se escribe <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>z</mi><mo>+</mo><mi>v</mi></mrow></math>. Entonces <math display=\"inline\"><mrow><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Pero como <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>−</mo><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mn>2</mn><msub><mi>v</mi><mi>x</mi></msub><mo>=</mo><mn>2</mn><mo>−</mo><mfrac><mn>4</mn><mi>π</mi></mfrac></mrow></math>, la ecuación que queda"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mi>t</mi></msub><mo>=</mo><msub><mi>z</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>z</mi><mi>x</mi></msub><mo>+</mo><mfrac><mn>4</mn><mi>π</mi></mfrac><mo>−</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es. En la separación del operador homogéneo se obtienen <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>; el factor temporal es <math display=\"inline\"><msup><mi>e</mi><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi></mrow></msup></math>. El forzamiento constante <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> debe proyectarse con el peso, y la fórmula de Duhamel da los coeficientes modales."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mn>2</mn><mfrac><mi>x</mi><mi>π</mi></mfrac><mo>+</mo><mn>2</mn><mi>t</mi></mrow></math> satisface los tres datos, pero no la EDP; en el manuscrito falta el término constante <math display=\"inline\"><mrow><mfrac><mn>4</mn><mi>π</mi></mfrac><mo>−</mo><mn>2</mn></mrow></math> en la ecuación de <math display=\"inline\"><mi>z</mi></math>.] En consecuencia, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>φ</mi><mo>=</mo><mi>v</mi></mrow></math> no son solución del problema original."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Ecuación de ondas con extremos fijos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, a la ecuación se le imponen <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La separación <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mi>T</mi></mrow></math> da <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><mi>λ</mi><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. Los modos no triviales de Dirichlet son <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>n</mi><mi>π</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mi>n</mi><mi>π</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Conservando la notación de la página, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>c</mi><mi>n</mi><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. La ortogonalidad da <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>δ</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mrow></math></span>."
    },
    {
     "mota": "oharra",
     "titulua": "Compatibilidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para una solución clásica hace falta <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y, con regularidad suficiente, también <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Los nombres <math display=\"inline\"><mfrac><mi>A</mi><mi>B</mi></mfrac></math> de los coeficientes están al revés de lo habitual, pero el cálculo de la página es internamente coherente."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Onda forzada con contornos mixtos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>V</mi><mo>+</mo><mi>w</mi><mo>+</mo><mi>z</mi></mrow></math> y eligiendo <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>V</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>V</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>V</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>7</mn><mi>.</mi></mrow></math></span>"
    },
    {
     "mota": "testua",
     "html": "Los modos son <math display=\"inline\"><mrow><msub><mi>k</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>C</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>D</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>x</mi><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>56</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><mn>32</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac></mrow></math></span>. La norma es <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><msubsup><mi>X</mi><mi>n</mi><mn>2</mn></msubsup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>. La serie reconstruye la EDP, los dos contornos y los dos datos iniciales en el sentido de Fourier."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los dos coeficientes de la página se confirman con un cálculo independiente; no ha hecho falta forzar ninguna corrección matemática."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Difusión radial del calor en una esfera",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Con simetría radial, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mfrac><mn>2</mn><mi>r</mi></mfrac><msub><mi>T</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>R</mi></mrow></math>. Se toman la condición superficial <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y la regularidad en el centro; el dato inicial es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mfrac><mi>R</mi><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "En la sustitución <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>r</mi><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>T</mi><mi>r</mi></msub><mo>=</mo><mfrac><msub><mi>S</mi><mi>r</mi></msub><mi>r</mi></mfrac><mo>−</mo><mfrac><mi>S</mi><msup><mi>r</mi><mn>2</mn></msup></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>=</mo><mfrac><msub><mi>S</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mi>r</mi></mfrac><mo>−</mo><mn>2</mn><mfrac><msub><mi>S</mi><mi>r</mi></msub><msup><mi>r</mi><mn>2</mn></msup></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>S</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>S</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los modos son <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Como el dato inicial es el primer modo,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mfrac><mi>R</mi><mi>r</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mfrac><mi>r</mi><mi>R</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>R</mi><mn>2</mn></msup></mfrac></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El límite en el centro es <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mi>π</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>c</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>R</mi><mn>2</mn></msup></mfrac></mrow></msup></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Composición de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el manuscrito deja el lugar de la condición <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> sin escribir; la solución se completa bajo la lectura natural <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.] La fotografía termina al comienzo de la separación; aquí se ha completado la consecuencia del primer modo."
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Ecuación de Laplace esférica y polinomios de Legendre",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Forma general de un campo armónico con simetría axial"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mi>ℓ</mi></msup><mo>+</mo><msub><mi>B</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mrow><mi>−</mi><mi>ℓ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msub><mi>P</mi><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. En una esfera que contiene el origen, la regularidad exige <math display=\"inline\"><mrow><msub><mi>B</mi><mi>ℓ</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Si la temperatura en la superficie del planeta de radio <math display=\"inline\"><mi>R</mi></math> es <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msub><mi>P</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msub><mi>P</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mrow><mn>3</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, y los demás son cero:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mn>2</mn><mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mn>3</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><msub><mi>P</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La forma equivalente es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>−</mo><mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mn>6</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mfrac><msup><mi>r</mi><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>R</mi><mn>2</mn></msup></mrow></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Recupera exactamente el dato de contorno, y <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>3</mn></mfrac></mrow></math> coincide con la media superficial."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El desarrollo de Legendre, el criterio de regularidad y los coeficientes son correctos; no ha hecho falta forzar ninguna corrección matemática."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 1,
   "izenburua": "Serie de Fourier de una función definida a trozos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, el perfil de la fotografía es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>L</mi></mrow></math> cuando <math display=\"inline\"><mrow><mi>−</mi><mi>L</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>L</mi></mrow></math> cuando <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>. Se usa la convención <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span> de periodo <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Los coeficientes son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mi>L</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>L</mi></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>L</mi><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los coeficientes <math display=\"inline\"><msub><mi>A</mi><mi>n</mi></msub></math> solo son no nulos en los índices impares, y <math display=\"inline\"><msub><mi>B</mi><mi>n</mi></msub></math> solo en los pares. El valor elegido en el punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> no cambia las integrales: la serie converge a la media de los límites laterales, <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math>. En los extremos de la extensión periódica la media de los límites es <math display=\"inline\"><mrow><mn>3</mn><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La media y las dos familias de coeficientes se confirman integrando por partes; no ha hecho falta forzar ninguna corrección matemática."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Periodicidad, paridad y ortogonalidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>T</mi></math> es un periodo; si dos funciones comparten <math display=\"inline\"><mi>T</mi></math>, su suma y su producto también tienen periodo <math display=\"inline\"><mi>T</mi></math>, aunque el periodo fundamental sea menor. El producto de una función par y una impar es impar; el de dos de la misma paridad es par."
    },
    {
     "mota": "testua",
     "html": "Las identidades producto-suma dan la ortogonalidad de las familias de Fourier. En el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Vale <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> cuando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mi>L</mi></math> cuando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>≥</mo><mn>1</mn></mrow></math>, y cero en los demás casos. Análogamente, la integral seno-seno vale <math display=\"inline\"><mi>L</mi></math> cuando <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mi>m</mi><mo>≥</mo><mn>1</mn></mrow></math> y cero en caso contrario; como el producto seno-coseno es impar, siempre es cero."
    },
    {
     "mota": "testua",
     "html": "En el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, las normas coseno-coseno y seno-seno son <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> para los mismos modos positivos; la norma del coseno constante es <math display=\"inline\"><mi>L</mi></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> la familia seno-coseno no es ortogonal para todos los índices; la tabla final del papel es falsa. Por ejemplo, para índices de paridad opuesta la integral puede ser no nula.] La ortogonalidad cruzada automática se da en el intervalo simétrico <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "Ejemplos de series de senos y de cosenos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para el desarrollo impar a partir del semiintervalo, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. En el primer perfil de la fotografía <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><msup><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>. En el tercer perfil <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>L</mi><mo>−</mo><mi>x</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><mi>L</mi><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Coeficiente del cuarto ejemplo"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>L</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>+</mo><mn>4</mn><msup><mi>L</mi><mn>2</mn></msup><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>3</mn></msup><msup><mi>π</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. Para el quinto dato a trozos,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mn>3</mn><mfrac><mi>L</mi><mn>8</mn></mfrac></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mi>L</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac></mrow></math></span>."
    },
    {
     "mota": "oharra",
     "titulua": "Convergencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El valor aislado en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math> no cambia los coeficientes. Las dos series convergen allí a la media de los límites laterales, <math display=\"inline\"><mfrac><mi>L</mi><mn>4</mn></mfrac></math>. Las fórmulas se confirman integrando los cinco cálculos de la fotografía."
      }
     ]
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Ecuación del calor y perfil inicial triangular",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, el perfil inicial del intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> es par: un triángulo de base <math display=\"inline\"><mi>L</mi></math>, altura <math display=\"inline\"><mfrac><mi>L</mi><mn>2</mn></mfrac></math> y área <math display=\"inline\"><mfrac><msup><mi>L</mi><mn>2</mn></msup><mn>4</mn></mfrac></math>. Es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>L</mi><mn>2</mn></mfrac><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> cuando <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mfrac><mi>L</mi><mn>2</mn></mfrac></mrow></math>, y cero en los demás casos."
    },
    {
     "mota": "testua",
     "html": "Los coeficientes de la serie de cosenos son <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mi>L</mi><mn>8</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>L</mi><mn>8</mn></mfrac><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mfrac><mi>t</mi><msup><mi>L</mi><mn>2</mn></msup></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> se recupera el perfil en el sentido de Fourier. El modo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> es constante y conserva la media térmica; cuando <math display=\"inline\"><mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, todos los demás modos se han extinguido y <math display=\"inline\"><mi>u</mi></math> tiende uniformemente a <math display=\"inline\"><mfrac><mi>L</mi><mn>8</mn></mfrac></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La paridad, el área del triángulo y las integrales de cosenos confirman la fórmula completa de la página."
      }
     ]
    }
   ]
  },
  {
   "id": "a51",
   "maila": 2,
   "izenburua": "Problema de Cauchy hiperbólico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>x</mi></mrow></math>. El discriminante es <math display=\"inline\"><mn>1</mn></math>, y los dos invariantes son <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>. El cambio da <math display=\"inline\"><mrow><mi>−</mi><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Integrando dos veces, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ξ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>η</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Los datos iniciales dan <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><msup><mi>s</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><msub><mi>C</mi><mi>B</mi></msub></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><msub><mi>C</mi><mi>A</mi></msub></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>A</mi></msub><mo>+</mo><msub><mi>C</mi><mi>B</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>y</mi><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></mfrac><mo>+</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sobre <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> se obtienen <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mi>x</mi></mrow></math>; sustituir la solución en el operador devuelve <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Equivale a la última línea de la página."
      }
     ]
    }
   ]
  },
  {
   "id": "a52",
   "maila": 2,
   "izenburua": "EDP hiperbólica y función de Green",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación con coeficientes variables"
    },
    {
     "mota": "testua",
     "html": "El símbolo principal de la ecuación de la fotografía tiene discriminante <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. En las regiones <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math> son los invariantes, y el operador se convierte en <math display=\"inline\"><mrow><mi>ξ</mi><mi>η</mi><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>−</mo><mi>ξ</mi><msub><mi>U</mi><mi>ξ</mi></msub></mrow></math>. Como el segundo miembro es <math display=\"inline\"><mrow><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><msub><mi>U</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>−</mo><msub><mi>U</mi><mi>ξ</mi></msub><mo>=</mo><mi>a</mi><mi>η</mi></mrow></math>. Poniendo <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>U</mi><mi>ξ</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>V</mi><mi>η</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>η</mi></msub><mo>=</mo><mfrac><mi>a</mi><mi>η</mi></mfrac></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>x</mi><mi>y</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema de segundo orden y núcleo de Green"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math>, con las condiciones <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>γ</mi><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Una solución homogénea compatible es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por tanto, el núcleo no trivial solo existe cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>−</mi><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow></math>, y la unicidad cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>≠</mo><mi>−</mi><mfrac><mn>3</mn><mn>4</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En el caso <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math>, con la convención <math display=\"inline\"><mrow><mi>L</mi><mi>G</mi><mo>=</mo><mi>δ</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><msup><mi>ξ</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>ξ</mi><mo>−</mo><mn>3</mn></mrow><mrow><mn>6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mi>ξ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mi>ξ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>6</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&gt;</mo><mi>ξ</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el manuscrito cambia <math display=\"inline\"><mi>η</mi></math> por <math display=\"inline\"><mi>ξ</mi></math> al integrar la primera EDP; su familia no satisface la ecuación.] [CORREGIDO: en Green se invierten el signo del salto y un factor; la función escrita arriba cumple las dos fronteras, continuidad y <math display=\"inline\"><mrow><msubsup><mi>G</mi><mo>+</mo><mo>′</mo></msubsup><mo>−</mo><msubsup><mi>G</mi><mo>−</mo><mo>′</mo></msubsup><mo>=</mo><mn>1</mn></mrow></math>.] p058 empieza con ejercicios de probabilidad y no corrige este cálculo."
      }
     ]
    }
   ]
  },
  {
   "id": "a53",
   "maila": 2,
   "izenburua": "Probabilidad total y teorema de Bayes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el ejercicio 5, el enunciado está fuera de la fotografía. Las dos ramas que aparecen en el árbol dan <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⋅</mo><mfrac><mn>1</mn><mn>3</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac></mrow></math>; por tanto, <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>+</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mfrac><mn>5</mn><mn>12</mn></mfrac></mrow></math>. El cálculo es correcto, pero no se puede comprobar si responde a la pregunta que falta."
    },
    {
     "mota": "testua",
     "html": "En el ejercicio 7, la prevalencia de la enfermedad es <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.001</mn></mrow></math>, la sensibilidad <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.95</mn></mrow></math>, y la tasa de falsos positivos <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>¬</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.05</mn></mrow></math>. Por tanto,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.95</mn><mo>⋅</mo><mn>0.001</mn><mo>+</mo><mn>0.05</mn><mo>⋅</mo><mn>0.999</mn><mo>=</mo><mn>0.0509</mn><mo>,</mo></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>0.95</mn><mo>⋅</mo><mn>0.001</mn></mrow><mn>0.0509</mn></mfrac><mo>=</mo><mfrac><mn>19</mn><mn>1018</mn></mfrac><mo>≈</mo><mn>0.01866</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Incluso con un test positivo, la probabilidad a posteriori es aproximadamente <math display=\"inline\"><mrow><mn>1.87</mn><mi>%</mi></mrow></math>, porque la prevalencia de base es muy pequeña."
    },
    {
     "mota": "oharra",
     "titulua": "Composición de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el manuscrito deja en blanco el cociente final de Bayes; se completa con <math display=\"inline\"><mfrac><mn>19</mn><mn>1018</mn></mfrac></math>.] p059 empieza con otro problema."
      }
     ]
    }
   ]
  },
  {
   "id": "a54",
   "maila": 2,
   "izenburua": "Contador Geiger: piones y kaones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el haz, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.9</mn></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.1</mn></mrow></math>. Las probabilidades de detección son <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.95</mn></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.05</mn></mrow></math>. Entonces <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.95</mn><mo>⋅</mo><mn>0.9</mn><mo>+</mo><mn>0.05</mn><mo>⋅</mo><mn>0.1</mn><mo>=</mo><mn>0.86</mn></mrow></math></span>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>D</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>0.855</mn><mn>0.86</mn></mfrac><mo>=</mo><mfrac><mn>171</mn><mn>172</mn></mfrac><mo>≈</mo><mn>0.99419</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La probabilidad de no detección es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0.05</mn><mo>⋅</mo><mn>0.9</mn><mo>+</mo><mn>0.95</mn><mo>⋅</mo><mn>0.1</mn><mo>=</mo><mn>0.14</mn></mrow></math></span>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>¬</mo><mi>D</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>0.095</mn><mn>0.14</mn></mfrac><mo>=</mo><mfrac><mn>19</mn><mn>28</mn></mfrac><mo>≈</mo><mn>0.67857</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: si <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.05</mn></mrow></math>, el complemento es <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>K</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0.95</mn></mrow></math>, no <math display=\"inline\"><mn>0.94</mn></math> como aparece en una rama del papel.] Los dos cocientes de Bayes están sin terminar en la fotografía; aquí se han completado el resultado exacto y los decimales."
      }
     ]
    }
   ]
  },
  {
   "id": "a55",
   "maila": 1,
   "izenburua": "Ecuación de Laplace entre dos esferas concéntricas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En la capa <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math>, con simetría axial, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn></mrow><mrow><mi>∞</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mi>ℓ</mi></msup><mo>+</mo><msub><mi>B</mi><mi>ℓ</mi></msub><msup><mi>r</mi><mrow><mi>−</mi><mi>ℓ</mi><mo>−</mo><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><msub><mi>P</mi><mrow><mi>ℓ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math></span>. Los contornos son <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mo>,</mo><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>,</mo><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por tanto, solo aparecen los modos <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mrow><mi>T</mi><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><msub><mi>r</mi><mn>1</mn></msub></mrow><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>0</mn></msub><mo>−</mo><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>r</mi><mn>1</mn></msub><mfrac><msub><mi>r</mi><mn>2</mn></msub><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>T</mi><mfrac><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mrow><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><mi>T</mi><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup><mfrac><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mrow><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>T</mi><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>0</mn></msub><msub><mi>r</mi><mn>1</mn></msub></mrow><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>0</mn></msub><mo>−</mo><mi>T</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>r</mi><mn>1</mn></msub><mfrac><msub><mi>r</mi><mn>2</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>2</mn></msub><mo>−</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi>T</mi><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mfrac><mi>r</mi><mrow><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup></mrow></mfrac><mo>+</mo><mi>T</mi><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup><mfrac><msubsup><mi>r</mi><mn>2</mn><mn>2</mn></msubsup><mrow><msup><mi>r</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>2</mn><mn>3</mn></msubsup><mo>−</mo><msubsup><mi>r</mi><mn>1</mn><mn>3</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: el papel usa <math display=\"inline\"><msub><mi>r</mi><mn>2</mn></msub></math> donde debía usar <math display=\"inline\"><msub><mi>r</mi><mn>1</mn></msub></math> al despejar <math display=\"inline\"><msub><mi>A</mi><mn>0</mn></msub></math> y mezcla los modos <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ℓ</mi><mo>=</mo><mn>1</mn></mrow></math>.] La fórmula anterior recupera <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> de <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a56",
   "maila": 2,
   "izenburua": "Membrana circular axisimétrica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. La separación da <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><msup><mi>r</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>. La regularidad en el centro elimina <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math>, y el contorno exige <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>A</mi><mi>n</mi></msub><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><msub><mi>α</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde, para los ceros <math display=\"inline\"><msub><mi>α</mi><mi>n</mi></msub></math> de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><msup><mrow><mi>r</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>r</mi></mrow><msub><mi>J</mi><mn>1</mn></msub></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>16</mn><msub><mi>J</mi><mn>3</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msubsup><mi>α</mi><mi>n</mi><mn>3</mn></msubsup><msub><mi>J</mi><mn>1</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La norma utilizada es <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>r</mi><msub><mi>J</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>r</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>. El coseno temporal da velocidad inicial nula, y cada modo cumple el contorno."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con las identidades de Bessel, haciendo dos integraciones, se recupera exactamente el último coeficiente de la página."
      }
     ]
    }
   ]
  },
  {
   "id": "a57",
   "maila": 2,
   "izenburua": "Onda en un sector circular y ecuación de Laplace",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>θ</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn>6</mn></mfrac></mrow></math>, en el sector <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, las condiciones de Dirichlet de la membrana dan <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mfrac><mi>π</mi><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>6</mn><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>. La regularidad en el centro elimina <math display=\"inline\"><msub><mi>Y</mi><mrow><mn>6</mn><mi>k</mi></mrow></msub></math> y el contorno <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math> exige <math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mn>6</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mrow><mn>6</mn><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. Las frecuencias son <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mo>=</mo><mi>v</mi><mfrac><msub><mi>q</mi><mrow><mn>6</mn><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi>a</mi></mfrac></mrow></math>, y la fundamental <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mn>1</mn><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><mi>v</mi><mfrac><msub><mi>q</mi><mrow><mn>6</mn><mo>,</mo><mn>1</mn></mrow></msub><mi>a</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><msub><mi>q</mi><mrow><mn>6</mn><mo>,</mo><mn>1</mn></mrow></msub><mo>≈</mo><mn>9.9361</mn></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mo>∑</mo><mrow><mi>k</mi><mo>,</mo><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></msub><msub><mi>J</mi><mrow><mn>6</mn><mi>k</mi></mrow></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>q</mi><mrow><mn>6</mn><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mfrac><mi>r</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mrow><mi>k</mi><mo>,</mo><mi>n</mi></mrow></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En el segundo problema de la página, la ecuación de Laplace da <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>C</mi><msup><mi>r</mi><mrow><mn>6</mn><mi>k</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>r</mi><mrow><mi>−</mi><mn>6</mn><mi>k</mi></mrow></msup></mrow></math>. Como el dominio incluye el origen, la regularidad impone <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>; la página p065 da la continuación y los coeficientes del contorno."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la reconstrucción temporal final repite dos senos; deben conservarse las dos soluciones independientes coseno y seno.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a58",
   "maila": 2,
   "izenburua": "Problema de Laplace en un sector",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi></mrow></math>, en el sector <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>θ</mi><mo>&lt;</mo><mfrac><mi>π</mi><mn>6</mn></mfrac></mrow></math> es <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mfrac><mi>π</mi><mn>6</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>θ</mi></mrow></math>. Los modos angulares son <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La regularidad en el origen elimina la rama <math display=\"inline\"><msup><mi>r</mi><mrow><mi>−</mi><mn>6</mn><mi>k</mi></mrow></msup></math>."
    },
    {
     "mota": "testua",
     "html": "Coeficiente de la serie de senos de <math display=\"inline\"><mi>θ</mi></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>6</mn></mfrac></msubsup><mi>θ</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow><mrow><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>6</mn></mfrac></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>3</mn><mi>k</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>k</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mrow><mn>3</mn><mi>k</mi></mrow></mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>r</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>6</mn><mi>k</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>k</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La serie da cero en los dos bordes radiales, recupera en <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi></mrow></math> la serie de senos de <math display=\"inline\"><mi>θ</mi></math>, y cada término es armónico."
    },
    {
     "mota": "oharra",
     "titulua": "Continuación comprobada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta página cierra la pregunta de regularidad de p063-p064: la rama singular se elimina explícitamente."
      }
     ]
    }
   ]
  },
  {
   "id": "a59",
   "maila": 2,
   "izenburua": "Hoja breve de fórmulas de probabilidad y estadística",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La fórmula de Bayes es <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>; además, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>∪</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>∩</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En las distribuciones discretas: la media de la binomial es <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi></mrow></math> y la desviación típica <math display=\"inline\"><msqrt><mrow><mi>n</mi><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt></math>; la media de la geométrica es <math display=\"inline\"><mfrac><mn>1</mn><mi>p</mi></mfrac></math> y la varianza <math display=\"inline\"><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac></math>; la media y la varianza de Poisson son <math display=\"inline\"><mi>λ</mi></math>. En la binomial negativa, que cuenta los fracasos antes del <math display=\"inline\"><mi>r</mi></math>-ésimo éxito, la media es <math display=\"inline\"><mfrac><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>p</mi></mfrac></math> y la varianza <math display=\"inline\"><mfrac><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac></math>."
    },
    {
     "mota": "testua",
     "html": "En la uniforme, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi></mrow><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>12</mn></mfrac></mrow></math>; la densidad exponencial es <math display=\"inline\"><mrow><mi>λ</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>x</mi></mrow></msup></mrow></math> cuando <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math>. La densidad de la normal general es <math display=\"inline\"><mfrac><msup><mi>e</mi><mfrac><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mn>2</mn><msup><mi>σ</mi><mn>2</mn></msup></mrow></mfrac></msup><mrow><mi>σ</mi><msqrt><mrow><mn>2</mn><mi>π</mi></mrow></msqrt></mrow></mfrac></math>."
    },
    {
     "mota": "testua",
     "html": "Para una muestra, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>x</mi><mi>i</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>s</mi><mi>n</mi><mn>2</mn></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mn>2</mn></msup></mrow></math>. La esperanza de esta última es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>σ</mi><mn>2</mn></msup></mrow></math>; un estimador insesgado es <math display=\"inline\"><mrow><mi>n</mi><mfrac><msubsup><mi>s</mi><mi>n</mi><mn>2</mn></msubsup><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Correcciones de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la expresión <math display=\"inline\"><mfrac><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac></math> es la varianza binomial negativa, no la desviación típica.] [CORREGIDO: se explicitan los índices de las sumas muestrales y el soporte <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mrow></math> de la exponencial.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a60",
   "maila": 2,
   "izenburua": "Modos normales de una membrana en un sector anular",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>r</mi><mo>&lt;</mo><mi>b</mi></mrow></math>, en el sector <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>φ</mi><mo>&lt;</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> se estudia la ecuación de ondas, con condiciones homogéneas de Dirichlet en los cuatro bordes. Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>F</mi><mo>+</mo><msup><mi>k</mi><mn>2</mn></msup><mi>F</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mi>ω</mi><mi>c</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Las condiciones angulares dan <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Φ</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>φ</mi><msub><mi>φ</mi><mn>0</mn></msub></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mfrac><mi>π</mi><msub><mi>φ</mi><mn>0</mn></msub></mfrac></mrow></math>. La ecuación radial"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>k</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><msubsup><mi>λ</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es; como <math display=\"inline\"><mrow><mi>a</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>J</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>Y</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son ambas admisibles. Las condiciones <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>a</mi><mo>,</mo><mi>b</mi></mrow></math> exigen este determinante:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>Y</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>Y</mi><msub><mi>λ</mi><mi>n</mi></msub></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Sus raíces positivas son <math display=\"inline\"><msub><mi>k</mi><mrow><mi>n</mi><mo>,</mo><mi>j</mi></mrow></msub></math>, y las frecuencias <math display=\"inline\"><mrow><msub><mi>ω</mi><mrow><mi>n</mi><mo>,</mo><mi>j</mi></mrow></msub><mo>=</mo><mi>c</mi><msub><mi>k</mi><mrow><mi>n</mi><mo>,</mo><mi>j</mi></mrow></msub></mrow></math>. El modo radial es una combinación de dos ramas de Bessel, nula en los dos radios."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La reducción de Helmholtz, el espectro angular y el determinante de Bessel coinciden con el cálculo de la fotografía."
      }
     ]
    }
   ]
  },
  {
   "id": "a61",
   "maila": 2,
   "izenburua": "Serie de Fourier de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> es impar; por tanto, solo hay coeficientes de senos. Integrando por partes,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>π</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Poniendo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>, los términos pares desaparecen y los impares dan la serie de Leibniz:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>π</mi><mn>4</mn></mfrac><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>j</mi></msup></mrow><mrow><mn>2</mn><mi>j</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como el punto está dentro de la extensión periódica y es un punto de continuidad, la serie converge exactamente a <math display=\"inline\"><mfrac><mi>π</mi><mn>2</mn></mfrac></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La paridad y la integración confirman las dos identidades de la página."
      }
     ]
    }
   ]
  },
  {
   "id": "a62",
   "maila": 1,
   "izenburua": "Separación de variables: guía en nueve pasos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1. Determinar la EDP lineal, el dominio y las condiciones iniciales y de contorno. 2. Si las condiciones no son homogéneas, homogeneizar o separar la solución particular. 3. Proponer un producto, por ejemplo <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. 4. Sustituir en la EDP y dividir por el producto, para dejar cada variable en un miembro. 5. Igualar los dos miembros a una constante de separación y obtener sistemas de EDO. 6. Resolver el problema espacial e imponer las condiciones de contorno: los autovalores pueden ser exactos o numéricos, como en las ecuaciones de Bessel. 7. Resolver la ecuación temporal para cada autovalor. 8. Por linealidad, superponer todos los modos. 9. Imponer los datos iniciales por ortogonalidad de las autofunciones, calculando los coeficientes de Fourier o de Sturm–Liouville."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mo>∑</mo><mi>n</mi></msub><msub><mi>c</mi><mi>n</mi></msub><msub><mi>X</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msub><mi>T</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>c</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo>∫</mo><mi>f</mi><msub><mi>X</mi><mi>n</mi></msub><mi>w</mi><mi>d</mi><mi>x</mi></mrow><mrow><mo>∫</mo><msubsup><mi>X</mi><mi>n</mi><mn>2</mn></msubsup><mi>w</mi><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Alcance del método",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: una EDP con fuente no queda fuera del método; puede tratarse restando una particular, por expansión modal, Duhamel o Green.] Para tener una base producto completa hacen falta operador, dominio y condiciones compatibles; con tres variables espaciales harán falta tres factores o más."
      }
     ]
    }
   ]
  },
  {
   "id": "a63",
   "maila": 2,
   "izenburua": "Operadores lineales y ejemplos de separación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><msub><mi>∂</mi><mi>t</mi></msub><mo>−</mo><mi>k</mi><msubsup><mi>∂</mi><mi>x</mi><mn>2</mn></msubsup></mrow></math> es lineal: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><mi>L</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "En la ecuación del calor <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, la separación da <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>k</mi><mi>λ</mi><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>. En extremos fríos <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>; en extremos aislados <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. En dominio periódico hacen falta las dos condiciones:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la ecuación de ondas <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><msup><mi>c</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> se obtienen <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>. Para el problema de Laplace en un rectángulo, una elección útil es <math display=\"inline\"><mrow><msup><mi>Y</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>Y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>, para imponer los contornos homogéneos en la dirección <math display=\"inline\"><mi>y</mi></math>."
    },
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>λ</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>. Si la condición de Robin es <math display=\"inline\"><mrow><mi>−</mi><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se convierte en <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Observación metodológica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: la igualdad periódica de las derivadas, que aparece con una interrogación en el papel, es necesaria en el dominio periódico estándar.] Las fuentes no homogéneas pueden tratarse mediante una particular, Duhamel o Green."
      }
     ]
    }
   ]
  },
  {
   "id": "a64",
   "maila": 2,
   "izenburua": "Ecuación del calor: contornos de Dirichlet y de Neumann",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>. En extremos fríos, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, los modos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>, son:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>20</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>40</mn><mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>1</mn><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></mrow></math>: los modos pares son cero y los impares <math display=\"inline\"><mfrac><mn>80</mn><mrow><mi>n</mi><mi>π</mi></mrow></mfrac></math>. Un dato constante es incompatible con el cero de los extremos en las dos esquinas de <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>; la serie da <math display=\"inline\"><mn>20</mn></math> en el interior y <math display=\"inline\"><mn>0</mn></math> en los extremos."
    },
    {
     "mota": "testua",
     "html": "En extremos aislados <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>. Entonces <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></math>, y existe también el modo cero:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>≥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Conservación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El modo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> de Neumann no se extingue: se conserva la media térmica. [CORREGIDO: se explicita la incompatibilidad de esquina del dato <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>20</mn></mrow></math>.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a65",
   "maila": 2,
   "izenburua": "Ecuación del calor en un anillo periódico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Al identificar los extremos <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>L</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, hacen falta <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>X</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El espectro espacial es <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> es el modo constante, y la rama <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> no tiene ningún modo periódico no trivial."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con la convención de la página, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>, y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos condiciones periódicas dan una base completa de cosenos y senos reales; el modo cero conserva la media."
      }
     ]
    }
   ]
  },
  {
   "id": "a66",
   "maila": 2,
   "izenburua": "Ecuación del calor con temperaturas extremas no nulas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El equilibrio lineal"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>x</mi><mi>L</mi></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es. Definiendo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>u</mi><mo>−</mo><msub><mi>u</mi><mi>E</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mi>k</mi><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mi>E</mi></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mrow><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "donde <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. Cuando <math display=\"inline\"><mi>t</mi></math> tiende a infinito todos los modos se extinguen, y solo queda <math display=\"inline\"><msub><mi>u</mi><mi>E</mi></msub></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en una línea intermedia aparece <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>u</mi><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>; el signo correcto es menos. El propio papel usa después <math display=\"inline\"><mrow><mi>f</mi><mo>−</mo><msub><mi>u</mi><mi>E</mi></msub></mrow></math>, por lo que el error no llega al resultado final.]"
      }
     ]
    }
   ]
  },
  {
   "id": "a67",
   "maila": 2,
   "izenburua": "Ecuación de Laplace en un rectángulo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, en el rectángulo <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>y</mi><mo>&lt;</mo><mi>H</mi></mrow></math>, si los datos en los cuatro bordes son <math display=\"inline\"><mrow><msub><mi>f</mi><mn>1</mn></msub><mo>,</mo><msub><mi>f</mi><mn>2</mn></msub><mo>,</mo><msub><mi>f</mi><mn>3</mn></msub><mo>,</mo><msub><mi>f</mi><mn>4</mn></msub></mrow></math>, la linealidad permite escribir <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><mo>+</mo><msub><mi>u</mi><mn>3</mn></msub><mo>+</mo><msub><mi>u</mi><mn>4</mn></msub></mrow></math>: cada <math display=\"inline\"><msub><mi>u</mi><mi>j</mi></msub></math> es armónica, tiene en un borde el dato correspondiente y cero en los otros tres."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, para el dato <math display=\"inline\"><mrow><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el borde <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mn>4</mn></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>B</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>y</mi><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>H</mi><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>n</mi><mi>π</mi><mfrac><mi>L</mi><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>H</mi></msubsup><msub><mi>f</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>y</mi><mi>H</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para el dato <math display=\"inline\"><mrow><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en el borde <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>H</mi></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mn>3</mn></msub><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>C</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>y</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>L</mi><mi mathvariant=\"normal\">sinh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>H</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><msub><mi>f</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los otros dos bordes se obtienen reflejando las coordenadas. La suma es armónica y recupera los cuatro datos."
    },
    {
     "mota": "oharra",
     "titulua": "Compatibilidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para una solución clásica continua, los valores de las funciones de borde en las esquinas deben coincidir. En caso contrario, la serie da la solución en el interior, entendiendo los contornos como límites."
      }
     ]
    }
   ]
  },
  {
   "id": "a68",
   "maila": 2,
   "izenburua": "Problema de Dirichlet en el disco",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>r</mi><mo>&lt;</mo><mi>a</mi></mrow></math> en el disco <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mi>u</mi></math> acotado en el centro. La separación <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> da <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>−</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>. La periodicidad impone <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Las ramas para <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math> son <math display=\"inline\"><msup><mi>r</mi><mi>n</mi></msup></math> y <math display=\"inline\"><msup><mi>r</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></math>; para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mn>1</mn></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>r</mi></mrow></math>. La regularidad en el centro elimina las ramas singulares. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>A</mi><mn>0</mn></msub><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msup><mi>r</mi><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con los coeficientes de Fourier del contorno, <math display=\"inline\"><mrow><msub><mi>A</mi><mn>0</mn></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>π</mi><msup><mi>a</mi><mi>n</mi></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math></span>, y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mrow><mi>π</mi><msup><mi>a</mi><mi>n</mi></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math></span>."
    },
    {
     "mota": "oharra",
     "titulua": "Comprobación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta representación es la forma en serie de la integral de Poisson del disco; cumple explícitamente la acotación en el centro y el contorno periódico."
      }
     ]
    }
   ]
  },
  {
   "id": "a69",
   "maila": 2,
   "izenburua": "Cuerda con extremos fijos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Los modos espaciales son <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>; la ecuación temporal <math display=\"inline\"><mrow><msub><mi>T</mi><msup><mi>n</mi><mo>″</mo></msup></msub><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>c</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msub><mi>T</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>c</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>c</mi><mfrac><mi>t</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los coeficientes son <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>n</mi><mi>π</mi><mi>c</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mfrac><mi>x</mi><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>."
    },
    {
     "mota": "oharra",
     "titulua": "Aclaración de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: las anotaciones <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no son datos de una única ODE modal; los datos se imponen a la suma completa, como hace después el propio manuscrito.] Para una solución clásica hace falta compatibilidad en los extremos."
      }
     ]
    }
   ]
  },
  {
   "id": "a70",
   "maila": 2,
   "izenburua": "Ecuación de Helmholtz en coordenadas polares",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>+</mo><msup><mi>K</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mo>″</mo></msup><mo>+</mo><mi>λ</mi><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>ρ</mi><mn>2</mn></msup><msup><mi>P</mi><mo>″</mo></msup><mo>+</mo><mi>ρ</mi><msup><mi>P</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>K</mi><mn>2</mn></msup><msup><mi>ρ</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>P</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La periodicidad angular da <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mi>n</mi><mn>2</mn></msup></mrow></math>. La solución radial"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><msub><mi>J</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>+</mo><msub><mi>c</mi><mn>2</mn></msub><msub><mi>Y</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>K</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "es; si el centro está en el dominio, la rama <math display=\"inline\"><msub><mi>Y</mi><mi>n</mi></msub></math> se elimina por regularidad. En notación general el orden es <math display=\"inline\"><msqrt><mi>λ</mi></msqrt></math>."
    },
    {
     "mota": "testua",
     "html": "En el bloque inferior de la fotografía aparece la forma de orden cero: <math display=\"inline\"><mrow><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: en la fórmula roja el argumento debe ser la coordenada radial <math display=\"inline\"><mrow><mi>K</mi><mi>ρ</mi></mrow></math>, no <math display=\"inline\"><mrow><mi>K</mi><mi>x</mi></mrow></math>.] p082 vuelve a confirmar ese argumento radial."
      }
     ]
    }
   ]
  },
  {
   "id": "a71",
   "maila": 2,
   "izenburua": "Temperatura estacionaria en un disco",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En régimen estacionario sin fuentes, <math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>. En el disco <math display=\"inline\"><mrow><mi>ρ</mi><mo>&lt;</mo><mi>a</mi></mrow></math> el dato de contorno es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi><mo>=</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "testua",
     "html": "La regularidad en el centro elimina las ramas <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>ρ</mi></mrow></math> y <math display=\"inline\"><msup><mi>ρ</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup></math>. El contorno solo tiene el modo constante y el segundo modo coseno; por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mo>,</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>B</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>ρ</mi><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>ρ</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> es armónica, y eso comprueba directamente la EDP. Poniendo <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mi>a</mi></mrow></math> se recupera <math display=\"inline\"><mrow><mi>A</mi><mo>+</mo><mi>B</mi><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>φ</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Unicidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La ortogonalidad da los coeficientes, y el principio del máximo garantiza que esta solución interior de Dirichlet es única."
      }
     ]
    }
   ]
  },
  {
   "id": "a72",
   "maila": 2,
   "izenburua": "Identidades e integrales de las funciones de Bessel",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las identidades diferenciales estándar son <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>x</mi><mrow><mi>−</mi><mi>ν</mi></mrow></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><msup><mi>x</mi><mi>ν</mi></msup><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. De ellas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><msubsup><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mo>=</mo><mi>ν</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><msubsup><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mo>=</mo><mi>x</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>ν</mi><msub><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "eta"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>J</mi><mrow><mi>ν</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>J</mi><mrow><mi>ν</mi><mo>+</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msubsup><mi>J</mi><mrow><mi>ν</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mo>′</mo></msubsup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>n</mi></math> para enteros pares, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>J</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mfrac><mi>π</mi><mn>2</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>θ</mi></mrow></math></span>; para enteros impares se usa la representación seno-seno correspondiente."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><msub><mi>k</mi><mi>n</mi></msub></math> es un cero positivo de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>, <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>ρ</mi><msub><mi>J</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>d</mi><mi>ρ</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math> y <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mn>1</mn></msubsup><mi>ρ</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>ρ</mi><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mfrac><msub><mi>k</mi><mi>n</mi></msub><msub><mi>k</mi><mi>n</mi></msub></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La solución de la ecuación <math display=\"inline\"><mrow><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><msup><mi>ρ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. El cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>b</mi><mi>x</mi></mrow></math> lleva <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>b</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> a la ecuación de Bessel de orden <math display=\"inline\"><msqrt><mi>a</mi></msqrt></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Condición de la fuente y gráficas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "[CORREGIDO: las dos integrales rojas presuponen, sin decirlo, que <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>k</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>; sin esa hipótesis la primera lleva un término adicional.] La primera gráfica muestra <math display=\"inline\"><mrow><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y oscilaciones amortiguadas; la identificación exacta de la segunda no está comprobada con etiquetas suficientes."
      }
     ]
    }
   ]
  },
  {
   "id": "a73",
   "maila": 1,
   "izenburua": "Del cuaderno (CNmet3) — EDP: separación, Fourier y Green",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 64-65 (unidad 0033): ejercicios (4,5,6) — (4) de la serie de Fourier compleja a la real (cambio de índice n->-n, Euler; para f par d_-n=d_n, serie real 2 d_n cos); (5) desarrollo de cos x en serie de senos (T=pi, omega=2, a_n=0, b_n=8n/(pi(4n^2-1)), comprobado de dos maneras); (6) extensión impar de una función en (-2L,2L) (T=4L, a_n=0, b_n=(1/L)int_0^2L f sin(n pi x/2L)). Figura de la serie de senos de cos x con scipy+CeTZ. Sin correcciones; confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a74",
   "maila": 2,
   "izenburua": "De la serie de Fourier compleja a la real y extensiones impares",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 4: de la serie compleja a la serie real"
    },
    {
     "mota": "testua",
     "html": "Serie de Fourier compleja, partiendo el sumatorio y haciendo en la primera rama el cambio de índice <math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>−</mi><mi>n</mi></mrow></math>: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Coeficiente complejo, separado con la fórmula de Euler: <math display=\"block\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>i</mi><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Si <math display=\"inline\"><mi>f</mi></math> es <strong>par</strong>, la integral del seno se anula; entonces <math display=\"inline\"><msub><mi>d</mi><mi>n</mi></msub></math> es real y <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>. Sustituyendo queda la serie real de cosenos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mn>2</mn><msub><mi>d</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 5: desarrollo de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> en serie de senos"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> se desarrolla en senos en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mi>π</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn></mrow></math>; por ser función impar <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow><mfrac><mi>π</mi><mn>2</mn></mfrac></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo></mrow></math> y de ahí:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Ejercicio 5: serie de senos de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> (rojo, 40 términos) y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (discontinua). La serie reconstruye la extensión impar periódica de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, con oscilaciones de Gibbs en los saltos.",
     "src": "../media/irudiak/1d5cd3b2b3ac038c.svg",
     "zabalera": 251
    },
    {
     "mota": "testua",
     "html": "Para obtener la serie de cosenos la función se extiende de <strong>modo par</strong>; para la de senos, de <strong>modo impar</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 6: extensión impar en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>L</mi><mo>,</mo><mn>2</mn><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Extendiendo la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de modo impar y con periodo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>4</mn><mi>L</mi></mrow></math>: <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>2</mn><mi>L</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>2</mn><mi>L</mi><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Como <math display=\"inline\"><mi>h</mi></math> es impar, todos los <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> del desarrollo se anulan, y los coeficientes de senos:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>L</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (<code>edf/09_sturm_liouville.typ</code> y la base de Fourier): el paso de la serie compleja a la real (<math display=\"inline\"><mrow><mi>n</mi><mo>→</mo><mi>−</mi><mi>n</mi></mrow></math>, Euler, <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><msub><mi>d</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi></mrow></math> para <math display=\"inline\"><mi>f</mi></math> par), el <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> del ejercicio 5 en las dos convenciones (<math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn></mrow></math>, <strong>ambas dan el mismo resultado</strong>, ⭐⭐), y los <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>L</mi></mrow></msubsup><mi>f</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> de la extensión impar del ejercicio 6 se han comprobado de forma independiente. Todo correcto.",
        "<strong>Sin correcciones:</strong> no se ha encontrado ningún error demostrable. No se ha tocado la diferencia entre los factores <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math> de <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> en el ejercicio 4 (se siguieron las dos grafías; el bloque es demasiado compacto para saber a qué paso corresponde); ni el dominio de <math display=\"inline\"><mi>f</mi></math> en el enunciado del ejercicio 6 (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>, integral hasta <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math>), pues no se puede decidir qué lectura es la correcta.",
        "<strong>Fidelidad (confianza media):</strong> en euskera y castellano. De los tres dibujos, el más significativo (el del ejercicio 5) se ha vectorizado; los otros dos (la curva de <code>cos x</code> y la rama descendente de 6.b) no tienen escala, como se explica en el texto. La línea de <math display=\"inline\"><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub></math> está vacía en el original (no se rellenó). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 64-65. Véase <code>koadernoa_metodo_n3_p064.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 66-67 (unidad 0034): cierre del ejercicio 6 (simetría x=L -> armónicos impares sin((2n-1)pi x/2L)), ejercicio 7 f(x)=x en (-pi,pi) (impar, a_n=0, b_n=2(-1)^(n+1)/n) y serie de Leibniz pi/4=sum (-1)^n/(2n+1) (x=pi/2-n), álgebra de la paridad ((-1)^(sigma_1+sigma_2)), y catálogo de las EDP importantes de la física (ondas Delta u=(1/c^2)u_tt hiperbólica, difusión K Delta u=u_t parabólica, Laplace Delta u=0 elíptica, Poisson, Schrödinger). Figura de f(x)=x con scipy+CeTZ. Una corrección con mención (signo de Leibniz - -> +); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a75",
   "maila": 2,
   "izenburua": "Serie de Leibniz y EDP importantes",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio 6: simetría respecto a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La integral de la extensión impar en <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>, cambiando de variable en el intervalo negativo (por la imparidad de la extensión), se convierte en <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. Añadiendo la simetría respecto a <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>L</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mi>L</mi></mrow></math>), solo quedan los armónicos impares: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>x</mi></mrow><mrow><mn>2</mn><mi>L</mi></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo>=</mo><mn>4</mn><mi>L</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 7: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> y la serie de Leibniz"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> es <strong>impar</strong> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, y los coeficientes de senos: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup></mrow><mi>n</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Ejercicio 7: función impar <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>π</mi><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; su serie de senos da en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math> la serie de Leibniz.",
     "src": "../media/irudiak/3d4e74ac2e53c25b.svg",
     "zabalera": 264
    },
    {
     "mota": "testua",
     "html": "Evaluando en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en los pares <math display=\"inline\"><mn>0</mn></math>, en los impares <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow></math>): <math display=\"block\"><mrow><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>2</mn></mrow></msup></mrow><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mo>=</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup></mrow><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo>,</mo></mrow></math> y dividiendo por 2 queda la <strong>serie de Leibniz</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>π</mi><mn>4</mn></mfrac><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow><mrow><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Corrección de la fuente: signo de la serie de Leibniz",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel escribe <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>−</mi><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<strong>menos</strong>). Se ha recogido el <strong>más</strong>: el propio autor, en la página 66, en el enunciado del ejercicio 7, escribió <math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math> sin signo negativo, y la reverificación confirma el signo positivo (con el menos saldría el absurdo <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Álgebra de la paridad"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>f</mi></math> tiene paridad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>σ</mi><mn>1</mn></msub></msup></mrow></math> y <math display=\"inline\"><mi>y</mi></math> tiene paridad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>σ</mi><mn>2</mn></msub></msup></mrow></math> (<math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn></mrow></math> impar, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn></mrow></math> par), el producto tiene paridad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><msub><mi>σ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>σ</mi><mn>2</mn></msub></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><msub><mi>σ</mi><mn>1</mn></msub><mo>+</mo><msub><mi>σ</mi><mn>2</mn></msub></mrow></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> por ejemplo impar <math display=\"inline\"><mi>×</mi></math> impar <math display=\"inline\"><mo>=</mo></math> par, y par <math display=\"inline\"><mi>×</mi></math> impar <math display=\"inline\"><mo>=</mo></math> impar."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDP importantes"
    },
    {
     "mota": "testua",
     "html": "Volviendo a la teoría, las principales ecuaciones en derivadas parciales de la física:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Ecuación de ondas</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub></mrow></math> (<math display=\"inline\"><mi>c</mi></math> velocidad de la onda); en una cuerda (1D) <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>.",
      "<strong>Ecuación de difusión</strong>: <math display=\"inline\"><mrow><mi>K</mi><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math> (<math display=\"inline\"><mi>K</mi></math> conductividad).",
      "<strong>Ecuación de Laplace</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>.",
      "<strong>Ecuación de Poisson</strong>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
      "<strong>Ecuación de Schrödinger</strong>: <math display=\"inline\"><mrow><mi>−</mi><mfrac><msup><mi>ℏ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>+</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>r</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>=</mo><mi>i</mi><mi>ℏ</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac></mrow></math> (<math display=\"inline\"><mi>u</mi></math> función de onda)."
     ]
    },
    {
     "mota": "testua",
     "html": "Las tres primeras son, respectivamente, <strong>hiperbólica</strong>, <strong>parabólica</strong> y <strong>elíptica</strong>, de acuerdo con la clasificación <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi></mrow></math> de las páginas 62-63."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (<code>edf/09_sturm_liouville.typ</code> + Fourier): se han comprobado de forma independiente el cierre del ejercicio 6, los armónicos impares de la simetría <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>L</mi></mrow></math>, el desarrollo de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>+</mo><mn>1</mn></mrow></msup><mi>/</mi><mi>n</mi></mrow></math>, ⭐), la serie de Leibniz (<math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ⭐⭐, evaluando en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>π</mi><mi>/</mi><mn>2</mn></mrow></math>), el álgebra de la paridad y el catálogo de EDP (ondas hiperbólica, difusión parabólica, Laplace elíptica; de acuerdo con la clasificación de las páginas 62-63). Todo correcto.",
        "<strong>Corrección (con mención):</strong> signo de la serie de Leibniz (<math display=\"inline\"><mi>−</mi></math> en lugar de <math display=\"inline\"><mi>+</mi></math>); lo escribió el propio autor en el enunciado, y con el menos resulta el absurdo <math display=\"inline\"><mrow><mi>π</mi><mi>/</mi><mn>4</mn><mo>=</mo><mi>−</mi><mi>π</mi><mi>/</mi><mn>4</mn></mrow></math>.",
        "<strong>Fidelidad (confianza media):</strong> en euskera y castellano. No se han tocado: la relación de paridad junto al dibujo (se lee <code>f(x) = f(-x)</code>, pero el rótulo <code>F. BAKOITIA</code> y <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> piden función impar: sería <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; duda de lectura), el factor <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> delante de <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> (el resultado es correcto) y el denominador <math display=\"inline\"><mi>L</mi></math>/<math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math> del bloque de simetría. No hay etiqueta <code>CN3pN</code>; se han usado las páginas 66-67. Véase <code>koadernoa_metodo_n3_p066.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 68-69 (unidad 0035): método general de separación de variables (ecuación de ondas: X''/X=T''/T=-lambda^2, u_lambda=e^(i lambda(x-t)), problema de S-L) y ecuación del calor con condiciones de contorno no homogéneas (u_t=a^2 u_xx, u(t,0)=T_1, u(t,L)=T_2), homogeneización V=u-g (g(0)=T_1, g(L)=T_2) -> V_t=a^2 V_xx+a^2 g''; desarrollando en autofunciones C_n'+(a n pi/L)^2(C_n+g_n)=0, C_n(0)=f_n-g_n. Figura de la barra de calor con CeTZ. Una corrección con mención (condición inicial f-g, no f+g); confianza media",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a76",
   "maila": 2,
   "izenburua": "Separación de variables y homogeneización de las condiciones de contorno",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método general de separación de variables: la ecuación de ondas"
    },
    {
     "mota": "testua",
     "html": "En la ecuación de ondas, <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, sustituyendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> resulta <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mi>T</mi><mo>=</mo><mi>X</mi><msup><mi>T</mi><mo>″</mo></msup></mrow></math>, y dividiendo por <math display=\"inline\"><mrow><mi>X</mi><mi>T</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><msup><mi>X</mi><mo>″</mo></msup><mi>X</mi></mfrac><mo>=</mo><mfrac><msup><mi>T</mi><mo>″</mo></msup><mi>T</mi></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> De ahí dos ecuaciones ordinarias, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, cuyas soluciones son trigonométricas (o exponenciales equivalentes). La solución fundamental es <math display=\"inline\"><mrow><msub><mi>u</mi><mi>λ</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, y por linealidad <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mo>∑</mo><mi>λ</mi></msub><msub><mi>u</mi><mi>λ</mi></msub></mrow></math>; con las condiciones de contorno adecuadas, es un <strong>problema de Sturm-Liouville</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación del calor con condiciones de contorno no homogéneas"
    },
    {
     "mota": "irudia",
     "oina": "Ejemplo de la ecuación del calor: barra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, con temperaturas fijas <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>T</mi><mn>2</mn></msub></math> en los extremos (condiciones de contorno no homogéneas).",
     "src": "../media/irudiak/a176951b88038d25.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "Se busca la temperatura <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de una barra <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>: <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> Las condiciones de contorno son <strong>no homogéneas</strong>. Para homogeneizar se hace el cambio de variable <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema nuevo y desarrollo en autofunciones"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mi>g</mi></math> es independiente del tiempo, el problema nuevo es: <math display=\"block\"><mrow><msub><mi>V</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> con condiciones de contorno ya homogéneas. Tomando <math display=\"inline\"><mi>g</mi></math> lineal (<math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>), del problema de Sturm-Liouville de la parte homogénea se obtienen <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>0</mn></mrow></math>) y <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Desarrollando todas las funciones en la base ortogonal, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>f</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>g</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>L</mi></msubsup><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. Sustituyendo en la ecuación y en la condición inicial, para cada coeficiente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>C</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>n</mi><mi>π</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Corrección de la fuente: condición inicial",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la condición inicial del problema homogeneizado se ha recogido <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (resta; el papel escribe una vez <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). <strong>El propio autor lo demuestra dos veces</strong>: en la primera línea de la página escribe <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y la conclusión final dice <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msub><mi>f</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> (es decir, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>); ambas solo son compatibles con la resta."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (<code>edf/09_sturm_liouville.typ</code> + Fourier): se han comprobado de forma independiente la separación de variables en la ecuación de ondas (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><msup><mi>T</mi><mo>″</mo></msup><mi>/</mi><mi>T</mi><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>λ</mi></msub><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>), la homogeneización (de <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>g</mi></mrow></math> a <math display=\"inline\"><mrow><msub><mi>V</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>V</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup></mrow></math>, ⭐), el caso <math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, el <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>X</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de Sturm-Liouville, y la ecuación de los coeficientes (<math display=\"inline\"><mrow><msubsup><mi>C</mi><mi>n</mi><mo>′</mo></msubsup><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>, ⭐⭐). Coincide con los autovalores de las páginas 57 y 61. Todo correcto.",
        "<strong>Corrección (con mención):</strong> en la condición inicial <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (el papel, una vez <math display=\"inline\"><mrow><mi>+</mi><mi>g</mi></mrow></math>); demostrado dos veces por el propio autor (primera línea de <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>g</mi></mrow></math> y conclusión final <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>). Nota: en la ecuación <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> <strong>sí</strong> corresponde la suma (no hay que confundirla).",
        "<strong>Fidelidad (confianza media):</strong> principalmente en euskera. El autor pone la marca de dificultad <code>NPI</code> (tercera aparición en el cuaderno, en las páginas 42/52/69), aquí junto al desarrollo en autofunciones del problema homogeneizado. Lecturas parciales (<code>OSO ... GAI GEHIAGO</code>, <code>BERDINTZAK</code> anterior, <code>2 ALDAGAI BATIZ</code>). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 68-69. Véase <code>koadernoa_metodo_n3_p068.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 70-71 (unidad 0036): resolución de la ecuación de los coeficientes (C_n(t)=f_n e^(-kt)-g_n, k=(a n pi/L)^2), desarrollo de Fourier de e^x (T=2, a_n/b_n, serie), integrar/derivar término a término, sum(-1)^n=-1/2 NO ES CIERTO (divergente; Abel/Cesàro), y funciones periódicas con Heaviside (g=sum[theta-theta]e^(x-2n)) + delta de Dirac periódica (delta=1/T+(2/T)sum cos). Figura de la extensión periódica de e^x con CeTZ. Una corrección con mención (dos estrellas: la fórmula de C_n(t) del recuadro no cumple la EDO, resto 2 k g_n; marca NPI del autor junto al error); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a77",
   "maila": 2,
   "izenburua": "Resolución de los coeficientes, desarrollo de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> y delta de Dirac",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Resolución de la ecuación de los coeficientes"
    },
    {
     "mota": "testua",
     "html": "La ecuación anterior <math display=\"inline\"><mrow><msubsup><mi>C</mi><mi>n</mi><mo>′</mo></msubsup><mo>+</mo><mi>k</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>), con la condición inicial <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>, se resuelve con el cambio de variable <math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> (<math display=\"inline\"><mrow><msubsup><mi>D</mi><mi>n</mi><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mi>k</mi><msub><mi>D</mi><mi>n</mi></msub></mrow></math>, por tanto <math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi>n</mi><mfrac><mi>π</mi><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Corrección de la fuente: fórmula del coeficiente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "⭐⭐ El papel escribe en el recuadro <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mn>2</mn><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>. Esa fórmula <strong>cumple la condición inicial, pero no la ecuación diferencial</strong> (al sustituir deja un resto no nulo <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><msub><mi>g</mi><mi>n</mi></msub></mrow></math>). La correcta es <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> (cumple ambas). <strong>El propio autor puso la marca subrayada <code>NPI</code> junto a esa fórmula</strong>: no entendió ese punto, y ahí está precisamente el error."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Desarrollo de Fourier de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando la función <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> en el periodo <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn></mrow></math>, los coeficientes (integrando por partes dos veces): <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mn>1</mn></mrow><mn>1</mn></msubsup><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi><mi>π</mi></mrow><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>,</mo></mrow></math> y la serie <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span>."
    },
    {
     "mota": "irudia",
     "oina": "Extensión periódica de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> (<math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn></mrow></math>): en cada intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el arco <math display=\"inline\"><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi></mrow></msup></math>, con saltos en los extremos.",
     "src": "../media/irudiak/755ebc6feac39898.svg",
     "zabalera": 296
    },
    {
     "mota": "testua",
     "html": "<strong>Integrando</strong> y <strong>derivando</strong> la serie término a término se obtienen los desarrollos de la primitiva de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> y de su derivada. La serie de senos de <math display=\"inline\"><mi>x</mi></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>L</mi><mo>=</mo><mn>1</mn></mrow></math>, página 66). (El papel también saca algunas series numéricas; la lectura de algunas no es segura y no se han recogido.)"
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "<math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>: NO ES CIERTO",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La serie <math display=\"inline\"><mrow><msub><mo>∑</mo><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math> <strong>no es convergente</strong> en el sentido usual (las sumas parciales oscilan entre <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> y <math display=\"inline\"><mn>0</mn></math>); la observación <code>EZ DA EGIA</code> (no es cierto) del autor es correcta. El valor <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> corresponde a la suma de Abel/Cesàro, y <math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aparece al evaluar la serie de Fourier de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (valor medio en el punto de salto). La igualdad es falsa como suma ordinaria, pero correcta como suma generalizada."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Funciones periódicas con Heaviside y delta de Dirac"
    },
    {
     "mota": "testua",
     "html": "La extensión periódica de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> (figura de arriba) se escribe con funciones de Heaviside, ya que el término <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> solo vale <math display=\"inline\"><mn>1</mn></math> en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi></mrow></msup><mi>.</mi></mrow></math> Derivando (la derivada de la exponencial más deltas en los saltos, <math display=\"inline\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>θ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>e</mi><mrow><mi>x</mi><mo>−</mo><mn>2</mn><mi>n</mi></mrow></msup><mi>.</mi></mrow></math> Por último, el desarrollo de la delta de Dirac periódica (en el periodo <math display=\"inline\"><mi>T</mi></math>; por el filtrado <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∫</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>n</mi><mi>x</mi><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac></mrow></math></span>, y porque <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> es par):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>+</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>π</mi><mi>k</mi><mi>x</mi></mrow><mi>T</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (<code>edf/09_sturm_liouville.typ</code> + Fourier): se han comprobado de forma independiente la resolución del coeficiente (con <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math> por <math display=\"inline\"><mrow><msub><mi>D</mi><mi>n</mi></msub><mo>=</mo><msub><mi>C</mi><mi>n</mi></msub><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>, ⭐⭐), <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>/<math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> de <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> (por partes dos veces, ⭐), la serie de senos de <math display=\"inline\"><mi>x</mi></math>, la construcción con Heaviside, la derivada y el peine de Dirac (<math display=\"inline\"><mrow><mi>δ</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∑</mo><mi mathvariant=\"normal\">cos</mi></mrow></math>, ⭐). Todo correcto.",
        "<strong>Corrección (con mención, ⭐⭐):</strong> la fórmula <math display=\"inline\"><mrow><msub><mi>C</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> del recuadro (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>n</mi></msub><mo>−</mo><mn>2</mn><msub><mi>g</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>) no es correcta: cumple la condición inicial pero deja en la EDO el resto <math display=\"inline\"><mrow><mn>2</mn><mi>k</mi><msub><mi>g</mi><mi>n</mi></msub></mrow></math>. La correcta es <math display=\"inline\"><mrow><msub><mi>f</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>k</mi><mi>t</mi></mrow></msup><mo>−</mo><msub><mi>g</mi><mi>n</mi></msub></mrow></math>. El propio autor puso la marca subrayada <code>NPI</code> (marca de dificultad) junto a esa fórmula — ahí está el error.",
        "<strong><math display=\"inline\"><mrow><mo>∑</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>:</strong> el <code>EZ DA EGIA</code> (no es cierto) del autor es correcto (divergente); <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math> es la suma de Abel/Cesàro (observación de arriba).",
        "<strong>Fidelidad (confianza media):</strong> en euskera y castellano. No se han recogido cuatro expresiones numéricas ilegibles de la página 71 (el segundo apartado de una suma, los exponentes de <math display=\"inline\"><mrow><msup><mi>e</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, un denominador de <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sin variable). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 70-71. Véase <code>koadernoa_metodo_n3_p070.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 72-73 (unidad 0037): ejercicio 8, potencia de la onda cuadrada por Parseval (directamente A^2; desde Fourier (8A^2/pi^2)sum 1/(2n+1)^2=A^2, sum 1/(2n+1)^2=pi^2/8); ejercicio 9, desarrollo de Fourier de una función par periódica desde la base (b_n=0, a_n=(2/T)int f cos(n omega x), omega=2pi/T). Figura de la onda cuadrada con CeTZ. Secuencia continua (72, no 82). Dos correcciones con mención (b_2 cos->sin, factor de a_n 1/T->2/T); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a78",
   "maila": 2,
   "izenburua": "Potencia de la onda cuadrada y desarrollo de funciones pares",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 8: potencia de la onda cuadrada (Parseval)"
    },
    {
     "mota": "irudia",
     "oina": "Ejercicio 8: onda cuadrada de amplitud <math display=\"inline\"><mrow><mi>±</mi><mi>A</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> en un periodo completo).",
     "src": "../media/irudiak/5c4b9271e3f45dc4.svg",
     "zabalera": 249
    },
    {
     "mota": "testua",
     "html": "Potencia media de una onda cuadrada de amplitud <math display=\"inline\"><mrow><mi>±</mi><mi>A</mi></mrow></math>, calculada directamente (en un periodo completo <math display=\"inline\"><mrow><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>): <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><msup><mi>v</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><msup><mi>A</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> También se puede calcular desde la serie de Fourier (armónicos impares, coeficientes <math display=\"inline\"><mrow><mn>4</mn><mi>A</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>): elevando al cuadrado, los términos cruzados se anulan por ortogonalidad, y siendo <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math>, como <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><msup><mi>v</mi><mn>2</mn></msup><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mn>16</mn><msup><mi>A</mi><mn>2</mn></msup></mrow><mrow><msup><mi>π</mi><mn>2</mn></msup><mi>T</mi></mrow></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><mrow><mn>8</mn><msup><mi>A</mi><mn>2</mn></msup></mrow><msup><mi>π</mi><mn>2</mn></msup></mfrac><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></mfrac></mrow></math> <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><mn>8</mn></mrow></math> (quitando los pares de <math display=\"inline\"><mrow><mo>∑</mo><mn>1</mn><mi>/</mi><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><mn>6</mn></mrow></math>), el resultado es <math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math>: <strong>los dos caminos coinciden</strong> (identidad de Parseval)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 9: desarrollo de una función par periódica"
    },
    {
     "mota": "testua",
     "html": "Si la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <strong>par</strong> y <math display=\"inline\"><mi>T</mi></math> periódica, los coeficientes de senos se anulan y solo queda la serie de cosenos: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>a</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ω</mi><mo>=</mo><mfrac><mrow><mn>2</mn><mi>π</mi></mrow><mi>T</mi></mfrac><mi>.</mi></mrow></math> Reconstruida desde la base (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">cos</mi><mn>2</mn><mi>x</mi><mo>,</mo><mi mathvariant=\"normal\">sin</mi><mn>2</mn><mi>x</mi><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math></span>), es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>⋅</mo><mn>1</mn><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>…</mi></mrow></math></span>; para una función par <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>. Sustituyendo el argumento <math display=\"inline\"><mrow><mi>n</mi><mi>x</mi></mrow></math> por <math display=\"inline\"><mrow><mi>n</mi><mi>ω</mi><mi>x</mi></mrow></math> se obtiene el periodo <math display=\"inline\"><mi>T</mi></math>. Los coeficientes se extraen con el producto escalar (páginas 49-50):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mrow><mi>−</mi><mfrac><mi>T</mi><mn>2</mn></mfrac></mrow><mfrac><mi>T</mi><mn>2</mn></mfrac></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "incluido <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Correcciones de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dos correcciones con mención: (1) en la combinación lineal de la base <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> (el papel repite <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>; los coeficientes <math display=\"inline\"><mi>b</mi></math> llevan senos, como en la base <math display=\"inline\"><mi>S</mi></math> enumerada por el propio autor y en <math display=\"inline\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>); (2) el factor de <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> es <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> (el papel <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>; el propio autor, dos líneas más abajo, para <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> escribe <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>⋅</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>T</mi></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math>, de acuerdo con la convención <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (Parseval + Fourier): se han comprobado de forma independiente la potencia de la onda cuadrada directamente (<math display=\"inline\"><msup><mi>A</mi><mn>2</mn></msup></math>, ⭐) y desde la serie de Fourier (<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><msup><mi>A</mi><mn>2</mn></msup><mi>/</mi><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∑</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math>, ⭐⭐; términos cruzados por ortogonalidad, <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math>), <math display=\"inline\"><mrow><mo>∑</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><mn>8</mn></mrow></math>, la estructura de la función par y la fórmula <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∫</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Todo correcto; coincide con las páginas 41 y 48.",
        "<strong>Dos correcciones (con mención):</strong> <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> (el papel <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math>) y el factor <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>T</mi></mrow></math> de <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> (el papel <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>T</mi></mrow></math>; el propio autor lo corrige para <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>).",
        "<strong>Fidelidad (confianza media):</strong> la página izquierda en euskera, la derecha en castellano. El autor escribe <code>MAL COPIADO</code> junto a su primer cálculo (nota para sí mismo, recogida). El <code>8</code> (no <code>3</code>) de <math display=\"inline\"><mrow><mn>8</mn><msup><mi>A</mi><mn>2</mn></msup><mi>/</mi><msup><mi>π</mi><mn>2</mn></msup></mrow></math> solo es compatible con el resultado. Es <strong>secuencia continua</strong>: el número al pie de la página es <code>72</code> (leído al principio como <code>82</code>, corregido por la unidad 0042). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 72-73. Véase <code>koadernoa_metodo_n3_p072.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 74-75 (unidad 0038): origen del término a_0/2 (proyectando f=A+sum(a_n cos+b_n sin) sobre la función constante (1): <f|1>=<A|1>=2 pi A -> A=(1/2pi)int f; coeficiente general con n=0, cos0=1: a_0=(1/pi)int f=2A, b_0=0 -> término constante=a_0/2; porque norm(1)^2=2 pi=2 norm(cos)^2) y de la serie compleja a la real (d_n=(1/T)int f e^(-i n omega x); partiendo el sumatorio en dos ramas, d_(-n)=d_n -> d_0+2 sum d_n cos(n omega t)). Sin figura. Una corrección con mención (d_(-n)=d_n, el papel escribe d_n=-d_n; el signo es del subíndice, no del coeficiente; en general d_(-n)=conj(d_n)) y una corrección de inventario (orden de fotografías=orden de páginas; la anterior nota 'faltan 72-81' era errónea; 0037=72-73, esta 74-75, secuencia continua, confirmada por 0042). Coincide con la página 64. Confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a79",
   "maila": 2,
   "izenburua": "Origen de <math display=\"inline\"><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></math> y de la serie compleja a la real",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Origen del término <math display=\"inline\"><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></math>"
    },
    {
     "mota": "testua",
     "html": "Siendo el producto escalar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mi>g</mi><mi>d</mi><mi>x</mi></mrow></math>, la serie <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>+</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span> se proyecta sobre la función constante (<math display=\"inline\"><mn>1</mn></math>). Los productos de los términos <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math> son nulos, por lo que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>A</mi></mrow></math>, es decir: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>π</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Por otra parte, la fórmula general de los coeficientes, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span> (el papel deja implícito en la línea de <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>π</mi></mrow></math>; aquí se ha restituido, como exige la consecuencia <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>), en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>) da <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mrow><mn>2</mn><mi>π</mi></mrow></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math> (y <math display=\"inline\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, porque <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math>). Por tanto el término constante es <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> termino konstantea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mfrac><msub><mi>a</mi><mn>0</mn></msub><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aparece la mitad porque <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>π</mi><mo>=</mo><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>: la función constante tiene norma doble que los cosenos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "De la serie compleja a la serie real"
    },
    {
     "mota": "testua",
     "html": "En la serie de Fourier compleja, siendo <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>, partiendo el sumatorio en dos ramas y cambiando el índice en la primera: <math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mi>.</mi></mrow></math> Siendo <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>, aplicando la identidad de Euler a cada término, las partes imaginarias se eliminan por parejas y las reales se duplican:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>n</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>d</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Corrección de la fuente: <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel escribe en rojo <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>d</mi><mi>n</mi></msub></mrow></math>; eso obligaría a <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y haría trivial la serie. Lo correcto es <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>: eso permite unir los dos sumatorios y llegar al resultado <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mo>∑</mo><msub><mi>d</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que el propio autor subraya. Es un desplazamiento de símbolo (el signo corresponde al subíndice, no al coeficiente). Observación adicional: la igualdad <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> se cumple cuando <math display=\"inline\"><mi>f</mi></math> es <strong>real y par</strong>; en general <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><mover><msub><mi>d</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (Fourier): se han comprobado de forma independiente el origen de <math display=\"inline\"><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>2</mn><mi>π</mi><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>2</mn><mi>A</mi></mrow></math>, ⭐; <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>2</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></mrow></math>), <math display=\"inline\"><mrow><msub><mi>b</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, y el paso de la serie compleja a la real (<math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>+</mo><mn>2</mn><mo>∑</mo><msub><mi>d</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi></mrow></math> por <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math>, ⭐). Coincide con la página 64 (por otro camino). Todo correcto.",
        "<strong>Corrección (con mención):</strong> <math display=\"inline\"><mrow><msub><mi>d</mi><mrow><mi>−</mi><mi>n</mi></mrow></msub><mo>=</mo><msub><mi>d</mi><mi>n</mi></msub></mrow></math> (el papel <math display=\"inline\"><mrow><msub><mi>d</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msub><mi>d</mi><mi>n</mi></msub></mrow></math>); el signo es del subíndice.",
        "<strong>Corrección de inventario:</strong> el orden de las fotografías es el mismo que el de las páginas. La anterior nota &quot;faltan las páginas 72-81&quot; <strong>era errónea</strong>: 0037 = 72-73, esta 74-75, secuencia continua (confirmada por la unidad 0042).",
        "<strong>Fidelidad (confianza media):</strong> en castellano. No se han tocado: <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> de la tercera línea (podría ser una notación provisional, <code>SI b_n</code> al margen), y el sumatorio sin <math display=\"inline\"><msub><mi>d</mi><mi>n</mi></msub></math> de la penúltima línea (error de copia; el resultado final es correcto). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 74-75. Véase <code>koadernoa_metodo_n3_p074.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 76-77 (unidad 0039): derivación de las fórmulas de los coeficientes desde el producto escalar (proyección de f cos(omega x) -> int f cos = a_1 int cos^2; int_0^T cos^2(omega x)=T/2 integrando por partes, I=T-I; a_n=(2/T)int f cos(n omega x), b_n=(2/T)int f sin(n omega x); a_0/2=(1/T)int f; reglas PAR/IMPAR) y dos aplicaciones: (a) f=1 (a_0/2=1, a_n=0) y (5) ejercicio, desarrollo de cos x en (0,pi) con base periódica (a_0/2=0, a_n=0 por paridad; los b_n recuperan la serie de senos de la página 65: cos x=sum 8n/(pi(4n^2-1)) sin(2nx)). Figura de la extensión periódica de cos x con CeTZ (arcos descendentes repetidos, con saltos). Dos correcciones con mención (b_2 sin 2 omega x, el papel b_2 cos omega x, el mismo error de la página 83; signo de la primera integral -sin->sin). Secuencia continua (76-77, continuación de 0038); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a80",
   "maila": 2,
   "izenburua": "Derivación de los coeficientes por el producto escalar y dos aplicaciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Continuación directa de las páginas 74-75: ahora las fórmulas de los coeficientes <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> y <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> se derivan del producto escalar, usando el cálculo auxiliar <math display=\"inline\"><mrow><mo>∫</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Fórmulas de los coeficientes a partir del producto escalar"
    },
    {
     "mota": "testua",
     "html": "Siendo <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>a</mi><mn>0</mn></msub><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>a</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>…</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> la serie de Fourier, se proyecta sobre <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (los demás términos son ortogonales): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> es decir, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La norma <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> se calcula integrando por partes (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mi>/</mi><mn>2</mn><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): el término de borde se anula (porque <math display=\"inline\"><mrow><mi>ω</mi><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>) y sustituyendo <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup></mrow></math></span>, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>−</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Por tanto <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>=</mo><mi>T</mi></mrow></math></span>, es decir:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>T</mi><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En consecuencia, como <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, se obtiene la fórmula general de los coeficientes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>1</mn></mrow></math>) el término constante es <math display=\"inline\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>. El papel subraya en rojo las reglas: los coeficientes <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math> <strong>en la serie general</strong>; en funciones <strong>pares</strong> <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y en <strong>impares</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente: $b_2 sin(2 omega x)$",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel escribe <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> al comienzo de la serie. Lo correcto es <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: los coeficientes <math display=\"inline\"><mi>b</mi></math> van acompañados de senos (el propio autor escribe <math display=\"inline\"><mrow><msub><mi>b</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en la misma línea) y el segundo armónico lleva <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi><mi>x</mi></mrow></math>. <strong>Es el mismo error cometido en la página 83</strong> (<code>koadernoa_metodo_n3_p082.typ</code>), de modo que es un deslizamiento que se repite al copiar la serie, no un caso aislado."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Aplicación: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Para la función constante, siendo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><mn>2</mn><mi>π</mi><mi>/</mi><mi>T</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mn>1</mn><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>T</mi></mfrac><mo>⋅</mo><mi>T</mi><mo>=</mo><mn>1</mn><mo>,</mo></mrow></math> y para <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>2</mn><mi>T</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>n</mi><mi>ω</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>T</mi></msubsup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math> porque <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math></span>. Lo esperable: la función constante <math display=\"inline\"><mn>1</mn></math> ya es su propia serie de Fourier, con un solo término <math display=\"inline\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mn>1</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente: signo de la primera integral",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel escribe <math display=\"inline\"><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>T</mi></msubsup></math> (con signo menos). Lo correcto es sin menos: la primitiva de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>a</mi></mrow></math>, con signo positivo. El resultado <math display=\"inline\"><mn>0</mn></math> que obtiene el autor no cambia, porque el seno se anula en los dos extremos."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio (5): desarrollo de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La función <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> se desarrolla en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con la base de periodo <math display=\"inline\"><mi>π</mi></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). La extensión periódica es <strong>impar</strong>, con saltos en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>k</mi><mi>π</mi></mrow></math>:"
    },
    {
     "mota": "irudia",
     "oina": "Extensión periódica de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (periodo <math display=\"inline\"><mi>π</mi></math>): arcos decrecientes repetidos (<math display=\"inline\"><mrow><mi>+</mi><mn>1</mn><mo>→</mo><mi>−</mi><mn>1</mn></mrow></math>), con saltos en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>k</mi><mi>π</mi></mrow></math>. El primer arco (rojo) es el intervalo fundamental de integración <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; como la función es impar, solo aparecen <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y los senos.",
     "src": "../media/irudiak/9e836d873b97af0a.svg",
     "zabalera": 395
    },
    {
     "mota": "testua",
     "html": "Los coeficientes en el intervalo <math display=\"inline\"><mi>π</mi></math> quedan así: <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> y el término constante <math display=\"block\"><mrow><mfrac><msub><mi>a</mi><mn>0</mn></msub><mn>2</mn></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>π</mi></msubsup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sobre los coeficientes <math display=\"inline\"><msub><mi>a</mi><mi>n</mi></msub></math>, la glosa verde dice que <strong>esa integral no es necesaria</strong>, y tiene razón: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> es impar respecto al punto medio del intervalo, de modo que los coeficientes de cosenos se anulan sin calcularlos. Se comprueba directamente, porque <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math></span> y <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mi>m</mi></math> entero no nulo): <math display=\"block\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mi>π</mi></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≥</mo><mn>1</mn><mi>.</mi></mrow></math> El papel obtiene el mismo resultado con una doble integración por partes: <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn><mo>+</mo><mi>I</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>. Solo sobreviven los coeficientes de senos y recuperan el resultado de la página 65 (<code>koadernoa_metodo_n3_p064.typ</code>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (producto escalar): <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>T</mi><mi>/</mi><mn>2</mn></mrow></math> (⭐ por partes, <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>T</mi><mo>−</mo><mi>I</mi></mrow></math>), <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∫</mo><mi>f</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∫</mo><mi>f</mi></mrow></math> (coincide con la página 74), reglas PAR/IMPAR (en pares <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, en impares <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>). Aplicaciones: <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>1</mn></mrow></math> (⭐ <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>) y ejercicio 5 (<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; ⭐ doble por partes). Todo correcto.",
        "<strong>Dos correcciones (con mención):</strong> (1) <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (el papel <math display=\"inline\"><mrow><msub><mi>b</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; el mismo error de la página 83); (2) en la primera integral el signo (<math display=\"inline\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>→</mo><mi mathvariant=\"normal\">sin</mi></mrow></math>; el resultado <math display=\"inline\"><mn>0</mn></math> no cambia).",
        "<strong>No se han tocado:</strong> el <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> sobrante de <math display=\"inline\"><mi>v</mi></math> y la línea cortada al final de la página 76 (<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>T</mi></msubsup></mrow></math> sin integrando); ambos son dudas de transcripción. Las notas sueltas en torno a <math display=\"inline\"><mi>ω</mi></math> del margen derecho (&quot;para otro <math display=\"inline\"><mi>T</mi></math>&quot;, <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>2</mn><mi>π</mi></mrow></math>) no se han maquetado porque están incompletas.",
        "<strong>Fidelidad (confianza media):</strong> en castellano. No hay etiqueta <code>CN3pN</code>; se han usado las páginas 76-77 (continuación de 0038). Véase <code>koadernoa_metodo_n3_p076.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 78-79 (unidad 0040): cierre del ejercicio (5) (a_n=0 por recursión I=I/4n^2; reglas de paridad par/impar con figura; b_n por doble integración por partes, recursión I=1/n+I/4n^2 -> b_n=8n/(pi(4n^2-1)), coincide con la página 65) y sesión nueva (2014/3/4) ecuación del calor en dos dimensiones (u_t=Delta u en un rectángulo con los cuatro lados a 0C; separación de variables u=XYT -> Sturm-Liouville en cada dirección; base ortogonal multiplicativa sin(n pi x/b)sin(m pi y/a); coeficiente doble por integral doble g_nm). Figuras del dominio rectangular y de la paridad con CeTZ. Corrección encadenada con mención (⭐⭐ término de contorno de la recursión 2/pi n y signo +, y resultado 8n/(pi(4n^2-1)); el papel 1/pi, - y 16n^2/(pi(4n^2+1)) -> 4/pi, no tiende a cero). Comprobado de tres maneras (scipy). Secuencia continua (78-79); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a81",
   "maila": 2,
   "izenburua": "Cierre del ejercicio y ecuación del calor en dos dimensiones",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del ejercicio (5): <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>"
    },
    {
     "mota": "testua",
     "html": "La doble integración por partes de la página anterior deja una recursión: la integral del coeficiente de cosenos depende de sí misma, <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> es decir, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math></span>. Como <math display=\"inline\"><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>≠</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>), la integral se anula y se obtiene <strong>de nuevo</strong> <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El papel resume en rojo las reglas de paridad, con flechas cruzadas: las funciones <strong>pares</strong> no tienen componente de senos, y las <strong>impares</strong> no tienen de cosenos."
    },
    {
     "mota": "irudia",
     "oina": "Reglas de paridad: una función impar (rojo) anula los coeficientes de los cosenos; una par (azul), los de los senos. Por eso la extensión impar de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> solo tiene senos.",
     "src": "../media/irudiak/2f4ad7200ff34288.svg",
     "zabalera": 329
    },
    {
     "mota": "testua",
     "html": "El coeficiente de senos se calcula integrando por partes. Siendo <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>, definamos <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. La primera integración por partes (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mi>n</mi></mrow></math>) da: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>π</mi></msubsup><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>−</mo><mfrac><mi>J</mi><mrow><mn>2</mn><mi>n</mi></mrow></mfrac><mo>,</mo></mrow></math> donde <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><msubsup><mo>∫</mo><mn>0</mn><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. La segunda (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>) da <math display=\"inline\"><mrow><mi>J</mi><mo>=</mo><mi>−</mi><mi>I</mi><mi>/</mi><mn>2</mn><mi>n</mi></mrow></math> (el término de borde se anula, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math></span>). Sustituyendo, queda la recursión: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><mfrac><mn>1</mn><mi>n</mi></mfrac><mo>+</mo><mfrac><mi>I</mi><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> hots </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>2</mn><mrow><mi>π</mi><mi>n</mi></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup></mrow></mfrac><msub><mi>b</mi><mi>n</mi></msub><mi>.</mi></mrow></math> De ahí <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>2</mn><mi>/</mi><mi>π</mi><mi>n</mi></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>=</mo><mn>2</mn><mi>/</mi><mi>π</mi><mi>n</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>8</mn><mi>n</mi></mrow><mrow><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este resultado es igual al enmarcado en la <strong>página 65</strong> (<code>koadernoa_metodo_n3_p064.typ</code>): <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "⭐⭐ Corrección encadenada de la fuente: <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel tiene en esta segunda sesión dos errores encadenados. (1) <strong>En la recursión</strong> escribe <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>1</mn><mi>/</mi><mi>π</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>b</mi><mi>n</mi></msub></mrow></math>; lo correcto es <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>b</mi><mi>n</mi></msub></mrow></math>: el término de contorno vale <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn><mi>n</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>0</mn><mi>π</mi></msubsup><mo>=</mo><mn>2</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (no <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>π</mi></mrow></math>; el propio autor lo escribe bien dos líneas antes, bajo la llave), y el signo es positivo (porque el menos que introduce la segunda integración se compone con el anterior). (2) <strong>En el resultado</strong> escribe <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>16</mn><msup><mi>n</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; despejando la recursión correcta resulta <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. La prueba de la corrección es interna y decisiva: ese valor es el que obtuvo el propio autor <strong>en la página 65</strong>, trece páginas antes; además, el valor del papel no tiende a cero al crecer <math display=\"inline\"><mi>n</mi></math> (sino a <math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mi>π</mi></mrow></math>), lo que es incompatible con la convergencia de la serie de Fourier."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: ecuación del calor en dos dimensiones (separación de variables)"
    },
    {
     "mota": "testua",
     "html": "Sesión nueva (2014/3/4). Se trabaja la ecuación del calor en un rectángulo, con los cuatro lados a <math display=\"inline\"><mrow><mn>0</mn><msup><mi></mi><mo>∘</mo></msup><mi mathvariant=\"normal\">C</mi></mrow></math>: con las condiciones de contorno <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math></span>."
    },
    {
     "mota": "irudia",
     "oina": "Dominio de la ecuación del calor: rectángulo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, con los cuatro lados en <math display=\"inline\"><mrow><mn>0</mn><msup><mi></mi><mo>∘</mo></msup><mi mathvariant=\"normal\">C</mi></mrow></math> (condiciones de contorno homogéneas de Dirichlet).",
     "src": "../media/irudiak/4358ed44336ca238.svg",
     "zabalera": 235
    },
    {
     "mota": "testua",
     "html": "Proponiendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cada variable espacial cumple un problema de Sturm–Liouville con condiciones de Dirichlet; por ejemplo, para <math display=\"inline\"><mi>x</mi></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>X</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Por tanto la base ortogonal es el producto de las dos familias: <math display=\"block\"><mrow><msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mrow><mi>n</mi><mo>,</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><mo>,</mo></mrow></math> y el dato inicial y la solución se desarrollan en esa base: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>,</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>,</mo><mi>m</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el caso unidimensional general, si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>f</mi><mi>n</mi></msub><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, mediante el producto escalar (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>f</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub><mo>=</mo><msub><mi>f</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mi>n</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub></mrow></math>, por ortogonalidad) el coeficiente se obtiene con el peso <math display=\"inline\"><mi>ρ</mi></math>: <math display=\"block\"><mrow><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>f</mi><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mi>n</mi></msub><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>ρ</mi></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><msubsup><mi>y</mi><mi>n</mi><mn>2</mn></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> la misma fórmula vista en la página 56 (<code>koadernoa_metodo_n3_p056.typ</code>). En dos dimensiones, por la ortogonalidad en cada variable, el coeficiente doble es el cociente entre la integral doble y el producto de las dos normas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><mfrac><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msubsup><mo>∫</mo><mn>0</mn><mi>b</mi></msubsup><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>d</mi><mi>y</mi></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mo>∫</mo><mn>0</mn><mi>a</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>m</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mo>∫</mo><mn>0</mn><mi>b</mi></msubsup><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>b</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado</strong> (cierre del ejercicio): <math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> por recursión (<math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mi>I</mi><mi>/</mi><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>⇒</mo><mi>I</mi><mo>=</mo><mn>0</mn></mrow></math>); reglas de paridad (las pares no tienen senos, las impares no tienen cosenos). ⭐⭐ <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> de tres maneras independientes: (i) la recursión por partes, (ii) la reverificación directa <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mn>4</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, (iii) la identidad <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>α</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>β</mi></mrow></math> <math display=\"inline\"><mrow><mo>→</mo><mn>4</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; las tres dan <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, de acuerdo con la página 65, y ninguna con el valor del papel. Todo correcto.",
        "<strong>Dos correcciones encadenadas (con mención):</strong> el término de contorno de la recursión (<math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mi>π</mi><mi>n</mi></mrow></math>, no <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>π</mi></mrow></math>) y el signo (<math display=\"inline\"><mi>+</mi></math>), y en consecuencia el resultado (<math display=\"inline\"><mrow><mn>8</mn><mi>n</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, no <math display=\"inline\"><mrow><mn>16</mn><msup><mi>n</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>n</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>).",
        "<strong>Ecuación del calor 2D:</strong> la separación de variables (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mi>Y</mi><mi>T</mi></mrow></math>) da un problema de Sturm–Liouville en cada dirección, y la base multiplicativa <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>y</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; los coeficientes por ortogonalidad, con integrales dobles. ⭐ No es comprobable la dependencia <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el autovalor (el papel no los escribe; problema planteado pero sin cerrar).",
        "<strong>No se han tocado:</strong> el <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math> del óvalo (el desarrollo es de senos), el exponente desplazado de la segunda línea (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>n</mi><mi>x</mi><mo>→</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>n</mi><mi>x</mi></mrow></math></span>) y la anotación oscura <math display=\"inline\"><mrow><msub><mi>δ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>y</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>; los tres son dudas de transcripción. La fecha está escrita al revés (<code>2014/3/4</code> = 2014/3/4, 4 de marzo).",
        "<strong>Fidelidad (confianza media):</strong> castellano (izquierda) y euskera (derecha). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 78-79. Véase <code>koadernoa_metodo_n3_p078.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 80-81 (unidad 0041): cierre del problema de calor 2D (anulando cada coeficiente u_nm+lambda_nm^2 u_nm=0 -> u_nm=g_nm e^(-lambda_nm^2 t), lambda_nm^2=(n pi/b)^2+(m pi/a)^2); distribución estacionaria (u_t=0 -> Laplace Delta u=0 en el rectángulo, tres lados a 0 y u(0,y)=f(y); separación de variables, y lleva S-L, Y_n=sin(n pi y/a)); y ejemplo COMPLETO de función de Green [(1/x^2)y']'=2x+1, y(1)=y(2)=0: las cuatro condiciones (G(1)=0, G(2)=0, continuidad, salto de la derivada P(s)[G']=1) -> A=(s^3-8)/21, B=(8-s^3)/21, C=(s^3-1)/21, D=-8(s^3-1)/21. Dos figuras con CeTZ: el dominio de Laplace (f(y) a la izquierda) y la función de Green G(x,s) (s=3/2). SIN CORRECCIONES (todo correcto; los cuatro coeficientes de Green reconstruidos, incluido el 21; comprobado con scipy: las condiciones y la reconstrucción del PVC y=int G(x,s)(2s+1)ds coinciden con la solución analítica). Secuencia continua (80-81); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a82",
   "maila": 2,
   "izenburua": "Problema estacionario y ejemplo completo de función de Green",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del problema de calor bidimensional"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo el desarrollo en la ecuación y anulando cada coeficiente por la independencia lineal de la base multiplicativa, queda una ecuación diferencial ordinaria temporal para cada modo: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>+</mo><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mi>t</mi></mrow></msup><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>/</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>. Cada modo se extingue más rápido cuanto mayores son <math display=\"inline\"><mi>n</mi></math> y <math display=\"inline\"><mi>m</mi></math>, como corresponde a la difusión del calor."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo: distribución estacionaria (ecuación de Laplace)"
    },
    {
     "mota": "testua",
     "html": "Al anular la derivada temporal (<math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), la ecuación del calor se reduce a la de Laplace, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>, con una condición de contorno no homogénea: tres lados nulos y el cuarto <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Dominio de la distribución estacionaria: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>; tres lados <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> (negros) y el lado izquierdo <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (rojo). Problema de Laplace con una única condición de contorno no homogénea.",
     "src": "../media/irudiak/1166e33ad40474ef.svg",
     "zabalera": 240
    },
    {
     "mota": "testua",
     "html": "Separando variables, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><msup><mi>X</mi><mo>″</mo></msup><mi>X</mi></mfrac><mo>+</mo><mfrac><msup><mi>Y</mi><mo>″</mo></msup><mi>Y</mi></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><msup><mi>X</mi><mo>″</mo></msup><mi>X</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>Y</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>Y</mi></mfrac><mo>=</mo><msup><mi>λ</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> Como las condiciones homogéneas están en la dirección <math display=\"inline\"><mi>y</mi></math>, ahí se sitúa el problema de Sturm–Liouville: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>Y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>Y</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>Y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>λ</mi><mi>n</mi></msub><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>n</mi><mi>π</mi></mrow><mi>a</mi></mfrac><mi>.</mi></mrow></math> A continuación, todas las funciones se desarrollan en esa base: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>u</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>f</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>y</mi></mrow><mi>a</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo completo de función de Green"
    },
    {
     "mota": "testua",
     "html": "El problema a resolver es <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> (es decir, <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>), con condiciones de contorno <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. La función de Green cumple <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con las condiciones <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La ecuación homogénea, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, da <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>c</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, es decir <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>c</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><mi>d</mi></mrow></math>; por tanto en cada intervalo la forma es <math display=\"inline\"><mrow><mi>A</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi></mrow></math>: <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>C</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>D</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Se imponen las cuatro condiciones:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "(i) <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>A</mi><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mi>−</mi><mi>A</mi></mrow></math>;",
      "(ii) <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>8</mn><mi>C</mi><mo>+</mo><mi>D</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>D</mi><mo>=</mo><mi>−</mi><mn>8</mn><mi>C</mi></mrow></math>;",
      "(iii) continuidad en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>s</mi></mrow></math>: <math display=\"inline\"><mrow><mi>A</mi><msup><mi>s</mi><mn>3</mn></msup><mo>+</mo><mi>B</mi><mo>=</mo><mi>C</mi><msup><mi>s</mi><mn>3</mn></msup><mo>+</mo><mi>D</mi></mrow></math>;",
      "(iv) salto de la derivada: siendo <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>+</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>−</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>1</mn></mrow></math></span>, es decir <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>+</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>−</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math></span>; como <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>3</mn><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow></mrow></math></span>, <math display=\"inline\"><mrow><mn>3</mn><mi>C</mi><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>A</mi><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math>, es decir <math display=\"inline\"><mrow><mi>C</mi><mo>−</mo><mi>A</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>."
     ]
    },
    {
     "mota": "testua",
     "html": "Sustituyendo (i) y (ii) en (iii) resulta <math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; junto con (iv) <math display=\"inline\"><mrow><mn>7</mn><mi>C</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mn>3</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>. De ahí los cuatro coeficientes: <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>=</mo><mfrac><mrow><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup></mrow><mn>21</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>C</mi><mo>=</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>D</mi><mo>=</mo><mi>−</mi><mfrac><mn>8</mn><mn>21</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn></mrow><mn>21</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mrow><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup></mrow><mn>21</mn></mfrac><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn></mrow><mn>21</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mfrac><mn>8</mn><mn>21</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": "Función de Green <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con el ejemplo <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>3</mn><mi>/</mi><mn>2</mn></mrow></math>: dos trozos cúbicos, nulos en los extremos (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math>) y continua en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>s</mi></mrow></math> con salto de la derivada. <math display=\"inline\"><mrow><mi>G</mi><mo>≤</mo><mn>0</mn></mrow></math> en todo el intervalo.",
     "src": "../media/irudiak/91f819325a89936b.svg",
     "zabalera": 254
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (sin correcciones):</strong> cierre del problema de calor (<math display=\"inline\"><mrow><msub><mover><mi>u</mi><mo accent=\"true\">̇</mo></mover><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>+</mo><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>b</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>π</mi><mi>/</mi><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><mo>=</mo><msub><mi>g</mi><mrow><mi>n</mi><mi>m</mi></mrow></msub><msup><mi>e</mi><mrow><mi>−</mi><msubsup><mi>λ</mi><mrow><mi>n</mi><mi>m</mi></mrow><mn>2</mn></msubsup><mi>t</mi></mrow></msup></mrow></math>); problema estacionario (<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mi>y</mi></math> lleva a la variable de Sturm–Liouville, <math display=\"inline\"><mrow><msub><mi>Y</mi><mi>n</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>y</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). ⭐⭐ Función de Green reconstruida de forma independiente: las cuatro condiciones dan <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mi>−</mi><mn>8</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>; <strong>las cuatro coinciden con el manuscrito</strong>, incluido el denominador <code>21</code>. Todo correcto.",
        "<strong>Sin correcciones:</strong> la tercera unidad intermedia no tiene correcciones; todas las expresiones comprobadas son correctas.",
        "<strong>Coherencia:</strong> la condición de salto es la derivada en la página 59 y la construcción por tramos la de la página 58 (<code>koadernoa_metodo_n3_p058.typ</code>); este ejemplo cierra ese desarrollo teórico con un caso numérico completo. La notación <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>s</mi><mn>2</mn></msup></mrow></math> es la forma literal de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<strong>No se han tocado (dudas):</strong> la constante <code>10 c</code> de la primera integración (el contexto sugiere que es <math display=\"inline\"><mi>c</mi></math>); el <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la lista de coeficientes (se puede leer <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>+</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, pero en el <math display=\"inline\"><mi>G</mi></math> final <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mn>3</mn></msup><mo>−</mo><mn>8</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>, correcto); la numeración de los pasos (dos <code>1</code>); la barra doble bajo el sumatorio y <math display=\"inline\"><mn>0</mn></math>.",
        "<strong>Fidelidad (confianza media):</strong> euskera (izquierda) y mezcla (derecha). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 80-81. Véase <code>koadernoa_metodo_n3_p080.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 82-83 (unidad 0042): lista de ejercicios de Green (escrita muy deprisa): (1) aplicando la función de Green de la página anterior la solución y=int_1^x + int_x^2 f(s)G(x,s)ds, valor cerrado comprobado y=x^5/5+x^4/4-(199/140)x^3+34/35; (2) función de Green con condiciones de contorno mixtas [(y'/(x+1))]'=cos x (homogénea y=Ax^2+2Ax+B; salto 1+s; alternativa de Fredholm: Green existe si la homogénea solo tiene solución trivial); (3) problema de autovalores de tipo Euler L[y]=-x^2 y''-x y' (reducción [x y']'=-lambda y/x, x=e^t -> y_tt+lambda y=0, soluciones logarítmicas sin/cos(sqrt(lambda)ln x), espectro positivo). SIN FIGURAS (denso, sin dibujos). SIN CORRECCIONES (muchas dudas de lectura; estructura comprobable maquetada; comprobado con scipy). Numeración de páginas: estas son las verdaderas 82-83 (el '82' leído en 0037 es '72'; secuencia continua confirmada). Confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a83",
   "maila": 2,
   "izenburua": "Ejercicios de Green y problema de autovalores de tipo Euler",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Es una lista de ejercicios de Green escrita muy deprisa, con expresiones superpuestas y líneas incompletas. Se maqueta la estructura comprobable; las dudas de lectura se enumeran en la nota final."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 1: aplicando la función de Green"
    },
    {
     "mota": "testua",
     "html": "Con la función de Green de la página anterior (<code>koadernoa_metodo_n3_p080.typ</code>) y la fuente <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>s</mi><mo>+</mo><mn>1</mn></mrow></math>, la solución se escribe integrando por tramos: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mi>x</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mo>+</mo><msubsup><mo>∫</mo><mi>x</mi><mn>2</mn></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>s</mi><mo>,</mo></mrow></math> donde en la primera integral (<math display=\"inline\"><mrow><mi>s</mi><mo>&lt;</mo><mi>x</mi></mrow></math>) se usa la rama <math display=\"inline\"><mrow><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>2</mn></mrow></math> y en la segunda (<math display=\"inline\"><mrow><mi>s</mi><mo>&gt;</mo><mi>x</mi></mrow></math>) la rama <math display=\"inline\"><mrow><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi></mrow></math>. El planteamiento es correcto."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Resultado comprobado: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los coeficientes numéricos del manuscrito están escritos muy apretados y una lectura (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>137</mn><mi>/</mi><mn>30</mn></mrow></math>, <math display=\"inline\"><mrow><mn>49</mn><mi>/</mi><mn>35</mn></mrow></math>) no concuerda. El valor comprobado de la integral de Green (con scipy y por integración directa) es: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>4</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><mn>199</mn><mn>140</mn></mfrac><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mfrac><mn>34</mn><mn>35</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 2: función de Green con condiciones de contorno mixtas"
    },
    {
     "mota": "testua",
     "html": "El problema es <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>y</mi><mo>′</mo></msup><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> con condiciones de contorno mixtas (la segunda variante lleva <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>). El sistema homogéneo, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msup><mi>y</mi><mo>′</mo></msup><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, da <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>d</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math> (<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>c</mi><mi>/</mi><mn>2</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "La función de Green se construye por tramos: <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>C</mi><mi>x</mi><mo>+</mo><mi>D</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>s</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Las condiciones de contorno (<math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>G</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>) y la continuidad en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>s</mi></mrow></math> ligan los coeficientes; el salto de la derivada es <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>+</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mi>G</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>s</mi><mo>−</mo></msup><mo>,</mo><mi>s</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mi>/</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es decir el salto <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>s</mi></mrow></math> (página 59, <code>koadernoa_metodo_n3_p058.typ</code>)."
    },
    {
     "mota": "oharra",
     "titulua": "⭐ Existencia de Green (alternativa de Fredholm)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La nota que aparece en las glosas —si <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> es un valor propio del problema homogéneo, no existe función de Green— es correcta: la función de Green existe si y solo si el problema homogéneo con las mismas condiciones de contorno solo tiene la solución trivial (página 56, <code>koadernoa_metodo_n3_p056.typ</code>)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La nota enmarcada en rojo en la fuente resume correctamente las tres propiedades en el punto de la fuente: en <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>s</mi></mrow></math> <math display=\"inline\"><mi>G</mi></math> es continua, <math display=\"inline\"><msup><mi>G</mi><mo>′</mo></msup></math> tiene un escalón (<math display=\"inline\"><mrow><mo>∼</mo><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) y <math display=\"inline\"><msup><mi>G</mi><mo>″</mo></msup></math> una delta (<math display=\"inline\"><mrow><mo>∼</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) — lo establecido en la página 58."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 3: problema de autovalores de tipo Euler"
    },
    {
     "mota": "testua",
     "html": "Para el operador <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, la ecuación <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>λ</mi><mi>y</mi></mrow></math> es <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (de tipo Euler). El factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math> lleva a la forma de Sturm–Liouville: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo>=</mo><mi>x</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>ρ</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> El cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup></mrow></math> lleva a coeficientes constantes, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; por tanto las soluciones son logarítmicas: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mi>λ</mi></msqrt><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Si <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>λ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y aparecen soluciones exponenciales reales; en un intervalo acotado con condiciones de Dirichlet no dan ningún modo no trivial, por lo que el espectro es positivo (el manuscrito no cierra la conclusión). La solución del problema no homogéneo desarrollada en la base: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><munder><mo>∑</mo><mi>n</mi></munder><mfrac><msub><mi>f</mi><mi>n</mi></msub><mrow><mi>−</mi><msub><mi>λ</mi><mi>n</mi></msub></mrow></mfrac><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>f</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>φ</mi><mi>n</mi></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> es la fórmula de la página 55 (con <math display=\"inline\"><mrow><mi>τ</mi><mo>=</mo><mn>0</mn></mrow></math>, <code>koadernoa_metodo_n3_p054.typ</code>)."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado:</strong> (1) La estructura de la aplicación de Green es correcta; valor cerrado <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mi>/</mi><mn>4</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>199</mn><mi>/</mi><mn>140</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>34</mn><mi>/</mi><mn>35</mn></mrow></math></span> (comprobado con scipy, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>). (2) Homogénea <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>; salto <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>s</mi></mrow></math>. ⭐ Alternativa de Fredholm (Green existe si el problema homogéneo solo tiene solución trivial). ⭐ Las tres propiedades en el punto de la fuente (<math display=\"inline\"><mi>G</mi></math> continua, <math display=\"inline\"><mrow><msup><mi>G</mi><mo>′</mo></msup><mo>∼</mo><mi>θ</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>G</mi><mo>″</mo></msup><mo>∼</mo><mi>δ</mi></mrow></math>). ⭐ Reducción de Euler <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>′</mo></msup><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><mo>⇒</mo><mover><mi>y</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (soluciones logarítmicas, espectro positivo). Todo correcto en lo comprobable.",
        "<strong>Sin correcciones:</strong> esta doble página está escrita a gran velocidad, con expresiones superpuestas. Siete puntos anómalos dependen de la lectura y no se resuelven; todos se dejan como dudas.",
        "<strong>No se han tocado (dudas):</strong> la segunda primitiva del ejercicio 1 (<math display=\"inline\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> frente a <math display=\"inline\"><mrow><mn>2</mn><mi>s</mi><mo>+</mo><mn>1</mn></mrow></math>) y <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math> frente a <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>8</mn><mo>−</mo><msup><mi>s</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mn>21</mn></mrow></math>; los coeficientes del resultado (<math display=\"inline\"><mrow><mn>137</mn><mi>/</mi><mn>30</mn></mrow></math>, <math display=\"inline\"><mrow><mn>49</mn><mi>/</mi><mn>35</mn></mrow></math>); el denominador del ejercicio 2 (<math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msqrt><mn>2</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); el argumento de los senos del ejercicio 3 (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> frente a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>+</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>) y el primer coeficiente de la línea <math display=\"inline\"><mrow><mi>−</mi><mi>x</mi><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (debería ser <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>). Es la página con más dudas de lectura de todo el intervalo.",
        "<strong>Fidelidad (confianza media):</strong> euskera y castellano mezclados. No hay etiqueta <code>CN3pN</code>; se han usado las páginas 82-83. Numeración de páginas: estas son las verdaderas 82-83 (el <code>82</code> leído en 0037 es <code>72</code>; secuencia continua). Véase <code>koadernoa_metodo_n3_p082.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 84-85 (unidad 0043): resolución COMPLETA de la ecuación del calor por separación de variables (la página más didáctica): u_t=alpha u_xx, u(0,t)=u(L,t)=0, u(x,0)=T. Separación u=X(x)T(t) -> (1/alpha)T'/T=X''/X=lambda; tres casos (lambda>0 y lambda=0 triviales, lambda<0 no nulo); valores propios lambda_n=-n^2 pi^2/L^2, autofunciones sin(n pi x/L); parte temporal T(t)=e^(-alpha(n pi/L)^2 t); desarrollo en serie u=sum b_n e^(...)sin(n pi x/L); por ortogonalidad b_n=2T(1-(-1)^n)/(n pi) (impares). Límite t->infinito = 0 (el enunciado lo pregunta pero no lo responde; explicitado). Figura del decaimiento de la solución con CeTZ (perfiles u(x,t) en el tiempo). Una corrección con mención (en el caso lambda<0 falta la raíz sqrt(-lambda); el propio autor la corrige en el recuadro siguiente). Comprobado con scipy (valores propios, b_n, ortogonalidad, límite t->inf). Secuencia continua (84-85, continuación de 82-83); confianza media",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a84",
   "maila": 2,
   "izenburua": "Resolución completa de la ecuación del calor por separación de variables",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema y separación de variables"
    },
    {
     "mota": "testua",
     "html": "El problema a resolver, por separación de variables: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><mi>α</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><mi>α</mi><mo>&gt;</mo><mn>0</mn></mrow></math> es constante. El enunciado pregunta por el límite <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>. Buscando soluciones de tipo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mi>X</mi><msup><mi>T</mi><mo>′</mo></msup></mrow></math> y <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msup><mi>X</mi><mo>″</mo></msup><mi>T</mi></mrow></math>; sustituyendo en la ecuación y agrupando con el tiempo <math display=\"inline\"><mi>α</mi></math>, <math display=\"block\"><mrow><mfrac><mn>1</mn><mi>α</mi></mfrac><mfrac><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>λ</mi><mi>.</mi></mrow></math> Como cada parte depende de una variable distinta, ambas son la misma constante (<math display=\"inline\"><mi>λ</mi></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Estudio del caso espacial"
    },
    {
     "mota": "testua",
     "html": "La parte espacial es <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>, con las condiciones <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Probando <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>r</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>−</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mi>λ</mi></msqrt></mrow></math>. Tres casos: <math display=\"block\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mo>+</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mo>+</mo><mi>B</mi><mi>x</mi><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mo>&lt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Si <math display=\"inline\"><mrow><mi>λ</mi><mo>≥</mo><mn>0</mn></mrow></math>, las condiciones de contorno solo admiten la solución trivial; por tanto <strong>solo</strong> <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> da soluciones no nulas."
    },
    {
     "mota": "oharra",
     "titulua": "Corrección de la fuente: raíz $sqrt(-lambda)$",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel escribe <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> en la línea intermedia, sin la raíz en el argumento. Lo correcto es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>El propio autor lo corrige dos líneas más abajo</strong>, en el recuadro que cierra la página, donde escribe <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; por tanto es una abreviatura del paso intermedio."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Valores propios y autofunciones"
    },
    {
     "mota": "testua",
     "html": "Imponiendo las condiciones de contorno, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math>; y <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>B</mi><mo>≠</mo><mn>0</mn></mrow></math>), por tanto <math display=\"inline\"><mrow><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>L</mi><mo>=</mo><mi>n</mi><mi>π</mi></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msup><mi>L</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La autofunción está definida salvo una constante multiplicativa (la nota <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>1</mn></mrow></math> o cte del papel)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Parte temporal y solución general"
    },
    {
     "mota": "testua",
     "html": "La parte temporal es <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>−</mo><mi>α</mi><mi>λ</mi><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>; con <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo>+</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math> (el signo negativo garantiza el decaimiento, como corresponde a la difusión). Por superposición, la solución general: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>n</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La condición <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> exige <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math></span>. Extendiendo <math display=\"inline\"><mi>f</mi></math> de modo impar, los coeficientes se calculan por ortogonalidad: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>k</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mi>L</mi><msub><mi>δ</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub></mrow></math> (en el intervalo simétrico; en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sería <math display=\"inline\"><mrow><mi>L</mi><mi>/</mi><mn>2</mn></mrow></math>). El resultado para un dato constante —aunque el manuscrito se interrumpe al pie de la página— es: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>2</mn><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"inline\"><mi>n</mi></math> solo no nulo para los impares."
    },
    {
     "mota": "irudia",
     "oina": "Decaimiento de la solución en el tiempo (<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>L</mi><mo>=</mo><mi>T</mi><mo>=</mo><mn>1</mn></mrow></math>): el dato inicial casi constante (<math display=\"inline\"><mi>T</mi></math>, rojo discontinuo) tiende a <math display=\"inline\"><mn>0</mn></math> al apagarse exponencialmente cada modo. Respuesta: <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> en <math display=\"inline\"><mrow><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math>, porque no hay ningún modo constante (Dirichlet homogéneo).",
     "src": "../media/irudiak/5ac620d70c1f621a.svg",
     "zabalera": 330
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El límite <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math> (pregunta del enunciado)"
    },
    {
     "mota": "testua",
     "html": "Todos los modos se extinguen exponencialmente y no hay modo constante (las condiciones de contorno son de Dirichlet homogéneas), por lo que <math display=\"inline\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Físicamente, la barra se equilibra con la temperatura de sus extremos (<math display=\"inline\"><mn>0</mn></math>). El manuscrito plantea la pregunta al principio pero <strong>no la responde</strong> en estas dos páginas; aquí se explicita."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (scipy):</strong> ⭐ separación de variables (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>α</mi><mo>⋅</mo><msup><mi>T</mi><mo>′</mo></msup><mi>/</mi><mi>T</mi><mo>=</mo><msup><mi>X</mi><mo>″</mo></msup><mi>/</mi><mi>X</mi><mo>=</mo><mi>λ</mi></mrow></math>); los tres casos (<math display=\"inline\"><mrow><mi>λ</mi><mo>≥</mo><mn>0</mn><mo>→</mo></mrow></math> solo trivial; <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn><mo>→</mo></mrow></math> no nulo); ⭐ valores propios <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><mi>−</mi><msup><mi>n</mi><mn>2</mn></msup><msup><mi>π</mi><mn>2</mn></msup><mi>/</mi><msup><mi>L</mi><mn>2</mn></msup></mrow></math> y autofunciones <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (cumplen <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo>−</mo><mi>λ</mi><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>); parte temporal <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>; ortogonalidad <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>L</mi><msub><mi>δ</mi><mrow><mi>n</mi><mi>k</mi></mrow></msub></mrow></math></span>; coeficientes <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (impares); <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi><mo>→</mo><mi>u</mi><mo>→</mo><mn>0</mn></mrow></math>. Todo correcto.",
        "<strong>Una corrección (con mención):</strong> en la línea intermedia del caso <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> falta la raíz <math display=\"inline\"><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi></mrow></math>); el propio autor la corrige en el recuadro siguiente.",
        "<strong>No se han tocado:</strong> el choque de notación entre la variable <math display=\"inline\"><mi>x</mi></math> y la función <math display=\"inline\"><mi>X</mi></math> en el cuadro auxiliar; el cálculo de <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math>, interrumpido al pie de la página (continúa en la página siguiente); el doble uso del símbolo <math display=\"inline\"><mi>T</mi></math> (función temporal <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y temperatura inicial constante <math display=\"inline\"><mi>T</mi></math>). Dudas de transcripción.",
        "<strong>Fidelidad (confianza media):</strong> castellano íntegro. La página más didáctica del intervalo (sin pasos intermedios). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 84-85 (continuación de 82-83). Véase <code>koadernoa_metodo_n3_p084.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 86-87 (unidad 0044): (1) cierre del problema 1: b_n=4T/(n pi) en impares (por ortogonalidad, extensión impar de f=T), solución en serie u=(4T/pi)sum 1/(2k+1) e^(...)sin((2k+1)pi x/L), y límite t->infinito=0 (exponenciales a 0, senos acotados; interpretación física). Se confirma aquí el anuncio de 0043 (b_n y límite). (2) Problema 2 con temperaturas fijas en los extremos (u(0,t)=T_1, u(pi,t)=T_2, u(x,0)=x(pi-x)): homogeneización restando la recta v(x)=((T_2-T_1)/pi)x+T_1, w=u-v-k cumple la misma ecuación homogénea y C.C. nulas (técnica de la página 68). Figura de la homogeneización con CeTZ (parábola inicial + recta v(x) de T_1..T_2). Dos correcciones con mención (signo de w=u-v, el papel +v; signo de w_x; el propio autor usa después la resta). Comprobado con scipy. Secuencia continua (86-87); confianza media",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a85",
   "maila": 2,
   "izenburua": "Respuesta al límite y homogeneización del segundo problema",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del problema 1: coeficientes, serie y límite"
    },
    {
     "mota": "testua",
     "html": "La ortogonalidad deja <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mi>L</mi><mo>=</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>, es decir <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>L</mi></mrow><mi>L</mi></msubsup><mi>T</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math></span>. Extendiendo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>T</mi></mrow></math> de modo impar (periodo <math display=\"inline\"><mrow><mn>2</mn><mi>L</mi></mrow></math>), la integral queda así:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bikoitia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mfrac><mrow><mn>4</mn><mi>T</mi></mrow><mrow><mi>n</mi><mi>π</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bakoitia</mtext></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, conservando solo los índices impares (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></math>), la solución en serie: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>4</mn><mi>T</mi></mrow><mi>π</mi></mfrac><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mn>1</mn><mrow><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>α</mi><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el límite <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>, cada exponencial tiende a <math display=\"inline\"><mn>0</mn></math> y los senos están acotados, por lo que: <math display=\"block\"><mrow><munder><mi mathvariant=\"normal\">lim</mi><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></munder><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Físicamente: una barra unida a algo que mantiene los extremos a temperatura <math display=\"inline\"><mn>0</mn></math> se enfría por completo. La solución, además, sirve para calcular la temperatura en cualquier instante."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "⭐⭐ Confirmación del anuncio de 0043",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la página anterior (<code>koadernoa_metodo_n3_p084.typ</code>) el cálculo de <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> se interrumpió al pie de la página y se anunciaron <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>4</mn><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (impares) y el límite cero. En esta página hay una <strong>confirmación de ambos</strong> escrita por el propio autor: los dos casos (<math display=\"inline\"><mi>n</mi></math> par/impar) y la respuesta en <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi></mrow></math>. La reverificación coincide (scipy)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema 2: temperaturas fijas en los extremos (homogeneización)"
    },
    {
     "mota": "testua",
     "html": "El segundo problema tiene condiciones de contorno no homogéneas: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Homogeneización: dato inicial <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (discontinuo) y temperaturas fijas en los extremos <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>T</mi><mn>2</mn></msub></math> (rojas). Al restar la recta <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (azul) que une <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, las condiciones de contorno pasan a ser homogéneas.",
     "src": "../media/irudiak/98dbe6d77c0b9d25.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "Para obtener <math display=\"inline\"><mrow><msub><mi>T</mi><mn>1</mn></msub><mo>→</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>→</mo><mn>0</mn></mrow></math> se resta una recta que pasa por los puntos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Siendo <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>a</mi><mi>π</mi><mo>+</mo><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi></mrow></math>: <math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>+</mo><msub><mi>T</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> definiendo <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>. Como <math display=\"inline\"><mi>v</mi></math> es lineal e independiente del tiempo, <math display=\"inline\"><mrow><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>: <math display=\"inline\"><mi>w</mi></math> cumple la <strong>misma ecuación homogénea</strong>, ahora con condiciones de contorno nulas: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>2</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Separando variables, <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>λ</mi></mrow></math> (esquema de la página 84, con <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Corrección de la fuente: signo de <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel escribe <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>+</mo><mi>v</mi></mrow></math> (y al desarrollar <math display=\"inline\"><mrow><mi>+</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, también <math display=\"inline\"><mrow><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mi>…</mi></mrow></math>). Lo correcto es la resta, <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>. <strong>El propio autor lo demuestra en dos sitios</strong>: en la línea anterior cuando define <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>, y en las cuatro líneas siguientes cuando usa sistemáticamente la resta (<math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>), obteniendo así los ceros que buscaba. El signo de <math display=\"inline\"><msub><mi>w</mi><mi>x</mi></msub></math> no cambia el resultado, porque luego se usa <math display=\"inline\"><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></math> (la constante desaparece)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (scipy):</strong> ⭐⭐ <math display=\"inline\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mn>2</mn><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (a partir de la extensión impar de <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>T</mi></mrow></math>): <math display=\"inline\"><mn>0</mn></math> en los pares, <math display=\"inline\"><mrow><mn>4</mn><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en los impares; confirma el anuncio de 0043. Solución en serie (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mi>k</mi><mo>+</mo><mn>1</mn></mrow></math>) y ⭐ <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>∞</mi><mo>→</mo><mn>0</mn></mrow></math> (exponenciales a <math display=\"inline\"><mn>0</mn></math>, senos acotados). ⭐ Homogeneización: <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi><mo>⋅</mo><mi>x</mi><mo>+</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> (<math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>); <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> cumple la misma ecuación homogénea y las condiciones de contorno nulas (<math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>). Técnica de la página 68 (<math display=\"inline\"><mrow><msup><mi>v</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math> el caso más sencillo). Todo correcto.",
        "<strong>Dos correcciones (con mención):</strong> <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math> (el papel <math display=\"inline\"><mrow><mi>+</mi><mi>v</mi></mrow></math>) y <math display=\"inline\"><mrow><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mi>π</mi></mrow></math> (el papel <math display=\"inline\"><mi>+</mi></math>); el propio autor usa la resta en las cuatro líneas siguientes.",
        "<strong>No se han tocado:</strong> el sumatorio confuso de la segunda línea; los límites de la segunda integral (<math display=\"inline\"><mrow><mi>−</mi><mi>T</mi></mrow></math>, <math display=\"inline\"><mi>T</mi></math>; el contexto pide <math display=\"inline\"><mrow><mi>−</mi><mi>L</mi></mrow></math>, <math display=\"inline\"><mi>L</mi></math>); el diferencial de la última línea (<code>dt</code>, debería ser <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math>); el <math display=\"inline\"><msub><mi>T</mi><mn>1</mn></msub></math> del sistema de la recta (debería ser <math display=\"inline\"><mrow><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>, el autor lo corrige al lado); la nota de hora al pie de la página (<code>16:3</code>). Todas son lecturas dudosas. El símbolo <math display=\"inline\"><mi>T</mi></math> para la función temporal y para la temperatura.",
        "<strong>Fidelidad (confianza media):</strong> castellano íntegro. No hay etiqueta <code>CN3pN</code>; se han usado las páginas 86-87 (continuación de 84-85). Véase <code>koadernoa_metodo_n3_p086.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 88-89 (unidad 0045): (2) cierre del segundo problema: autovalores lambda=-k^2, autofunciones sin(k x), T(t)=e^(-k^2 t); coeficientes b_k mediante tres integrales (x^2, x, constante) por proyección y ortogonalidad -> solo queda el término cos(n pi)=(-1)^n, solución en serie, u=w+v. (3) problema con fuente exponencial (u_t-u_xx=2e^(3x), 0<x<1/2): solución estacionaria V(x)=-(2/9)e^(3x)+A x+B, B=2/9, A=(4/9)e^(3/2)-4/9 (V(0)=V(1/2)=0, -V''=2e^(3x)). Figura de V(x) con CeTZ. SIN corrección formal (lambda<0 ya con raíz; anomalías en dudas: k in ZZ vs k>=1, (T_1+T_2) vs (T_2-T_1), sumatorio ausente, término libre en V(1/2)). El valor final de b_n NO se ha comprobado de forma independiente (ambigüedad); V(x) sí (scipy). Referencias al margen p.290, p.269. Secuencia continua (88-89); confianza media",
     "hizkuntza": "es"
    }
   ]
  },
  {
   "id": "a86",
   "maila": 2,
   "izenburua": "Cierre del segundo problema y fuente exponencial",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Autovalores y parte temporal del problema 2"
    },
    {
     "mota": "testua",
     "html": "De la separación, <math display=\"inline\"><mrow><msup><mi>T</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La parte espacial es un sistema de EDO de tipo Euler: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>X</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>λ</mi><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Probando <math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>r</mi><mi>x</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>±</mi><msqrt><mi>λ</mi></msqrt></mrow></math>. Tres casos: <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mn>0</mn></mrow></math> (de tipo <math display=\"inline\"><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></math>) y <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>) no cumplen la condición inicial; solo <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> da una solución no trivial, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Las condiciones de contorno imponen <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><msqrt><mrow><mi>−</mi><mi>λ</mi></mrow></msqrt><mi>π</mi><mo>=</mo><mi>k</mi><mi>π</mi></mrow></math> (<math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>X</mi><mi>k</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cada modo es <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tercera condición y coeficientes <math display=\"inline\"><msub><mi>b</mi><mi>k</mi></msub></math>"
    },
    {
     "mota": "testua",
     "html": "Desarrollando el dato inicial (<math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la página 87) en la base: <math display=\"block\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>b</mi><mi>k</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mi>x</mi><mo>−</mo><msub><mi>T</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> proyectando sobre <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y por ortogonalidad, se descompone en tres integrales: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mi>π</mi><mo>=</mo><mi>−</mi><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><msup><mi>x</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>π</mi><mo>−</mo><mfrac><mrow><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub></mrow><mi>π</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mi>x</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><msubsup><mo>∫</mo><mrow><mi>−</mi><mi>π</mi></mrow><mi>π</mi></msubsup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Evaluando en los extremos (<math display=\"inline\"><mrow><mi>±</mi><mi>π</mi></mrow></math>), los términos con <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> se anulan y los términos <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> multiplicados por funciones pares se cancelan entre los extremos; solo queda el término <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><msub><mi>b</mi><mi>n</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>π</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>π</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup><mi>.</mi></mrow></math> La solución es la serie <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow><mi>∞</mi></msubsup><msub><mi>b</mi><mi>k</mi></msub><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y volviendo a la variable original, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi><mo>+</mo><mi>v</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Estado de la fuente: $b_(n)$ y la serie",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El manuscrito escribe en una línea intermedia <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> en lugar de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> de las demás líneas, y en los recuadros finales escribe el término general sin sumatorio en <math display=\"inline\"><mi>k</mi></math>. Ambas son lecturas dudosas: el valor final de <math display=\"inline\"><msub><mi>b</mi><mi>n</mi></msub></math> <strong>no se ha comprobado de forma independiente</strong> (por ambigüedad de resta/suma), y la solución es una serie (con sumatorio), no un solo término. La estructura —proyección, ortogonalidad, las tres integrales y la supervivencia del término <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>— es correcta."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema 3: fuente exponencial y solución estacionaria"
    },
    {
     "mota": "testua",
     "html": "El tercer problema tiene un término fuente exponencial: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn><mrow><mtext mathvariant=\"normal\">, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>&gt;</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>9</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math> Se busca la solución estacionaria <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (independiente del tiempo), que cumpla <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Integrando dos veces, <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi>.</mi></mrow></math> Las condiciones de contorno: <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>/</mi><mn>9</mn><mo>+</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math>; y de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": "Solución estacionaria de la fuente exponencial, en el intervalo <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, que cumple <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>4</mn><mi>/</mi><mn>9</mn></mrow></math>). <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math> equilibra la fuente.",
     "src": "../media/irudiak/1fb244002be919d5.svg",
     "zabalera": 304
    },
    {
     "mota": "testua",
     "html": "Restando <math display=\"inline\"><mi>V</mi></math> el problema se vuelve homogéneo, la misma técnica de la página 87 (<code>koadernoa_metodo_n3_p086.typ</code>); allí la corrección era lineal, aquí exponencial, pero el mecanismo es el mismo."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado:</strong> la ecuación espacial y los tres casos (igual que en la página 84; aquí el autor escribe la raíz desde el principio); autovalores <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>k</mi><mn>2</mn></msup><mi>t</mi></mrow></msup></mrow></math>; la <strong>estructura</strong> de <math display=\"inline\"><msub><mi>b</mi><mi>k</mi></msub></math> (proyección, ortogonalidad, las tres integrales, supervivencia de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>n</mi></msup></mrow></math>). ⭐ Solución estacionaria del problema 3 (scipy): <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mi>B</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mn>4</mn><mi>/</mi><mn>9</mn></mrow></math>; cumple <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>−</mi><msup><mi>V</mi><mo>″</mo></msup><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math>. Ambos correctos.",
        "<strong>Sin corrección formal:</strong> el caso <math display=\"inline\"><mrow><mi>λ</mi><mo>&lt;</mo><mn>0</mn></mrow></math> ya viene con la raíz (frente a la página 84, completado por el propio autor). Los casos descartados (<math display=\"inline\"><msup><mi>e</mi><mrow><msqrt><mi>λ</mi></msqrt><mi>x</mi></mrow></msup></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></math>) son abreviaturas, no errores.",
        "<strong>No comprobados de forma independiente / dudas:</strong> <math display=\"inline\"><mrow><mi>k</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℤ</mi></mrow></math> (lo correcto es <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>1</mn></mrow></math>; el propio autor lo usa desde <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn></mrow></math>); intermedio <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>1</mn></msub><mo>+</mo><msub><mi>T</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> frente a <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mn>2</mn></msub><mo>−</mo><msub><mi>T</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>; falta de sumatorio en los recuadros finales; el término libre de <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (leído <code>4/9</code>, debería ser <math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mn>9</mn><mo>=</mo><mi>B</mi></mrow></math>; pero el <math display=\"inline\"><mi>A</mi></math> que obtiene es correcto). Referencias al margen <code>p.290</code>, <code>p.269</code> (un libro de texto, sin identificar).",
        "<strong>Fidelidad (confianza media):</strong> castellano íntegro. No hay etiqueta <code>CN3pN</code>; se han usado las páginas 88-89. Véase <code>koadernoa_metodo_n3_p088.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CNmet3",
     "xehetasuna": "CNmet3, páginas 90-91 (unidad 0046, ÚLTIMA UNIDAD DEL CUADERNO 46/46): cierre del problema (3): homogeneización w=u-v (cuatro derivadas, w_t-w_xx=0 compensando la fuente; dato lineal w(x,0)=-A x) y separación. (6) Función de Green de la ecuación de Euler y''+(2/x)y'-(1/x^2)y=f(x): H(x,xi) por tramos, forma autoadjunta L y=(x^2 y')', Green existe/única si tau no es del espectro. (7) Problema de autovalores de tipo Euler x^2 y''+2x y'+lambda y=0: y=x^r -> r^2+r+lambda=0 -> r=-1/2 +/- sqrt(1/4-lambda); tres casos (lambda<1/4, =1/4 ln x logarítmico, >1/4 x^(-1/2)(C cos+D sin)(omega ln x)); las C.C. dan C=0 y ecuación trascendente tan(omega ln 2)=2 omega (omega_1~1.89, omega_2~6.69; tipo de la página 45); lambda_n=omega_n^2+1/4; Green espectral G=sum phi_n(s)phi_n(x)/(tau-lambda_n) (página 57). Figura de la ecuación trascendente con CeTZ (ramas de tan vs recta 2 omega, intersecciones). SIN CORRECCIONES (anomalías dependientes de la lectura). Comprobado con scipy (homogeneización, los 3 casos de Euler, tan(omega ln 2)=2 omega). Secuencia continua (90-91); confianza media",
     "hizkuntza": "eu/es"
    }
   ]
  },
  {
   "id": "a87",
   "maila": 2,
   "izenburua": "Cierre del tercer problema y autovalores de tipo Euler",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Cierre del problema 3: homogeneización y separación"
    },
    {
     "mota": "testua",
     "html": "Restando la solución estacionaria anterior, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi><mo>+</mo><mfrac><mn>2</mn><mn>9</mn></mfrac></mrow></math></span> (escríbase <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mfrac><mn>4</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mfrac><mn>4</mn><mn>9</mn></mfrac></mrow></math>), las cuatro derivadas de <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>u</mi><mo>−</mo><mi>v</mi></mrow></math>: <math display=\"block\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>−</mo><mi>A</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>, porque el problema original tiene <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math>. El nuevo dato inicial se simplifica por completo (<math display=\"inline\"><mrow><mn>2</mn><mi>/</mi><mn>9</mn></mrow></math> y las exponenciales se cancelan): <math display=\"block\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>2</mn><mn>9</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mfrac><mn>2</mn><mn>9</mn></mfrac><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>A</mi><mi>x</mi><mo>+</mo><mfrac><mn>2</mn><mn>9</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>−</mi><mi>A</mi><mi>x</mi><mi>.</mi></mrow></math> Queda un dato <strong>lineal</strong>; ese es el objetivo del cambio. El problema homogéneo (<math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>) se resuelve por separación de variables (el mismo esquema de las páginas 84 y 88), y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi><mo>+</mo><mi>v</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Problema 6: función de Green de la ecuación de Euler"
    },
    {
     "mota": "testua",
     "html": "Para la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), la solución se escribe con la función de Green: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msubsup><mo>∫</mo><mn>1</mn><mn>2</mn></msubsup><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>ξ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>H</mi><mo>″</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>H</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>H</mi><mo>=</mo><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, con las condiciones <math display=\"inline\"><mrow><msup><mi>H</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Llevando el operador a la forma autoadjunta, <math display=\"inline\"><mrow><mi>L</mi><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup></mrow></math>, y la función de Green <strong>existe y es única</strong> si <math display=\"inline\"><mi>τ</mi></math> no es del espectro de <math display=\"inline\"><mi>L</mi></math>. El espectro lo da el problema siguiente."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7. Problema de autovalores de tipo Euler"
    },
    {
     "mota": "testua",
     "html": "En la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> probando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mi>r</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>r</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>r</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>±</mo><msqrt><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mi>λ</mi></mrow></msqrt></mrow></math>. Siendo <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mi>λ</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>±</mo><mi>i</mi><mi>ω</mi></mrow></math>. Tres casos: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><msup><mi>x</mi><mi>ω</mi></msup><mo>+</mo><mi>B</mi><msup><mi>x</mi><mrow><mi>−</mi><mi>ω</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>&lt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo>+</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>C</mi><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>D</mi><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi mathvariant=\"normal\">ln</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd></mtr></mtable></mrow><mo>,</mo></mrow></math> donde el último viene de la identidad <math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mi>i</mi><mi>ω</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math>. Los dos primeros casos no dan una solución adecuada; <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math> es el válido. Las condiciones de contorno: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> impone <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>), y la condición en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math> es la ecuación trascendente:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>ω</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las soluciones <math display=\"inline\"><msub><mi>ω</mi><mi>n</mi></msub></math> se obtienen gráficamente, en las intersecciones entre <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la recta <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math>:"
    },
    {
     "mota": "irudia",
     "oina": "Ecuación trascendente <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>ω</mi></mrow></math></span>: ramas de <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (azul, con asíntotas verticales discontinuas en amarillo) y recta <math display=\"inline\"><mrow><mn>2</mn><mi>ω</mi></mrow></math> (roja); las intersecciones dan los autovalores <math display=\"inline\"><msub><mi>ω</mi><mi>n</mi></msub></math> (<math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo></mrow></math> 1,89 y <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>≈</mo></mrow></math> 6,69). Del mismo tipo que la ecuación de la página 45.",
     "src": "../media/irudiak/447a2203f631a1f3.svg",
     "zabalera": 355
    },
    {
     "mota": "testua",
     "html": "Las autofunciones son <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>ω</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, y normalizadas <math display=\"inline\"><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msub><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mi>ρ</mi></msub></mrow></math> (<math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>1</mn></mrow></math>). La función de Green se escribe mediante desarrollo espectral, la fórmula de la página 57 (<code>koadernoa_metodo_n3_p056.typ</code>): <math display=\"block\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>φ</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>τ</mi><mo>−</mo><msub><mi>λ</mi><mi>n</mi></msub></mrow></mfrac><mi>.</mi></mrow></math> Así el cuaderno se cierra enlazado consigo mismo, con lo establecido treinta páginas antes."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (scipy):</strong> ⭐ los cuatro pasos de la homogeneización (<math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>=</mo><msub><mi>u</mi><mi>t</mi></msub></mrow></math>; <math display=\"inline\"><mrow><msub><mi>w</mi><mi>x</mi></msub><mo>=</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>/</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup><mo>−</mo><mi>A</mi></mrow></math>; <math display=\"inline\"><mrow><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msup><mi>e</mi><mrow><mn>3</mn><mi>x</mi></mrow></msup></mrow></math>; <math display=\"inline\"><mrow><msub><mi>w</mi><mi>t</mi></msub><mo>−</mo><msub><mi>w</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>) y el dato lineal <math display=\"inline\"><mrow><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>A</mi><mi>x</mi></mrow></math>. ⭐⭐ Problema 7 (Euler): <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><mo>+</mo><mi>r</mi><mo>+</mo><mi>λ</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>±</mo><msqrt><mrow><mfrac><mn>1</mn><mn>4</mn></mfrac><mo>−</mo><mi>λ</mi></mrow></msqrt></mrow></math>, los tres casos (incluido el <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> logarítmico de <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math> y el de <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msup><mi>x</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> de <math display=\"inline\"><mrow><mi>λ</mi><mo>&gt;</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>, que cumple la EDO); las condiciones de contorno dan <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>ω</mi></mrow></math></span> (<math display=\"inline\"><mrow><msub><mi>ω</mi><mn>1</mn></msub><mo>≈</mo></mrow></math> 1,89 y <math display=\"inline\"><mrow><msub><mi>ω</mi><mn>2</mn></msub><mo>≈</mo></mrow></math> 6,69; del mismo tipo que la página 45); <math display=\"inline\"><mrow><msub><mi>λ</mi><mi>n</mi></msub><mo>=</mo><msubsup><mi>ω</mi><mi>n</mi><mn>2</mn></msubsup><mo>+</mo><mfrac><mn>1</mn><mn>4</mn></mfrac></mrow></math>. Desarrollo espectral de Green (página 57). Todo correcto.",
        "<strong>Sin correcciones:</strong> la cuarta unidad intermedia no tiene correcciones; todas las anomalías dependen de la lectura (líneas apretadas, letra pequeña, signos de igual dobles), no son errores del desarrollo.",
        "<strong>No se han tocado (dudas):</strong> el <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la página 90 (letra minúscula en lugar de <math display=\"inline\"><mi>X</mi></math>) y <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>−</mi><msub><mi>λ</mi><mn>0</mn></msub></mrow></math>; la segunda parte de la condición de <math display=\"inline\"><mi>σ</mi></math> de la página 91; la línea de existencia de <math display=\"inline\"><mi>G</mi></math> (mu/única/espectro); el signo de igual doble del enunciado del problema 7 (<math display=\"inline\"><mrow><mo>=</mo><mi>λ</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); las dos líneas apretadas al pie de la página y <math display=\"inline\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><msub><mi>y</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mn>2</mn></msup></math>. <code>p.290</code>/<code>p.269</code> al margen (de la página anterior).",
        "<strong>Fidelidad (confianza media):</strong> castellano (izquierda) y mezcla (derecha). No hay etiqueta <code>CN3pN</code>; se han usado las páginas 90-91. <strong>Es la última unidad del cuaderno <code>CNmet3</code> (46/46).</strong> Véase"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n3_p090.typ</code>"
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
   "id": "a88",
   "maila": 1,
   "izenburua": "Del cuaderno (CAx) — ecuaciones en derivadas parciales",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, páginas 22-23 (unidad 0013, doble página; #CAxp22/#CAxp23): EDO y EDP lineales de primer orden — factor integrante y combinación-p. ⭐ Traducido al inglés (0012 estaba en euskera): alternancia según el tema. Tema alejado de la PROBABILIDAD: ecuaciones diferenciales, del manual de Riley-Hobson-Bence (14.2.4, 20.3.1). (1) EDO lineal dy/dx+P y=Q, mu=exp(int P dx); ejemplo dy/dx+2xy=4x -> y=2+c e^-x^2. (2) EDP lineal x u_x+3u=x^2 -> mu=x^3 -> u=x^2/5+f(y)/x^3 (constante = función arbitraria). (3) Combinación-p: x u_x-2y u_y=0 -> dx/A=dy/B curvas características -> p=x^2 y, u=f(x^2 y); (i) 2x^2y+1; (ii) DOS soluciones 4x^2y y x^2y+3 ('a solution' no 'the'). DOS CORRECCIONES declaradas: (a) 'integrate w.r.t. y'->'x'; (b) 'that'->'then, of course'. UNA figura editorial: curvas características x^2 y=p (CeTZ). Comprobado con SymPy (por sustitución). Método en el idioma del libro (prosa RHB no literal). Confianza alta",
     "hizkuntza": "en"
    }
   ]
  },
  {
   "id": "a89",
   "maila": 2,
   "izenburua": "EDO y EDP lineales de primer orden: factor integrante y combinación-<math display=\"inline\"><mi>p</mi></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Doble página 22-23 del cuaderno amarillo CAx. Tras aparecer el euskera en 0011 y estar 0012 íntegramente en euskera, aquí vuelve a ser *inglés*: el cuaderno *no* cambia de idioma definitivamente, sino que alterna *según el tema*. Además, el tema se aleja por completo de la probabilidad: son *ecuaciones diferenciales*. Dos epígrafes están copiados literalmente del manual de Riley--Hobson--Bence (en el propio papel aparecen los números $14.2.4$ y $20.3.1$); aquí se presenta el *método* en el idioma del libro (sin repetir la prosa del texto original), con todos los desarrollos y resultados. "
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factor integrante: EDO lineal (RHB <math display=\"inline\"><mrow><mn>14.2</mn><mn>.4</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "La EDO lineal de primer orden se escribe de esta forma, y con un factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se convierte en <strong>exacta</strong> (obligando a que el miembro izquierdo sea la derivada total del producto): <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>μ</mi><mi>P</mi><mi>y</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>μ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>μ</mi><mi>Q</mi><mi>.</mi></mrow></math> De ahí se puede integrar directamente, <math display=\"inline\"><mrow><mi>μ</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>Q</mi><mi>d</mi><mi>x</mi></mrow></math>. El factor lo da la primera igualdad: <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>μ</mi><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>y</mi></mrow></math> e igualando <math display=\"inline\"><mrow><mo>=</mo><mi>μ</mi><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>μ</mi><mi>P</mi><mi>y</mi></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo:</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mrow></math>. Aquí <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mi>y</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> El autor hace un truco elegante: advierte que <math display=\"inline\"><mrow><mn>4</mn><mi>x</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math> del miembro derecho es <strong>él mismo</strong> <math display=\"inline\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, e igualando las dos derivadas integra de golpe: <math display=\"block\"><mrow><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mi>y</mi><mo>=</mo><mn>2</mn><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo>+</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>c</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDP lineal de primer orden: factor integrante (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "La EDP general de primer orden con dos variables independientes es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Si solo aparece la derivada parcial respecto de una variable, sirve el mismo método de la EDO lineal."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo (en inglés):</strong> «Find the general solution <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> of <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.» Dividiendo por <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mn>3</mn><mi>x</mi></mfrac><mi>u</mi><mo>=</mo><mi>x</mi></mrow></math>, factor integrante <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mfrac><mn>3</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mn>3</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math></span>: <math display=\"block\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>5</mn></msup><mn>5</mn></mfrac><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Aquí está la <strong>diferencia estructural</strong> entre EDO y EDP: al integrar respecto de una sola variable, la constante de integración no es un número, sino una <strong>función arbitraria de las demás variables</strong> —<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>—, porque <math display=\"inline\"><mi>y</mi></math> queda fija en el proceso."
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Corrección de la fuente: variable de integración",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el papel una nota roja dice «integrate with respect to <math display=\"inline\"><mi>y</mi></math>» junto a la línea <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Corregido: «with respect to <math display=\"inline\"><mi>x</mi></math>».</strong> La integración es respecto de <math display=\"inline\"><mi>x</mi></math> (<math display=\"inline\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>5</mn></msup><mi>/</mi><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>); lo que ocurre respecto de <math display=\"inline\"><mi>y</mi></math> es <strong>otra cosa</strong> —que la «constante» sea una función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, porque <math display=\"inline\"><mi>y</mi></math> queda fija—. La nota confunde las dos cosas; el resultado del recuadro es correcto."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de la combinación-<math display=\"inline\"><mi>p</mi></math>: EDP homogéneas (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.1</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Cuando aparecen las derivadas parciales de ambas variables y <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, se buscan soluciones de la forma <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <math display=\"inline\"><mi>p</mi></math> una <strong>combinación</strong> aún desconocida <math display=\"inline\"><mi>x</mi></math> de <math display=\"inline\"><mi>y</mi></math>. Entonces <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> y de forma análoga respecto de <math display=\"inline\"><mi>y</mi></math>; sustituyendo en la EDP y para <math display=\"inline\"><mi>f</mi></math> no triviales: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>A</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>B</mi><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Para que <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se mantenga constante, <math display=\"inline\"><mi>p</mi></math> misma debe ser constante: <math display=\"inline\"><mrow><mi>d</mi><mi>p</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>p</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Como las dos ecuaciones son proporcionales, resultan las <strong>curvas características</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo (en inglés):</strong> «For <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> find (i) the solution that takes the value <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> on the line <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, and (ii) a solution that has the value <math display=\"inline\"><mn>4</mn></math> at the point <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.» Aquí <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>y</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>−</mi><mn>2</mn><mi>y</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>c</mi><msup><mi>y</mi><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mi>.</mi></mrow></math> Llamando a la constante <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msup><mi>p</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></msup></mrow></math> (para evitar fracciones), <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>p</mi><mi>/</mi><mi>y</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>, y la solución general es <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Imponiendo las condiciones: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">( </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>=</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -en </mtext><mspace width=\"0.333em\"></mspace></mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ); </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "irudia",
     "oina": "Curvas características de <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>p</mi></mrow></math> (<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>4</mn></mrow></math>; la más externa <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>4</mn></mrow></math>). <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es constante en cada curva. La recta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> (discontinua) cruza <strong>todas las curvas</strong>, así que el dato de (i) fija <math display=\"inline\"><mi>f</mi></math> por completo; el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está <strong>solo</strong> en la curva <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn></mrow></math>, así que el dato de (ii) fija <math display=\"inline\"><mi>f</mi></math> en un único valor y la solución no es única. Figura añadida por el editor.",
     "src": "../media/irudiak/66ef4a0d5a7e4670.svg",
     "zabalera": 257
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (SymPy, por sustitución directa):</strong> todos los desarrollos y resultados son <strong>correctos</strong>. EDO: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>c</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math> cumple <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>; <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>4</mn><mi>x</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>. EDP lineal: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>5</mn><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><msup><mi>x</mi><mn>3</mn></msup></mrow></math> cumple <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (para cualquier <math display=\"inline\"><mi>f</mi></math>); <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>. Método-<math display=\"inline\"><mi>p</mi></math>: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cumple <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; (i) <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> de <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> en <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>; (ii) <math display=\"inline\"><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn></mrow></math>, ambas valen <math display=\"inline\"><mn>4</mn></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y ambas cumplen la EDP. (No está en el corpus de probabilidad; comprobado con SymPy.)",
        "<strong>⭐⭐ Las dos soluciones de (ii):</strong> el manuscrito da <strong>dos</strong> respuestas (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn></mrow></math>), y no es un fallo: el enunciado pide «<strong>a</strong> solution», no «<strong>the</strong>». Un solo punto fija <math display=\"inline\"><mi>f</mi></math> en un único valor; una recta entera (i), en cambio, lo fija por completo.",
        "<strong>Dos correcciones (mención):</strong> (a) la nota roja de la página <math display=\"inline\"><mn>22</mn></math> «integrate with respect to <math display=\"inline\"><mi>y</mi></math>» <math display=\"inline\"><mo>→</mo></math> <strong>«with respect to <math display=\"inline\"><mi>x</mi></math>»</strong> (observación de arriba). (b) la primera línea de la página <math display=\"inline\"><mn>23</mn></math> «that, of course,» <math display=\"inline\"><mo>→</mo></math> <strong>«then, of course,»</strong> (error de copia; el original tiene la estructura «when ... then ... we cannot»).",
        "<strong>Figura (añadida por el editor):</strong> curvas características <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>p</mi></mrow></math>; el manuscrito solo tiene recuadros rojos (los resultados), sin dibujos. La figura sirve para visualizar el significado de la combinación-<math display=\"inline\"><mi>p</mi></math> y el contraste entre (i) y (ii).",
        "<strong>Alternancia de idioma:</strong> el cuaderno cambia de idioma según el tema (0012 en euskera, este en inglés); el nombre de la carpeta («probabilidad ingles») solo describe el primer tramo. La fuente es el manual RHB (<math display=\"inline\"><mrow><mn>14.2</mn><mn>.4</mn></mrow></math>, <math display=\"inline\"><mrow><mn>20.3</mn><mn>.1</mn></mrow></math>; incluida la referencia «(14.14)»).",
        "<strong>Fidelidad (confianza alta):</strong> método presentado en el idioma del libro (sin repetir literalmente la prosa de RHB), enunciados de los ejemplos citados en inglés, desarrollo comprobado por completo. Dos etiquetas canónicas:"
       ]
      },
      {
       "mota": "testua",
       "html": "<code>#CAxp22</code>"
      },
      {
       "mota": "testua",
       "html": ", <code>#CAxp23</code>. Véase <code>koadernoa_cax_p022.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, páginas 24-25 (unidad 0014, doble página; #CAxp24/#CAxp25): EDP lineales — método u=h f(p), ecuaciones inhomogéneas y existencia de la solución. En inglés, del mismo tema y fuente que 0013 (Riley-Hobson-Bence 20.3.2, 20.6). Tres pasos: (1) EDP con término en u (C!=0), u=h(x,y)f(p); ejemplo x u_x+2u_y-2u=0 -> h=e^y, u=e^y f(x e^-y/2). (2) EDP inhomogéneas (general=homogénea+integral particular): y u_x-x u_y=3x -> u=f(x^2+y^2)-3y; (i) x^2+y^2-3y; (ii) FAMILIA (u(1,0)=2 un solo punto). (3) ⭐⭐ Características y existencia: dato en toda la curva->única, en un punto->familia, en una PARTE->única solo en una REGIÓN (0<=x^2 y<=1, en sombreado). Sin correcciones (comprobado con SymPy por sustitución). FIGURA: el dibujo del manuscrito (características x^2 y=c + región sombreada + segmento de datos x=1) rehecho con CeTZ; 'el argumento hecho figura'. Método en el idioma del libro (sin prosa RHB). Confianza alta",
     "hizkuntza": "en"
    }
   ]
  },
  {
   "id": "a90",
   "maila": 2,
   "izenburua": "EDP lineales: método <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>h</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, ecuaciones inhomogéneas y existencia de la solución",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Doble página 24-25 del cuaderno amarillo CAx, continuando del mismo tema y fuente que <math display=\"inline\"><mn>22</mn></math>.-<math display=\"inline\"><mn>23</mn></math>. (Riley–Hobson–Bence, <math display=\"inline\"><mrow><mn>20.3</mn><mn>.2</mn></mrow></math> y <math display=\"inline\"><mn>20.6</mn></math>). Tres pasos, escritos en inglés; aquí el método se presenta en el idioma del libro."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: EDP con término en <math display=\"inline\"><mi>u</mi></math>"
    },
    {
     "mota": "testua",
     "html": "El método de la combinación-<math display=\"inline\"><mi>p</mi></math> exige que NO haya término en <math display=\"inline\"><mi>u</mi></math> (<math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>). Si <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>, no se puede dividir directamente la dependencia de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; entonces se busca una solución de la forma <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <strong>Ejemplo (en inglés):</strong> «<math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mi>y</mi></msub><mo>−</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>.» Sustituyendo (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><msub><mi>h</mi><mi>x</mi></msub><mi>f</mi><mo>+</mo><mi>h</mi><msup><mi>f</mi><mo>′</mo></msup><msub><mi>p</mi><mi>x</mi></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><msub><mi>h</mi><mi>y</mi></msub><mi>f</mi><mo>+</mo><mi>h</mi><msup><mi>f</mi><mo>′</mo></msup><msub><mi>p</mi><mi>y</mi></msub></mrow></math>): <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>h</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>h</mi><mi>y</mi></msub><mo>−</mo><mn>2</mn><mi>h</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>p</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>p</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>h</mi><msup><mi>f</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El primer paréntesis es <strong>la EDP original, con <math display=\"inline\"><mi>u</mi></math> sustituida por <math display=\"inline\"><mi>h</mi></math></strong>: por tanto si <math display=\"inline\"><mi>h</mi></math> es <strong>cualquier</strong> solución de la ecuación, ese término desaparece y queda el eterno problema homogéneo para <math display=\"inline\"><mi>p</mi></math>: <math display=\"block\"><mrow><mi>x</mi><msub><mi>p</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>p</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mn>2</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mi>y</mi><mn>2</mn></mfrac><mo>+</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Sirve cualquier solución como <math display=\"inline\"><mi>h</mi></math>; por ejemplo <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>⋅</mo><mn>0</mn><mo>+</mo><mn>2</mn><msup><mi>e</mi><mi>y</mi></msup><mo>−</mo><mn>2</mn><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mn>0</mn></mrow></math>). Por tanto:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDP inhomogéneas: solución general más integral particular (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.2</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "La solución general de una ecuación inhomogénea es <strong>la solución general de la homogénea más una integral particular</strong> (sin condiciones de contorno); después las condiciones eligen la solución particular adecuada. <strong>Ejemplo (en inglés):</strong> «<math display=\"inline\"><mrow><mi>y</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>3</mn><mi>x</mi></mrow></math>. Find the most general particular solution (i) which satisfies <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, and (ii) which has the value <math display=\"inline\"><mn>2</mn></math> at <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.» Características de la homogénea: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>−</mi><mi>x</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>y</mi><mi>d</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konst. </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Una integral particular, por inspección, es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>−</mi><mn>3</mn><mi>y</mi></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>⋅</mo><mn>0</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>x</mi></mrow></math>). La solución general es por tanto <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math>. Imponiendo las condiciones: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mi>.</mi></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">familia</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>z</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mtext mathvariant=\"normal\">edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mn>2</mn><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr></mtable></math> donde <math display=\"inline\"><mi>g</mi></math> es cualquier función que cumpla <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. (ii) fija <math display=\"inline\"><mi>f</mi></math> en <strong>un solo argumento</strong> (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>), por eso es una familia; (i), en cambio, en toda la recta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, lo fija por completo."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Características y existencia de la solución (RHB <math display=\"inline\"><mn>20.6</mn></math>)"
    },
    {
     "mota": "testua",
     "html": "En las EDP de primer orden, la consecuencia principal: si el valor de <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está dado en una <strong>curva entera</strong>, la solución es en general <strong>única</strong>; dado en un <strong>solo punto</strong>, en cambio, <strong>no</strong> —hay toda una familia de soluciones particulares—. El ejemplo muestra el <strong>tercer</strong> caso, el más interesante: el dato dado en una <strong>parte</strong> de la curva."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo (en inglés):</strong> «Find the general solution of <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> that takes the value <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> on the line <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> between <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> and <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>.» La solución general es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, las características <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math>, y para el dato en toda la recta <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>. Ahora el dato fija <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> <strong>solo</strong> en el intervalo <math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, es decir <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>c</mi><mo>≤</mo><mn>1</mn></mrow></math>. Como <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> (y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) es constante a lo largo de las características, el dato se propaga a lo largo de las características que <strong>cortan</strong> el segmento de datos, y solo por ellas:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eskualdean: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Fuera de la región la solución no está determinada exactamente: cualquiera de la forma <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn><mo>+</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cumple la ecuación y el dato, siempre que <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> sea <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>p</mi><mo>≤</mo><mn>1</mn></mrow></math> para."
    },
    {
     "mota": "irudia",
     "oina": "Curvas características de <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math> (rehecha a partir del manuscrito). Con el dato dado en el segmento <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, grueso en rojo), los valores <math display=\"inline\"><mi>c</mi></math> se limitan al intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>; el dato se propaga a lo largo de las características que cortan el segmento, y la solución está determinada <strong>solo en la región sombreada</strong> (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn></mrow></math>, bajo la curva <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>). Fuera se puede añadir un término arbitrario <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (en el intervalo <math display=\"inline\"><mrow><mi>g</mi><mo>=</mo><mn>0</mn></mrow></math>).",
     "src": "../media/irudiak/7244ba11b7d935cc.svg",
     "zabalera": 257
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (SymPy, por sustitución directa):</strong> los tres pasos son <strong>correctos</strong>. (1) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> cumple <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mn>2</mn><msub><mi>u</mi><mi>y</mi></msub><mo>−</mo><mn>2</mn><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math> es solución. (2) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math> cumple <math display=\"inline\"><mrow><mi>y</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>3</mn><mi>x</mi></mrow></math>; (i) <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math> (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>); (ii) <math display=\"inline\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mo>−</mo><mn>3</mn><mi>y</mi><mo>+</mo><mi>g</mi></mrow></math>, ambas valen <math display=\"inline\"><mn>2</mn></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y ambas cumplen la EDP. (3) <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math> cumple <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> es <math display=\"inline\"><mrow><mn>2</mn><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>. (No está en el corpus de probabilidad; comprobado con SymPy.)",
        "<strong>⭐⭐ Resultado de existencia (el núcleo de la página):</strong> dato en la <strong>curva entera</strong> <math display=\"inline\"><mo>→</mo></math> solución única; en un <strong>punto</strong> <math display=\"inline\"><mo>→</mo></math> familia de soluciones; dato en una <strong>parte</strong> de la curva <math display=\"inline\"><mo>→</mo></math> solución determinada <strong>solo en una región</strong> (en sombreado, <math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn></mrow></math>). El dato se propaga a lo largo de las características, y solo en las que cortan el segmento de datos. Esa es la aportación conceptual de la página, y el dibujo es <strong>el argumento mismo, hecho figura</strong>.",
        "<strong>Figura (rehecha a partir del manuscrito):</strong> familia de curvas características <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mi>c</mi></mrow></math>, región sombreada (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>≤</mo><mn>1</mn></mrow></math>) y segmento de datos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>. El dibujo ilustra más que el enunciado, <strong>la conclusión</strong>.",
        "<strong>Sin correcciones:</strong> ningún error de contenido; los tres desarrollos son correctos y los enunciados están bien copiados.",
        "<strong>No se ha tocado (dudas):</strong> la forma de la ecuación inhomogénea general de la página <math display=\"inline\"><mn>24</mn></math> (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mi>y</mi></msub><mo>+</mo><mi>a</mi><mi>u</mi><mo>=</mo><mi>f</mi></mrow></math>) está escrita deprisa y no es la del ejercicio siguiente; en la página <math display=\"inline\"><mn>25</mn></math> «determined every value» (<math display=\"inline\"><mo>→</mo></math> «everywhere», lectura incierta, el sentido no cambia).",
        "<strong>Fidelidad (confianza alta):</strong> fuente en inglés (RHB <math display=\"inline\"><mrow><mn>20.3</mn><mn>.2</mn></mrow></math>, <math display=\"inline\"><mn>20.6</mn></math>); método presentado en el idioma del libro (sin prosa literal), enunciados de los ejemplos citados en inglés, desarrollo comprobado por completo. Dos etiquetas canónicas: <code>#CAxp24</code>, <code>#CAxp25</code>. Véase <code>koadernoa_cax_p024.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, páginas 28-29 (unidad 0016, doble página; #CAxp28/#CAxp29): ecuación de ondas DE DOS MANERAS — separación de variables y método de las características, luego equivalencia. En euskera. Cuerda tensa (u(0)=u(L)=0), en reposo, posición inicial u_0 sin(pi x/L). (a) separación: u=XT, lambda=n pi/L, u=sum sin(n pi x/L)[A_n sin+B_n cos]; B_1=u_0; condición de VELOCIDAD (completada, mención): u_t(x,0)=0->A_n=0 -> u=u_0 sin(pi x/L)cos(pi c t/L). (b) características: c^2 u_xx-u_tt=0 hiperbólica, xi=x-ct/eta=x+ct, u_xieta coef=4c^2 -> u=F(x-ct)+G(x+ct) (d'Alembert). Equivalencia (completada, mención): producto->suma, u_0 sin cos=(u_0/2)[sin(pi(x-ct)/L)+sin(pi(x+ct)/L)]=F+G, F=G=(u_0/2)sin. ⭐⭐ Las características ahora son HERRAMIENTA (24-25 era teoría). DOS lagunas completadas: la condición de velocidad y la equivalencia. Inocuo: sumatorio desde n=0. Comprobado con SymPy. UNA figura editorial: onda estacionaria=dos viajeras (CeTZ). Confianza alta",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a91",
   "maila": 2,
   "izenburua": "Ecuación de ondas de dos maneras: separación de variables y características",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Doble página 28-29 del cuaderno amarillo CAx, <strong>en euskera</strong>. Ejercicio de examen (numerado <math display=\"inline\"><mn>4</mn></math>): cuerda tensa fija en los dos extremos (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), <strong>en reposo</strong> y con posición inicial <math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Se pide resolver el problema <strong>con dos métodos</strong> —(a) separación de variables y (b) características— y luego mostrar que ambos son equivalentes. Interés: las características de <math display=\"inline\"><mn>24</mn></math>-<math display=\"inline\"><mn>25</mn></math>. ahora son una <strong>herramienta de cálculo</strong>, en lugar de teoría."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Separación de variables"
    },
    {
     "mota": "testua",
     "html": "Haciendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, sustituyendo en la ecuación de ondas (<math display=\"inline\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub></mrow></math>) y separando: <math display=\"block\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>X</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>c</mi><mn>2</mn></msup></mfrac><msup><mi>T</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>T</mi></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>X</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>X</mi><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>T</mi><mo>″</mo></msup><mo>+</mo><msup><mi>λ</mi><mn>2</mn></msup><msup><mi>c</mi><mn>2</mn></msup><mi>T</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Condiciones de contorno: <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>x</mi></mrow></math></span>); y siendo <math display=\"inline\"><mrow><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>≠</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>λ</mi><mi>L</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>λ</mi><mo>=</mo><mi>n</mi><mi>π</mi><mi>/</mi><mi>L</mi></mrow></math>. Por tanto (cada modo <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>): <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msub><mi>A</mi><mi>n</mi></msub><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>B</mi><mi>n</mi></msub><mi mathvariant=\"normal\">cos</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Imponiendo la <strong>posición inicial</strong>, por ortogonalidad de los senos, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> da <math display=\"inline\"><mrow><msub><mi>B</mi><mn>1</mn></msub><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>B</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>1</mn></mrow></math>) —el dato inicial <strong>mismo</strong> es un modo propio, no hace falta ninguna integral de Fourier—. Imponiendo el paso que falta —la <strong>condición de velocidad</strong> (la cuerda está en reposo, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><mfrac><mrow><mi>n</mi><mi>π</mi><mi>c</mi></mrow><mi>L</mi></mfrac><msub><mi>A</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>n</mi><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>n</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Método de las características"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math> es hiperbólica (<math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>A</mi><mi>C</mi><mo>=</mo><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>). La ecuación característica <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mi>d</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>±</mi><mn>1</mn><mi>/</mi><mi>c</mi></mrow></math>, y las variables nuevas <math display=\"inline\"><mrow><mi>ξ</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>η</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi></mrow></math>. El cambio transforma los coeficientes: el de <math display=\"inline\"><msub><mi>u</mi><mrow><mi>ξ</mi><mi>ξ</mi></mrow></msub></math> en <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>; el de <math display=\"inline\"><msub><mi>u</mi><mrow><mi>η</mi><mi>η</mi></mrow></msub></math> en <math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>; y el de <math display=\"inline\"><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub></math> en <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mn>2</mn><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></math></span> (todos los demás <math display=\"inline\"><mn>0</mn></math>). Por tanto: <math display=\"block\"><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> es la solución de d&#x27;Alembert: la suma de dos ondas que se propagan en dos direcciones. Imponiendo el dato de contorno, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> (en <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>) —aquí se interrumpe el manuscrito—."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los dos métodos son equivalentes"
    },
    {
     "mota": "testua",
     "html": "Partiendo de la solución de (a), convirtiendo el producto seno-coseno en suma:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>x</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mi>c</mi><mi>t</mi></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msub><mi>u</mi><mn>0</mn></msub><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>L</mi></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esto es <strong>exactamente</strong> de la forma <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>s</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Los dos métodos dan la <strong>misma función</strong>, como pedía el enunciado: la onda <strong>estacionaria</strong> de la cuerda es la superposición de dos ondas <strong>viajeras idénticas</strong> que se propagan en sentidos contrarios."
    },
    {
     "mota": "irudia",
     "oina": "Onda estacionaria (en el instante <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>L</mi><mi>/</mi><mn>4</mn><mi>c</mi></mrow></math>) como suma de dos ondas viajeras: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> hacia la derecha (verde azulado, discontinua) y <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>G</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>0</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> hacia la izquierda (naranja, discontinua); suma en trazo continuo (<span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>c</mi><mi>t</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>). <strong>Solo la suma</strong> se anula en los extremos (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo><mi>L</mi></mrow></math>); las ondas viajeras por separado no cumplen las condiciones de contorno. Figura añadida por el editor.",
     "src": "../media/irudiak/31d89eddfb874393.svg",
     "zabalera": 312
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (SymPy):</strong> todo correcto. (a) <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>c</mi><mi>t</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> cumple la ecuación de ondas (<math display=\"inline\"><mrow><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>), los extremos fijos (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), la posición inicial y la velocidad nula (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>). (b) Características: el coeficiente de <math display=\"inline\"><msub><mi>u</mi><mrow><mi>ξ</mi><mi>η</mi></mrow></msub></math> es <math display=\"inline\"><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup></mrow></math>, los demás <math display=\"inline\"><mn>0</mn></math>; discriminante <math display=\"inline\"><mrow><mn>4</mn><msup><mi>c</mi><mn>2</mn></msup><mo>&gt;</mo><mn>0</mn></mrow></math> (hiperbólica). Equivalencia: la fórmula del producto es exacta. (No está en el corpus de probabilidad; comprobado con SymPy.)",
        "<strong>⭐⭐ Dos lagunas completadas (CON mención):</strong> (1) la <strong>condición de velocidad</strong>: el enunciado dice que la cuerda está <strong>en reposo</strong> (<math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>), pero esa condición no se impone en ningún sitio; sin ella los coeficientes <math display=\"inline\"><msub><mi>A</mi><mi>n</mi></msub></math> quedan sin determinar y (a) no está cerrado. Imponiendo <math display=\"inline\"><mrow><msub><mi>A</mi><mi>n</mi></msub><mo>=</mo><mn>0</mn></mrow></math> la solución se completa. (2) la <strong>equivalencia</strong>: el apartado (b) se interrumpe después de escribir <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>; la fórmula de producto<math display=\"inline\"><mo>→</mo></math>suma lo cierra de inmediato, mostrando que ambos métodos coinciden.",
        "<strong>Inocuo (no es un error):</strong> el sumatorio empieza en <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> en tres apariciones; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mn>0</mn></mrow></math> y no añade nada. Lo correcto sería <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> (en Sturm-Liouville <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> no es un modo).",
        "<strong>Figura (añadida por el editor):</strong> onda estacionaria = suma de dos ondas viajeras. El manuscrito no tiene dibujos; la figura sirve para visualizar la equivalencia.",
        "<strong>No se ha tocado (grafía/dudas):</strong> las líneas primera y tercera de la página <math display=\"inline\"><mn>28</mn></math> (enunciado) están escritas deprisa: «<math display=\"inline\"><mtext mathvariant=\"normal\">NASIGARAI</mtext></math>», «<math display=\"inline\"><mtext mathvariant=\"normal\">PORTIBIO</mtext></math>» no se resuelven (grafía, no cálculo); «<math display=\"inline\"><mtext mathvariant=\"normal\">BEREKETAREN</mtext></math>» probablemente de «bereizketaren» (la <strong>separación</strong> de variables). El desarrollo matemático es legible por completo.",
        "<strong>Continuación con <math display=\"inline\"><mn>24</mn></math>-<math display=\"inline\"><mn>25</mn></math>.:</strong> las características eran allí <strong>teoría</strong> (dónde está determinada la solución); aquí son un <strong>método de cálculo</strong>. Conviene leer las dos unidades seguidas.",
        "<strong>Fidelidad (confianza alta):</strong> fuente en euskera; desarrollo seguido literalmente, las dos lagunas <strong>completadas</strong> con mención explícita. Dos etiquetas canónicas: <code>#CAxp28</code>, <code>#CAxp29</code>. Véase <code>koadernoa_cax_p028.typ</code>."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a92",
   "maila": 1,
   "izenburua": "Métodos matemáticos: colección de ejercicios y exámenes",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Nota de edición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Esta colección recoge las hojas de ejercicios oficiales COMPLETAS de la asignatura <strong>Métodos Matemáticos</strong> de la UPV/EHU y las colecciones completas de ejercicios de exámenes (2010–2014), organizadas por temas y enlazadas con los capítulos de edf. El programa oficial de la asignatura tenía 11 temas: conceptos básicos, ecuaciones de primer orden, de orden superior (incluidas la delta de Dirac y las distribuciones), sistemas, Laplace, series, estabilidad, Sturm–Liouville, ecuaciones en derivadas parciales, probabilidad y estadística. La hoja de probabilidad está en M21. Los ejemplos resueltos son de JAKINA; las estrellitas (*,  **) conservan la clasificación de la fuente (* para profundizar, **  para todos: propiedades de las funciones especiales)."
      }
     ]
    }
   ]
  },
  {
   "id": "a93",
   "maila": 2,
   "izenburua": "Ecuaciones en derivadas parciales: separación de variables",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hoja oficial de ejercicios de la teoría declarada en la laguna del módulo, completa — incluido el suplemento de los exámenes de los últimos años."
    },
    {
     "mota": "oharra",
     "titulua": "Del cuaderno: una EDP como EDO (introducción)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hoja de introducción del cuaderno del usuario (CG-06, &quot;Tema 2&quot;): cuando una variable aparece sin derivar, la EDP se resuelve como una EDO — pero las &quot;constantes&quot; de integración son <strong>funciones arbitrarias</strong> de la otra variable. Ejemplo del cuaderno: <math display=\"block\"><mrow><mi>x</mi><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mn>3</mn><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> Como no hay <math display=\"inline\"><mi>y</mi></math>, es una EDO lineal en <math display=\"inline\"><mi>x</mi></math>: factor integrante <math display=\"inline\"><msup><mi>x</mi><mn>3</mn></msup></math>, y <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>⇒</mo><mi>u</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>5</mn></mfrac><mo>+</mo><mfrac><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math> — <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> función arbitraria. Igual para la ecuación <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>y</mi></msup></mrow></math>: resuelta como EDO de <math display=\"inline\"><mi>y</mi></math>, la solución homogénea es <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>, siendo <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> funciones arbitrarias. Una EDO necesitaba una condición por cada constante; una EDP tiene que determinar una <strong>función</strong> entera por cada condición — por eso las condiciones de contorno son funciones, no números (el cuaderno lo demuestra con contraejemplos: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn></mrow></math>... son todas soluciones de <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mi>x</mi></msub><mo>−</mo><mn>2</mn><mi>y</mi><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math> con las mismas condiciones)."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Del cuaderno: homogeneizar las condiciones de contorno",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Receta del cuaderno de Métodos Matemáticos del usuario (<code>met mat/</code>, hoja &quot;2 – Separación de variables&quot;), válida literalmente para los ejercicios de examen 16 y 18 de abajo. En la ecuación del calor <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, si las condiciones de contorno no son homogéneas, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math>, la separación de variables no funciona directamente. El camino del cuaderno: definir <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><mi>g</mi></math> cumple <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>2</mn></msub></mrow></math> — entonces <math display=\"block\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>L</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mtext mathvariant=\"normal\">  </mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">M.B. homogeneoak!</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y la ecuación nueva es <math display=\"inline\"><mrow><msub><mi>v</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msub><mi>v</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>g</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, siendo la condición inicial <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Eligiendo <math display=\"inline\"><mi>g</mi></math> lineal (<math display=\"inline\"><mrow><msup><mi>g</mi><mo>″</mo></msup><mo>=</mo><mn>0</mn></mrow></math>: estado estacionario), la ecuación también queda homogénea y se puede aplicar la separación: <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>X</mi></mfrac><mo>=</mo><mfrac><mover><mi>T</mi><mo accent=\"true\">̇</mo></mover><mrow><msup><mi>a</mi><mn>2</mn></msup><mi>T</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>, con las funciones propias de Sturm–Liouville. Para la ecuación de ondas el mismo esquema (<math display=\"inline\"><mrow><msup><mi>X</mi><mo>′</mo></msup><mfrac><mi>′</mi><mi>X</mi></mfrac><mo>=</mo><mfrac><mover><mi>T</mi><mo accent=\"true\">̈</mo></mover><mi>T</mi></mfrac><mo>=</mo><mi>−</mi><msup><mi>λ</mi><mn>2</mn></msup></mrow></math>), en la misma hoja del cuaderno."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiar la posibilidad de resolver por separación de variables: a)  <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; b)  <math display=\"inline\"><mrow><mi>t</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>x</mi><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; d)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>x</mi><mi>t</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; e)  <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>x</mi></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>x</mi></msub><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; f)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Conducción del calor en una esfera: <math display=\"inline\"><mrow><msub><mi>T</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>T</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>T</mi><mi>r</mi></msub><mi>/</mi><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, superficie a 0 grados, <math display=\"inline\"><mi>T</mi></math> finito en <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math>, <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>T</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mi>/</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>r</mi><mi>/</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span>. Calcular <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Sugerencia: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>r</mi><mi>T</mi></mrow></math> cumple <math display=\"inline\"><mrow><msub><mi>S</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>S</mi><mrow><mi>r</mi><mi>r</mi></mrow></msub></mrow></math> — ¿cuál es <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Planeta esférico, temperatura superficial dependiente de la latitud: calcular <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en estado estacionario, siendo <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>θ</mi></mrow></math>. (¡Legendre!)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una varilla con los extremos a 0 grados, al principio <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>u</mi><mn>0</mn></msub><mi>δ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: calcular <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Cómo utilizarías el resultado para calcular la evolución de una distribución inicial GENERAL? (¡La función de Green de la ecuación del calor!)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ecuación de Laplace <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>×</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> en un rectángulo: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Sugerencia: separar en dos problemas, dejando en cada uno una sola condición no nula.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Membrana circular de borde fijo (radio 1), con deformación inicial <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y sin velocidad: demostrar que <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math></span> es (<math display=\"inline\"><msqrt><msub><mi>λ</mi><mi>n</mi></msub></msqrt></math>  =  los ceros de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>), hallar los <math display=\"inline\"><msub><mi>c</mi><mi>n</mi></msub></math>, y calcular <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>r</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math> para el caso."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Membrana circular, al principio <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><msubsup><mi>λ</mi><mn>1</mn><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></msqrt><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math></span>  (modo puramente no simétrico): obtener <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y dibujar aproximadamente la condición inicial."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ecuación de ondas forzada: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math></span>, en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, condiciones homogéneas. Estudiar: a)  todos <math display=\"inline\"><mrow><mi>ω</mi><mo>≠</mo><msub><mi>ω</mi><mi>n</mi></msub></mrow></math>; b)  <math display=\"inline\"><mrow><mi>ω</mi><mo>≈</mo><msub><mi>ω</mi><mi>m</mi></msub></mrow></math>; d)  <math display=\"inline\"><mrow><mi>ω</mi><mo>=</mo><msub><mi>ω</mi><mi>m</mi></msub></mrow></math>. (¿Cómo se llama este fenómeno?)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Generalización: <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>−</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, condiciones homogéneas — escribir la solución como serie (desarrollada en modos)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(*) Esfera aislada (<math display=\"inline\"><mrow><mi>∂</mi><mi>T</mi><mi>/</mi><mi>∂</mi><mi>r</mi><mo>=</mo><mn>0</mn></mrow></math> en la superficie), <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>ϕ</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: hallar <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>θ</mi><mo>,</mo><mi>ϕ</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. (Sugerencia: el cambio <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><msup><mi>r</mi><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup><mi>S</mi></mrow></math> y Bessel de orden semientero.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtener <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> que cumple <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>7</mn></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (condiciones no homogéneas: ¡primero estabilizar!)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(*)  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>/</mi><mi>l</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>c</mi><mn>2</mn></msup><mi>μ</mi><mi>/</mi><msup><mi>l</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi></mrow></math></span>, con condiciones de contorno &quot;cuasiperiódicas&quot;  (<math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mi>γ</mi><mi>L</mi><mi>/</mi><mi>l</mi></mrow></msup><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> etc.): ¿por qué la separación de variables es fácil solo cuando <math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>? Calcular la solución en ese caso e intentar dar una interpretación física."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicios de los exámenes de los últimos años (suplemento oficial)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2004)  Cilindro de radio <math display=\"inline\"><mi>a</mi></math> y altura <math display=\"inline\"><mi>h</mi></math>: toda la superficie a <math display=\"inline\"><msub><mi>T</mi><mn>0</mn></msub></math> excepto la base (<math display=\"inline\"><mrow><msub><mi>T</mi><mn>0</mn></msub><mo>+</mo><mn>100</mn></mrow></math> K). Calcular la distribución estacionaria."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2004) ¿Cuál es la frecuencia normal mínima de un tambor en forma de semicírculo? (¿Cuáles son los modos normales de un tambor circular?)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2004) Frecuencia mínima de las ondas sonoras de una cavidad (la fuente define la cavidad con una figura — consultar en el PDF)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2002) Resolver <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>t</mi></msub><mo>=</mo><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>2</mn><msub><mi>ϕ</mi><mi>x</mi></msub></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mi>/</mi><mi>π</mi></mrow></math>. (Sugerencia: ¡tener en cuenta la ortogonalidad!)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2003)  Cilindro infinito de radio <math display=\"inline\"><mi>R</mi></math>, con fuente de calor homogénea <math display=\"inline\"><mrow><msub><mi>T</mi><mi>t</mi></msub><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><msup><mi>∇</mi><mn>2</mn></msup><mi>T</mi><mo>+</mo><msup><mi>b</mi><mn>2</mn></msup></mrow></math>, al principio <math display=\"inline\"><mrow><mi>T</mi><mo>=</mo><mn>0</mn></mrow></math> y en la superficie condición de emisión <math display=\"inline\"><mrow><mi>T</mi><mo>+</mo><mi>R</mi><msub><mi>T</mi><mi>r</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: calcular <math display=\"inline\"><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2005) Resolver <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>L</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><msup><mi>e</mi><mrow><mi>−</mi><mi>μ</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2005) Resolver <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>ϕ</mi><mi>x</mi></msub><mi>/</mi><mi>x</mi><mo>+</mo><msub><mi>ϕ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, en <math display=\"inline\"><mrow><mi>x</mi><mo>≥</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math> en <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math> y en el límite <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>x</mi></msub><mo>→</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>y</mi></msub><mi>/</mi><mi>x</mi><mo>→</mo><mi>−</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2006) Un gimnasta en una cama elástica de 5 m: al pasar la tela por la posición de equilibrio tiene velocidad <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>×</mo><mn>10</mn><mi>/</mi><mi>s</mi></mrow></math> hacia arriba. Calcular la forma de la tela en todos los instantes posteriores."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Del cuaderno: el problema del gimnasta resuelto",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El ejercicio de examen anterior está resuelto íntegramente en el cuaderno del usuario (CG-06, &quot;Tema 2: Ecuaciones en derivadas parciales&quot;); aquí va el camino, siguiendo el cuaderno. Membrana circular, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mn>5</mn></mrow></math> m, ecuación de ondas en coordenadas polares (simetría axial): <math display=\"block\"><mrow><msup><mi>∇</mi><mn>2</mn></msup><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>r</mi></mfrac><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>r</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>r</mi><msub><mi>u</mi><mi>r</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>10</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Separar variables, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mover><mi>T</mi><mo accent=\"true\">̈</mo></mover><mi>/</mi><mi>T</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>α</mi><mn>2</mn></msup></mrow></math>, y la parte de <math display=\"inline\"><mi>r</mi></math> es la <strong>ecuación de Bessel</strong> (<math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mn>0</mn></mrow></math> por simetría): <math display=\"inline\"><mrow><msup><mi>r</mi><mn>2</mn></msup><msup><mi>R</mi><mo>″</mo></msup><mo>+</mo><mi>r</mi><msup><mi>R</mi><mo>′</mo></msup><mo>+</mo><msup><mi>α</mi><mn>2</mn></msup><msup><mi>r</mi><mn>2</mn></msup><mi>R</mi><mo>=</mo><mn>0</mn></mrow></math>, solución <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mi>A</mi><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><msub><mi>Y</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><msub><mi>Y</mi><mn>0</mn></msub></math> porque explota en el centro (en el cuaderno: &quot;para no explotar&quot;). Condiciones de contorno: <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>α</mi><mi>n</mi></msub><mo>=</mo><msub><mi>β</mi><mi>n</mi></msub><mi>/</mi><mi>S</mi></mrow></math>, <math display=\"inline\"><msub><mi>β</mi><mi>n</mi></msub></math>  los ceros de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math>; <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo></mrow></math>  el término <math display=\"inline\"><mi mathvariant=\"normal\">cos</mi></math> fuera. Por tanto <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mo accent=\"false\">∞</mo></munderover><msub><mi>C</mi><mi>n</mi></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> y las velocidades iniciales dan los coeficientes, por la ortogonalidad de <math display=\"inline\"><msub><mi>J</mi><mn>0</mn></msub></math> (¡el peso <math display=\"inline\"><mi>r</mi></math>!): <math display=\"block\"><mrow><msub><mi>C</mi><mi>n</mi></msub><msub><mi>α</mi><mi>n</mi></msub><mo>=</mo><mfrac><mrow><mn>10</mn><msubsup><mo>∫</mo><mn>0</mn><mi>S</mi></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo>−</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"0.167em\"></mspace><mi>r</mi><mi>d</mi><mi>r</mi></mrow><mrow><mfrac><msup><mi>S</mi><mn>2</mn></msup><mn>2</mn></mfrac><mspace width=\"0.167em\"></mspace><msubsup><mi>J</mi><mn>1</mn><mn>2</mn></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>.</mi></mrow></math> La integral se hace con el cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi></mrow></math> y la integración por partes, usando <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msub><mi>J</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>x</mi><msub><mi>J</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — el cuaderno lo lleva paso a paso, y el resultado es una serie del tipo <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>u</mi><mo>∝</mo><mo>∑</mo><mfrac><mn>1</mn><mrow><msubsup><mi>β</mi><mi>n</mi><mn>3</mn></msubsup><msub><mi>J</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>β</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>J</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>α</mi><mi>n</mi></msub><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math></span>. El mismo esquema del método vale para la membrana del ejercicio 6 y para el cilindro de septiembre de 2003."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2006, <strong>Blade Runner</strong>) Los ojos de Hannibal Chew: sumergidos tres cuartas partes en fluido a temperatura corporal, un cuarto en aire a 20 grados. Calcular la distribución de temperaturas en el interior del ojo; si es una serie, los coeficientes numéricos de los dos primeros términos."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2007 / Septiembre de 2007) Cilindro conductor del calor infinito sumergido de golpe en una fuente a otra temperatura: evolución de la temperatura. ¿Cómo cambia con una altura finita?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2007 / Septiembre de 2007) Sólido conductor del calor entre dos esferas concéntricas: la superficie interior constante, la exterior proporcional a <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Distribución estacionaria."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Febrero de 2008) Cilindro conductor infinito sin carga introducido de golpe en un campo eléctrico constante, perpendicular al eje: potencial electrostático."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2008) Dos esferas concéntricas metálicas, divididas por una lámina aislante (el radio exterior es el doble del interior): el hemisferio superior interior y el inferior exterior a <math display=\"inline\"><mrow><mi>−</mi><mi>V</mi></mrow></math>, los otros dos a <math display=\"inline\"><mi>V</mi></math>. Potencial entre las dos esferas."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Septiembre de 2008) Resolver <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>ρ</mi><mi>ρ</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>ρ</mi></msub><mi>/</mi><mi>ρ</mi><mo>−</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>: 1)  regular en <math display=\"inline\"><mrow><mi>ρ</mi><mo>=</mo><mn>0</mn></mrow></math>; 2)  con asintótico <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msqrt><mrow><mn>5</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>ρ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mn>5</mn><mi>ρ</mi><mo>+</mo><mi mathvariant=\"normal\">sin</mi><mn>5</mn><mi>ρ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>5</mn><mi>t</mi></mrow></math></span> en el límite <math display=\"inline\"><mrow><mi>ρ</mi><mo>→</mo><mi>∞</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a94",
   "maila": 2,
   "izenburua": "Método de las características",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hoja oficial completa, incluido el suplemento:"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> pulso cuadrado (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>2</mn></mrow></math>  en el intervalo <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>1</mn></mrow></math>, 0 fuera), <math display=\"inline\"><mrow><msub><mi>u</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: dibujar <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>±</mo><mi>c</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la solución en los instantes <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>/</mi><mn>2</mn><mi>c</mi><mo>,</mo><mn>1</mn><mi>/</mi><mi>c</mi><mo>,</mo><mn>2</mn><mi>/</mi><mi>c</mi></mrow></math>; comprobar que se generan dos ondas en sentidos contrarios, con la mitad de amplitud (d&#x27;Alembert)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtener las líneas propias (curvas características) de la ecuación <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>x</mi><mi>y</mi><msub><mi>ϕ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>ϕ</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mn>4</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>u</mi><mi>x</mi></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>: líneas propias; con un cambio de variable adecuado demostrar que la solución general es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>4</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>5</mn></mrow></msup><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; y demostrar que con las condiciones <math display=\"inline\"><mrow><mi>u</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>y</mi><mo>=</mo><mn>4</mn><mi>x</mi></mrow></msub><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, <math display=\"inline\"><mrow><mi>u</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>1</mn></mrow></math> la solución es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><msup><mi>e</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>5</mn></mrow></msup></mrow></math>. (Las condiciones están dadas a lo largo de líneas propias, pero la solución es única — explicar.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demostrar que la solución general de la ecuación <math display=\"inline\"><mrow><mi>y</mi><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mi>y</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> es <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Clasificar (hiperbólica/parabólica/elíptica; si son mixtas, determinar las regiones): a)  <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>u</mi><mi>t</mi></msub><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math></span>, <math display=\"inline\"><mrow><mi>ρ</mi><mo>&gt;</mo><mn>0</mn></mrow></math>; b)  <math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mn>6</mn></mrow></math>; d)  <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mi>x</mi><mi>y</mi><msub><mi>ϕ</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>−</mo><msub><mi>ϕ</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn></mrow></math>; e)  <math display=\"inline\"><mrow><msub><mi>F</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mi>ρ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>F</mi><mi>t</mi></msub><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>F</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; f)  <math display=\"inline\"><mrow><msub><mi>u</mi><mi>x</mi></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub></mrow></math>; g)  sistema <math display=\"inline\"><mrow><msub><mi>e</mi><mi>x</mi></msub><mo>+</mo><mi>R</mi><mi>i</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>i</mi><mi>x</mi></msub><mo>+</mo><mi>C</mi><msub><mi>e</mi><mi>t</mi></msub><mo>=</mo><mn>0</mn></mrow></math> (línea de transmisión)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(Junio del 94)  <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msub><mi>ϕ</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mi>x</mi><msub><mi>ϕ</mi><mi>x</mi></msub><mo>=</mo><msub><mi>ϕ</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>ϕ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>ϕ</mi><mi>t</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: a) clasificar; b) obtener <math display=\"inline\"><mrow><mi>ϕ</mi><mo>=</mo><mo>∑</mo><msub><mi>c</mi><mi>n</mi></msub><msub><mi>u</mi><mi>n</mi></msub></mrow></math>  por separación de variables (escribir los coeficientes como integrales, sin calcular)."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Clasificar <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mi>y</mi><msub><mi>f</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>f</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>−</mo><mi>x</mi><msub><mi>f</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>f</mi><mi>x</mi></msub><mo>+</mo><msub><mi>f</mi><mi>y</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math></span>; resolver el caso <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math> (solución general), estudiar el caso <math display=\"inline\"><mrow><mi>a</mi><mo>≠</mo><mn>1</mn></mrow></math>, y buscar las soluciones con las condiciones <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>∂</mi><mi>y</mi></msub><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>∂</mi><mi>y</mi></msub><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, si existen. Explicar los resultados."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuerda infinita, desplazamiento inicial <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>x</mi><mi>/</mi><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>≤</mo><mi>a</mi></mrow></math>, 0 fuera), sin velocidad: obtener con funciones de Heaviside <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en general, y en particular en los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>a</mi><mi>/</mi><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tubo flexible lleno de fluido incompresible: <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><msub><mi>u</mi><mrow><mi>t</mi><mi>t</mi></mrow></msub><mo>+</mo><mn>2</mn><mi>v</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>t</mi></mrow></msub><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>v</mi><mn>2</mn></msup><mo>−</mo><mi>T</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ρ</mi><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math></span>. 1) Demostrar que en la solución general hay dos ondas viajeras de distinta velocidad — ¿es posible que ambas tengan el mismo sentido, en qué caso? (Comprobar el límite <math display=\"inline\"><mrow><mi>v</mi><mo>→</mo><mn>0</mn></mrow></math>.) 2) Con desplazamiento inicial <math display=\"inline\"><mrow><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>k</mi><mi>x</mi></mrow></math> y en reposo: describir el movimiento."
      }
     ]
    }
   ]
  },
  {
   "id": "a95",
   "maila": 2,
   "izenburua": "Un examen completo (24-05-2013)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Examen real del segundo cuatrimestre, completo — la única autoevaluación realista es un examen completo:"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "a) Sin resolver la ecuación, hallar la ecuación característica y las curvas características de la ecuación <math display=\"inline\"><mrow><mi>x</mi><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, y decir de qué tipo es. b) Resolver <math display=\"inline\"><mrow><mn>3</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>x</mi></mrow></msub><mo>+</mo><mn>10</mn><msub><mi>u</mi><mrow><mi>x</mi><mi>y</mi></mrow></msub><mo>+</mo><mn>3</mn><msub><mi>u</mi><mrow><mi>y</mi><mi>y</mi></mrow></msub><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las superficies superior y lateral de un cilindro sólido están a 0 grados, la inferior a 1 grado. Calcular la temperatura estacionaria del interior, y aproximar (con los 3 primeros términos de la serie) en el punto <math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mn>0.5</mn></mrow></math> m, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>1.5</mn></mrow></math> m (radio 1 m, altura 2 m). Ayuda: el cambio <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>r</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuánto debe valer el radio <math display=\"inline\"><mi>R</mi></math> de una esfera hueca para que su frecuencia fundamental sea la de la nota La (440 Hz), si la velocidad del sonido es 345 m/s? Usar <math display=\"inline\"><mrow><mi>∂</mi><mi>ψ</mi><mi>/</mi><mi>∂</mi><mi>r</mi><msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mrow><mi>r</mi><mo>=</mo><mi>R</mi></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuatro dados: tres normales (N) y uno trucado (T, en el que sacar 6 es 3 veces más probable que cualquier otro). a) La probabilidad de sacar tres 6 seguidos con N y con T; la de sacar tres 6 (no seguidos) en diez tiradas. Se toma un dado al azar y si las tres tiradas son 6, ¿cuál es la probabilidad de que sea N? ¿Y de que sea T? (Bayes.) b) ¿Cuántas tiradas hacen falta, de media, para conseguir tres 6?"
      }
     ]
    }
   ]
  },
  {
   "id": "a96",
   "maila": 2,
   "izenburua": "Otro examen completo (07-01-2016, primer parcial)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Recuperado de la mina CG-01 — parcial de EDO, completo. En la fuente está en TRES idiomas (euskera, castellano e inglés, &quot;Mathematical Methods: Midterm exam&quot;): la propia asignatura era plurilingüe, en el mismo espíritu de la familia de ediciones de JAKINA."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Obtener la solución general de la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>y</mi></mrow><mi>x</mi></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>. (Aroma de Riccati: una solución particular es evidente.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resolver <span class=\"j-mat-luzea\"><math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mn>2</mn><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>+</mo><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>&lt;</mo><mi>t</mi><mo>&lt;</mo><mn>1</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mn>1</mn><mo>&lt;</mo><mi>t</mi></mtd></mtr></mtable></mrow></mrow></math></span> con las condiciones <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>v</mi></mrow></math>. ¿Cuánto debe valer <math display=\"inline\"><mi>v</mi></math> para que <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>? (Laplace + &quot;parámetro de tiro&quot;: resolver en general y luego ajustar.)"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resolver por series de potencias (Frobenius), alrededor del punto singular regular y a ser posible sin usar el método de d&#x27;Alembert: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>3</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Estudiar los puntos de equilibrio del siguiente sistema dinámico usando la aproximación lineal, y dibujar el espacio de fases: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mover><mi>y</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mfrac><mn>3</mn><mrow><mn>8</mn><mo>−</mo><mn>4</mn><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "CG-01: la mina de resoluciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Casi todo lo de esta colección está RESUELTO en la fuente (<code>met mat/CG-01</code>, 330 fotografías), en cuatro capas: (1)  <strong>dosieres de resolución mecanografiados del curso</strong> — colecciones &quot;Transformada de Laplace: ejercicios de exámenes&quot; y &quot;Resolución mediante series de potencias&quot;, con resoluciones enviadas por grupos y con las correcciones rojas del profesor (&quot;JU&quot;); autoría colectiva: para consulta y comprobación, no para copiar literalmente; (2)  <strong>resoluciones manuscritas del usuario</strong> — las colecciones completas de Otros Ejercicios I y Estabilidad, con diagramas de fase dibujados a mano; (3)  <strong>diagramas de fase dibujados con ordenador</strong> — hojas &quot;Problema N (hoja)&quot; (1, 2, 4, 5, 7, 11 y el 5.a del capítulo 8 del libro), soluciones gráficas exactas de la colección de estabilidad; (4)  <strong>más exámenes</strong>  (el de 2014-15, el de Mathematical Methods en inglés de 2015 — el parcial de 2016 está en los tres idiomas) y las <strong>chuletas</strong> finales (de Joserra Egaña; la de Laplace y Fourier ya está convertida en capítulo de formulario de E01). Además, los apuntes mecanografiados de los temas 4 y 7 del curso (sistemas, métodos aproximados) están en CG-01 — junto con los PDF <code>eda1/2/5/6/8</code>, casi toda la colección de apuntes de teoría. Antes de empezar a buscar resoluciones, mirar ahí."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Observación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Traído del paquete a JAKINA: todas las hojas oficiales completas (S-L 13, Fourier 11, Green 7, separación de variables 12+14, características 9), las colecciones de exámenes completas (primer orden 16, Laplace 16, Frobenius 16, estabilidad 16), el examen completo y la hoja de probabilidad (19 ejercicios) en M21. Quedan en la fuente, a propósito: los apuntes mecanografiados <code>eda1/2/5/6/8</code> (242 págs. — serían una duplicación de la teoría de edf, no se transcriben; disponibles para consulta), <code>aguirregabiria.pdf</code>  (el propio libro fuente de edf) y el cuaderno de Mathematica (<code>sturm_liouville_adibidea.pdf</code>)."
      }
     ]
    },
    {
     "mota": "hutsunea",
     "izenburua": "La escalera de métodos: análisis complejo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Decisión (2026-07-23): la escalera pedagógica es CÁLCULO (Taylor, series de funciones — incluido en M14) <math display=\"inline\"><mo>→</mo></math> ANÁLISIS COMPLEJO (tema APARTE, aún sin escribir) <math display=\"inline\"><mo>→</mo></math> MÉTODOS MATEMÁTICOS (este módulo). La teoría de EDP está INCLUIDA (2026-07-23, desde el cuaderno CG-06); queda la sección de transformaciones integrales (lo último del tema 9 del programa). Análisis complejo, pendiente de escribir — fuentes: los seminarios del usuario (<code>AAA_TEXES_analitex</code>, en coautoría), Kaufmann (referencia pura), compendio cap. 1 (complejos, traducido al euskera)."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "koadernoa_metodo_n_p054_mk.typ",
     "xehetasuna": "transcripciones literales, maquetación y comprobación matemática",
     "hizkuntza": "es"
    }
   ]
  }
 ]
};
