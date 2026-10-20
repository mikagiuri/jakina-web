/* JAKINA · kapitulua «B1 - Logika, klaseak eta multzoak» (00aa_02logika), desde edicion2/kapituluak/00aa_02logika/00aa_02logika.typ
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
window.KAPITULUAK = window.KAPITULUAK || {};
KAPITULUAK["00aa_02logika"] = {
 "gakoa": "00aa_02logika",
 "titulua": "JAKINA - B1 - Lógica, clases y conjuntos",
 "azala": "B1 - Lógica, clases y conjuntos",
 "azpititulua": "Era I - Herramientas",
 "iturburua": "kapituluak/00aa_02logika/00aa_02logika.typ",
 "sarrera": [
  {
   "mota": "atala",
   "izenburua": "Lógica, clases y conjuntos",
   "deskribapena": [
    {
     "mota": "testua",
     "html": "Antes de que la física diga algo, hace falta una manera de decirlo. Este bloque pone sobre la mesa la estructura formal del razonamiento: qué es sacar una conclusión de unas premisas, qué es una clase y un conjunto, qué es una función y por qué la inducción es una herramienta de demostración legítima. Todo lo que viene después —el límite, la derivada, la ley de Newton, las ecuaciones de Maxwell— está escrito en este lenguaje."
    }
   ],
   "edukia": [
    "Lógica simbólica: deducción natural y cuantificación",
    "Conjuntos, relaciones y aplicaciones",
    "Los números naturales y el principio de inducción"
   ]
  },
  {
   "mota": "modulua",
   "kodea": "M01",
   "izenburua": "Lógica simbólica",
   "maila": "HERRAMIENTAS"
  },
  {
   "mota": "helburuak",
   "elementuak": [
    "Reconocer e interpretar fórmulas bien formadas.",
    "Construir demostraciones de deducción natural.",
    "Razonar con cuantificadores."
   ]
  },
  {
   "mota": "aurrebaldintzak",
   "elementuak": [
    "Ninguno: el curso empieza aquí."
   ]
  },
  {
   "mota": "iturria",
   "proiektua": "def_log_ds_v8.typ",
   "xehetasuna": "escrito por el usuario (100 % suyo): proposición, clases, Venn, silogismos, Kant — por traducir al euskera",
   "hizkuntza": "es"
  },
  {
   "mota": "oharra",
   "titulua": "Material para integrar más adelante",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El texto de lógica se ha separado del cuerpo principal. Véase <code>materialak_gero_integratzeko/logika.typ</code>."
    }
   ]
  },
  {
   "mota": "itzulgai",
   "proiektua": "logica_simbolica",
   "orrialdeak": "152",
   "jatorria": "es"
  }
 ],
 "atalak": [
  {
   "id": "a1",
   "maila": 1,
   "izenburua": "Lógica de primer orden: del lenguaje a la deducción",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Este primer itinerario parte de la necesidad de un lenguaje formal, precisa su sintaxis recursiva y lleva al lector hasta las reglas de inferencia primitivas y derivadas. El objetivo no es dar una lista breve de definiciones, sino aprender a construir cada concepto, a usarlo y a controlarlo en las demostraciones."
    },
    {
     "mota": "iturria",
     "proiektua": "Mosterín, Jesús — Lógica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "Introducción §§1–13; pp. 13–28 impresas; L01 adaptación al euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Criterio sobre la notación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El texto original de Mosterín usa <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> para el cuantificador general y <math display=\"inline\"><mi>V</mi></math> para el existencial. En esta parte usaremos los actuales <math display=\"inline\"><mo>∀</mo></math> y <math display=\"inline\"><mo>∃</mo></math>, respectivamente. Asimismo, haremos más legible la notación prefija compacta original mediante paréntesis y comas: por ejemplo, escribiremos <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>b</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en lugar de la cadena de tipo <math display=\"inline\"><mrow><mi>R</mi><mi>f</mi><mi>a</mi><mi>b</mi></mrow></math>. Esos cambios son de presentación; la estructura lógica se conserva."
      }
     ]
    }
   ]
  },
  {
   "id": "a2",
   "maila": 2,
   "izenburua": "1. Nombres y designadores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El sonido del habla o el texto escrito pueden dividirse en partes, pero no todas las partes señalan algo. Cuando una parte hace referencia a un objeto, una persona, un lugar u otro individuo, la llamaremos <strong>designador</strong>. Entre todos los designadores, los nombres son de los casos más simples: normalmente son cortos, bastante independientes del contexto, y se usan para dar una referencia estable."
    },
    {
     "mota": "testua",
     "html": "Los nombres de los números —<math display=\"inline\"><mn>1</mn></math>, <math display=\"inline\"><mn>2</mn></math>, <math display=\"inline\"><mn>3</mn></math>, …—, los nombres de ciudades, de personas o las siglas de instituciones son designadores. En cambio, expresiones como «yo» o «esto» también pueden nombrar algo, pero su referencia cambia al cambiar el hablante, el momento o la situación. Eso deja a la vista una primera distinción: lo importante no es la longitud de una expresión, sino cómo fija su referencia."
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
       "html": "El «yo» de la frase «Yo me he levantado temprano hoy» cambia según el hablante. El «Ane» de la frase «Ane se ha levantado temprano hoy», en cambio, es mucho más estable respecto del contexto. Ambos pueden ser designadores, pero no funcionan de la misma manera."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para empezar a formalizar, asignaremos letras minúsculas distintas a los distintos nombres del lenguaje ordinario: <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math>, <math display=\"inline\"><mi>c</mi></math>, …; cuando haga falta, pueden usarse subíndices, como <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>a</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>a</mi><mn>2</mn></msub></math>. La asignación no es una característica del objeto: es una convención, y debe mantenerse con coherencia en toda la formalización."
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
       "html": "Al analizar «June vive en Bilbao, y Bilbao es la capital de Bizkaia», podemos representar «June» mediante <math display=\"inline\"><mi>a</mi></math>, «Bilbao» mediante <math display=\"inline\"><mi>b</mi></math> y «Bizkaia» mediante <math display=\"inline\"><mi>c</mi></math>. Todavía no hemos formalizado la frase entera; solo hemos identificado y nombrado sus designadores."
      }
     ]
    }
   ]
  },
  {
   "id": "a3",
   "maila": 2,
   "izenburua": "2. Funtores y designadores compuestos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un nombre puede ser un designador simple, pero muchos designadores son compuestos. La expresión «el río que atraviesa la capital de Francia» designa un río, y dentro de ella hay otro designador, «la capital de Francia». En estructuras así, una parte de la expresión toma uno o varios designadores y produce un designador nuevo."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Funtorea y aritatea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Funtorea</strong> izendatzaile kopuru jakin bati aplikatuta izendatzaile berria eratzen duen adierazpen-eredua da. Behar duen argumentu kopuruari <strong>aritate</strong> se llama:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "argumentu bakarra hartzen badu, funtore unarioa da;",
        "bi hartzen baditu, bitarra;",
        "hiru hartzen baditu, hirutarra;",
        "oro har, <math display=\"inline\"><mi>n</mi></math> argumentu hartzen baditu, <math display=\"inline\"><mi>n</mi></math>-adikoa."
       ]
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
       "html": "«la madre de ...» es un funtor unario sobre personas. Aplicado al designador «Ane», da el designador «la madre de Ane». En los números naturales, «el siguiente de ...» también es unario; «el máximo común divisor de los números ... y ...», en cambio, es binario."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Representaremos los funtores con las letras <math display=\"inline\"><mi>f</mi></math>, <math display=\"inline\"><mi>g</mi></math>, <math display=\"inline\"><mi>h</mi></math>, … Si la aridad puede ser dudosa, la precisaremos con un superíndice: <math display=\"inline\"><msup><mi>f</mi><mn>1</mn></msup></math>, <math display=\"inline\"><msup><mi>g</mi><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mi>h</mi><mn>3</mn></msup></math>. Colocar el funtor antes de los argumentos es la convención básica de Mosterín; aquí, para facilitar la lectura, usaremos también la notación habitual <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Nombre y descripción compuesta",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El nombre señala directamente el objeto, pero un designador formado con funtores presenta el objeto mediante una relación con otros objetos. El nombre <math display=\"inline\"><mn>9</mn></math> designa un número; la expresión <math display=\"inline\"><msup><mn>3</mn><mn>2</mn></msup></math> designa el mismo objeto, pero mostrando que es el cuadrado de <math display=\"inline\"><mn>3</mn></math>. Aunque la referencia sea la misma, la estructura de la información no lo es."
      }
     ]
    }
   ]
  },
  {
   "id": "a4",
   "maila": 2,
   "izenburua": "3. Sentencias",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Respecto de un designador, no tiene sentido preguntar «¿es verdadero o falso?». «El río Sena» no es verdadero ni falso: nombra algo. Otras expresiones, en cambio, pueden tener valor de verdad. Esas son las <strong>sentencias</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sententzia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una sentencia es una expresión lingüística que puede ser verdadera o falsa, aunque de momento no sepamos cuál es su valor de verdad. «París es la capital de Francia» y «<math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>12</mn></mrow></math>» son ambas sentencias: la primera es verdadera y la segunda falsa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El valor de verdad de muchas sentencias del lenguaje ordinario depende del contexto. La frase «Ayer fui al cine» no se puede evaluar sin saber quién es el hablante y qué día es. En la formalización buscaremos, en la medida de lo posible, sentencias más independientes del contexto; añadir fechas, nombres u otras precisiones reduce la ambigüedad."
    },
    {
     "mota": "testua",
     "html": "<strong>Designación y afirmación.</strong> Entre un designador y un objeto hay una relación de referencia. En el caso de una sentencia, en cambio, tenemos una afirmación completa. En la intuición clásica, una sentencia es verdadera si se da la situación que describe, y falsa en caso contrario. Más adelante la semántica formulará esa intuición de forma precisa; por ahora, el objetivo es no confundir los dos tipos de expresión."
    }
   ]
  },
  {
   "id": "a5",
   "maila": 2,
   "izenburua": "4. Relatores o símbolos de predicado",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Un funtor produce un designador nuevo a partir de designadores. Otros modelos de expresión, en cambio, toman designadores y producen una sentencia. Mosterín los llama <strong>relatores</strong>; hoy se les suele llamar <strong>símbolos de predicado</strong> o <strong>símbolos de relación</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Erlatzailea y aritatea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La aridad de un relator es el número de designadores que necesita para formar una sentencia. «… está enfermo» es unario; «… quiere a …» es binario; y «… está entre … y …» es ternario. En general, un relator que necesita <math display=\"inline\"><mi>n</mi></math> designadores es <math display=\"inline\"><mi>n</mi></math>-ádico."
      },
      {
       "mota": "testua",
       "html": "Los relatores los representaremos con letras mayúsculas <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mi>Q</mi></math>, <math display=\"inline\"><mi>R</mi></math>, <math display=\"inline\"><mi>S</mi></math>, …, y con superíndices cuando haga falta la aridad: <math display=\"inline\"><msup><mi>P</mi><mn>1</mn></msup></math>, <math display=\"inline\"><msup><mi>R</mi><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mi>S</mi><mn>3</mn></msup></math>. El orden de los argumentos del relator es un dato lógico: <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no son, en general, la misma sentencia."
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
       "html": "Tomemos <math display=\"inline\"><mi>a</mi></math> = «Jon», <math display=\"inline\"><mi>b</mi></math> = «Leire», <math display=\"inline\"><mi>f</mi></math> = «la madre de ...», <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> quiere a <math display=\"inline\"><mi>y</mi></math>» y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> soporta a <math display=\"inline\"><mi>y</mi></math>». Los componentes predicativos de la frase «Jon quiere a su madre, pero no soporta a Leire» son <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Mientras no añadamos conectores, hemos identificado dos sentencias simples."
      }
     ]
    }
   ]
  },
  {
   "id": "a6",
   "maila": 2,
   "izenburua": "5. Conectores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Partículas como «no», «y», «o», «si ... entonces ...» y «si y solo si» forman sentencias compuestas a partir de sentencias simples. El aspecto lógico principal de los conectores es que el valor de verdad del resultado lo determinan los valores de verdad de los componentes."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Bost konektore nagusiak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi></mrow></math> es verdadera cuando <math display=\"inline\"><mi>A</mi></math> es falsa, y falsa cuando <math display=\"inline\"><mi>A</mi></math> es verdadera.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>∧</mo><mi>B</mi></mrow></math> verdadera da bi osagaiak verdaderak direnean bakarrik.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>∨</mo><mi>B</mi></mrow></math>-n “edo” inklusiboa da: falsa da bi osagaiak falsak direnean bakarrik.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> es falsa solo en el caso en que <math display=\"inline\"><mi>A</mi></math> es es verdadera y <math display=\"inline\"><mi>B</mi></math> es falsa.",
        "<math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> verdadera da bi osagaiek egia-balio bera dutenean."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las partículas del lenguaje ordinario pueden tener matices retóricos. La palabra «pero» sugiere contraste, pero en cuanto a las condiciones de verdad puede comportarse como «y». La formalización no recoge todos los matices; selecciona la estructura lógica que se quiere analizar."
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
       "html": "La frase del apartado anterior puede recogerse así: <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. El contraste del «pero» no aparece en esa fórmula; la condición de verdad conjunta de las dos afirmaciones, sí."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "<strong>«O» inclusivo.</strong> El «o» del lenguaje ordinario es a veces excluyente y otras veces inclusivo. Aquí <math display=\"inline\"><mi>∨</mi></math> será inclusivo: cuando <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son ambas verdaderas, <math display=\"inline\"><mrow><mi>A</mi><mo>∨</mo><mi>B</mi></mrow></math> también es verdadera. Cuando se quiera expresar «una de las dos, pero no ambas», hay que formalizar una condición adicional."
    }
   ]
  },
  {
   "id": "a7",
   "maila": 2,
   "izenburua": "6. Variables",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La matemática usa variables para hacer afirmaciones generales. Por ejemplo, al escribir <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo>+</mo><mi>x</mi></mrow></math> no se habla de dos números concretos; se marcan los lugares en que pueden ponerse números adecuados. Los pronombres del lenguaje ordinario también pueden tener una función parecida: decir «él lo ha hecho» deja un lugar con la referencia sin precisar."
    },
    {
     "mota": "testua",
     "html": "Representaremos las variables con las letras <math display=\"inline\"><mi>u</mi></math>, <math display=\"inline\"><mi>v</mi></math>, <math display=\"inline\"><mi>w</mi></math>, <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mi>z</mi></math>, …; cuando haga falta, se usarán subíndices <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>x</mi><mn>2</mn></msub></math>, … Una variable no nombra por sí misma un objeto concreto. Su función es dejar un lugar en la estructura de las fórmulas, para que luego lo precisen la sustitución o la cuantificación."
    }
   ]
  },
  {
   "id": "a8",
   "maila": 2,
   "izenburua": "7. Términos y fórmulas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Si en una sentencia sustituimos un designador por una variable, podemos obtener una expresión que todavía no está completa para ser verdadera o falsa. A eso lo llamaremos <strong>fórmula abierta</strong> en esta introducción intuitiva. Asimismo, al sustituir por una variable un designador interior a otro designador obtenemos un <strong>término abierto</strong>."
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
       "html": "De la sentencia «Jon quiere a su prima», sustituyendo el designador «Jon» por la variable <math display=\"inline\"><mi>x</mi></math>, se obtiene la fórmula abierta «<math display=\"inline\"><mi>x</mi></math> quiere a su prima». De la sentencia «<math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>7</mn><mo>&gt;</mo><mn>10</mn></mrow></math>», sustituyendo los dos números, se obtiene <math display=\"inline\"><mrow><mi>x</mi><mo>+</mo><mi>y</mi><mo>&gt;</mo><mn>10</mn></mrow></math>. Esta última no es por sí misma verdadera ni falsa: depende de los valores dados a <math display=\"inline\"><mi>x</mi></math> y a <math display=\"inline\"><mi>y</mi></math>."
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
       "html": "En el designador «la madre de Ane», sustituyendo «Ane» por la variable <math display=\"inline\"><mi>x</mi></math> se obtiene el término abierto «la madre de <math display=\"inline\"><mi>x</mi></math>». «La madre de Ane» puede usarse para hacer referencia a una persona; «la madre de <math display=\"inline\"><mi>x</mi></math>», sin precisar <math display=\"inline\"><mi>x</mi></math>, no designa a una única persona."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sarrerako sailkapen intuitiboa",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "La palabra <strong>término</strong> abarca los designadores y los términos abiertos.",
        "La palabra <strong>fórmula</strong> abarca las sentencias y las fórmulas abiertas.",
        "Un designador nombra un objeto; un término abierto aún no tiene una referencia única.",
        "Una sentencia tiene valor de verdad; una fórmula abierta no tiene un valor de verdad fijo."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Esta clasificación es orientativa. En la parte siguiente se dará la formación precisa de términos y fórmulas mediante reglas recursivas; entonces ya no dependeremos de la mera intuición del lenguaje ordinario."
    }
   ]
  },
  {
   "id": "a9",
   "maila": 2,
   "izenburua": "8. Cuantificadores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una de las vías principales para construir una sentencia a partir de una fórmula abierta es la cuantificación. El cuantificador general hace una afirmación sobre todos los objetos de una clase; el existencial, que al menos un objeto cumple la condición."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Kuantifikatzaile orokorra y existentziala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dio dagokion eremuko <math display=\"inline\"><mi>x</mi></math> guztiek <math display=\"inline\"><mi>φ</mi></math> betetzen dutela. <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dio eremuan badela gutxienez <math display=\"inline\"><mi>x</mi></math> bat <math display=\"inline\"><mi>φ</mi></math> betetzen duena. Kuantifikatzailearen ondoko aldagaia <strong>kuantifikatutako aldagaia</strong> da."
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
       "html": "Tomando <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> es amigo mío» y <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> es de fiar», «todos mis amigos son de fiar» se formaliza así: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si la clase es finita, se puede ver la semejanza entre la cuantificación y los conectores repetidos. Si un club tiene solo tres miembros, <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><mi>b</mi></math> y <math display=\"inline\"><mi>c</mi></math>, la afirmación «todos los miembros son honestos» puede explicarse con la conjunción <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; «algún miembro es ladrón», en cambio, con la disyunción <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (eremu finitua: </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> ) </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>↔</mo><mspace width=\"1.0em\"></mspace><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La semejanza no es una sustitución general. Si el dominio es infinito, no podemos escribir una conjunción o una disyunción infinita en una fórmula finita ordinaria. Para expresar que todos los números naturales tienen la propiedad <math display=\"inline\"><mi>P</mi></math> necesitamos <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; la cadena <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>…</mi></mrow></math> no terminaría nunca."
    }
   ]
  },
  {
   "id": "a10",
   "maila": 2,
   "izenburua": "9. Descripciones y descriptor",
   "blokeak": [
    {
     "mota": "testua",
     "html": "A veces nombramos un objeto mediante una sola de sus características: «el único objeto que cumple esta condición». A una expresión así la llamaremos <strong>descripción</strong>. La descripción es un designador especial, porque a partir de una fórmula abierta quiere seleccionar un individuo."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Deskriptorea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El término <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> representa «el <math display=\"inline\"><mi>x</mi></math> que cumple <math display=\"inline\"><mi>φ</mi></math>», cuando el individuo que cumple esa condición es único. Mosterín usa la iota griega y la pone delante de una variable como un cuantificador, pero el resultado no es una fórmula: es un <strong>término</strong>."
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
       "html": "Tomando <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> mató a <math display=\"inline\"><mi>k</mi></math>», y si el nombre <math display=\"inline\"><mi>k</mi></math> representa a Robert Kennedy, «la persona que mató a Robert Kennedy» puede escribirse así: <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La descripción designará a una persona si y solo si hay una única persona que cumple la condición."
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
       "html": "Tomando <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> es habitante de Barcelona» y <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>y</mi></math> es más viejo que <math display=\"inline\"><mi>x</mi></math>», «el habitante más viejo de Barcelona» puede explicarse así: <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "También entre los números pueden usarse descripciones. Si <math display=\"inline\"><mrow><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> expresa «<math display=\"inline\"><mi>x</mi></math> es divisor de <math display=\"inline\"><mi>n</mi></math>» y <math display=\"inline\"><mrow><mi>x</mi><mo>≤</mo><mi>y</mi></mrow></math> expresa el orden habitual, el máximo común divisor de <math display=\"inline\"><mi>n</mi></math> y <math display=\"inline\"><mi>m</mi></math> puede presentarse como el <math display=\"inline\"><mi>x</mi></math> que cumple esta condición:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>≤</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "No todas las descripciones son <strong>propias</strong>. El término <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>∀</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>≤</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> selecciona el menor número natural; el término <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>∀</mo><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>≤</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en cambio, quiere seleccionar el mayor, pero no existe un número natural mayor. Este último es una descripción impropia."
    },
    {
     "mota": "oharra",
     "titulua": "Tratamiento de las descripciones impropias",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Hay dos opciones clásicas. Por un lado, las descripciones que no garantizan una referencia única pueden dejarse fuera del lenguaje. Por otro, a todas las descripciones impropias se les puede asignar en cada interpretación un mismo objeto fijado de antemano. Mosterín elige la segunda vía, en la línea de Frege y Carnap, para aligerar las formalizaciones y la metateoría técnica. La elección parece artificial, pero tiene consecuencias precisas y habrá que volver a explicarla en la semántica."
      }
     ]
    }
   ]
  },
  {
   "id": "a11",
   "maila": 2,
   "izenburua": "10. Paréntesis y alcance",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Incluso dando las mismas palabras en el mismo orden, cambiar las pausas o la puntuación puede cambiar la estructura. En lógica, los paréntesis hacen el trabajo de las pausas orales y de la puntuación escrita: precisan a qué parte afecta un conector, un cuantificador o un descriptor."
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
       "html": "Tomemos <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «Jon habla francés», <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «Jon habla inglés» y <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «Pedro entiende a Jon». Estas dos estructuras no son iguales:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: si habla francés, no se impone nada sobre la comprensión; si habla inglés, Pedro no le entiende.",
        "<math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: aunque lo haga en cualquiera de los dos idiomas, Pedro no le entiende."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Ocurre lo mismo en matemáticas: <math display=\"inline\"><mrow><mn>8</mn><mo>+</mo><mn>7</mn><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>43</mn></mrow></math>, pero <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>8</mn><mo>+</mo><mn>7</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⋅</mo><mn>5</mn><mo>=</mo><mn>75</mn></mrow></math>. Los paréntesis cambian la agrupación de las operaciones y, con ella, el resultado."
    },
    {
     "mota": "testua",
     "html": "El alcance del cuantificador también lo fijan los paréntesis. <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una fórmula abierta, porque la última <math display=\"inline\"><mi>x</mi></math> no está dentro del alcance del primer cuantificador. <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, en cambio, puede ser una sentencia: las dos apariciones de <math display=\"inline\"><mi>x</mi></math> están cuantificadas."
    },
    {
     "mota": "testua",
     "html": "En las descripciones la agrupación es todavía más crítica. <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es un término: selecciona el objeto que cumple las dos condiciones. La cadena <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en cambio, quiere conectar un término y una fórmula; por tanto, no está bien formada."
    }
   ]
  },
  {
   "id": "a12",
   "maila": 2,
   "izenburua": "11. Formalización",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formalizar no es sustituir automáticamente cada palabra por un símbolo. Primero hay que analizar la expresión ordinaria: qué designadores, sentencias, funtores y relatores tiene, y cómo se enlazan esos componentes. Después se asignan de forma coherente nombres y símbolos distintos. Por último, con conectores, cuantificadores, descriptores, variables y paréntesis se reconstruye la estructura de la expresión."
    },
    {
     "mota": "testua",
     "html": "<strong>Secuencia de trabajo para formalizar:</strong>"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Identificar el tipo y los componentes de la expresión.",
      "Distinguir los distintos nombres, funtores y relatores.",
      "Asignar a cada uno un símbolo único y la aridad adecuada.",
      "Precisar el alcance de los conectores y cuantificadores.",
      "Escribir la fórmula o el término, usando correctamente los paréntesis.",
      "Hacer una última lectura: ¿la fórmula conserva la estructura lógica original?"
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
       "html": "Tomemos el dominio de los números naturales. <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> es par», <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «<math display=\"inline\"><mi>x</mi></math> es impar», <math display=\"inline\"><mrow><mi>x</mi><mo>&lt;</mo><mi>y</mi></mrow></math> el orden habitual y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> = «el siguiente de <math display=\"inline\"><mi>x</mi></math>». Entonces:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "«hay algún número par menor que tres»: <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;",
        "«hay como máximo un número par menor que tres»: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mo>∧</mo><mi>y</mi><mo>&lt;</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;",
        "«hay un único número par menor que tres»: <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>&lt;</mo><mn>3</mn><mo>∧</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>y</mi><mo>&lt;</mo><mn>3</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;",
        "«el siguiente de un número par es impar»: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>;",
        "«el siguiente de cuatro es cinco»: <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>5</mn></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Estos ejemplos muestran que «al menos uno», «como máximo uno» y «único» no son equivalentes. La existencia exige un testigo; la unicidad, en cambio, exige que, si hay dos candidatos, sean iguales. Para decir «único» hacen falta los dos componentes."
    },
    {
     "mota": "testua",
     "html": "Los cuatro tipos clásicos de sentencia de la silogística de Aristóteles también toman una estructura clara en notación de primer orden. Si <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son predicados unarios:"
    },
    {
     "mota": "kutxa",
     "kolorea": "laranja",
     "titulua": null,
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">a: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">i: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">e: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
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
       "html": "<math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">o: </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Expresan, respectivamente: que todos los A son B; que hay algún A que es B; que ningún A es B; y que hay algo que es A pero no B. Esas estructuras son independientes de los nombres concretos: pueden ponerse «griego», «europeo» y «mortal», pero el molde lógico sigue siendo el mismo."
    }
   ]
  },
  {
   "id": "a13",
   "maila": 2,
   "izenburua": "12. Formalismos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La formalización puede llevarnos del lenguaje ordinario a una fórmula concreta. Pero también puede plantearse otra pregunta: ¿qué cadenas pueden construirse a partir de un alfabeto y unas reglas dadas, sin haber dado antes ningún significado? Esa pregunta pone en el centro el <strong>formalismo</strong>."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Formalismoa y hizkuntza formala",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un formalismo está formado por un conjunto de signos y las reglas para combinarlos. Por sí mismo, ese juego de signos no tiene significado. Cuando a los signos se les asignan objetos, funciones y relaciones, el formalismo se <strong>interpreta</strong>; entonces, el formalismo interpretado actúa como lenguaje formal."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Los formalismos de primer orden tienen varios componentes comunes: variables, conectores, cuantificadores, descriptor e igualdad. Otros componentes distinguen un formalismo de otro: las constantes individuales, los funtores y los relatores, cada uno con su aridad."
    },
    {
     "mota": "testua",
     "html": "Por ejemplo, en un formalismo con los mismos símbolos pueden estar la constante <math display=\"inline\"><mi>a</mi></math>, el funtor unario <math display=\"inline\"><mi>f</mi></math> y el relator binario <math display=\"inline\"><mi>R</mi></math>. En una interpretación, <math display=\"inline\"><mi>a</mi></math> puede ser un número, <math display=\"inline\"><mi>f</mi></math> la función del siguiente y <math display=\"inline\"><mi>R</mi></math> la relación «es menor que». En otra interpretación, <math display=\"inline\"><mi>a</mi></math> puede ser una persona, <math display=\"inline\"><mi>f</mi></math> su madre y <math display=\"inline\"><mi>R</mi></math> la relación «quiere a». Las cadenas sintácticas son las mismas; el significado, no."
    },
    {
     "mota": "testua",
     "html": "Esa distinción establece el límite entre la sintaxis y la semántica. La sintaxis estudia los signos y sus reglas de formación, sin interpretación. La semántica estudiará las interpretaciones y las condiciones de verdad. El orden didáctico también tiene su razón: primero hay que saber qué está bien formado, para estudiar luego qué significado puede darse a lo bien formado."
    }
   ]
  },
  {
   "id": "a14",
   "maila": 2,
   "izenburua": "13. Lenguaje objeto y metalenguaje",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Para estudiar un lenguaje usamos otro lenguaje. Podemos usar el castellano para hablar de una frase del latín; en ese caso el latín es el <strong>lenguaje objeto</strong> y el castellano el <strong>metalenguaje</strong>. En lógica ocurre lo mismo: las fórmulas del formalismo son lo estudiado, y las definiciones, explicaciones y demostraciones sobre ellas se dan en otro lenguaje."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Erabiltzea y aipatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al usar una fórmula del lenguaje objeto, actuamos dentro del formalismo. Al decir cuántos signos tiene esa fórmula, cómo está construida o qué variables tiene, <strong>mencionamos</strong> la fórmula y actuamos en el metalenguaje. Confundir los niveles puede crear definiciones circulares y ambigüedades."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En JAKINA, la notación de primer orden estudiada será el lenguaje objeto. El castellano, la notación matemática complementaria y los metasímbolos que entran en las explicaciones serán el metalenguaje. Por ejemplo, <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede ser una fórmula del lenguaje objeto; la frase «<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una fórmula atómica», en cambio, es del metalenguaje."
    },
    {
     "mota": "oharra",
     "titulua": "Carácter de esta introducción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los conceptos presentados aquí son una primera aproximación intuitiva. Nombres, funtores, fórmulas, cuantificadores y descripciones ya dan una dirección, pero las definiciones sintácticas precisas vendrán en la parte siguiente. La función de la introducción es preparar el vocabulario y los problemas; la gramática recursiva fijará después qué cadenas de signos son realmente términos o fórmulas."
      }
     ]
    }
   ]
  },
  {
   "id": "a15",
   "maila": 2,
   "izenburua": "I.1. Signos comunes a todos los formalismos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Al estudiar la sintaxis de un formalismo, el primer paso no es dar significado a los signos, sino precisar qué signos pueden usarse y cómo pueden combinarse. Cada alfabeto tiene dos componentes: los signos comunes que se repiten en todos los formalismos y los signos especiales de ese formalismo concreto."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Aldagaiak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las variables forman un conjunto infinito pero recursivamente numerable de signos distintos. Eso significa que a cada variable se le puede asignar un número natural, su <strong>índice</strong>, y a cada número natural una variable. En el metalenguaje usaremos <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>v</mi><mo>,</mo><mi>w</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> y, cuando haga falta, subíndices, para mencionar variables arbitrarias."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El índice no fija el significado de la variable. Las variables podrían escribirse con círculos, rayas u otras figuras; lo que importa a la sintaxis es que los signos sean distintos entre sí y puedan enumerarse de forma efectiva. En JAKINA usaremos las letras latinas habituales, porque ayudan a la lectura."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Zeinu logikoak y berdintza",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el lenguaje básico de primer orden se distinguen cinco conectivas, dos cuantificadores y un descriptor:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "ezeztapena: <math display=\"inline\"><mo>¬</mo></math>;",
        "konjuntzioa, disjuntzioa, baldintza y baliokidetasuna: <math display=\"inline\"><mi>∧</mi></math>, <math display=\"inline\"><mi>∨</mi></math>, <math display=\"inline\"><mo>→</mo></math> y <math display=\"block\"><mo>↔</mo></math>;",
        "kuantifikatzaile unibertsala y existentziala: <math display=\"inline\"><mo>∀</mo></math> y <math display=\"inline\"><mo>∃</mo></math>;",
        "deskriptorea: <math display=\"inline\"><mi>ι</mi></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Además de esos, está la igualdad, <math display=\"inline\"><mo>=</mo></math>, un predicado binario especial que aparece en todos los formalismos. Esas familias y la familia de las variables son disjuntas entre sí: un signo no puede tener dos funciones sintácticas a la vez."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Lenguaje objeto y metalenguaje",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usamos esos signos gráficos como <strong>nombres metalingüísticos</strong> de los signos del formalismo. Con ellos construimos expresiones del lenguaje objeto, pero la explicación que damos en castellano sobre esas expresiones es del metalenguaje. Distinguir los dos niveles evita tratar un signo y el nombre de ese signo como si fueran lo mismo."
      }
     ]
    }
   ]
  },
  {
   "id": "a16",
   "maila": 2,
   "izenburua": "I.2. Signos especiales de un formalismo",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Formalismos distintos pueden compartir los mismos signos lógicos, pero sus constantes, funciones y predicados cambian según el ámbito que estudian. Por eso una signatura no tiene por qué contener signos de cada familia, y puede tener un signo, una cantidad finita o infinitos numerables."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sinaduraren zeinu ez-logikoak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los signos especiales de un formalismo son estos:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>Konstante indibidualak</strong>: <math display=\"inline\"><mrow><mi>a</mi><mo>,</mo><mi>b</mi><mo>,</mo><mi>c</mi><mo>,</mo><mi>…</mi></mrow></math>; objektu bakar bat izendatzeko gai diren oinarrizko zeinuak.",
        "<strong>Funtzio-sinboloak</strong>: <math display=\"inline\"><mrow><msup><mi>f</mi><mi>n</mi></msup><mo>,</mo><msup><mi>g</mi><mi>n</mi></msup><mo>,</mo><msup><mi>h</mi><mi>n</mi></msup><mo>,</mo><mi>…</mi></mrow></math>; <math display=\"inline\"><mi>n</mi></math> argumentu hartzen dituzten eraikitzaileak, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>.",
        "<strong>Predikatu-sinboloak</strong>: <math display=\"inline\"><mrow><msup><mi>P</mi><mi>n</mi></msup><mo>,</mo><msup><mi>Q</mi><mi>n</mi></msup><mo>,</mo><msup><mi>R</mi><mi>n</mi></msup><mo>,</mo><mi>…</mi></mrow></math>; <math display=\"inline\"><mi>n</mi></math> argumentuko formula atomikoak eratzen dituzten zeinuak, <math display=\"inline\"><mrow><mi>n</mi><mo>≥</mo><mn>1</mn></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "El superíndice <math display=\"inline\"><mi>n</mi></math> indica la aridad; un subíndice, en cambio, indica el lugar que ocupa en la lista de los signos de esa aridad. Todas las familias son disjuntas entre sí y con las familias de los signos comunes."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La igualdad es una excepción organizada: en todos los formalismos hay al menos un predicado binario, la propia igualdad. Los demás predicados binarios, constantes o funciones los decide la signatura del formalismo."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Dos signaturas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un lenguaje sobre el orden puede tener el predicado binario <math display=\"inline\"><mo>&lt;</mo></math> y ninguna constante especial. Una signatura para la aritmética, en cambio, puede tener la constante <math display=\"inline\"><mn>0</mn></math>, la función unaria <math display=\"inline\"><mi>s</mi></math> y las funciones binarias <math display=\"inline\"><mi>+</mi></math> y <math display=\"inline\"><mi>⋅</mi></math>. Los signos lógicos son los mismos en ambos lenguajes; los signos especiales los distinguen."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Alfabetoa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El <strong>alfabeto</strong> de un formalismo es el conjunto de sus signos comunes y especiales. El alfabeto dice con qué piezas se puede trabajar; aún no dice qué secuencia de piezas es término o fórmula."
      }
     ]
    }
   ]
  },
  {
   "id": "a17",
   "maila": 2,
   "izenburua": "I.3. Cadenas de signos",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los signos de un alfabeto pueden escribirse uno tras otro, admitiendo repeticiones. No toda sucesión así obtenida es automáticamente una expresión correcta. La gramática debe distinguir las sucesiones bien formadas de los meros amontonamientos de signos."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Kate, luzera y kateatzea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una <strong>cadena de signos</strong> es una secuencia finita y no vacía de signos de un alfabeto. La longitud de la cadena <math display=\"inline\"><mi>ξ</mi></math> , <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">long</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ξ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, es su número de signos."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>ξ</mi><mn>1</mn></msub><msub><mi>ξ</mi><mn>2</mn></msub></mrow></math> kateatzea <math display=\"inline\"><msub><mi>ξ</mi><mn>1</mn></msub></math>-en ondoren <math display=\"inline\"><msub><mi>ξ</mi><mn>2</mn></msub></math> idatziz lortzen da, eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> long</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mn>1</mn></msub><msub><mi>ξ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> long</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> long</mtext></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>ξ</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Dos cadenas son iguales si tienen la misma longitud y el mismo signo en cada posición. Usamos la igualdad metalingüística para expresar esa identidad sintáctica."
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
       "html": "Si la signatura tiene <math display=\"inline\"><mi>a</mi></math>, <math display=\"inline\"><msup><mi>f</mi><mn>1</mn></msup></math> y <math display=\"inline\"><msup><mi>R</mi><mn>2</mn></msup></math>, entonces <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>a</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo></mrow></math> son todas cadenas finitas del mismo alfabeto. La primera pasará a ser un término y la segunda una fórmula; la tercera no es una expresión, porque no cumple las reglas de formación."
      }
     ]
    }
   ]
  },
  {
   "id": "a18",
   "maila": 2,
   "izenburua": "I.4. Gramática recursiva de términos y fórmulas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Como el número de términos y fórmulas es infinito, no pueden enumerarse uno a uno. Una definición constructiva da los casos básicos y después precisa cómo se generan las expresiones nuevas a partir de las anteriores. La definición es <strong>conjunta</strong>: las fórmulas usan términos, y en el sistema original de Mosterín el descriptor produce un término a partir de una fórmula."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Zortzi eraketa-klausulak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En una signatura fija, los términos y las fórmulas se forman por estas reglas y solo por estas reglas:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagai oro terminoa da.",
        "Konstante indibidual oro terminoa da.",
        "<math display=\"inline\"><msup><mi>f</mi><mi>n</mi></msup></math> <math display=\"inline\"><mi>n</mi></math>-adiko funtzio-sinboloa bada y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math> terminoak badira, <math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> terminoa da.",
        "<math display=\"inline\"><msup><mi>P</mi><mi>n</mi></msup></math> <math display=\"inline\"><mi>n</mi></math>-adiko predikatu-sinboloa bada y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math> terminoak badira, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> formula da. Bereziki, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> formula atomikoa da.",
        "<math display=\"inline\"><mi>φ</mi></math> formula bada, <math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math> formula da.",
        "<math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mi>ψ</mi></math> son fórmulas, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>↔</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son fórmulas.",
        "<math display=\"inline\"><mi>φ</mi></math> es una fórmula y <math display=\"inline\"><mi>x</mi></math> es una variable, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math> y <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math> son fórmulas.",
        "<math display=\"inline\"><mi>φ</mi></math> formula bada y <math display=\"inline\"><mi>x</mi></math> aldagaia bada, <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> terminoa da."
       ]
      },
      {
       "mota": "testua",
       "html": "Los términos y las fórmulas son los conjuntos más pequeños que generan esas ocho cláusulas. Por tanto, una cadena de signos que no se pueda construir mediante una aplicación finita de las cláusulas no es ni término ni fórmula."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fidelidad al descriptor",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La octava cláusula es parte del formalismo de Mosterín: <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> forma el término que describe el único objeto que cumple la propiedad <math display=\"inline\"><mi>φ</mi></math>. El sublenguaje básico de M01 en JAKINA puede trabajar sin descriptor en muchos de los ejemplos siguientes; eso es una restricción local, no la eliminación de la cláusula de la gramática original. En esta L02 se conservan explícitamente la cláusula y los casos de inducción, de libertad y de sustitución que le corresponden."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El término no es una fórmula"
    },
    {
     "mota": "testua",
     "html": "La función sintáctica de un término es ocupar el lugar de un objeto. La función sintáctica de una fórmula, en cambio, es ser la estructura de una predicación o de una afirmación. La distinción no es todavía estudiar la verdad o la referencia; basta mirar qué cláusula usa la raíz del árbol de construcción."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Clasificación por el constructor exterior",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>a</mi></math> son términos simples.",
        "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es un término funcional.",
        "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es una descripción, y es un término.",
        "<math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es una predicación, por tanto una fórmula.",
        "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> es una ecuación, porque la igualdad es su predicado exterior.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es una negación.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es una generalización."
       ]
      },
      {
       "mota": "testua",
       "html": "Por tanto, <math display=\"inline\"><mo>¬</mo></math> no puede aplicarse directamente a un término, ni ponerse una fórmula como argumento de una función ordinaria. Solo la cláusula del descriptor da el salto sintáctico de una fórmula a un término."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "El árbol de construcción"
    },
    {
     "mota": "testua",
     "html": "El árbol de una expresión se lee de fuera hacia dentro. La raíz indica la última cláusula de formación; sus hijos muestran los componentes inmediatos de esa cláusula. Al llegar a las hojas se encuentran variables y constantes."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Un árbol paso a paso",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomemos"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "La construcción se lee así:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "La raíz es <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi></mrow></math>; su componente es una condición.",
        "A la izquierda de la condición hay un átomo <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y a la derecha <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "Los argumentos del átomo de la izquierda son los términos <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mi>a</mi></math>; para construir <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, primero se toma el término <math display=\"inline\"><mi>x</mi></math> y se le aplica <math display=\"inline\"><mi>f</mi></math>.",
        "El cuerpo del existencial de la derecha es un átomo <math display=\"inline\"><mrow><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; el término <math display=\"inline\"><mrow><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se construye a partir de los términos básicos <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>y</mi></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "A la inversa, leyendo de las hojas hacia la raíz, cada paso es la aplicación justificada de una de esas ocho cláusulas. Si una cadena no tiene un árbol finito así, no está bien formada."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Número de términos y fórmulas"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Numerabilidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En cada formalismo, los conjuntos de términos y de fórmulas son infinitos numerables."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los términos son al menos infinitos numerables, porque todas las variables son términos. Son como mucho numerables, en cambio: el alfabeto es numerable y todo término es una cadena finita de ese alfabeto; las cadenas de cada longitud y la unión de todas las longitudes son numerables. Para las fórmulas vale la misma cota superior. La cota inferior la da la igualdad: por cada variable puede construirse una fórmula <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>x</mi></mrow></math>. Por tanto, ambos conjuntos son infinitos numerables."
      }
     ]
    }
   ]
  },
  {
   "id": "a19",
   "maila": 2,
   "izenburua": "I.5. Inducción semiótica o inducción estructural",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Así como una afirmación sobre los números naturales no puede demostrarse uno por uno, no pueden examinarse individualmente todos los términos y fórmulas. Su construcción recursiva, sin embargo, ofrece un esquema de demostración: comprobar la propiedad en los casos básicos y mostrar que la conserva cada constructor."
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Teorema de la inducción semiótica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> una propiedad de los términos y <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math> una propiedad de las fórmulas. Si se cumplen estas condiciones:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "todas las variables tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math>;",
        "todas las constantes tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math>;",
        "si <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math> tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math>, también <math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math>;",
        "si <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub></mrow></math> tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math>, <math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>;",
        "si <math display=\"inline\"><mi>φ</mi></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>, también <math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math>;",
        "si <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mi>ψ</mi></math> tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>, también las fórmulas construidas con los cuatro conectores binarios;",
        "si <math display=\"inline\"><mi>x</mi></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> y <math display=\"inline\"><mi>φ</mi></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math> y <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math> tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>;",
        "si <math display=\"inline\"><mi>x</mi></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> y <math display=\"inline\"><mi>φ</mi></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>, <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> tiene <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math>;"
       ]
      },
      {
       "mota": "testua",
       "html": "entonces todos los términos tienen <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>T</mi></msub></math> y todas las fórmulas <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒫</mi><mi>F</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usaremos inducción fuerte sobre la longitud de la expresión. Sea <math display=\"inline\"><mi>E</mi></math> un término o fórmula de longitud <math display=\"inline\"><mi>m</mi></math>, y supongamos que la tesis es cierta para todas las expresiones de longitud menor que <math display=\"inline\"><mi>m</mi></math>."
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>E</mi></math> es una variable o una constante, las dos primeras condiciones dan el resultado. Si es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math> o <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>, todos los argumentos son más cortos que <math display=\"inline\"><mi>E</mi></math>; se aplican la hipótesis de inducción y la tercera o cuarta condición. En la negación y la cuantificación, la expresión entera es más larga que el cuerpo; en el conector binario, los dos componentes son más cortos. Por último, si es <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math>, tanto <math display=\"inline\"><mi>x</mi></math> como <math display=\"inline\"><mi>φ</mi></math> son más cortos, y la octava condición cubre el término. Como las cláusulas de formación no dejan ningún otro caso, la inducción fuerte cubre todos los términos y fórmulas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La inducción semiótica no sirve solo para demostrar teoremas. También puede usarse para <strong>definir</strong> un concepto o una función para todas las expresiones: hay que dar el valor en los casos básicos e indicar, en cada constructor, cómo calcularlo a partir de los valores de los componentes anteriores."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Ejemplo resuelto: altura de construcción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Definamos conjuntamente la altura de los términos <math display=\"inline\"><msub><mi>h</mi><mi>T</mi></msub></math> y de las fórmulas <math display=\"inline\"><msub><mi>h</mi><mi>F</mi></msub></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>○</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><mrow><mi mathvariant=\"normal\">max</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>,</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, donde <math display=\"inline\"><mi>○</mi></math> es cualquiera de los cuatro conectores binarios;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>;",
        "<math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>1</mn><mo>+</mo><msub><mi>h</mi><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Cada cláusula da un número natural cuando las alturas de los componentes son números naturales. Por inducción semiótica, por tanto, todo término y toda fórmula tienen una altura finita y bien definida."
      },
      {
       "mota": "testua",
       "html": "Para la fórmula <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> anterior: <math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>=</mo><mn>0</mn></mrow></math>; de ahí <math display=\"inline\"><mrow><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><msub><mi>h</mi><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>g</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msub><mo>=</mo><mn>1</mn></mrow></math>; la altura de los dos átomos es <math display=\"inline\"><mn>2</mn></math>; la del existencial, <math display=\"inline\"><mn>3</mn></math>; la del condicional, <math display=\"inline\"><mn>4</mn></math>; y, añadiendo el cuantificador exterior, la altura de la fórmula entera es <math display=\"inline\"><mn>5</mn></math>."
      }
     ]
    }
   ]
  },
  {
   "id": "a20",
   "maila": 2,
   "izenburua": "I.6. Aparición libre y ligada de una variable",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los cuantificadores y el descriptor son <strong>ligadores</strong>: llevan una variable a su lado y ligan las variables adecuadas dentro del alcance del ligador. La misma idea aparece también en la matemática habitual. Por ejemplo, en la expresión <math display=\"inline\"><mrow><msubsup><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><mfrac><mn>1</mn><msup><mi>n</mi><mn>2</mn></msup></mfrac></mrow></math>, <math display=\"inline\"><mi>n</mi></math> liga el índice del sumatorio, y en la expresión <math display=\"inline\"><mrow><msubsup><mo>∫</mo><mi>a</mi><mi>b</mi></msubsup><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>d</mi><mi>x</mi></mrow></math>, el signo de integración liga <math display=\"inline\"><mi>x</mi></math>. Sin embargo, la intuición no basta en fórmulas complejas; la libertad y la ligadura deben definirse sobre la estructura."
    },
    {
     "mota": "testua",
     "html": "Aquí, siguiendo el uso de Mosterín, diremos &quot;<math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mi>E</mi></math>&quot; y &quot;<math display=\"inline\"><mi>x</mi></math> está ligada en <math display=\"inline\"><mi>E</mi></math>&quot;. Eso no significa que todas las apariciones sean del mismo tipo: una misma variable puede ser libre y ligada en la misma expresión."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Askatasuna, kasu errekurtsibo guztietan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> aldagaia <math display=\"inline\"><mi>E</mi></math> adierazpenean libre dagoen honela erabakitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "En una variable: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mi>z</mi></math> si y solo si <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>.",
        "En una constante: <math display=\"inline\"><mi>x</mi></math> nunca es libre en <math display=\"inline\"><mi>a</mi></math>-n.",
        "En un término funcional: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> si y solo si es libre en al menos uno de los argumentos.",
        "En un átomo: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> si y solo si es libre en alguno de los argumentos. Para la igualdad, es libre en <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> si y solo si es libre en <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> o en <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>.",
        "En una negación: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math> si y solo si es libre en <math display=\"inline\"><mi>φ</mi></math>.",
        "En una conectiva binaria: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mi>φ</mi><mo>○</mo><mi>ψ</mi></mrow></math> si y solo si es libre en <math display=\"inline\"><mi>φ</mi></math> o en <math display=\"inline\"><mi>ψ</mi></math>.",
        "En una cuantificación: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>φ</mi></mrow></math> o en <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>φ</mi></mrow></math> si y solo si es libre en <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math>. ",
        "En una descripción: <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>φ</mi></mrow></math> si y solo si es libre en <math display=\"inline\"><mi>φ</mi></math> y <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math>. "
       ]
      },
      {
       "mota": "testua",
       "html": "Aquí el símbolo <math display=\"inline\"><mi>○</mi></math> representa cualquiera de las cuatro conectivas binarias."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las dos últimas cláusulas muestran la labor del ligador. Las apariciones libres de <math display=\"inline\"><mi>z</mi></math> pueden estar dentro de <math display=\"inline\"><mi>φ</mi></math>, pero al poner delante <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi></mrow></math> o <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi></mrow></math> ya no quedan libres en la expresión completa."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Lotura, kasu errekurtsibo guztietan",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> aldagaia <math display=\"inline\"><mi>E</mi></math> adierazpenean ligada dagoen honela erabakitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "En una variable sola y en una constante sola, <math display=\"inline\"><mi>x</mi></math> nunca está ligada.",
        "<math display=\"inline\"><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> , está ligada si y solo si está ligada en alguno de los argumentos.",
        "<math display=\"inline\"><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></math> , está ligada si y solo si está ligada en alguno de los argumentos; para la igualdad, lo mismo con los dos términos.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>φ</mi></mrow></math> , si y solo si está ligada en <math display=\"inline\"><mi>φ</mi></math>.",
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>○</mo><mi>ψ</mi></mrow></math> , si y solo si está ligada en uno de los componentes.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>φ</mi></mrow></math>-n y <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>φ</mi></mrow></math>-n, <math display=\"inline\"><mi>φ</mi></math>-n ligada badago <strong>edo</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> bada.",
        "<math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>φ</mi></mrow></math>-n, <math display=\"inline\"><mi>φ</mi></math>-n ligada badago <strong>edo</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> bada."
       ]
      },
      {
       "mota": "testua",
       "html": "Lotzailearen indizeko aldagaia bera ere lotura-egituraren parte da; horregatik agertzen da <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> aukera azken bi kasuetan."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Una misma variable libre y ligada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomemos"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mi>u</mi></math> está ligada: el ligador exterior es <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi></mrow></math> y <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está dentro de su alcance.",
        "<math display=\"inline\"><mi>z</mi></math> es libre en el átomo <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y no hay ningún signo que ligue <math display=\"inline\"><mi>z</mi></math>.",
        "<math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero está ligada en <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto, <math display=\"inline\"><mi>x</mi></math> es a la vez libre y ligada en <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>.",
        "<math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>w</mi></math> no están en <math display=\"inline\"><mi mathvariant=\"normal\">Φ</mi></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "En consecuencia, <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">FV</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Cuatro posibilidades excluyentes",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para cada variable <math display=\"inline\"><mi>x</mi></math> y cada expresión <math display=\"inline\"><mi>E</mi></math> se da una y solo una de estas cuatro situaciones: <math display=\"inline\"><mi>x</mi></math> no está en <math display=\"inline\"><mi>E</mi></math>; es libre pero no ligada; es ligada pero no libre; o es libre y ligada. Determinar cuál es resulta decisivo."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las definiciones de libertad y ligadura son estructural-recursivas. Como el árbol de construcción de <math display=\"inline\"><mi>E</mi></math> es finito, puede aplicarse la cláusula adecuada en cada nodo empezando por las hojas. En cada paso se hacen comparaciones finitas"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "por ejemplo, si <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math> es o si está en algún componente finito -, y eso da un procedimiento de decisión que termina."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Designatzaileak, sententziak y adierazpen irekiak",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Designatzailea</strong> aldagai librerik ez duen terminoa da.",
        "<strong>Sententzia</strong> aldagai librerik ez duen formula da.",
        "Un <strong>término abierto</strong> es un término que no es designador.",
        "Una <strong>fórmula abierta</strong> es una fórmula que no es sentencia."
       ]
      },
      {
       "mota": "testua",
       "html": "Un término sin variables es un designador y una fórmula sin variables es una sentencia, pero lo inverso no es necesario: las variables pueden aparecer si están todas ligadas."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Por tanto, una cadena de signos puede ser no expresiva o una expresión. Una expresión es un término o una fórmula; el término, abierto o designador, y la fórmula, abierta o sentencia. Esa clasificación es completamente sintáctica."
    }
   ]
  },
  {
   "id": "a21",
   "maila": 2,
   "izenburua": "I.7. Sustitución de una variable por un término",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La sustitución toma una variable <math display=\"inline\"><mi>x</mi></math>, un término <math display=\"inline\"><mi>t</mi></math> y una expresión <math display=\"inline\"><mi>E</mi></math>, y da otra expresión. Mosterín escribe <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>; aquí, como equivalente moderno, usaremos también <math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. El objetivo no es cambiar ciegamente una letra en el texto: las variables libres del término sustituido deben seguir siendo libres."
    },
    {
     "mota": "abisua",
     "titulua": "Captura de variables",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si en la fórmula <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> sustituyéramos directamente <math display=\"inline\"><mi>x</mi></math> por <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el resultado sería <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Pero el <math display=\"inline\"><mi>y</mi></math> libre de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> lo ha capturado el cuantificador exterior. Esa ligadura no estaba en el término original, y la sustitución correcta no debe producirla."
      },
      {
       "mota": "testua",
       "html": "Primero se renombra la <math display=\"inline\"><mi>y</mi></math> ligada con una variable fresca: <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Ahora ya puede hacerse la sustitución: <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. El <math display=\"inline\"><mi>y</mi></math> de <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se ha mantenido libre."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Casos básicos y de composición"
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Ordezkapenaren lehen kasuak",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math> egituraren gainean definitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Aldagaia: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>z</mi><mo>=</mo><mi>t</mi></mrow></math> baldin <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>z</mi></mrow></math>, y <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>z</mi><mo>=</mo><mi>z</mi></mrow></math> baldin <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math>.",
        "Konstantea: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>a</mi><mo>=</mo><mi>a</mi></mrow></math>.",
        "Funtzioa: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>f</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>.",
        "Predikatua: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup><mo>=</mo><msup><mi>P</mi><mrow><mi>n</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msup></mrow></math>. Bereziki, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "Ezeztapena: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Konektibo bitarrak: <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>○</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>○</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>ψ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En esos casos la sustitución desciende a los componentes del árbol de construcción. En el caso de un ligador, en cambio, hay que distinguir tres posibilidades."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Los tres casos de los ligadores"
    },
    {
     "mota": "testua",
     "html": "Sea <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math> la expresión, donde <math display=\"inline\"><mi>Q</mi></math> es uno de estos: <math display=\"inline\"><mo>∀</mo></math>, <math display=\"inline\"><mo>∃</mo></math> o <math display=\"inline\"><mi>ι</mi></math>. En las dos primeras opciones el resultado es una fórmula; en la tercera, un término de descripción."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Sustitución total bajo un ligador",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup></math> honela definitzen da:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<strong>No hay nada que sustituir.</strong> <math display=\"inline\"><mi>x</mi></math> no es libre en <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math> , <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math>.",
        "<strong>No hay riesgo de captura.</strong> <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math> pero <math display=\"inline\"><mi>z</mi></math> no es libre en <math display=\"inline\"><mi>t</mi></math> , <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>Q</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "<strong>Hay riesgo de captura.</strong> Si <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math> y <math display=\"inline\"><mi>z</mi></math> es libre en <math display=\"inline\"><mi>t</mi></math>, se elige <math display=\"inline\"><mi>v</mi></math> como variable fresca, la de menor índice que no aparece en <math display=\"inline\"><mrow><mi>Q</mi><mi>z</mi><mi>φ</mi></mrow></math> ni en <math display=\"inline\"><mi>t</mi></math>. Entonces"
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>Q</mi><mi>z</mi><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mo>=</mo><mi>Q</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mrow><mi>t</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>z</mi><mi>v</mi></msubsup><mi>φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Es decir: primero <math display=\"inline\"><mi>z</mi></math> se renombra ligada mediante <math display=\"inline\"><mi>v</mi></math>, y después se sustituye <math display=\"inline\"><mi>x</mi></math> por <math display=\"inline\"><mi>t</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La condición &quot;de menor índice&quot; no cambia el significado lógico del resultado; convierte la sustitución en una verdadera función única. Si dijéramos &quot;cualquier variable fresca&quot;, el resultado solo estaría determinado salvo equivalencia alfa."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Los tres casos en una misma fórmula",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomando <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>a</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>E</mi></mrow></math>, porque <math display=\"inline\"><mi>z</mi></math> no es libre en <math display=\"inline\"><mi>E</mi></math>.",
        "<math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, porque <math display=\"inline\"><mi>y</mi></math> no es libre en <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Para calcular <math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, hay que renombrar la <math display=\"inline\"><mi>y</mi></math> ligada con la fresca <math display=\"inline\"><mi>w</mi></math>: <math display=\"inline\"><mrow><mi>E</mi><mo>≡</mo><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi>E</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Totalidad y unicidad de la sustitución",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para cada variable <math display=\"inline\"><mi>x</mi></math>, término <math display=\"inline\"><mi>t</mi></math> y expresión <math display=\"inline\"><mi>E</mi></math> existe una única expresión <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>, dada por las cláusulas anteriores. Además, el resultado es un término si <math display=\"inline\"><mi>E</mi></math> es un término, y una fórmula si <math display=\"inline\"><mi>E</mi></math> es una fórmula."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se hace inducción semiótica sobre <math display=\"inline\"><mi>E</mi></math>. Los casos de variables y constantes son explícitos. En funciones, predicados y conectores, la hipótesis de inducción da el resultado único de cada componente, y el constructor exterior conserva la categoría. En un ligador, las tres condiciones se excluyen entre sí y agotan todas las posibilidades. La variable fresca del tercer caso también es única por la regla del menor índice. El descriptor toma el cuerpo de la fórmula y devuelve un término; los demás ligadores devuelven una fórmula."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Consecuencias útiles de la sustitución"
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Siete propiedades",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para cualesquiera <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mi>z</mi></math> y <math display=\"inline\"><mi>t</mi></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>x</mi></msubsup><mi>E</mi><mo>=</mo><mi>E</mi></mrow></math>.",
        "Si <math display=\"inline\"><mi>x</mi></math> no es libre en <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi><mo>=</mo><mi>E</mi></mrow></math>.",
        "Si <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mi>t</mi></math> aparece en el resultado y toda variable libre en <math display=\"inline\"><mi>t</mi></math> sigue siendo libre en <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>.",
        "Si <math display=\"inline\"><mi>z</mi></math> no está en <math display=\"inline\"><mi>E</mi></math>, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>z</mi><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mi>z</mi></msubsup><mi>E</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo>=</mo><mi>E</mi></mrow></math>.",
        "Si <math display=\"inline\"><mi>x</mi></math> no es libre en <math display=\"inline\"><mi>t</mi></math>, <math display=\"inline\"><mi>x</mi></math> no es libre en <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math>.",
        "<math display=\"inline\"><mi>z</mi></math> es libre en <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>z</mi></msubsup><mi>E</mi></mrow></math> si y solo si <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mi>E</mi></math> o <math display=\"inline\"><mi>z</mi></math> es libre en <math display=\"inline\"><mi>E</mi></math>.",
        "<math display=\"inline\"><mi>z</mi></math> es libre en <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>E</mi></mrow></math> si y solo si ocurre al menos una de estas cosas: (a) <math display=\"inline\"><mi>z</mi></math> es libre en <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math>; (b) <math display=\"inline\"><mi>x</mi></math> es libre en <math display=\"inline\"><mi>E</mi></math> y <math display=\"inline\"><mi>z</mi></math> es libre en <math display=\"inline\"><mi>t</mi></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Cada propiedad se demuestra a la vez para términos y fórmulas, usando los ocho casos de la inducción semiótica. En los casos sin ligador, la afirmación desciende directamente a los componentes. En el caso <math display=\"inline\"><mrow><mi>Q</mi><mi>y</mi><mi>φ</mi></mrow></math>, si <math display=\"inline\"><mi>x</mi></math> no es libre, la sustitución es la identidad; si <math display=\"inline\"><mi>y</mi></math> no es libre en <math display=\"inline\"><mi>t</mi></math>, la hipótesis de inducción se aplica en el cuerpo; y si <math display=\"inline\"><mi>y</mi></math> es libre en <math display=\"inline\"><mi>t</mi></math>, introducir la variable fresca impide precisamente que una variable libre de <math display=\"inline\"><mi>t</mi></math> quede ligada. La tercera propiedad es la razón de esta última condición, y la séptima distingue los dos posibles orígenes de las variables libres del resultado."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Como el árbol de construcción, la lista de índices de variables y las condiciones de cada cláusula son finitos, es decidible si, para <math display=\"inline\"><mrow><msub><mi>E</mi><mn>1</mn></msub><mo>,</mo><msub><mi>E</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo>,</mo><mi>t</mi></mrow></math> dado, <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><msub><mi>E</mi><mn>1</mn></msub><mo>=</mo><msub><mi>E</mi><mn>2</mn></msub></mrow></math> se cumple o no."
    }
   ]
  },
  {
   "id": "a22",
   "maila": 2,
   "izenburua": "I.8. Convenciones notacionales",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La definición oficial de Mosterín usa notación prefija abstracta: el constructor se escribe delante de los componentes y no hacen falta paréntesis. En la lectura ordinaria, sin embargo, pueden usarse nombres metalingüísticos más cómodos. En esta L02 hemos usado esa notación moderna desde el principio; aquí se precisa a qué abreviatura corresponde cada cosa."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "De la notación prefija a la notación habitual",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Usaremos los siguientes nombres metalingüísticos:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> en lugar del predicado de igualdad en notación prefija;",
        "<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>↔</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, con el constructor escrito entre las dos fórmulas;",
        "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, para la notación de las funciones y predicados binarios fijada por el uso."
       ]
      },
      {
       "mota": "testua",
       "html": "Los paréntesis sirven para aclarar la lectura en el metalenguaje. No son signos nuevos del formalismo prefijo abstracto original."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Reglas para ahorrar paréntesis",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Pueden quitarse los paréntesis exteriores: en lugar de <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede escribirse <math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi></mrow></math>.",
        "Los conectores <math display=\"inline\"><mo>→</mo></math> y <math display=\"block\"><mo>↔</mo></math> tienen un alcance más amplio que <math display=\"inline\"><mi>∧</mi></math> y <math display=\"inline\"><mi>∨</mi></math>. Por tanto, la notación <math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo>→</mo><mi>χ</mi></mrow></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>χ</mi></mrow></math>, y la notación <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi></mrow></math> es <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "En conjunciones y disyunciones iteradas por la izquierda pueden suprimirse los paréntesis interiores. Por ejemplo, la notación <math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo>∧</mo><mi>χ</mi><mo>∧</mo><mi>δ</mi></mrow></math> abrevia <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>χ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>.",
        "En caso de duda, hay que mantener los paréntesis. La abreviatura no justifica una estructura ambigua."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "Lectura del alcance",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo>→</mo><mi>χ</mi></mrow></math> es: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>χ</mi></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi></mrow></math> es: <math display=\"inline\"><mrow><mi>φ</mi><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ψ</mi><mo>∨</mo><mi>χ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo>→</mo><mi>χ</mi><mo>∧</mo><mi>δ</mi></mrow></math> es: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∨</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>χ</mi><mo>∧</mo><mi>δ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>¬</mo><mi>φ</mi><mo>∨</mo><mo>¬</mo><mi>ψ</mi></mrow></math> es: <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>φ</mi><mo>∧</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>ψ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "También puede abreviarse una sucesión de cuantificadores del mismo tipo: la notación <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mi>φ</mi></mrow></math> significa <math display=\"inline\"><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><mo>∀</mo><msub><mi>x</mi><mi>n</mi></msub><mi>φ</mi></mrow></math>, y lo mismo con los existenciales. Estas abreviaturas corresponden a nombres metalingüísticos de las expresiones; no cambian el árbol de formación de la gramática oficial."
    }
   ]
  },
  {
   "id": "a23",
   "maila": 2,
   "izenburua": "I.9. Ejemplos resueltos de sustitución",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Todos los ejemplos de este apartado usan la misma fórmula:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
    },
    {
     "mota": "testua",
     "html": "Supondremos que <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo>,</mo><mi>w</mi></mrow></math> son distintas entre sí. <math display=\"inline\"><mi>u</mi></math> está ligada, <math display=\"inline\"><mi>z</mi></math> es libre, <math display=\"inline\"><mi>x</mi></math> es libre y ligada, y <math display=\"inline\"><mi>y</mi></math> y <math display=\"inline\"><mi>w</mi></math> no aparecen en la fórmula. Gracias a ello, cada cláusula de la sustitución puede verse sobre la misma fórmula."
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "1. No hay apariciones libres que sustituir",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las <math display=\"inline\"><mi>u</mi></math> exterior y <math display=\"inline\"><mi>x</mi></math> interior ligadas no se sustituyen, y las variables que no están en la fórmula tampoco provocan ningún cambio:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>u</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>y</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>w</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "para cualquier término <math display=\"inline\"><mi>t</mi></math>. Cuidado: <math display=\"inline\"><mi>x</mi></math> tiene también una aparición libre en <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por eso <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> no es, en general, la identidad."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "2. Sustitución directa, sin captura",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La aparición libre de <math display=\"inline\"><mi>x</mi></math> está solo en <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Si el término no tiene el <math display=\"inline\"><mi>u</mi></math> libre exterior, la sustitución desciende directamente:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En el último término, el descriptor liga <math display=\"inline\"><mi>y</mi></math>; por tanto, no hay riesgo de capturar el <math display=\"inline\"><mi>y</mi></math> libre."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "3. Renombrar el cuantificador exterior",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si se quiere sustituir <math display=\"inline\"><mi>x</mi></math> por <math display=\"inline\"><mi>u</mi></math> o por <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el <math display=\"inline\"><mi>u</mi></math> libre del término nuevo lo capturaría <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi></mrow></math>. Tomando <math display=\"inline\"><mi>y</mi></math> fresca:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Análogamente, para sustituir <math display=\"inline\"><mi>z</mi></math> por <math display=\"inline\"><mi>u</mi></math> se renombra el ligador exterior:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "4. Renombrar el cuantificador interior",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Al sustituir <math display=\"inline\"><mi>z</mi></math> por <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, el <math display=\"inline\"><mi>x</mi></math> libre del término nuevo lo capturaría el <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi></mrow></math> interior. Usando <math display=\"inline\"><mi>y</mi></math> fresca:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En cambio, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no tiene variables libres y no necesita renombrarse:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Lo mismo ocurre con el designador <math display=\"inline\"><mrow><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ι</mi><mi>y</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Ejemplo",
     "kolorea": "laranja",
     "etzana": false,
     "titulua": "5. Identidad y sustituciones sucesivas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El caso de la identidad da <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Φ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>z</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi mathvariant=\"normal\">Φ</mi></mrow></math>. Cuando se hacen dos sustituciones una después de otra, hay que leer explícitamente el orden: la más interior se aplica primero. Por ejemplo,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>S</mi><mi>z</mi><mrow><mi>c</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>S</mi><mi>x</mi><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi mathvariant=\"normal\">Φ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msubsup><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En otro ejemplo, sustituir primero <math display=\"inline\"><mi>z</mi></math> por <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> obliga a renombrar el <math display=\"inline\"><mi>x</mi></math> ligado interior, pero deja intacto el <math display=\"inline\"><mi>x</mi></math> libre de <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"block\"><mrow><msubsup><mi>S</mi><mi>z</mi><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msubsup><mi mathvariant=\"normal\">Φ</mi><mo>=</mo><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Una sustitución posterior puede cambiar la aparición libre de <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, pero no toca el <math display=\"inline\"><mi>y</mi></math> ligado por <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi></mrow></math>. Por eso la composición de sustituciones no es un cambio simultáneo y desordenado de letras."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Consecuencia del apartado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los ejemplos muestran tres controles: comprobar que la variable que se quiere sustituir es libre, identificar las variables libres del término sustituyente y renombrar con variables frescas los ligadores conflictivos que se encuentren por el camino. Como los tres pasos están reunidos en una única definición recursiva, la sustitución es total, decidible y sin captura de variables."
      }
     ]
    }
   ]
  },
  {
   "id": "a24",
   "maila": 2,
   "izenburua": "De la notación de Mosterín a la lectura de JAKINA",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.1-II.4; pp. 49-87 impresas; TND p. 55; adaptación didáctica al euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "El texto de 1976 usa un cálculo que hoy sigue siendo preciso, pero su tipografía y sus marcas de demostración no coinciden con la notación moderna usada en las partes L03-L05. La tabla siguiente no cambia el formalismo: muestra cómo se reescribe cada signo, a qué nivel hay que leerlo y qué condición no se puede perder."
    },
    {
     "mota": "taula",
     "goiburua": [
      "<strong>Mosterin 1976</strong>",
      "<strong>JAKINA modernoa</strong>",
      "<strong>Nola irakurri</strong>",
      "<strong>Kontrol-baldintza</strong>"
     ],
     "lerroak": [
      [
       "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mi>x</mi><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>",
       "Orokortzailea: <math display=\"inline\"><mi>α</mi></math> formula <math display=\"inline\"><mi>x</mi></math>-ren balio guztietarako.",
       "<math display=\"inline\"><mi>x</mi></math> lotuta geratzen da haren irismenean."
      ],
      [
       "<math display=\"inline\"><mrow><mi>V</mi><mi>x</mi><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>",
       "Partikularizatzailea: gutxienez <math display=\"inline\"><mi>x</mi></math> baten kasuan <math display=\"inline\"><mi>α</mi></math>.",
       "Lekuko bat aukeratzeak ez du izen jakin baten gaineko informazio gehigarririk ematen."
      ],
      [
       "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>",
       "<math display=\"inline\"><mi>α</mi></math>-ko <math display=\"inline\"><mi>x</mi></math>-ren agerraldi libre guztiak <math display=\"inline\"><mi>t</mi></math> terminoaz ordezkatzea.",
       "Ordezkapenak aldagai-harrapaketa saihestu behar du; behar bada, aldagai lotua alfa-berrizendatu."
      ],
      [
       "<math display=\"inline\"><mrow><mi>f</mi><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mi>x</mi></mrow></math>; <math display=\"inline\"><mrow><mi>P</mi><mi>x</mi><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mi>x</mi><mi>y</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "Funtzio- eta predikatu-aplikazio bera da; jatorrizko aurrizki trinkoa parentesiz argitzen da.",
       "Argumentuen ordena eta aritatea ez dira aldatzen. <code>fxy</code> ez da hiru sinboloren biderkadura."
      ],
      [
       "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></math>",
       "Deskribatzailea da: <math display=\"inline\"><mi>α</mi></math> betetzen duen objektu bakarra izendatzeko terminoa, ez kuantifikatzaile bat.",
       "<math display=\"inline\"><mi>x</mi></math> deskribapenaren barruan lotuta dago. DP eta DI arauek soilik justifikatzen dituzte erabilera bereziak."
      ],
      [
       "<math display=\"inline\"><mrow><mi>V</mi><mi>y</mi><mi mathvariant=\"normal\">Λ</mi><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
       "Existencia eta bakartasuna batera: <math display=\"inline\"><mi>α</mi></math> betetzen duen objektua <math display=\"inline\"><mi>y</mi></math> bera eta bakarra da.",
       "<math display=\"inline\"><mi>y</mi></math> ez da libre egon behar <math display=\"inline\"><mi>α</mi></math>-n DP/DI eskemetan."
      ],
      [
       "<math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deskribapen inpropioa",
       "<math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> deskribapen hutserako erreferentzia",
       "DIren bidez, deskribatutako objektu bakarra ez dagoenean erabiltzen den termino lehenetsia.",
       "Ez du existentzia edo bakartasuna baieztatzen; DIren aurrebaldintza ezeztatuak egiaztatuta egon behar du."
      ],
      [
       "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>",
       "Ondorio sintaktikoa: <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>-ko premisetatik <math display=\"inline\"><mi>α</mi></math>-ren dedukzio finitu bat dago.",
       "L04-L05eko lerro zenbakidunek hori frogatzen dute; ez dute, berez, semantika aipatzen."
      ],
      [
       "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>",
       "Ondorio semantikoa: <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> egia den eredu orotan <math display=\"inline\"><mi>α</mi></math> ere egia da.",
       "<math display=\"inline\"><mo>⊢</mo></math> eta <math display=\"inline\"><mo>⊨</mo></math> ez dira trukagarriak osotasun edo zuzentasun metateorema aipatu gabe."
      ],
      [
       "<math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi><mo>,</mo><mi>γ</mi></mrow></math>; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi></mrow></math>; <math display=\"inline\"><mi>t</mi></math>",
       "Formula-motaalda-gaiak; objektu-aldagaiak; termino-parametroa.",
       "Lehenengoek formula osoen lekuak betetzen dituzte; bigarrenak formulen barruko sinboloak dira.",
       "<math display=\"inline\"><msub><mi>α</mi><mi>i</mi></msub></math> etiketak ariketako premisak eta helburua laburtzen ditu, baina ez dira objektu-hizkuntzako konstanteak."
      ],
      [
       "<code>prem.</code>",
       "<code>prem.</code> <math display=\"inline\"><msub><mi>α</mi><mi>i</mi></msub></math>",
       "Formula ez da aurreko lerroetatik inferitzen: ariketaren premisa-multzotik sartzen da.",
       "Sartutako formula eta aipatutako <math display=\"inline\"><msub><mi>α</mi><mi>i</mi></msub></math> hitzez hitz bat etorri behar dira."
      ],
      [
       "<math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math>",
       "<math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> edo testuan <strong>helburua</strong>",
       "Frogatu beharreko lerro irekia da; galdera-ikurra ez da formularen parte.",
       "Helburua ez da erabilgarri bihurtzen haren itxiera-baldintza bete arte."
      ],
      [
       "Ezkerreko irismen-markak",
       "L05eko <strong>M</strong> maila; L04ko helburu/hipotesi azalpena",
       "Marka bakoitzak oraindik irekita dagoen helburu edo aldi baterako hipotesi bat adierazten du.",
       "Barneko maila ixtean bertako hipotesiak ezin dira kanpoan erabili; emaitza itxia bakarrik ateratzen da."
      ],
      [
       "Lerro-zenbakia eta eskuineko laburdura",
       "<strong>L.</strong> eta <strong>Just.</strong> zutabeak",
       "Zenbakiak ordena gordetzen du; Just. zutabeak araua eta haren sarrera-lerroak ematen ditu.",
       "Aipatutako lerroek aurrekoak, erabilgarriak eta uneko edo kanpoko irismenekoak izan behar dute."
      ],
      [
       "R, MP, MT, DN; IC/EC, ID/ED, IB/EB",
       "Errepikapena; baldintza eta ezeztapen arauak; konektiboen sarrera/ezabapenak.",
       "Kalkuluaren inferentzia-erregela primitibo proposizionalak dira.",
       "Aplikazio bakoitzean eskemaren formula-egitura eta aipatutako lerroak egiaztatu."
      ],
      [
       "IP, EG, EP",
       "Partikularizatzailearen sarrera; orokortzailearen ezabapena; partikularizatzailearen ezabapen kritikoa.",
       "Kuantifikatzaileen erregela primitiboak dira. EGn termino batez instantziatzen da; EPn lekuko-aldagai berria hartzen da.",
       "EG/IP ordezkapenak harrapaketarik gabeak dira. EPko <math display=\"inline\"><mi>u</mi></math> kritikoa ezin da aurreko lerro batean agertu."
      ],
      [
       "II, EI; DP, DI",
       "Berdintzailearen sarrera/ezabapena; deskribapen propioaren/inpropioaren arauak.",
       "Berdintasuna eta <math display=\"inline\"><mi>ι</mi></math> deskribatzailea gobernatzen dituzten erregela primitiboak.",
       "II/EIn <math display=\"inline\"><mi>x</mi></math> ez da libre <math display=\"inline\"><mi>t</mi></math>-n; DP/DIn bakartasun-formula eta aldagai librearen baldintza kontrolatu."
      ],
      [
       "NCC, TND, IDA; I, SI, TI; NG, NP",
       "Izen berak; erregela eratorriak.",
       "Primitiboekin frogatutako bide errepikakorra urrats bakarrean laburtzen dute.",
       "Eratorria erabiltzeak ez du ondorio berririk gehitzen: haren justifikazio primitiboa L03n dago."
      ],
      [
       "GIC, GEG, GIP, GEP, GNP",
       "Konektibo edo kuantifikatzaile askoren bertsio <strong>handiak</strong>.",
       "Indize askoko sarrera, ezabapena edo ezeztapena urrats bakarrean idazten dute.",
       "GEPko <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> guztiak berriak eta elkarren artean desberdinak dira."
      ],
      [
       "Aldagai kritikoa: <math display=\"inline\"><mi>u</mi></math>",
       "EP/GEPko lekuko-aldagai freskoa",
       "Existentzialak emandako objektua behin-behineko izen neutral batez jarraitzea ahalbidetzen du.",
       "Ez da konstante berezi bat, ezta nahierara aukeratutako objektu ezaguna ere; freskotasuna frogaren baldintza da."
      ]
     ]
    },
    {
     "mota": "oharra",
     "titulua": "No confundir los dos signos de consecuencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La afirmación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> es interna a la deducción: hay que mostrar una sucesión reglada de líneas. La afirmación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> trata de modelos e interpretaciones. Los ejercicios de L04-L05 construyen la primera relación. La corrección del cálculo puede justificar luego el paso de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> a <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>, pero ese paso metateórico no está dentro de la tabla de deducción."
      }
     ]
    }
   ]
  },
  {
   "id": "a25",
   "maila": 2,
   "izenburua": "Criterio uniforme para leer las deducciones numeradas de L04-L05",
   "blokeak": [
    {
     "mota": "testua",
     "html": "L04 explica el alcance con palabras; L05, en cambio, lo condensa en las columnas <strong>L.</strong>, <strong>M</strong>, <strong>Fórmula</strong> y <strong>Just.</strong> Las dos presentaciones codifican la misma estructura de pila. Para una lectura fiel puede usarse este orden en todas las deducciones:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "<strong>Identificar la secuencia.</strong> Separar del enunciado las premisas <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></math> y el objetivo final <math display=\"inline\"><mi>β</mi></math>. El significado de la tabla es <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo>⊢</mo><mi>β</mi></mrow></math>; si no hay premisas, <math display=\"inline\"><mrow><mo>⊢</mo><mi>β</mi></mrow></math>.",
      "<strong>Abrir el primer objetivo.</strong> La línea <math display=\"inline\"><mrow><mi>?</mi><mi>β</mi></mrow></math> indica la tarea, no una fórmula obtenida. En L04 lo mismo lo expresa la palabra <strong>objetivo</strong>.",
      "<strong>Seguir la pila de alcances.</strong> En L05, <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>0</mn></mrow></math> es el nivel exterior; los valores <math display=\"inline\"><mrow><mi>M</mi><mo>=</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mi>…</mi></mrow></math> indican subobjetivos o hipótesis abiertos más hacia dentro. Bajar de nivel significa que se ha cerrado el último recinto abierto. En L04, ese cierre lo explican las últimas frases de la solución.",
      "<strong>Decidir el tipo de línea.</strong> Una línea puede ser premisa, hipótesis temporal, inferencia u objetivo. <code>prem.</code> no es una regla de inferencia; <code>?</code> no es un conectivo; la hipótesis no es un teorema exterior.",
      "<strong>Reconstruir la justificación de izquierda a derecha.</strong> Al leer <code>MP, 10, 4</code>, primero hay que encontrar las líneas 10 y 4, comprobar que ambas son utilizables y verificar que el esquema de MP da la fórmula actual. El orden cronológico es siempre ascendente: no se puede citar una línea futura.",
      "<strong>Comprobar la sustitución.</strong> Cuando aparece EG, IP, II, EI, DP o DI, escribir qué variable se ha sustituido y qué término se ha puesto en su lugar. Después comprobar que solo han cambiado las apariciones libres y que no se ha capturado ninguna variable.",
      "<strong>Comprobar aparte la frescura.</strong> En una línea de EP o GEP, <math display=\"inline\"><mi>u</mi></math> o <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> no debe haber aparecido en las líneas anteriores. Esa condición no está dentro de la fórmula: es una condición lateral sobre la historia de toda la deducción.",
      "<strong>Decir cómo se cierra el objetivo.</strong> En el cierre directo se obtiene la propia fórmula del objetivo; en el cierre por contradicción, <math display=\"inline\"><mi>δ</mi></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>δ</mi></mrow></math>; en el condicional, el consecuente a partir de la hipótesis antecedente; en la generalización, el caso arbitrario, con la variable no libre en las líneas exteriores. El resultado cerrado pasa a ser utilizable un nivel más arriba; las hipótesis interiores, no.",
      "<strong>Comprobar el último nivel.</strong> En la deducción completa, el primer objetivo debe quedar cerrado, y el resultado no debe depender de una hipótesis temporal ni de una variable crítica prohibida. Solo entonces puede leerse la afirmación final <math display=\"inline\"><mo>⊢</mo></math>."
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
       "html": "En una tabla de L05, una línea con <code>M = 3</code> puede citar líneas utilizables de los niveles <code>M = 0,1,2</code>, y también las obtenidas antes en el nivel <code>M = 3</code>. Al volver a <code>M = 2</code>, en cambio, la hipótesis temporal de <code>M = 3</code> ya no es utilizable. En su lugar está el resultado del subobjetivo cerrado. La frase de L04 &quot;las líneas 5 y 6 cierran el objetivo 4&quot; expresa con palabras la misma transición."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Control de cinco preguntas por línea"
    },
    {
     "mota": "testua",
     "html": "Al revisar una deducción basta responder en orden, en cada línea, a estas cinco preguntas:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "¿De qué tipo es la línea: objetivo, premisa, hipótesis o inferencia?",
      "¿En qué alcances está, y qué líneas son utilizables en esos alcances?",
      "¿Las líneas que cita la justificación son anteriores y utilizables?",
      "¿Se cumplen el esquema de fórmula de la regla y las condiciones laterales?",
      "Si la línea cierra un objetivo, ¿a qué nivel vuelve el resultado?"
     ]
    }
   ]
  },
  {
   "id": "a26",
   "maila": 2,
   "izenburua": "Visualización estructural de TND con Frederic",
   "blokeak": [
    {
     "mota": "testua",
     "html": "TND, <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math>, no tiene premisas. Su justificación tiene dos recintos de contradicción claros y anidados: fuera se supone la negación de la disyunción; dentro se supone <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>. Esa estructura puede expresarse sin perder información con los componentes <code>subproof</code>, <code>assume</code> y <code>step</code> de Frederic."
    },
    {
     "mota": "irudia",
     "oina": null,
     "src": "../media/irudiak/c3a6fb7ffd11b85b.svg",
     "zabalera": 286
    },
    {
     "mota": "testua",
     "html": "Las etiquetas <code>RAA 2-4</code> y <code>RAA 1-7</code> no añaden ninguna regla primitiva nueva. Visualizan el cierre de objetivo por contradicción que permite la regla de construcción de Mosterín: de la contradicción interior, <math display=\"inline\"><mi>α</mi></math>, y de la exterior, <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Uso de Frederic en las deducciones",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Además del prototipo de TND, las deducciones de los treinta y cinco ejercicios de II.4 también se visualizan con Frederic 0.1.0, cada una en la solución junto a su enunciado y en su lugar original de la teoría. La subprueba de Frederic muestra el alcance; los objetivos explícitos <code>?</code> de Mosterín, los niveles <strong>M</strong>, las premisas reutilizadas y las condiciones de frescura de las variables críticas de EP/GEP se guardan en notas y etiquetas complementarias. También se han mantenido las explicaciones numeradas originales y las tablas <strong>M/Just.</strong>, porque la nueva estructura no las sustituye."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Uso de L09",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Este apartado puede colocarse antes de leer L03-L05 o como referencia después de ellas. No sustituye ninguna deducción: conecta la notación antigua y la moderna, y da el mismo criterio para revisar cada línea."
      }
     ]
    }
   ]
  },
  {
   "id": "a27",
   "maila": 2,
   "izenburua": "II.1. Reglas de inferencia primitivas",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.1-II.3; pp. 49-56 impresas; paráfrasis en euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "Un <strong>cálculo deductivo</strong> es un conjunto de reglas. Al aplicar las reglas a las fórmulas de un formalismo, se precisa qué fórmulas pueden inferirse de otras y cómo puede construirse una deducción. Hay que distinguir dos niveles: las <strong>reglas de inferencia</strong> toman una o dos fórmulas utilizables y dan una fórmula nueva; las <strong>reglas de construcción</strong>, en cambio, regulan cuándo y cómo pueden escribirse esas líneas en una deducción o semideducción."
    },
    {
     "mota": "oharra",
     "titulua": "Notación moderna",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las notaciones <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mi>x</mi><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi>V</mi><mi>x</mi><mi>α</mi></mrow></math> de Mosterín son aquí, respectivamente, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>. Su expresión <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>α</mi></mrow></math> la escribiremos como <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>: sustituir las apariciones libres de <math display=\"inline\"><mi>x</mi></math> en <math display=\"inline\"><mi>α</mi></math> por <math display=\"inline\"><mi>t</mi></math>, sin captura de variables. Mantenemos el descriptor <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En un esquema de inferencia, las fórmulas sobre la raya son las premisas, y la de debajo, la fórmula inferida. <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math> son metavariables de fórmulas; las variables <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>u</mi></mrow></math> y el término <math display=\"inline\"><mi>t</mi></math> son parámetros del metalenguaje."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "R, MP, MT y DN",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Repetición (R):</strong> <math display=\"inline\"><mfrac><mi>α</mi><mi>α</mi></mfrac></math>.",
        "<strong>Modus ponens (MP):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>α</mi></mrow><mi>β</mi></mfrac></math>.",
        "<strong>Modus tollens (MT):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>¬</mo><mi>β</mi></mrow><mrow><mo>¬</mo><mi>α</mi></mrow></mfrac></math>.",
        "<strong>Doble negación (DN):</strong> se permiten ambos sentidos, <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow><mi>α</mi></mfrac></math> y <math display=\"inline\"><mfrac><mi>α</mi><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></mfrac></math>."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Reglas de los conectores",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Introducción de la conjunción (IC):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mspace width=\"1.0em\"></mspace><mi>β</mi></mrow><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow></mfrac></math>.",
        "<strong>Eliminación de la conjunción (EC):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow><mi>α</mi></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow><mi>β</mi></mfrac></math>.",
        "<strong>Introducción de la disyunción (ID):</strong> <math display=\"inline\"><mfrac><mi>α</mi><mrow><mi>α</mi><mo>∨</mo><mi>β</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mi>α</mi><mrow><mi>β</mi><mo>∨</mo><mi>α</mi></mrow></mfrac></math>.",
        "<strong>Eliminación de la disyunción (ED):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∨</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>¬</mo><mi>α</mi></mrow><mi>β</mi></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>∨</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mo>¬</mo><mi>β</mi></mrow><mi>α</mi></mfrac></math>.",
        "<strong>Introducción del bicondicional (IB):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>β</mi><mo>→</mo><mi>α</mi></mrow><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow></mfrac></math>.",
        "<strong>Eliminación del bicondicional (EB):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow><mrow><mi>β</mi><mo>→</mo><mi>α</mi></mrow></mfrac></math>."
       ]
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Reglas de los cuantificadores",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Introducción del particularizador (IP):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>.",
        "<strong>Eliminación del generalizador (EG):</strong> <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>.",
        "<strong>Eliminación crítica del particularizador (EP):</strong> <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>, donde <math display=\"inline\"><mi>u</mi></math> es una variable."
       ]
      },
      {
       "mota": "testua",
       "html": "En EG, <math display=\"inline\"><mi>t</mi></math> puede ser cualquier término. En EP, en cambio, el sustituto es una variable pura; para poder usarla en una deducción, <math display=\"inline\"><mi>u</mi></math> debe ser una nueva <strong>variable crítica</strong>, que no haya aparecido en las líneas anteriores. Todas las reglas de inferencia salvo EP son <strong>normales</strong>; EP es la regla crítica."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Reglas de la igualdad y de las descripciones",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Introducción del igualador (II):</strong> <math display=\"inline\"><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></math>, siempre que <math display=\"inline\"><mi>x</mi></math> no sea libre en <math display=\"inline\"><mi>t</mi></math>.",
        "<strong>Eliminación del igualador (EI):</strong> <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>, con la misma condición.",
        "<strong>Descripción propia (DP):</strong> <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac></math>, donde <math display=\"inline\"><mi>y</mi></math> no es libre en <math display=\"inline\"><mi>α</mi></math>.",
        "<strong>Descripción impropia (DI):</strong> <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></mfrac></math>, donde <math display=\"inline\"><mi>y</mi></math> no es libre en <math display=\"inline\"><mi>α</mi></math>."
       ]
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
       "html": "La aplicación de las reglas no usa ninguna interpretación; solo la estructura sintáctica:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "De <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se infiere <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mi>x</mi><mo>=</mo><mi>y</mi></mrow></math> por ID.",
        "De <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se infiere <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> por EG, poniendo <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en lugar de <math display=\"inline\"><mi>y</mi></math>.",
        "De <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo>→</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se infiere <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>=</mo><msub><mi>c</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> por MT.",
        "De <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> se infiere <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math> por IB.",
        "De <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>a</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se infiere <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> por ED.",
        "De <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se infiere <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>c</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>c</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi></mrow></math> por EI.",
        "De <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se infiere <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>w</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> por DI."
       ]
      }
     ]
    }
   ]
  },
  {
   "id": "a28",
   "maila": 2,
   "izenburua": "II.2. Semideducciones y deducciones",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Los cuatro movimientos de la demostración cotidiana -inferencia directa, prueba por contradicción, prueba condicional y generalización mediante un elemento arbitrario- los organiza el cálculo en una única regla de construcción sobre las líneas."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Tres tipos de línea",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>Línea utilizable:</strong> una fórmula simple, o una fórmula que lleva el signo de interrogación tachado correspondiente a un objetivo ya cerrado.",
        "<strong>Línea marcada:</strong> línea que lleva delante al menos una marca de alcance de una línea utilizable; las marcas indican dentro de qué objetivo o hipótesis se encuentra.",
        "<strong>Línea interrogada:</strong> un objetivo <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> sin tachar."
       ]
      },
      {
       "mota": "testua",
       "html": "La metavariable <math display=\"inline\"><mi>λ</mi></math> puede usarse para designar una línea de cualquier tipo."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Las siete reglas de construcción de la semideducción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> un conjunto de sentencias del formalismo. Una semideducción a partir de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es una sucesión finita de líneas obtenida mediante las reglas siguientes:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Para cualquier fórmula <math display=\"inline\"><mi>α</mi></math> puede abrirse la línea objetivo <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math>.",
        "Si <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, <math display=\"inline\"><mi>α</mi></math> puede escribirse como premisa.",
        "Si <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> está escrito, en la línea siguiente puede escribirse <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>: es la hipótesis temporal para demostrar el objetivo por contradicción.",
        "Si <math display=\"inline\"><mrow><mi>?</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> está escrito, en la línea siguiente puede escribirse <math display=\"inline\"><mi>α</mi></math>: es la hipótesis antecedente de la demostración condicional.",
        "Si de las líneas utilizables anteriores se infiere <math display=\"inline\"><mi>α</mi></math> mediante una regla normal, puede escribirse la nueva línea <math display=\"inline\"><mi>α</mi></math>.",
        "Si se infiere <math display=\"inline\"><mi>α</mi></math> mediante EP, la nueva línea puede escribirse solo si la variable crítica no aparece en ninguna línea anterior.",
        "Puede cerrarse el último objetivo <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> abierto, tachar su signo de interrogación y marcar a ese nivel todas las líneas siguientes en uno de cuatro casos: (i) una de las líneas utilizables siguientes es el propio <math display=\"inline\"><mi>α</mi></math>; (ii) dos líneas utilizables siguientes son una la negación de la otra; (iii) <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>→</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y una de las líneas utilizables siguientes es <math display=\"inline\"><mi>γ</mi></math>; o (iv) <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> no son libres en las líneas utilizables anteriores al objetivo, y una de las líneas utilizables siguientes es <math display=\"inline\"><mi>β</mi></math>."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Las cuatro primeras reglas convierten la intención de la demostración en líneas; las tres últimas, en cambio, controlan las inferencias lícitas y el cierre de los objetivos. Cuando una fórmula entra por la regla 2, se llama <strong>premisa</strong>. En la práctica, las líneas se numeran a la izquierda y a la derecha se escribe la abreviatura de la regla usada y los números de sus líneas de entrada."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "Deducción, deducibilidad y teorema lógico",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una <strong>deducción</strong> de <math display=\"inline\"><mi>α</mi></math> a partir de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es una semideducción a partir de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> cuya primera línea es <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> y que tiene marcadas todas las demás líneas. Si existe tal deducción, <math display=\"inline\"><mi>α</mi></math> es deducible de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Una fórmula que tiene una deducción sin premisas es un <strong>teorema lógico</strong>; esto se expresa mediante <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>. Este signo es una relación sintáctica: en este apartado todavía no se afirma ninguna verdad semántica ni consecuencia en todos los modelos."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Finitud de la deducibilidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> si y solo si existe un subconjunto finito de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, tal que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como toda deducción es una sucesión finita de líneas, las premisas realmente usadas en ella también son finitas; el subconjunto <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> que forman permite la misma deducción. A la inversa, si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, toda premisa de <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> es también de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, y la misma deducción puede leerse desde <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Proposición",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "Cuatro consecuencias metadeductivas básicas",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>.",
        "Si <math display=\"inline\"><mrow><mi>α</mi><mo>⊢</mo><mi>β</mi></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>⊢</mo><mi>γ</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi>α</mi><mo>⊢</mo><mi>γ</mi></mrow></math>.",
        "Si <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> para cualquier <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "Si <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub><mo>⊢</mo><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La primera viene de la monotonía de las premisas; la segunda se obtiene poniendo una deducción a continuación de la otra; en la tercera, el conjunto vacío de premisas es subconjunto de cualquier <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. En la cuarta, la conjunción única entra como premisa, se recuperan las líneas <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub></mrow></math> aplicando EC una y otra vez, y se repite el resto de la deducción original. Cada <math display=\"inline\"><msub><mi>γ</mi><mi>i</mi></msub></math> que entraba originalmente como premisa entra ahora como repetición de la línea recuperada correspondiente."
      }
     ]
    }
   ]
  },
  {
   "id": "a29",
   "maila": 2,
   "izenburua": "II.3. Reglas de inferencia derivadas",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Una regla derivada no permite nada que antes fuera no deducible. Abrevia en un solo paso un camino que podía hacerse en varios pasos con las reglas primitivas. Por tanto, <strong>justificar</strong> una regla derivada es mostrar que su conclusión puede construirse a partir de las premisas con las reglas primitivas."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "NCC: de la negación del condicional a la conjunción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (NCC)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomar <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> como premisa y abrir el objetivo <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>. Por la prueba por contradicción, suponer <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Después abrir <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math>: suponer <math display=\"inline\"><mi>α</mi></math> y, para demostrar <math display=\"inline\"><mi>β</mi></math>, suponer <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math>. Por IC se obtiene <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>, contra la hipótesis exterior. Eso cierra el subobjetivo <math display=\"inline\"><mi>β</mi></math>, luego el objetivo condicional <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math>, y esta última fórmula choca con la premisa inicial. Por tanto, <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "TND: tercio excluso",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (TND; premisarik gabe)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Abrir el objetivo <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math> y suponer su negación. Dentro, abrir el objetivo <math display=\"inline\"><mi>α</mi></math> y suponer <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>; por ID se obtiene <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math>, contra la primera hipótesis, y así se cierra el subobjetivo <math display=\"inline\"><mi>α</mi></math>. Aplicando ID de nuevo se obtiene <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi></mrow></math>; con la hipótesis exterior forma la segunda contradicción y cierra el objetivo inicial. No se ha usado ninguna premisa."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "IDA: introducción del disyuntor en el antecedente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>→</mo><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>β</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (IDA)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomar las premisas <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> y <math display=\"inline\"><mrow><mi>γ</mi><mo>→</mo><mi>β</mi></mrow></math>. Dentro de la prueba condicional, suponer <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mi>γ</mi></mrow></math>, y para demostrar <math display=\"inline\"><mi>β</mi></math> suponer <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math>. Por MT se obtienen <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> de la primera premisa y <math display=\"inline\"><mrow><mo>¬</mo><mi>γ</mi></mrow></math> de la segunda. ED da <math display=\"inline\"><mi>γ</mi></math> a partir de <math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mi>γ</mi></mrow></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>; eso produce una contradicción con <math display=\"inline\"><mrow><mo>¬</mo><mi>γ</mi></mrow></math>. Por tanto <math display=\"inline\"><mi>β</mi></math>, y después <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>β</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "I: reflexividad de la igualdad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (I; premisarik gabe)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Elegir una variable nueva <math display=\"inline\"><mi>x</mi></math> que no aparezca en <math display=\"inline\"><mi>t</mi></math>. Suponiendo <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math>, por R puede repetirse <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math> y, cerrada la prueba condicional, se obtiene <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math>. Como <math display=\"inline\"><mi>x</mi></math> no es libre en las demás líneas utilizables, se generaliza: <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>→</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Aplicando EI se obtiene <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "SI: simetría de la igualdad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (SI)</mtext></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Con la premisa <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>, por la regla I se tiene <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>. Elegir <math display=\"inline\"><mi>x</mi></math> que no aparezca en <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>: por II se obtiene <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por EG, poniendo <math display=\"inline\"><msub><mi>t</mi><mn>1</mn></msub></math> en lugar de <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math>; por MP y la premisa, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "TI: transitividad de la igualdad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El esquema básico es <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>. Las otras tres orientaciones, escritas sin usar explícitamente la simetría, también se recogen bajo el nombre TI: <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>3</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>, <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>3</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para el primer esquema, tomar <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>. Aplicando II a la segunda premisa, con <math display=\"inline\"><mi>x</mi></math> no apareciendo en <math display=\"inline\"><msub><mi>t</mi><mn>2</mn></msub></math>, se obtiene <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por EG, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>→</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>, y por MP, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>. Las otras tres orientaciones se justifican de la misma manera, dando la vuelta por SI al lado de la igualdad que haga falta."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "NG: negación del generalizador",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Son reglas derivadas en ambos sentidos: <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el primer sentido, suponer <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> y abrir el objetivo <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>. Suponiendo su negación, tomar <math display=\"inline\"><mi>x</mi></math> arbitrario y abrir el objetivo <math display=\"inline\"><mi>α</mi></math>. Suponiendo <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>, por IP se obtiene <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>, contra la hipótesis exterior; por tanto <math display=\"inline\"><mi>α</mi></math>. Como <math display=\"inline\"><mi>x</mi></math> es arbitrario, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>, contra la premisa inicial. Por tanto, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En el segundo sentido, tomar <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> y suponer <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. Por DN, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. Por EP, con <math display=\"inline\"><mi>u</mi></math> crítico que no aparece en las líneas anteriores, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; por EG, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. La contradicción cierra el objetivo <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "NP: negación del particularizador",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Son reglas derivadas en ambos sentidos: <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el primer sentido, para demostrar <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> a partir de la premisa <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>, tomar <math display=\"inline\"><mi>x</mi></math> arbitrario. Suponiendo <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math> en el objetivo <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>, por DN se obtienen <math display=\"inline\"><mi>α</mi></math> y, por IP, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>; por la contradicción de la premisa, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> y luego <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "A la inversa, para demostrar <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> a partir de la premisa <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>, suponer <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>. Por DN, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>; por EP, con <math display=\"inline\"><mi>u</mi></math> crítico nuevo, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; por EG, de la premisa universal, <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. La contradicción cierra el objetivo."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Límite de L03",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La página impresa 56 termina con las justificaciones de las reglas NP. Las siguientes abreviaturas grandes de II.3 -GIC, GEG, GIP, GEP y GNP- empiezan en la página 57 y, según el límite de páginas del plan, corresponden al lote siguiente."
      }
     ]
    }
   ]
  },
  {
   "id": "a30",
   "maila": 2,
   "izenburua": "Reglas derivadas grandes",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.4; pp. 57-72 impresas; paráfrasis en euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "Las reglas de inferencia derivadas trabajadas en L03 abrevian esquemas generales de un solo paso. Al comienzo de este apartado, Mosterín da cinco versiones grandes que tratan a la vez más de un cuantificador. <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> son variables distintas, y todas las sustituciones deben entenderse sin captura de variables."
    },
    {
     "mota": "oharra",
     "titulua": "Notación y abreviaturas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los signos originales <math display=\"inline\"><mi mathvariant=\"normal\">Λ</mi></math> y <math display=\"inline\"><mi>V</mi></math> se dan aquí como <math display=\"inline\"><mo>∀</mo></math> y <math display=\"inline\"><mo>∃</mo></math>. Las abreviaturas GIC, GEG, GIP, GEP y GNP son las originales. En GEP, las variables críticas <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> deben ser distintas entre sí y no pueden haber aparecido en las líneas anteriores. En los ejercicios siguientes se han conservado el número de cada línea y el orden de la deducción original; las palabras &quot;objetivo&quot;, &quot;hipótesis&quot; y &quot;premisa&quot; explican las marcas de alcance originales."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GIC: introducción de la conjunción grande",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><msub><mi>α</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mi>…</mi><mspace width=\"1.0em\"></mspace><msub><mi>α</mi><mi>n</mi></msub></mrow><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GIC)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Reúne en una sola conjunción las fórmulas <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></math> ya utilizables."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GEG: eliminación del generalizador grande",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>t</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>t</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GEG)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "La serie de generalizadores se instancia a la vez, poniendo en lugar de cada <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math> el término correspondiente <math display=\"inline\"><msub><mi>t</mi><mi>i</mi></msub></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GIP: introducción del particularizador grande",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>t</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>t</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GIP)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "A partir de una sola instancia se pasa a una serie de existenciales."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GEP: eliminación del particularizador grande",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>u</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>u</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GEP)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Las <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> son variables críticas nuevas y distintas entre sí. Esta condición garantiza que los testigos de los existenciales no se identifiquen y que no se añada información previa."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "GNP: negación grande del cuantificador",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Ambos sentidos pueden usarse como reglas derivadas:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>¬</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo>¬</mo><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GNP)</mtext></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GNP)</mtext></mrow></mrow></math>"
      }
     ]
    }
   ]
  },
  {
   "id": "a31",
   "maila": 2,
   "izenburua": "II.4. Ejercicios de deducción",
   "blokeak": [
    {
     "mota": "testua",
     "html": "El apartado propone, en total, treinta y cinco ejercicios. En este producto se recogen los enunciados y las deducciones de todos los ejercicios; cada deducción tiene su estructura de Frederic y la explicación numerada original o la tabla <strong>M/Just.</strong> Antes de leer cada deducción, conviene decidir con qué movimiento de construcción se abriría el objetivo: contradicción, prueba condicional, generalización o inferencia directa."
    }
   ]
  },
  {
   "id": "a32",
   "maila": 2,
   "izenburua": "Ejercicios 1-5",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 1.</strong> Sea <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demostrar <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>. Aquí <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> no es el nombre de una fórmula concreta, sino un esquema válido para todas las fórmulas."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 1.</strong> Orden de las líneas:"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> indican los objetivos de construcción de Mosterín: el general de la línea 1 y la condición de la línea 2. Repetir en la línea 4 la hipótesis de la 3 cumple el objetivo local."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/53aef43a6db9d618.svg",
       "zabalera": 332
      },
      {
       "mota": "testua",
       "html": "Con la línea 4 se cierra el objetivo 2; tras la demostración condicional, <math display=\"inline\"><mi>x</mi></math> no está libre en las premisas externas, y la línea 1 se cierra generalizando."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>α</mi></mrow></math> — subobjetivo correspondiente a la instancia de un elemento arbitrario.",
        "<strong>3.</strong> <math display=\"inline\"><mi>α</mi></math> — antecedente de la condición de la línea 2, como hipótesis.",
        "<strong>4.</strong> <math display=\"inline\"><mi>α</mi></math> — R, 3."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 4 cierra el objetivo condicional de la línea 2; como <math display=\"inline\"><mi>x</mi></math> es arbitraria, el resultado se generaliza y se cierra la línea 1. No se ha usado ninguna premisa."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 2.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 2.</strong>"
      },
      {
       "mota": "testua",
       "html": "Las líneas 1 y 4 son objetivos <code>?</code>. La subprueba de las líneas 5-6 es de reducción al absurdo; al terminar se generaliza el resultado para la <math display=\"inline\"><mi>x</mi></math> arbitraria."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9b27b5fdd49dd0e3.svg",
       "zabalera": 415
      },
      {
       "mota": "testua",
       "html": "La contradicción de las líneas 5 y 6 cierra el objetivo 4; la generalización, el 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo, para la <math display=\"inline\"><mi>x</mi></math> arbitraria.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis contraria de la línea 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 3 y 5."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 5 y 6 cierran el objetivo 4; la generalización posterior respecto de <math display=\"inline\"><mi>x</mi></math> da la línea 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 3.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 3.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>u</code> es una nueva variable crítica en la aplicación de EP de la línea 3: no está en la conclusión y no aparece libre en ninguna fórmula abierta usada fuera de la subprueba."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b245ad21b991479f.svg",
       "zabalera": 324
      },
      {
       "mota": "testua",
       "html": "Al cerrar el ámbito de las líneas 2-7 se obtiene la condición de la línea 1; <code>u</code> no se exporta a la conclusión."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 2; <math display=\"inline\"><mi>u</mi></math> es una nueva variable crítica.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 5 y 3.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>Q</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 6."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 7 cierra el objetivo condicional de la línea 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 4.</strong> Demostrar que es un teorema lógico <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 4.</strong>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1, 4 y 7 son objetivos. La línea 2 abre el marco externo de reducción al absurdo; las líneas 5-6 y 8-9 muestran los casos arbitrarios de dos generalizaciones."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/ae27098e9a7395f2.svg",
       "zabalera": 436
      },
      {
       "mota": "testua",
       "html": "Las líneas 5-6 cierran el objetivo 4 y las 8-9, el 7. La contradicción de las líneas 7 y 11 descarta la hipótesis 2 y cierra el objetivo 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis contraria.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 10."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 5-6 cierran la generalización 4; las 8-9, la 7. Con la contradicción de las líneas 7 y 11 se descarta la hipótesis 2 y queda cerrado el objetivo 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 5.</strong> Demostrar que es un teorema lógico <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 5.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>z</code> es la nueva variable crítica del EP de la línea 7. El objetivo <code>?</code> de la línea 8 es condicional; la deducción original la cierra con la repetición de la línea 9."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/f72b2bf2a804183d.svg",
       "zabalera": 434
      },
      {
       "mota": "testua",
       "html": "La línea 10 da la contraria de la hipótesis 2; <code>z</code> no aparece fuera de la última fórmula existencial."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis contraria.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 6; <math display=\"inline\"><mi>z</mi></math> es variable crítica.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — R, 7.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 8."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 9 cierra la condición 8. La línea 10 da la contraria de la hipótesis 2 y cierra el objetivo inicial."
      }
     ]
    }
   ]
  },
  {
   "id": "a33",
   "maila": 2,
   "izenburua": "Ejercicios 6-10",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 6.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 6.</strong>"
      },
      {
       "mota": "testua",
       "html": "Las líneas 1, 2 y 5 son los objetivos <code>?</code> de Mosterín. <code>u</code> es la nueva variable crítica del EP de la línea 8 y no se usa una vez cerrado el objetivo 5."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/f252f47d32d1630f.svg",
       "zabalera": 623
      },
      {
       "mota": "testua",
       "html": "Las líneas 9-10 cierran el objetivo 5; las 3 y 13, el 2, y la última generalización, el 1. Los cierres de marco impiden usar el testigo <code>u</code> fuera."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo para la <math display=\"inline\"><mi>x</mi></math> arbitraria.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis contraria.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — subobjetivo.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis contraria.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 7; <math display=\"inline\"><mi>u</mi></math> crítica.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 8.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ED, 4 y 5.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 12 y 3."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 9 y 10 cierran el objetivo 5; las 3 y 13, el 2; la última generalización da la línea 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 7.</strong> Dadas las siguientes fórmulas,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 7.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>x_0</code> es la nueva variable crítica del EP de la línea 3. <code>w</code> es el término elegido para introducir el existencial de la línea 5; en las líneas 14-19, <math display=\"inline\"><mi>y</mi></math> es arbitraria. Las marcas <code>?</code> son los objetivos de las líneas 1, 5, 14 y 15."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/99ad7c9305f53db7.svg",
       "zabalera": 657
      },
      {
       "mota": "testua",
       "html": "La línea 19 cierra la condición 15 y la generalización 14. La contradicción entre la línea 13 y el objetivo cerrado 14 cierra la condición 5; la línea 20, la 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 2; <math display=\"inline\"><msub><mi>x</mi><mn>0</mn></msub></math> crítica.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ID, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 4 y 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IC, 6 y 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 12 y 10.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — <math display=\"inline\"><mi>y</mi></math> arbitrarioarentzako objetivo.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ID, 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>m</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mi>C</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>0</mn></msub><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 18 y 17.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>L</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>u</mi><mi>C</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 5."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 19 cierra la condición 15 y después la generalización 14. La contradicción de las líneas 13 y 14 cierra la condición 5; la línea 20 cumple el objetivo inicial."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 8.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>8. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "Las líneas 1 y 2 son el objetivo <code>?</code> general y el condicional. <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> son arbitrarias; <code>w</code> es la nueva variable crítica del EP de la línea 8."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/9eaabddb00f67690.svg",
       "zabalera": 476
      },
      {
       "mota": "testua",
       "html": "La línea 22 cierra la condición 2. <code>w</code> no aparece en la conclusión; <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarias da el objetivo 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 7; <math display=\"inline\"><mi>w</mi></math> crítica.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — R, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 8 y 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 13 y 11.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 14 y 5.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 17 y 16.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 4 y 18.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 19.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 12.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 21 y 20."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 22 cierra la condición 2; como <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> son arbitrarias, la línea 1 se generaliza."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 9.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En sentido intuitivo, <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> pueden expresar que Carlos afeita a <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que <math display=\"inline\"><mi>x</mi></math> es habitante de Sitges. Las premisas usan como paradoja la pregunta de si Carlos se afeita a sí mismo, para concluir que no afeita a nadie."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 9.</strong>"
      },
      {
       "mota": "testua",
       "html": "Las líneas 1 y 7 son objetivos <code>?</code>. La subprueba por contradicción de las líneas 8-10 da <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; el resultado se usa en las líneas exteriores 11-12, según el alcance original."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/063cf9d793c5e32e.svg",
       "zabalera": 487
      },
      {
       "mota": "testua",
       "html": "Las líneas 8 y 10 cierran el objetivo 7; la contradicción de las líneas 7 y 12 cierra el objetivo existencial negado 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 2.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 4.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — subobjetivo.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis por contradicción.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 3 y 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 6 y 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 5 y 7.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 11."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 8 y 10 cierran el objetivo 7. La contradicción de las líneas 7 y 12 cierra, en cambio, el existencial negado inicial."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 10.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En una lectura intuitiva, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> puede decir que <math display=\"inline\"><mi>x</mi></math> desprecia a <math display=\"inline\"><mi>y</mi></math>, <math display=\"inline\"><mrow><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que <math display=\"inline\"><mi>y</mi></math> es fanático y <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que es político. La deducción convierte las negaciones de condiciones universales en testigos concretos."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 10.</strong>"
      },
      {
       "mota": "testua",
       "html": "<code>w,u</code> son dos variables críticas nuevas y distintas de GEP en la línea 4; <code>y_0</code> es la variable crítica nueva de EP en la línea 15. Las líneas 1 y 6 son objetivos <code>?</code>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/942154a771f97283.svg",
       "zabalera": 606
      },
      {
       "mota": "testua",
       "html": "La contradicción de las líneas 11-12 cierra el objetivo 6. Las tres variables críticas desaparecen, cumpliendo sus condiciones de ámbito, a partir de la conclusión de la línea 22."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEP, 3; <math display=\"inline\"><mrow><mi>w</mi><mo>,</mo><mi>u</mi></mrow></math> variables críticas y distintas.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 2.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis por contradicción.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 4.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 y 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 4.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MT, 5 y 6.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 13.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 14; <math display=\"inline\"><msub><mi>y</mi><mn>0</mn></msub></math> crítica.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NCC, 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 16.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 18.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 19.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mi>F</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>y</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IC, 17 y 20.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>F</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 21."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 11 y 12 cierran el objetivo 6. La línea 22 cumple el objetivo 1."
      }
     ]
    }
   ]
  },
  {
   "id": "a34",
   "maila": 2,
   "izenburua": "11.-15. ejercicios",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 11.</strong>Demostrar que es un teorema lógico"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>11. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "Escribamos <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Los objetivos <code>?</code> están en las líneas 1, 2, 4, 5, 14, 16, 18, 20 y 21. <code>u</code> y <code>w</code> son las nuevas variables críticas, distintas, de las aplicaciones de EP de las líneas 22-23."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/62fc4ffcda7e611a.svg",
       "zabalera": 516
      },
      {
       "mota": "testua",
       "html": "La línea 13 cierra los objetivos 5, 4 y 2. La línea 26 cierra las generalizaciones 21 y 20, las condiciones 18 y 16 y la dirección 14; la IB une ambas direcciones en la línea 27. <code>u,w</code> no se exportan a la conclusión. Pongamos <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Los 27 pasos originales:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>→</mo><mi>B</mi></mrow></math> — lehen noranzkoaren objetivo.",
        "<strong>3.</strong> <math display=\"inline\"><mi>A</mi></math> — hipótesis condicional.",
        "<strong>4.</strong> <math display=\"inline\"><mi>B</mi></math> — objetivo.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> arbitrarioentzako objetivo.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 3 y 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 6.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 y 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo>→</mo><mi>A</mi></mrow></math> — bigarren noranzkoaren objetivo.",
        "<strong>15.</strong> <math display=\"inline\"><mi>B</mi></math> — hipótesis condicional.",
        "<strong>16.</strong> <math display=\"inline\"><mi>A</mi></math> — objetivo.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako objetivo.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 17; <math display=\"inline\"><mi>u</mi></math> crítica.",
        "<strong>23.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 19; <math display=\"inline\"><mi>w</mi></math> crítica y <math display=\"inline\"><mi>u</mi></math>-tik desberdina.",
        "<strong>24.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 22 y 23.",
        "<strong>25.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — GEG, 15.",
        "<strong>26.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 25 y 24.",
        "<strong>27.</strong> <math display=\"inline\"><mrow><mi>A</mi><mo>↔</mo><mi>B</mi></mrow></math> — IB, 2 y 14."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 13 cierra la condición 5 y la generalización 4; así se obtiene la dirección 2. A partir de la línea 26 se cierran las generalizaciones 21 y 20, las condiciones 18 y 16 y, por último, la dirección 14. La IB une ambas direcciones en la línea 27."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 12.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>12. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "La línea 1 es un objetivo <code>?</code>. La línea 2 abre su marco de reducción al absurdo; las premisas entran en las líneas originales 5, 7 y 9."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/46cbc99e8377bf3a.svg",
       "zabalera": 547
      },
      {
       "mota": "testua",
       "html": "La contradicción de las líneas 11 y 12 descarta la hipótesis 2 y cierra el objetivo 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis contraria.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 6 y 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>N</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 8 y 4."
       ]
      },
      {
       "mota": "testua",
       "html": "La contradicción de las líneas 11 y 12 cierra el objetivo inicial."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 13.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>13. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura Frederic - 13. ejercicio</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas originales 1 y 4 son el objetivo y el subobjetivo, no premisas nuevas. En el diagrama ambas líneas aparecen como <code>objetivo (?)</code> y el ámbito de las líneas 4-11 se mantiene con una barra vertical."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/51fe508927c33492.svg",
       "zabalera": 419
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>x</mi></math> es arbitraria en las líneas 6-16; la línea 11 cierra el subobjetivo 4, y la generalización de la línea 16 da el objetivo 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — subobjetivo.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NP, 2.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>a</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 7.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EI, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 7.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 9 y 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — DN, 4.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MT, 3 y 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NP, 13.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 14.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 15."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 11 cierra la generalización 4. Los pasos 13-16 dan <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> para la <math display=\"inline\"><mi>x</mi></math> arbitraria, y la última generalización cierra el objetivo 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 14.</strong>A partir de la premisa de extensionalidad,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>y</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "demostrar"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>14. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura Frederic - 14. ejercicio</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> originales se mantienen en las líneas 1, 2, 6, 7, 14 y 18 con la etiqueta <code>objetivo (?)</code>. Las líneas 3, 15 y 19 son las hipótesis condicionales; <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>w</mi><mo>,</mo><mi>x</mi></mrow></math> arbitrarias muestran los anidamientos de las subpruebas."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b7606e5f994e747f.svg",
       "zabalera": 641
      },
      {
       "mota": "testua",
       "html": "Las líneas 17 y 21 cierran las dos ramas condicionales; la IB da la línea 22, la generalización de <math display=\"inline\"><mi>x</mi></math> la 6 y la extensionalidad la línea 25."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — objetivo.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis condicional.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako objetivo.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EG, 4.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>↔</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EG, 5.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EB, 8.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — EB, 8.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — EB, 9.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — EB, 9.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — objetivo.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — hipótesis condicional.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — MP, 10 y 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — MP, 13 y 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi><mo>→</mo><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — objetivo.",
        "<strong>19.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — hipótesis condicional.",
        "<strong>20.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>α</mi></mrow></math> — MP, 12 y 19.",
        "<strong>21.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi></mrow></math> — MP, 11 y 20.",
        "<strong>22.</strong> <math display=\"inline\"><mrow><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi></mrow></math> — IB, 14 y 18.",
        "<strong>23.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>y</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>24.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>∈</mo><mi>u</mi><mo>↔</mo><mi>x</mi><mo>∈</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — GEG, 23.",
        "<strong>25.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — MP, 24 y 6."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 17 y 21 cierran las dos direcciones; la línea 22 da el objetivo 7 y después la generalización 6. La línea 25 cierra la condición 2, y <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>w</mi></mrow></math> arbitrarias, su generalización da la línea 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 15.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Notación del ejercicio 15",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El original escribe los términos encadenados: <math display=\"inline\"><mrow><mi>h</mi><mi>f</mi><mi>c</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mi>c</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>h</mi><mi>c</mi></mrow></math>. Aquí se ha hecho explícita con paréntesis la estructura de la aplicación de funciones: <math display=\"inline\"><mrow><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. No se ha cambiado el contenido lógico."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Deducción del ejercicio 15.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura de Frederic - ejercicio 15</span>"
      },
      {
       "mota": "testua",
       "html": "La marca <code>?</code> de la línea 1 indica el objetivo de toda la deducción. Como en el original, el antecedente no debe usarse: las líneas 2-10 demuestran directamente <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/04ff9d0c8a48d068.svg",
       "zabalera": 363
      },
      {
       "mota": "testua",
       "html": "La aplicación de funciones se ha escrito con paréntesis, pero la estructura de los términos originales <math display=\"inline\"><mrow><mi>h</mi><mi>f</mi><mi>c</mi><mi>c</mi></mrow></math>, <math display=\"inline\"><mrow><mi>f</mi><mi>c</mi><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>h</mi><mi>c</mi></mrow></math> y los números de regla no se han cambiado."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi></mrow></math> — EG, 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 4.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>h</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 7 y 5.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — ED, 2 y 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 9."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 10 cierra el objetivo condicional 1; el antecedente hipotético no ha hecho falta para la inferencia."
      }
     ]
    }
   ]
  },
  {
   "id": "a35",
   "maila": 2,
   "izenburua": "16.-20. ejercicios",
   "blokeak": [
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 16.</strong>Demostrar que es un teorema lógico"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>16. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura Frederic - 16. ejercicio</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1, 3 y 7 son objetivos. La línea 2 es una hipótesis condicional; las líneas 4 y 8 abren dos subpruebas de reducción al absurdo independientes."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/4fca5411ddd823d0.svg",
       "zabalera": 523
      },
      {
       "mota": "testua",
       "html": "Las contradicciones de las líneas 5-6 y 9-10 cierran, respectivamente, los subobjetivos 3 y 7; la línea 14 cierra el ámbito de la hipótesis 2."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis condicional.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — subobjetivo.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis contraria.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ID, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — R, 2.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — subobjetivo.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis contraria.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — ID, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∨</mo><mo>¬</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — R, 2.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 7.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — SI, 3.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 12 y 13."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 5 y 6 cierran el objetivo 3; las 9 y 10, el 7. Usando la simetría de la igualdad y el esquema de sustitución, la línea 14 cierra la condición inicial."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 17.</strong>Demostrar que es un teorema lógico <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>17. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura Frederic - 17. ejercicio</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1, 2 y 7 son objetivos; las líneas 3 y 8 son las hipótesis condicionales de las dos direcciones. En el EP de la línea 9, <math display=\"inline\"><mi>u</mi></math> es una nueva variable crítica y solo se usa dentro del ámbito del existencial de la línea 8."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/5cda2ddc74a7c6e7.svg",
       "zabalera": 358
      },
      {
       "mota": "testua",
       "html": "Las líneas 6 y 14 cierran los ámbitos de las dos direcciones; la IB de la línea 15 une los dos resultados."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — lehen noranzkoaren objetivo.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi></mrow></math> — I.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>a</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 4 y 3.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — bigarren noranzkoaren objetivo.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis condicional.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EP, 8; <math display=\"inline\"><mi>u</mi></math> crítica.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi></mrow></math> — EC, 9.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — II, 10.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>a</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 13 y 11.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IB, 2 y 7."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 6 y 14 cierran las dos condiciones; la IB da el bicondicional de la línea 15."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 18.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>18. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura Frederic - 18. ejercicio</span>"
      },
      {
       "mota": "testua",
       "html": "El objetivo <code>?</code> de la línea 1 se demuestra por reducción al absurdo: en la línea 2 se abre su doble negación. En el EP de la línea 11, <math display=\"inline\"><mi>u</mi></math> es una nueva variable crítica y no se generaliza fuera del existencial."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/d84dd69f5dacde28.svg",
       "zabalera": 479
      },
      {
       "mota": "testua",
       "html": "Las líneas 7 y 17 dan fórmulas opuestas; la contradicción descarta la hipótesis 2 y cierra el objetivo 1."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis contraria.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi><mo>↔</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EG, 3.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi><mo>→</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EB, 4.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><mi>c</mi></mrow></math> — I.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 5 y 6.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — MP, 8 y 2.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — NG, 9.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EP, 10; <math display=\"inline\"><mi>u</mi></math> crítica.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — NCC, 11.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 12.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EC, 12.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — DN, 13.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IC, 14 y 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — IP, 16."
       ]
      },
      {
       "mota": "testua",
       "html": "Las líneas 7 y 17 son negaciones mutuas; por tanto se descarta la hipótesis 2 y se cierra el objetivo 1."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 19.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, demostrar"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong>19. ejercicioren deducción.</strong>"
      },
      {
       "mota": "testua",
       "html": "<span>Estructura Frederic - 19. ejercicio</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1, 7 y 12 indican objetivos anidados. Las líneas 2 y 13 son las hipótesis condicionales; <math display=\"inline\"><mi>x</mi></math> es arbitraria en el ámbito de las líneas 8-17, y la <math display=\"inline\"><mi>v</mi></math> de la línea 15 es un testigo libre para introducir el existencial."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/097f38dc63d48297.svg",
       "zabalera": 624
      },
      {
       "mota": "testua",
       "html": "La línea 17 cierra la condición 12; la generalización de <math display=\"inline\"><mi>x</mi></math> da la línea 7, y la línea 18 cierra el ámbito de la hipótesis 2."
      },
      {
       "mota": "zerrenda",
       "ordenatua": false,
       "elementuak": [
        "<strong>1.</strong> <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — objetivo.",
        "<strong>2.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — hipótesis condicional.",
        "<strong>3.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 2.",
        "<strong>4.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — EC, 2.",
        "<strong>5.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — premisa <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>.",
        "<strong>6.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — GEG, 5.",
        "<strong>7.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> — subobjetivo.",
        "<strong>8.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 3.",
        "<strong>9.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 8.",
        "<strong>10.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 4.",
        "<strong>11.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EB, 10.",
        "<strong>12.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — <math display=\"inline\"><mi>x</mi></math> arbitrarioarentzako objetivo.",
        "<strong>13.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — hipótesis condicional.",
        "<strong>14.</strong> <math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 9 y 13.",
        "<strong>15.</strong> <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — EG, 14.",
        "<strong>16.</strong> <math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — IP, 15.",
        "<strong>17.</strong> <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> — MP, 11 y 16.",
        "<strong>18.</strong> <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> — MP, 6 y 7."
       ]
      },
      {
       "mota": "testua",
       "html": "La línea 17 cierra la condición 12 y la generalización respecto de <math display=\"inline\"><mi>x</mi></math> da la línea 7. La línea 18 cierra la condición inicial."
      }
     ]
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Ejercicio 20.</strong> Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>y</mi><mi>u</mi><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, demostrar <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En contexto algebraico, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> expresa la cancelación por la derecha respecto del producto por la izquierda; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> recoge la existencia de un elemento y una condición parecida a la de los inversos; <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> formaliza que existe un único elemento neutro por la derecha."
      },
      {
       "mota": "testua",
       "html": "<strong>Límite (L04/L05):</strong> el enunciado del 20 termina en la página impresa 72; la deducción empieza en la 73 y corresponde a L05. No se duplica aquí."
      }
     ]
    }
   ]
  },
  {
   "id": "a36",
   "maila": 2,
   "izenburua": "II.4. Ejercicios de deducción B: ejercicios 20-35",
   "blokeak": [
    {
     "mota": "oharra",
     "titulua": "Límite del lote y notación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado del ejercicio 20 empieza y termina en la página impresa 72; por eso queda en L04 y aquí no se duplica. Aquí empieza su deducción de 24 líneas, como en la página 73. A continuación vienen los ejercicios 21-35, con enunciado y solución completos."
      },
      {
       "mota": "testua",
       "html": "El prefijo compacto de Mosterín se ha modernizado para que sea legible: en lugar de <math display=\"inline\"><mrow><mi>f</mi><mi>x</mi><mi>y</mi></mrow></math> se escribe <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, en lugar de <math display=\"inline\"><mrow><mi>P</mi><mi>x</mi><mi>y</mi></mrow></math> <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y en lugar de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mo>,</mo><mi>V</mi><mo>,</mo><mi>ι</mi></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mo>,</mo><mo>∃</mo><mo>,</mo><mi>ι</mi></mrow></math>. Las abreviaturas de las reglas se conservan como en la fuente: <code>prem.</code>, <code>EG</code>, <code>EP</code>, <code>GEG</code>, <code>MP</code>, <code>IC</code>, <code>EC</code>, <code>IB</code>, <code>EB</code>, <code>II</code>, <code>IP</code>, <code>TI</code>, <code>SI</code>, <code>DN</code>, <code>DP</code>, <code>DI</code>, <code>R</code>, <code>MT</code> y <code>GEP</code>. La columna <strong>M</strong> de las tablas de deducción muestra el nivel de alcance; las líneas <math display=\"inline\"><mrow><mi>?</mi><mi>φ</mi></mrow></math> son subobjetivos que hay que demostrar."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 20 - deducción"
    },
    {
     "mota": "testua",
     "html": "Se mantiene la notación <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> del ejercicio 20 de L04; aquí solo viene la deducción <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Estructura de Frederic - ejercicio 20</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas de objetivo <code>?</code> de las líneas originales 1, 4, 5, 7 y 13 se han mantenido en la etiqueta. En EP de la línea 3, <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> es crítico nuevo; es el mismo testigo en todo el recinto de las líneas 4-23, y en la línea 24 se saca por IP."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/89fb4ebb085ac970.svg",
       "zabalera": 519
      },
      {
       "mota": "testua",
       "html": "Los recintos de los arbitrarios <math display=\"inline\"><mi>x</mi></math> y <math display=\"inline\"><mi>w</mi></math> se ven mediante las barras de las líneas 4-23; <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> solo se libera después de unir por IB los sentidos 5 y 13."
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "5",
         "2",
         "<math display=\"inline\"><mrow><mi>?</mi><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo>→</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         ""
        ],
        [
         "6",
         "3",
         "<math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         ""
        ],
        [
         "7",
         "3",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         ""
        ],
        [
         "8",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "EG, 3"
        ],
        [
         "9",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "EC, 8"
        ],
        [
         "10",
         "3",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 9"
        ],
        [
         "11",
         "3",
         "<math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 10"
        ],
        [
         "12",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "MP, 11, 6"
        ],
        [
         "13",
         "2",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>→</mo><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         ""
        ],
        [
         "14",
         "3",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         ""
        ],
        [
         "15",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 14"
        ],
        [
         "16",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "EG, 3"
        ],
        [
         "17",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "EC, 16"
        ],
        [
         "18",
         "3",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "19",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>→</mo><msub><mi>z</mi><mn>0</mn></msub><mo>=</mo><mi>w</mi></mrow></math>",
         "GEG, 18"
        ],
        [
         "20",
         "3",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "IC, 17, 15"
        ],
        [
         "21",
         "3",
         "<math display=\"inline\"><mrow><msub><mi>z</mi><mn>0</mn></msub><mo>=</mo><mi>w</mi></mrow></math>",
         "MP, 19, 20"
        ],
        [
         "22",
         "3",
         "<math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "SI, 21"
        ],
        [
         "23",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "IB, 13, 5"
        ],
        [
         "24",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>w</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 4"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Primero se muestra que <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> dado por <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es la identidad por la derecha. La cláusula de unicidad de <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> identifica con él cualquier otro <math display=\"inline\"><mi>w</mi></math>; los dos sentidos se unen por IB y <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> se introduce existencialmente."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 21"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Lectura en teoría de grupos",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math> son una posible axiomatización de la teoría de grupos. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> expresa que el cociente por la derecha siempre existe."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Estructura de Frederic - ejercicio 21</span>"
      },
      {
       "mota": "testua",
       "html": "La marca <code>?</code> de la línea 1 indica el objetivo general. La barra de las líneas 5-13 es el recinto de los <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> arbitrarios; no es una hipótesis adicional. En esta deducción no hay variables críticas de EP/GEP."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/555bab062cbf3b20.svg",
       "zabalera": 381
      },
      {
       "mota": "testua",
       "html": "El testigo de la IP de la línea 13 es <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Después, la generalización implícita de <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math> cierra el objetivo de la línea 1, como indican las marcas de recinto originales."
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "4",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "EG, 4"
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>k</mi><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 5"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi></mrow></math>",
         "EG, 6"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math>",
         "EG, 3"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi></mrow></math>",
         "MP, 7, 8"
        ],
        [
         "10",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "GEG, 2"
        ],
        [
         "11",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EG, 10"
        ],
        [
         "12",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>y</mi></mrow></math>",
         "TI, 9, 11"
        ],
        [
         "13",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "IP, 12"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "La ley asociativa convierte el término <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> en <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Usando <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>h</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>k</mi></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>k</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>, el testigo <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple el objetivo."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 22"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Lectura de los axiomas de Hamilton",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Las tres primeras fórmulas son los axiomas de grupo de Hamilton. La conclusión expresa que existe un elemento neutro y que cada elemento tiene un inverso."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Estructura de Frederic - ejercicio 22</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1 y 5 son objetivos. En EP, <math display=\"inline\"><mi>u</mi></math> en la línea 4, <math display=\"inline\"><mi>w</mi></math> en la 8 y <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> en la 20 son variables críticas nuevas; las tres se eligen después de sus existenciales y no se convierten en premisas libres."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/de4045e53ef1fc50.svg",
       "zabalera": 421
      },
      {
       "mota": "testua",
       "html": "La línea 22 da la matriz del objetivo 5; se hace la generalización de <math display=\"inline\"><mi>x</mi></math> y el testigo <math display=\"inline\"><mi>u</mi></math> de la línea 4 se introduce existencialmente en la línea 23."
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "GEG, 2"
        ],
        [
         "4",
         "0",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "EP, 3"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "GEG, 6"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "EP, 7"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><mi>y</mi><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 8"
        ],
        [
         "10",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 9"
        ],
        [
         "11",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "MP, 10, 4"
        ],
        [
         "12",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "13",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "GEG, 12"
        ],
        [
         "14",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "TI, 13, 11"
        ],
        [
         "15",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 14"
        ],
        [
         "16",
         "1",
         "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 15"
        ],
        [
         "17",
         "1",
         "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "SI, 8"
        ],
        [
         "18",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "MP, 16, 17"
        ],
        [
         "19",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "GEG, 2"
        ],
        [
         "20",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EP, 19"
        ],
        [
         "21",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "IP, 20"
        ],
        [
         "22",
         "1",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "IC, 18, 21"
        ],
        [
         "23",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mo>∃</mo><mi>y</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 5"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Primero se elige <math display=\"inline\"><mi>u</mi></math> con <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>. Combinando los cocientes por la izquierda y por la derecha con la ley asociativa, se obtiene que <math display=\"inline\"><mi>u</mi></math> es neutro por la derecha para todos los elementos; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>, además, da un inverso por la derecha que lleva a <math display=\"inline\"><mi>u</mi></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 23"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>4</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Otra consecuencia de los axiomas de Hamilton",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> expresa que la ecuación del producto de dos elementos tiene como máximo una solución; relaciona las fuentes con la unicidad de la operación del grupo."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Estructura de Frederic - ejercicio 23</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1 y 2 indican el objetivo general y su matriz condicionada. La línea 3 es la única hipótesis. Las EP de las líneas 9, 11 y 14 eligen, respectivamente, las variables críticas nuevas <math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub></mrow></math>; los nombres y el recinto de uso son los originales."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/e7e294c5c742c7c4.svg",
       "zabalera": 493
      },
      {
       "mota": "testua",
       "html": "Las instancias de GEG de la ley asociativa transportan la cadena de igualdades; la TI de las líneas 38 y 14 da <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> y cierra la hipótesis 3."
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         ""
        ],
        [
         "3",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         ""
        ],
        [
         "4",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "EC, 3"
        ],
        [
         "5",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "EC, 3"
        ],
        [
         "6",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "TI, 5, 4"
        ],
        [
         "7",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "8",
         "2",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "GEG, 7"
        ],
        [
         "9",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EP, 8"
        ],
        [
         "10",
         "2",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi>z</mi><mn>1</mn></msub></mrow></math>",
         "GEG, 7"
        ],
        [
         "11",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>z</mi><mn>1</mn></msub></mrow></math>",
         "EP, 10"
        ],
        [
         "12",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "13",
         "2",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>w</mi></mrow></math>",
         "GEG, 12"
        ],
        [
         "14",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>w</mi></mrow></math>",
         "EP, 13"
        ],
        [
         "15",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><msub><mi>z</mi><mn>1</mn></msub><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 9"
        ],
        [
         "16",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>z</mi><mn>1</mn></msub><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 15"
        ],
        [
         "17",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 16, 11"
        ],
        [
         "18",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "19",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "GEG, 18"
        ],
        [
         "20",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "TI, 19, 17"
        ],
        [
         "21",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 20"
        ],
        [
         "22",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 21"
        ],
        [
         "23",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 22, 6"
        ],
        [
         "24",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "GEG, 18"
        ],
        [
         "25",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "TI, 24, 23"
        ],
        [
         "26",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 25"
        ],
        [
         "27",
         "2",
         "<math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 26"
        ],
        [
         "28",
         "2",
         "<math display=\"inline\"><mrow><msub><mi>z</mi><mn>1</mn></msub><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>2</mn></msub><mo>,</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "SI, 11"
        ],
        [
         "29",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 27, 28"
        ],
        [
         "30",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><msub><mi>z</mi><mn>1</mn></msub><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 29"
        ],
        [
         "31",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>w</mi><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 30"
        ],
        [
         "32",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 31, 14"
        ],
        [
         "33",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "GEG, 18"
        ],
        [
         "34",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "TI, 32, 33"
        ],
        [
         "35",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>v</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 34"
        ],
        [
         "36",
         "2",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 35"
        ],
        [
         "37",
         "2",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>z</mi><mn>1</mn></msub><mo>,</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "SI, 9"
        ],
        [
         "38",
         "2",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 36, 37"
        ],
        [
         "39",
         "1",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "TI, 38, 14"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "La prueba larga elige una y otra vez cocientes por la izquierda y por la derecha. La ley asociativa cambia de lugar los paréntesis, y las igualdades encadenadas por TI dan <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> uniendo <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>u</mi></mrow></math> y <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><msub><mi>z</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>w</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 24"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>r</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Formalización del argumento",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un único sofista enseña gratis, y es Sócrates. Sócrates dice que no hay otro sofista. Platón argumenta mejor que un sofista que enseña gratis. Si alguien argumenta mejor que otro, el segundo no argumenta mejor que el primero. Conclusión: Platón no es sofista."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<span>Estructura de Frederic - ejercicio 24</span>"
      },
      {
       "mota": "testua",
       "html": "Las marcas <code>?</code> de las líneas 1 y 23 son objetivos. Las líneas 2 y 24 son hipótesis por contradicción. En EP de la línea 5, <math display=\"inline\"><mi>u</mi></math>, y en EP de la línea 7, <math display=\"inline\"><mi>w</mi></math>, son variables críticas nuevas; solo se usan en el recinto de sus existenciales."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/8e34dbe1e4568e05.svg",
       "zabalera": 491
      },
      {
       "mota": "testua",
       "html": "Las líneas 28 y 30 ponen en contradicción la hipótesis 24; eso da el objetivo 23. La contradicción final de las líneas 32 y 33 descarta la hipótesis 2 y cierra el objetivo 1."
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "3",
         "1",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "DN, 2"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EP, 4"
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>w</mi><mo>=</mo><mi>r</mi></mrow></math>",
         "EP, 6"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EC, 7"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "EG, 8"
        ],
        [
         "10",
         "1",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "EB, 9"
        ],
        [
         "11",
         "1",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 5"
        ],
        [
         "12",
         "1",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "MP, 10, 11"
        ],
        [
         "13",
         "1",
         "<math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>r</mi></mrow></math>",
         "EC, 7"
        ],
        [
         "14",
         "1",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>r</mi></mrow></math>",
         "TI, 13, 12"
        ],
        [
         "15",
         "1",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 5"
        ],
        [
         "16",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 15"
        ],
        [
         "17",
         "1",
         "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EG, 16"
        ],
        [
         "18",
         "1",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 17, 14"
        ],
        [
         "19",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>"
        ],
        [
         "20",
         "1",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "GEG, 19"
        ],
        [
         "21",
         "1",
         "<math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 20, 18"
        ],
        [
         "22",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>r</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "23",
         "2",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mi>p</mi><mo>=</mo><mi>r</mi></mrow></math>",
         ""
        ],
        [
         "24",
         "3",
         "<math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>p</mi><mo>=</mo><mi>r</mi></mrow></math>",
         ""
        ],
        [
         "25",
         "3",
         "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>r</mi></mrow></math>",
         "DN, 24"
        ],
        [
         "26",
         "3",
         "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "TI, 25, 14"
        ],
        [
         "27",
         "3",
         "<math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EG, 16"
        ],
        [
         "28",
         "3",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 27, 26"
        ],
        [
         "29",
         "3",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "GEG, 19"
        ],
        [
         "30",
         "3",
         "<math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 29, 28"
        ],
        [
         "31",
         "2",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>p</mi><mo>=</mo><mi>r</mi><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EG, 22"
        ],
        [
         "32",
         "2",
         "<math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>p</mi><mo>=</mo><mi>r</mi></mrow></math>",
         "IC, 3, 23"
        ],
        [
         "33",
         "1",
         "<math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>p</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "MT, 31, 21"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> identifica al sofista que enseña gratis como <math display=\"inline\"><mi>r</mi></math>; <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> da la relación que Platón tiene sobre él. La asimetría de <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> niega <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y la suposición <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> obliga a lo contrario mediante <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 25"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 25.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivo:</strong> <math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math> de la línea 1. <strong>Alcance:</strong> la línea 1 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2-7 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Frescura:</strong> no hay aplicación de EP ni de GEP."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/25b513b0c7248688.svg",
       "zabalera": 370
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>a</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "3",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 2"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DP, 3"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>",
         "EG, 2"
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>",
         "EB, 5"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>a</mi></mrow></math>",
         "MP, 6, 4"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "La premisa dice que el único objeto que cumple <math display=\"inline\"><mi>P</mi></math> es <math display=\"inline\"><mi>a</mi></math>. DP da que el objeto descrito cumple <math display=\"inline\"><mi>P</mi></math>, y la condición de unicidad lo iguala con <math display=\"inline\"><mi>a</mi></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 26"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>→</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Condición sobre la variable",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la deducción, <math display=\"inline\"><mi>y</mi></math> no es libre en la fórmula <math display=\"inline\"><mi>α</mi></math>. Esta condición es fundamental para evitar la captura de variables al formar la fórmula de unicidad."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 26.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivos:</strong> <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>→</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la línea 1 y <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la línea 3. <strong>Alcance:</strong> la línea 1 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2 y 9 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; la línea 3 <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>; las líneas 4-8 <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>. <strong>Frescura:</strong> <math display=\"inline\"><mi>y</mi></math> no es libre en la fórmula <math display=\"inline\"><mi>α</mi></math>; esa condición impide la captura de variables."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b5f61d86a064eb52.svg",
       "zabalera": 297
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>→</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>",
         ""
        ],
        [
         "3",
         "2",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "4",
         "3",
         "<math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "5",
         "3",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "DN, 4"
        ],
        [
         "6",
         "3",
         "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></msubsup><mi>α</mi></mrow></math>",
         "DP, 5"
        ],
        [
         "7",
         "3",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>",
         "IP, 6"
        ],
        [
         "8",
         "3",
         "<math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>",
         "R, 2"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "DI, 3"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>α</mi></math> no tiene testigo, no puede caracterizar un objeto único. La regla DI identifica el valor de la descripción vacía con el término por defecto <math display=\"inline\"><mrow><mi>ι</mi><mi>u</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 27"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 27.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivos:</strong> <math display=\"inline\"><mrow><mi>?</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de la línea 1 y <math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de la línea 5. <strong>Alcance:</strong> las líneas 1-4 y 9-10 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 5-8 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Frescura:</strong> no hay aplicación de EP ni de GEP."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/0578efc375427511.svg",
       "zabalera": 329
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>c</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo>→</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 2"
        ],
        [
         "4",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>c</mi><mo>→</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EG, 3"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>c</mi></mrow></math>",
         "EG, 4"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>c</mi></mrow></math>",
         "IB, 6, 7"
        ],
        [
         "9",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 5"
        ],
        [
         "10",
         "0",
         "<math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DP, 9"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Dos premisas dan que el único objeto que cumple la propiedad <math display=\"inline\"><mrow><mi>R</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es <math display=\"inline\"><mi>c</mi></math>. DP deduce directamente la instancia de la descripción."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 28"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 28.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivo:</strong> <math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de la línea 1. <strong>Alcance:</strong> la línea 1 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2-13 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Frescura:</strong> en EP de la línea 3, <math display=\"inline\"><mi>u</mi></math> es un testigo nuevo, que no aparece en las líneas anteriores."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/8f5fc1c6ef3c2145.svg",
       "zabalera": 384
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "3",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EC, 3"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 4"
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DP, 5"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 4"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><mi>H</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 7"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 8, 6"
        ],
        [
         "10",
         "1",
         "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 3"
        ],
        [
         "11",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 10"
        ],
        [
         "12",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo>→</mo><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EG, 11"
        ],
        [
         "13",
         "1",
         "<math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "MP, 12, 9"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "El existente da que el único objeto que cumple <math display=\"inline\"><mi>H</mi></math> es <math display=\"inline\"><mi>u</mi></math> y que es <math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Identificada la descripción con <math display=\"inline\"><mi>u</mi></math>, la sustitución de iguales da <math display=\"inline\"><mrow><mi>B</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 29"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mi>y</mi></math> no es libre en <math display=\"inline\"><mi>α</mi></math>, y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 29.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivo:</strong> <math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> de la línea 1. <strong>Alcance:</strong> la línea 1 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2-13 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Frescura:</strong> <math display=\"inline\"><mi>y</mi></math> no es libre en la fórmula <math display=\"inline\"><mi>α</mi></math>; en EP de la línea 3, <math display=\"inline\"><mi>u</mi></math> es un testigo nuevo."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/b488eacfa9ce2219.svg",
       "zabalera": 357
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "3",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 3"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "IP, 4"
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></msubsup><mi>α</mi></mrow></math>",
         "DP, 5"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></msubsup><mi>α</mi><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 4"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></msubsup><mi>α</mi><mo>→</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 7"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 8, 6"
        ],
        [
         "10",
         "1",
         "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 3"
        ],
        [
         "11",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 10"
        ],
        [
         "12",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>α</mi><mo>=</mo><mi>u</mi><mo>→</mo><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EG, 11"
        ],
        [
         "13",
         "1",
         "<math display=\"inline\"><mrow><mi>B</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 12, 9"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Se generaliza el esquema del ejercicio 28: en lugar del átomo <math display=\"inline\"><mrow><mi>H</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> se usa una fórmula cualquiera <math display=\"inline\"><mi>α</mi></math>, mostrando explícitamente la sustitución <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mrow><mi>ι</mi><mi>x</mi><mi>α</mi></mrow></msubsup><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 30"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 30.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivos:</strong> la equivalencia de la línea 1; la implicación de izquierda a derecha de la línea 2; y la implicación de derecha a izquierda de la línea 5. <strong>Alcance:</strong> las líneas 1 y 15 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2 y 5 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; las líneas 3-4 y 6-14 <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>. <strong>Frescura:</strong> en EP de la línea 7, <math display=\"inline\"><mi>u</mi></math> es un testigo nuevo."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/688b4ab997e7f808.svg",
       "zabalera": 409
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "3",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "4",
         "2",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 3"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "6",
         "2",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "7",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EP, 6"
        ],
        [
         "8",
         "2",
         "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DP, 6"
        ],
        [
         "9",
         "2",
         "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 7"
        ],
        [
         "10",
         "2",
         "<math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 9"
        ],
        [
         "11",
         "2",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 10, 8"
        ],
        [
         "12",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>=</mo><mi>u</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 7"
        ],
        [
         "13",
         "2",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EG, 12"
        ],
        [
         "14",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "MP, 13, 11"
        ],
        [
         "15",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IB, 2, 5"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "De izquierda a derecha, la propia descripción es el testigo del existencial. De derecha a izquierda, DP da que el objeto descrito cumple <math display=\"inline\"><mi>P</mi></math>, y la unicidad lo identifica con el <math display=\"inline\"><mi>u</mi></math> elegido."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 31"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "María, Apolonia y Pituso",
     "blokeak": [
      {
       "mota": "testua",
       "html": "María quiere a un único hombre. El hombre al que quiere María es el que quiere Apolonia. Pituso es el hombre al que quiere Apolonia. María quiere al hombre que quiere a Apolonia. Por tanto, el hombre que quiere a Apolonia es Pituso."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 31.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivo:</strong> <math display=\"inline\"><mrow><mi>?</mi><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math> de la línea 1. <strong>Alcance:</strong> todas las líneas 1-16 están en el nivel <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>. <strong>Frescura:</strong> en EP de la línea 5, <math display=\"inline\"><mi>u</mi></math> es un testigo nuevo."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/950a88f0b30dfbdd.svg",
       "zabalera": 381
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "4",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DP, 3"
        ],
        [
         "5",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EP, 3"
        ],
        [
         "6",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 5"
        ],
        [
         "7",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 6"
        ],
        [
         "8",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 7, 4"
        ],
        [
         "9",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 5"
        ],
        [
         "10",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 9"
        ],
        [
         "11",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 10, 2"
        ],
        [
         "12",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "TI, 8, 11"
        ],
        [
         "13",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "14",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "TI, 12, 13"
        ],
        [
         "15",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "16",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>p</mi></mrow></math>",
         "TI, 14, 15"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "La primera premisa de unicidad iguala con <math display=\"inline\"><mi>u</mi></math> las dos descripciones de lo que quiere María. Después, por TI, se encadenan <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> y <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 32"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mi>t</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>t</mi><mo>=</mo><mi>r</mi></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Toribio, Clotilde, Roberto y Carina",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Toribio es el hombre que quiere a Clotilde. Roberto no siente simpatía por Carina. Todo el que no siente simpatía por Carina quiere a Clotilde. A Clotilde la quiere una única persona. Por tanto, Toribio y Roberto son la misma persona."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 32.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivo:</strong> <math display=\"inline\"><mrow><mi>?</mi><mi>t</mi><mo>=</mo><mi>r</mi></mrow></math> de la línea 1. <strong>Alcance:</strong> todas las líneas 1-17 están en el nivel <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>. <strong>Frescura:</strong> en EP de la línea 8, <math display=\"inline\"><mi>u</mi></math> es un testigo nuevo."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/a4ed75dd826e72e7.svg",
       "zabalera": 360
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mi>t</mi><mo>=</mo><mi>r</mi></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EG, 2"
        ],
        [
         "4",
         "0",
         "<math display=\"inline\"><mrow><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>k</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "5",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 3, 4"
        ],
        [
         "6",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>"
        ],
        [
         "7",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DP, 6"
        ],
        [
         "8",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>u</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EP, 6"
        ],
        [
         "9",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 8"
        ],
        [
         "10",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 9"
        ],
        [
         "11",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 10, 7"
        ],
        [
         "12",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>r</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "EG, 8"
        ],
        [
         "13",
         "0",
         "<math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>r</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "EB, 12"
        ],
        [
         "14",
         "0",
         "<math display=\"inline\"><mrow><mi>r</mi><mo>=</mo><mi>u</mi></mrow></math>",
         "MP, 13, 5"
        ],
        [
         "15",
         "0",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>r</mi></mrow></math>",
         "TI, 11, 14"
        ],
        [
         "16",
         "0",
         "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>ι</mi><mi>x</mi><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "17",
         "0",
         "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>r</mi></mrow></math>",
         "TI, 16, 15"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Se concluye que Roberto cumple <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y la unicidad de <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> lo iguala con el objeto descrito. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> lleva la identidad final a Toribio."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 33"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 33.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivos:</strong> la implicación de la línea 1 y <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de la línea 4. <strong>Alcance:</strong> la línea 1 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2-3 y 18 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; la línea 4 <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>; las líneas 5-17 <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>. <strong>Frescura:</strong> en GEP de la línea 3, <math display=\"inline\"><mi>u</mi></math> y <math display=\"inline\"><mi>w</mi></math> son variables nuevas; en EP de la línea 7, <math display=\"inline\"><mi>v</mi></math> es un testigo nuevo."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/d06c2195346bfb48.svg",
       "zabalera": 378
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "3",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "GEP, 2"
        ],
        [
         "4",
         "2",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "5",
         "3",
         "<math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "6",
         "3",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>y</mi><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "DN, 5"
        ],
        [
         "7",
         "3",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>x</mi><mo>=</mo><mi>v</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EP, 6"
        ],
        [
         "8",
         "3",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>u</mi><mo>=</mo><mi>v</mi></mrow></math>",
         "EG, 7"
        ],
        [
         "9",
         "3",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>u</mi><mo>=</mo><mi>v</mi></mrow></math>",
         "EB, 8"
        ],
        [
         "10",
         "3",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 3"
        ],
        [
         "11",
         "3",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>v</mi></mrow></math>",
         "MP, 9, 10"
        ],
        [
         "12",
         "3",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>w</mi><mo>=</mo><mi>v</mi></mrow></math>",
         "EG, 7"
        ],
        [
         "13",
         "3",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>w</mi><mo>=</mo><mi>v</mi></mrow></math>",
         "EB, 12"
        ],
        [
         "14",
         "3",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 3"
        ],
        [
         "15",
         "3",
         "<math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><mi>v</mi></mrow></math>",
         "MP, 13, 14"
        ],
        [
         "16",
         "3",
         "<math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "TI, 11, 15"
        ],
        [
         "17",
         "3",
         "<math display=\"inline\"><mrow><mo>¬</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>",
         "EC, 3"
        ],
        [
         "18",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>ι</mi><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>=</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "DI, 4"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Si dos objetos distintos cumplen <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mi>P</mi></math> no puede definir un único objeto. Según DI, la descripción no única se iguala con el término por defecto."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 34"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>5</mn></msub></mrow></math>."
    },
    {
     "mota": "oharra",
     "titulua": "Formalización del argumento ontológico",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>d</mi></math> es el ser más grande que puede pensarse. <math display=\"inline\"><mi>d</mi></math> puede pensarse; hay algún ser que puede pensarse y existe; y todo ser pensable que existe es mayor que cualquier ser pensable que no existe. Por tanto, si <math display=\"inline\"><mi>d</mi></math> no existe, hay un ser pensable mayor que <math display=\"inline\"><mi>d</mi></math>. En esta formalización la existencia es el predicado <math display=\"inline\"><mi>E</mi></math>, no el cuantificador."
      }
     ]
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 34.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivo:</strong> <math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> de la línea 1. <strong>Alcance:</strong> la línea 1 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; las líneas 2-18 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>. <strong>Frescura:</strong> en EP de la línea 4, <math display=\"inline\"><mi>u</mi></math> es un testigo nuevo y no queda libre en la conclusión final."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/855b9405fa8ee8e3.svg",
       "zabalera": 372
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "2",
         "1",
         "<math display=\"inline\"><mrow><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         ""
        ],
        [
         "3",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EP, 3"
        ],
        [
         "5",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math>"
        ],
        [
         "6",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EG, 5"
        ],
        [
         "7",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "MP, 6, 4"
        ],
        [
         "8",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EG, 7"
        ],
        [
         "9",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "10",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "IC, 9, 2"
        ],
        [
         "11",
         "1",
         "<math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "MP, 8, 10"
        ],
        [
         "12",
         "1",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>w</mi><mo>=</mo><mi>d</mi><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 11"
        ],
        [
         "13",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "14",
         "1",
         "<math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi><mo>→</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "EG, 12"
        ],
        [
         "15",
         "1",
         "<math display=\"inline\"><mrow><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "MP, 14, 13"
        ],
        [
         "16",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>",
         "EC, 4"
        ],
        [
         "17",
         "1",
         "<math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IC, 16, 15"
        ],
        [
         "18",
         "1",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>ι</mi><mi>x</mi><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 17"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "Entre el testigo existente de <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> y la hipótesis de que <math display=\"inline\"><mi>d</mi></math> no existe se obtiene <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>,</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> lo sustituye por la descripción <math display=\"inline\"><mi>d</mi></math>, y <math display=\"inline\"><mi>u</mi></math> se introduce existencialmente."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 35"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ι</mi><mi>y</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>. Demostrar: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math>."
    },
    {
     "mota": "ebazpena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Estructura de Frederic - ejercicio 35.</strong>"
      },
      {
       "mota": "testua",
       "html": "<strong>Nota de control.</strong> <strong>Objetivos (?)</strong>: líneas 1, 4, 5, 6 y 14. <strong>Alcance:</strong> las líneas 1-3 y 20-21 <math display=\"inline\"><msub><mi>M</mi><mn>0</mn></msub></math>; la línea 4 <math display=\"inline\"><msub><mi>M</mi><mn>1</mn></msub></math>; las líneas 5 y 19 <math display=\"inline\"><msub><mi>M</mi><mn>2</mn></msub></math>; las líneas 6 y 14 <math display=\"inline\"><msub><mi>M</mi><mn>3</mn></msub></math>; las líneas 7-13 y 15-18 <math display=\"inline\"><msub><mi>M</mi><mn>4</mn></msub></math>. <strong>Frescura:</strong> en EP de la línea 3, <math display=\"inline\"><msub><mi>z</mi><mn>0</mn></msub></math> es nuevo; en la subdeducción 4-19, <math display=\"inline\"><mi>y</mi></math> es arbitrario."
      },
      {
       "mota": "irudia",
       "oina": null,
       "src": "../media/irudiak/cd49c491573e7c01.svg",
       "zabalera": 521
      },
      {
       "mota": "taula",
       "goiburua": [
        "<strong>L.</strong>",
        "<strong>M</strong>",
        "<strong>Formula</strong>",
        "<strong>Just.</strong>"
       ],
       "lerroak": [
        [
         "1",
         "0",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ι</mi><mi>y</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         ""
        ],
        [
         "2",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math>"
        ],
        [
         "3",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "EP, 2"
        ],
        [
         "4",
         "1",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         ""
        ],
        [
         "5",
         "2",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         ""
        ],
        [
         "6",
         "3",
         "<math display=\"inline\"><mrow><mi>?</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>→</mo><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         ""
        ],
        [
         "7",
         "4",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         ""
        ],
        [
         "8",
         "4",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 7"
        ],
        [
         "9",
         "4",
         "<math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 3"
        ],
        [
         "10",
         "4",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>w</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>∧</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>y</mi><mo>→</mo><mi>u</mi><mo>=</mo><mi>w</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "prem. <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>"
        ],
        [
         "11",
         "4",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi><mo>→</mo><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "GEG, 10"
        ],
        [
         "12",
         "4",
         "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>∧</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><msub><mi>z</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "IC, 8, 9"
        ],
        [
         "13",
         "4",
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "MP, 11, 12"
        ],
        [
         "14",
         "3",
         "<math display=\"inline\"><mrow><mi>?</mi><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo>→</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         ""
        ],
        [
         "15",
         "4",
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         ""
        ],
        [
         "16",
         "4",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo>→</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "II, 3"
        ],
        [
         "17",
         "4",
         "<math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub><mo>→</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "EG, 16"
        ],
        [
         "18",
         "4",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math>",
         "MP, 17, 15"
        ],
        [
         "19",
         "2",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>y</mi><mo>=</mo><msub><mi>z</mi><mn>0</mn></msub></mrow></math>",
         "IB, 6, 14"
        ],
        [
         "20",
         "0",
         "<math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo>↔</mo><mi>y</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>",
         "IP, 4"
        ],
        [
         "21",
         "0",
         "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>ι</mi><mi>y</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>x</mi></mrow></math>",
         "DP, 20"
        ]
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> da una identidad por la derecha; <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> demuestra que es única. Por tanto, la descripción <math display=\"inline\"><mrow><mi>ι</mi><mi>y</mi><mo>∀</mo><mi>x</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>x</mi></mrow></math> designa esa identidad y se concluye <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Fin de L05",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La página impresa 87 termina con la línea 21 del ejercicio 35. En la página siguiente empieza II.5; no se ha incluido en este L05."
      }
     ]
    }
   ]
  },
  {
   "id": "a37",
   "maila": 2,
   "izenburua": "II.5. Teoremas sintácticos sobre la deducibilidad",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterín, Jesús - Lógica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "II.5-II.8; pp. 88-104 impresas; paráfrasis en euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Nivel sintáctico y notación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En este apartado, la notación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> indica que existe una deducción formal; todavía no es una consecuencia semántica en todos los modelos. Cuando haya que destacar el formalismo escribiremos <math display=\"inline\"><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder></math>. Las notaciones <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Λ</mi><mi>x</mi><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><mi>V</mi><mi>x</mi><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>α</mi></mrow></math> de Mosterín serán aquí, respectivamente, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.1. Primer teorema de la deducción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>α</mi></math> es una sentencia de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mrow><mi>α</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>β</mi></mrow></math>, entonces <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>1</mn></msub></math> una deducción de <math display=\"inline\"><mi>β</mi></math> de <math display=\"inline\"><mi>n</mi></math> líneas a partir de la premisa <math display=\"inline\"><mi>α</mi></math>. Se construye <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>2</mn></msub></math> así: abrir <math display=\"inline\"><mrow><mi>?</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; en la línea siguiente suponer <math display=\"inline\"><mi>α</mi></math>; después abrir <math display=\"inline\"><mrow><mi>?</mi><mi>β</mi></mrow></math> y copiar todas las líneas de <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>1</mn></msub></math> con una marca de alcance más. Cada vez que en <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>1</mn></msub></math> entraba como premisa <math display=\"inline\"><mi>α</mi></math>, en <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒟</mi><mn>2</mn></msub></math> se repite <math display=\"inline\"><mi>α</mi></math> de la segunda línea mediante la regla R. Las demás inferencias siguen igual. Así, la parte copiada da <math display=\"inline\"><mi>β</mi></math>, se cierra el objetivo condicional y no queda ninguna premisa. Por tanto, <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.2. Segundo teorema de la deducción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto de sentencias y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>, entonces existen finitas fórmulas de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub></mrow></math>, tales que <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El teorema de finitud de la deducción dice que las premisas realmente usadas forman un subconjunto finito de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>; por tanto, <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub><mo>⊢</mo><mi>α</mi></mrow></math>. La propiedad de convertir la conjunción en una sola premisa da <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math>. Por último, aplicando 5.1 se pasa esa conjunción al antecedente de la condición."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.3. Eliminación de la premisa contraria",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>α</mi></math> una sentencia de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>.",
        "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el primer caso, tomar una deducción de <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> a partir de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Para demostrar <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> a partir de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, abrir el objetivo y suponer <math display=\"inline\"><mrow><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math>; por DN se obtiene <math display=\"inline\"><mi>α</mi></math>. Copiar toda la deducción original con una marca de alcance más, pero sustituyendo cada premisa original <math display=\"inline\"><mi>α</mi></math> por una repetición de la línea <math display=\"inline\"><mi>α</mi></math> recién obtenida. Las únicas premisas de la copia vienen de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y al final se obtiene <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>; eso cierra el objetivo abierto. La segunda afirmación se demuestra simétricamente, intercambiando <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.4. Testigo existencial de la igualdad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>t</mi></math> es un término de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, entonces <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo>∃</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Abrir el objetivo <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y suponer su negación. Por NP, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por EG, poniendo <math display=\"inline\"><mi>t</mi></math> en lugar de <math display=\"inline\"><mi>x</mi></math>, <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo>=</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Pero la regla derivada I da <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi></mrow></math> sin premisas. La contradicción cierra el objetivo."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.5. Generalización en el consecuente de la condición",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>x</mi></math> no es libre en <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, entonces <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Abrir <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math> y suponer <math display=\"inline\"><mi>α</mi></math>. El teorema <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math>, sin premisas, es utilizable; por MP se obtiene <math display=\"inline\"><mi>β</mi></math>. <math display=\"inline\"><mi>x</mi></math> no es libre en la hipótesis <math display=\"inline\"><mi>α</mi></math>, ni en ninguna otra premisa anterior; por tanto, por la regla de construcción del elemento arbitrario puede cerrarse el objetivo <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math>. Al cerrar la prueba condicional, el resultado no tiene premisas."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.6. Descomposición de términos mediante <br> variables y existenciales",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><msub><mi>t</mi><mn>2</mn></msub><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> términos de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> una fórmula. Elegir <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> variables frescas, que no sean libres en esos términos. Entonces:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>⊢</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>t</mi><mi>n</mi></msub><mo>∧</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "<math display=\"inline\"><mrow><mo>⊢</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>x</mi><mi>n</mi></msub><mo>=</mo><msub><mi>t</mi><mi>n</mi></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>.",
        "<math display=\"inline\"><mrow><mo>⊢</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>↔</mo><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>y</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Desarrollaremos la tercera equivalencia. De izquierda a derecha, suponer <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>. Por la regla I tenemos <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>; por IC se unen los tres y por GIP se introducen los existenciales <math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>y</mi></mrow></math>: <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>y</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "A la inversa, suponer el existencial. Por GEP se toman dos variables críticas nuevas, para obtener <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mo>∧</mo><mi>w</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>∧</mo><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math>. Por EC se separan los tres componentes. Por TI, de <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math> y <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>w</mi></mrow></math> se obtiene <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><mi>w</mi></mrow></math>, y luego con <math display=\"inline\"><mrow><mi>w</mi><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>, <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math>. Las dos deducciones condicionales se unen por IB. En las dos primeras afirmaciones se da el mismo paso para cada argumento: añadir las identidades, construir la versión con variable del predicado o de la función, e introducir o eliminar los existenciales."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.7. Equivalencia bajo el cuantificador general",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para cualquier fórmula <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mi>α</mi><mo>↔</mo><mo>∀</mo><mi>x</mi><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomar la premisa <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En el primer sentido, suponer <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>; por EG <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow></math>, por EB <math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> y por MP <math display=\"inline\"><mi>β</mi></math>. Como <math display=\"inline\"><mi>x</mi></math> es arbitrario, <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En el sentido de vuelta, suponer <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math> y abrir <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. Por contradicción, suponer <math display=\"inline\"><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>; por NG <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math>. Por EP se toma <math display=\"inline\"><mi>u</mi></math> crítico fresco y se obtiene <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. De la premisa universal, por EG <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>↔</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, por EB <math display=\"inline\"><mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>→</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> y por MT <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Pero de <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math>, por EG <math display=\"inline\"><mrow><mi>β</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>: contradicción. Los dos sentidos se unen por IB."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para expresar 5.8, usemos esta abreviatura del metalenguaje: <math display=\"inline\"><mrow><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>≡</mo><mo>∀</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>z</mi><mo>=</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Dice que <math display=\"inline\"><mi>a</mi></math> es el único objeto que cumple <math display=\"inline\"><mi>α</mi></math>. Asimismo, <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>≡</mo><mi>ι</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es el término por defecto elegido para todas las descripciones impropias."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "5.8. Caracterización sintáctica de una descripción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>w</mi></math> no está en el término <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>∨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>w</mi><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mo>∧</mo><mi>x</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>De izquierda a derecha.</strong> Suponer <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>. Distinguir dos casos por TND. Si no hay un único objeto de <math display=\"inline\"><mi>α</mi></math>, la regla DI da <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>; por TI <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>, por IC el segundo disyunto y por ID la disyunción entera."
      },
      {
       "mota": "testua",
       "html": "Si hay un único objeto, por EP tomar <math display=\"inline\"><mi>u</mi></math> fresco y sea <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>. Por DP <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; de <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>, usando EG y EB, <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><mi>u</mi></mrow></math>. Aplicando TI con la premisa, <math display=\"inline\"><mrow><mi>u</mi><mo>=</mo><mi>x</mi></mrow></math>. Mediante la introducción y la eliminación de la igualdad se sustituye el parámetro de <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math> por <math display=\"inline\"><mi>x</mi></math>, y se obtiene <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>. Por ID se introduce el primer disyunto. Usando IDA y TND, los dos casos dan la misma conclusión."
      },
      {
       "mota": "testua",
       "html": "<strong>De derecha a izquierda.</strong> Suponiendo <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>, por IP <math display=\"inline\"><mrow><mo>∃</mo><mi>w</mi><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, por DP <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, y por la instancia de <math display=\"inline\"><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></math>, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>↔</mo><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><mi>x</mi></mrow></math>. Por MP y SI, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>. En el otro disyunto, de <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>w</mi><msub><mi>U</mi><mrow><mi>α</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub></mrow></math>, por DI <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>; aplicando TI con <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>. IDA une las dos ramas, e IB los dos sentidos."
      }
     ]
    }
   ]
  },
  {
   "id": "a38",
   "maila": 2,
   "izenburua": "II.6. Cuasieliminación de los descriptores",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En un lenguaje que tenga al menos una constante individual, los descriptores pueden traducirse a fórmulas sin descriptores, pero no de forma pura: hay que identificar una constante fija, <math display=\"inline\"><mi>c</mi></math>, con el término por defecto de la descripción impropia, <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>. Por eso el resultado es una <strong>cuasi</strong>eliminación."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "6.1. Teorema de la cuasieliminación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi>c</mi></math> una constante individual de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>."
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Para cada fórmula <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> de <math display=\"inline\"><mi>α</mi></math>, existe una fórmula <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> sin descriptores, con las mismas variables libres que <math display=\"inline\"><mi>α</mi></math>, tal que <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>.",
        "Para cada término <math display=\"inline\"><mi>t</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y cada variable <math display=\"inline\"><mi>x</mi></math> que no aparezca en <math display=\"inline\"><mi>t</mi></math>, existe una fórmula <math display=\"inline\"><mi>φ</mi></math> sin descriptores, con las mismas variables libres que <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>t</mi></mrow></math>, tal que <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>=</mo><mi>t</mi><mo>↔</mo><mi>φ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La demostración se hace por inducción simultánea sobre la estructura de fórmulas y términos."
      },
      {
       "mota": "testua",
       "html": "<strong>Bases de los términos.</strong> Si <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>v</mi></mrow></math> es una variable, tomar <math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mi>x</mi><mo>=</mo><mi>v</mi></mrow></math>; si <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>a</mi></mrow></math> es una constante, tomar <math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mi>x</mi><mo>=</mo><mi>a</mi></mrow></math>. En ambos casos la equivalencia es idéntica, no hay descriptor y se conservan las variables libres."
      },
      {
       "mota": "testua",
       "html": "<strong>Término formado por una función.</strong> Si <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, elegir <math display=\"inline\"><mrow><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub></mrow></math> variables frescas. La hipótesis de inducción da fórmulas sin descriptores, <math display=\"inline\"><msub><mi>φ</mi><mi>i</mi></msub></math>, cada una equivalente a <math display=\"inline\"><mrow><msub><mi>x</mi><mi>i</mi></msub><mo>=</mo><msub><mi>t</mi><mi>i</mi></msub></mrow></math> bajo la premisa <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>. Usando 5.6(b) y sustituyendo los equivalentes, tomar <math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∧</mo><mi>x</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Fórmula atómica.</strong> Si <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, con las mismas hipótesis sobre los términos y usando 5.6(a), tomar <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>≡</mo><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>φ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>φ</mi><mi>n</mi></msub><mo>∧</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Conectivos.</strong> Si <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo>¬</mo><mi>β</mi></mrow></math>, con <math display=\"inline\"><msup><mi>β</mi><mo>′</mo></msup></math> dado por la inducción, tomar <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>=</mo><mo>¬</mo><msup><mi>β</mi><mo>′</mo></msup></mrow></math>. Del mismo modo, en los casos <math display=\"inline\"><mrow><mi>β</mi><mo>∧</mo><mi>γ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>∨</mo><mi>γ</mi></mrow></math>, <math display=\"inline\"><mrow><mi>β</mi><mo>→</mo><mi>γ</mi></mrow></math> y <math display=\"inline\"><mrow><mi>β</mi><mo>↔</mo><mi>γ</mi></mrow></math> se aplica el mismo conectivo a las fórmulas <math display=\"inline\"><mrow><msup><mi>β</mi><mo>′</mo></msup><mo>,</mo><msup><mi>γ</mi><mo>′</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Cuantificadores.</strong> Si <math display=\"inline\"><mrow><mi>α</mi><mo>=</mo><mo>∀</mo><mi>x</mi><mi>β</mi></mrow></math>, se generaliza la equivalencia de la hipótesis de inducción mediante 5.1 y 5.5 y, usando 5.7, se toma <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>=</mo><mo>∀</mo><mi>x</mi><msup><mi>β</mi><mo>′</mo></msup></mrow></math>. El caso <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>β</mi></mrow></math> se obtiene del mismo modo, usando las equivalencias derivadas del cuantificador existencial."
      },
      {
       "mota": "testua",
       "html": "<strong>Término descrito.</strong> Si <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>, tomar <math display=\"inline\"><mi>x</mi></math> como variable que no aparezca en el término y <math display=\"inline\"><mi>w</mi></math> fresca. Por inducción existe una fórmula <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> sin descriptores que, bajo <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>, cumple <math display=\"inline\"><mrow><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. Sustituyendo en la caracterización de 5.8 ese equivalente y <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><mi>c</mi></mrow></math>, tomar <math display=\"inline\"><mrow><mi>φ</mi><mo>≡</mo><mo>∀</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>α</mi><mo>′</mo></msup><mo>↔</mo><mi>z</mi><mo>=</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>w</mi><mo>∀</mo><mi>z</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msup><mi>α</mi><mo>′</mo></msup><mo>↔</mo><mi>z</mi><mo>=</mo><mi>w</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>=</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Esa fórmula no tiene descriptores, tiene las mismas variables libres que <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math> y cumple la equivalencia pedida. Con ello se han cerrado todos los casos de la inducción simultánea."
      }
     ]
    }
   ]
  },
  {
   "id": "a39",
   "maila": 2,
   "izenburua": "II.7. Consistencia y contradicción",
   "blokeak": [
    {
     "mota": "testua",
     "html": "La contradicción sintáctica no consiste solo en encontrar dos fórmulas: es la situación que hace deducible cualquier fórmula en el cálculo. Eso explica por qué se rechaza una teoría contradictoria: puede deducir tanto <math display=\"inline\"><mi>β</mi></math> como <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math>, para cualquier <math display=\"inline\"><mi>β</mi></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "7.1. Contradictoriedad y consistencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un conjunto de fórmulas <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es <strong>contradictorio</strong> si y solo si toda fórmula de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es deducible de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Es <strong>consistente</strong> si no es contradictorio; de forma equivalente, existe al menos una fórmula que no es deducible de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Decir que una fórmula única es contradictoria o consistente es hablar de su conjunto unitario."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.2. Monotonía respecto de la inclusión",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es consistente y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> es consistente.",
        "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es contradictorio y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Δ</mi></mrow></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> es contradictorio."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En el primer caso, si <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> fuera contradictorio, deduciría toda fórmula; por la monotonía de las premisas, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> también, contra la hipótesis. En el segundo, como de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> se deduce toda fórmula, también se deduce de <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math>, que tiene más premisas."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.3. Criterio de una sola contradicción",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es contradictorio si y solo si existe una fórmula <math display=\"inline\"><mi>α</mi></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es contradictorio, por definición deduce toda fórmula, en particular <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. A la inversa, si se deduce una conjunción contradictoria, sus dos componentes se obtienen por EC. Para cualquier objetivo <math display=\"inline\"><mi>β</mi></math>, las líneas utilizables <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> cierran el objetivo por contradicción; por tanto <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>β</mi></mrow></math> para cualquier <math display=\"inline\"><mi>β</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.4. Negación de una sentencia y teorematicidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>α</mi></math> es una sentencia de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> es contradictorio si y solo si <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>.",
        "<math display=\"inline\"><mi>α</mi></math> es contradictorio si y solo si <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo>¬</mo><mi>α</mi></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> es contradictorio, en particular <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mo>⊢</mo><mi>α</mi></mrow></math>; aplicando la primera parte de 5.3, con el conjunto vacío de premisas, <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>. A la inversa, si <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>, para demostrar cualquier <math display=\"inline\"><mi>β</mi></math> a partir de la premisa <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> se usan el teorema <math display=\"inline\"><mi>α</mi></math> y la premisa <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>; la contradicción cierra el objetivo. La segunda equivalencia se demuestra igual."
      },
      {
       "mota": "testua",
       "html": "La restricción a sentencias es necesaria en el sentido que va de la contradictoriedad al teorema, porque 5.3 está limitado a sentencias. El sentido inverso no necesita esa restricción: si cualquier fórmula es un teorema, su negación es contradictoria, y viceversa."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La notación <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> indicará añadir al formalismo <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> una nueva constante individual <math display=\"inline\"><mi>c</mi></math>."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.5. Eliminación de la constante nueva",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>c</mi></math> no está en la fórmula <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mrow><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>, entonces <math display=\"inline\"><mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Situación de la demostración",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Mosterín usa este resultado sin demostrarlo en el teorema siguiente. Aquí tampoco se le añade una demostración que no está en el original: el contenido usado es que, si la instancia mediante una constante nueva es un teorema en el formalismo ampliado, entonces, eliminada esa constante, la fórmula es un teorema en el formalismo original."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.6. Añadir una constante testigo fresca <br> conserva la consistencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es consistente en <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mi>c</mi></math> no aparece en el conjunto <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es consistente en el formalismo <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por contradicción, suponer que el conjunto ampliado es contradictorio. Usando 5.3 se elimina la premisa <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> y se obtiene <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Elegir una variable fresca <math display=\"inline\"><mi>u</mi></math>. El segundo teorema de la deducción reúne en una conjunción las finitas premisas; sustituyendo <math display=\"inline\"><mi>c</mi></math> por <math display=\"inline\"><mi>u</mi></math> y aplicando 7.5, la constante nueva puede eliminarse. En consecuencia, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Pero aplicando EP a la premisa <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>, con <math display=\"inline\"><mi>u</mi></math> crítico fresco, se obtiene <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Por tanto ese conjunto deduce <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∧</mo><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> y, según 7.3, sería contradictorio, contra la hipótesis inicial de consistencia."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.7. Añadir la constante de la descripción impropia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es consistente en <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mi>c</mi></math> no es de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es consistente en <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos lo contrario. Eliminada por 5.3 la premisa <math display=\"inline\"><mrow><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por 5.2, las finitas premisas de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mrow><msub><mi>γ</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>γ</mi><mi>n</mi></msub></mrow></math>, se reúnen en una condición. Elegir <math display=\"inline\"><mi>u</mi></math>, que no aparezca en ellas; sustituyendo <math display=\"inline\"><mi>c</mi></math> por <math display=\"inline\"><mi>u</mi></math> y aplicando 7.5, en <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> <math display=\"inline\"><mrow><mo>⊢</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>γ</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>γ</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Generalizando <math display=\"inline\"><mi>u</mi></math> por 5.5 y recuperando las premisas, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>∀</mo><mi>u</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por otro lado, <math display=\"inline\"><mrow><mo>⊢</mo><mo>¬</mo><mo>∀</mo><mi>u</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. En efecto, suponiendo su doble negación, por DN <math display=\"inline\"><mrow><mo>∀</mo><mi>u</mi><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por EG <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, contra el teorema <math display=\"inline\"><mrow><msub><mi>d</mi><mn>0</mn></msub><mo>=</mo><msub><mi>d</mi><mn>0</mn></msub></mrow></math> de la regla I. Por tanto <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> deduciría la fórmula universal y su negación; por 7.3 sería contradictorio. Luego la extensión es consistente."
      }
     ]
    }
   ]
  },
  {
   "id": "a40",
   "maila": 2,
   "izenburua": "II.8. Consistencia maximal y ejemplificación",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "8.1. Maximalmente consistente y ejemplificado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es <strong>maximalmente consistente</strong> si y solo si es consistente y, para toda sentencia <math display=\"inline\"><mi>α</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, si <math display=\"inline\"><mi>α</mi></math> no está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es contradictorio."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es <strong>ejemplificado</strong> si y solo si, siempre que la sentencia <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, existe un designador <math display=\"inline\"><mi>t</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> tal que <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> también está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.2. Clausura de un conjunto maximalmente consistente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto maximalmente consistente de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, entonces para cualesquiera sentencias <math display=\"inline\"><mrow><mi>α</mi><mo>,</mo><mi>β</mi></mrow></math>:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mi>α</mi></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "Si <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>, entonces <math display=\"inline\"><mi>α</mi></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "<math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mi>α</mi></math> no está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mi>β</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> están ambas en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mi>β</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si al menos una de <math display=\"inline\"><mi>α</mi></math> o <math display=\"inline\"><mi>β</mi></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>→</mo><mi>β</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si el hecho de que <math display=\"inline\"><mi>α</mi></math> esté en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> implica que <math display=\"inline\"><mi>β</mi></math> esté en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "<math display=\"inline\"><mrow><mi>α</mi><mo>↔</mo><mi>β</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mi>α</mi></math> y <math display=\"inline\"><mi>β</mi></math> están a la vez o no están a la vez en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>(1).</strong> Supongamos que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> pero <math display=\"inline\"><mi>α</mi></math> no está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Por maximalidad <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es contradictorio; en particular <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>. Por 5.3 <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>¬</mo><mi>α</mi></mrow></math>. Aplicando IC con la hipótesis, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>, y por 7.3 <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sería contradictorio. Luego <math display=\"inline\"><mi>α</mi></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(2).</strong> Si <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>, por la monotonía de las premisas <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>; por (1) <math display=\"inline\"><mi>α</mi></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(3).</strong> Si <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> y <math display=\"inline\"><mi>α</mi></math> estuvieran ambas en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> sería contradictorio. Recíprocamente, si <math display=\"inline\"><mi>α</mi></math> no está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y tampoco <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>, por maximalidad <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es contradictorio; por 5.3 <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> y por (1) <math display=\"inline\"><mi>α</mi></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, contradicción. Por tanto <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(4).</strong> Si la conjunción está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por EC se deducen ambos componentes y por (1) ambos están en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Recíprocamente, si ambos componentes están en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por IC se deduce la conjunción y por (1) está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Los casos de la disyunción, el condicional y el bicondicional se demuestran de modo análogo, usando las reglas primitivas, (1) y (3)."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.3. Cuantificadores en un conjunto maximalmente consistente <br> y ejemplificado",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es maximalmente consistente y ejemplificado, y en <math display=\"inline\"><mi>α</mi></math> hay a lo sumo la variable <math display=\"inline\"><mi>x</mi></math> libre, entonces:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si existe un designador <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> de <math display=\"inline\"><mi>t</mi></math> tal que <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>.",
        "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si para todo designador de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La dirección de izquierda a derecha de la primera equivalencia es la definición de ejemplificación. Recíprocamente, si <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por IP <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math>, y por 8.2(1) el existencial está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      },
      {
       "mota": "testua",
       "html": "En la segunda, si <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por EG se deduce cada instancia y por 8.2(1) está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Recíprocamente, supongamos que las instancias de todos los designadores están en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Entonces, por 8.2(3), no hay ningún designador <math display=\"inline\"><mi>t</mi></math> tal que <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> esté en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Aplicando la primera equivalencia a la fórmula <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> no está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>; por 8.2(3) <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></math> sí está. Por NP se deduce <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math> de esa fórmula, y por 8.2(1) está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.4. Extensión maximalmente consistente y ejemplificada",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto consistente de sentencias sin descriptores de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, existe un conjunto <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> maximalmente consistente y ejemplificado de sentencias sin descriptores en el lenguaje <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mi mathvariant=\"script\">𝒞</mi></mrow></math>, donde <math display=\"inline\"><mi mathvariant=\"script\">𝒞</mi></math> es una clase numerable de constantes individuales disjunta de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Elijamos <math display=\"inline\"><mi mathvariant=\"script\">𝒞</mi></math> un conjunto infinito numerable de constantes nuevas, disjunto de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, y numeremos sus constantes. Numeremos también todas las sentencias sin descriptores del lenguaje <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mi mathvariant=\"script\">𝒞</mi></mrow></math>: <math display=\"inline\"><mrow><msub><mi>α</mi><mn>0</mn></msub><mo>,</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><mi>…</mi></mrow></math>. Definamos por inducción aritmética <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub><mo>=</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>, y en cada etapa"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "si <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es contradictorio, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub></mrow></math>;",
        "si la extensión es consistente y <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> no es existencial, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>;",
        "si la extensión es consistente y <math display=\"inline\"><mrow><msub><mi>α</mi><mi>j</mi></msub><mo>=</mo><mo>∃</mo><mi>x</mi><msubsup><mi>α</mi><mi>j</mi><mo>′</mo></msubsup></mrow></math>, tomemos la constante nueva <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> de menor índice que no aparece en <math display=\"inline\"><mi>c</mi></math>, y pongamos <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msubsup><mi>α</mi><mi>j</mi><mo>′</mo></msubsup><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "Por último, <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup><mo>≡</mo><msubsup><mo>∪</mo><mrow><mi>j</mi><mo>=</mo><mn>0</mn></mrow><mi>∞</mi></msubsup><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(a) Extensión.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>; por tanto <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>(b) Consistencia de cada etapa.</strong> Por inducción. <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>0</mn></msub></math> es consistente por hipótesis. En el primer caso no se añade nada; en el segundo se elige un conjunto consistente; en el tercero <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>∃</mo><mi>x</mi><msubsup><mi>α</mi><mi>j</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es consistente y <math display=\"inline\"><mi>c</mi></math> fresca, de modo que 7.6 dice que la consistencia se conserva tras añadir la instancia testigo."
      },
      {
       "mota": "testua",
       "html": "<strong>(c) Consistencia de la unión.</strong> Si <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> fuera contradictorio, por 7.3 habría una deducción de un <math display=\"inline\"><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. Por finitud, la deducción usaría solo un número finito de premisas de <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>; todas estarían en un <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mi>k</mi></msub></math> de una misma etapa. Entonces <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mi>k</mi></msub></math> sería contradictorio, contra (b)."
      },
      {
       "mota": "testua",
       "html": "<strong>(d) Completitud para la maximalidad.</strong> Si la sentencia <math display=\"inline\"><mi>α</mi></math> no está en <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>, es un <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> de la numeración. <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math> no se incluyó en <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub></math>; ocurrió el primer caso de la construcción, y <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es contradictorio. Por 7.2(b), también es contradictorio el <math display=\"inline\"><mrow><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> sobre él."
      },
      {
       "mota": "testua",
       "html": "<strong>(e) Maximalidad.</strong> La consistencia de (c) y la propiedad de (d) son la definición de 8.1."
      },
      {
       "mota": "testua",
       "html": "<strong>(f) Ejemplificación.</strong> Si <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi><mo>=</mo><msub><mi>α</mi><mi>j</mi></msub></mrow></math> está en <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mi>j</mi></msub><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es consistente, pues es subconjunto del consistente <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>. Así se aplicó el tercer caso de la construcción, y la instancia testigo <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>c</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> se incluyó en <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mrow><mi>j</mi><mo>+</mo><mn>1</mn></mrow></msub></math> y, por tanto, en <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>. La construcción no añade descriptores. En consecuencia, <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> es la extensión maximalmente consistente, ejemplificada y sin descriptores requerida."
      }
     ]
    }
   ]
  },
  {
   "id": "a41",
   "maila": 2,
   "izenburua": "III.1. Interpretaciones",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "III.1-III.6; págs. 107-126 impresas y continuación de III.6 en la pág. 127; paráfrasis en euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "testua",
     "html": "Hasta ahora hemos trabajado con los signos del formalismo: hemos construido cadenas de signos, términos, fórmulas, líneas, semideducciones y deducciones, y hemos definido la relación de deducibilidad entre fórmulas. Ese nivel es puramente sintáctico. Sin embargo, al dar una interpretación, el juego de signos adquiere referencia y el formalismo se convierte en un lenguaje formal."
    },
    {
     "mota": "testua",
     "html": "Interpretar no es cambiar el aspecto de las fórmulas. Es determinar a qué se refieren los signos: en qué dominio de objetos toman valores las variables, qué objeto nombra cada constante, qué función expresa cada functor y qué relación expresa cada relator. Como las descripciones impropias también deben denotar algún objeto, la interpretación elige para ellas un objeto por defecto."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "1.1. Interpretación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una interpretación del formalismo <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es una terna <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, donde:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>≠</mo><mi>∅</mi></mrow></math> es el universo de la interpretación.",
        "<math display=\"inline\"><mi mathvariant=\"script\">ℋ</mi></math> es la asignación que a cada constante individual le asigna un objeto de <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>, a cada funtor de aridad <math display=\"inline\"><mi>n</mi></math> una función <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒰</mi><mi>n</mi></msup><mo>→</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math>, a cada relator de aridad <math display=\"inline\"><mi>n</mi></math> un subconjunto de <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒰</mi><mi>n</mi></msup></math> y a cada variable un objeto de <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>.",
        "<math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> es la referencia común de las descripciones impropias."
       ]
      }
     ]
    },
    {
     "mota": "testua",
     "html": "En adelante, en lugar de escribir <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> o <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, escribiremos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. La misma notación designará la interpretación completa y sus componentes de asignación, porque el contexto distingue los dos niveles."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "1.3. Cambio del valor de una variable",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math>, la interpretación <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> coincide con <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> en todos sus componentes, salvo en el valor dado a la variable <math display=\"inline\"><mi>x</mi></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>z</mi><mo>=</mo><mi>x</mi><mi>.</mi></mtd></mtr></mtable></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Los cambios pueden escribirse en sucesión: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>y</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> es la interpretación que primero cambia el valor de <math display=\"inline\"><mi>x</mi></math> a <math display=\"inline\"><mi>u</mi></math> y después el de <math display=\"inline\"><mi>y</mi></math> a <math display=\"inline\"><mi>v</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Usaremos continuamente dos propiedades de los cambios de asignación:"
    },
    {
     "mota": "zerrenda",
     "ordenatua": true,
     "elementuak": [
      "Si <math display=\"inline\"><mrow><mi>x</mi><mo>≠</mo><mi>z</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>.",
      "Al cambiar dos veces la misma variable prevalece el último valor: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>."
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Lenguaje objeto y metalenguaje",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>,</mo><mi>t</mi><mo>,</mo><mi>α</mi></mrow></math> son expresiones del lenguaje objeto. <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math>, <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>, la denotación, la satisfacción y el cambio <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> son herramientas del metalenguaje. Esta distinción es fundamental: una fórmula no denota por sí misma un objeto ni toma un valor de verdad; lo hace dentro de una interpretación."
      }
     ]
    }
   ]
  },
  {
   "id": "a42",
   "maila": 2,
   "izenburua": "III.2. Denotación y satisfacción",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Fijada una interpretación, cada término denota un objeto del universo, y cada fórmula es satisfecha o no por la interpretación. La notación <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>u</mi></mrow></math> indica que el término <math display=\"inline\"><mi>t</mi></math> denota <math display=\"inline\"><mi>u</mi></math>; la notación <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>, en cambio, indica que <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> satisface <math display=\"inline\"><mi>α</mi></math>. Esta última es la versión moderna de la notación &quot;<math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> sat <math display=\"inline\"><mi>α</mi></math>&quot; de Mosterín."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "2.2. Denotación y satisfacción, por inducción simultánea",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> una interpretación de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>. La denotación de los términos y la satisfacción de las fórmulas se definen por inducción simultánea sobre la estructura sintáctica:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">ℋ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "En particular, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Para los conectores:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>α</mi><mo>↔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> bada, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Para los cuantificadores:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> u guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∃</mo><mi>x</mi><mi>α</mi><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> u baterako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "Para los descriptores:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>u</mi></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> baldin u bakarra badago, </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> non </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><msub><mi>a</mi><mn>0</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> halako u bakarra ez badago. </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></mrow></mrow></math>"
      }
     ]
    },
    {
     "mota": "testua",
     "html": "La última cláusula recoge dos situaciones como descripción impropia: no hay ningún objeto que satisfaga <math display=\"inline\"><mi>α</mi></math>, o hay más de uno. En ambos casos el término denota <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>. Así, todo término es denotador y la semántica sigue siendo total."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "2.3. Verdad en una interpretación",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>α</mi></math> es una sentencia, <math display=\"inline\"><mi>α</mi></math> es verdadera en la interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> si y solo si <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>. Una sentencia no tiene variables libres; por tanto, su valor de verdad no depende de los valores dados inicialmente a las variables."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "2.4. Invariancia respecto a las variables no libres",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>x</mi></math> no es libre en el término <math display=\"inline\"><mi>t</mi></math>, entonces, para todo <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>x</mi></math> no es libre en la fórmula <math display=\"inline\"><mi>α</mi></math>, entonces, para todo <math display=\"inline\"><mrow><mi>u</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se hace una inducción semiótica simultánea para la denotación de los términos y la satisfacción de las fórmulas. En cada paso suponemos que <math display=\"inline\"><mi>x</mi></math> no es libre en la expresión considerada."
      },
      {
       "mota": "testua",
       "html": "<strong>Términos básicos.</strong> Si el término es la variable <math display=\"inline\"><mi>z</mi></math>, que <math display=\"inline\"><mi>x</mi></math> no sea libre implica <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Tampoco la asignación de una variable cambia el valor de una constante: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Término compuesto.</strong> Si <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mi>x</mi></math> no es libre en ningún <math display=\"inline\"><msub><mi>t</mi><mi>i</mi></msub></math>. Aplicando la hipótesis de inducción a todos los argumentos,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Fórmulas atómicas.</strong> La igualdad anterior da inmediatamente el caso de <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, pues la <math display=\"inline\"><mi>n</mi></math>-tupla de argumentos está o no está en la misma relación. En la igualdad atómica también los dos términos conservan las mismas denotaciones."
      },
      {
       "mota": "testua",
       "html": "<strong>Conectivas.</strong> Por ejemplo,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mo>¬</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En la conjunción la hipótesis de inducción se aplica a los dos componentes; para la disyunción, el condicional y el bicondicional el razonamiento es el mismo, ya que sus condiciones de verdad se definen únicamente mediante la satisfacción de los componentes."
      },
      {
       "mota": "testua",
       "html": "<strong>Cuantificador universal.</strong> Al examinar <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> hay dos casos. Si <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math>, los cambios de asignación pueden intercambiarse:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En la tercera equivalencia se ha usado la hipótesis de inducción. Si <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math>, el segundo cambio elimina el primero: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>; por tanto, ambas interpretaciones verifican la misma condición sobre todos los <math display=\"inline\"><mi>v</mi></math>. La demostración de <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>α</mi></mrow></math> es la misma, usando &quot;para algún&quot; en lugar de &quot;para todo&quot;."
      },
      {
       "mota": "testua",
       "html": "<strong>Descripción.</strong> Para <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math> se distinguen de nuevo <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math> y <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math>. En el primer caso, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math> son la misma interpretación; la hipótesis de inducción dice que el conjunto de objetos <math display=\"inline\"><mi>v</mi></math> que satisfacen <math display=\"inline\"><mi>α</mi></math> no cambia. En el segundo caso, el valor <math display=\"inline\"><mi>v</mi></math> asignado a <math display=\"inline\"><mi>z</mi></math> sustituye al valor anterior de <math display=\"inline\"><mi>x</mi></math>; se obtienen de nuevo los mismos candidatos. En ambos casos hay dos subcasos: si hay un único candidato, las dos interpretaciones denotan ese mismo objeto; si no hay un único candidato, ambas denotan <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>. Esto completa la inducción simultánea."
      }
     ]
    }
   ]
  },
  {
   "id": "a43",
   "maila": 2,
   "izenburua": "III.3. Interpretación y sustitución",
   "blokeak": [
    {
     "mota": "testua",
     "html": "En sintaxis, la notación <math display=\"inline\"><mrow><msubsup><mi>S</mi><mi>x</mi><mi>t</mi></msubsup><mi>e</mi></mrow></math> indicaba sustituir en la expresión <math display=\"inline\"><mi>e</mi></math> las apariciones libres de <math display=\"inline\"><mi>x</mi></math> por el término <math display=\"inline\"><mi>t</mi></math>, evitando la captura. Aquí usaremos la notación moderna <math display=\"inline\"><mrow><mi>e</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. Semánticamente, esa sustitución y asignar en la interpretación a <math display=\"inline\"><mi>x</mi></math> la denotación de <math display=\"inline\"><mi>t</mi></math> son lo mismo."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "3.1. Lema semántico de la sustitución",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para cualesquiera términos <math display=\"inline\"><msub><mi>t</mi><mn>0</mn></msub></math>: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>0</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Para cualesquiera fórmulas <math display=\"inline\"><mi>α</mi></math>: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Se hace una inducción aritmética sobre la longitud de la expresión. Esta demostración enlaza las tres cláusulas de la sustitución sintáctica con el teorema 2.4."
      },
      {
       "mota": "testua",
       "html": "<strong>Expresiones de longitud uno.</strong> Si <math display=\"inline\"><mrow><msub><mi>t</mi><mn>0</mn></msub><mo>=</mo><mi>z</mi></mrow></math> y <math display=\"inline\"><mrow><mi>z</mi><mo>≠</mo><mi>x</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Si <math display=\"inline\"><mrow><mi>z</mi><mo>=</mo><mi>x</mi></mrow></math>, el lado izquierdo es <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y el derecho también, porque <math display=\"inline\"><mrow><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>t</mi></mrow></math>. Para una constante, ambos lados son <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>Functores y fórmulas atómicas.</strong> Aplicando la hipótesis de inducción a todos los subtérminos,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mi>…</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> <math display=\"inline\"><mrow><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como la tupla de argumentos de un relator tiene el mismo valor en ambos lados, la condición de satisfacción es la misma; en la igualdad atómica se comparan las dos denotaciones. En la negación y en las demás conectivas la hipótesis de inducción se aplica a cada componente, y se reconstruye la cláusula de verdad de la conectiva."
      },
      {
       "mota": "testua",
       "html": "<strong>Cuantificador <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math>.</strong> Hay tres casos."
      },
      {
       "mota": "testua",
       "html": "1. Si <math display=\"inline\"><mi>x</mi></math> no es libre en <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math>, la sustitución sintáctica deja la fórmula tal cual. El teorema 2.4 dice que el cambio de asignación de la izquierda es semánticamente inútil. 2. Si <math display=\"inline\"><mi>x</mi></math> es libre pero <math display=\"inline\"><mi>z</mi></math> no aparece en <math display=\"inline\"><mi>t</mi></math>, las asignaciones de <math display=\"inline\"><mi>x</mi></math> y de <math display=\"inline\"><mi>z</mi></math> se intercambian; además 2.4 da <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Por tanto,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> v guztietarako </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>v</mi><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi><mo>:</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>z</mi><mo>≔</mo><mi>v</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> <math display=\"block\"><mrow><mo>↔</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Esta última fórmula es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>z</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>. 3. Si <math display=\"inline\"><mi>x</mi></math> es libre y <math display=\"inline\"><mi>z</mi></math> aparece en <math display=\"inline\"><mi>t</mi></math>, la definición de sustitución elige una variable fresca, <math display=\"inline\"><mi>v</mi></math>, que no aparece en <math display=\"inline\"><mrow><mo>∀</mo><mi>z</mi><mi>α</mi></mrow></math> ni en <math display=\"inline\"><mi>t</mi></math>. Primero se renombra alfabéticamente el ligador y después se hace la sustitución: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>∀</mo><mi>z</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mo>∀</mo><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>v</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Como <math display=\"inline\"><mi>v</mi></math> es fresca, aplicando sucesivamente 2.4, el intercambio de cambios de asignación y la hipótesis de inducción, ambos lados examinan los mismos valores del universo. Esto justifica semánticamente la condición de evitar la captura."
      },
      {
       "mota": "testua",
       "html": "La demostración de <math display=\"inline\"><mrow><mo>∃</mo><mi>z</mi><mi>α</mi></mrow></math> es paralela: se hacen los mismos pasos, pero en lugar de todos los valores se comprueba la existencia de un testigo."
      },
      {
       "mota": "testua",
       "html": "<strong>Descripción <math display=\"inline\"><mrow><mi>ι</mi><mi>z</mi><mi>α</mi></mrow></math>.</strong> Se usan los mismos tres casos sintácticos. Si <math display=\"inline\"><mi>x</mi></math> no es libre, 2.4 deja la denotación tal cual. Si <math display=\"inline\"><mi>x</mi></math> es libre y <math display=\"inline\"><mi>z</mi></math> no aparece en <math display=\"inline\"><mi>t</mi></math>, al intercambiar las asignaciones y aplicar la hipótesis de inducción, ambos lados buscan el mismo <math display=\"inline\"><mi>z</mi></math> único que satisface <math display=\"inline\"><mi>α</mi></math>. Si <math display=\"inline\"><mi>z</mi></math> aparece en <math display=\"inline\"><mi>t</mi></math>, se renombra alfabéticamente con la fresca <math display=\"inline\"><mi>v</mi></math>: <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>ι</mi><mi>z</mi><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>=</mo><mi>ι</mi><mi>v</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>v</mi><mi>z</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En los dos últimos casos hay que comprobar dos subcasos. Si hay un único objeto, la hipótesis de inducción identifica el mismo candidato y ambos términos lo denotan. Si no hay un único objeto, las dos descripciones son impropias y ambas denotan <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>. Así termina la inducción de términos y fórmulas."
      }
     ]
    }
   ]
  },
  {
   "id": "a44",
   "maila": 2,
   "izenburua": "III.4. Satisfacibilidad, validez y consecuencia",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "4.1. Satisfacción de un conjunto de fórmulas",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> satisface el conjunto de fórmulas <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math> para todo <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Toda interpretación satisface el conjunto vacío. En efecto, la condición &quot;si <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi>∅</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>&quot; no tiene ningún <math display=\"inline\"><mi>α</mi></math> que cumpla el antecedente; por tanto, es verdadera por vacuidad."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "4.2. Satisfacibilidad, validez y consecuencia semántica",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "Una fórmula <math display=\"inline\"><mi>α</mi></math> es <strong>satisfacible</strong> si alguna interpretación la satisface; <strong>insatisfacible</strong>, si ninguna interpretación la satisface.",
        "Un conjunto de fórmulas <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es <strong>satisfacible</strong> si una misma interpretación satisface todas sus fórmulas; <strong>insatisfacible</strong>, si no existe tal interpretación.",
        "<math display=\"inline\"><mi>α</mi></math> es <strong>lógicamente válida</strong> si la satisfacen todas las interpretaciones del formalismo.",
        "<math display=\"inline\"><mi>α</mi></math> es <strong>consecuencia semántica</strong> de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si toda interpretación que satisface <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> satisface también <math display=\"inline\"><mi>α</mi></math>."
       ]
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "4.3. Notación de la consecuencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "La notación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math> explicita el formalismo; cuando el contexto es claro usaremos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>. La abreviatura <math display=\"inline\"><mrow><mi>α</mi><mo>⊨</mo><mi>β</mi></mrow></math> es <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊨</mo><mi>β</mi></mrow></math>, y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo>⊨</mo><mi>β</mi></mrow></math> la de <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊨</mo><mi>β</mi></mrow></math>. Por último, la notación <math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> significa <math display=\"inline\"><mrow><mi>∅</mi><mo>⊨</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "No confundir <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>: la primera es la deducibilidad sintáctica según las reglas de un cálculo; la segunda es la consecuencia semántica sobre todas las interpretaciones."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "4.4. Cinco equivalencias de insatisfacibilidad y consecuencia",
     "blokeak": [
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> si y solo si <math display=\"inline\"><mi>α</mi></math> es lógicamente válida.",
        "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> si y solo si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es insatisfacible.",
        "<math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> si y solo si <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> es insatisfacible.",
        "<math display=\"inline\"><mi>α</mi></math> es lógicamente válida si y solo si <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> es insatisfacible.",
        "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es insatisfacible si y solo si, para una fórmula del mismo lenguaje, <math display=\"inline\"><mi>β</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
       ]
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>Primera equivalencia.</strong> <math display=\"inline\"><mrow><mo>⊨</mo><mi>α</mi></mrow></math> es, por definición, <math display=\"inline\"><mrow><mi>∅</mi><mo>⊨</mo><mi>α</mi></mrow></math>. Como toda interpretación satisface <math display=\"inline\"><mi>∅</mi></math>, esta condición equivale a decir que toda interpretación satisface <math display=\"inline\"><mi>α</mi></math>; esa es la validez lógica."
      },
      {
       "mota": "testua",
       "html": "<strong>Segunda equivalencia.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> dice que toda interpretación que satisface <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> satisface <math display=\"inline\"><mi>α</mi></math>. Por contraposición, una interpretación que satisface <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math> no puede satisfacer <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Por tanto, no hay ninguna interpretación que satisfaga a la vez <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>; es decir, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es insatisfacible. Todos los pasos valen también a la inversa."
      },
      {
       "mota": "testua",
       "html": "<strong>Tercera y cuarta equivalencias.</strong> La tercera se obtiene de la segunda tomando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mi>∅</mi></mrow></math>. La cuarta se obtiene combinando la primera y la tercera."
      },
      {
       "mota": "testua",
       "html": "<strong>Quinta equivalencia.</strong> Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, cualquier <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> que satisfaga <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> tendría que satisfacer a la vez <math display=\"inline\"><mi>β</mi></math> y <math display=\"inline\"><mrow><mo>¬</mo><mi>β</mi></mrow></math>, lo cual es imposible. Por tanto, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es insatisfacible. Recíprocamente, si no hay ninguna interpretación que satisfaga <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, la condición &quot;si una interpretación satisface <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, también satisface <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>&quot; es verdadera por vacuidad, para cualquier <math display=\"inline\"><mi>β</mi></math> que se elija."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "4.5. Reducción desde un lenguaje más amplio",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si todos los signos no lógicos de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math> lo son también de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>2</mn></msub></math>, <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></math> es un conjunto de fórmulas de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>, <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math> es de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>2</mn></msub></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></mrow></math>, y <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math> es satisfacible sobre el universo <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>, entonces <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></math> también es satisfacible sobre el mismo <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math> es satisfacible, existe una interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>2</mn></msub></math> sobre <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> que satisface todas las fórmulas de <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>2</mn></msub></math>. Por inclusión, también satisface todas las fórmulas de <math display=\"inline\"><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></math>."
      },
      {
       "mota": "testua",
       "html": "Construyamos <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><msup><mi mathvariant=\"script\">ℋ</mi><mo>′</mo></msup><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, donde <math display=\"inline\"><msup><mi mathvariant=\"script\">ℋ</mi><mo>′</mo></msup></math> es la restricción de <math display=\"inline\"><mi mathvariant=\"script\">ℋ</mi></math> a los signos de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>. <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> y <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> solo difieren en los signos que no están en <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>; por tanto, interpretan igual los términos y las fórmulas de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math>. En consecuencia, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><msub><mi mathvariant=\"normal\">Γ</mi><mn>1</mn></msub></mrow></math>. Además, <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> es la interpretación de <math display=\"inline\"><msub><mi mathvariant=\"script\">ℒ</mi><mn>1</mn></msub></math> sobre el mismo universo <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math>, y eso demuestra la tesis."
      }
     ]
    }
   ]
  },
  {
   "id": "a45",
   "maila": 2,
   "izenburua": "III.5. Independencia",
   "blokeak": [
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "5.1-5.2. Independencia de una sentencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Una sentencia <math display=\"inline\"><mi>α</mi></math> es independiente de un conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mi>α</mi></math> no es consecuencia semántica de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>: <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "De forma equivalente, existe una interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> pero <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Esa interpretación es un <strong>contramodelo</strong> o <strong>prueba de independencia</strong> de <math display=\"inline\"><mi>α</mi></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Para dar un contraejemplo no hace falta enumerar todos los detalles de la interpretación. Basta indicar el universo y la interpretación de los signos no lógicos que aparecen en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> o en <math display=\"inline\"><mi>α</mi></math>. Si aparecen descriptores, hay que especificar también el objeto <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> para las descripciones impropias."
    },
    {
     "mota": "testua",
     "html": "En un argumento cotidiano, comercial, político o judicial, se extrae una conclusión de unas premisas. El argumento es correcto o válido si la conclusión es consecuencia semántica de las premisas; es incorrecto o inválido si la conclusión es independiente de las premisas. Para controlar un argumento del lenguaje natural hay que formalizar las premisas y la conclusión. Se intenta mostrar la validez mediante una deducción; la invalidez, mediante una interpretación que haga verdaderas las premisas y falsa la conclusión."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "5.4-5.5. Conjunto independiente de sentencias",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es independiente si y solo si cada uno de sus elementos es independiente de los demás:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo>:</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Γ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por tanto, ninguna sentencia de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es consecuencia semántica de todas las demás."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "Si <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es finito, para demostrar la independencia hay que dar <math display=\"inline\"><mi>n</mi></math> interpretaciones: cada <math display=\"inline\"><msub><mi mathvariant=\"script\">𝒥</mi><mi>j</mi></msub></math> debe satisfacer <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>−</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y no satisfacer <math display=\"inline\"><msub><mi>α</mi><mi>j</mi></msub></math>. Basta dar en cada interpretación el universo, los signos no lógicos usados y, si es necesario, el valor <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math> de las descripciones impropias."
    }
   ]
  },
  {
   "id": "a46",
   "maila": 2,
   "izenburua": "III.6. Independentzia frogatzeko ejercicios",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Así como para aprender a hacer deducciones no basta conocer la definición, para demostrar la independencia hay que entrenarse en construir contraejemplos. Si sospechamos que un argumento es correcto, buscamos la deducción de la conclusión; si sospechamos que es incorrecto, buscamos una interpretación que satisfaga las premisas pero no la conclusión. Las soluciones siguientes no son las únicas: cuando hay independencia, en general existen muchos contraejemplos distintos."
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 1"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demostrar que <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> es independiente del conjunto <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El ejercicio formaliza la falacia de este argumento: «Todo el que es capaz de resolver este problema es matemático; Antonio no puede resolver el problema; por tanto, Antonio no es matemático». No cumplir un antecedente no da la negación del consecuente."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mi>S</mi></math> es vacío, la condición <math display=\"inline\"><mrow><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es verdadera para el único objeto del universo, y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>1</mn></msub></mrow></math>. Además, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>2</mn></msub></mrow></math>. Pero, como <math display=\"inline\"><mrow><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; es decir, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Esa única interpretación muestra a la vez ambas premisas y el fracaso de la conclusión."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 2"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>. Demostrar <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> es independiente de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En lectura habitual: «si todos los justos merecieran respeto, Coriolano merecería su destino; los magnánimos, y solo ellos, merecen respeto; todo magnánimo es justo; por tanto, Coriolano merece su destino»."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Aukeratu <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>I</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> es falsa, <math display=\"inline\"><mn>0</mn></math> <math display=\"inline\"><mi>I</mi></math>-n está, pero no en <math display=\"inline\"><mi>R</mi></math>-n; por eso <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> la condición completa es verdadera. <math display=\"inline\"><mi>R</mi></math> y <math display=\"inline\"><mi>M</mi></math> ambas son vacías, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es verdadera; <math display=\"inline\"><mi>M</mi></math> es vacía, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> también. En cambio, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math> y <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>D</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, y, en consecuencia, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>D</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> no es consecuencia de las tres primeras."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 3"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Demostrar:"
      },
      {
       "mota": "zerrenda",
       "ordenatua": true,
       "elementuak": [
        "<math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es independiente de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>;",
        "<math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es independiente de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>."
       ]
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> no es independiente de las otras dos: en el ejercicio de deducción 8 de la fuente <math display=\"inline\"><mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><msub><mi>α</mi><mn>3</mn></msub></mrow></math> se demostró."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> independencia.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><mi>R</mi></math> no tiene cadenas ni sucesor común de dos objetos, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> son verdaderas en vacío. Pero <math display=\"inline\"><mn>0</mn></math> no tiene <math display=\"inline\"><mi>R</mi></math>-sucesores; por tanto, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo>⊨</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> independencia.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Cada objeto tiene <math display=\"inline\"><mn>0</mn></math> como sucesor; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es verdadera. A la relación no le falta ninguna flecha nueva que exija una cadena de dos pasos, y <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> también es verdadera. Sin embargo, <math display=\"inline\"><mn>0</mn></math> y <math display=\"inline\"><mn>1</mn></math> objetos tienen <math display=\"inline\"><mn>0</mn></math> como sucesor común, pero <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por eso <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es falsa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 4"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>¬</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>a</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>x</mi><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>6</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>7</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>8</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Demostrar <math display=\"inline\"><msub><mi>α</mi><mn>7</mn></msub></math> y <math display=\"inline\"><msub><mi>α</mi><mn>8</mn></msub></math> biak independenteak direla <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo>,</mo><msub><mi>α</mi><mn>5</mn></msub><mo>,</mo><msub><mi>α</mi><mn>6</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math> multzoarekiko."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Ambas independencias pueden verse con la misma interpretación. Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mi>ω</mi></mrow></math>, el conjunto de los números naturales, y establezcamos:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>n</mi><mo>+</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mn>0</mn></math> no es el valor de la función sucesor y la función es inyectiva; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> son verdaderas. <math display=\"inline\"><mi>P</mi></math> es vacío, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> tiene el antecedente falso y <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> también se cumple en vacío. <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> el par <math display=\"inline\"><msub><mi>α</mi><mn>5</mn></msub></math> lo satisface. No hay <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> par; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>6</mn></msub></math> tiene todos los antecedentes falsos. Por tanto, las seis primeras fórmulas son verdaderas."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><msub><mi>α</mi><mn>7</mn></msub></math> es falsa: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> tomando no hay <math display=\"inline\"><mi>y</mi></math>-rik <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> que lo cumpla. <math display=\"inline\"><msub><mi>α</mi><mn>8</mn></msub></math> también es falsa: <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> tomando no se cumple <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ni <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tampoco. La misma interpretación demuestra la independencia de las dos conclusiones."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 5"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>ι</mi><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>d</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∀</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>5</mn></msub><mo>=</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Demostrar que <math display=\"inline\"><msub><mi>α</mi><mn>5</mn></msub></math> es independiente de <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Las fórmulas codifican una versión del argumento ontológico de Anselmo: <math display=\"inline\"><mi>d</mi></math> es lo mayor pensable; <math display=\"inline\"><mi>d</mi></math> se puede pensar; algo se puede pensar y existe; todo objeto pensable que existe es mayor que cualquier objeto pensable que no existe; como conclusión, <math display=\"inline\"><mi>d</mi></math> se afirma que existe."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, el valor de las descripciones impropias <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math>, y:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>0</mn></mrow></math> tanto <math display=\"inline\"><mrow><mi>x</mi><mo>=</mo><mn>1</mn></mrow></math> como <math display=\"inline\"><mrow><mi>y</mi><mo>=</mo><mn>1</mn></mrow></math> tal que <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto, no hay <math display=\"inline\"><mrow><mo>¬</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>M</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> ningún objeto que lo cumpla. La descripción es impropia, <math display=\"inline\"><mrow><msub><mi>a</mi><mn>0</mn></msub><mo>=</mo><mn>0</mn></mrow></math> denota, y como eso es <math display=\"inline\"><mi>d</mi></math> es el valor de <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es verdadera. <math display=\"inline\"><mrow><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> también es verdadera. <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-k <math display=\"inline\"><mn>1</mn></math> tiene por testigo. <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> el objeto pensable que existe en <math display=\"inline\"><mn>1</mn></math> es, y el objeto pensable que no existe, <math display=\"inline\"><mn>0</mn></math>; <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>M</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> cumple la condición. Pero <math display=\"inline\"><mi>d</mi></math>-k <math display=\"inline\"><mn>0</mn></math> denota y <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mn>0</mn><mo>∈</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>; por tanto, <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El contraejemplo muestra que el argumento no es válido, ni siquiera tratando la existencia como predicado. Eso no significa que de las premisas no se saque nada: el ejercicio de deducción 34 de la fuente da otra conclusión condicionada. Allí se ve también que la expresión «lo mayor pensable» es, en esta interpretación, una descripción impropia."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 6"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean estos tres axiomas de la relación de equivalencia:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>↔</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Demostrar que <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es independiente."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "Para cada fórmula necesitamos un contraejemplo que conserve las otras dos."
      },
      {
       "mota": "testua",
       "html": "<strong>Quitando la reflexividad.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. La relación es simétrica y transitiva en vacío, pero <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es falsa; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es independiente."
      },
      {
       "mota": "testua",
       "html": "<strong>Quitando la simetría.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. La relación es reflexiva y transitiva, pero <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es verdadera y <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> falsa; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es independiente."
      },
      {
       "mota": "testua",
       "html": "<strong>Quitando la transitividad.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. La relación es reflexiva y simétrica. Sin embargo, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son verdaderas, pero <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es falsa; en consecuencia, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> es independiente. Las tres interpretaciones demuestran que <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> cada axioma no se puede deducir de los demás."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 7"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Demostrar que <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> es independiente."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. La relación es antisimétrica y total: en cada par de objetos distintos aparece una de las dos direcciones, y no aparecen ambas a la vez. Pero <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son verdaderas, <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no; por tanto, no es transitiva."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. La relación universal es transitiva y total, pero <math display=\"inline\"><mrow><mn>0</mn><mo>≠</mo><mn>1</mn></mrow></math> cumple ambas direcciones; por tanto, no es antisimétrica."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. La relación es transitiva y antisimétrica en vacío, pero <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∨</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es falsa; por tanto, no es total."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 8"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mi>P</mi></math> «punto», <math display=\"inline\"><mi>R</mi></math> «recta» y <math display=\"inline\"><mrow><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> «<math display=\"inline\"><mi>x</mi></math> punto <math display=\"inline\"><mi>z</mi></math> está en la recta», sean:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mo>∃</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>u</mi><mo>=</mo><mi>z</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∀</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>x</mi><mo>≠</mo><mi>y</mi><mo>∧</mo><mi>y</mi><mo>≠</mo><mi>z</mi><mo>∧</mo><mi>x</mi><mo>≠</mo><mi>z</mi><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>P</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mo>¬</mo><mo>∃</mo><mi>u</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>E</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>z</mi><mo>,</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> entonces demostrar que <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es independiente. Las fórmulas expresan los primeros axiomas de incidencia de la geometría euclidiana de Hilbert: dos puntos distintos tienen una recta; esa recta es única; cada recta tiene dos puntos distintos; y existen tres puntos que no están en la misma recta."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> contraejemplo.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. No hay rectas; por tanto, el axioma de unicidad y el de los dos puntos por recta se cumplen en vacío. Los tres puntos son distintos y no colineales, pero no hay ninguna recta que una dos puntos cualesquiera; <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es falsa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math>-ren kontraeredua.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo>,</mo><mn>2</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>3</mn><mo>,</mo><mn>4</mn><mo>,</mo><mn>5</mn><mo>,</mo><mn>6</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>6</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Cada par de puntos tiene al menos una recta, cada recta tiene al menos dos puntos, y no hay ninguna recta que contenga tres puntos a la vez. Pero <math display=\"inline\"><mn>1</mn></math> y <math display=\"inline\"><mn>2</mn></math> puntos <math display=\"inline\"><mn>5</mn></math> y <math display=\"inline\"><mn>6</mn></math> rectas; por tanto, la recta de incidencia no es única y <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es falsa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math>-ren kontraeredua.</strong> Unibertso, puntu y zuzen multzo berak hartu, baina:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>5</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Cada par de puntos tiene una única recta: <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>1</mn></mrow></math> el par <math display=\"inline\"><mn>4</mn></math>; <math display=\"inline\"><mrow><mn>1</mn><mo>,</mo><mn>2</mn></mrow></math> el par <math display=\"inline\"><mn>5</mn></math>; <math display=\"inline\"><mrow><mn>0</mn><mo>,</mo><mn>2</mn></mrow></math> bikoteak <math display=\"inline\"><mn>3</mn></math>. Los tres puntos no están en la misma recta. Sin embargo, <math display=\"inline\"><mn>6</mn></math> no tiene puntos; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> es falsa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> contraejemplo.</strong> <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>R</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>E</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. No hay dos puntos distintos ni rectas, y los tres primeros axiomas son verdaderos en vacío. Pero no se pueden elegir tres puntos distintos; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> es falsa."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "Ejercicio 9"
    },
    {
     "mota": "ariketa",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sean:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>=</mo><mo>∃</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↔</mo><mi>x</mi><mo>=</mo><mi>y</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∧</mo><mi>y</mi><mo>=</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>2</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>x</mi><mo>≠</mo><mi>r</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>→</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>3</mn></msub><mo>=</mo><mo>∃</mo><mi>x</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>G</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∧</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>α</mi><mn>4</mn></msub><mo>=</mo><mo>∀</mo><mi>x</mi><mo>,</mo><mi>y</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><msub><mi>α</mi><mn>2</mn></msub><mo>,</mo><msub><mi>α</mi><mn>3</mn></msub><mo>,</mo><msub><mi>α</mi><mn>4</mn></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Demostrar que que <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> es independiente."
      }
     ],
     "ebazpena": [
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>1</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>r</mi></math> de <math display=\"inline\"><mi>S</mi></math> a otro objeto <math display=\"inline\"><mi>A</mi></math> hay una relación <math display=\"inline\"><mi>p</mi></math> tiene <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>G</mi></math> que es <math display=\"inline\"><mn>1</mn></math> con relación, y <math display=\"inline\"><mi>A</mi></math> es asimétrica. Sin embargo, <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>G</mi></math> el único objeto que cumple ambas <math display=\"inline\"><mn>1</mn></math> es, no <math display=\"inline\"><mi>r</mi></math> que denota <math display=\"inline\"><mn>0</mn></math>; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es falsa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>1</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>G</mi></math> el único objeto <math display=\"inline\"><mrow><mn>0</mn><mo>=</mo><mi>r</mi></mrow></math> es; <math display=\"inline\"><mrow><mi>p</mi><mo>=</mo><mn>1</mn></mrow></math> tiene con él <math display=\"inline\"><mi>A</mi></math> relación; y la relación es asimétrica. Pero <math display=\"inline\"><mn>1</mn></math> <math display=\"inline\"><mi>S</mi></math> es y <math display=\"inline\"><mrow><mn>1</mn><mo>≠</mo><mi>r</mi></mrow></math>, aunque <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> sea falsa. Por eso <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es independiente."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>3</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>∅</mi></mrow></math>. <math display=\"inline\"><msub><mi>α</mi><mn>1</mn></msub></math> es verdadera, y <math display=\"inline\"><msub><mi>α</mi><mn>2</mn></msub></math> es verdadera en vacío, pues no hay <math display=\"inline\"><mi>r</mi></math> distinto de <math display=\"inline\"><mi>S</mi></math> objeto. <math display=\"inline\"><mi>A</mi></math> vacía es asimétrica. Pero no hay <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> ningún testigo que lo cumpla; por tanto, <math display=\"inline\"><msub><mi>α</mi><mn>3</mn></msub></math> es falsa."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> contraejemplo.</strong> Tomemos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>, <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>S</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>G</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> y <math display=\"inline\"><mrow><msub><mi mathvariant=\"script\">𝒥</mi><mn>4</mn></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. La primera fórmula es verdadera; la segunda se cumple en vacío; y la tercera tiene <math display=\"inline\"><mn>0</mn></math> por testigo. En cambio, <math display=\"inline\"><mrow><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> al ser verdadera, <math display=\"inline\"><mrow><mo>¬</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>0</mn><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es falsa; por tanto, <math display=\"inline\"><mi>A</mi></math> no es asimétrica y <math display=\"inline\"><msub><mi>α</mi><mn>4</mn></msub></math> es falsa."
      }
     ]
    },
    {
     "mota": "oharra",
     "titulua": "Límite documental L07/L08",
     "blokeak": [
      {
       "mota": "testua",
       "html": "El enunciado del ejercicio 9 y los dos primeros contraejemplos comienzan en la página impresa 126. El tercer y el cuarto contraejemplo terminan en la parte superior de la página 127, pero todavía pertenecen al apartado III.6; por eso se han incluido en L07. L07 termina aquí. El título &quot;III.7. Correccion semantica&quot; de la misma página y su párrafo 7.0 no se han incluido: son el comienzo exacto de L08."
      }
     ]
    }
   ]
  },
  {
   "id": "a47",
   "maila": 2,
   "izenburua": "III.7. Corrección semántica",
   "blokeak": [
    {
     "mota": "iturria",
     "proiektua": "Mosterin, Jesus - Logica de primer orden, 2. arg., Ariel, 1976",
     "xehetasuna": "III.7-III.9 y bibliografía; págs. 127-139 impresas; paráfrasis en euskera",
     "hizkuntza": "es"
    },
    {
     "mota": "oharra",
     "titulua": "Límite documental L07/L08",
     "blokeak": [
      {
       "mota": "testua",
       "html": "En la parte superior de la página impresa 127 terminan los contraejemplos 3.º y 4.º de la demostración de independencia del ejercicio 9 de III.6. Están en L07 para conservar la continuidad del ejercicio. L08 no empieza en la primera línea de la página física, sino en el rótulo <strong>III.7. Corrección semántica</strong> de la misma página."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "7.0. Garantía entre la deducción y la consecuencia"
    },
    {
     "mota": "testua",
     "html": "Decimos que una argumentación o demostración es <strong>correcta</strong>, <strong>válida</strong> o <strong>concluyente</strong> cuando la conclusión es consecuencia semántica de las premisas. Hasta ahora hemos construido dos herramientas distintas para controlarlo. Por un lado, tenemos la relación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>: dice que, mediante las reglas del cálculo, <math display=\"inline\"><mi>α</mi></math> se deduce de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, y es puramente sintáctica. Por otro, la relación <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math> dice que toda interpretación que satisface <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> satisface también <math display=\"inline\"><mi>α</mi></math>; esta es una noción semántica."
    },
    {
     "mota": "testua",
     "html": "Ambas relaciones no coinciden por definición. Si un cálculo permitiera obtener de las premisas una sentencia que no fuera su consecuencia, ese cálculo no serviría para controlar demostraciones o argumentaciones. Por eso se necesita la <strong>corrección semántica</strong>: la deducibilidad debe garantizar la consecuencia semántica."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "7.1. Cálculo semánticamente correcto",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un cálculo deductivo es <strong>semánticamente correcto</strong> si y solo si, para cualquier conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y cualquier sentencia <math display=\"inline\"><mi>α</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Cuando hay que indicar el formalismo: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mo>⇒</mo><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.2. Teorema de corrección semántica del cálculo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto cualquiera de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mi>α</mi></math> es una sentencia cualquiera de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Para demostrar el teorema completo habría que comprobar que todas las reglas de inferencia y de construcción del cálculo conservan la consecuencia semántica. En las reglas ordinarias la comprobación es directa; la única inferencia que requiere atención especial es EP, porque introduce una nueva variable crítica. El teorema 7.3 siguiente justifica su paso semántico decisivo."
      },
      {
       "mota": "testua",
       "html": "La fuente no desarrolla la demostración completa por inducción de 7.2. Remite expresamente al artículo de R. Montague y D. Kalish de 1957, <strong>Remarks on Descriptions and Natural Deduction</strong>. Por eso aquí tampoco inventamos la demostración detallada que falta ni la presentamos como más completa que el original: se dan el resultado, el control necesario de la demostración y el lema de EP, respetando el límite epistémico de la fuente."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "7.3. Lema semántico de la variable crítica",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>u</mi></math> no aparece en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mi>α</mi></math> ni <math display=\"inline\"><mi>β</mi></math>, y <math display=\"inline\"><mrow><mi>u</mi><mo>≠</mo><mi>x</mi></mrow></math>, de las dos hipótesis siguientes"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊨</mo><mi>β</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "eta"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "se concluye <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>β</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Tomemos una interpretación arbitraria <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> que satisfaga <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Por la segunda hipótesis, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>. Por la definición de cuantificador universal, para cualquier objeto <math display=\"inline\"><mi>d</mi></math> del universo, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi>d</mi><mo stretchy=\"false\" form=\"postfix\">]</mo><mo>⊨</mo><mi>α</mi></mrow></math>. En particular, eligiendo <math display=\"inline\"><mrow><mi>d</mi><mo>=</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>u</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El lema semántico de la sustitución, III.3.1, lo reescribe así:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> satisface también <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>u</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Aplicando la primera hipótesis, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math>. Como <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> era un modelo cualquiera de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>β</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "La demostración original escribe el mismo paso alternando los valores de las variables de la interpretación, usando III.2.4, III.1.4 y III.3.1. La frescura de <math display=\"inline\"><mi>u</mi></math> garantiza que cambiar el valor de <math display=\"inline\"><mi>u</mi></math> no altera sin querer la satisfacción de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, <math display=\"inline\"><mi>α</mi></math> ni <math display=\"inline\"><mi>β</mi></math>. Esa condición es el equivalente semántico de la restricción sintáctica de la variable crítica de EP."
      }
     ]
    }
   ]
  },
  {
   "id": "a48",
   "maila": 2,
   "izenburua": "III.8. Consistencia y satisfacibilidad",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "8.0. Dos nociones y un programa"
    },
    {
     "mota": "testua",
     "html": "La <strong>consistencia</strong> es una noción sintáctica: se define según las reglas de deducibilidad del cálculo. <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es consistente si no todas las fórmulas son deducibles de él; de modo equivalente, no existe una fórmula <math display=\"inline\"><mi>α</mi></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. La <strong>satisfacibilidad</strong>, en cambio, es semántica: <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible si al menos una interpretación satisface todas sus sentencias."
    },
    {
     "mota": "testua",
     "html": "La dirección fácil del apartado es que un conjunto satisfacible es consistente. La dirección profunda, en cambio, construye un modelo para cada conjunto consistente. Primero construiremos el modelo canónico a partir de un conjunto maximalmente consistente y ejemplificado sin descriptores; después extenderemos el resultado a cualquier conjunto consistente, incluidos los que tienen descriptores. De ahí saldrán la equivalencia consistencia/satisfacibilidad, la compacidad y el teorema de numerabilidad de Skolem."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.1. Modelo canónico numerable",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto maximalmente consistente y ejemplificado de sentencias sin descriptores de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible en una interpretación de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> con universo numerable."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "<strong>1. Equivalencia entre términos.</strong> Sea <math display=\"inline\"><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub></math> el conjunto de términos sin descriptores de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>. Definamos la relación <math display=\"inline\"><mo>≈</mo></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "La relación es reflexiva, porque <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi></mrow></math> es la igualdad lógica y el conjunto maximalmente consistente contiene todos sus teoremas. Es simétrica: si <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por SI se deduce <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></math> y, por la clausura deductiva, esta también está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Es igualmente transitiva: si <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow></math> y <math display=\"inline\"><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math> están en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por TI se deduce <math display=\"inline\"><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></math>. Por tanto, <math display=\"inline\"><mo>≈</mo></math> es una relación de equivalencia. <math display=\"inline\"><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></math> denotará la clase de equivalencia que tiene <math display=\"inline\"><mi>t</mi></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>2. Interpretación canónica.</strong> Definamos el universo de la interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> como el cociente de los términos:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒰</mi><mo>=</mo><mfrac><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub><mo>≈</mo></mfrac></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>P</mi></math> es un relator <math display=\"inline\"><mi>n</mi></math>-ario, pongamos"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>t</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>:</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi>f</mi></math> es un functor <math display=\"inline\"><mi>n</mi></math>-ario, definamos"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>t</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">¯</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "A cada variable y constante se le asigna su clase de términos: <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>x</mi><mo accent=\"true\">¯</mo></mover></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>a</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Estas definiciones son independientes de la elección del representante. En efecto, si <math display=\"inline\"><mrow><msub><mi>t</mi><mi>i</mi></msub><mo>≈</mo><msubsup><mi>t</mi><mi>i</mi><mo>′</mo></msubsup></mrow></math> para todo <math display=\"inline\"><mi>i</mi></math>, las igualdades <math display=\"inline\"><mrow><msub><mi>t</mi><mi>i</mi></msub><mo>=</mo><msubsup><mi>t</mi><mi>i</mi><mo>′</mo></msubsup></mrow></math> están en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. La clausura de igualdad de II.8.2(1) dice que <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mrow><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>t</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>t</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>; para los functores se obtiene también <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msubsup><mi>t</mi><mn>1</mn><mo>′</mo></msubsup><mo>,</mo><mi>…</mi><mo>,</mo><msubsup><mi>t</mi><mi>n</mi><mo>′</mo></msubsup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Por tanto, la asignación a las clases está bien definida."
      },
      {
       "mota": "testua",
       "html": "<strong>3. Valor de los términos.</strong> Para todo término sin descriptores,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>t</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Se demuestra por inducción sobre la longitud del término. Los casos de variables y constantes son definiciones. Si <math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, por hipótesis de inducción <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><msub><mi>t</mi><mi>i</mi></msub><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><msub><mi>t</mi><mi>i</mi></msub><mo accent=\"true\">¯</mo></mover></mrow></math> y, por la definición de functor,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>t</mi><mi>n</mi></msub><mo accent=\"true\">¯</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mover><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow><mo accent=\"true\">¯</mo></mover></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "<strong>4. Lema de la verdad.</strong> Para toda sentencia sin descriptores <math display=\"inline\"><mi>α</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "La demostración es una inducción sobre el número de signos lógicos de <math display=\"inline\"><mi>α</mi></math>. En el átomo relacional, encadenando el resultado de los términos y la definición de <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>P</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi>P</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>t</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En el átomo de igualdad,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo>⇔</mo><mover><msub><mi>t</mi><mn>1</mn></msub><mo accent=\"true\">¯</mo></mover><mo>=</mo><mover><msub><mi>t</mi><mn>2</mn></msub><mo accent=\"true\">¯</mo></mover><mo>⇔</mo><msub><mi>t</mi><mn>1</mn></msub><mo>≈</mo><msub><mi>t</mi><mn>2</mn></msub><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En la negación, la hipótesis de inducción y la propiedad II.8.2(3) de la maximalidad dan la cadena siguiente:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>α</mi><mo>⇔</mo><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><mi>α</mi><mo>¬</mo><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "En la conjunción,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo>∧</mo><mi>β</mi><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> y </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>β</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>⇔</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∧</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "usando II.8.2(4). La disyunción se trata con II.8.2(5); la implicación y el bicondicional de modo análogo, con las propiedades de clausura correspondientes."
      },
      {
       "mota": "testua",
       "html": "Para el cuantificador universal, como todo objeto de <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> es la clase de un término,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "si y solo si, para cada designador de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math>. El lema de sustitución lo convierte en <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math>; por hipótesis de inducción, <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Según II.8.3(2), que todas las instancias estén en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> equivale a que <math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Para el existencial, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> si y solo si existe un testigo <math display=\"inline\"><mrow><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo>∈</mo><mi mathvariant=\"script\">𝒰</mi></mrow></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>x</mi><mo>≔</mo><mover><mi>t</mi><mo accent=\"true\">¯</mo></mover><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>⊨</mo><mi>α</mi></mrow></math>. El lema de sustitución y la hipótesis de inducción dan <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>; la propiedad de ejemplificación II.8.3(1) dice que eso equivale a que <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Así termina la inducción del lema de la verdad."
      },
      {
       "mota": "testua",
       "html": "<strong>5. Satisfacibilidad y numerabilidad.</strong> Los elementos de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> son sentencias sin descriptores; según el lema de la verdad, <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> las satisface todas. Por tanto, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Como el conjunto <math display=\"inline\"><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub></math> de términos es numerable, su cociente <math display=\"inline\"><mfrac><msub><mi>T</mi><mi mathvariant=\"script\">ℒ</mi></msub><mo>≈</mo></mfrac></math> es también a lo sumo numerable. Por tanto, el modelo construido es numerable y el teorema queda demostrado."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.2. Satisfacibilidad de los conjuntos <br> consistentes sin descriptores",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo conjunto consistente de sentencias sin descriptores de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es satisfacible en una interpretación de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> con universo numerable."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> un conjunto consistente de este tipo. Por II.8.4, existe una clase <math display=\"inline\"><mi mathvariant=\"script\">𝒞</mi></math> de constantes nuevas numerables y un conjunto <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math> maximalmente consistente, ejemplificado y sin descriptores del lenguaje <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mi mathvariant=\"script\">𝒞</mi></mrow></math>, que contiene <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊆</mo><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El teorema 8.1 da una interpretación de universo numerable que satisface <math display=\"inline\"><msup><mi mathvariant=\"normal\">Γ</mi><mo>⋆</mo></msup></math>. Restringida la interpretación al lenguaje original <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, el universo no cambia y sigue satisfaciendo todas las fórmulas de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, por la propiedad de reducción de lenguaje de III.4.5. Por tanto, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible en un universo numerable."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.3. Satisfacibilidad de todo conjunto consistente",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Todo conjunto consistente de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> -con descriptores o sin ellos- es satisfacible en una interpretación de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> con universo numerable."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> un conjunto consistente de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>. Elijamos una nueva constante individual <math display=\"inline\"><mi>c</mi></math> que no sea de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, y pongamos"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>δ</mi><mo>≡</mo><mi>c</mi><mo>=</mo><mi>ι</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por II.7.7, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es consistente en el lenguaje <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Definamos ahora el conjunto de traducciones para eliminar los descriptores:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msup><mi>α</mi><mo>′</mo></msup><mo>:</mo><mo>∃</mo><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi><mo>,</mo><mi>δ</mi><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>,"
      },
      {
       "mota": "testua",
       "html": "donde <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> es una fórmula sin descriptores con las mismas variables libres que <math display=\"inline\"><mi>α</mi></math>. Como las fórmulas de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> son sentencias, las de <math display=\"inline\"><mi>A</mi></math> también lo son. El resultado II.6.1(a) garantiza que para cada <math display=\"inline\"><mi>α</mi></math> de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> existe al menos un <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> de este tipo."
      },
      {
       "mota": "testua",
       "html": "<strong><math display=\"inline\"><mi>A</mi></math> es consistente.</strong> Para cada <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>∈</mo><mi>A</mi></mrow></math> existe <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> tal que <math display=\"inline\"><mrow><mi>δ</mi><mo>⊢</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. Por EB <math display=\"inline\"><mrow><mi>δ</mi><mo>⊢</mo><mi>α</mi><mo>→</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>, porque <math display=\"inline\"><mi>α</mi></math> puede usarse como premisa. Así, todas las fórmulas de <math display=\"inline\"><mi>A</mi></math> son deducibles de <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Si <math display=\"inline\"><mi>A</mi></math> fuera contradictorio, la transitividad de la deducibilidad haría contradictorio también a <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>δ</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, contra la consistencia anterior. En consecuencia, <math display=\"inline\"><mi>A</mi></math> es consistente."
      },
      {
       "mota": "testua",
       "html": "Aplicando el teorema 8.2, existe una interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> del lenguaje <math display=\"inline\"><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> con universo numerable tal que <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>A</mi></mrow></math>. Escribamos <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><msub><mi>a</mi><mn>0</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Construyamos la interpretación <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> igual a <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> en la interpretación de todos los símbolos, pero tomando como valor por defecto de las descripciones impropias <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> en lugar de <math display=\"inline\"><msub><mi>a</mi><mn>0</mn></msub></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi mathvariant=\"script\">𝒰</mi><mo>,</mo><mi mathvariant=\"script\">ℋ</mi><mo>,</mo><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Hay que demostrar <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Tomemos <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Por II.6.1(a), elijamos un <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> sin descriptores, con las mismas variables libres, tal que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi>δ</mi><munder><mo>⊢</mo><mrow><mi mathvariant=\"script\">ℒ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>c</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por la corrección semántica de 7.2, <math display=\"inline\"><mrow><mi>δ</mi><mo>⊨</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. En <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> el valor de la descripción impropia <math display=\"inline\"><mrow><mi>ι</mi><mi>y</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>y</mi><mo>=</mo><mi>y</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> es <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>; por tanto, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi>δ</mi></mrow></math>, y en consecuencia <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi>α</mi><mo>↔</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por otro lado, como <math display=\"inline\"><mrow><msup><mi>α</mi><mo>′</mo></msup><mo>∈</mo><mi>A</mi></mrow></math>, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. <math display=\"inline\"><msup><mi>α</mi><mo>′</mo></msup></math> no tiene descriptores, y <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> y <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup></math> solo difieren en el valor de las descripciones impropias; por tanto, también <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><msup><mi>α</mi><mo>′</mo></msup></mrow></math>. Con el bicondicional anterior, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi>α</mi></mrow></math>. Como <math display=\"inline\"><mi>α</mi></math> era arbitraria, <math display=\"inline\"><mrow><msup><mi mathvariant=\"script\">𝒥</mi><mo>′</mo></msup><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por último, quitemos la constante nueva <math display=\"inline\"><mi>c</mi></math> de la signatura de la interpretación. La interpretación <math display=\"inline\"><msup><mi mathvariant=\"script\">𝒥</mi><mo>″</mo></msup></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> así obtenida sigue satisfaciendo <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, porque <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> no usa <math display=\"inline\"><mi>c</mi></math>; el universo es el mismo <math display=\"inline\"><mi mathvariant=\"script\">𝒰</mi></math> y es numerable. Esto demuestra el teorema."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.4. La satisfacibilidad implica la consistencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un conjunto satisfacible de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es consistente en <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Sea <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> satisfacible. Existe una interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>. Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> fuera inconsistente, por II.7.3 habría una fórmula <math display=\"inline\"><mi>β</mi></math> tal que"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "La corrección semántica de 7.2 daría <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>; por tanto, <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></math>. Eso exige a la vez <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>β</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mo>¬</mo><mi>β</mi></mrow></math>, es decir, que <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> satisfaga y no satisfaga <math display=\"inline\"><mi>β</mi></math>. Como es imposible, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es consistente."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.5. Equivalencia entre satisfacibilidad y consistencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> asegarria da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">ℒ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -n </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> konsistentea da </mtext><mspace width=\"0.333em\"></mspace></mrow><mi mathvariant=\"script\">ℒ</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> -n</mtext></mrow></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "El teorema 8.3 da la dirección de derecha a izquierda; el teorema 8.4, en cambio, la de izquierda a derecha. La equivalencia enlaza la noción sintáctica y la semántica, pero ese vínculo es un teorema demostrado, no una identidad por definición."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.6. Finitud de la satisfacibilidad o compacidad",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible si y solo si todo subconjunto finito suyo es satisfacible."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos primero que <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible. La interpretación que satisface <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> satisface también cualquier subconjunto <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> suyo; por tanto, todos los subconjuntos finitos son satisfacibles."
      },
      {
       "mota": "testua",
       "html": "Recíprocamente, supongamos que todo subconjunto finito de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible. Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> no fuera satisfacible, por 8.5 sería inconsistente. Entonces, por II.7.3, existe una fórmula <math display=\"inline\"><mi>α</mi></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. Por la finitud de la deducción -II.2.8-, existe un subconjunto finito <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>α</mi></mrow></math>. <math display=\"inline\"><mi mathvariant=\"normal\">Δ</mi></math> sería inconsistente y, aplicando de nuevo 8.5, insatisfacible. Eso contradice la hipótesis. Por tanto, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "8.7. Teorema de Skolem de satisfacibilidad numerable",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto satisfacible de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, existe una interpretación de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> con universo numerable que satisface <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Como <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es satisfacible, por 8.4 es consistente. El teorema 8.3 construye para todo conjunto consistente un modelo de universo numerable. Por tanto, <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> tiene un modelo numerable, aunque el modelo que conocíamos al principio pudiera ser no numerable."
      }
     ]
    }
   ]
  },
  {
   "id": "a49",
   "maila": 2,
   "izenburua": "III.9. Completitud semántica",
   "blokeak": [
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.0. Particularidad de la lógica de primer orden"
    },
    {
     "mota": "testua",
     "html": "Que el cálculo sea semánticamente correcto significa que no puede deducir nada que no sea consecuencia semántica. Pero eso solo no asegura que sea capaz de deducir todas las consecuencias semánticas. En los formalismos de segundo orden -los que tienen, además de individuos, variables ligadas sobre propiedades y relaciones- no existe un cálculo efectivo que capture todas las consecuencias semánticas. Mosterín relaciona este resultado con el teorema de incompletitud de Gödel de 1931."
    },
    {
     "mota": "testua",
     "html": "En la lógica de primer orden la situación es distinta. Gödel demostró en 1930 que se puede construir para los formalismos de primer orden un cálculo que deduce todas las consecuencias semánticas. La demostración que aquí se presenta no sigue el camino original de Gödel: se basa en la construcción de modelos dada por Henkin en 1949 y en el método refinado por Hasenjaeger en 1953. Una vez establecido en 8.5 el puente entre consistencia y satisfacibilidad, queda establecer el que hay entre deducibilidad y consecuencia."
    },
    {
     "mota": "ingurunea",
     "izena": "Definición",
     "kolorea": "berdea",
     "etzana": false,
     "titulua": "9.1. Cálculo semánticamente completo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Un cálculo deductivo es <strong>semánticamente completo</strong> si y solo si, para cualquier conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y cualquier sentencia <math display=\"inline\"><mi>α</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "9.2. Teorema de completitud semántica o de Gödel",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto cualquiera de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mi>α</mi></math> es una sentencia cualquiera de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Supongamos <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>. Esto significa que no existe una interpretación de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> que satisfaga <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y no satisfaga <math display=\"inline\"><mi>α</mi></math>. De modo equivalente, no existe ninguna interpretación que satisfaga <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>. Por tanto,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> no es satisfacible."
      },
      {
       "mota": "testua",
       "html": "El teorema 8.3 dice que todo conjunto consistente es satisfacible; por contraposición, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es inconsistente. Como de un conjunto inconsistente se deduce toda fórmula,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Por DN,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mo>¬</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>⊢</mo><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "El resultado de la deducción por contradicción de II.5.3 elimina la hipótesis exterior <math display=\"inline\"><mrow><mo>¬</mo><mi>α</mi></mrow></math>:"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mo>¬</mo><mo>¬</mo><mi>α</mi></mrow></math>."
      },
      {
       "mota": "testua",
       "html": "Aplicando de nuevo DN, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>. Así queda demostrado que <math display=\"inline\"><mi>α</mi></math>, que era consecuencia semántica, es deducible en el cálculo."
      }
     ]
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "9.3. Equivalencia entre deducibilidad y consecuencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mi>α</mi></math> es una sentencia de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "testua",
     "html": "7.2 lleva de la deducibilidad a la consecuencia semántica; 9.2 hace el camino inverso. Tomando <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>=</mo><mi>∅</mi></mrow></math>, se obtiene el siguiente caso particular:"
    },
    {
     "mota": "testua",
     "html": "<math display=\"inline\"><mrow><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><munder><mo>⊢</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
    },
    {
     "mota": "testua",
     "html": "Es decir, una sentencia es lógicamente válida si y solo si es un teorema lógico."
    },
    {
     "mota": "ingurunea",
     "izena": "Teorema",
     "kolorea": "urdina",
     "etzana": true,
     "titulua": "9.4. Finitud de la consecuencia",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Si <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es un conjunto de sentencias de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> y <math display=\"inline\"><mi>α</mi></math> es una sentencia de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>,"
      },
      {
       "mota": "testua",
       "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>"
      },
      {
       "mota": "testua",
       "html": "si y solo si existe un subconjunto finito <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><munder><mo>⊨</mo><mi mathvariant=\"script\">ℒ</mi></munder><mi>α</mi></mrow></math>."
      }
     ]
    },
    {
     "mota": "frogapena",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Por 9.3, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi></mrow></math> y <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math> son equivalentes. La finitud de la deducción de II.2.8 dice que esto último ocurre si y solo si existe un <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊆</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> finito que tiene <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊢</mo><mi>α</mi></mrow></math>. Aplicando de nuevo 9.3, <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Δ</mi><mo>⊨</mo><mi>α</mi></mrow></math>. La dirección inversa se sigue también de inmediato de la monotonía de la consecuencia semántica."
      }
     ]
    },
    {
     "mota": "izenburua",
     "maila": 3,
     "testua": "9.5. Henkin, Skolem, compacidad y teoría de modelos"
    },
    {
     "mota": "testua",
     "html": "Al resultado 8.3 -el que dice que todo conjunto consistente tiene un modelo de universo numerable- se le suele llamar <strong>teorema de Henkin</strong>, porque Leon Henkin fue el primero en dar una demostración parecida a la que aquí se usa. De esa construcción salen como breves corolarios la completitud semántica de Gödel (9.2), la satisfacibilidad numerable de Skolem (8.7) y la finitud de la satisfacibilidad o <strong>compactness theorem</strong> (8.6)."
    },
    {
     "mota": "testua",
     "html": "El teorema de Skolem tiene una consecuencia filosófica notable: una teoría formal de primer orden pensada para caracterizar un universo no numerable tiene también modelos numerables, si es que tiene algún modelo. Por eso la naturaleza de una estructura no numerable no puede fijarse categóricamente con axiomas de primer orden. El resultado tiene además aplicaciones profundas en la metateoría de conjuntos."
    },
    {
     "mota": "testua",
     "html": "El teorema de compacidad, por su parte, permite obtener modelos no estándar de la aritmética: también sistemas no isomorfos a la estructura de los números naturales pueden cumplir todos los axiomas de la aritmética de primer orden. Los teoremas de Skolem y de compacidad forman la base de la teoría de modelos."
    },
    {
     "mota": "testua",
     "html": "La fuente subraya que ambos resultados pueden demostrarse también sin cálculo deductivo, dentro de la teoría de modelos. La compacidad puede obtenerse mediante ultraproductos adecuados, y el teorema de Skolem directamente de la compacidad. Para esos desarrollos cita a Bell y Slomson, Chang y Keisler, y Schwabhäuser. Con esta observación terminan III.9 y el cuerpo teórico del libro."
    },
    {
     "mota": "oharra",
     "titulua": "Presencia de ejercicios en este tramo",
     "blokeak": [
      {
       "mota": "testua",
       "html": "Los apartados III.7-III.9 no tienen ejercicios ni soluciones numeradas. Todo el contenido numerado del tramo lo forman los resultados 7.1-7.3, 8.1-8.7 y 9.1-9.5 y las demostraciones dadas en su fuente."
      }
     ]
    }
   ]
  },
  {
   "id": "a50",
   "maila": 2,
   "izenburua": "Bibliografía",
   "blokeak": [
    {
     "mota": "testua",
     "html": "Obras citadas por el libro, en el orden original:"
    },
    {
     "mota": "testua",
     "html": "<strong>Bell, J. y Slomson, A.</strong> <strong>Models and Ultraproducts</strong>. Amsterdam, 1971."
    },
    {
     "mota": "testua",
     "html": "<strong>Carnap, R.</strong> <strong>Meaning and Necessity, a Study in Semantics and Modal Logic</strong>. Chicago, 1947."
    },
    {
     "mota": "testua",
     "html": "<strong>Chang, C. y Keisler, H. J.</strong> <strong>Model Theory</strong>. Amsterdam, 1973."
    },
    {
     "mota": "testua",
     "html": "<strong>Frege, G.</strong> <strong>Begriffsschrift, eine der arithmetischen nachgebildeten Formelsprache des reinen Denkens</strong>. Halle, 1879."
    },
    {
     "mota": "testua",
     "html": "<strong>Frege, G.</strong> “Ueber Sinn und Bedeutung”. <strong>Zeitschrift für Philosophie und philosophische Kritik</strong>, vol. 100, 1892."
    },
    {
     "mota": "testua",
     "html": "<strong>Gentzen, G.</strong> “Untersuchungen über das Logische Schliessen”. <strong>Mathematische Zeitschrift</strong>, vol. 39, 1934."
    },
    {
     "mota": "testua",
     "html": "<strong>Gödel, K.</strong> “Die Vollständigkeit der Axiome des logischen Funktionenkalküls”. <strong>Monatshefte für Mathematik und Physik</strong>, vol. 37, 1930."
    },
    {
     "mota": "testua",
     "html": "<strong>Gödel, K.</strong> “Ueber formal unentscheidbare Sätze der <strong>Principia Mathematica</strong> und verwandter Systeme”. <strong>Monatshefte für Mathematik und Physik</strong>, vol. 38, 1931."
    },
    {
     "mota": "testua",
     "html": "<strong>Hasenjaeger, G.</strong> “Eine Bemerkung zu Henkins Beweis für die Vollständigkeit des Prädikatenkalküls der ersten Stufe”. <strong>Journal of Symbolic Logic</strong>, vol. 18, 1953."
    },
    {
     "mota": "testua",
     "html": "<strong>Henkin, L.</strong> “The completeness of the first-order functional calculus”. <strong>Journal of Symbolic Logic</strong>, vol. 14, 1949."
    },
    {
     "mota": "testua",
     "html": "<strong>Hermes, H.</strong> <strong>Einführung in die mathematische Logik</strong>. Stuttgart, 1963."
    },
    {
     "mota": "testua",
     "html": "<strong>Hilbert, D. y Ackermann, W.</strong> <strong>Grundzüge der theoretischen Logik</strong>. Berlin, 1928."
    },
    {
     "mota": "testua",
     "html": "<strong>Kalish, D. y Montague, R.</strong> “Remarks on descriptions and natural deduction”. <strong>Archiv für mathematische Logik und Grundlagenforschung</strong>, vol. 3, 1957."
    },
    {
     "mota": "testua",
     "html": "<strong>Kalish, D. y Montague, R.</strong> <strong>Logic. Techniques of Formal Reasoning</strong>. New York, 1964."
    },
    {
     "mota": "testua",
     "html": "<strong>Peano, G.</strong> <strong>Notation de logique mathématique</strong>. Turín, 1894."
    },
    {
     "mota": "testua",
     "html": "<strong>Quine, W. V.</strong> <strong>Set Theory and its Logic</strong>. Cambridge, Massachusetts, 1963."
    },
    {
     "mota": "testua",
     "html": "<strong>Schwabhäuser, W.</strong> <strong>Modelltheorie</strong>. Mannheim, 1972."
    },
    {
     "mota": "modulua",
     "kodea": "M02",
     "izenburua": "Conjuntos, relaciones y aplicaciones",
     "maila": "HERRAMIENTAS"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Dominar las operaciones entre conjuntos y sus propiedades.",
      "Entender las relaciones de equivalencia y los conjuntos cociente.",
      "Distinguir las aplicaciones inyectivas, sobreyectivas y biyectivas."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M01 — Lógica simbólica"
     ]
    },
    {
     "mota": "itzulgai",
     "proiektua": "sets_relations_mappings",
     "orrialdeak": "112",
     "jatorria": "en"
    },
    {
     "mota": "modulua",
     "kodea": "M03",
     "izenburua": "Números naturales e inducción",
     "maila": "HERRAMIENTAS"
    },
    {
     "mota": "helburuak",
     "elementuak": [
      "Hacer demostraciones por inducción.",
      "Distinguir los conjuntos finitos y los numerables.",
      "Adquirir las primeras nociones de estructuras algebraicas."
     ]
    },
    {
     "mota": "aurrebaldintzak",
     "elementuak": [
      "M02 — Conjuntos, relaciones y aplicaciones"
     ]
    },
    {
     "mota": "itzulgai",
     "proiektua": "nociones_basicas",
     "orrialdeak": "90",
     "jatorria": "es"
    }
   ]
  }
 ]
};
