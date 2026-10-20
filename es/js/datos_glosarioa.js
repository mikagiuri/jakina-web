/* JAKINA · glosarioa (#definizioa con titulua), de los capítulos con datos
   GENERADO por tools/konbertatu_jakina.py: no se edita a mano. */
const GLOSARIOA = [
 {
  "t": "Funtorea y aritatea",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a3"
 },
 {
  "t": "Sententzia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Una sentencia es una expresión lingüística que puede ser verdadera o falsa, aunque de momento no sepamos cuál es su valor de verdad. «París es la capital de Francia» y «<math display=\"inline\"><mrow><mn>5</mn><mo>+</mo><mn>5</mn><mo>=</mo><mn>12</mn></mrow></math>» son ambas sentencias: la primera es verdadera y la segunda falsa."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a4"
 },
 {
  "t": "Erlatzailea y aritatea",
  "blokeak": [
   {
    "mota": "testua",
    "html": "La aridad de un relator es el número de designadores que necesita para formar una sentencia. «… está enfermo» es unario; «… quiere a …» es binario; y «… está entre … y …» es ternario. En general, un relator que necesita <math display=\"inline\"><mi>n</mi></math> designadores es <math display=\"inline\"><mi>n</mi></math>-ádico."
   },
   {
    "mota": "testua",
    "html": "Los relatores los representaremos con letras mayúsculas <math display=\"inline\"><mi>P</mi></math>, <math display=\"inline\"><mi>Q</mi></math>, <math display=\"inline\"><mi>R</mi></math>, <math display=\"inline\"><mi>S</mi></math>, …, y con superíndices cuando haga falta la aridad: <math display=\"inline\"><msup><mi>P</mi><mn>1</mn></msup></math>, <math display=\"inline\"><msup><mi>R</mi><mn>2</mn></msup></math>, <math display=\"inline\"><msup><mi>S</mi><mn>3</mn></msup></math>. El orden de los argumentos del relator es un dato lógico: <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>R</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo>,</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> no son, en general, la misma sentencia."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a5"
 },
 {
  "t": "Bost konektore nagusiak",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a6"
 },
 {
  "t": "Sarrerako sailkapen intuitiboa",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a8"
 },
 {
  "t": "Kuantifikatzaile orokorra y existentziala",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mo>∀</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dio dagokion eremuko <math display=\"inline\"><mi>x</mi></math> guztiek <math display=\"inline\"><mi>φ</mi></math> betetzen dutela. <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>φ</mi></mrow></math> formulak dio eremuan badela gutxienez <math display=\"inline\"><mi>x</mi></math> bat <math display=\"inline\"><mi>φ</mi></math> betetzen duena. Kuantifikatzailearen ondoko aldagaia <strong>kuantifikatutako aldagaia</strong> da."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a9"
 },
 {
  "t": "Deskriptorea",
  "blokeak": [
   {
    "mota": "testua",
    "html": "El término <math display=\"inline\"><mrow><mi>ι</mi><mi>x</mi><mi>φ</mi></mrow></math> representa «el <math display=\"inline\"><mi>x</mi></math> que cumple <math display=\"inline\"><mi>φ</mi></math>», cuando el individuo que cumple esa condición es único. Mosterín usa la iota griega y la pone delante de una variable como un cuantificador, pero el resultado no es una fórmula: es un <strong>término</strong>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a10"
 },
 {
  "t": "Formalismoa y hizkuntza formala",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Un formalismo está formado por un conjunto de signos y las reglas para combinarlos. Por sí mismo, ese juego de signos no tiene significado. Cuando a los signos se les asignan objetos, funciones y relaciones, el formalismo se <strong>interpreta</strong>; entonces, el formalismo interpretado actúa como lenguaje formal."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a13"
 },
 {
  "t": "Erabiltzea y aipatzea",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Al usar una fórmula del lenguaje objeto, actuamos dentro del formalismo. Al decir cuántos signos tiene esa fórmula, cómo está construida o qué variables tiene, <strong>mencionamos</strong> la fórmula y actuamos en el metalenguaje. Confundir los niveles puede crear definiciones circulares y ambigüedades."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a14"
 },
 {
  "t": "Aldagaiak",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Las variables forman un conjunto infinito pero recursivamente numerable de signos distintos. Eso significa que a cada variable se le puede asignar un número natural, su <strong>índice</strong>, y a cada número natural una variable. En el metalenguaje usaremos <math display=\"inline\"><mrow><mi>u</mi><mo>,</mo><mi>v</mi><mo>,</mo><mi>w</mi><mo>,</mo><mi>x</mi><mo>,</mo><mi>y</mi><mo>,</mo><mi>z</mi></mrow></math> y, cuando haga falta, subíndices, para mencionar variables arbitrarias."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a15"
 },
 {
  "t": "Zeinu logikoak y berdintza",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a15"
 },
 {
  "t": "Sinaduraren zeinu ez-logikoak",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a16"
 },
 {
  "t": "Alfabetoa",
  "blokeak": [
   {
    "mota": "testua",
    "html": "El <strong>alfabeto</strong> de un formalismo es el conjunto de sus signos comunes y especiales. El alfabeto dice con qué piezas se puede trabajar; aún no dice qué secuencia de piezas es término o fórmula."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a16"
 },
 {
  "t": "Kate, luzera y kateatzea",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a17"
 },
 {
  "t": "Zortzi eraketa-klausulak",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a18"
 },
 {
  "t": "Askatasuna, kasu errekurtsibo guztietan",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a20"
 },
 {
  "t": "Lotura, kasu errekurtsibo guztietan",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a20"
 },
 {
  "t": "Designatzaileak, sententziak y adierazpen irekiak",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a20"
 },
 {
  "t": "Ordezkapenaren lehen kasuak",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a21"
 },
 {
  "t": "Sustitución total bajo un ligador",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a21"
 },
 {
  "t": "De la notación prefija a la notación habitual",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a22"
 },
 {
  "t": "R, MP, MT y DN",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a27"
 },
 {
  "t": "Reglas de los conectores",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a27"
 },
 {
  "t": "Reglas de los cuantificadores",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a27"
 },
 {
  "t": "Reglas de la igualdad y de las descripciones",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a27"
 },
 {
  "t": "Tres tipos de línea",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a28"
 },
 {
  "t": "Las siete reglas de construcción de la semideducción",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a28"
 },
 {
  "t": "Deducción, deducibilidad y teorema lógico",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Una <strong>deducción</strong> de <math display=\"inline\"><mi>α</mi></math> a partir de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es una semideducción a partir de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> cuya primera línea es <math display=\"inline\"><mrow><mi>?</mi><mi>α</mi></mrow></math> y que tiene marcadas todas las demás líneas. Si existe tal deducción, <math display=\"inline\"><mi>α</mi></math> es deducible de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>: <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Una fórmula que tiene una deducción sin premisas es un <strong>teorema lógico</strong>; esto se expresa mediante <math display=\"inline\"><mrow><mo>⊢</mo><mi>α</mi></mrow></math>. Este signo es una relación sintáctica: en este apartado todavía no se afirma ninguna verdad semántica ni consecuencia en todos los modelos."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a28"
 },
 {
  "t": "NCC: de la negación del condicional a la conjunción",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>→</mo><mi>β</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow><mrow><mi>α</mi><mo>∧</mo><mo>¬</mo><mi>β</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (NCC)</mtext></mrow></mrow></math>"
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "TND: tercio excluso",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>α</mi><mo>∨</mo><mo>¬</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (TND; premisarik gabe)</mtext></mrow></mrow></math>"
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "IDA: introducción del disyuntor en el antecedente",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><mi>α</mi><mo>→</mo><mi>β</mi><mspace width=\"1.0em\"></mspace><mi>γ</mi><mo>→</mo><mi>β</mi></mrow><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>α</mi><mo>∨</mo><mi>γ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>→</mo><mi>β</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (IDA)</mtext></mrow></mrow></math>"
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "I: reflexividad de la igualdad",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>t</mi><mo>=</mo><mi>t</mi><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (I; premisarik gabe)</mtext></mrow></mrow></math>"
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "SI: simetría de la igualdad",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (SI)</mtext></mrow></mrow></math>"
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "TI: transitividad de la igualdad",
  "blokeak": [
   {
    "mota": "testua",
    "html": "El esquema básico es <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>. Las otras tres orientaciones, escritas sin usar explícitamente la simetría, también se recogen bajo el nombre TI: <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>3</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>, <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><msub><mi>t</mi><mn>2</mn></msub><mo>=</mo><msub><mi>t</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><msub><mi>t</mi><mn>3</mn></msub><mo>=</mo><msub><mi>t</mi><mn>2</mn></msub></mrow><mrow><msub><mi>t</mi><mn>1</mn></msub><mo>=</mo><msub><mi>t</mi><mn>3</mn></msub></mrow></mfrac></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "NG: negación del generalizador",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Son reglas derivadas en ambos sentidos: <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mo>∃</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∀</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "NP: negación del particularizador",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Son reglas derivadas en ambos sentidos: <math display=\"inline\"><mfrac><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow></mfrac></math> y <math display=\"inline\"><mfrac><mrow><mo>∀</mo><mi>x</mi><mo>¬</mo><mi>α</mi></mrow><mrow><mo>¬</mo><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></mfrac></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a29"
 },
 {
  "t": "GIC: introducción de la conjunción grande",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><msub><mi>α</mi><mn>1</mn></msub><mspace width=\"1.0em\"></mspace><mi>…</mi><mspace width=\"1.0em\"></mspace><msub><mi>α</mi><mi>n</mi></msub></mrow><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>∧</mo><mi>…</mi><mo>∧</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GIC)</mtext></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "Reúne en una sola conjunción las fórmulas <math display=\"inline\"><mrow><msub><mi>α</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>α</mi><mi>n</mi></msub></mrow></math> ya utilizables."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a30"
 },
 {
  "t": "GEG: eliminación del generalizador grande",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>∀</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>t</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>t</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GEG)</mtext></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "La serie de generalizadores se instancia a la vez, poniendo en lugar de cada <math display=\"inline\"><msub><mi>x</mi><mi>i</mi></msub></math> el término correspondiente <math display=\"inline\"><msub><mi>t</mi><mi>i</mi></msub></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a30"
 },
 {
  "t": "GIP: introducción del particularizador grande",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>t</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>t</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow><mrow><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GIP)</mtext></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "A partir de una sola instancia se pasa a una serie de existenciales."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a30"
 },
 {
  "t": "GEP: eliminación del particularizador grande",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mfrac><mrow><mo>∃</mo><msub><mi>x</mi><mn>1</mn></msub><mi>…</mi><msub><mi>x</mi><mi>n</mi></msub><mi>α</mi></mrow><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><msub><mi>u</mi><mn>1</mn></msub><msub><mi>x</mi><mn>1</mn></msub></mfrac><mo>,</mo><mi>…</mi><mo>,</mo><mfrac><msub><mi>u</mi><mi>n</mi></msub><msub><mi>x</mi><mi>n</mi></msub></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></mfrac><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (GEP)</mtext></mrow></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "Las <math display=\"inline\"><mrow><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>u</mi><mi>n</mi></msub></mrow></math> son variables críticas nuevas y distintas entre sí. Esta condición garantiza que los testigos de los existenciales no se identifiquen y que no se añada información previa."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a30"
 },
 {
  "t": "GNP: negación grande del cuantificador",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a30"
 },
 {
  "t": "7.1. Contradictoriedad y consistencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Un conjunto de fórmulas <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es <strong>contradictorio</strong> si y solo si toda fórmula de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es deducible de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Es <strong>consistente</strong> si no es contradictorio; de forma equivalente, existe al menos una fórmula que no es deducible de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>. Decir que una fórmula única es contradictoria o consistente es hablar de su conjunto unitario."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a39"
 },
 {
  "t": "8.1. Maximalmente consistente y ejemplificado",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Un conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> es <strong>maximalmente consistente</strong> si y solo si es consistente y, para toda sentencia <math display=\"inline\"><mi>α</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math>, si <math display=\"inline\"><mi>α</mi></math> no está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>∪</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> es contradictorio."
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> es <strong>ejemplificado</strong> si y solo si, siempre que la sentencia <math display=\"inline\"><mrow><mo>∃</mo><mi>x</mi><mi>α</mi></mrow></math> está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>, existe un designador <math display=\"inline\"><mi>t</mi></math> de <math display=\"inline\"><mi mathvariant=\"script\">ℒ</mi></math> tal que <math display=\"inline\"><mrow><mi>α</mi><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mfrac><mi>t</mi><mi>x</mi></mfrac><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow></mrow></math> también está en <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a40"
 },
 {
  "t": "1.1. Interpretación",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a41"
 },
 {
  "t": "1.3. Cambio del valor de una variable",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a41"
 },
 {
  "t": "2.2. Denotación y satisfacción, por inducción simultánea",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a42"
 },
 {
  "t": "2.3. Verdad en una interpretación",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Si <math display=\"inline\"><mi>α</mi></math> es una sentencia, <math display=\"inline\"><mi>α</mi></math> es verdadera en la interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> si y solo si <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>. Una sentencia no tiene variables libres; por tanto, su valor de verdad no depende de los valores dados inicialmente a las variables."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a42"
 },
 {
  "t": "4.1. Satisfacción de un conjunto de fórmulas",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> satisface el conjunto de fórmulas <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math> para todo <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "Toda interpretación satisface el conjunto vacío. En efecto, la condición &quot;si <math display=\"inline\"><mrow><mi>α</mi><mo>∈</mo><mi>∅</mi></mrow></math>, entonces <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi></mrow></math>&quot; no tiene ningún <math display=\"inline\"><mi>α</mi></math> que cumpla el antecedente; por tanto, es verdadera por vacuidad."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a44"
 },
 {
  "t": "4.2. Satisfacibilidad, validez y consecuencia semántica",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a44"
 },
 {
  "t": "5.1-5.2. Independencia de una sentencia",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Una sentencia <math display=\"inline\"><mi>α</mi></math> es independiente de un conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> si y solo si <math display=\"inline\"><mi>α</mi></math> no es consecuencia semántica de <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math>: <math display=\"inline\"><mrow><mo>¬</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
   },
   {
    "mota": "testua",
    "html": "De forma equivalente, existe una interpretación <math display=\"inline\"><mi mathvariant=\"script\">𝒥</mi></math> tal que <math display=\"inline\"><mrow><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi mathvariant=\"normal\">Γ</mi></mrow></math> pero <math display=\"inline\"><mrow><mo>¬</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"script\">𝒥</mi><mo>⊨</mo><mi>α</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. Esa interpretación es un <strong>contramodelo</strong> o <strong>prueba de independencia</strong> de <math display=\"inline\"><mi>α</mi></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a45"
 },
 {
  "t": "5.4-5.5. Conjunto independiente de sentencias",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a45"
 },
 {
  "t": "7.1. Cálculo semánticamente correcto",
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
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a47"
 },
 {
  "t": "9.1. Cálculo semánticamente completo",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Un cálculo deductivo es <strong>semánticamente completo</strong> si y solo si, para cualquier conjunto de sentencias <math display=\"inline\"><mi mathvariant=\"normal\">Γ</mi></math> y cualquier sentencia <math display=\"inline\"><mi>α</mi></math>,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi mathvariant=\"normal\">Γ</mi><mo>⊨</mo><mi>α</mi><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mi mathvariant=\"normal\">Γ</mi><mo>⊢</mo><mi>α</mi></mrow></math>."
   }
  ],
  "kapitulua": "00aa_02logika",
  "atala": "a49"
 },
 {
  "t": "Matriz",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Una <strong>matriz</strong> <math display=\"inline\"><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></math> es una tabla de números: si <math display=\"block\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtable><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>11</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>12</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>1</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>21</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mn>22</mn></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mn>2</mn><mi>n</mi></mrow></msub></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>m</mi><mn>1</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>m</mi><mn>2</mn></mrow></msub></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><mi>⋯</mi></mtd><mtd columnalign=\"center\" style=\"text-align: center\"><msub><mi>a</mi><mrow><mi>m</mi><mi>n</mi></mrow></msub></mtd></mtr></mtable><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>∈</mo><msub><mi>M</mi><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>m</mi><mo>,</mo><mi>n</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></msub><mi>.</mi></mrow></math> es <math display=\"inline\"><mrow><mi>m</mi><mo>=</mo><mi>n</mi></mrow></math>, es una <strong>matriz cuadrada</strong> y puede tener <strong>determinante</strong> (<math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">|</mo><mi>A</mi><mo stretchy=\"false\" form=\"prefix\">|</mo></mrow></math>)."
   }
  ],
  "kapitulua": "01ma_02matrizeak",
  "atala": "a24"
 },
 {
  "t": "Matriz regular/singular",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Una matriz es <strong>regular</strong> si tiene inversa (y <strong>singular</strong> en caso contrario). El determinante de una matriz regular es siempre <math display=\"inline\"><mrow><mo>≠</mo><mn>0</mn></mrow></math> (indica que sus columnas/filas son linealmente independientes)."
   }
  ],
  "kapitulua": "01ma_02matrizeak",
  "atala": "a25"
 },
 {
  "t": "Aplicación lineal",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sean <math display=\"inline\"><mi>V</mi></math> y <math display=\"inline\"><mi>W</mi></math> espacios vectoriales sobre un mismo cuerpo IK. Una aplicación <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math> es <strong>lineal</strong> si, para cualesquiera <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>,</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi></mrow></math> y <math display=\"inline\"><mrow><mi>k</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math>,"
   },
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo>+</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>k</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>k</mi><mspace width=\"0.167em\"></mspace><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒖</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a2"
 },
 {
  "t": "Matriz de la aplicación",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Dada una aplicación lineal <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>V</mi></mrow></math> y una base <math display=\"inline\"><mrow><mi>B</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, la matriz de <math display=\"inline\"><mi>T</mi></math> en la base <math display=\"inline\"><mi>B</mi></math> es <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>, donde la <strong>columna</strong> <math display=\"inline\"><mi>j</mi></math> son las coordenadas de <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>a</mi><mrow><mi>i</mi><mi>j</mi></mrow></msub><mspace width=\"0.167em\"></mspace><msub><mi mathvariant=\"bold-italic\">𝒆</mi><mi>i</mi></msub><mi>.</mi></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "Entonces las coordenadas de <math display=\"inline\"><mrow><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> son <math display=\"inline\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒙</mi></mrow></math>, si <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒙</mi></math> son las de <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒗</mi></math>: aplicar la aplicación equivale a multiplicar por la matriz."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a2"
 },
 {
  "t": "Núcleo e imagen",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Dada una aplicación lineal <math display=\"inline\"><mrow><mi>T</mi><mo>:</mo><mi>V</mi><mo>→</mo><mi>W</mi></mrow></math>:"
   },
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi><mo>:</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn mathvariant=\"bold\">𝟎</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>T</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>:</mo><mi mathvariant=\"bold-italic\">𝒗</mi><mo>∈</mo><mi>V</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">ker</mi><mo>&#8289;</mo></mrow><mi>T</mi></mrow></math> es un subespacio de <math display=\"inline\"><mi>V</mi></math>, y <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> lo es de <math display=\"inline\"><mi>W</mi></math>. La dimensión de <math display=\"inline\"><mrow><mrow><mtext mathvariant=\"normal\">im </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"0.167em\"></mspace><mi>T</mi></mrow></math> se llama <strong>rango</strong> de <math display=\"inline\"><mi>T</mi></math>: <math display=\"inline\"><mrow><mi>h</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>T</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a2"
 },
 {
  "t": "Autovalores y autovectores",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Dada una matriz cuadrada <math display=\"inline\"><mi>A</mi></math> de orden <math display=\"inline\"><mi>n</mi></math>, <math display=\"inline\"><mrow><mi>λ</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> IK</mtext></mrow></mrow></math> es un <strong>autovalor</strong> si existe un vector <math display=\"inline\"><mrow><mi mathvariant=\"bold-italic\">𝒖</mi><mo>≠</mo><mn mathvariant=\"bold\">𝟎</mn></mrow></math> tal que"
   },
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mi>A</mi><mi mathvariant=\"bold-italic\">𝒖</mi><mo>=</mo><mi>λ</mi><mi mathvariant=\"bold-italic\">𝒖</mi></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "Cada uno de esos <math display=\"inline\"><mi mathvariant=\"bold-italic\">𝒖</mi></math> es un <strong>autovector</strong> asociado a <math display=\"inline\"><mi>λ</mi></math>."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a3"
 },
 {
  "t": "Matriz diagonalizable",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mi>A</mi></math> es <strong>diagonalizable</strong> si existe una matriz invertible <math display=\"inline\"><mi>P</mi></math> tal que"
   },
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mi>D</mi><mo>=</mo><msup><mi>P</mi><mrow><mi>−</mi><mn>1</mn></mrow></msup><mi>A</mi><mi>P</mi></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "es diagonal. Entonces la diagonal de <math display=\"inline\"><mi>D</mi></math> está formada por los autovalores, y las columnas de <math display=\"inline\"><mi>P</mi></math> son los autovectores correspondientes."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a4"
 },
 {
  "t": "Subespacio f-invariante",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Un subespacio <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><mi>V</mi></mrow></math> es <strong><math display=\"inline\"><mi>f</mi></math>-invariante</strong> respecto de <math display=\"inline\"><mrow><mi>f</mi><mo>∈</mo><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> End</mtext></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>V</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> si <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>W</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>⊆</mo><mi>W</mi></mrow></math>."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a23"
 },
 {
  "t": "Matriz asociada",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Dadas <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><mi>E</mi><mo>→</mo><mi>F</mi></mrow></math> y <math display=\"inline\"><mrow><msub><mi>β</mi><mn>1</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, siendo <math display=\"inline\"><mrow><msub><mi>β</mi><mn>2</mn></msub><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mn>1</mn><mo>′</mo></msup></msub><mo>,</mo><mi>…</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> bases, las <strong>columnas</strong> de <math display=\"inline\"><mrow><msub><mi>M</mi><mrow><msub><mi>β</mi><mn>1</mn></msub><msub><mi>β</mi><mn>2</mn></msub></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> son las coordenadas de las imágenes de los vectores de <math display=\"inline\"><msub><mi>β</mi><mn>1</mn></msub></math> en <math display=\"inline\"><msub><mi>β</mi><mn>2</mn></msub></math>: <math display=\"block\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><munder><mo>∑</mo><mi>i</mi></munder><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>M</mi><mrow><msub><mi>β</mi><mn>1</mn></msub><msub><mi>β</mi><mn>2</mn></msub></mrow></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mrow><mi>i</mi><mi>j</mi></mrow></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><msup><mi>i</mi><mo>′</mo></msup></msub><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a36"
 },
 {
  "t": "Matrices equivalentes",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Dos matrices son <strong>equivalentes</strong> si son matrices asociadas de una misma aplicación lineal respecto de bases distintas. Esto ocurre cuando tienen el <strong>mismo rango</strong>, es decir, cuando tienen la misma forma canónica <math display=\"inline\"><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>I</mi><mi>r</mi></msub><mi>/</mi><mn>0</mn><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></math>. Dado <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">heina</mtext><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mrow><mtext mathvariant=\"normal\">Im </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, si <math display=\"inline\"><mrow><mi>n</mi><mo>=</mo><msup><mi>n</mi><mo>′</mo></msup></mrow></math>, entonces <math display=\"inline\"><mi>f</mi></math> y <math display=\"inline\"><msup><mi>f</mi><mo>′</mo></msup></math> tienen la misma forma de la matriz asociada, y <math display=\"inline\"><mi>A</mi></math> y <math display=\"inline\"><mi>B</mi></math> son equivalentes."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a54"
 },
 {
  "t": "Suma de subespacios",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>U</mi><mo>+</mo><mi>W</mi></mrow></math> es el subespacio vectorial de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mn>4</mn></msup></math> <strong>más pequeño</strong> que contiene a <math display=\"inline\"><mrow><mi>U</mi><mo>∪</mo><mi>W</mi></mrow></math>. Esta definición es necesaria porque, en general, la <strong>unión</strong> (<math display=\"inline\"><mrow><mi>U</mi><mo>∪</mo><mi>W</mi></mrow></math>) de dos subespacios no es un espacio vectorial (no es cerrada para la suma)."
   }
  ],
  "kapitulua": "01ma_03diagonalizazioa",
  "atala": "a57"
 },
 {
  "t": "Producto escalar",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>. El <strong>producto escalar</strong> es la siguiente función: <math display=\"block\"><mrow><mi>φ</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi>φ</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
   },
   {
    "mota": "testua",
    "html": "<em class=\"j-nab\">Se multiplican las componentes correspondientes y se suman esos productos:</em>"
   },
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>u</mi><mn>1</mn></msub><mo>,</mo><msub><mi>u</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mspace width=\"1.0em\"></mspace><mo>⇒</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><msub><mi>u</mi><mn>1</mn></msub><msub><mi>v</mi><mn>1</mn></msub><mo>+</mo><msub><mi>u</mi><mn>2</mn></msub><msub><mi>v</mi><mrow><mn>2</mn><mi>.</mi></mrow></msub></mrow></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a3"
 },
 {
  "t": "Espacio euclídeo",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math> dotado de un producto escalar (<strong>espacio euclídeo</strong>). Entonces se cumplen las siguientes propiedades, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math> y <math display=\"inline\"><mrow><mo>∀</mo><mi>λ</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi></mrow></math>: <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (simetria) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>2</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>z</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (batu-linealtasuna) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>3</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>λ</mi><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>λ</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (homogeneotasuna) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mn>4</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (positiboki definitua) </mtext><mspace width=\"0.333em\"></mspace></mrow></mtd></mtr></mtable></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a4"
 },
 {
  "t": "Forma bilineal",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sea <math display=\"inline\"><mi>E</mi></math> un espacio vectorial sobre <math display=\"inline\"><mi>K</mi></math> (<math display=\"inline\"><mi>K</mi></math> = cuerpo de escalares). Una <strong>forma bilineal</strong> es una función <strong>lineal</strong> en cada argumento: <math display=\"block\"><mrow><mi>b</mi><mo>:</mo><mi>E</mi><mo>×</mo><mi>E</mi><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>↦</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mrow></math> <math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mi>λ</mi><mn>1</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><mo>=</mo><msub><mi>λ</mi><mn>1</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>+</mo><msub><mi>λ</mi><mn>2</mn></msub><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><msub><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a6"
 },
 {
  "t": "Forma cuadrática",
  "blokeak": [
   {
    "mota": "testua",
    "html": "A una forma bilineal <math display=\"inline\"><mi>b</mi></math> se le asocia una <strong>forma cuadrática</strong>: <math display=\"block\"><mrow><msub><mi>Q</mi><mi>b</mi></msub><mo>:</mo><mi>E</mi><mo>→</mo><mi>K</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>↦</mo><msub><mi>Q</mi><mi>b</mi></msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a7"
 },
 {
  "t": "Forma bilineal simétrica",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Una forma bilineal <math display=\"inline\"><mi>b</mi></math> es <strong>simétrica</strong> si <math display=\"inline\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>. En ese caso, <math display=\"inline\"><msub><mi>Q</mi><mi>b</mi></msub></math> es la <strong>forma polar</strong> asociada, y se recupera por polarización: <math display=\"block\"><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mfrac><mn>1</mn><mn>2</mn></mfrac><mrow><mo stretchy=\"true\" form=\"prefix\">[</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>+</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>−</mo><mi>Q</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"true\" form=\"postfix\">]</mo></mrow><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a9"
 },
 {
  "t": "b-ortogonalidad y b-isotropía",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sea <math display=\"inline\"><mi>b</mi></math> una forma bilineal simétrica en <math display=\"inline\"><mi>E</mi></math>."
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> y <math display=\"inline\"><mover><mi>y</mi><mo accent=\"true\">→</mo></mover></math> son <strong>b-ortogonales</strong> si <math display=\"inline\"><mrow><mo>⇔</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>.",
     "<math display=\"inline\"><mover><mi>x</mi><mo accent=\"true\">→</mo></mover></math> es <strong>b-isótropo</strong> si <math display=\"inline\"><mrow><mo>⇔</mo><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn></mrow></math>."
    ]
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a9"
 },
 {
  "t": "Procedimiento (b-ortogonalización)",
  "blokeak": [
   {
    "mota": "zerrenda",
    "ordenatua": true,
    "elementuak": [
     "Tomar un vector <strong>no isótropo</strong> de <math display=\"inline\"><mi>E</mi></math>.",
     "Elegir el siguiente <strong>b-ortogonal</strong> a los anteriores y, si es posible, no isótropo (resolviendo el complemento ortogonal de los anteriores)."
    ]
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a12"
 },
 {
  "t": "Normalización",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>s</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mi>s</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>r</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><mfrac><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><msqrt><mrow><mi>−</mi><mi>b</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt></mfrac></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right; padding-right: 0\"><mi>i</mi><mo>=</mo><mi>r</mi><mo>+</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>:</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"left\" style=\"text-align: left; padding-left: 0\"><msub><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub><mo>=</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>i</mi></msub></mtd></mtr></mtable></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a14"
 },
 {
  "t": "Producto escalar y norma euclídea",
  "blokeak": [
   {
    "mota": "testua",
    "html": "El <strong>producto escalar</strong> es una forma bilineal simétrica <strong>definida positiva</strong> sobre <math display=\"inline\"><mi>E</mi></math> (espacio vectorial sobre <math display=\"inline\"><mi mathvariant=\"double-struck\">ℝ</mi></math>). Como <math display=\"inline\"><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>&gt;</mo><mn>0</mn></mrow></math> (<math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>≠</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover></mrow></math>), la <strong>norma euclídea</strong> se define así: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><msqrt><mrow><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></msqrt><mspace width=\"1.0em\"></mspace><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mtext mathvariant=\"normal\">bektoreak neurtzeko modu bat</mtext><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a31"
 },
 {
  "t": "Gram–Schmidt",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mtable><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>21</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>21</mn></msub><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>31</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>+</mo><msub><mi>λ</mi><mn>32</mn></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mtable><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>31</mn></msub></mtd></mtr><mtr><mtd columnalign=\"left\" style=\"text-align: left\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>3</mn></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mo>→</mo><msub><mi>λ</mi><mn>32</mn></msub></mtd></mtr></mtable></mrow><mo>,</mo></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mi>⋮</mi></mtd></mtr><mtr><mtd columnalign=\"right\" style=\"text-align: right\"><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub></mtd><mtd columnalign=\"left\" style=\"text-align: left\"><mo>=</mo><msub><mover><mi>e</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo>+</mo><munderover><mo>∑</mo><mrow><mi>j</mi><mo>=</mo><mn>1</mn></mrow><mrow><mi>n</mi><mo>−</mo><mn>1</mn></mrow></munderover><msub><mi>λ</mi><mrow><mi>n</mi><mi>j</mi></mrow></msub><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>,</mo><mspace width=\"1.0em\"></mspace></mtd><mtd columnalign=\"right\" style=\"text-align: right\"><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>j</mi></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>j</mi><mo>=</mo><mn>1</mn><mo>,</mo><mi>…</mi><mo>,</mo><mi>n</mi><mo>−</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mtd></mtr></mtable></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a34"
 },
 {
  "t": "Autoadjuntos e isometrías",
  "blokeak": [
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "I) <strong>Autoadjuntos</strong> (simétricos): <math display=\"inline\"><mrow><mi>f</mi><mo>=</mo><msup><mi>f</mi><mo>*</mo></msup></mrow></math>.",
     "II) <strong>Isometrías</strong> (ortogonales): <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">∥</mo><mo>=</mo><mo stretchy=\"false\" form=\"postfix\">∥</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">∥</mo></mrow></math> <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi></mrow></math>, es decir <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>. En base ortonormal: <math display=\"inline\"><mrow><msup><mi>x</mi><mi>T</mi></msup><mi>I</mi><mi>x</mi><mo>=</mo><msup><mi>x</mi><mi>T</mi></msup><msup><mi>A</mi><mi>T</mi></msup><mi>I</mi><mi>A</mi><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>⇒</mo><mi>I</mi><mo>=</mo><msup><mi>A</mi><mi>T</mi></msup><mi>A</mi></mrow></math> (matriz ortogonal)."
    ]
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a37"
 },
 {
  "t": "Isometría",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msub><mi>V</mi><mn>1</mn></msub><mo>→</mo><msub><mi>V</mi><mn>2</mn></msub></mrow></math> es una <strong>isometría</strong> si conserva el producto escalar: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>1</mn></msub><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>,</mo><mi>f</mi><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>y</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msub><mi>V</mi><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a40"
 },
 {
  "t": "Complemento ortogonal (S⊥)",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>Complemento ortogonal</strong> del subespacio <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><mi>E</mi><mo>,</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>⋅</mi><mo>,</mo><mi>⋅</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math>: <math display=\"block\"><mrow><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>E</mi><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>x</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn><mspace width=\"1.0em\"></mspace><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> Se cumple <math display=\"inline\"><mrow><mi>S</mi><mo>⨁</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>=</mo><mi>E</mi></mrow></math>, y <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>S</mi></mrow></math>, <math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><msup><mi>S</mi><mo>⟂</mo></msup><mo>:</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>u</mi><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mn>0</mn></mrow></math>."
   }
  ],
  "kapitulua": "01ma_04algebra2013",
  "atala": "a50"
 },
 {
  "t": "Subespacio afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Un conjunto <math display=\"inline\"><mrow><mi>S</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> (no vacío) es un <strong>subespacio afín</strong> si existen <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> y un subespacio vectorial <math display=\"inline\"><mrow><mi>W</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> tales que <math display=\"block\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo>+</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>:</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>q</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a8"
 },
 {
  "t": "Dirección y dimensión",
  "blokeak": [
   {
    "mota": "testua",
    "html": "En un subespacio afín <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mi>W</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, el subespacio vectorial <math display=\"inline\"><mi>W</mi></math> es la <strong>dirección de <math display=\"inline\"><mi>S</mi></math></strong> (cualquier descripción de <math display=\"inline\"><mi>S</mi></math> tiene la misma dirección). <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>S</mi></mrow></math> es (<math display=\"inline\"><mrow><mover><mrow><mi>p</mi><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo>∈</mo><mi>W</mi></mrow></math>). <strong>Dimensión:</strong> <math display=\"block\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>W</mi><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a9"
 },
 {
  "t": "Tipos según la dimensión",
  "blokeak": [
   {
    "mota": "testua",
    "html": "La dimensión del subespacio afín <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math> es <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>:"
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>0</mn></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mn>0</mn><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> — <strong>punto</strong> (conjunto de un único elemento).",
     "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>1</mn></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> — <strong>recta afín</strong> (copia de una recta vectorial).",
     "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mn>2</mn></mrow></math>: <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>1</mn></msub><mo>,</mo><msub><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math> — <strong>plano afín</strong> (copia de un plano vectorial).",
     "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>n</mi><mo>−</mo><mn>1</mn></mrow></math>: <strong>hiperplano afín</strong> (copia de un hiperplano vectorial).",
     "<math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mi>S</mi><mo>=</mo><mi>n</mi></mrow></math>: <math display=\"inline\"><mrow><mi>S</mi><mo>=</mo><mi>p</mi><mo>+</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover></mrow></math>, <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">dim</mi><mo>&#8289;</mo></mrow><mo>=</mo><mi>n</mi></mrow></math> — <strong>todo el espacio</strong> (<math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>)."
    ]
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a10"
 },
 {
  "t": "Paralelismo",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Los subespacios afines <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>,</mo><msub><mi>S</mi><mn>2</mn></msub><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> son <strong>paralelos</strong> si la dirección de uno de ellos está contenida en la del otro: <math display=\"block\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> edo </mtext><mspace width=\"0.333em\"></mspace></mrow><mspace width=\"1.0em\"></mspace><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub><mo>⊆</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mrow><mn>1</mn><mi>.</mi></mrow></msub></mrow></math>"
   },
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<math display=\"inline\"><mrow><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>1</mn></msub><mo>=</mo><msub><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mn>2</mn></msub></mrow></math> (misma dimensión): <strong>paralelos puros</strong>.",
     "Inclusión estricta (uno dentro del otro): <strong>paralelos (no estrictos)</strong>; si se cortan, <math display=\"inline\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>⊆</mo><msub><mi>S</mi><mn>2</mn></msub></mrow></math>."
    ]
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a14"
 },
 {
  "t": "Envoltura afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<strong>Envoltura afín</strong> de un subconjunto <math display=\"inline\"><mrow><mi>A</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><msub><mi>p</mi><mn>0</mn></msub><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>q</mi><mo>∈</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>,</mo></mrow></math> <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><mi>A</mi></mrow></math> con cualquier punto."
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a21"
 },
 {
  "t": "Envolvente afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sea <math display=\"inline\"><mrow><mi>A</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un subconjunto cualquiera. La <strong>envolvente afín</strong> de <math display=\"inline\"><mi>A</mi></math> es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, el <strong>menor subespacio afín</strong> que contiene a <math display=\"inline\"><mi>A</mi></math>, y puede expresarse así (con <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><mi>A</mi></mrow></math> cualquiera): <math display=\"block\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mi>A</mi><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mo>=</mo><mi>p</mi><mo>+</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>q</mi><mo>∈</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math> Su dirección es <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">⟨</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo>:</mo><mi>q</mi><mo>∈</mo><mi>A</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo stretchy=\"false\" form=\"postfix\">⟩</mo></mrow></math>, y no depende del <math display=\"inline\"><mi>p</mi></math> elegido."
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a38"
 },
 {
  "t": "Suma afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sean <math display=\"inline\"><msub><mi>S</mi><mn>1</mn></msub></math> y <math display=\"inline\"><msub><mi>S</mi><mn>2</mn></msub></math> subespacios afines de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>. Su <strong>suma afín</strong> es el <strong>menor</strong> subespacio afín que contiene a su unión: <math display=\"block\"><mrow><msub><mi>S</mi><mn>1</mn></msub><mo>+</mo><msub><mi>S</mi><mn>2</mn></msub><mo>≔</mo><mo stretchy=\"false\" form=\"prefix\">⟨</mo><msub><mi>S</mi><mn>1</mn></msub><mo>∪</mo><msub><mi>S</mi><mn>2</mn></msub><mo stretchy=\"false\" form=\"postfix\">⟩</mo><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a39"
 },
 {
  "t": "Sistema de referencia afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sean <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un punto y <math display=\"inline\"><mrow><mi>β</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mover><msub><mi>v</mi><mn>1</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><msub><mi>v</mi><mn>2</mn></msub><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><msub><mi>v</mi><mi>n</mi></msub><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math> una base de la dirección. Al par <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> se le llama <strong>sistema de referencia afín</strong> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math>, y al punto <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> el <strong>origen</strong> del sistema. Las <strong>coordenadas afines</strong> de cada punto provienen de la descomposición <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>x</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><msubsup><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></msubsup><msub><mi>x</mi><mi>i</mi></msub><mover><msub><mi>v</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover></mrow></math>."
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a43"
 },
 {
  "t": "Independencia afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Los puntos <math display=\"inline\"><mrow><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><msub><mi>p</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>p</mi><mi>n</mi></msub><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> son <strong>afínmente independientes</strong> si y solo si los vectores <math display=\"inline\"><mrow><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>1</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mn>2</mn></msub></mrow><mo accent=\"true\">→</mo></mover><mo>,</mo><mi>…</mi><mo>,</mo><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><msub><mi>p</mi><mi>n</mi></msub></mrow><mo accent=\"true\">→</mo></mover></mrow></math> son <strong>linealmente independientes</strong>."
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a44"
 },
 {
  "t": "Coordenadas afines",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sea <math display=\"inline\"><mrow><mi>E</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>p</mi><mn>0</mn></msub><mo>,</mo><mi>β</mi><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow></mrow></math> un sistema de referencia afín de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> y <math display=\"inline\"><mrow><mi>p</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> un punto. Las <strong>coordenadas de <math display=\"inline\"><mi>p</mi></math> respecto a <math display=\"inline\"><mi>E</mi></math></strong> son las coordenadas del vector <math display=\"inline\"><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover></math> respecto a <math display=\"inline\"><mi>β</mi></math>: <math display=\"block\"><mrow><mi>p</mi><mo>=</mo><msub><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msub><mi>x</mi><mn>1</mn></msub><mo>,</mo><mi>…</mi><mo>,</mo><msub><mi>x</mi><mi>n</mi></msub><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mi>E</mi></msub><mspace width=\"1.0em\"></mspace><mo>⇔</mo><mspace width=\"1.0em\"></mspace><mover><mrow><msub><mi>p</mi><mn>0</mn></msub><mi>p</mi></mrow><mo accent=\"true\">→</mo></mover><mo>=</mo><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msub><mi>x</mi><mi>i</mi></msub><mover><msub><mi>v</mi><mi>i</mi></msub><mo accent=\"true\">→</mo></mover><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a47"
 },
 {
  "t": "Componentes del cambio de coordenadas",
  "blokeak": [
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<math display=\"inline\"><mrow><mi>P</mi><mo>=</mo><msubsup><mi>M</mi><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover><mi>β</mi></msubsup></mrow></math> es la <strong>matriz de cambio de base</strong>: sus columnas son los vectores de <math display=\"inline\"><mi>β</mi></math>, expresados en coordenadas de <math display=\"inline\"><mover><mi>β</mi><mo accent=\"true\">¯</mo></mover></math>.",
     "<math display=\"inline\"><mi>Q</mi></math> = coordenadas de <math display=\"inline\"><msub><mi>p</mi><mn>0</mn></msub></math> (el origen de <math display=\"inline\"><mi>E</mi></math>) en el sistema <math display=\"inline\"><msup><mi>E</mi><mo>′</mo></msup></math>."
    ]
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a48"
 },
 {
  "t": "Aplicación afín (9.1)",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Sean <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> y <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></math> espacios afines, y <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>m</mi></msup></mrow></math> una aplicación. Con <math display=\"inline\"><mrow><mi>X</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> (matriz columna de <math display=\"inline\"><mi>x</mi></math>) y <math display=\"inline\"><mrow><mi>Y</mi><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>X</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, <math display=\"inline\"><mi>f</mi></math> es una <strong>aplicación afín</strong> si existen <math display=\"inline\"><mrow><mi>A</mi><mo>∈</mo><msub><mi>M</mi><mrow><mi>m</mi><mo>×</mo><mi>n</mi></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> y <math display=\"inline\"><mrow><mi>B</mi><mo>∈</mo><msub><mi>M</mi><mrow><mi>m</mi><mo>×</mo><mn>1</mn></mrow></msub><mo stretchy=\"false\" form=\"prefix\">(</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tales que, para todo <math display=\"inline\"><mrow><mi>X</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>, <math display=\"block\"><mrow><mi>Y</mi><mo>=</mo><mi>A</mi><mi>X</mi><mo>+</mo><mi>B</mi><mi>.</mi></mrow></math> (<math display=\"inline\"><mi>A</mi></math> parte lineal, <math display=\"inline\"><mi>B</mi></math> traslación.)"
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a65"
 },
 {
  "t": "Transformación afín",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Si <math display=\"inline\"><mrow><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math> es una aplicación afín <strong>biyectiva</strong>, se llama <strong>transformación afín</strong>. <math display=\"inline\"><mrow><mtext mathvariant=\"normal\">TA</mtext><mrow><mo stretchy=\"true\" form=\"prefix\">(</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo stretchy=\"true\" form=\"postfix\">)</mo></mrow><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>f</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>:</mo><mi>f</mi><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> transformazio afina </mtext><mspace width=\"0.333em\"></mspace></mrow><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   }
  ],
  "kapitulua": "01ma_05geometria1",
  "atala": "a72"
 },
 {
  "t": "Distancia euclídea",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mi>d</mi><mo>:</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>×</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup><mo>→</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>,</mo><mspace width=\"1.0em\"></mspace><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">∥</mo><mover><mrow><mi>p</mi><mi>q</mi></mrow><mo accent=\"true\">→</mo></mover><mo stretchy=\"true\" form=\"postfix\">∥</mo></mrow><mo>,</mo></mrow></math> es decir, la norma (módulo) del vector que une los dos puntos. Propiedades (<math display=\"inline\"><mrow><mi>p</mi><mo>,</mo><mi>q</mi><mo>,</mo><mi>r</mi><mo>∈</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>): <math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (i) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≥</mo><mn>0</mn><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (ii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn><mo>⇔</mo><mi>p</mi><mo>=</mo><mi>q</mi><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iii) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>q</mi><mo>,</mo><mi>p</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>;</mo><mspace width=\"1.0em\"></mspace><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> (iv) </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≤</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>r</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>+</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>r</mi><mo>,</mo><mi>q</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01ma_06geometria2",
  "atala": "a2"
 },
 {
  "t": "Perpendicularidad",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Los subespacios afines <math display=\"inline\"><mi>S</mi></math> y <math display=\"inline\"><mi>T</mi></math> de <math display=\"inline\"><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></math> son <strong>perpendiculares</strong> si sus direcciones <math display=\"inline\"><mrow><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover></mrow></math> son ortogonales (<math display=\"inline\"><mrow><mo>∀</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>S</mi><mo accent=\"true\">¯</mo></mover><mo>,</mo><mspace width=\"0.167em\"></mspace><mo>∀</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>∈</mo><mover><mi>T</mi><mo accent=\"true\">¯</mo></mover><mo>:</mo><mover><mi>v</mi><mo accent=\"true\">→</mo></mover><mo>⋅</mo><mover><mi>w</mi><mo accent=\"true\">→</mo></mover><mo>=</mo><mn>0</mn></mrow></math>) y se cortan."
   }
  ],
  "kapitulua": "01ma_06geometria2",
  "atala": "a4"
 },
 {
  "t": "Distancia (def. 9.6)",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Distancia entre dos subconjuntos <math display=\"inline\"><mrow><mi>A</mi><mo>,</mo><mi>B</mi><mo>⊆</mo><msup><mi mathvariant=\"double-struck\">ℝ</mi><mi>n</mi></msup></mrow></math>: <math display=\"block\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>A</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>a</mi><mo>∈</mo><mi>A</mi><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mi>.</mi></mrow></math> En particular, cuando <math display=\"inline\"><mrow><mi>A</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>p</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>, <math display=\"inline\"><mrow><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>B</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>≔</mo><mrow><mi mathvariant=\"normal\">inf</mi><mo>&#8289;</mo></mrow><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>d</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>p</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>:</mo><mi>b</mi><mo>∈</mo><mi>B</mi><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow></mrow></math>."
   }
  ],
  "kapitulua": "01ma_06geometria2",
  "atala": "a10"
 },
 {
  "t": "Condicionalmente convergente",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Si la serie de los valores absolutos es <strong>divergente</strong> y la dada es <strong>convergente</strong>, se dice que la serie dada es <strong>condicionalmente convergente</strong>."
   }
  ],
  "kapitulua": "01mc_01deribatuak",
  "atala": "a20"
 },
 {
  "t": "Par e impar",
  "blokeak": [
   {
    "mota": "zerrenda",
    "ordenatua": false,
    "elementuak": [
     "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <strong>par</strong> (simétrica respecto a <math display=\"inline\"><mrow><mi>O</mi><mi>Y</mi></mrow></math>). Ej. <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">cos</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>.",
     "<math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>−</mi><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>−</mi><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>x</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>: <strong>impar</strong> (simétrica respecto al origen). Ej. <math display=\"inline\"><mrow><mrow><mi mathvariant=\"normal\">sin</mi><mo>&#8289;</mo></mrow><mi>x</mi></mrow></math>."
    ]
   }
  ],
  "kapitulua": "01mc_02funtzioak",
  "atala": "a48"
 },
 {
  "t": "Teorema de Rolle",
  "blokeak": [
   {
    "mota": "testua",
    "html": "Si <math display=\"inline\"><mi>f</mi></math> es <strong>continua</strong> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">[</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">]</mo></mrow></math>, <strong>derivable</strong> en <math display=\"inline\"><mrow><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, y <math display=\"inline\"><mrow><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mi>f</mi><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math>, entonces existe <math display=\"inline\"><mrow><mo>∃</mo><mi>c</mi><mo>∈</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo stretchy=\"false\" form=\"postfix\">)</mo></mrow></math> tal que <math display=\"inline\"><mrow><msup><mi>f</mi><mo>′</mo></msup><mo stretchy=\"false\" form=\"prefix\">(</mo><mi>c</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>=</mo><mn>0</mn></mrow></math>."
   }
  ],
  "kapitulua": "01mc_02funtzioak",
  "atala": "a55"
 },
 {
  "t": "Dominio",
  "blokeak": [
   {
    "mota": "testua",
    "html": "<math display=\"block\"><mrow><mrow><mspace width=\"0.333em\"></mspace><mtext mathvariant=\"normal\"> Dom </mtext><mspace width=\"0.333em\"></mspace></mrow><mi>f</mi><mo>=</mo><mrow><mo stretchy=\"true\" form=\"prefix\">{</mo><mi>x</mi><mo>∈</mo><mi mathvariant=\"double-struck\">ℝ</mi><mo>:</mo><mi>x</mi><mo>&gt;</mo><mn>0</mn><mo>,</mo><mspace width=\"0.222em\"></mspace><mi>x</mi><mo>≠</mo><mn>1</mn><mo stretchy=\"true\" form=\"postfix\">}</mo></mrow><mo>=</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>0</mn><mo>,</mo><mn>1</mn><mo stretchy=\"false\" form=\"postfix\">)</mo><mo>∪</mo><mo stretchy=\"false\" form=\"prefix\">(</mo><mn>1</mn><mo>,</mo><mi>+</mi><mi>∞</mi><mo stretchy=\"false\" form=\"postfix\">)</mo><mi>.</mi></mrow></math>"
   }
  ],
  "kapitulua": "01mc_02funtzioak",
  "atala": "a57"
 }
];
