/* JAKINA · kapitulua «B6.9 - Estatistika: laginketa, estimazioa eta hipotesiak (11. gaia)» (03mm_07estatistika), desde edicion2/kapituluak/03mm_07estatistika/03mm_07estatistika.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["03mm_07estatistika"] = {
 "gakoa": "03mm_07estatistika",
 "titulua": "JAKINA - B6 - Métodos matemáticos - 9/9",
 "azala": "B6.9 - Estadística: muestreo, estimación e hipótesis (tema 11)",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/03mm_07estatistika/03mm_07estatistika.typ",
 "sarrera": [
  {
   "mota": "iturria",
   "proiektua": "gzm_liburua",
   "xehetasuna": "Capítulos 24 y 25; separado del producto de probabilidad (T4 D4)",
   "hizkuntza": "eu"
  },
  {
   "mota": "oharra",
   "titulua": "Laguna declarada (tema 11)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las distribuciones t de Student y chi-cuadrado, el valor p y la regresión aún no están recogidos (el arco de nivel preuniversitario está completo: muestreo, estimación, intervalos de confianza, contrastes de hipótesis)."
    }
   ]
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Muestras estadísticas",
   "blokeak": []
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "Gaian trebatzeko, pentsatu y ebatzi",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Las distribuciones de probabilidad que se obtienen al lanzar un dado, dos o tres, y sumar sus resultados, son las siguientes, respectivamente:"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<strong>UN DADO</strong>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>",
           "1",
           "2",
           "3",
           "4",
           "5",
           "6"
          ],
          [
           "<math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>",
           "1/6",
           "1/6",
           "1/6",
           "1/6",
           "1/6",
           "1/6"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<span>MEDIA, <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math>    DESVIACIÓN TÍPICA, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>71</mn></mrow></math></span>"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<strong>DOS DADOS</strong>  <br>  (SUMA)"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>",
           "2"
          ],
          [
           "3",
           "4"
          ],
          [
           "5",
           "6"
          ],
          [
           "7",
           "8"
          ],
          [
           "9",
           "10"
          ],
          [
           "11",
           "12"
          ],
          [
           "<math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>",
           "1/36"
          ],
          [
           "2/36",
           "3/36"
          ],
          [
           "4/36",
           "5/36"
          ],
          [
           "6/36",
           "5/36"
          ],
          [
           "4/36",
           "3/36"
          ],
          [
           "2/36",
           "1/36"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<span><math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>7</mn></mrow></math>     <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>42</mn></mrow></math></span>"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<strong>TRES DADOS</strong>  <br>  (SUMA)"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>",
           "3"
          ],
          [
           "4",
           "5"
          ],
          [
           "6",
           "7"
          ],
          [
           "8",
           "9"
          ],
          [
           "10",
           "11"
          ],
          [
           "12",
           "13"
          ],
          [
           "14",
           "15"
          ],
          [
           "16",
           "17"
          ],
          [
           "18",
           "<math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>"
          ],
          [
           "1/216",
           "3/216"
          ],
          [
           "6/216",
           "10/216"
          ],
          [
           "15/216",
           "21/216"
          ],
          [
           "25/216",
           "27/216"
          ],
          [
           "27/216",
           "25/216"
          ],
          [
           "21/216",
           "15/216"
          ],
          [
           "10/216",
           "6/216"
          ],
          [
           "3/216",
           "1/216"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<span><math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>10</mn><mo>,</mo><mn>5</mn></mrow></math>     <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>96</mn></mrow></math></span>"
    },
    {
     "mota": "testua",
     "html": "Sus representaciones gráficas son estas:"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/d7be9757f62e8993.svg",
         "zabalera": 158
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/49ed83560f8bb3d8.svg",
         "zabalera": 257
        }
       ]
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/40e1c5eea95150a9.svg",
     "zabalera": 331
    },
    {
     "mota": "testua",
     "html": "Como ves, <em>cuando aumenta el número de dados, la distribución de sus sumas se parece cada vez más a una distribución normal.</em>"
    },
    {
     "mota": "testua",
     "html": "Si en lugar de sumar los resultados de los dados calculamos sus medias (es decir, si dividimos la suma de los resultados por el número de dados), las representaciones gráficas serán idénticas a las anteriores. El único cambio sería el de las abscisas de las barras, ya que en los tres casos tomarían valores entre 1 y 6."
    },
    {
     "mota": "testua",
     "html": "Al calcular la media de las puntuaciones, los parámetros de media y desviación típica de las distribuciones se obtienen dividiendo cada uno de los anteriores por el número de dados. Obtendremos esto:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "",
         "DADO BAT",
         "BI DADO",
         "HIRU DADO",
         "",
         "BATEZ BEST.",
         "DESB. TIPIKOA"
        ],
        [
         "BATEZ BEST.",
         "DESB. TIPIKOA",
         "BATEZ BEST.",
         "DESB. TIPIKOA",
         "EMAITZEN BATURA",
         "3,5",
         "1,71"
        ],
        [
         "7",
         "2,42",
         "10,5",
         "2,96",
         "EMAITZEN BATEZ BEST.",
         "3,5",
         "1,71"
        ],
        [
         "3,5",
         "1,21",
         "3,5",
         "0,99"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como ves, <em>cuando aumenta el número de dados, la desviación típica de la distribución de sus medias es cada vez menor.</em>"
    },
    {
     "mota": "testua",
     "html": "Si hacemos el mismo ejercicio con cuatro, cinco, seis... dados, veremos que cuantos más dados lancemos, la distribución de sus medias:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "se aproxima cada vez más a la distribución normal,",
      "y la desviación típica es cada vez menor."
     ]
    },
    {
     "mota": "testua",
     "html": "La distribución de probabilidades de la suma de cuatro dados es la siguiente:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>",
         "4"
        ],
        [
         "5",
         "6"
        ],
        [
         "7",
         "8"
        ],
        [
         "9",
         "10"
        ],
        [
         "11",
         "12"
        ],
        [
         "13",
         "14"
        ],
        [
         "15",
         "16"
        ],
        [
         "17",
         "18"
        ],
        [
         "19",
         "20"
        ],
        [
         "21",
         "22"
        ],
        [
         "23",
         "24"
        ],
        [
         "<math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math>",
         "1/1296"
        ],
        [
         "4/1296",
         "10/1296"
        ],
        [
         "20/1296",
         "35/1296"
        ],
        [
         "56/1296",
         "80/1296"
        ],
        [
         "104/1296",
         "125/1296"
        ],
        [
         "140/1296",
         "146/1296"
        ],
        [
         "140/1296",
         "125/1296"
        ],
        [
         "104/1296",
         "80/1296"
        ],
        [
         "56/1296",
         "35/1296"
        ],
        [
         "20/1296",
         "10/1296"
        ],
        [
         "4/1296",
         "1/1296"
        ]
       ]
      }
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Represéntala gráficamente y observa cuánto se parece a la distribución normal.",
      "Calcula la media y la desviación típica. (Hazlo con la calculadora y ten en cuenta que, como los denominadores son iguales, en las frecuencias puedes poner los numeradores correspondientes a cada caso.)",
      "Comprueba que los parámetros de la media de los resultados son MEDIA <math display=\"inline\"><mrow><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math> y DESV. TÍPICA <math display=\"inline\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>855</mn></mrow></math>, ya que se obtienen dividiendo por cuatro los parámetros de sus sumas. La media será igual a la anterior y la desviación típica menor que la anterior."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Panorama del tema",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En primer lugar, estudiaremos la <strong>importancia de las muestras</strong>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Son <strong>muy útiles</strong> para tener una idea y un conocimiento general de la población.",
        "Por qué debemos utilizar muestras en muchos casos.",
        "Qué <strong>características</strong> debe tener una muestra para ser útil.",
        "Algunos métodos para obtener muestras."
       ]
      },
      {
       "mota": "testua",
       "html": "Estudiaremos con atención las <em>distribuciones de las medias muestrales</em>  (teorema central del límite) y, siguiendo el hilo de los resultados que hemos visto en estas dos páginas, veremos que tienden a distribuirse de modo normal. Así nos permitirán trabajar en ámbitos conocidos. Con ese objetivo, trabajaremos mucho y a fondo los procedimientos básicos para manejar con soltura y agilidad las distribuciones normales."
      },
      {
       "mota": "testua",
       "html": "Además, trabajaremos cómo se distribuyen las <strong>proporciones</strong> de individuos que cumplen una determinada característica en las muestras, y veremos que está muy relacionado con la distribución binomial."
      },
      {
       "mota": "testua",
       "html": "Por eso, también trabajaremos las técnicas básicas para manejar <strong>distribuciones binomiales</strong>."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "La función de las muestras",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En los medios de comunicación encontramos con frecuencia los resultados de encuestas de opinión sobre diversos ámbitos o aspectos de la política o la sociología actuales: &quot;Valoración de algunos líderes políticos&quot;, &quot;Tipos de lectura preferidos&quot;, ..."
    },
    {
     "mota": "testua",
     "html": "Junto con esa información aparece también la &quot;ficha técnica&quot; de la encuesta realizada, parecida a la que aparece a la derecha. En esa ficha aparecen algunos conceptos que estudiaremos a lo largo del tema (universo, muestra, tipo de muestreo, límite de error...)."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>FICHA TÉCNICA DE LA ENCUESTA</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Proyecto y dirección técnica:</strong> IMOP <br> <strong>Universo:</strong> población española mayor de 18 años. <br> <strong>Muestra:</strong> 1.278 individuos. <br> <strong>Tipo de muestreo:</strong> Aleatorio; encuesta mediante entrevistas personales por territorios, basada en el método estratificado. <br> <strong>Límite máximo de error:</strong>  <math display=\"inline\"><mrow><mi>%</mi><mo>±</mo><mn>3</mn><mo>,</mo><mn>1</mn></mrow></math>. <br> <strong>Nivel de confianza:</strong>  <math display=\"inline\"><mrow><mi>%</mi><mn>95</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "POBLACIÓN Y MUESTRA"
    },
    {
     "mota": "testua",
     "html": "Si queremos conocer la opinión de los electores sobre algunos políticos, el conjunto que debemos tener en cuenta es el de todos los que pueden votar: los mayores de 18 años. Eso es la <strong>población</strong> o el <strong>universo</strong>."
    },
    {
     "mota": "testua",
     "html": "No podemos preguntar a todos (sería una encuesta muy cara y larga), por lo que acudiremos solo a algunos: tomaremos una <strong>muestra</strong>. Las opiniones de unas cuantas personas nos servirán para saber qué opina la población entera."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La <strong>población</strong> o <strong>universo</strong> son todos los individuos que serán objeto de nuestra investigación."
      },
      {
       "mota": "testua",
       "html": "La <strong>muestra</strong> será el subconjunto que extraeremos de la población. El estudio de la muestra nos servirá para obtener las características de toda la población."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "¿POR QUÉ SE UTILIZAN MUESTRAS?"
    },
    {
     "mota": "testua",
     "html": "En la práctica, recurrimos a menudo a las muestras para obtener datos sobre una población entera, por estas razones:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La población es demasiado grande. (Por ejemplo, todos los vascos con capacidad de votar).",
      "Controlar la población es muy difícil o imposible. (Por ejemplo, todas las personas que entran en algunos grandes almacenes en una semana).",
      "El proceso de medición es destructivo. (Por ejemplo, si queremos saber la duración media de las bombillas que hay en un almacén y, como la única manera de saber cuánto dura una bombilla es mantenerla encendida hasta que se funda y medir el tiempo, solo podremos hacer la prueba con algunas de ellas).",
      "Se quieren conocer algunos datos de la población lo más rápido posible y se tardaría demasiado en hacer todas las encuestas (sondeos de salida de las urnas o encuestas de opinión)."
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "¿Podemos sacar conclusiones razonables a partir de la muestra?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Piensa que tenemos una ciudad con 300 000 electores. Para tener una idea de las opiniones políticas de esas personas, encuestaremos a 1 200 personas elegidas al azar."
    },
    {
     "mota": "testua",
     "html": "Quizá nos parezca que el error de las conclusiones que saquemos tiene que ser muy grande y que daremos una imagen muy distinta de la realidad, que mentiremos, porque cada individuo de la muestra tiene que representar a <img class=\"formula\" src=\"../media/formulak/36b6b065264c4d6d.svg\" alt=\"300#h(2pt)000 : 1200 = 250\" style=\"width:10.457em;height:1.001em\" loading=\"lazy\"> individuos de la población entera. Pero ¿cómo puede ser que, con lo que dice un individuo, podamos hacernos una idea de lo que piensan 250?"
    },
    {
     "mota": "testua",
     "html": "Pues, aunque parezca increíble, a partir de las muestras podemos obtener una buena idea de la población. Mira y analiza las siguientes fotografías."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/468c9e979ec8d5c4.svg",
           "zabalera": 166
          },
          {
           "mota": "testua",
           "html": "   <span>Imagen formada por 300 000 puntos</span>"
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/d5a1022e4de934ca.svg",
           "zabalera": 166
          },
          {
           "mota": "testua",
           "html": "   <span>Reconstruida a partir de una muestra de 1 200 puntos</span>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La fotografía de la izquierda está formada por 300 000 puntos y nos da una imagen clara de la realidad. La de la derecha es una muestra extraída de la anterior. La hemos dividido en 1 200 cuadraditos y hemos pintado cada uno con el color de uno de los puntos elegidos al azar. Si la miramos de cerca (a la distancia a la que leemos la página del libro), vemos algo sin forma. Pero si nos alejamos, la imagen nos parecerá más clara y nos dará una idea bastante nítida de la realidad. Haz la prueba: mira a 4 o 5 cm y comprobarás que ves las dos fotografías de modo bastante parecido."
    },
    {
     "mota": "testua",
     "html": "Los dos ejemplos que hemos explicado en esta página son parecidos: obtener información sobre una población de 300 000 individuos a partir de una muestra de 1 200 individuos. Como nos muestra el ejemplo de las fotografías, las muestras nos dan buena información sobre la población."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "¿Cómo deben ser las muestras?",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Debemos prestar especial atención sobre todo a dos aspectos de las muestras: su <strong>tamaño</strong> y <strong>cómo se hace la elección</strong> de los individuos que forman la muestra."
    },
    {
     "mota": "testua",
     "html": "En cuanto al tamaño, está claro que si la muestra es <em>demasiado pequeña</em> no sacaremos conclusiones aceptables. Pero como hemos visto en el apartado anterior, con muestras bastante pequeñas se pueden obtener imágenes bastante buenas de la realidad. En el tema siguiente aprenderemos a determinar con exactitud qué tamaño (número de individuos) debe tener una muestra."
    },
    {
     "mota": "testua",
     "html": "Veamos ahora cómo se eligen los elementos de una muestra."
    },
    {
     "mota": "azpititulua",
     "testua": "MUESTREO"
    },
    {
     "mota": "testua",
     "html": "Cuando en lugar del estudio de la población hacemos el estudio de la muestra, cometemos errores. Pero sabemos de antemano que los habrá y, por tanto, podemos controlarlos."
    },
    {
     "mota": "testua",
     "html": "Pero si la muestra está mal elegida (si no representa a la población) se producen errores adicionales imprevistos y no controlados (<strong>sesgos</strong>). A la elección de la muestra se le llama <strong>muestreo</strong>. Veamos ahora cómo debemos hacer el muestreo para poder obtener muestras representativas de la población."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Roosevelt ganó las elecciones de 1936 en Estados Unidos; una revista hizo una encuesta de intención de voto a más de cuatro millones de lectores y sus conclusiones fueron erróneas.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Otra encuesta hecha a 4 500 personas predijo con gran precisión el éxito de Roosevelt.</span>"
      },
      {
       "mota": "testua",
       "html": "<span>En el primer caso, la muestra tomada no representaba a la sociedad americana, ya que todos eran lectores de una revista. En el segundo, las 4 500 personas representaban bien todos los estamentos e ideologías de la sociedad.</span>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "MUESTREO ALEATORIO"
    },
    {
     "mota": "testua",
     "html": "Una condición <em>casi</em> imprescindible para que una muestra sea representativa de la población es que los elementos del muestreo estén elegidos al azar, aleatoriamente. Si la elección es subjetiva, los prejuicios de quien hace la elección se reflejarán en el resultado de la muestra y aparecerá lo que esa persona supone de la realidad."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se dice que el <strong>muestreo es aleatorio</strong> cuando todos los individuos de la muestra se eligen al azar; por tanto, todos los individuos de la población tienen <em>a priori</em> la misma probabilidad de ser elegidos."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En la página siguiente veremos los tipos de muestreo aleatorio."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Queremos saber cuántas horas estudian de media los 1 300 alumnos de un centro."
      },
      {
       "mota": "testua",
       "html": "Para ello, hemos extraído una muestra de 100 alumnos."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Si quien hiciera la elección fuera el director o un grupo de profesores y metieran alumnos &quot;buenos&quot;, &quot;medios&quot; y &quot;malos&quot;, la muestra estaría sesgada, porque no reflejaría la realidad, sino lo que el director o el grupo de profesores supone de la realidad."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Si elegimos a los primeros 100 alumnos que han llegado al centro un día determinado, la muestra, en este caso también, puede estar <em>contaminada</em>, porque llegar puntual al centro puede estar muy relacionado con la responsabilidad de esos alumnos y, por tanto, con el tiempo que dedican a estudiar."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "MUESTREO ALEATORIO SIMPLE"
    },
    {
     "mota": "testua",
     "html": "Los individuos se numeran y se eligen por sorteo. Si los individuos son tornillos guardados en una caja, por ejemplo, se eligen al azar sacándolos de la caja."
    },
    {
     "mota": "azpititulua",
     "testua": "MUESTREO ALEATORIO SISTEMÁTICO"
    },
    {
     "mota": "testua",
     "html": "Se numeran los individuos y, a partir de uno de ellos elegido al azar, los demás se eligen según &quot;saltos&quot; de número parecido. Por ejemplo, si el primero es el 5.º y el &quot;salto&quot; es de 13, elegirás el 5.º, el 18.º, el 31.º, el 44.º, ..."
    },
    {
     "mota": "testua",
     "html": "Al &quot;salto&quot; se le llama <strong>coeficiente de elevación</strong>, <math display=\"inline\"><mi>h</mi></math>, y <math display=\"inline\"><mi>N</mi></math> se obtiene haciendo el cociente entero entre el número de individuos de la población, y <math display=\"inline\"><mi>n</mi></math>, el número de individuos de la muestra: <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mfrac><mi>N</mi><mi>n</mi></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El primer elemento, el <em>origen</em>, se elige al azar entre los números <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>h</mi></mrow></math>."
    },
    {
     "mota": "azpititulua",
     "testua": "MUESTREO ALEATORIO ESTRATIFICADO"
    },
    {
     "mota": "testua",
     "html": "Si la población se puede dividir en estratos (por ejemplo, según la edad: mayores de 18 años; entre 18 y 25 años; entre 35 y 50; mayores de 50), a veces conviene elegir la muestra fijando de antemano el número de individuos de cada estrato. Cuando esos números y los tamaños de los estratos hechos en la población son proporcionales, se dice que el muestreo es <strong>estratificado</strong> y la distribución es <strong>proporcional</strong>."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "auto auto",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "taula",
           "goiburua": [],
           "lerroak": [
            [
             "ESTRATUAK",
             "<math display=\"inline\"><msub><mi>E</mi><mn>1</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>E</mi><mn>2</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>E</mi><mn>3</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>E</mi><mn>4</mn></msub></math>",
             "GUZTIRA"
            ],
            [
             "POPULAZIOKO INDIBIDUO KOP.",
             "<math display=\"inline\"><msub><mi>N</mi><mn>1</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>N</mi><mn>2</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>N</mi><mn>3</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>N</mi><mn>4</mn></msub></math>",
             "<math display=\"inline\"><mi>N</mi></math>"
            ],
            [
             "LAGINEKO INDIBIDUO KOP.",
             "<math display=\"inline\"><msub><mi>n</mi><mn>1</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>n</mi><mn>2</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>n</mi><mn>3</mn></msub></math>",
             "<math display=\"inline\"><msub><mi>n</mi><mn>4</mn></msub></math>",
             "<math display=\"inline\"><mi>n</mi></math>"
            ]
           ]
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mfrac><mi>n</mi><mi>N</mi></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>1</mn></msub><msub><mi>N</mi><mn>1</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>2</mn></msub><msub><mi>N</mi><mn>2</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>3</mn></msub><msub><mi>N</mi><mn>3</mn></msub></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>4</mn></msub><msub><mi>N</mi><mn>4</mn></msub></mfrac></mrow></math>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Dentro de cada estrato, los <math display=\"inline\"><msub><mi>n</mi><mi>i</mi></msub></math> individuos de la muestra se eligen al azar."
    },
    {
     "mota": "testua",
     "html": "El muestreo aleatorio estratificado se hace cuando admitimos que pertenecer a uno u otro estrato influye en la variable que estamos estudiando."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Podemos pensar que los alumnos de curso superior estudian más que los demás.",
      "La edad influye en los aspectos sociológicos."
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Siguiendo con el mismo ejemplo de la página anterior, veamos tres modos válidos que podemos hacer utilizando los tres métodos explicados en esta página:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Los cien alumnos a quienes se hará la encuesta se eligen mediante <strong>sorteo simple</strong>. (Consideraremos que a todos los alumnos del centro se les ha dado un número.)",
        "<strong>Muestreo sistemático:</strong> coeficiente de elevación <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>1300</mn><mn>100</mn></mfrac><mo>=</mo><mn>13</mn></mrow></math>. El <em>origen</em> lo obtendremos eligiendo por sorteo un número entre 1 y 13. Piensa que obtenemos el número 5. Los alumnos que elegiremos para hacer el muestreo son estos: 5, 18, 31, 44, 57, ..., 1 292.",
        "<strong>Muestreo aleatorio estratificado:</strong> Pensemos que en el centro hay 426 alumnos en 1.º, 359 en 2.º, 267 en 3.º, 133 en 4.º, 115 en 5.º. Haremos lo siguiente:"
       ]
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mfrac><mn>100</mn><mn>1300</mn></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>1</mn></msub><mn>426</mn></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>2</mn></msub><mn>359</mn></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>3</mn></msub><mn>267</mn></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>4</mn></msub><mn>133</mn></mfrac><mo>=</mo><mfrac><msub><mi>n</mi><mn>5</mn></msub><mn>115</mn></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msub><mi>n</mi><mn>1</mn></msub><mo>=</mo><mfrac><mrow><mn>426</mn><mo>⋅</mo><mn>100</mn></mrow><mn>1300</mn></mfrac><mo>=</mo><mn>33</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "De la misma forma se obtienen <math display=\"inline\"><mrow><msub><mi>n</mi><mn>2</mn></msub><mo>=</mo><mn>28</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>3</mn></msub><mo>=</mo><mn>20</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>4</mn></msub><mo>=</mo><mn>10</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>n</mi><mn>5</mn></msub><mo>=</mo><mn>9</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Si elegimos al azar 33 alumnos de 1.º, 28 de 2.º, 20 de 3.º, 10 de 4.º y 9 de 5.º, obtendremos una muestra mediante <strong>muestreo estratificado proporcional</strong>."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "TÉCNICAS PARA OBTENER UN MUESTREO ALEATORIO DE POBLACIÓN FINITA"
    },
    {
     "mota": "testua",
     "html": "Como hemos dicho en la página anterior, para elegir una muestra aleatoria se &quot;sortean&quot; los individuos de la población para elegir al azar cuáles formarán la muestra. Ese &quot;sorteo&quot; se puede hacer de varias formas:"
    },
    {
     "mota": "testua",
     "html": "<strong>Elección por extracción</strong>"
    },
    {
     "mota": "testua",
     "html": "En una caja se meten tantas bolas o papelitos numerados como individuos hay en la población (<math display=\"inline\"><mi>N</mi></math>). A esos papelitos o bolitas les hemos puesto antes los números (<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>N</mi></mrow></math>). Se sacan los papelitos al azar, tantos como individuos debe tener la muestra (<math display=\"inline\"><mi>n</mi></math>). Se puede hacer de dos maneras:"
    },
    {
     "mota": "testua",
     "html": "– <strong>Sin reemplazamiento:</strong> se eligen <math display=\"inline\"><mi>n</mi></math> papelitos a la vez o uno a uno."
    },
    {
     "mota": "testua",
     "html": "– <strong>Con reemplazamiento:</strong>  se eligen <math display=\"inline\"><mi>n</mi></math> papelitos uno a uno, pero después de sacar cada papelito, el papelito elegido se vuelve a meter en la caja."
    },
    {
     "mota": "testua",
     "html": "Con los dos métodos obtenemos una muestra aleatoria, porque en cada caso todos los elementos de la población tienen, <em>a priori</em>, la misma probabilidad de ser elegidos. Pero si la elección se hace con reemplazamiento, podemos sacar algún individuo dos veces. En ese caso habrá que tomar otro. Por eso, cuando se hace la elección por extracción, debe hacerse sin reemplazamiento, que además es más cómodo."
    },
    {
     "mota": "testua",
     "html": "<strong>Uso de números aleatorios</strong>"
    },
    {
     "mota": "testua",
     "html": "La calculadora tiene la tecla RAN\\#, es decir, la tecla llamada <strong>generador de números aleatorios</strong>. Con esa tecla se obtiene al azar un número decimal comprendido entre 0,000 y 0,999. Si multiplicamos uno de esos números por <math display=\"inline\"><mi>N</mi></math> (el número de elementos de la población), obtendremos un número decimal cuya parte entera estará entre 0 y <math display=\"inline\"><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></math>. Por tanto, si tomamos la parte entera del número obtenido mediante la secuencia <img class=\"formula\" src=\"../media/formulak/056c8c78329ce52a.svg\" alt=\"N times &quot;RAN#&quot; + 1\" style=\"width:8.227em;height:1.001em\" loading=\"lazy\">, obtendremos un número elegido al azar entre 1 y <math display=\"inline\"><mi>N</mi></math>. Si repetimos este mismo proceso <math display=\"inline\"><mi>n</mi></math> veces, obtendremos una muestra de <math display=\"inline\"><mi>n</mi></math> elementos, similar a la que obtendríamos extrayendo con reemplazamiento. Para hacer bien la operación habrá que eliminar los elementos repetidos (si los hay) y obtener otros elementos en su lugar."
    },
    {
     "mota": "testua",
     "html": "En el caso de poblaciones grandes este es el método más cómodo, porque no hay que fabricar grandes cantidades de papelitos. Si la población tiene más de 1 000 elementos, los elementos aleatorios deberán elegirse con ordenador, porque para &quot;repartir&quot; todos los elementos de la población necesitaremos números de tres cifras decimales."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Queremos extraer una muestra de tamaño 5 de una población formada por 423 individuos utilizando números aleatorios. Debemos proceder así:"
      },
      {
       "mota": "testua",
       "html": "423     FACTOR CONSTANTE. Ahora la calculadora está lista para multiplicar por 423 cualquier número escrito en pantalla. Tras la operación hay que pulsar la tecla =."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "<span>RAN#</span>",
           "0,678",
           "<math display=\"inline\"><mo>=</mo></math>",
           "286,794",
           "<math display=\"inline\"><mo>→</mo></math> 287"
          ],
          [
           "<span>RAN#</span>",
           "0,308",
           "<math display=\"inline\"><mo>=</mo></math>",
           "130,284",
           "<math display=\"inline\"><mo>→</mo></math> 131"
          ],
          [
           "<span>RAN#</span>",
           "0,292",
           "<math display=\"inline\"><mo>=</mo></math>",
           "123,516",
           "<math display=\"inline\"><mo>→</mo></math> 124"
          ],
          [
           "<span>RAN#</span>",
           "0,177",
           "<math display=\"inline\"><mo>=</mo></math>",
           "74,871",
           "<math display=\"inline\"><mo>→</mo></math> 75"
          ],
          [
           "<span>RAN#</span>",
           "0,603",
           "<math display=\"inline\"><mo>=</mo></math>",
           "255,069",
           "<math display=\"inline\"><mo>→</mo></math> 256"
          ]
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Los individuos que tienen estos números forman la muestra."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "Distribución normal. Repaso de la técnica básica",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como hemos visto en las dos primeras páginas de este tema y comprobaremos en los apartados siguientes, cuando trabajamos con medias de muestras aparecerá con frecuencia la distribución normal. Ahora repasaremos rápidamente el cálculo de probabilidades que se hace en las distribuciones normales."
    },
    {
     "mota": "azpititulua",
     "testua": "USO DE LA TABLA NORMAL N(0, 1)"
    },
    {
     "mota": "testua",
     "html": "En la distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, la variable se representa con la letra <math display=\"inline\"><mi>z</mi></math>. Las tablas que aparecen a continuación nos darán las probabilidades <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> para los valores de <math display=\"inline\"><mi>k</mi></math> entre 0 y 4, de centésima en centésima. A esas probabilidades se les llama <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> banatuko da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/b59c2e5e6236a582.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "El valor de <math display=\"inline\"><mi>k</mi></math> se encuentra así:"
        },
        {
         "mota": "testua",
         "html": "<strong>Unidades y décimas</strong> en la columna izquierda."
        },
        {
         "mota": "testua",
         "html": "<strong>Centésimas</strong> en la fila superior."
        },
        {
         "mota": "testua",
         "html": "El número que nos da la tabla es el valor de: <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "azpititulua",
         "testua": "Ejemplos"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6736</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>20</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8849</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>00</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8413</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "De la misma manera, conociendo el valor de la probabilidad <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, podemos saber el valor de <math display=\"inline\"><mi>k</mi></math>."
        },
        {
         "mota": "azpititulua",
         "testua": "Ejemplos"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>7190</mn><mo>→</mo><mi>k</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>58</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8643</mn><mo>→</mo><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>1</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>5560</mn><mo>→</mo><mi>k</mi><mo>≈</mo><mn>0</mn><mo>,</mo><mn>14</mn></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<math display=\"inline\"><mi>k</mi></math>",
         "EHUNENAK"
        ],
        [
         "",
         "0"
        ],
        [
         "1",
         "2"
        ],
        [
         "3",
         "4"
        ],
        [
         "5",
         "6"
        ],
        [
         "7",
         "8"
        ],
        [
         "9",
         "0,0"
        ],
        [
         "0,5000",
         "0,5040"
        ],
        [
         "0,5080",
         "0,5120"
        ],
        [
         "0,5160",
         "0,5199"
        ],
        [
         "0,5239",
         "0,5279"
        ],
        [
         "0,5319",
         "0,5359"
        ],
        [
         "0,1",
         "0,5398"
        ],
        [
         "0,5438",
         "0,5478"
        ],
        [
         "0,5517",
         "0,5557"
        ],
        [
         "0,5596",
         "0,5636"
        ],
        [
         "0,5675",
         "0,5714"
        ],
        [
         "0,5753",
         "0,2"
        ],
        [
         "0,5793",
         "0,5832"
        ],
        [
         "0,5871",
         "0,5910"
        ],
        [
         "0,5948",
         "0,5987"
        ],
        [
         "0,6026",
         "0,6064"
        ],
        [
         "0,6103",
         "0,6141"
        ],
        [
         "0,3",
         "0,6179"
        ],
        [
         "0,6217",
         "0,6255"
        ],
        [
         "0,6293",
         "0,6331"
        ],
        [
         "0,6368",
         "0,6406"
        ],
        [
         "0,6443",
         "0,6480"
        ],
        [
         "0,6517",
         "0,4"
        ],
        [
         "0,6554",
         "0,6591"
        ],
        [
         "0,6628",
         "0,6664"
        ],
        [
         "0,6700",
         "0,6736"
        ],
        [
         "0,6772",
         "0,6808"
        ],
        [
         "0,6844",
         "0,6879"
        ],
        [
         "0,5",
         "0,6915"
        ],
        [
         "0,6950",
         "0,6985"
        ],
        [
         "0,7019",
         "0,7054"
        ],
        [
         "0,7088",
         "0,7123"
        ],
        [
         "0,7157",
         "0,7190"
        ],
        [
         "0,7224",
         "0,6"
        ],
        [
         "0,7257",
         "0,7291"
        ],
        [
         "0,7324",
         "0,7357"
        ],
        [
         "0,7389",
         "0,7422"
        ],
        [
         "0,7454",
         "0,7486"
        ],
        [
         "0,7517",
         "0,7549"
        ],
        [
         "0,7",
         "0,7580"
        ],
        [
         "0,7611",
         "0,7642"
        ],
        [
         "0,7673",
         "0,7704"
        ],
        [
         "0,7734",
         "0,7764"
        ],
        [
         "0,7794",
         "0,7823"
        ],
        [
         "0,7852",
         "0,8"
        ],
        [
         "0,7881",
         "0,7910"
        ],
        [
         "0,7939",
         "0,7967"
        ],
        [
         "0,7995",
         "0,8023"
        ],
        [
         "0,8051",
         "0,8078"
        ],
        [
         "0,8106",
         "0,8133"
        ],
        [
         "0,9",
         "0,8159"
        ],
        [
         "0,8186",
         "0,8212"
        ],
        [
         "0,8238",
         "0,8264"
        ],
        [
         "0,8289",
         "0,8315"
        ],
        [
         "0,8340",
         "0,8365"
        ],
        [
         "0,8389",
         "1,0"
        ],
        [
         "0,8413",
         "0,8438"
        ],
        [
         "0,8461",
         "0,8485"
        ],
        [
         "0,8508",
         "0,8531"
        ],
        [
         "0,8554",
         "0,8577"
        ],
        [
         "0,8599",
         "0,8621"
        ],
        [
         "1,1",
         "0,8643"
        ],
        [
         "0,8665",
         "0,8686"
        ],
        [
         "0,8708",
         "0,8729"
        ],
        [
         "0,8749",
         "0,8770"
        ],
        [
         "0,8790",
         "0,8810"
        ],
        [
         "0,8830",
         "1,2"
        ],
        [
         "0,8849",
         "0,8869"
        ],
        [
         "0,8888",
         "0,8907"
        ],
        [
         "0,8925",
         "0,8944"
        ],
        [
         "0,8962",
         "0,8980"
        ],
        [
         "0,8997",
         "0,9015"
        ],
        [
         "1,3",
         "0,9032"
        ],
        [
         "0,9049",
         "0,9066"
        ],
        [
         "0,9082",
         "0,9099"
        ],
        [
         "0,9115",
         "0,9131"
        ],
        [
         "0,9147",
         "0,9162"
        ],
        [
         "0,9177",
         "1,4"
        ],
        [
         "0,9192",
         "0,9207"
        ],
        [
         "0,9222",
         "0,9236"
        ],
        [
         "0,9251",
         "0,9265"
        ],
        [
         "0,9279",
         "0,9292"
        ],
        [
         "0,9306",
         "0,9319"
        ],
        [
         "1,5",
         "0,9332"
        ],
        [
         "0,9345",
         "0,9357"
        ],
        [
         "0,9370",
         "0,9382"
        ],
        [
         "0,9394",
         "0,9406"
        ],
        [
         "0,9418",
         "0,9429"
        ],
        [
         "0,9441",
         "1,6"
        ],
        [
         "0,9452",
         "0,9463"
        ],
        [
         "0,9474",
         "0,9484"
        ],
        [
         "0,9495",
         "0,9505"
        ],
        [
         "0,9515",
         "0,9525"
        ],
        [
         "0,9535",
         "0,9545"
        ],
        [
         "1,7",
         "0,9554"
        ],
        [
         "0,9564",
         "0,9573"
        ],
        [
         "0,9582",
         "0,9591"
        ],
        [
         "0,9599",
         "0,9608"
        ],
        [
         "0,9616",
         "0,9625"
        ],
        [
         "0,9633",
         "1,8"
        ],
        [
         "0,9641",
         "0,9649"
        ],
        [
         "0,9656",
         "0,9664"
        ],
        [
         "0,9671",
         "0,9678"
        ],
        [
         "0,9686",
         "0,9693"
        ],
        [
         "0,9699",
         "0,9706"
        ],
        [
         "1,9",
         "0,9713"
        ],
        [
         "0,9719",
         "0,9726"
        ],
        [
         "0,9732",
         "0,9738"
        ],
        [
         "0,9744",
         "0,9750"
        ],
        [
         "0,9756",
         "0,9761"
        ],
        [
         "0,9767",
         "2,0"
        ],
        [
         "0,9772",
         "0,9778"
        ],
        [
         "0,9783",
         "0,9788"
        ],
        [
         "0,9793",
         "0,9798"
        ],
        [
         "0,9803",
         "0,9808"
        ],
        [
         "0,9812",
         "0,9817"
        ],
        [
         "2,1",
         "0,9821"
        ],
        [
         "0,9826",
         "0,9830"
        ],
        [
         "0,9834",
         "0,9838"
        ],
        [
         "0,9842",
         "0,9846"
        ],
        [
         "0,9850",
         "0,9854"
        ],
        [
         "0,9857",
         "2,2"
        ],
        [
         "0,9861",
         "0,9864"
        ],
        [
         "0,9868",
         "0,9871"
        ],
        [
         "0,9875",
         "0,9878"
        ],
        [
         "0,9881",
         "0,9884"
        ],
        [
         "0,9887",
         "0,9890"
        ],
        [
         "2,3",
         "0,9893"
        ],
        [
         "0,9896",
         "0,9898"
        ],
        [
         "0,9901",
         "0,9904"
        ],
        [
         "0,9906",
         "0,9909"
        ],
        [
         "0,9911",
         "0,9913"
        ],
        [
         "0,9916",
         "2,4"
        ],
        [
         "0,9918",
         "0,9920"
        ],
        [
         "0,9922",
         "0,9925"
        ],
        [
         "0,9927",
         "0,9929"
        ],
        [
         "0,9931",
         "0,9932"
        ],
        [
         "0,9934",
         "0,9936"
        ],
        [
         "2,5",
         "0,9938"
        ],
        [
         "0,9940",
         "0,9941"
        ],
        [
         "0,9943",
         "0,9945"
        ],
        [
         "0,9946",
         "0,9948"
        ],
        [
         "0,9949",
         "0,9951"
        ],
        [
         "0,9952",
         "2,6"
        ],
        [
         "0,9953",
         "0,9955"
        ],
        [
         "0,9956",
         "0,9957"
        ],
        [
         "0,9959",
         "0,9960"
        ],
        [
         "0,9961",
         "0,9962"
        ],
        [
         "0,9963",
         "0,9964"
        ],
        [
         "2,7",
         "0,9965"
        ],
        [
         "0,9966",
         "0,9967"
        ],
        [
         "0,9968",
         "0,9969"
        ],
        [
         "0,9970",
         "0,9971"
        ],
        [
         "0,9972",
         "0,9973"
        ],
        [
         "0,9974",
         "2,8"
        ],
        [
         "0,9974",
         "0,9975"
        ],
        [
         "0,9976",
         "0,9977"
        ],
        [
         "0,9977",
         "0,9978"
        ],
        [
         "0,9979",
         "0,9979"
        ],
        [
         "0,9980",
         "0,9981"
        ],
        [
         "2,9",
         "0,9981"
        ],
        [
         "0,9982",
         "0,9982"
        ],
        [
         "0,9983",
         "0,9984"
        ],
        [
         "0,9984",
         "0,9985"
        ],
        [
         "0,9985",
         "0,9986"
        ],
        [
         "0,9986",
         "3,0"
        ],
        [
         "0,9987",
         "0,9987"
        ],
        [
         "0,9987",
         "0,9988"
        ],
        [
         "0,9988",
         "0,9989"
        ],
        [
         "0,9989",
         "0,9989"
        ],
        [
         "0,9990",
         "0,9990"
        ],
        [
         "3,1",
         "0,9990"
        ],
        [
         "0,9991",
         "0,9991"
        ],
        [
         "0,9991",
         "0,9992"
        ],
        [
         "0,9992",
         "0,9992"
        ],
        [
         "0,9992",
         "0,9993"
        ],
        [
         "0,9993",
         "3,2"
        ],
        [
         "0,9993",
         "0,9993"
        ],
        [
         "0,9994",
         "0,9994"
        ],
        [
         "0,9994",
         "0,9994"
        ],
        [
         "0,9994",
         "0,9995"
        ],
        [
         "0,9995",
         "0,9995"
        ],
        [
         "3,3",
         "0,9995"
        ],
        [
         "0,9995",
         "0,9995"
        ],
        [
         "0,9996",
         "0,9996"
        ],
        [
         "0,9996",
         "0,9996"
        ],
        [
         "0,9996",
         "0,9996"
        ],
        [
         "0,9997",
         "3,4"
        ],
        [
         "0,9997",
         "0,9997"
        ],
        [
         "0,9997",
         "0,9997"
        ],
        [
         "0,9997",
         "0,9997"
        ],
        [
         "0,9997",
         "0,9997"
        ],
        [
         "0,9997",
         "0,9998"
        ],
        [
         "3,5",
         "0,9998"
        ],
        [
         "0,9998",
         "0,9998"
        ],
        [
         "0,9998",
         "0,9998"
        ],
        [
         "0,9998",
         "0,9998"
        ],
        [
         "0,9998",
         "0,9998"
        ],
        [
         "0,9998",
         "3,6"
        ],
        [
         "0,9998",
         "0,9998"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "3,7",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "3,8"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "0,9999",
         "0,9999"
        ],
        [
         "3,9",
         "1,0000"
        ],
        [
         "1,0000",
         "1,0000"
        ],
        [
         "1,0000",
         "1,0000"
        ],
        [
         "1,0000",
         "1,0000"
        ],
        [
         "1,0000",
         "1,0000"
        ],
        [
         "1,0000"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Recuerda que en una distribución con variable continua las probabilidades puntuales son nulas: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn></mrow></math>. Por tanto, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
    },
    {
     "mota": "azpititulua",
     "testua": "CÁLCULO DE PROBABILIDADES EN LA DISTRIBUCIÓN N(0, 1)"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si <math display=\"inline\"><mrow><mi>k</mi><mo>≥</mo><mn>0</mn></mrow></math>, las probabilidades <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se pueden encontrar directamente en las tablas.",
      "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
      "En el caso de abscisas negativas <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>−</mi><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Las demás probabilidades se pueden obtener a partir de las anteriores, como se ve en los ejemplos siguientes."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/7d4ec69b9e422dfa.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>1.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>1</mn><mo>,</mo><mn>73</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>73</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>73</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9582</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0418</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/e80cb2f9d1ae38e4.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>2.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>21</mn><mo>&lt;</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo>,</mo><mn>34</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>34</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>21</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9099</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>5832</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>3267</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/18acf3acf05764f6.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>3.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo>&lt;</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>7967</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>2033</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>0</mn><mo>,</mo><mn>83</mn><mo>&lt;</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mn>0</mn><mo>,</mo><mn>2033</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>9893</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>2033</mn><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>7860</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/86ce2e6923592147.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>4.</strong>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>95</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>95</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>95</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9744</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>8413</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>1331</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/88f6833ec682d50c.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ejercicios",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1</strong>  Encuentra:"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>c)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>d)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>e)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>96</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>f)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>3</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>g)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>96</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>h)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>i)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>j)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>3</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>k)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>64</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>1</mn><mo>,</mo><mn>64</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>l)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>2</mn><mo>,</mo><mn>57</mn><mo>≤</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>57</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "CÁLCULO DE PROBABILIDADES EN LA DISTRIBUCIÓN <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> EN DISTRIBUCIONES NORMALES DE CUALQUIER TIPO"
    },
    {
     "mota": "testua",
     "html": "En el fondo, todas las distribuciones normales son una misma. Por eso, para calcular la probabilidad de que una variable <math display=\"inline\"><mi>x</mi></math>, normal <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, esté situada entre unos valores, basta con saber &quot;a cuántas desviaciones típicas de la media&quot; está cada uno de esos valores."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/b4e7c624a66dd6e1.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "En el gráfico, la característica del intervalo indicado es esta: &quot;desde una desviación típica a la izquierda de la media hasta dos desviaciones típicas a la derecha de la media&quot;."
    },
    {
     "mota": "testua",
     "html": "Se puede expresar más fácilmente de este otro modo: &quot;el intervalo (–1, 2) corresponde a la distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot;."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>−</mo><mi>σ</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mi>σ</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mo>−</mo><mn>1</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>2</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Toda distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, si expresamos la variable &quot;en número de desviaciones típicas que se aleja de la media&quot;."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "<math display=\"inline\"><mo>↔</mo></math>",
         "<math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mi>a</mi></math>",
         "<math display=\"inline\"><mo>↔</mo></math>",
         "<math display=\"inline\"><mfrac><mrow><mi>a</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></math>"
        ],
        [
         "<math display=\"inline\"><mi>b</mi></math>",
         "<math display=\"inline\"><mo>↔</mo></math>",
         "<math display=\"inline\"><mfrac><mrow><mi>b</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>",
         "<math display=\"inline\"><mo>↔</mo></math>",
         "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>a</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac><mo>,</mo><mfrac><mrow><mi>b</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>b</mi></mrow></math>",
         "<math display=\"inline\"><mo>↔</mo></math>",
         "<math display=\"inline\"><mrow><mfrac><mrow><mi>a</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mfrac><mrow><mi>b</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "A ese proceso de pasar de una variable <math display=\"inline\"><mi>x</mi></math>  <em>N</em><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> a una variable <math display=\"inline\"><mi>z</mi></math>  <em>N</em><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se le llama <strong>tipificación de la variable</strong>. Las probabilidades de la variable tipificada se pueden calcular mirando en las tablas."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> calcularemos <em>a)</em>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <em>b)</em>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&gt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <em>c)</em>  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>70</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mo>↔</mo><mspace width=\"1.0em\"></mspace><mi>z</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>70</mn><mo>↔</mo><mfrac><mrow><mn>70</mn><mo>−</mo><mn>66</mn></mrow><mn>8</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>5</mn></mrow></math> <math display=\"block\"><mrow><mn>80</mn><mo>↔</mo><mfrac><mrow><mn>80</mn><mo>−</mo><mn>66</mn></mrow><mn>8</mn></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mn>75</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6915</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9599</mn></mrow></math>, <br>     <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>0401</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>70</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math>  <br>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9599</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>6915</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>2684</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<span class=\"j-underline\">SOLUCIONES</span>"
          },
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&lt;</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6915</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>&gt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>0401</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<em>c)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>70</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>80</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>2684</mn></mrow></math>"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ejercicios",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2</strong>  En una distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, encuentra las siguientes probabilidades:"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≤</mo><mn>173</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≥</mo><mn>180</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>c)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>174</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>180</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>d)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>161</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>180</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>e)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>161</mn><mo>≤</mo><mi>x</mi><mo>≤</mo><mn>170</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>f)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>172</mn><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mn>174</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>"
          }
         ]
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "Intervalos característicos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Hasta ahora hemos aprendido a calcular qué probabilidad tiene <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cuando <math display=\"inline\"><mi>z</mi></math> está en un intervalo finito o infinito. Es decir, hemos aprendido a acudir directamente a las tablas."
    },
    {
     "mota": "testua",
     "html": "Ahora aprenderemos lo contrario: dados el tipo de intervalo y su probabilidad, tendremos que encontrar los extremos del intervalo. Veamos algunos ejemplos."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong>  ¿Para qué valor de <math display=\"inline\"><mi>k</mi></math> se cumple <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>85</mn></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "Buscamos en las tablas el valor 0,85 y encontramos las probabilidades siguientes:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>03</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8485</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>04</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8508</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "La más cercana es la segunda, por tanto la solución se puede dar así:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>8508</mn><mo>→</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Beraz, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>04</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong>  ¿Para qué valor de <math display=\"inline\"><mi>k</mi></math> se cumple <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>k</mi><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>?"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Si dentro del intervalo hay un área de 0,9, fuera habrá 0,1. Como el intervalo es simétrico, el área de cada una de las dos <em>colas</em> será 0,05. Por tanto:"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "En las tablas encontramos <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>64</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9495</mn></mrow></math>, <math display=\"inline\"><mrow><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>65</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9505</mn></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "Por tanto, a <math display=\"inline\"><mi>k</mi></math> le daremos el punto medio entre los valores 1,64 y 1,65. Es decir, <math display=\"inline\"><mrow><mi>k</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>"
          },
          {
           "mota": "zentratua",
           "blokeak": [
            {
             "mota": "testua",
             "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>645</mn><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>"
            }
           ]
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/d69bdd69e249b9a7.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Hemos encontrado el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>645</mn><mo>;</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, simétrico respecto a 0, y dentro de ese intervalo está el 90 % del área total."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "INTERVALOS CARACTERÍSTICOS EN DISTRIBUCIONES N(0, 1)"
    },
    {
     "mota": "testua",
     "html": "Si la probabilidad de que la variable <math display=\"inline\"><mi>z</mi></math> esté entre <math display=\"inline\"><mrow><mi>−</mi><mi>k</mi></mrow></math> y <math display=\"inline\"><mi>k</mi></math> es <math display=\"inline\"><mi>p</mi></math>, es decir,"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>−</mi><mi>k</mi><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>p</mi></mrow></math>"
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/4c4a6b8316084b9c.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "decimos entonces que <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>k</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es el <strong>intervalo característico</strong> correspondiente a la probabilidad <math display=\"inline\"><mi>p</mi></math>. Y a <math display=\"inline\"><mi>k</mi></math> se le llama <strong>valor crítico</strong>."
    },
    {
     "mota": "testua",
     "html": "Los valores críticos correspondientes a las probabilidades 0,9; 0,95; 0,99 se utilizan mucho y son 1,645; 1,96; 2,575, respectivamente."
    },
    {
     "mota": "testua",
     "html": "Normalmente, para expresar la probabilidad <math display=\"inline\"><mi>p</mi></math> se utiliza <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. El valor crítico correspondiente a esa expresión es <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> y tiene las siguientes igualdades:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>α</mi><mi>/</mi><mn>2</mn><mspace width=\"1.0em\"></mspace><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>−</mi><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>&lt;</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "BALIO KRITIKO NAGUSIAK",
         "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>",
         "<math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math>"
        ],
        [
         "<math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>",
         "0,90",
         "0,05"
        ],
        [
         "1,645",
         "0,95",
         "0,025"
        ],
        [
         "1,96",
         "0,99",
         "0,005"
        ],
        [
         "2,575"
        ]
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ejercicios",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1</strong> Calcula razonadamente los valores críticos correspondientes a las probabilidades 0,95 y 0,99."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "INTERVALOS CARACTERÍSTICOS EN DISTRIBUCIONES NORMALES DE CUALQUIER TIPO"
    },
    {
     "mota": "testua",
     "html": "Tenemos la variable <math display=\"inline\"><mi>x</mi></math>, que es una variable <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y queremos encontrar un intervalo centrado en la media, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mi>k</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, teniendo en cuenta que <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mi>k</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. Es decir, en el intervalo que queremos obtener estará el <math display=\"inline\"><mrow><mi>%</mi><mn>100</mn><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de los individuos de la población."
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mi>x</mi></math>  <em>N</em><math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, entonces <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow></math> será <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Teniendo en cuenta los resultados de la página anterior,"
    },
    {
     "mota": "testua",
     "html": "El intervalo característico de la variable <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac></mrow></math> correspondiente a la probabilidad <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>,</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Es decir, <math display=\"inline\"><mrow><mi>−</mi><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>&lt;</mo><mfrac><mrow><mi>x</mi><mo>−</mo><mi>μ</mi></mrow><mi>σ</mi></mfrac><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></mrow></math>, y la probabilidad <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. O:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>−</mi><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>&lt;</mo><mi>x</mi><mo>−</mo><mi>μ</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>μ</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>&lt;</mo><mi>x</mi><mo>&lt;</mo><mi>μ</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi></mtd></mtr></mtable></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Así obtenemos el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "ingurunea",
         "izena": "Definición",
         "kolorea": "berdea",
         "etzana": false,
         "titulua": null,
         "blokeak": [
          {
           "mota": "testua",
           "html": "El intervalo característico correspondiente a una probabilidad <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> es este:"
          },
          {
           "mota": "zentratua",
           "blokeak": [
            {
             "mota": "testua",
             "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
            }
           ]
          },
          {
           "mota": "testua",
           "html": "Por tanto:"
          },
          {
           "mota": "testua",
           "html": "Para el 90 %, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Para el 95 %, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>96</mn><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mo>,</mo><mn>96</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Para el 99 %, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>2</mn><mo>,</mo><mn>575</mn><mi>σ</mi><mo>,</mo><mi>μ</mi><mo>+</mo><mn>2</mn><mo>,</mo><mn>575</mn><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/4d19452958430cd6.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> obtendremos los intervalos característicos para los casos del 90 %, 95 % y 99 %."
      },
      {
       "mota": "testua",
       "html": "%90: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>8</mn><mo>;</mo><mn>66</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>52</mn><mo>,</mo><mn>84</mn><mo>;</mo><mn>79</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Esto quiere decir que el 90 % de los individuos está en ese intervalo. Es decir:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>52</mn><mo>,</mo><mn>84</mn><mo>;</mo><mn>79</mn><mo>,</mo><mn>16</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "%95: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>8</mn><mo>,</mo><mn>66</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>50</mn><mo>,</mo><mn>32</mn><mo>;</mo><mn>81</mn><mo>,</mo><mn>68</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>50</mn><mo>,</mo><mn>32</mn><mo>;</mo><mn>81</mn><mo>,</mo><mn>68</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "%99: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>66</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>8</mn><mo>,</mo><mn>66</mn><mo>+</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>45</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>86</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>45</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>86</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ejercicios",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>2</strong>  En la distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, encuentra los intervalos característicos para los casos del 90 %, 95 % y 99 %."
      }
     ]
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "Distribución de las medias muestrales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Recuerda los resultados que hemos obtenido en las dos primeras páginas de este tema. En esos dos casos, cuando hemos lanzado dos, tres o cuatro dados, hemos querido saber la media de las puntuaciones obtenidas."
    },
    {
     "mota": "testua",
     "html": "Lanzar un dado se puede considerar un individuo de una población finita: <em>Lanzar un dado continuamente</em>. Por tanto, podemos decir que lanzar un dado cuatro veces (o lanzar cuatro dados) es una muestra de tamaño cuatro de esa población."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Desde ese punto de vista, el ejercicio que hemos explicado en las primeras páginas del tema lo podemos resumir así:"
        },
        {
         "mota": "testua",
         "html": "Si de la distribución &quot;resultado al lanzar un dado&quot; extraemos muestras de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>2</mn><mo>,</mo><mi>n</mi><mo>=</mo><mn>3</mn><mo>,</mo><mi>n</mi><mo>=</mo><mn>4</mn><mo>,</mo><mi>…</mi></mrow></math>, la distribución de las medias correspondientes a esas muestras se parecerá a una distribución normal. Y ese parecido será tanto mayor cuanto mayor sea <math display=\"inline\"><mi>n</mi></math>. Además, cuando <math display=\"inline\"><mi>n</mi></math>  (el número de dados) aumenta:"
        },
        {
         "mota": "zerrenda",
         "ordenatua": false,
         "elementuak": [
          "La media permanecerá constante.",
          "La desviación típica irá disminuyendo."
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/63aa0bbe66ccc607.svg",
         "zabalera": 267
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Este resultado relativo al lanzamiento de un dado se generaliza para cualquier distribución según el teorema siguiente."
    },
    {
     "mota": "azpititulua",
     "testua": "TEOREMA CENTRAL DEL LÍMITE"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Dada una población con media <math display=\"inline\"><mi>μ</mi></math> y desviación típica <math display=\"inline\"><mi>σ</mi></math>, la distribución de las medias de las muestras de tamaño <math display=\"inline\"><mi>n</mi></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Tendrá la misma media de la población, <math display=\"inline\"><mi>μ</mi></math>.",
        "Tendrá desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt></mrow></math> y, por tanto, disminuirá cuando <math display=\"inline\"><mi>n</mi></math> aumente.",
        "Cuando <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math>, se aproximará mucho a la distribución normal."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es importante señalar que este teorema es válido sea cual sea la distribución de la población de origen, tanto discreta como continua."
    },
    {
     "mota": "testua",
     "html": "La aproximación de la distribución de las medias muestrales a la distribución normal dependerá del tipo de población original y del valor de <math display=\"inline\"><mi>n</mi></math>."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si la población original es normal, la distribución de las medias muestrales también será normal, sea cual sea el valor de <math display=\"inline\"><mi>n</mi></math>.",
      "Aunque la población original no sea normal, la distribución de las medias muestrales puede ser muy parecida a la distribución normal, incluso para valores pequeños de <math display=\"inline\"><mi>n</mi></math> (como hemos visto en los ejemplos anteriores). Pero para el caso <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>30</mn></mrow></math> es seguro que se aproximará mucho a la normal, sea cual sea la distribución original."
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "CONSECUENCIAS DEL TEOREMA CENTRAL DEL LÍMITE"
    },
    {
     "mota": "testua",
     "html": "Gracias al teorema central del límite, podemos controlar la distribución de las medias muestrales, ya que sabemos que <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es <math display=\"inline\"><mi>n</mi></math> si es mayor que 30. Gracias a ello, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, podremos establecer intervalos de probabilidad para las medias muestrales, como veremos en los ejemplos siguientes. Y lo que es más importante: podremos obtener información muy útil sobre la media de una población a partir de una muestra. (Esto último lo veremos en el tema siguiente)."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong>  <em>Sabemos que la media de las bolsas de azúcar que fabrica una máquina es 500 g y la desviación típica 35 g. Esas bolsas se meten en cajas de 100 unidades.</em>  <em>a)</em> ¿Cómo se distribuyen las medias de los pesos de las bolsas de cada caja? <em>b)</em> Encuentra los intervalos característicos del 90 %, 95 % y 99 % correspondientes a las bolsas de cada caja."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "El número total de bolsas que fabrica la máquina es una población con media <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>500</mn></mrow></math> y desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>35</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Cada caja es una muestra de 100 individuos. <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Según el teorema central del límite, sabemos que la distribución de las medias muestrales es una distribución normal de media <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>500</mn></mrow></math> y desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt><mo>=</mo><mn>35</mn><mi>/</mi><msqrt><mn>100</mn></msqrt><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Es decir, las medias de las bolsas de cada caja, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, se distribuyen <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>;</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "En el caso del 90 %, como <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>, el intervalo correspondiente a ese caso es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>;</mo><mn>500</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>494</mn><mo>,</mo><mn>2</mn><mo>;</mo><mn>505</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Esto quiere decir que el peso medio de las bolsas del 90 % de las cajas (cajas de 100 bolsas) está entre 494,2 y 505,8 g."
      },
      {
       "mota": "testua",
       "html": "En el caso del 95 %: <math display=\"inline\"><mrow><mo>→</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>025</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Intervalo: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>493</mn><mo>,</mo><mn>1</mn><mo>;</mo><mn>506</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En el caso del 99 %: <math display=\"inline\"><mrow><mo>→</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>005</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Intervalo: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>±</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>491</mn><mo>;</mo><mn>509</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong>  <em>La altura, en centímetros, de los soldados de un grupo es una población normal <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Las guardias del regimiento las hacen 12 soldados. Suponiendo que se eligen al azar, encuentra en qué intervalo está el 95 % de las alturas medias de quienes hacen las guardias.</em>"
      },
      {
       "mota": "testua",
       "html": "Como la población original es normal, las medias muestrales también se distribuirán según la normal, sea cual sea <math display=\"inline\"><mi>n</mi></math>."
      },
      {
       "mota": "testua",
       "html": "En este caso, las alturas medias de los soldados de cada guardia se distribuyen <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>6</mn><mi>/</mi><msqrt><mn>12</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En el caso del 95 % es <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>. Por tanto, el intervalo es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>173</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mfrac><mn>6</mn><msqrt><mn>12</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>169</mn><mo>,</mo><mn>6</mn><mo>;</mo><mn>176</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por tanto, la altura media de los 12 soldados en el 95 % de las guardias es superior a 169,6 cm e inferior a 176,4 cm."
      }
     ]
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "Distribución binomial. Repaso de las técnicas básicas de muestreo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si en un suceso aleatorio destacamos un suceso <math display=\"inline\"><mi>A</mi></math> y solo nos interesa si ocurre <math display=\"inline\"><mi>A</mi></math> o <math display=\"inline\"><msup><mi>A</mi><mo>′</mo></msup></math>, su contrario, a eso lo llamamos experiencia dicotómica. Al suceso <math display=\"inline\"><mi>A</mi></math> se le llama éxito y a su probabilidad, <math display=\"inline\"><mi>p</mi></math>, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>p</mi></mrow></math>. La probabilidad de su contrario es <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo>=</mo><mi>q</mi></mrow></math>."
    },
    {
     "mota": "azpititulua",
     "testua": "DISTRIBUCIÓN BINOMIAL"
    },
    {
     "mota": "testua",
     "html": "Una experiencia dicotómica se repite <math display=\"inline\"><mi>n</mi></math> veces. ¿Cuál será <math display=\"inline\"><mi>x</mi></math>, el número de éxitos? La variable <math display=\"inline\"><mi>x</mi></math> es una variable discreta y puede tomar los valores <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "A la distribución de probabilidad de la variable <math display=\"inline\"><mi>x</mi></math> se le llama <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  <strong>distribución binomial</strong> y en ella:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> es la probabilidad de éxito en cada experiencia.",
      "<math display=\"inline\"><mi>n</mi></math> es el número que nos indica cuántas veces repetimos la experiencia."
     ]
    },
    {
     "mota": "testua",
     "html": "La probabilidad de que el número de éxitos <math display=\"inline\"><mi>x</mi></math> tome el valor <math display=\"inline\"><mi>k</mi></math> es esta: <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mi>n</mi><mi>k</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mi>p</mi><mi>k</mi></msup><msup><mi>q</mi><mrow><mi>n</mi><mo>−</mo><mi>k</mi></mrow></msup></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los parámetros de esta distribución de probabilidad con variable discreta son estos:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "MEDIA <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>n</mi><mi>p</mi></mrow></math>    DESVIACIÓN TÍPICA <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "LA DISTRIBUCIÓN BINOMIAL SE APROXIMA A LA NORMAL"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Una distribución binomial se parecerá cada vez más a una distribución normal cuanto mayor sea el producto <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi></mrow></math> (o <math display=\"inline\"><mrow><mi>n</mi><mi>q</mi></mrow></math>, si <math display=\"inline\"><mrow><mi>q</mi><mo>&lt;</mo><mi>p</mi></mrow></math>)."
        },
        {
         "mota": "testua",
         "html": "Cuando <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mi>q</mi></mrow></math> son ambos mayores que 3, la aproximación es bastante buena. Si son mayores que 5, la aproximación es casi total."
        },
        {
         "mota": "testua",
         "html": "Naturalmente, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se aproxima a la curva normal con la misma media <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mi>n</mi><mi>p</mi></mrow></math> y la misma desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt></mrow></math>:"
        },
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>p</mi><mo>,</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
          }
         ]
        },
        {
         "mota": "testua",
         "html": "En la aproximación entre esas dos distribuciones hay que tener en cuenta que la binomial es discreta y la normal es continua."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/3e80675dcb77fdb8.svg",
         "zabalera": 433
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una máquina fabrica tornillos. De ellos, el 5 % tiene algún defecto. Se hacen cajas de 400 tornillos. Describe la variable &quot;tornillos defectuosos de una caja&quot;."
      },
      {
       "mota": "testua",
       "html": "Si sacamos un tornillo y miramos si tiene defecto, será una experiencia dicotómica y en ella: <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo></mrow></math>&quot;tornillo defectuoso&quot;, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi>A</mi><mo>′</mo></msup><mo>=</mo></mrow></math>&quot;el tornillo está bien&quot;, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><msup><mi>A</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "&quot;El número de tornillos defectuosos&quot; en cajas de 400 tornillos elegidos al azar es una distribución binomial siendo <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>400</mn></mrow></math> y <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>. Es decir, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>400</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Sus parámetros son estos: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>400</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>=</mo><mn>20</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><msqrt><mrow><mn>400</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></msqrt><mo>=</mo><mn>4</mn><mo>,</mo><mn>36</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>=</mo><mn>20</mn><mo>&gt;</mo><mn>5</mn></mrow></math>, la binomial se aproxima a la normal que tiene sus mismos parámetros:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izango da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>400</mn><mo>,</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>20</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>36</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "Distribución de las proporciones muestrales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En una población dada, la proporción de individuos que tienen una determinada característica es <math display=\"inline\"><mi>p</mi></math>. Tendremos en cuenta todas las muestras posibles de tamaño <math display=\"inline\"><mi>n</mi></math> que se pueden extraer de una población. En cada muestra habrá una determinada proporción de individuos con esa característica, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>. ¿Cómo se distribuyen todos los valores posibles de <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>? Veámoslo con un ejemplo."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El 15 % de los jóvenes de entre 18 y 25 años tiene miopía (este dato no es real). Hemos elegido al azar 40 jóvenes y vamos a estudiar qué proporción de miopes, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, hay en esa muestra."
      },
      {
       "mota": "testua",
       "html": "La probabilidad de que cada individuo de la muestra (todavía no hecha) sea miope es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como en la muestra hay <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>40</mn></mrow></math>, el número de miopes, <math display=\"inline\"><mi>x</mi></math>, seguirá una distribución binomial <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>40</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>=</mo><mn>40</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>=</mo><mn>6</mn></mrow></math> es mayor que 5, <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≈</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>p</mi><mo>,</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es. Por tanto, el <math display=\"inline\"><mi>x</mi></math>, el número de miopes que habrá en cada muestra, se aproxima a una distribución normal:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>x</mi><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> lagin bateko miope kopurua </mtext><mspace width=\"0.333em\"></mspace></mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> izango da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>40</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>;</mo><msqrt><mrow><mn>40</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>85</mn></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>;</mo><mn>2</mn><mo>,</mo><mn>26</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "La proporción de miopes en una muestra será <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mtext mathvariant=\"normal\">laginako miope kopurua</mtext><mn>40</mn></mfrac><mo>=</mo><mfrac><mi>x</mi><mn>40</mn></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por tanto, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> es <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>6</mn><mn>40</mn></mfrac><mo>;</mo><mn>2</mn><mo>,</mo><mfrac><mn>26</mn><mn>40</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>0565</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como hemos visto, la proporción de miopes en una muestra de tamaño 40 que aún no hemos recogido tiene una distribución normal de media <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math> y desviación típica <math display=\"inline\"><mrow><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>0565</mn></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Distribución de las proporciones muestrales.</strong> Si en una población la proporción de individuos que tienen una determinada característica <math display=\"inline\"><mi>C</mi></math> es <math display=\"inline\"><mi>p</mi></math>, la proporción de individuos que tienen esa característica dentro de la muestra de tamaño <math display=\"inline\"><mi>n</mi></math>, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, tendrá una distribución normal de media <math display=\"inline\"><mi>p</mi></math> y desviación típica <math display=\"inline\"><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt></math>."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>p</mi><mi>r</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>p</mi><mi>n</mi><mo>≥</mo><mn>5</mn><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> eta </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>q</mi><mi>n</mi><mo>≥</mo><mn>5</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para justificarlo, haremos el razonamiento del ejemplo de forma general."
    },
    {
     "mota": "testua",
     "html": "El número de individuos de la muestra que tienen la característica <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>C</mi></mrow></math> es <math display=\"inline\"><mi>…</mi></math>  <math display=\"inline\"><mi>x</mi></math> es <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>≥</mo><mn>5</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mi>q</mi><mo>≥</mo><mn>5</mn></mrow></math>, entonces <math display=\"inline\"><mi>…</mi></math>  <math display=\"inline\"><mi>x</mi></math> es <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mi>p</mi><mo>,</mo><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mi>C</mi></mrow></math> es la proporción de individuos de la muestra que tienen la característica."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mtext mathvariant=\"normal\">C ezaugarria duten indibiduoen kop.</mtext><mtext mathvariant=\"normal\">lagineko indibiduoen kop.</mtext></mfrac><mo>=</mo><mfrac><mi>x</mi><mi>n</mi></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "como, la distribución de <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> será como la de <math display=\"inline\"><mi>x</mi></math>, pero con los parámetros de media y desviación típica divididos por <math display=\"inline\"><mi>n</mi></math>. Por tanto:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mi>r</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>n</mi><mfrac><mi>p</mi><mi>n</mi></mfrac><mo>,</mo><mfrac><msqrt><mrow><mi>n</mi><mi>p</mi><mi>q</mi></mrow></msqrt><mi>n</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Una máquina fabrica tornillos. Sabemos que el 5 % tiene defecto. Hacemos cajas de 400 tornillos. <em>a)</em> ¿Cómo está distribuida <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, la proporción de tornillos defectuosos, en las cajas? <em>b)</em> Encuentra en qué intervalo está el 90 % de los tornillos defectuosos de las cajas. <em>c)</em> Encuentra en qué intervalo está el 99 % de los tornillos defectuosos de las cajas."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "El número total de tornillos que fabrica la máquina es la población."
      },
      {
       "mota": "testua",
       "html": "La proporción de tornillos defectuosos en esa población es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Cada caja es una muestra de 400 elementos: <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>400</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como hemos visto en la página anterior, la proporción de tornillos defectuosos de las cajas tiene distribución normal."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "Media <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>    Desviación típica <math display=\"inline\"><mrow><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><msqrt><mrow><mn>0</mn><mo>,</mo><mn>05</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>95</mn><mi>/</mi><mn>400</mn></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>011</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Una probabilidad del 90 % quiere decir: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El intervalo correspondiente es este: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>011</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>018</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>032</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>068</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Esto quiere decir que el 90 % de las cajas tiene entre 0,032 y 0,068 de tornillos defectuosos."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "El 99 % quiere decir: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>005</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>011</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>028</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El intervalo correspondiente es este: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>028</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>028</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>022</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>078</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Piensa que el 15 % de los jóvenes de entre 18 y 25 años es miope. <em>a)</em> ¿Cómo está distribuida la proporción de miopes, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, en muestras de 40 individuos? <em>b)</em> Encuentra el intervalo característico de las proporciones muestrales para el 80 %."
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math>; <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>40</mn></mrow></math>; media <math display=\"inline\"><mrow><mo>=</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>15</mn></mrow></math>; desviación típica <math display=\"inline\"><mrow><mo>=</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>0565</mn></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> es normal <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>0565</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "Calcularemos primero el intervalo crítico <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math> correspondiente al caso <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>."
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo>→</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "El valor crítico correspondiente al caso <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math> es <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "Por tanto, el intervalo es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>15</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>28</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>0565</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>078</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>222</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "Es decir, el 80 % de las muestras de 40 jóvenes de esa edad tiene una proporción de miopes entre 0,078 y 0,222."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/e6d62ac343159a4f.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ejercicios",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1</strong> Sabemos que si lanzamos un dado la proporción de veces que sale el número 5 es <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mover><mn>6</mn><mo accent=\"true\">¯</mo></mover></mrow></math>. Encuentra qué intervalo característico corresponde al 90 %, 95 % y 99 % del caso &quot;proporción de cincos&quot;, si hacemos tandas de 100 lanzamientos con el dado."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "10. Ejercicios y problemas resueltos",
   "blokeak": [
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[1   POBLACIÓN. MUESTRA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "En cada uno de los casos que mencionamos a continuación, ¿el conjunto que hemos estudiado es una población o una muestra?"
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Un fabricante de tornillos, para hacer un control de calidad, toma y analiza uno de cada 100 tornillos fabricados en un día."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "En algunos grandes almacenes, para estudiar el trabajo de un vendedor recién incorporado, se pide la opinión sobre ese vendedor a todos los clientes que ha tenido el primer día de trabajo."
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "En otros grandes almacenes, para estudiar el trabajo de los vendedores, se recoge la opinión de todos los clientes que salen por una puerta en un día."
        },
        {
         "mota": "testua",
         "html": "<em>d)</em>"
        },
        {
         "mota": "testua",
         "html": "En las elecciones municipales se cuentan todos los votos."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "La población es el conjunto de todos los tornillos que fabrica la máquina. El fabricante toma una muestra."
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "Como se pregunta a todos los clientes que ha tenido el vendedor, es una población."
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "Es una muestra, porque se pregunta a una parte de los clientes de ese día."
    },
    {
     "mota": "testua",
     "html": "<em>d)</em>"
    },
    {
     "mota": "testua",
     "html": "En elecciones, referéndums y similares se tiene en cuenta toda la población (todos los individuos que están en el censo y que tienen derecho a votar por tener la edad mínima)."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[2   POR QUÉ SE UTILIZAN MUESTRAS]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "En cada uno de los casos siguientes, explica por qué es imprescindible —o casi imprescindible— utilizar muestras."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "En un almacén hay 4 200 envases de vidrio. Se quiere medir su dureza y, para ello, se les aplica una presión cada vez mayor hasta que se rompen."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Para estudiar el tiempo de reacción de algunas sustancias, el experimentador las hace reaccionar 25 veces, tomando medidas en cada experimento."
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Para saber si los alumnos han entendido las explicaciones, el profesor hace preguntas a algunos."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "Como el proceso de medición es destructivo, es imprescindible utilizar la muestra y, además, habrá que usar la muestra más pequeña posible que le sirva para sacar conclusiones seguras."
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "En este caso, si todas las variables están controladas (la calidad de las sustancias que participan en la reacción, la pureza de las sustancias, la presión, la temperatura...), el resultado será siempre uno."
    },
    {
     "mota": "testua",
     "html": "Pero el control de las variables nunca es perfecto. Por tanto, cada experimento puede tener su resultado (aunque todos sean parecidos). La población es infinita: la formarían todos los experimentos que se pueden hacer. Por tanto, tenemos que usar la muestra."
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "Las preguntas que el profesor hace en el aula para controlar lo que saben los alumnos son la muestra. También en los exámenes solo obtenemos una muestra de lo que saben los alumnos; es imposible preguntar absolutamente todo."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[3   MUESTREO]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Tenemos el censo de electores de un pueblo. Aparecen 27 800 electores. Queremos una muestra de 200 individuos."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "¿Cómo hacer el muestreo aleatorio sistemático?"
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "¿Cómo hacer el muestreo aleatorio simple?"
        },
        {
         "mota": "testua",
         "html": "Usa la función RAN\\# de la calculadora."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Muestreo sistemático</strong>"
    },
    {
     "mota": "testua",
     "html": "Coeficiente de elevación: <math display=\"inline\"><mrow><mi>h</mi><mo>=</mo><mfrac><mn>27800</mn><mn>200</mn></mfrac><mo>=</mo><mn>139</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Eso quiere decir que tenemos que elegir uno de los 139 individuos. Para saber por dónde empezar, elegiremos al azar un número entre 1 y 139. Esta operación podemos hacerla usando la función RAN\\# de la calculadora:"
    },
    {
     "mota": "testua",
     "html": "Obtener el primer elemento: RAN\\#  <math display=\"inline\"><mi>×</mi></math> 139 <math display=\"inline\"><mi>+</mi></math> 1 <math display=\"inline\"><mo>=</mo></math> y tomaremos la parte entera."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo: RAN\\#  <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>534</mn><mo>×</mo><mn>139</mn><mo>+</mo><mn>1</mn><mo>=</mo><mn>75</mn><mo>,</mo><mn>782</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El primer elemento será el 75.º de la lista."
    },
    {
     "mota": "testua",
     "html": "Y los siguientes: <math display=\"inline\"><mrow><mn>75</mn><mo>+</mo><mn>139</mn><mo>=</mo><mn>214</mn></mrow></math>, <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mn>214</mn><mo>+</mo><mn>139</mn><mo>=</mo><mn>353</mn></mrow></math>, <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mn>353</mn><mo>+</mo><mn>139</mn><mo>=</mo><mn>492</mn></mrow></math>, <math display=\"inline\"><mrow><mspace width=\"1.0em\"></mspace><mi>…</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Muestreo aleatorio simple</strong>"
    },
    {
     "mota": "testua",
     "html": "RAN\\#"
    },
    {
     "mota": "testua",
     "html": "Mediante la secuencia <math display=\"inline\"><mi>×</mi></math> 27 800 <math display=\"inline\"><mi>+</mi></math> 1 <math display=\"inline\"><mo>=</mo></math>, elegiremos al azar un individuo del conjunto inicial. Esa secuencia hay que hacerla 200 veces para seleccionar todos los elementos de la muestra. Si algún número aparece dos veces, habrá que quitar uno y obtener otro en su lugar."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[4   MUESTREO]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Piensa que tenemos esta información sobre la población anterior: el 20 % tiene entre 18 y 25 años; el 36 % entre 36 y 40; el 45 % es mayor de 40 años."
        },
        {
         "mota": "testua",
         "html": "¿Cómo obtendrías la muestra de 200 individuos utilizando estratos proporcionales a esos porcentajes?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "auto minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>%</mi><mn>20</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>40</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>%</mi><mn>35</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>70</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>%</mi><mn>45</mn><mo>⋅</mo><mn>200</mn><mo>=</mo><mn>90</mn></mrow></math>"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Tomaremos al azar 40 individuos entre los de 18 a 25 años; 70 individuos entre los de 26 a 40 y, por último, 90 entre los mayores de 40 años."
        },
        {
         "mota": "testua",
         "html": "Para ello, en el censo deben aparecer las edades de los individuos."
        }
       ]
      }
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[5   INTERVALOS CARACTERÍSTICOS]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "La distribución normal de la duración media de unas determinadas pilas eléctricas tiene media 55 horas y desviación típica 6 horas. Encuentra cuáles son los intervalos característicos de las probabilidades <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>90</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math>."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn><mo>→</mo><mi>p</mi><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn><mo>→</mo><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>125</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "En una distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>125</mn><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>875</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>15</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "En una <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el intervalo característico correspondiente a la probabilidad <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn></mrow></math> es este <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mn>1</mn><mo>,</mo><mn>15</mn><mo>;</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/3760e986b9df3fff.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En una <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>55</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el intervalo característico correspondiente al caso <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>75</mn></mrow></math> es este:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>55</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo>⋅</mo><mn>6</mn><mo>;</mo><mn>55</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>15</mn><mo>⋅</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>55</mn><mo>−</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo>;</mo><mn>55</mn><mo>+</mo><mn>6</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>48</mn><mo>,</mo><mn>1</mn><mo>;</mo><mn>61</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El 75 % de las pilas dura más de 48,1 horas y menos de 61,9 horas."
    },
    {
     "mota": "testua",
     "html": "Para los casos <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math> debemos tener en cuenta que sus valores críticos <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> son conocidos. Los valores específicos son estos: 1,645; 1,96; 2,575. Por tanto:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "PROBABILITATEA",
         "BITARTE KARAKTERISTIKOA"
        ],
        [
         "0,9",
         "(45,13; 64,87)"
        ],
        [
         "0,95",
         "(43,24; 66,76)"
        ],
        [
         "0,99",
         "(39,55; 70,45)"
        ]
       ]
      }
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[6   DISTRIBUCIÓN DE LAS MEDIAS MUESTRALES]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "El cociente intelectual (C.I.) de los alumnos de un centro está distribuido <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>110</mn><mo>,</mo><mn>15</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Queremos obtener una muestra aleatoria de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>25</mn></mrow></math>."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "¿Cuál es la distribución de las medias de las muestras que se pueden extraer?"
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "¿Qué probabilidad hay de que el C.I. de los 25 alumnos de la muestra obtenida sea mayor que 115?"
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Da los intervalos característicos de las medias muestrales correspondientes a una probabilidad <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<em>a)</em>"
    },
    {
     "mota": "testua",
     "html": "Como la población original es normal, las medias de las muestras de tamaño <math display=\"inline\"><mi>n</mi></math> están distribuidas <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mi>/</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, aunque <math display=\"inline\"><mi>n</mi></math> sea menor que 30."
    },
    {
     "mota": "testua",
     "html": "En nuestro caso, la media del C.I. de los componentes de la muestra de tamaño 25 estará distribuida según una distribución normal de media 110 y desviación típica <math display=\"inline\"><mrow><mfrac><mn>15</mn><msqrt><mn>25</mn></msqrt></mfrac><mo>=</mo><mn>3</mn></mrow></math>. Es decir, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> es <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>110</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/e40db696cb898d40.svg",
     "zabalera": 547
    },
    {
     "mota": "testua",
     "html": "<em>b)</em>"
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, tal como hemos dicho, <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>110</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>&gt;</mo><mn>115</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mfrac><mrow><mn>115</mn><mo>−</mo><mn>110</mn></mrow><mn>3</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>67</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>67</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9525</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0475</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, solo el 4,75 % de las muestras de 25 alumnos tiene un C.I. superior a 115."
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "Al caso <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> le corresponde el valor crítico <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>. Por tanto, el intervalo característico de las medias muestrales, correspondiente a esta probabilidad, es:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>=</mo><mn>110</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>3</mn><mo>=</mo><mn>110</mn><mo>±</mo><mn>5</mn><mo>,</mo><mn>88</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>104</mn><mo>,</mo><mn>12</mn><mo>;</mo><mn>115</mn><mo>,</mo><mn>88</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[7   DISTRIBUCIÓN DE LAS MEDIAS MUESTRALES]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Hemos lanzado 36 dados y hemos calculado la media de sus resultados, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>. Si repetimos esa prueba una y otra vez:"
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "¿Cuál será la distribución de las medias, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>?"
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "¿Qué probabilidad hay de que la media de un lanzamiento sea mayor que 4?"
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Encuentra el intervalo centrado en la media correspondiente al 99 % de las medias de los lanzamientos."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Al lanzar un dado, la media de las puntuaciones es <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow></math> y la desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>71</mn></mrow></math>."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/04eae5c999e5015a.svg",
         "zabalera": 193
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Hemos considerado muestras de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>36</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Como <math display=\"inline\"><mrow><mi>n</mi><mo>&gt;</mo><mn>30</mn></mrow></math>, sus medias, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, estarán distribuidas así:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>;</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>71</mn></mrow><msqrt><mn>36</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>285</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>&gt;</mo><mn>4</mn><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mfrac><mrow><mn>4</mn><mo>−</mo><mn>3</mn><mo>,</mo><mn>5</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>285</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "<math display=\"inline\"><mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>75</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9599</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0401</mn></mrow></math>"
        },
        {
         "mota": "testua",
         "html": "Solo en el 4 % de los casos la media de las puntuaciones de los 36 dados es superior a 4."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/e802954dcf9b2914.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>c)</em>"
    },
    {
     "mota": "testua",
     "html": "Al caso <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn></mrow></math> le corresponde el valor crítico <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>. Por tanto, el intervalo característico de las medias muestrales correspondiente a esa probabilidad es este:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>μ</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>±</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>285</mn><mo>=</mo><mn>3</mn><mo>,</mo><mn>5</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>73</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>77</mn><mo>;</mo><mn>4</mn><mo>,</mo><mn>23</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El 99 % de las medias de 36 dados estará entre 2,77 y 4,23."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[8   DISTRIBUCIÓN DE LAS PROPORCIONES MUESTRALES]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Sabemos que al lanzar un dado bueno la proporción de veces que sale un cinco es <math display=\"inline\"><mrow><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>. Lanzamos 100 dados y calcularemos la proporción de &quot;cincos&quot;, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>. Si repetimos ese ejercicio una y otra vez, ¿cómo se distribuirá el parámetro <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>?"
        },
        {
         "mota": "testua",
         "html": "Encuentra el intervalo característico de <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> correspondiente a la probabilidad <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math>."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> es una distribución normal <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>, <math display=\"inline\"><mrow><mi>q</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>833</mn></mrow></math>, <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math> son."
    },
    {
     "mota": "testua",
     "html": "Es decir, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> es <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>037</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Intervalo característico:"
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9</mn></mrow></math> es <math display=\"inline\"><mrow><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math> y el intervalo es este:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>p</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>037</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>061</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>106</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>228</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "10. Ejercicios y problemas propuestos",
   "blokeak": [
    {
     "mota": "azpititulua",
     "testua": "Ejercicios para practicar"
    },
    {
     "mota": "ariketa",
     "izena": "1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En cada uno de los casos que mencionamos a continuación, ¿el conjunto es una población o una muestra? Explica por qué."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Un granjero tiene 87 gallinas. Para probar cómo es un alimento nuevo, las pesa antes de empezar y después de los 30 días que dura el tratamiento."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Un granjero hace la prueba de cómo es el alimento nuevo con las 100 gallinas que tiene."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "2",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un fabricante de elásticos quiere estudiar su resistencia a la rotura. Para ello, los estira hasta que se rompen y anota cuánto se han estirado hasta romperse."
      },
      {
       "mota": "testua",
       "html": "¿Debe hacer esa comprobación con toda la población o tendrá que utilizar forzosamente la muestra? ¿Por qué?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "3",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Solo con uno de los procedimientos siguientes obtendremos una muestra representativa. Di cuál es y, en los demás, analiza el sesgo y su importancia."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Para saber cuál es la frecuencia relativa de las letras, hemos tomado al azar 20 libros de la biblioteca de un centro y contamos cuántas veces aparece cada letra en la página 20 de los libros elegidos."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Algunos grandes almacenes, para saber cómo es el trato que se da a los clientes, eligen al azar algunos clientes entre los que tienen tarjeta de compra: 100 personas entre quienes han gastado menos de 100 000 pta el último año, otras 100 entre quienes han gastado entre 100 000 y 500 000 pta, y otras 100 entre quienes han gastado más de 500 000 pta."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Para saber cuántas personas hay de media por cartilla en un Centro de Salud de la Seguridad Social, los médicos recogen los datos de las cartillas de las personas que van a consulta durante todo un mes."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La información que nos da una encuesta será útil, en gran medida, si la encuesta está bien hecha."
      },
      {
       "mota": "testua",
       "html": "Algunas características que deben tener las preguntas son estas:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Ser cortas y estar escritas en lenguaje sencillo.",
        "Deben encaminar a respuestas sin dudas, equilibradas.",
        "No deben exigir esfuerzos de memoria.",
        "No deben crear prejuicios a los encuestados."
       ]
      },
      {
       "mota": "testua",
       "html": "Analiza si las preguntas siguientes son adecuadas para hacerlas en una encuesta y corrige los errores que veas:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Cuánto tiempo dedicas a estudiar cada día? Mucho     Poco     Depende del día "
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Cuántas veces has ido al cine este año?"
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Qué opinión tienes del trabajo del alcalde? Muy buena     Buena     Me da igual "
      },
      {
       "mota": "testua",
       "html": "<em>d)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Pierden el tiempo tus hijos delante de la televisión? Sí     No "
      },
      {
       "mota": "testua",
       "html": "<em>e)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Qué crees que supondría la instalación de una planta de reciclaje para el desempleo y para las condiciones de salud de nuestra ciudad?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "5",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Elige una muestra de 20 en un conjunto de 500 personas:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Mediante muestreo aleatorio sistemático."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Mediante muestreo aleatorio simple."
      },
      {
       "mota": "testua",
       "html": "Usa la tecla RAN\\# de la calculadora."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "6",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un grupo de 1 000 conductores:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "50 conducen taxi.",
        "75 conducen camión.",
        "25 conducen autobús."
       ]
      },
      {
       "mota": "testua",
       "html": "Los demás son conductores de vehículos corrientes y están distribuidos así:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "250 tienen más de 20 años de experiencia.",
        "425 tienen entre 5 y 20 años de experiencia.",
        "175 tienen entre 0 y 5 años de experiencia."
       ]
      },
      {
       "mota": "testua",
       "html": "Si queremos hacer una muestra de 40 individuos mediante muestreo aleatorio estratificado proporcional, ¿cuántos debemos elegir de cada uno de los seis estratos?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "7",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En distribuciones normales de las que se dan los parámetros, encuentra el intervalo característico en los casos que se mencionan a continuación:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<em>a)</em>",
           "<em>b)</em>",
           "<em>c)</em>",
           "<em>d)</em>",
           "<em>e)</em>"
          ],
          [
           "BATEZ BEST., <math display=\"inline\"><mi>μ</mi></math>",
           "0",
           "0",
           "0",
           "0",
           "112"
          ],
          [
           "DESB. TIPIKOA, <math display=\"inline\"><mi>σ</mi></math>",
           "1",
           "1",
           "1",
           "1",
           "15"
          ],
          [
           "PROBABILITATEA",
           "95",
           "99",
           "90",
           "80",
           "95"
          ]
         ]
        }
       ]
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<em>f)</em>",
           "<em>g)</em>",
           "<em>h)</em>",
           "<em>i)</em>"
          ],
          [
           "BATEZ BEST., <math display=\"inline\"><mi>μ</mi></math>",
           "3 512",
           "3 512",
           "3 512",
           "3 512"
          ],
          [
           "DESB. TIPIKOA, <math display=\"inline\"><mi>σ</mi></math>",
           "550",
           "550",
           "550",
           "550"
          ],
          [
           "PROBABILITATEA",
           "99",
           "95",
           "90",
           "80"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "8",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Di cómo están distribuidas las medias muestrales en los casos siguientes:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<em>a)</em>",
           "<em>b)</em>",
           "<em>c)</em>"
          ],
          [
           "BANAKETA",
           "Normala",
           "Ezezaguna",
           "Normala"
          ],
          [
           "BATEZ BEST., <math display=\"inline\"><mi>μ</mi></math>",
           "20",
           "20",
           "3,75"
          ],
          [
           "DESB. TIPIKOA, <math display=\"inline\"><mi>σ</mi></math>",
           "4",
           "4",
           "1,2"
          ],
          [
           "LAGINAREN TAM., <math display=\"inline\"><mi>n</mi></math>",
           "16",
           "100",
           "4"
          ]
         ]
        }
       ]
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<em>d)</em>",
           "<em>e)</em>",
           "<em>f)</em>",
           "<em>g)</em>"
          ],
          [
           "BANAKETA",
           "Ezezag.",
           "Norm.",
           "Ezezag.",
           "Ezezag."
          ],
          [
           "BATEZ BEST., <math display=\"inline\"><mi>μ</mi></math>",
           "3,75",
           "112",
           "112",
           "3 512"
          ],
          [
           "DESB. TIPIKOA, <math display=\"inline\"><mi>σ</mi></math>",
           "1,2",
           "15",
           "15",
           "550"
          ],
          [
           "LAGINAREN TAM., <math display=\"inline\"><mi>n</mi></math>",
           "50",
           "100",
           "100",
           "40"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "9",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encuentra el intervalo característico correspondiente a la probabilidad de cada uno de los casos de abajo, siendo las medias muestrales las del ejercicio anterior:"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "%90"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "%95"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>c)</em>"
          },
          {
           "mota": "testua",
           "html": "%99"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>d)</em>"
          },
          {
           "mota": "testua",
           "html": "%90"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>e)</em>"
          },
          {
           "mota": "testua",
           "html": "%95"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>f)</em>"
          },
          {
           "mota": "testua",
           "html": "%80"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>g)</em>"
          },
          {
           "mota": "testua",
           "html": "%99"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "10",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Di cómo se distribuyen las proporciones muestrales, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, en el caso de población y muestra que se mencionan a continuación:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<em>a)</em>",
           "<em>b)</em>",
           "<em>c)</em>",
           "<em>d)</em>",
           "<em>e)</em>",
           "<em>f)</em>"
          ],
          [
           "PROPORTZIOA, <math display=\"inline\"><msub><mi>p</mi><mi>i</mi></msub></math> POPULAZIOAN",
           "0,5",
           "0,6",
           "0,8",
           "0,1",
           "0,05",
           "0,15"
          ],
          [
           "LAGINAREN TAMAINA, <math display=\"inline\"><mi>n</mi></math>",
           "10",
           "20",
           "30",
           "50",
           "100",
           "100"
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "11",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Encuentra los intervalos característicos de las proporciones muestrales del ejercicio anterior, en las probabilidades que mencionamos a continuación:"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>a)</em>"
          },
          {
           "mota": "testua",
           "html": "%90"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>b)</em>"
          },
          {
           "mota": "testua",
           "html": "%95"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>c)</em>"
          },
          {
           "mota": "testua",
           "html": "%99"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>d)</em>"
          },
          {
           "mota": "testua",
           "html": "%95"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>e)</em>"
          },
          {
           "mota": "testua",
           "html": "%99"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<em>f)</em>"
          },
          {
           "mota": "testua",
           "html": "%80"
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Problemas para resolver</strong>"
    },
    {
     "mota": "ariketa",
     "izena": "12",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las notas de un examen tienen distribución normal, con media <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math> y desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>4</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Encuentra qué probabilidad hay de que la nota de un alumno elegido al azar:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "sea superior a 7."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "sea inferior a 5."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "esté entre 5 y 7."
      },
      {
       "mota": "testua",
       "html": "Encuentra qué probabilidad hay de que la media de las notas de 16 alumnos elegidos al azar:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "sea superior a 7."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "sea inferior a 5."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "esté entre 5 y 7."
      },
      {
       "mota": "testua",
       "html": "<em>g)</em>"
      },
      {
       "mota": "testua",
       "html": "Encuentra cuánto es <math display=\"inline\"><mi>k</mi></math>, para que el intervalo siguiente <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>−</mo><mi>k</mi><mo>;</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>+</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> contenga el 95 % de las notas."
      },
      {
       "mota": "testua",
       "html": "<em>h)</em>"
      },
      {
       "mota": "testua",
       "html": "Encuentra cuánto es <math display=\"inline\"><mi>b</mi></math>, para que el intervalo siguiente <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>−</mo><mi>b</mi><mo>;</mo><mn>5</mn><mo>,</mo><mn>3</mn><mo>+</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> contenga el 95 % de las medias de muestras de 16 individuos."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "13",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una bolsa hemos mezclado alubias blancas y rojas según esta relación: 14 alubias blancas por una roja."
      },
      {
       "mota": "testua",
       "html": "Tomamos un puñado de 100 alubias."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Qué probabilidad hay de que la proporción de alubias rojas esté entre 0,05 y 0,1?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Encuentra en qué intervalo estará el 99 % de las proporciones de los muestreos de tamaño 100."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "14",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se quiere estudiar qué les gusta hacer en su tiempo libre a los vecinos de un barrio. Para ello, se encuestará a 100 individuos elegidos al azar."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Di qué procedimiento será el más adecuado para hacer la elección: muestreo con reemplazamiento o sin reemplazamiento. ¿Por qué?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Como las aficiones también cambian con la edad y en el barrio hay 2 500 niños, 7 000 adultos y 500 ancianos, han decidido hacer la muestra mediante muestreo estratificado."
      },
      {
       "mota": "testua",
       "html": "<em>b.1.)</em> Define los estratos."
      },
      {
       "mota": "testua",
       "html": "<em>b.2.)</em> Di cuál es el tamaño de muestreo correspondiente a cada estrato."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "15",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sabemos que el cociente intelectual de los alumnos de una universidad se distribuye según la ley normal de media 100 y varianza 729."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Encuentra qué probabilidad hay de que una muestra de 81 alumnos tenga un cociente intelectual inferior a 109."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Encuentra qué probabilidad hay de que una muestra de 36 alumnos tenga un cociente intelectual superior a 109."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "16",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El tiempo, en minutos, que tienen que esperar los enfermos en el servicio de urgencias es <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>14</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> normal."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Cómo está distribuido el tiempo de espera medio de 16 enfermos?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "En medio día han atendido a 16 enfermos. ¿Qué probabilidad hay de que la media del tiempo de espera de esos enfermos esté entre 10 y 15 minutos?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "17",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El 42 % de los habitantes de un pueblo está en contra del trabajo del alcalde y los demás a favor. Si tomamos una muestra de 64 individuos, ¿qué probabilidad hay de que los que están en contra sean más?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "18",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La probabilidad de que un recién nacido sea niño es 0,515. En el hospital han nacido 184 niños en una semana. ¿Qué probabilidad hay de que haya 100 niños o más?"
      },
      {
       "mota": "testua",
       "html": "Encuentra el intervalo característico correspondiente al 95 % de la proporción de niños, en muestras de 184 niños."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "19",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las alturas de los chicos de una ciudad (entre 18 y 25 años) tienen distribución <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mi>σ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Sabemos que el 90 % de las medias de muestras de 81 jóvenes está en el intervalo característico <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>173</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>175</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Encuentra <math display=\"inline\"><mi>μ</mi></math> y <math display=\"inline\"><mi>σ</mi></math>."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "20",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sabemos que, al lanzar al suelo 100 chinchetas de un tipo determinado, en el 95 % de los casos la proporción de las que quedan con la punta hacia arriba está en el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1216</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>2784</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Calcula la probabilidad <math display=\"inline\"><mi>p</mi></math> de que una de esas chinchetas quede hacia arriba y comprueba que la amplitud del intervalo dado es correcta."
      }
     ]
    }
   ]
  },
  {
   "id": "a13",
   "maila": 1,
   "izenburua": "Inferencia estadística",
   "blokeak": []
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "Gaian trebatzeko, pentsatu y ebatzi",
   "blokeak": [
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Entre lo que hemos aprendido en el tema anterior están estas cosas:"
     ]
    },
    {
     "mota": "testua",
     "html": "Conocemos de una población <math display=\"inline\"><mi>μ</mi></math>, la media, y <math display=\"inline\"><mi>σ</mi></math>, la desviación típica. A partir de esos dos datos, obtenemos cómo están distribuidas las medias de las muestras de tamaño <math display=\"inline\"><mi>n</mi></math>. Y, por tanto, somos capaces de encontrar qué probabilidad hay de que una de esas muestras cumpla unas condiciones determinadas."
    },
    {
     "mota": "testua",
     "html": "Es decir, conociendo algunos datos de la población, sacamos como conclusión qué comportamiento tendrán las muestras."
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En este tema aprenderemos a dar el paso contrario, que es lo que nos interesa: obtendremos una muestra determinada y, a partir de sus parámetros, podremos <strong>inferir</strong> el valor de algunos parámetros de la población."
     ]
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, sacaremos conclusiones de este tipo:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "La altura media de los soldados de un año estará entre 174,3 y 175,1 cm. El &quot;nivel de certeza&quot; de ese dato es del 90 %.",
      "El porcentaje de votos que tendrá el partido <math display=\"inline\"><mi>X</mi></math> en las próximas elecciones estará entre el 38,5 % y el 40,2 %. El &quot;nivel de certeza&quot; de ese dato es del 95 %."
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, cuando se valora un parámetro de la población a partir de una muestra, la <strong>estimación</strong> se hace mediante un intervalo. Cuanto más amplio sea el intervalo, mayor será el error que podemos cometer en la estimación. Y, además, la estimación no será segura si no existe un determinado nivel de certeza (90 %, 95 %...), es decir, lo que llamamos <strong>nivel de confianza</strong>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, hay tres variables:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "<strong>Tamaño de la muestra:</strong> a partir de ella se hace la inferencia.",
      "<strong>Margen de error:</strong> es la mitad de la longitud del intervalo que se utiliza para hacer la estimación.",
      "<strong>Nivel de confianza:</strong> nos indica con qué &quot;nivel de certeza&quot; se ha hecho la estimación."
     ]
    },
    {
     "mota": "testua",
     "html": "Para ver cómo se relacionan entre sí esas tres variables, resolveremos los problemas siguientes:"
    },
    {
     "mota": "ariketa",
     "izena": "1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con una muestra de 500 individuos hemos estimado que la altura media de los soldados de un año está entre 174,3 y 175,1 cm, con un nivel de confianza del 90 %."
      },
      {
       "mota": "testua",
       "html": "Utilizando el sentido común, responde a estas preguntas:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Si reducimos el tamaño de la muestra y mantenemos el nivel de confianza, la longitud del intervalo... ¿aumentará? ¿Será la misma? ¿Disminuirá?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Si aumentamos el tamaño de la muestra y mantenemos la longitud del intervalo, el nivel de confianza... ¿aumentará? ¿Será el mismo? ¿Disminuirá?"
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Si mantenemos el tamaño de la muestra y reducimos la longitud del intervalo, el nivel de confianza... ¿aumentará? ¿Será el mismo? ¿Disminuirá?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ten en cuenta los ejercicios siguientes:"
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Hemos lanzado una moneda 10 veces y hemos obtenido 7 &quot;cruces&quot;."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "Hemos lanzado una moneda 100 veces y hemos obtenido 70 &quot;cruces&quot;."
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "Hemos lanzado una moneda 1 000 veces y hemos obtenido 700 &quot;cruces&quot;."
      },
      {
       "mota": "testua",
       "html": "¿Podemos sacar como conclusión de alguno de los ejercicios que la moneda tiene algún defecto? ¿Con cuál obtendremos la conclusión más segura? (Responde por intuición)."
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "PANORAMA DEL TEMA",
     "blokeak": []
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "Estimación de la media de una población",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La media de una población es conocida y queremos saber cuál es. Para ello, utilizaremos lo que hemos aprendido en el tema anterior. Recuerda:"
    },
    {
     "mota": "testua",
     "html": "Dada una población (<math display=\"inline\"><mi>μ</mi></math>, con media y <math display=\"inline\"><mi>σ</mi></math> desviación típica), sabemos que las medias de las muestras de tamaño <math display=\"inline\"><mi>n</mi></math> están distribuidas normalmente: <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> es <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto, el <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> de las medias muestrales estará en el intervalo <math display=\"inline\"><mrow><mi>μ</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mi>μ</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
          }
         ]
        },
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">⟦</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/9dc5ca7745f3c8bc.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Es decir, el 100 % de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> estará a una distancia de <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> menor que <math display=\"inline\"><mi>μ</mi></math> de <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Aunque <math display=\"inline\"><mi>μ</mi></math> sea desconocida, podemos decir con seguridad que la probabilidad de que la media <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> de una muestra elegida al azar esté a una distancia de la media menor que <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> es <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. Así podremos estimar el valor de la desconocida <math display=\"inline\"><mi>μ</mi></math> a partir de la media <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> de una muestra mediante el siguiente <strong>intervalo de confianza</strong>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Observaciones</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En ese razonamiento anterior hay que añadir que <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math> es, o que la población original es normal, porque solo así podemos asegurar que las <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> medias tienen distribución normal."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Una vez extraída la muestra, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> su media estará en el intervalo <math display=\"inline\"><mrow><mi>μ</mi><mo>±</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> o no. Pero no podemos decir qué probabilidad hay de que ocurra una cosa, aunque <math display=\"inline\"><mi>μ</mi></math> sea desconocida y nosotros no sepamos si ocurre. Por eso, en lugar de hablar de probabilidad, diremos que el <strong>nivel de confianza</strong> de que <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> esté en ese intervalo es <math display=\"inline\"><mi>μ</mi></math>."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Si la desviación típica <math display=\"inline\"><mi>σ</mi></math> de la población es desconocida, hay que estimarla a partir de la muestra. La manera más correcta de hacer esa estimación es utilizar el parámetro muestral <math display=\"inline\"><mrow><msub><mi>s</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></msub><mo>=</mo><msqrt><mfrac><mrow><mo>∑</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac></msqrt></mrow></math> (no explicaremos por qué ese parámetro es el más adecuado para estimar <math display=\"inline\"><mi>σ</mi></math>). Pero para valores bastante grandes de <math display=\"inline\"><mi>n</mi></math>, se puede utilizar <math display=\"inline\"><mrow><msub><mi>s</mi><mi>n</mi></msub><mo>=</mo><mi>s</mi></mrow></math>, la desviación típica de la muestra. El intervalo de confianza para <math display=\"inline\"><mi>μ</mi></math> sería, por tanto, este:"
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "INTERVALO DE CONFIANZA PARA LA MEDIA"
    },
    {
     "mota": "testua",
     "html": "Recordaremos brevemente los razonamientos anteriores:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<strong>GOGOETA TEORIKOA</strong>"
        ],
        [
         "<strong>ADIBIDE GAINEKO GOGOETA</strong>"
        ],
        [
         "  Ez dakigu zein den populazio baten <math display=\"inline\"><mi>μ</mi></math>, baina <math display=\"inline\"><mi>σ</mi></math> bai. <math display=\"inline\"><mi>μ</mi></math> estimatu nahi dugu aterako dugun <math display=\"inline\"><mi>n</mi></math> tamainako lagin batetik abiatuta.  "
        ],
        [
         "  Milaka ikaslek osatzen duten populazioak historia gaiari buruz zer dakien baloratu nahi dugu. Badakigu <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow></math> dela. <math display=\"inline\"><mi>μ</mi></math> estimatuko dugu 100 ikasleri proba txiki bat eginez.  "
        ],
        [
         "  Badakigu <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>-en banaketa <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>,</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> dela.  "
        ],
        [
         "  <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>-en banaketa da: <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>;</mo><mfrac><mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow><msqrt><mn>100</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>;</mo><mn>0</mn><mo>,</mo><mn>23</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>  "
        ],
        [
         "  Beraz, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> probabilitateari dagokion <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>-rentzat bitarte karakteristiko bat lor dezakegu   <span> <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"1.0em\"></mspace><mi>μ</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>   <math display=\"block\"><mo>↓</mo></math>   <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">⟦</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>   <math display=\"block\"><mo>↓</mo></math>   <math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>μ</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> </span>  "
        ],
        [
         "  <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> hartzen badugu, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><msub><mi>z</mi><mrow><mn>0</mn><mo>,</mo><mn>025</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math> da.   Beraz, hau lortuko dugu:   <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>23</mn><mo>;</mo><mi>μ</mi><mo>+</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>23</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>   Hau da, <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>μ</mi><mo>−</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo>;</mo><mi>μ</mi><mo>+</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>   <span class=\"j-iz\"><img class=\"irudi-l\" src=\"../media/irudiak/eaf2b35442c6a2ca.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
        ],
        [
         "  Horrela, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> bakoitzarekin bitarte bat lortzen dugu <math display=\"inline\"><mi>μ</mi></math>-rentzat.  "
        ],
        [
         "  <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">⟦</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>μ</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>   <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>μ</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo>;</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>  "
        ],
        [
         "  Lagin bakoitzarentzat bitarte hau zehazten badugu,   <span><math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></span>   kasuen <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> <math display=\"inline\"><mi>μ</mi></math>-ren balioa bitartearen barruan egongo da.  "
        ],
        [
         "  Lagin bakoitzerako bitarte hau ezartzen badugu,   <math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>   kasuen %95ean <math display=\"inline\"><mi>μ</mi></math>-ren balioa bitartearen barruan egongo da.  "
        ],
        [
         "  Lagina atera ondoren, ezin dugu hitz egin <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> bitarte batean edo bestean egoteko probabilitateaz. Egongo da edo ez baina, guk ez dakigunez, esango dugu <math display=\"inline\"><mi>μ</mi></math> beheko bitartean egoteko <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>eko <strong>konfiantza maila</strong> dugula   <span><math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></span>  "
        ],
        [
         "  Probatxoa 100 ikasleri egin ondoren, lortu dugun batez bestekoa <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>6</mn><mo>,</mo><mn>32</mn></mrow></math> izan da.   Populazio osoak historiari buruz dakienaren batez bestekoa <math display=\"inline\"><mi>μ</mi></math> ondoko bitartean egoteko, %95eko konfiantza maila dugu.   <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>6</mn><mo>,</mo><mn>32</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>6</mn><mo>,</mo><mn>32</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>   Hau da, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>5</mn><mo>,</mo><mn>87</mn><mo>;</mo><mn>6</mn><mo>,</mo><mn>77</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> izango da <math display=\"inline\"><mi>μ</mi></math>-ren konfiantza bitarte bat %95ean. Horrek esan nahi du 100 ikasleko laginetan %95ean, bitarte horren barruan izango dela <math display=\"inline\"><mi>μ</mi></math>, eta gainerako %5ean kanpoan izango dela.  "
        ]
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Intervalo de confianza <math display=\"inline\"><mi>μ</mi></math> para la media</strong>"
      },
      {
       "mota": "testua",
       "html": "Si queremos estimar <math display=\"inline\"><mi>μ</mi></math> mediante una muestra de tamaño <math display=\"inline\"><mi>n</mi></math> con nivel de confianza <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>, se utiliza el siguiente intervalo de confianza:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Si <math display=\"inline\"><mi>σ</mi></math> es conocida, el INTERVALO DE CONFIANZA es: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
       ]
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Si <math display=\"inline\"><mi>σ</mi></math> es desconocida, se sustituye por la desviación típica de la muestra, <math display=\"inline\"><mi>s</mi></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "El INTERVALO DE CONFIANZA es: <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Sabemos cuál es la desviación típica de una variable estadística, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>8</mn></mrow></math>; pero no sabemos cuál es la media, <math display=\"inline\"><mi>μ</mi></math>. Para estimarla tomaremos una muestra de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>60</mn></mrow></math> y calcularemos su media."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Supongamos que <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>37</mn></mrow></math> es."
      },
      {
       "mota": "testua",
       "html": "El radio del intervalo es: <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mn>8</mn><msqrt><mn>60</mn></msqrt></mfrac><mo>≈</mo><mn>2</mn><mo>,</mo><mn>66</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El intervalo que buscamos es: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>37</mn><mo>−</mo><mn>2</mn><mo>,</mo><mn>66</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>37</mn><mo>+</mo><mn>2</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>34</mn><mo>,</mo><mn>34</mn><mo>;</mo><mn>39</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Es decir, tenemos una confianza del 99 % de que <math display=\"inline\"><mi>μ</mi></math>, la media, estará en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>34</mn><mo>,</mo><mn>34</mn><mo>;</mo><mn>39</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Para estimar la media de los resultados que obtendrán los alumnos de 4.º de ESO de una determinada comunidad autónoma al resolver un test, se hace ese test a 400 alumnos elegidos al azar."
      },
      {
       "mota": "testua",
       "html": "Los resultados obtenidos están recogidos en la tabla de al lado."
      },
      {
       "mota": "testua",
       "html": "A partir de esos resultados, estima con un nivel de confianza del 95 % el valor de la media de la población."
      },
      {
       "mota": "sarea",
       "zutabeak": "auto minmax(0,1fr)",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "zentratua",
           "blokeak": [
            {
             "mota": "taula",
             "goiburua": [],
             "lerroak": [
              [
               "<math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math>",
               "<math display=\"inline\"><msub><mi>f</mi><mi>i</mi></msub></math>"
              ],
              [
               "1",
               "24"
              ],
              [
               "2",
               "80"
              ],
              [
               "3",
               "132"
              ],
              [
               "4",
               "101"
              ],
              [
               "5",
               "63"
              ]
             ]
            }
           ]
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "Los parámetros estadísticos correspondientes a la tabla anterior son estos: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>3</mn><mo>,</mo><mn>25</mn></mrow></math>; <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>12</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "El radio del intervalo es: <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>12</mn></mrow><msqrt><mn>400</mn></msqrt></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>10976</mn><mo>≈</mo><mn>0</mn><mo>,</mo><mn>11</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "El intervalo que buscamos es: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>25</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>11</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>3</mn><mo>,</mo><mn>25</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>11</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>14</mn><mo>;</mo><mn>3</mn><mo>,</mo><mn>36</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
          },
          {
           "mota": "testua",
           "html": "Por tanto, tenemos una confianza del 95 % de que la nota media de la población estará entre <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>14</mn></mrow></math> y <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>36</mn></mrow></math>."
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "RELACIÓN ENTRE NIVEL DE CONFIANZA, ERROR ADMISIBLE Y TAMAÑO DE LA MUESTRA"
    },
    {
     "mota": "testua",
     "html": "Como acabamos de ver, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> de las muestras cumple <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mi>μ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "ingurunea",
         "izena": "Definición",
         "kolorea": "berdea",
         "etzana": false,
         "titulua": null,
         "blokeak": [
          {
           "mota": "testua",
           "html": "Al valor <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math> se le llama <strong>error máximo admisible</strong>. Depende de <math display=\"inline\"><mi>α</mi></math> y de <math display=\"inline\"><mi>n</mi></math>, así:"
          },
          {
           "mota": "zerrenda",
           "ordenatua": false,
           "elementuak": [
            "Cuanto mayor sea el tamaño de la muestra, mayor será también <math display=\"inline\"><mi>E</mi></math> (el intervalo será más estrecho, es decir, haremos la estimación con más precisión).",
            "Cuanto mayor sea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>  (es decir, cuanto más seguros queramos estar de nuestra estimación), mayor será <math display=\"inline\"><mi>E</mi></math>.",
            "En la tabla hemos indicado los niveles de confianza más utilizados."
           ]
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "taula",
           "goiburua": [],
           "lerroak": [
            [
             "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
            ],
            [
             "<math display=\"inline\"><mi>α</mi></math>"
            ],
            [
             "<math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>"
            ],
            [
             "0,90"
            ],
            [
             "0,10"
            ],
            [
             "1,645"
            ],
            [
             "0,95"
            ],
            [
             "0,05"
            ],
            [
             "1,96"
            ],
            [
             "0,99"
            ],
            [
             "0,01"
            ],
            [
             "2,575"
            ]
           ]
          }
         ]
        },
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/243490d5a1c5f69a.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como se puede ver en esos valores, cuanto mayor sea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>, mayor será <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> y, por tanto, mayor será también <math display=\"inline\"><mi>E</mi></math>."
    },
    {
     "mota": "azpititulua",
     "testua": "ENCONTRAR EL TAMAÑO DE UNA MUESTRA DADOS <math display=\"inline\"><mi>E</mi></math> Y <math display=\"inline\"><mi>α</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Si nos dan determinados <math display=\"inline\"><mi>E</mi></math>, el error máximo admisible, y <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>, el nivel de confianza, obtendremos el tamaño mínimo que debe tener la muestra para cumplir esas condiciones despejando <math display=\"inline\"><mi>n</mi></math> de la expresión de <math display=\"inline\"><mi>E</mi></math>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>n</mi></msqrt><mo>=</mo><mfrac><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi></mrow><mi>E</mi></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mi>σ</mi></mrow><mi>E</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como ves, el tamaño de la muestra será:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Tanto mayor cuanto mayor sea <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>; o, dicho de otra manera, cuanto menor sea <math display=\"inline\"><mi>α</mi></math> y mayor sea <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>. Es decir, para aumentar el nivel de confianza aumentaremos el tamaño de la muestra.",
      "Tanto mayor cuanto menor sea <math display=\"inline\"><mi>E</mi></math>. Es decir, cuanto menor sea <math display=\"inline\"><mi>E</mi></math>, más estrecho el intervalo."
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al medir tiempos de reacción, el psicólogo sabe que la desviación típica de la medición es de 0,5 segundos. ¿Cuántas mediciones deberá hacer para que, con una confianza del 99 %, el error de su estimación no sea superior a 0,1 segundos?"
      },
      {
       "mota": "testua",
       "html": "Para tener un nivel de confianza del 99 %, a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> le corresponde <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Para obtener <math display=\"inline\"><mi>n</mi></math>: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mi>n</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>n</mi></msqrt><mo>=</mo><mfrac><mrow><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>5</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></mfrac><mo>=</mo><mn>12</mn><mo>,</mo><mn>875</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>165</mn><mo>,</mo><mn>76</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Hay que hacer 166 mediciones (el número entero más pequeño mayor que 165,76)."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "OBTENER EL NIVEL DE CONFIANZA CONOCIDOS <math display=\"inline\"><mi>E</mi></math> Y <math display=\"inline\"><mi>N</mi></math>"
    },
    {
     "mota": "testua",
     "html": "Si están fijados <math display=\"inline\"><mi>E</mi></math>, el error máximo admisible, y <math display=\"inline\"><mi>n</mi></math>, el tamaño de la muestra, el nivel de confianza para obtener la estimación se obtiene así:"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>E</mi><msqrt><mi>n</mi></msqrt></mrow><mi>σ</mi></mfrac></mrow></math>"
          }
         ]
        },
        {
         "mota": "testua",
         "html": "Conocido <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>, la curva normal nos dará el valor de <math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></math>."
        },
        {
         "mota": "testua",
         "html": "De ahí obtenemos el nivel de confianza <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>."
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/22ce9ff331550825.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> Al medir el tiempo de reacción, un psicólogo sabe que la desviación típica es de 0,5 segundos. Quiere estimar el tiempo medio de reacción, siendo el error máximo de 0,1 segundos, y para ello hace 100 experiencias."
      },
      {
       "mota": "testua",
       "html": "¿Con qué nivel de confianza podrá dar el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>;</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>?"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mn>100</mn></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>1</mn><mo>⋅</mo><mn>10</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow></mfrac><mo>=</mo><mn>2</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>9772</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9772</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0228</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>0456</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mo>→</mo><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>9544</mn></mrow></math>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/10ba3f6d650e7be7.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> es el tiempo medio obtenido con las 100 experiencias, podemos asegurar con un nivel de confianza del 95,44 % que el tiempo de reacción estará entre <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>−</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> y <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>+</mo><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> segundos."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> El coronel quiere estimar la altura media de todos los soldados de su regimiento con errores menores de 0,5 cm y, para ello, utiliza una muestra de 30 soldados. Sabiendo que la desviación típica es <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math> cm, ¿cuál será el nivel de confianza de la estimación?"
      },
      {
       "mota": "sarea",
       "zutabeak": "repeat(1, minmax(0,1fr))",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mrow><mn>5</mn><mo>,</mo><mn>3</mn></mrow><msqrt><mn>30</mn></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>⋅</mo><msqrt><mn>30</mn></msqrt></mrow><mrow><mn>5</mn><mo>,</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>52</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>0</mn><mo>,</mo><mn>6985</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "<math display=\"inline\"><mrow><mi>α</mi><mi>/</mi><mn>2</mn><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>6985</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>3015</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>6030</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "Nivel de confianza: <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>3970</mn></mrow></math>"
          },
          {
           "mota": "testua",
           "html": "El nivel de confianza será del 39,7 %. ¡Demasiado pequeño! No merece la pena hacer la experiencia."
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "irudia",
           "oina": null,
           "src": "../media/irudiak/55a48ef7c8a3bb5a.svg",
           "zabalera": 309
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "El nivel de confianza tiene un valor tan pequeño porque se ha querido determinar el resultado (error inferior a medio centímetro) utilizando una muestra muy pequeña (30 individuos)."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "Estimación de una proporción o probabilidad",
   "blokeak": [
    {
     "mota": "testua",
     "html": "No sabemos cuál es la proporción <math display=\"inline\"><mi>p</mi></math> de individuos que tienen una determinada característica dentro de una población."
    },
    {
     "mota": "testua",
     "html": "Queremos saberlo. Para ello, utilizaremos lo que hemos aprendido en el tema anterior sobre la distribución de las proporciones <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> de las muestras de tamaño <math display=\"inline\"><mi>n</mi></math>."
    },
    {
     "mota": "testua",
     "html": "La proporción <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> de las muestras de tamaño <math display=\"inline\"><mi>n</mi></math> está distribuida según <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Los intervalos característicos son estos:"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>p</mi><mi>r</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
          }
         ]
        },
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mo>↓</mo></math>"
          }
         ]
        },
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "testua",
           "html": "<math display=\"block\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">⟦</mo><mi>p</mi><mi>r</mi><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mo>&lt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
          }
         ]
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/0faf127eb1872d46.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esas igualdades también se pueden poner de este otro modo:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>p</mi><mo>∈</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>r</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mi>r</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>(Como vemos, el valor de <math display=\"inline\"><mi>p</mi></math> aparece también en los extremos del intervalo)</span>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La igualdad anterior nos sirve para estimar mediante un intervalo el valor de <math display=\"inline\"><mi>p</mi></math>."
    },
    {
     "mota": "testua",
     "html": "El error máximo admisible, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt></mrow></math>, tiene un inconveniente: viene dado en función de <math display=\"inline\"><mi>p</mi></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, una vez extraída la muestra y obtenida <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, la proporción muestral, estimaremos los valores de <math display=\"inline\"><mi>p</mi></math> y <math display=\"inline\"><mi>q</mi></math>, así: <math display=\"inline\"><mrow><mover><mi>p</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mi>p</mi><mi>r</mi></mrow></math>, <math display=\"inline\"><mrow><mover><mi>q</mi><mo accent=\"true\">̂</mo></mover><mo>=</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "De este modo, el error máximo admisible (<strong>cota del error</strong>) para la estimación de <math display=\"inline\"><mi>p</mi></math> será:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Y así obtenemos el siguiente <strong>intervalo de confianza</strong> de <math display=\"inline\"><mi>p</mi></math>, siendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> el nivel de confianza:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>r</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mi>r</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Observaciones</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "En el razonamiento anterior hay que decir que tanto <math display=\"inline\"><mrow><mi>p</mi><mo>⋅</mo><mi>n</mi></mrow></math> como <math display=\"inline\"><mrow><mi>q</mi><mo>⋅</mo><mi>n</mi></mrow></math> serán mayores o iguales que 5 para que la distribución de <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> sea normal."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Además, si queremos estimar <math display=\"inline\"><mi>p</mi></math> mediante <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> para obtener el error máximo admisible, la muestra tiene que ser forzosamente &quot;grande&quot; (<math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math>)."
     ]
    },
    {
     "mota": "zerrenda",
     "ordenatua": false,
     "elementuak": [
      "Decir que la <strong>probabilidad</strong> de un suceso es <math display=\"inline\"><mi>p</mi></math> y decir que la <strong>proporción</strong> de veces que ocurre ese suceso en la población que se obtiene tras repetir infinitas veces una experiencia aleatoria es <math display=\"inline\"><mi>p</mi></math> es lo mismo. Por tanto, podemos decir que la probabilidad es la proporción de una población infinita."
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Intervalo de confianza <math display=\"inline\"><mi>p</mi></math> para la proporción</strong>"
      },
      {
       "mota": "testua",
       "html": "Para estimar la proporción de individuos de un conjunto que cumplen una determinada condición, siendo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> el nivel de confianza, se utiliza el siguiente intervalo:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mi>r</mi><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>p</mi><mi>r</mi><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "En esa expresión, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> es la proporción obtenida en una muestra determinada de <math display=\"inline\"><mi>n</mi></math> individuos."
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1.</strong> En una gran ciudad hemos elegido al azar una muestra de 300 personas entre las mayores de 15 años. Hemos sabido que 104 de ellas leen el periódico a diario. Con un nivel de confianza del 90 %, encontraremos un intervalo para estimar la proporción de lectores de periódico entre los que son de esa ciudad y tienen más de 15 años."
      },
      {
       "mota": "testua",
       "html": "El nivel de confianza es del 90 %: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "La proporción muestral es: <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>104</mn><mn>300</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>347</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "El error máximo admisible (cota del error) es este:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>347</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>653</mn></mrow><mn>300</mn></mfrac></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>045</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Por tanto, el intervalo que nos han pedido será: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>347</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>045</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mn>0</mn><mo>,</mo><mn>347</mn><mo>+</mo><mn>0</mn><mo>,</mo><mn>045</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>302</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>392</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<em>Conclusión:</em>"
      },
      {
       "mota": "testua",
       "html": "Con un nivel de confianza del 90 % podemos asegurar que en el conjunto entero la proporción de lectores de periódico está entre 0,302 y 0,392."
      },
      {
       "mota": "testua",
       "html": "<strong>2.</strong> Teniendo en cuenta el resultado del problema anterior, queremos repetir el ejercicio para obtener una cota del error de 0,01 con el mismo nivel de confianza: 90 %. ¿Cuántos individuos debe tener la muestra?"
      },
      {
       "mota": "testua",
       "html": "En la expresión de la cota del error, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt></mrow></math>, tenemos que calcular <math display=\"inline\"><mi>n</mi></math> y conocemos <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El valor de <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> no lo podemos obtener a partir de la muestra, porque todavía no la hemos extraído (no olvides que estamos calculando el tamaño de la muestra). Tomaremos como referencia los resultados previos (los del ejercicio anterior) y valoraremos <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>347</mn></mrow></math>."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>0</mn><mo>,</mo><mn>01</mn><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>347</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>653</mn></mrow><mi>n</mi></mfrac></msqrt><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>645</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>01</mn></mrow></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>347</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>653</mn><mo>=</mo><mn>6131</mn><mo>,</mo><mn>6</mn></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Habrá que tomar una muestra de 6 132 personas."
      },
      {
       "mota": "testua",
       "html": "Gracias a la proporción de quienes leen el periódico a diario en ese conjunto, <math display=\"inline\"><mrow><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub></mrow></math>, podremos determinar el intervalo <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>−</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>;</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y dentro de ese intervalo estimamos que estará la proporción <math display=\"inline\"><mi>p</mi></math> que buscamos, siendo el nivel de confianza del 90 %."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "Hipótesis estadísticas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Empezaremos estudiando un ejemplo determinado (CASO 1):"
    },
    {
     "mota": "testua",
     "html": "<em>Tenemos un dado que damos por bueno. Lo lanzamos 100 veces y obtenemos 25 &quot;CINCOS&quot;. ¿Podemos decir que la suposición es aceptable (el dado está bien hecho) o tendremos que corregirla basándonos en los resultados obtenidos?</em>"
    },
    {
     "mota": "testua",
     "html": "En este ejemplo ponemos en duda si el parámetro <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi>p</mi></mrow></math> toma el valor <math display=\"inline\"><mfrac><mn>1</mn><mn>6</mn></mfrac></math>. Para aclarar esa duda podemos hacer un <strong>test estadístico</strong> a partir de los resultados de los 100 lanzamientos."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El <strong>test estadístico</strong> es el procedimiento que nos sirve para sacar, a partir de una muestra aleatoria significativa, la conclusión de aceptar o rechazar una hipótesis hecha de antemano sobre el valor de un parámetro desconocido de esa población."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Veamos otro ejemplo (CASO 2):"
    },
    {
     "mota": "testua",
     "html": "<em>Hace cinco años se hizo una prueba de conocimientos a todos los soldados de un año determinado. La media del resultado fue <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math> y la desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>11</mn></mrow></math>. Este año se ha hecho el mismo test a una muestra de 400 soldados y la media ha sido de <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math> puntos.</em>"
    },
    {
     "mota": "testua",
     "html": "<em>¿Podemos pensar que en estos cinco años no ha habido cambios en los conocimientos de los soldados y que, por tanto, la diferencia que aparece es aleatoria?</em>"
    },
    {
     "mota": "testua",
     "html": "En los dos ejemplos se ven la <strong>hipótesis original</strong> y los <strong>resultados</strong> obtenidos a partir de las muestras que son consecuencia de la hipótesis. Queremos saber si la diferencia es aleatoria."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "",
         "<strong>HIPOTESIA</strong>",
         "<strong>EMAITZA HIPOTESITIK ABIATUTA</strong>",
         "<strong>GALDERA</strong>"
        ],
        [
         "<span><strong>1 KASUA:</strong> <br> DADOAK</span>",
         "  Dadoa ondo eginda dago. &quot;BOSTEKOEN&quot; probabilitatea hau da: <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>  ",
         "  &quot;BOSTEKOEN&quot; proportzioa laginean:   <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn></mrow></math>  ",
         "  Ikusten dugun aldea zorizkoa da? Lagina hipotesia planteatu diogun populaziotik atera dela pentsa dezakegu?  "
        ],
        [
         "<span><strong>2 KASUA:</strong> <br> SOLDADUAK</span>",
         "  Aurten ere:   <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>  ",
         "  Laginaren batez bestekoa:   <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math>  "
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para expresar la hipótesis dada se utiliza <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math> y se le llama <strong>hipótesis nula</strong>. Para expresar la hipótesis contraria se utiliza <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> y se le llama <strong>hipótesis alternativa</strong>."
    },
    {
     "mota": "testua",
     "html": "CASO 1 (DADO):    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mi>p</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "CASO 2 (SOLDADOS):    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>,    <math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mi>μ</mi><mo>≠</mo><mn>102</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<span>\n    <em>OBSERVACIÓN:</em> Hay que decir que afirmar que la probabilidad de sacar 5 en un dado es <math display=\"inline\"><mfrac><mn>1</mn><mn>6</mn></mfrac></math> y afirmar que la proporción del número 5 en la población que se obtiene lanzando un dado infinitas veces es <math display=\"inline\"><mfrac><mn>1</mn><mn>6</mn></mfrac></math> es lo mismo. Por tanto, se comparan el valor de la proporción de &quot;CINCOS&quot; de la población y la proporción de &quot;CINCOS&quot; de la muestra.\n</span>"
    },
    {
     "mota": "azpititulua",
     "testua": "Comprobar la hipótesis"
    },
    {
     "mota": "testua",
     "html": "Para aclarar si una hipótesis estadística es verdadera o no, hay que dar unos pasos que aprenderemos ahora. En primer lugar, resolveremos los dos ejemplos que hemos dado en la página anterior:"
    },
    {
     "mota": "testua",
     "html": "<em>CASO 1: ¿está bien hecho el dado que, lanzado 100 veces, saca 25 veces el número &quot;CINCO&quot;?</em>"
    },
    {
     "mota": "testua",
     "html": "La hipótesis hecha (si el dado está bien hecho) se concreta diciendo <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Si la hipótesis es verdadera, la proporción de &quot;CINCOS&quot;, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, tendrá en muestras de 100 una distribución normal"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><msqrt><mrow><mi>p</mi><mi>q</mi><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>;</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>167</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>833</mn></mrow><mn>100</mn></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>037</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En ese caso, el 95 % de las proporciones muestrales de &quot;CINCOS&quot; estará en el intervalo característico:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>0</mn><mo>,</mo><mn>167</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>037</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>094</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>240</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/352e91ce58c79e19.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "(0,094; 0,240)  se llama <strong>región de aceptación</strong>."
    },
    {
     "mota": "testua",
     "html": "Como la proporción obtenida en la muestra <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn></mrow></math> queda fuera del intervalo, será muy difícil que la muestra sea de esa distribución (es decir, no es creíble sacar veinticinco &quot;CINCOS&quot; en 100 lanzamientos con un dado bien hecho). Por tanto, se <strong>rechaza la hipótesis</strong> con un nivel de significación del 5 %."
    },
    {
     "mota": "testua",
     "html": "<em>CASO 2. ¿Podemos pensar que la variable &quot;conocimientos de los soldados&quot; tiene los parámetros <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>11</mn></mrow></math>, teniendo en cuenta que la media de los 400 soldados es <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math>?</em>"
    },
    {
     "mota": "testua",
     "html": "Si la hipótesis es verdadera, la población original tiene <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>11</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Las medias de las muestras de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>400</mn></mrow></math> están distribuidas así:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>102</mn><mo>,</mo><mfrac><mn>11</mn><msqrt><mn>400</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>102</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>55</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con un 95 % se obtiene el siguiente intervalo característico:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> BITARTEA: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mn>102</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>55</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>100</mn><mo>,</mo><mn>9</mn><mo>;</mo><mn>103</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El 95 % de las muestras de tamaño 400 tiene la media en este intervalo (<strong>región de aceptación</strong>  para <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>)."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/d202879617694a18.svg",
     "zabalera": 309
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math> está en el intervalo. Por tanto, se <strong>acepta la hipótesis</strong> con un nivel de significación <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>, ya que solo consideramos imposible el 5 % de los casos extremos."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Métodos para comprobar hipótesis estadísticas</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>1. Enunciado.</strong> Se enuncia la hipótesis, <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math>. Se asigna un valor a un parámetro de una población determinada. (En este curso solo haremos hipótesis sobre la media <math display=\"inline\"><mi>μ</mi></math> y sobre la proporción <math display=\"inline\"><mi>p</mi></math>)."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Sacar conclusiones.</strong> Si la hipótesis es verdadera, ese parámetro de la muestra estará distribuido de modo conocido. En consecuencia:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "Se elige un <strong>nivel de significación</strong>. Los más utilizados son <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>10</mn></mrow></math>; <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>; <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>.",
        "Se construye la <strong>región de aceptación</strong>. Fuera de ese intervalo solo se recogen los &quot;casos más raros&quot; <math display=\"inline\"><mrow><mi>α</mi><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>3. Comprobar.</strong> Se toma una muestra del tamaño decidido en el paso anterior y a partir de ella se obtiene el parámetro correspondiente."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Decidir.</strong> Si el valor del parámetro de la muestra está dentro de la región de aceptación, la hipótesis se acepta con un nivel de aceptación <math display=\"inline\"><mi>α</mi></math>. En caso contrario, se rechaza."
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Veamos cómo se llevan a cabo esos pasos en los dos ejemplos resueltos en la página anterior."
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<strong>1. KASUA</strong>",
           "<strong>2. KASUA</strong>"
          ],
          [
           "<strong>1. Enuntziatu</strong>",
           "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>167</mn></mrow></math>",
           "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><mn>102</mn></mrow></math>"
          ],
          [
           "<strong>2. Ondorioak atera</strong>",
           "Laginen proportzioek, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, banaketa hau izango lukete:   <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>167</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>037</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>   Esangura maila: <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>   Onarpen eremua:   <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>094</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>240</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
           "Laginen batez bestekoek, <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math>, banaketa hau izango lukete:   <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>102</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>55</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>   Esangura maila: <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>   Onarpen eremua:   <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>100</mn><mo>,</mo><mn>9</mn><mo>;</mo><mn>103</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          ],
          [
           "<strong>3. Egiaztatu</strong>",
           "Lagina atera eta parametroaren balioa kalkulatzen da:   <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>25</mn><mn>100</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>25</mn></mrow></math>",
           "Lagina atera eta parametroaren balioa kalkulatzen da:   <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>101</mn></mrow></math>"
          ],
          [
           "<strong>4. Erabaki</strong>",
           "0,25 ez dago onarpen eremuan. Beraz, hipotesia ukatu egiten da. Dadoa ez dago ondo eginda.",
           "101 badago onarpen eremuan. Hipotesia onartu egiten da. Soldaduen ezagutzak duela bost urte zituzten berak dira."
          ]
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "urdina",
     "izenburua": "Ejercicios",
     "blokeak": [
      {
       "mota": "ariketa",
       "izena": "1",
       "izar": 0,
       "blokeak": [
        {
         "mota": "testua",
         "html": "Haz de nuevo el CASO 1 paso a paso, para el nivel de significación <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>."
        }
       ]
      },
      {
       "mota": "ariketa",
       "izena": "2",
       "izar": 0,
       "blokeak": [
        {
         "mota": "testua",
         "html": "Haz de nuevo el CASO 2 paso a paso, para el nivel de significación <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>10</mn></mrow></math>."
        }
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "Comprobar hipótesis sobre la media",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Sistematizaremos ahora qué pasos se dan para comprobar las hipótesis que se hacen sobre la media de la población, distinguiendo dos casos: el caso en que la hipótesis nula es <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>, por un lado, y el caso en que la hipótesis nula admite igualdades del tipo <math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> o <math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>, por otro."
    },
    {
     "mota": "azpititulua",
     "testua": "Contraste bilateral: <math display=\"inline\"><mrow><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 1. Hipótesis:</strong>  <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La hipótesis nula consiste en dar a la media de la población un valor determinado. Este método es el que hemos desarrollado en el CASO 2 de las páginas anteriores."
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 2. Sacar conclusiones. Obtener la región de aceptación</strong>"
    },
    {
     "mota": "testua",
     "html": "Cuando <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>30</mn></mrow></math> o en el caso de cualquier otro valor de <math display=\"inline\"><mi>n</mi></math>, si la población original es normal, la distribución de las medias muestrales es <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>,</mo><msub><mi>σ</mi><mn>0</mn></msub><mi>/</mi><msqrt><mi>n</mi></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, para un nivel de significación <math display=\"inline\"><mi>x</mi></math> la región de aceptación será el intervalo característico correspondiente a ese caso:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><msub><mi>σ</mi><mn>0</mn></msub><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>μ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><msub><mi>σ</mi><mn>0</mn></msub><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/2119ba55b2a4ba2d.svg",
     "zabalera": 408
    },
    {
     "mota": "testua",
     "html": "Recordaremos los valores <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math> correspondientes a los niveles de significación más utilizados:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "BALIO KRITIKOAK",
         "<math display=\"inline\"><mi>α</mi></math>",
         "0,10",
         "0,05"
        ],
        [
         "0,01",
         "<math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>",
         "1,645",
         "1,96"
        ],
        [
         "2,575"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Pasos 3 y 4. Comprobar y decidir</strong>"
    },
    {
     "mota": "testua",
     "html": "Se extrae la muestra, se calcula <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> y se comprueba si está dentro o fuera de la región de aceptación."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<em>Se cree que la media del cociente intelectual de los alumnos de una universidad es 113, siendo la desviación típica 7. Para comprobar la hipótesis, se toma una muestra de 180 alumnos y de ellos obtenemos que el cociente intelectual medio es 115. ¿Podemos aceptar la hipótesis anterior con un nivel de significación del 5 %?</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 1.</strong>  <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><mn>113</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 2.</strong>  <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>180</mn></mrow></math> Como el tamaño de la muestra es mayor que 30, la distribución de las medias muestrales será <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>113</mn><mo>,</mo><mn>7</mn><mi>/</mi><msqrt><mn>180</mn></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>113</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (si la hipótesis es verdadera) y, por tanto, el intervalo de aceptación"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mn>113</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>52</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>111</mn><mo>,</mo><mn>98</mn><mo>;</mo><mn>114</mn><mo>,</mo><mn>02</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "testua",
       "html": "será."
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 3.</strong> En una experiencia real, ahora habría que extraer la muestra y obtener en ella el valor de la media <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>115</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 4.</strong> Como 115 no está dentro de la región de aceptación, rechazamos la hipótesis. Es decir, no podemos dar por buena que el C.I. medio de los alumnos de esa universidad sea 113."
      }
     ]
    },
    {
     "mota": "azpititulua",
     "testua": "Contraste unilateral: <math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> o <math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 1. Hipótesis:</strong>  <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Las hipótesis alternativas son <math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math> o, <math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>, respectivamente."
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 2. Región de aceptación</strong>"
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/edf0dd0a8a97540e.svg",
         "zabalera": 309
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/1d3ea37c6aeebf5e.svg",
         "zabalera": 309
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En estos casos la cola completa (el intervalo que no se acepta o se rechaza) está en uno de los extremos de la distribución. Los valores críticos de la tabla de la derecha se obtienen directamente de la tabla <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "La región de aceptación es esta:"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "zentratua",
         "blokeak": [
          {
           "mota": "taula",
           "goiburua": [],
           "lerroak": [
            [
             "<math display=\"inline\"><mi>α</mi></math>",
             "0,10",
             "0,05",
             "0,01"
            ],
            [
             "<math display=\"inline\"><msub><mi>z</mi><mi>α</mi></msub></math>",
             "1,28",
             "1,645",
             "2,33"
            ]
           ]
          }
         ]
        }
       ]
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<strong>HIPOTESIA</strong>"
        ],
        [
         "<strong>ONARPEN EREMUA</strong>"
        ],
        [
         "<strong>ORDEZKO H.</strong>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>μ</mi><mo>≥</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>−</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><mfrac><msub><mi>σ</mi><mn>0</mn></msub><msqrt><mi>n</mi></msqrt></mfrac><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>μ</mi><mo>&lt;</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>μ</mi><mo>≤</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><msub><mi>μ</mi><mn>0</mn></msub><mo>+</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><mfrac><msub><mi>σ</mi><mn>0</mn></msub><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
        ],
        [
         "<math display=\"inline\"><mrow><mi>μ</mi><mo>&gt;</mo><msub><mi>μ</mi><mn>0</mn></msub></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/bf6d17c5edefd547.svg",
     "zabalera": 319
    },
    {
     "mota": "testua",
     "html": "<strong>Pasos 3 y 4. Comprobar y decidir</strong>"
    },
    {
     "mota": "testua",
     "html": "Se extrae la muestra, se calcula <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> y se comprueba si está dentro o fuera de la región de aceptación."
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<em>Los pesos de las gallinas de una granja tienen una distribución normal de media 2,6 kg y desviación típica 0,5. A 50 pollitos se les da otro tipo de comida. Cuando crecen, los pesamos y obtenemos una media de 2,78 kg. Comprobaremos la hipótesis de que el peso de la población entera no aumenta, siendo el nivel de significación del 1 %.</em>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>6</mn></mrow></math>.   Hipótesis alternativa <math display=\"inline\"><mrow><msub><mi>H</mi><mn>1</mn></msub><mo>:</mo><mi>μ</mi><mo>&gt;</mo><mn>2</mn><mo>,</mo><mn>6</mn></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>→</mo><msub><mi>z</mi><mi>α</mi></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>33</mn></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Región de aceptación:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "testua",
         "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>;</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo>+</mo><mn>2</mn><mo>,</mo><mn>33</mn><mo>⋅</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mn>50</mn></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>;</mo><mn>2</mn><mo>,</mo><mn>76</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        }
       ]
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/59e71ecd4ccb078f.svg",
       "zabalera": 309
      },
      {
       "mota": "testua",
       "html": "El valor obtenido mediante la muestra, 2,78 kg, ha quedado fuera de la región de aceptación. Por tanto, rechazamos <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math> y aceptamos <math display=\"inline\"><msub><mi>H</mi><mn>1</mn></msub></math> (el peso de la población aumentará dándole el alimento nuevo), siendo el nivel de significación 0,01."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "Comprobar hipótesis sobre la proporción",
   "blokeak": [
    {
     "mota": "azpititulua",
     "testua": "Contraste bilateral: <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "La hipótesis nula consiste en dar un valor a la proporción de individuos que tienen una determinada característica o a la probabilidad de un suceso en una experiencia aleatoria."
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 1. Hipótesis.</strong>  <math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 2. Región de aceptación</strong>"
    },
    {
     "mota": "testua",
     "html": "Sabemos que si <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mi>p</mi></mrow></math>, entonces las proporciones muestrales, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, tendrán esta distribución <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>q</mi><mn>0</mn></msub><mi>/</mi><mi>n</mi></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Por tanto, la región de aceptación para el nivel de significación <math display=\"inline\"><mi>α</mi></math> es el intervalo característico correspondiente a ese caso:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>−</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo>,</mo><mspace width=\"1.0em\"></mspace><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/d421d7fe5140072a.svg",
     "zabalera": 372
    },
    {
     "mota": "testua",
     "html": "<strong>Pasos 3 y 4. Comprobar y decidir</strong>"
    },
    {
     "mota": "testua",
     "html": "Se calcula la proporción, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, en la muestra y se comprueba si está o no en la región de aceptación. (Véase el CASO 1 de las páginas 308 y 309)."
    },
    {
     "mota": "azpititulua",
     "testua": "Contraste unilateral: <math display=\"inline\"><mrow><mi>p</mi><mo>≤</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math> o <math display=\"inline\"><mrow><mi>p</mi><mo>≥</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<strong>1.</strong> <br> <strong>URRATSA</strong>",
         "HIPOTESI NULUA",
         "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>≤</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>",
         "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>≥</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>"
        ],
        [
         "ORDEZKO HIPOTESIA",
         "<math display=\"inline\"><mrow><mi>p</mi><mo>&gt;</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>",
         "<math display=\"inline\"><mrow><mi>p</mi><mo>&lt;</mo><msub><mi>p</mi><mn>0</mn></msub></mrow></math>",
         "<strong>2. URRATSA</strong> <br> ONARPEN EREMUA"
        ],
        [
         "<span class=\"j-iz\"><img class=\"irudi-l\" src=\"../media/irudiak/9e3ef8275824a2fc.svg\" alt=\"\" style=\"width:187px\" loading=\"lazy\"></span>   <span class=\"j-iz\"><math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></span>",
         "<span class=\"j-iz\"><img class=\"irudi-l\" src=\"../media/irudiak/daa7ebbe37cad9ce.svg\" alt=\"\" style=\"width:187px\" loading=\"lazy\"></span>   <span class=\"j-iz\"><math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>−</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math></span>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En los pasos 3 y 4, como siempre, hay que tomar la muestra, obtener en ella el parámetro <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> y comprobar si está en la región de aceptación."
    },
    {
     "mota": "testua",
     "html": "Recordemos los <strong>valores críticos</strong>  más utilizados correspondientes a los valores de <math display=\"inline\"><mi>α</mi></math>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "ESANGURA MAILA, <math display=\"inline\"><mi>α</mi></math>",
         "0,10",
         "0,05",
         "0,01"
        ],
        [
         "BALIO KRITIKOA <br> Aldebiko egiazt.: <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>",
         "1,645",
         "1,96",
         "2,575"
        ],
        [
         "Aldebateko egiazt.: <math display=\"inline\"><msub><mi>z</mi><mi>α</mi></msub></math>",
         "1,28",
         "1,645",
         "2,33"
        ]
       ]
      }
     ]
    },
    {
     "mota": "gai-kutxa",
     "kolorea": "berdea",
     "izenburua": "Ejemplo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<em>A unas elecciones se han presentado los partidos A, B y C. Un comentarista político ha dicho que esta es la distribución del voto:</em>"
      },
      {
       "mota": "testua",
       "html": "<em>A favor de A el 40 %</em>"
      },
      {
       "mota": "testua",
       "html": "   <em>A favor de B el 40 % o más</em>     <em>A favor de C el 40 % o menos</em>"
      },
      {
       "mota": "testua",
       "html": "<em>Estas hipótesis se quieren comprobar tomando una muestra de 250 electores.</em>"
      },
      {
       "mota": "testua",
       "html": "<em>a) Encuentra la región de aceptación de cada hipótesis, siendo el nivel de significación del 5 %.</em>"
      },
      {
       "mota": "testua",
       "html": "<em>b) Tras extraer la muestra, han aparecido 132 electores a favor de A, 88 a favor de B y 30 a favor de C. Toma las decisiones sobre estas tres hipótesis.</em>"
      },
      {
       "mota": "testua",
       "html": "<strong>a)</strong>"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<strong>A-rentzat</strong>",
           "<strong>B-rentzat</strong>",
           "<strong>C-rentzat</strong>"
          ],
          [
           "<strong>1. urratsa.</strong> HIPOTESIA",
           "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>4</mn></mrow></math>",
           "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mn>4</mn></mrow></math>",
           "<math display=\"inline\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>≤</mo><mn>0</mn><mo>,</mo><mn>4</mn></mrow></math>"
          ],
          [
           "ORDEZKO HIPOTESIA",
           "<math display=\"inline\"><mrow><mi>p</mi><mo>≠</mo><mn>0</mn><mo>,</mo><mn>4</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mi>p</mi><mo>&lt;</mo><mn>0</mn><mo>,</mo><mn>4</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mi>p</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mn>4</mn></mrow></math>"
          ]
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>Paso 2.</strong> Para encontrar las regiones de aceptación, debemos tener en cuenta que en los tres casos la distribución de las proporciones muestrales, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>, será <math display=\"inline\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>;</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>4</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>6</mn></mrow><mn>250</mn></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>031</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La región de aceptación de cada caso será esta:"
      },
      {
       "mota": "sarea",
       "zutabeak": "auto minmax(0,1fr)",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>A:</strong>  <span class=\"j-iz\"><img class=\"irudi-l\" src=\"../media/irudiak/e2b73dac86de29cd.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En los contrastes bilaterales (dos &quot;colas&quot;), el valor característico correspondiente a <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> es <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>."
          },
          {
           "mota": "zentratua",
           "blokeak": [
            {
             "mota": "testua",
             "html": "<math display=\"block\"><mrow><mn>0</mn><mo>,</mo><mn>4</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>031</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>339</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>461</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
            }
           ]
          }
         ]
        }
       ]
      },
      {
       "mota": "sarea",
       "zutabeak": "auto minmax(0,1fr)",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>B:</strong>  <span class=\"j-iz\"><img class=\"irudi-l\" src=\"../media/irudiak/d9f2ce527af27043.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "En los contrastes unilaterales (una &quot;cola&quot;), el valor característico correspondiente a <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math> es <math display=\"inline\"><mrow><msub><mi>z</mi><mi>α</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn></mrow></math>."
          },
          {
           "mota": "zentratua",
           "blokeak": [
            {
             "mota": "testua",
             "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>031</mn><mo>,</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>349</mn><mo>;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
            }
           ]
          }
         ]
        }
       ]
      },
      {
       "mota": "sarea",
       "zutabeak": "auto minmax(0,1fr)",
       "zelulak": [
        {
         "blokeak": [
          {
           "mota": "testua",
           "html": "<strong>C:</strong>  <span class=\"j-iz\"><img class=\"irudi-l\" src=\"../media/irudiak/0c07e9fe1893607e.svg\" alt=\"\" style=\"width:309px\" loading=\"lazy\"></span>"
          }
         ]
        },
        {
         "blokeak": [
          {
           "mota": "zentratua",
           "blokeak": [
            {
             "mota": "testua",
             "html": "<math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>,</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo>+</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>031</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>;</mo><mn>0</mn><mo>,</mo><mn>451</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
            }
           ]
          }
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "<strong>b) Pasos 3 y 4</strong>"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "",
           "<strong>A</strong>",
           "<strong>B</strong>",
           "<strong>C</strong>"
          ],
          [
           "LORTUTAKO PROPORTZIOAK",
           "<math display=\"inline\"><mrow><mn>132</mn><mi>/</mi><mn>250</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>528</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mn>88</mn><mi>/</mi><mn>250</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>352</mn></mrow></math>",
           "<math display=\"inline\"><mrow><mn>30</mn><mi>/</mi><mn>250</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>12</mn></mrow></math>"
          ],
          [
           "ONARPEN EREMUAK",
           "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>339</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>461</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
           "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>349</mn><mo>;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
           "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>∞</mi><mo>;</mo><mn>0</mn><mo>,</mo><mn>451</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
          ],
          [
           "ERABAKI",
           "Ukatu egiten da",
           "Onartu egiten da",
           "Onartu egiten da"
          ]
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "Parece sorprendente aceptar la hipótesis correspondiente al partido B (&quot;La proporción de sus votantes es del 40 % o mayor&quot;), habiendo obtenido nosotros una proporción menor (35,2 %)."
      },
      {
       "mota": "testua",
       "html": "Por tanto, tendríamos que aceptar también para B la hipótesis siguiente: &quot;la proporción de votantes es del 40 % o menor&quot;. La explicación es sencilla: de los resultados posibles solo rechazamos el 5 %, por considerarlos improbables. Por eso, en lugar de decir &quot;se acepta la hipótesis&quot;, sería más adecuado decir &quot;no hay motivo suficiente para rechazar la hipótesis&quot;."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "Errores posibles en la comprobación de hipótesis",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Cuando aplicamos un test estadístico, podemos cometer dos tipos de errores:"
    },
    {
     "mota": "testua",
     "html": "<strong>ERROR DE TIPO I.</strong> Es el que se comete cuando la hipótesis nula es verdadera y, como resultado de la comprobación, se rechaza."
    },
    {
     "mota": "testua",
     "html": "<strong>ERROR DE TIPO II.</strong> Es el que se comete cuando la hipótesis nula es falsa y, como resultado de la comprobación, se acepta."
    },
    {
     "mota": "testua",
     "html": "Naturalmente, cuando usamos el test no sabemos si cometemos error. Pero podemos esforzarnos en evaluar qué probabilidad hay de cometer un error de un tipo y del otro, y podemos diseñar la experiencia de modo que las probabilidades de cometer error sean lo más pequeñas posible."
    },
    {
     "mota": "testua",
     "html": "Estudiaremos esas probabilidades en un ejemplo:"
    },
    {
     "mota": "testua",
     "html": "<em>La media de las alturas de las chicas de la UBI, en 1990, era 167 cm y la desviación típica 7 cm. Daremos como hipótesis que las alumnas de este año de 2.º de Bachillerato tienen la misma media, <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math>: Comprobaremos la hipótesis utilizando una muestra de tamaño <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>60</mn></mrow></math> y siendo el nivel de significación <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>10</mn></mrow></math>.</em>"
    },
    {
     "mota": "testua",
     "html": "Obtenemos esta región de aceptación: <math display=\"block\"><mrow><mn>167</mn><mo>±</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mfrac><mn>7</mn><msqrt><mn>60</mn></msqrt></mfrac><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>165</mn><mo>,</mo><mn>51</mn><mo>;</mo><mn>168</mn><mo>,</mo><mn>49</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Si al tomar la muestra obtenemos <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>168</mn><mo>,</mo><mn>72</mn></mrow></math>, rechazaremos la hipótesis. Pero podemos estar equivocados. Es decir, podemos cometer un error de tipo I."
    },
    {
     "mota": "testua",
     "html": "Si al extraer la muestra obtenemos <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>168</mn><mo>,</mo><mn>12</mn></mrow></math>, aceptamos la hipótesis. Pero podemos estar equivocados y podemos cometer un error de tipo II."
    },
    {
     "mota": "azpititulua",
     "testua": "Probabilidad de cometer un error de un tipo o de otro"
    },
    {
     "mota": "testua",
     "html": "La probabilidad de cometer un <strong>error de tipo I</strong> es <math display=\"inline\"><mi>α</mi></math>, el nivel de significación. En efecto, si la hipótesis es verdadera, rechazaremos el <math display=\"inline\"><mrow><mi>α</mi><mo>⋅</mo><mi>%</mi><mn>100</mn></mrow></math> de las medias muestrales. Esta probabilidad no depende del tamaño de la muestra."
    },
    {
     "mota": "testua",
     "html": "La probabilidad de cometer un <strong>error de tipo II</strong> depende del valor real de <math display=\"inline\"><mi>μ</mi></math> y del tamaño de la muestra. Si el valor real de la media es <math display=\"inline\"><mi>μ</mi></math> y el que le asignamos mediante la hipótesis <math display=\"inline\"><msub><mi>μ</mi><mn>0</mn></msub></math> es <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>μ</mi><mo>=</mo><msub><mi>μ</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>, son básicamente distintos; porque consideramos que cometemos error de tipo II. La distribución real de las medias muestrales es la que representan las curvas rojas (<math display=\"inline\"><mi>μ</mi></math> la media)."
    },
    {
     "mota": "sarea",
     "zutabeak": "repeat(1, minmax(0,1fr))",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/333347798247b480.svg",
         "zabalera": 432
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "irudia",
         "oina": null,
         "src": "../media/irudiak/d68c563346c1ebc5.svg",
         "zabalera": 475
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las curvas negras son las distribuciones supuestas (<math display=\"inline\"><msub><mi>μ</mi><mn>0</mn></msub></math> la media). Sobre ellas se sitúan las regiones de aceptación. Las áreas rojas, en cada caso, nos indicarán en qué proporción de las muestras será aceptable la hipótesis <math display=\"inline\"><mrow><msub><mi>μ</mi><mn>0</mn></msub><mo>=</mo><mi>μ</mi></mrow></math> y, por tanto, qué probabilidad hay de cometer error de tipo II. Está claro que en el caso de muestras grandes esta probabilidad es mucho menor."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "I. MOTAKO AKATSA. <br> <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math> ukatu, egia izanik"
        ],
        [
         "Bere probabilitatea <math display=\"inline\"><mi>α</mi></math> da. Ez da <math display=\"inline\"><mi>n</mi></math>-ren menpekoa."
        ],
        [
         "II. MOTAKO AKATSA. <br> <math display=\"inline\"><msub><mi>H</mi><mn>0</mn></msub></math> onartu, faltsua izanik."
        ],
        [
         "Bere probabilitatea parametroaren benetako balioaren araberakoa da. <br> Zenbat eta handiago izan <math display=\"inline\"><mi>n</mi></math>, txikiagoa da."
        ]
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "11. Ejercicios y problemas resueltos",
   "blokeak": [
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[1   INTERVALO DE CONFIANZA PARA LA MEDIA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Un ganadero quiere estimar el peso medio de los toros de su ganado con un nivel de confianza del 95 %. Para ello, toma una muestra de 30 toros y los pesa. La media que obtiene es <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>507</mn></mrow></math> kg y la desviación típica <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>32</mn></mrow></math> kg."
        },
        {
         "mota": "testua",
         "html": "¿Cuál será el intervalo de confianza para la media <math display=\"inline\"><mi>μ</mi></math> de la población?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "Como no sabemos cuál es la desviación típica de la población, <math display=\"inline\"><mi>σ</mi></math>, la estimaremos a partir de la muestra, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>32</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "El radio del intervalo que queremos encontrar (error admisible máximo) es este: <math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>s</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El valor crítico para el nivel de confianza <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> es <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>. Por tanto:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mfrac><mn>32</mn><msqrt><mn>30</mn></msqrt></mfrac><mo>=</mo><mn>11</mn><mo>,</mo><mn>45</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El intervalo que buscamos es este: <math display=\"inline\"><mrow><mn>507</mn><mo>±</mo><mn>11</mn><mo>,</mo><mn>45</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>495</mn><mo>,</mo><mn>45</mn><mo>;</mo><mn>518</mn><mo>,</mo><mn>45</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<em>Conclusión:</em>"
    },
    {
     "mota": "testua",
     "html": "El ganadero puede decir con un nivel de confianza del 95 % que el peso medio de sus toros será superior a 495,45 kg e inferior a 518,45 kg."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[2   ESTIMACIÓN DE LA MEDIA. NIVEL DE CONFIANZA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Para estimar el peso medio de las chicas de 16 años de una ciudad, se toma una muestra aleatoria de 100 chicas. Se obtienen los parámetros siguientes: <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mn>52</mn><mo>,</mo><mn>5</mn></mrow></math> kg, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math> kg."
        },
        {
         "mota": "testua",
         "html": "Se ha hecho la afirmación siguiente: el peso medio de las chicas de 16 años de esa ciudad está entre 51 y 54 kg. ¿Con qué nivel de confianza se ha hecho la afirmación?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>, en la fórmula del error máximo admisible, conocemos lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>E</mi></math> es la mitad del intervalo. Por tanto, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mfrac><mrow><mn>54</mn><mo>−</mo><mn>51</mn></mrow><mn>2</mn></mfrac><mo>=</mo><mn>1</mn><mo>,</mo><mn>5</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "El valor de <math display=\"inline\"><mi>σ</mi></math> se estima a partir de <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mn>5</mn><mo>,</mo><mn>3</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Por tanto, obtenemos <math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mfrac><mrow><mi>E</mi><msqrt><mi>n</mi></msqrt></mrow><mi>σ</mi></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>5</mn><msqrt><mn>100</mn></msqrt></mrow><mrow><mn>5</mn><mo>,</mo><mn>3</mn></mrow></mfrac><mo>=</mo><mn>2</mn><mo>,</mo><mn>83</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Encontraremos <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math> a partir de <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>83</mn></mrow></math>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mfrac><mi>α</mi><mn>2</mn></mfrac><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>&gt;</mo><mn>2</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≤</mo><mn>2</mn><mo>,</mo><mn>83</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>9977</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0023</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>α</mi><mo>=</mo><mn>2</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>0023</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>0046</mn><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>0046</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>9954</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/487915673a141fcf.svg",
     "zabalera": 314
    },
    {
     "mota": "testua",
     "html": "Está afirmado que el peso medio de las chicas de 16 años de esa ciudad está entre 51 y 54 kg, con un nivel de confianza del 99,54 %."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[3   ESTIMAR LA MEDIA. TAMAÑO DE LA MUESTRA]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "La media del cociente intelectual de un conjunto determinado, <math display=\"inline\"><mi>μ</mi></math>, es desconocida y la desviación típica <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mn>8</mn></mrow></math>."
        },
        {
         "mota": "testua",
         "html": "¿Qué tamaño debe tener la muestra que debemos tomar para estimar la media, si el nivel de confianza debe ser del 99 % y el error admisible <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>3</mn></mrow></math>?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "El error máximo admisible es este: <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><mfrac><mi>σ</mi><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>. En esa expresión conocemos lo siguiente:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><mn>3</mn><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>99</mn><mo>→</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn><mo>→</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mspace width=\"1.0em\"></mspace><mspace width=\"1.0em\"></mspace><mi>σ</mi><mo>=</mo><mn>8</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto: <math display=\"block\"><mrow><mn>3</mn><mo>=</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mn>8</mn><msqrt><mi>n</mi></msqrt></mfrac><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><msqrt><mi>n</mi></msqrt><mo>=</mo><mfrac><mrow><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>8</mn></mrow><mn>3</mn></mfrac><mo>=</mo><mn>6</mn><mo>,</mo><mn>87</mn><mspace width=\"1.0em\"></mspace><mo>→</mo><mspace width=\"1.0em\"></mspace><mi>n</mi><mo>=</mo><mn>47</mn><mo>,</mo><mn>15</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Tendremos que tomar una muestra de 48 individuos."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[4   ESTIMACIÓN DE UNA PROBABILIDAD]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Hemos lanzado una moneda 100 veces y hemos obtenido 62 &quot;cruces&quot;. Estima la probabilidad de sacar &quot;cruz&quot; mediante intervalos de confianza del 90 %, 95 % y 99 %."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "Tomaremos una población infinita y esa población la formarán todos los lanzamientos hechos con esa moneda. La proporción de &quot;cruces&quot; de esa población, <math display=\"inline\"><mi>p</mi></math>, será la probabilidad de sacar &quot;cruz&quot; con esa moneda."
    },
    {
     "mota": "testua",
     "html": "Tenemos una muestra de 100 individuos y con ella obtendremos el parámetro <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>62</mn></mrow></math>. A partir de ahí estimaremos <math display=\"inline\"><mi>p</mi></math>."
    },
    {
     "mota": "testua",
     "html": "La desviación típica es esta: <math display=\"block\"><mrow><mi>s</mi><mo>=</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo>=</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>62</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>38</mn></mrow><mn>100</mn></mfrac></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>0485</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Los intervalos de confianza correspondientes a los niveles de confianza que nos han pedido son estos:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>α</mi></mrow></math>",
         "<math display=\"inline\"><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub></math>",
         "AKATS BORNEA",
         "KONFIANTZA BITARTEA"
        ],
        [
         "%90",
         "1,645",
         "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>0485</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>080</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>62</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>08</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>54</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>70</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        ],
        [
         "%95",
         "1,96",
         "<math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>96</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>0485</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>095</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>62</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>095</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>525</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>715</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        ],
        [
         "%99",
         "2,575",
         "<math display=\"inline\"><mrow><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>0485</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>125</mn></mrow></math>",
         "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>62</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>125</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>495</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>745</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[5   TAMAÑO DE LA MUESTRA PARA ESTIMAR UNA PROPORCIÓN]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Tomando como base el problema anterior, queremos estimar la probabilidad de obtener &quot;cruz&quot; siendo el error inferior a 0,002 y el nivel de confianza del 95 %."
        },
        {
         "mota": "testua",
         "html": "¿Cuántas veces tendremos que lanzar la moneda?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "En la expresión de la cota del error, <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt></mrow></math> conocemos lo siguiente:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>002</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>96</mn></mrow></math>  lo correspondiente a <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math><math display=\"inline\"><mo stretchy=\"false\" form=\"postfix\">)</mo></math>, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>62</mn></mrow></math> tomado del ejercicio anterior."
    },
    {
     "mota": "testua",
     "html": "Con esos datos podemos despejar <math display=\"inline\"><mi>n</mi></math>:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/580d0c37b21972db.svg\" alt=\"n = (z_(alpha\\/2)^2 dot p r(1-p r))/E^2 = (1,96^2 dot 0,62 dot 0,38)/(0,000004) = 226#h(2pt)270,24\" style=\"width:28.405em;height:3.224em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Tendremos que lanzar la moneda 226 271 veces si queremos que el error sea inferior a dos milésimas y el nivel de confianza del 95 % al estimar la probabilidad."
    },
    {
     "mota": "testua",
     "html": "Si la proporción de &quot;cruces&quot; obtenida en esa muestra es <math display=\"inline\"><mrow><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub></mrow></math>, podemos afirmar con una confianza del 95 % que la probabilidad de &quot;cruz&quot; <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>−</mo><mn>0</mn><mo>,</mo><mn>002</mn><mo>;</mo><mi>p</mi><msub><mi>r</mi><mn>0</mn></msub><mo>+</mo><mn>0</mn><mo>,</mo><mn>002</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> estará en el intervalo."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[6   ESTIMACIÓN DE UNA PROPORCIÓN]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Para estimar el número de peces que hay en un estanque, actuamos así: con una red cogemos algunos peces (349), les ponemos una marca (hay tintas que no se van con el agua) y los volvemos a echar al estanque. Unos días después cogemos otro puñado de peces y vemos qué proporción tiene marca. En esa segunda pesca hemos cogido 514 peces y de ellos 37 tienen marca."
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Encuentra un intervalo de confianza, del 90 %, para la proporción de peces marcados del estanque."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Encuentra un intervalo de confianza, del 90 %, para el total de peces con marca."
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>a)</strong> La muestra la forman 514 peces. De ellos, 37 están marcados."
    },
    {
     "mota": "testua",
     "html": "La proporción de peces marcados en la muestra es esta: <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>37</mn><mn>514</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>072</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Para encontrar un intervalo de confianza para la proporción <math display=\"inline\"><mi>p</mi></math> en esa población a partir de la proporción <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> obtenida en la muestra, el error máximo admisible es este:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>E</mi><mo>=</mo><msub><mi>z</mi><mrow><mi>α</mi><mi>/</mi><mn>2</mn></mrow></msub><mo>⋅</mo><msqrt><mfrac><mrow><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo>=</mo><mn>1</mn><mo>,</mo><mn>645</mn><mo>⋅</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>072</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>928</mn></mrow><mn>514</mn></mfrac></msqrt><mo>=</mo><mn>0</mn><mo>,</mo><mn>019</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, el intervalo de confianza, del 90 %, para <math display=\"inline\"><mi>p</mi></math> es este: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>072</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>019</mn><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>053</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>091</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>b)</strong> Para encontrar un intervalo de confianza para el número total de peces del estanque, <math display=\"inline\"><mi>N</mi></math>, debemos tener en cuenta que la proporción de peces marcados es <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mfrac><mn>349</mn><mi>N</mi></mfrac></mrow></math>."
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/8eb31e347fb6e5f7.svg\" alt=\"0,053=349/N_1 quad arrow.r quad N_1=349/(0,053) approx 6#h(2pt)585\" style=\"width:20.108em;height:2.859em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<img class=\"formula formula-d\" src=\"../media/formulak/f58093496df2edcb.svg\" alt=\"0,091=349/N_2 quad arrow.r quad N_2=349/(0,091) approx 3#h(2pt)835\" style=\"width:20.108em;height:2.859em\" loading=\"lazy\">"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Con un nivel de confianza del 90 % sabemos que el número de peces del estanque está en el intervalo <img class=\"formula\" src=\"../media/formulak/968f85bac09bea7c.svg\" alt=\"[3#h(2pt)835, 6#h(2pt)585]\" style=\"width:6.429em;height:1.001em\" loading=\"lazy\">."
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[7   TEST DE UNA HIPÓTESIS SOBRE UNA PROBABILIDAD]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "Piensa en cada una de las experiencias siguientes:"
        },
        {
         "mota": "testua",
         "html": "<em>a)</em>"
        },
        {
         "mota": "testua",
         "html": "Lanzamos una moneda 10 veces y obtenemos 6 &quot;cruces&quot;."
        },
        {
         "mota": "testua",
         "html": "<em>b)</em>"
        },
        {
         "mota": "testua",
         "html": "Lanzamos una moneda 100 veces y obtenemos 60 &quot;cruces&quot;."
        },
        {
         "mota": "testua",
         "html": "<em>c)</em>"
        },
        {
         "mota": "testua",
         "html": "Lanzamos una moneda 1000 veces y obtenemos 600 &quot;cruces&quot;."
        },
        {
         "mota": "testua",
         "html": "¿Podemos sacar como conclusión de alguna de esas experiencias que la moneda tiene algún defecto?"
        },
        {
         "mota": "testua",
         "html": "<em>(Hemos propuesto resolver este problema por intuición en las primeras páginas del tema: página 299.)</em>"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 1. Hipótesis</strong>"
    },
    {
     "mota": "testua",
     "html": "La hipótesis que queremos comprobar en esas tres experiencias es esta:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac></mrow></math>     (es decir, &quot;la moneda no tiene defecto&quot;)"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 2: Sacar conclusiones. Obtener la región de aceptación</strong>"
    },
    {
     "mota": "testua",
     "html": "Como en todos los casos <math display=\"inline\"><mrow><mi>n</mi><mi>p</mi><mo>=</mo><mi>n</mi><mo>⋅</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>≥</mo><mn>5</mn></mrow></math>, la distribución de las medias muestrales será esta:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mo>,</mo><msqrt><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mi>/</mi><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>n</mi></mfrac></msqrt><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>N</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>5</mn><mo>;</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mi>n</mi></msqrt></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las regiones de aceptación, para un nivel de significación <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>, son estas:"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>±</mo><mn>2</mn><mo>,</mo><mn>575</mn><mo>⋅</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn></mrow><msqrt><mi>n</mi></msqrt></mfrac></mrow></math>"
      }
     ]
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "taula",
       "goiburua": [],
       "lerroak": [
        [
         "<math display=\"inline\"><mi>n</mi></math>",
         "10",
         "100",
         "1000"
        ],
        [
         "ONARPEN EREMUA",
         "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>41</mn></mrow></math> <br> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>09</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>91</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>13</mn></mrow></math> <br> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>37</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>63</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mo>±</mo><mn>0</mn><mo>,</mo><mn>04</mn></mrow></math> <br> <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>46</mn><mo>;</mo><mn>0</mn><mo>,</mo><mn>54</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
        ]
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 3: Comprobar</strong>"
    },
    {
     "mota": "testua",
     "html": "Ahora tenemos que extraer la muestra y calcular la proporción de &quot;cruces&quot;."
    },
    {
     "mota": "testua",
     "html": "En los tres casos hemos obtenido esto: <math display=\"block\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>6</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>6</mn><mn>10</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>60</mn><mn>100</mn></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mfrac><mn>600</mn><mn>1000</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 4: Decidir</strong>"
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/3978f53263174c7d.svg",
     "zabalera": 473
    },
    {
     "mota": "testua",
     "html": "El valor de <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math> que hemos obtenido en las muestras está dentro de la región de aceptación <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mi>r</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en los casos <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>10</mn></mrow></math> y <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>100</mn></mrow></math>; pero está fuera de la región de aceptación en el caso <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>1000</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Rechazaremos la hipótesis de que la moneda no tiene defecto solo en el caso c)."
    },
    {
     "mota": "testua",
     "html": "El resultado de esta prueba coincide con lo que obtenemos por intuición: si en 10 lanzamientos obtenemos 6 &quot;cruces&quot;, el resultado nos parece válido. Aceptaríamos tranquilamente cualquier resultado entre 2 y 8 &quot;cruces&quot; en 10 lanzamientos."
    },
    {
     "mota": "testua",
     "html": "En 100 lanzamientos nos cuestan más algunas desviaciones sobre la proporción <math display=\"inline\"><mfrac><mn>1</mn><mn>2</mn></mfrac></math>."
    },
    {
     "mota": "testua",
     "html": "Pero en 1 000 lanzamientos, aunque seamos tan permisivos como para tomar <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>, no es aceptable que, al azar, el 60 % de los lanzamientos hechos con una moneda sin defecto sean &quot;cruces&quot;. ¡La moneda tiene que tener algún defecto!"
    },
    {
     "mota": "sarea",
     "zutabeak": "3.5cm minmax(0,1fr)",
     "zelulak": [
      {
       "blokeak": [
        {
         "mota": "problema-gaia",
         "testua": "[8   TEST DE HIPÓTESIS SOBRE UNA PROPORCIÓN (UNILATERAL)]"
        }
       ]
      },
      {
       "blokeak": [
        {
         "mota": "testua",
         "html": "En las últimas elecciones, el 53 % de los electores de un pueblo votó a favor del alcalde. Hace poco se ha encuestado a 360 personas elegidas al azar y 176 han manifestado que están a favor del alcalde."
        },
        {
         "mota": "testua",
         "html": "¿Podemos afirmar con un nivel de significación del 90 % que el alcalde sigue manteniendo su fuerza en el pueblo?"
        }
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<em>Solución</em>"
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 1: Hipótesis</strong>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>H</mi><mn>0</mn></msub><mo>:</mo><mi>p</mi><mo>≥</mo><mn>0</mn><mo>,</mo><mn>53</mn></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La proporción de electores a favor del alcalde es igual o mayor que la de las últimas elecciones."
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 2: Región de aceptación</strong>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>−</mo><msub><mi>z</mi><mi>α</mi></msub><mo>⋅</mo><msqrt><mrow><msub><mi>p</mi><mn>0</mn></msub><mfrac><msub><mi>q</mi><mn>0</mn></msub><mi>n</mi></mfrac></mrow></msqrt><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn><mo>,</mo><mn>53</mn></mrow></math>;    <math display=\"inline\"><mrow><msub><mi>q</mi><mn>0</mn></msub><mo>=</mo><mn>1</mn><mo>−</mo><mn>0</mn><mo>,</mo><mn>53</mn><mo>=</mo><mn>0</mn><mo>,</mo><mn>47</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>z</mi><mi>α</mi></msub><mo>=</mo><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math>;    <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><mn>360</mn></mrow></math>"
    },
    {
     "mota": "zentratua",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>53</mn><mo>−</mo><mn>1</mn><mo>,</mo><mn>28</mn><mo>⋅</mo><msqrt><mfrac><mrow><mn>0</mn><mo>,</mo><mn>53</mn><mo>⋅</mo><mn>0</mn><mo>,</mo><mn>47</mn></mrow><mn>360</mn></mfrac></msqrt><mo>,</mo><mi>∞</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>496</mn><mo>;</mo><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 3: Comprobar</strong>"
    },
    {
     "mota": "testua",
     "html": "En la muestra obtenemos la proporción <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi><mo>=</mo><mfrac><mn>176</mn><mn>360</mn></mfrac><mo>=</mo><mn>0</mn><mo>,</mo><mn>489</mn></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "<strong>Paso 4: Decidir</strong>"
    },
    {
     "mota": "testua",
     "html": "La proporción de partidarios del alcalde que hemos obtenido en la muestra queda fuera de la región de aceptación. Por tanto, rechazamos la hipótesis: no podemos decir que el alcalde tenga la misma fuerza. Es decir, admitimos que los partidarios del alcalde son menos."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "11. Ejercicios y problemas propuestos",
   "blokeak": [
    {
     "mota": "azpititulua",
     "testua": "Ejercicios para practicar"
    },
    {
     "mota": "ariketa",
     "izena": "1",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La duración de las bombillas que fabrica una empresa tiene distribución normal, con media desconocida y desviación típica de 50 horas. Para estimar la duración se hacen experiencias con una muestra de tamaño <math display=\"inline\"><mi>n</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Calcula cuánto debe valer <math display=\"inline\"><mi>n</mi></math> para poder obtener un error inferior a 5 horas en la estimación con un nivel de confianza del 95 %."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "2",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se ha encuestado a 350 familias. Se les ha preguntado si tienen ordenador en casa y hemos sabido que en 75 casas lo hay. Estima cuál es la verdadera proporción de familias que tienen ordenador en casa, siendo el nivel de confianza del 95 %."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "3",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hemos tomado una muestra de 500 personas al azar en Euskal Herria. Hemos sabido que 220 personas leen algún periódico a diario. Con un nivel de confianza del 95 %, calcula en qué intervalo estará la verdadera proporción de quienes leen el periódico y explica el proceso utilizado para hacer ese cálculo."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "4",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "¿De qué tamaño habrá que tomar la muestra de una línea de producción para saber con una confianza del 95 % que la proporción estimada no se aleja más del 4 % de la verdadera? Según algunos estudios previos, sabemos que la proporción de productos defectuosos es 0,05."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "5",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al medir tiempos de reacción, el psicólogo ha estimado que la desviación típica de la reacción es de 0,5 segundos. ¿Cuántas mediciones deberá hacer para saber, con una confianza del 95 %, que el error de su estimación no será superior a 0,05 segundos?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "6",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una muestra de 50 jóvenes, la media diaria del tiempo que dedican al ocio es de 400 minutos y la desviación típica 63 minutos. Calcula el intervalo de confianza de la media de la población, siendo el nivel de confianza del 95 %."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "7",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los alumnos de Bachillerato de una determinada comunidad autónoma duermen cada día un número determinado de horas. Ese número de horas está distribuido según la ley <math display=\"inline\"><mi>μ</mi></math> de media desconocida y desviación típica 3. A partir de una muestra de tamaño 30, hemos obtenido la media muestral: 7 horas."
      },
      {
       "mota": "testua",
       "html": "Encuentra el intervalo con confianza del 95 %, <math display=\"inline\"><mi>μ</mi></math>, para la media de horas."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "8",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al medir el diámetro de los cojinetes que fabrica una empresa, hemos estimado que la desviación típica de ese diámetro es 0,05 cm. Hemos hecho 121 mediciones."
      },
      {
       "mota": "testua",
       "html": "¿Podemos afirmar, con un nivel de confianza del 99 %, que el error de la estimación de la medida no será superior a 0,01 cm?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "9",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un dentista ha afirmado que el 40 % de los niños de 10 años tiene caries en los dientes. Hemos tomado una muestra de 100 niños y hemos visto que 30 tienen caries."
      },
      {
       "mota": "testua",
       "html": "Usando la aproximación normal, comprueba si, según ese resultado, podemos desmentir lo que ha dicho el dentista, siendo el nivel de significación del 5 %."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "10",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "La duración de las bombillas de 100 vatios que fabrica una empresa tiene distribución normal, siendo la desviación típica 120 horas. La empresa asegura que la duración media es de 800 horas. Hemos tomado al azar 50 bombillas de un lote y, tras comprobarlo, hemos visto que su duración media es de 750 horas."
      },
      {
       "mota": "testua",
       "html": "Siendo el nivel de significación 0,01, ¿deberíamos devolver el lote por incumplimiento de la garantía?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "11",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "El fabricante de lámparas eléctricas está probando un método de producción nuevo. Darán por bueno el método si las lámparas que consigue producen una población normal de duración media de 2.400 horas y desviación típica de 300."
      },
      {
       "mota": "testua",
       "html": "Entre las lámparas hechas con ese método se toman 100 como muestra y obtenemos como resultado que su duración media es de 2 320 horas. ¿Podemos dar por buena la hipótesis de que el nuevo método de producción es válido, con un riesgo igual o inferior al 5 %?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "12",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Según dice en sus anuncios una empresa que fabrica productos farmacéuticos, uno de sus medicamentos reduce los síntomas de la alergia primaveral en el 90 % de la población. Una asociación de consumidores ha probado ese medicamento en una muestra de 200 miembros y ha visto que lo que dice el anuncio se ha cumplido en 170 personas."
      },
      {
       "mota": "testua",
       "html": "Decide si la asociación de consumidores puede dar por buena la afirmación de la empresa desde el punto de vista estadístico, siendo el nivel de significación 0,05."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "13",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "En un servicio de urgencias se ha visto que el tiempo de espera (en minutos) hasta que se atiende al enfermo tiene un modelo de probabilidad normal. Tomando una muestra de 100 personas que acudieron a ese servicio, se ha calculado que el tiempo de espera medio es de 14,25 minutos y la desviación típica de 2,5 minutos."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Podemos afirmar que el tiempo de espera en este servicio de urgencias no es de 15 minutos, siendo el nivel de significación del 5 % <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Qué conclusión podemos sacar si el nivel de significación fuera del 0,1 % <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>001</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>?"
      },
      {
       "mota": "testua",
       "html": "<em>c)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Hay contradicción entre las dos situaciones?"
      },
      {
       "mota": "testua",
       "html": "Justifica las respuestas."
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "14",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se quiere comprobar la hipótesis de que las pastillas de jabón duran 11 días o más. Para ello se han hecho 100 encuestas. Las respuestas son estas:"
      },
      {
       "mota": "zentratua",
       "blokeak": [
        {
         "mota": "taula",
         "goiburua": [],
         "lerroak": [
          [
           "IRAUPENA (egunak)",
           "5 9",
           "10 14",
           "15 19",
           "20 24"
          ],
          [
           "ERANTZUNAK",
           "24",
           "46",
           "19",
           "11"
          ]
         ]
        }
       ]
      },
      {
       "mota": "testua",
       "html": "¿Se puede hacer la hipótesis siendo el nivel de significación <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "15",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Según dice un laboratorio, un calmante quita el dolor de cabeza en 14 minutos en casos normales. Para comprobar esa información se eligen al azar 30 enfermos con dolor de cabeza y en la experiencia se toma como variable el tiempo que pasa desde que se toma el calmante hasta que se quita el dolor de cabeza."
      },
      {
       "mota": "testua",
       "html": "Los resultados obtenidos en esa muestra fueron estos: media 17 minutos y desviación típica 7 minutos. ¿Podemos considerar aceptable la afirmación del laboratorio con un nivel de confianza del 95 %?"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>Preguntas teóricas</strong>"
    },
    {
     "mota": "ariketa",
     "izena": "16",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con una muestra de 500 individuos, hemos estimado que la altura media de los soldados de un año determinado está entre 174,3 y 175,1 cm con un nivel de confianza del 90 % (problema de la página inicial, pág. 298)."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "Si la desviación típica de la población era desconocida, encuentra la media de la muestra <math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></math> y la desviación típica, <math display=\"inline\"><mi>s</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Cuál sería el intervalo si el tamaño de la muestra fuera la cuarta parte <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>500</mn><mo>:</mo><mn>4</mn><mo>=</mo><mn>125</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y tuviéramos el mismo nivel de confianza?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "17",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "A partir de una muestra aleatoria, hemos estimado el peso de los toros de un grupo mediante el intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>443</mn><mo>,</mo><mn>528</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. ¿Cuál es la media de la muestra obtenida?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "18",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mediante una muestra de 100 individuos, estimamos la altura de un conjunto de personas siendo el nivel de confianza del 95 %. El error máximo admisible que hemos obtenido es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>274</mn></mrow></math>. ¿Cuál es la desviación típica de la muestra obtenida?"
      }
     ]
    },
    {
     "mota": "ariketa",
     "izena": "19",
     "izar": 0,
     "blokeak": [
      {
       "mota": "testua",
       "html": "A partir de una muestra de tamaño 400, se estima la proporción de individuos que leen el periódico en una gran ciudad. La cota del error que hemos obtenido es 0,0392, siendo el nivel de confianza del 95 %."
      },
      {
       "mota": "testua",
       "html": "<em>a)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Podemos mejorar el nivel de confianza de la estimación con la misma muestra? ¿Qué le ocurriría a la cota del error?"
      },
      {
       "mota": "testua",
       "html": "<em>b)</em>"
      },
      {
       "mota": "testua",
       "html": "¿Sabes calcular la proporción obtenida en la muestra, <math display=\"inline\"><mrow><mi>p</mi><mi>r</mi></mrow></math>?"
      }
     ]
    }
   ]
  },
  {
   "id": "a23",
   "maila": 1,
   "izenburua": "Del cuaderno (CAx) — estimación e intervalos de confianza",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, páginas 18-19 (unidad 0011, doble página; #CAxp18/#CAxp19): Bayes con tres proveedores, paradoja de la tasa base y estadística de las mediciones. ⚠ CAMBIO DE IDIOMA: el cuaderno pasa aquí del inglés al euskera (contrario a la previsión del triaje); los enunciados en euskera son parcialmente ilegibles, el desarrollo es legible por completo y está comprobado. Cuatro ejercicios: (1) microchips, Bayes con 3 proveedores (en inglés), Pr(X|1)=0,005/0,0094=0,532; (2) tesis en 4 ubicaciones, Pr(A_1|B̄)=(1-p)/(4-p), complementario 3/(4-p); (3) taberna de Salamanca, paradoja de la tasa base, Pr(D|E)=0,0107 (árbol de Bayes rehecho a partir del manuscrito, CeTZ); (4) 6 mediciones de la magnitud A: media 32,96, s^2=62,29, sigma de Bessel=8,64, IC al 80 % [28,445, 37,475]. Sin correcciones (14 resultados comprobables, los 14 correctos, con Python/scipy/SymPy). Confianza media (las partes en euskera son ilegibles)",
     "hizkuntza": "en/eu"
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "Bayes con tres proveedores, paradoja de la tasa base y estadística de las mediciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Doble página 18-19 del cuaderno amarillo CAx.  En estas páginas el cuaderno pasa del *inglés al euskera* (por primera vez en la serie CAx). La parte superior izquierda aún está en inglés (el problema de Bayes de los microchips, citado literalmente); la parte inferior y toda la página derecha están escritas *en euskera*, a gran velocidad, y varias palabras de los enunciados son *ilegibles*. El desarrollo matemático, en cambio, es legible y se ha comprobado por completo. "
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Microchips: Bayes con tres proveedores (en inglés)"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en inglés):</strong> «An electronics assembly firm buys its microchips from three different suppliers: half of them are bought from firm X, whilst firms Y and Z supply <math display=\"inline\"><mrow><mn>30</mn><mi>%</mi></mrow></math> and <math display=\"inline\"><mrow><mn>20</mn><mi>%</mi></mrow></math> respectively. The percentages of defective chips are <math display=\"inline\"><mrow><mn>2</mn><mi>%</mi></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mi>%</mi></mrow></math> and <math display=\"inline\"><mrow><mn>4</mn><mi>%</mi></mrow></math> for X, Y and Z. The probabilities that a defective chip will fail two or more assembly-line tests are <math display=\"inline\"><mrow><mn>40</mn><mi>%</mi></mrow></math>, <math display=\"inline\"><mrow><mn>60</mn><mi>%</mi></mrow></math> and <math display=\"inline\"><mrow><mn>80</mn><mi>%</mi></mrow></math>, whilst all defective chips have a <math display=\"inline\"><mrow><mn>10</mn><mi>%</mi></mrow></math> chance of escaping detection. An assembler finds a chip that fails only one test. What is the probability that it came from supplier X?»"
    },
    {
     "mota": "testua",
     "html": "Como el número de tests (<math display=\"inline\"><mn>0</mn></math>, <math display=\"inline\"><mn>1</mn></math> o <math display=\"inline\"><mrow><mo>≥</mo><mn>2</mn></mrow></math> fallados) son excluyentes entre sí, la probabilidad de que un chip del proveedor X falle <strong>un solo</strong> test es la de ser defectuoso (<math display=\"inline\"><mrow><mn>2</mn><mi>%</mi></mrow></math>) y no caer en los otros dos casos: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>X</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>2</mn><mn>100</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>40</mn><mn>100</mn></mfrac><mo>−</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>50</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><mn>100</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>60</mn><mn>100</mn></mfrac><mo>−</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>04</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>30</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>012</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>4</mn><mn>100</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mfrac><mn>80</mn><mn>100</mn></mfrac><mo>−</mo><mfrac><mn>10</mn><mn>100</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>04</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>10</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>004</mn><mi>.</mi></mrow></math> El teorema de Bayes (recuadro rojo del manuscrito) se extiende a tres hipótesis, ya que los tres proveedores forman una partición (<math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>X</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>X</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>X</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>012</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>004</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>0</mn><mo>,</mo><mn>005</mn></mrow><mrow><mn>0</mn><mo>,</mo><mn>0094</mn></mrow></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>532</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Tesis en cuatro ubicaciones: probabilidad condicionada (en euskera)"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera, parcialmente ilegible):</strong> un trabajo de fin de grado está guardado en una de cuatro ubicaciones, y se puede perder con probabilidad <math display=\"inline\"><mi>p</mi></math>. Habiendo buscado en una ubicación y <strong>no haberlo encontrado</strong> (<math display=\"inline\"><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover></math>), ¿cuál es la probabilidad de que el trabajo esté en la primera ubicación (<math display=\"inline\"><msub><mi>A</mi><mn>1</mn></msub></math>)? Al principio todas las ubicaciones son igualmente probables (<math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>4</mn></mrow></math>). Con probabilidades condicionadas: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac><mo>=</mo><mfrac><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac><mn>1</mn><mn>4</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mfrac><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow><mn>4</mn></mfrac></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mi>.</mi></mrow></math> Si el trabajo no está en esa ubicación, la probabilidad de que esté en las otras tres es la complementaria: <math display=\"block\"><mrow><mn>1</mn><mo>−</mo><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>4</mn><mo>−</mo><mi>p</mi><mo>−</mo><mn>1</mn><mo>+</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mo>=</mo><mfrac><mn>3</mn><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Taberna de Salamanca: paradoja de la tasa base (árbol de Bayes)"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera, parcialmente ilegible):</strong> en una taberna de Salamanca están viendo un partido de fútbol; un cliente menciona a la Real. ¿Cuál es la probabilidad de que esa persona sea <strong>donostiarra</strong> (<math display=\"inline\"><mi>D</mi></math>), sabiendo esto: la probabilidad de encontrar a un donostiarra en una taberna de Salamanca es <math display=\"inline\"><mrow><mn>15</mn><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>1.000</mn><mn>.000</mn></mrow></math>; la de ser realista (<math display=\"inline\"><mi>E</mi></math>) siendo donostiarra es <math display=\"inline\"><mrow><mn>72</mn><mi>%</mi></mrow></math>; y la de ser realista no siendo donostiarra es <math display=\"inline\"><mrow><mn>1</mn><mi>/</mi><mn>1000</mn></mrow></math>. Aplicando el árbol de Bayes:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mn>15</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>72</mn></mrow><mrow><mn>15</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>72</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mn>15</mn><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>6</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>001</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>1</mn><mo>,</mo><mn>08</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>5</mn></mrow></msup></mrow><mrow><mn>1</mn><mo>,</mo><mn>0108</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>3</mn></mrow></msup></mrow></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>0107</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Medición de la magnitud <math display=\"inline\"><mi>A</mi></math>: estadística e intervalo de confianza <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera, parcialmente ilegible):</strong> la magnitud <math display=\"inline\"><mi>A</mi></math> se mide indirectamente, midiendo <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math> (la expresión de definición es ilegible). De seis mediciones de laboratorio se obtienen los valores de <math display=\"inline\"><mi>A</mi></math> (tercera fila); a partir de ellos se piden la estimación de <math display=\"inline\"><mi>A</mi></math> y la desviación estándar corregida."
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "testua",
     "html": "Media y varianza (sobre la muestra): <math display=\"block\"><mrow><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>39</mn><mo>,</mo><mn>72</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>26</mn><mo>,</mo><mn>57</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>29</mn><mo>,</mo><mn>12</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>30</mn><mo>,</mo><mn>40</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>24</mn><mo>,</mo><mn>82</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>47</mn><mo>,</mo><mn>09</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>96</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>6</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mi>i</mi></msub><mo>−</mo><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>6</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>45</mn><mo>,</mo><mn>70</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>40</mn><mo>,</mo><mn>83</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>14</mn><mo>,</mo><mn>74</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>55</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>66</mn><mo>,</mo><mn>26</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>199</mn><mo>,</mo><mn>66</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mfrac><mrow><mn>373</mn><mo>,</mo><mn>74</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>62</mn><mo>,</mo><mn>29</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>s</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>89</mn><mi>.</mi></mrow></math> Para estimar la dispersión de la población a partir de seis mediciones, la corrección de Bessel (factor <math display=\"inline\"><mrow><mi>N</mi><mi>/</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>N</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>): <math display=\"block\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>N</mi><mrow><mi>N</mi><mo>−</mo><mn>1</mn></mrow></mfrac><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>6</mn><mn>5</mn></mfrac><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>62</mn><mo>,</mo><mn>29</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>74</mn><mo>,</mo><mn>748</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>8</mn><mo>,</mo><mn>64</mn><mi>.</mi></mrow></math> El intervalo de confianza <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math>, siendo las dos colas simétricas (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>β</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, por tanto <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mi>γ</mi><mo>−</mo><mi>β</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math>) y utilizando el cuantil <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math>:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>A</mi><mo>±</mo></msub><mo>=</mo><mover><mi>A</mi><mo accent=\"true\">¯</mo></mover><mo>±</mo><mfrac><mi>σ</mi><msqrt><mi>N</mi></msqrt></mfrac><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>96</mn><mspace width=\"0.222em\"></mspace><mo>±</mo><mfrac><mrow><mn>8</mn><mo>,</mo><mn>64</mn></mrow><msqrt><mn>6</mn></msqrt></mfrac><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>28</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>96</mn><mspace width=\"0.222em\"></mspace><mo>±</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>515</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>28</mn><mo>,</mo><mn>445</mn><mspace width=\"0.222em\"></mspace><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>37</mn><mo>,</mo><mn>475</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math>"
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
        "<strong>Reverificado (Python/scipy, con fracciones exactas y con SymPy):</strong> los catorce resultados comprobables son <strong>correctos</strong>, incluidos los dos extremos del intervalo. Microchips: <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>X</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>100</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>3</mn><mn>250</mn></mfrac></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>Z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>250</mn></mfrac></mrow></math>; <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"prefix\">|</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>25</mn><mn>47</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>5319</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>532</mn></mrow></math>. Tesis (SymPy): <math display=\"inline\"><mfrac><mrow><mn>1</mn><mo>−</mo><mi>p</mi></mrow><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mn>3</mn><mrow><mn>4</mn><mo>−</mo><mi>p</mi></mrow></mfrac></math>. Salamanca: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>010685</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>0107</mn></mrow></math>. Estadística: media <math display=\"inline\"><mrow><mfrac><mrow><mn>197</mn><mo>,</mo><mn>72</mn></mrow><mn>6</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>953</mn></mrow></math>; las seis desviaciones cuadráticas (<math display=\"inline\"><mrow><mn>45</mn><mo>,</mo><mn>70</mn></mrow></math>, <math display=\"inline\"><mrow><mn>40</mn><mo>,</mo><mn>83</mn></mrow></math>, <math display=\"inline\"><mrow><mn>14</mn><mo>,</mo><mn>74</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>,</mo><mn>55</mn></mrow></math>, <math display=\"inline\"><mrow><mn>66</mn><mo>,</mo><mn>26</mn></mrow></math>, <math display=\"inline\"><mrow><mn>199</mn><mo>,</mo><mn>66</mn></mrow></math>) coinciden <strong>una a una</strong>; <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>62</mn><mo>,</mo><mn>29</mn></mrow></math>, <math display=\"inline\"><mrow><mi>s</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>89</mn></mrow></math>; <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>8</mn><mo>,</mo><mn>646</mn></mrow></math>; <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>2816</mn></mrow></math>; intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>28</mn><mo>,</mo><mn>445</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>37</mn><mo>,</mo><mn>475</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. (No está en el corpus EDF; comprobado con Python.)",
        "<strong>Sin correcciones:</strong> los catorce resultados son correctos. La novena unidad CAx a continuación, sin correcciones.",
        "<strong>⚠ Cambio de idioma (contrario a la previsión del triaje):</strong> el triaje anunciaba «el tramo final en inglés»; ocurre lo contrario —a partir de aquí predomina el euskera—. Conviene revisar la previsión del resto de unidades CAx.",
        "<strong>Figura (rehecha a partir del manuscrito):</strong> el árbol de Bayes de Salamanca con CeTZ. El manuscrito dibuja tres árboles de probabilidad; se ha rehecho el más claro y completo (Salamanca) para visualizar la paradoja de la tasa base.",
        "<strong>No se ha tocado (dudas/redondeos):</strong> en la página 18, en el denominador de <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>A</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">|</mo><mover><mi>B</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> aparece un <math display=\"inline\"><mi>t</mi></math> en lugar de <math display=\"inline\"><mi>p</mi></math> (trazo aislado; el resultado exige <math display=\"inline\"><mi>p</mi></math>). En la página 19 la expresión de definición de <math display=\"inline\"><mi>A</mi></math> es ilegible, y también muchas palabras de los enunciados. Media: <math display=\"inline\"><mrow><mn>32</mn><mo>,</mo><mn>953</mn></mrow></math> exacta, el autor utiliza <math display=\"inline\"><mrow><mn>32</mn><mo>,</mo><mn>96</mn></mrow></math> <strong>de modo coherente</strong> (los seis cuadrados calculados con <math display=\"inline\"><mrow><mn>32</mn><mo>,</mo><mn>96</mn></mrow></math> coinciden). El primer valor de la tabla es <math display=\"inline\"><mrow><mn>39</mn><mo>,</mo><mn>72</mn></mrow></math> (no <math display=\"inline\"><mrow><mn>39</mn><mo>,</mo><mn>79</mn></mrow></math>): lo escrito es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>39</mn><mo>,</mo><mn>72</mn><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>32</mn><mo>,</mo><mn>96</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>45</mn><mo>,</mo><mn>70</mn></mrow></math>.",
        "<strong>Fidelidad (confianza media):</strong> la fuente empieza en inglés y continúa en euskera; el enunciado en inglés está citado literalmente, los de euskera parcialmente ilegibles (desarrollo comprobado por completo). Dos etiquetas canónicas: <code>#CAxp18</code>, <code>#CAxp19</code>. Véase <code>koadernoa_cax_p018.typ</code>."
       ]
      }
     ]
    },
    {
     "mota": "iturria",
     "proiektua": "CAx cuaderno amarillo metmat probabilidad ingles",
     "xehetasuna": "CAx, páginas 20-21 (unidad 0012, doble página; #CAxp20/#CAxp21): fiabilidad de componentes — muestra, binomial y Bayes, CADENA ÚNICA. Íntegramente en euskera (cambio de 0011 confirmado). Un solo problema encadenado en cuatro apartados: (a) estadística de 10 mediciones, media 6,67, s^2=3,728, sigma de Bessel=2,04, IC al 80 % [5,84, 7,50]; (b) Bin(298;0,01), Pr(sin avería)=(0,99)^298=0,05, Pr(>=1)=0,95; (c) Bin(298;1e-4), Pr(estropeado)=1-(1-1e-4)^298=0,02936, Pr(>=2)=4,32e-4; (d) Bayes con los resultados de (b)/(c) como datos, Pr(A|estropeado)=(4/10000·0,95)/(...)=0,0125~0,01. Sin correcciones (resultados finales correctos). ⭐⭐ Incoherencia interna documentada: la suma de cuadrados escrita 3,74992 pero la sigma^2=4,14 utilizada exige 3,728 (correcto). FIGURA: el árbol de Bayes de (d) rehecho a partir del manuscrito (CeTZ). Paradoja de la tasa base por tercera vez. Confianza media. Comprobado con Python/scipy",
     "hizkuntza": "eu"
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Fiabilidad de componentes: muestra, distribución binomial y Bayes (cadena única)",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Doble página 20-21 del cuaderno amarillo CAx, <strong>íntegramente en euskera</strong> (confirmando el cambio iniciado en la unidad 0011). Es un único problema largo, <strong>encadenado</strong> en cuatro apartados: vida útil y averías de componentes de ordenador. El apartado (d) utiliza los resultados de (b) y (c) <strong>como datos</strong>, de modo que los cuatro apartados forman una cadena única."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(a) Estadística de la muestra e intervalo de confianza <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera):</strong> se ha medido diez veces la vida útil (en años) de los componentes del proveedor A: <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>9</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>,</mo><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>,</mo><mn>4</mn></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mn>10</mn><mo>,</mo><mn>2</mn></mrow></math>, <math display=\"inline\"><mrow><mn>6</mn><mo>,</mo><mn>3</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>,</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mn>8</mn><mo>,</mo><mn>8</mn></mrow></math>, <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>5</mn></mrow></math>, <math display=\"inline\"><mrow><mn>7</mn><mo>,</mo><mn>8</mn></mrow></math>. Con esa muestra, estimar la media y la desviación estándar de la población, y calcular el intervalo de confianza central <math display=\"inline\"><mrow><mi>%</mi><mn>80</mn></mrow></math> de la media (tomando la población como gaussiana). <math display=\"block\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>10</mn></munderover><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>3</mn><mo>,</mo><mn>9</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>4</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>10</mn><mo>,</mo><mn>2</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>3</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>0</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>8</mn><mo>,</mo><mn>8</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>5</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>8</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>67</mn><mo>,</mo></mrow></math> <math display=\"block\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mn>10</mn></munderover><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mi>i</mi></msub><mo>−</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>2</mn></msup><mo>=</mo><mfrac><mn>1</mn><mn>10</mn></mfrac><mrow><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>7</mn><mo>,</mo><mn>6729</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>6889</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>0729</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>5</mn><mo>,</mo><mn>6169</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>12</mn><mo>,</mo><mn>4609</mn><mspace width=\"0.222em\"></mspace></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><mi>+</mi><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1369</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1089</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>5369</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>7089</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>2769</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd></mtr></mtable></mrow><mo>=</mo><mfrac><mrow><mn>37</mn><mo>,</mo><mn>281</mn></mrow><mn>10</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn><mi>.</mi></mrow></math> Con la corrección de Bessel y el cuantil <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>28</mn></mrow></math> (<math display=\"inline\"><mrow><mi>γ</mi><mo>=</mo><mi>β</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mn>1</mn><mo>−</mo><mn>2</mn><mi>γ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>8</mn></mrow></math>): <math display=\"block\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mfrac><mi>n</mi><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></mfrac><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mfrac><mn>10</mn><mn>9</mn></mfrac><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>14</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>,</mo><mn>04</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msub><mi>x</mi><mo>±</mo></msub><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>±</mo><mfrac><mi>σ</mi><msqrt><mi>N</mi></msqrt></mfrac><msup><mi mathvariant=\"normal\">Φ</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>67</mn><mspace width=\"0.222em\"></mspace><mo>±</mo><mfrac><mrow><mn>2</mn><mo>,</mo><mn>04</mn></mrow><msqrt><mn>10</mn></msqrt></mfrac><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>1</mn><mo>,</mo><mn>28</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>67</mn><mspace width=\"0.222em\"></mspace><mo>±</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>83</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo>,</mo><mn>84</mn><mspace width=\"0.222em\"></mspace><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>50</mn><mo stretchy=\"false\" form=\"postfix\">]</mo><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Observación",
     "kolorea": "grisa",
     "etzana": false,
     "titulua": "Incoherencia interna documentada: suma de cuadrados",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El manuscrito escribe una lista de cuadrados (nueve sumandos legibles) cuya suma es <math display=\"inline\"><mrow><mn>37</mn><mo>,</mo><mn>4992</mn></mrow></math>, es decir <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>74992</mn></mrow></math>. <strong>Pero</strong> el valor <math display=\"inline\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>10</mn><mi>/</mi><mn>9</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>14</mn></mrow></math> de la línea siguiente exige <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn></mrow></math> —el valor <strong>correcto</strong> que se obtiene con los diez datos de la tabla—, no <math display=\"inline\"><mrow><mn>3</mn><mo>,</mo><mn>74992</mn></mrow></math> (que daría <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>17</mn></mrow></math>). Por tanto <strong>el autor utilizó el valor correcto</strong> para continuar, y a la lista intermedia le falta algún sumando o lo tiene mal copiado. No se puede saber cuál, y como el resultado utilizado es correcto, no se ha tocado. Todo lo demás es correcto."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(b) Distribución binomial: proveedor A"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera):</strong> un estudio más riguroso muestra que <math display=\"inline\"><mrow><mi>%</mi><mn>1</mn></mrow></math> de los componentes es defectuoso y falla durante el primer año. Cada ordenador tiene <math display=\"inline\"><mn>298</mn></math> componentes del proveedor A. ¿Cuál es la probabilidad de que un ordenador funcione sin avería el primer año? El número de fallos es <math display=\"inline\"><mrow><mi>X</mi><mo>∼</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Bin</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>298</mn><mo>;</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> (binomial = multinomial de dos categorías, como dice el autor): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>=</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>298</mn><mi>k</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>01</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>k</mi></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mn>298</mn><mo>−</mo><mi>k</mi></mrow></msup><mi>.</mi></mrow></math> Para no tener avería, <strong>todos</strong> los componentes deben estar sin defecto (<math display=\"inline\"><mrow><mi>X</mi><mo>=</mo><mn>0</mn></mrow></math>): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>298</mn><mn>0</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>01</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>0</mn></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>298</mn></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>298</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05</mn><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>95</mn><mi>.</mi></mrow></math>"
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(c) Distribución binomial: proveedor B"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera):</strong> la compañía contrata a un segundo proveedor (B), cuya tasa de componentes defectuosos es <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math>. ¿Cuál es la probabilidad de que un ordenador construido con componentes de B se estropee el primer año? ¿Y la de que fallen <strong>dos o más</strong> componentes? Ahora <math display=\"inline\"><mrow><mi>X</mi><mo>∼</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Bin</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>298</mn><mo>;</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">hondatu</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>1</mn><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>=</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>298</mn></msup><mo>=</mo><mn>1</mn><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>97064</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn><mi>.</mi></mrow></math> <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>−</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn><mspace width=\"0.222em\"></mspace><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mfrac linethickness=\"0\"><mn>298</mn><mn>1</mn></mfrac><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>297</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn><mspace width=\"0.222em\"></mspace><mo>−</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>028928</mn><mspace width=\"0.222em\"></mspace><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>32</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mi>.</mi></mrow></math> Contraste con (b): al bajar la tasa de fallos de <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></math> a <math display=\"inline\"><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></math>, la probabilidad de avería baja de <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> a <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>029</mn></mrow></math>."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "(d) Teorema de Bayes: los resultados anteriores como datos"
    },
    {
     "mota": "testua",
     "html": "<strong>Enunciado (en euskera):</strong> el <math display=\"inline\"><mrow><mn>4</mn><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>10.000</mn></mrow></math> de los ordenadores que quedan en la tienda están hechos con componentes de A (los demás, con los de B). Si en una tienda se compra un ordenador y falla el primer año, ¿cuál es la probabilidad de que esté hecho con componentes de A? El árbol de Bayes utiliza en las ramas el <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> de (b) y el <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math> de (c) (redondeado de <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>02936</mn></mrow></math>):"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Pr</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mspace width=\"0.222em\"></mspace><mo stretchy=\"false\" form=\"prefix\">|</mo><mspace width=\"0.222em\"></mspace><mtext mathvariant=\"normal\">hondatu</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>10.000</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>95</mn></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>10.000</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>95</mn><mspace width=\"0.222em\"></mspace><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>9996</mn><mspace width=\"0.222em\"></mspace><mi>/</mi><mspace width=\"0.222em\"></mspace><mn>10.000</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>03</mn></mrow></mfrac><mo>=</mo><mfrac><mrow><mn>3</mn><mo>,</mo><mn>8</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow><mrow><mn>3</mn><mo>,</mo><mn>0368</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>2</mn></mrow></msup></mrow></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>0125</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ezezaguna",
     "izena": "figure"
    },
    {
     "mota": "oharra",
     "titulua": "Notas de la fuente y comprobación",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Reverificado (Python/scipy, incluida la distribución binomial):</strong> los resultados finales de todos los apartados son <strong>correctos</strong>. (a) <math display=\"inline\"><mrow><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mfrac><mrow><mspace width=\"0.222em\"></mspace><mn>66</mn><mo>,</mo><mn>7</mn></mrow><mn>10</mn></mfrac><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>6</mn><mo>,</mo><mn>67</mn></mrow></math>; suma de las diez desviaciones cuadráticas <math display=\"inline\"><mrow><mn>37</mn><mo>,</mo><mn>281</mn></mrow></math>, <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn></mrow></math>, <math display=\"inline\"><mrow><mi>σ</mi><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>2</mn><mo>,</mo><mn>035</mn></mrow></math>, intervalo <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mn>5</mn><mo>,</mo><mn>84</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mn>7</mn><mo>,</mo><mn>50</mn><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>. (b) <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>99</mn><msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mn>298</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05004</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>05</mn></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math>. (c) <math display=\"inline\"><mrow><msup><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>1</mn><mo>−</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mn>298</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>97064</mn></mrow></math>, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">hondatu</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>02936</mn></mrow></math>; <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">Pr</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo>≥</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>34</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> exacto (el <math display=\"inline\"><mrow><mn>4</mn><mo>,</mo><mn>32</mn><mspace width=\"0.222em\"></mspace><mo>⋅</mo><msup><mn>10</mn><mrow><mi>−</mi><mn>4</mn></mrow></msup></mrow></math> del manuscrito es consecuencia de la resta de términos redondeados). (d) Bayes <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>0125</mn><mspace width=\"0.222em\"></mspace><mo>≈</mo><mspace width=\"0.222em\"></mspace><mn>0</mn><mo>,</mo><mn>01</mn></mrow></math>. (No está en el corpus EDF; comprobado con Python.)",
        "<strong>⭐⭐ Incoherencia interna (documentada, no corregida):</strong> la lista de cuadrados de (a) suma <math display=\"inline\"><mrow><mn>37</mn><mo>,</mo><mn>4992</mn></mrow></math> (<math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>74992</mn></mrow></math>), pero el <math display=\"inline\"><mrow><msup><mi>σ</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>4</mn><mo>,</mo><mn>14</mn></mrow></math> que utiliza el autor exige <math display=\"inline\"><mrow><msup><mi>s</mi><mn>2</mn></msup><mo>=</mo><mspace width=\"0.222em\"></mspace><mn>3</mn><mo>,</mo><mn>728</mn></mrow></math> (valor correcto). El resultado final y el intervalo son correctos; en la lista intermedia hay algún sumando mal copiado.",
        "<strong>⭐⭐ Cadena de cuatro apartados:</strong> (d) utiliza el <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> de (b) y el <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math> de (c) como datos. La cadena completa (muestra <math display=\"inline\"><mo>→</mo></math> binomial <math display=\"inline\"><mo>→</mo></math> binomial <math display=\"inline\"><mo>→</mo></math> Bayes) es coherente y está comprobada.",
        "<strong>Paradoja de la tasa base (tercera vez en el cuaderno):</strong> los componentes de A se estropean mucho más (<math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>95</mn></mrow></math> frente a <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>03</mn></mrow></math>), pero en la tienda son tan escasos (<math display=\"inline\"><mn>4</mn></math> / <math display=\"inline\"><mn>10.000</mn></math>) que el ordenador estropeado es muy probablemente de B. Misma estructura: el test médico de la página 2 y el del realista de la 19. Una tasa condicionada alta no basta frente a una base pequeña.",
        "<strong>Figura (rehecha a partir del manuscrito):</strong> el árbol de Bayes de (d) con CeTZ.",
        "<strong>No se ha tocado (dudas):</strong> en la primera línea se lee <math display=\"inline\"><mtext mathvariant=\"normal\">HAMALAU</mtext></math> («catorce»), pero hay diez mediciones y se utiliza <math display=\"inline\"><mrow><mi>N</mi><mo>=</mo><mn>10</mn></mrow></math> en todo; probablemente <math display=\"inline\"><mtext mathvariant=\"normal\">HAMAR</mtext></math> escrito deprisa. Enunciados escritos deprisa, algunas palabras de lectura incierta (p. ej. la línea de entrada de (c)).",
        "<strong>Fidelidad (confianza media):</strong> fuente íntegramente en euskera; desarrollo comprobado por completo, enunciados en la mejor lectura. Dos etiquetas canónicas: <code>#CAxp20</code>, <code>#CAxp21</code>. Véase <code>koadernoa_cax_p020.typ</code>."
       ]
      }
     ]
    }
   ]
  }
 ]
};
