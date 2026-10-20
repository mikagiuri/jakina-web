/* JAKINA · kapitulua «B6.1 - EDO: oinarriak eta lehen ordena (1.-2. gaiak)» (03mm_01edo), desde edicion2/kapituluak/03mm_01edo/03mm_01edo.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_01edo"] = {
 "gakoa": "03mm_01edo",
 "titulua": "JAKINA - B6 - Métodos matemáticos - 1/9",
 "azala": "B6.1 - EDO: fundamentos y primer orden (temas 1-2)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/03mm_01edo/03mm_01edo.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Métodos matemáticos",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "La última caja de herramientas para la física, a la medida de una física que está llamando a la puerta: ecuaciones diferenciales (la segunda ley de Newton, el oscilador, el circuito RLC y la ecuación de ondas tienen todos la misma forma) y probabilidad (imprescindible para el tratamiento de las medidas y para la física estadística de la etapa IV)."
    }
   ],
   "edukia": [
    "Ekuazio diferentzial arruntak: lehen ordena, linealak, sistemak",
    "Laplace-ren transformatua eta serie bidezko soluzioak",
    "Egonkortasuna eta Sturm–Liouville",
    "Probabilitatea eta estatistika"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M20",
   "izenburua": "Ecuaciones diferenciales ordinarias",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Clasificar una ecuación diferencial e identificar su orden.",
    "Resolver ecuaciones de primer orden: separables, lineales, exactas.",
    "Resolver ecuaciones lineales de coeficientes constantes.",
    "Usar sistemas lineales y la transformada de Laplace."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "M14 — Integrales; M11 — Diagonalización"
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "edf_eus",
   "xehetasuna": "Capítulos 1-4",
   "hizkuntza": "eu"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Conceptos básicos de las ecuaciones diferenciales",
   "blokeak": [
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Curso de ecuaciones diferenciales</strong><br>Nivel A1.5: introductorio, riguroso y accesible"
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "1. Idea general",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una <strong>ecuación diferencial</strong> es una ecuación en la que aparece una función incógnita junto con una o varias de sus derivadas."
    },
    {
     "mota": "testua",
     "html": "En una ecuación algebraica, normalmente buscamos un número. En una ecuación diferencial, buscamos una función."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "no es una pregunta sobre un valor concreto de <math display=\"inline\"><mi>y</mi></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> busca una función tal que sus derivadas y sus valores cumplan esa relación."
    },
    {
     "mota": "testua",
     "html": "Otro ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "busca las funciones cuya segunda derivada es la opuesta de la función original."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "2. ¿Por qué son importantes?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las ecuaciones diferenciales aparecen cuando una magnitud cambia y queremos describir ese cambio."
    },
    {
     "mota": "testua",
     "html": "Ejemplos habituales:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "el crecimiento de una población;",
      "el enfriamiento de un cuerpo;",
      "la caída de un objeto;",
      "el movimiento de un muelle;",
      "la propagación del calor;",
      "la evolución de una epidemia;",
      "los circuitos eléctricos;",
      "los modelos económicos."
     ]
    },
    {
     "mota": "testua",
     "html": "La idea principal puede resumirse así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aldaketa-legea </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ekuazio diferentziala </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> funtzio soluzioa </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, si una población crece con una velocidad proporcional a su tamaño, podemos escribir una ecuación como esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>P</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mi>P</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es la población, <math display=\"inline\"><mi>t</mi></math> es el tiempo y <math display=\"inline\"><mi>k</mi></math> es la constante de proporcionalidad."
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "3. Función incógnita y variable independiente",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En una ecuación como esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "la variable independiente es <math display=\"inline\"><mi>x</mi></math>."
    },
    {
     "mota": "testua",
     "html": "La función incógnita es <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La derivada <math display=\"inline\"><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></math> indica cómo cambia <math display=\"inline\"><mi>y</mi></math> cuando cambia <math display=\"inline\"><mi>x</mi></math>."
    },
    {
     "mota": "testua",
     "html": "También podemos escribirlo así:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ambas notaciones significan lo mismo cuando la variable independiente está clara."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "4. Solución de una ecuación diferencial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una <strong>solución</strong> es una función que, al sustituirla en la ecuación, convierte la igualdad en verdadera."
    },
    {
     "mota": "testua",
     "html": "Ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Una solución es esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "en efecto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero estas también son soluciones:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>7</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por eso muchas ecuaciones diferenciales tienen una <strong>familia de soluciones</strong>."
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "5. Solución general y solución particular",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La <strong>solución general</strong> contiene constantes arbitrarias."
    },
    {
     "mota": "testua",
     "html": "Ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solución general:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Además sabemos que:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "entonces:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>5</mn><mo>=</mo><msup><mn>0</mn><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, la <strong>solución particular</strong> es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "6. Problema de valor inicial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>problema de valor inicial</strong> combina dos componentes:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "una ecuación diferencial;",
      "una condición inicial."
     ]
    },
    {
     "mota": "testua",
     "html": "Ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La ecuación dice cómo cambia la función."
    },
    {
     "mota": "testua",
     "html": "La condición inicial fija una solución concreta dentro de la familia de soluciones."
    },
    {
     "mota": "testua",
     "html": "En este caso, la solución será una función exponencial que pasa por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "7. Orden de una ecuación diferencial",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>orden</strong> de una ecuación diferencial es el orden de la derivada más alta que aparece."
    },
    {
     "mota": "testua",
     "html": "Ejemplos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es de primer orden."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es de segundo orden."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>−</mo><mn>2</mn><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es de tercer orden."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "8. EDO y EDP",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una <strong>ecuación diferencial ordinaria</strong> o <strong>EDO</strong> contiene derivadas respecto a una única variable independiente."
    },
    {
     "mota": "testua",
     "html": "Ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Una <strong>ecuación en derivadas parciales</strong> o <strong>EDP</strong> contiene derivadas parciales respecto a varias variables independientes."
    },
    {
     "mota": "testua",
     "html": "Ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Aquí la función incógnita es <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La variable <math display=\"inline\"><mi>x</mi></math> puede representar una posición, y la variable <math display=\"inline\"><mi>t</mi></math>, el tiempo."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "9. Linealidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una ecuación diferencial es <strong>lineal</strong> si la función incógnita y sus derivadas aparecen solo a primera potencia y no están multiplicadas entre sí."
    },
    {
     "mota": "testua",
     "html": "Forma típica de primer orden:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ejemplos lineales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ejemplos no lineales:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En la primera aparece <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>."
    },
    {
     "mota": "testua",
     "html": "En la segunda aparece el producto <math display=\"inline\"><mrow><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "En la tercera aparece <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, una función no lineal de la incógnita."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "10. Homogénea y no homogénea",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En las ecuaciones lineales, una ecuación es <strong>homogénea</strong> cuando el término independiente es cero."
    },
    {
     "mota": "testua",
     "html": "Ejemplo homogéneo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Ejemplo no homogéneo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La diferencia es importante, porque las técnicas de resolución cambian."
    },
    {
     "mota": "testua",
     "html": "En una ecuación no homogénea suele haber dos partes:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio orokorra </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio homogeneoa </mtext><mspace width=\"0.333em\"></mspace></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio partikularra </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Esta idea aparecerá con claridad en los temas de segundo orden."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "11. Grado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El <strong>grado</strong> es la potencia de la derivada de mayor orden, siempre que la ecuación sea polinómica en las derivadas."
    },
    {
     "mota": "testua",
     "html": "Ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orden: 2."
    },
    {
     "mota": "testua",
     "html": "Grado: 3."
    },
    {
     "mota": "testua",
     "html": "Pero en esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "el grado no está definido de forma elemental, porque la derivada aparece dentro de una función trigonométrica."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "12. Interpretación geométrica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una ecuación diferencial de primer orden, por ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "puede interpretarse geométricamente."
    },
    {
     "mota": "testua",
     "html": "En cada punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la ecuación indica la pendiente que debe tener la curva solución."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "significa que la pendiente depende solo de <math display=\"inline\"><mi>x</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, la pendiente es <math display=\"inline\"><mn>0</mn></math>."
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math>, la pendiente es <math display=\"inline\"><mn>1</mn></math>."
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, la pendiente es <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "La solución es una curva que sigue la pendiente indicada en cada punto."
    },
    {
     "mota": "ezezaguna",
     "izena": "caja"
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "13. Ejemplos resueltos",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 1"
    },
    {
     "mota": "testua",
     "html": "Clasifica la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>5</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solución:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Es una EDO, porque aparece una única variable independiente.",
      "Es de primer orden, porque la derivada más alta es <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math>.",
      "Es lineal, porque <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> aparecen a primera potencia.",
      "Es homogénea, porque el término independiente es cero."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 2"
    },
    {
     "mota": "testua",
     "html": "Clasifica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solución:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Es una EDO.",
      "Es de segundo orden.",
      "Es lineal.",
      "Es no homogénea, porque aparece <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 3"
    },
    {
     "mota": "testua",
     "html": "Clasifica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solución:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Es una EDO.",
      "Es de primer orden.",
      "No es lineal, porque aparece <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>.",
      "La distinción homogénea/no homogénea, en el sentido lineal habitual, no se aplica directamente."
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 4"
    },
    {
     "mota": "testua",
     "html": "Comprueba si"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es solución de la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivamos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pero:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, sí, es solución."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 5"
    },
    {
     "mota": "testua",
     "html": "Comprueba si"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es solución de la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivamos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Coincide con la ecuación."
    },
    {
     "mota": "testua",
     "html": "Por tanto, sí, es solución."
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "14. Errores habituales",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Error 1: confundir la solución con un número"
    },
    {
     "mota": "testua",
     "html": "En álgebra elemental, resolver suele significar encontrar un número."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mn>3</mn><mo>=</mo><mn>7</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tiene esta solución:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En las ecuaciones diferenciales, resolver significa encontrar una función."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Error 2: olvidar la constante"
    },
    {
     "mota": "testua",
     "html": "En esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "no basta con escribir:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La solución general es:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Error 3: clasificar mal la linealidad"
    },
    {
     "mota": "testua",
     "html": "La ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es lineal."
    },
    {
     "mota": "testua",
     "html": "Aunque aparezca <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi></mrow></math>, la variable <math display=\"inline\"><mi>x</mi></math> no es la función incógnita. La incógnita es <math display=\"inline\"><mi>y</mi></math>."
    },
    {
     "mota": "testua",
     "html": "En cambio:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "no es lineal."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Error 4: confundir orden y grado"
    },
    {
     "mota": "testua",
     "html": "En esta:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "el orden es 2, porque aparece <math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math>."
    },
    {
     "mota": "testua",
     "html": "El grado es 2, porque <math display=\"inline\"><msup><mi>y</mi><mo>″</mo></msup></math> está elevada al cuadrado."
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "15. Ejercicios",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nivel 1: Calentamiento"
    },
    {
     "mota": "testua",
     "html": "1. Indica el orden de cada ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "2. Di si son EDO o EDP:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "3. Comprueba si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math> es solución de la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "4. Comprueba si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math> es solución de la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nivel 2: Consolidación"
    },
    {
     "mota": "testua",
     "html": "5. Clasifica por completo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>4</mn><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "6. Clasifica por completo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>9</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "7. Clasifica por completo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "8. Determina si la ecuación es lineal o no lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "9. Determina si la ecuación es lineal o no lineal:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "10. Encuentra la solución general de:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Nivel 3: Reto"
    },
    {
     "mota": "testua",
     "html": "11. Encuentra una familia de soluciones de:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "12. Encuentra la solución particular que cumple esta condición:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "13. Comprueba si"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es solución de la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "14. Clasifica:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "15. Explica con tus palabras la diferencia entre una ecuación algebraica y una ecuación diferencial."
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "16. Pistas y soluciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "1."
    },
    {
     "mota": "testua",
     "html": "La ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es de orden 1."
    },
    {
     "mota": "testua",
     "html": "La ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> es de orden 2."
    },
    {
     "mota": "testua",
     "html": "La ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>‴</mo></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> es de orden 3."
    },
    {
     "mota": "testua",
     "html": "2."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> es una EDO."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>u</mi></mrow><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> es una EDP."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es una EDO."
    },
    {
     "mota": "testua",
     "html": "3."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, entonces <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>, sí, es solución."
    },
    {
     "mota": "testua",
     "html": "4."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>, entonces <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Sí, es solución."
    },
    {
     "mota": "testua",
     "html": "5."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>4</mn><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "EDO, de primer orden, lineal, no homogénea."
    },
    {
     "mota": "testua",
     "html": "6."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>9</mn><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "EDO, de segundo orden, lineal, homogénea."
    },
    {
     "mota": "testua",
     "html": "7."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "EDO, de primer orden, no lineal."
    },
    {
     "mota": "testua",
     "html": "8."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Lineal."
    },
    {
     "mota": "testua",
     "html": "9."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "No lineal, porque aparece el producto <math display=\"inline\"><mrow><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "10."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>5</mn><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "11."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Entonces:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "12."
    },
    {
     "mota": "testua",
     "html": "Como esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "y:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "tenemos:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mn>4</mn><mo>=</mo><msup><mn>0</mn><mn>3</mn></msup><mo>+</mo><mi>C</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>C</mi><mo>=</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Solución:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>4</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "13."
    },
    {
     "mota": "testua",
     "html": "Si esto:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "entonces:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mn>2</mn><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sí, es solución."
    },
    {
     "mota": "testua",
     "html": "14."
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Orden: 2."
    },
    {
     "mota": "testua",
     "html": "Grado: 2."
    },
    {
     "mota": "testua",
     "html": "Es no lineal, porque la derivada de mayor orden aparece elevada al cuadrado."
    },
    {
     "mota": "testua",
     "html": "15."
    },
    {
     "mota": "testua",
     "html": "Una ecuación algebraica busca números."
    },
    {
     "mota": "testua",
     "html": "Una ecuación diferencial busca funciones y relaciona esas funciones con sus variaciones."
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "17. Ficha resumen",
   "blokeak": [
    {
     "mota": "taula",
     "goiburua": [
      "<strong>Kontzeptua</strong>",
      "<strong>Ideia nagusia</strong>"
     ],
     "lerroak": [
      [
       "Ekuazio diferentziala"
      ],
      [
       "Funtzio ezezagun bat eta haren deribatuak dituen ekuazioa"
      ],
      [
       "EDO"
      ],
      [
       "Aldagai bakarrarekiko deribatuak"
      ],
      [
       "EDP"
      ],
      [
       "Hainbat aldagairekiko deribatu partzialak"
      ],
      [
       "Ordena"
      ],
      [
       "Agertzen den deribatu altuena"
      ],
      [
       "Soluzio orokorra"
      ],
      [
       "Konstanteak dituen soluzio-familia"
      ],
      [
       "Soluzio partikularra"
      ],
      [
       "Hasierako edo mugaldeko baldintzak betetzen dituen soluzioa"
      ],
      [
       "Lineala"
      ],
      [
       "Ezezaguna eta haren deribatuak lehen mailan agertzen dira eta ez daude biderkatuta"
      ],
      [
       "Ez-lineala"
      ],
      [
       "Ezezagunaren potentziak, biderkadurak edo funtzioak agertzen dira"
      ],
      [
       "Homogeneoa"
      ],
      [
       "Ekuazio lineal batean, gai independentea zero da"
      ],
      [
       "Ez-homogeneoa"
      ],
      [
       "Ekuazio lineal batean, kanpoko gai ez-nulu bat agertzen da"
      ]
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "18. Miniguía para tomar decisiones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para clasificar una ecuación diferencial, pregúntate en este orden:"
    },
    {
     "mota": "testua",
     "html": "1. ¿La incógnita es una función? 2. ¿Aparecen derivadas? 3. ¿Hay una única variable independiente o varias? 4. ¿Cuál es la derivada de mayor orden? 5. ¿La ecuación es lineal? 6. Si es lineal, ¿es homogénea o no homogénea? 7. ¿Se pide la solución general o una solución particular?"
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "19. Cierre del tema",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este primer tema todavía no enseña a resolver muchas ecuaciones diferenciales, pero establece el vocabulario necesario."
    },
    {
     "mota": "testua",
     "html": "A partir del próximo tema empezaremos con el primer gran método de resolución:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "es decir, las <strong>ecuaciones separables</strong>."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 1,
   "izenburua": "Conceptos básicos",
   "blokeak": [
    {
     "mota": "ezezaguna",
     "izena": "epigrafea"
    },
    {
     "mota": "testua",
     "html": "En este primer capítulo se discuten algunas generalidades sobre ecuaciones diferenciales que irán siendo analizadas con mayor detalle en los siguientes capítulos. Comenzaremos introduciendo el concepto de ecuación diferencial y una primera clasificación de los tipos a que puede pertenecer. Luego analizaremos las distintas formas en que aparecen sus soluciones y haremos las primeras observaciones sobre la existencia y unicidad de la solución en las dos principales familias de problemas que aparecen en física. Acabaremos el capítulo clasificando los métodos de resolución de ecuaciones diferenciales."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "Ecuaciones diferenciales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En una ecuación ordinaria ---que por oposición a las diferenciales será llamada en este texto <strong>finita</strong>--- como <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> no aparecen las derivadas de la incógnita. Cuando aparezca alguna de esas derivadas, diremos que se trata de una <strong>ecuación diferencial</strong>. Un ejemplo sencillo es <math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> donde, como haremos a partir de ahora siguiendo una extendida costumbre, hemos usado una prima para indicar la derivada con respecto a <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>≡</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Puesto que tomamos derivadas con respecto a <math display=\"inline\"><mi>x</mi></math>, decimos que <math display=\"inline\"><mi>x</mi></math> es la <strong>variable independiente</strong>, mientras que la incógnita (<math display=\"inline\"><mi>y</mi></math> en este caso) recibe el nombre de <strong>variable dependiente</strong>. Ya que en (1.2) solo hay una variable independiente y la derivada es ordinaria, se dice que es una <strong>ecuación diferencial ordinaria</strong>, como lo es también la ecuación del péndulo matemático: <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En esta última expresión hemos seguido la costumbre de la mecánica de que cada punto indica una derivada con respecto a <math display=\"inline\"><mi>t</mi></math>, siendo <math display=\"inline\"><mi>t</mi></math> la variable independiente de la ecuación (1.4): <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>≡</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> A partir de este momento utilizaremos indistintamente las abreviaturas (1.3) y (1.5), alternándolas con el uso ocasional de la notación completa para la derivada. También serán abundantes los ejemplos tomados de la física, lo que no debería sorprendernos si tenemos en cuenta, además del tipo de público a que está destinado este texto, que la historia y las aplicaciones de las ecuaciones diferenciales están inextricablemente unidas a la física: baste recordar las contribuciones del propio Newton (nació el día de Navidad de 1642 (4 de enero de 1643 en el calendario gregoriano) en Woolsthorpe (Inglaterra) y murió el 31 de marzo de 1727 en Londres. Su magna obra _Philosophiae Naturalis Principia Mathematica_ (1687) es considerada sin discusión el libro científico más importante e influyente de todos los tiempos. En él sentó las bases de la mecánica y la teoría de la gravitación universal. Fue el creador, al tiempo que Leibniz, del cálculo diferencial, que él llamó de *fluxiones*. Su contribución a la óptica es también de excepcional importancia e incluye el telescopio reflector y su influyente _Opticks_ (1704). Su nombre aparece en muchos otros contextos, incluyendo la cuadratura numérica, el desarrollo de las potencias del binomio y la regla de Barrow, a quien sucedería como _Lucasian Professor_ en Cambridge) o el papel central que las ecuaciones diferenciales juegan entre los útiles matemáticos del físico."
    },
    {
     "mota": "testua",
     "html": "También es ordinaria la ecuación de Newton para el movimiento relativo en un sistema de dos cuerpos si la interacción mutua viene dada por un campo de fuerzas newtoniano: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi mathvariant=\"bold-italic\">𝒓</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><msup><mi>r</mi><mn>3</mn></msup></mfrac><mi mathvariant=\"bold-italic\">𝒓</mi><mi>.</mi></mrow></math> Puesto que en este último caso cada vector tiene tres componentes, nos hallamos en realidad en presencia de un <strong>sistema de ecuaciones diferenciales</strong>: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>x</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>y</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><msup><mi>d</mi><mn>2</mn></msup><mi>z</mi></mrow><mrow><mi>d</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup></mfrac><mo>,</mo></mrow></math> donde las variables dependientes son tres: <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>z</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Si la ecuación contiene derivadas parciales, se llama <strong>ecuación diferencial en derivadas parciales</strong>. Por ejemplo, en la ecuación de Schrödinger (1887-08-12, Viena; 1961-01-04, Alpbach, Austria). Su mecánica ondulatoria, en 1926, supuso, junto a la mecánica matricial que Heisenberg había propuesto en 1925, el nacimiento de la mecánica cuántica, aunque nunca aceptó la interpretación probabilística de la función de onda sostenida por Born y la escuela de Copenhague. También trabajó en radiactividad, dinámica de redes cristalinas, física atómica y relatividad general. Compartió con Dirac el premio Nobel de Física de 1933. <math display=\"block\"><mrow><mi>i</mi><mi>ℏ</mi><mfrac><mrow><mi>∂</mi><mi>ψ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>ℏ</mi><mn>2</mn></msup><mrow><mn>2</mn><mi>m</mi></mrow></mfrac><msup><mi>∇</mi><mn>2</mn></msup><mi>ψ</mi><mo>+</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>ψ</mi></mrow></math> las variables independientes de las que depende la función de onda <math display=\"inline\"><mi>ψ</mi></math> son el tiempo <math display=\"inline\"><mi>t</mi></math> y las tres coordenadas espaciales, que aparecen tanto en el vector <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒓</mi></math> como en forma de variables de derivación en el operador laplaciano <math display=\"inline\"><msup><mi>∇</mi><mn>2</mn></msup></math>."
    },
    {
     "mota": "testua",
     "html": "Puesto que se llama <strong>orden</strong> de una ecuación al máximo orden de derivación que en ella aparece, las ecuaciones del péndulo, de Newton y de Schrödinger que acabamos de mencionar son de segundo orden, como la mayor parte de las ecuaciones fundamentales de la física, mientras que (1.2) es de primer orden. Igualmente, las ecuaciones de Maxwell (13-06-1831, Edimburgo, Escocia; 05-11-1879, Cambridge, Inglaterra). Su primera contribución relevante fue la predicción de que los anillos de Saturno debían estar compuestos de numerosas partículas para ser estables. Es el creador, junto a Boltzmann, de la teoría cinética de los gases y su inmortal contribución, las leyes del electromagnetismo que llevan su nombre, apareció en el libro _A Treatise on Electricity and Magnetism_ en 1873. Su proposición de que la luz es un fenómeno ondulatorio electromagnético fue confirmada experimentalmente por Hertz. en el vacío constituyen un sistema de ecuaciones diferenciales en derivadas parciales de primer orden con dos variables dependientes vectoriales (o seis escalares): <math display=\"block\"><mrow><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>4</mn><mi>π</mi><mi>ρ</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>∇</mi><mo>⋅</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑩</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑩</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi mathvariant=\"bold-italic\">𝑬</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>+</mo><mn>4</mn><mi>π</mi><mi mathvariant=\"bold-italic\">𝑱</mi><mi>.</mi></mrow></math> Las ecuaciones de Schrödinger y Maxwell satisfacen el principio de superposición (la suma de soluciones es solución), lo que matemáticamente se traduce por su carácter <strong>lineal</strong>: las incógnitas aparecen solo en forma de combinaciones lineales con coeficientes que son constantes o que dependen exclusivamente de las variables independientes. La aparición de una función no lineal, el seno, en la ecuación del péndulo matemático hace que ésta sea no lineal excepto en la aproximación de pequeñas oscilaciones en la que se reduce al oscilador armónico <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Tampoco es lineal la ecuación (1.6), ni lo son las ecuaciones de Einstein (14-03-1879, Ulm, Alemania; 18-04-1955, Princeton, EE.UU.) Cualquiera de sus contribuciones de 1905 ---la hipótesis del cuanto de luz para explicar el efecto fotoeléctrico (que le valió el premio Nobel de 1921), los dos trabajos sobre el movimiento browniano, el artículo fundador de la teoría de la relatividad especial y aquél en que estableció la equivalencia entre masa y energía--- le hubiera valido por sí sola un puesto de honor en la historia de la física. En 1906 escribió el primer trabajo en teoría cuántica del estado sólido al estudiar los calores específicos. En 1907 formula el principio de equivalencia, que inicia una serie de trabajos que culminaría en 1916 y establecería la teoría general de la relatividad. en el vacío, que, aunque se escriben como <math display=\"block\"><mrow><msub><mi>R</mi><mrow><mi>μ</mi><mi>ν</mi></mrow></msub><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> esconden bajo esa apariencia engañosamente simple un sistema altamente no lineal."
    },
    {
     "mota": "testua",
     "html": "No debe pensarse que las ecuaciones diferenciales agotan ---junto con las finitas--- los tipos de ecuaciones que aparecen en física. Por ejemplo, veremos en los problemas 5.12 y 5.16 del capítulo 5 un caso muy simple de ecuaciones integro-diferenciales, en las que las incógnitas o sus derivadas aparecen bajo el signo de integral y en el problema 5.31 aparece el caso más simple de ecuaciones diferenciales funcionales: las ecuaciones diferenciales con retraso, en las que la incógnita y sus derivadas aparecen para distintos valores de la variable independiente."
    },
    {
     "mota": "testua",
     "html": "Desde este momento solo consideraremos ecuaciones diferenciales ordinarias y dejaremos las ecuaciones en derivadas parciales para otros textos."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "Tipos de soluciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aunque los conceptos que estudiaremos aquí se pueden generalizar de forma inmediata a sistemas de ecuaciones, para simplificar la notación nos limitaremos a considerar en este apartado una única ecuación diferencial ordinaria de orden arbitrario <math display=\"inline\"><mi>n</mi></math>, que siempre puede escribirse como <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo>,</mo><msup><mi>y</mi><mo>″</mo></msup><mo>,</mo><mi>…</mi><mo>,</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> por medio de una función <math display=\"inline\"><mi>F</mi></math> adecuada."
    },
    {
     "mota": "testua",
     "html": "Se llama <strong>solución explícita</strong> de la ecuación (1.15) a toda función de la variable independiente <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> que, sustituida en la ecuación diferencial, la convierte en una identidad <math display=\"inline\"><mi>I</mi></math> en un cierto intervalo, que es el <strong>intervalo de definición</strong> de la solución: <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><msup><mi>f</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>I</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> es solución explícita de la ecuación (1.2). ¿Cuál es su intervalo de definición?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No siempre se expresa la solución de una ecuación diferencial con la variable dependiente despejada. De hecho, a menudo es más fácil hallar una <strong>solución implícita</strong>, es decir, una ecuación finita <math display=\"block\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> tal que cada una de sus soluciones <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (con <math display=\"inline\"><mrow><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∈</mo><mi>I</mi></mrow></math>) sea solución explícita de la ecuación diferencial. El concepto de solución implícita es útil porque, en general, no es necesario hallar las soluciones explícitas de (1.18), ya que puede verse si son soluciones de la ecuación diferencial comprobando que <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>g</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>g</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> se satisface idénticamente como consecuencia de (1.18). En la práctica, a menudo es más fácil comprobar que la ecuación diferencial se convierte en una identidad si en ella se sustituyen juiciosamente la ecuación finita y las que se obtienen derivando ésta con respecto a <math display=\"inline\"><mi>x</mi></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> (que puede escribirse en la forma (1.18) sin más que cambiar de miembro el 1) es una solución implícita de (1.2). No despeje <math display=\"inline\"><mi>y</mi></math> para hacer esta comprobación."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No obstante, aunque no haga falta calcularla, es preciso asegurarse de que existe alguna solución explícita de la ecuación (1.18), ya que en caso contrario tendríamos una <strong>solución formal</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> es una solución formal de (1.2), al menos si no admitimos soluciones complejas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Puesto que a menudo es más fácil dar soluciones paramétricas de las ecuaciones finitas que hallar las correspondientes soluciones explícitas, no debería extrañar que también sean útiles las <strong>soluciones paramétricas</strong> de ecuaciones diferenciales, que consisten en un par de funciones de un parámetro, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> e <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que convierten a la ecuación diferencial en una identidad, a lo largo de un cierto intervalo del parámetro <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mfrac><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> es una solución paramétrica de (1.2)."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Existencia de soluciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Aunque es cierto que no toda ecuación diferencial tiene soluciones (por ejemplo, es obvio que tanto la ecuación finita <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> como la diferencial <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> carecen de soluciones reales), las ecuaciones diferenciales que se encuentran en la práctica tienen muchas soluciones, en general. De hecho, son corrientes las <strong>familias paramétricas de soluciones</strong>, es decir, soluciones (explícitas, implícitas o paramétricas) que dependen de uno o varios parámetros que son constantes en la derivación con respecto a la variable independiente."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que las siguientes expresiones definen familias uniparamétricas de soluciones de la ecuación (1.2): <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math> ¿De qué tipo es cada una de estas familias?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Se llama <strong>solución general</strong> a cualquier familia de soluciones de una ecuación de orden <math display=\"inline\"><mi>n</mi></math> que dependa de <math display=\"inline\"><mi>n</mi></math> parámetros independientes. Por ejemplo, todas las soluciones del anterior ejercicio son soluciones generales, ya que dependen de un parámetro y la ecuación es de primer orden. El mismo ejercicio demuestra que la solución general no es necesariamente única. Es, por tanto, claro que solución general no es sinónimo de conjunto de todas las soluciones de la ecuación excepto, como veremos, en las ecuaciones lineales."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>2</mn><mi>C</mi></mrow></math> es solución general implícita de la siguiente ecuación: <math display=\"block\"><mrow><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> ¿Puede hallar la correspondiente solución general explícita?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por cada elección de los valores de los parámetros de una familia de soluciones (sea general o no) se obtiene una <strong>solución particular</strong>. Así, tomando <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>1</mn></mrow></math> en las soluciones generales (1.21), (1.23) y (1.24) del ejercicio 1.5 se obtienen soluciones particulares que habían sido discutidas anteriormente en algunos ejercicios. Una solución de una ecuación diferencial que no sea solución particular de una cierta solución general, es decir, que no pueda ser obtenida eligiendo adecuadamente los valores de los parámetros en la solución general<span class=\"j-oin\">[ En general, se admite también tomar límites cuando los parámetros van a <math display=\"inline\"><mrow><mi>±</mi><mi>∞</mi></mrow></math>, ya que este proceso equivale a sustituir un parámetro arbitrario <math display=\"inline\"><mi>C</mi></math> por otro parámetro arbitrario <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>C</mi></mrow></math> y tomar <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>. ]</span> se dice que es una <strong>solución singular</strong> respecto a la general considerada."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> es una solución general de: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Clasifique como particulares o singulares las siguientes soluciones de esta misma ecuación: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mn>4</mn><mi>.</mi></mrow></mfrac></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Unicidad de la solución",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El anterior apartado ha puesto de manifiesto que las ecuaciones diferenciales tienen habitualmente un número infinito de soluciones. Se plantea, en consecuencia, el problema de identificar la que corresponde al problema físico concreto que queremos analizar. Dicho de otra forma, el problema no está completamente planteado cuando se conoce la ecuación diferencial: son necesarios otros datos. Es fácil sospechar que, hablando en términos generales, harán falta tantos datos (condiciones) adicionales como parámetros aparezcan en la solución general."
    },
    {
     "mota": "testua",
     "html": "Una forma habitual de proporcionar esos datos adicionales consiste en dar los valores de la variable dependiente, <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y de sus <math display=\"inline\"><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math> primeras derivadas, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mi>…</mi></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, para un valor dado de la variable independiente, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>. Se dice entonces que se ha planteado un <strong>problema de condiciones iniciales</strong> o un <strong>problema de Cauchy</strong>. Por ejemplo, es inmediato comprobar que el problema de valores iniciales <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> admite como soluciones a <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>, que se obtienen sin más que elegir <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math> en la solución general. Obsérvese que aunque se llame «inicial» al punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, nada impide integrar la ecuación hacia atrás, es decir, para valores <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el problema <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> admite también dos soluciones, mientras que si elegimos <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> no hay ninguna (real)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estos dos ejemplos muestran sin lugar a dudas que las condiciones iniciales no garantizan siempre la existencia y unicidad de las soluciones. Como podemos sospechar, acertadamente, que al menos parte del problema proviene del hecho de que en la ecuación diferencial estudiada antes la derivada de orden más alta está elevada al cuadrado, consideremos una ecuación escrita en <strong>forma normal</strong>, es decir, con la derivada de orden más alta despejada. Para hacer creíble la existencia y unicidad de la solución <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mrow></math> de un problema de condiciones iniciales del tipo indicado, intentemos construir la solución en forma de serie de Taylor alrededor del punto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> en que se ha dado la condición inicial: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>⋯</mi><mo>+</mo><mfrac><mn>1</mn><mrow><mi>n</mi><mi>!</mi></mrow></mfrac><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>n</mi></msup><mo>+</mo><mi>⋯</mi></mrow></math> El primer coeficiente de la serie nos lo da directamente la condición inicial, <math display=\"inline\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math>, que, junto con la ecuación diferencial y sus derivadas, permite calcular los otros coeficientes: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por supuesto, para que este procedimiento constructivo garantice la existencia y unicidad deben añadirse condiciones matemáticas que aseguren la existencia y convergencia del desarrollo."
    },
    {
     "mota": "testua",
     "html": "Siguiendo trabajos del propio Cauchy, Peano (27-08-1858, Cuneo, Piamonte; 20-04-1932, Turín, Italia). Además del teorema de existencia de soluciones, se recuerdan los axiomas de Peano que definen los números naturales en términos de conjuntos y las curvas que rellenan por completo el interior de un cuadrado. Es junto con Frege el fundador de la lógica matemática y destacó por la importancia que concedía al rigor matemático. demostró que basta la continuidad de la función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para garantizar la existencia de soluciones, pero el siguiente ejercicio demuestra que esa condición no es suficiente para asegurar la unicidad, lo que obligará a enunciar en distintos contextos teoremas precisos de existencia y unicidad."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> e <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≤</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>3</mn><mi>/</mi><mn>2</mn></mrow></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math> son dos soluciones diferentes del problema de condiciones iniciales <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mi>/</mi><mn>3</mn></mrow></msup><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> ¿Cuál puede ser el origen de la ausencia de unicidad?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No siempre se dan las condiciones adicionales en un único punto. Cuando las mismas se proporcionan para distintos valores de la variable independiente se dice que se ha planteado un <strong>problema de condiciones de contorno</strong>. Podemos adelantar que este problema es, en general, mucho más difícil que el de condiciones iniciales. (Por ejemplo, la falta de solución para la mayoría de los valores de la energía es la razón de que dicha magnitud aparezca cuantizada en muchos sistemas cuánticos). Limitémonos aquí a analizar un ejemplo ilustrativo muy sencillo."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere el oscilador armónico clásico unidimensional en variables adimensionales <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Compruebe que <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> es la solución general y admitamos, hasta que lo demostremos en el capítulo 3, que contiene todas las posibles soluciones. Demuestre que el número de soluciones de los problemas de condiciones de contorno <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> es, respectivamente, uno, cero e infinito."
      }
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Métodos de resolución",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una parte importante del contenido de este texto está dedicada a describir métodos que permiten hallar las soluciones de ecuaciones diferenciales. En general, preferiríamos disponer de un <strong>método exacto</strong>, es decir, de uno que proporcione una expresión analítica cerrada para la solución. De hecho, a este tipo pertenecen la mayor parte de los métodos descritos en este texto. Pero ya podemos adelantar que, al igual que ocurre con las ecuaciones finitas o las integrales, solo unos pocos tipos de ecuaciones (muy especialmente las lineales) son abordables mediante métodos exactos. Desde el punto de vista de las ecuaciones diferenciales se considera que el problema está terminado cuando ha sido <strong>reducido a cuadraturas</strong>, es decir cuando la solución ha sido escrita en una forma que contenga a lo sumo integrales de funciones que dependen solo de la variable independiente. Sin embargo, urgimos al lector a intentar resolver todas las integrales que aparezcan, ya que, en contra de lo que sucede a menudo en la práctica, serán casi siempre resolubles en los ejemplos y problemas considerados en este libro."
    },
    {
     "mota": "testua",
     "html": "También debe tenerse en cuenta que al expresar analíticamente la solución de una ecuación diferencial deben usarse muy a menudo <strong>funciones especiales</strong>, es decir, funciones que no son <strong>elementales</strong> (como lo son el seno hiperbólico, la exponencial o el arco tangente) y que en muchos casos tienen como definición natural el hecho de ser soluciones apropiadas de ciertas ecuaciones diferenciales."
    },
    {
     "mota": "testua",
     "html": "La aparición y desarrollo de sistemas de <strong>cálculo simbólico</strong> ha aliviado notablemente la dificultad de aplicar los métodos exactos más conocidos (y algunos menos conocidos, o poco prácticos para el cálculo a mano)."
    },
    {
     "mota": "testua",
     "html": "El reducido número de ecuaciones que pueden resolverse mediante métodos exactos obliga a recurrir a menudo a <strong>métodos aproximados</strong> que, a su vez, pueden clasificarse en distintos tipos. A pesar de su gran importancia, el nivel de esta asignatura nos obligará a ver solo un poco sobre <strong>métodos aproximados analíticos</strong>. Los <strong>métodos gráficos</strong> siguen siendo muy importantes para estudiar propiedades cualitativas de algunas ecuaciones diferenciales, pero como métodos de resolución aproximada han sido sustituidos por los <strong>métodos numéricos</strong>, que con la gran extensión alcanzada por los ordenadores se han convertido en los más usados en la práctica por científicos y técnicos."
    },
    {
     "mota": "testua",
     "html": "Como alternativa a los <strong>métodos cuantitativos</strong> que hemos mencionado hasta ahora y en los que se intenta construir (aunque sea aproximadamente) la solución, existen los <strong>métodos cualitativos</strong> con los que se pretende obtener información descriptiva del sistema. Por ejemplo, a menudo interesa conocer el comportamiento del sistema en alguno de los límites <math display=\"inline\"><mrow><mi>t</mi><mo>→</mo><mi>±</mi><mi>∞</mi></mrow></math> (si <math display=\"inline\"><mi>t</mi></math> es la variable independiente), especialmente si se sabe que el comportamiento asintótico es simple y que se alcanza rápidamente tras un corto transitorio más o menos difícil de calcular. El capítulo 8 estará dedicado a los métodos cualitativos."
    },
    {
     "mota": "testua",
     "html": "No queremos terminar este apartado sin recordar que para un físico el método más importante y útil para resolver ecuaciones diferenciales consiste en el uso de sus conocimientos de física. De hecho muchos conceptos y técnicas aprendidas en las asignaturas de física ---muy especialmente las leyes de conservación y las simetrías asociadas--- son de gran ayuda para resolver (o, al menos, avanzar en la resolución de) las ecuaciones diferenciales que aparecen en la práctica de la física."
    },
    {
     "mota": "testua",
     "html": "Consideremos, como ejemplo, el péndulo matemático <math display=\"block\"><mrow><mover><mi>θ</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><mfrac><mi>g</mi><mi>l</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> e intentemos resolverlo. A menudo en los libros de texto se utiliza en este caso una de las técnicas de solución de problemas más fructíferas: se hace una aproximación, que en este caso consiste en suponer que las oscilaciones son lo suficientemente pequeñas como para que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>≈</mo><mi>θ</mi></mrow></math>, con lo que la ecuación se reduce al oscilador armónico, que es una ecuación lineal cuya conocida solución se recuerda en el problema 1.3."
    },
    {
     "mota": "testua",
     "html": "Si queremos hallar la solución exacta, aprovecharemos que es un sistema conservativo unidimensional para reducirlo a cuadraturas. Primero utilizaremos la <strong>ley de conservación</strong> de la energía mecánica para obtener una <strong>integral primera</strong>, concepto éste que analizaremos en el apartado 3.4.5."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Multiplique los dos miembros de la ecuación (1.43) por <math display=\"inline\"><mrow><mi>m</mi><msup><mi>l</mi><mn>2</mn></msup><mover><mi>θ</mi><mo accent=\"true\">̇</mo></mover></mrow></math> e integre el resultado para obtener la energía mecánica conservada en función de la amplitud <math display=\"inline\"><mi>α</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "También nos es conocida de mecánica la siguiente técnica que, como veremos en el apartado 2.5, recibe el nombre de <strong>separación de variables</strong>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el resultado del ejercicio 1.11 puede reescribirse, cuando el péndulo está subiendo, como: <math display=\"block\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>θ</mi></msubsup><mfrac><mrow><mi>d</mi><mi>φ</mi></mrow><mrow><mn>2</mn><msqrt><mrow><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>φ</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mrow></mfrac><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> siendo <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math> el instante en que ha pasado por el mínimo: <math display=\"inline\"><mrow><mi>θ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La integral de la última expresión no puede expresarse en términos de funciones elementales: hacen falta funciones especiales. En efecto, se calcula fácilmente haciendo uso de las integrales elípticas del apartado D.8."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Use el cambio de variable de integración <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ν</mi></mrow></math> para probar que la solución implícita del péndulo es <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi mathvariant=\"normal\">arcsin</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>θ</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∖</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><msqrt><mfrac><mi>g</mi><mi>l</mi></mfrac></msqrt><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> ¿Cuál es la solución explícita?"
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Escriba la ecuación diferencial que describe la caída de una partícula puntual en el seno de un fluido en el que el rozamiento es proporcional a la velocidad y clasifíquela. ¿Qué sucede si el rozamiento es proporcional al cuadrado de la velocidad?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe si <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> es solución de la ecuación: <math display=\"block\"><mrow><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>1</mn></mrow><mrow><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math> En caso afirmativo, discuta el correspondiente intervalo de definición."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Oscilador armónico",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el oscilador armónico, <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̈</mo></mover><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> admite como solución general todas y cada una de las siguientes expresiones: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>D</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>D</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>x</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>ω</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mtd></mtr></mtable></math> ¿Son equivalentes entre sí? ¿Podría añadir alguna expresión a la anterior lista?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Cuáles son los intervalos de definición de las soluciones (1.21) y (1.22) de la ecuación (1.2)? ¿Es solución <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msqrt><mrow><msup><mi>C</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>?</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> solución general implícita de <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></mfrac><mi>?</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></mfrac></mrow></math> es solución general de <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math> Halle directamente dos soluciones sencillas por inspección y discuta si son soluciones singulares o no."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <em>todas las soluciones</em> de la ecuación <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math> satisfacen la condición inicial <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. ¿Por qué no se cumple la unicidad de la solución? ¿Es la función <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≤</mo><mn>0</mn><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mn>0</mn></mtd></mtr></mtable></mrow></mrow></math> una solución de este problema de condiciones iniciales?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que el problema de valores iniciales <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><msqrt><mi>y</mi></msqrt><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> admite como solución toda función <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≤</mo><mi>C</mi><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>,</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>≥</mo><mi>C</mi></mtd></mtr></mtable></mrow></mrow></math> con <math display=\"inline\"><mrow><mi>C</mi><mo>≥</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "El cubo vacío",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si nos muestran un cubo vacío con un pequeño agujero en el fondo es imposible saber cuándo estaba lleno de agua hasta el borde. Demuestre que este hecho es consecuencia de que no se satisface el teorema de existencia y unicidad. <em>Nota:</em> Recuerde que la altura <math display=\"inline\"><mi>h</mi></math> del agua viene dada por la ley de Torricelli (15-10-1608, Faenza, Romaña; 25-10-1647, Florencia, Toscana). Fue secretario de Galileo y el primero en crear y mantener un vacío importante. También descubrió el principio del barómetro e hizo otras contribuciones en matemáticas, mecánica de la partícula e hidrodinámica, incluyendo la ley que lleva su nombre. <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>h</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><msqrt><mi>h</mi></msqrt><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>k</mi></math> es una constante."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Periodo del péndulo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Use el ejercicio 1.13 para calcular el período del péndulo. Desarrolle el resultado hasta el cuarto orden en la amplitud <math display=\"inline\"><mi>α</mi></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "Familias de curvas, existencia-unicidad y condición de ecuación exacta",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cómo se construye una ecuación diferencial de primer orden eliminando el parámetro de una familia de curvas, forma implícita/normal, teorema de existencia y unicidad, y condición de exactitud."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "De las familias de curvas a la ecuación diferencial"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 12:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo>⇒</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>. Pendiente horizontal en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, vertical en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <strong>Ejemplo 14:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; sustituyendo <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mo>=</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> En general, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> juntas → ecuación diferencial (parámetro eliminado)."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math>, la derivada total: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">inplizitua</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>P</mi><mi>Q</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">normala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Teorema de existencia y unicidad"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Existencia y unicidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> son continuas, entonces el problema <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></mrow></math> tiene <strong>solución única</strong>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 15:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>x</mi><mi>/</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> continuas en un entorno de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ⇒ solución única. (No definida en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejemplo 16: circunferencias por el origen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (pasa por el origen). Eliminando <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mrow><mi>y</mi><mo>−</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todas esas circunferencias pasan por <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero la forma normal es <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> allí; por tanto <strong>no contradicen el teorema de unicidad</strong>: las hipótesis fallan en ese punto común."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones exactas (condición)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es <strong>exacta</strong> si <math display=\"inline\"><mrow><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 12 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, pendiente horizontal en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, vertical en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); ejemplo 14 (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; el cuadrado pierde el signo de <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow></math>, describe toda la familia); <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mo>⇒</mo><msub><mi>U</mi><mi>x</mi></msub><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; teorema de existencia y unicidad (ejemplo 15: <math display=\"inline\"><mi>f</mi></math>, <math display=\"inline\"><msub><mi>f</mi><mi>y</mi></msub></math> continuas en un entorno de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ⇒ solución única, salvo en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); ⭐ ejemplo 16 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; todas las circunferencias por <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero la forma normal <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> allí: las hipótesis fallan, no contradice el teorema); condición de exactitud <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub></mrow></math>. Se han recogido algunas observaciones imprecisas en euskera/castellano. Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p054.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "Del cuaderno (CNmetodosx): conceptos básicos",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CNmetodosx",
     "xehetasuna": "CNmetodosx — rótulo METODOS MATEMATICOS, páginas 1-47, 50-53, 60-61, 66-69 y 82 (30 fragmentos): edición crítica de la fuente manuscrita de las EDO, literal, en cuatro capas; verificada de forma independiente el 04-08-2026",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "iturria",
     "proiektua": "CNmetodosx",
     "xehetasuna": "CNmetodosx — rótulo METODO MATEMATIKOAK, páginas 48-49, 54-59, 62-65, 70-75, 78-81 y 83-95 (18 fragmentos; en las páginas 88-89 el rótulo no vuelve a verse): edición crítica literal y verificación matemática de las EDO",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "iturria",
     "proiektua": "IMG_2026_07_30_02_20_28S.jpg",
     "xehetasuna": "CNmetodosx, páginas 76-77 (fragmento 1): rótulo mixto METODO MATEMATIKOAK / METODOS MATEMATICOS conservado tal cual; edición crítica literal de las EDO lineales",
     "hizkuntza": "eu/es"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Definición de ecuación diferencial: EDO/EDP, orden y ejemplos de solución"
    },
    {
     "mota": "testua",
     "html": "Definición de ecuación diferencial, distinción entre EDO y EDP, definición de orden, forma explícita/implícita y ejemplos de solución."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Definición y tipos"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ecuación diferencial (ED)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ecuación en la que una función y sus derivadas aparecen relacionadas entre sí."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dos tipos:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>EDO</strong> (ecuación diferencial ordinaria): cuando en la ecuación aparece una función de <strong>una sola variable</strong>.",
      "<strong>EDP</strong> (ecuación en derivadas parciales): cuando en la ecuación aparece una función de <strong>más de una variable</strong>."
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Orden de una ecuación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La <strong>derivada más alta</strong> de la función que aparece."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 1"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>∂</mi><mn>2</mn></msup><mrow><mi>∂</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>3</mn><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La derivada más alta es <math display=\"inline\"><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math>: <strong>orden 3</strong>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Forma explícita e implícita"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> esplizitua: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mo>′</mo></msup><mo>,</mo><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo><mi>⋯</mi><mo>,</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> inplizitua: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msup><mi>f</mi><mo>′</mo></msup><mo>,</mo><msup><mi>f</mi><mo>″</mo></msup><mo>,</mo><mi>⋯</mi><mo>,</mo><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Una <strong>solución</strong> de una ED es una función <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que satisface la ecuación."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 2: <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>t</mi><mo>=</mo><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>d</mi><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mo>∫</mo><mi>d</mi><mi>t</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>t</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>t</mi><mo>+</mo><mi>k</mi></mrow></msup><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><msup><mi>e</mi><mi>k</mi></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 3: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>?"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (bai, soluzioa da)</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: distinción EDO/EDP (una variable / más), orden (derivada más alta), forma explícita/implícita y definición de solución. Ejemplo 1: <math display=\"inline\"><msup><mi>f</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></math> orden 3 (en el segundo miembro solo orden 2 y 1): el «ORDEN 3» del autor es correcto; para una función de una sola variable se espera <math display=\"inline\"><mi>d</mi></math> ordinaria, pero el autor usa los símbolos <math display=\"inline\"><mi>∂</mi></math> (recogido tal cual). Ejemplo 2: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>K</mi><msup><mi>e</mi><mi>t</mi></msup></mrow></math> (para cualquier <math display=\"inline\"><mi>K</mi></math> real, incluido <math display=\"inline\"><mrow><mi>K</mi><mo>=</mo><mn>0</mn></mrow></math>); el paso <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>t</mi><mo>+</mo><mi>k</mi></mrow></math> del autor solo toma <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y el cambio de nombre de <math display=\"inline\"><msup><mi>e</mi><mi>k</mi></msup></math> a <math display=\"inline\"><mi>k</mi></math> oculta ramas, pero la familia <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup><mi>k</mi></mrow></math> es completa con <math display=\"inline\"><mi>k</mi></math> como constante arbitraria. Ejemplo 3: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math> es solución (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; oscilador armónico básico). Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/00_kontzeptu_oinarrizkoak.typ</code>"
      },
      {
       "mota": "testua",
       "html": "confirma las mismas tres nociones y la familia <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. Véase <code>koadernoa_metodo_n_p001.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Solución implícita, EDO lineal, crecimiento exponencial y curvas integrales"
    },
    {
     "mota": "testua",
     "html": "Comprobación de una solución implícita, forma general de la EDO lineal, crecimiento exponencial de bacterias y curvas integrales de las EDO de primer orden."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 4: solución implícita"
    },
    {
     "mota": "testua",
     "html": "¿Es <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi></mrow></math> solución de la ecuación de <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>? Derivando: <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Multiplicando por <math display=\"inline\"><mi>y</mi></math> y reordenando: <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "EDO lineal (definición)"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "EDO lineal",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>a</mi><mrow><mi>n</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><msub><mi>a</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>+</mo><mi>⋯</mi><mo>+</mo><msub><mi>a</mi><mn>0</mn></msub><mi>y</mi><mo>=</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 5: crecimiento exponencial (bacterias)"
    },
    {
     "mota": "testua",
     "html": "Recursos ilimitados; la población crece a un ritmo <math display=\"inline\"><mi>k</mi></math>, proporcional a la población en el instante <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>k</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mi>k</mi><mi>d</mi><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>k</mi><mi>t</mi><mo>+</mo><mi>c</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup><mi>R</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1000</mn></mrow></math>: <math display=\"inline\"><mrow><mn>1000</mn><mo>=</mo><msup><mi>e</mi><mn>0</mn></msup><mi>R</mi><mo>⇒</mo><mi>R</mi><mo>=</mo><mn>1000</mn></mrow></math>. Con <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>2</mn></mrow></math>, duplicación: <math display=\"block\"><mrow><mn>2000</mn><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>t</mi></mrow></msup><mn>1000</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>t</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mo>=</mo><mn>2</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>t</mi><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn></mrow><mn>2</mn></mfrac><mo>≈</mo><mn>0</mn><mo>,</mo><mn>3466</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 6: curva integral por <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mo>∫</mo><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> Por integración por partes (<math display=\"inline\"><mrow><mo>∫</mo><mi>u</mi><mi>d</mi><mi>v</mi><mo>=</mo><mi>u</mi><mi>v</mi><mo>−</mo><mo>∫</mo><mi>v</mi><mi>d</mi><mi>u</mi></mrow></math>), <math display=\"inline\"><mrow><mi>I</mi><mo>=</mo><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mo>∫</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>e</mi><mi>x</mi></msup><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>+</mo><mi>I</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>I</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>I</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mi>I</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> Desde <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo>+</mo><mi>k</mi><mo>⇒</mo><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>. Curva integral: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 7: EDO de la familia (<math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Derivando respecto a <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mi>y</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: corrección de signo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 4 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math> en los intervalos en que <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi></mrow></math> exige <math display=\"inline\"><mrow><mi>y</mi><mo>&gt;</mo><mn>0</mn></mrow></math>); forma general de la EDO lineal (<math display=\"inline\"><mrow><msub><mi>a</mi><mi>n</mi></msub><mo>≠</mo><mn>0</mn></mrow></math>); ejemplo 5 (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>R</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>t</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mn>1000</mn></mrow></math>, duplicación <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>/</mi><mn>2</mn></mrow></math>; unidad de tiempo sin precisar); ejemplo 6 (dos integraciones por partes ⇒ <math display=\"inline\"><mrow><mn>2</mn><mi>I</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, desde <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math>). ⚠ <strong>Corrección (mahairatua):</strong> ejemplo 7 — el original escribe <code>2y·y&#x27;=2t</code> y <code>y&#x27;=t/y</code>, sin signo; al derivar <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math> resulta <math display=\"inline\"><mrow><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>, por tanto <strong><math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mi>y</mi></mfrac></mrow></math></strong> (<math display=\"inline\"><mrow><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>); aquí corregido. (En <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> la circunferencia tiene tangente vertical y no se expresa como función derivable <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.) «orden n ⇒ n constantes» es una regla pedagógica (salvo soluciones singulares). Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "da la misma familia <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>. Véase <code>koadernoa_metodo_n_p002.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluciones implícitas, paramétricas y condiciones"
    },
    {
     "mota": "testua",
     "html": "Solución implícita y paramétrica (la circunferencia), distinción entre soluciones general, particular y singular (tipo Clairaut) y condiciones de contorno."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Solución implícita y paramétrica"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 7:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> (implícita) → <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> (explícita). <strong>Ejemplo 8:</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> por la regla de la cadena: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi mathvariant=\"normal\">sin</mi><mi>t</mi><mi>/</mi><mi mathvariant=\"normal\">cos</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math> <strong>En resumen</strong>, las soluciones de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><msqrt><mrow><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mo>=</mo><mi>a</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi></mtd></mtr></mtable></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Solución general, particular y singular"
    },
    {
     "mota": "testua",
     "html": "Una ecuación diferencial de orden <math display=\"inline\"><mi>h</mi></math> tiene una <strong>solución general</strong> con <math display=\"inline\"><mi>a</mi></math> parámetros; las <strong>particulares</strong> corresponden a valores concretos de los parámetros; las <strong>singulares</strong> son las que no proceden de la fórmula."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 9:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (primer orden, no lineal). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es solución: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>a</mi><mo>+</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mn>2</mn></msup><mo>−</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>a</mi><mi>x</mi><mo>−</mo><msup><mi>a</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math> <strong>Particulares:</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>), <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>1</mn></mrow></math>). <strong>Singular:</strong> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></math>: <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mi>✓</mi><mi>.</mi></mrow></math> (No está en la familia para ninguna constante <math display=\"inline\"><mi>a</mi></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Condiciones iniciales (ejemplo 9)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mo>⇒</mo><mi>a</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>a</mi><mo>=</mo><msqrt><mrow><mi>−</mi><mn>1</mn></mrow></msqrt></mrow></math> (no hay solución real en la familia)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Condiciones de contorno: ejemplo 11 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Solución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> a) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>1</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>A</mi><mo>=</mo><mn>2</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> b) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>1</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>−</mi><mi>B</mi><mo>=</mo><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> EZ DAGO SOLUZIORIK</mtext></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> c) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mn>0</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mn>0</mn><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> A edozein: INFINITU SOLUZIO</mtext></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: las formas implícita/explícita/paramétrica de <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> son coherentes (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>≠</mo><mn>0</mn></mrow></math>); ejemplo 9 (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es solución, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>/<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math> particulares, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></math> <strong>singular</strong>: no pertenece a la familia); condiciones iniciales (<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>a</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> no tiene solución real ni en la familia ni en la rama singular; para <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> no solo <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mn>0</mn></mrow></math> sino también la singular <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>4</mn></mrow></math> la cumple: el autor en esa línea solo enumera la rama de la familia); movimiento uniformemente acelerado (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub><mo>+</mo><msub><mi>v</mi><mn>0</mn></msub><mi>t</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>, dos constantes iniciales). ⭐ <strong>Condiciones de contorno (ejemplo 11):</strong> solución <strong>única</strong> (a), <strong>ninguna</strong> (b: <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mn>2</mn></mrow></math>) e <strong>infinitas</strong> (c: <math display=\"inline\"><mi>A</mi></math> libre): carácter de las condiciones de contorno (a diferencia de las de valores iniciales). Verificación interna: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> y"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_orden_superior.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p048.typ</code>."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 1,
   "izenburua": "Ecuaciones de primer orden",
   "blokeak": [
    {
     "mota": "ezezaguna",
     "izena": "epigrafea"
    },
    {
     "mota": "testua",
     "html": "Se analizan en este capítulo las principales propiedades de las ecuaciones diferenciales ordinarias de primer orden, que constituyen el caso más sencillo «a priori», de forma que resultan de gran utilidad para introducir o refinar conceptos que serán analizados en capítulos subsiguientes en contextos más generales. También se recogen los métodos exactos de resolución más conocidos, cuya importancia estriba en que, en la práctica, en numerosas ocasiones (con la importante salvedad de las ecuaciones y sistemas lineales) la resolución de ecuaciones de orden superior o sistemas de ecuaciones acaba por recurrir a la resolución de una única ecuación de primer orden."
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "Significado geométrico",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para motivar el estudio de las ecuaciones diferenciales ordinarias de primer orden podemos valernos de su sencillo significado geométrico."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Familias uniparamétricas de curvas"
    },
    {
     "mota": "testua",
     "html": "Como es bien sabido, una ecuación finita del tipo <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> define una curva en el plano. Por ejemplo, <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math> (o la expresión equivalente <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>) describe la circunferencia unidad centrada en el origen. Si en vez de una curva consideramos una familia uniparamétrica de curvas, su ecuación será del tipo <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> de forma que para cada valor del parámetro <math display=\"inline\"><mi>C</mi></math> (dentro de un cierto rango) se obtiene una curva de la familia. Por ejemplo, la familia de circunferencias centradas en el origen tiene como ecuación <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup><mo>,</mo></mrow></math> siendo el parámetro <math display=\"inline\"><mi>C</mi></math> el radio de la circunferencia (para <math display=\"inline\"><mrow><mi>C</mi><mo>≥</mo><mn>0</mn></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "Si entre la ecuación de una familia y su derivada <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> eliminamos el parámetro <math display=\"inline\"><mi>C</mi></math>, obtendremos la <strong>ecuación diferencial de la familia</strong> de la forma <math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> en la que, recordando el significado geométrico de la derivada, establece una relación entre cada punto del dominio y la pendiente de las curvas de la familia que por él pasan."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Derive la ecuación (2.2) para comprobar que la ecuación diferencial de la familia de circunferencias centradas en el origen es <math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nótese que en otros muchos casos, para hallar la ecuación diferencial de la familia, será preciso usar, además de la derivada, la ecuación finita de partida."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la ecuación diferencial de la familia de circunferencias de radio unidad con centro en el eje de abscisas. ¿Hay soluciones singulares?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como por construcción las funciones (2.1) forman una familia uniparamétrica de soluciones de la ecuación (2.5) y ésta es de primer orden, la familia es una solución general de la ecuación diferencial. Por supuesto, nada impide que haya, además, otras soluciones, tanto singulares como generales, que hayan sido introducidas en el proceso de derivación y eliminación de <math display=\"inline\"><mi>C</mi></math>. Cada curva de la familia cuya ecuación es (2.1) recibe el nombre de <strong>curva integral</strong> y su ecuación viene dada por una solución particular de la ecuación diferencial. En los ejemplos anteriores, cada circunferencia es una curva integral de la correspondiente ecuación diferencial y su ecuación una solución particular."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Congruencias de curvas"
    },
    {
     "mota": "testua",
     "html": "Existe un caso particular muy importante: si las curvas de la familia no se cortan, es decir, si por cada punto del plano dentro de un cierto dominio pasa una curva de la familia y solo una, se dice que la familia es una <strong>congruencia</strong> de curvas. En tal caso, a cada punto le corresponde la curva del haz que por él pasa y, por tanto, el valor del parámetro que identifica a esa curva. En consecuencia, es posible despejar ---al menos en principio--- en la ecuación de la familia (2.1) el parámetro y escribir la misma en la forma <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> que nos da el valor <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que corresponde al punto <math display=\"inline\"><mi>C</mi></math>. Un ejemplo de congruencia es la familia de circunferencias que hemos estado estudiando en el ejercicio 2.1 y que, de hecho, hemos escrito en (2.2) con el parámetro despejado."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Es una congruencia la familia analizada en el ejercicio 2.2?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como hemos visto en el ejercicio 2.1, en el caso de una congruencia, al calcular la derivada de su ecuación se obtiene directamente la correspondiente ecuación diferencial ya que el parámetro desaparece: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Multiplicando por <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> esta ecuación puede escribirse en <strong>forma simétrica</strong>, <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi>P</mi><mo>≡</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>≡</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math>. En el caso de la ecuación (2.6) la forma simétrica es <math display=\"block\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Veremos que la forma simétrica es útil en ciertas ocasiones, pero mucho más usual es la <strong>forma normal</strong> que se obtiene cuando se despeja la derivada de orden más alta <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> con <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>.</mi></mrow></math>. En el ejemplo (2.6) la forma normal es <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ezezaguna",
     "oina": "Congruencia de curvas, derivada y pendiente de la tangente.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "La forma normal permite una interpretación geométrica precisa que se esboza en la figura 2.1. La ecuación diferencial (2.11) da la pendiente <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>α</mi></mrow></math> de la tangente en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a la curva integral que por él pasa. Por cada punto pasa una única curva que tiene allí una tangente dada que define una dirección. Hay, por tanto, un <strong>campo de direcciones</strong>, descrito precisamente por la ecuación diferencial (2.11) en su dominio de definición, que nos da la dirección que corresponde a cada punto."
    },
    {
     "mota": "ezezaguna",
     "oina": "Congruencia y campo de direcciones.",
     "izena": "irudia (ez da konpilatu)"
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Teorema de existencia y unicidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La relación entre congruencias y ecuaciones diferenciales en forma normal es biunívoca, en su dominio de definición, si se cumplen ciertas condiciones matemáticas que se establecen con precisión en un <strong>teorema de existencia y unicidad</strong>. Aunque demostramos una forma más refinada del teorema en el apéndice A, nos limitaremos aquí a enunciar sin demostración una variante menos potente, pero que resulta de mayor utilidad práctica, ya que las condiciones suficientes son más fáciles de comprobar que otras menos restrictivas que pueden utilizarse en su lugar."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Existencia y unicidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la función <math display=\"inline\"><mi>f</mi></math> y su derivada <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> son continuas en un dominio, el problema de condiciones iniciales <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub><mo>,</mo></mrow></math> tiene una única solución para cada condición inicial <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> en el dominio."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esto garantiza que el conjunto de curvas integrales es una congruencia, con tal de que se cumpla una condición de continuidad, o incluso algo menos como veremos en el apéndice A. (La necesidad de condiciones matemáticas de regularidad ya había sido anticipada en el ejercicio 1.9)."
    },
    {
     "mota": "ezezaguna",
     "oina": "Circunferencias tangentes al eje de abscisas.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "Como ejemplo consideremos el conjunto de circunferencias tangentes al eje de abscisas con centro en el eje de ordenadas que aparece en la figura 2.3."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que la ecuación diferencial de esa familia es <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por el origen pasan infinitas soluciones, pero esto no contradice el teorema de existencia y unicidad ya que allí la ecuación diferencial tiene una singularidad. También la tiene en las dos bisectrices <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi></mrow></math>, pero excepto en el origen esto no impide la unicidad ---sino que refleja el hecho más trivial de que allí la tangente a las curvas integrales es vertical--- ya que la continuidad es condición suficiente, pero no necesaria."
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Ecuaciones exactas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como vimos en el apartado 2.1, al derivar la ecuación de una congruencia de curvas <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> se obtiene una ecuación diferencial en forma simétrica <math display=\"block\"><mrow><mi>d</mi><mi>u</mi><mo>≡</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> con <math display=\"block\"><mrow><mi>P</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>Q</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math> Por definición, una ecuación obtenida de esta forma como diferencial de una función, es decir, tal que cumpla las condiciones (2.18)--(2.19), se llama <strong>exacta</strong>."
    },
    {
     "mota": "testua",
     "html": "Como consecuencia del teorema de Schwarz, que nos asegura la igualdad de las derivadas cruzadas de funciones regulares<span class=\"j-oin\">[ Como es costumbre en física, llamaremos <strong>funciones regulares</strong> a aquellas que satisfacen, junto con sus derivadas, las condiciones de continuidad necesarias para garantizar el enunciado en que se usa el calificativo «regular». Esta costumbre, aunque poco precisa, aligera los enunciados de resultados matemáticos al evitar tener que indicar la clase de diferenciabilidad de las funciones involucradas. En los casos de interés práctico, las condiciones necesarias suelen cumplirse, salvo a lo sumo en algunos puntos (o lugares geométricos). Hay que señalar, sin embargo, que esos puntos <strong>singulares</strong> suelen ser de gran importancia en física (en uno de ellos se encuentra, por ejemplo, la carga puntual que crea el más sencillo de los campos electrostáticos) y en matemáticas (en especial, en la teoría de las funciones analíticas). Algunos puntos singulares jugarán un importante papel en el capítulo 6. ]</span> se cumple <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> para una ecuación diferencial exacta. Además, el recíproco de este resultado elemental es cierto."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una ecuación diferencial en forma simétrica, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es exacta si y solo si se satisface la condición (2.20)."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La demostración del teorema es interesante porque es constructiva y proporciona, por tanto, un método de resolución de ecuaciones que satisfagan (2.20). Para que se cumpla (2.18) definamos <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como la integral indefinida de <math display=\"inline\"><mi>P</mi></math> con respecto a <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≡</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> donde <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que no depende de <math display=\"inline\"><mi>x</mi></math>, está aún por determinar. Para que se satisfaga (2.19) debe cumplirse <math display=\"block\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> que, si hacemos uso de la hipótesis (2.20), se convierte en <math display=\"block\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Simplificando el resultado tenemos una ecuación en la que la <math display=\"inline\"><mi>x</mi></math> ha desaparecido y que se integra directamente con respecto a <math display=\"inline\"><mi>y</mi></math>: <math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msubsup><mo>∫</mo><msub><mi>y</mi><mn>0</mn></msub><mi>y</mi></msubsup><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>v</mi><mo>+</mo><mi>D</mi><mo>,</mo></mrow></math> donde <math display=\"inline\"><mi>D</mi></math> es una constante de integración arbitraria. Sustituyendo este valor en (2.21) la solución general de la ecuación exacta será la ecuación de la congruencia <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> o, si se prefiere una expresión más formal, <math display=\"block\"><mrow><msubsup><mo>∫</mo><msub><mi>x</mi><mn>0</mn></msub><mi>x</mi></msubsup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>v</mi><mo>+</mo><msubsup><mo>∫</mo><msub><mi>y</mi><mn>0</mn></msub><mi>y</mi></msubsup><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>v</mi><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> tras una redefinición trivial de la constante arbitraria."
    },
    {
     "mota": "testua",
     "html": "No hemos escrito esta última solución porque recomendemos su uso para resolver ecuaciones exactas (para lo que no hay nada mejor que recordar la definición y calcular la integral indefinida con respecto a una variable, derivar respecto a la otra y volver a integrar), sino porque es un caso particular de un resultado general que conocemos del cálculo vectorial."
    },
    {
     "mota": "testua",
     "html": "Si consideramos que <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>u</mi></mrow></math> es un potencial escalar, la congruencia de curvas (<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math> o <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>C</mi></mrow></math>) es el conjunto de las líneas equipotenciales y la ecuación diferencial <math display=\"inline\"><mrow><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math> de la congruencia expresa que el potencial es constante a lo largo de las líneas equipotenciales y también que el campo vectorial correspondiente <math display=\"block\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>≡</mo><mi>−</mi><mi>∇</mi><mi>V</mi><mo>=</mo><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math> es ortogonal en cada punto a dichas líneas (<math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mi>−</mi><mi>d</mi><mi>V</mi><mo>=</mo><mn>0</mn></mrow></math>). Además, reconocemos en este contexto que la condición (2.20) indica, precisamente, que el campo vectorial es conservativo: <math display=\"inline\"><mrow><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math>. Sabemos que en este caso el potencial puede recuperarse mediante una integral curvilínea: <math display=\"block\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msubsup><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>d</mi><mi mathvariant=\"bold-italic\">𝒓</mi><mo>=</mo><mi>V</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><msubsup><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> El camino de integración es arbitrario y si elegimos el formado por los segmentos <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>–<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>–<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la ecuación de las líneas equipotenciales (2.27) viene dada por (2.25)."
    },
    {
     "mota": "testua",
     "html": "Como ejemplo consideremos la ecuación <math display=\"block\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> que como se comprueba inmediatamente es exacta. Si integramos respecto a <math display=\"inline\"><mi>x</mi></math> el coeficiente de <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> obtenemos <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y si derivamos respecto a <math display=\"inline\"><mi>y</mi></math> e igualamos al coeficiente de <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math> se obtiene <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>, que integrado da <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>1</mn><mi>/</mi><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>D</mi></mrow></math>, por lo que la solución general, tras una redefinición de la constante arbitraria es, como ya sabíamos, la familia de circunferencias centradas en el origen <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>, es exacta."
      },
      {
       "mota": "testua",
       "html": "<strong>Construir <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> integrando <math display=\"inline\"><mi>Q</mi></math>.</strong> <math display=\"block\"><mrow><mo>∫</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <strong>Determinar <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> comparando con <math display=\"inline\"><mi>P</mi></math>.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; igualando esto con <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mi>K</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Vemos a continuación dos familias de ecuaciones diferenciales que son casos particulares de ecuaciones exactas."
    },
    {
     "mota": "azpititulua",
     "testua": "Ecuaciones sin la variable dependiente"
    },
    {
     "mota": "testua",
     "html": "Si en la ecuación falta la variable dependiente, <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> es claro que la ecuación es exacta ya que las dos derivadas cruzadas son nulas. De hecho, esta ecuación es muy simple y está prácticamente reducida a cuadraturas: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mo>∫</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva el siguiente problema: <code class=\"formula-ez\">y&#x27; = ln abs(x), wide op(&quot;lim&quot;, limits: #true)_(x arrow.r 0) y(x) = 0.</code> ¿Es única la solución?"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Ecuaciones de variables separadas"
    },
    {
     "mota": "testua",
     "html": "También cuando las variables dependiente e independiente aparecen separadas en dos términos distintos, <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> las derivadas cruzadas son nulas por lo que la ecuación es exacta. De hecho, se resuelve directamente mediante cuadraturas: <math display=\"block\"><mrow><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> Tomando <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mi>P</mi></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>1</mn></mrow></math> se recupera como caso particular el anterior. Un ejemplo de este tipo de ecuación es (2.28), que ha sido resuelta antes como si fuera una exacta del tipo más general posible."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mi>y</mi></msup><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "Factores integrantes",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Consideremos qué sucede si en la ecuación (2.28) se despeja <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math>, para obtener <math display=\"block\"><mrow><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Aunque las derivadas cruzadas no son iguales y, por tanto, la ecuación no es exacta, sabemos que en realidad se trata de una ecuación exacta que ha sido multiplicada por <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>y</mi></mrow></math>. La pregunta es si este proceso es reversible en general, como lo es en este caso particular, en el que basta multiplicar la ecuación no exacta por <math display=\"inline\"><mi>y</mi></math> para recuperar la exacta de partida."
    },
    {
     "mota": "testua",
     "html": "Si dada una ecuación no necesariamente exacta <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> existe una función <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tal que <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> sea exacta, se dice que <math display=\"inline\"><mi>μ</mi></math> es un <strong>factor integrante</strong> o <strong>multiplicador</strong> de la ecuación (2.36). Como la nueva ecuación es exacta, puede resolverse y sus soluciones serán también solución de la ecuación de partida, <em>con alguna posible excepción</em>."
    },
    {
     "mota": "testua",
     "html": "En efecto, como la ecuación original se obtiene multiplicando (2.37) por <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, puede haber soluciones de la ecuación original que anulen este factor sin anular la nueva ecuación (2.37), por lo que cuando se haya usado un factor integrante deberá comprobarse si hay soluciones de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> que no estén en la general obtenida resolviendo la ecuación exacta, en cuyo caso serán soluciones singulares de la original. Como ejemplo, consideremos la ecuación <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, que no es exacta, pero que admite el factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>y</mi></mrow></math>, con el que recuperamos la ecuación (2.28), pero entonces <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es una solución singular."
    },
    {
     "mota": "testua",
     "html": "Por otro lado, es posible que al multiplicar la ecuación de partida por <math display=\"inline\"><mi>μ</mi></math> se hayan añadido soluciones, que lo sean de <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y, por tanto, de (2.37), sin serlo de la ecuación de partida (2.36), por lo que deberá comprobarse en cada caso si las soluciones de esa ecuación finita lo son realmente de (2.36)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que la ecuación diferencial <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> admite como factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Calcule la solución general. ¿Hay alguna solución singular? ¿Y alguna raíz de <math display=\"inline\"><mi>μ</mi></math> que no satisfaga la ecuación diferencial?"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Comprobar que no es exacta.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Aplicar el factor integrante.</strong> Multiplicando por <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><mrow><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>Nueva comprobación (ahora exacta).</strong> <math display=\"inline\"><mrow><msup><mi>P</mi><mo>′</mo></msup><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>Q</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><msup><mi>P</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><msup><mi>Q</mi><mo>′</mo></msup></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Resolver.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><msup><mi>P</mi><mo>′</mo></msup><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, igualando esto con <math display=\"inline\"><mrow><msup><mi>Q</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mtext mathvariant=\"normal\">kte</mtext></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es obvio que si multiplicamos un factor integrante por una constante se sigue teniendo un factor integrante. Incluso veremos en distintos problemas que los factores integrantes no son necesariamente únicos en un sentido mucho menos trivial: es posible tener dos factores integrantes que no sean el uno múltiplo del otro. Tras responder negativamente a la unicidad, podemos plantear otra pregunta más difícil: ¿admite toda ecuación (2.36) un factor integrante que la convierta en exacta? La respuesta es afirmativa, pero un poco decepcionante: como consecuencia directa del teorema de existencia y unicidad, toda ecuación de primer orden admite algún factor integrante, pero no se conocen métodos generales que permitan hallarlo. La condición que debe satisfacerse es que la nueva ecuación (2.37) sea exacta: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>,</mo></mrow></math> que tras manipulación elemental se convierte en <math display=\"block\"><mrow><mi>Q</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>P</mi><mfrac><mrow><mi>∂</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>.</mi></mrow></math> Aunque esta ecuación en derivadas parciales tiene solución, debería ser claro que resolverla no va a ser, en general, más sencillo que resolver la ecuación original; pero veremos en subsiguientes secciones que, al menos en ciertos casos, proporciona una guía para intentar la búsqueda de un factor integrante de tipo especial."
    },
    {
     "mota": "testua",
     "html": "En términos de la analogía vectorial de la anterior sección, podemos decir que todo campo vectorial bidimensional, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>P</mi><mi mathvariant=\"bold-italic\">𝒊</mi><mo>+</mo><mi>Q</mi><mi mathvariant=\"bold-italic\">𝒋</mi></mrow></math>, es ortogonal a las líneas equipotenciales de un campo conservativo, que es, por tanto, paralelo (y por ello proporcional) en cada punto al campo de partida. En otras palabras, siempre pueden encontrarse trayectorias ortogonales a las líneas de corriente de cualquier campo de fuerza bidimensional. Nótese que esto no es cierto en tres dimensiones; solo los <strong>campos integrables</strong>, que satisfacen <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>⋅</mo><mi>∇</mi><mo>×</mo><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mn>0</mn></mrow></math>, son proporcionales a un gradiente, <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝑬</mi><mo>=</mo><mi>−</mi><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒓</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>∇</mi><mi>V</mi></mrow></math>, y admiten superficies ortogonales. Solo en dos dimensiones es cierto que todos los campos vectoriales sean integrables."
    },
    {
     "mota": "testua",
     "html": "Veamos algunos casos en que pueden construirse factores integrantes de forma sistemática."
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "Ecuaciones separables",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se llama <strong>separable</strong> a toda ecuación en la que las variables independiente y dependiente aparecen agrupadas en factores diferentes en los coeficientes de <math display=\"inline\"><mrow><mi>d</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math>: <math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>S</mi><mi>U</mi></mrow></math> separa las variables y, por tanto, permite reducir a cuadraturas una ecuación de este tipo: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mfrac><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> Las soluciones de <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, si existen, pueden ser soluciones singulares. Por ejemplo, si multiplicamos la ecuación <math display=\"block\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math> por el factor <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>d</mi><mi>x</mi><mi>/</mi><mi>x</mi><mi>y</mi></mrow></math>, obtenemos <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>,</mo></mrow></math> que se integra directamente para dar <math display=\"inline\"><mrow><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>C</mi><mi>x</mi></mrow></math> ---o, usando la función de Lambert del apartado D.3, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>W</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>---. La solución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> de <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> no es singular, ya que está incluida en la general para <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>4</mn></msup><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como veremos en otras secciones, este tipo de ecuaciones es importante porque para varias familias de ecuaciones el método sistemático de resolución que se conoce pasa por convertir la ecuación en una separable."
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "Factores integrantes especiales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Algo que puede intentarse ---sin garantías de éxito, por lo general--- es probar en la condición (2.40) que debe satisfacer el factor integrante funciones <math display=\"inline\"><mi>μ</mi></math> con estructura funcional particular. Aunque desarrollamos abajo la teoría completa en algunos casos y damos las expresiones que permiten ensayar distintas posibilidades, recomendamos una vez más usar las ideas fundamentales, que en este caso se reducen a recordar qué es un factor integrante y ver si es posible construir uno en que las variables <math display=\"inline\"><mi>x</mi></math> e <math display=\"inline\"><mi>y</mi></math> aparezcan solo en una cierta forma (que tal vez sea sugerida por nuestro conocimiento del problema en que aparece la ecuación a resolver)."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factores integrantes que no dependen de <math display=\"inline\"><mi>y</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Si probamos <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en (2.40) obtenemos <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto la condición necesaria y suficiente para que la ecuación admita un factor integrante de este tipo es que el miembro de la derecha de esta expresión no dependa de <math display=\"inline\"><mi>y</mi></math>, aunque sí puedan hacerlo sus componentes: <math display=\"block\"><mrow><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> en cuyo caso el factor integrante es <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>1</mn><mi>Q</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>. La constante de integración <math display=\"inline\"><mi>C</mi></math> no es importante, ya que si <math display=\"inline\"><mi>μ</mi></math> es un factor integrante también lo es <math display=\"inline\"><mrow><mi>C</mi><mi>μ</mi></mrow></math>, pero cambiar <math display=\"inline\"><mi>C</mi></math> equivale a multiplicar toda la ecuación con una constante, lo que no añade nada nuevo."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, si multiplicamos la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> con el factor <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, para que la nueva ecuación sea exacta las derivadas cruzadas deben satisfacer <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mtd></mtr></mtable></math> que también se escribe como <math display=\"block\"><mrow><mfrac><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> Puesto que en el último miembro de esa ecuación no aparece <math display=\"inline\"><mi>y</mi></math>, la misma puede integrarse para ver que <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> es un factor integrante. (Por supuesto, también podía haberse usado directamente (2.48) para obtener el mismo resultado). La ecuación obtenida al multiplicar la original con el factor integrante, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mfrac><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> es exacta, por supuesto, y se integra fácilmente: <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>+</mo><mn>4</mn><mi>x</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> con un factor integrante que solo depende de <math display=\"inline\"><mi>x</mi></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>No exacta.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Condición para probar <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.</strong> Aplicando la condición de Euler, tras multiplicar <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msup><mi>P</mi><mo>″</mo></msup><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>Q</mi><mo>″</mo></msup><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><msup><mi>P</mi><mo>″</mo></msup></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><msup><mi>Q</mi><mo>″</mo></msup></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>: se vuelve exacta con <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Resolver.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><msup><mi>P</mi><mo>″</mo></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; igualando <math display=\"inline\"><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></math> con <math display=\"inline\"><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math> se concluye que <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mtext mathvariant=\"normal\">kte</mtext></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factores integrantes que no dependen de <math display=\"inline\"><mi>x</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en (2.40) se obtiene <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>P</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Por tanto, la condición necesaria y suficiente para que la ecuación admita un factor integrante de este tipo es que el miembro de la derecha de esta expresión no dependa de <math display=\"inline\"><mi>x</mi></math>, en cuyo caso el factor integrante es <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>1</mn><mi>P</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿Admite la ecuación del ejercicio 2.10 un factor integrante del tipo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factores integrantes del tipo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>g</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Un factor integrante que solo dependiera de <math display=\"inline\"><mi>x</mi></math> e <math display=\"inline\"><mi>y</mi></math> a través de la función intermedia <math display=\"inline\"><mi>h</mi></math> vendría dado por <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow><mrow><mi>Q</mi><mfrac><mrow><mi>∂</mi><mi>h</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mi>P</mi><mfrac><mrow><mi>∂</mi><mi>h</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mrow></mfrac><mi>d</mi><mi>h</mi><mo>,</mo></mrow></math> y la condición para que exista es que el integrando solo dependa de <math display=\"inline\"><mi>x</mi></math> e <math display=\"inline\"><mi>y</mi></math> por medio de <math display=\"inline\"><mi>h</mi></math>."
    },
    {
     "mota": "testua",
     "html": "En general, solo un poco de vista o el conocimiento que tenemos del problema físico a resolver pueden guiarnos en la elección de la forma de <math display=\"inline\"><mi>h</mi></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> utilizando un factor integrante de la forma <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Derivadas parciales mediante una sola variable <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>.</strong> Cuando <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup></mrow></math> y <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup></mrow></math> (ambas iguales por la regla de la cadena). Sustituyendo en la condición de Euler: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>y</mi><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math> <strong>Resolver.</strong> <math display=\"inline\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>μ</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "Ecuaciones lineales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una ecuación en la que la incógnita y su derivada solo aparezcan en combinaciones lineales puede escribirse, despejando la derivada, como <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y recibe el nombre de <strong>ecuación lineal</strong>. Cuando el término independiente <math display=\"inline\"><mi>B</mi></math> es nulo se dice que la ecuación es <strong>homogénea</strong> y en caso contrario se llama <strong>completa</strong> o, a veces, <strong>inhomogénea</strong>."
    },
    {
     "mota": "testua",
     "html": "Es inmediato comprobar que se satisface la condición (2.47) que garantiza la existencia de un factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que vendrá dado por (2.48): <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>,</mo></mrow></math> y que convierte la ecuación en <math display=\"block\"><mrow><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> o, equivalentemente, <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> que proporciona la solución general mediante una segunda cuadratura, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>C</mi><mo>+</mo><mo>∫</mo><mi>B</mi><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> aunque, una vez más, no recomendemos aprender una fórmula como ésta, sino recordar que la ecuación lineal siempre admite un factor integrante que solo depende de la variable independiente y aplicar lo que esto significa. Sí tiene esta expresión la virtud de poner de manifiesto una estructura que, como veremos en el capítulo 3, es cierta para las ecuaciones lineales de cualquier orden: <em>la solución general de la completa es suma de la solución general de la homogénea</em> (que se obtiene tomando <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>) <em>y de una solución particular de la completa</em> (que puede obtenerse de la expresión general (2.63) dando un valor particular, como <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>, a la constante de integración). La solución particular puede elegirse de infinitas formas, ya que se obtiene una por cada valor de la constante <math display=\"inline\"><mi>C</mi></math>, pero como esta última es arbitraria, todas las elecciones conducen a la misma solución general."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Reescribiendo la ecuación de forma más sencilla, en lugar de <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><mi>x</mi></mfrac><mo>−</mo><mi>y</mi></mrow></math>, y ensayando directamente el factor integrante más simple: <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>+</mo><mi>μ</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>μ</mi></mrow></math> a partir del esquema general <math display=\"inline\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mn>1</mn><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mo>⇒</mo><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mi>y</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (emaitza, tarteko pausoak osorik berretsi gabe) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Nótese que, como <math display=\"inline\"><mi>μ</mi></math> no depende de <math display=\"inline\"><mi>y</mi></math>, en el caso de ecuaciones lineales no se ha ganado ni perdido ninguna solución al usar el factor integrante, por lo que la expresión (2.47) contiene todas las soluciones de la ecuación lineal."
    },
    {
     "mota": "testua",
     "html": "Debe notarse que la ecuación lineal homogénea de primer orden es separable y que, por tanto, puede también resolverse por el método del apartado 2.5."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Separe las variables de la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msub><mi>a</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> para escribir la solución por medio de una cuadratura. Concluya que, si <math display=\"inline\"><mi>k</mi></math> es constante, se cumple lo siguiente: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>k</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>k</mi><mi>x</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "Métodos de transformación",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como sabemos bien de asignaturas de física, muchos problemas son considerablemente más sencillos si se abordan en las coordenadas adecuadas. Lo mismo sucede con las ecuaciones diferenciales en general: a menudo un cambio de variables, que puede serlo de la independiente, de la dependiente o de ambas, permite resolver la ecuación. Se dice en esos casos que se utiliza un <strong>método de transformación</strong>. Veremos a continuación algunas de las familias más conocidas que se resuelven por métodos de este tipo."
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "Ecuaciones homogéneas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Recordemos que se llama <strong>función homogénea de grado</strong> <math display=\"inline\"><mi>r</mi></math> a la que satisface la condición <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mi>r</mi></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>a</mi><mi>.</mi></mrow></math> Se dice que la ecuación diferencial <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es <strong>homogénea</strong> si <math display=\"inline\"><mi>P</mi></math> y <math display=\"inline\"><mi>Q</mi></math> son funciones homogéneas del mismo grado: <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mi>r</mi></msup><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>a</mi><mi>r</mi></msup><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mo>∀</mo><mi>a</mi><mi>.</mi></mrow></math> Nótese que aquí se exige la homogeneidad con respecto a <math display=\"inline\"><mi>x</mi></math> e <math display=\"inline\"><mi>y</mi></math>, mientras que se dice que la ecuación lineal (2.59) es homogénea cuando <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>, es decir, cuando lo es con respecto a <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math>, pero no con respecto a <math display=\"inline\"><mi>x</mi></math>. Aunque resulta confusa, esta nomenclatura es la que utilizan todos los autores."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que una ecuación diferencial es homogénea si y solo si puede escribirse en la forma: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este ejercicio sugiere directamente el cambio de variables <math display=\"block\"><mrow><mi>u</mi><mo>≡</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>,</mo></mrow></math> de forma que la nueva incógnita tenga la misma invariancia que la propia ecuación frente al cambio de escala <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En efecto, con el mencionado cambio la ecuación homogénea se transforma en una separable <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>−</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> que como ya sabemos se reduce a cuadraturas tras separar variables."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Reescribiendo, <math display=\"inline\"><mrow><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>y</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>; la ecuación es homogénea (ya que <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math> son ambas funciones homogéneas de grado 1). Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>): <math display=\"block\"><mrow><mi>x</mi><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mi>u</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math> <strong>Separación de variables.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac></mrow></math>, integrando: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">arcsinh</mi><mo>&#8289;</mo></mrow><mi>u</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>x</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Una generalización de las ecuaciones homogéneas son las isobáricas, que presentan una invariancia de escala generalizada y se discutirán en el problema 2.16."
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "Ecuaciones del tipo <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El cambio de variables obvio, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow></math> (o <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>), reduce estas ecuaciones a separables: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo>+</mo><mi>b</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación diferencial <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mn>1</mn></mrow></math>. Sustituyendo: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mn>1</mn><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mi>d</mi><mi>x</mi></mrow></math> Integrando:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>A</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "Ecuaciones del tipo <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo>+</mo><mi>γ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En este tipo de ecuaciones existen dos casos según que las rectas <math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo>+</mo><mi>γ</mi><mo>=</mo><mn>0</mn></mrow></math> sean paralelas o se corten."
    },
    {
     "mota": "testua",
     "html": "1. Si las rectas son paralelas, <math display=\"block\"><mrow><mfrac><mi>α</mi><mi>a</mi></mfrac><mo>=</mo><mfrac><mi>β</mi><mi>b</mi></mfrac><mo>≡</mo><mi>k</mi><mo>,</mo></mrow></math> tenemos <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>γ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y, por tanto, la ecuación solo depende en realidad de <math display=\"inline\"><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> y pertenece al tipo anterior, que se reduce a una separable con el cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la siguiente ecuación: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "2. Si las rectas no son paralelas se cortan en un punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, por lo que el cambio de coordenadas <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>≡</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> traslada ese punto de corte al origen y convierte las ecuaciones de las rectas en <math display=\"inline\"><mrow><mi>a</mi><mi>u</mi><mo>+</mo><mi>b</mi><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mi>u</mi><mo>+</mo><mi>β</mi><mi>v</mi><mo>=</mo><mn>0</mn></mrow></math> y la propia ecuación en una homogénea, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>u</mi></mrow></mfrac><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>u</mi><mo>+</mo><mi>b</mi><mi>v</mi></mrow><mrow><mi>α</mi><mi>u</mi><mo>+</mo><mi>β</mi><mi>v</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mo>+</mo><mi>b</mi><mi>v</mi><mi>/</mi><mi>u</mi></mrow><mrow><mi>α</mi><mo>+</mo><mi>β</mi><mi>v</mi><mi>/</mi><mi>u</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> que se reduce a separable con el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>v</mi><mi>/</mi><mi>u</mi></mrow></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn></mrow></mfrac><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "<strong>Punto de intersección de las dos rectas.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mo>=</mo><mn>3</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo>,</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Método 1: cambio de variables a una homogénea, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math>.</strong> <math display=\"inline\"><mrow><msup><mi>t</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>s</mi><mo>−</mo><mi>t</mi></mrow><mrow><mi>s</mi><mo>+</mo><mi>t</mi></mrow></mfrac></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>t</mi><mi>s</mi></mfrac></mrow></math>: <math display=\"block\"><mrow><mi>u</mi><mo>+</mo><mi>s</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow></mfrac></mrow></math> <strong>Separación de variables.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mi>s</mi></mfrac></mrow></math>; como el numerador es proporcional a la derivada del denominador (con <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn></mrow></math>): <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>s</mi><mo>+</mo><mi>A</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo>=</mo><mi>C</mi><mi>s</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>t</mi><mi>s</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math>, deshaciendo el cambio <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>2</mn><mfrac><mrow><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow><mrow><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac></mrow></mfrac><mo>−</mo><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></msup><mo>=</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>3</mn><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Método 2: directamente como ecuación exacta.</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>, es exacta. <math display=\"block\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, igualando esto con <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>3</mn><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mi>x</mi><mi>y</mi><mo>+</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>3</mn><mi>y</mi><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "Ecuaciones de Bernoulli",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se llama ecuación de Bernoulli (27-12-1654, Basilea, Suiza; 16-08-1705, Basilea). Este miembro de una excepcional familia de matemáticos (era hermano de Johann y tío de Daniel) fue el primero en utilizar la palabra «integral», estudió la catenaria, descubrió la isocrona, trabajó en teoría de probabilidades, inventó el cálculo variacional y las coordenadas polares, así como los números y la distribución que llevan su nombre. a la que tiene la siguiente estructura: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>n</mi></msup><mo>,</mo></mrow></math> excepto en los casos <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, en los que se trata en realidad de una lineal. Es inmediato comprobar que el cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math> la convierte en la lineal <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>B</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Es de Bernoulli, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>y</mi><mfrac><mi>′</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>. Dividiendo la ecuación por <math display=\"inline\"><msup><mi>y</mi><mn>2</mn></msup></math>, <math display=\"inline\"><mrow><mi>y</mi><mfrac><mi>′</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>−</mi><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math> <strong>Homogénea.</strong> <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>μ</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (homogeneoa; partikularra amaitu gabe) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "Ecuaciones de Riccati",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Se llama ecuación de Riccati (28-05-1676, Venecia; 15-04-1754, Treviso, República de Venecia). Aparte de sus trabajos prácticos en hidráulica, fue un gran estudioso de las ecuaciones diferenciales y a él son debidos diversos métodos de reducción de orden, la separación de variables y el análisis detallado de la ecuación que lleva su nombre, que, sin embargo, había sido estudiada antes por Jacob Bernoulli. a la que tiene la siguiente estructura: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> excepto en los casos <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>, en los que se trata en realidad de una lineal y una de Bernoulli, respectivamente. No existe método general para resolver este tipo de ecuaciones, pero si por cualquier razón (inspección, propiedades físicas del problema, etc.) se conoce una solución particular de la ecuación <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el cambio de variables <math display=\"block\"><mrow><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math> la reduce a una de Bernoulli, ya que restando (2.81) y (2.82) se obtiene <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mn>2</mn><mi>B</mi><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>u</mi><mo>+</mo><mi>B</mi><msup><mi>u</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Compruebe que <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math> es solución de <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> y utilice este hecho para hallar la solución general."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Comprobación.</strong> <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> da <math display=\"inline\"><mrow><msub><mi>y</mi><msup><mi>p</mi><mo>′</mo></msup></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>, y <math display=\"inline\"><mrow><msubsup><mi>y</mi><mi>p</mi><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>: son iguales."
      },
      {
       "mota": "testua",
       "html": "<strong>Cambio de variable, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>y</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>.</strong> <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>; sustituyendo: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mi>μ</mi><mn>2</mn></msup><mo>+</mo><mfrac><mrow><mn>2</mn><mi>μ</mi></mrow><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mfrac><mrow><mn>2</mn><mi>μ</mi></mrow><mi>x</mi></mfrac><mo>=</mo><msup><mi>μ</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Bernoulli.</strong> Tomando <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mfrac><mn>1</mn><mi>μ</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>V</mi></mfrac></mrow></math>, se obtiene la ecuación lineal: <math display=\"block\"><mrow><msup><mi>V</mi><mo>′</mo></msup><mo>+</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>V</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> <strong>Homogénea.</strong> <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>⇒</mo><msup><mi>x</mi><mn>2</mn></msup><mi>V</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mi>B</mi><mo>⇒</mo><mi>V</mi><mo>=</mo><mfrac><mi>B</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Volver a <math display=\"inline\"><mi>μ</mi></math> y a <math display=\"inline\"><mi>y</mi></math>.</strong> <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>V</mi></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mn>3</mn><mi>B</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>μ</mi><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><mi>C</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando no se conoce ninguna solución, puede usarse el cambio de variables del problema 3.27, que la convierte en una lineal homogénea de segundo orden ---de hecho, como allí veremos las ecuaciones de Riccati son en cierto sentido preciso equivalentes a las lineales homogéneas de segundo orden--- y pueden ensayarse los métodos de los capítulos 3 y 6. Si esto también falla habrá que recurrir, como muchas otras veces, a los métodos aproximados del capítulo 7."
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "Envolventes y soluciones singulares",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Antes de estudiar las ecuaciones no resueltas en la derivada, haremos una breve digresión geométrica. Consideremos el haz de curvas de la figura 2.4, cuya ecuación es <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> Como puede verse, existe una curva, <math display=\"inline\"><mi>E</mi></math>, que no pertenece a la familia (y, por tanto, no"
    },
    {
     "mota": "ezezaguna",
     "oina": "Envolvente y puntos múltiples de un haz de curvas.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "testua",
     "html": "satisface dicha ecuación uniparamétrica), pero que es tangente en cada punto a una curva de la familia. Una curva con esta propiedad se llama <strong>envolvente</strong> del haz de curvas. Como sabemos, al derivar la ecuación del haz y eliminar el parámetro <math display=\"inline\"><mi>C</mi></math> obtenemos la ecuación diferencial <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> de la familia que, a diferencia de lo que ocurre con la ecuación finita, sí será satisfecha por la envolvente, ya que en cada punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> su pendiente <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> es la misma que la de la curva del haz a la que allí es tangente. Será por tanto una solución singular tanto en el sentido dado hasta ahora a ese concepto ---puesto que no pertenece a la solución general--- como en el más restrictivo usado a veces de ser una solución con la propiedad de que en todos sus puntos se infringe la propiedad de unicidad por pasar por ellos más de una solución con la misma tangente."
    },
    {
     "mota": "testua",
     "html": "Como veremos, ésta es una forma típica, aunque no exclusiva, en que aparecen las soluciones singulares de ecuaciones no resueltas en la derivada. Para que podamos comprobar este extremo, veamos cómo puede calcularse la ecuación de la envolvente. El punto <math display=\"inline\"><mi>P</mi></math> de la figura está en dos curvas del haz correspondientes a los valores <math display=\"inline\"><mi>C</mi></math> y <math display=\"inline\"><mrow><mi>C</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>C</mi></mrow></math> del parámetro; por tanto, satisface las ecuaciones de ambas curvas <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, o combinaciones lineales independientes de estas dos ecuaciones, como <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo>+</mo><mi mathvariant=\"normal\">Δ</mi><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">Δ</mi><mi>C</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> En el límite <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>C</mi><mo>→</mo><mn>0</mn></mrow></math> las dos curvas tenderán a confundirse y el punto <math display=\"inline\"><mi>P</mi></math> irá a la envolvente que, por tanto, satisfará las ecuaciones que se obtienen tomando dicho límite: <math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>φ</mi></mrow><mrow><mi>∂</mi><mi>C</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> La ecuación finita de la envolvente se obtiene eliminando el parámetro <math display=\"inline\"><mi>C</mi></math> entre las dos ecuaciones anteriores. La envolvente no satisface la ecuación de la familia para ningún valor fijo de <math display=\"inline\"><mi>C</mi></math>, pero ---suponiendo, además de la regularidad, que <math display=\"inline\"><mrow><msup><mi>∂</mi><mn>2</mn></msup><mi>φ</mi><mi>/</mi><mi>∂</mi><msup><mi>C</mi><mn>2</mn></msup><mo>≠</mo><mn>0</mn></mrow></math>--- puede en principio usarse la ecuación (2.88) para obtener el valor <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que corresponde a la curva de la familia tangente a la envolvente en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sustituyendo ese valor variable de la constante en (2.87) se obtiene la ecuación implícita de la envolvente. Nótese, sin embargo, que las ecuaciones (2.87)--(2.88) pueden contener otros lugares geométricos que satisfagan las ecuaciones. Por ejemplo, el punto <math display=\"inline\"><mi>Q</mi></math> satisfará en ese límite las mismas ecuaciones, pero converge a una línea de <strong>puntos múltiples</strong><span class=\"j-oin\">[ A veces se les llama también puntos <strong>acnodales</strong>.]</span>, es decir, puntos donde cada curva del haz se corta a sí misma. Pero nótese que la línea de puntos múltiples <math display=\"inline\"><mi>A</mi></math> no es tangente al haz y, por tanto, no tiene la misma pendiente. En consecuencia, pueden distinguirse las envolventes de otras curvas que satisfagan las ecuaciones (2.87)--(2.88) porque ellas satisfacen, además, la ecuación diferencial del haz. (Véase también el problema 2.29)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las envolventes del haz <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>. ¿Hay puntos múltiples?"
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "Ecuaciones no resueltas en la derivada",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si se quiere resolver una ecuación diferencial <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, puede intentarse despejar <math display=\"inline\"><mi>z</mi></math> de la ecuación finita <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y resolver las ecuaciones <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> —con <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>— que aparezcan, cuidando las soluciones singulares que puedan perderse o ganarse en el proceso."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, la ecuación <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> puede escribirse, resolviendo por la derivada, como <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> por lo que las soluciones son las que se obtienen anulando cada factor: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>C</mi></mrow></math> e <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Otro ejemplo lo encontramos al resolver el problema de Kepler en mecánica. En el caso del potencial newtoniano <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><mi>−</mi><mi>k</mi><mi>/</mi><mi>r</mi></mrow></math>, las leyes de conservación de la energía mecánica y el momento angular en coordenadas polares son <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>m</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mover><mi>r</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mi>r</mi><mn>2</mn></msup><msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mi>k</mi><mi>r</mi></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>L</mi><mo>=</mo><mi>m</mi><msup><mi>r</mi><mn>2</mn></msup><mover><mi>φ</mi><mo accent=\"true\">̇</mo></mover><mi>.</mi></mrow></math> Si se elimina <math display=\"inline\"><mi>t</mi></math> de estas ecuaciones y en lugar de la distancia polar <math display=\"inline\"><mi>r</mi></math> se usa <math display=\"inline\"><mrow><mi>u</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mi>r</mi></mrow></math>, la ecuación de la órbita se escribe <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mi>p</mi></mfrac><mi>u</mi><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mi>.</mi></mrow></math> El signo <math display=\"inline\"><mrow><mi>ε</mi><mo>≡</mo><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mi>k</mi></mrow></math> debe elegirse como <math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math> (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>) en el caso de fuerzas atractivas (repulsivas). El parámetro focal <math display=\"inline\"><mrow><mi>p</mi><mo>≡</mo><msup><mi>L</mi><mn>2</mn></msup><mi>/</mi><mi>m</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> se llama <em>semilatus rectum</em> en astronomía y la excentricidad <math display=\"inline\"><mrow><mi>e</mi><mo>≡</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mi>E</mi><mi>/</mi><msub><mi>E</mi><mn>0</mn></msub></mrow></msqrt></mrow></math> se define a través de la energía mínima <math display=\"inline\"><mrow><msub><mi>E</mi><mn>0</mn></msub><mo>≡</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>/</mi><mn>2</mn><mi>p</mi></mrow></math> de las órbitas circulares en el caso atractivo."
    },
    {
     "mota": "testua",
     "html": "La ecuación <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mfrac><mrow><msup><mi>e</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mrow><mn>2</mn><mi>ε</mi></mrow><mi>p</mi></mfrac><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>d</mi><mi>φ</mi><mo>,</mo></mrow></math> que se obtiene tras despejar la derivada <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>d</mi><mi>u</mi><mi>/</mi><mi>d</mi><mi>φ</mi></mrow></math> y separar variables, se resuelve haciendo la integral <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><msqrt><mrow><mi>A</mi><mo>+</mo><mn>2</mn><mi>B</mi><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">arccos</mi><mo>&#8289;</mo></mrow><mfrac><mrow><mi>B</mi><mo>−</mo><mi>u</mi></mrow><msqrt><mrow><mi>A</mi><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>,</mo></mrow></math> de forma que, usando la constante de integración <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math> que nos da la posición del pericentro, la ecuación de la órbita se escribe como <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>ε</mi><mo>+</mo><mi>e</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>p</mi></mfrac><mi>.</mi></mrow></math> Al separar variables en (2.92), se han perdido las envolventes de la solución general (2.95), dadas por <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mrow><mi>ε</mi><mo>±</mo><mi>e</mi></mrow><mi>p</mi></mfrac><mo>,</mo></mrow></math> que también se obtienen haciendo <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> en (2.92). El significado geométrico de esas soluciones singulares es obvio: dan las posiciones de los ábsides, ya que corresponden a los valores mínimo y máximo de <math display=\"inline\"><mi>r</mi></math>. El primero de esos lugares geométricos corresponde a los pericentros <math display=\"inline\"><mrow><mi>p</mi><mi>u</mi><mo>=</mo><mi>ε</mi><mo>+</mo><mi>e</mi></mrow></math> y siempre existe; pero, como <math display=\"inline\"><mrow><mi>u</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, la solución <math display=\"inline\"><mrow><mi>p</mi><mi>u</mi><mo>=</mo><mi>ε</mi><mo>−</mo><mi>e</mi></mrow></math>, que nos da los apocentros, solo aparece cuando la fuerza es atractiva (<math display=\"inline\"><mrow><mi>ε</mi><mo>=</mo><mn>1</mn></mrow></math>) y la energía negativa (<math display=\"inline\"><mrow><mn>0</mn><mo>≤</mo><mi>e</mi><mo>&lt;</mo><mn>1</mn></mrow></math>), como en el caso de la figura 2.5."
    },
    {
     "mota": "ezezaguna",
     "oina": "Órbitas elípticas, pericentros y apocentros.",
     "izena": "irudia (ez da konpilatu)"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No obstante, en muchos casos el mero hecho de despejar la derivada (es decir, <math display=\"inline\"><mi>z</mi></math>) no es tarea fácil y aun cuando pueda hacerse el resultado puede ser complicado. Por ello, a menudo, en vez de buscar la solución explícita de la ecuación finita <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, es mejor resolverla en forma paramétrica: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> con <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>β</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>γ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y utilizar luego el hecho de que <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>z</mi><mi>d</mi><mi>x</mi></mrow></math>, es decir, <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>β</mi></mrow><mrow><mi>∂</mi><mi>u</mi></mrow></mfrac><mi>d</mi><mi>u</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>β</mi></mrow><mrow><mi>∂</mi><mi>v</mi></mrow></mfrac><mi>d</mi><mi>v</mi><mo>=</mo><mi>γ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>u</mi></mrow></mfrac><mi>d</mi><mi>u</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>α</mi></mrow><mrow><mi>∂</mi><mi>v</mi></mrow></mfrac><mi>d</mi><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> para obtener una ecuación en forma simétrica. Por cada solución <math display=\"inline\"><mrow><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de esta ecuación que seamos capaces de calcular, tenemos una solución paramétrica de la ecuación de partida en la forma <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>u</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math> Por ejemplo, si completamos cuadrados en la ecuación (2.92) del problema de Kepler, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>−</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><msup><mi>e</mi><mn>2</mn></msup><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>,</mo></mrow></math> se ve sin dificultad cómo obtener soluciones paramétricas. Por ejemplo, eligiendo como parámetros el nuevo ángulo <math display=\"inline\"><mi>θ</mi></math> y el ángulo polar <math display=\"inline\"><mi>φ</mi></math>, una solución es <math display=\"block\"><mrow><mi>φ</mi><mo>=</mo><mi>φ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo>+</mo><mfrac><mi>e</mi><mi>p</mi></mfrac><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>e</mi><mi>p</mi></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi><mi>.</mi></mrow></math> Si ahora usamos estas ecuaciones para calcular <math display=\"inline\"><mrow><mi>d</mi><mi>u</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mi>d</mi><mi>φ</mi></mrow></math>, obtenemos <math display=\"inline\"><mrow><mi>d</mi><mi>θ</mi><mo>=</mo><mi>d</mi><mi>φ</mi></mrow></math> cuya solución <math display=\"inline\"><mrow><mi>θ</mi><mo>=</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub></mrow></math> sustituida en (2.105) nos devuelve la órbita (2.95)."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Use la parametrización <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>v</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>v</mi></mrow></math> para resolver la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Veamos, a continuación, algunas familias de ecuaciones en las que es inmediato acertar con la parametrización adecuada."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de la forma <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si faltan tanto la variable independiente como la dependiente, las soluciones son de la forma <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, para toda raíz <math display=\"inline\"><mi>u</mi></math> de la ecuación <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. Por tanto, tenemos <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math>, es decir, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi></mrow></math>, y por ello la solución de la ecuación diferencial puede escribirse en forma implícita, <math display=\"block\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mi>C</mi></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> sin necesidad de hallar las raíces de <math display=\"inline\"><mi>F</mi></math>. Claro está que si no existe ninguna de tales raíces la solución que acabamos de escribir será formal."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Escriba la solución de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>7</mn></msup><mo>−</mo><mn>5</mn><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>. ¿Es formal dicha solución si solo admitimos soluciones reales?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En las ecuaciones que estudiaremos en los siguientes cuatro apartados, tras hacer <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, hay que resolver la condición <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de la forma <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si falta la incógnita y puede despejarse la variable independiente, la solución paramétrica de la ecuación es inmediata: basta tomar <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con lo que luego hay que resolver <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi></mrow></math> que tiene sus variables separadas y proporciona directamente la solución paramétrica de la ecuación de partida: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo>=</mo><mo>∫</mo><mi>u</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de la forma <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si falta la variable independiente y puede despejarse la incógnita, la solución paramétrica de la ecuación es <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y hay que resolver <math display=\"inline\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>u</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>, que es separable y permite hallar la solución paramétrica de la ecuación de partida: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>u</mi></mfrac><mi>d</mi><mi>u</mi><mo>+</mo><mi>C</mi><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mi>y</mi><mo>=</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>5</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mn>5</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de Clairaut"
    },
    {
     "mota": "testua",
     "html": "La ecuación de Clairaut (7-05-1713, París; 17-05-1765, París). Entre los muchos problemas que estudió destaca el de los tres cuerpos. En su estudio del movimiento de la Luna, usó métodos de cálculo de soluciones singulares. Calculó la vuelta del cometa Halley en 1759 y participó en la expedición dirigida por Maupertuis para comprobar la predicción teórica de Newton de que la Tierra es un esferoide oblato. <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede resolverse, como los casos anteriores, con el parámetro <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math>, ya que la ecuación paramétrica será <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la condición <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math> que debe satisfacerse: <math display=\"inline\"><mrow><mi>u</mi><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>. Por tanto, queda: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Puesto que en (2.112) puede anularse cualquiera de los factores, tendremos dos soluciones."
    },
    {
     "mota": "azpititulua",
     "testua": "Solución general"
    },
    {
     "mota": "testua",
     "html": "Si se anula el segundo factor (o usamos el factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>) obtenemos <math display=\"inline\"><mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> y sustituyendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math> en (2.111) obtenemos la solución general <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mi>x</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> que, como vemos, es siempre un haz de rectas."
    },
    {
     "mota": "azpititulua",
     "testua": "Solución singular"
    },
    {
     "mota": "testua",
     "html": "Si se anula el primer factor, tenemos directamente una solución en forma paramétrica: <math display=\"block\"><mrow><mi>x</mi><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> es decir, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>u</mi><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Esta solución singular (que también se obtiene haciendo <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mn>0</mn></mrow></math>) es precisamente la ecuación de la envolvente de la general, ya que la ecuación (2.115) es la del haz (con <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math>) y (2.114) su derivada con respecto al parámetro."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de Lagrange"
    },
    {
     "mota": "testua",
     "html": "La ecuación de Lagrange (25-01-1736, Turín, Cerdeña-Piamonte; 10-04-1813, París). Destacó en estudios sobre análisis, teoría de números, mecánica celeste y mecánica analítica, de la que puede ser considerado como principal fundador. Recogió todo lo que sobre mecánica se había hecho desde Newton en su obra maestra: _Mécanique analytique_ (1788). Se le recuerda por sus ecuaciones del movimiento, las coordenadas generalizadas, el concepto de energía potencial y los multiplicadores que llevan su nombre. es <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> con <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≢</mo><mi>u</mi></mrow></math>. Usando de nuevo el cambio <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> obtenemos la ecuación paramétrica <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la condición <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math> que debe satisfacerse: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mi>u</mi><mi>d</mi><mi>x</mi></mrow></math>. Por tanto, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>u</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> La segunda ecuación es lineal con respecto a <math display=\"inline\"><mi>x</mi></math> y, tras multiplicarla por <math display=\"inline\"><mrow><mi>μ</mi><mo>≡</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, obtenemos <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>u</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi></mrow></mfrac><mi>x</mi><mo>+</mo><mfrac><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Sabemos obtener la solución general <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que sustituida en (2.117) nos da la general de la ecuación de Lagrange en forma paramétrica <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> La posibilidad de soluciones singulares viene de la anulación del factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mi>μ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>. En efecto, si la ecuación <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tiene soluciones (constantes) (lo que puede ocurrir para uno o varios valores de <math display=\"inline\"><mi>u</mi></math>, pero no para todo <math display=\"inline\"><mi>u</mi></math>, ya que entonces estaríamos en el caso de la ecuación de Clairaut), cada una de ellas define una recta <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que satisface la ecuación de Lagrange."
    },
    {
     "mota": "testua",
     "html": "Nótese que en vez de utilizar todo el procedimiento descrito arriba, basta recordar que tras hacer el cambio <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi></mrow></math> la derivada de la ecuación de partida ---es decir, la ecuación (2.118)--- admite un factor integrante que depende solo de <math display=\"inline\"><mi>u</mi></math>."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general de <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mi></mi><mn>3</mn></msup></mrow></math>. ¿Hay soluciones singulares?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle un factor integrante de la ecuación (2.118)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Método de derivación"
    },
    {
     "mota": "testua",
     "html": "En algunos casos la forma más rápida de resolver una ecuación diferencial consiste en derivarla primero, ya que la nueva ecuación puede ser más simple que la original. Claro que la nueva ecuación tendrá más soluciones y habrá que elegir entre ellas aquéllas que también satisfagan la ecuación original. A título de ejemplo volveremos a resolver la ecuación (2.92) del problema de Kepler. Al derivar la ecuación obtenemos <math display=\"block\"><mrow><mn>2</mn><msup><mi>u</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo>−</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> La condición de que se anule lo que hay entre paréntesis es la ecuación de Binet: <math display=\"block\"><mrow><msup><mi>u</mi><mo>″</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mi>.</mi></mrow></math> Como en este caso describe un oscilador armónico sometido a una fuerza externa constante, se resuelve fácilmente y, como veremos en el siguiente capítulo, todas las soluciones se hallan contenidas en la solución general <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>ε</mi><mi>p</mi></mfrac><mo>+</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>−</mo><msub><mi>φ</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aquí hay dos constantes arbitrarias, <math display=\"inline\"><mi>C</mi></math> y <math display=\"inline\"><msub><mi>φ</mi><mn>0</mn></msub></math>, pero, como la ecuación original es de primer orden, solo puede quedar una. En efecto, si sustituimos la familia de soluciones que acabamos de hallar en (2.92), se ve directamente que hay que elegir <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>e</mi><mi>/</mi><mi>p</mi></mrow></math>; por tanto, se vuelven a obtener las órbitas (2.95). Si en (2.123) lo que se anula es <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math>, sustituyendo la solución <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>C</mi></mrow></math> en la ecuación (2.92) se hallan las soluciones singulares que describen los ábsides."
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Separable.</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msqrt></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msqrt></mrow></mfrac><mo>=</mo><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∓</mo><msqrt><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi></mrow></msqrt><mo>+</mo><mi>A</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mn>2</mn><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>B</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> Las dos ramas dan la misma familia de soluciones:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>B</mi><mo>±</mo><mi>x</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "Problemak",
   "blokeak": [
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las ecuaciones diferenciales de las siguientes familias de curvas: (a) rectas que pasan por el origen, (b) <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>a) Rectas que pasan por el origen, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>m</mi><mi>x</mi></mrow></math>.</strong> Tiene un solo parámetro (<math display=\"inline\"><mi>m</mi></math>), por lo que se espera una EDO de primer orden. <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>m</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>b) <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></math>.</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi><mo>⇒</mo><mi>C</mi><mo>=</mo><mi>y</mi><mfrac><mi>′</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn><mi>x</mi></mrow></mfrac></mrow></math>; sustituyendo en la original <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mn>2</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>y</mi><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
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
       "html": "Halle la solución general de <math display=\"block\"><mrow><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>x</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Discuta los intervalos de definición de las soluciones correspondientes a las condiciones iniciales <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Si el denominador no es nulo, la condición es que se anule el numerador: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, separable."
      },
      {
       "mota": "testua",
       "html": "<strong>Separar e integrar.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mi>k</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Por la fórmula de la suma de la tangente, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>D</mi><mo>−</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>D</mi><mi>x</mi></mrow></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>≔</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>k</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Condiciones iniciales.</strong>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math> (solución elemental, una recta, definida en todo el intervalo).",
        "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mfrac><mi>π</mi><mn>4</mn></mfrac><mo>⇒</mo><mi>D</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac></mrow></math>, que tiene una discontinuidad en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>; el intervalo de definición es la rama que pasa por el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mn>1</mn><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no está definido; directamente <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mfrac><mi>π</mi><mn>2</mn></mfrac><mo>⇒</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cot</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>; tiene una discontinuidad en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>."
       ]
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>x</mi></mrow><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>"
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
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>x</mi><mi>y</mi></mrow></msup><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "¿Una paradoja?",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Considere, para <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la ecuación diferencial: <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mi>d</mi><mi>y</mi><mo>−</mo><mi>y</mi><mi>d</mi><mi>x</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> (a) Demuestre la igualdad de las derivadas cruzadas. <br>(b) Pruebe que la ecuación puede escribirse como <math display=\"inline\"><mrow><mi>d</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">arctan</mi><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, o, en coordenadas polares, como <math display=\"inline\"><mrow><mi>d</mi><mi>φ</mi><mo>=</mo><mn>0</mn></mrow></math>. <br>(c) Calcule la integral curvilínea del campo asociado a la ecuación diferencial a lo largo de una circunferencia centrada en el origen. <br>(d) El resultado así obtenido debería resultarle paradójico. Comente este extremo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle, en coordenadas polares, todas las curvas cuyos arcos tengan longitudes proporcionales al ángulo que sustentan desde el origen."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la condición necesaria y suficiente para que la ecuación <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> admita un factor integrante de la forma <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cuya expresión debe hallarse."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>4</mn></msup></mrow><mrow><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup></mrow></mfrac></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "El numerador y el denominador son polinomios homogéneos de grado 4: <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mi>u</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>): <math display=\"block\"><mrow><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>u</mi><mo>−</mo><msup><mi>u</mi><mn>4</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>u</mi><mo>+</mo><msup><mi>u</mi><mn>4</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow></mfrac></mrow></math> <strong>Separación de variables.</strong> <math display=\"block\"><mrow><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><msup><mi>u</mi><mn>3</mn></msup></mrow><mrow><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac></mrow></math>. Factorizando el denominador (<math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>3</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>), descomponiendo en fracciones simples (<math display=\"inline\"><mrow><mfrac><mi>A</mi><mi>u</mi></mfrac><mo>+</mo><mfrac><mi>B</mi><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mi>C</mi><mi>u</mi><mo>+</mo><mi>D</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>u</mi><mo>+</mo><mn>1</mn></mrow></mfrac></mrow></math>, con <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math> en <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math>):"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>B</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mi>u</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mrow><mn>2</mn><mi>u</mi><mo>−</mo><mn>1</mn></mrow><msqrt><mn>3</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>k</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>"
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
       "html": "Demuestre que si la ecuación <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es exacta y admite un multiplicador <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> distinto de una constante, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math> es una solución general de la ecuación."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución de <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi></mrow></math>, no es exacta."
      },
      {
       "mota": "testua",
       "html": "<strong>Buscar <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow><mi>P</mi></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>y</mi></mfrac></mrow></math>, función únicamente de <math display=\"inline\"><mi>y</mi></math>: <math display=\"block\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>y</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math> <strong>Ecuación exacta.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, igualando esto con <math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn></mrow></math> <math display=\"inline\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mo>⇒</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>y</mi></mrow></math>"
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
       "html": "Resuelva <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>5</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Homogénea.</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup></mrow></math>: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>y</mi><mspace width=\"0.167em\"></mspace><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><mi>D</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup></mrow></math> <strong>Particular.</strong> Multiplicando por <math display=\"inline\"><mi>μ</mi></math> e integrando por partes el segundo miembro: <math display=\"block\"><mrow><mi>y</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo>=</mo><mo>∫</mo><msup><mi>x</mi><mn>5</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>D</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn></mrow></msup><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>3</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> si se cumplen <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>. <em>Sugerencia:</em> Use la definición y propiedades de la función error que pueden hallarse en la página 283."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Factor integrante.</strong> Escribiendo <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, exigiendo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><msup><mi>μ</mi><mo>′</mo></msup><mi>μ</mi></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>.</mi></mrow></math> <strong>Ecuación exacta.</strong> <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>y</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>y</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; integrando respecto a <math display=\"inline\"><mi>y</mi></math> se obtiene <math display=\"inline\"><mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>y</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y comparando la derivada respecto a <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <strong>Solución general.</strong> Reordenando, y usando la definición de la función erf (<math display=\"inline\"><mrow><msubsup><mo>∫</mo><mn>0</mn><mi>x</mi></msubsup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>u</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>u</mi><mo>=</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo>+</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mi mathvariant=\"normal\">erf</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <strong>Condición inicial.</strong> Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mi mathvariant=\"normal\">erf</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mn>100</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><msqrt><mi>π</mi></msqrt><mn>2</mn></mfrac><mi mathvariant=\"normal\">erf</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle la solución general de <math display=\"inline\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <em>Sugerencia:</em> Use la definición de la integral exponencial de la página 286."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Circuito RL",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea un circuito eléctrico con resistencia <math display=\"inline\"><mi>R</mi></math> y autoinducción <math display=\"inline\"><mi>L</mi></math>, sometido a una diferencia de potencial <math display=\"inline\"><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Conocida la intensidad inicial <math display=\"inline\"><mrow><msub><mi>I</mi><mn>0</mn></msub><mo>=</mo><mi>I</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, halle <math display=\"inline\"><mrow><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y aplique los resultados al caso <math display=\"inline\"><mrow><mi>V</mi><mo>=</mo><msub><mi>V</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>ω</mi><mi>t</mi></mrow></math> de una tensión alterna sinusoidal."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación homogénea",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que si <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es una ecuación homogénea, admite el factor integrante <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>P</mi><mo>+</mo><mi>y</mi><mi>Q</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math>, si el mismo es finito. ¿Cuál será el factor integrante si <math display=\"inline\"><mrow><mi>x</mi><mi>P</mi><mo>+</mo><mi>y</mi><mi>Q</mi><mo>=</mo><mn>0</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación isobárica",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las ecuaciones homogéneas tienen una invariancia de escala frente a transformaciones <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><mi>a</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Una generalización la proporcionan las ecuaciones isobáricas, que son invariantes frente a cambios del tipo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>,</mo><msup><mi>a</mi><mi>λ</mi></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> para algún valor de <math display=\"inline\"><mi>λ</mi></math>; es decir, son ecuaciones del tipo <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "Discuta el método de solución de ecuaciones de este tipo."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>6</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></math>, no es exacta. No hay directamente un factor que dependa solo de <math display=\"inline\"><mi>x</mi></math> ni de <math display=\"inline\"><mi>y</mi></math>, pero probando <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> (prueba directa de tipo <math display=\"inline\"><msup><mi>x</mi><mi>n</mi></msup></math>):"
      },
      {
       "mota": "testua",
       "html": "<strong>Comprobación.</strong> <math display=\"inline\"><mrow><mi>μ</mi><mi>P</mi><mo>=</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mfrac><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mfrac><mrow><mi>∂</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>, es exacta."
      },
      {
       "mota": "testua",
       "html": "<strong>Resolver.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mi>x</mi></mfrac><mo>+</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>+</mo><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, igualando esto con <math display=\"inline\"><mrow><mi>μ</mi><mi>Q</mi><mo>=</mo><mn>3</mn><mo>−</mo><mn>2</mn><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math> <math display=\"inline\"><mrow><msup><mi>g</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mo>⇒</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>3</mn><mi>y</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>3</mn><mi>y</mi><mo>−</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Trayectorias ortogonales",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dada una familia uniparamétrica de curvas <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, se llaman trayectorias ortogonales las curvas que cortan a las de la familia en ángulo recto en todos los puntos. Si <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> es la ecuación diferencial de la familia, ¿cuál será la ecuación diferencial de las trayectorias ortogonales?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las trayectorias ortogonales a las parábolas <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>x</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><mn>6</mn><mi>x</mi><mo>+</mo><mn>4</mn><mi>y</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, los coeficientes lineales tienen la misma proporción: es el caso de rectas paralelas. Tomando <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mo>=</mo><mn>3</mn><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>d</mi><mi>y</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mfrac><mrow><mi>d</mi><mi>z</mi><mo>−</mo><mn>3</mn><mi>d</mi><mi>x</mi></mrow><mn>2</mn></mfrac></mrow></math>. Sustituyendo: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>z</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi>z</mi><mo>−</mo><mn>3</mn><mi>d</mi><mi>x</mi></mrow><mn>2</mn></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>z</mi><mo>+</mo><mn>6</mn><mo>−</mo><mn>3</mn><mi>z</mi><mo>−</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>z</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mi>z</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>z</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>2</mn><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>z</mi></mrow></math> Integrando y deshaciendo el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>3</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>k</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa variable",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un cohete de masa estructural <math display=\"inline\"><mi>M</mi></math> contiene combustible con una masa inicial <math display=\"inline\"><mi>m</mi></math>. Se dispara verticalmente desde la superficie de la Tierra y expulsa, con velocidad <math display=\"inline\"><mi>v</mi></math>, <math display=\"inline\"><mi>k</mi></math> kilogramos de gases por segundo. Si se desprecian todas las fuerzas excepto el peso y se supone que la aceleración de la gravedad se mantiene constante durante todo el trayecto, ¿cuáles serán la velocidad y altura cuando se agote el combustible?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Masa relativista",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En relatividad especial la masa de una partícula que se mueve con velocidad <math display=\"inline\"><mi>v</mi></math> es <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><msub><mi>m</mi><mn>0</mn></msub><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mi>/</mi><msup><mi>c</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, siendo <math display=\"inline\"><msub><mi>m</mi><mn>0</mn></msub></math> su masa en reposo y <math display=\"inline\"><mi>c</mi></math> la velocidad de la luz en el vacío. <br>(a) Si la partícula parte del reposo y se mueve en el espacio vacío bajo la influencia de un campo gravitatorio constante, ¿cuál será su velocidad en el instante <math display=\"inline\"><mi>t</mi></math>, y cuando haya transcurrido un gran lapso de tiempo? <br>(b) Sea <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><mo>≡</mo><mi>m</mi><mo>−</mo><msub><mi>m</mi><mn>0</mn></msub></mrow></math> la variación de la masa de la partícula y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi></mrow></math> el trabajo realizado por la fuerza <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>d</mi><mi>t</mi></mrow></math>. Verifique directamente que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mi>E</mi><mo>=</mo><mi mathvariant=\"normal\">Δ</mi><mi>m</mi><msup><mi>c</mi><mn>2</mn></msup></mrow></math>. <br>(c) Como comprobación, deduzca la ley de variación de la masa de la partícula con la velocidad usando como punto de partida este último resultado y la definición de fuerza."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Los coeficientes lineales son paralelos (<math display=\"inline\"><mn>1</mn></math>, <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn></mrow></math> en ambos), por lo que corresponde <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>. <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>z</mi><mo>′</mo></msup></mrow></math>. Sustituyendo: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>z</mi><mo>+</mo><mn>3</mn></mrow><mrow><mi>z</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mi>z</mi><mo>−</mo><mn>8</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></mfrac></mrow></math> <strong>Separación de variables.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mrow><mi>z</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>d</mi><mi>x</mi></mrow></math>. Descomponiendo la fracción del primer miembro como <math display=\"inline\"><mrow><mi>z</mi><mo>+</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mrow><mi>z</mi><mo>+</mo><mn>2</mn></mrow></mfrac></mrow></math> e integrando:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>z</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mn>3</mn><mi>z</mi><mo>+</mo><mn>9</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>z</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>−</mi><mn>4</mn><mi>x</mi><mo>+</mo><mi>k</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>"
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
       "html": "Demuestre que toda ecuación homogénea es separable en coordenadas polares."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Es de tipo Riccati; solución particular <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. Sustituyendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mi>u</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <strong>Bernoulli.</strong> <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>z</mi><mfrac><mi>′</mi><msup><mi>z</mi><mn>2</mn></msup></mfrac></mrow></math>): <math display=\"block\"><mrow><mi>−</mi><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mo>+</mo><mi>z</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>z</mi><mo>+</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> <strong>Ecuación lineal.</strong> Factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>⇒</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mi>z</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>k</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>k</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Deshaciendo el cambio.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>z</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>k</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></mfrac><mo>+</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>"
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
       "html": "Halle la solución general de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Método 1: como ecuación de Lagrange.</strong> Escribiendo la ecuación como <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, tiene la estructura de Lagrange. <strong>Parámetro.</strong> Haciendo <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math> y derivando respecto a <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>p</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>=</mo><mn>2</mn><mi>p</mi><mo>+</mo><mn>2</mn><mi>x</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mi>p</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow></math> es decir <math display=\"inline\"><mrow><mi>p</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math>. Considerando <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como función, es una ecuación lineal; multiplicando por <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math> el primer miembro es exacto: <math display=\"block\"><mrow><msup><mi>p</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>p</mi><mi>d</mi><mi>p</mi><mo>−</mo><mn>2</mn><msup><mi>p</mi><mn>2</mn></msup><mi>d</mi><mi>p</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>d</mi><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>p</mi><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>2</mn><msup><mi>p</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>p</mi><mn>2</mn></msup><mi>x</mi><mo>−</mo><mfrac><mrow><mn>2</mn><msup><mi>p</mi><mn>3</mn></msup></mrow><mn>3</mn></mfrac><mo>=</mo><mi>C</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mfrac><mi>C</mi><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mi>p</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>p</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>C</mi></mrow><mi>p</mi></mfrac><mo>+</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>3</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (soluzio parametrikoa) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Método 2: como ecuación isobárica.</strong> Despejando <math display=\"inline\"><msup><mi>y</mi><mo>′</mo></msup></math> en esa ecuación de segundo grado: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>±</mo><msqrt><mrow><mn>4</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>y</mi></mrow></msqrt></mrow><mn>2</mn></mfrac><mo>=</mo><mi>x</mi><mo>±</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi></mrow></msqrt></mrow></math> La ecuación es invariante frente al cambio de escala <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>a</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>→</mo><msup><mi>a</mi><mn>2</mn></msup><mi>y</mi></mrow></math> (isobárica). Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>u</mi></mrow></math> se vuelve separable para <math display=\"inline\"><mi>u</mi></math>, y tras integrar se obtiene el resultado implícito:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>4</mn><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>3</mn></msup><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>D</mi><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que si la recta <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math> corta a la familia de curvas integrales de la ecuación diferencial <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, las tangentes en los puntos de intersección son concurrentes. Demuestre que en el caso de <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo>=</mo><mi>−</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></math>, el lugar geométrico de los puntos de concurrencia obtenidos al variar <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> es una línea recta."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle las envolventes y los puntos múltiples del haz de <strong>estrofoides</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>. Dibuje el haz."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Además de envolventes y puntos múltiples, las ecuaciones (2.87)--(2.88) pueden contener <strong>cúspides</strong>. Como ejemplo, halle y dibuje la solución general de la ecuación diferencial <math display=\"inline\"><mrow><mn>9</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>4</mn></mrow></math>. Discuta la solución de (2.87)--(2.88) en este caso. ¿Es solución de la ecuación diferencial?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "«Radio» del universo",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el modelo cosmológico estándar el factor de escala <math display=\"inline\"><mi>R</mi></math> del universo de Robertson-Walker evoluciona de acuerdo con la ecuación de Friedmann:"
      },
      {
       "mota": "ezezaguna",
       "izena": "zenb-ekuazioa"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>. Discuta las soluciones de esta ecuación y vea en qué casos hay «gran explosión» y en cuáles el universo camina hacia un colapso final."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Caso <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><msup><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mi>R</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mover><mi>R</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><msqrt><mi>R</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>R</mi></msqrt><mi>d</mi><mi>R</mi><mo>=</mo><mi>±</mi><mi>d</mi><mi>t</mi></mrow></math>. Integrando:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>R</mi><mfrac><mn>3</mn><mn>2</mn></mfrac></msup><mo>=</mo><mi>±</mi><mfrac><mn>3</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><msub><mi>k</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Condiciones en el infinito",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "A veces, para determinar la solución, en vez de dar condición inicial, se impone una condición adecuada en el infinito. Como ejemplo, halle la única solución que se mantiene acotada en el límite <math display=\"inline\"><mrow><mi>x</mi><mo>→</mo><mi>∞</mi></mrow></math> de la ecuación <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle todas las soluciones de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Separable.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mfrac><mo>=</mo><mi>±</mi><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi><mo>+</mo><mi>A</mi></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>±</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta singularrak </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>=</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> Por la fórmula de la suma del seno puede escribirse también como <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, pero solo hay <strong>un único parámetro</strong> realmente libre."
      },
      {
       "mota": "testua",
       "html": "<strong>Derivando.</strong> Derivando respecto a <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><mn>2</mn><msup><mi>y</mi><mo>′</mo></msup><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> dos ramas: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>C</mi></mrow></math> (y sustituyendo en la original <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>±</mi><mn>1</mn></mrow></math>, singulares); o <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, y la ecuación original las enlaza: <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo>−</mo><mi>B</mi><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mi mathvariant=\"normal\">sin</mi><mi>x</mi><mo>+</mo><mi>B</mi><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><msup><mi>A</mi><mn>2</mn></msup><mo>+</mo><msup><mi>B</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></msqrt><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>A</mi><mo>′</mo></msup><mo>±</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> singularrak </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encuentre una expresión que dé por medio de una cuadratura la solución general de ecuaciones de la forma <math display=\"block\"><mrow><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Discuta el método de solución de ecuaciones de la forma <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Aplique el método para resolver <math display=\"inline\"><mrow><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Caso <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> (el solicitado).</strong> Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mn>3</mn></msup></mrow></math> (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><msup><mi>y</mi><mo>′</mo></msup></mrow></math>), la ecuación es lineal para <math display=\"inline\"><mi>u</mi></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mi>x</mi><mi>u</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math> Homogénea: <math display=\"inline\"><mrow><msub><mi>u</mi><mi>h</mi></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>. Por variación de constantes, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> Integrando por partes (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>v</mi><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>): <math display=\"block\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mo>∫</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msqrt><mfrac><mi>π</mi><mn>2</mn></mfrac></msqrt><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>k</mi></mrow></math> Por tanto:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mroot><mrow><mi>k</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><msqrt><mfrac><mi>π</mi><mn>2</mn></mfrac></msqrt><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mrow><mi mathvariant=\"normal\">erf</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>x</mi><msqrt><mn>2</mn></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi></mrow><mn>3</mn></mroot></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Ecuación de Abraham\n    (26-03-1875, Danzig, Alemania ---hoy se llama Gdansk y pertenece a Polonia---;\n  16-11-1922, Múnich). Este estudiante de Planck trabajó especialmente en electrodinámica y\n  su teoría del electrón alcanzó gran notoriedad hasta que fue sustituida por la de Lorentz.\n  Se opuso el resto de su vida a la relatividad especial de Einstein, que era compatible con\n  la teoría de Lorentz.\n-Lorentz\n    (18-07-1853, Arnhem, Países Bajos; 04-02-1928, Haarlem, Países Bajos). El refinamiento de la teoría de Maxwell y su proposición, antes de que la existencia del electrón estuviera\n  confirmada, de que la luz era creada por oscilaciones de la carga eléctrica en los átomos\n  le llevaron a su teoría del electrón, que le valdría el premio Nobel de Física en 1902. En\n  ciertos aspectos es un antecesor de la teoría de la relatividad especial de Einstein, donde\n  las transformaciones que llevan su nombre juegan un papel central.",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la aproximación no relativista, una partícula puntual de carga <math display=\"inline\"><mi>q</mi></math> que se mueve en un campo eléctrico constante y uniforme <math display=\"inline\"><mover><mi>E</mi><mo accent=\"true\">→</mo></mover></math> satisface la ecuación <math display=\"block\"><mrow><mi>m</mi><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mi>q</mi><mover><mi>E</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><msup><mi>q</mi><mn>2</mn></msup><mover><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo accent=\"true\">̇</mo></mover><mo>,</mo></mrow></math> cuando se tiene en cuenta el frenado debido a la radiación emitida. Demuestre que estas ecuaciones tienen soluciones físicamente inaceptables, en las que la aceleración crece sin límite. Compruebe que la condición adicional de que en el límite <math display=\"inline\"><mrow><mi>q</mi><mo>→</mo><mn>0</mn></mrow></math> se recupere <math display=\"inline\"><mrow><mi>m</mi><mover><mi>a</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math> permite seleccionar las soluciones físicas. ¿Cuáles son?"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Demuestre que una ecuación del tipo <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no puede tener soluciones oscilantes. ¿Por qué no constituye la solución <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la ecuación <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> un contraejemplo de la anterior afirmación? <em>Sugerencia:</em> Considere la gráfica de una solución oscilante."
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Halle todas las soluciones de la ecuación <math display=\"block\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msqrt><mrow><mi>x</mi><mi>y</mi><mo>+</mo><mn>1</mn></mrow></msqrt><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Tomando <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi></mrow></math>. Sustituyendo: <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mo>=</mo><mi>−</mi><mi>y</mi><mo>+</mo><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mrow></math> (debe ser <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>+</mo><mn>1</mn><mo>≥</mo><mn>0</mn></mrow></math>). <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt></mfrac><mo>=</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>2</mn><msqrt><mrow><mi>μ</mi><mo>+</mo><mn>1</mn></mrow></msqrt><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math> Recuperando <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>+</mo><mn>1</mn><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow><mn>4</mn></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>4</mn></mrow><mrow><mn>4</mn><mi>x</mi></mrow></mfrac></mrow></math>"
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
       "html": "Resuelva el siguiente problema y discuta el intervalo de definición de las soluciones: <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">̇</mo></mover><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi></mrow></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>t</mi><mrow><mn>0</mn><mi>.</mi></mrow></msub></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Reescribiendo, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mi>d</mi><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mo>≠</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math>, no es exacta. Para probar <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, exigiendo <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>μ</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mi>μ</mi><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>μ</mi><mo>=</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac></mrow></math> Sustituyendo y simplificando, con <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>. Integrando la segunda <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mi>t</mi><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, e igualando con la primera <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>⇒</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>+</mo><mi>h</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por tanto <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>−</mo><mi>t</mi><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>k</mi></mrow></math>. Usando la condición inicial (<math display=\"inline\"><mrow><msub><mi>x</mi><mn>0</mn></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>t</mi><mn>0</mn></msub></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>e</mi><msub><mi>x</mi><mn>0</mn></msub></msup><mo>=</mo><msub><mi>t</mi><mn>0</mn></msub></mrow></math>):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo>−</mo><msup><mi>e</mi><mrow><mn>2</mn><msub><mi>x</mi><mn>0</mn></msub></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><msup><mi>e</mi><msub><mi>x</mi><mn>0</mn></msub></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": null,
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la siguiente ecuación diferencial, para los distintos valores reales de <math display=\"inline\"><mi>α</mi></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mi>α</mi><mi>.</mi></mrow></math>"
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
       "html": "Obtenga la solución general de la siguiente ecuación: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><mn>3</mn><mi>x</mi><mo>+</mo><mn>7</mn><mi>x</mi><mi>y</mi><mo>+</mo><mn>14</mn><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Escrita como <math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, no es exacta. Buscar un factor integrante dependiente de <math display=\"inline\"><mi>x</mi></math>: <math display=\"block\"><mrow><mfrac><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>−</mo><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow><mi>Q</mi></mfrac><mo>=</mo><mfrac><mrow><mn>7</mn><mi>x</mi><mo>+</mo><mn>14</mn><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>7</mn></mrow><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></mfrac><mo>+</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>x</mi></mrow><mrow><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi></mrow></mfrac><mo>=</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> Como <math display=\"inline\"><mi>x</mi></math> es función únicamente de <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, existe <math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>: <math display=\"inline\"><mi>F</mi></math> Multiplicando, la ecuación es exacta. Ahora el potencial <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>7</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mi>y</mi><mo>−</mo><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>∂</mi><mi>F</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>μ</mi><mi>P</mi></mrow></math> imponiendo <math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>6</mn><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, simplificando los términos comunes: <math display=\"inline\"><mrow><mo>∫</mo><mi>x</mi><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math> usando las integrales (<math display=\"inline\"><mrow><mo>∫</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mrow><mi>a</mi><mi>x</mi></mrow></msup><mi>d</mi><mi>x</mi></mrow></math>, <math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mn>6</mn><msup><mi>e</mi><mi>x</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup></mrow></math>):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>7</mn><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mi>x</mi><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mi>C</mi></mrow></math>"
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
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Método 1: factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>.</strong> Multiplicando por <math display=\"inline\"><msup><mi>e</mi><mi>x</mi></msup></math> <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mi>y</mi><msup><mi>e</mi><mi>x</mi></msup></mrow></math>: ahora <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>M</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>y</mi><msup><mi>e</mi><mi>x</mi></msup><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>N</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Potencial.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo>∫</mo><mi>N</mi><mi>d</mi><mi>y</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mi>x</mi></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> usando un factor integrante de la forma <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ecuación del factor.</strong> Exigiendo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, a partir de la condición de exactitud: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>y</mi><mi>μ</mi><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mn>2</mn><mi>x</mi><mi>μ</mi></mrow></math> simplificando <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><mi>μ</mi></mrow></math>, es decir: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mi>μ</mi></mfrac><mo>=</mo><mi>d</mi><mi>v</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></msup></mrow></math> <strong>Potencial.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mo>∫</mo><mi>μ</mi><mi>M</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; y comparando <math display=\"inline\"><mrow><mi>∂</mi><mi>u</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> con <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>e</mi><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario: Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> sabiendo que es de tipo Riccati y que se conoce la solución particular <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>x</mi></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Forma estándar.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>+</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac></mrow></math> <strong>Riccati arrow Bernoulli.</strong> Sustituyendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>y</mi><mo>−</mo><mi>x</mi></mrow></math>, para <math display=\"inline\"><mi>u</mi></math> queda la ecuación de Bernoulli (con el término <math display=\"inline\"><msup><mi>u</mi><mn>2</mn></msup></math>), y haciendo <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msup><mi>u</mi><mrow><mn>1</mn><mo>−</mo><mn>2</mn></mrow></msup><mo>=</mo><mn>1</mn><mi>/</mi><mi>u</mi></mrow></math> resulta lineal: <math display=\"block\"><mrow><mi>−</mi><msup><mi>w</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>2</mn><mrow><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>w</mi><mo>+</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> <strong>Factor integrante.</strong> Integrando con un factor de la forma <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><mi>w</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math> y despejando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>w</mi></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo>−</mo><mi>C</mi><mi>x</mi></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn><mo>−</mo><mi>C</mi><mi>x</mi></mrow></mfrac></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario: Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva la ecuación de Riccati <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi mathvariant=\"normal\">cos</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>,</mo></mrow></math> sabiendo que <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> es una solución particular."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Comprobación.</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><msup><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mfrac><mi>x</mi><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac></mrow></math>; <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> da <math display=\"inline\"><mrow><msub><mi>y</mi><msup><mi>p</mi><mo>′</mo></msup></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, y al sustituir los dos últimos términos se anulan."
      },
      {
       "mota": "testua",
       "html": "<strong>Cambio.</strong> Sustituyendo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mspace width=\"0.167em\"></mspace><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math> <strong>Bernoulli.</strong> Tomando <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msup><mi>u</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><msup><mi>w</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>u</mi><mfrac><mi>′</mi><msup><mi>u</mi><mn>2</mn></msup></mfrac></mrow></math>) resulta la ecuación lineal: <math display=\"block\"><mrow><msup><mi>w</mi><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"0.167em\"></mspace><mi>w</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac></mrow></math> Homogénea: <math display=\"inline\"><mrow><msub><mi>w</mi><mi>h</mi></msub><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Por variación de constantes e integrando por partes: <math display=\"block\"><mrow><mi>w</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> <strong>Deshaciendo el cambio.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>w</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> (renombrando la constante con <math display=\"inline\"><mrow><mn>2</mn><mi>C</mi></mrow></math>):"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>2</mn><mrow><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
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
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">tanh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mn>2</mn><mi>y</mi><mo>+</mo><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi mathvariant=\"normal\">tanh</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> suponiendo un factor integrante de la forma <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ecuación del factor.</strong> Suponiendo que <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> depende de una sola variable, por la condición <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>y</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>∂</mi><mi>x</mi></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mi>Q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la mayoría de los términos de la ecuación se cancelan entre sí y: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Ecuación exacta.</strong> Como <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">tanh</mi><mo>&#8289;</mo></mrow><mo>⋅</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">sinh</mi></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mi>P</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Integrando por partes dos veces: <math display=\"block\"><mrow><mo>∫</mo><mi>μ</mi><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <strong>Determinar <math display=\"inline\"><mrow><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.</strong> Derivando respecto a <math display=\"inline\"><mi>y</mi></math> y comparando con <math display=\"inline\"><mrow><mi>μ</mi><mi>Q</mi></mrow></math>: <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>K</mi><mo>=</mo><mi>C</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario: PVI y PVF",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Distinga, al resolver ecuaciones diferenciales, el planteamiento con una condición inicial (PVI) o con una condición de contorno (PVF), mediante tres ejemplos: (a) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>; (b) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>; (c) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "La solución general de <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>a) Problema de valor inicial (PVI): <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (soluzio bakarra) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>b) Problema de valor de frontera (PVF): <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>B</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>. Contradicción (<math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mn>1</mn></mrow></math> <strong>y</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> a la vez): con estas condiciones no hay solución."
      },
      {
       "mota": "testua",
       "html": "<strong>c) Problema de valor de frontera (PVF): <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mo>=</mo><mn>0</mn></mrow></math>; <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>π</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>π</mi><mo>=</mo><mn>0</mn></mrow></math>, se cumple para cualquier <math display=\"inline\"><mi>A</mi></math>: <math display=\"inline\"><mi>A</mi></math> como la condición se cumple sea cual sea su valor, hay infinitas soluciones (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>)."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario: Clairaut",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> (de tipo Clairaut), y halle la ecuación diferencial de la familia de circunferencias <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Ecuación de Clairaut.</strong> Probando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>A</mi><mi>x</mi><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>A</mi></mrow></math>): sustituyendo en la ecuación original se cumple <math display=\"inline\"><mrow><msup><mi>A</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>A</mi><mo>+</mo><mi>A</mi><mi>x</mi><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math> para cualquier <math display=\"inline\"><mi>A</mi></math>, es decir, es toda la familia de soluciones."
      },
      {
       "mota": "testua",
       "html": "<strong>Solución singular (envolvente), derivando respecto a <math display=\"inline\"><mi>A</mi></math>.</strong> Probando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mi>x</mi><mn>2</mn></mfrac></mrow></math>): <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>−</mo><mi>x</mi><mo>⋅</mo><mfrac><mi>x</mi><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><mi>x</mi><mo>−</mo><msup><mi>A</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (familia), </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>4</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (inguratzailea) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Familia de circunferencias, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>.</strong> Diferenciando: <math display=\"block\"><mrow><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math> Sustituyendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>a</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math> en la ecuación original: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (zirkulu-familiaren ekuazio diferentziala) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Estudie en qué puntos se garantiza (o no) la existencia y unicidad para el problema de valor inicial <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Puntos problemáticos.</strong> La fracción <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> carece de sentido cuando <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, es decir en las rectas <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> o <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>; asimismo los puntos <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> también requieren atención especial. En esos puntos no puede garantizarse la unicidad mediante el teorema de existencia y unicidad, porque el denominador se anula."
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "testua",
       "html": "<strong>Ejemplo complementario: familia general de circunferencias, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>.</strong> Siendo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (constante), la derivada total de <math display=\"inline\"><mi>μ</mi></math> es cero a lo largo de la trayectoria local: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>0</mn></mrow></math> es decir <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, donde <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac></mrow></math>: de aquí se recupera <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>y</mi></mrow></math>), en forma simétrica <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
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
       "html": "Compruebe que la ecuación <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> no es exacta."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi></mrow></math>. <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>1</mn></mrow></math>"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>4</mn></msup><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> usando el factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Multiplicando: <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn></mrow><msup><mi>y</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> Integrando por separado las dos fracciones: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mn>1</mn></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn></mrow><msup><mi>y</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mn>3</mn><msup><mi>y</mi><mn>4</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>3</mn></msup></mfrac></mrow></math> por tanto:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>3</mn></msup></mfrac><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva la ecuación <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> usando un factor integrante del tipo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Comprobar que no es exacta.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>1</mn><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>P</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>Q</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Buscar <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.</strong> Aplicando la condición de Euler para <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>x</mi></mrow><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mn>4</mn><mfrac><mi>x</mi><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>y</mi></mfrac></mrow></math> Integrando: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mi>−</mi><mn>2</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Ecuación exacta.</strong> <math display=\"inline\"><mrow><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mfrac><mi>x</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>u</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>+</mo><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, igualando esto con <math display=\"inline\"><mrow><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>−</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi><mo>+</mo><mi>C</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>−</mo><mi>y</mi><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva el problema de valor inicial <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>.</mi></mrow></math>"
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Homogénea.</strong> <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn><mo>⇒</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mfrac><mi>′</mi><msub><mi>y</mi><mn>1</mn></msub></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>. Usando el factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mn>1</mn><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></mrow></math>: <math display=\"block\"><mrow><mfrac><mi>d</mi><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>B</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> <strong>Solución particular, por variación de constantes.</strong> <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>; sustituyendo en la ecuación completa: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>−</mo><mi>u</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>⋅</mo><mi>u</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Solución general.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Condición inicial.</strong> <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mn>0</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>0</mn><mo>=</mo><mi>B</mi><mo>=</mo><mn>2</mn></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, descomponiendo el primer miembro en dos factores."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Factorización.</strong> Se comprueba que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (desarrollando: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi></mrow></math> ✓)."
      },
      {
       "mota": "testua",
       "html": "<strong>a) Rama <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>−</mi><mi>d</mi><mi>x</mi></mrow></math>, integrando <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mo>+</mo><mi>A</mi></mrow></math>: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup></mrow></math> <strong>b) Rama <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>.</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math>, integrando: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>C</mi></mrow></math>"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>x</mi></mrow></msup><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (bi soluzio-adar independente) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
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
       "html": "Resuelva la ecuación lineal <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mn>3</mn><mi>y</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math> por dos métodos: por variación de constantes y directamente mediante el factor integrante."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Método 1: homogénea + variación de constantes.</strong> Homogénea: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mrow><mn>3</mn><mi>y</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mn>0</mn><mo>⇒</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>−</mi><mn>3</mn><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac></mrow></math>, integrando <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mi>B</mi><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por variación de constantes, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>: sustituyendo <math display=\"inline\"><mrow><msup><mi>C</mi><mo>′</mo></msup><mfrac><mi>x</mi><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>=</mo><mfrac><msup><mi>e</mi><mi>x</mi></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>⇒</mo><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>⇒</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>A</mi></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mi>A</mi></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Método 2: factor integrante, <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>.</strong> <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo>∫</mo><mfrac><mn>3</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup></mrow></math>. Multiplicando la ecuación completa por <math display=\"inline\"><mi>μ</mi></math>, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>, es decir <math display=\"inline\"><mrow><msub><mi>y</mi><mi>P</mi></msub><msup><mi>x</mi><mn>3</mn></msup><mo>=</mo><msup><mi>e</mi><mi>x</mi></msup></mrow></math>:"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> buscando un factor integrante del tipo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Probar <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>.</strong> Por la regla de la cadena <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>μ</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>μ</mi><mo>′</mo></msup><mi>y</mi></mrow></math>. Sustituyendo en la condición de Euler y simplificando: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mi>y</mi></mrow></mfrac></mrow></math> <strong>Resolver.</strong> <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mi>μ</mi></mrow><mi>μ</mi></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>s</mi></mrow><mi>s</mi></mfrac><mo>⇒</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>s</mi></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Ecuación exacta, multiplicando por <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mo>+</mo><mn>3</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Construir <math display=\"inline\"><mi>F</mi></math>, integrando desde <math display=\"inline\"><mi>P</mi></math> (<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></math>): <math display=\"block\"><mrow><mi>F</mi><mo>=</mo><mo>∫</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mfrac><mrow><mi>∂</mi><mi>F</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, igualando esto con <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></math> <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>A</mi></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "problema",
     "izena": "Del cuaderno del usuario: Riccati",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Resuelva <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mfrac><mi>y</mi><mi>x</mi></mfrac><mo>−</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>=</mo><mn>2</mn><mi>x</mi></mrow></math>, conociendo la solución particular <math display=\"inline\"><mrow><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Cambio de variable, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mi>p</mi></msub><mo>=</mo><mi>y</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>.</strong> <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi></mrow></math>. Sustituyendo y simplificando: <math display=\"block\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo>−</mo><mfrac><mi>μ</mi><mi>x</mi></mfrac><mo>−</mo><mfrac><msup><mi>μ</mi><mn>2</mn></msup><msup><mi>x</mi><mn>3</mn></msup></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (Bernoulli, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>n</mi><mo>=</mo><mn>2</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
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
       "html": "Resuelva <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> usando un factor integrante del tipo <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>5</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>5</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: no es exacta. Probando un <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que dependa de la variable <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>, como <math display=\"inline\"><mrow><mi>P</mi><mo>+</mo><mi>Q</mi><mo>=</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, se obtiene una condición de tipo <math display=\"inline\"><mrow><mi>μ</mi><mfrac><mi>′</mi><mi>μ</mi></mfrac><mo>=</mo><mfrac><mn>2</mn><mi>z</mi></mfrac></mrow></math>:"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>z</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>"
        }
       ]
      },
      {
       "mota": "ezezaguna",
       "izena": "ebazpen-oharra"
      },
      {
       "mota": "kutxa",
       "kolorea": "laranja",
       "titulua": null,
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (egitura fidagarria; koefizienteak ez erabat berretsiak) </mtext><mspace width=\"0.333em\"></mspace></mrow></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "Del cuaderno (CNmetodosx): ecuaciones de primer orden",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Trayectorias ortogonales (coordenadas cartesianas y polares)"
    },
    {
     "mota": "testua",
     "html": "Obtención de la EDO de una familia de circunferencias, regla de las trayectorias ortogonales (inversa de la pendiente cambiada de signo) y ejemplos en coordenadas cartesianas y polares."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 8: EDO de la familia (<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Desarrollando: <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>c</mi><mi>t</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>. Derivando: <math display=\"block\"><mrow><mn>2</mn><mi>t</mi><mo>−</mo><mn>2</mn><mi>c</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mi>t</mi><mo>+</mo><mi>c</mi></mrow><mi>y</mi></mfrac><mi>.</mi></mrow></math> Para eliminar <math display=\"inline\"><mi>c</mi></math>, sustituyendo <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>−</mi><mi>t</mi><mo>+</mo><mfrac><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>t</mi></mrow></mfrac></mrow><mi>y</mi></mfrac><mo>=</mo><mfrac><mfrac><mrow><mi>−</mi><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>t</mi></mrow></mfrac><mi>y</mi></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mrow><mn>2</mn><mi>t</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Regla de las trayectorias ortogonales"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Trayectorias ortogonales",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si la familia dada cumple <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, la familia de trayectorias ortogonales cumple <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><msup><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (pendiente: <math display=\"inline\"><mrow><msub><mi>m</mi><mn>1</mn></msub><msub><mi>m</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>)."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 9: ortogonales de las circunferencias de centro <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><msup><mi>c</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mn>2</mn><mi>t</mi><mo>+</mo><mn>2</mn><mi>x</mi><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></math>. Las ortogonales cumplen <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><msubsup><mi>x</mi><mn>1</mn><mo>′</mo></msubsup></mrow></math>: <math display=\"block\"><mrow><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>x</mi><mi>t</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mi>x</mi><mi>t</mi></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>t</mi></mrow><mi>t</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>t</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>K</mi><mi>t</mi><mi>.</mi></mrow></math> (Rectas que pasan por el origen.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 10: recta ortogonal a <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msup><mi>t</mi><mn>2</mn></msup></mrow></math> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Pendiente de la tangente <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>t</mi></mrow></math>; de la ortogonal <math display=\"inline\"><mrow><msub><mi>m</mi><mi>o</mi></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"inline\"><mrow><msub><mi>m</mi><mi>o</mi></msub><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mn>0</mn><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math>, por tanto la recta ortogonal es <strong>vertical</strong>: <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Coordenadas polares"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una curva integral, la normal <math display=\"inline\"><mrow><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><msub><mi>r</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>θ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple: <math display=\"block\"><mrow><mfrac><msub><mi>r</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 11: ortogonales de <math display=\"inline\"><mrow><msub><mi>r</mi><mn>1</mn></msub><mo>=</mo><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Derivando: <math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><mi>c</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>. Eliminando <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>r</mi><mn>1</mn></msub><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>r</mi><mn>1</mn></msub><mi mathvariant=\"normal\">cos</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>.</mi></mrow></math> Por tanto: <math display=\"block\"><mrow><mfrac><msub><mi>r</mi><mn>2</mn></msub><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>r</mi><mn>1</mn><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><msub><mi>r</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><msub><mi>r</mi><mn>2</mn></msub></mrow><msub><mi>r</mi><mn>2</mn></msub></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>d</mi><mi>θ</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mo>−</mo><mo>∫</mo><mfrac><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></mfrac><mi>d</mi><mi>θ</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> (La integración continúa en la página siguiente.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: correcciones de signo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 8 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; circunferencias de centro <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, que se cortan en el origen); ejemplo 9 (<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></math> ⇒ ortogonales <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>/</mi><mi>t</mi></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>K</mi><mi>t</mi></mrow></math>); ejemplo 10 (tangente horizontal en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, normal vertical); condición en polares; ejemplo 11 (<math display=\"inline\"><mrow><msubsup><mi>r</mi><mn>2</mn><mo>′</mo></msubsup><mi>/</mi><msub><mi>r</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi mathvariant=\"normal\">sin</mi><mi>θ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>θ</mi></mrow></math>). ⚠ <strong>Correcciones (mahairatuak):</strong> (1) la regla aparece escrita en el original como <code>F(t,x,1/x)</code>, sin signo ni prima; lo correcto es <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>−</mi><msup><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>′</mo></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (sustitución de la pendiente), aquí corregido; (2) en la página 4 aparece <code>-1/m = 1/x&#x27;</code> sin signo, pero el ejemplo 9 fija <math display=\"inline\"><mrow><msubsup><mi>x</mi><mn>2</mn><mo>′</mo></msubsup><mo>=</mo><mi>−</mi><msubsup><mfrac><mn>1</mn><mi>x</mi></mfrac><mn>1</mn><mo>′</mo></msubsup></mrow></math>. La frase «pasan por el eje» no describe con exactitud la familia completa (rectas que pasan por el origen). Verificación interna: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> (problema 2.18) da el principio general. Véase <code>koadernoa_metodo_n_p004.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Isoclinas, teorema de Picard y variables separables"
    },
    {
     "mota": "testua",
     "html": "Interpretación geométrica de la ecuación diferencial mediante isoclinas, teorema de existencia y unicidad de Picard y ecuaciones de variables separables."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Isoclinas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; en cada isoclina la pendiente es constante: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 12:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>x</mi></mrow></math>. Pendiente constante <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>k</mi></mrow></math>: <math display=\"block\"><mrow><mi>−</mi><mfrac><mi>t</mi><mi>x</mi></mfrac><mo>=</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mi>k</mi></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mi>t</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mn>2</mn><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mfrac><mi>t</mi><mn>2</mn></mfrac><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>k</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>⇒</mo><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><mi>t</mi><mi>.</mi></mrow></math> (integrando la EDO <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>d</mi><mi>t</mi><mo>⇒</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi></mrow></math>: las curvas integrales son circunferencias, las isoclinas son radiales.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Teorema de Picard"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Picard (existencia y unicidad local)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>D</mi><mo>⊂</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>×</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math> es continua en <math display=\"inline\"><mi>D</mi></math> y <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math> es continua en <math display=\"inline\"><mi>D</mi></math>, entonces, para todo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo>,</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <strong>existe</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (definida y derivable en un entorno de <math display=\"inline\"><mi>τ</mi></math>) que cumple: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>x</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>τ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ξ</mi></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Tema II: variables separables"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 13:</strong> <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mi>−</mi><mi>y</mi><mi>d</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>=</mo><mi>−</mi><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Variables separables",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>M</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><msub><mi>M</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><msub><mi>M</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>−</mi><msub><mi>M</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><msub><mi>N</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>N</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 14:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><msup><mi>e</mi><mi>k</mi></msup><mo>=</mo><mfrac><mi>C</mi><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 15:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>x</mi></mrow><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>y</mi><mo>−</mo><mn>1</mn></mrow><mi>y</mi></mfrac><mi>d</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: ejemplo 14 corregido",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: isoclinas (<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><mi>k</mi></mrow></math>; curvas integrales <math display=\"inline\"><mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi></mrow></math> circunferencias); teorema de Picard (condición suficiente, local en un entorno de <math display=\"inline\"><mi>τ</mi></math>); ejemplo 13 (<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>=</mo><mi>k</mi></mrow></math>); forma separable (al dividir deben comprobarse aparte las soluciones de los factores nulos); ejemplo 15 (<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>+</mo><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>; las rectas <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> se pierden en la división). ⚠ <strong>Ejemplo 14:</strong> el original escribe en rojo <code>y = -Cx</code>, pero el cálculo anterior (exponente <code>-ln x</code>) da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mi>/</mi><mi>x</mi></mrow></math>, y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mi>C</mi><mi>x</mi></mrow></math> no satisface la EDO (salvo el caso trivial <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>); <strong>el resultado correcto es <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mi>/</mi><mi>x</mi></mrow></math></strong> (error de copia o de simplificación en el original). Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(«Teorema de existencia y unicidad» y «Ecuaciones separables»). Véase <code>koadernoa_metodo_n_p006.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones homogéneas y reducción por traslación"
    },
    {
     "mota": "testua",
     "html": "Definición de función homogénea, ejemplos de grado, resolución mediante la sustitución <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> y transformación en homogéneas, por traslación, de las ecuaciones con cociente de dos formas afines."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Función homogénea (definición)"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Función homogénea (de grado n)",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mi>n</mi></msup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 16:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mroot><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup></mrow><mn>3</mn></mroot></mrow></math>: <math display=\"block\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mroot><mrow><msup><mi>λ</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mn>3</mn></mroot><mo>=</mo><mi>λ</mi><mroot><mrow><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>y</mi><mn>3</mn></msup></mrow><mn>3</mn></mroot><mo>=</mo><mi>λ</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>g</mi><mi>r</mi><mi>a</mi><mi>d</mi><mi>u</mi><mi>a</mi><mspace width=\"0.222em\"></mspace><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <strong>Ejemplo 17:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msup><mi>λ</mi><mn>2</mn></msup><mi>f</mi></mrow></math> (grado 2). <strong>Ejemplo 18:</strong> <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>x</mi><mo>,</mo><mi>λ</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>λ</mi><mn>0</mn></msup><mi>f</mi><mo>=</mo><mi>f</mi></mrow></math> (grado 0)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Resolución de la ecuación homogénea"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sustitución <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> (es decir <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>) → ecuación de <strong>variables separables</strong>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 19:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>x</mi><mi>y</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (de grado 0). <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>+</mo><mi>u</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mrow><mi>u</mi><msup><mi>x</mi><mn>2</mn></msup></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mi>u</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>=</mo><mfrac><mi>u</mi><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mi>u</mi><mo>=</mo><mfrac><msup><mi>u</mi><mn>3</mn></msup><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>u</mi><mn>2</mn></msup></mrow><msup><mi>u</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><msup><mi>u</mi><mn>3</mn></msup></mfrac><mo>−</mo><mfrac><mn>1</mn><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>u</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mfrac><mn>1</mn><mrow><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> Como <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 20:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>+</mo><mi>u</mi><mo>=</mo><mi>x</mi><mo>⋅</mo><mi>u</mi><mi>x</mi><mo>=</mo><mi>u</mi><msup><mi>x</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><mi>x</mi><mo>=</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mi>u</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuaciones reducibles a homogéneas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><msub><mi>a</mi><mn>1</mn></msub><mi>x</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>y</mi><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: si <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, es homogénea. En caso contrario, el cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>h</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mi>k</mi></mrow></math>, donde: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>a</mi><mi>h</mi><mo>+</mo><mi>b</mi><mi>k</mi><mo>+</mo><mi>c</mi><mo>=</mo><mn>0</mn></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>a</mi><mn>1</mn></msub><mi>h</mi><mo>+</mo><msub><mi>b</mi><mn>1</mn></msub><mi>k</mi><mo>+</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><mn>0</mn></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 21:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>. Sistema <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn><mo>=</mo><mn>0</mn></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>. Cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><mi>d</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></mfrac><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><msub><mi>y</mi><mn>1</mn></msub></mrow><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">homogeneoa</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: ejemplo 20 corregido",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplos de grado (16→1, 17→2, 18→0); sustitución <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>u</mi><mo>+</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>); ejemplo 19 (<math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>; la solución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> se pierde al dividir por <math display=\"inline\"><msup><mi>u</mi><mn>3</mn></msup></math>; <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mi>x</mi></mrow></math> anulan el denominador); ejemplo 21 (punto de corte <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> llevado al origen, homogénea). ⚠ <strong>Ejemplo 20:</strong> al calcular <math display=\"inline\"><mrow><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mi>/</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math> el original pierde el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>2</mn></mrow></math> (escribe <code>x^2 - ln x</code>); lo correcto es <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math> no satisface <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>y</mi></mrow></math>, salvo trivialmente); aquí corregido. La colocación de signos del autor (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>) se ha normalizado como <math display=\"inline\"><mrow><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Verificación interna: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> («Ecuaciones homogéneas») confirma el factor <math display=\"inline\"><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></math>. Véase <code>koadernoa_metodo_n_p008.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reducción a homogénea (rectas paralelas) y ecuación lineal de primer orden"
    },
    {
     "mota": "testua",
     "html": "Final del ejemplo 21, cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> para rectas paralelas y ecuación lineal de primer orden por variación de constantes."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Final del ejemplo 21"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mi>/</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mi>u</mi><msub><mi>x</mi><mn>1</mn></msub></mrow></math>; sustituyendo: <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>u</mi><mo>=</mo><mfrac><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><msub><mi>x</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>u</mi><mo>′</mo></msup><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow></mfrac><mo>−</mo><mi>u</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>u</mi></mrow><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></mfrac><mi>d</mi><mi>u</mi><mo>=</mo><mo>∫</mo><mfrac><mrow><mi>d</mi><msub><mi>x</mi><mn>1</mn></msub></mrow><msub><mi>x</mi><mn>1</mn></msub></mfrac><mi>.</mi></mrow></math> La descomposición correcta es <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>−</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rectas paralelas: <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si el sistema no tiene solución (rectas paralelas), el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> → variables separables."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 22:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>4</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><mo>+</mo><mn>5</mn></mrow></mfrac></mrow></math>. Sistema incompatible (<math display=\"inline\"><mrow><mn>7</mn><mo>=</mo><mn>0</mn></mrow></math>); <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>2</mn><mo>+</mo><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mo>=</mo><mfrac><mrow><mi>z</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>5</mn><mi>z</mi><mo>+</mo><mn>9</mn></mrow><mrow><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mo>∫</mo><mfrac><mrow><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn></mrow><mrow><mn>5</mn><mi>z</mi><mo>+</mo><mn>9</mn></mrow></mfrac><mi>d</mi><mi>z</mi><mo>=</mo><mo>∫</mo><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>2</mn><mn>5</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mfrac><mn>18</mn><mn>25</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mfrac><mn>9</mn><mn>5</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>5</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mn>9</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>x</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación lineal de primer orden"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en dos pasos: 1. Resolver la <strong>ecuación homogénea</strong> (<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>) → solución con una sola constante. 2. Convertir la constante en una <strong>función</strong> de <math display=\"inline\"><mi>x</mi></math> (variación de constantes) y sustituir en la ecuación completa."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 23:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mn>2</mn><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mi>y</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>(1) Homogénea:</strong> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>y</mi></mrow><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><msup><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> <strong>(2) Variando la constante</strong>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><msup><mi>R</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mi>R</mi><mo>⋅</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Sustituyendo en la ecuación completa, los términos con <math display=\"inline\"><mi>R</mi></math> se anulan: <math display=\"block\"><mrow><msup><mi>R</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>R</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>R</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: corrección del ejemplo 21",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 22 (rectas paralelas, <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>; derivar la primitiva da <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>z</mi><mo>+</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mi>z</mi><mo>+</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>); método de la ecuación lineal (homogénea + variación de constantes); ejemplo 23 (se anulan los términos con <math display=\"inline\"><mi>R</mi></math> ⇒ <math display=\"inline\"><mrow><msup><mi>R</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mo>+</mo><mn>1</mn></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn><mo>+</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, comprobado por sustitución directa, <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>−</mi><mn>1</mn></mrow></math>). ⚠ <strong>Corrección del ejemplo 21 (mahairatua):</strong> como <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, hay que integrar <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; la descomposición correcta es <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> (no la <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>u</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> del original), por tanto el primer término es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi></mrow></math> y la solución <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><msub><mi>x</mi><mn>1</mn></msub><mo>+</mo><mi>C</mi></mrow></math>; el original tiene el error <math display=\"inline\"><mrow><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup><mo>→</mo><mn>1</mn><mo>+</mo><mi>u</mi></mrow></math> en el denominador (el ejemplo iniciado en la página 8 se cierra así). Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(«Ecuaciones lineales»). Véase"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metodo_n_p010.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuación lineal (variación de constantes) y ecuación de Bernoulli"
    },
    {
     "mota": "testua",
     "html": "Ecuación lineal de primer orden por variación de constantes y comprobación, y linealización de la ecuación de Bernoulli mediante el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 24: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>(1) Homogénea</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <strong>(2) Variando la constante</strong>, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>−</mo><mi>x</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> Sustituyendo en la ecuación completa (los términos <math display=\"inline\"><mrow><mi>x</mi><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math> se anulan): <math display=\"block\"><mrow><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>C</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>t</mi><mo>=</mo><mi>x</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"inline\"><mrow><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>x</mi><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>k</mi></mrow></math>. <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>e</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>=</mo><mn>1</mn><mo>+</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mi>.</mi></mrow></math> <strong>Comprobación:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>k</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>; sustituyendo <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo>+</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math> ✓."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Bernoulli"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>n</mi></msup></mrow></math> (<math display=\"inline\"><mrow><mi>n</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>): (1) dividir por <math display=\"inline\"><msup><mi>y</mi><mi>n</mi></msup></math>; (2) cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math> → ecuación lineal."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 25:</strong> <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>3</mn></msup></mrow></math>. Dividiendo por <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>: <math display=\"block\"><mrow><mfrac><mn>1</mn><msup><mi>y</mi><mn>3</mn></msup></mfrac><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mo>=</mo><msup><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mi>z</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>y</mi><mrow><mi>−</mi><mn>3</mn></mrow></msup><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>⇒</mo><mi>d</mi><mi>y</mi><mi>/</mi><mi>d</mi><mi>x</mi><mo>=</mo><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>3</mn></msup><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>z</mi><mi>/</mi><mi>d</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>x</mi><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>−</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">lineala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Homogénea <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>z</mi><mo>=</mo><mi>k</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>. Variando la constante <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math> <strong>Integral cerrada</strong> (por comprobación): <math display=\"inline\"><mrow><mo>∫</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mi>C</mi></mrow></math>, por tanto: <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mi>±</mi><mfrac><mn>1</mn><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></msqrt></mfrac><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> también es solución, perdida al dividir por <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: integral cerrada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 24 (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn><mo>+</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mi>/</mi><mn>2</mn></mrow></msup></mrow></math>, la comprobación da <math display=\"inline\"><mi>x</mi></math>); esquema de Bernoulli (<math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup><mo>⇒</mo><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>P</mi><mi>z</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>Q</mi></mrow></math>); ejemplo 25 (<math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup></mrow></math>, homogénea <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>k</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup></mrow></math>). <strong>El autor deja sin evaluar la última integral</strong>; cerrada: <math display=\"inline\"><mrow><mo>∫</mo><mi>−</mi><mn>2</mn><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mi>d</mi><mi>x</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>e</mi><mrow><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></msup><mo>+</mo><mi>C</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mn>1</mn><mi>/</mi><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><msup><mi>x</mi><mn>2</mn></msup></msup></mrow></msqrt></mrow></math> (comprobado por sustitución en la ecuación de <math display=\"inline\"><mi>z</mi></math>); <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es una solución aparte (perdida al dividir por <math display=\"inline\"><msup><mi>y</mi><mn>3</mn></msup></math>). Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(«Ecuaciones de Bernoulli»). Fecha <math display=\"inline\"><mfrac><mfrac><mn>31</mn><mn>7</mn></mfrac><mn>2013</mn></mfrac></math> (p. 12) y <math display=\"inline\"><mfrac><mfrac><mn>5</mn><mn>8</mn></mfrac><mn>2013</mn></mfrac></math> (p. 13). Véase <code>koadernoa_metodo_n_p012.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Riccati, ecuaciones exactas y factores integrantes"
    },
    {
     "mota": "testua",
     "html": "Linealización de la ecuación de Riccati a partir de una solución particular, ecuaciones diferenciales exactas y factores integrantes."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Riccati"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Para resolverla se necesita una solución particular conocida <math display=\"inline\"><mrow><msub><mi>y</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; con el cambio <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mfrac><mn>1</mn><mi>z</mi></mfrac></mrow></math> se obtiene una ecuación <strong>lineal</strong> (<math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>Q</mi><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>Q</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuaciones diferenciales exactas"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>+</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>; si <math display=\"inline\"><mrow><mi>∂</mi><mi>M</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>∂</mi><mi>N</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>, entonces existe <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tal que <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>t</mi><mo>=</mo><mi>M</mi></mrow></math> y <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>N</mi></mrow></math>; la solución es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 26:</strong> <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>t</mi><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>M</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mrow><mi>∂</mi><mi>N</mi></mrow><mrow><mi>∂</mi><mi>t</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">zehatza</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Para calcular <math display=\"inline\"><mi>f</mi></math> (integrando respecto a <math display=\"inline\"><mi>t</mi></math>): <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mo>∫</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>d</mi><mi>t</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>k</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> Solución: <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 27:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>∂</mi><mi>M</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>1</mn><mo>=</mo><mi>∂</mi><mi>N</mi><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math> (exacta): <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mo>∫</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>2</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>t</mi><mo>=</mo><mi>x</mi><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>t</mi><mo>+</mo><msup><mi>k</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>k</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>k</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> Solución: <math display=\"inline\"><mrow><mi>x</mi><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Factores integrantes"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>M</mi><mi>d</mi><mi>t</mi><mo>+</mo><mi>N</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> no es exacta, puede existir un factor integrante <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que haga exacta <math display=\"inline\"><mrow><mi>U</mi><mi>M</mi><mi>d</mi><mi>t</mi><mo>+</mo><mi>U</mi><mi>N</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 28:</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, con el ansatz <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. <math display=\"inline\"><mrow><msub><mi>M</mi><mn>1</mn></msub><mo>=</mo><mi>U</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>N</mi><mn>1</mn></msub><mo>=</mo><mi>−</mi><mi>U</mi><msup><mi>t</mi><mn>2</mn></msup></mrow></math>; <math display=\"inline\"><mrow><mi>∂</mi><msub><mi>M</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mi>∂</mi><msub><mi>N</mi><mn>1</mn></msub><mi>/</mi><mi>∂</mi><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><mn>2</mn><mi>x</mi><mi>t</mi><msup><mi>f</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>f</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>t</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Poniendo <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, los términos factorizan <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>, por tanto: <math display=\"block\"><mrow><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mi>C</mi><mi>s</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>=</mo><mfrac><mi>C</mi><mrow><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: Riccati (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mn>1</mn></msub><mo>+</mo><mn>1</mn><mi>/</mi><mi>z</mi><mo>⇒</mo><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>Q</mi><msub><mi>y</mi><mn>1</mn></msub><mo>−</mo><mi>P</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>z</mi><mo>=</mo><mi>−</mi><mi>Q</mi></mrow></math> lineal); ejemplo 26 (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>t</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi></mrow></math>, las derivadas recuperan <math display=\"inline\"><mrow><mi>M</mi><mo>,</mo><mi>N</mi></mrow></math>); ejemplo 27 (<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>x</mi><mi>t</mi><mo>+</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>C</mi></mrow></math>; «<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mn>0</mn></mrow></math>» = «<math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>C</mi></mrow></math>» absorbiendo la constante); definición de factor integrante (los ceros o singularidades de <math display=\"inline\"><mi>U</mi></math> pueden añadir o perder soluciones). Ejemplo 28: las derivadas cruzadas son correctas; con <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mi>/</mi><mi>s</mi></mrow></math> ⇒ <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. ⭐⭐ <strong>Actualización (leída en la página 16):</strong> <code>koadernoa_metodo_n_p016.typ</code> elimina el factor común y obtiene <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mi>s</mi></mrow></math>, confirmando <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. El «<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>» del final del ejemplo 26 es un lapsus argumental (<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>). Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": "(Riccati, ecuaciones exactas, factores integrantes). Véase <code>koadernoa_metodo_n_p014.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factores integrantes: <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cálculo de tres factores integrantes: final del ejemplo 28 (dependiente de <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>), el 29 (dependiente de <math display=\"inline\"><mi>x</mi></math>) y el 30 (dependiente de <math display=\"inline\"><mrow><mi>t</mi><mi>x</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Final del ejemplo 28 (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "Igualando las derivadas y poniendo <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi></mrow></math>, eliminando el factor común: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mi>s</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mi>f</mi></mfrac><mo>=</mo><mo>∫</mo><mi>−</mi><mfrac><mn>1</mn><mi>s</mi></mfrac><mi>d</mi><mi>s</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>s</mi><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>=</mo><mfrac><mi>k</mi><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>t</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>=</mo><mfrac><mi>k</mi><mrow><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math> Sustituyendo, <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> es <strong>exacta</strong> (<math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>t</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>x</mi></msub><mi>M</mi><mo>=</mo><msub><mi>∂</mi><mi>t</mi></msub><mi>N</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 29 (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>t</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><msup><mi>t</mi><mn>2</mn></msup><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mi>t</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi></mrow></math>; imponiendo <math display=\"inline\"><mrow><msub><mi>∂</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>∂</mi><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>U</mi><mi>N</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math> (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><mfrac><mrow><msup><mi>U</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>8</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>−</mo><mn>8</mn><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn></mrow><mrow><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>4</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>3</mn></msup><msup><mi>e</mi><mi>x</mi></msup><mo>+</mo><mn>2</mn><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>4</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>U</mi></mrow><mi>U</mi></mfrac><mo>=</mo><mo>∫</mo><mi>−</mi><mfrac><mn>4</mn><mi>x</mi></mfrac><mi>d</mi><mi>x</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>U</mi><mo>=</mo><mi>−</mi><mn>4</mn><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>k</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>U</mi><mo>=</mo><mi>C</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 30 (<math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><msup><mi>t</mi><mn>3</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>+</mo><mn>4</mn><mi>t</mi><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mn>8</mn><msup><mi>x</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. De la condición de exactitud: <math display=\"block\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>4</mn></msup><mi>x</mi><mo>+</mo><mn>2</mn><msup><mi>t</mi><mn>3</mn></msup><mo>−</mo><mn>4</mn><mi>t</mi><msup><mi>x</mi><mn>5</mn></msup><mo>−</mo><mn>8</mn><msup><mi>x</mi><mn>4</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Factorizando el denominador <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup></mrow><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>4</mn><msup><mi>x</mi><mn>4</mn></msup><mo>−</mo><msup><mi>t</mi><mn>3</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mi>.</mi></mrow></math> Poniendo <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>t</mi><mi>x</mi></mrow></math>: <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>f</mi></mrow><mi>f</mi></mfrac><mo>=</mo><mo>∫</mo><mfrac><mn>1</mn><mrow><mi>−</mi><mi>v</mi><mo>−</mo><mn>2</mn></mrow></mfrac><mi>d</mi><mi>v</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>f</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>C</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>f</mi><mo>=</mo><mfrac><mi>K</mi><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: tres factores comprobados",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los tres factores son correctos al recalcular: ⭐ (28) <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math> con <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>3</mn><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>s</mi><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>s</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>f</mi><mo>=</mo><mi>C</mi><mi>/</mi><mi>s</mi><mo>⇒</mo><mi>U</mi><mo>=</mo><mi>k</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <strong>confirma</strong> la lectura de la página 14 (multiplicando <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>1</mn><mi>/</mi><mi>t</mi><mo>+</mo><mn>1</mn><mi>/</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mi>−</mi><mi>t</mi><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>x</mi></msub><mi>M</mi><mo>=</mo><msub><mi>∂</mi><mi>t</mi></msub><mi>N</mi><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><msup><mi>x</mi><mn>2</mn></msup></mrow></math>); (29) <math display=\"inline\"><mrow><msup><mi>U</mi><mo>′</mo></msup><mi>/</mi><mi>U</mi><mo>=</mo><mi>−</mi><mn>4</mn><mi>/</mi><mi>x</mi><mo>⇒</mo><mi>U</mi><mo>=</mo><mi>C</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> (<math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>); (30) <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>/</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>t</mi><mi>x</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⇒</mo><mi>f</mi><mo>=</mo><mi>K</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (<math display=\"inline\"><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo>≠</mo><mn>0</mn></mrow></math>; hay que conservar la singularidad del factor al interpretar las soluciones). Fecha <math display=\"inline\"><mfrac><mn>5</mn><mn>8</mn></mfrac></math> y <math display=\"inline\"><mfrac><mfrac><mn>6</mn><mn>8</mn></mfrac><mn>2013</mn></mfrac></math>. Verificación interna: <code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code> (factores integrantes). Véase <code>koadernoa_metodo_n_p016.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Potencial de la ecuación exacta y reducción de orden"
    },
    {
     "mota": "testua",
     "html": "Potencial de la ecuación exacta del ejemplo 30, y método para bajar el orden de las EDO de orden superior (cuando <math display=\"inline\"><mi>x</mi></math> no aparece)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Potencial del ejemplo 30"
    },
    {
     "mota": "testua",
     "html": "Con el factor <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, simplificando los coeficientes: <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>t</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Integrando respecto a <math display=\"inline\"><mi>t</mi></math>: <math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><mfrac><mi>x</mi><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><mfrac><msup><mi>t</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>f</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mi>t</mi><mrow><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn></mrow></mfrac><mo>+</mo><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>N</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>K</mi><mo>=</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>f</mi><mo>=</mo><mfrac><msup><mi>t</mi><mn>3</mn></msup><mn>3</mn></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Tema 3: EDO de orden mayor que uno"
    },
    {
     "mota": "testua",
     "html": "<strong>Reducción de orden.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><mi>x</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>x</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (orden 2). <strong>Caso 1: cuando <math display=\"inline\"><mi>x</mi></math> no aparece</strong>, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>,</mo><msup><mi>x</mi><mo>′</mo></msup><mo>,</mo><msup><mi>x</mi><mo>″</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, cambio <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math> (por tanto <math display=\"inline\"><mrow><msup><mi>x</mi><mo>″</mo></msup><mo>=</mo><msup><mi>p</mi><mo>′</mo></msup></mrow></math>)."
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 3.1:</strong> <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math>. <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math>: <math display=\"block\"><mrow><mi>t</mi><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mi>p</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mfrac><mi>p</mi><mi>t</mi></mfrac><mo>=</mo><mn>3</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">lineala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Homogénea <math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mi>p</mi><mi>/</mi><mi>t</mi><mo>=</mo><mn>0</mn><mo>⇒</mo><mi>p</mi><mo>=</mo><mi>K</mi><mi>t</mi></mrow></math>. Variando la constante <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi></mrow></math>: <math display=\"block\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>t</mi><mo>=</mo><mn>3</mn><mi>t</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>K</mi><mo>=</mo><mn>3</mn><mi>t</mi><mo>+</mo><msub><mi>C</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math> <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>t</mi><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>t</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>t</mi><mi>.</mi></mrow></math> Como <math display=\"inline\"><mrow><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mi>p</mi></mrow></math>: <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>t</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>t</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mfrac><msub><mi>C</mi><mn>1</mn></msub><mn>2</mn></mfrac><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math> (al ser de orden 2, <strong>dos constantes</strong>.)"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente: dos errores de copia corregidos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "⭐ Potencial del ejemplo 30 correcto: <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mi>/</mi><mn>3</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mi>x</mi><mo>+</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>x</mi><mn>4</mn></msup><mo>+</mo><mi>C</mi></mrow></math> (recalculado). ⚠ <strong>Corrección 1 (mahairatua):</strong> al copiar <math display=\"inline\"><msub><mi>N</mi><mn>1</mn></msub></math> el original cambia <math display=\"inline\"><mrow><mn>8</mn><msup><mi>x</mi><mn>3</mn></msup></mrow></math> → <math display=\"inline\"><mrow><mn>8</mn><msup><mi>t</mi><mn>3</mn></msup></mrow></math>, y de ahí surgen una larga división polinómica y un potencial erróneo en la página 19, que <strong>no</strong> corresponden a la ecuación original; es un error de copia (el factor integrante está bien). ⚠ <strong>Corrección 2 (mahairatua):</strong> ejemplo 3.1: dividiendo por <math display=\"inline\"><mi>t</mi></math> desde <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math> resulta <math display=\"inline\"><mrow><msup><mi>p</mi><mo>′</mo></msup><mo>−</mo><mi>p</mi><mi>/</mi><mi>t</mi><mo>=</mo><mn>3</mn><mi>t</mi></mrow></math> (no <math display=\"inline\"><mrow><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math>); por tanto <math display=\"inline\"><mrow><msup><mi>K</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><mi>t</mi></mrow></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>t</mi><mn>3</mn></msup><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>C</mi><mn>1</mn></msub><mi>/</mi><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math>. El original deja el segundo miembro sin dividir por <math display=\"inline\"><mi>t</mi></math> y obtiene <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>4</mn></msup><mi>/</mi><mn>8</mn><mo>+</mo><msub><mi>C</mi><mn>1</mn></msub><msup><mi>t</mi><mn>2</mn></msup><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub></mrow></math>, que cumple <math display=\"inline\"><mrow><mi>t</mi><msup><mi>x</mi><mo>″</mo></msup><mo>−</mo><msup><mi>x</mi><mo>′</mo></msup><mo>=</mo><mn>3</mn><msup><mi>t</mi><mn>3</mn></msup></mrow></math> (no el <math display=\"inline\"><mrow><mn>3</mn><msup><mi>t</mi><mn>2</mn></msup></mrow></math> del enunciado); el procedimiento de reducción de orden es correcto. Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/03_orden_superior.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p018.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Familias de curvas, existencia-unicidad y condición de ecuación exacta"
    },
    {
     "mota": "testua",
     "html": "Cómo se construye una ecuación diferencial de primer orden eliminando el parámetro de una familia de curvas, forma implícita/normal, teorema de existencia y unicidad, y condición de exactitud."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "De las familias de curvas a la ecuación diferencial"
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 12:</strong> <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo>⇒</mo><mn>2</mn><mi>x</mi><mo>+</mo><mn>2</mn><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn><mo>⇒</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>. Pendiente horizontal en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, vertical en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. <strong>Ejemplo 14:</strong> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; sustituyendo <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi><mo>=</mo><mi>−</mi><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mi>c</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> En general, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mi>∂</mi><mi mathvariant=\"normal\">Φ</mi><mi>/</mi><mi>∂</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> juntas → ecuación diferencial (parámetro eliminado)."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi></mrow></math>, la derivada total: <math display=\"block\"><mrow><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>x</mi></mrow></mfrac><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mfrac><mrow><mi>∂</mi><mi>U</mi></mrow><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">inplizitua</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>;</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>P</mi><mi>Q</mi></mfrac><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">normala</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Teorema de existencia y unicidad"
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Existencia y unicidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi></mrow></math> son continuas, entonces el problema <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>y</mi><mn>0</mn></msub></mtd></mtr></mtable></mrow></math> tiene <strong>solución única</strong>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Ejemplo 15:</strong> <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn></mrow></math>. <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>∂</mi><mi>f</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>x</mi><mi>/</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> continuas en un entorno de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ⇒ solución única. (No definida en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>.)"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo 16: circunferencias por el origen"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mi>R</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><msup><mi>R</mi><mn>2</mn></msup></mrow></math> (pasa por el origen). Eliminando <math display=\"inline\"><mrow><mi>R</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mrow><mi>y</mi><mo>−</mo><mi>R</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>−</mi><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><mn>2</mn><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>2</mn><mi>x</mi><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "abisua",
     "titulua": "Cuidado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todas esas circunferencias pasan por <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero la forma normal es <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> allí; por tanto <strong>no contradicen el teorema de unicidad</strong>: las hipótesis fallan en ese punto común."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuaciones exactas (condición)"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es <strong>exacta</strong> si <math display=\"inline\"><mrow><mi>∂</mi><mi>P</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>∂</mi><mi>Q</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo correcto: ejemplo 12 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>/</mi><mi>y</mi></mrow></math>, pendiente horizontal en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, vertical en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); ejemplo 14 (<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>; el cuadrado pierde el signo de <math display=\"inline\"><mrow><mi>x</mi><mo>−</mo><mi>c</mi></mrow></math>, describe toda la familia); <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>C</mi><mo>⇒</mo><msub><mi>U</mi><mi>x</mi></msub><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>; teorema de existencia y unicidad (ejemplo 15: <math display=\"inline\"><mi>f</mi></math>, <math display=\"inline\"><msub><mi>f</mi><mi>y</mi></msub></math> continuas en un entorno de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ⇒ solución única, salvo en <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>); ⭐ ejemplo 16 (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; todas las circunferencias por <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero la forma normal <math display=\"inline\"><mrow><mn>0</mn><mi>/</mi><mn>0</mn></mrow></math> allí: las hipótesis fallan, no contradice el teorema); condición de exactitud <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub></mrow></math>. Se han recogido algunas observaciones imprecisas en euskera/castellano. Verificación interna:"
      },
      {
       "mota": "testua",
       "html": "<code>euskara_osoa/kapituluak/edf/02_primer_orden.typ</code>"
      },
      {
       "mota": "testua",
       "html": ". Véase <code>koadernoa_metodo_n_p054.typ</code>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones exactas y variables separadas"
    },
    {
     "mota": "testua",
     "html": "Se trabaja el procedimiento para construir el potencial de una ecuación exacta en tres ejemplos; después se presentan el caso <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la fórmula de variables separadas."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Método del potencial"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 17",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En forma diferencial, <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Como <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub><mo>=</mo><mn>0</mn></mrow></math>, es exacta. Integrando <math display=\"inline\"><mrow><msub><mi>U</mi><mi>x</mi></msub><mo>=</mo><mi>P</mi></mrow></math>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la condición <math display=\"inline\"><mrow><msub><mi>U</mi><mi>y</mi></msub><mo>=</mo><mi>Q</mi></mrow></math> da <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>. Por tanto, <math display=\"block\"><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><mn>2</mn></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>K</mi><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Pasos del autor: (1) integrar <math display=\"inline\"><mi>P</mi></math> respecto a <math display=\"inline\"><mi>x</mi></math>; (2) derivar el resultado respecto a <math display=\"inline\"><mi>y</mi></math> e igualarlo a <math display=\"inline\"><mi>Q</mi></math>; (3) integrar la función restante."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 18",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><msub><mi>Q</mi><mi>x</mi></msub><mo>=</mo><mn>1</mn></mrow></math>. El potencial es <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>x</mi><mo>+</mo><mn>3</mn><mi>y</mi><mo>−</mo><mfrac><msup><mi>y</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>, y la solución <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math>. Derivar recupera la forma original: <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 19",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>P</mi><mi>y</mi></msub><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><msub><mi>Q</mi><mi>x</mi></msub><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>; por tanto no es exacta. Si se integra <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la comparación exige <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mn>2</mn><mi>x</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow></math>: la dependencia de <math display=\"inline\"><mi>x</mi></math> muestra la imposibilidad. [CORREGIDO: en el papel aparece <math display=\"inline\"><mrow><msup><mi>h</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>2</mn><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn></mrow></math>, con los términos pasados con signo contrario; la conclusión es la misma: no es exacta.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Directamente integrables y separadas"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En forma diferencial es <math display=\"inline\"><mrow><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y es exacta. En general, en el caso de variables separadas,"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejercicio 3, planteado en el cuaderno",
     "blokeak": [
      {
       "mota": "testua",
       "html": "(a) <math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>. (b) <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Lecturas dudosas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La segunda línea de los pasos y la nota al margen del ejemplo 19 no se leen por completo. Los dos exponentes cuadrados de 3(a) son visibles. No se ha inventado texto ilegible."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Variables separadas y factores integrantes"
    },
    {
     "mota": "testua",
     "html": "Se trabajan tres ejemplos de variables separadas, la definición de factor integrante y las soluciones singulares que pueden perderse al dividir."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplos de variables separadas"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 20",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mn>1</mn><mo>+</mo><mi>y</mi></mrow><mrow><mn>2</mn><mi>x</mi></mrow></mfrac><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi></mrow></msup><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Multiplicando, <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, y <math display=\"block\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math> [CORREGIDO: la última línea del papel escribe <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mn>0</mn></mrow></math>; la familia completa necesita una constante arbitraria.]"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 21",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math> y, en un intervalo en el que <math display=\"inline\"><mi>y</mi></math> tiene signo fijo, <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>±</mi><mfrac><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> Integrando, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi><mo>±</mo><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>, es decir, arcos de la circunferencia unidad. También deben conservarse las soluciones constantes <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, que se pierden al dividir."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 22",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>, <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mn>0</mn></mrow></math>, tomando <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> la función tiene una prolongación continua en el origen, pero no resuelve el PVI de forma clásica, porque <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math> no está definido en <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>. [CORREGIDO: el papel sustituye <math display=\"inline\"><mrow><mn>0</mn><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>0</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>−</mi><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; ese producto no está definido.]"
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Factor integrante"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Factor integrante",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Función que convierte la forma no exacta <math display=\"inline\"><mrow><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> en forma exacta al multiplicarla por <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 23",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>y</mi></mrow></msup><mi>d</mi><mi>x</mi><mo>−</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mi>y</mi></msup></mrow></math>; el resultado es <math display=\"inline\"><mrow><mn>2</mn><mi>x</mi><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>e</mi><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>C</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 24",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usando <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi></mrow></math>. Pero <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es una solución singular de la ecuación original y se pierde al dividir. Por tanto: <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 25",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></mrow></math>, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Las dos derivadas cruzadas son <math display=\"inline\"><mrow><mi>−</mi><mfrac><mn>1</mn><msup><mi>y</mi><mn>2</mn></msup></mfrac></mrow></math>; la forma es exacta en las regiones <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>≠</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las dos notas verdes bajo el ejemplo 23 son parcialmente ilegibles. El intento de inversión de variable del ejemplo 21 también está sin terminar; no se ha completado."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones separables y soluciones perdidas"
    },
    {
     "mota": "testua",
     "html": "Se termina el ejemplo 25, se da la fórmula general de las ecuaciones separables y en dos ejemplos se recupera la solución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> descartada al dividir."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Final del ejemplo 25"
    },
    {
     "mota": "testua",
     "html": "La forma exacta es <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mi>y</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>−</mo><mfrac><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>. Potencial y familia: <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mfrac><mi>x</mi><mi>y</mi></mfrac><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De ahí, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>E</mi><mfrac><mi>x</mi><mrow><mn>1</mn><mo>−</mo><mi>E</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn></mrow></math> recupera <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, la solución que el factor <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac></math> descartó."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación separable general"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> <math display=\"block\"><mrow><mo>⇒</mo><mo>∫</mo><mfrac><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mfrac><mrow><mi>V</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La fórmula se usa en las regiones donde <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>U</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≠</mo><mn>0</mn></mrow></math>. Las raíces de los factores por los que se divide deben comprobarse aparte en la ecuación original."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 26",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>−</mo><mi>y</mi><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> y el factor <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>x</mi><mi>y</mi></mrow></mfrac></math>, <math display=\"block\"><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>y</mi><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> es decir, <math display=\"inline\"><mrow><mi>y</mi><msup><mi>e</mi><mi>y</mi></msup><mo>=</mo><mi>D</mi><mi>x</mi></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es solución de la original y <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> la recupera. <math display=\"inline\"><mrow><msup><mi>e</mi><mi>C</mi></msup><mo>=</mo><mn>0</mn></mrow></math> o <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mi>−</mi><mi>∞</mi></mrow></math> en la escritura del papel es notación de límite, no una constante real finita."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 27",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>4</mn></msup><mi>d</mi><mi>x</mi><mo>−</mo><msup><mi>x</mi><mn>3</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><mrow><msup><mi>x</mi><mn>3</mn></msup><msup><mi>y</mi><mn>4</mn></msup></mrow></mfrac></mrow></math>, <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mn>4</mn></mrow><msup><mi>x</mi><mn>3</mn></msup></mfrac><mi>d</mi><mi>x</mi><mo>+</mo><mfrac><mrow><mn>3</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow><msup><mi>y</mi><mn>4</mn></msup></mfrac><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> Las primitivas son <math display=\"inline\"><mfrac><mrow><mn>2</mn><mo>−</mo><mi>x</mi></mrow><msup><mi>x</mi><mn>2</mn></msup></mfrac></math> y <math display=\"inline\"><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow><msup><mi>y</mi><mn>3</mn></msup></mfrac></math>; por tanto <math display=\"block\"><mrow><msup><mi>y</mi><mn>3</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>−</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mrow><mn>3</mn><mi>.</mi></mrow></msup></mrow></math> <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> también es solución de la ecuación original; en la reescritura <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac></mrow></math> la <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> recoge esa rama."
    },
    {
     "mota": "oharra",
     "titulua": "Aviso del autor",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cuando se consigue separar las variables, deben sustituirse en la ecuación original los candidatos descartados al dividir. La última nota azul está sin terminar."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factores integrantes de una sola variable"
    },
    {
     "mota": "testua",
     "html": "Se deduce cuándo existen, para una forma no exacta <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, factores integrantes de tipo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y se aplican en dos ejemplos."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Condición general"
    },
    {
     "mota": "testua",
     "html": "Multiplicando la forma <math display=\"inline\"><mrow><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>d</mi><mi>x</mi><mo>+</mo><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> por <math display=\"inline\"><mi>μ</mi></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mo>−</mo><msub><mrow><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>y</mi></msub><mo>=</mo><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>,</mo></mrow></math> y el segundo miembro debe ser función únicamente de <math display=\"inline\"><mi>x</mi></math>. Entonces <math display=\"block\"><mrow><mi>μ</mi><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mi>d</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mfrac><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub><mo>−</mo><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub></mrow><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>,</mo></mrow></math> y el segundo miembro debe ser función únicamente de <math display=\"inline\"><mi>y</mi></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 28",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>−</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub><mo>=</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>−</mo><mn>1</mn></mrow></math> y <math display=\"block\"><mrow><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math> Por tanto <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>C</mi><msup><mi>x</mi><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></math>. Tras multiplicar, <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mo>+</mo><mfrac><mi>y</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>,</mo></mrow></math> y las dos derivadas cruzadas son <math display=\"inline\"><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 29",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La candidata para <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> aún depende de <math display=\"inline\"><mi>x</mi></math> y no sirve. Para <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en cambio, <math display=\"block\"><mrow><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>C</mi><mi>x</mi></mrow></math>. Forma exacta: <math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math> El potencial es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Regla de la cadena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel recoge también las identidades <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mn>3</mn><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>z</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>z</mi></mfrac><mfrac><mrow><mi>d</mi><mi>z</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>, como ayuda a la derivación anterior."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Factores integrantes compuestos y sustitución lineal"
    },
    {
     "mota": "testua",
     "html": "Se comprueba el potencial del ejemplo 29 en dos órdenes de integración; después se trabajan el factor de tipo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y la sustitución <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Comprobación del ejemplo 29"
    },
    {
     "mota": "testua",
     "html": "Integrando <math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>, ambos caminos dan <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></math>; la solución es <math display=\"inline\"><mrow><mi>U</mi><mo>=</mo><mi>K</mi></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Factor de tipo <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por la regla de la cadena, <math display=\"inline\"><mrow><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">ln</mi><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>x</mi></msub><mo>=</mo><mfrac><mrow><mi>d</mi><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mi>μ</mi></mrow><mrow><mi>d</mi><mi>h</mi></mrow></mfrac><msub><mi>h</mi><mi>x</mi></msub></mrow></math> e igual para <math display=\"inline\"><mi>y</mi></math>. Por tanto,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">exp</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∫</mo><mfrac><mrow><msub><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><mi>y</mi></msub><mo>−</mo><msub><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><mi>x</mi></msub></mrow><mrow><mover><mi>Q</mi><mo accent=\"true\">̃</mo></mover><msub><mi>h</mi><mi>x</mi></msub><mo>−</mo><mover><mi>P</mi><mo accent=\"true\">̃</mo></mover><msub><mi>h</mi><mi>y</mi></msub></mrow></mfrac><mi>d</mi><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: en las dos líneas intermedias del papel no se distingue el factor <math display=\"inline\"><mrow><msup><mi>μ</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la regla de la cadena de arriba es la expresión correcta utilizada.]"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 30",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El cociente <math display=\"block\"><mrow><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mrow><mi>x</mi><mo>+</mo><mi>y</mi></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mi>h</mi></mfrac><mo>,</mo></mrow></math> por tanto <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>K</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tras multiplicar, la forma es exacta y el potencial es <math display=\"block\"><mrow><mi>U</mi><mo>=</mo><msup><mi>x</mi><mn>3</mn></msup><mi>y</mi><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>x</mi><msup><mi>y</mi><mn>3</mn></msup><mo>=</mo><mi>x</mi><msup><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math> El caso <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> debe comprobarse aparte, porque la división lo descartó."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tómese <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow></math> (o <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math> sin constante); entonces se obtiene una ecuación separable de <math display=\"inline\"><msup><mi>u</mi><mo>′</mo></msup></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 32",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mn>1</mn><mo>+</mo><msup><mi>u</mi><mn>2</mn></msup></mrow></math>. Por tanto <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo>,</mo></mrow></math> en los intervalos en que la tangente no cruza los polos."
    },
    {
     "mota": "oharra",
     "titulua": "Nota breve de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Delante de la fórmula general aparece una operación suelta, <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>′</mo></msup><mo>+</mo><msqrt><mrow><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, sin igualdad; no se le ha dado ninguna interpretación adicional."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Sustituciones para cocientes de formas lineales"
    },
    {
     "mota": "testua",
     "html": "Cuando en una EDO de primer orden aparece el cociente de dos formas lineales, se distinguen los casos de rectas paralelas y no paralelas."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Final del ejemplo anterior"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>y</mi></mrow></math> en <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>y</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math>, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>u</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>+</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mi>d</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>. El papel dice que la integral se «busca» y «se acaba», pero no escribe la línea final."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rectas paralelas"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>α</mi><mi>x</mi><mo>+</mo><mi>β</mi><mi>y</mi><mo>+</mo><mi>γ</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y las partes homogéneas de las dos formas lineales son proporcionales, el cociente se convierte en función de la única variable <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 34",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mrow><mi>u</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math> y <math display=\"block\"><mrow><mi>u</mi><mo>−</mo><mfrac><msup><mi>u</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 35",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi></mrow><mrow><mn>2</mn><mi>x</mi><mo>−</mo><mn>2</mn><mi>y</mi><mo>−</mo><mn>1</mn></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mi>y</mi></mrow></math>, <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mn>1</mn></mrow><mrow><mn>2</mn><mi>u</mi><mo>−</mo><mn>1</mn></mrow></mfrac><mo>,</mo></mrow></math> y <math display=\"block\"><mrow><mn>2</mn><mi>u</mi><mo>+</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mi>u</mi><mo>−</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mi>x</mi><mo>+</mo><mi>C</mi><mi>.</mi></mrow></math> El papel deja planteada la integral final."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Rectas no paralelas"
    },
    {
     "mota": "testua",
     "html": "Si las rectas del numerador y del denominador se cortan en el punto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, la traslación <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><msub><mi>x</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>0</mn></msub></mrow></math> da una ecuación homogénea."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 36",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>y</mi><mo>+</mo><mn>1</mn></mrow><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>−</mo><mn>3</mn></mrow></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las rectas se cortan en el punto <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi><mo>−</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>y</mi><mo>−</mo><mn>2</mn></mrow></math>, la sustitución <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>v</mi></mrow><mrow><mi>d</mi><mi>u</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>u</mi><mo>−</mo><mi>v</mi></mrow><mrow><mi>u</mi><mo>+</mo><mi>v</mi></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>v</mi><mo>=</mo><mi>z</mi><mi>u</mi></mrow></math> da <math display=\"block\"><mrow><mi>u</mi><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>z</mi></mrow></mfrac></mrow></math>. Integrando, <math display=\"block\"><mrow><mi>−</mi><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">|</mo><mn>1</mn><mo>−</mo><mn>2</mn><mi>z</mi><mo>−</mo><msup><mi>z</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">|</mo></mrow><mo>=</mo><mrow><mi mathvariant=\"normal\">ln</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>+</mi><mi>C</mi><mo>,</mo></mrow></math> y la forma implícita equivalente <math display=\"block\"><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>u</mi><mi>v</mi><mo>−</mo><msup><mi>v</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo>,</mo></mrow></math> es decir, <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mrow><mi>−</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>−</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Lecturas dudosas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El texto bajo el punto de corte aparece como «MOTZ PUNTA». El argumento del último logaritmo está en blanco y con signos de interrogación; la forma cuadrática débil del margen confirma el resultado de arriba."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones de Bernoulli y de Riccati"
    },
    {
     "mota": "testua",
     "html": "Se deduce el cambio que linealiza la ecuación de Bernoulli, se resuelve un ejemplo trigonométrico y se reduce la ecuación de Riccati mediante una solución particular."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Bernoulli"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ecuación de Bernoulli",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>n</mi></msup><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>n</mi></mrow></msup></mrow></math>, <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mi>−</mi><mi>n</mi></mrow></msup><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, y"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>u</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El caso <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow></math> es lineal; en el caso <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow></math> queda <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>−</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 37",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>−</mo><mi>y</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mrow><mn>2</mn><mi>.</mi></mrow></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math>, <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>u</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>.</mi></mrow></math> El factor integrante es <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math>. Integrando, <math display=\"block\"><mrow><mi>u</mi><mo>=</mo><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup><mo>,</mo></mrow></math> y <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mrow><mn>1</mn><mo>−</mo><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></mfrac><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Por otro camino, la solución de la homogénea es <math display=\"inline\"><mrow><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></msup></mrow></math> y el ensayo <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> da <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>. <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> también es solución de la ecuación original, y el cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mn>1</mn><mi>y</mi></mfrac></mrow></math> la descarta."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación de Riccati"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ecuación de Riccati",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>B</mi><mo>,</mo><mi>C</mi><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Conocida una solución particular <math display=\"inline\"><msub><mi>y</mi><mn>1</mn></msub></math>, el cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mo>−</mo><msub><mi>y</mi><mn>1</mn></msub></mrow></math> da una ecuación de tipo Bernoulli."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo 38",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>y</mi><mn>1</mn></msub><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>y</mi><msup><mn>1</mn><mo>′</mo></msup></msub><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><msubsup><mi>y</mi><mn>1</mn><mn>2</mn></msubsup><mo>−</mo><mfrac><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>, por tanto es una particular correcta. Sustituyendo <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mo>+</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mi>u</mi><mi>x</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: la fórmula roja aislada del papel dice <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math>; en la línea siguiente se anulan los términos <math display=\"inline\"><mfrac><mn>1</mn><msup><mi>x</mi><mn>2</mn></msup></mfrac></math> y el resultado de arriba es el correcto.]"
    },
    {
     "mota": "oharra",
     "titulua": "Notación de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para distinguir las funciones <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi></mrow></math> de los coeficientes de prueba, el papel marca estos últimos. Aquí el texto explicativo aclara el papel de función o constante."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Reducción de Riccati por tres caminos"
    },
    {
     "mota": "testua",
     "html": "La ecuación de Bernoulli del ejemplo 38 se linealiza con el cambio <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math>, y se comparan el factor integrante, el ensayo polinómico y el potencial exacto."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuación lineal"
    },
    {
     "mota": "testua",
     "html": "Tomando <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> en <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>=</mo><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mfrac><mi>u</mi><mi>x</mi></mfrac></mrow></math>, <math display=\"block\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>u</mi><mfrac><mi>′</mi><msup><mi>u</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac><mo>,</mo></mrow></math> es decir,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con el factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup></mrow></math>, <math display=\"block\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>x</mi><mn>2</mn></msup><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>x</mi><mn>2</mn></msup><mo>,</mo></mrow></math> y <math display=\"block\"><mrow><mi>z</mi><mo>=</mo><mfrac><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mrow><mn>3</mn><mi>.</mi></mrow></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El ensayo <math display=\"inline\"><mrow><msub><mi>z</mi><mi>p</mi></msub><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>B</mi><mi>x</mi><mo>+</mo><msub><mi>C</mi><mn>0</mn></msub></mrow></math> da <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><msub><mi>C</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>−</mi><mfrac><mn>1</mn><mn>3</mn></mfrac></mrow></math>; la particular es <math display=\"inline\"><mrow><msub><mi>z</mi><mi>p</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></math>. La ecuación diferencial exacta también es <math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>z</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>z</mi><mo>+</mo><msup><mi>x</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>, con potencial <math display=\"inline\"><mrow><mi>F</mi><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mi>z</mi><mo>+</mo><mfrac><msup><mi>x</mi><mn>3</mn></msup><mn>3</mn></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Volviendo atrás, <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac><mo>+</mo><mfrac><mn>1</mn><mrow><mfrac><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></mfrac><mi>.</mi></mrow></math> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mn>0</mn></mrow></math> da la particular conocida <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><mn>1</mn><mi>x</mi></mfrac></mrow></math> y <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> queda fuera del cambio; debe conservarse aparte."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Segundo desarrollo del cuaderno"
    },
    {
     "mota": "testua",
     "html": "La página 77 repite los cambios y llega correctamente a <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>1</mn><mo>−</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac></mrow></math>. Las líneas siguientes, sin embargo, cambian la ecuación:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>−</mo><mn>2</mn><mfrac><mi>z</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>=</mo><mi>−</mi><mn>1</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: en el papel el término <math display=\"inline\"><mrow><mi>+</mi><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac></mrow></math> se convierte en <math display=\"inline\"><mrow><mi>−</mi><mn>2</mn><mfrac><mi>z</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac></mrow></math> sin razón; la ecuación correcta es <math display=\"inline\"><mrow><msup><mi>z</mi><mo>′</mo></msup><mo>+</mo><mn>2</mn><mfrac><mi>z</mi><mi>x</mi></mfrac><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math> y su solución <math display=\"inline\"><mrow><mfrac><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup></mfrac><mo>−</mo><mfrac><mi>x</mi><mn>3</mn></mfrac></mrow></math>.]"
    },
    {
     "mota": "testua",
     "html": "El papel continúa con la homogénea de la ecuación modificada mediante <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac></mrow></msup></mrow></math> y variación de constantes, obteniendo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>−</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><mn>2</mn><mi>x</mi></mfrac></mrow></msup><mo>∫</mo><msup><mi>e</mi><mfrac><mn>2</mn><mi>x</mi></mfrac></msup><mi>d</mi><mi>x</mi></mrow></math>; ese desarrollo se ha conservado escrito, pero no es la resolución de la Riccati original."
    },
    {
     "mota": "oharra",
     "titulua": "Lecturas dudosas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las notas breves «RICCATI (GEUNA)» y «orain konstantea aldatu eta…» son parcialmente ilegibles; no se ha completado su texto."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Soluciones equivalentes y falta de unicidad"
    },
    {
     "mota": "testua",
     "html": "Se explican expresiones equivalentes del oscilador lineal, la comprobación de una ecuación autónoma y la falta de unicidad del modelo de vaciado con raíz cuadrada."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Formas de la ecuación <math display=\"inline\"><mrow><msup><mi>x</mi><mo>″</mo></msup><mo>+</mo><msup><mi>ω</mi><mn>2</mn></msup><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Cuatro expresiones equivalentes:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><msub><mi>C</mi><mn>2</mn></msub><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;",
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>D</mi><mn>1</mn></msub><msup><mi>e</mi><mrow><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup><mo>+</mo><msub><mi>D</mi><mn>2</mn></msub><msup><mi>e</mi><mrow><mi>−</mi><mi>i</mi><mi>ω</mi><mi>t</mi></mrow></msup></mrow></math>;",
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;",
      "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (o <math display=\"inline\"><mrow><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ω</mi><mi>t</mi><mo>+</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>)."
     ]
    },
    {
     "mota": "testua",
     "html": "Las fórmulas de Euler y las identidades de suma relacionan los coeficientes: <math display=\"inline\"><mrow><msub><mi>C</mi><mn>1</mn></msub><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>C</mi><mn>2</mn></msub><mo>=</mo><mi>−</mi><mi>A</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>φ</mi></mrow></math>, y en soluciones reales <math display=\"inline\"><mrow><msub><mi>D</mi><mn>1</mn></msub><mo>,</mo><msub><mi>D</mi><mn>2</mn></msub></mrow></math> son conjugados. Si <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mo>+</mo><mi>B</mi><mi>t</mi></mrow></math>; si <math display=\"inline\"><mrow><msup><mi>ω</mi><mn>2</mn></msup><mo>&lt;</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>A</mi><mrow><mi mathvariant=\"normal\">cosh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sinh</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>λ</mi><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>λ</mi><mi>t</mi></mrow></msup><mo>+</mo><mi>D</mi><msup><mi>e</mi><mrow><mi>−</mi><mi>λ</mi><mi>t</mi></mrow></msup></mrow></math>, siendo <math display=\"inline\"><mrow><mi>λ</mi><mo>=</mo><msqrt><mrow><mi>−</mi><msup><mi>ω</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La familia <math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow><mrow><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup></mrow></mfrac></mrow></math> cumple <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mn>1</mn><mo>=</mo><mi>−</mi><mn>4</mn><mi>C</mi><mfrac><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>+</mo><mi>C</mi><msup><mi>e</mi><mrow><mn>2</mn><mi>x</mi></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mfrac></mrow></math>. <math display=\"inline\"><mrow><mi>C</mi><mo>=</mo><mn>0</mn></mrow></math> da <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math>; en la reescritura <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mfrac><mn>1</mn><mi>C</mi></mfrac></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mn>0</mn></mrow></math> recupera <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Vaciado y falta de unicidad"
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Vaciado del recipiente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>h</mi></mrow><mrow><mi>d</mi><mi>t</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mi>k</mi><msqrt><mi>h</mi></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>h</mi><mo>≥</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>k</mi><msqrt><mi>h</mi></msqrt></mrow></math> es continua, pero <math display=\"inline\"><mrow><msub><mi>f</mi><mi>h</mi></msub><mo>=</mo><mi>−</mi><mfrac><mi>k</mi><mrow><mn>2</mn><msqrt><mi>h</mi></msqrt></mrow></mfrac></mrow></math> no está acotada en un entorno de <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math>; la condición de Lipschitz falla. En la rama <math display=\"inline\"><mrow><mi>h</mi><mo>&gt;</mo><mn>0</mn></mrow></math>, <math display=\"block\"><mrow><mi>−</mi><mi>k</mi><mi>t</mi><mo>+</mo><mn>2</mn><msqrt><mi>h</mi></msqrt><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, para cualquier <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msup><mi>k</mi><mn>2</mn></msup><mfrac><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>t</mi><mo>−</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mn>4</mn></mfrac></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>&lt;</mo><msub><mi>t</mi><mn>1</mn></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mn>0</mn></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>t</mi><mo>≥</mo><msub><mi>t</mi><mn>1</mn></msub></mtd></mtr></mtable></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La función es <math display=\"inline\"><msup><mi>C</mi><mn>1</mn></msup></math> en el empalme, cumple la EDO e indica que el recipiente queda vacío en el instante <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math>. Junto con la solución <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math> y distintos tiempos finales, muestra la falta de unicidad del PVI. Los cuatro recipientes de la fotografía muestran el nivel de agua descendente y el desagüe inferior; el gráfico dibuja la familia de curvas <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math> llegando al eje en instantes distintos."
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El papel usa también el factor <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mfrac><mn>1</mn><msqrt><mi>h</mi></msqrt></mfrac></mrow></math> y estudia aparte la rama <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mn>0</mn></mrow></math>. Dos notas breves al margen no se leen por completo."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ecuaciones implícitas y reducción de quinto orden"
    },
    {
     "mota": "testua",
     "html": "Se termina la parametrización de la ecuación implícita en la derivada, se estudia la ecuación diferencial de la circunferencia y se resuelve una ecuación de quinto orden bajando el orden."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>−</mo><mn>2</mn><mi>x</mi><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Usando <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math>, la ecuación de <math display=\"inline\"><mrow><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mrow><mi>d</mi><mi>p</mi></mrow></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>x</mi><mi>p</mi></mfrac><mo>=</mo><mn>2</mn></mrow></math>. El factor integrante es <math display=\"inline\"><msup><mi>p</mi><mn>2</mn></msup></math> y <math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mn>2</mn><mfrac><mi>p</mi><mn>3</mn></mfrac><mo>+</mo><mfrac><mi>C</mi><msup><mi>p</mi><mn>2</mn></msup></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>≠</mo><mn>0</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Sustituyendo en la relación original <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>2</mn><mi>x</mi><mi>p</mi><mo>−</mo><msup><mi>p</mi><mn>2</mn></msup></mrow></math>,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>3</mn></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>C</mi><mi>p</mi></mfrac><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: en el papel aparece <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mfrac><msup><mi>p</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mn>2</mn><mfrac><mi>C</mi><mi>p</mi></mfrac></mrow></math>; la sustitución correcta da <math display=\"inline\"><mfrac><mn>1</mn><mn>3</mn></mfrac></math>. La rama <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn></mrow></math> perdida al dividir por <math display=\"inline\"><mi>p</mi></math> da la solución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>.]"
    },
    {
     "mota": "testua",
     "html": "La fórmula tachada de abajo solo se lee en parte: se distinguen las partes <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><msup><mi>x</mi><mn>2</mn></msup><mo>−</mo><mn>4</mn><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup></mrow></math> a la izquierda y <math display=\"inline\"><mrow><mn>4</mn><msup><mi>x</mi><mn>3</mn></msup><mo>−</mo><mn>6</mn><mi>x</mi><mi>y</mi></mrow></math> a la derecha; no se ha completado."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>′</mo></msup><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En las ramas no constantes <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></msqrt></mrow></math> y <math display=\"inline\"><mrow><mi>±</mi><mrow><mi mathvariant=\"normal\">arcsin</mi><mo>&#8289;</mo></mrow><mi>y</mi><mo>=</mo><mi>x</mi><mo>+</mo><mi>k</mi></mrow></math>, por tanto <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>±</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Además hay soluciones constantes <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Derivando, <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>y</mi><mo>″</mo></msup><mo>+</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>. En la rama armónica <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>B</mi><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi><mo>+</mo><mi>C</mi><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math> y la ecuación original exige <math display=\"inline\"><mrow><msup><mi>B</mi><mn>2</mn></msup><mo>+</mo><msup><mi>C</mi><mn>2</mn></msup><mo>=</mo><mn>1</mn></mrow></math>; <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mi>±</mi><msqrt><mrow><mn>1</mn><mo>−</mo><msup><mi>C</mi><mn>2</mn></msup></mrow></msqrt></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "<math display=\"inline\"><mrow><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mo>−</mo><mfrac><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup><mi>x</mi></mfrac><mo>=</mo><mn>0</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El cuaderno desarrolla las derivadas del cambio <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msup><mi>e</mi><mi>t</mi></msup></mrow></math>. La fórmula correcta de la quinta derivada es <math display=\"block\"><mrow><msubsup><mi>y</mi><mi>x</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><msup><mi>x</mi><mrow><mi>−</mi><mn>5</mn></mrow></msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>D</mi><mn>5</mn></msup><mo>−</mo><mn>10</mn><msup><mi>D</mi><mn>4</mn></msup><mo>+</mo><mn>35</mn><msup><mi>D</mi><mn>3</mn></msup><mo>−</mo><mn>50</mn><msup><mi>D</mi><mn>2</mn></msup><mo>+</mo><mn>24</mn><mi>D</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>D</mi><mo>=</mo><mfrac><mi>d</mi><mrow><mi>d</mi><mi>t</mi></mrow></mfrac></mrow></math>. [CORREGIDO: en el papel el último coeficiente es <math display=\"inline\"><mrow><mi>−</mi><mn>45</mn></mrow></math> y la ecuación transformada termina en <math display=\"inline\"><mrow><mi>−</mi><mn>39</mn><mi>D</mi></mrow></math>; los correctos son <math display=\"inline\"><mrow><mi>+</mi><mn>24</mn><mi>D</mi></mrow></math> y, tras la resta, <math display=\"inline\"><mrow><mi>+</mi><mn>30</mn><mi>D</mi></mrow></math>.]"
    },
    {
     "mota": "testua",
     "html": "La reducción directa es más corta: tomando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msup></mrow></math>, <math display=\"block\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>−</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msub><mi>C</mi><mn>1</mn></msub><mi>x</mi><mi>.</mi></mrow></math> Integrando cuatro veces,"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo>=</mo><mi>A</mi><msup><mi>x</mi><mn>5</mn></msup><mo>+</mo><mi>B</mi><msup><mi>x</mi><mn>3</mn></msup><mo>+</mo><mi>C</mi><msup><mi>x</mi><mn>2</mn></msup><mo>+</mo><mi>D</mi><mi>x</mi><mo>+</mo><mi>E</mi><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "[CORREGIDO: el último polinomio del papel incluye el término <math display=\"inline\"><msup><mi>x</mi><mn>4</mn></msup></math> y quita <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>. <math display=\"inline\"><msup><mi>x</mi><mn>4</mn></msup></math> no satisface la EDO; <math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math> sí.]"
    },
    {
     "mota": "oharra",
     "titulua": "Fecha y orden",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La fecha de la fotografía es 4/10/2013, aunque aparece físicamente después de las páginas del 10-11/10/2013. La fecha y la etiqueta «CN METODOS p94» se han conservado como en la fotografía."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "Del cuaderno (CG-01): ecuaciones de primer orden",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 89 (METMATCG01_0089, IMG_2025_07_12_12_18_44S.jpg; inicio de la sesión de fotografías 07_12): hoja de resumen de métodos MANUSCRITA: árbol de resolución de las EDO de primer orden (exacta->separable->lineal->homogénea->reducible->Bernoulli->Riccati) con formas canónicas, ecuación de ejemplo en cuatro formas equivalentes (y'=-x y-y^2, Bernoulli n=2 / Riccati c=0) y tabla de grados (para la homogeneidad). Verificado con SymPy (las cuatro formas son equivalentes; A'=-1/(2cos^2 x)->A=-tan x/2). Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "EDO de primer orden: clasificación y árbol de resolución"
    },
    {
     "mota": "testua",
     "html": "Ante una EDO dada <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, esta hoja propone un <strong>árbol de decisión</strong>: probar tipo por tipo, hasta que se cumpla el primero, y aplicar la resolución correspondiente. Orden:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Ecuación exacta.</strong> Escrita <math display=\"inline\"><mrow><mi>M</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>N</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>, es exacta si <math display=\"inline\"><mrow><mi>∂</mi><mi>M</mi><mi>/</mi><mi>∂</mi><mi>y</mi><mo>=</mo><mi>∂</mi><mi>N</mi><mi>/</mi><mi>∂</mi><mi>x</mi></mrow></math>. Entonces la resolución es:"
     ]
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo>∫</mo><mi>M</mi><mi>d</mi><mi>x</mi><mo>+</mo><mo>∫</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mfrac><mi>∂</mi><mrow><mi>∂</mi><mi>y</mi></mrow></mfrac><mo>∫</mo><mi>M</mi><mi>d</mi><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>y</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> kte</mtext></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si no es exacta, se busca un <strong>factor integrante</strong> <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (o <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>) para hacerla exacta."
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Separable.</strong> Si las variables se separan: <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mo>∫</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mo>∫</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Lineal.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> (<math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msup><mi>e</mi><mrow><mo>∫</mo><mi>A</mi><mi>d</mi><mi>x</mi></mrow></msup></mrow></math> con factor integrante.)"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Homogénea.</strong> Si <math display=\"inline\"><mrow><mi>M</mi><mo>,</mo><mi>N</mi></mrow></math> son del mismo grado, el cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>y</mi><mi>/</mi><mi>x</mi></mrow></math> la convierte en separable."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Reducible a homogénea.</strong> El caso con términos independientes, que mediante una traslación adecuada puede volverse homogénea."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Bernoulli.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>p</mi></msup><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow></msup><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> aldaketak lineal bihurtzen du</mtext></mrow><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Riccati.</strong> <math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> soluzio partikular bat ezagututa, Bernoulli/lineal bihurtzen da</mtext></mrow><mi>.</mi></mrow></math>"
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ejemplo: una EDO en cuatro formas equivalentes"
    },
    {
     "mota": "testua",
     "html": "La ecuación de ejemplo de la hoja está escrita de cuatro maneras; las cuatro son la <strong>misma EDO</strong>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>+</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mi>y</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mi>y</mi><mo>+</mo><msup><mi>y</mi><mn>2</mn></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>d</mi><mi>x</mi><mo>=</mo><mn>0</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Clasificación: como <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup></mrow></math>, es de <strong>Bernoulli</strong> (<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>−</mi><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi>b</mi><mo>=</mo><mi>−</mi><mn>1</mn></mrow></math>); también de <strong>Riccati</strong> con <math display=\"inline\"><mrow><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><msup><mi>y</mi><mn>2</mn></msup><mo>−</mo><mi>x</mi><mi>y</mi></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Tabla de grados (para la homogeneidad)"
    },
    {
     "mota": "testua",
     "html": "<strong>Grado total</strong> de un monomio (para el test de homogeneidad: si todos los términos tienen el mismo grado, es homogénea):"
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>monomioa</strong>",
      "<strong>gradua</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mn>1</mn></math>",
       "<math display=\"inline\"><mn>0</mn></math>"
      ],
      [
       "<math display=\"inline\"><mi>x</mi></math>",
       "<math display=\"inline\"><mn>1</mn></math>"
      ],
      [
       "<math display=\"inline\"><msup><mi>x</mi><mn>2</mn></msup></math>",
       "<math display=\"inline\"><mn>2</mn></math>"
      ],
      [
       "<math display=\"inline\"><mrow><msup><mi>x</mi><mn>2</mn></msup><mi>y</mi></mrow></math>",
       "<math display=\"inline\"><mn>3</mn></math>"
      ]
     ]
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Árbol de decisión: exacta → separable → lineal → homogénea →\nreducible → Bernoulli → Riccati. El ejemplo (<math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mi>x</mi><mi>y</mi><mo>−</mo><msup><mi>y</mi><mn>2</mn></msup></mrow></math>) es Bernoulli/Riccati\n(verificado con SymPy, las cuatro formas son equivalentes). Todas las formas canónicas son estándar.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Completado a partir de la fotografía (<code>METMATCG01_0089</code>, <code>IMG_2025_07_12_12_18_44S.jpg</code>; lote «MÉTODO M.», inicio de la sesión 07_12). Hoja de resumen manuscrita de métodos: árbol de resolución de las EDO de primer orden, ecuación de ejemplo en cuatro formas y tabla de grados. En el borde superior estaba el final fragmentado del problema 3.c (variación de parámetros, <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo><mi>−</mi><mn>1</mn><mi>/</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>2</mn><msup><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mn>2</mn></msup><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>A</mi><mo>=</mo><mi>−</mi><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mi>x</mi><mi>/</mi><mn>2</mn><mo>+</mo><mi>k</mi></mrow></math> verificado); procede de la página anterior y no se rehace (declarado ilegible). Véase <code>koadernoa_metmatcg01_p089.typ</code>."
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CG-01 (carpeta_grande)",
     "xehetasuna": "CG-01, unidad 158 (METMATCG01_0158, IMG_2025_07_12_12_34_18S.jpg): resumen manuscrito de métodos de las EDO. y''=y y' reducción de orden mediante p(y)=y'; Riccati, Bernoulli, reducible a homogénea, exacta, lineal, homogénea y separable. Ejemplos: 2y dx+2x dy=0, y'+xy=x, 2x^2 dx+xy dy=0 e y'=xy. Dos erratas corregidas explícitamente: el factor de la integral del arctan 1/(k sqrt(2k)) -> sqrt(2/k), y u'+u=-2/u -> x u'+u=-2/u. Verificado con SymPy. Confianza alta",
     "hizkuntza": "es/eu"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Mapa de métodos de las EDO y reducción de orden"
    },
    {
     "mota": "testua",
     "html": "La hoja recoge la resolución de una ecuación de segundo orden y el esquema de los principales métodos para las EDO de primer orden. El método lo elige la <strong>estructura</strong> de la ecuación: falta de una variable, potencia no lineal, forma diferencial exacta, linealidad, homogeneidad o separabilidad de las variables."
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Reducir el orden: <math display=\"inline\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mi>y</mi><msup><mi>y</mi><mo>′</mo></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>x</mi></math> no aparece explícitamente en la ecuación. Tomando <math display=\"inline\"><mrow><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msup><mi>y</mi><mo>′</mo></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>y</mi><mo>″</mo></msup><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>p</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En las ramas no constantes: <math display=\"block\"><mrow><mi>p</mi><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mi>p</mi><mo>→</mo><mfrac><mrow><mi>d</mi><mi>p</mi></mrow><mrow><mi>d</mi><mi>y</mi></mrow></mfrac><mo>=</mo><mi>y</mi><mo>→</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><msup><mi>y</mi><mn>2</mn></msup><mn>2</mn></mfrac><mo>+</mo><mi>k</mi><mi>.</mi></mrow></math> Por tanto, <math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>k</mi></mrow><mn>2</mn></mfrac><mo>,</mo><mtext mathvariant=\"normal\">  </mtext><mfrac><mrow><mn>2</mn><mi>d</mi><mi>y</mi></mrow><mrow><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><mi>k</mi></mrow></mfrac><mo>=</mo><mi>d</mi><mi>x</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "En el caso <math display=\"inline\"><mrow><mi>k</mi><mo>&gt;</mo><mn>0</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>x</mi><mo>+</mo><mi>C</mi><mo>=</mo><msqrt><mfrac><mn>2</mn><mi>k</mi></mfrac></msqrt><mrow><mi mathvariant=\"normal\">arctan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mfrac><mi>y</mi><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "o, a la inversa, <math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt><mrow><mi mathvariant=\"normal\">tan</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msqrt><mfrac><mi>k</mi><mn>2</mn></mfrac></msqrt><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>+</mo><mi>C</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Primera corrección del manuscrito",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tras escribir <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mi>y</mi><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt></mfrac></mrow></math>, la hoja sustituye al revés el factor <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi></mrow></math> y obtiene <math display=\"inline\"><mfrac><mn>1</mn><mrow><mi>k</mi><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt></mrow></mfrac></math>. Lo correcto es <math display=\"inline\"><mrow><mi>d</mi><mi>y</mi><mo>=</mo><msqrt><mrow><mn>2</mn><mi>k</mi></mrow></msqrt><mi>d</mi><mi>z</mi></mrow></math>; por eso el coeficiente es <math display=\"inline\"><msqrt><mfrac><mn>2</mn><mi>k</mi></mfrac></msqrt></math>. Además, anular <math display=\"inline\"><mi>p</mi></math> oculta ramas constantes: todos los <math display=\"inline\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi></mrow></math> son soluciones de la EDO original."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 4,
     "testua": "Ecuaciones de primer orden: mapa según la estructura"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Ecuación de Riccati"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>c</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math> Si se conoce una solución particular <math display=\"inline\"><msub><mi>y</mi><mi>p</mi></msub></math>, la sustitución <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>y</mi><mi>p</mi></msub><mo>+</mo><mfrac><mn>1</mn><mi>u</mi></mfrac></mrow></math> reduce a una ecuación lineal. El manuscrito asocia al método las notas «una particular» y «variación de la constante»."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Ecuación de Bernoulli"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>y</mi><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>y</mi><mi>p</mi></msup><mi>.</mi></mrow></math> El cambio <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msup><mi>y</mi><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow></msup></mrow></math> da una ecuación lineal (<math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mn>1</mn></mrow></math>)."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Reducible a homogénea"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mi>a</mi><mi>x</mi><mo>+</mo><mi>b</mi><mi>y</mi><mo>+</mo><mi>c</mi></mrow><mrow><mi>p</mi><mi>x</mi><mo>+</mo><mi>q</mi><mi>y</mi><mo>+</mo><mi>d</mi></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math> Llevando a un punto la intersección de dos formas lineales mediante una traslación adecuada, se pueden eliminar las constantes y obtener una ecuación homogénea de primer orden, en el caso no degenerado."
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Ecuación exacta y factor integrante"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi><mo>+</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math> es exacta cuando <math display=\"inline\"><mrow><msub><mi>∂</mi><mi>y</mi></msub><mi>P</mi><mo>=</mo><msub><mi>∂</mi><mi>x</mi></msub><mi>Q</mi></mrow></math>. En caso contrario, un factor integrante <math display=\"inline\"><mrow><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede hacer exacta <math display=\"inline\"><mrow><mi>μ</mi><mi>P</mi><mi>d</mi><mi>x</mi><mo>+</mo><mi>μ</mi><mi>Q</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Ejemplo de la hoja: <math display=\"block\"><mrow><mn>2</mn><mi>y</mi><mi>d</mi><mi>x</mi><mo>+</mo><mn>2</mn><mi>x</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mn>2</mn><mi>x</mi><mi>y</mi><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Ecuación lineal"
    },
    {
     "mota": "testua",
     "html": "La homogénea correspondiente a la ecuación <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>+</mo><mi>x</mi><mi>y</mi><mo>=</mo><mi>x</mi></mrow></math> es <math display=\"inline\"><mrow><msub><mi>y</mi><mi>h</mi></msub><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup></mrow></math>. Por variación de constantes, <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup></mrow></math>: <math display=\"block\"><mrow><msup><mi>C</mi><mo>′</mo></msup><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup><mo>=</mo><mi>x</mi><mo>→</mo><msup><mi>C</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>e</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></msup><mo>→</mo><mi>C</mi><mo>=</mo><msup><mi>e</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></msup><mi>.</mi></mrow></math> En consecuencia:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>C</mi><msup><mi>e</mi><mrow><mi>−</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></mrow></msup><mo>+</mo><mn>1</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Homogénea de primer orden"
    },
    {
     "mota": "testua",
     "html": "Forma diferencial de la hoja: <math display=\"block\"><mrow><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mi>d</mi><mi>x</mi><mo>+</mo><mi>x</mi><mi>y</mi><mi>d</mi><mi>y</mi><mo>=</mo><mn>0</mn><mo>→</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mrow><mi>d</mi><mi>x</mi></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mn>2</mn><mi>x</mi></mrow><mi>y</mi></mfrac><mi>.</mi></mrow></math> Usando <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mfrac><mi>y</mi><mi>x</mi></mfrac></mrow></math> (<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math>): <math display=\"block\"><mrow><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>u</mi></mfrac><mi>.</mi></mrow></math> De ahí: <math display=\"block\"><mrow><mfrac><mrow><mi>u</mi><mi>d</mi><mi>u</mi></mrow><mrow><msup><mi>u</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn></mrow></mfrac><mo>=</mo><mi>−</mi><mfrac><mrow><mi>d</mi><mi>x</mi></mrow><mi>x</mi></mfrac><mo>→</mo><msup><mi>y</mi><mn>2</mn></msup><mo>+</mo><mn>2</mn><msup><mi>x</mi><mn>2</mn></msup><mo>=</mo><mi>C</mi><mi>.</mi></mrow></math>"
    },
    {
     "mota": "oharra",
     "titulua": "Segunda corrección del manuscrito",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el último paso la hoja escribe <math display=\"inline\"><mrow><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>u</mi></mfrac></mrow></math>. Como la derivada de <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mi>u</mi><mi>x</mi></mrow></math> es <math display=\"inline\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi></mrow></math>, el factor <math display=\"inline\"><mi>x</mi></math> no puede eliminarse: lo correcto es <math display=\"inline\"><mrow><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup><mo>+</mo><mi>u</mi><mo>=</mo><mi>−</mi><mfrac><mn>2</mn><mi>u</mi></mfrac></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 5,
     "testua": "Variables separables"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><msup><mi>y</mi><mo>′</mo></msup><mo>=</mo><mi>x</mi><mi>y</mi><mo>→</mo><mfrac><mrow><mi>d</mi><mi>y</mi></mrow><mi>y</mi></mfrac><mo>=</mo><mi>x</mi><mi>d</mi><mi>x</mi><mo>→</mo><mi>y</mi><mo>=</mo><mi>C</mi><msup><mi>e</mi><mfrac><msup><mi>x</mi><mn>2</mn></msup><mn>2</mn></mfrac></msup><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em class=\"j-nab\">Cada estructura se asocia a su reducción; los ejemplos cerrados se han verificado con SymPy.</em>"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<code>METMATCG01_0158 / IMG_2025_07_12_12_34_18S.jpg</code>"
      },
      {
       "mota": "testua",
       "html": ". Se han declarado dos erratas manuscritas: el factor de la integral del arctan y el factor perdido <math display=\"inline\"><mrow><mi>x</mi><msup><mi>u</mi><mo>′</mo></msup></mrow></math>. Verificado con SymPy; edición crítica:"
      },
      {
       "mota": "testua",
       "html": "<code>koadernoa_metmatcg01_p158.typ</code>"
      },
      {
       "mota": "testua",
       "html": "."
      }
     ]
    }
   ]
  }
 ]
};
